import { Task, TaskStatus } from "../../models/task";

export default function taskReducer(state, action) {
  const tasksList: Task[] = [
    {
      title: "Task 1",
      slug: "task-1",
      status: TaskStatus.TODO,
    },
    {
      title: "Task 2",
      slug: "task-2",
      status: TaskStatus.DOING,
    },
    {
      title: "Task 3",
      slug: "task-3",
      status: TaskStatus.DONE,
    },
  ];

  if (action.type === "GET_TASKS") {
    return tasksList;
  }
}
