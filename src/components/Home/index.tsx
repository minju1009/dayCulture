import HomeInfoContent from './HomeInfoContent';
import ParkInfoContent from './ParkInfoContent';

import { title } from './style.css';
import SeoulGilInfoContent from './SeoulGilInfoContent';

export default function Home() {
  return (
    <section>
      <span className={title}>이번주 즐길거리</span>
      <HomeInfoContent />
      <span className={title}>걷고싶은 내 주변 산책길</span>
      <SeoulGilInfoContent />
      <ParkInfoContent />
    </section>
  );
}
