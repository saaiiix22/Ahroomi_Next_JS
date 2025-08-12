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


      <div>
        <div className={homeContainer}>
          <TrendingContainer />
          <CarouselParent />
        </div>
        <BestSelling />
        <div className={homeContainer}>
          <AdSection />
        </div>
        <FeaturedProductSection />
        <MScience />
        <ChooseUs />
        <BasicSpeedDial />
        <ReviewCustomer />
      </div>
    </>
  );
}
