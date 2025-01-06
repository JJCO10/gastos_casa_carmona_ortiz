import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BudgetMonthSelectorProps {
  currentDate: Date;
  onMonthChange: (date: Date) => void;
}

const BudgetMonthSelector = ({ currentDate, onMonthChange }: BudgetMonthSelectorProps) => {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(newDate);
  };

  return (
    <div className="flex items-center justify-between mb-6 bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center gap-4">
        <button
          onClick={handlePreviousMonth}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="text-lg font-semibold">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <select
        value={currentDate.getFullYear()}
        onChange={(e) => {
          const newDate = new Date(currentDate);
          newDate.setFullYear(parseInt(e.target.value));
          onMonthChange(newDate);
        }}
        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - 2 + i).map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default BudgetMonthSelector;