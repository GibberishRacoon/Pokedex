import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CardSearch = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }, 280);

        return () => clearTimeout(timeoutId);
    }, [query, navigate]);

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
                placeholder="Search for Pokémon cards..."
            />
        </div>
    );
};

export default CardSearch;
