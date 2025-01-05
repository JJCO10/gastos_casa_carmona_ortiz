
const BudgetChart = () => {
  const categories = [
    { name: 'Vivienda', percentage: 35, color: 'bg-blue-500' },
    { name: 'Alimentos', percentage: 20, color: 'bg-green-500' },
    { name: 'Transporte', percentage: 15, color: 'bg-yellow-500' },
    { name: 'Servicios', percentage: 10, color: 'bg-purple-500' },
    { name: 'Entretenimiento', percentage: 10, color: 'bg-red-500' },
    { name: 'Otros', percentage: 10, color: 'bg-gray-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Distribución del Presupuesto</h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{category.name}</span>
              <span className="text-sm text-gray-500">{category.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${category.color} h-2 rounded-full`}
                style={{ width: `${category.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetChart;