import Layout from "@/components/layout/Layout";

export default function AdminGallery() {
  return (
    <Layout footerStyle={1}>
      <div className="container pt-140 pb-170">
        <h2 className="neutral-1000">Manage Gallery</h2>
        <p className="neutral-500">
          Later you can add upload / edit / delete images here.
        </p>
      </div>
    </Layout>
  );
}
