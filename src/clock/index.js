import { useEffect, useState } from "react";
import { Container } from "./styled"

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    return (
        <Container>
            Dzisiaj jest:
            {" "}
            {date.toLocaleString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"

            })}
        </Container>
    )
};

export default Clock;