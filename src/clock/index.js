import { useCurrentDate } from "./useCurrentDate";
import { Container } from "./styled"

const Clock = () => {
    const date = useCurrentDate();

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