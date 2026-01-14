import { useState ,useEffect} from "react";

const TaskForm = ({ onAdd, onUpdate, editTask, setEditTask }) => {
  const [form, setForm] = useState(
    editTask || {
      title: "",
      priority: "Medium",
      category: "Personal",
      dueDate: ""
    }
  );

  useEffect(() => {
    if (editTask) {
      setForm(editTask);
    }
  }, [editTask]);

  const handleSubmit = () => {
    if (!form.title.trim()) return;

    editTask ? onUpdate(form) : onAdd(form);
    setForm({ title: "", priority: "Medium", category: "Personal", dueDate: "" });
    setEditTask(null);
  };

  return (
    <div className={`form-container ${editTask? 'editing':''} `}>
      <input
        value={form.title}
        placeholder="Task title..."
        onChange={e => setForm({ ...form, title: e.target.value })}
      />

      <div className="input-row">
        <select
          value={form.priority}
          onChange={e => setForm({ ...form, priority: e.target.value })}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        >
          <option>Work</option>
          <option>Study</option>
          <option>Personal</option>
        </select>

        <input
          type="date"
          value={form.dueDate}
          onChange={e => setForm({ ...form, dueDate: e.target.value })}
        />
      </div>

      <button className="add-btn" onClick={handleSubmit}>
        {editTask ? "Save Changes" : "Add Task"}
      </button>
    </div>
  );
};

export default TaskForm;
