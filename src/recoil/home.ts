import { atom } from 'recoil';
import { IFilter, IGeolocation } from '../types/home';
import dayjs from 'dayjs';

export const userGeolocationState = atom<IGeolocation>({
  key: `permissionEditState`,
  default: {
    latitude: undefined,
    longitude: undefined,
  },
});

export const filterValueState = atom<IFilter>({
  key: `filterState`,
  default: {
    interest: [],
    area: '',
    date: '',
    fee: '',
  },
});
