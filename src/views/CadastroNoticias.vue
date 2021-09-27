<template>

    <div>
    <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Cadastro de noticias</h4>
</div>
        <main class="form-signin">
  <form @submit.stop.prevent="submit">

    <div class="form-floating">
      <input 
      v-model="Titulo"
      type="text" class="form-control" id="floatingInput">
      <label for="floatingInput">Titulo da noticia</label>
    </div>
    <div class="form-floating">
     <textarea
     v-model="conteudo"
      class="form-control"></textarea>
    
      <label for="floatingPassword">Conteudo da noticia</label>
    </div>

    <div class="checkbox mb-3">
      <div>
      <label for="horns">Ativar Noticia?</label>
  <input 
   v-model="status"
   type="checkbox" id="horns" name="horns">
  
  </div>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Cadastrrar</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
  {{Titulo}},{{conteudo}}
</main>
<br>
<hr>
<div>

        
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
    </b-form-checkbox>

    <div>State: <strong>{{ status }}</strong></div>
  </div>
    </div>

    
</template>


<script>
import Cookie from 'js-cookie';
  export default {
    data() {
      return {
        
        conteudo: '',
        Titulo: '', 
        status: '',
      
      }
    },
   methods: {
        submit(){

         if(this.status == ""){
          this.status = 0; 
         }
         if(this.status == false){
          this.status = 0; //noticia desativada
         }
         if(this.status == true ){
          this.status = 1; 
         }

            const payload = {
                conteudo: this.conteudo,
                Titulo: this.Titulo,
                status: this.status,

            }; 
            
            const token = Cookie.get('meu_token');

            fetch('http://127.0.0.1:8000/api/v1/posts',{
                method: 'POST',
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
              alert("Post Cadastrado Com sucesso!");
              window.location.href = 'list'
            })
        },
    },
};
</script>
<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}</style>