import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function AdminPage() {
  return (
    <Layout footerStyle={1}>
      <div className="container pt-140 pb-170">
        <h2 className="neutral-1000 mb-3">Admin Dashboard</h2>
        <p className="neutral-500 mb-4">
          Manage your gallery, services, and website content here.
        </p>

        <div className="d-flex gap-3 flex-wrap">
          <Link className="btn btn-primary" href="/admin/gallery">
            Manage Gallery
          </Link>
          <Link className="btn btn-primary" href="/admin/services">
            Manage Services
          </Link>
          <Link className="btn btn-gray" href="/">
            Back to Website
          </Link>
          <Link href="/logout" className="btn btn-gray">
            Logout
          </Link>
        </div>
      </div>
    </Layout>
  );
}
