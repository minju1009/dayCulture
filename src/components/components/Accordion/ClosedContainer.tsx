import * as styles from './accordion.css';
import { AccordionFilterType } from '../../../types/home';

interface IClosedContainerProps {
  openAccordion: (name: AccordionFilterType) => void;
  filterTitle: AccordionFilterType;
  filterDescription: string;
}

export default function ClosedContainer({ openAccordion, filterTitle, filterDescription }: IClosedContainerProps) {
  return (
    <div className={styles.closedContainer} onClick={() => openAccordion(filterTitle)}>
      <span className={styles.filterTitle}>{filterTitle}</span>
      <span className={styles.filterDescription}>{filterDescription}</span>
    </div>
  );
}
