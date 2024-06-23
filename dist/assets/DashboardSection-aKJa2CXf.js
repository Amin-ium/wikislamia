import { jsxs, jsx } from "react/jsx-runtime";
import { useContext, useState, useEffect, useRef, Suspense } from "react";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import moment from "moment";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { Inertia } from "@inertiajs/inertia";
import Select from "react-select";
import { useForm } from "@inertiajs/react";
import { S as SidebarContext, a as SidebarContextProvider } from "./SidebarContext-P_-bml5L.js";
import { toast } from "react-toastify";
import { P as PostCard } from "./PostCard-VMqstIkQ.js";
import { P as Pagination } from "./Pagination-7t3xnya6.js";
import { C as CheckedLinksContext } from "./CheckLinksContext-UVw0xnMh.js";
import "./LayoutApp-75VrxIRl.js";
import { Link } from "@inertiajs/inertia-react";
import "./SidebarLayout-j5ZhPHuK.js";
const UsersTable = ({ users }) => {
  const { check, setCheck } = useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  const [isOnline, set_isOnline] = useState(true);
  useEffect(() => {
    if (navigator.onLine === true) {
      set_isOnline(true);
    } else {
      set_isOnline(false);
    }
  }, [isOnline]);
  return /* @__PURE__ */ jsxs("div", { class: "mb-[40px]", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-center text-lightText text-2xl my-5", children: check === "eng" ? "List of Users" : check === "ar" ? "لائحة المستخدمين" : check === "fr" ? "List des Utilisateurs" : null }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-[220px] overflow-y-auto shadow-xl", children: /* @__PURE__ */ jsxs("table", { dir: check === "ar" ? "rtl" : "ltr", class: `${darkMode ? "bg-grayBg" : "bg-lightBg text-darkText "} ${check === "ar" ? "text-center" : "text-center"}  min-w-full font-[sans-serif] rounded-lg `, children: [
      /* @__PURE__ */ jsx("thead", { class: `${darkMode ? "bg-lightBg" : "bg-grayBg "}  whitespace-nowrap sticky top-0  z-10`, children: /* @__PURE__ */ jsxs("tr", { className: "bg-darkText ", children: [
        /* @__PURE__ */ jsxs("th", { class: " w-8", children: [
          /* @__PURE__ */ jsx("input", { id: "checkbox", type: "checkbox", class: "hidden peer" }),
          /* @__PURE__ */ jsx(
            "label",
            {
              for: "checkbox",
              class: "relative flex items-center justify-center p-0. mr-5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden",
              children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", class: "w-full fill-white mr-5", viewBox: "0 0 520 520", children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z",
                  "data-name": "7-Check",
                  "data-original": "#000000"
                }
              ) })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("th", { class: `${darkMode ? "text-lightText" : "text-lightText"} px-[150px] py-3 ${check === "ar" ? "text-right" : "text-left"} text-sm font-semibold `, children: check === "eng" ? "Name" : check === "ar" ? "الإسم" : check === "fr" ? "Nom" : null }),
        /* @__PURE__ */ jsxs("th", { class: `${darkMode ? "text-lightText" : "text-lightText"}  px-6  py-3 ${check === "ar" ? "text-right" : "text-left"} text-sm font-semibold `, children: [
          check === "eng" ? "Role" : check === "ar" ? "الوظيفة" : check === "fr" ? "Rôle" : null,
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              class: "w-3 h-3 fill-gray-400  inline cursor-pointer ",
              viewBox: "0 0 401.998 401.998",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z",
                  "data-original": "#000000"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("th", { class: `${darkMode ? "text-lightText" : "text-lightText"} px-6  py-3 ${check === "ar" ? "text-right" : "text-left"} text-sm font-semibold `, children: [
          check === "eng" ? "Active" : check === "ar" ? "نشيط" : check === "fr" ? "Actif" : null,
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              class: "w-3 h-3 fill-gray-400 inline cursor-pointer ml-2",
              viewBox: "0 0 401.998 401.998",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z",
                  "data-original": "#000000"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx("th", { class: `${darkMode ? "text-lightText" : "text-lightText"} px-10  py-3 ${check === "ar" ? "text-right" : "text-left"} text-sm font-semibold `, children: check === "eng" ? "Action" : check === "ar" ? "	حركة" : check === "fr" ? "Action" : null })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { class: `whitespace-nowrap ${check === "ar" ? "text-right" : "text-left"}  `, children: users == null ? void 0 : users.map((user, i) => /* @__PURE__ */ jsxs("tr", { class: "odd:bg-blue-50  z-3 ", children: [
        /* @__PURE__ */ jsxs("td", { class: " w-8 z-3", children: [
          /* @__PURE__ */ jsx("input", { id: "checkbox5", type: "checkbox", class: "hidden peer " }),
          /* @__PURE__ */ jsx(
            "label",
            {
              for: "checkbox5",
              class: "relative flex items-center justify-center mr-5 p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden z-1",
              children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", class: "w-full fill-white ", viewBox: "0 0 520 520", children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z",
                  "data-name": "7-Check",
                  "data-original": "#000000"
                }
              ) })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("td", { class: "px-6 py-3 text-sm text-left text-lightText", children: /* @__PURE__ */ jsxs("div", { class: "flex items-center cursor-pointer", children: [
          /* @__PURE__ */ jsx("img", { src: user.imagePath, class: "w-9 h-9 rounded-full shrink-0" }),
          /* @__PURE__ */ jsxs("div", { class: "ml-4", children: [
            /* @__PURE__ */ jsx("p", { class: `text-sm ${darkMode ? "text-lightText" : "text-darkText"} `, children: user.name }),
            /* @__PURE__ */ jsx("p", { class: `text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: user.email })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("td", { class: `px-6 py-3 text-sm ${check === "ar" ? "text-right" : "text-left"}  ${darkMode ? "text-lightText" : "text-darkText"} `, children: user.is_admin === false ? "User" : "Admin" }),
        /* @__PURE__ */ jsx("td", { class: `px-6 py-3 text-sm ${darkMode ? "text-lightText" : "text-darkText"}`, children: /* @__PURE__ */ jsxs("label", { class: "relative cursor-pointer", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: user.last_seen != null ? true : false, class: "sr-only peer" }),
          /* @__PURE__ */ jsx(
            "div",
            {
              class: "w-11 h-6 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-white after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007bff]"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("td", { class: `${check === "ar" ? "text-right" : "text-left"}  px-6 py-3 z-4`, children: [
          /* @__PURE__ */ jsx("button", { class: "mr-4 z-4", title: "Edit", children: /* @__PURE__ */ jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              class: `w-5 ${darkMode ? "text-lightText" : "text-darkText"} z-4`,
              viewBox: "0 0 348.882 348.882",
              children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z",
                    "data-original": "#000000",
                    fill: darkMode ? `#f1f1f1` : "#000000"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z",
                    "data-original": "#000000",
                    fill: darkMode ? `#f1f1f1` : "#000000"
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("button", { class: "mr-4", title: "Delete", children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", class: "w-5 fill-red-500 hover:fill-red-700", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z",
                "data-original": "#000000"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z",
                "data-original": "#000000"
              }
            )
          ] }) })
        ] })
      ] })) })
    ] }) })
  ] });
};
const ChartDashboard = ({ posts, users }) => {
  console.log(users);
  const { check, setCheck } = useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  const [postValue, setPostValue] = useState("");
  useEffect(() => {
    if (check === "eng") {
      setPostValue("Posts");
    } else if (check === "ar") {
      setPostValue("مقالات");
    } else if (check === "fr") {
      setPostValue("Articles");
    }
  }, [check]);
  const last30DaysPosts = posts.filter((post) => moment(post.created_at).isAfter(moment().subtract(30, "days")));
  const groupedData = last30DaysPosts.reduce((acc, post) => {
    const day = moment(post.created_at).format("MMM DD");
    acc[day] = (acc[day] || 0) + 1;
    return acc;
  }, {});
  const data = Object.keys(groupedData).map((day) => ({
    day,
    Posts: groupedData[day] || 0
  }));
  Math.max(...Object.values(groupedData), 5);
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "bg-lightBg text-darkText" : "bg-darkText text-lightText"} custom-tooltip p-4  flex flex-col gap-3 rounded-md`, children: [
        /* @__PURE__ */ jsx("p", { className: "text-medium text-md text-blue", children: label }),
        /* @__PURE__ */ jsx("p", { className: "text-medium text-md", children: /* @__PURE__ */ jsxs("span", { children: [
          payload[0].value + " ",
          postValue
        ] }) })
      ] });
    }
    return null;
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full border-b-[1px] border-gray-600", children: [
    /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxs(
      LineChart,
      {
        data,
        margin: {
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
          color: "#000000"
        },
        children: [
          /* @__PURE__ */ jsx(CartesianGrid, { strokeWidth: "0.05", horizontalPoints: false }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "day" }),
          /* @__PURE__ */ jsx(YAxis, { domain: [0, "dataMax"], allowDecimals: false }),
          /* @__PURE__ */ jsx(Tooltip, { content: /* @__PURE__ */ jsx(CustomTooltip, {}) }),
          /* @__PURE__ */ jsx(Legend, {}),
          /* @__PURE__ */ jsx(Line, { type: "monotone", dataKey: check === "eng" ? "Posts" : check === "ar" ? "مقالات" : check === "fr" ? "Articles" : null, stroke: darkMode ? "#f1f1f1" : "#0c0c0c", activeDot: { r: 8 }, dot: { stroke: `${darkMode ? "#f1f1f1" : "#0c0c0c"} `, strokeWidth: `${darkMode ? 2 : 4} `, r: 4 } })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(UsersTable, { users })
  ] });
};
function CreatePost({ auth, datas, user }) {
  useContext(SidebarContext);
  useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  const ref = useRef();
  const [selectedTags, setSelectedTags] = useState([]);
  useState("");
  const [fileInput, setFileInput] = useState(false);
  const { data, setData, errors, post, reset } = useForm({
    title: "",
    description: "",
    tags: [],
    slug: "",
    status: false,
    imagePath: ""
    // Add imagePath field with empty value
  });
  const inputImg = document.getElementById("imagePath");
  const inputTitle = document.getElementById("title");
  const inputDescription = document.getElementById("description");
  document.getElementById("select");
  const myOptionsTags = datas == null ? void 0 : datas.map((tagItem) => ({
    value: tagItem.id,
    label: tagItem.name
  }));
  const handleTagsImage = (e) => {
    setData("imagePath", e.target.files[0]);
    if (inputTitle.value == "") {
      setFileInput(false);
    } else {
      setFileInput(true);
    }
  };
  const handleTitleChange = (e) => {
    setData("title", e.target.value);
    if (inputTitle.value == "") {
      setFileInput(false);
    } else {
      setFileInput(true);
    }
  };
  const handleDescriptionChange = (e) => {
    setData("description", e.target.value);
    if (inputDescription.value == "") {
      setFileInput(false);
    } else {
      setFileInput(true);
    }
  };
  const previewPhoto = () => {
    const file = inputImg.files;
    if (file) {
      const fileReader = new FileReader();
      const preview = document.getElementById("file-preview");
      setFileInput(true);
      fileReader.onload = (event) => {
        preview.setAttribute("src", event.target.result);
      };
      fileReader.readAsDataURL(file[0]);
    }
  };
  if (inputImg) {
    inputImg.addEventListener("change", previewPhoto);
  }
  const handleTagsChange = (selectedOptions) => {
    setSelectedTags(selectedOptions);
    setData("tags", selectedOptions.map((option) => option.value));
    if (selectedTags) {
      setFileInput(true);
      console.log(fileInput);
    }
  };
  console.log(selectedTags.length);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!data.title) {
      toast.error("Title is required");
      return;
    }
    if (!data.description) {
      toast.error("Description is required");
      return;
    }
    if (!data.imagePath) {
      toast.error("Image is required");
      return;
    }
    if (data.tags.length === 0) {
      toast.error("At least one tag is required");
      return;
    }
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("slug", "-");
    formData.append("user_id", user.id);
    formData.append("status", false);
    formData.append("imagePath", data.imagePath);
    data.tags.forEach((tag) => {
      formData.append("tags[]", tag);
    });
    try {
      const response = await Inertia.post(route("posts.store"), formData);
      toast.success("Blog post submitted successfully!");
      reset();
      setSelectedTags([]);
      setFileInput(false);
      ref.current.value = "";
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit the blog post.");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `${darkMode ? "text-lightText" : "text-darkText"} pt-20 flex flex-row justify-center  items-center gap-5`, children: [
    /* @__PURE__ */ jsxs("div", { className: "w-[50%] flex flex-col justify-center mx-auto my-5", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-4", children: "Create a Post" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          className: "w-full",
          onSubmit: handleFormSubmit,
          encType: "multipart/form-data",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium ", children: "Title" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: `${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`,
                  type: "text",
                  name: "title",
                  id: "title",
                  value: data.title,
                  onChange: handleTitleChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium ", children: "Description" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                  name: "description",
                  id: "description",
                  value: data.description,
                  onChange: handleDescriptionChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium ", children: "Image" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  className: `${darkMode ? "bg-darkText text-lightText" : "bg-lightBg text-darkText"}`,
                  ref,
                  accept: "image/*",
                  name: "imagePath",
                  id: "imagePath",
                  onChange: handleTagsImage
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("label", { className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Tags" }),
              /* @__PURE__ */ jsx(
                Select,
                {
                  isMulti: true,
                  options: myOptionsTags,
                  value: selectedTags,
                  id: "select",
                  onChange: handleTagsChange,
                  name: "tags"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("button", { type: "submit", children: "Submit" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: `${darkMode ? "bg-darkText" : "bg-lightBg"} w-[50%] flex flex-col gap-3  p-4 rounded-xl shadow-lg shadow-purple-700 `, children: fileInput ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: data.title }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: data.description.substring(0, 200) + " ..." }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full relative", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { className: "w-full h-[200px] mx-auto", id: "file-preview", src: "#", alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-5 absolute bottom-3 left-3", children: selectedTags.map(
          (tag, i) => /* @__PURE__ */ jsx("p", { className: "bg-darkText text-lightText p-1 rounded font-semibold ", children: tag.label }, i)
        ) })
      ] })
    ] }) : /* @__PURE__ */ jsx("p", { className: "text-center text-lg font-semibold", children: "Post Preview" }) })
  ] });
}
const Setting = () => {
  return /* @__PURE__ */ jsx("div", { className: "text-center text-lightText", children: "Setting" });
};
const YourPosts = ({ postsUser, user }) => {
  useState([]);
  const { opened } = useContext(SidebarContext);
  const { check, setCheck } = useSearchBarContext();
  return /* @__PURE__ */ jsx(SidebarContextProvider, { children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `${opened ? "w-[calc(100%-240px)] mx-auto" : "w-[calc(100%-40px)] mx-auto"} ${check === "ar" ? " " : " "} px-3 duration-300 flex flex-col justify-center   mb-[70px]  `,
      children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl flex flex-col justify-center   mx-auto sm:px-6 lg:px-8 space-y-6 mt-[70px]", children: /* @__PURE__ */ jsx(Pagination, { className: "", Component: PostCard, items: postsUser, user }) })
    }
  ) });
};
const DashboardSection = ({ posts, users, user, postsUser, singlePost, tags, adminUser }) => {
  const { opened } = useContext(SidebarContext);
  const { check, setCheck } = useSearchBarContext();
  const {
    statisticsDashboard,
    yourPosts,
    createPost,
    setting,
    modal,
    setModal
  } = useContext(CheckedLinksContext);
  const { darkMode } = useContext(DarkModeContext);
  const [dashboardLink, setDashboardLink] = useState(false);
  const [adminDashboardLink, setAdminDashboardLink] = useState(false);
  useState(false);
  useState(null);
  useEffect(() => {
    if (document.location.pathname === "/dashboard") {
      setDashboardLink(true);
      setAdminDashboardLink(false);
    } else if (document.location.pathname === "/admin-dashboard") {
      setAdminDashboardLink(true);
      setDashboardLink(false);
    }
  }, []);
  console.log(postsUser);
  return /* @__PURE__ */ jsx(SidebarContextProvider, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${opened ? "w-[calc(100%-240px)] mx-auto" : "w-[calc(100%-40px)] mx-auto"} ${check === "ar" ? "float-start text-right" : "float-end text-left"} px-3 duration-300 flex flex-col    `,
      children: [
        !dashboardLink && /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6" }),
        dashboardLink && !yourPosts && !createPost && /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading ..." }), children: /* @__PURE__ */ jsxs("div", { className: "pt-[100px] ", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `${darkMode ? "text-lightText" : "text-darkText"} text-center `,
              children: postsUser.length > 0 ? /* @__PURE__ */ jsxs("p", { children: [
                "Hi",
                " ",
                /* @__PURE__ */ jsx("span", { className: " font-bold", children: user.name }),
                ", until now you published",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: postsUser.length }),
                " ",
                "posts."
              ] }) : /* @__PURE__ */ jsxs("p", { children: [
                "Hi",
                " ",
                /* @__PURE__ */ jsx("span", { className: " font-bold", children: user.name }),
                ", you don't published any posts yet."
              ] })
            }
          ),
          postsUser.length > 0 ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("table", { className: "w-[90%] mx-auto min-w-max table-auto text-left mt-5 rounded-lg shadow-2xl shadow-purple-900", children: [
            /* @__PURE__ */ jsx(
              "thead",
              {
                className: `${darkMode ? "text-lightText" : "text-darkText"} `,
                children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { className: "border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2", children: /* @__PURE__ */ jsx("p", { className: "block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70", children: "Post Image" }) }),
                  /* @__PURE__ */ jsx("th", { className: "border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2", children: /* @__PURE__ */ jsx("p", { className: "block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70", children: "Post Title" }) }),
                  /* @__PURE__ */ jsx("th", { className: "border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2", children: /* @__PURE__ */ jsx("p", { className: "block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70", children: "Date" }) }),
                  /* @__PURE__ */ jsx("th", { className: "border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2", children: /* @__PURE__ */ jsx("p", { className: "block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70", children: "Tags" }) }),
                  /* @__PURE__ */ jsx("th", { className: "border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 py-2", children: /* @__PURE__ */ jsx("p", { className: "block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70 text-center", children: "Action" }) })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              "tbody",
              {
                className: `${darkMode ? "text-lightText" : "text-darkText"} `,
                children: postsUser == null ? void 0 : postsUser.map((post, i) => /* @__PURE__ */ jsxs("tr", { className: "items-center", children: [
                  /* @__PURE__ */ jsx("td", { className: "px-4 py-1 border-b border-blue-gray-50", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: "/imageusers/" + post.imagePath,
                      alt: "Spotify",
                      className: "inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    }
                  ) }) }),
                  /* @__PURE__ */ jsx("td", { className: "px-4 py-1 border-b border-blue-gray-50", children: /* @__PURE__ */ jsx("p", { className: "block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal", children: post.title }) }),
                  /* @__PURE__ */ jsx("td", { className: "px-4 py-1 border-b border-blue-gray-50", children: /* @__PURE__ */ jsx("p", { className: "block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal", children: moment(
                    post.created_at
                  ).format(
                    "YYYY-MM-DD HH:mm:ss"
                  ) }) }),
                  /* @__PURE__ */ jsx("td", { className: "px-4 py-1 border-b border-blue-gray-50", children: /* @__PURE__ */ jsx("div", { className: "w-max", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-row justify-between gap-3 items-center font-sans font-bold uppercase py-1 px-2 text-xs rounded-md", children: [
                    post.tags.map(
                      (tag, i2) => tag.name.length > 0 ? /* @__PURE__ */ jsx(Link, { href: `/dashboard/PostTag/${tag.id}`, className: " bg-green-500/20 text-lightg p-1 rounded-md", children: tag.name }, i2) : /* @__PURE__ */ jsx("p", { className: "bg-green-500/20 text-lightg p-1 rounded-md", children: "no tags" })
                    ),
                    post.tags.length === 0 && /* @__PURE__ */ jsx("p", { className: "  font-normal ", children: "no tags" })
                  ] }) }) }),
                  /* @__PURE__ */ jsxs("td", { class: "px-4 py-2 border-b border-blue-gray-50 flex flex-row align-middle items-center justify-center gap-3 -mb-1", children: [
                    /* @__PURE__ */ jsx(
                      Link,
                      {
                        href: `/dashboard/posts/${post.id}`,
                        class: "relative align-middle select-none font-sans font-medium text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 pt-3",
                        children: /* @__PURE__ */ jsx("span", { class: " transform -translate-x-1/2  bg-green-700 text-lightText rounded-md p-1", children: "View" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Link,
                      {
                        href: `/posts/${post.id}`,
                        class: "relative align-middle select-none font-sans font-medium text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 pt-3",
                        children: /* @__PURE__ */ jsx("span", { class: " transform -translate-x-1/2 rounded-md  bg-red-700 text-lightText  p-1", children: "Delete" })
                      }
                    )
                  ] })
                ] }))
              }
            )
          ] }) }) : /* @__PURE__ */ jsx("div", { className: "text-center", children: "No posts published" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "w-[100%] mx-auto", children: [
          yourPosts ? /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading ..." }), children: /* @__PURE__ */ jsx(YourPosts, { postsUser, user }) }) : createPost && !yourPosts ? /* @__PURE__ */ jsx(CreatePost, { datas: tags, user }) : setting ? /* @__PURE__ */ jsx(Setting, {}) : null,
          adminDashboardLink && /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading ..." }), children: /* @__PURE__ */ jsxs("div", { className: "pt-[100px] ", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `${darkMode ? "text-lightText" : "text-darkText"} text-center `,
                children: /* @__PURE__ */ jsxs("p", { children: [
                  "Hi",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: " font-bold", children: adminUser.name }),
                  ", until now there is",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: posts.length }),
                  " ",
                  " posts published."
                ] })
              }
            ),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(ChartDashboard, { posts, users }) })
          ] }) })
        ] })
      ]
    }
  ) });
};
const DashboardSection$1 = DashboardSection;
export {
  DashboardSection$1 as D
};
