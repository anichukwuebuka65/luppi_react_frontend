import SearchIcon from "@mui/icons-material/Search"

const SearchBar = ({placeholder="search"}) => {
  return (
    <>
        <div className="flex  bg-white pl-3 items-center h-8 rounded-full shadow-md">
            <span className="text-slate-500 hover:cursor-pointer"><SearchIcon fontSize="small"/></span>
            <input className="focus:outline-none w-2/3 placeholder:text-slate-400 text-slate-500 pl-1.5"
             type="text" name='search' placeholder={placeholder} />
        </div>
    </>
  )
}

export default SearchBar