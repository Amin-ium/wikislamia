import { Fragment, useContext, useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { DarkModeContext } from "@/Context/DarkModeContext";




const Accordionn = ({ quiz }) => {
    const {darkMode} = useContext(DarkModeContext);
  const [openItem, setOpenItem] = useState(null);

  const handleOpen = (index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  return (
    <Fragment>


      <div className='w-full xl:w-1/2 flex flex-col xl:flex-col mx-auto '>
        {quiz.map((accordionItem, index) => (
          <div key={index}>
            <Accordion open={openItem === index} className="">
              <AccordionHeader className={`${darkMode ? "bg-[#2200278A] text-lightText" : "bg-[#2200278A] text-lightText"} px-3 rounded-lg shadow-2xl text-md md:text-xl lg:text-xl`} onClick={() => handleOpen(index)}>
                {accordionItem.questionEng}
              </AccordionHeader>
              <AccordionBody  className={`${darkMode ? "bg-[#2200278A] text-lightText" : "bg-[#2200278A] text-lightText"} rounded-lg px-5 text-[16px] md:text-md lg:text-md`}>{accordionItem.answerEng}</AccordionBody>
            </Accordion>
          </div>
        ))}
        </div>


    </Fragment>
  );
};

export default Accordionn;
