import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}
