

const Button = ({label, onClick, isAdded }) => {
  console.log(isAdded);

  return (
    <button
      onClick={onClick}
      type="button"
      className={`cursor-pointer px-6 pt-[13px] pb-[7px] text-base font-lucky  rounded-[40px] border-primary   ${
        isAdded ? "bg-accent text-dark" : "bg-light text-primary"
      }`}
    >
      {label}
    </button>
  );
}

export default Button