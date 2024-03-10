// import PopBrowse from "../../src/components/popupes/PopBrowse/PopBrowse";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./TaskPage.styled.js";
import Calendar from "../../src/components/Calendar/Calendar";
import { appRoutes } from "../../src/styled/lib/appRoutes.js";
import { useState } from "react";
import { postTodo } from "../../src/api.js";

export default function TaskPage() {
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        topic: ""
    });

    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     const taskData = {
    //         ...newTask, date: selectedDate,

    //     }
    //     console.log(taskData)
    //     navigate(appRoutes.MAIN);
    // }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const taskData = {
            ...newTask, date: selectedDate,

        }
        await postTodo(newTask).then(() => {
            
            navigate(appRoutes.MAIN);
        })
        console.log(taskData)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        setNewTask({
            ...newTask, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    return (
        // <PopBrowse/>
        <S.PopNewCard id="popNewCard">
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                        <Link to={appRoutes.MAIN}><S.PopNewCardClose>&#10006;</S.PopNewCardClose></Link>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm className="form-new" id="formNewCard" action="#">
                                <S.FormNewBlock>
                                    <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                                    <S.ForrmNewInput
                                        type="text"
                                        name="title"
                                        value={newTask.title}
                                        onChange={handleInputChange}
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus>
                                    </S.ForrmNewInput>
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                    <S.Subttl htmlFor="textArea" className="subttl">Описание задачи</S.Subttl>
                                    <S.FormNewArea
                                        name="description"
                                        value={newTask.description}
                                        onChange={handleInputChange}
                                        id="textArea"
                                        placeholder="Введите описание задачи...">
                                    </S.FormNewArea>
                                </S.FormNewBlock>
                            </S.PopNewCardForm>
                            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                        </S.PopNewCardWrap>
                        <S.Subttl htmlFor="textArea" className="subttl">Категории</S.Subttl>
                        {/* <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__themes">
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                            </div>
                        </div> */}
                        <div className="prod_checbox">
                            <S.RadioToolbar>
                                <input
                                    type="radio"
                                    id="radio1"
                                    name="topic"
                                    value="Web Design"
                                    onChange={handleInputChange}
                                />
                                <S.RadioToolbarLabel htmlFor="radio1">Web Design</S.RadioToolbarLabel>

                                <input
                                    type="radio"
                                    id="radio2"
                                    name="topic"
                                    value="Research"
                                    onChange={handleInputChange}
                                />
                                <S.RadioToolbarLabel htmlFor="radio2">Research</S.RadioToolbarLabel>

                                <input
                                    type="radio"
                                    id="radio3"
                                    name="topic"
                                    value="Copywriting"
                                    onChange={handleInputChange}
                                />
                                <S.RadioToolbarLabel htmlFor="radio3">Copywriting</S.RadioToolbarLabel>
                            </S.RadioToolbar>
                        </div>
                        <S.FormNewCreatButton onClick={handleFormSubmit} id="btnCreate">Создать задачу</S.FormNewCreatButton>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    )
}





