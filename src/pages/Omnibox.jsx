import React, { useRef, useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import CardList from "./micro/CardList";

const Omnibox = () => {    
    const ref = useRef();
    const [value, setValue] = useState({});
    const handleValueChange = (newValue) => {
        setValue(newValue);
    }
    const [budget, setBudget] = useState(0)
    
    return (
        <>
        <div class="rounded-3xl bg-blue-100 mt-4">
            <div class="flex rounded-2xl px-3 py-2 items-center">
                <div class="relative w-full p-4">
                    <Datepicker
                        value={value}
                        startFrom={new Date()}
                        onChange={handleValueChange}
                        minDate={new Date()}  
                    />
                </div>
                
                <div class="relative w-full p-4">
                    <input 
                        type="number" 
                        min="0"
                        onChange={(e) => (setBudget(e.target.value))}
                        class="bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 w-full dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Budget" 
                    />
                </div>

            </div>
        </div>

            <CardList date={value} budget={budget} />
        
        </>
    )
}

export default Omnibox