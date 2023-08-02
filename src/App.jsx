import React from "react"
import Header from "./Header"
import Main from "./MainContext.jsx"
import style from "./main.module.css"
export function App() {
  return (
    <div className={style.MainContent}>
    <Header />
    <Main />
    </div> 
  );
}
