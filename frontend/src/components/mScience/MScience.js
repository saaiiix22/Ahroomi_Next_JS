import Image from 'next/image';
import Styles from './mscience.module.css'
export default function MScience() {
    const { aboutContent, mScienceText,logoParent } = Styles
    return (
        <div className={aboutContent}>
            <div className={mScienceText}>
                <h2>The M Science</h2>
                <p>
                    Moringa, known as the “miracle tree,” is packed with vitamins, antioxidants, and healthy fats that help protect, nourish, and restore. It fights damage from pollution, keeps skin and hair healthy, and deeply hydrates—bringing the power of nature into self-care.
                </p>
            </div>
            <div className={logoParent}>
                <Image
                    src='/images/ahroomiLogo.png'
                    alt="Ahroomi Logo"
                    width={250}
                    height={80}
                />
            </div>
        </div>
    );
}