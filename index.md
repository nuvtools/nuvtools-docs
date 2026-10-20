---
_layout: landing
title: Open source .NET libraries
description: Open source .NET libraries by Nuv Tools — data, ASP.NET Core and Blazor, security, notifications, reports, storage and payments.
---

<div class="nt-hero">
  <span class="nt-hero__kicker">Open source · MIT</span>
  <h1>Nuv Tools Framework</h1>
  <p>The .NET libraries behind every Nuv Tools product: data, ASP.NET Core and Blazor, security and identity, notifications, reports, storage and payments. Neutral contracts, one package per provider, ready for .NET 8, 9 and 10.</p>
  <div class="nt-hero__actions">
    <a class="nt-btn" href="articles/getting-started.md"><i class="bi bi-rocket-takeoff"></i> Get started</a>
    <a class="nt-btn nt-btn--light" href="api/toc.yml"><i class="bi bi-braces"></i> API reference</a>
    <a class="nt-btn nt-btn--light" href="https://github.com/nuvtools"><i class="bi bi-github"></i> GitHub</a>
  </div>
  <code class="nt-hero__install">dotnet add package NuvTools.Common</code>
</div>

<div class="nt-stats">
  <div><strong>40</strong><span>packages on NuGet</span></div>
  <div><strong>200k+</strong><span>downloads</span></div>
  <div><strong>8</strong><span>areas</span></div>
  <div><strong>.NET 10</strong><span>and 8, 9</span></div>
</div>

## Explore by area

<div class="nt-cards">
  <a class="nt-card" href="guides/foundation/index.md"><i class="bi bi-bricks"></i><strong>Foundation</strong><span>Result pattern, common helpers, bilingual resources and Brazilian document validation.</span></a>
  <a class="nt-card" href="guides/data/index.md"><i class="bi bi-database"></i><strong>Data</strong><span>Paging and filtering, and an EF Core base for SQL Server and PostgreSQL.</span></a>
  <a class="nt-card" href="guides/web/index.md"><i class="bi bi-window-stack"></i><strong>ASP.NET Core and Blazor</strong><span>CRUD services, localization, JavaScript interop and MudBlazor components.</span></a>
  <a class="nt-card" href="guides/security/index.md"><i class="bi bi-shield-lock"></i><strong>Security and identity</strong><span>JWT, cryptography, CAPTCHA, ASP.NET Identity, Key Vault signing and ICP-Brasil.</span></a>
  <a class="nt-card" href="guides/notification/index.md"><i class="bi bi-bell"></i><strong>Notifications</strong><span>E-mail, messaging and real time on SMTP, Twilio, Service Bus and SignalR.</span></a>
  <a class="nt-card" href="guides/report/index.md"><i class="bi bi-file-earmark-bar-graph"></i><strong>Reports</strong><span>PDF, Excel and CSV from your own models, and fixed-length file reading.</span></a>
  <a class="nt-card" href="guides/storage/index.md"><i class="bi bi-hdd-stack"></i><strong>Storage and ledger</strong><span>Blob storage and a tamper-evident ledger on Azure.</span></a>
  <a class="nt-card" href="guides/payment/index.md"><i class="bi bi-credit-card"></i><strong>Payments</strong><span>Neutral charge and payout contracts with Stripe and Omie clients.</span></a>
</div>

## One contract, many providers

Your application references the contract; the composition root picks the provider. Switching from SMTP to Twilio, or adding a second cloud, never touches the code that sends the e-mail.

```mermaid
flowchart LR
  App["Your application"] -->|depends on| Contract["NuvTools.Notification.Mail<br/><i>IMailService</i>"]
  Root["Program.cs<br/><i>composition root</i>"] -->|registers one| Smtp["Mail.Smtp"]
  Root -.->|or| Twilio["Mail.Twilio"]
  Smtp -->|implements| Contract
  Twilio -->|implements| Contract
  classDef provider fill:#fff3ea,stroke:#e96b20,color:#04425b
  class Smtp,Twilio provider
```

Read more in [Architecture](articles/architecture.md), or start with [Getting started](articles/getting-started.md).
