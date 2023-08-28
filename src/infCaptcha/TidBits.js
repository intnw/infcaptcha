import { useEffect, useState } from "react";

import TidBit from "./TidBit";

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
    const alpha = ["$", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const index = randomNumberInRange(0, 27);
    return alpha[index];
}

export default function TidBits({ refresh, setChar }) {
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        const total = randomNumberInRange(39, 50);
        const range = 280;
        const numRange = 100;

        const newCoordinates = [];
        for(let i=0; i<total; i++) {
            let x = randomNumberInRange(0, range);
            let y = randomNumberInRange(0, range);
            let degree = randomNumberInRange(0, 45);
            let size = randomNumberInRange(2, 2);
            newCoordinates.push({"num": "", "x": x, "y": y, "degree": degree, "size": size});
        }
        let x = randomNumberInRange(0, numRange);
        let y = randomNumberInRange(0, numRange);
        let num = getRandomLetter();
        setChar(num);
        let degree = randomNumberInRange(0, 360);
        let size = randomNumberInRange(200, 200);
        newCoordinates.push({"num": num, "x": x, "y": y, "degree": degree, "size": size});
        setCoordinates(newCoordinates);

    }, [refresh]);

    return (
        <div className="relative flex flex-col w-full justify-center items-center ">
            {
                coordinates.map((co) => {
                    return <TidBit num={co.num} x={co.x} y={co.y} degree={co.degree} size={co.size} />
                })
            }
        </div>
    );
}