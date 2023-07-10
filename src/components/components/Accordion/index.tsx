import React, { useState } from 'react';
import * as styles from './accordion.css';

import ClosedContainer from './ClosedContainer';
import OpenedContainer from './OpenedContainer';

import { AccordionFilterType } from '../../../types/home';

interface IAccordionProps {
  filterTitle: AccordionFilterType;
  filterDescription: string;
  isOpen: boolean;
  openAccordion: (name: AccordionFilterType) => void;
  closeAccordion: () => void;
  title?: string;
  initialValue?: boolean;
  children?: React.ReactNode;
}

export default function Accordion({
  filterTitle,
  filterDescription = '',
  title = '',
  isOpen,
  openAccordion,
  closeAccordion,
  children,
}: IAccordionProps) {
  return (
    <div className={styles.container}>
      {isOpen ? (
        <OpenedContainer closeAccordion={closeAccordion} title={title}>
          {children}
        </OpenedContainer>
      ) : (
        <ClosedContainer
          filterTitle={filterTitle}
          filterDescription={filterDescription}
          openAccordion={openAccordion}
        />
      )}
    </div>
  );
}
