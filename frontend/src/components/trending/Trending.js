import Link from 'next/link';
import Styles from './trending.module.css'
export default function Trending({props}) {
    // console.log(props);
    
    const { scrollScale, circle, labelWrapper, label } = Styles;

    return (
        <Link className={scrollScale} href="#">
            <div className={circle}>
                <img
                    alt={props.label}
                    src={props.imgUrl}
                    sizes="20vw"
                />
            </div>
            <div className={labelWrapper}>
                <p className={label}>{props.label}</p>
            </div>
        </Link>
    );

}