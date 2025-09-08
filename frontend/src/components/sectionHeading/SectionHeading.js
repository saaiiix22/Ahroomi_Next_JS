import Styles from './sectionHeading.module.css'
export default function SectionHeading({ props }) {
    // console.log(props);

    return (
        <div className='p-2 mt-3'>
            <h6 className={Styles.text}>{props}</h6>
        </div>
    );
}