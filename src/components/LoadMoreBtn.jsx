export default function LoadMoreBtn({ onClick }) {
  const handleButtonClick = () => {
    onClick(); 
   };
  return (
    <button onClick={handleButtonClick}>Load more</button>
  );
}