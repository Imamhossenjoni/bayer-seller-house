import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const useSellerDetail=()=>{
    const [details,setDetails]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/seller/`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return [details]
}
export default useSellerDetail;