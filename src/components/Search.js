import '../App.css';
import React, { useState, useEffect } from 'react';
import Suggesion from './Suggesion';

const suggesionList = [
  {
    id: 1,
    name: "Sujeet Kumar",
  },
  {
    id: 2,
    name: "Rakesh Singh",
  },
  {
    id: 3,
    name: "Mohit Jain",
  },
  {
    id: 4,
    name: "Neha",
  },
  {
    id: 5,
    name: "Manish Singh",
  },
  {
    id: 6,
    name: "Ram",
  },
]
function Search() {
  const [data, setData] = useState("");
  const [matchedSuggesion, setMatchedSuggesion] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setIsSearched(false);
    searchHandler(data);
  }, [data]);

  const searchHandler = (data) => {
    if (!data) {
      return setMatchedSuggesion([]);
    }
    if (suggesionList && suggesionList.length > 0) {
      const suggesions = suggesionList.filter(item => {
        let name = item.name.toLowerCase();
        return name.includes(data.toLowerCase());
      });
      setIsSearched(true);
      setMatchedSuggesion(suggesions);
    }
  }

  const onSearch = (event) => {
    setData(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <input type="text" id="data" value={data} onChange={onSearch}></input>
        <Suggesion matchedSuggesion={matchedSuggesion} isSearched={isSearched} />
        <div>
        </div>
      </div>
    </div>
  );
}

export default Search;
