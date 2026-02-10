"use client";

import Layout from "@/components/layout/Layout";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr("");

    // ✅ simple admin check (replace with real auth later)
    if (email === "admin@crossshine.com" && pass === "admin123") {
      document.cookie = "admin=true; path=/; max-age=86400"; // 1 day
      router.push("/admin");

      return;
    }

    setErr("Invalid login. Try again.");
  };

  return (
    <Layout footerStyle={1}>
      <div className="container pt-140 pb-170">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="border rounded-3 px-md-5 px-3 ptb-50">
              <div className="login-content">
                <div className="text-center">
                  <p className="neutral-1000 px-4 py-2 bg-2 text-sm-bold rounded-12 d-inline-flex align-items-center">
                    Sign in
                  </p>
                  <h4 className="neutral-1000">Welcome back</h4>
                </div>

                <div className="form-login mt-30">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        className="form-control username"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        className="form-control password"
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </div>

                    {err && (
                      <p className="text-danger text-center mb-3">{err}</p>
                    )}

                    <div className="form-group mb-30">
                      <button className="btn btn-primary w-100" type="submit">
                        Sign in
                      </button>
                    </div>

                    <p className="text-xs neutral-500 text-center">
                      Admin demo: <b>admin@crossshine.com</b> / <b>admin123</b>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
