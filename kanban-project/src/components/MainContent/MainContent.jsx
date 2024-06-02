import { Container } from "../../styled/Common.styled"
import * as S from "./MainContent.styled.js";


function MainContent({children}) {
    return (
        <S.Main>
            <Container>
                <S.MainBlock>
                    <S.MainContent>
                        {children}
                    </S.MainContent>
                </S.MainBlock>
            </Container>
        </S.Main>
    )
}

export default MainContent