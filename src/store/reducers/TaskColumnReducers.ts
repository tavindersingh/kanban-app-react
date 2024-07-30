import { TaskStatusColumn } from "../../models/task-column";

export default function taskColumnReducer(state, action) {
  const taskColumsList: TaskStatusColumn[] = [
    { id: 1, boardId: 1, title: "Todo", color: "#47c2e6" },
    { id: 2, boardId: 1, title: "Doing", color: "#8370f4" },
    { id: 3, boardId: 1, title: "Done", color: "#6ae6b0" },
    { id: 1, boardId: 2, title: "Todo", color: "#47c2e6" },
    { id: 2, boardId: 2, title: "Doing", color: "#8370f4" },
    { id: 3, boardId: 2, title: "Done", color: "#6ae6b0" },
    { id: 1, boardId: 3, title: "Todo", color: "#47c2e6" },
    { id: 2, boardId: 3, title: "Doing", color: "#8370f4" },
    { id: 3, boardId: 3, title: "Done", color: "#6ae6b0" },
  ];

  if (action.type === "GET_COLUMNS") {
    return taskColumsList.filter((column) => column.boardId === action.boardId);
  }
}
