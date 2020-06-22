import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (

        <li className="title" key={result.id}></li>
        <li className="synopsis" key={result.id}></li>
        <li className="date" key={result.id}></li>
        <li className="authors" key={result.id}></li>
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.link.original.url} />
        </li>
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
      ))}
    
    </ul>
  );
}

export default ResultList;
