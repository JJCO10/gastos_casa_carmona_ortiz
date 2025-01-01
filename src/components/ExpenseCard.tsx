import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface ExpenseCardProps {
  title: string;
  amount: number;
  trend: number;
  icon: React.ReactNode;
}

const ExpenseCard = ({ title, amount, trend, icon }: ExpenseCardProps) => {
  const isPositive = trend > 0;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          {icon}
        </div>
        {isPositive ? (
          <ArrowUpRight className="w-5 h-5 text-red-500" />
        ) : (
          <ArrowDownRight className="w-5 h-5 text-green-500" />
        )}
      </div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-2xl font-bold">${amount.toLocaleString()}</span>
        <span className={`text-sm ${isPositive ? 'text-red-500' : 'text-green-500'}`}>
          {trend}%
        </span>
      </div>
    </div>
  );
};

export default ExpenseCard;