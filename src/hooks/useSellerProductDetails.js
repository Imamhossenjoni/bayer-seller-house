import { useEffect, useState } from "react";

const useSellerProductDetails=id=>{
    // const {id}=useParams();
    const [detail,setDetail]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/sell/${id}`)
        .then(res=>res.json())
        .then(data=>setDetail(data));
    },[id])
    return [detail,setDetail];
}
export default useSellerProductDetails;