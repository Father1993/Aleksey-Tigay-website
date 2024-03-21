import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo" className="logo" />

            <ul className="header-menu">
                <li>Главная</li>
                <li>Программа</li>
                <li>Почему я</li>
                <li>Планы</li>
                <li>Отзывы</li>
            </ul>
        </div>
    )
}

export default Header
