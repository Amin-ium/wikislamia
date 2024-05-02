import React, { useEffect, useState } from "react";
import { FaKaaba } from "react-icons/fa6";
import imgPath from '../../../public/assets/publicImages/imams/round-badge-.png'

const Tabs = ({ tabs, id, index, bio, idx, handleClick, saheeh_name, indx, imamId }) => {
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

    return (
        <div onClick={handleClick} className="relative flex justify-center align-middle items-center cursor-pointer">
            <img src={imgPath} alt="" className="" />
            <h2 className="text-lightText absolute font-bold " key={indx} >{saheeh_name}</h2>
        </div>
    )


};

export default Tabs;
