const routes = [
  {
    path: '/',
    component: () => import('layouts/commons/LogoLayout.vue'),
    children: [{ path: '', component: () => import('pages/WelcomePage.vue') }],
  },
  {
    path: '/auth-phone',
    component: () => import('layouts/commons/LogoLayout.vue'),
    children: [{ path: '', component: () => import('pages/AuthPhonePage.vue') }],
  },
  {
    path: '/auth-sms',
    component: () => import('layouts/commons/LogoLayoutSms.vue'),
    children: [{ path: '', component: () => import('pages/AuthSmsPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
