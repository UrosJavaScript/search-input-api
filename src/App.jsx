import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputSearch from './component/InputSearch';
import SearchResult from './component/SearchResult';
import ListResult from './component/ListResult';


function App() {
  return (
    <Router>
      <div className="wraper-app">
        <Routes>
          <Route
            path="/"
            element={
              <InputSearch
                label="Search"
                placeholder="Search for anything here"
              />
            }
          />
          <Route path="/" element={<SearchResult />} />
          <Route path="/list-result" element={<ListResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
