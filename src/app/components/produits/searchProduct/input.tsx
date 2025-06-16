import React, { useState, useEffect, useMemo } from "react";

export default function InputSearch({ state, onSearch }: { state: any[], onSearch: (res: any[]) => void }) {
  const [searchBar, setSearchBar] = useState('');

  const filtrerTab = useMemo(() => {
    return state.filter((user) => {
      const nomProduit = user.name.toLowerCase();
      return nomProduit.includes(searchBar.toLowerCase());
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
