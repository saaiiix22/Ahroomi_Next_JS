import Link from 'next/link';
import Styles from './trending.module.css'
export default function Trending() {
    const { scrollScale, circle, labelWrapper, label } = Styles;

    return (
        <Link className={scrollScale} href="#">
            <div className={circle}>
                <img
                    alt="Trending"
                    src="https://setmycart.blob.core.windows.net/smcproduction//7-23-2025/181cc034425847b79b4bd1f75c0bb941/MUSK_100_ML_1.jpg"
                    sizes="20vw"
                />
            </div>
            <div className={labelWrapper}>
                <p className={label}>Trending</p>
            </div>
        </Link>
    );

}