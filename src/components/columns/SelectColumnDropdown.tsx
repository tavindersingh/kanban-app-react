import { Field, Label, Select } from "@headlessui/react";
import React from "react";
import { TaskStatusColumn } from "../../models/task-column";

type SelectColumnDropdownProps = {
  columns: TaskStatusColumn[];
  onSelectColumn: (columnId: number) => void;
  columnError: string | undefined;
  selectedColumnId: number | undefined;
};

const SelectColumnDropdown: React.FC<SelectColumnDropdownProps> = ({
  columns,
  onSelectColumn,
  columnError,
  selectedColumnId,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColumnId = parseInt(event.target.value, 10);
    onSelectColumn(selectedColumnId);
  };

  return (
    <div className="w-full">
      <Field>
        <Label className="text-sm/6 font-medium text-primary-text">
          Select Column
        </Label>
        <div className="relative">
          <Select
            className="mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 *:text-black"
            value={!selectedColumnId ? "" : selectedColumnId.toString()}
            onChange={handleSelectChange}
          >
            {/* <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option> */}

            {columns.map((column) => (
              <option key={column.id} value={column.id}>
                {column.title}
              </option>
            ))}
          </Select>
          {columnError && (
            <span className="text-sm mt-0.5 text-red-500">{columnError}</span>
          )}
        </div>
      </Field>
    </div>
  );
};

export default SelectColumnDropdown;
