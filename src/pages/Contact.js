import EmailForm from '../components/EmailForm'

export default function Contact() {

  return (
      <div className='Contact'>
      <h1 
        style={{ 
          textAlign: 'center', 
          fontSize: '6.5vw',
          color : '#a29f9f'
          }}>Contact for Reservations</h1>
        <EmailForm/>
      </div>
    )
}
