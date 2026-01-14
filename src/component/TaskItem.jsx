const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div className={`task-item p-level-${(task.priority||"Medium").toLowerCase()}`}>
      <div className="task-left-side">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <div className="task-details">
          <span className={task.completed ? "completed-text" : ""}>
            {task.title}
          </span>

          <div className="task-meta">
            <span className="badge">{task.category}</span>
            <span>{task.dueDate || "No date"}</span>
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button className="edit-btn" onClick={() => onEdit(task)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
