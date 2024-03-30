import { Link, Navigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../styled/lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../hooks/useTasks";
// import { topicHeader } from "../../../styled/lib/topic";
import * as S from "./PopBrowse.styled";
import { useContext, useEffect, useState } from "react";
import { useUser } from "../../../hooks/useUser";
import { TasksContext } from "../../../contexts/tasks";
import { getTodos, postTodo } from "../../../api";

export default function PopBrowse() {
  const { id } = useParams();
  const { cards } = useTasks();
  const [ setStoredValue] = useState({});
  // storedValue,
  const [isEdit, setIsEdit] = useState(false)

  const cancelClick = () => {
    //setModalData(storedValue)
    setStoredValue({})
    setIsEdit(false)
  }
console.log(cancelClick)
  // const [card] = useState();
  // const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const { userData } = useUser();
  const { setCards } = useContext(TasksContext);
  const { cardId } = useParams()
  console.log(cardId);
  const card = cards.find(el => el._id === cardId);
  const [status, setStatus] = useState(card.status)
  console.log(status);
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setNewTask({
  //     ...newTask,
  //     [name]: value,
  //   });
  // };

  // const handleEditMode = () => { 
  //   const newCards = cards.map(item => {
  //   if (item._id === cardId) { 
  //   return { 
  //     ...item,
  //     ...newTask,
  //      status: status
  //     } 
  //   } 
  //   return item 
  // }) 
  // setCards(newCards); 
  // setIsEdit(!isEdit); };

  const [newTask, setNewTask] = useState({
    title: card.title,
    topic: card.topic,
    description: card.description,
    date: selected,
    status: card.status,
  });

 let nowDate = new Date(newTask.date).toLocaleString();
 console.log(nowDate);
 console.log(newTask.date);
 

  console.log(newTask);
  const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"]
  const addCard = async () => {
    let newCard = {
      ...newTask, date: selected
    }
    console.log(newCard);
    await postTodo({ token: userData.token, title: newCard.title, topic: newCard.topic, status: newCard.status, description: newCard.description })



    getTodos({ token: userData.token })
      .then((data) => {
        setCards(data.tasks);
      })
  };


  useEffect(() => {
    setNewTask({
      ...newTask,
      date: selected,
    });
  }, [newTask, selected])

  // function editTaskHandler() {
  //   setIsEdit(true)
  //   // editTasks({ id: cardId, token: userData.token, title: newTask.title, date: newTask.date, description: newTask.description, status: newTask.status, topic: newTask.topic })
  // }


  console.log(cards);
  const openedCard = cards.find((card) => card._id === id);
  if (!openedCard) {
    return <Navigate to={appRoutes.MAIN}/>
  }
  return (
    <S.PopBrowseStyled>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBroweTitle>Название задачи:</S.PopBroweTitle>
              <S.PopBroweColor>
                <p>{openedCard?.topic}</p>
              </S.PopBroweColor>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <div>
                <p>Статус:</p>
                <div className="status__themes">
                {isEdit ? (statuses.map((el, item) => (
                  <div onClick={() => setStatus(el)}
                    key={item}
                    className={`status__theme ${el === status ? '_gray' : ""}`}>
                    <p>{el}</p>
                  </div>
                ))

                ) : (<div
                  className="status__theme_gray">
                  <p>{openedCard?.status}</p>
                </div>)
                }



              </div>
              </div>
              <S.PopBrowseStatusTitle>
                {openedCard?.status}
              </S.PopBrowseStatusTitle>
              {/* <S.PopBrowseStatusThemes>
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </S.PopBrowseStatusThemes> */}
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.FormBrowseTitle htmlFor="textArea01">
                    Описание задачи
                  </S.FormBrowseTitle>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder={openedCard?.description}
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar  disabled={!isEdit} selected={selected} setSelected={setSelected} />
            </S.PopBrowseWrap>
            {/* <S.ThemeDownCategories>
              <S.PopBrowseStatusTitle>Категория</S.PopBrowseStatusTitle>
              <S.OpenedCardTheme
                $themeColor={topicHeader[openedCard?.topic]}
              >
                <p>{openedCard?.topic}</p>
              </S.OpenedCardTheme>
            </S.ThemeDownCategories> */}
            <S.PopBrowseButtonBrowse>
              <S.ButtonGroup>
                <S.ButtonChengeDelete onClick={addCard}>
                  <a href="#">Редактировать задачу</a>
                </S.ButtonChengeDelete>
                <S.ButtonChengeDelete>
                  <a href="#">Удалить задачу</a>
                </S.ButtonChengeDelete>
              </S.ButtonGroup>
              <Link to={appRoutes.MAIN}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </Link>
            </S.PopBrowseButtonBrowse>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <Link to={appRoutes.MAIN}>
                <span className="btn-edit__close _btn-bg _hover01">
                  Закрыть
                </span>
              </Link>
            </div>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseStyled>
  );
}