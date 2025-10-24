import React from "react";
import { Outlet } from "react-router-dom";
import ConsentGate from "./components/ConsentGate";
import AdBar from "./components/AdBar";
import TopNav from "./components/TopNav";   // ← 追加

export default function Layout() {
  return (
    <div>
      <ConsentGate />
      <TopNav />         {/* ← 追加：常に表示 */}
      <Outlet />
      <AdBar />
    </div>
  );
}
