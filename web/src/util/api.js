const API_END_POINT = ''

export const request = async(url, data) => {
    try{
        const fullUrl = `${url}`
        const response = await fetch(fullUrl, data)

        if(response.ok){
            const json = await response.json()
            return json
        }
        throw new Error('API error')
    }catch(e){
        alert(e.message)
    }
}