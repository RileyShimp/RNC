import GoogleMap from "../components/GoogleMap"

export default function About() {
  return (
    <>
      <GoogleMap/>
      <div className="AboutUs">
        <h1 
          style={{ 
            textAlign: 'center', 
            fontSize: '6.5vw',
            color : '#a29f9f'
            }}>About Us
        </h1>
        <h3>Reality Night Club, located at 107 Couch Street, is coming to Portland 2022.</h3>
        <h3> With one of the largest venues in the city, VIP bottle service and the best DJ's Portland has to offer, Reality is Portland's premiere nightlife destination.</h3>
    </div>
  </>
  )
}
