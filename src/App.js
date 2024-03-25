import { Helmet } from 'react-helmet'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join'
import Plans from './components/Plans/Plans'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Testimonials from './components/Testimonials/Testimonials'
import './App.css'

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Алексей Тигай | Персональный тренер</title>
                <meta
                    name="description"
                    content="Алексей Тигай - профессиональный, персональный тренер в Хабаровск. Индивидуальные программы тренировок, питания и диета. Запишитесь на первую тренировку уже сегодня!. Фитнес в Хабаровске. МК-Спорт. Спортзал."
                />
                <meta
                    name="keywords"
                    content="Персональный тренер, Алексей Тигай, Хабаровск, Фитнес, МК-Спорт, Спортзал"
                />
                <meta
                    property="og:title"
                    content="Алексей Тигай | Персональный тренер"
                />
                <meta
                    property="og:description"
                    content="Алексей Тигай - профессиональный, персональный тренер в Хабаровск. Индивидуальные программы тренировок, питания и диета. Запишитесь на первую тренировку уже сегодня!. Фитнес в Хабаровске. МК-Спорт. Спортзал."
                />
                <meta property="og:image" content="./assets/logo.png" />
            </Helmet>
            <Hero />
            <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
            <Join />
            <Footer />
        </div>
    )
}

export default App
