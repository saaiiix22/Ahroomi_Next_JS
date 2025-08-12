import Styles from './chooseUs.module.css'
export default function ChooseUsCard(props) {
    const { imgUrl, headText, subText } = props

    const { individualCard } = Styles
    return (
        <div className={individualCard}>
            <div>
                <img src={imgUrl} alt={headText} />
            </div>
            <h4>{headText}</h4>
            <p>{subText}</p>
        </div>
    );
}