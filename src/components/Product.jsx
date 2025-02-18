export default function Product({
  name,
  price,
  imgUrl = 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="640" />
      <p>Price: {price} $</p>
    </div>
  );
}
