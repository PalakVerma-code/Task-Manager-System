import { useEffect, useMemo, useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prev => [
      ...prev,
      { ...task, id: Date.now(), completed: false }
    ]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const updateTask = (updatedTask) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === updatedTask.id ? updatedTask : t
      )
    );
  };

 
  return {
    tasks,
    
    setTasks,
    addTask,
    deleteTask,
    toggleTask,
    updateTask,
    
  };
}



