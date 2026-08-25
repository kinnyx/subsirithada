import HomeCategories from "@/components/home/home-categories";
import HomeFeaturedProducts from "@/components/home/home-featured-products";
import HomeHero from "@/components/home/home-hero";
import HomeProductSearch from "@/components/home/home-product-search";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <HomeHero />
        <HomeProductSearch />
        <HomeCategories />
        <HomeFeaturedProducts />
      </main>

      <SiteFooter />
    </>
  );
}