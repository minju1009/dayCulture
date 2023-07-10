import { useReducer, useState } from 'react';
import { useResetRecoilState } from 'recoil';
import { filterValueState } from '../../../../recoil/home';

import Interest from './Interest';
import Area from './Area';
import Date from './Date';
import Fee from './Fee';

import * as styles from './filter.css';
import { GrClose } from 'react-icons/gr';

import { AccordionFilterType } from '../../../../types/home';

interface IFilterProps {
  closeModal: () => void;
}

export default function Filter({ closeModal }: IFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState<AccordionFilterType>('관심분야');
  const resetFilterValue = useResetRecoilState(filterValueState);

  const openAccordion = (name: AccordionFilterType) => {
    setSelectedFilter(name);
  };

  const closeAccordion = () => {
    setSelectedFilter(undefined);
  };

  const handleCancelBtnClick = () => {
    resetFilterValue();
    closeModal();
  };

  const handleConfirmBtnClick = () => {
    closeModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrap}>
        <span className={styles.closeBtn} onClick={closeModal}>
          <GrClose size={10} />
        </span>
        <div className={styles.accordionContainer}>
          <Interest
            isOpen={selectedFilter === '관심분야'}
            openAccordion={openAccordion}
            closeAccordion={closeAccordion}
          />
          <Area isOpen={selectedFilter === '관심지역'} openAccordion={openAccordion} closeAccordion={closeAccordion} />
          <Date isOpen={selectedFilter === '날짜'} openAccordion={openAccordion} closeAccordion={closeAccordion} />
          <Fee isOpen={selectedFilter === '관람료'} openAccordion={openAccordion} closeAccordion={closeAccordion} />
        </div>
      </div>
      <div className={styles.buttonWrap}>
        <button className={styles.cancelBtn} onClick={handleCancelBtnClick}>
          취소
        </button>
        <button className={styles.confirmBtn} onClick={handleConfirmBtnClick}>
          ✔ 적용
        </button>
      </div>
    </div>
  );
}
