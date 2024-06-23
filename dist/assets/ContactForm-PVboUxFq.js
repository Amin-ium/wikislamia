import { jsx, jsxs } from "react/jsx-runtime";
import { useContext, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
const ContactForm = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [sucessMsg, setSucessMsg] = useState("");
  const [displaySucessMsg, setDisplaySucessMsg] = useState(false);
  const handleSand = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required");
    } else if (subject === "") {
      setErrMsg("Email is required");
    } else if (message === "") {
      setErrMsg("Subject is required");
    } else if (email === "") {
      setErrMsg("Message is required");
    } else {
      setErrMsg("");
      setUsername("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    handleSand(e);
    emailjs.sendForm("service_45v7625", "template_ltak7d9", form.current, "Fjj8ZshVmp4sxgmkF").then((result) => {
      setSucessMsg("Your Message sent Successfully");
      setDisplaySucessMsg(true);
      setTimeout(() => {
        setDisplaySucessMsg(false);
      }, 2e3);
      console.log(result.text), console.log("Message Sent");
    }, (error) => {
      setErrMsg("Fail Sending");
      console.log(error.text);
      console.log("Message Failed");
    });
  };
  return /* @__PURE__ */ jsx(DarkModeContextProvider, { children: /* @__PURE__ */ jsxs("form", { className: "w-full flex flex-col gap-6 py-2", ref: form, onSubmit: sendEmail, children: [
    errMsg && /* @__PURE__ */ jsx("p", { className: "py-3 text-center text-orange-500 text-base tracking-wide animate-bounce", children: errMsg }),
    displaySucessMsg && /* @__PURE__ */ jsx("p", { className: "py-3 shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce", children: sucessMsg }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: `${darkMode ? "text-lightText" : "text-darkText"} bold text-sm uppercase tracking-wide`, children: "Your Name" }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "user_name", className: `${errMsg === "Username is required" && username.length === 0 ? "outline-designColor" : "outline=none"} ${!darkMode ? "bg-lightBg text-darkText" : "bg-grayBg text-lightText"} px-3 py-2 rounded-[20px] shadow-md shadow-purple-900  contactInput`, onChange: (e) => setUsername(e.target.value), value: username })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: ` ${darkMode ? "text-lightText" : "text-darkText"} bold text-sm  uppercase tracking-wide`, children: "Your Email" }),
      /* @__PURE__ */ jsx("input", { type: "email", name: "user_email", className: `${errMsg === "Email is required" && email.length === 0 ? "outline-designColor" : "outline=none"} ${!darkMode ? "bg-lightBg text-darkText" : "bg-grayBg text-lightText"} w-[100%] px-3 py-2 rounded-[20px] shadow-md shadow-purple-900   contactInput`, onChange: (e) => setEmail(e.target.value), value: email })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: ` ${darkMode ? "text-lightText" : "text-darkText"} bold text-sm  uppercase tracking-wide`, children: "Subject" }),
      /* @__PURE__ */ jsx("input", { type: "text", name: "user_subject", className: `${errMsg === "Subject is required'" && subject.length === 0 ? "outline-designColor" : "outline=none"} ${!darkMode ? "bg-lightBg text-darkText" : "bg-grayBg text-lightText"} px-3 py-2 rounded-[20px] shadow-md shadow-purple-900   contactInput`, onChange: (e) => setSubject(e.target.value), value: subject })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: ` ${darkMode ? "text-lightText" : "text-darkText"} bold text-sm  uppercase tracking-wide`, children: "Messagel" }),
      /* @__PURE__ */ jsx("textarea", { cols: "30", rows: "9", name: "message", className: `${errMsg === "Message is required" && message.length === 0 ? "outline-designColor" : "outline=none"} ${!darkMode ? "bg-lightBg text-darkText" : "bg-grayBg text-lightText"} px-3 resize-none rounded-[20px] shadow-md shadow-purple-900   contactInput`, onChange: (e) => setMessage(e.target.value), value: message })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { type: "submit", value: "Send", className: ` ${darkMode ? "text-lightText bg-purple-900" : "text-lightBg bg-purple-500"} font-bold  shadow-xl  w-full h-12 bg-[#141518] rounded-lg text-base  tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:font-bold hover:scale-105 border-transparent`, children: "Send Message" }) }),
    errMsg && /* @__PURE__ */ jsx("p", { className: "py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce", children: errMsg }),
    displaySucessMsg && /* @__PURE__ */ jsx("p", { className: "py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce", children: sucessMsg })
  ] }) });
};
export {
  ContactForm as default
};
