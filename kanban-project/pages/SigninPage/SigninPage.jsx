import { ModalInput } from "../SignupPage/SignupPage.styled";
import { BodySignin, ContainerSigninDiv, ModalBlockDiv, ModalBtnEnter, ModalDiv, ModalFormGroupDiv, ModalFormatLoginForm, ModalTtDiv, WraperSigninDiv } from "./SigninPage.styled";

export default function SigninPage({login}) {
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
                                <ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"></ModalInput>
                                <ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"></ModalInput>
                                <ModalBtnEnter onClick={login}>Войти</ModalBtnEnter>
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