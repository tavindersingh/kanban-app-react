import { Board } from "../../models/board";

export default function boardReducer(state, action) {
  const boardsList: Board[] = [
    {
      id: 1,
      title: "Platform Launch",
      slug: "platform-launch",
      isActive: false,
    },
    {
      id: 2,
      title: "Marketing Plan",
      slug: "marketing-plan",
      isActive: false,
    },
    {
      id: 3,
      title: "Roadmap",
      slug: "roadmap",
      isActive: false,
    },
  ];

  if (action.type === "GET_BOARDS") {
    return boardsList;
  }

  if (action.type === "SELECT_BOARD") {
    const index = boardsList.findIndex((board) => board.slug === action.slug);

    for (let i = 0; i < boardsList.length; i++) {
      boardsList[i].isActive = false;
    }

    if (index !== -1) {
      boardsList[index].isActive = true;
    }

    return boardsList;
  }

  return boardsList;
}
