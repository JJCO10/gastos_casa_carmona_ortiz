import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Wallet, ShoppingCart, CreditCard, Banknote } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ExpenseCard from './components/ExpenseCard';
import RecentTransactions from './components/RecentTransactions';
import BudgetChart from './components/BudgetChart';
import ExpensesPage from './pages/ExpensesPage';

function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Bienvenido a la economia del hogar</h1>
        <p className="text-gray-600">En este espacion encotraras el seguimiento del capital de tu hogar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <ExpenseCard
          title="Total Balance"
          amount={5240}
          trend={-2.5}
          icon={<Wallet className="w-6 h-6 text-indigo-600" />}
        />
        <ExpenseCard
          title="Total Expenses"
          amount={1875}
          trend={12.3}
          icon={<ShoppingCart className="w-6 h-6 text-indigo-600" />}
        />
        <ExpenseCard
          title="Total Savings"
          amount={3365}
          trend={-8.1}
          icon={<Banknote className="w-6 h-6 text-indigo-600" />}
        />
        <ExpenseCard
          title="Total Bills"
          amount={940}
          trend={0.8}
          icon={<CreditCard className="w-6 h-6 text-indigo-600" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BudgetChart />
        <RecentTransactions />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expenses" element={<ExpensesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;