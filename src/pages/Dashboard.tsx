import AppBar from "../components/common/AppBar";
import NavDrawer from "../components/NavDrawer";
import TasksGrid from "../components/tasks/TasksGrid";

const DashboardPage = () => {
  return (
    <div className="w-screen h-screen flex bg-dark ">
      <NavDrawer />
      <div className="flex flex-col flex-1">
        <AppBar />
        <div className="h-full p-6">
          <TasksGrid
            columns={[
              { id: 1, title: "Todo", color: "#47c2e6" },
              { id: 1, title: "Doing", color: "#8370f4" },
              { id: 1, title: "Done", color: "#6ae6b0" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
