
import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { DarkModeContext } from '@/Context/DarkModeContext';

const ContactForm = () =>
{

    const {darkMode} = useContext(DarkModeContext);


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [sucessMsg, setSucessMsg] = useState("");
    const [displaySucessMsg, setDisplaySucessMsg] = useState(false);


    const emailValidation = () =>
    {
        return String(email)
            .toLocaleLowerCase()
        .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    }


    const handleSand = (e) =>
    {
        e.preventDefault()
        if (username === "") {
            setErrMsg('Username is required')
        } else if (subject === "")
        {
            setErrMsg('Email is required')
        }else if (message === "")
        {
            setErrMsg('Subject is required')
        }else if (email === "")
        {
            setErrMsg('Message is required')
        } else
        {

            setErrMsg('')
            setUsername('')
            setEmail('')
            setSubject('')
            setMessage('')
            // console.log(username,email,subject,message);
        }
    }

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    handleSand(e)

    emailjs.sendForm('service_45v7625', 'template_ltak7d9', form.current, 'Fjj8ZshVmp4sxgmkF')
      .then((result) => {

            setSucessMsg("Your Message sent Successfully");
            setDisplaySucessMsg(true)
            setTimeout(() => {
                setDisplaySucessMsg(false)
            }, 2000);


          console.log(result.text),
          console.log('Message Sent');
      }, (error) => {
        setErrMsg('Fail Sending')
          console.log(error.text);
          console.log('Message Failed');
      });
  };


  return (

    <DarkModeContextProvider>
      <form className='w-full flex flex-col gap-6 py-2' ref={form} onSubmit={sendEmail}>
          {errMsg && (
              <p className='py-3 text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
          )}
          {displaySucessMsg && (
            <p className='py-3 shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{sucessMsg}</p>
        )}

              <div className='flex flex-col gap-4'>
                  <p className={`${darkMode ? "text-lightText" : "text-darkText"} bold text-sm uppercase tracking-wide`}>Your Name</p>
                  <input type='text' name='user_name' className={`${errMsg === "Username is required" && username.length === 0 ? "outline-designColor" : "outline=none"} ${!darkMode ? "bg-lightBg text-darkText" : "bg-grayBg text-lightText"} px-3 py-2 rounded-[20px] shadow-md shadow-purple-900  contactInput`} onChange={(e) =>setUsername(e.target.value)} value={username} />
              </div>

          <div className='flex flex-col gap-4'>
            <p className={` ${darkMode ? "text-lightText" : "text-darkText"} bold text-sm  uppercase tracking-wide`}>Your Email</p>
            <input type='email' name='user_email' className={`${errMsg === "Email is required" && email.length === 0 ? "outline-designColor" : "outline=none"} ${!darkMode ? "bg-lightBg text-darkText" : "bg-grayBg text-lightText"} w-[100%] px-3 py-2 rounded-[20px] shadow-md shadow-purple-900   contactInput`} onChange={(e) =>setEmail(e.target.value)} value={email} />
        </div>
        <div className='flex flex-col gap-4'>
            <p className={` ${darkMode ? "text-lightText" : "text-darkText"} bold text-sm  uppercase tracking-wide`}>Subject</p>
            <input type='text' name='user_subject' className={`${errMsg === "Subject is required'" && subject.length === 0 ? "outline-designColor" : "outline=none"} ${!darkMode ? "bg-lightBg text-darkText" : "bg-grayBg text-lightText"} px-3 py-2 rounded-[20px] shadow-md shadow-purple-900   contactInput`} onChange={(e) =>setSubject(e.target.value)} value={subject} />
          </div>
          <div className='flex flex-col gap-4'>
            <p className={` ${darkMode ? "text-lightText" : "text-darkText"} bold text-sm  uppercase tracking-wide`}>Messagel</p>
            <textarea cols='30' rows="9" name='message' className={`${errMsg === "Message is required" && message.length === 0 ? "outline-designColor" : "outline=none"} ${!darkMode ? "bg-lightBg text-darkText" : "bg-grayBg text-lightText"} px-3 resize-none rounded-[20px] shadow-md shadow-purple-900   contactInput`} onChange={(e) =>setMessage(e.target.value)} value={message}></textarea>
        </div>
          <div>
              <button type='submit' value='Send' className={` ${darkMode ? "text-lightText bg-purple-900" : "text-lightBg bg-purple-500"} font-bold  shadow-xl  w-full h-12 bg-[#141518] rounded-lg text-base  tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:font-bold hover:scale-105 border-transparent`}>Send Message</button>
          </div>
          {errMsg && (
            <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
          )}
          {displaySucessMsg && (
            <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce'>{sucessMsg}</p>
        )}
      </form>
      </DarkModeContextProvider>
  )
}

export default ContactForm
