---
uid: architecture
---
# Architecture

The framework is organized in eight areas. Packages in one area may build on the foundation and on other areas, never the other way round, so referencing a package never drags in an unrelated stack.

## Areas and how they depend on each other

```mermaid
flowchart BT
  subgraph Foundation
    Common["Common"]
    Resources["Resources"]
    Validation["Validation"]
  end
  Data["Data<br/>+ EF Core, SQL Server, PostgreSQL"]
  Web["ASP.NET Core and Blazor"]
  Security["Security and identity"]
  Notification["Notifications"]
  Report["Reports"]
  Storage["Storage and ledger"]
  Payment["Payments"]

  Data --> Common
  Web --> Data
  Web --> Common
  Security --> Common
  Security --> Resources
  Security --> Validation
  Security --> Data
  Security --> Web
  Payment --> Common

  classDef standalone fill:#fff3ea,stroke:#e96b20,color:#04425b
  class Notification,Report,Storage standalone
```

Notifications, reports and storage (in orange) depend on no other Nuv Tools package: they can be used in any .NET application on their own.

## Contracts and providers

Every area that talks to an outside service splits in two kinds of package:

- **The contract** — interfaces and models, no vendor SDK. Application code references only this.
- **One package per provider** — the implementation and its `Add…` registration. Only the host project references it.

```mermaid
flowchart TB
  subgraph Contracts
    Mail["Notification.Mail"]
    Messaging["Notification.Messaging"]
    Realtime["Notification.Realtime"]
    Storage["Storage"]
    Ledger["Blockchain"]
    Payment["Payment"]
    Sec["Security<br/><i>signing, certificate, biometrics</i>"]
  end
  subgraph Providers
    Smtp["Mail.Smtp"] --> Mail
    Twilio["Mail.Twilio"] --> Mail
    SB["Messaging.Azure.ServiceBus"] --> Messaging
    SR["Realtime.Azure.SignalR"] --> Realtime
    Blob["Storage.Azure"] --> Storage
    ACL["Blockchain.Azure"] --> Ledger
    Stripe["Payment.Stripe.ApiClient"] --> Payment
    KV["Security.Signing.Azure"] --> Sec
    Lacuna["Security.Certificate.Lacuna"] --> Sec
    Serpro["Security.Biometrics.Serpro"] --> Sec
  end
  classDef provider fill:#fff3ea,stroke:#e96b20,color:#04425b
  class Smtp,Twilio,SB,SR,Blob,ACL,Stripe,KV,Lacuna,Serpro provider
```

The vendor SDK (MailKit, Azure SDKs, Stripe.net, Lacuna REST PKI) is referenced only by its provider package, so a contract never pulls a vendor into your domain or application layer.

## Inside a request

A typical ASP.NET Core API built on the framework, from the request to the database and back:

```mermaid
sequenceDiagram
  autonumber
  participant Client
  participant API as ASP.NET Core endpoint
  participant Auth as Security.Identity + Security.AspNetCore
  participant Service as Service (AspNetCore.EntityFrameworkCore)
  participant Db as DbContextBase (Data.EntityFrameworkCore)
  Client->>API: HTTP request + JWT
  API->>Auth: check permission policies
  Auth-->>API: current user
  API->>Service: call with a form or filter
  Service->>Db: query with paging, sorting, filters
  Db-->>Service: IResult<T> with data
  Service-->>API: IResult<T>
  API-->>Client: response with data and messages
```

## Where each package lives

Each area is a separate repository under [github.com/nuvtools](https://github.com/nuvtools), released with its own pipeline. The [guides](../guides/foundation/index.md) link to each repository, and the API reference is generated from the same sources.
