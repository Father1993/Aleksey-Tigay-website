import { useRef, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'

const Join = () => {
    useEffect(() => emailjs.init('H0rJDSU8dHqX780Ri'), [])

    const form = useRef()

    const [emailStatus, setEmailStatus] = useState('')

    const validateEmail = (email) => {
        let re =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
        return re.test(email)
    }

    const sendEmail = (e) => {
        e.preventDefault()

        const email = form.current.elements.user_email.value
        if (!validateEmail(email)) {
            setEmailStatus('Некорректный E-mail !!!')
            return
        }

        emailjs
            .sendForm(
                'service_kpr8soo',
                'template_cer27ji',
                form.current,
                'H0rJDSU8dHqX780Ri'
            )
            .then(
                (result) => {
                    setEmailStatus('Сообщение доставлено!')
                },
                (error) => {
                    console.log(error)
                    setEmailStatus('Ошибка при отправке!')
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
                        placeholder="Email"
                        required
                    />
                    <button
                        type="submit"
                        value="Send"
                        className="btn btn-j"
                        onClick={sendEmail}
                    >
                        Попробовать!
                    </button>
                </form>
                <p className="error-message">{emailStatus}</p>
            </div>
        </div>
    )
}

export default Join
