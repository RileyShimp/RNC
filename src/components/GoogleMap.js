import '../App.css';

export default function GoogleMap(){

return (
  <div className='Map'>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.3042186276207!2d-122.67348491754737!3d45.5240833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950a0754aba665%3A0x8b9c3299c3a7e15e!2s107%20NW%20Couch%20St%2C%20Portland%2C%20OR%2097209!5e0!3m2!1sen!2sus!4v1657491466755!5m2!1sen!2sus" 
      width="100%" 
      height="200" 
      style={{ border: 0}}
      allowfullscreen="" 
      loading="lazy">    </iframe>
  </div>
)
}