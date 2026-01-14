import { useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";
import Header from "../component/Header";
import Stats from "../component/Stats";
import FilterBar from "../component/FilterBar";
import TaskForm from "../component/TaskForm";
import TaskColumn from "../component/TaskColumn";

const Dashboard = () => {
  const taskState = useTasks();
  const [editTask, setEditTask] = useState(null);

  // ✅ THEME STATE (tumhara original logic)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="container">
      <Header theme={theme} setTheme={setTheme} />
      <Stats tasks={taskState.tasks} />
      

      <TaskForm
        onAdd={taskState.addTask}
        onUpdate={taskState.updateTask}
        editTask={editTask}
        setEditTask={setEditTask}
      />

      <div className="board">
        <TaskColumn title="All" status="All" {...taskState} onEdit={setEditTask} onToggle={taskState.toggleTask} onDelete={taskState.deleteTask} />
        <TaskColumn title="Pending" status="Pending" {...taskState} onEdit={setEditTask}  onToggle={taskState.toggleTask} onDelete={taskState.deleteTask}/>
        <TaskColumn title="Completed" status="Completed" {...taskState} onEdit={setEditTask} onToggle={taskState.toggleTask} onDelete={taskState.deleteTask} />
      </div>
    </div>
  );
};

export default Dashboard;
