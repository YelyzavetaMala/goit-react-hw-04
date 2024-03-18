import { useState, useEffect } from 'react';
import { requestImages, requestImagesByBar } from './services/api';
import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import LoadMoreBtn from './components/LoadMoreBtn'
import ImageModal from './components/ImageModal'
import './App.css'


const App = () => {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchBar, setSearchBar] = useState('');
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await requestImages();
        setImages(data.results);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []); 

  useEffect(() => {
    if (searchBar === '') return;

    async function fetchDataByBar() {
      try {
        setIsLoading(true);
        const data = await requestImagesByBar(searchBar, page);
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
        }
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataByBar();
  }, [searchBar, page]); 

  const onSetSearchBar = (query) => {
    setSearchBar(query);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSetSearchBar={onSetSearchBar} />

      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal} />
      {images && <LoadMoreBtn onClick={loadMoreImages} />}
      {selectedImage && <ImageModal isOpen={true} onClose={closeModal} image={selectedImage} />}
    </div>
  );
};

export default App;
