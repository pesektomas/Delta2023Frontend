import {useState} from "react";

export default function MySecondExampleComponent() {

    const [visible, setVisible] = useState<Boolean>(false);


    const setVisibleHandler = () => {

        setVisible(visible => !visible);

        /*
        setVisible(function (visible) {
            return !visible
        });


        setVisible(true);
        setVisible(false);
        */
    }


    return (
        <>
            <h2>Hello from my second example component</h2>
            <div className="class" id="">
                <a onClick={setVisibleHandler}>Click for more ...</a>
                {visible &&
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a accumsan tortor, sit amet
                            ornare libero. Vivamus sagittis felis at accumsan hendrerit. Donec vehicula tristique magna
                            nec auctor. In sodales quis tortor vel auctor. Donec varius erat et augue rutrum, rhoncus
                            gravida nibh tempor. Proin ornare felis sed urna vulputate finibus. Suspendisse vel metus arcu.
                            Curabitur pellentesque id mauris eu rutrum. Proin mattis et purus nec imperdiet.
                        </p>
                        <a onClick={setVisibleHandler}>Less ...</a>
                    </div>
                }
            </div>

        </>
    );
}
