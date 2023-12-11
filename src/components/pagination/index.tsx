import { DetailedHTMLProps, Dispatch, FC } from 'react';

import styles from './styles.module.scss';
import { PaginationButton } from './pagination-button';
import cn from 'classnames';

interface IPaginationProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active: number;
  amount: number;
  setActiveId: Dispatch<React.SetStateAction<number>>;
}

export const Pagination: FC<IPaginationProps> = ({ active, amount, setActiveId, className }) => {
  const handleClick = (direction: 'prev' | 'next') => () => {
    if (direction === 'prev') {
      setActiveId(active - 1);
      return;
    }
    setActiveId(active + 1);
  };

  return (
    <div className={cn(className, styles.Pagination)}>
      <span className={styles.title}>
        {`${`${active}`.padStart(2, '0')}/${`${amount}`.padStart(2, '0')}`}
      </span>
      <div className={styles.controls}>
        <PaginationButton
          className={cn(styles.prev, { [styles.inactive]: active === 1 })}
          onClick={handleClick('prev')}
        />
        <PaginationButton
          className={cn(styles.next, { [styles.inactive]: active === amount })}
          onClick={handleClick('next')}
        />
      </div>
    </div>
  );
};
