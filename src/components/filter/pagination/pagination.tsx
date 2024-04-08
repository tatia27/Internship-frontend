import ReactPaginate from "react-paginate";
import "../pagination/pagination.css";

type PaginationProps = {
  currentPage: number;
  totalDocuments: number;
  setCurrentPage: (page: number) => void;
};

function Pagination({
  currentPage,
  setCurrentPage,
  totalDocuments,
}: PaginationProps) {
  const PAGE_ITEMS = 4;

  const handlePageClick = async (data: { selected: number }) => {
    let currentPage = data.selected + 1;
    setCurrentPage(currentPage);
  };

  return (
    <>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={Math.ceil(totalDocuments / PAGE_ITEMS)}
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
    </>
  );
}

export default Pagination;
