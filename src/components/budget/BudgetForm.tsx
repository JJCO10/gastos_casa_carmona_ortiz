import { DollarSign, Tag, Calendar } from 'lucide-react';

const BudgetForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Agregar Presupuesto</h3>
      <form className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Categoría
          </label>
          <div className="relative">
            <Tag className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Seleccionar categoría</option>
              <option value="vivienda">Vivienda</option>
              <option value="alimentos">Alimentos</option>
              <option value="transporte">Transporte</option>
              <option value="servicios">Servicios</option>
              <option value="entretenimiento">Entretenimiento</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monto Mensual
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="number"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="0.00"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Guardar Presupuesto
        </button>
      </form>
    </div>
  );
};

export default BudgetForm;