import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
  const date = useCurrentDate();

  const formattedDate = date.toLocaleString(
    undefined,
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    },
  );

  return (
    <StyledClock> Dzisiaj jest{" "}{formattedDate}</StyledClock>
  );
}

