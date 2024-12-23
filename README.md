# Todo_App

## ✨ Features

- **Clean, Modern UI**: 
  - Minimalist design focused on usability

- **Task Management**:
  - Add new tasks
  - Mark tasks as completed
  - Delete tasks
  - Filter tasks by status

- **Responsive Design**: Works seamlessly on desktop and mobile devices

- **Real-time Filtering**: Instantly filter between all, active, and completed tasks

## 🚀 Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- Context API for state management
- Vite for blazing fast development

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Dar-ya218/taskflow.git
cd taskflow
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. ## 🛠️ Project Structure

```
src/
├── components/
│   ├── Footer.tsx      # Filter controls
│   ├── Navbar.tsx      # App header
│   └── TodoList.tsx    # Main todo list component
├── context/
│   └── TodoContext.tsx # Global state management
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎯 Usage

1. **Adding Tasks**:
   - Type your task in the input field
   - Click the plus button or press Enter to add

2. **Managing Tasks**:
   - Click the checkbox to mark a task as completed
   - Click the × button to delete a task

3. **Filtering Tasks**:
   - Use the footer buttons to filter:
     - "All": Show all tasks
     - "Active": Show only uncompleted tasks
     - "Completed": Show only completed tasks

## 🤝 Todo_App
![Todo_App](../Todo_App/src/assets/Ph_Todo_App.png)


## 🙏 Acknowledgments

- Design inspired by modern UI/UX principles
- Icons provided by [Lucide Icons](https://lucide.dev)
- Built with [Vite](https://vitejs.dev) + [React](https://reactjs.org)