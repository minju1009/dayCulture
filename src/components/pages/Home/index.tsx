import { useState } from 'react';

import HomeInfoContent from './HomeInfoContent';
import SeoulGilInfoContent from './SeoulGilInfoContent';
import CustomModal from '../../components/Modal';

import { BsFillFilterCircleFill } from 'react-icons/bs';
import * as styles from './home.css';
import Filter from './Filter';

export default function Home() {
  const [selected, setSelected] = useState('진행중');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusClick = (status: string) => setSelected(status);

  const handleFilterClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section>
      <CustomModal isOpen={isModalOpen} closeModal={handleFilterClick}>
        <Filter closeModal={handleFilterClick} />
      </CustomModal>
      <div className={styles.filter} onClick={handleFilterClick}>
        <div>내 관심사만 찾아보기 🔍</div>
        <BsFillFilterCircleFill />
      </div>
      <div className={styles.titleContainer}>
        <div
          className={selected === '진행중' ? styles.selectedTitle : styles.tab}
          onClick={() => handleStatusClick('진행중')}
        >
          진행중
        </div>
        <div
          className={selected === '진행예정' ? styles.selectedTitle : styles.tab}
          onClick={() => handleStatusClick('진행예정')}
        >
          진행예정
        </div>
      </div>
      <HomeInfoContent />
      <span className={styles.title}>걷고싶은 내 주변 산책길</span>
      <SeoulGilInfoContent />
      {/*<ParkInfoContent />*/}
    </section>
  );
}
