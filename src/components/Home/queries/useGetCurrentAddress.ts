import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { snakeToCamel } from 'utils/snakeToCamel';
import convertKeysToLowercase from 'utils/convertKeysToLowercase';
import geocodeAxiosClient from '../../../libs/axios/geocodeAxios';
import process from 'process';

const fetchCurrentAddress = async (lat: number, lng: number) => {
  const { data } = await geocodeAxiosClient.get(
    `json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
  );

  console.log('data', data.results[0].formatted_address.split(' ').find(item => item.));
  return data;
};

const useGetCurrentAddress = (lat: number, lng: number) =>
  useQuery<[], AxiosError>(['Home', 'currentAddress'], () => fetchCurrentAddress(lat, lng), {
    enabled: lat > 0 && lng > 0,
  });

export default useGetCurrentAddress;
