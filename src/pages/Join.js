import { useState } from "react";

const Join = () => {
    const [inputValue, setInputValue] = useState();
    const [h1value, setH1Value] = useState();

    return (
        <div>
            <h1>{h1value}</h1>
            <form onSubmit={() => setH1Value(inputValue)}>
                <input
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};
export default Join;
