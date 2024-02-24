
const Btn = ({Icon, onClick}) => {
  return (
    <button onClick={onClick} className="cursor-pointer shrink-0 flex justify-center items-center text-primary border-2 border-solid border-primary rounded-full w-10 h-10 bg-light">
      <Icon />
    </button>
  );
}

export default Btn