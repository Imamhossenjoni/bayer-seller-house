import { useEffect, useState } from "react"

const useSeller=()=>{
    const [sellers,setSellers]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/seller`)
        .then(res=>res.json())
        .then(data=>setSellers(data));
    },[])
    return [sellers,setSellers]
}
export default useSeller;