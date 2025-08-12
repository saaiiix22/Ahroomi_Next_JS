import Image from 'next/image';
import Styles from './reviewCard.module.css';

export default function ReviewCard({ img, name, address, heading, text }) {
    return (
        <div className={Styles.card}>
            <div className={Styles.imgParent}>
                <Image src={img} alt={name} className={Styles.avatar} height={70} width={70}/>
            </div>
            <h3 className={Styles.heading}>{heading}</h3>
            <p className={Styles.text}>{text}</p>
            <div className={Styles.footer}>
                <strong>{name}</strong>
                <span className='block'>{address}</span>
            </div>
        </div>
    );
}
