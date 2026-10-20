---
uid: guide-security
---
# Security and identity

Tokens, cryptography, SSRF protection and CAPTCHA, permission-based authorization on ASP.NET Identity, and contracts for signing keys, certificates and facial verification with their providers.

## How the packages fit

Each arrow points at the package it builds on. Rounded, dashed boxes are Nuv Tools packages from another area.

```mermaid
flowchart LR
  NuvTools_Security["Security"]
  NuvTools_Security_AspNetCore["Security.AspNetCore"]
  NuvTools_Security_AspNetCore_Blazor["Security.AspNetCore.Blazor"]
  NuvTools_Security_Biometrics_Serpro["Security.Biometrics.Serpro"]
  NuvTools_Security_Certificate_Lacuna["Security.Certificate.Lacuna"]
  NuvTools_Security_Signing_Azure["Security.Signing.Azure"]
  NuvTools_Security_Identity["Security.Identity"]
  NuvTools_Security_Identity_AspNetCore["Security.Identity.AspNetCore"]
  NuvTools_Security_Identity_EntityFrameworkCore["Security.Identity.EntityFrameworkCore"]
  NuvTools_Security_Identity_Models["Security.Identity.Models"]
  NuvTools_AspNetCore_Blazor(["AspNetCore.Blazor"]):::outside
  NuvTools_Common(["Common"]):::outside
  NuvTools_Data_EntityFrameworkCore(["Data.EntityFrameworkCore"]):::outside
  NuvTools_Resources(["Resources"]):::outside
  NuvTools_Validation(["Validation"]):::outside
  NuvTools_Security_AspNetCore --> NuvTools_Common
  NuvTools_Security_AspNetCore --> NuvTools_Security
  NuvTools_Security_AspNetCore_Blazor --> NuvTools_AspNetCore_Blazor
  NuvTools_Security_AspNetCore_Blazor --> NuvTools_Common
  NuvTools_Security_AspNetCore_Blazor --> NuvTools_Security
  NuvTools_Security_Biometrics_Serpro --> NuvTools_Common
  NuvTools_Security_Biometrics_Serpro --> NuvTools_Security
  NuvTools_Security_Biometrics_Serpro --> NuvTools_Validation
  NuvTools_Security_Certificate_Lacuna --> NuvTools_Common
  NuvTools_Security_Certificate_Lacuna --> NuvTools_Security
  NuvTools_Security_Signing_Azure --> NuvTools_Security
  NuvTools_Security_Identity --> NuvTools_Security
  NuvTools_Security_Identity_AspNetCore --> NuvTools_Common
  NuvTools_Security_Identity_AspNetCore --> NuvTools_Security
  NuvTools_Security_Identity_AspNetCore --> NuvTools_Security_Identity_Models
  NuvTools_Security_Identity_EntityFrameworkCore --> NuvTools_Data_EntityFrameworkCore
  NuvTools_Security_Identity_Models --> NuvTools_Resources
  NuvTools_Security_Identity_Models --> NuvTools_Validation
  classDef outside fill:#f2f6f8,stroke:#9fb3bd,stroke-dasharray: 4 3,color:#536772
```

## Packages

| Package | What it does | Builds on |
| --- | --- | --- |
| [Security](https://www.nuget.org/packages/NuvTools.Security) | Core security library providing JWT token handling, cryptography utilities, ClaimsPrincipal extensions, the shared CAPTCHA contract, the certificate authentication and facial verification contracts, and SSRF protection for outbound HTTP. | — |
| [Security.AspNetCore](https://www.nuget.org/packages/NuvTools.Security.AspNetCore) | Security configuration, authenticated user services and adaptive CAPTCHA verification for ASP.NET Core applications. | `Common`, `Security` |
| [Security.AspNetCore.Blazor](https://www.nuget.org/packages/NuvTools.Security.AspNetCore.Blazor) | Authentication state providers for Blazor applications with JWT and OIDC support, plus an adaptive CAPTCHA component. | `AspNetCore.Blazor`, `Common`, `Security` |
| [Security.Biometrics.Serpro](https://www.nuget.org/packages/NuvTools.Security.Biometrics.Serpro) | SERPRO Datavalid implementation of the NuvTools.Security facial verification contract: a capture is matched against the face on government record for a CPF. | `Common`, `Security`, `Validation` |
| [Security.Certificate.Lacuna](https://www.nuget.org/packages/NuvTools.Security.Certificate.Lacuna) | Lacuna REST PKI implementation of the NuvTools.Security certificate authentication contract: possession of the private key and the ICP-Brasil chain are validated on the service. | `Common`, `Security` |
| [Security.Signing.Azure](https://www.nuget.org/packages/NuvTools.Security.Signing.Azure) | Azure Key Vault implementation of the NuvTools.Security signing key contract: tokens are signed by a key that never leaves the vault, and a rotated key is picked up without a restart. | `Security` |
| [Security.Identity](https://www.nuget.org/packages/NuvTools.Security.Identity) | Permission-based authorization with dynamic policy provider and claim-based permission handler for ASP.NET Identity. | `Security` |
| [Security.Identity.AspNetCore](https://www.nuget.org/packages/NuvTools.Security.Identity.AspNetCore) | ASP.NET Core user management service with email confirmation, password management, and role administration for ASP.NET Identity. | `Common`, `Security`, `Security.Identity.Models` |
| [Security.Identity.EntityFrameworkCore](https://www.nuget.org/packages/NuvTools.Security.Identity.EntityFrameworkCore) | Entity Framework Core identity persistence with transaction management and batch operations for ASP.NET Identity. | `Data.EntityFrameworkCore` |
| [Security.Identity.Models](https://www.nuget.org/packages/NuvTools.Security.Identity.Models) | ASP.NET Identity base models, form DTOs, and API models with localized validation for user and role management. | `Resources`, `Validation` |

## Guides

- [NuvTools.Security](security/README.md) — installation, configuration and examples; source on [GitHub](https://github.com/nuvtools/nuvtools-security).
- [NuvTools.Security.Identity](security-identity/README.md) — installation, configuration and examples; source on [GitHub](https://github.com/nuvtools/nuvtools-security-identity).

Every type and member is in the [API reference](xref:NuvTools.Security.Biometrics).
