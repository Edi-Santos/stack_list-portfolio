function Card({name, imgPath}) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={imgPath} alt={`logo da tecnologia ${name}`} />
    </div>
  );
}

export default Card;
