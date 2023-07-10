import Image from 'next/image';
import * as styles from './accordion.css';
import { AccordionFilterType } from '../../../types/home';

interface IOpenedContainerProps {
  children?: React.ReactNode;
  closeAccordion: () => void;
  title?: string;
}

export default function OpenedContainer({ children, closeAccordion, title }: IOpenedContainerProps) {
  return (
    <div className={styles.openedContainer} onClick={closeAccordion}>
      <h2 className={styles.title}>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
