import { useEffect, useState } from "react";

import Tidbits from "./TidBits";

export default function TestInfiniteScrollView() {
    const [infText, setInfText] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [char, setChar] = useState("");

    function iamNotARobot() {
        if(infText === char) {
            alert("Correct, you are not a robot!");
        }
        else {
            alert("You are indeed an everyday robot! Becuase almost any human can do this easily!");
        }
    }

    function z() {
        setRefresh(!refresh);
    }
    
    return (
        <div className="flex flex-col w-full justify-center items-center ">
            <h1 className="p-3">
                Inf Captcha
            </h1>

            <div className="flex flex-col gap-2">
                <div className="flex h-[300px] w-[300px] bg-gray-50 rounded">
                    <Tidbits refresh={refresh} setChar={setChar} />
                </div>
                <div className="flex flex-col">
                    <label>Enter the character seen in above picture:</label>
                    <input type="text" className="p-3 rounded bg-blue-100" 
                        onChange={(e) => setInfText(e.target.value)}
                    />
                </div>
                <div className="flex gap-3 text-white">
                    <div className="flex justify-center">
                        <input className="p-3 bg-blue-500 rounded" type="button" value="~Refresh"
                            onClick={z}
                        />
                    </div>
                    <div className="flex justify-center">
                        <input className="p-3 bg-blue-500 rounded" type="button" value="I am not a robot"
                            onClick={iamNotARobot}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}