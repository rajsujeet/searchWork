import '../App.css';
import React from 'react';

function Suggesion({ matchedSuggesion, isSearched }) {

  return (
    <div className="App">
      <div>
        {matchedSuggesion && matchedSuggesion.length > 0 ? matchedSuggesion.map(item => {
          return (
            <p key={item.id}>{item?.name}</p>
          )
        }) : !!isSearched && (
          <div>No Record Found!</div>
        )}
        <div>
        </div>
      </div>
    </div>
  );
}

export default Suggesion;
