import { Link, useNavigate } from "react-router-dom";
import { Container, PopExitBlock, PopExitFormGroup, PopExitNo, PopExitTtl, PopExitYes, PopExites } from "./PopExit.styled";
import { appRoutes } from "../../../styled/lib/appRoutes";
import { useUser } from "../../../hooks/useUser";

function PopExit() {
    const { logout } = useUser();
    const navigate = useNavigate();
    return (
        <PopExites>
            <Container>
                <PopExitBlock>
                    <PopExitTtl>
                        <h2>Выйти из аккаунта?</h2>
                    </PopExitTtl>
                    <span>
                        <PopExitFormGroup>
                            <PopExitYes onClick={() => {
                                logout();
                                navigate(appRoutes.SIGNIN);
                            }}>
                                Да, выйти{" "}
                            </PopExitYes>
                            <PopExitNo >
                                <Link to={appRoutes.MAIN}>
                                    Нет, остаться{" "}
                                </Link>
                            </PopExitNo>
                        </PopExitFormGroup>
                    </span>
                </PopExitBlock>
            </Container>
        </PopExites>
    )
}

export default PopExit