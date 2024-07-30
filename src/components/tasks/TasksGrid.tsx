import React from "react";
import { TaskStatusColumn } from "../../models/task-column";
import AddColumnButton from "./AddColumnButton";
import TasksList from "./TasksList";

type TasksGridProps = {
  columns: TaskStatusColumn[];
};

const TasksGrid: React.FC<TasksGridProps> = ({ columns }) => {
  return (
    <div className="h-full flex gap-4">
      {columns.map((column) => (
        <TasksList
          key={column.id}
          column={column}
          tasks={[
            {
              title: "Task 1",
              slug: "task-1",
              status: 1,
            },
            {
              title: "Task 2",
              slug: "task-2",
              status: 1,
            },
            {
              title: "Task 3",
              slug: "task-3",
              status: 1,
            },
          ]}
        />
      ))}
      <AddColumnButton />
    </div>
  );
};

export default TasksGrid;
