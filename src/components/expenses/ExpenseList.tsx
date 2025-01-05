import { MoreVertical } from 'lucide-react';

const ExpenseList = () => {
  const expenses = [
    {
      id: 1,
      description: 'Compras Supermercado',
      amount: 250000,
      category: 'Alimentos',
      date: '2025-01-15',
    },
    {
      id: 2,
      description: 'Factura de Luz',
      amount: 401000,
      category: 'Servicios',
      date: '2025-01-14',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Historial de Gastos</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left pb-3">Descripción</th>
                <th className="text-left pb-3">Categoría</th>
                <th className="text-left pb-3">Fecha</th>
                <th className="text-right pb-3">Monto</th>
                <th className="w-10 pb-3"></th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3">{expense.description}</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {expense.category}
                    </span>
                  </td>
                  <td className="py-3">{expense.date}</td>
                  <td className="py-3 text-right">${expense.amount.toFixed(2)}</td>
                  <td className="py-3">
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="w-4 h-4 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;