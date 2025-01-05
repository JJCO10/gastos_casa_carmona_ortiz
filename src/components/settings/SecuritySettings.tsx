import { Lock } from 'lucide-react';
import SettingsCard from './SettingsCard';

const SecuritySettings = () => {
  return (
    <SettingsCard title="Seguridad">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña actual
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••••••"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nueva contraseña
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">Última actualización: hace 3 meses</span>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Actualizar contraseña
          </button>
        </div>
      </div>
    </SettingsCard>
  );
};

export default SecuritySettings;