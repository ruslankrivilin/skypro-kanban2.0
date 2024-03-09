// import PopBrowse from "../../src/components/popupes/PopBrowse/PopBrowse";
import { Link } from "react-router-dom";
import * as S from "./TaskPage.styled.js";
import Calendar from "../../src/components/Calendar/Calendar";
import { appRoutes } from "../../src/styled/lib/appRoutes.js";

export default function TaskPage() {
    return (
        // <PopBrowse/>
        <S.PopNewCard id="popNewCard">
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                        <Link to={appRoutes.MAIN}><S.PopNewCardClose>&#10006;</S.PopNewCardClose></Link>
                        <S.PopNewCardWrap>
                            <S.PopNewCardForm className="form-new" id="formNewCard" action="#">
                                <S.FormNewBlock>
                                    <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                                    <S.ForrmNewInput
                                    type="text" 
                                    name="name" 
                                    id="formTitle" 
                                    placeholder="Введите название задачи..." 
                                    autoFocus> 
                                    </S.ForrmNewInput> 
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                    <S.Subttl htmlFor="textArea" className="subttl">Описание задачи</S.Subttl>
                                    <S.FormNewArea 
                                    name="text" 
                                    id="textArea" 
                                    placeholder="Введите описание задачи...">
                                    </S.FormNewArea>
                                </S.FormNewBlock>
                            </S.PopNewCardForm>
                            <Calendar/>
                        </S.PopNewCardWrap>
                        <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__themes">
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                            </div>
                        </div>
                        <S.FormNewCreatButton id="btnCreate">Создать задачу</S.FormNewCreatButton>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
        </S.PopNewCard>
    )
}





