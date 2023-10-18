import React, { useEffect, useState } from 'react';
// materialUi
import Typography from '@mui/material/Typography';
import { CircularProgress, ListItemButton } from '@mui/material';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
// css
import './style.css';

const SearchResult = ({
  results,
  isLoading,
  searchValue,
  selectedSuggestions,
  setSelectedSuggestions,
  handleSuggestionClick,
}) => {
  const [displaySelected, setDisplaySelected] = useState([]);
  const [firstSearch, setFirstSearch] = useState(false);

  useEffect(() => {
    setDisplaySelected(selectedSuggestions);
    setFirstSearch(false);
  }, [selectedSuggestions]);

  return (
    <div className="containerSearch">
      {isLoading ? (
        // Display indicator while data is being loaded
        <CircularProgress color="secondary" />
      ) : results && results.length > 0 ? (
        <List className="list-wraper">
          {results.map((result) => (
            <ListItemButton
              key={result.id}
              onClick={() => handleSuggestionClick(result.name)}
            >
              <ListItemText primary={result.name} />
            </ListItemButton>
          ))}
        </List>
      ) : searchValue && !firstSearch ? (
        // Showing "No result found" only if there are no results and it is not the first search
        <Typography className="typography-style">Result not found!</Typography>
      ) : (
        <></>
      )}

      <div className="container-select">
        {selectedSuggestions?.map((suggestion, index) => (
          <div key={index} className="wraper-select">
            {suggestion}
            {/* Deleting the selected item */}
            <div
              onClick={() => {
                const updatedSuggestions = [...selectedSuggestions];
                updatedSuggestions.splice(index, 1);
                setSelectedSuggestions(updatedSuggestions);
              }}
              className="item"
            >
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
