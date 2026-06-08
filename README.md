# Open Banking Consent Flow Explorer

Real Rails Intelligence Dashboard for visualizing Open Banking consent management, permission scope analytics, token lifecycle monitoring, consent workflows, and operational intelligence.

---

## Dashboard Preview

![Dashboard Preview](screenshots/Dashboard.png)

---

## Overview

Open Banking Consent Flow Explorer is an interactive intelligence dashboard designed to provide visibility into customer consent management across Open Banking ecosystems.

The dashboard combines consent analytics, permission scope visualization, token lifecycle monitoring, consent revocation workflows, audit history, filtering, exports, and contextual intelligence into a unified operational view.

Built using FastAPI and Next.js, the project follows the Real Rails Intelligence Dashboard architecture and demonstrates how Open Banking consent activity can be monitored and analyzed through interactive visualizations.

---

## Technology Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* shadcn/ui
* Recharts
* React Flow
* Axios

### Backend

* FastAPI
* Python

---

## Data Sources

### Synthetic Dataset

This project uses a synthetic Open Banking consent dataset for demonstration and visualization purposes.

Dataset characteristics:

* 50 consent records
* Multiple banks
* Multiple permission scopes
* Active consent records
* Revoked consent records
* Expired consent records
* Token refresh history
* Consent lifecycle events

### Dataset Labeling

The dashboard explicitly identifies the dataset as synthetic sample data used for visualization and analytics demonstrations.

### Source Attribution

The project references publicly available Open Banking resources:

* Open Banking UK
* Plaid Documentation
* TrueLayer Documentation

---

## Features

### Permission Scope Analytics

Visualizes Open Banking permission scope distribution using interactive charts.

Supported scopes:

* accounts.read
* balances.read
* transactions.read
* payments.write

---

### Consent Audit Log

Displays operational consent history.

Fields include:

* Consent ID
* Bank
* Scope
* Status
* Refresh Count

Selecting a consent updates the intelligence sidebar.

---

### Token Expiry Simulator

Simulates token lifecycle behavior for the selected consent.

Displays:

* Days Remaining
* Token Status
* Expiry Risk
* Refresh Count

Possible states:

* Active
* Expiring Soon
* Expired

---

### Consent Revocation Workflow

Allows users to revoke consent directly from the dashboard.

Updates:

* Selected Consent
* Audit Log
* Metrics Cards
* Dashboard State

Revocation requests are persisted through the FastAPI backend and remain effective after page refreshes.

---

### Dashboard Filters

Supports real-time filtering across the dashboard.

#### Bank

* HSBC
* Barclays
* Lloyds
* Monzo
* Santander

#### Status

* Active
* Expired
* Revoked

#### Scope

* accounts.read
* balances.read
* transactions.read
* payments.write

### Filter Behavior

Filters dynamically update:

* Audit Log
* Metrics Cards
* Permission Scope Analytics
* Exported Data

---

### Data Export

Supports exporting currently filtered records.

#### JSON Export

Downloads:

```json
consents.json
```

#### CSV Export

Downloads:

```csv
consents.csv
```

Exports contain only the currently filtered consent records.

---

### Open Banking Consent Flow Visualization

Interactive flow diagram built using React Flow.

Flow:

```text
Customer
      ↓
Consent Granted
      ↓
Bank
      ↓
Aggregator
      ↓
Third Party App
```

Features:

* Zoom Controls
* Pan Controls
* Interactive Visualization
* Background Grid

---

### Intelligence Sidebar

Provides contextual intelligence layers.

#### Why This Matters

Explains the significance of customer consent management.

#### Who Controls The Rail

Explains ecosystem participants:

* Banks
* Aggregators
* Regulators
* Third-Party Providers

#### Dashboard Intelligence

Provides:

* Risk Indicators
* Current Operational Context
* Consent Insights

#### Selected Consent Intelligence

Displays:

* Consent ID
* Bank
* Scope
* Status
* Creation Date
* Expiry Date
* Refresh Count

---

### Tooltips

Contextual tooltips are available on dashboard metrics to improve usability and explain consent-related indicators.

---

### Source Attribution Panel

The dashboard includes attribution information identifying referenced Open Banking resources and clarifying the use of synthetic sample data.

---

## Dashboard Layout

The dashboard follows the Real Rails Intelligence Dashboard standard.

### Main Stage (70%)

* Metrics Cards
* Permission Scope Analytics
* React Flow Consent Diagram
* Audit Log

### Intelligence Sidebar (30%)

* Why This Matters
* Who Controls The Rail
* Selected Consent
* Token Simulator
* Dashboard Intelligence
* Filters
* Export Controls
* Dataset Information

---

## System Architecture

```text
Next.js Frontend
        │
        ▼
FastAPI Backend
        │
        ▼
Synthetic Consent Dataset
        │
        ▼
Analytics & Intelligence Layer
        │
        ▼
Dashboard Visualizations
```

---

## API Endpoints

### Metrics

```http
GET /api/metrics
```

Returns:

* Active Consents
* Revoked Consents
* Expired Consents

---

### Consent Records

```http
GET /api/consents
```

Returns all consent records.

---

### Individual Consent

```http
GET /api/consents/{consent_id}
```

Returns a specific consent record.

---

### Permission Scope Analytics

```http
GET /api/scopes
```

Returns permission scope distribution.

---

### Token Analytics

```http
GET /api/token-analytics
```

Returns token refresh statistics.

---

### Revoke Consent

```http
POST /api/revoke/{consent_id}
```

Updates consent status to revoked and persists the change.

---

## Validation Documents

The repository includes:

* VAR_REPORT.md
* UAT_CHECKLIST.md

These documents validate:

* Dashboard Compliance
* Visualization Quality
* Functional Validation
* User Acceptance Testing

---

## Future Enhancements

* OAuth Consent Simulation
* Real Open Banking API Integration
* Live Consent Monitoring
* Real-Time Token Events
* Regulatory Compliance Insights
* Multi-Bank Comparative Analytics

---

## Author

**Gopika T P**

POC #16 – Open Banking Consent Flow Explorer

Real Rails Intelligence Library
