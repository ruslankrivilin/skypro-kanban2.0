import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "../../../styled/lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../hooks/useTasks";
import * as S from "./PopBrowse.styled";
import { useState } from "react";
import { useUser } from "../../../hooks/useUser";
import { TopicText } from "../../Card/Cardsitem.styled";
import { deleteTodo, putTodo } from "../../../api";
import { topicHeader } from "../../../styled/lib/topic";

export default function PopBrowse() {
  const { id } = useParams();
  const { user } = useUser();
  const { cards, setCards } = useTasks();
  const navigate = useNavigate();
  
  const [isEdited, setIsEdited] = useState(false);
  const openedCard = cards.find((card) => card._id == `${id}`);
  // let card = cards.filter((card) => card._id == `${id}`);
  const [selectedDate, setSelectedDate] = useState(openedCard.date);

  const [editTask, setEditTask] = useState({
    title: openedCard.title,
    description: openedCard.description,
    topic: openedCard.topic,
    status: openedCard.status,
    date: openedCard.date,
  });
  console.log(editTask);

  const deleteTask = () => {
    deleteTodo({ token: user.token, id: id })
      .then((newCard) => {
        setCards(newCard.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      ...editTask,
      date: selectedDate,
    };
    console.log(taskData);
    putTodo({ token: user.token, id: id, taskData: taskData })
      .then((newCard) => {
        console.log(newCard)
        setCards(newCard.tasks);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
    // postTodos({ token: user.token, taskData })
    //   .then((newCard) => {
    //     setCards(newCard.tasks);
    //     navigate(appRoutes.MAIN);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert(error);
    //   });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditTask({
      ...editTask,
      [name]: value,
    });
  };

    if (!openedCard) {
      return <Navigate to={appRoutes.MAIN}/>
    }
  return (
    <S.PopBrowseStyled>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBroweTitle>Название задачи:  {openedCard.title}</S.PopBroweTitle>
              <S.PopBroweColor $themeColor={topicHeader[openedCard.topic]}>
              <TopicText $themeColor={topicHeader[openedCard.topic]}>
                  {openedCard.topic}
                </TopicText>
              </S.PopBroweColor>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.StatusPsubTtlP>Статус</S.StatusPsubTtlP>
            {isEdited && (
                <S.StatusThemesDiv>
                  <S.OpenedCardTheme
                    type="radio"
                    id="radio1"
                    name="status"
                    value="Без статуса"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio1">Без статуса</S.StatusThemeLabel>

                  <S.OpenedCardTheme
                    type="radio"
                    id="radio2"
                    name="status"
                    value="Нужно сделать"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio2">Нужно сделать</S.StatusThemeLabel>

                  <S.OpenedCardTheme
                    type="radio"
                    id="radio3"
                    name="status"
                    value="В работе"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio3">В работе</S.StatusThemeLabel>

                  <S.OpenedCardTheme
                    type="radio"
                    id="radio4"
                    name="status"
                    value="Тестирование"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio4">Тестирование</S.StatusThemeLabel>

                  <S.OpenedCardTheme
                    type="radio"
                    id="radio5"
                    name="status"
                    value="Готово"
                    onChange={handleInputChange}
                  />
                  <S.StatusThemeLabel htmlFor="radio5">Готово</S.StatusThemeLabel>
                </S.StatusThemesDiv>
              )}
              <S.OpenedCardTheme>{!isEdited && (
                <S.StatusThemesDiv>
                  <S.StatusThemeActiveDiv>{openedCard.status}</S.StatusThemeActiveDiv>
                </S.StatusThemesDiv>
              )}</S.OpenedCardTheme>
            </S.PopBrowseStatus>

            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.FormBrowseTitle htmlFor="textArea01">
                    Описание задачи
                  </S.FormBrowseTitle>
                  {!isEdited && (
                    <S.FormBrowseArea
                      onChange={handleInputChange}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={openedCard.description}
                      disabled={true}
                    />
                  )}
                  {isEdited && (
                    <S.FormBrowseArea
                      onChange={handleInputChange}
                      name="description"
                      id="textArea01"
                      readOnly=""
                      placeholder="Введите описание задачи..."
                      defaultValue={openedCard.description}
                      disabled={false}
                    />
                  )}
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </S.PopBrowseWrap>
            {/* <S.ThemeDownCategories>
              <S.PopBrowseStatusTitle>Категория</S.PopBrowseStatusTitle>
              <S.OpenedCardTheme
                $themeColor={topicHeader[openedCard?.topic]}
              >
                <p>{openedCard?.topic}</p>
              </S.OpenedCardTheme>
            </S.ThemeDownCategories> */}
            {!isEdited && (<S.PopBrowseButtonBrowse>
              <S.ButtonGroup>
                <S.ButtonChengeDelete 
                onClick={() => {
                      setIsEdited(!isEdited);
                    }}>
                  Редактировать задачу
                </S.ButtonChengeDelete>
                <S.ButtonChengeDelete onClick={deleteTask}>
                Удалить задачу
                </S.ButtonChengeDelete>
              </S.ButtonGroup>
              <Link to={appRoutes.MAIN}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </Link>
            </S.PopBrowseButtonBrowse>)}
            {isEdited && (<S.PopBrowseButtonBrowse>
            <S.ButtonGroup>
            
              <S.ButtonChengeDelete
                onClick={handleFormSubmit}
              >
                Сохранить
              </S.ButtonChengeDelete>
              <S.ButtonChengeDelete
                onClick={() => {
                  setIsEdited(!isEdited);
                }}
              >
                Отменить
              </S.ButtonChengeDelete>

              <S.ButtonChengeDelete
                onClick={deleteTask}
              >
                Удалить задачу
              </S.ButtonChengeDelete>
              </S.ButtonGroup>
            <Link to={appRoutes.MAIN}>
              <S.ButtonClose>Закрыть</S.ButtonClose>
            </Link>
          
          </S.PopBrowseButtonBrowse>
        )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseStyled>
  );
}