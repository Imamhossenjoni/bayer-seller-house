import { useEffect, useState } from "react"

const useBuyer=()=>{
    const [buyers,setBuyers]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/buyer`)
        .then(res=>res.json())
        .then(data=>setBuyers(data))
    },[])
    return [buyers]
}
export default useBuyer;