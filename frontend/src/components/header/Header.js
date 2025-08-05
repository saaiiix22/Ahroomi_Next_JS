import style from './header.module.css';

export default function Header() {
    const {headerWeb,headerText} = style
    return (
        <div className={headerWeb} >
            <ul className={headerText}>
                <li>Moringa Powered Self-Care. </li>
                <li>Backed by Science </li>
                <li>No Toxins </li>
                <li>Just Nature & Science </li>
            </ul>
        </div>
    );
}