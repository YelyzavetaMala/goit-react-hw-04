export default function ImageCard({ image, onClick }) {

  return (
    <div>
      <img width={250} src={image.urls.small} alt={image.alt_description} onClick={() => onClick(image)} />
    </div>
  );
}