import React, { createContext, useEffect, useState } from "react";

export const CheckedLinksContext = createContext();

export const CheckedLinksContextProvider = ({ children }) => {
  const [updateInfosPage, setUpdateInfosPage] = useState(true);
  const [updatePasswordPage, setUpdatePasswordPage] = useState(false);
  const [deleteAccountPage, setDeleteAccountPage] = useState(false);

  const toggleUpdateInfosPage = () => {
    setUpdateInfosPage(true);
    setUpdatePasswordPage(false);
    setDeleteAccountPage(false);
  };

  const toggleUpdatePasswordPage = () => {
    setUpdateInfosPage(false);
    setUpdatePasswordPage(true);
    setDeleteAccountPage(false);
  };

  const toggleDeleteAccountPage = () => {
    setUpdateInfosPage(false);
    setUpdatePasswordPage(false);
    setDeleteAccountPage(true);
  };

//   useEffect(() => {
//     // You can use useEffect here if you have side effects that need to run when component mounts or dependencies change.
//     // For example, if you need to fetch data or subscribe to something.
//     // If you don't have side effects, you can remove this useEffect block.
//   }, [updateInfosPage, updatePasswordPage, deleteAccountPage]);

  return (
    <CheckedLinksContext.Provider value={{ updateInfosPage, toggleUpdateInfosPage, updatePasswordPage, toggleUpdatePasswordPage, deleteAccountPage, toggleDeleteAccountPage }}>
      {children}
    </CheckedLinksContext.Provider>
  );
};
