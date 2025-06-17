# 📝 React Todo List App

A simple and clean Todo List application built using **React**. This app allows users to add tasks, delete them, and reorder them using up and down buttons.

## 🚀 Features

- ✅ Add new tasks
- ❌ Delete existing tasks
- ⬆ Move tasks up
- ⬇ Move tasks down
- 🔄 Real-time task updates with React state

## 🛠 Tech Stack

- React (Functional Components & Hooks)
- JavaScript (ES6)
- HTML/CSS

## 📂 Folder Structure

```

todo-list-app/
├── public/
│   └── index.html
├── src/
│   ├── Todo.js       # Main Todo Component
│   ├── App.js        # Root App Component
│   └── index.js      # Entry point
├── package.json
└── README.md

````

## 📸 Preview

![alt text](image.png)

```md
![Todo App Screenshot](screenshot.png)
````

## 🔧 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/FeralSatyam/todo-list-app.git
   cd todo-list-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app locally:**

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser to use the app.

## 🧠 Component Logic (Overview)

* `useState` is used to manage the task list and the input value.
* Tasks can be added if the input is not empty.
* Tasks can be deleted individually.
* Tasks can be reordered using up/down buttons.

## ✨ Future Improvements

* Persist tasks using localStorage or backend
* Add edit functionality
* Task completion toggle
* Responsive design and better UI

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Satyam Rana(https://github.com/FeralSatyam)
