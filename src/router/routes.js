const routes = [
  {
    path: '/',
    component: () => import('layouts/commons/LogoLayout.vue'),
    children: [{ path: '', component: () => import('pages/WelcomePage.vue') }],
  },
  {
    path: '/auth/phone',
    component: () => import('layouts/commons/LogoLayout.vue'),
    children: [{ path: '', component: () => import('pages/auth/AuthPhonePage.vue') }],
  },
  {
    path: '/auth-sms',
    component: () => import('layouts/commons/LogoSmsLayout.vue'),
    children: [{ path: '', component: () => import('pages/auth/AuthSmsPage.vue') }],
  },
  {
    path: '/director/registration-steps/verification',
    component: () => import('layouts/commons/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/director/registration-steps/DirectorVerificationDataPage.vue') }],
  },
  {
    path: '/director/registration-steps/assistant-invite',
    component: () => import('layouts/commons/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/director/registration-steps/DirectorAssistantInvitePage.vue') }],
  },
  {
    path: '/director/registration-steps/set-group-count',
    component: () => import('layouts/commons/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/director/registration-steps/DirectorSetGroupCountPage.vue') }],
  },
  {
    path: '/director/registration-steps/data-sent',
    component: () => import('layouts/commons/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/director/registration-steps/DirectorVerificationDataSentPage.vue') }],
  },
  {
    path: '/director/home',
    component: () => import('layouts/director/DirectorHomeLayout.vue'),
    children: [{ path: '', component: () => import('pages/director/DirectorHomePage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
