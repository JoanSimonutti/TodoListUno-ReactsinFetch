import { useState } from 'react'
import './App.css'

function App() {
    const [tareas, setTareas] = useState([])
    const [inputValue, setInputValue] = useState("")
  
    const handleDelete = (index) => {
      setTareas(tareas.filter((tarea, i) => i != index))
  
    }
  
    return (
      <>
        <div className="card mx-auto mt-4 text-center">
          <div className="card-header">
            <h3>LISTA DE TAREAS</h3>
          </div>
          <div className="card-body">
            <input
              type="text"
              size="22"
              placeholder="Agrega una tarea y preciona ENTER"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (inputValue.trim() !== "") {
                    setTareas(tareas.concat([inputValue]))
                    setInputValue("")
                  }
  
                }
              }}
            />
            <ol>
              {
                tareas.length > 0 ?
                  tareas.map((tarea, index) => {
                    return (
                      <li key={index}>{tarea}{" "}<span onClick={() => handleDelete(index)} className="fa-regular fa-rectangle-xmark"></span></li>
                    )
                  })
                  :
                  <li className="li-vacio">Sin tareas pendientes.</li>
              }
            </ol>
          </div>
        </div>
      </>
    );
  };

export default App;
