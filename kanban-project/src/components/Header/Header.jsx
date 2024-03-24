import { useState } from "react";
import * as S from "./Header.styled.js";
import { Container } from "../../styled/Common.styled.js";
import { Link } from "react-router-dom";
import { appRoutes } from "../../styled/lib/appRoutes.js";

function Header() {
    const [isOpened, setIsOpened] = useState(false);
    function togglePopup() {
        setIsOpened((prev) => !prev)
    }
    return (
        <S.StyledHeader>
            <Container>
                <S.HeaderBlock>
                    <S.HeaderLogoShow>
                        <a href="" target="_self">
                            <img src="./images/logo.png" alt="logo" />
                        </a>
                    </S.HeaderLogoShow>
                    <S.HeaderLogoDark>
                        <a href="" target="_self">
                            <img src="./images/logo_dark.png" alt="logo" />
                        </a>
                    </S.HeaderLogoDark>
                    <S.HeaderNav>
                        <S.HeaderBtnMainNew className="header__btn-main-new _hover01" id="btnMainNew">
                            <Link to={appRoutes.ADD_TASK}>
                                Создать новую задачу
                            </Link>
                        </S.HeaderBtnMainNew>
                        <S.HeaderUser onClick={togglePopup} className="header__user _hover02">
                            Ivan Ivanov
                        </S.HeaderUser>
                        {isOpened && (<S.HeaderpopUserSet
                            
                            id="user-set-target"
                        >
                            {/* <a href="">x</a> */}
                            <p className="pop-user-set__name">Ivan Ivanov</p>
                            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                            <div className="pop-user-set__theme">
                                <p>Темная тема</p>
                                <input type="checkbox" className="checkbox" name="checkbox" />
                            </div>
                            <S.Lala>
                            <Link to={appRoutes.EXIT}>
                                <S.HeaderExit>
                                <span type="button" className="_hover03">
                                    Выйти
                                </span>
                                </S.HeaderExit>
                            </Link>
                            </S.Lala>
                        </S.HeaderpopUserSet>)}
                    </S.HeaderNav>
                </S.HeaderBlock>
            </Container>
        </S.StyledHeader>
    )
}

export default Header