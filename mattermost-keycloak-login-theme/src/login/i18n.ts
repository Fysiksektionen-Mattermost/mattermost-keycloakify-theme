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
            welcomeMessage:
                "<p style='margin-bottom:10px;'>Welcome to the Mattermost log-in portal for international students. You can register an account by clicking 'Sign up'.</p><p>If you are not an international student - log in with the KTH button on <a href='https://mattermost.fysiksektionen.se', style='color:rgb(71,157,255);text-decoration:underline;'>mattermost.fysiksektionen.se</a>.</p>",
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
