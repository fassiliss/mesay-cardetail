"use client";

import Link from "next/link";

type BreadcrumbProps = {
  breadcrumbTitle?: string;
};

export default function Breadcrumb({ breadcrumbTitle }: BreadcrumbProps) {
  if (!breadcrumbTitle) return null;

  return (
    <div className="page-header pt-30 background-body">
      <div className="custom-container position-relative mx-auto">
        <div className="container">
          <h2 className="neutral-1000">{breadcrumbTitle}</h2>

          <div className="d-flex gap-2 align-items-center mt-2">
            <Link href="/" className="neutral-700 text-md-medium">
              Home
            </Link>
            <span>/</span>
            <span className="neutral-1000 text-md-bold">{breadcrumbTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
