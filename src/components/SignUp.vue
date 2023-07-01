<template>
 <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex align-items-start justify-content-start justify-content-lg-start">
        <ul class="nav nav-pills nav-fill col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
       
          <li><router-link to="/signup" class="nav-link text-white" exact active-class="router-link-active">Register</router-link></li>
          
        </ul> 
        <svg-icon type="mdi" :path="path" class="my-2 align-self-end"></svg-icon>

  

       
      </div>
    </div>
  </header>
   <main class="form-signin w-100 m-auto">
  <form @submit.prevent="submit">
    
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

    <div class="form-floating">
      <input v-model="data.username" type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Username</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password" value>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-floating">
      <input v-model="data.email" type="email" class="form-control" id="floatingPassword" placeholder="Password" value>
      <label for="floatingInput">email</label>
    </div>

    <div class="form-floating">
      <input v-model="data.phoneNumber" type="text" class="form-control" id="floatingPassword" placeholder="Password" value>
      <label for="floatingPassword">Phone Number</label>
    </div>

    

    <div class="checkbox mb-3">
      
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>

   
  </form> <div v-if="$store.state.showMessage" class="alert alert-danger mt-4" role="alert">
     Please fill all fields!
</div>
</main>
</template>

<script>
  import { defineComponent, reactive, ref } from 'vue'
  import HeaderPage from './HeaderPage.vue'
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
export default defineComponent({
  name: 'SignUp',

  setup(){
    const store = useStore()
    const router = useRouter()
    const data = reactive({
        username: '',
        password: '', 
        email: '',
        phoneNumber: ''
    })

    const submit = () =>{

      if(data.username === '' || data.password === '' || data.email === '' || data.phoneNumber === ''){
        store.dispatch('setShowMessage', true)
        return
      }

       fetch('https://dev-work-sample-2k3t.onrender.com/api/v1/auth/signup', {
            method: 'POST', 
            headers: {'Content-type': 'application/json'},
         
            credentials: 'include',
            body: JSON.stringify(data),
           
        }).then(response => {
            if(response.ok){
              store.dispatch('setShowMessage', false) 
                router.push('/')
            }
        }).catch(error =>{
          
            throw error
        })

      
    }

    return{
          data,
          submit
        }
  }

})
</script>

<style>

.form-signin {
  
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="text"] {
  margin-bottom: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="email"] {
  margin-bottom: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>