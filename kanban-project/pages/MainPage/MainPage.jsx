import { useEffect, useState } from "react";
import Header from "../../src/components/Header/Header";
import MainContent from "../../src/components/MainContent/MainContent";
import Column from "../../src/components/Column/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../src/api";


function MainPage({user}) {

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getTodos({ token: user.token }).then((todos) => {
      console.log(todos);
      setCards(todos.tasks);
      setIsLoading(false);
    })
  }, [user])

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
        <Outlet />
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

export default MainPage
