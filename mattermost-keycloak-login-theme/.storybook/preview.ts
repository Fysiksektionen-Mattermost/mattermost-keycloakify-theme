import type { Preview } from "@storybook/react-vite";
import { createElement } from "react";
import { kcEnvDefaults } from "../src/kc.gen";

import {
    DEFAULT_FONT,
    DEFAULT_THEME_BASE,
    DEFAULT_THEME_LAYOUT,
    DEFAULT_THEME_LOGO_DARK_URL,
    DEFAULT_THEME_LOGO_WHITE_URL,
    DEFAULT_THEME_PLACEHOLDER,
    DEFAULT_THEME_PRESET,
    DEFAULT_THEME_RADIUS
} from "../src/login/components/Template/Defaults";
import {
    basePaletteOptions,
    radiusPresetOptions,
    themePresetOptions
} from "../src/login/components/Template/theme/ThemeTypes";

// Defaults resolved from kcEnvDefaults (vite.config.ts) falling back to template Defaults.ts
const INITIAL_LOGO_WHITE_URL = kcEnvDefaults.SHADCN_THEME_LOGO_WHITE_URL ?? DEFAULT_THEME_LOGO_WHITE_URL;
const INITIAL_LOGO_DARK_URL = kcEnvDefaults.SHADCN_THEME_LOGO_DARK_URL ?? DEFAULT_THEME_LOGO_DARK_URL;
const INITIAL_SIDE_IMAGE_URL = kcEnvDefaults.SHADCN_THEME_SIDE_IMAGE_URL ?? "";
const INITIAL_LAYOUT = kcEnvDefaults.SHADCN_THEME_LAYOUT ?? DEFAULT_THEME_LAYOUT;
const INITIAL_THEME_PRESET = kcEnvDefaults.SHADCN_THEME_PRESET ?? DEFAULT_THEME_PRESET;
const INITIAL_THEME_BASE = kcEnvDefaults.SHADCN_THEME_BASE ?? DEFAULT_THEME_BASE;
const INITIAL_THEME_RADIUS = kcEnvDefaults.SHADCN_THEME_RADIUS ?? DEFAULT_THEME_RADIUS;
const INITIAL_THEME_PLACEHOLDER = kcEnvDefaults.SHADCN_THEME_PLACEHOLDER ?? DEFAULT_THEME_PLACEHOLDER;
const INITIAL_THEME_FONT = kcEnvDefaults.SHADCN_THEME_FONT ?? DEFAULT_FONT;

const preview: Preview = {
    args: {
        logoWhiteUrl: INITIAL_LOGO_WHITE_URL,
        logoDarkUrl: INITIAL_LOGO_DARK_URL,
        sideImageUrl: INITIAL_SIDE_IMAGE_URL
    },
    argTypes: {
        logoWhiteUrl: {
            name: "Logo (Light)",
            control: "text",
            description: "Logo URL used in light mode"
        },
        logoDarkUrl: {
            name: "Logo (Dark)",
            control: "text",
            description: "Logo URL used in dark mode"
        },
        sideImageUrl: {
            name: "Side Image",
            control: "text",
            description: "Side image URL used in two-column layout"
        }
    },
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    globalTypes: {
        showPlaceholder: {
            name: "Show Placeholder",
            description: "Show placeholder content in the theme",
            defaultValue: INITIAL_THEME_PLACEHOLDER,
            toolbar: {
                icon: "eye",
                items: [
                    { value: "true", title: "Show Placeholder" },
                    { value: "false", title: "Hide Placeholder" }
                ]
            }
        },
        layout: {
            name: "Layout",
            description: "Keycloak layout",
            defaultValue: INITIAL_LAYOUT,
            toolbar: {
                icon: "mirror",
                items: ["two-column", "centered-card", "image-aside"]
            }
        },
        themePreset: {
            name: "Theme",
            description: "Keycloak theme preset",
            defaultValue: INITIAL_THEME_PRESET,
            toolbar: {
                icon: "paintbrush",
                items: [...themePresetOptions]
            }
        },
        themeBase: {
            name: "Base",
            description: "Keycloak base palette",
            defaultValue: INITIAL_THEME_BASE,
            toolbar: {
                icon: "contrast",
                items: [...basePaletteOptions]
            }
        },
        themeRadius: {
            name: "Radius",
            description: "Keycloak radius preset",
            defaultValue: INITIAL_THEME_RADIUS,
            toolbar: {
                icon: "circlehollow",
                items: [...radiusPresetOptions]
            }
        },
        themeFont: {
            name: "Font",
            description: "Theme font preset",
            defaultValue: INITIAL_THEME_FONT,
            toolbar: {
                icon: "paragraph",
                items: [
                    { value: "inter", title: "Inter" },
                    { value: "geist", title: "Geist" },
                    { value: "manrope", title: "Manrope" },
                    { value: "figtree", title: "Figtree" },
                    { value: "source-sans-3", title: "Source Sans 3" },
                    { value: "ibm-plex-sans", title: "IBM Plex Sans" },
                    { value: "lora", title: "Lora" },
                    { value: "playfair-display", title: "Playfair Display" },
                    { value: "jetbrains-mono", title: "JetBrains Mono" }
                ]
            }
        }
    },
    decorators: [
        (Story, context) => {
            const layout = String(context.globals.layout ?? INITIAL_LAYOUT);
            const themePreset = String(
                context.globals.themePreset ?? INITIAL_THEME_PRESET
            );
            const themeBase = String(context.globals.themeBase ?? INITIAL_THEME_BASE);
            const themeRadius = String(
                context.globals.themeRadius ?? INITIAL_THEME_RADIUS
            );
            const showPlaceholder = String(
                context.globals.showPlaceholder ?? INITIAL_THEME_PLACEHOLDER
            );
            const font = String(context.globals.themeFont ?? INITIAL_THEME_FONT);
            const logoWhiteUrl = String(
                context.args.logoWhiteUrl ?? INITIAL_LOGO_WHITE_URL
            );
            const logoDarkUrl = String(
                context.args.logoDarkUrl ?? INITIAL_LOGO_DARK_URL
            );

            const themeSideImageUrl = String(context.args.sideImageUrl ?? INITIAL_SIDE_IMAGE_URL);

            const storyArgs = {
                ...context.args,
                kcContext: {
                    ...context.args.kcContext,
                    locale: {
                        ...context.args.kcContext?.locale,
                        currentLanguageTag: "en"
                    },
                    properties: {
                        ...context.args.kcContext?.properties,
                        SHADCN_THEME_LOGO_WHITE_URL: logoWhiteUrl,
                        SHADCN_THEME_LOGO_DARK_URL: logoDarkUrl,
                        SHADCN_THEME_SIDE_IMAGE_URL: themeSideImageUrl,
                        SHADCN_THEME_LAYOUT: layout,
                        SHADCN_THEME_PRESET: themePreset,
                        SHADCN_THEME_BASE: themeBase,
                        SHADCN_THEME_RADIUS: themeRadius,
                        SHADCN_THEME_PLACEHOLDER: showPlaceholder,
                        SHADCN_THEME_FONT: font
                    }
                }
            };

            return createElement(Story as never, {
                args: storyArgs,
                key: `${context.id}-${layout}-${themePreset}-${themeBase}-${themeRadius}-${showPlaceholder}-${font}`
            });
        }
    ]
};

export default preview;
