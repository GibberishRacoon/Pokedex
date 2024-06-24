import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import CardDetails from './components/CardDetails';
import CardSearch from './components/CardSearch';
import SearchResults from './components/SearchResults';

const App = () => {
    return (
        <Router>
            <div>
                <CardSearch />
                <Routes>
                    <Route path="/cards/:id" element={<CardDetails />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/" element={<CardList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
