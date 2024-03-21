import Header from '../Header/Header'
import './Hero.css'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <div></div>
                    <span>Лучший тренер в городе. Проверь сам!</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Сделай </span>
                        <span>Свое</span>
                    </div>
                    <div>
                        <span>Идеальное тело</span>
                    </div>
                    <div>
                        <span>
                            Я помогу вам сформировать и построить идеальное
                            тело, жить и наслаждаться полной жизнью.
                        </span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+60</span>
                        <span>учеников</span>
                    </div>
                    <div>
                        <span>+150</span>
                        <span>людей уже попробовали на себе</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>программ тренировок</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Попробовать</button>
                    <button className="btn">Узнать больше</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Зайти сейчас</button>

                <div className="heart-rate">
                    <img src={Heart} alt="Heart" />
                    <span>Пульс</span>
                    <span>117 bpm</span>
                </div>

                {/* hero images */}
                <img
                    src={hero_image}
                    alt="hero_images"
                    className="hero-image"
                />
                <img
                    src={hero_image_back}
                    alt="hero images background"
                    className="hero-image-back"
                />

                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="Calories" />
                    <div>
                        <span>Калорий сожжено</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
