import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_wtnci4c', 'template_nyjjyl4', form.current, {
                publicKey: 'QlnHU5eUYzTWAA9kN',
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                },
                (error) => {
                    console.log('FAILED...', error.text)
                }
            )
    }

    return (
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">Прокачай</span>
                    <span>свое тело</span>
                </div>
                <div>
                    <span>вместе</span>
                    <span className="stroke-text">со мной!</span>
                </div>
            </div>
            <div className="right-j">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="email-container"
                >
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Введите свой Email"
                    />
                    <button className="btn btn-j" onClick={sendEmail}>
                        Попробовать!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Join
