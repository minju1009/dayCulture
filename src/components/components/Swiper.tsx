import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { swiper, swiperSlide } from './swiper.css';
import { swiperOverlay } from './swiper.css';

interface ISwiperWrapProps {
  children: React.ReactNode;
  hasOverLay: boolean;
  slidesPerView: string | number;
}

export default function SwiperWrap({ children, hasOverLay, slidesPerView = 'auto' }: ISwiperWrapProps) {
  return (
    <>
      <Swiper slidesPerView={slidesPerView} spaceBetween={8} className={swiper}>
        {hasOverLay && <div className={swiperOverlay} />}
        {children}
      </Swiper>
    </>
  );
}
