import { Card } from "react-bootstrap";

function PostOverviewCard(props: any) {
    const { id, statName, statValue } = props;

    const icons = [
        "https://media.istockphoto.com/id/936289790/vector/notepad-edit-document-with-pencil-icon-vector-illustration-business-concept-note-edit.jpg?s=612x612&w=0&k=20&c=jsO6SRwnffVJI5lurLjJbBClEwNxVd9ZeMa6uZSNzfI=",
        "https://media.istockphoto.com/id/936289790/vector/notepad-edit-document-with-pencil-icon-vector-illustration-business-concept-note-edit.jpg?s=612x612&w=0&k=20&c=jsO6SRwnffVJI5lurLjJbBClEwNxVd9ZeMa6uZSNzfI=",
        "https://media.istockphoto.com/id/936289790/vector/notepad-edit-document-with-pencil-icon-vector-illustration-business-concept-note-edit.jpg?s=612x612&w=0&k=20&c=jsO6SRwnffVJI5lurLjJbBClEwNxVd9ZeMa6uZSNzfI=",
    ];

    return (
        <>
        <Card key={id} className="text-center" style={{margin: "5px", width: "100%",}}>
            <Card.Body>
                <img 
                    src={icons[id]}
                    alt="Stat List Icon"
                    style={{width: "100px", height: "100px", margin: "0 auto"}}
                />
                <h1 style={{color: "#35D7F6", fontSize: "3em", fontWeight: "800"}}><strong>{statValue}</strong></h1>
                <p><em>{statName}</em></p>
            </Card.Body>
        </Card>
        </>
    )
}

export default PostOverviewCard;
