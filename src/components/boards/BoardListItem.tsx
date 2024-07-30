import React from "react";
import { Link } from "react-router-dom";
import { Board } from "../../models/board";

type BoardListItemProps = {
  board: Board;
};

const BoardListItem: React.FC<BoardListItemProps> = ({ board }) => {
  return (
    <Link
      to={`/${board.slug}`}
      className={`font-medium py-3 pl-8 rounded-r-full duration-200 cursor-pointer ${
        board.isActive
          ? "bg-primary text-primary-text"
          : "text-secondary-text hover:bg-primary hover:bg-opacity-15"
      }`}
    >
      {board.title}
    </Link>
  );
};

export default BoardListItem;
