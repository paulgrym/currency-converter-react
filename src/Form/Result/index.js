import "./style.css";

export const Result = ({ result }) => {
    return (!!result &&
        (<p className="result">
            {result.startAmount.toFixed(2)}
            &nbsp;PLN&nbsp;=&nbsp;
            <strong>
                {result.endAmount.toFixed(2)}
                &nbsp;
                {result.currency}
            </strong>
        </p>)
    )
};