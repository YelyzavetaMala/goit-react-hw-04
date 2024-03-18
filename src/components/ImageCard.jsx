export default function ImageCard({ image, onClick }) {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <div onClick={handleClick}>
      <img width={250} src={image.urls.small} alt={image.alt_description} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}