import Card from "../Card/Card"
import * as S from "./Column.styled.js";



function Column({ title, cardList }) {
    return (
        <S.MainColumn>
            <S.ColumnTitle>
                <S.ColumnTitleP>{title}</S.ColumnTitleP>
            </S.ColumnTitle>
            <S.Cards>
                {cardList.map((card) =>
                    <Card
                        topic={card.topic}
                        title={card.title}
                        date={card.date}
                        key={card._id}
                        id={card._id}
                    />)}
            </S.Cards>
        </S.MainColumn>
    )
}

export default Column