import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "./bindToWindow.js",
    output: {
        file: "dist/bigint-polyfill.js",
        format: "iife",
    },
    plugins: [
        commonjs(),
        resolve()
    ]
}