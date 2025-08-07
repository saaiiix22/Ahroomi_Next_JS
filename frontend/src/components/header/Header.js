import style from './header.module.css';

export default function Header() {
    const { headerWeb, scrollWrapper, headerText } = style;
    return (
        <div className={headerWeb}>
            <div className={scrollWrapper}>
                <ul className={headerText}>
                    <li>Moringa Powered Self-Care.</li>
                    <li>Backed by Science</li>
                    <li>No Toxins</li>
                    <li>Just Nature & Science</li>
                </ul>
            </div>
        </div>
    );
}
