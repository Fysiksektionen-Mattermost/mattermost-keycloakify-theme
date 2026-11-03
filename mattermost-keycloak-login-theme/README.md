### README

This folder implements @oussemasahbeni/keycloakify-login-shadcn with Fysiksektionen branding and several custom settings.

Summary of commands run to initialize it:
```bash
pnpm create vite # react, TS, mattermost-keycloak-login-theme 
cd mattermost-keycloak-login-theme
pnpm add keycloakify @oussemasahbeni/keycloakify-login-shadcn
pnpm install
npx keycloakify init
# configuration according to https://github.com/Oussemasahbeni/keycloakify-editor
```

See more information about the setup at https://github.com/Oussemasahbeni/keycloakify-editor

#### Notes

* The welcome message that is displayed on the side panel is hardcoded and must be customized in [./src/login/i18n.ts](./src/login/i18n.ts).
* The two-column layout keeps the right-hand branding pane fixed while the left-hand content scrolls. On narrow screens, branding is shown below the page; the welcome message is only shown there on the login page.
* Custom feature: Groups support the custom attribute "html-description" which overrides the displayDescription and renders as html rather than plaintext.
* Custom feature: The register page / user account page / etc. has a group with text at the bottom that is hardcoded in [./src/login/i18n.ts](./src/login/i18n.ts). If the two custom strings are empty, then the group is not displayed.

#### Further modifications

* .storybook/.preview is modified to respect the latest changes in vite.config.ts and to remove localization support (this was unnecessary since the localization menu is hidden if localization is turned off for the production Keycloak server)
* Several files have been owned with `npx keycloakify own --path ...` to implement required changes:
  * [./src/login/i18n.ts](./src/login/i18n.ts)
  * [./src/login/components/UserProfileFormFields/GroupLabel.tsx](./src/login/components/UserProfileFormFields/GroupLabel.tsx)
  * [./src/login/components/UserProfileFormFields/GroupLabel.tsx](./src/login/components/UserProfileFormFields/GroupLabel.tsx)
  * [./src/login/components/Template/Template.tsx](./src/login/components/Template/Template.tsx)
  * [./src/login/components/Template/layouts/TwoColumnLayout.tsx](./src/login/components/Template/layouts/TwoColumnLayout.tsx)