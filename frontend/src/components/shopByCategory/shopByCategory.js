import SectionHeading from "../sectionHeading/SectionHeading";
import Styles from './shopByCategory.module.css';

export default function ShopByCategory() {
  const { categoryContainer, card1, card2, card3, card4, card5, darkCard } = Styles;

  return (
    <div>
      <SectionHeading props={'Shop By Category'} />

      <div className={`${categoryContainer} grid grid-cols-12 gap-4`}>

        <div className={`${card1} ${darkCard} col-span-3`}>
          <img src="/images/shopCategory1.webp" alt="" />
        </div>


        <div className="col-span-9 grid grid-cols-12 grid-rows-2 gap-4 h-[500px]">

          <div className="col-span-9 row-span-1">
            <div className={`${card2} ${darkCard}`}>
              <img src="/images/shopCategory2.png" alt="" />
            </div>
          </div>
          <div className="col-span-3 row-span-1">
            <div className={`${card3} ${darkCard}`}>
              <img src="/images/shopCategory3.webp" alt="" />
            </div>
          </div>


          <div className="col-span-6 row-span-1">
            <div className={`${card4} ${darkCard}`}>
              <img src="/images/shopCategory4.webp" alt="" />
            </div>
          </div>
          <div className="col-span-6 row-span-1">
            <div className={`${card5} ${darkCard}`}>
              <img src="/images/shopCategory5.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}