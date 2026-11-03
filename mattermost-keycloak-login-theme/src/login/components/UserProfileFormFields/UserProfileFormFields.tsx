/**
 * This file has been claimed for ownership from @oussemasahbeni/keycloakify-login-shadcn version 250004.0.24.
 * To relinquish ownership and restore this file to its original content, run the following command:
 * 
 * $ npx keycloakify own --path "login/components/UserProfileFormFields/UserProfileFormFields.tsx" --revert
 */

/* eslint-disable */

import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import type { Attribute } from "@keycloakify/login-ui/KcContext";
import type { JSX } from "@keycloakify/login-ui/tools/JSX";
import {
    useUserProfileForm,
    type FormAction,
    type FormFieldError
} from "@keycloakify/login-ui/useUserProfileForm";
import { Fragment, useEffect } from "react";
import { assert } from "tsafe/assert";
import { useKcContext } from "../../KcContext";
import { useI18n } from "../../i18n";
import { DO_MAKE_USER_CONFIRM_PASSWORD } from "./DO_MAKE_USER_CONFIRM_PASSWORD";
import { FieldErrors } from "./FieldErrors";
import { GroupLabel } from "./GroupLabel";
import { InputFieldByType } from "./InputFieldByType";

export type UserProfileFormFieldsProps = {
    onIsFormSubmittableValueChange: (isFormSubmittable: boolean) => void;
    BeforeField?: (props: BeforeAfterFieldProps) => JSX.Element | null;
    AfterField?: (props: BeforeAfterFieldProps) => JSX.Element | null;
};

type BeforeAfterFieldProps = {
    attribute: Attribute;
    dispatchFormAction: React.Dispatch<FormAction>;
    displayableErrors: FormFieldError[];
    valueOrValues: string | string[];
};

type ProfileGroup = NonNullable<Attribute["group"]>;

function isProfileGroup(value: unknown): value is ProfileGroup {
    if (typeof value !== "object" || value === null) {
        return false;
    }

    const group = value as Partial<ProfileGroup>;

    return (
        typeof group.name === "string" &&
        typeof group.annotations === "object" &&
        group.annotations !== null
    );
}

function getProfileGroups(profile: unknown): ProfileGroup[] {
    if (typeof profile !== "object" || profile === null) {
        return [];
    }

    const profileRecord = profile as Record<string, unknown>;

    for (const key of ["groups", "attributeGroups", "attributesGroups"]) {
        const groups = profileRecord[key];

        if (Array.isArray(groups)) {
            return groups.filter(isProfileGroup);
        }

        if (typeof groups === "object" && groups !== null) {
            return Object.values(groups).filter(isProfileGroup);
        }
    }

    return [];
}

export function UserProfileFormFields(props: UserProfileFormFieldsProps) {
    const { onIsFormSubmittableValueChange, BeforeField, AfterField } = props;

    const { kcContext } = useKcContext();

    assert("profile" in kcContext);

    const i18n = useI18n();

    const { advancedMsg } = i18n;

    const {
        formState: { formFieldStates, isFormSubmittable },
        dispatchFormAction
    } = useUserProfileForm({
        kcContext,
        i18n,
        doMakeUserConfirmPassword: DO_MAKE_USER_CONFIRM_PASSWORD
    });

    useEffect(() => {
        onIsFormSubmittableValueChange(isFormSubmittable);
    }, [isFormSubmittable]);

    const profileGroups = getProfileGroups(kcContext.profile);
    const attributeGroupNames = new Set(
        Object.values(kcContext.profile.attributesByName)
            .filter((attribute): attribute is Attribute => attribute !== undefined)
            .map(attribute => attribute.group?.name)
            .filter((name): name is string => name !== undefined)
    );
    const groupNameRef = { current: "" };

    return (
        <>
            {profileGroups
                .filter(
                    group =>
                        String(group.annotations["always-show"]) === "true" &&
                        !attributeGroupNames.has(group.name)
                )
                .map(group => (
                    <GroupLabel
                        key={group.name}
                        group={group}
                        groupNameRef={groupNameRef}
                    />
                ))}
            {formFieldStates.map(({ attribute, displayableErrors, valueOrValues }) => {
                return (
                    <Fragment key={attribute.name}>
                        <GroupLabel attribute={attribute} groupNameRef={groupNameRef} />
                        {BeforeField !== undefined && (
                            <BeforeField
                                attribute={attribute}
                                dispatchFormAction={dispatchFormAction}
                                displayableErrors={displayableErrors}
                                valueOrValues={valueOrValues}
                            />
                        )}
                        <Field
                            data-invalid={
                                displayableErrors.length > 0 ? "true" : undefined
                            }
                            style={{
                                display:
                                    attribute.annotations.inputType === "hidden"
                                        ? "none"
                                        : undefined
                            }}
                        >
                            <FieldLabel htmlFor={attribute.name} className="gap-0.5">
                                {advancedMsg(attribute.displayName ?? "")}
                                {attribute.required && <span aria-hidden="true">*</span>}
                            </FieldLabel>
                            {attribute.annotations.inputHelperTextBefore !==
                                undefined && (
                                    <FieldDescription
                                        id={`form-help-text-before-${attribute.name}`}
                                        aria-live="polite"
                                    >
                                        {advancedMsg(
                                            attribute.annotations.inputHelperTextBefore
                                        )}
                                    </FieldDescription>
                                )}
                            <InputFieldByType
                                attribute={attribute}
                                valueOrValues={valueOrValues}
                                displayableErrors={displayableErrors}
                                dispatchFormAction={dispatchFormAction}
                            />
                            <FieldErrors
                                attribute={attribute}
                                displayableErrors={displayableErrors}
                                fieldIndex={undefined}
                            />
                            {attribute.annotations.inputHelperTextAfter !== undefined && (
                                <FieldDescription
                                    id={`form-help-text-after-${attribute.name}`}
                                    aria-live="polite"
                                >
                                    {advancedMsg(
                                        attribute.annotations.inputHelperTextAfter
                                    )}
                                </FieldDescription>
                            )}
                            {AfterField !== undefined && (
                                <AfterField
                                    attribute={attribute}
                                    dispatchFormAction={dispatchFormAction}
                                    displayableErrors={displayableErrors}
                                    valueOrValues={valueOrValues}
                                />
                            )}
                            {/* NOTE: Downloading of html5DataAnnotations scripts is done in the useUserProfileForm hook */}
                        </Field>
                    </Fragment>
                );
            })}
        </>
    );
}
