import { DetailedHTMLProps, FC } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { IconArrowSvg } from '../icons';

export interface IButtonProps
  extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: number;
  background?: string;
  border?: string;
  boxShadow?: string;
  iconSize?: number;
  iconColor?: string;
}

export const Button: FC<IButtonProps> = ({
  size = 50,
  background = 'transparent',
  border = '1px solid rgb(66, 86, 122, 0.5)',
  boxShadow = 'none',
  className,
  iconSize = 14,
  iconColor = '#42567a',
  ...props
}) => {
  const style = {
    width: size,
    height: size,
    background,
    border,
    boxShadow,
  };

  return (
    <button className={cn(className, styles.Button)} style={style} {...props}>
      <IconArrowSvg className={styles.icon} width={iconSize} height={iconSize} stroke={iconColor} />
    </button>
  );
};
