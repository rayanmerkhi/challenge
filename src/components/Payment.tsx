import React, { useState } from 'react';
import { X } from 'lucide-react';


interface PaymentProps {
    price: number;
    onClose: () => void;
  }

export default function Payment ({price,onClose}:PaymentProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [reussite, setReussite] = useState('');
  console.log(price)
  const handleSubmit =  (e : React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');
    setTimeout(()=>{
        
    setIsProcessing(false);
      if (cardNumber.length !== 16 || cvv.length !== 3) {
        setError('Détails de la carte incorrects.');
      } else {
        setReussite('Payment effectué');
        setTimeout(onClose,3000);
      }},1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <button onClick={()=>onClose()} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">             
            <h2 className="text-2xl font-bold text-center mb-6">Page de paiement</h2>
        {error && <div className="text-2xl text-red-600 text-center mb-4">{error}</div>}
        {reussite && <div className="text-2xl text-green-600 text-center mb-4">{reussite}</div>}
        {isProcessing && <div className="text-2xl text-center mb-4">Payement en cours...</div>}
          </div>

          {!reussite && !isProcessing && <form onSubmit={handleSubmit} className="space-y-6">


        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom sur la carte</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Numéro de carte</label>
            <input
              type="text"
              id="cardNumber"
              maxLength={16}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Date d'expiration</label>
              <input
                type="text"
                id="expirationDate"
                maxLength={5}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value.replace(/\D/g, ''))}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                id="cvv"
                maxLength={3}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isProcessing}
          >
            {isProcessing ? 'Traitement...' : 'Payer maintenant'}
          </button>
        </form>}
      </div>
    </div>
    </div>
  );
}

