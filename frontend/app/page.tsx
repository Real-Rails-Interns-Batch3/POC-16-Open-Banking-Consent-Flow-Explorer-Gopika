"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Sidebar from "@/components/dashboard/Sidebar";
import MetricsCards from "@/components/dashboard/MetricsCards";
import ConsentFlowChart from "@/components/dashboard/ConsentFlowChart";
import AuditLog from "@/components/dashboard/AuditLog";
import ConsentFlowDiagram from "@/components/dashboard/ConsentFlowDiagram";

import api from "@/lib/api";

interface Consent {
  id: string;
  bank: string;
  scope: string;
  status: string;
  created_at: string;
  expires_at: string;
  refresh_count: number;
}

interface ScopeData {
  scope: string;
  count: number;
}

export default function Home() {
  const [consents, setConsents] = useState<Consent[]>([]);

  const [selectedConsent, setSelectedConsent] =
    useState<Consent | null>(null);

  const [bankFilter, setBankFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [scopeFilter, setScopeFilter] =
    useState("All");

  useEffect(() => {
    loadDashboardData();
  }, []);

  async function loadDashboardData() {
    try {
      const consentsResponse =
        await api.get("/consents");

      setConsents(consentsResponse.data);

      if (consentsResponse.data.length > 0) {
        setSelectedConsent(
          consentsResponse.data[0]
        );
      }
    } catch (error) {
      console.error(
        "Dashboard data load failed:",
        error
      );
    }
  }

  const filteredConsents = consents.filter(
    (consent) => {
      const bankMatch =
        bankFilter === "All" ||
        consent.bank === bankFilter;

      const statusMatch =
        statusFilter === "All" ||
        consent.status === statusFilter;

      const scopeMatch =
        scopeFilter === "All" ||
        consent.scope === scopeFilter;

      return (
        bankMatch &&
        statusMatch &&
        scopeMatch
      );
    }
  );

  const filteredScopeData: ScopeData[] = [
    {
      scope: "accounts.read",
      count: filteredConsents.filter(
        (c) =>
          c.scope === "accounts.read"
      ).length,
    },
    {
      scope: "balances.read",
      count: filteredConsents.filter(
        (c) =>
          c.scope === "balances.read"
      ).length,
    },
    {
      scope: "transactions.read",
      count: filteredConsents.filter(
        (c) =>
          c.scope === "transactions.read"
      ).length,
    },
    {
      scope: "payments.write",
      count: filteredConsents.filter(
        (c) =>
          c.scope === "payments.write"
      ).length,
    },
  ];

  async function revokeConsent() {
    if (!selectedConsent) return;

    try {
      await api.post(
        `/revoke/${selectedConsent.id}`
      );

      await loadDashboardData();
    } catch (error) {
      console.error(
        "Failed to revoke consent:",
        error
      );
    }
  }

  return (
    <DashboardLayout
      sidebar={
        <Sidebar
          selectedConsent={selectedConsent}
          bankFilter={bankFilter}
          statusFilter={statusFilter}
          scopeFilter={scopeFilter}
          setBankFilter={setBankFilter}
          setStatusFilter={setStatusFilter}
          setScopeFilter={setScopeFilter}
          revokeConsent={revokeConsent}
          filteredConsents={filteredConsents}
        />
      }
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">
          Open Banking Consent Flow Explorer
        </h1>

        <p className="text-slate-400 mb-8">
          Real Rails Intelligence Dashboard
        </p>

        <MetricsCards
          active={
            filteredConsents.filter(
              (c) => c.status === "active"
            ).length
          }
          revoked={
            filteredConsents.filter(
              (c) => c.status === "revoked"
            ).length
          }
          expired={
            filteredConsents.filter(
              (c) => c.status === "expired"
            ).length
          }
        />

        <ConsentFlowChart
          data={filteredScopeData}
        />

        <ConsentFlowDiagram />

        <AuditLog
          consents={filteredConsents}
          onSelectConsent={setSelectedConsent}
        />
      </div>
    </DashboardLayout>
  );
}