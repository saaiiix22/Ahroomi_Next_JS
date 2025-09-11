import Image from 'next/image';
import Styles from './reviewCard.module.css';

export default function ReviewCard({ img, name, address, heading, text }) {
    return (
        <div className={Styles.card}>
            <h3 className={Styles.heading}>{heading}</h3>
            <p className={Styles.text}>“{text}”</p>
            <div className={Styles.footer}>
                <Image src={img} alt={name} className={Styles.avatar} height={50} width={50}/>
                <div className={Styles.userInfo}>
                    <strong>{name}</strong>
                    <span>{address}</span>
                </div>
            </div>
        </div>
    );
}
