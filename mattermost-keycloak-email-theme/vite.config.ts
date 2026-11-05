import { keycloakify } from "keycloakify/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        keycloakify({
            accountThemeImplementation: "none",
            themeName: "rfyuz_mattermost-keycloak-email-theme"
        })
    ]
});
