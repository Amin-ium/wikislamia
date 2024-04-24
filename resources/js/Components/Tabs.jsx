import React, { useEffect, useState } from "react";
import { FaKaaba } from "react-icons/fa6";

const Tabs = ({ tabs, imagePath, id, index, bio, idx, handleClick, saheeh_name }) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState();

    useEffect(() => {
        setSelectedTabIndex(1);
    }, [selectedTabIndex]);

    // const handleTabClick = (e) => {
    //   const totalTabs = tabs.length;
    //   const percentage = (index / totalTabs) * 100;
    //   setSelectedTabIndex(index);
    //   setUnderlineLeft(percentage);
    // };
    const formatText = (text) => {
        // Split the text into paragraphs based on newline characters
        const paragraphs = text.split("\n");

        // Iterate through each paragraph and replace dots with line breaks
        const formattedText = paragraphs.map((paragraph, index) => {
            // Check if the paragraph ends with a dot
            if (paragraph.trim().endsWith(".")) {
                // Replace the dot with a line break
                return (
                    <React.Fragment key={index}>
                        {paragraph.slice(0, -1)}
                        <br />
                    </React.Fragment>
                );
            } else {
                return (
                    <React.Fragment key={index}>
                        {paragraph}
                        <br />
                    </React.Fragment>
                );
            }
        });

        return formattedText;
    };
    console.log(selectedTabIndex);
    return (
        <div className="w-full flex flex-row justify-center">
            <div onClick={handleClick} className="cursor-pointer bg-grayBg rounded-full h-[100px] w-[100px] flex flex-row justify-center mx-5 align-middle items-center  relative">




                    <h2  className=" text-lightText text-md  absolute  text-center font-bold">{

                            saheeh_name.split(" ").map(function(item, idx) {
                                return (
                                    <span className="protestFont" key={idx}>
                                        {item}
                                        <br/>
                                    </span>
                                 )
                            })

                    }</h2>

            </div>



        </div>
    );
};

export default Tabs;
