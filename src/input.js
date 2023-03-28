import React, { useEffect, useState } from "react";

export const Input = () => {
    const [inputVal, setValue] = useState('')
    const [data, setData] = useState([])

    function handleChange(e){
     setValue(e.target.value)
    }

    const[count, setCount] = useState(1)

    function submitData(){
        setCount((e) => e + 1)
        setData([...data, {
            text: inputVal,
            id: count,
            timestamp: Date.now(),
        }]);
        setValue('');
    }

    useEffect(() => {
       localStorage.setItem('data', JSON.stringify(data))
    }, [data])

    useEffect(() => {
        const storedData = localStorage.getItem(JSON.parse('data'))
        if (storedData) {
            setData(storedData);
        }
    }, [])


    return(
        <>
        <input type="text" value="inputVal" onChange={handleChange}></input>
        <button type="submit" onClick={submitData}>Save</button>
        <ul>
            {data.map((item, index) => (
                <div>
                    <li key={index}>{item.text}</li>
                </div>
            ) )}
        </ul>
        </>
    )
}