import React from 'react';
import styles from  "./Button.module.css";
//import styled from 'styled-components';

//const Button = styled.button `

  //padding: 0.5rem;
  //background-color: rgb(131, 12, 72);
  //font-size: inherit;
  //border: none;
  //border-radius: 12px;
  //color: white;
  //outline: none;
  //cursor: pointer;
  //transition: 0.5s ease-in;


//&:hover {
  //background-color: rgb(202, 5, 104);
//}
//`;
const Button = (props) => {
return (<button type={props.type} className={styles.button} onClick={props.onClick}>{props.children}
</button>);};
export default Button;