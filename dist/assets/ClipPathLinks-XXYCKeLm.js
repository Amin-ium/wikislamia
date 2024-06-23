import { jsx, jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { useAnimate } from "framer-motion";
import { u as useSearchBarContext } from "./SearchBarContext-pj9rNtoS.js";
import { Link } from "@inertiajs/inertia-react";
import { D as DarkModeContext } from "./DarkModeContext-YHL6TNaC.js";
const LinkComponent = ({ value, href }) => {
  return /* @__PURE__ */ jsx("div", { className: "shadow-md shadow-purple-900 rounded-[20px] font-semibold ", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsx(ClipPathLinks, { value, href }) }) });
};
const ClipPathLinks = ({ value, href }) => {
  useSearchBarContext();
  const { darkMode } = useContext(DarkModeContext);
  return /* @__PURE__ */ jsx("div", { className: `${darkMode ? "text-lightText" : "text-darkText"} divide-y divide-fuchsia-700 text-darkText rounded-[20px]  `, children: /* @__PURE__ */ jsx("div", { className: "text-center ", children: /* @__PURE__ */ jsx(LinkBox, { value, href }) }) });
};
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP]
};
const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP]
};
const LinkBox = ({ Icon, href, value }) => {
  const [scope, animate] = useAnimate();
  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();
    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left"
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right"
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top"
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom"
    };
    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom
    ].sort((a, b) => a.proximity - b.proximity);
    return sortedProximity[0].side;
  };
  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side]
    });
  };
  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side]
    });
  };
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href,
      onMouseEnter: (e) => {
        handleMouseEnter(e);
      },
      onMouseLeave: (e) => {
        handleMouseLeave(e);
      },
      className: "relative grid  w-full place-content-center rounded-[20px] py-1 ",
      children: [
        value,
        /* @__PURE__ */ jsx(
          "div",
          {
            ref: scope,
            style: {
              clipPath: BOTTOM_RIGHT_CLIP
            },
            className: "absolute inset-0 grid place-content-center bg-purple-900 text-white rounded-[20px] ",
            children: value
          }
        )
      ]
    }
  );
};
export {
  LinkComponent as L
};
