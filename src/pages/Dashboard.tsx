import { useState } from "react";
import AppBar from "../components/common/AppBar";
import AddTaskDialog from "../components/dialogs/AddTaskDialog";
import NavDrawer from "../components/NavDrawer";
import TasksGrid from "../components/tasks/TasksGrid";
import { Task } from "../models/task";

const DashboardPage = () => {
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);

  function openAddTaskDialog() {
    setIsAddTaskDialogOpen(true);
  }

  function closeAddTaskDialog() {
    setIsAddTaskDialogOpen(false);
  }

  function onAddTask(newTask: Task) {
    // TODO: Add api to save task
    console.log("New task added:", newTask);
    closeAddTaskDialog();
  }

  return (
    <div className="w-screen h-screen flex bg-dark ">
      <NavDrawer />
      <div className="flex flex-col flex-1">
        <AppBar onAddTask={openAddTaskDialog} />
        <div className="h-full p-6">
          <TasksGrid
            columns={[
              { id: 1, boardId: 1, title: "Todo", color: "#47c2e6" },
              { id: 2, boardId: 1, title: "Doing", color: "#8370f4" },
              { id: 3, boardId: 1, title: "Done", color: "#6ae6b0" },
            ]}
          />
        </div>
      </div>
      <AddTaskDialog
        isOpen={isAddTaskDialogOpen}
        onAddTask={onAddTask}
        boardId={1}
      />
    </div>
  );
};

export default DashboardPage;
