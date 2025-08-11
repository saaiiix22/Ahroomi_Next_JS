import CarouselParent from "@/components/carouselparent/CarouselParent";
import TrendingContainer from "@/components/tendingContainer/TrendingContainer";
import Styles from './homePage.module.css'
import BestSelling from "@/components/bestSelling/BestSelling";

export default function HomePage() {
  const {homeContainer} = Styles
  return (
    <div>
      <div className={homeContainer}>
        <TrendingContainer />
        <CarouselParent />
      </div>
      <BestSelling/>
    </div>
  )
}