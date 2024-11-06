import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Star, Euro, User } from 'lucide-react';
import { regions, activities } from '../data/regions';
import BookingModal from '../components/BookingModal';
import Payment from '../components/Payment';

export default function Region() {
  const { id } = useParams();
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);
  const [payment, setPayement] = useState<number | null>(null);
  const region = regions.find(r => r.id === id);

  if (!region) return <div>Région non trouvée</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{region.name}</h1>
        <p className="text-xl text-gray-600">{region.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities
          .filter(activity => activity.regionId === id)
          .map((activity) => (
            <div key={activity.id} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm flex items-center space-x-1">
                  <Euro className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">{activity.price}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{activity.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                
                <div className="border-t pt-4 mb-4">
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Artisan:</strong> {activity.artisan}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4 text-gray-400" />
                      <span>{activity.participants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{activity.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Inclus:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {activity.included.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedActivity(activity.id)}
                  className="mt-6 w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Réserver cette expérience</span>
                </button>
              </div>
            </div>
          ))}
      </div>

      {selectedActivity && (
        <BookingModal
          activityId={selectedActivity}
          onClose={(price) => {setSelectedActivity(null);setPayement(price)}}
        />
      )}
      {payment && (
        <Payment
          price={payment}
          onClose={() => {setPayement(null)}}
        />
      )}
    </div>
  );
}