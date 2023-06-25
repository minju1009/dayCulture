import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import SwiperWrap from 'components/components/Swiper';
import useGetHomeInfoQuery from './queries/useGetHomeInfoQuery';

import { swiperDescription, swiperSlide, swiperTitle } from 'components/components/swiper.css';

export default function HomeInfoContent() {
  const { data: homeInfoArr } = useGetHomeInfoQuery();

  return (
    <SwiperWrap hasOverLay slidesPerView={'auto'}>
      {homeInfoArr?.map((item) => (
        <div key={item?.mainImg}>
          <SwiperSlide className={swiperSlide}>
            <Image priority src={item?.mainImg} alt={'main-image'} width={240} height={350} />
            <span className={swiperTitle}>{item?.title}</span>
            <div className={swiperDescription}>{item?.date}</div>
          </SwiperSlide>
        </div>
      ))}
    </SwiperWrap>
  );
}
