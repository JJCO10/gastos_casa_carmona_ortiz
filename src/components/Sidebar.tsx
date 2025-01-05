import { Home, PieChart, Calendar, Settings, CreditCard, TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="fixed h-screen w-64 bg-indigo-900 text-white p-6">
      <div className="flex items-center gap-2 mb-8">
        <Home className="w-8 h-8" />
        <h1 className="text-xl font-bold">MiPresupuesto</h1>
      </div>
      
      <nav className="space-y-4">
        <Link 
          to="/" 
          className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/' ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}
        >
          <PieChart className="w-5 h-5" />
          <span>Inicio</span>
        </Link>
        <Link 
          to="/expenses" 
          className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/expenses' ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}
        >
          <CreditCard className="w-5 h-5" />
          <span>Gastos</span>
        </Link>
        <Link 
          to="/budget" 
          className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/budget' ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}
        >
          <TrendingUp className="w-5 h-5" />
          <span>Presupuesto</span>
        </Link>
        <Link 
          to="/calendar" 
          className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/calendar' ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}
        >
          <Calendar className="w-5 h-5" />
          <span>Calendario</span>
        </Link>
        <Link 
          to="/settings" 
          className={`flex items-center gap-3 p-3 rounded-lg ${location.pathname === '/settings' ? 'bg-indigo-800' : 'hover:bg-indigo-800'}`}
        >
          <Settings className="w-5 h-5" />
          <span>Configuración</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;