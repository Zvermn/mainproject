const routes = [
  {
    path: '/',
    component: () => import('layouts/commons/logoLayout.vue'),
    children: [{ path: '', component: () => import('pages/welcomePage.vue') }],
  },
  {
    path: '/auth/phone',
    component: () => import('layouts/commons/logoLayout.vue'),
    children: [{ path: '', component: () => import('pages/auth/authPhonePage.vue') }],
  },
  {
    path: '/auth-sms',
    component: () => import('layouts/commons/logoSmsLayout.vue'),
    children: [{ path: '', component: () => import('pages/auth/authSmsPage.vue') }],
  },
  {
    path: '/director/registration-steps/verification',
    component: () => import('layouts/commons/emptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/director/registration-steps/directorVerificationDataPage.vue') }],
  },
  {
    path: '/director/registration-steps/assistant-invite',
    component: () => import('layouts/commons/emptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/director/directorAssistentInvitePage.vue') }],
  },
  {
    path: '/director/registration-steps/data-sent',
    component: () => import('layouts/commons/emptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/director/registration-steps/directorVerificationDataSentPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
