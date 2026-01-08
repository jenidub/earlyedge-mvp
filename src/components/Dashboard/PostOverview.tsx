import { Card } from "react-bootstrap";
import PostOverviewCard from "./PostOverviewCard";

function PostOverview( props: any ) {
  const { username, statsList } = props;

  return (
    <Card style={{marginTop: "90px",}}>
        <Card.Body style={{border: "2px solid #35D7F6", borderRadius: "3px",}}>
            <h2 style={{margin: "20px 10px 10px 10px", textTransform: "uppercase", textAlign: "center", color: "#35D7F6", fontWeight: "800"}}>Welcome {username}!</h2>
            <h3 style={{textAlign: "center", marginBottom: "20px",}}><em>Here is a snapshot of project updates:</em></h3>
            <div style={{display: "flex", marginBottom: "20px",}}>
                {statsList.map((stat: { id: number; statName: string; statValue: number; }) => {
                    return(
                        <PostOverviewCard
                            key={stat.id}
                            id={stat.id}
                            statName={stat.statName}
                            statValue={stat.statValue}
                        />
                    )
                })}
            </div>
        </Card.Body>
    </Card>
  )
}

export default PostOverview;
