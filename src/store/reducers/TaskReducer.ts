import { Task } from "../../models/task";

export default function taskReducer(state, action) {
  const tasksList: Task[] = [
    {
      title: "Task 1",
      slug: "task-1",
    },
    {
      title: "Task 2",
      slug: "task-2",
    },
    {
      title: "Task 3",
      slug: "task-3",
    },
  ];

  if (action.type === "GET_TASKS") {
    return tasksList;
  }
}
