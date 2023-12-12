import { DetailedHTMLProps, FC } from 'react';
import { Button, IButtonProps } from '../../button';
import { useResize } from '../../../hooks';

export const SliderButton: FC<IButtonProps> = ({ className, ...props }) => {
  const { width } = useResize();

  const getSize = () => {
    if (width > 320 && width < 1400) {
      return 20 + ((40 - 20) * (width - 320)) / (1439 - 320);
    }
    if (width <= 320) {
      return 20;
    }
    return 40;
  };

  const getIconSize = () => {
    if (width > 320 && width < 1400) {
      return 6 + ((12 - 6) * (width - 320)) / (1439 - 320);
    }
    if (width <= 320) {
      return 6;
    }
    return 12;
  };

  return (
    <Button
      className={className}
      size={getSize()}
      background="#fff"
      border="none"
      boxShadow="0px 0px 15px rgba(56, 119, 238, 0.1)"
      iconSize={12}
      iconColor="#3877ee"
      {...props}
    />
  );
};
