import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { Palette, Users, Sparkles } from 'lucide-react';
import FranceMap from '../components/FranceMap';

export default function Home() {
  const navigate = useNavigate();
  const { id } = useParams();
  const features = [
    {
      icon: <Palette className="h-6 w-6 text-rose-600" />,
      title: 'Artisanat Local',
      description: 'Découvrez les talents uniques des artisans près de chez vous'
    },
    {
      icon: <Users className="h-6 w-6 text-rose-600" />,
      title: 'Connexion Directe',
      description: 'Rencontrez les créateurs et participez à leurs ateliers'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-rose-600" />,
      title: 'Expériences Uniques',
      description: 'Vivez des moments inoubliables et apprenez des savoir-faire traditionnels'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          L'Artisanat Français à Portée de Main
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez et réservez des expériences uniques avec les artisans de votre région
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bonjour à vous {id}
        </p>
      </div>
      
      <div className="bg-white rounded-3xl shadow-sm p-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <FranceMap onRegionClick={(regionId) => navigate(`/region/${regionId}`)} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}