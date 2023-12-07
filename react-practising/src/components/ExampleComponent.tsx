import {useState} from "react";

interface ExampleComponentProps {
    name: string,
    name2: string
}

const WHITE: string = 'white';
const BLACK: string = 'black';

export default function ExampleComponent({ name, name2 }: ExampleComponentProps) {

    const [buttonState, setButtonState] = useState<string>(WHITE);

    const setButtonStateHandler = () => {
        setButtonState(buttonState => buttonState === WHITE ? BLACK : WHITE);
    }

    return <>
        <h1>
            My example component {name}, {name2}
        </h1>

        <strong>Hello</strong>

        <button onClick={setButtonStateHandler}>{buttonState}</button>

    </>;
}
