
const Info = ({title, description, imageUrl, onClick, href, label}) => {
  return (
    <div className="grow flex flex-col justify-center items-center ">
      <img
        src={imageUrl}
        alt={description}
        width={120}
        height={120}
        className="mb-5"
      />

      <h2 className="font-lucky mb-2 mt-1 text-2xl">{title}</h2>
      <p className="font-inter text-center font-medium text-xl max-w-[200px] w-full mb-8">
        {description}
      </p>

      {href ? (
        <a
          className="cursor-pointer shrink-0 px-10 py-2 text-base font-lucky rounded-[40px] border-2  bg-accent text-primary border-primary border-solid hover:bg-light transition ease-in-out duration-300 "
          href={href}
        >
          Go back
        </a>
      ) : (
        <button
          onClick={onClick}
          className="cursor-pointer shrink-0 px-10 py-2 text-base font-lucky rounded-[40px] border-2  bg-accent text-primary border-primary border-solid hover:bg-light transition ease-in-out duration-300 "
        >
          Go back
        </button>
      )}
    </div>
  );
}

export default Info