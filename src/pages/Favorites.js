import React from 'react';
import PagesMainBar from '../components/PagesMainBar';
import { useCart } from '../hooks/useCart';
import ItemCard from "../components/ItemCard";

const Favorites = ({filteredFavorites}) => {
  const { favorites, setFavorites } = useCart()
    const renderFavorites = () => {
        return filteredFavorites.map((item, id) => (
            <ItemCard 
            {...item}
            key={id}
            />
            ))
    }
    return (
        <div className="favorites">
            <PagesMainBar  header={'Избранные'} array={favorites} />
            <div className="itemPlace">
                {renderFavorites()}
            </div>
        </div>
    );
};

export default Favorites;