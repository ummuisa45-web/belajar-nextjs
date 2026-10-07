'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // Ambil data dari localStorage hanya setelah komponen terpasang di klien
  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  // Simpan ke localStorage setiap kali state favorites berubah
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites, isMounted]);

  const toggleFavorite = (user) => {
    setFavorites((prevFavorites) => {
      const isExist = prevFavorites.some((fav) => fav.id === user.id);
      if (isExist) {
        return prevFavorites.filter((fav) => fav.id !== user.id);
      } else {
        return [...prevFavorites, user];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoriteContext);
}