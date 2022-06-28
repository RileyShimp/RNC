import { GMap } from 'primereact/gmap';


export default function GoogleMap(){

const options = {
  center: {lat: 36.890257, lng: 30.707417},
  zoom: 12
};

return (
  <GMap options={options} style={{width: '100%', minHeight: '320px'}} />
)
}