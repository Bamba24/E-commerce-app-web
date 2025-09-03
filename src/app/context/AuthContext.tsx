"use client";

import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "mui-sonner";

type tokenType = string | null;

type UserConnectionContextType = {
  token: tokenType;
  login: (email: string, motDePasse: string) => Promise<void>;
  handleOut: () => void;
};

export const UserConnectionContext = createContext<UserConnectionContextType | null>(null);

export const ContextConnectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<tokenType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
    setLoading(false);
  }, []);

  const login = async (email: string, motDePasse: string) => {
    try {
      const response = await axios.post("/api/login", { email, motDePasse });
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      toast.success("Connexion réussie ! Bienvenue.");
      window.dispatchEvent(new Event("userLoggedIn")); // pour notifier les composants
    } catch (error) {
      console.error("Authentification échouée", error);
      toast.error("Erreur de connexion. Veuillez vérifier vos identifiants.");
      throw error;
    }
  };

  const handleOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("userLoggedOut"));
    toast.success("Vous êtes déconnecté.");
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <UserConnectionContext.Provider value={{ token, login, handleOut }}>
      {children}
    </UserConnectionContext.Provider>
  );
};

export const useUserConnection = () => {
  const context = useContext(UserConnectionContext);
  if (!context) {
    throw new Error("useUserConnection must be used within a ContextConnectionProvider");
  }
  return context;
};
