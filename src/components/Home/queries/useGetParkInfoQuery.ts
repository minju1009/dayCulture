import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import axiosClient from 'libs/axios/axios';
import { IParkInfoTypes } from 'types/home';
import { snakeToCamel } from 'utils/snakeToCamel';
import convertKeysToLowercase from 'utils/convertKeysToLowercase';

const fetchParkInfo = async () => {
  const { data } = await axiosClient.get('/json/SearchParkInfoService/1/8');
  console.log(data);
  return snakeToCamel(convertKeysToLowercase(data.SearchParkInfoService.row));
};

const useGetParkInfoQuery = () => useQuery<IParkInfoTypes[], AxiosError>(['Home', 'parkInfo'], fetchParkInfo);

export default useGetParkInfoQuery;
