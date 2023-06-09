import { useEffect, useState, useContext } from "react";
import { SearchKeywordContext } from "../context/SearchKeywordContext";
import "./SportsList.scss";
const url = "https://raw.githubusercontent.com/dariusk/corpora/master/data/sports/sports.json";

function SportsList() {
  const [data, setData] = useState([]);
  const { searchKeyword } = useContext(SearchKeywordContext);

  useEffect(() => {
    requestSportsList();
  }, [searchKeyword]);

  async function requestSportsList() {
    const result = await fetch(`${url}`);
    const { sports } = await result.json();

    if (searchKeyword === "") {
      setData(sports.slice(0, 20));
    } else if (searchKeyword.length >= 3) {
      const results = sports.filter((sport) => {
        return sport.toLowerCase().includes(searchKeyword.toLowerCase());
      });
      setData(results.slice(0, 20));
    }
  }

  return (
    <ul>
      {data.map((sport, id) => (
        <li className="sports-item" key={id}>
          {sport}
        </li>
      ))}
    </ul>
  );
}

export default SportsList;
