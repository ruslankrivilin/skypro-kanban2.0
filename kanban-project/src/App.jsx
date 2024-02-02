
import { useEffect, useState } from 'react'
import './App.css'
import Column from './components/Column/Column'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import PopBrowse from './components/popupes/PopBrowse/PopBrowse'
import PopExit from './components/popupes/PopExit/PopExit'
import PopNewCard from './components/popupes/PopNewCard/PopNewCard'
import { cardList } from './data'

function App() {

  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Web Design",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    }
    setCards([...cards, newCard])
  }

  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        {isLoading ? ("Загрузка...") : (
        <MainContent>
          {statusList.map((status) => (
            <Column
              title={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)}
            />
          ))}
        </MainContent>)}
      </div>
    </>
  )
}

export default App
