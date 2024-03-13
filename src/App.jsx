import { useState } from 'react';
import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
import ImageCard from './components/ImageCard'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn'
import ImageModal from './components/ImageModal'
import './App.css'

export default function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (query) => {


    try {
     
    } catch (error) {
      
    }
  };

  const handleLoadMore = () => {
    
  };

  const handleImageClick = (image) => {
   
  };

  const handleCloseModal = () => {
  
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          <LoadMoreBtn onClick={handleLoadMore} />
        </>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={selectedImage !== null}
          onClose={handleCloseModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}
