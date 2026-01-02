import Button from "./Button";

const Dashboard = () => {
  const columnClasses = "w-full h-full flex flex-col gap-3";
  const columnHeaderClasses =
    "w-full h-max flex justify-between items-center p-6 bg-pale-100 border-b border-pale-200";

  const itemClasses =
    "flex items-center p-6 gap-1 text-lg hover:bg-pale-100 duration-100 cursor-pointer";

  return (
    <div className="flex rounded-3xl border border-grey-200 flex-auto">
      <div className={columnClasses}>
        <div className={columnHeaderClasses}>
          <h2 className="text-xl">Properties</h2>
          <Button label="Add new property" />
        </div>

        <div className="flex flex-col">
          <div className={itemClasses}>
            <span className="w-[3.75rem] text-grey">WEG</span>
            <span>Royal City</span>
          </div>
        </div>
      </div>
      <div className={columnClasses + " border-l border-r border-pale-200"}>
        <div className={columnHeaderClasses}>
          <h2 className="text-xl">Buildings</h2>
          <Button label="Add new property" />
        </div>

        <div className="flex flex-col"></div>
      </div>
      <div className={columnClasses}>
        <div className={columnHeaderClasses}>
          <h2 className="text-xl">Units</h2>
          <Button label="Add new property" />
        </div>

        <div className="flex flex-col"></div>
      </div>
    </div>
  );
};

export default Dashboard;
