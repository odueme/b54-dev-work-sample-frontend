
const routes = [
  {
    
    path: '/',
    
    component: () => import('src/components/LoginPage.vue')
    

   

  },

  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ],
  },  

  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),

  },

  {
    path: '/signup',
    component: () => import('src/components/SignUp.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
