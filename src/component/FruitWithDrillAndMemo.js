/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { getFruit } from '../store/slices/fruit';
import { memo } from 'react';
import Highlight from './Highlight';

const Berry = ({ berry }) => (
  <Highlight>
    <h3>Berry</h3>
    <span>{berry}</span>
  </Highlight>
);
const MemoizedBerry = memo(Berry);

const Apple = ({ apple }) => (
  <Highlight>
    <h3>Apple</h3>
    <span>{apple}</span>
  </Highlight>
);
const MemoizedApple = memo(Apple);

const Banana = ({ banana }) => (
  <Highlight>
    <h3>Banana</h3>
    <span>{banana}</span>
  </Highlight>
);
const MemoizedBanana = memo(Banana);

const FruitWithDrillAndMemo = () => {
  const { berry, apple, banana } = useSelector(getFruit);

  return (
    <Highlight className={'fruit-wrapper'}>
      <h2>Fruit With Drill And Memo</h2>
      <div className={'fruit-content'}>
        <MemoizedBerry berry={berry} />
        <MemoizedApple apple={apple} />
        <MemoizedBanana banana={banana} />
      </div>
    </Highlight>
  );
};

export default FruitWithDrillAndMemo;
