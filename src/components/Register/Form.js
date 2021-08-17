import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();


const Form = ({inputText, setInputText, inputTime, setInputTime, todos, setTodos, time, currentTime}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };    

    
    const inputTimeHandler = (e) => {
            setInputTime(e.target.value);
            time=e.target.value;  
    };

    function getDateTime() {
        var now = new Date();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds();
        if(hour.toString().length === 1) {
            hour = '0'+hour;
       }
       if(minute.toString().length === 1) {
            minute = '0'+minute;
       }
       if(second.toString().length === 1) {
            second = '0'+second;
       }  
       var dateTime = hour+':'+minute+':'+second; 
         return dateTime;
         
    }





const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos, {text: inputText, Time: inputTime, completed: false, id: Math.random() * 1000}
    ]);
    setInputText("");
    setInputTime("");
};


setInterval(() => {
    currentTime = getDateTime();
    if(currentTime === time)
        {
            toast.success("Task has been marked as completed!")  
            setTodos([
                ...todos, {text: inputText, Time: time, completed: true, id: Math.random() * 1000}
            ]);
            
        }
}, 1000);
  
    return (
        <form>
        <div className="next"><input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Task Name" required/></div>
        <div className="next"><input data-testid="intime" value={inputTime} onChange={inputTimeHandler} id="appt-time" type="time" name="appt-time" step="2" className="time-input" />
        </div>
        <div className="next"><button data-testid="btn-click" onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i></button></div>
    </form>    
    )
}

export default Form
