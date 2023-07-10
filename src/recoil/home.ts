import { atom } from 'recoil';
import { IGeolocation } from '../types/home';

export const userGeolocationState = atom<IGeolocation>({
  key: `permissionEditState`,
  default: {
    latitude: '',
    longitude: '',
  },
});
