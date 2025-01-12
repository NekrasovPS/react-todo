import React from 'react';
import PropTypes from 'prop-types';

import styles from './TaskFilter.module.css';

interface TaskFilterProps {
  onDeletedAllTask: () => void;
  currentFilter: 'All' | 'Active' | 'Completed';
  onFilterChange: (filter: 'All' | 'Active' | 'Completed') => void;
  tasksLeft: number;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter = 'All', onFilterChange }) => {
  const arrFilters: Array<'All' | 'Active' | 'Completed'> = ['All', 'Active', 'Completed'];

  return (
    <ul className={styles.filters}>
      {arrFilters.map((filter) => (
        <li key={filter}>
          <button
            className={`${currentFilter === filter ? styles.selected : ''}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
};

TaskFilter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default TaskFilter;
