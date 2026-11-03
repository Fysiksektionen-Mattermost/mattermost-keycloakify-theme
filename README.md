### Keycloakify theme from shadcn for Mattermost

This repository implements keycloakify for interactive and modern theme development, using the shadcn theme as a basis (from https://github.com/Oussemasahbeni/keycloakify-editor). 

Make sure you are running node v26.13.0.

#### mattermost-keycloak-login-theme

To make changes to the login theme, head into
```bash
cd mattermost-keycloak-login-theme
```
and use any of the following commands to prototype the theme
```bash
pnpm storybook # interactive prototyping in web browser
pnpm dev # inspect current setting
pnpm build-keycloak-theme # build theme jar
```

See [./mattermost-keycloak-login-theme/README.md](./mattermost-keycloak-login-theme/README.md) for information on the custom build.

See the original [README.md](https://github.com/Oussemasahbeni/keycloakify-editor) for more detailed instructions.