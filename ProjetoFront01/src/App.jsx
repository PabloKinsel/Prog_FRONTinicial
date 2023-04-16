import style from "./App.module.css";

import { CardPerson } from "./components/cardPerson";


export function App() {
  const listStack = [
    { Tec: "JavaScript", color:""},
    { Tec: "HTML", color:""},
    { Tec: "CSS" , color:""},
    { Tec: "Typescript" , color:""},
    { Tec: "React" , color:""},
  ];

  return (
    <div className={style.container}>
      <CardPerson
        cover="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"
        avatar="https://github.com/PabloKinsel.png"
        name="Pablo Y Kinsel"
        office="Web Developer"
        stacks={listStack}
      />
    </div>
  );
}

//export default App    Fica mais facil de chamar um funcão
