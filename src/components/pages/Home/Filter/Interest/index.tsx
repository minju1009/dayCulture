import * as styles from './interest.css';
import { useRecoilState } from 'recoil';
import { filterValueState } from '../../../../../recoil/home';
import Accordion from '../../../../components/Accordion';
import { IFilterProps } from '../../../../../types/home';

const INTEREST_OPTIONS = [
  '클래식',
  '콘서트',
  '축제',
  '전시/미술',
  '영화',
  '연극',
  '뮤지컬/오페라',
  '무용',
  '독주/독창회',
  '기타',
  '국악',
  '교육/체험',
];

export default function Interest({ isOpen, openAccordion, closeAccordion }: IFilterProps) {
  const [filterState, setFilterState] = useRecoilState(filterValueState);
  const { interest } = filterState;

  const handleOptionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const { value: selectedInterest } = e.target as HTMLButtonElement;

    if (interest.includes(selectedInterest)) {
      setFilterState({ ...filterState, interest: interest.filter((item) => item !== selectedInterest) });
      return;
    }
    setFilterState({ ...filterState, interest: [...filterState.interest, selectedInterest] });
  };

  return (
    <Accordion
      filterTitle="관심분야"
      filterDescription={interest.length > 0 ? `🪧 ${interest.join(', ')}` : '분야 선택'}
      isOpen={isOpen}
      openAccordion={openAccordion}
      closeAccordion={closeAccordion}
      title="관심 분야를 알려주세요"
    >
      <div className={styles.optionsWrap}>
        {INTEREST_OPTIONS.map((item, idx) => (
          <button
            className={interest.includes(item) ? styles.selectedOption : styles.option}
            key={`interestOptions-${idx}`}
            value={item}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleOptionClick(e)}
          >
            {item}
          </button>
        ))}
      </div>
    </Accordion>
  );
}
