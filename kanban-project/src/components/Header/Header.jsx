import { useState } from "react";
import * as S from "./Header.styled.js";
import { Container } from "../../styled/Common.styled.js";
import { Link } from "react-router-dom";
import { appRoutes } from "../../styled/lib/appRoutes.js";
import { useUser } from "../../hooks/useUser.js";

function Header() {
    const {user} = useUser();
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
                            {user.name}
                        </S.HeaderUser>
                        {isOpened && (<S.HeaderpopUserSet
                            
                            id="user-set-target"
                        >
                            {/* <a href="">x</a> */}
                            <p className="pop-user-set__name">{user.name}</p>
                            <p className="pop-user-set__mail">{user.login}</p>
                            
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