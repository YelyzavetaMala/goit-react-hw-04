import ImageCard from './ImageCard';

export default function ImageGallery({ images = null }) {
  return (
    <ul>
       {images !== null &&
        Array.isArray(images) &&
        images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard />
              
            </li>
          );
        })}
    </ul>
  );
}