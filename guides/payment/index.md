---
uid: guide-payment
---
# Payments

Provider-neutral contracts for customers, payment methods, charges, payouts and webhooks, with typed clients for Stripe and the Omie ERP.

## How the packages fit

Each arrow points at the package it builds on. Rounded, dashed boxes are Nuv Tools packages from another area.

```mermaid
flowchart LR
  NuvTools_Payment["Payment"]
  NuvTools_Payment_Omie_ApiClient["Payment.Omie.ApiClient"]
  NuvTools_Payment_Stripe_ApiClient["Payment.Stripe.ApiClient"]
  NuvTools_Common(["Common"]):::outside
  NuvTools_Payment --> NuvTools_Common
  NuvTools_Payment_Omie_ApiClient --> NuvTools_Common
  NuvTools_Payment_Stripe_ApiClient --> NuvTools_Common
  NuvTools_Payment_Stripe_ApiClient --> NuvTools_Payment
  classDef outside fill:#f2f6f8,stroke:#9fb3bd,stroke-dasharray: 4 3,color:#536772
```

## Packages

| Package | What it does | Builds on |
| --- | --- | --- |
| [Payment](https://www.nuget.org/packages/NuvTools.Payment) | Provider-neutral payment abstractions: contracts for customers and saved payment methods, payee accounts and their onboarding, charges and transfers, and webhook verification, with minor-unit arithmetic and the shared resilient HttpClient registration the NuvTools.Payment provider clients build on. | `Common` |
| [Payment.Omie.ApiClient](https://www.nuget.org/packages/NuvTools.Payment.Omie.ApiClient) | Typed HTTP client for the Omie ERP API. | `Common` |
| [Payment.Stripe.ApiClient](https://www.nuget.org/packages/NuvTools.Payment.Stripe.ApiClient) | Typed client for Stripe, covering customers and saved payment methods, Connect Express onboarding, separate charges and transfers, and webhook signature verification. | `Common`, `Payment` |

## Guides

- [NuvTools.Payment](payment/README.md) — installation, configuration and examples; source on [GitHub](https://github.com/nuvtools/nuvtools-payment).

Every type and member is in the [API reference](../../api/index.md#area-payment).
