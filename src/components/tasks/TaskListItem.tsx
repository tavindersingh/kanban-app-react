import React from "react";
import { Task } from "../../models/task";

type TaskListItemProp = {
  task: Task;
};

const TaskListItem: React.FC<TaskListItemProp> = ({ task }) => {
  return (
    <div className="w-80 bg-dark2 flex flex-col p-6 rounded-lg gap-2 cursor-pointer hover:shadow-lg duration-200">
      <p className="text-lg font-medium text-primary-text leading-tight">
        {task.title}
      </p>
      <p className="text-secondary-text font-medium">0 of 3 subtasks</p>
    </div>
  );
};

export default TaskListItem;
