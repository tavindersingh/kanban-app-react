import React from "react";
import { Task } from "../../models/task";
import { TaskStatusColumn } from "../../models/task-column";
import TaskListItem from "./TaskListItem";

type TasksListProps = {
  tasks: Task[];
  column: TaskStatusColumn;
};

const TasksList: React.FC<TasksListProps> = ({ tasks, column }) => {
  return (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex items-center">
        <div
          className={`w-4 h-4 rounded-full`}
          style={{ backgroundColor: column.color }}
        ></div>
        <p className="text-secondary-text tracking-widest text-sm ml-3 uppercase font-semibold">
          {column.title} <span>({tasks.length})</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskListItem key={task.slug} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
