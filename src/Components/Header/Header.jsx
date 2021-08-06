import {createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react'
import "./Header.css";
import categories from "../../data/category";

const Header = (props) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: props.LightMode?"#000": '#fff'
            },
          type: props.LightMode? 'light' : 'dark',
        },
      });

      function handleChangeword(event) {
        props.setWord(event.target.value);
      }

function handleChange(event) {
  props.setCategory(event.target.value);
  props.setWord("");
}



    return (
        <div className="header">
            <span className="title">{props.word? props.word:"wordHunt"}</span> 
            <div className="inputs">
            <ThemeProvider theme={darkTheme}>
            <TextField className='search'  label="Search a word" label="Standard" value={props.word} onChange={handleChangeword} />
            <TextField className='select'
          select
          label="Language"
          value={props.category}
          onChange={handleChange}
          >
          {categories.map((category) => (
            <MenuItem key={category.label} value={category.label}>
          {category.value}
            </MenuItem>
          ))}
            
        </TextField>
            </ThemeProvider>
             </div>
        </div>
    )
}

export default Header;
