import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api';
import CardList from './CardList';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
    const query = useQuery();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchQuery = query.get('q');
        console.log(`Performing search with query: ${searchQuery}`);

        if (searchQuery) {
            api.card.where({ q: `name:${searchQuery}*` })
                .then(data => {
                    setCards(data.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setError(error);
                    setLoading(false);
                });
        } else {
            api.card.all()
                .then(data => {
                    setCards(data.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setError(error);
                    setLoading(false);
                });
        }
    }, [query]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Search Results</h2>
            <CardList cards={cards} />
        </div>
    );
};

export default SearchResults;
