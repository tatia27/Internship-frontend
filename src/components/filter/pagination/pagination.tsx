import ReactPaginate from "react-paginate";
import "../pagination/pagination.css";

type PaginationProps = {
  currentPage: number;
  totalDocuments: number;
  setCurrentPage: (page: number) => void;
};

function Pagination({ setCurrentPage, totalDocuments }: PaginationProps) {
  const handlePageClick = async (data: { selected: number }) => {
    debugger;
    setCurrentPage(data.selected + 1);
  };

  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePageClick}
      pageCount={totalDocuments}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}

export default Pagination;
