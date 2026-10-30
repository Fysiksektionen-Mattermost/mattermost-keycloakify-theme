import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import { defineConfig } from "vite";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        keycloakify({
            accountThemeImplementation: "none",
            themeName: "rfyuz_mattermost-keycloak-theme",
            environmentVariables: [
                {
                    name: "SHADCN_THEME_LOGO_WHITE_URL",
                    default: "%BASE_URL%/fysiksektionen-logo.svg"
                },
                {
                    name: "SHADCN_THEME_LOGO_DARK_URL",
                    default: "%BASE_URL%/fysiksektionen-logo.svg"
                },
                { name: "SHADCN_THEME_APP_NAME", default: "Mattermost Log-in" },
                { name: "SHADCN_THEME_LAYOUT", default: "two-column" }, // two-column, centered-card, image-aside
                { name: "SHADCN_THEME_SIDE_IMAGE_URL", default: "" }, // unused if SHADCN_THEME_LAYOUT is not set to "image-aside"
                { name: "SHADCN_THEME_PRESET", default: "neutral" },
                { name: "SHADCN_THEME_BASE", default: "neutral" },
                { name: "SHADCN_THEME_RADIUS", default: "default" },
                { name: "SHADCN_THEME_FONT", default: "geist" },
                { name: "SHADCN_THEME_PLACEHOLDER", default: "false" }
            ]
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "./src")
        }
    }
});