import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface BudgetMonthlyViewProps {
  month: Date;
}

const BudgetMonthlyView = ({ month }: BudgetMonthlyViewProps) => {
  // Simulamos obtener datos específicos para el mes seleccionado
  const getMonthlyData = (date: Date) => {
    const monthYear = `${date.getMonth() + 1}/${date.getFullYear()}`;
    return {
      presupuestado: 2350,
      gastado: 2010,
      disponible: 340,
      periodo: monthYear,
      categorias: [
        { nombre: 'Vivienda', presupuestado: 1200, gastado: 1000, variacion: -2.5 },
        { nombre: 'Alimentos', presupuestado: 500, gastado: 450, variacion: 1.2 },
        { nombre: 'Transporte', presupuestado: 300, gastado: 280, variacion: -0.8 },
        { nombre: 'Servicios', presupuestado: 200, gastado: 180, variacion: 0.5 },
        { nombre: 'Entretenimiento', presupuestado: 150, gastado: 100, variacion: -1.5 },
      ]
    };
  };

  const monthlyData = getMonthlyData(month);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">
        Resumen Mensual - {month.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-indigo-50 rounded-lg">
          <p className="text-sm text-gray-600">Presupuestado</p>
          <p className="text-2xl font-bold text-indigo-600">
            ${monthlyData.presupuestado}
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-600">Gastado</p>
          <p className="text-2xl font-bold text-green-600">
            ${monthlyData.gastado}
          </p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">Disponible</p>
          <p className="text-2xl font-bold text-blue-600">
            ${monthlyData.disponible}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {monthlyData.categorias.map((categoria) => (
          <div key={categoria.nombre} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">{categoria.nombre}</h4>
              <div className="flex items-center gap-2">
                {categoria.variacion > 0 ? (
                  <ArrowUpRight className="w-4 h-4 text-red-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-green-500" />
                )}
                <span className={categoria.variacion > 0 ? 'text-red-500' : 'text-green-500'}>
                  {Math.abs(categoria.variacion)}%
                </span>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Presupuestado: ${categoria.presupuestado}</span>
              <span>Gastado: ${categoria.gastado}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${(categoria.gastado / categoria.presupuestado) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetMonthlyView;