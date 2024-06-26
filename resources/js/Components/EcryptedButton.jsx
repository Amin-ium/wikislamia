import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const EncryptedButton = ({targetText}) => {
  return (
    <>
      <EncryptButton targetText={targetText} />
    </>
  );
};



const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({targetText}) => {
  const intervalRef = useRef(null);
console.log(targetText);
  const [text, setText] = useState(targetText);
//   if (document.location.pathname === '/register') {
//     const [text, setText] = useState(targetText2);
//     } else if (document.location.pathname === '/login') {
//     const [text, setText] = useState(targetText2);
//     }

//   const [text, setText] = useState(targetText);



  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(targetText);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-gradient-to-r from-[#57248d] to-[#00081F] px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300 w-full"
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        <FiLock />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity "
      />
    </motion.button>
  );
};

export default EncryptedButton;
