import { useState } from "react";

export default function TidBit({ num, x, y, degree, size }) {
    // const z = `text-\[100px\]`;

    return (
        <>
        {
            (num)
            ?
            <p className={`absolute text-orange-500 font-mono`}
                style={{top: `${y}px`, left: `${x}px`, rotate:`${degree}deg`, fontSize: `${size}px`}}
            >
                {num}
            </p>
            :
            <span className={`absolute p-${size} text-sm font-medium bg-orange-500 rounded-full`}
                style={{top: `${y}px`, left: `${x}px`, rotate:`${degree}deg`}}
            >
            </span>
        }
        </>
    );
}