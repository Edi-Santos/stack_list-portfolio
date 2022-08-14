import Card from './Card';
import datas from '../../datas';

const stacks = () => datas.map(
  (data, index) => <Card key={index} name={data.name} imgPath={data.imgPath} />
);

function Main() {
  return(
    <main>
      {stacks()}
    </main>
  );
}

export default Main;
