import { useCallback } from 'react'
import { Link } from 'react-scroll'
import { FaTelegram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import Logo from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
    const handleTelegramLink = useCallback(() => {
        window.open('https://t.me/Aleksey_Tigay', '_blank')
    }, [])

    const handleEmailLink = useCallback(() => {
        window.open('mailto:enjoy_hill@mail.ru', '_blank')
    }, [])

    const handleWhatsAppLink = useCallback(() => {
        window.open('https://wa.me/79990800696', '_blank')
    }, [])

    return (
        <div className="Footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <FaTelegram
                        className="telegram-icon"
                        size={50}
                        onClick={handleTelegramLink}
                    />
                    <IoLogoWhatsapp
                        className="whatsapp-icon"
                        size={50}
                        onClick={handleWhatsAppLink}
                    />
                    <MdEmail
                        className="email-icon"
                        size={50}
                        onClick={handleEmailLink}
                    />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="Footer logo icon" />
                </div>
            </div>
            <div className="blur footer-blur-1"></div>
            <div className="blur footer-blur-2"></div>
        </div>
    )
}

export default Footer
