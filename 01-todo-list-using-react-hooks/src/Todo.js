import React from 'react';
import {ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function Todo(props){
    const [isEditing, toggle]=useToggleState();
    return( 
        <ListItem style={{height: "64px"}}>
            {isEditing ? (
                <EditTodoForm 
                    editTodo={props.editTodo}
                    id={props.id}
                    task={props.task}
                    toggleEditForm={toggle}
                /> 
            ) : (
                <>
                    <Checkbox 
                        tabIndex={-1} 
                        checked={props.completed} 
                        onClick={() => props.toggleTodo(props.id)}
                    />
                    < ListItemText 
                        style={{textDecoration: props.completed ? "line-through": "none"}}
                    >
                        {props.task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton 
                            aria-label="Delete" 
                            onClick={() => props.removeTodo(props.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit">
                            <EditIcon onClick={toggle}/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )
            }
        </ListItem>
    )
}

export default Todo;