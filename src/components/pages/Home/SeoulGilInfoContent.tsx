import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import SwiperWrap from '../../components/Swiper';
import useGetParkInfoQuery from './queries/useGetParkInfoQuery';

import { swiperDescription, swiperSlide, swiperTitle } from '../../components/Swiper/swiper.css';
import useGetSeoulGilInfoQuery from './queries/useGetSeoulGilInfoQuery';
import { useRecoilValue } from 'recoil';
import { userGeolocationState } from '../../../recoil/home';

export default function SeoulGilInfoContent() {
  const userGeolocation = useRecoilValue(userGeolocationState);
  const { data: seoulGilInfoArr } = useGetSeoulGilInfoQuery(userGeolocation);

  return (
    <SwiperWrap hasOverLay slidesPerView={2}>
      {seoulGilInfoArr?.map((item, idx) => (
        <SwiperSlide className={swiperSlide} key={`seoulGil-${idx}`}>
          <div>산책길 정보</div>
          {/*<Image priority src={item?.pImg} alt={'main-image'} width={120} height={120} />*/}
          {/*<span className={swiperTitle}>{item?.pName}</span>*/}
          {/*<span className={swiperDescription}>{item?.pZone}</span>*/}
        </SwiperSlide>
      ))}
    </SwiperWrap>
  );
}
