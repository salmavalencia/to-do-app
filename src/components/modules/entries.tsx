import EntriesItem from "./entries-item";

const Entries = () => {
  return (
    <div>
      {data.map((element, index) => (
        <EntriesItem key={index} element={element} />
      ))}
    </div>
  );
};

export default Entries;

const data = [
  {
    isChecked: true,
    task: "Walk the dog",
  },
  {
    isChecked: false,
    task: "Write code",
  },
  {
    isChecked: true,
    task: "Cook dinner",
  },
  {
    isChecked: true,
    task: "Cook lunch",
  },
  {
    isChecked: false,
    task: "Organize room",
  },
];
