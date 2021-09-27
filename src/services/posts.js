import { http } from './config'

export default{
    
    listar:(token) => {
        return http.get('posts',{
            headers:{
                'Accept': 'application/json',
                'Authorization': token,
            },
        })
    }
}