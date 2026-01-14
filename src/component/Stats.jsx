import { useMemo } from "react";

const Stats = ({ tasks }) => {
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const percentage =
      total === 0 ? 0 : Math.round((completed / total) * 100);

    return { total, completed, percentage };
  }, [tasks]);

  return (
    <div className="stats-container">
      <div className="stats-text">
        <span>{stats.completed} of {stats.total} completed</span>
        <span>{stats.percentage}%</span>
      </div>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${stats.percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Stats;
