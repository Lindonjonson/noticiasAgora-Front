<template>
    <div>
       <h1>aqui</h1>
    </div>
</template>

<script>

import Cookie from 'js-cookie';

export default {
    name:'logout',
    
    data(){
        return {
               

        };
    },

     mounted(){          
            window.location.href = 'login'
            Cookie.remove('meu_token')  // return this
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