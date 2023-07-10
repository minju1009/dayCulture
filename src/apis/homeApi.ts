import axiosClient from '../libs/axios/axios';

import { snakeToCamel } from '../utils/snakeToCamel';
import convertKeysToLowercase from '../utils/convertKeysToLowercase';
import geocodeAxiosClient from '../libs/axios/geocodeAxios';
import { userGeolocationState } from '../recoil/home';
import { IFilter, IGeolocation } from '../types/home';
import dayjs from 'dayjs';

export const fetchSeoulGilInfo = async (userGeolocation: IGeolocation) => {
  // const { latitude, longitude } = userGeolocation;
  // const district = await fetchCurrentAddress(latitude, longitude);
  const { data } = await axiosClient.get(`/json/SeoulGilWalkCourse/1/12`);
  return snakeToCamel(convertKeysToLowercase(data.SeoulGilWalkCourse.row));
};

export const fetchParkInfo = async () => {
  const { data } = await axiosClient.get('/json/SearchParkInfoService/1/8/고덕산/고덕중학교');

  return snakeToCamel(convertKeysToLowercase(data.SearchParkInfoService));
};

export const fetchHomeInfo = async (filterState: IFilter, title: string = ' ') => {
  const { interest: codename, date } = filterState;
  let params = '';

  if (codename.length > 1 || date) {
    params = `${codename[0]}/ /${date}`;
  }

  const { data } = await axiosClient.get(`/json/culturalEventInfo/1/100/${params}`);

  return snakeToCamel(convertKeysToLowercase(data.culturalEventInfo?.row));
};

export const fetchCurrentAddress = async (lat: number | undefined, lng: number | undefined) => {
  const { data } = await geocodeAxiosClient.get(
    `json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
  );

  return data;
};
