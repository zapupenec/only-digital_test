import { FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FreeMode, Mousewheel } from 'swiper/modules';
import { gsap } from 'gsap';
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
  const [currentList, setCurrentList] = useState(list);

  const sliderRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType>(null);

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

      swiper.slideTo(0);
      setCanSlidePrev(false);
      if (list.length > Number(swiper.params.slidesPerView)) {
        setCanSlideNext(true);
      } else {
        setCanSlideNext(false);
      }
    }
  }, [currentList]);

  useEffect(() => {
    setTimeout(() => {
      setCurrentList(list);
    }, 600);

    return () => {
      gsap.to(sliderRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.to(sliderRef.current, {
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
          });
        },
      });
    };
  }, [list]);

  return (
    <div ref={sliderRef} className={cn(className, styles.slider)}>
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
        {currentList.map((item) => (
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
