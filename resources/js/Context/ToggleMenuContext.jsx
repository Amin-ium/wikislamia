import { createContext, useState, useEffect } from 'react'




export const ToggleMenuContext = createContext();

export const ToggleMenuContextProvider = ({children}) => {



    const [toggleMenu, setToggleMenu] = useState(
        JSON.parse(localStorage.getItem("toggleMenu")) || false
    );

    const [togglePrayingTime, setTogglePrayingTime] = useState(
        JSON.parse(localStorage.getItem("togglePrayingTime")) || false
    );

    const togglePrayingTimeFun = () => {
        setTogglePrayingTime(!togglePrayingTime)
    }


    const toggleMenuFun = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        localStorage.setItem('toggleMenu', toggleMenu)
    }, [toggleMenu]);

    return (
        <ToggleMenuContext.Provider value={{toggleMenu, toggleMenuFun, togglePrayingTime, togglePrayingTimeFun}}>
            {children}
        </ToggleMenuContext.Provider>
    )

};
