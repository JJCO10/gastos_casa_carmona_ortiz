import BudgetForm from '../components/budget/BudgetForm';
import BudgetOverview from '../components/budget/BudgetOverview';
import BudgetMonthSelector from '../components/budget/BudgetMonthSelector';
import BudgetMonthlyView from '../components/budget/BudgetMonthlyView';
import { useState } from 'react';

const BudgetPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de Presupuesto</h1>
        <p className="text-gray-600">Establece y controla tu presupuesto mensual</p>
      </div>

      <BudgetMonthSelector
        currentDate={currentDate}
        onMonthChange={setCurrentDate}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BudgetMonthlyView month={currentDate} />
        </div>
        <div>
          <BudgetForm />
          <div className="mt-6">
            <BudgetOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;