import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import axiosClient from 'libs/axios/axios';
import { ISeoulGilInfoTypes } from 'types/home';
import { snakeToCamel } from 'utils/snakeToCamel';
import convertKeysToLowercase from 'utils/convertKeysToLowercase';

const fetchSeoulGilInfo = async () => {
  const { data } = await axiosClient.get('/json/SeoulGilWalkCourse/1/8');

  return snakeToCamel(convertKeysToLowercase(data.SeoulGilWalkCourse.row));
};

const useGetSeoulGilInfoQuery = () =>
  useQuery<ISeoulGilInfoTypes[], AxiosError>(['Home', 'seoulGilInfo'], fetchSeoulGilInfo);

export default useGetSeoulGilInfoQuery;
