<#--
  This file has been claimed for ownership from @keycloakify/email-native version 260007.0.0.
  To relinquish ownership and restore this file to its original content, run the following command:
  
  $ npx keycloakify own --path "email/html/template.ftl" --revert
-->

<#macro emailLayout>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${(realmName!"Mattermost")?html}</title>
    <style>
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
            }
            .email-content {
                padding: 32px 24px !important;
            }
        }
        .email-content p {
            margin: 0 0 16px;
        }
        .email-content p:last-child {
            margin-bottom: 0;
        }
        .email-content a {
            color: #3f4350;
            font-weight: 700;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f7fa; color: #172033; font-family: Arial, Helvetica, sans-serif; -webkit-text-size-adjust: 100%;">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
        ${(realmName!"Mattermost")?html}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f7fa;">
        <tr>
            <td align="center" style="padding: 40px 16px;">
                <table role="presentation" class="email-container" width="560" cellpadding="0" cellspacing="0" border="0" style="width: 560px; max-width: 560px; background-color: #ffffff; border: 1px solid #e5e9f0; border-radius: 12px;">
                    <tr>
                        <td style="padding: 28px 40px 24px; border-bottom: 1px solid #edf0f5;">
                            <span style="display: inline-block; color: #3f4350; font-size: 19px; font-weight: 700; letter-spacing: -0.02em;">Mattermost</span>
                            <span style="display: block; width: 28px; height: 3px; margin-top: 10px; background-color: #3f4350; border-radius: 2px;"></span>
                        </td>
                    </tr>
                    <tr>
                        <td class="email-content" style="padding: 40px; color: #172033; font-size: 15px; line-height: 1.6;">
                            <#nested>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px 40px 28px; border-top: 1px solid #edf0f5; color: #778197; font-size: 12px; line-height: 1.5;">
                            This message was sent by ${(realmName!"Mattermost")?html}.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
</#macro>
