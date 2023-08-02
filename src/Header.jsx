import React from 'react';
import Button from './Button'
import style from "./header.module.css"
export default function Header(){
    return (
    <div className={style.Header}>
           <h1 className={style.HeaderText}>What we do</h1> 
           <div>
           <Button title="Read more" >
            </Button>
           </div>
        </div>
    );
}
