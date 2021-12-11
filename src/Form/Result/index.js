import { StyledResult } from "./styled";

export const Result = ({ result }) => {
  return (!!result &&
    (<StyledResult>
      {result.startAmount.toFixed(2)}&nbsp;PLN =
      <strong>
        {" "}{result.endAmount.toFixed(2)}
        &nbsp;{result.currency}
      </strong>
    </StyledResult>)
  )
};