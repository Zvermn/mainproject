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
  {
    path: '/auth-director-1',
    component: () => import('layouts/commons/AuthEmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/AuthDirectorPage-1.vue') }],
  },
  {
    path: '/auth-director-2',
    component: () => import('layouts/commons/AuthEmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/AuthDirectorPage-2.vue') }],
  },
  {
    path: '/error-director',
    component: () => import('layouts/commons/AuthEmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/ErrorDirectorPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
