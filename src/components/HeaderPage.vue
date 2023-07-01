<template>
   <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex align-items-start justify-content-start justify-content-lg-start">
        <ul class="nav nav-pills nav-fill col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
          <li><router-link to="/home" class="nav-link text-white" exact active-class="router-link-active">Home</router-link></li>
          <li><router-link to="/" class="nav-link text-white" exact active-class="router-link-active">Login</router-link></li>
          <li><router-link to="/signup" class="nav-link text-white" exact active-class="router-link-active">Register</router-link></li>
          
        </ul> 
        <svg-icon type="mdi" :path="path" class="my-2 align-self-end"></svg-icon>

  

       
      </div>
    </div>
  </header>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCart } from '@mdi/js';
export default {
    name: 'HeaderPage',
    
    components: {
    SvgIcon
  },

  data() {
    return {
       path: mdiCart,
    }
  }
}








</script>
<style>

.router-link-active {
  background: green;
  border-radius: 10px;

}


</style>