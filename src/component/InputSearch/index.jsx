import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// materialUi
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
// api
import { fetchCachedResults } from '../../services/api';
// component
import SearchResult from '../SearchResult';
// css
import './style.css';

const InputSearch = (props) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [selectedSuggestions, setSelectedSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchValue) {
      fetchResults(searchValue);
    }
  }, [searchValue]);

  const fetchResults = async (query) => {
    if (query) {
      setIsLoading(true);
      const data = await fetchCachedResults(query);
      setResults(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } else {
      setResults([]);
    }
  };

  const clearInput = () => {
    setSearchValue('');
    setResults([]);
  };

  const handleSuggestionClick = (suggestion) => {
    if (!selectedSuggestions.includes(suggestion)) {
      setSelectedSuggestions([...selectedSuggestions, suggestion]);
      // Add new suggestions to the current results
      setResults([...results, suggestion]);
      setSearchValue('');
      fetchResults('');
    }
  };

  const handleSubmit = (selectedSuggestions) => {
    navigate('/list-result', { state: selectedSuggestions });
  };

  return (
    <div className="containerInput">
      <div className="wraper-flex">
        <h1>Find your friend</h1>

        <div className="row-flex">
          <TextField
            label={props.label}
            placeholder={props.placeholder}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            variant="outlined"
            className="paddingRight-input"
          />
          {searchValue && (
            <div className="absolute-element" onClick={clearInput}>
              X
            </div>
          )}
          <div>
            <Button
              variant="contained"
              onClick={() => handleSubmit(selectedSuggestions)}
              disabled={selectedSuggestions.length === 0}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>

      <SearchResult
        results={results}
        searchValue={searchValue}
        selectedSuggestions={selectedSuggestions}
        setSelectedSuggestions={setSelectedSuggestions}
        handleSuggestionClick={handleSuggestionClick}
        isLoading={isLoading}
      />
    </div>
  );
};

export default InputSearch;
