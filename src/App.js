

import './App.css';
import React from 'react';
import TeacherName from './components/TeacherName/TeacherName';
import Counter from './components/Counter/Counter';
import ImageSlider from './components/ImageSlider/ImageSlider';
import BankAccount from './components/BankAccount/BankAccount';
import ThunderObservatory from './components/ThunderObservatory/ThunderObservatory';
import Bidder from './components/Bidder/Bidder';

function App() {
  const imagesOne = [
    "https://picsum.photos/id/1000/400/200",
    "https://picsum.photos/id/1002/400/200",
    "https://picsum.photos/id/1003/400/200",
    "https://picsum.photos/id/1004/400/200",
    "https://picsum.photos/id/1005/400/200",
  ];

  const imagesTwo = [
    "https://picsum.photos/id/1006/400/200",
    "https://picsum.photos/id/1008/400/200",
    "https://picsum.photos/id/1009/400/200",
    "https://picsum.photos/id/1010/400/200",
  ];

  const [thunderList, setThunderList] = React.useState([new Date()]);

  const addThunder = () => {
    const newThunderList = [...thunderList, new Date()];
    // no hace falta el push porque en la creación se le ha añadido un elemento
    // newThunderList.push(new Date());
    setThunderList(newThunderList);
  }

  const [startBid, setBid] = React.useState({
    bid: 100
  });

  const addBid = () => {
    const newBid = {
      ...startBid,
      bid: startBid.bid + 5,
    }
    setBid(newBid);
  }


  return (
    <div className="app">
      <h2>Listado de pujas:</h2>
      <ul>
        <li>{startBid.bid}</li>
      </ul>
      <h2>Pujadores:</h2>
      <Bidder addBid={addBid} name="Pedro"></Bidder>
      <Bidder addBid={addBid} name="Gonzalo"></Bidder>
      <Bidder addBid={addBid} name="Edu"></Bidder>


      <h2>Lista de rayos:</h2>
      <ul>
        {thunderList.map(thunder => <li key={thunder.getTime()}>{thunder.toString()}</li>)}
      </ul>

      <h2>Observatorios de rayos:</h2>
      <ThunderObservatory addThunder={addThunder} name="Madrid"></ThunderObservatory>
      <ThunderObservatory addThunder={addThunder} name="Barcelona"></ThunderObservatory>
      <ThunderObservatory addThunder={addThunder} name="Valencia"></ThunderObservatory>

      <h2>Cuenta bancaria:</h2>
      <BankAccount></BankAccount>

      <h2>Componente nombre:</h2>
      <TeacherName></TeacherName>

      <h2>Contador:</h2>
      <Counter></Counter>
      <Counter></Counter>

      <h2>Slider de imágenes</h2>
      <ImageSlider images={imagesOne}></ImageSlider>
      <ImageSlider images={imagesTwo}></ImageSlider>
    </div>
  );
}

export default App;