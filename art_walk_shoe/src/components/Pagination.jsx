import ReactPaginate from 'react-paginate';

const Pagination = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className="mx-auto flex justify-center items-center gap-3"
      pageLinkClassName="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full border-2 border-solid border-primary font-bold hover:bg-accent transition ease-in-out duration-300"
      activeClassName="bg-accent rounded-full text-2xl   font-lucky text-light"
      previousLinkClassName="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full text-2xl text-bold hover:text-accent"
      nextLinkClassName="cursor-pointer flex justify-center items-center w-10 h-10 rounded-full text-2xl text-bold hover:text-accent"
      disabledLinkClassName="text-grey cursor-none hover:text-grey"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={5}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
