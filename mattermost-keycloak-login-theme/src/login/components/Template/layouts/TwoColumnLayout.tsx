/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.24.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/Template/layouts/TwoColumnLayout.tsx" --revert
 */

/* eslint-disable */

import { useI18n } from "@/login/i18n";
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import type { ReactNode } from "react";
import shape from "../../../assets/img/shape.svg";
import { TemplateTopBar } from "../TemplateTopBar";

export function TwoColumnLayout(props: {
    content: ReactNode;
    logoWhiteUrl: string;
    logoDarkUrl: string;
}) {
    const { content, logoWhiteUrl, logoDarkUrl } = props;

    const { kcContext } = useKcContext();

    const { msg } = useI18n();

    return (
        <div className="grid min-h-svh lg:h-svh lg:grid-cols-2 lg:overflow-hidden">
            <div className="relative flex min-h-0 flex-col overflow-y-auto pb-6 lg:p-6 lg:pt-10">
                <TemplateTopBar />

                <div className="flex flex-1 flex-col items-center p-6 pt-20 md:p-10">
                    <div className="flex w-full flex-1 items-center justify-center">
                        <main className="w-full max-w-xl">{content}</main>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 text-center lg:hidden">
                        <div className="mb-4 flex items-center gap-3">
                            <img src={logoWhiteUrl} alt="Logo" className="size-14 dark:hidden" />
                            <img
                                src={logoDarkUrl}
                                alt="Logo"
                                className="size-14 hidden dark:inline-block"
                            />
                            {kcContext.realm.displayNameHtml ? (
                                <span
                                    className="text-xl"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(kcContext.realm.displayNameHtml)
                                    }}
                                />
                            ) : (
                                <span className="text-xl">
                                    {kcContext.realm.displayName || kcContext.realm.name}
                                </span>
                            )}
                        </div>

                        {kcContext.pageId === "login.ftl" && (
                            <p className="text-sm text-muted-foreground">
                                {msg("welcomeMessage")}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative hidden min-h-0 overflow-hidden bg-slate-950 lg:block dark:bg-card">
                <div className="flex h-full items-center justify-center pt-20">
                    <div className="absolute right-0 top-0 w-full max-w-62.5 xl:max-w-112.5">
                        <img src={shape} alt="" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full max-w-62.5 rotate-180 xl:max-w-112.5">
                        <img src={shape} alt="" />
                    </div>

                    <div className="relative z-10 flex max-w-xs flex-col items-center justify-center text-center">
                        <div className="mb-4 flex items-center gap-3">
                            <img src={logoDarkUrl} alt="Logo" className="size-14" />
                            {kcContext.realm.displayNameHtml ? (
                                <span
                                    className="text-xl text-white"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(
                                            kcContext.realm.displayNameHtml
                                        )
                                    }}
                                />
                            ) : (
                                <span className="text-xl text-white">
                                    {kcContext.realm.displayName || kcContext.realm.name}
                                </span>
                            )}
                        </div>

                        <p className="text-sm text-white/70">{msg("welcomeMessage")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
