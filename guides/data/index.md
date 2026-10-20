---
uid: guide-data
---
# Data

Paging, sorting and filtering that work on any IQueryable, and an Entity Framework Core base with CRUD, transactions and bulk operations, ready for SQL Server and PostgreSQL.

## How the packages fit

Each arrow points at the package it builds on. Rounded, dashed boxes are Nuv Tools packages from another area.

```mermaid
flowchart LR
  NuvTools_Data["Data"]
  NuvTools_Data_EntityFrameworkCore["Data.EntityFrameworkCore"]
  NuvTools_Data_EntityFrameworkCore_PostgreSQL["Data.EntityFrameworkCore.PostgreSQL"]
  NuvTools_Data_EntityFrameworkCore_SqlServer["Data.EntityFrameworkCore.SqlServer"]
  NuvTools_Common(["Common"]):::outside
  NuvTools_Data_EntityFrameworkCore --> NuvTools_Common
  NuvTools_Data_EntityFrameworkCore --> NuvTools_Data
  NuvTools_Data_EntityFrameworkCore_PostgreSQL --> NuvTools_Data_EntityFrameworkCore
  NuvTools_Data_EntityFrameworkCore_SqlServer --> NuvTools_Data_EntityFrameworkCore
  classDef outside fill:#f2f6f8,stroke:#9fb3bd,stroke-dasharray: 4 3,color:#536772
```

## Packages

| Package | What it does | Builds on |
| --- | --- | --- |
| [Data](https://www.nuget.org/packages/NuvTools.Data) | ORM-agnostic .NET library for data manipulation with paging, sorting, and filtering utilities for IQueryable and IEnumerable collections. | — |
| [Data.EntityFrameworkCore](https://www.nuget.org/packages/NuvTools.Data.EntityFrameworkCore) | Entity Framework Core extensions providing DbContextBase with CRUD operations, Result pattern error handling, transaction management, bulk operations, and async paging. | `Common`, `Data` |
| [Data.EntityFrameworkCore.PostgreSQL](https://www.nuget.org/packages/NuvTools.Data.EntityFrameworkCore.PostgreSQL) | PostgreSQL integration for NuvTools.Data.EntityFrameworkCore with simplified DbContext registration, configuration from appsettings.json, and snake_case naming convention support. | `Data.EntityFrameworkCore` |
| [Data.EntityFrameworkCore.SqlServer](https://www.nuget.org/packages/NuvTools.Data.EntityFrameworkCore.SqlServer) | SQL Server integration for NuvTools.Data.EntityFrameworkCore with simplified DbContext registration and configuration from appsettings.json. | `Data.EntityFrameworkCore` |

## Guides

- [NuvTools.Data](data/README.md) — installation, configuration and examples; source on [GitHub](https://github.com/nuvtools/nuvtools-data).

Every type and member is in the [API reference](xref:NuvTools.Data.Paging).
