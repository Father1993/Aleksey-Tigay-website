import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/* header */}

            <div className="programs-header">
                <span className="stroke-text">Изучи</span>
                <span>Программы</span>
                <span className="stroke-text">для тренировок</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Присоединиться сейчас</span>
                            <img src={RightArrow} alt="Right arrow" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs
