import styled, { css } from "styled-components";
import { hover01, hover03 } from "../../../../common/Common.styled";
import { topicStyles } from "../../../styled/lib/topic";
import { TopicText } from "../../Card/Cardsitem.styled";



export const PopBrowseStyled = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  &:target {
    display: block;
  }
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
  margin-bottom: 20px;
`;
export const StatusPsubTtlP = styled.div`

`;
export const StatusThemesDiv = styled.div`

`;
export const StatusThemeInput = styled.div`

`;
export const StatusThemeLabel = styled.div`

`;
export const StatusThemeActiveDiv = styled.div`

`;
export const BtnGroupDiv = styled.div`

`;
export const BtnEdit = styled.div`

`;
export const BtnBrowseDiv = styled.div`

`;
export const PopBrowseBtnExit = styled.div`

`;



export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBroweTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopBrowseStatusTitle = styled.p`
  margin-top: 14px;
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #94A6BE;
  background: #d5dce6;
  margin-right: 7px;
  
  
`;

export const PopBrowseStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PopBrowseStatusTheme = css`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormBrowseTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const ThemeDownCategories = styled.div`
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const PopBrowseButtonBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      height: 40px;
      width: 100%;
      margin-right: 0px;
    }
  }
`;

export const ButtonGroup = styled.div`
  button {
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
    button {
      margin-right: 0px;
    }
  }
`;

export const ButtonChengeDelete = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  a {
    color: #565eef;
  }
  ${hover03}
`;

export const ButtonClose = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  ${hover01}
`;
export const OpenedCardTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;
  background-color: ${({ $themeColor }) =>
    topicStyles[$themeColor]?.backgroundColor || "#94a6be"};

  ${TopicText} {
    color: ${({ $themeColor }) => topicStyles[$themeColor]?.color || "#ffffff"};
  }
`;

export const PopBroweColor = styled.div`
  display: inline-block;
  padding: 8px 20px 8px 20px;
  border-radius: 24px;
  color: #9a48f1;
  background: #e9d4ff;
  margin-right: 7px;
