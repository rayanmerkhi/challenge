import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // Validation simple
    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }
    if (email != "rayanmekhi@yahoo.fr" && password != "12345678"){
        setErrorMessage("Identifiant ou Mot de Passe Incorrect.");
    return;
    }// Ici tu peux ajouter la logique d'authentification (API, etc.)
    console.log("Authentification de :", email, password);
    setErrorMessage(""); // Reset l'erreur après la soumission
    navigate("/in/rayan.merkhi");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Connexion</h2>
        
        {errorMessage !== "" && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <a href="#" className="text-blue-500 hover:underline">Mot de passe oublié ?</a>
        </div>
      </div>
    </div>);
}
