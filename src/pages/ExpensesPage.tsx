import ExpenseForm from '../components/expenses/ExpenseForm';
import ExpenseFilters from '../components/expenses/ExpenseFilters';
import ExpenseList from '../components/expenses/ExpenseList';

const ExpensesPage = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Gastos</h1>
        <p className="text-gray-600">Registra y administra tus gastos diarios</p>
      </div>

      <div className="space-y-6">
        <ExpenseForm onSubmit={() => {}} />
        <ExpenseFilters />
        <ExpenseList />
      </div>
    </div>
  );
};

export default ExpensesPage;