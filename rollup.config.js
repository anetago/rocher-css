// rollup.config.js
import scss from "rollup-plugin-scss";

export default {
  input: "index.js",
  plugins: [
    scss({
      runtime: require("sass"),
      failOnError: true,
      output: "./dist/css/rocher.min.css",
      outputStyle: "compressed",
    }),
  ],
};
