import React from 'react';
import Todo from './Todo';
import {Paper, List, Divider} from '@material-ui/core';

function TodoList(props){
    if(props.todos.length) 
    return (
        <Paper>
            <List>
                {props.todos.map((todo, i)=> (
                    <>
                        <Todo
                            {...todo}
                            key={todo.id}
                            completed={todo.completed}
                            removeTodo={props.removeTodo}
                            toggleTodo={props.toggleTodo}
                            editTodo={props.editTodo}
                        />
                        {i < props.todos.length-1 && <Divider/>}
                    </>
                ))}
            </List>
        </Paper>
    );
    return null;
}

export default TodoList;