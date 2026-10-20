---
uid: guide-notification
---
# Notifications

Three transport-neutral contracts, e-mail, messaging and real time, each with its providers: SMTP and Twilio, Azure Service Bus, and Azure SignalR.

## How the packages fit

Each arrow points at the package it builds on. Rounded, dashed boxes are Nuv Tools packages from another area.

```mermaid
flowchart LR
  NuvTools_Notification_Mail["Notification.Mail"]
  NuvTools_Notification_Mail_Smtp["Notification.Mail.Smtp"]
  NuvTools_Notification_Mail_Twilio["Notification.Mail.Twilio"]
  NuvTools_Notification_Messaging["Notification.Messaging"]
  NuvTools_Notification_Messaging_Azure_ServiceBus["Notification.Messaging.Azure.ServiceBus"]
  NuvTools_Notification_Realtime["Notification.Realtime"]
  NuvTools_Notification_Realtime_Azure_SignalR["Notification.Realtime.Azure.SignalR"]
  NuvTools_Notification_Realtime_Azure_SignalR_Client["Notification.Realtime.Azure.SignalR.Client"]
  NuvTools_Notification_Mail_Smtp --> NuvTools_Notification_Mail
  NuvTools_Notification_Mail_Twilio --> NuvTools_Notification_Mail
  NuvTools_Notification_Messaging_Azure_ServiceBus --> NuvTools_Notification_Messaging
  NuvTools_Notification_Realtime_Azure_SignalR --> NuvTools_Notification_Realtime
  classDef outside fill:#f2f6f8,stroke:#9fb3bd,stroke-dasharray: 4 3,color:#536772
```

## Packages

| Package | What it does | Builds on |
| --- | --- | --- |
| [Notification.Mail](https://www.nuget.org/packages/NuvTools.Notification.Mail) | Abstraction library for email notifications in .NET applications. | — |
| [Notification.Mail.Smtp](https://www.nuget.org/packages/NuvTools.Notification.Mail.Smtp) | SMTP implementation for NuvTools.Notification.Mail using MailKit and MimeKit. | `Notification.Mail` |
| [Notification.Mail.Twilio](https://www.nuget.org/packages/NuvTools.Notification.Mail.Twilio) | Twilio Email API implementation for NuvTools.Notification.Mail. | `Notification.Mail` |
| [Notification.Messaging](https://www.nuget.org/packages/NuvTools.Notification.Messaging) | Abstraction library for building messaging solutions in .NET applications. | — |
| [Notification.Messaging.Azure.ServiceBus](https://www.nuget.org/packages/NuvTools.Notification.Messaging.Azure.ServiceBus) | Azure Service Bus implementation for NuvTools.Notification.Messaging. | `Notification.Messaging` |
| [Notification.Realtime](https://www.nuget.org/packages/NuvTools.Notification.Realtime) | Abstraction library for real-time notifications in .NET applications. | — |
| [Notification.Realtime.Azure.SignalR](https://www.nuget.org/packages/NuvTools.Notification.Realtime.Azure.SignalR) | Azure SignalR server-side implementation for NuvTools.Notification.Realtime. | `Notification.Realtime` |
| [Notification.Realtime.Azure.SignalR.Client](https://www.nuget.org/packages/NuvTools.Notification.Realtime.Azure.SignalR.Client) | Azure SignalR client-side implementation for receiving real-time notifications. | — |

## Guides

- [NuvTools.Notification](notification/README.md) — installation, configuration and examples; source on [GitHub](https://github.com/nuvtools/nuvtools-notification).

Every type and member is in the [API reference](xref:NuvTools.Notification.Mail).
