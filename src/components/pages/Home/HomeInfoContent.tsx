import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import SwiperWrap from 'components/components/Swiper';
import useGetHomeInfoQuery from './queries/useGetHomeInfoQuery';

import { swiperDescription, swiperSlide, swiperTitle } from 'components/components/Swiper/swiper.css';
import { useRecoilValue } from 'recoil';
import { filterValueState } from '../../../recoil/home';

export default function HomeInfoContent() {
  const filterState = useRecoilValue(filterValueState);

  const { data: homeInfoArr, isFetching } = useGetHomeInfoQuery(filterState);

  return (
    <>
      {isFetching ? (
        <div>fetching...</div>
      ) : (
        <SwiperWrap hasOverLay slidesPerView={'auto'}>
          {homeInfoArr?.map((item, idx) => (
            <SwiperSlide className={swiperSlide} key={`homeInfo-${idx}`}>
              <Image priority src={item?.mainImg} alt={'main-image'} width={240} height={350} />
              <span className={swiperTitle}>{item?.title}</span>
              <div className={swiperDescription}>{item?.date}</div>
            </SwiperSlide>
          ))}
        </SwiperWrap>
      )}
    </>
  );
}
