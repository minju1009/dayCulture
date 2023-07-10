import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { IFilter, IHomeInfoTypes } from 'types/home';
import { fetchHomeInfo } from 'apis/homeApi';

const useGetHomeInfoQuery = (filterState: IFilter) =>
  useQuery<IHomeInfoTypes[], AxiosError>(['Home', 'homeInfo', filterState], () => fetchHomeInfo(filterState), {});

export default useGetHomeInfoQuery;
