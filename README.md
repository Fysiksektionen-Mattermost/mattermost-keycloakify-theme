### Keycloakify theme from shadcn for Mattermost

This repository implements keycloakify for interactive and modern theme development, using the shadcn theme as a basis (from https://github.com/Oussemasahbeni/keycloakify-editor). 

Make sure you are running node v26.13.0.

To make changes in this theme, head into
```bash
cd mattermost-theme
```
and use any of the following commands to prototype the theme
```bash
pnpm storybook # interactive prototyping in web browser
pnpm dev # inspect current setting
pnpm build-keycloak-theme # build theme jar
```

See the original [README.md](https://github.com/Oussemasahbeni/keycloakify-editor) for more detailed instructions.