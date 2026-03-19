const routes = [
  {
    path: '/',
    component: () => import('layouts/commons/LogoLayout.vue'),
    children: [{ path: '', component: () => import('pages/WelcomePage.vue') }],
  },
  {
    path: '/login',
    component: () => import('layouts/commons/LogoLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPhonePage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
