import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useManageProduct = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/manage?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user])
    return [products, setProducts]
}
export default useManageProduct;