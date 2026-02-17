import Layout from "@/components/layout/Layout";
import Cta3 from "@/components/sections/Cta3";
import Hero1 from "@/components/sections/Hero1";
import Search1 from "@/components/sections/Search1";
import Services1 from "@/components/sections/Services1";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs1 from "@/components/sections/WhyUs1";
// import BeforeAfterGallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <Layout footerStyle={1}>
      <Hero1 />
      <Search1 />
      <WhyUs1 />
      <Services1 />
      {/* <BeforeAfterGallery /> */}
      <Cta3 />
      <Testimonials />
    </Layout>
  );
}
