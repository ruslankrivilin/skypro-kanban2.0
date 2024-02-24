import { ModalBlockDiv, ModalDiv, ModalFormGroupDiv, ModalFormatLoginForm, ModalTtDiv } from "../SigninPage/SigninPage.styled";
import { BodySignup, ContainerSignup, ModalBtnSignup, ModalInput, WraperDiv } from "./SignupPage.styled";

export default function SignupPage({login}) {
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
                            <ModalInput class="modal__input first-name" type="text" name="first-name" id="first-name" placeholder="Имя"></ModalInput>
                            <ModalInput class="modal__input login" type="text" name="login" id="loginReg" placeholder="Эл. почта"></ModalInput>
                            <ModalInput class="modal__input password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль"></ModalInput>
                            <ModalBtnSignup onClick={login}>Зарегистрироваться</ModalBtnSignup>
                            <ModalFormGroupDiv>
                                <p>Уже есть аккаунт?  <a href="signin">Войдите здесь</a></p>
                            </ModalFormGroupDiv>
                        </ModalFormatLoginForm>
                    </ModalBlockDiv>
                </ModalDiv>
            </ContainerSignup>
        </WraperDiv>
        </BodySignup>
    )
}
