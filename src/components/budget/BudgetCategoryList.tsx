import { Pencil, Trash2 } from 'lucide-react';

const categories = [
  { id: 1, name: 'Vivienda', budgeted: 1200000, spent: 1000000, remaining: 200000 },
  { id: 2, name: 'Alimentos', budgeted: 500000, spent: 450000, remaining: 50000 },
  { id: 3, name: 'Transporte', budgeted: 300000, spent: 280000, remaining: 20000 },
  { id: 4, name: 'Servicios', budgeted: 200000, spent: 180000, remaining: 20000 },
  { id: 5, name: 'Entretenimiento', budgeted: 150000, spent: 100000, remaining: 50000 },
];

const BudgetCategoryList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Presupuesto por Categorías</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left pb-3">Categoría</th>
                <th className="text-right pb-3">Presupuestado</th>
                <th className="text-right pb-3">Gastado</th>
                <th className="text-right pb-3">Restante</th>
                <th className="text-right pb-3">Progreso</th>
                <th className="w-20 pb-3"></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                const percentage = (category.spent / category.budgeted) * 100;
                const progressColor = percentage > 85 ? 'bg-red-500' : 'bg-green-500';
                
                return (
                  <tr key={category.id} className="border-b border-gray-100">
                    <td className="py-3">{category.name}</td>
                    <td className="py-3 text-right">${category.budgeted}</td>
                    <td className="py-3 text-right">${category.spent}</td>
                    <td className="py-3 text-right">${category.remaining}</td>
                    <td className="py-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${progressColor} h-2 rounded-full`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex justify-end gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded-full">
                          <Pencil className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-full">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BudgetCategoryList;