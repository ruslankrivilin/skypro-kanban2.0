import { Container, PopExitBlock, PopExitFormGroup, PopExitNo, PopExitTtl, PopExitYes, PopExites } from "./PopExit.styled";

function PopExit(logout) {
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
                            
                                <PopExitNo onClick={logout}>
                                    Нет, остаться{" "}
                                </PopExitNo>

                        </PopExitFormGroup>
                    </span>
                </PopExitBlock>
            </Container>
        </PopExites>
    )
}

export default PopExit