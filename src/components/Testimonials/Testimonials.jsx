import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData.js'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {
    const [selected, setSelected] = useState(0)
    const tLenght = testimonialsData.length

    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Отзывы</span>
                <span className="stroke-text">моих клиентов</span>
                <span>которые говорят сами за себя</span>
                <span>{testimonialsData[selected].review}</span>
                <span style={{ color: 'white' }}>
                    <span className="left-t__name">
                        {testimonialsData[selected].name}
                    </span>
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="Клиент" />
                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLenght - 1)
                                : setSelected((prev) => prev - 1)
                        }}
                        src={leftArrow}
                        alt="Стрелочка влево"
                    />
                    <img
                        onClick={() => {
                            selected === tLenght - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        }}
                        src={rightArrow}
                        alt="Стрелочка вправо "
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
