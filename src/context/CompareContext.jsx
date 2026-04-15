import React, { createContext, useState, useEffect, useContext } from 'react';

const CompareContext = createContext(null);

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState(() => {
    try {
      const stored = localStorage.getItem('university_compare_list');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error reading compare list from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('university_compare_list', JSON.stringify(compareList));
    } catch (error) {
      console.error("Error saving compare list to localStorage", error);
    }
  }, [compareList]);

  const addToCompare = (uniId) => {
    if (compareList.includes(uniId)) return;
    if (compareList.length >= 3) {
      alert("Solishtirish uchun maksimal 3 ta universitet tanlash mumkin.");
      return;
    }
    setCompareList(prev => [...prev, uniId]);
  };

  const removeFromCompare = (uniId) => {
    setCompareList(prev => prev.filter(id => id !== uniId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (uniId) => compareList.includes(uniId);

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare, isInCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
