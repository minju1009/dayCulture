import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import SwiperWrap from '../components/Swiper';
import useGetParkInfoQuery from './queries/useGetParkInfoQuery';

import { swiperDescription, swiperSlide, swiperTitle } from '../components/swiper.css';

export default function ParkInfoContent() {
  const { data: parkInfoArr } = useGetParkInfoQuery();

  return (
    <SwiperWrap hasOverLay slidesPerView={2}>
      {parkInfoArr?.map((item) => (
        <div key={item?.pIdx}>
          {item?.pImg && (
            <SwiperSlide className={swiperSlide}>
              <Image priority src={item?.pImg} alt={'main-image'} width={120} height={120} />
              <span className={swiperTitle}>{item?.pName}</span>
              <span className={swiperDescription}>{item?.pZone}</span>
            </SwiperSlide>
          )}
        </div>
      ))}
    </SwiperWrap>
  );
}
