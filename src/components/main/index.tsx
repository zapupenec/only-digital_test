import { DetailedHTMLProps, Dispatch, FC, useLayoutEffect, useRef } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';

import styles from './styles.module.scss';
import { Pagination } from '../pagination';
import { TCategory } from '../../types';

interface IMainProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories: TCategory[];
  activeId: number;
  setActiveId: Dispatch<React.SetStateAction<number>>;
}

export const Main: FC<IMainProps> = ({ categories, activeId, setActiveId }) => {
  const deg = 360 / categories.length;
  const activeCategory = categories.find(({ id }) => id === activeId);

  const calculateDeg = (id: number) => {
    if (id > activeId) {
      return deg * (id - activeId) + deg / 2;
    }

    if (id < activeId) {
      return -(deg * (activeId - id) - deg / 2);
    }

    return deg / 2;
  };

  const handleClick = (id: number) => () => {
    setActiveId(id);
  };

  const intervalRef = useRef({
    from: 0,
    to: 0,
  });
  const elFromRef = useRef<HTMLSpanElement>(null);
  const elToRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const interval = intervalRef.current;
    const elFrom = elFromRef.current;
    const elTo = elToRef.current;

    if (interval && elFrom && elTo) {
      gsap.to(interval, {
        from: activeCategory?.events[0]?.year,
        to: activeCategory?.events.at(-1)?.year,
        duration: 0.5,
        onUpdate: () => {
          elFrom.innerHTML = `${Math.floor(interval.from)}`;
          elTo.innerHTML = `${Math.floor(interval.to)}`;
        },
      });
    }
  }, [activeId]);

  return (
    <div className={styles.Main}>
      <h2 className={styles.Main__title}>Исторические даты</h2>
      <div className={styles.circle}>
        <div className={styles.interval}>
          <span ref={elFromRef} className={styles.from}>
            {activeCategory?.events[0]?.year}
          </span>
          <span ref={elToRef} className={styles.to}>
            {activeCategory?.events.at(-1)?.year}
          </span>
        </div>
        {categories.map(({ id, title }) => (
          <div
            key={id}
            className={cn(styles.category, { [styles.active]: id === activeId })}
            style={{ transform: `rotate(${calculateDeg(id)}deg)` }}
            onClick={handleClick(id)}
          >
            <div
              className={styles.category__content}
              style={{ transform: `rotate(${-calculateDeg(id)}deg)` }}
            >
              <span className={styles.category__id}>{id}</span>
              <span className={styles.category__title}>{title}</span>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        className={styles.Main__pagination}
        active={activeId}
        amount={categories.length}
        setActiveId={setActiveId}
      />
    </div>
  );
};
