import React, { useState, useEffect, useMemo } from "react";
// ou définis le type dans un fichier commun

type produit = {
  id: number;
  name: string;
  image: string;
  prix: number;
  rating: number;
  categorie: string;
  inStock: boolean;
  slug: string;
  description?: string;
}

interface InputSearchProps {
  state: produit[];
  onSearch: (res: produit[]) => void;
}

export default function InputSearch({ state, onSearch }: InputSearchProps) {
  const [searchBar, setSearchBar] = useState('');

  const filtrerTab = useMemo(() => {
    return state.filter((item) => {
      return item.name.toLowerCase().includes(searchBar.toLowerCase());
    });
  }, [state, searchBar]);

  useEffect(() => {
    onSearch(filtrerTab);
  }, [filtrerTab, onSearch]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchBar(e.target.value);
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        value={searchBar}
        style={{ width: '500px' }}
        onChange={handleChange}
        className="form-control"
        placeholder="Rechercher un produit..."
      />
    </div>
  );
}
