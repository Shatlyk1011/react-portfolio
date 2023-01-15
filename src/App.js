import { Route, Routes } from "react-router-dom";
import "./App.scss";
import TodoList from "./components/1Todolist/TodoList";

//pages
import Home from "./pages/Home/Home";
import Works from "./pages/Works/Works";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="works/todo-list" element={<TodoList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
