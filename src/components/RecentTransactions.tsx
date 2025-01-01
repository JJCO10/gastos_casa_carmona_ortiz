import { ShoppingBag, Coffee, Home, Car } from 'lucide-react';

const transactions = [
  {
    id: 1,
    title: 'Grocery Shopping',
    amount: -120.50,
    date: '2024-03-15',
    category: 'Shopping',
    icon: <ShoppingBag className="w-4 h-4" />,
  },
  {
    id: 2,
    title: 'Coffee Shop',
    amount: -4.99,
    date: '2024-03-15',
    category: 'Food',
    icon: <Coffee className="w-4 h-4" />,
  },
  {
    id: 3,
    title: 'Rent Payment',
    amount: -1200,
    date: '2024-03-14',
    category: 'Housing',
    icon: <Home className="w-4 h-4" />,
  },
  {
    id: 4,
    title: 'Gas Station',
    amount: -45.30,
    date: '2024-03-14',
    category: 'Transport',
    icon: <Car className="w-4 h-4" />,
  },
];

const RecentTransactions = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
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