import Layout from "@/components/layout/Layout";
import Gallery from "@/components/sections/Gallery"; // or BeforeAfterGallery if you didn't rename

export default function GalleryPage() {
  return (
    <Layout footerStyle={1}>
      <Gallery />
    </Layout>
  );
}
