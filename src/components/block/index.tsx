import { FC, useState } from 'react';

import styles from './styles.module.scss';
import { Container } from '../container';
import { Main } from '../main';
import { Slider } from '../slider';
import { TCategory } from '../../types';

interface IBlockProps {
  categories: TCategory[];
}

export const Block: FC<IBlockProps> = ({ categories }) => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find(({ id }) => id === activeId);

  return (
    <Container>
      <Main categories={categories} activeId={activeId} setActiveId={setActiveId} />
      <Slider className={styles.block__slider} list={activeCategory?.events!} />
    </Container>
  );
};
