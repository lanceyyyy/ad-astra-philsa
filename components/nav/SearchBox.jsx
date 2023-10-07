import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  return (
    <div className="text-white flex items-center border-white border px-2">
      <p className="pr-10">Search...</p>
      <AiOutlineSearch />
    </div>
  );
};

export default SearchBox;
