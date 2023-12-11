import { DetailedHTMLProps, FC } from 'react';
import styles from './styles.module.scss';

interface IContainerProps
  extends DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Container: FC<IContainerProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
