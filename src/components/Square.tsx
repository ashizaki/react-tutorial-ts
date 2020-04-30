import React from "react";
import {Value} from "../domain/entity";

type SquareProps = {
    value: Value;
    onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
        {value}
        </button>
    );
};

export default Square;