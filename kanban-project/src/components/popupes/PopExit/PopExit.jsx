import { Link } from "react-router-dom";
import { Container, PopExitBlock, PopExitFormGroup, PopExitNo, PopExitTtl, PopExitYes, PopExites } from "./PopExit.styled";
import { appRoutes } from "../../../styled/lib/appRoutes";

function PopExit({logout}) {
    return (
        <PopExites>
            <Container>
                <PopExitBlock>
                    <PopExitTtl>
                        <h2>Выйти из аккаунта?</h2>
                    </PopExitTtl>
                    <span>
                        <PopExitFormGroup>                           
                                <PopExitYes onClick={logout}>
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