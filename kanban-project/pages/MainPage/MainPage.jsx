import { useEffect, useState } from "react";
import Header from "../../src/components/Header/Header";
import MainContent from "../../src/components/MainContent/MainContent";
import Column from "../../src/components/Column/Column";
import { Outlet } from "react-router-dom";
import { getTodos } from "../../src/api";
import { useUser } from "../../src/hooks/useUser";
import { useTasks } from "../../src/hooks/useTasks";


function MainPage() {

  const {cards, setCards} = useTasks();
  const [isLoading, setIsLoading] = useState(true);

  const {user} = useUser();


  useEffect(() => {
    getTodos({ token: user.token }).then((todos) => {
      console.log(todos);
      setCards(todos.tasks);
      setIsLoading(false);
    }).catch((error) => {
      alert(error)
    })
  }, [user, setCards])

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
        <Header />
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
