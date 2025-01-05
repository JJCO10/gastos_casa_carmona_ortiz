import { Plus, Calendar as CalendarIcon } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Pago de Renta',
    date: '2024-03-05',
    amount: 1200,
    category: 'Vivienda',
  },
  {
    id: 2,
    title: 'Servicios Básicos',
    date: '2024-03-12',
    amount: 150,
    category: 'Servicios',
  },
  {
    id: 3,
    title: 'Seguro del Auto',
    date: '2024-03-15',
    amount: 80,
    category: 'Transporte',
  },
];

const EventList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Pagos Programados</h3>
        <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="p-3 border border-gray-200 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{event.title}</h4>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
              </div>
              <span className="font-medium text-indigo-600">
                ${event.amount}
              </span>
            </div>
            <div className="mt-2">
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                {event.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;