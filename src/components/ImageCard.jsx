export default function ImageCard({ image,}) {
  return (
    <div onClick>
      <img width={250} src={image.thumbnail} alt={image.title} />
    </div>
  );
}