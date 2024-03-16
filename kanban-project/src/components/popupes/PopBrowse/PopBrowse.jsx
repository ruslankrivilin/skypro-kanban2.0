import { Link, useParams } from "react-router-dom";
import { appRoutes } from "../../../styled/lib/appRoutes";
import Calendar from "../../Calendar/Calendar";
import { useTasks } from "../../../hooks/useTasks";
import { topicHeader } from "../../../styled/lib/topic";
import * as S from "./PopBrowse.styled";

export default function PopBrowse() {
  const { id } = useParams();
  const { cards } = useTasks();
  const openedCard = cards.filter((card) => card._id === id);
  return (
    <S.PopBrowseStyled>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBroweTitle>Название задачи:</S.PopBroweTitle>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{openedCard[0].title}</p>
              </div>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.PopBrowseStatusTitle>
                {openedCard[0].status}
              </S.PopBrowseStatusTitle>
              {/* <S.PopBrowseStatusThemes>
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </S.PopBrowseStatusThemes> */}
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.FormBrowseTitle htmlFor="textArea01">
                    Описание задачи
                  </S.FormBrowseTitle>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder={openedCard[0].description}
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar />
            </S.PopBrowseWrap>
            <S.ThemeDownCategories>
              <S.PopBrowseStatusTitle>Категория</S.PopBrowseStatusTitle>
              <S.OpenedCardTheme
                $themeColor={topicHeader[openedCard[0].topic]}
              >
                <p className="_orange">{openedCard[0].topic}</p>
              </S.OpenedCardTheme>
            </S.ThemeDownCategories>
            <S.PopBrowseButtonBrowse>
              <S.ButtonGroup>
                <S.ButtonChengeDelete>
                  <a href="#">Редактировать задачу</a>
                </S.ButtonChengeDelete>
                <S.ButtonChengeDelete>
                  <a href="#">Удалить задачу</a>
                </S.ButtonChengeDelete>
              </S.ButtonGroup>
              <Link to={appRoutes.MAIN}>
                <S.ButtonClose>Закрыть</S.ButtonClose>
              </Link>
            </S.PopBrowseButtonBrowse>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <Link to={appRoutes.MAIN}>
                <span className="btn-edit__close _btn-bg _hover01">
                  Закрыть
                </span>
              </Link>
            </div>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseStyled>
  );
}