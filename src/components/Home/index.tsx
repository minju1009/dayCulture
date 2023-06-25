import HomeInfoContent from './HomeInfoContent';
import ParkInfoContent from './ParkInfoContent';
import { title } from './style.css';

export default function Home() {
  return (
    <section>
      <span className={title}>오늘의 발견</span>
      <HomeInfoContent />
      <span className={title}>지금 인기있는 공원</span>
      <ParkInfoContent />
    </section>
  );
}
