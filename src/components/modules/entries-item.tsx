import { FaRegTrashAlt } from "react-icons/fa";

interface EntriesItemProps {
  isChecked: boolean;
  task: string;
}

const EntriesItem = ({
  element,
  key,
}: {
  element: EntriesItemProps;
  key: number;
}) => {
  return (
    <div className="flex items-center border border-gray-500 px-6 py-4 my-3 rounded-lg justify-between">
      <div>
        <input
          checked={element.isChecked}
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 text-lg text-gray-900 dark:text-gray-300"
        >
          {element.task}
        </label>
      </div>
      <button>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default EntriesItem;
