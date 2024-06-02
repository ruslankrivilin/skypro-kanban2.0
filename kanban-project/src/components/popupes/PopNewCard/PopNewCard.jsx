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
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const taskData = {
            ...newTask,
            date: selectedDate,
            token: user.token,

        }
        await postTodo(taskData).then((data) => {
            console.log(data);
            if (data.error) {
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
                            <S.PopNewCardForm id="formNewCard" action="#">
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
                                    <S.Subttl htmlFor="textArea">Описание задачи</S.Subttl>
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
                                <S.Subttl>Дата</S.Subttl>
                                <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                            </div>
                        </S.PopNewCardWrap>
                        <S.Subttl htmlFor="textArea" className="subttl">Категории</S.Subttl>
                        <S.ProdCheckbox>
                            <S.RadioToolbar>
                                <S.RadioToolbarLabel1 $active={newTask.topic === "Web Design"}>
                                    <S.InputRadio1
                                        type="radio"
                                        name="topic"
                                        value="Web Design"
                                        onChange={handleInputChange}
                                    />
                                    Web Design
                                </S.RadioToolbarLabel1>

                                <S.RadioToolbarLabel2 $active={newTask.topic === "Research"}>
                                    <S.InputRadio1
                                        type="radio"
                                        name="topic"
                                        value="Research"
                                        onChange={handleInputChange}
                                    />
                                    Research
                                </S.RadioToolbarLabel2>

                                <S.RadioToolbarLabel3 $active={newTask.topic === "Copywriting"}>
                                    <S.InputRadio1
                                        type="radio"
                                        name="topic"
                                        value="Copywriting"
                                        onChange={handleInputChange}
                                    />
                                    Copywriting
                                </S.RadioToolbarLabel3>
                            </S.RadioToolbar>
                        </S.ProdCheckbox>

                        <S.FormNewCreatButton onClick={handleFormSubmit} id="btnCreate">Создать задачу</S.FormNewCreatButton>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    )
}





