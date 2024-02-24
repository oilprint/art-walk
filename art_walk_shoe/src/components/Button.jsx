

const Button = ({label, onClick, isAdded }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`cursor-pointer shrink-0 px-6 py-2 text-base font-lucky  rounded-[40px] border-2 border-primary border-solid hover:bg-accent  ${
        isAdded ? "bg-accent text-dark" : "bg-light text-primary"
      } transition ease-in-out duration-300`}
    >
      {label}
    </button>
  );
}

export default Button