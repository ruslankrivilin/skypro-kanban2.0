import { Link, useNavigate } from "react-router-dom";
import { ModalBlockDiv, ModalDiv, ModalFormGroupDiv, ModalFormatLoginForm, ModalTtDiv } from "../SigninPage/SigninPage.styled";
import { BodySignup, ContainerSignup, ModalBtnSignup, ModalInput, WraperDiv } from "./SignupPage.styled";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { signUp } from "../../api";
import { appRoutes } from "../../styled/lib/appRoutes";

export default function SignupPage() {
    const {login} = useUser();
    const navigate = useNavigate();
 
    const [regData, setRegData] = useState({ login: "", name: "", password: "" })

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        setRegData({
            ...regData, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    const handleReg = async() => {
        await signUp(regData).then((data) => {
            login(data.user)
            navigate(appRoutes.MAIN);
        })
        
    };

    return (
        <BodySignup>
        <WraperDiv>
            <ContainerSignup>
                <ModalDiv>
                    <ModalBlockDiv>
                        <ModalTtDiv>
                            <h2>Регистрация</h2>
                        </ModalTtDiv>
                        <ModalFormatLoginForm>
                            <ModalInput className="modal__input first-name" 
                            value={regData.name}
                            onChange={handleInputChange}
                            type="text" 
                            name="name" 
                            id="first-name" 
                            placeholder="Имя">
                            </ModalInput>
                            <ModalInput className="modal__input login"
                            value={regData.login}
                            onChange={handleInputChange} 
                            type="text" 
                            name="login" 
                            id="loginReg" 
                            placeholder="Эл. почта">
                            </ModalInput>
                            <ModalInput className="modal__input password-first" 
                            value={regData.password}
                            onChange={handleInputChange}
                            type="password" 
                            name="password" 
                            id="passwordFirst" 
                            placeholder="Пароль">                               
                            </ModalInput>
                            <ModalBtnSignup onClick={handleReg}>
                                Зарегистрироваться
                            </ModalBtnSignup>
                            <ModalFormGroupDiv>
                                <p>Уже есть аккаунт?  
                                    <Link to={appRoutes.SIGNIN}>
                                        Войдите здесь
                                    </Link>
                                </p>
                            </ModalFormGroupDiv>
                        </ModalFormatLoginForm>
                    </ModalBlockDiv>
                </ModalDiv>
            </ContainerSignup>
        </WraperDiv>
        </BodySignup>
    )
}
