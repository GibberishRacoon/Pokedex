import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const CardDetails = () => {
    const { id } = useParams();
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.card.find(id)
            .then(data => {
                setCard(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!card) {
        return <div>Card not found</div>;
    }

    return (
        <div>
            <h1>{card.name}</h1>
            <img src={card.images.large} alt={card.name} />
            <p>HP: {card.hp}</p>
            <p>Types: {card.types.join(', ')}</p>
            <p>Set: {card.set.name}</p>
            {/* Dodaj inne szczegóły karty, jeśli chcesz */}
        </div>
    );
};

export default CardDetails;
