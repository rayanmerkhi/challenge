import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { Palette, Users, Sparkles, Phone } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  var { id } = useParams();
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
  console.log(id);

  function handleSubmit(e:React.FormEvent) {
    navigate('/home');
    
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
Contact </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Prenez des visiteurs et triplez visibilité ou prenez un apprenti et veillez sur le futur de votre profession
        </p>
        {id !== undefined && <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Bonjour à vous {id}
        </p>}
      </div>
      <div className="bg-white rounded-3xl shadow-sm p-8 mb-16">
        <p className="text-4xl text-center mb-8"> Contactez-nous</p>
        <div className="flex mb-4 text-center">
          <Phone className="text-4xl" /> 
          <p>Tel: +33 6 42 03 13 92</p> 
        </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="mail"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="Text"
              maxLength={16}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
      </form>
      </div>
      </div>
  );
}