import { useSelector } from 'react-redux';
import { getFruit } from '../store/slices/fruit';
import Highlight from './Highlight';

const Berry = () => {
  const { berry } = useSelector(getFruit);

  return (
    <Highlight>
      <h3>Berry</h3>
      <span>{berry}</span>
    </Highlight>
  );
};

const Apple = () => {
  const { apple } = useSelector(getFruit);

  return (
    <Highlight>
      <h3>Apple</h3>
      <span>{apple}</span>
    </Highlight>
  );
};

const Banana = () => {
  const { banana } = useSelector(getFruit);

  return (
    <Highlight>
      <h3>Banana</h3>
      <span>{banana}</span>
    </Highlight>
  );
};

const Fruit = () => {
  return (
    <Highlight className={'fruit-wrapper'}>
      <h2>Fruit</h2>
      <div className={'fruit-content'}>
        <Berry />
        <Apple />
        <Banana />
      </div>
    </Highlight>
  );
};

export default Fruit;
