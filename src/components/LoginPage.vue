<template>
  <div>
<header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex align-items-start justify-content-start justify-content-lg-start">
        <ul class="nav nav-pills nav-fill col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
          <li><router-link to="/" class="nav-link text-white" exact active-class="router-link-active">Login</router-link></li>
         
          
        </ul> 
        <svg-icon type="mdi" :path="path" class="my-2 align-self-end"></svg-icon>

  

       
      </div>
    </div>
  </header>
   <main class="form-signin w-100 m-auto">
  <form @submit.prevent="submit">
    
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input v-model="data.username" type="name" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Username</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password" value>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

    <p class="mt-3">Don't have an account? Register <router-link to="/signup">Here</router-link></p>

    <div v-if="$store.state.showMessage" class="alert alert-danger mt-4" role="alert">
  Wrong username or password!
</div>
   
  </form>
</main>

</div>
  </template>
  
  <script>
  let token = ''

  import { reactive} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'



  
  export default ({
    name: 'LoginPage',
    
  

    setup () {
      

    
      const store = useStore()
      const data = reactive({
        username: '',
        password: ''
      })

      console.log(data)

      const router = useRouter()
    const submit = async () =>{
    await fetch('https://dev-work-sample-2k3t.onrender.com/api/v1/auth/login', {
          method: 'POST',
        headers: {'Content-type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(data)
      
     }).then( response =>{
          if(response.ok){
            store.dispatch('setAuth', true)
            store.dispatch('setShowMessage', false) 
           console.log(data.email)
           router.push('/home')
          }
       
          else{
            store.dispatch('setShowMessage', true)
            store.dispatch('setAuth', false) 
            console.log("unauthorized")
          }
          return response.json()
          
        }).then((data)=>{
          console.log(data.access_token)
         let token = data.access_token
          localStorage.setItem("user", token)
        
      }).catch((error) => {
      throw error;
      
    })
       
     
    }

   

    
     return{
      token,
      data,
      submit,
   
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

.form-signin input[type="name"] {
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

  
  
  