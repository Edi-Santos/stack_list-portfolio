import Card from './Card';
import datas from '../../datas';

const stacks = () => datas.map(
  (data, index) => {
    return <Card key={index} name={data.name} imgPath={data.imgPath} />
  }
);

function Main() {
  return stacks();
}

export default Main;
