import React from 'react';
import { useLocation } from 'react-router-dom';
// css
import './style.css';

const ListResult = () => {
  const location = useLocation();
  const selectedSuggestions = location.state;
  return (
    <div className="containerList">
      {selectedSuggestions.map((suggestion, index) => (
        <span key={index} className="item-wraper">
          <span className="item-color">Welcome</span>&nbsp;&nbsp;{suggestion}
        </span>
      ))}
    </div>
  );
};

export default ListResult;
