<template>
<div>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Ultimas Noticias</h4>
</div>

<div class="card"  v-for="post of posts" :key="post.id">
<div v-if="post.status == 1">
  <h5 class="card-header"></h5>
  <div class="card-body">
    <h5 class="card-title">{{post.Titulo}}</h5>
    <p class="card-text">{{post.conteudo}}</p>
    <a href="#" class="btn btn-primary">Acompanhe</a>
  </div>
  </div>
</div>

</div>
</template>
<script>

export default {
    name:'Home',
    // v-for="post of posts" :key="post.id"
    data(){
        return {
            posts: []

        }
    },
        mounted(){          
          
          
            
            fetch('http://127.0.0.1:8000/api/v1/public',{
                method: 'GET',
            })
            .then(response => response.json())
            .then(res => {
              this.posts = res
            
            })
        },

};
</script>