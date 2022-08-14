import './card.css';

function Card({name, imgPath}) {
  return (
    <section className='card-container'>
      <h3>{name}</h3>
      <img src={imgPath} alt={`logo da tecnologia ${name}`} />
    </section>
  );
}

export default Card;
