import { FC } from 'react';
import { Button, IButtonProps } from '../../button';
import { useResize } from '../../../hooks';
import { getValueByWindowWidth } from '../../../lib';

export const PaginationButton: FC<IButtonProps> = ({ className, ...props }) => {
  const { width } = useResize();

  return (
    <Button
      className={className}
      {...props}
      size={getValueByWindowWidth(25, 50, width, 320, 1400)}
      iconSize={getValueByWindowWidth(8, 14, width, 320, 1400)}
    />
  );
};
