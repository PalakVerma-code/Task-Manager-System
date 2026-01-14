
const FilterBar = ({
  searchQuery,
  setSearchQuery,
  filterCategory,
  setFilterCategory
}) => {
  return (
    <div className="filter-bar">
      <input
        className="search-bar"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <select
        value={filterCategory}
        onChange={e => setFilterCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Work">Work</option>
        <option value="Study">Study</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
};

export default FilterBar;
