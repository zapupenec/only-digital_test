import { Block } from '../components/block';
import categories from '../mock.json';

export const App = () => {
  return <Block categories={categories} />;
};
