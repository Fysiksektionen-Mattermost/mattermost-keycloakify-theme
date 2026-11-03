/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.24.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/UserProfileFormFields/GroupLabel.tsx" --revert
 */

/* eslint-disable */

import { cn } from "@/components/lib/utils";
import { useI18n } from "@/login/i18n";
import type { Attribute } from "@keycloakify/login-ui/KcContext";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { assert } from "tsafe/assert";

export function GroupLabel(props: {
    attribute?: Attribute;
    group?: NonNullable<Attribute["group"]>;
    groupNameRef: {
        current: string;
    };
}) {
    const { attribute, group: groupFromProps, groupNameRef } = props;

    const { advancedMsg } = useI18n();

    const { kcClsx } = useKcClsx();

    const group = groupFromProps ?? attribute?.group;

    if (group?.name !== groupNameRef.current) {
        groupNameRef.current = group?.name ?? "";

        if (groupNameRef.current !== "") {
            assert(group !== undefined);

            const htmlDescription = group.annotations["html-description"];
            const groupDisplayDescription =
                htmlDescription ?? group.displayDescription ?? "";

            return (
                <div
                    className={cn(
                        "space-y-4 p-4 border rounded-lg bg-card",
                        kcClsx("kcFormGroupClass")
                    )}
                    {...Object.fromEntries(
                        Object.entries(group.html5DataAnnotations).map(([key, value]) => [
                            `data-${key}`,
                            value
                        ])
                    )}
                >
                    <div className={cn("", kcClsx("kcContentWrapperClass"))}>
                        <h3
                            id={`header-${group.name}`}
                            className={cn(
                                "text-lg font-semibold",
                                kcClsx("kcFormGroupHeader")
                            )}
                        >
                            {group.displayHeader !== undefined &&
                            group.displayHeader !== ""
                                ? advancedMsg(group.displayHeader)
                                : group.name}
                        </h3>
                    </div>
                    {groupDisplayDescription !== "" && (
                        <div className={cn("", kcClsx("kcLabelWrapperClass"))}>
                            {htmlDescription !== undefined ? (
                                <p
                                    id={`description-${group.name}`}
                                    className={cn(
                                        "text-sm text-muted-foreground",
                                        kcClsx("kcLabelClass")
                                    )}
                                    dangerouslySetInnerHTML={{
                                        __html: htmlDescription
                                    }}
                                />
                            ) : (
                                <p
                                    id={`description-${group.name}`}
                                    className={cn(
                                        "text-sm text-muted-foreground",
                                        kcClsx("kcLabelClass")
                                    )}
                                >
                                    {advancedMsg(groupDisplayDescription)}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            );
        }
    }

    return null;
}
