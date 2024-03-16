import ImageCard from './ImageCard';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul>
       {images !== null &&
        Array.isArray(images) &&
        images.map((image) => {
          return (
            <li key={image.id} onClick={() => onImageClick(image)}>
              <ImageCard image={image}/>
            </li>
          );
        })}
    </ul>
  );
}