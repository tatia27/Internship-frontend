import ReactPaginate from "react-paginate";
import "../pagination/pagination.css";

type Filter = {
  schedule: string[];
  salary: string[];
  typeOfEmployment: string[];
  focusOfInternship: string[];
  currentPage: number;
};

type PaginationProps = {
  totalDocuments: number;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

function Pagination({ totalDocuments, setFilter, filter }: PaginationProps) {
  const handlePageClick = async (data: { selected: number }) => {
    setFilter((prev) => {
      return {
        ...prev,
        currentPage: data.selected + 1,
      };
    });
  };

  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePageClick}
      pageCount={totalDocuments}
      previousLabel="<"
      forcePage={filter.currentPage - 1}
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
