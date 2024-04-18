import { useState } from "react";
import { BodySignin, ContainerSigninDiv, ModalBlockDiv, ModalBtnEnter, ModalDiv, ModalFormGroupDiv, ModalFormatLoginForm, ModalTtDiv, WraperSigninDiv } from "./SigninPage.styled";
import { useNavigate } from "react-router-dom";
import { ModalInput } from "../SignupPage/SignupPage.styled";
import { signIn } from "../../api";
import { useUser } from "../../hooks/useUser";
import { appRoutes } from "../../styled/lib/appRoutes";

export default function SigninPage() {
    const { login } = useUser();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({ login: "", password: "" })

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        setLoginData({
            ...loginData, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };

    const handleLogin = async () => {
        await signIn(loginData).then((data) => {
            login(data.user)
            navigate(appRoutes.MAIN);
        })
    };

    return (
        <BodySignin>
            <WraperSigninDiv>
                <ContainerSigninDiv>
                    <ModalDiv>
                        <ModalBlockDiv>
                            <ModalTtDiv>
                                <h2>Вход</h2>
                            </ModalTtDiv>
                            <ModalFormatLoginForm action="#">
                                <ModalInput
                                    value={loginData.login}
                                    onChange={handleInputChange}
                                    type="text"
                                    name="login"
                                    id="loginReg"
                                    placeholder="Эл. почта">
                                </ModalInput>
                                <ModalInput
                                    value={loginData.password}
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    id="passwordFirst"
                                    placeholder="Пароль">
                                </ModalInput>
                                <ModalBtnEnter onClick={handleLogin}>Войти</ModalBtnEnter>
                                <ModalFormGroupDiv>
                                    <p>Нужно зарегистрироваться?</p>
                                    <a href="signup">Регистрируйтесь здесь</a>
                                </ModalFormGroupDiv>
                            </ModalFormatLoginForm>
                        </ModalBlockDiv>
                    </ModalDiv>
                </ContainerSigninDiv>
            </WraperSigninDiv>
        </BodySignin>
    )
}