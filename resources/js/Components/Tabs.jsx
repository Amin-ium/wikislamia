import React, { useEffect, useState } from "react";
import { FaKaaba } from "react-icons/fa6";

const Tabs = ({ tabs, imagePath, id, index, bio, idx, handleClick, imam_name }) => {
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
            <div onClick={handleClick} className="cursor-pointer h-[140px] w-[140px] flex items-center justify-center relative">



                    <img
                        key={index}

                        id={id}
                        src={imagePath}
                        className="h-[140px] w-[140px] absolute "
                    />
                    <h2 className=" text-lightText  absolute text-titleFont font-bold">{imam_name}</h2>

            </div>



        </div>
    );
};

export default Tabs;
