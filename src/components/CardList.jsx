import React from 'react';
import { Link } from 'react-router-dom';

const CardList = ({ cards = [] }) => {
    if (!cards.length) {
        return <div>No cards found</div>;
    }

    return (
        <div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {cards.map(card => (
                    <li key={card.id} style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
                        <img src={card.images.small} alt={card.name} style={{ width: '100px', marginRight: '10px' }} />
                        <div>
                            <Link to={`/cards/${card.id}`}>{card.name}</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardList;
