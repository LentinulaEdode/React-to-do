import './CSS/TodoItems.css'
import tick from './Assets/check.png'
import not_tick from './Assets/circletask.png'
import cross from './Assets/cross.png'

const TodoItems = ({no, display, text, setTodos}) => {

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo)=>todo.no!==no);
        setTodos(data);
    }
    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i=0; i<data.length; i++) {
            if(data[i].no === no) {
                if(data[i].display==="") {
                    data[i].display = "line-through";
                } else {
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }

    return (
        <div className={`todoitems ${display}`}>
          <div className="todoitems-container" onClick={() => toggle(no)}>
            <div className="icon-container">
              {display === '' ? (<img src={not_tick} alt=""/>) : (<img src={tick} alt=""/>)}
            </div>
            <div className="todoitems-text">{text}</div>
          </div>
          <div className="icon-container" onClick={() => deleteTodo(no)}>
            <img src={cross} alt=""/>
          </div>
        </div>
      );
    };

export default TodoItems
