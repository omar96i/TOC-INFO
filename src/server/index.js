require("ignore-styles");
require("localstorage-polyfill");

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server");
