import CalendarDay from './CalendarDay';

const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

const CalendarGrid = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-px">
        {weekDays.map((day) => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, index) => (
          <CalendarDay
            key={index}
            date={index + 1}
            isCurrentMonth={index < 31}
            hasEvents={[5, 12, 15, 25].includes(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;