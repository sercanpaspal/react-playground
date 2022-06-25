import FruitWithSingleSelect from './component/FruitWithSingleSelect';
import Fruit from './component/Fruit';
import FruitActions from './component/FruitActions';
import FruitWithSingleDrill from './component/FruitWithSingleDrill';
import FruitWithDrillAndMemo from './component/FruitWithDrillAndMemo';

const App = () => (
  <div className={'app-wrapper'}>
    <h1>
      The Relation Between Rendering of React Components and Selecting State
      from Redux
    </h1>
    <p>Red highlight mean is component rendered.</p>
    <Fruit />
    <FruitWithSingleDrill />
    <FruitWithDrillAndMemo />
    <FruitWithSingleSelect />
    <FruitActions />
  </div>
);

export default App;
