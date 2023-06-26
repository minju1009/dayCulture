import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import SwiperWrap from '../components/Swiper';
import useGetParkInfoQuery from './queries/useGetParkInfoQuery';

import { swiperDescription, swiperSlide, swiperTitle } from '../components/swiper.css';
import useGetSeoulGilInfoQuery from './queries/useGetSeoulGilInfoQuery';
import { useRecoilValue } from 'recoil';
import { userGeolocationState } from '../../recoil/home';

export default function SeoulGilInfoContent() {
  const { data: seoulGilInfoArr } = useGetSeoulGilInfoQuery();
  const userGeolocation = useRecoilValue(userGeolocationState);

  console.log(seoulGilInfoArr);
  console.log(userGeolocation);

  return (
    <SwiperWrap hasOverLay slidesPerView={2}>
      {seoulGilInfoArr?.map((item, idx) => (
        <SwiperSlide className={swiperSlide} key={`seoulGil-${idx}`}>
          <Image priority src={item?.pImg} alt={'main-image'} width={120} height={120} />
          <span className={swiperTitle}>{item?.pName}</span>
          <span className={swiperDescription}>{item?.pZone}</span>
        </SwiperSlide>
      ))}
    </SwiperWrap>
  );
}
