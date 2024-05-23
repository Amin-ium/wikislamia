import React, { createContext, useEffect, useState } from "react";

export const CheckedLinksContext = createContext();

export const CheckedLinksContextProvider = ({ children }) => {
  const [updateInfosPage, setUpdateInfosPage] = useState(false);
  const [updatePasswordPage, setUpdatePasswordPage] = useState(false);
  const [deleteAccountPage, setDeleteAccountPage] = useState(false);

  const [statisticsDashboard, setStatisticsDashboard] = useState(false);
  const [yourPosts, setYourPosts] = useState(false);
  const [createPost, setCreatePost] = useState(false);
  const [setting, setSetting] = useState(false);
  const [modal, setModal] = useState(false)


  // Profile Links

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

  // Dashboard Links

  const toggleStatisticsDashboard = () => {
    setStatisticsDashboard(true)
    setYourPosts(false);
    setCreatePost(false);
    setSetting(false);
  };

  const toggleYourPosts = () => {
    setStatisticsDashboard(false)
    setYourPosts(true);
    setCreatePost(false);
    setSetting(false);
  };

  const toggleCreatePost= () => {
    setStatisticsDashboard(false)
    setYourPosts(false);
    setCreatePost(true);
    setSetting(false);
  };

  const toggleSetting= () => {
    setStatisticsDashboard(false)
    setYourPosts(false);
    setCreatePost(false);
    setSetting(true);
  };

  const turnOffLinks= () => {
    // Turn off Dashboard Links
    setStatisticsDashboard(false)
    setYourPosts(false);
    setCreatePost(false);
    setSetting(false);

    // Turn off Profile Links
    setUpdateInfosPage(false);
    setUpdatePasswordPage(false);
    setDeleteAccountPage(false);
  };

//   useEffect(() => {
//     // You can use useEffect here if you have side effects that need to run when component mounts or dependencies change.
//     // For example, if you need to fetch data or subscribe to something.
//     // If you don't have side effects, you can remove this useEffect block.
//   }, [updateInfosPage, updatePasswordPage, deleteAccountPage]);

  return (
    <CheckedLinksContext.Provider value={{ updateInfosPage, setUpdateInfosPage, updatePasswordPage, setUpdatePasswordPage, deleteAccountPage, setDeleteAccountPage,
    statisticsDashboard, setStatisticsDashboard, yourPosts, setYourPosts, createPost, setCreatePost, setting, setSetting, turnOffLinks, modal, setModal }}>
      {children}
    </CheckedLinksContext.Provider>
  );
};
