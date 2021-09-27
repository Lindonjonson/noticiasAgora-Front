<template>
    <div>
        <main class="form-signin">
  <form @submit.stop.prevent="submit">
 
    <h1 class="h3 mb-3 fw-normal">Login</h1>

    <div class="form-floating">
      <input 
      v-model="email"
      type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input 
      v-model="password"
      type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</main>
    </div>
</template>

<script>

import Cookie from 'js-cookie';

export default {
    name:'login',
    
    data(){
        return {
                email: '',
                password: '',

        };
    },

    methods: {
        submit(){
            const payload = {
                email: this.email,
                password: this.password,

            };

            fetch('http://127.0.0.1:8000/api/v1/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(res => {
              Cookie.set('meu_token', res.token);
              alert("token ok");
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