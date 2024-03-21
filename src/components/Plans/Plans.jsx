import './Plans.css'
import { plansData } from '../../data/plansData.js'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className="stroke-text">ГОТОВЫ НАЧАТЬ</span>
                <span>СВОЮ ТРАНСФОРМАЦИЮ</span>
                <span className="stroke-text">ВМЕСТЕ СО МНОЙ</span>
            </div>

            {/* plans card */}

            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>&#8381; {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img
                                        src={whiteTick}
                                        alt="Иконки плана тренировок"
                                    />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>Еще больше преимуществ -></span>
                        </div>
                        <button className="btn">Смотреть</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans
