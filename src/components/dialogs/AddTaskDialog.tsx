import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
} from "@headlessui/react";
import { useState } from "react";
import SelectColumnDropdown from "../columns/SelectColumnDropdown";
import { Task } from "../../models/task";

type AddTaskDialogProps = {
  isOpen: boolean;
  onAddTask: (newTask: Task) => void;
  boardId: number;
};

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({
  isOpen,
  onAddTask,
  boardId,
}) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [columnError, setColumnError] = useState<string | undefined>(undefined);
  const [columnId, setColumnId] = useState<number | undefined>(undefined);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const validateForm = () => {
    if (title === "") {
      setError("Title is required");
      return false;
    }

    if (!columnId) {
      setColumnError("Column is required");
      return false;
    }

    setError(undefined);
    setColumnError(undefined);
    return true;
  };

  const handleSubmit = () => {
    const isFormValid = validateForm();

    if (!isFormValid) {
      return;
    }

    const newTask: Task = {
      title: title,
      columnId: columnId!,
      boardId: boardId,
    };

    onAddTask(newTask);
  };

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md flex flex-col gap-4 rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-xl/7 font-medium text-primary-text"
            >
              Add New Task
            </DialogTitle>
            <Field>
              <Label className="text-sm/6 font-medium text-primary-text">
                Title
              </Label>
              <Input
                value={title}
                onChange={handleTitleChange}
                className="mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              />
              {error && (
                <span className="text-sm mt-0.5 text-red-500">{error}</span>
              )}
            </Field>

            <SelectColumnDropdown
              columns={[]}
              onSelectColumn={(id: number) => {
                setColumnId(id);
              }}
              selectedColumnId={columnId}
              columnError={columnError}
            />
            <div className="mt-4">
              <button
                className="inline-flex items-center gap-2 rounded-md bg-primary py-1.5 px-3 text-sm/6 font-semibold text-primary-text shadow-inner shadow-white/10 focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddTaskDialog;
