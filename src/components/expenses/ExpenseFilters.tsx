import { Search, Calendar, Tag } from 'lucide-react';

const ExpenseFilters = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar gastos..."
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      
      <div className="relative">
        <Tag className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">Todas las Categorías</option>
          <option value="food">Alimentos</option>
          <option value="transport">Transporte</option>
          <option value="utilities">Servicios</option>
          <option value="entertainment">Entretenimiento</option>
          <option value="other">Otros</option>
        </select>
      </div>
      
      <div className="relative">
        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="this-month">Este Mes</option>
          <option value="last-month">Mes Anterior</option>
          <option value="3-months">Últimos 3 Meses</option>
          <option value="6-months">Últimos 6 Meses</option>
          <option value="year">Este Año</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilters;