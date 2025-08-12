import Head from "next/head";
import CarouselParent from "@/components/carouselparent/CarouselParent";
import TrendingContainer from "@/components/tendingContainer/TrendingContainer";
import Styles from './homePage.module.css';
import BestSelling from "@/components/bestSelling/BestSelling";
import AdSection from "@/components/adSection/AdSection";
import FeaturedProductSection from "@/components/FeaturedProductSection/FeaturedProductSection";
import MScience from "@/components/mScience/MScience";
import ChooseUs from "@/components/chooseUs/ChooseUs";
import BasicSpeedDial from "@/components/basicSpeedDial/BasicSpeedDial";
import ReviewCustomer from "@/components/reviewsCustomer/ReviewsCustomer";

export default function HomePage() {
  const { homeContainer } = Styles;

  return (
    <>
      <Head>
        <title>Ahroomi | Natural Oils, Skincare & Wellness Products</title>
        <meta
          name="description"
          content="Shop premium natural oils, skincare, hair care, and wellness products at Ahroomi. Discover our best sellers and trending items with fast delivery."
        />
        <meta
          name="keywords"
          content="ahroomi, natural oils, skincare, hair care, face mask, organic beauty, wellness products"
        />
        <meta name="author" content="Ahroomi" />
        <link rel="canonical" href="https://ahroomi.com" />

        <meta property="og:title" content="Ahroomi | Natural Oils, Skincare & Wellness Products" />
        <meta
          property="og:description"
          content="Explore Ahroomi's top-selling natural oils, skincare essentials, and wellness products. Shop with confidence and fast delivery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahroomi.com" />
        <meta
          property="og:image"
          content="https://ahroomi.com/images/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahroomi | Natural Oils, Skincare & Wellness Products" />
        <meta
          name="twitter:description"
          content="Premium natural oils, skincare, and wellness products from Ahroomi. Discover our best sellers today."
        />
        <meta
          name="twitter:image"
          content="https://ahroomi.com/images/og-image.jpg"
        />
      </Head>

      <div>
        <div className={homeContainer}>
          <TrendingContainer />
          <CarouselParent />
        </div>
        <BestSelling />
        <div className={homeContainer}>
          <AdSection />
        </div>
        <FeaturedProductSection/>
        <MScience/>
        <ChooseUs/>
        <BasicSpeedDial/>
        <ReviewCustomer/>
      </div>
    </>
  );
}
