import React from 'react';
import { TodoFilter } from '../types/todo';

interface TodoFiltersProps {
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  totalTodos: number;
  activeTodos: number;
}

export const TodoFilters: React.FC<TodoFiltersProps> = ({
  filter,
  onFilterChange,
  totalTodos,
  activeTodos,
}) => {
  const filters: TodoFilter[] = ['all', 'active', 'completed'];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      <p className="text-gray-600 dark:text-gray-400">
        {activeTodos} items left of {totalTodos} total
      </p>
      <div className="flex gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`btn ${
              filter === f
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};