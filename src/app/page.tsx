import HomeHero from "@/components/home/home-hero";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <HomeHero />
      </main>

      <SiteFooter />
    </>
  );
}