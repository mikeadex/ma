import ReactPaginate from "react-paginate";

export default function Pagination({ handlePageClick, pageCount }) {
  return (
    <ReactPaginate
      breakLabel="..."
      activeClassName="active"
      nextLabel={
        <>
          <i className="fal fa-long-arrow-right"></i>
          <i className="fal fa-long-arrow-right"></i>
        </>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={
        <>
          <i className="fal fa-long-arrow-left"></i>
          <i className="fal fa-long-arrow-left"></i>
        </>
      }
      renderOnZeroPageCount={null}
    />
  );
}
