import { useSelector } from 'react-redux';
import { getApple, getBanana, getBerry } from '../store/slices/fruit';
import Highlight from './Highlight';

const Berry = () => {
  const berry = useSelector(getBerry);

  return (
    <Highlight>
      <h3>Berry</h3>
      <span>{berry}</span>
    </Highlight>
  );
};

const Apple = () => {
  const apple = useSelector(getApple);

  return (
    <Highlight>
      <h3>Apple</h3>
      <span>{apple}</span>
    </Highlight>
  );
};

const Banana = () => {
  const banana = useSelector(getBanana);

  return (
    <Highlight>
      <h3>Banana</h3>
      <span>{banana}</span>
    </Highlight>
  );
};

const FruitWithSingleSelect = () => (
  <Highlight className={'fruit-wrapper'}>
    <h2>Fruit With Single Select</h2>
    <div className={'fruit-content'}>
      <Berry />
      <Apple />
      <Banana />
    </div>
  </Highlight>
);

export default FruitWithSingleSelect;
