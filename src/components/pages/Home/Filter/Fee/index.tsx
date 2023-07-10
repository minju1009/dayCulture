import Accordion from '../../../../components/Accordion';

import * as styles from './fee.css';
import { filterWrap } from '../filter.css';
import { IFilterProps } from 'types/home';
import { useRecoilState } from 'recoil';
import { filterValueState } from '../../../../../recoil/home';

export default function Fee({ isOpen, openAccordion, closeAccordion }: IFilterProps) {
  const [filterState, setFilterState] = useRecoilState(filterValueState);
  const { fee } = filterState;

  const handleFeeOptionClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const { value: fee } = e.target as HTMLButtonElement;
    setFilterState({ ...filterState, fee });
  };
  return (
    <Accordion
      filterTitle="관람료"
      filterDescription={fee ? `💸 ${fee}` : '관람료 추가'}
      isOpen={isOpen}
      openAccordion={openAccordion}
      closeAccordion={closeAccordion}
      title={'금액을 선택해주세요.'}
    >
      <div className={filterWrap}>
        <div
          className={styles.feeOptionsWrap}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => handleFeeOptionClick(e)}
        >
          <button value="유료만" className={fee === '유료만' ? styles.selectedFeeOption : styles.feeOption}>
            유료만
          </button>
          <button value="무료만" className={fee === '무료만' ? styles.selectedFeeOption : styles.feeOption}>
            무료만
          </button>
          <button value="상관없음" className={fee === '상관없음' ? styles.selectedFeeOption : styles.feeOption}>
            상관없음
          </button>
        </div>
      </div>
    </Accordion>
  );
}
