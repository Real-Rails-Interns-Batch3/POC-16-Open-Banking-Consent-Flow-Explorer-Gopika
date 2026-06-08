# UAT Checklist – Open Banking Consent Flow Explorer

## Project Information

**Project:** Open Banking Consent Flow Explorer

**POC Number:** 16

**Application Type:** Real Rails Intelligence Dashboard

**Tester:** Gopika T P

---

# Objective

This User Acceptance Testing (UAT) checklist validates dashboard functionality, API integrations, visualizations, filtering behavior, export capabilities, consent workflows, intelligence features, dataset transparency, and source attribution implemented for POC #16.

---

# Dashboard Validation

| Test Case            | Expected Result                                   | Status |
| -------------------- | ------------------------------------------------- | ------ |
| Dashboard Loads      | Dashboard renders without errors                  | PASS   |
| Obsidian Theme       | Background uses #030712 theme                     | PASS   |
| 70/30 Layout         | Main stage and sidebar render correctly           | PASS   |
| Responsive Layout    | Dashboard remains usable on multiple screen sizes | PASS   |
| Sidebar Visibility   | Intelligence sidebar remains visible              | PASS   |
| Dashboard Navigation | User can access all dashboard sections            | PASS   |

---

# API Validation

| Test Case              | Expected Result                            | Status |
| ---------------------- | ------------------------------------------ | ------ |
| Metrics API            | Active, Revoked, Expired metrics displayed | PASS   |
| Consent API            | Consent records retrieved successfully     | PASS   |
| Scope Analytics API    | Scope distribution retrieved successfully  | PASS   |
| Token Analytics API    | Token metrics available                    | PASS   |
| Consent Revocation API | Revocation request updates backend dataset | PASS   |
| API Failure Logging    | Errors logged without crashing application | PASS   |

---

# Dataset Validation

| Test Case                  | Expected Result                              | Status |
| -------------------------- | -------------------------------------------- | ------ |
| Synthetic Dataset Loaded   | Dashboard loads consent dataset successfully | PASS   |
| Multi-Bank Records         | Multiple banks represented                   | PASS   |
| Multi-Scope Records        | Multiple permission scopes represented       | PASS   |
| Active Consent Records     | Active records available                     | PASS   |
| Revoked Consent Records    | Revoked records available                    | PASS   |
| Expired Consent Records    | Expired records available                    | PASS   |
| Refresh History Available  | Refresh counts visible                       | PASS   |
| Dataset Transparency Label | Synthetic data notice displayed              | PASS   |

---

# Visualization Validation

| Test Case                | Expected Result                     | Status |
| ------------------------ | ----------------------------------- | ------ |
| Scope Chart Renders      | Permission scope chart visible      | PASS   |
| Chart Data Accuracy      | Scope counts match filtered dataset | PASS   |
| React Flow Diagram Loads | Interactive flow diagram visible    | PASS   |
| Diagram Navigation       | Zoom and pan controls functional    | PASS   |
| Tooltip Display          | Tooltips appear on hover            | PASS   |
| Metrics Cards Display    | Dashboard metrics render correctly  | PASS   |

---

# Consent Workflow Validation

| Test Case                       | Expected Result                               | Status |
| ------------------------------- | --------------------------------------------- | ------ |
| Audit Log Loads                 | Consent records displayed                     | PASS   |
| Select Consent                  | Sidebar updates with selected consent         | PASS   |
| Consent Details View            | Consent intelligence panel updates            | PASS   |
| Revoke Consent                  | Status changes to revoked                     | PASS   |
| Metrics Update After Revocation | Metrics update correctly                      | PASS   |
| Audit Log Update                | Revoked consent displays updated status       | PASS   |
| Sidebar State Update            | Sidebar reflects current consent state        | PASS   |
| Persistence Validation          | Revoked consent remains revoked after refresh | PASS   |

---

# Filter Validation

