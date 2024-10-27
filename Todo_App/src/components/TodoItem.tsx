import React, { useState } from 'react';
import { Check, Trash2, Edit2, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="card group mb-3"
    >
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            autoFocus
          />
          <button type="submit" className="icon-button text-green-500 hover:text-green-600">
            <Check size={20} />
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="icon-button text-red-500 hover:text-red-600"
          >
            <X size={20} />
          </button>
        </form>
      ) : (
        <div className="flex items-center gap-3">
          <button
            onClick={() => onToggle(todo.id)}
            className={`flex-shrink-0 w-6 h-6 rounded-full border-2 ${
              todo.completed
                ? 'bg-green-500 border-green-500'
                : 'border-gray-300 dark:border-gray-600'
            } transition-colors duration-200`}
          >
            {todo.completed && <Check size={20} className="text-white" />}
          </button>
          <span
            className={`flex-1 text-lg ${
              todo.completed
                ? 'text-gray-400 line-through'
                : 'text-gray-700 dark:text-gray-200'
            }`}
          >
            {todo.text}
          </span>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsEditing(true)}
              className="icon-button text-blue-500 hover:text-blue-600"
            >
              <Edit2 size={20} />
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="icon-button text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};