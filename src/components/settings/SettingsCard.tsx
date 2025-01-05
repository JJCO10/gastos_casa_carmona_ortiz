
interface SettingsCardProps {
    title: string;
    children: React.ReactNode;
  }
  
  const SettingsCard = ({ title, children }: SettingsCardProps) => {
    return (
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
          {children}
        </div>
      </div>
    );
  };
  
  export default SettingsCard;