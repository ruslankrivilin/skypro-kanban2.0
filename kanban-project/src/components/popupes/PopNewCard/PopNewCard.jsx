import * as S from "./PopNewCard.styled.js";
import Calendar from "../../Calendar/Calendar.jsx";
import { useTasks } from "../../../hooks/useTasks.js";
import { useUser } from "../../../hooks/useUser.js";
import { postTodo } from "../../../api.js";
import React, { useState } from "react";
import { appRoutes } from "../../../styled/lib/appRoutes.js";
import { Link, useNavigate } from "react-router-dom";


export default function PopNewCard() {
    const { user } = useUser();
    const { setCards } = useTasks();
    const [selectedDate, setSelectedDate] = React.useState(null);
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
            ...newTask, 
            date: selectedDate,
            token: user.token,

        }
        await postTodo(taskData).then((data) => {
            console.log(data);
            if(data.error) {
                return alert("Пожалуйста заполните все поля");
            }
            setCards(data.tasks);
            console.log(data.tasks);
            navigate(appRoutes.MAIN);
        }).catch((error) => {
            alert(error.message);
        }) 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение
console.log(name, value)
        setNewTask({
            ...newTask, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    return (
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
                            <div>
                                <p>Дата</p>
                            </div>
                            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                        </S.PopNewCardWrap>
                        <S.Subttl htmlFor="textArea" className="subttl">Категории</S.Subttl>
                        <S.ProdCheckbox>
                            <S.RadioToolbar>
                                <S.InputRadio1
                                    type="radio"
                                    id="radio1"
                                    name="topic"
                                    // checked={state.selectedLabel === "Web Design" ? true : false}
                                    value="Web Design"
                                    onChange={handleInputChange}
                                />
                                <S.RadioToolbarLabel1 $active={newTask.topic === "Web Design" } htmlFor="radio1">Web Design</S.RadioToolbarLabel1>

                                <S.InputRadio1
                                    type="radio"
                                    id="radio2"
                                    name="topic"
                                    // checked={state.selectedLabel === "Research" ? true : false}
                                    value="Research"
                                    onChange={handleInputChange}
                                />
                                <S.RadioToolbarLabel2 htmlFor="radio2">Research</S.RadioToolbarLabel2>

                                <S.InputRadio1
                                    type="radio"
                                    id="radio3"
                                    name="topic"
                                    // checked={state.selectedLabel === "Copywriting" ? true : false}
                                    value="Copywriting"
                                    onChange={handleInputChange}
                                />
                                <S.RadioToolbarLabel3 htmlFor="radio3">Copywriting</S.RadioToolbarLabel3>
                            </S.RadioToolbar>
                        </S.ProdCheckbox>


                        {/* <S.CategoriesThemes>
                            <label>
                            <S.ElenaInput
                                    type="radio"
                                    id="radio1"
                                    name="topic"
                                    // checked={state.selectedLabel === "Web Design" ? true : false}
                                    value="Web Design"
                                    onChange={handleInputChange}
                                />
                                <S.CategoriesWebDesign>
                                <S.RadioToolbarLabel1 htmlFor="radio1">Web Design</S.RadioToolbarLabel1>
                                </S.CategoriesWebDesign>
                            </label>
                            <label>
                                <S.ElenaInput
                                    type="radio"
                                    id="radio2"
                                    name="topic"
                                    // checked={state.selectedLabel === "Research" ? true : false}
                                    value="Research"
                                    onChange={handleInputChange}
                                />
                                <S.CategoriesWebDesign>
                                <S.RadioToolbarLabel2 htmlFor="radio2">Research</S.RadioToolbarLabel2>
                                </S.CategoriesWebDesign>
                            </label>
                            <label>
                                <S.ElenaInput
                                    type="radio"
                                    id="radio3"
                                    name="topic"
                                    // checked={state.selectedLabel === "Copywriting" ? true : false}
                                    value="Copywriting"
                                    onChange={handleInputChange}
                                />
                                <S.CategoriesWebDesign>
                                <S.RadioToolbarLabel3 htmlFor="radio3">Copywriting</S.RadioToolbarLabel3>
                                </S.CategoriesWebDesign>
                            </label>
                        </S.CategoriesThemes> */}

                        <S.FormNewCreatButton onClick={handleFormSubmit} id="btnCreate">Создать задачу</S.FormNewCreatButton>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    )
}





