"use client";

import { usePathname } from "next/navigation";

export function isUrlIsRoot() {
  const pathname = usePathname();
  return pathname === "/";
}