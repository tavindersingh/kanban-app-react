const AppBar = () => {
  return (
    <div className="w-full h-24 bg-dark2 flex items-center px-6 border-b border-b-gray-700">
      <h2 className="text-primary-text text-2xl flex-1">Platform Launch</h2>
      <button className="bg-primary text-primary-text font-medium py-3 px-6 rounded-full scale-100 hover:scale-105 duration-200">
        + Add New Task
      </button>
    </div>
  );
};

export default AppBar;
