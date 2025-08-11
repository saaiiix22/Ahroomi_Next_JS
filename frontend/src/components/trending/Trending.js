import Link from 'next/link';
import Styles from './trending.module.css'
export default function Trending() {
    const { scrollScale, circle, labelWrapper, label } = Styles;

    return (
        <Link className={scrollScale} href="#">
            <div className={circle}>
                <img
                    alt="Trending"
                    src="https://nathabit.in/_nat/images/year_end_campaign_collection_e41b7e5e66.jpg?format=auto&width=1920&quality=75"
                    sizes="20vw"
                />
            </div>
            <div className={labelWrapper}>
                <p className={label}>Trending</p>
            </div>
        </Link>
    );

}