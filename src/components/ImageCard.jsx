export default function ImageCard({ image, onClick }) {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <div onClick>
      <img width={250} src={image.urls.regular} alt={image.alt_description} onClick={handleClick} />
    </div>
  );
}