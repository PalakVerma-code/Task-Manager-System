import { Reorder } from "framer-motion";
import TaskItem from "./TaskItem";

const TaskColumn = ({ title, status, tasks, ...actions }) => {
  const columnTasks =
    status === "All"
      ? tasks
      : tasks.filter(t =>
          status === "Completed" ? t.completed : !t.completed
        );

  return (
    <div className="column">
      <h3>{title}</h3>

      {/* ✅ REORDER GROUP */}
      <Reorder.Group
        axis="y"
        values={columnTasks}
        onReorder={actions.setTasks}
        className="task-list"
      >
        {columnTasks.map(task => (
          <Reorder.Item key={task.id} value={task}>
            <TaskItem task={task} {...actions} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default TaskColumn;
