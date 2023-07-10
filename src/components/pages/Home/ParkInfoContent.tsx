import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import SwiperWrap from '../../components/Swiper';
import useGetParkInfoQuery from './queries/useGetParkInfoQuery';

import { swiperDescription, swiperSlide, swiperTitle } from '../../components/Swiper/swiper.css';

export default function ParkInfoContent() {
  const { data: parkInfoArr } = useGetParkInfoQuery();

  console.log(parkInfoArr);

  return (
    <SwiperWrap hasOverLay slidesPerView={2}>
      {parkInfoArr?.map((item, idx) => (
        <SwiperSlide className={swiperSlide} key={`park-${idx}`}>
          <Image priority src={item?.pImg} alt={'main-image'} width={120} height={120} />
          <span className={swiperTitle}>{item?.pName}</span>
          <span className={swiperDescription}>{item?.pZone}</span>
        </SwiperSlide>
      ))}
    </SwiperWrap>
  );
}
