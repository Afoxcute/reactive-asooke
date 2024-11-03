interface StatProps {
  icon?: React.ElementType;
  title: string;
  number: string | number;
}

const Stat: React.FC<StatProps> = ({ icon: Icon, title, number }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex">
        {Icon && <Icon className="text-3xl mr-2" />}
        <div className="text-gray-800 text-3xl font-bold">{title}</div>
      </div>
      <div className="text-gray-800 text-2xl ml-2">{number}</div>
    </div>
  );
};

export default Stat;
