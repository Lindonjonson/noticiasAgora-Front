import Cookies from "js-cookie";
export default{
    auth(to, from, next){
        const token = Cookies.get('meu_token');

        if(!token){
            next('/login');
        }

        console.log(token);

        next();
    },
}