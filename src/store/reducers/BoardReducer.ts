import { Board } from "../../models/board";

export default function boardReducer(state, action) {
  const boardsList: Board[] = [
    {
      title: "Platform Launch",
      slug: "platform-launch",
      isActive: false,
    },
    {
      title: "Marketing Plan",
      slug: "marketing-plan",
      isActive: false,
    },
    {
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
}
