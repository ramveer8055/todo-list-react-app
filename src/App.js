import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Todos from './component/Todos';
import { useState, useEffect } from 'react'
import AddTodo from './component/AddTodo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/About';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const [todos, setTodos] = useState(initTodo)

  const addTodo = (title, desc) => {
    let sno = 0;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1
    }
    const todo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Router>
        <Navbar title="My Todo List !" searchBar={false} />
        <Routes>
          <Route exact path='/' element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
          />
          <Route exact path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;