import ChooseUsCard from '../chooseUsCard/ChooseUsCard';
import SectionHeading from '../sectionHeading/SectionHeading';
import Styles from './chooseUs.module.css'
export default function ChooseUs() {
    const datas = [
        {
            imgUrl: '/images/noAnimal.png',
            headText: 'Cruelty Free',
            subText: 'Never tested on animals at any stage of production'
        },
        {
            imgUrl: '/images/noParaben.png',
            headText: 'No Parabens',
            subText: 'Free from harsh chemical preservatives for safer skin care'
        },
        {
            imgUrl: '/images/noSulphate.png',
            headText: 'No Sulphate',
            subText: 'Gentle cleansing without harsh foaming agents'
        },
        {
            imgUrl: '/images/vegan.png',
            headText: 'Vegan',
            subText: 'Made entirely from plant-based ingredients'
        },
        {
            imgUrl: '/images/noPhthalates.png',
            headText: 'No Phthalates',
            subText: 'Formulated without harmful plasticizers or toxins'
        }

    ]
    const { chooseUsComponent, homeHead } = Styles
    return (
        <div className={chooseUsComponent}>
            <SectionHeading props={'Why Choose Us'}/>
            <div className='flex gap-7 justify-center items-center'>
                {datas.map((item, index) => (
                    <ChooseUsCard 
                        key={index}
                        imgUrl={item.imgUrl}
                        headText={item.headText}
                        subText={item.subText}
                    />
                ))}
            </div>
        </div>
    );
}
