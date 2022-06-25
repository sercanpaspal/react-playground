/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { getFruit } from '../store/slices/fruit';
import Highlight from './Highlight';

const Berry = ({ berry }) => (
  <Highlight>
    <h3>Berry</h3>
    <span>{berry}</span>
  </Highlight>
);

const Apple = ({ apple }) => (
  <Highlight>
    <h3>Apple</h3>
    <span>{apple}</span>
  </Highlight>
);

const Banana = ({ banana }) => (
  <Highlight>
    <h3>Banana</h3>
    <span>{banana}</span>
  </Highlight>
);

const FruitWithSingleDrill = () => {
  const { berry, apple, banana } = useSelector(getFruit);

  return (
    <Highlight className={'fruit-wrapper'}>
      <h2>Fruit With Single Drill</h2>
      <div className={'fruit-content'}>
        <Berry berry={berry} />
        <Apple apple={apple} />
        <Banana banana={banana} />
      </div>
    </Highlight>
  );
};

export default FruitWithSingleDrill;
