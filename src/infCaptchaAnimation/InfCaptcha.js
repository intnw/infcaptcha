import { useEffect, useState } from "react";

import Tidbits from "./TidBits";

export default function TestInfiniteScrollView() {
    const [infText, setInfText] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [refreshDisabled, setRefreshDisabled] = useState(true);
    const [char1, setChar1] = useState("");
    const [char2, setChar2] = useState("");
    const [char3, setChar3] = useState("");

    function iamNotARobot() {
        if(infText === char1+char2+char3) {
            alert("Correct, you are not a robot!");
        }
        else {
            alert("You are indeed an everyday robot! Becuase almost any human can do this easily!");
        }
    }

    function z() {
        setRefresh(!refresh);
        setRefreshDisabled(true);
    }

    function checkRefresh() {
        if(refreshDisabled)
            return "disabled";
        else
            return null;
    }

    function refreshCSS() {
        if(refreshDisabled)
            return "p-3 bg-blue-500 rounded disabled:opacity-25 cursor-not-allowed";
        else
            return "p-3 bg-blue-500 rounded"; 
    }
    
    return (
        <div className="flex flex-col w-full justify-center items-center ">
            <h1 className="p-3">
                Inf Captcha
            </h1>

            <div className="flex flex-col gap-2">
                <div className="flex h-[300px] w-[300px] bg-gray-50 rounded">
                    <Tidbits refresh={refresh} setRefreshDisabled={setRefreshDisabled} setChar1={setChar1}
                        setChar2={setChar2} setChar3={setChar3} />
                </div>
                <div className="flex flex-col">
                    <label>Enter 3 characters seen in above animation:</label>
                    <input type="text" className="p-3 rounded bg-blue-100" 
                        onChange={(e) => setInfText(e.target.value)}
                    />
                </div>
                <div className="flex gap-3 text-white">
                    <div className="flex justify-center">
                        <input className={refreshCSS()} type="button" value="~Refresh"
                            onClick={z} 
                            disabled={checkRefresh()}
                        />
                    </div>
                    <div className="flex justify-center">
                        <input className="p-3 bg-blue-500 rounded cursor-pointer" type="button" value="I am not a robot"
                            onClick={iamNotARobot}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}