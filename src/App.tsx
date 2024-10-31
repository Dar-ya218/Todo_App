import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import { Navbar } from './components/Navbar';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { TodoFilters } from './components/TodoFilters';
import { useTodos } from './hooks/useTodos';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    markAllCompleted,
    totalTodos,
    activeTodos,
  } = useTodos();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleAddTodo = (text: string) => {
    addTodo(text);
    toast.success('Task added successfully');
  };

  const handleDeleteTodo = (id: string) => {
    deleteTodo(id);
    toast.error('Task deleted');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Toaster position="top-right" />
      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <TodoInput onAdd={handleAddTodo} />
        
        <TodoFilters
          filter={filter}
          onFilterChange={setFilter}
          totalTodos={totalTodos}
          activeTodos={activeTodos}
        />
        
        <div className="space-y-4">
          <AnimatePresence>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={handleDeleteTodo}
                onEdit={editTodo}
              />
            ))}
          </AnimatePresence>
        </div>
        
        {totalTodos > 0 && (
          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={clearCompleted}
              className="px-4 py-2 text-red-500 hover:text-red-600 transition-colors"
            >
              Clear Completed
            </button>
            <button
              onClick={markAllCompleted}
              className="px-4 py-2 text-green-500 hover:text-green-600 transition-colors"
            >
              Mark All Completed
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;