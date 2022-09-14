import { useEffect, useState } from "react"

const useSellerServices=()=>{
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/sell`)
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return [services,setServices]
}
export default useSellerServices;