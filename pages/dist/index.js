"use strict";
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var Button_1 = require("@/components/Button");
//import Input from '@/components/Input';
var Landing = function () {
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(''), name = _c[0], setName = _c[1];
    var _d = react_1.useState('login'), variant = _d[0], setVariant = _d[1];
    var router = router_1.useRouter();
    return (React.createElement("div", { className: 'relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover' },
        React.createElement("div", { className: "px-36 min-h-screen bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.9),_rgba(0,0,0,0.2),_rgba(0,0,0,0.9))] relative z-10" },
            React.createElement("nav", { className: "py-6 flex justify-between items-center w-full" },
                React.createElement("img", { src: "/images/logo.png", alt: "Logo", className: "h-10" }),
                React.createElement("div", { className: "flex" },
                    React.createElement(Button_1["default"], { className: "\n              bg-neutral-900\n              bg-opacity-70\n              border\n              border-zinc-600\n              hover:bg-neutral-900\n              text-white\n              text-sm\n              font-semibold\n              rounded-sm\n              px-6\n              h-8\n              " }, "English"),
                    React.createElement(Button_1["default"], { className: "\n              bg-red-600\n              hover:bg-red-700\n              text-white\n              text-sm\n              font-semibold\n              rounded-sm\n              px-4\n              h-8\n              ml-4\n              ", onClick: function () { return router.push('/auth'); } }, "Sign In!"))),
            React.createElement("div", { className: "flex justify-center items-center w-full h-full" },
                React.createElement("div", { className: " px-16 py-16 mt-40 w-full md:w-1/2 lg:w-2/4 text-center" },
                    React.createElement("h1", { className: "text-white font-extrabold text-6xl" }, "Unlimited movies, TV shows, and more"),
                    React.createElement("p", { className: "text-white font-bold text-xl pt-8" }, "Starts at $7.99. Cancel anytime."),
                    React.createElement("p", { className: "text-white text-base pt-8" }, "Ready to watch? Enter your email to create or restart your membership."),
                    React.createElement("div", { className: "flex justify-between pt-4" },
                        React.createElement(Button_1["default"], { className: "\n                bg-red-600\n                hover:bg-red-700\n                text-white\n                text-2xl\n                font-semibold\n                rounded-md\n                px-6\n                h-14\n                " },
                            "Get Started ",
                            React.createElement("span", { className: "pl-4 font-bold" }, "\u232A"))))))));
};
exports["default"] = Landing;
