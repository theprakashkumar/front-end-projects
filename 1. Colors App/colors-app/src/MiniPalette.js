import React from 'react';
import {withStyles} from '@material-ui/styles';

const styles={
    root:{
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "relative",
        position: "relative",
        overflow: "hidden",
        "&:hover":{
            cursor: "pointer"
        }
    },
    colors:{
        backgroundColor: "white",
        height: "150px",
        width: "100%"
    }, 
    title:{
        display: "flex",
        justifyContent : "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
        marginLeft: "10px"
    }, 
    emoji:{
        marginLeft: "0.5rem",
        marginRight: "10px",
        fontSize: "1.5rem"
    },
    miniColor:{
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"   
    }
};

function MiniPalette(props){
    const {classes, paletteName, emoji, colors}=props;
    const miniColorBox=colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}
        />
    ))
    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>{miniColorBox}</div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    )
} 

export default withStyles(styles)(MiniPalette);