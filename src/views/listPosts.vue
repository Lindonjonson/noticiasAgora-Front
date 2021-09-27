<template>
<div>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Minhas Noticias</h4>
</div>

<div class="card" v-for="post of posts" :key="post.id" >
<div >
  <h5 class="card-header"></h5>
  <div class="card-body">
    <h5 class="card-title">{{post.Titulo}}</h5>
      <div v-if="post.status == 1" class="alert alert-primary" role="alert">
        Noticia Ativa
      </div>
      <div v-else class="alert alert-danger" role="alert">
          Noticia Desativada
      </div>
    <p class="card-text">{{post.conteudo}}</p>
    
    <!-- Botão da modal-->

   <button type="button" @click="editar(post)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Editar
    </button>

    <!--Fim Modal -->
    </div>
  </div>
</div>

    <!--  modal-->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edição</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      <!-- edição de noticia -->

          <main class="form-signin">
         
  <form @submit.stop.prevent="submit">

    <h1 class="h3 mb-3 fw-normal">Edite sua noticia</h1>

    <div class="form-floating">
      <input 
      v-model="post.Titulo"
      type="text" class="form-control" id="floatingInput">
      <label for="floatingInput">Titulo da noticia</label>
    </div>
    <div class="form-floating">
     <textarea
     v-model="post.conteudo"
      class="form-control"></textarea>
      <label for="floatingPassword">Conteudo da noticia</label>
    </div>

    <div class="checkbox mb-3">
      <div>
    
<label v-if="post.status == 1"><input 
   v-model="post.status "
   type="checkbox" id="horns" name="horns" checked></label>
<label v-else><input 
   v-model="post.status"
   type="checkbox" id="horns" name="horns"></label>
  <label for="horns">Ativar Noticia?</label>
   <div>
    <b-form-checkbox
      id="checkbox-1"
      v-model="post.status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      I accept the terms and use
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>
  
  
  </div>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Atualizar</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>
<!--Fim-->>
    </div>
  </div>
</div>
</div>
</div>  
</template>
<script>

import Cookie from 'js-cookie';

export default {
    name:'list',
    // v-for="post of posts" :key="post.id"
    data(){
        return {
            posts: [],
            post:{
              id:'',
              titulo:'',
              conteudo:'',
              status:'',
            },

        }
    },
     
         methods: {

        editar(posts){
            alert(posts.Titulo);
            console.log(posts)
            this.post = posts;
            
          },
        submit(){
      
         
         if(this.post.status == ""){
         this.post.status = 0;  
         }
         if(this.post.status == false){
         this.post.status = 0; //noticia desativada
         }
         if(this.post.status == true ){
          this.post.status = 1; 
         }

            const payload = {
                conteudo: this.post.conteudo,
                Titulo: this.post.Titulo,
                status: this.post.status,
            }; 
            
            const token = Cookie.get('meu_token');

            fetch('http://127.0.0.1:8000/api/v1/posts/'+this.post.id,{
                method: 'PUT',
                headers:{
                 'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization':'Bearer '+ token
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(res => {
              console.log(res);
             alert("Noticia Atualizada com sucesso!!");
            })
        },
    },  
        mounted(){          
          
            const token = Cookie.get('meu_token');
            
            fetch('http://127.0.0.1:8000/api/v1/posts',{
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