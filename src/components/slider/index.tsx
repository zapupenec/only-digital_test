import { FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FreeMode, Mousewheel } from 'swiper/modules';
import cn from 'classnames';
import 'swiper/scss';

import styles from './styles.module.scss';
import { TEvent } from '../../types';
import { SliderButton } from './slider-button';
import { Slide } from './slide';

interface ISliderProps extends SwiperProps {
  list: TEvent[];
}

export const Slider: FC<ISliderProps> = ({ list, className }) => {
  const swiperRef = useRef<SwiperType>();

  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(false);

  const handleClickNav = (direction: 'prev' | 'next') => () => {
    const swiper = swiperRef.current;
    if (swiper) {
      if (direction === 'prev') {
        swiper.slidePrev();
        return;
      }
      swiper.slideNext();
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on('reachBeginning', () => {
        setCanSlidePrev(false);
      });
      swiper.on('fromEdge', () => {
        setCanSlidePrev(true);
        if (swiper.isBeginning) {
          setCanSlidePrev(false);
        }
        setCanSlideNext(true);
        if (swiper.isEnd) {
          setCanSlideNext(false);
        }
      });
      swiper.on('reachEnd', () => {
        setCanSlideNext(false);
      });
    }
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.slideTo(0);
      setCanSlidePrev(false);
      if (list.length > Number(swiper.params.slidesPerView)) {
        setCanSlideNext(true);
      } else {
        setCanSlideNext(false);
      }
    }
  }, [list]);

  return (
    <div className={cn(className, styles.slider)}>
      <Swiper
        modules={[Mousewheel, FreeMode]}
        spaceBetween={80}
        slidesPerView={3.5}
        freeMode
        mousewheel
        grabCursor
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {list.map((item) => (
          <SwiperSlide key={item.year}>
            <Slide slideTitle={item.year} text={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButton
        className={cn(styles.prev, { [styles.inactive]: !canSlidePrev })}
        onClick={handleClickNav('prev')}
      />
      <SliderButton
        className={cn(styles.next, { [styles.inactive]: !canSlideNext })}
        onClick={handleClickNav('next')}
      />
    </div>
  );
};
