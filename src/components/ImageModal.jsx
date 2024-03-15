import ReactModal from 'react-modal';

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <ReactModal isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}>
      <img src={image.urls.regular} alt={image.alt_description} />
    </ReactModal>
  );
}