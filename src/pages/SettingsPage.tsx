import ProfileSettings from '../components/settings/ProfileSettings';
import NotificationSettings from '../components/settings/NotificationSettings';
import CurrencySettings from '../components/settings/CurrencySettings';
import SecuritySettings from '../components/settings/SecuritySettings';

const SettingsPage = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Configuración</h1>
        <p className="text-gray-600">Administra tus preferencias y configuración de cuenta</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ProfileSettings />
        <SecuritySettings />
        <NotificationSettings />
        <CurrencySettings />
      </div>
    </div>
  );
};

export default SettingsPage;