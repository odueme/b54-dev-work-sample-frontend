<template>
   <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex align-items-start justify-content-start justify-content-lg-start">
        <ul class="nav nav-pills nav-fill col-12 me-lg-auto mb-2 justify-content-between mb-md-0">
          <li>Home</li>
        </ul> 
        
       
      </div>
    </div>
  </header>
  


  <form @submit.prevent="onSubmit()">
    <div class="d-flex gap-5 justify-content-center p-5 wrap" >
      
  <div class="card" style="width: 18rem;" v-for="(product, index) in products" :key="index" :product="product">
  <img :src="product.img " class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>

    <p class="card-text">{{ product.description }}</p>
    <p class="card-text">₦{{ product.price }}</p>
   
      <label for="quantity">Quantity</label>
      <select id="select" class="form-select form-select-sm mb-4" v-model="product[index]" @change="onChange(product.id, $event.target.value)">
        <option value="0">0</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
</select>

<div v-if="$store.state.showOrderSuccess" class="alert alert-success" role="alert">
  Order added successfully
</div>
    

  </div>


  
</div>




      
  





</div>
<button class="btn btn-primary mx-auto mb-4" type="submit" style="width: 200px; display: block;">Order</button>
</form>



</template>

<script>


import { defineComponent, ref, reactive } from 'vue'
let token = localStorage.getItem("user")
  import { useStore } from 'vuex'

const store = useStore()

const selectOption = document.getElementById("select")
console.log(selectOption)
export default defineComponent({

  





methods: {
  onChange(id, e){
    let q = parseInt(e)
    this.data.quantity = q 
    this.data.id = id
    
    console.log(this.data)


  
  },

  onSubmit() {

    
   
  

  const id = this.data.id;
  const quantity = this.data.quantity;

  if(quantity === 0){
    return
  }


  fetch('https://dev-work-sample-2k3t.onrender.com/api/v1/cart', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ productId: id, quantity: quantity })
  })
    .then(response => {
      if (!response.ok) {
          store.dispatch('showOrderSuccess', false)
        throw new Error('Request failed');
      }
       store.dispatch('showOrderSuccess', true)

      return response.json();
    })
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

},



  setup(){

    const data = reactive({
      id: '',
      quantity: ''
    })
    console.log(data)
   

    
    const products = ref('')
   
  
    
    
   fetch('https://dev-work-sample-2k3t.onrender.com/api/v1/products', {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
        credentials: 'include',
    }).then(response =>{
      return response.json()
    }).then(data =>{
     products.value = data
    })

  
  return {
    products, 
    data
  }

  }
   


  











 
})
</script>

<style>



.my-card{
  width: 300px;
  background-color: rgba(189, 185, 185, 0.904);
}

</style>
