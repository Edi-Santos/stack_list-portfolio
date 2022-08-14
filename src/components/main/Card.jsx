function Card({name, imgPath}) {
  return (
    <section>
      <h3>{name}</h3>
      <img src={imgPath} alt={`logo da tecnologia ${name}`} />
    </section>
  );
}

export default Card;
