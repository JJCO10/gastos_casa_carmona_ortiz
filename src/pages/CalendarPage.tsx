import CalendarGrid from '../components/calendar/CalendarGrid';
import CalendarHeader from '../components/calendar/CalendarHeader';
import EventList from '../components/calendar/EventList';

const CalendarPage = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Calendario de Gastos</h1>
        <p className="text-gray-600">Visualiza y programa tus gastos recurrentes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm">
            <CalendarHeader />
            <CalendarGrid />
          </div>
        </div>
        <div>
          <EventList />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;