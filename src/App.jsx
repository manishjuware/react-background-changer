import { useState } from "react";
import Button from "./Button";
function App() {
    const [bgColor, setBgColor] = useState("black");
    return (
        <>
            <div className="w-full h-screen duration-200" style={{ backgroundColor: bgColor }}>
                <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                    <Button color="red" textColor="white" setBgColor={setBgColor}></Button>
                    <Button color="green" textColor="white" setBgColor={setBgColor}></Button>
                    <Button color="blue" textColor="white" setBgColor={setBgColor}></Button>
                    <Button color="olive" textColor="white" setBgColor={setBgColor}></Button>
                    <Button color="grey" textColor="black" setBgColor={setBgColor}></Button>
                    <Button color="yellow" textColor="black" setBgColor={setBgColor}></Button>
                    <Button color="purple" textColor="black" setBgColor={setBgColor}></Button>
                    <Button color="lavender" textColor="black" setBgColor={setBgColor}></Button>
                    <Button color="white" textColor="black" setBgColor={setBgColor}></Button>
                    <Button color="black" textColor="white" setBgColor={setBgColor}></Button>
                </div>
            </div>
        </>
    );
}

export default App;
