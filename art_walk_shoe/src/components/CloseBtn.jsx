import { CloseBtnIcon } from "../assets/icons";

const CloseBtn = ({onClick}) => {
  return (
    <button 
      onClick={onClick}
      className="flex justify-center items-center rounded-full border-primary border bg-light  text-primary hover:text-accent hover:border-accent focus:text-accent  active:bg-gray-700 w-11 h-11 transition duration-300 easy-in-out"
      type="button"
    >
     <CloseBtnIcon />
    </button>
  );
}

export default CloseBtn