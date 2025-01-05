
interface CalendarDayProps {
    date: number;
    isCurrentMonth: boolean;
    hasEvents: boolean;
  }
  
  const CalendarDay = ({ date, isCurrentMonth, hasEvents }: CalendarDayProps) => {
    const isToday = date === new Date().getDate() && isCurrentMonth;
  
    return (
      <div
        className={`min-h-[100px] p-2 border border-gray-100 ${
          isCurrentMonth ? 'bg-white' : 'bg-gray-50'
        }`}
      >
        <div className="flex justify-between items-start">
          <span
            className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
              isToday
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600'
            }`}
          >
            {date}
          </span>
          {hasEvents && (
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full"></span>
          )}
        </div>
        {hasEvents && (
          <div className="mt-2">
            <div className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-lg">
              Pago programado
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default CalendarDay;