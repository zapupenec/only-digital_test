import { FC } from 'react';
import { Button, IButtonProps } from '../../button';
import { useResize } from '../../../hooks';

export const PaginationButton: FC<IButtonProps> = ({ className, ...props }) => {
  const { width } = useResize();

  const getSize = () => {
    if (width > 320 && width < 1400) {
      return 25 + ((50 - 25) * (width - 320)) / (1439 - 320);
    }
    if (width <= 320) {
      return 25;
    }
    return 50;
  };

  const getIconSize = () => {
    if (width > 320 && width < 1400) {
      return 8 + ((14 - 8) * (width - 320)) / (1439 - 320);
    }
    if (width <= 320) {
      return 8;
    }
    return 14;
  };

  return <Button className={className} {...props} size={getSize()} iconSize={getIconSize()} />;
};

// {
//   size = 50,
//   background = 'transparent',
//   border = '1px solid rgb(66, 86, 122, 0.5)',
//   boxShadow = 'none',
//   className,
//   iconSize = 14,
//   iconColor = '#42567a',
//   ...props
// }
