import { useState } from "react";
import SportsList from "./SportsList";
import SearchSports from "./SearchSports";
import { SearchKeywordContext } from "../context/SearchKeywordContext";

function Sports () {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <SearchKeywordContext.Provider value={{ searchKeyword, setSearchKeyword }}>
      <SearchSports />
      <SportsList />
    </SearchKeywordContext.Provider>
  )
}

export default Sports;