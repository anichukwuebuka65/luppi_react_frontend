import SearchIcon from "@mui/icons-material/Search"

const SearchBar = () => {
  return (
    <>
        <div className="flex  bg-white pl-3 rounded-full">
            <span className="text-slate-500 hover:cursor-pointer"><SearchIcon fontSize="small"/></span>
            <input className="focus:outline-none placeholder:text-slate-400 text-slate-500 pl-1.5" type="text" name='search' placeholder="search"/>
        </div>
    </>
  )
}

export default SearchBar