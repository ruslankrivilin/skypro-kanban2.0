import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MainContent from "../../components/MainContent/MainContent";
import { useTasks } from "../../hooks/useTasks";
import { useUser } from "../../hooks/useUser";
import { getTodos } from "../../api";
import Column from "../../components/Column/Column";
import Header from "../../components/Header/Header";


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
