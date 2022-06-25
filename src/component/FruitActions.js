import { useDispatch } from 'react-redux';
import {
  increaseApple,
  increaseBanana,
  increaseBerry,
} from '../store/slices/fruit';
import Highlight from './Highlight';

const FruitActions = () => {
  const dispatch = useDispatch();

  return (
    <Highlight className={'fruit-wrapper'}>
      <h2>Actions</h2>
      <div className={'fruit-content'}>
        <button type={'button'} onClick={() => dispatch(increaseBerry())}>
          Increase Berry
        </button>
        <button type={'button'} onClick={() => dispatch(increaseApple())}>
          Increase Apple
        </button>
        <button type={'button'} onClick={() => dispatch(increaseBanana())}>
          Increase Banana
        </button>
      </div>
    </Highlight>
  );
};

export default FruitActions;
