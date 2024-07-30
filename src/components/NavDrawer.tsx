import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import boardReducer from "../store/reducers/BoardReducer";
import AddNewBoardButton from "./boards/AddNewBoardButton";
import BoardListItem from "./boards/BoardListItem";

const NavDrawer = () => {
  const [boards, dispatch] = useReducer(boardReducer, []);
  const params = useParams();

  useEffect(() => {
    console.log("Getboards");
    dispatch({ type: "GET_BOARDS" });
  }, []);

  useEffect(() => {
    if (params.boardSlug) {
      dispatch({ type: "SELECT_BOARD", slug: params.boardSlug });
    }
  }, [params.boardSlug]);

  return (
    <div className="w-80 h-screen flex flex-col bg-dark2 border-r border-r-gray-700 py-8 pr-8">
      <h1 className="text-primary-text text-4xl font-bold mb-10 px-8">
        kanban
      </h1>

      <h4 className="uppercase text-xs text-secondary-text font-semibold tracking-widest mb-4 px-8">
        All Boards
        <span className="ml-1">(8)</span>
      </h4>
      <div className="flex flex-col gap-0.5">
        {boards?.map((board) => (
          <BoardListItem board={board} key={board.slug} />
        ))}

        <AddNewBoardButton />
      </div>
    </div>
  );
};

export default NavDrawer;
