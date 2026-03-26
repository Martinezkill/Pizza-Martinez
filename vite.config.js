"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_path_1 = require("node:path");
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            "@": node_path_1.default.resolve(__dirname, "./src"),
        },
    },
    test: {
        globals: true,
        setupFiles: ["./test/setup.ts"],
        environment: "jsdom",
    },
});
