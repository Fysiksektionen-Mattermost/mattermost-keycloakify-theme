/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.24.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/i18n.ts" --revert
 */

import { i18nBuilder } from "@keycloakify/login-ui/i18n";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { I18nProvider, useI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            welcomeMessage: "Customize this welcome message with a localization realm override of the key 'welcomeMessage'. Supports HTML.",
            loginAccountTitle: "Login to your account",
            registerTitle: "Register a new account",
            noAccount: "Don't have an account?",
            doRegister: "Sign up",
            "organization.selectTitle": "Choose Your Organization",
            "organization.pickPlaceholder": "Pick an organization to continue",
            "identity-provider-login-last-used": "Last",
            attemptedUsernameLoggingInAs: "Logging in as",
            usernamePlaceholder: "Enter your username",
            usernameOrEmailPlaceholder: "Enter your username or email",
            emailPlaceholder: "Enter your email",
            passwordPlaceholder: "Enter your password",
            newPasswordPlaceholder: "Enter your new password",
            confirmPasswordPlaceholder: "Confirm your password"
        },

        // other languages were removed
    })
    .build();

export { I18nProvider, useI18n };
