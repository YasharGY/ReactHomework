import React from 'react';
import style from './Card.module.css'
export function  Card({imageSrc,description,title}){
    return (
        <div className={style.Card}>
           <img src={imageSrc}  alt="" />
           <h2>{title}</h2>
           <p>{description}</p>
        </div>
    );
}