`

// display: flex;
// align-items: center;
// justify-content: space-between;
// margin-bottom: 18px;





// import { Link, Navigate, useParams } from "react-router-dom";
// import { appRoutes } from "../../../styled/lib/appRoutes";
// import Calendar from "../../Calendar/Calendar";
// import { useTasks } from "../../../hooks/useTasks";
// // import { topicHeader } from "../../../styled/lib/topic";
// import * as S from "./PopBrowse.styled";
// import { useContext, useEffect, useState } from "react";
// import { useUser } from "../../../hooks/useUser";
// import { TasksContext } from "../../../contexts/tasks";
// import { getTodos, postTodo } from "../../../api";

// export default function PopBrowse() {
//   const { id } = useParams();
//   const { cards } = useTasks();
//   const [ setStoredValue] = useState({});
//   // storedValue,
//   const [isEdit, setIsEdit] = useState(false)

//   const cancelClick = () => {
//     //setModalData(storedValue)
//     setStoredValue({})
//     setIsEdit(false)
//   }
// console.log(cancelClick)
//   // const [card] = useState();
//   // const navigate = useNavigate();
//   const [selected, setSelected] = useState();
//   const { userData } = useUser();
//   const { setCards } = useContext(TasksContext);
//   const { cardId } = useParams()
//   console.log(cardId);
//   const card = cards.find(el => el._id === cardId);
//   const [status, setStatus] = useState(card.status)
//   console.log(status);
//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;

//   //   setNewTask({
//   //     ...newTask,
//   //     [name]: value,
//   //   });
//   // };

//   // const handleEditMode = () => { 
//   //   const newCards = cards.map(item => {
//   //   if (item._id === cardId) { 
//   //   return { 
//   //     ...item,
//   //     ...newTask,
//   //      status: status
//   //     } 
//   //   } 
//   //   return item 
//   // }) 
//   // setCards(newCards); 
//   // setIsEdit(!isEdit); };

//   const [newTask, setNewTask] = useState({
//     title: card.title,
//     topic: card.topic,
//     description: card.description,
//     date: selected,
//     status: card.status,
//   });

//  let nowDate = new Date(newTask.date).toLocaleString();
//  console.log(nowDate);
//  console.log(newTask.date);
 

//   console.log(newTask);
//   const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"]
//   const addCard = async () => {
//     let newCard = {
//       ...newTask, date: selected
//     }
//     console.log(newCard);
//     await postTodo({ token: userData.token, title: newCard.title, topic: newCard.topic, status: newCard.status, description: newCard.description })

//     //не работает окно добавления карточки
//     //не корректно работает удаление
//     //ошибка регистрации
//     // 1. контекст для карточки . копировать как user. не из localstorage
//     // 2. адаптировать под получение данных из контекста
//     // 3. функция добавления карточки.
//     // 4. setcards -> данные из context
//     // 5. редактирование задачи

//     getTodos({ token: userData.token })
//       .then((data) => {
//         setCards(data.tasks);
//       })
//   };


//   useEffect(() => {
//     setNewTask({
//       ...newTask,
//       date: selected,
//     });
//   }, [newTask, selected])

//   // function editTaskHandler() {
//   //   setIsEdit(true)
//   //   // editTasks({ id: cardId, token: userData.token, title: newTask.title, date: newTask.date, description: newTask.description, status: newTask.status, topic: newTask.topic })
//   // }


//   console.log(cards);
//   const openedCard = cards.find((card) => card._id === id);
//   if (!openedCard) {
//     return <Navigate to={appRoutes.MAIN}/>
//   }
//   return (
//     <S.PopBrowseStyled>
//       <S.PopBrowseContainer>
//         <S.PopBrowseBlock>
//           <S.PopBrowseContent>
//             <S.PopBrowseTopBlock>
//               <S.PopBroweTitle>Название задачи:</S.PopBroweTitle>
//               <S.PopBroweColor>
//                 <p>{openedCard?.topic}</p>
//               </S.PopBroweColor>
//             </S.PopBrowseTopBlock>
//             <S.PopBrowseStatus>
//               <div>
//                 <p>Статус:</p>
//                 <div className="status__themes">
//                 {isEdit ? (statuses.map((el, item) => (
//                   <div onClick={() => setStatus(el)}
//                     key={item}
//                     className={`status__theme ${el === status ? '_gray' : ""}`}>
//                     <p>{el}</p>
//                   </div>
//                 ))

//                 ) : (<div
//                   className="status__theme_gray">
//                   <p>{openedCard?.status}</p>
//                 </div>)
//                 }



//               </div>
//               </div>
//               <S.PopBrowseStatusTitle>
//                 {openedCard?.status}
//               </S.PopBrowseStatusTitle>
//               {/* <S.PopBrowseStatusThemes>
//                 <div className="status__theme _hide">
//                   <p>Без статуса</p>
//                 </div>
//                 <div className="status__theme _gray">
//                   <p className="_gray">Нужно сделать</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>В работе</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Тестирование</p>
//                 </div>
//                 <div className="status__theme _hide">
//                   <p>Готово</p>
//                 </div>
//               </S.PopBrowseStatusThemes> */}
//             </S.PopBrowseStatus>
//             <S.PopBrowseWrap>
//               <S.PopBrowseForm id="formBrowseCard" action="#">
//                 <S.FormBrowseBlock>
//                   <S.FormBrowseTitle htmlFor="textArea01">
//                     Описание задачи
//                   </S.FormBrowseTitle>
//                   <S.FormBrowseArea
//                     name="text"
//                     id="textArea01"
//                     readOnly
//                     placeholder={openedCard?.description}
//                   ></S.FormBrowseArea>
//                 </S.FormBrowseBlock>
//               </S.PopBrowseForm>
//               <Calendar  disabled={!isEdit} selected={selected} setSelected={setSelected} />
//             </S.PopBrowseWrap>
//             {/* <S.ThemeDownCategories>
//               <S.PopBrowseStatusTitle>Категория</S.PopBrowseStatusTitle>
//               <S.OpenedCardTheme
//                 $themeColor={topicHeader[openedCard?.topic]}
//               >
//                 <p>{openedCard?.topic}</p>
//               </S.OpenedCardTheme>
//             </S.ThemeDownCategories> */}
//             <S.PopBrowseButtonBrowse>
//               <S.ButtonGroup>
//                 <S.ButtonChengeDelete onClick={addCard}>
//                   <a href="#">Редактировать задачу</a>
//                 </S.ButtonChengeDelete>
//                 <S.ButtonChengeDelete>
//                   <a href="#">Удалить задачу</a>
//                 </S.ButtonChengeDelete>
//               </S.ButtonGroup>
//               <Link to={appRoutes.MAIN}>
//                 <S.ButtonClose>Закрыть</S.ButtonClose>
//               </Link>
//             </S.PopBrowseButtonBrowse>
//             <div className="pop-browse__btn-edit _hide">
//               <div className="btn-group">
//                 <button className="btn-edit__edit _btn-bg _hover01">
//                   <a href="#">Сохранить</a>
//                 </button>
//                 <button className="btn-edit__edit _btn-bor _hover03">
//                   <a href="#">Отменить</a>
//                 </button>
//                 <button
//                   className="btn-edit__delete _btn-bor _hover03"
//                   id="btnDelete"
//                 >
//                   <a href="#">Удалить задачу</a>
//                 </button>
//               </div>
//               <Link to={appRoutes.MAIN}>
//                 <span className="btn-edit__close _btn-bg _hover01">
//                   Закрыть
//                 </span>
//               </Link>
//             </div>
//           </S.PopBrowseContent>
//         </S.PopBrowseBlock>
//       </S.PopBrowseContainer>
//     </S.PopBrowseStyled>
//   );
// }