import { DetailedHTMLProps, FC } from 'react';
import styles from './styles.module.scss';

interface ISlideProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  slideTitle: number;
  text: string;
}

export const Slide: FC<ISlideProps> = ({ slideTitle, text }) => {
  return (
    <div className={styles.slide}>
      <span className={styles.title}>{slideTitle}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
