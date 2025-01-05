import { ShoppingBag, Coffee, Home, Car } from 'lucide-react';

const transactions = [
  {
    id: 1,
    title: 'Compras Supermercado',
    amount: -120000,
    date: '2025-01-15',
    category: 'Compras',
    icon: <ShoppingBag className="w-4 h-4" />,
  },
  {
    id: 2,
    title: 'Tienda',
    amount: -15000,
    date: '2025-01-15',
    category: 'Alimentos',
    icon: <Coffee className="w-4 h-4" />,
  },
  {
    id: 3,
    title: 'Pago de Renta',
    amount: -850000,
    date: '2025-01-14',
    category: 'Vivienda',
    icon: <Home className="w-4 h-4" />,
  },
  {
    id: 4,
    title: 'Transporte Público',
    amount: -5000,
    date: '2025-01-14',
    category: 'Transporte',
    icon: <Car className="w-4 h-4" />,
  },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Transacciones Recientes</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                {transaction.icon}
              </div>
              <div>
                <p className="font-medium">{transaction.title}</p>
                <p className="text-sm text-gray-500">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-red-500">
                ${Math.abs(transaction.amount).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;