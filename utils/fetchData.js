export const fetchData = async (URL)=>{
    let res = await fetch(URL)
    let data = await res.json()
    return data
}