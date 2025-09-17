
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
import NewsLetter from "@/components/newsLetter/NewsLetter";
import ShopByCategory from "@/components/shopByCategory/shopByCategory";;
export default function Home() {
  const { largeHomeContainer,homeContainer } = Styles;
  return (
    <div>
      <div className={largeHomeContainer}>
        <CarouselParent />
        <TrendingContainer />
        {/* <ShopByCategory/> */}
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
      <NewsLetter />
    </div>
  );
}