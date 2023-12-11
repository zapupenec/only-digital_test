import { DetailedHTMLProps, FC } from 'react';
import { Button, IButtonProps } from '../../button';

export const SliderButton: FC<IButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      className={className}
      size={40}
      background="#fff"
      border="none"
      boxShadow="0px 0px 15px rgba(56, 119, 238, 0.1)"
      iconSize={12}
      iconColor="#3877ee"
      {...props}
    />
  );
};
