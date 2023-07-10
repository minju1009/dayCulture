import dayjs from 'dayjs';
import Accordion from '../../../../components/Accordion';

import { useRecoilState } from 'recoil';
import { filterValueState } from '../../../../../recoil/home';

import * as styles from '../filter.css';
import { datePicker } from './date.css';
import { IFilterProps } from 'types/home';

export default function Date({ isOpen, openAccordion, closeAccordion }: IFilterProps) {
  const [filterState, setFilterState] = useRecoilState(filterValueState);
  const { date } = filterState;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setFilterState({ ...filterState, date: value });
  };

  return (
    <Accordion
      filterTitle="날짜"
      filterDescription={date ? date : '날짜 추가'}
      isOpen={isOpen}
      openAccordion={openAccordion}
      closeAccordion={closeAccordion}
      title={'관람 날짜를 알려주세요.'}
    >
      <div className={styles.filterWrap}>
        <div className={styles.title}>
          <form>
            <input
              className={datePicker}
              type="date"
              value={date || dayjs().format('YYYY-MM-DD')}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleDateChange(e)}
              onClick={(e) => e.stopPropagation()}
            />
          </form>
        </div>
      </div>
    </Accordion>
  );
}
