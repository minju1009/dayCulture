import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { IParkInfoTypes } from 'types/home';
import { fetchParkInfo } from 'apis/homeApi';

const useGetParkInfoQuery = () => useQuery<IParkInfoTypes[], AxiosError>(['Home', 'parkInfo'], fetchParkInfo);

export default useGetParkInfoQuery;
