
import styled from "styled-components"


export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px 0px 20px 0px;
    background-color: white;
    margin: 10px;
    padding: 0px 25px 25px 25px;
    width: 20vw;

    @media only screen and (max-width: 768px) {
    width: 70vw;
    }

    
`

type Props = {
    title: string;
    company: string;
    startDate?: string;
    endDate?: string;
    description: string;
}

export function ExperienceCard({ title, company, startDate, endDate, description }: Props) {
    return (
        <Card>
            <div style={{ display: "flex", fontWeight: "bold", marginTop: "10px" }}>
                <div>{title}</div>
                <div style={{ margin: "0px 5px 0px 5px" }}>{"@"}</div>
                <div>{company}</div>
            </div>
            <span style={{ fontSize: "14px", marginTop: "5px" }}>{description}</span>
        </Card>
    )
}
