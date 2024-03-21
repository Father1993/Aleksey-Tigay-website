import './Plans.css'
import { plansData } from '../../data/plansData.js'

const Plans = () => {
    return (
        <div className="plans-container">
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className="stroke-text">ГОТОВЫ НАЧАТЬ</span>
                <span>СВОЮ ТРАНСФОРМАЦИЮ</span>
                <span className="stroke-text">ВМЕСТЕ СО МНОЙ</span>
            </div>

            {/* plans card */}

            <div className="plans"></div>
        </div>
    )
}

export default Plans
