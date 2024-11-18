// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import fulldev from "fulldev-ui/integration";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        fulldev({
            colors: {
                theme: "light",
                light: {
                    background: "#FFFFFF",
                    base: "#8B8D98",
                    brand: "#BDD1FF",
                },
            },
        }),
        solidJs(),
    ],
});
