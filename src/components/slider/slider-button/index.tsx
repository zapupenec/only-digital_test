import { DetailedHTMLProps, FC } from 'react';
import { Button, IButtonProps } from '../../button';
import { useResize } from '../../../hooks';
import { getValueByWindowWidth } from '../../../lib';

export const SliderButton: FC<IButtonProps> = ({ className, ...props }) => {
  const { width } = useResize();

  return (
    <Button
      className={className}
      size={getValueByWindowWidth(20, 40, width, 320, 1400)}
      background="#fff"
      border="none"
      boxShadow="0px 0px 15px rgba(56, 119, 238, 0.1)"
      iconSize={getValueByWindowWidth(6, 12, width, 320, 1400)}
      iconColor="#3877ee"
      {...props}
    />
  );
};
