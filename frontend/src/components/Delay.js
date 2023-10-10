import { useState, useEffect } from "react";

function Delay(val, delay) {
    const [debounceVal, setDebounceVal] = useState(val);
    
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceVal(val);
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [val])

    return debounceVal
}

export default Delay
