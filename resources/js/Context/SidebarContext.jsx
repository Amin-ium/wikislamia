import { createContext, useState, useEffect } from 'react'




export const SidebarContext = createContext();


export const SidebarContextProvider = ({children}) => {

    const [opened, setOpened] = useState(
        JSON.parse(localStorage.getItem("opened")) || false
    );



    const handleSidebar = () => {
        setOpened(!opened)
    }

    useEffect(() => {
        localStorage.setItem('opened', opened)
    }, [opened]);

    return (
        <SidebarContext.Provider value={{opened, setOpened, handleSidebar}}>
            {children}
        </SidebarContext.Provider>
    )

};


