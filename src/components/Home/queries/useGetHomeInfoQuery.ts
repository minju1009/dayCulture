import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import axiosClient from 'libs/axios/axios';
import { IHomeInfoTypes } from 'types/home';
import { snakeToCamel } from 'utils/snakeToCamel';
import convertKeysToLowercase from 'utils/convertKeysToLowercase';

const fetchHomeInfo = async () => {
  const { data } = await axiosClient.get('/json/culturalEventInfo/1/8');
  return snakeToCamel(convertKeysToLowercase(data.culturalEventInfo.row));
};

const useGetHomeInfoQuery = () => useQuery<IHomeInfoTypes[], AxiosError>(['Home', 'homeInfo'], fetchHomeInfo);

export default useGetHomeInfoQuery;
