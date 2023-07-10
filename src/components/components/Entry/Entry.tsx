import { useRecoilState } from 'recoil';
import { userGeolocationState } from '../../../recoil/home';
import { useEffect } from 'react';
import Home from '../../pages/Home';

export default function Entry() {
  const [userGeolocation, setUserGeolocation] = useRecoilState(userGeolocationState);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserGeolocation({
          ...userGeolocation,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
          (error) => {
            console.error('Error getting geolocation: ', error);
          };
      });
      return;
    }
    console.error('Geolocation is not supported by this browser');
  }, []);

  let map: google.maps.Map;
  const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

  function initMap(): void {
    map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center,
      zoom: 8,
    });
  }

  return <Home />;
}
