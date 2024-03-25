import { DefaultSeo } from 'next-seo'
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
            <DefaultSeo
                title="Алексей Тигай | Персональный тренер"
                description="Алексей Тигай - профессиональный, персональный тренер в Хабаровск. Индивидуальные программы тренировок, питания и диета. Запишитесь на первую тренировку уже сегодня!. Фитнес в Хабаровске. МК-Спорт. Спортзал."
            />
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
