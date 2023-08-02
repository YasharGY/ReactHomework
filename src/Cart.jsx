import React from 'react';
import style from './Content.module.css'
export function  Cart({imageSrc,description,title}){
    return (
        <div className={style.Cart}>
           <img src={imageSrc}  alt="" />
           <h2>{title}</h2>
           <p>{description}</p>
        </div>
    );
}

