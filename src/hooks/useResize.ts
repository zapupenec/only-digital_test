import { useEffect, useState } from 'react';

export const useResize = () => {
  const [size, setWidth] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const getSize = () => setWidth({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', getSize);
    return () => window.removeEventListener('resize', getSize);
  }, []);
  return size;
};
