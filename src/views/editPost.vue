<template>
<div>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Minhas Noticias</h4>
</div>

<div class="card" v-for="post of posts" :key="post.id">
  <h5 class="card-header"></h5>
  <div class="card-body">
    <h5 class="card-title">{{post.Titulo}}</h5>
    <p class="card-text">{{post.conteudo}}</p>
   
    <a href="#" class="btn btn-primary">Visitar</a>
  </div>
</div>

</div>
</template>
<script>

import Cookie from 'js-cookie';

export default {
    name:'editPost',
    // v-for="post of posts" :key="post.id"
    data(){
        return {
            posts: []

        }
    },
        mounted(){          
          
            const token = Cookie.get('meu_token');
            
            fetch('http://127.0.0.1:8000/api/v1/posts/' ,{
                method: 'GET',
                headers:{
                    'Accept': 'application/json',
                    'Authorization':'Bearer '+ token,
                },
            
            })
            .then(response => response.json())
            .then(res => {
              console.log(res);
              this.posts = res
            
            })
        },

};
</script>