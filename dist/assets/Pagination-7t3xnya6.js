import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useContext, useState, useEffect } from "react";
import { Link } from "@inertiajs/inertia-react";
import moment from "moment";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { S as SidebarContext, a as SidebarContextProvider } from "./SidebarContext-P_-bml5L.js";
function Pagination({ href, active, children, items, Component, imagePath, englishName, id, key, userItem, postTags, tagId, user }) {
  const { darkMode } = useContext(DarkModeContext);
  const { check, setCheck } = useSearchBarContext();
  const { opened } = useContext(SidebarContext);
  console.log(opened);
  const [data, setData] = useState([]);
  const [props, setProps] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [pageNumberLimit, setPageNumberLimit] = useState(9);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(9);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  useEffect(() => {
    setData(items);
  }, []);
  const properties = [
    ` key={item.id}
                       title={item.title}
                       id={item.id}
                       description={item.description.substring(0, 70)+ ' ...'}
                       name={item.user.name}
                       tags={Object.values(item.tags).map(tag => tag).map(tg => tg.name)}
                       tagId={item.tags.map(tag => tag.id)}
                       category={item.category.name}
                       categoryId={item.category.id}
                       created_at={moment(item.created_at).fromNow()}
                       postImgSrc={item.imagePath}
                       darkMode={darkMode}
                       userSrc={item.user.imagePath}`
  ];
  const propertiess = () => {
    items.foreach((item, i) => {
      surahNumber = item.numberInQuran;
      englishName = item.englishName;
      translatedName = item.englishNameTranslation;
      arabicName = item.arabicName;
      versetsLength = item.versesNumber;
    });
  };
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].hasOwnProperty("title")) {
        setProps(properties);
      } else if (data[i] === "englishName") {
        setProps(propertiess);
      }
    }
  }, []);
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleLoadMore = () => {
    setItemsPerPage(itemsPerPage + 8);
  };
  const handleLoad = () => {
    setItemsPerPage(itemsPerPage - 8);
  };
  const renderPageNumber = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return /* @__PURE__ */ jsx(
        "li",
        {
          id: number,
          onClick: handleClick,
          className: currentPage == number && darkMode ? "bg-gray-500 rounded text-darkText px-2 cursor-pointer" : currentPage == number && !darkMode ? "bg-gray-500 rounded text-lightText px-2 cursor-pointer" : currentPage !== number && darkMode ? "bg-orangeBg rounded text-lightText px-2 cursor-pointer" : currentPage !== number && !darkMode ? "bg-orangeBg rounded text-darkText px-2 cursor-pointer" : "",
          children: number
        },
        number
      );
    } else {
      return null;
    }
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [pageIncrementBtn, setPageIncrementBtn] = useState(null);
  const [pageDecrementBtn, setPageDecrementBtn] = useState(null);
  useEffect(() => {
    if (pages.length > maxPageNumberLimit) {
      setPageDecrementBtn(/* @__PURE__ */ jsx("li", { className: "bg-gray-300 rounded text-gray-600 px-2 cursor-pointer", onClick: handleNextBtn, children: "…" }));
    }
    if (pages.length > maxPageNumberLimit) {
      setPageIncrementBtn(/* @__PURE__ */ jsx("li", { className: "bg-gray-300 rounded text-gray-600 px-2 cursor-pointer", onClick: handlePrevBtn, children: "…" }));
    }
  }, []);
  const renderData = (data2) => {
    return /* @__PURE__ */ jsx(SidebarContextProvider, { children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: `${opened ? "w-[calc(full-240px)] mx-auto" : "w-[calc(full-40px)] mx-auto"}  `, children: /* @__PURE__ */ jsx("div", { className: "w-[100%] grid grid-cols-3  gap-5 my-1 relative ", children: data2.map((item, i) => {
        var _a;
        if (item.hasOwnProperty("englishName") && window.location.pathname.includes("quran")) {
          return /* @__PURE__ */ jsx(Link, { href: `/quran/surah/${item.id}`, children: /* @__PURE__ */ jsx(
            Component,
            {
              className: ` relative`,
              surahNumber: item.numberInQuran,
              englishName: item.englishName,
              translatedName: item.englishNameTranslation,
              arabicName: item.arabicName,
              versetsLength: item.versesNumber
            }
          ) });
        } else if (item.hasOwnProperty("title") && !window.location.pathname.includes("dashboard") && !window.location.pathname.includes("user")) {
          return /* @__PURE__ */ jsx(
            Component,
            {
              className: ` relative`,
              last_seen: item.user.last_seen,
              title: item.title,
              id: item.id,
              href: `/blogs/${item.id}`,
              description: item.description.substring(0, 70) + " ...",
              name: item.user.name,
              tags: (_a = item.tags) == null ? void 0 : _a.map((tag) => tag),
              tagId: item.tags.map((tag) => tag.id),
              created_at: moment(item.created_at).fromNow(),
              postImgSrc: item.imagePath,
              darkMode,
              userSrc: "/imageusers/" + item.user.imagePath
            },
            item.id
          );
        } else if (window.location.pathname.includes("dashboard")) {
          return /* @__PURE__ */ jsx(
            Component,
            {
              className: ` relative`,
              title: item.title,
              id: item.id,
              description: item.description.substring(0, 70) + " ...",
              tags: item.tags,
              tagId: item.tags.map((tag) => tag.id),
              created_at: moment(item.created_at).fromNow(),
              postImgSrc: item.imagePath,
              darkMode,
              userSrc: "/imageusers/" + imagePath
            },
            item.id
          );
        } else if (item.hasOwnProperty("title") && document.location.pathname === "/blogs") {
          return /* @__PURE__ */ jsx(
            Component,
            {
              className: ` relative `,
              title: item.title,
              id: item.id,
              description: item.description.substring(0, 70) + " ...",
              tags: Object.values(item.tags).map((tag) => tag).map((tg) => tg.name),
              tagId: item.tags.map((tag) => tag.id),
              created_at: moment(item.created_at).fromNow(),
              postImgSrc: "/imageusers/" + item.imagePath,
              darkMode,
              userSrc: imagePath
            },
            item.id
          );
        } else if (item.hasOwnProperty("ar_hadith") && document.location.pathname.match("/hadeet")) {
          return /* @__PURE__ */ jsx(
            Component,
            {
              className: ` relative`,
              number_in_book: item.number_in_book,
              ar_hadith: item.ar_hadith,
              fr_hadith: item.fr_hadith,
              eng_hadith: item.eng_hadith,
              grade: item.grade,
              hadithHref: `/hadeeth/${item.id}`,
              check
            },
            item.id
          );
        } else if (item.hasOwnProperty("description") && document.location.pathname.match("/user")) {
          return /* @__PURE__ */ jsx(
            Component,
            {
              title: item.title,
              username: userItem.name,
              postHref: `/blogs/${item.id}`,
              userHref: `/user/${userItem == null ? void 0 : userItem.id}`,
              description: item.description.substring(0, 70) + " ...",
              postTags,
              created_at: moment(item.created_at).fromNow(),
              imagePath: "/imageusers/" + item.imagePath,
              tagId
            }
          );
        }
      }) }) }),
      /* @__PURE__ */ jsxs("ul", { className: "flex flex-row justify-center gap-3 items-center my-3", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { onClick: handlePrevBtn, disabled: currentPage == pages[0] ? true : false, className: `${indexOfLastItem === 8 && darkMode ? "text-gray-700 " : indexOfLastItem === 8 && !darkMode ? "  text-gray-300" : indexOfLastItem !== 8 && darkMode ? "text-lightText " : indexOfLastItem !== 8 && !darkMode ? "  text-darkText" : ""} rounded-md p-1 bold `, children: "Prev" }) }),
        renderPageNumber,
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { onClick: handleNextBtn, disabled: currentPage == pages[pages.length - 1] ? true : false, className: `${currentPage == pages[pages.length - 1] && darkMode ? "text-gray-700 " : currentPage == pages[pages.length - 1] && !darkMode ? "  text-gray-300" : currentPage !== pages[pages.length - 1] && darkMode ? "text-lightText " : currentPage !== pages[pages.length - 1] && !darkMode ? "  text-darkText" : ""} rounded-md p-1 bold `, children: "Next" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-3", children: [
        /* @__PURE__ */ jsx("button", { onClick: handleLoadMore, disabled: currentPage == pages[pages.length - 1] ? true : false, className: `${currentPage == pages[pages.length - 1] && darkMode ? "bg-gray-300 text-darkText" : currentPage == pages[pages.length - 1] && !darkMode ? "bg-darkBg text-lightText" : currentPage !== pages[pages.length - 1] && darkMode ? "bg-orangeBg text-darkText" : currentPage !== pages[pages.length - 1] && !darkMode ? "bg-orangeBg text-darkText" : ""} rounded-md p-1 mb-3`, children: "Load More" }),
        /* @__PURE__ */ jsx("button", { onClick: handleLoad, disabled: indexOfLastItem === 6 ? true : false, className: `${indexOfLastItem === 8 && darkMode ? "bg-gray-300 text-darkText" : indexOfLastItem === 8 && !darkMode ? "bg-darkBg text-lightText" : indexOfLastItem !== 8 && darkMode ? "bg-orangeBg text-darkText" : indexOfLastItem !== 8 && !darkMode ? "bg-orangeBg text-darkText" : ""} rounded-md p-1 mb-3`, children: "Load Less" })
      ] })
    ] }) });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: renderData(currentItems) });
}
export {
  Pagination as P
};
