import { AccordionFilterType } from '../../../../../types/home';
import { useRecoilState } from 'recoil';
import { filterValueState } from '../../../../../recoil/home';
import Accordion from '../../../../components/Accordion';
import * as styles from '../Interest/interest.css';
import { IFilterProps } from '../../../../../types/home';

const AREA_OPTIONS = [
  '마포구',
  '서초구',
  '노원구',
  '강동구',
  '광진구',
  '도붕구',
  '중랑구',
  '종로구',
  '강남구',
  '중구',
  '강북구',
  '금천구',
  '동대문구',
];

export default function Area({ isOpen, openAccordion, closeAccordion }: IFilterProps) {
  const [filterState, setFilterState] = useRecoilState(filterValueState);
  const { area } = filterState;
  const handleOptionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value: area } = e.target as HTMLButtonElement;
    e.stopPropagation();
    setFilterState({ ...filterState, area });
  };

  return (
    <Accordion
      filterTitle="관심지역"
      filterDescription={area ? `📍 ${area}` : '지역 선택'}
      isOpen={isOpen}
      openAccordion={openAccordion}
      closeAccordion={closeAccordion}
      title="관람 지역을 알려주세요"
    >
      <div className={styles.optionsWrap}>
        {AREA_OPTIONS.map((item, idx) => (
          <button
            className={item === area ? styles.selectedOption : styles.option}
            key={`areaOptions-${idx}`}
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
