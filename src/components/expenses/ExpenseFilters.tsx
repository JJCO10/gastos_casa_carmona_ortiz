import { Search, Calendar, Tag } from 'lucide-react';

const ExpenseFilters = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search expenses..."
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      
      <div className="relative">
        <Tag className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">All Categories</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="relative">
        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <select className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="this-month">This Month</option>
          <option value="last-month">Last Month</option>
          <option value="3-months">Last 3 Months</option>
          <option value="6-months">Last 6 Months</option>
          <option value="year">This Year</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilters;