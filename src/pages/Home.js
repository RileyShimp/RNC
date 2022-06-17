import CarouselHeader from '../components/CarouselHeader'
import Contact from './Contact'
import About from './About'
import Events from './Events'

export default function Home() {
  return (
    <div>
      <CarouselHeader />
        <About />
        <Events />
        <Contact />
    </div>
  )
}
