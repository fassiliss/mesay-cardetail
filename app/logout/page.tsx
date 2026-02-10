"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    document.cookie = "admin=; path=/; max-age=0";
    router.push("/login");
  }, [router]);

  return <p style={{ padding: 40 }}>Logging out...</p>;
}
