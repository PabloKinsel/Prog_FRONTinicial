import './global.css';
import style from "./App.module.css";

export function App() {
  
  return (
    <article className={style.container}>
      <div className={style.card}>
      <img 
      src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80" alt='Cover'/>
      <h1>Cover</h1>
      <h1>Avatar</h1>
      <h1>Descrição / Nome</h1>
      <h1>Stack</h1>
      </div>
    </article>
    
  )
}

//export default App    Fica mais facil de chamar um funcão
