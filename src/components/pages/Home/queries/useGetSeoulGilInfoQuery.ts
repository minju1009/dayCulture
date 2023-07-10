import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { IGeolocation, ISeoulGilInfoTypes } from 'types/home';
import { fetchSeoulGilInfo } from 'apis/homeApi';

const useGetSeoulGilInfoQuery = (userGeolocation: IGeolocation) => {
  return useQuery<ISeoulGilInfoTypes[], AxiosError>(['Home', 'seoulGilInfo'], () => fetchSeoulGilInfo(userGeolocation));
};
export default useGetSeoulGilInfoQuery;
