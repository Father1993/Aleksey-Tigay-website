import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="Спортсмен с блином в руках" />
                <img src={image2} alt="Training images force" />
                <img src={image3} alt="Руки с гантелей" />
                <img src={image4} alt="Спортсмен с тренажером" />
            </div>
            <div className="right-r">
                <span>причины</span>
                <div>
                    <span className="stroke-text">почему </span>
                    <span>выбирают меня?</span>
                </div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt="Галочка 1"></img>
                        <span>БОЛЕЕ 50+ ДОВОЛЬНЫХ УЧЕНИКОВ</span>
                    </div>
                    <div>
                        <img src={tick} alt="Галочка 2" />
                        <span>ТРЕНИРУЙТЕСЬ УМНЕЕ И БЫСТРЕЕ, ЧЕМ РАНЬШЕ</span>
                    </div>
                    <div>
                        <img src={tick} alt="Галочка 3" />
                        <span>1 БЕСПЛАТНАЯ ПРОГРАММА ДЛЯ НОВОГО УЧАСТНИКА</span>
                    </div>
                    <div>
                        <img src={tick} alt="Галочка 4" />
                        <span>НАДЕЖНЫЕ ПАРТНЕРЫ</span>
                    </div>
                </div>
                <span
                    style={{
                        color: 'var(--gray)',
                        fontWeight: 'normal',
                    }}
                >
                    МОИ ПАРТНЁРЫ
                </span>
                <div className="partners">
                    <img src={nb} alt="New Balance" />
                    <img src={adidas} alt="Adidas" />
                    <img src={nike} alt="Nike" />
                </div>
            </div>
        </div>
    )
}

export default Reasons