| Test Case                     | Expected Result                      | Status |
| ----------------------------- | ------------------------------------ | ------ |
| Bank Filter                   | Audit log updates correctly          | PASS   |
| Status Filter                 | Audit log updates correctly          | PASS   |
| Scope Filter                  | Audit log updates correctly          | PASS   |
| Multiple Filters              | Combined filtering behaves correctly | PASS   |
| Filter Reset                  | Dashboard returns to default state   | PASS   |
| Bank Filter Updates Metrics   | Metrics update correctly             | PASS   |
| Status Filter Updates Metrics | Metrics update correctly             | PASS   |
| Scope Filter Updates Metrics  | Metrics update correctly             | PASS   |
| Bank Filter Updates Chart     | Chart updates correctly              | PASS   |
| Status Filter Updates Chart   | Chart updates correctly              | PASS   |
| Scope Filter Updates Chart    | Chart updates correctly              | PASS   |

---

# Token Lifecycle Validation

| Test Case                        | Expected Result                          | Status |
| -------------------------------- | ---------------------------------------- | ------ |
| Token Simulator Loads            | Simulator visible                        | PASS   |
| Expiry Calculation               | Days remaining calculated correctly      | PASS   |
| Expiry Warning                   | Risk status updates appropriately        | PASS   |
| Expired State                    | Expired status displayed when applicable | PASS   |
| Consent Change Updates Simulator | Simulator refreshes for selected consent | PASS   |

---

# Export Validation

| Test Case       | Expected Result                        | Status |
| --------------- | -------------------------------------- | ------ |
| Download JSON   | JSON file downloads successfully       | PASS   |
| Download CSV    | CSV file downloads successfully        | PASS   |
| JSON Accuracy   | Exported JSON matches filtered dataset | PASS   |
| CSV Accuracy    | Exported CSV matches filtered dataset  | PASS   |
| Filtered Export | Only filtered records exported         | PASS   |

---

# Intelligence Layer Validation

| Test Case                     | Expected Result                    | Status |
| ----------------------------- | ---------------------------------- | ------ |
| Why This Matters Panel        | Information displayed correctly    | PASS   |
| Who Controls The Rail Panel   | Information displayed correctly    | PASS   |
| Dashboard Intelligence Panel  | Contextual insights visible        | PASS   |
| Risk Indicator                | Risk level updates correctly       | PASS   |
| Selected Consent Intelligence | Consent details update dynamically | PASS   |

---

# Source Attribution Validation

| Test Case                         | Expected Result             | Status |
| --------------------------------- | --------------------------- | ------ |
| Attribution Section Visible       | Sources displayed correctly | PASS   |
| Open Banking UK Reference         | Source listed correctly     | PASS   |
| Plaid Documentation Reference     | Source listed correctly     | PASS   |
| TrueLayer Documentation Reference | Source listed correctly     | PASS   |

---

# User Interaction Validation

| Test Case                      | Expected Result                           | Status |
| ------------------------------ | ----------------------------------------- | ------ |
| Row Selection                  | Audit log row selection works             | PASS   |
| Sidebar Synchronization        | Sidebar updates from selected row         | PASS   |
| Filter Interaction             | Filters update dashboard immediately      | PASS   |
| Export Interaction             | Export buttons operate correctly          | PASS   |
| Flow Diagram Interaction       | React Flow controls function correctly    | PASS   |
| Consent Revocation Interaction | User can revoke consent through dashboard | PASS   |

---

# Acceptance Criteria

### Required Features

* FastAPI Backend
* Next.js Frontend
* Permission Scope Analytics
* Consent Audit Log
* Token Lifecycle Monitoring
* Consent Revocation Workflow
* Persistent Consent Updates
* Dynamic Dashboard Filters
* Download JSON
* Download CSV
* React Flow Visualization
* Intelligence Sidebar
* Synthetic Data Labeling
* Source Attribution
* Tooltip Support

### Result

All required features validated successfully.

---

# Final Acceptance Summary

## Overall UAT Status: PASS

The Open Banking Consent Flow Explorer successfully satisfies the implemented POC #16 requirements, including:

* Open Banking Consent Intelligence Dashboard
* Permission Scope Analytics
* Synthetic Consent Dataset
* Consent Audit Log
* Token Lifecycle Monitoring
* Persistent Consent Revocation Workflow
* Dynamic Dashboard Filtering
* JSON Export
* CSV Export
* React Flow Consent Visualization
* Interactive Intelligence Sidebar
* Dataset Transparency Labeling
* Source Attribution
* Contextual Tooltips

---

# Sign-off

**Tester:** Gopika T P

**Result:** APPROVED

**Ready for Submission:** YES
