const Pagination = ({ page = 0, onPageChange }) => {
  const handleNext = () => {
    if (onPageChange) {
      onPageChange(page + 1);
    }
  };

  const handlePrev = () => {
    if (onPageChange) {
      onPageChange(page - 1);
    }
  };

  return (
    <div>
      <button disabled={page === 0} onClick={handlePrev}>
        Prev
      </button>
      <span>{page}</span>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default Pagination;
