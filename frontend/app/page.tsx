import Button from "./components/Button";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col px-5 py-6 gap-6 h-screen text-night">
      <h1 className="text-[2rem]">Property Management Dashboard</h1>
      {/* <Button label="Button label" /> */}

      <Dashboard />
    </div>
  );
}
