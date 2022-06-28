import CarouselHeader from '../components/CarouselHeader'
import Contact from './Contact'
import About from './About'
import Events from './Events'
import GoogleMap from '../components/GoogleMap'

export default function Home() {
  return (
    <div>
      <CarouselHeader />
        <GoogleMap/>
        <About />
        <Events />
        <Contact />
    </div>
  )
}
