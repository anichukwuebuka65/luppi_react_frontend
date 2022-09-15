import { useContext} from "react"
import { AllContext } from "../../context/AllContext"

const useFetch = (url) => {
    const {axiosInstance} = useContext(AllContext)
    
    function getFetch (offset,id) {
        return new Promise((resolve, reject) => {
             axiosInstance.get(url + "?offset=" + offset + "&postId=" + id)
            .then((res) => {
                resolve(res.data)
            })
            .catch(() => {
                reject("error")
            })
        })
       
    }

    function postFetch(data) {
       if (!data) return
       return new Promise((resolve,reject) => {
            axiosInstance.post(url, data)
            .then((res) => {
                    resolve(res.data)
                })
            .catch(() => {
                    reject("error")
            })
       })
       
   }
   
   function deleteFetch(id) {
        return new Promise((resolve, reject) => {
            axiosInstance.delete(url + "?postId=" + id)
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject("error")
            })
        })   
    }

    return {  
        getFetch,
        postFetch,
        deleteFetch}
}

export default useFetch
