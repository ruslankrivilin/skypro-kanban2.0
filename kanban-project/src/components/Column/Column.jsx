import Card from "../Card/Card"

function Column({ title, cardList }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {cardList.map((card) =>
                    <Card
                        topic={card.topic}
                        title={card.title}
                        date={card.date}
                        key={card._id}
                        id={card._id}
                    />)}
            </div>
        </div>
    )
}

export default Column