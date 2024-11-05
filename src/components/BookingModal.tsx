import React, { useState } from 'react';
import { X } from 'lucide-react';
import BookingCalendar from './BookingCalendar';
import { activities } from '../data/regions';

interface BookingModalProps {
  activityId: number;
  onClose: () => void;
}

export default function BookingModal({ activityId, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [participants, setParticipants] = useState(1);
  const activity = activities.find(a => a.id === activityId);

  if (!activity) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the booking submission
    console.log('Booking submitted:', {
      activityId,
      date: selectedDate,
      participants
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Réserver votre expérience</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="font-medium text-lg mb-2">{activity.title}</h3>
            <p className="text-gray-600">{activity.description}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <BookingCalendar
                activityId={activityId}
                onDateSelect={setSelectedDate}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de participants
              </label>
              <select
                value={participants}
                onChange={(e) => setParticipants(Number(e.target.value))}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:border-rose-500 focus:ring-rose-500"
              >
                {Array.from({ length: 8 }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>{num} personne{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Détails de la réservation</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Prix par personne: {activity.price}</li>
                <li>Durée: {activity.duration}</li>
                <li>Total: {parseInt(activity.price) * participants}€</li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={!selectedDate}
              className="w-full bg-rose-600 text-white py-2 px-4 rounded-lg hover:bg-rose-700 transition-colors disabled:bg-gray-300"
            >
              Confirmer la réservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}