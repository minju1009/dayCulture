import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme('body', {
    colors: {
        primary: "black",
        secondary: "pink"
    }
})