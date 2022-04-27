import {createRouter, createWebHashHistory,} from 'vue-router';
import { ElLoading } from 'element-plus';
import {Schema} from '../../../i-renderer/packages';
import frameSchema from '../data/frame';

let routerMask;
const router = createRouter({
  history: process.env.NODE_ENV === 'dev'? createWebHashHistory(): createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'IHome',
      component: Schema,
      props: {
        initSchema: frameSchema,
        classname: 'i-renderer-website-schema__container',
        canSchemaUpdate: false,
        iProtal: true
      },
      children: [
        {
          path: '/',
          component: Schema,
          props: {
            url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/home',
          },
        },
        {
          path: '/logs',
          component: Schema,
          props: {
            url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/logs',
          },
        },
        {
          path: '/quality',
          component: Schema,
          props: {
            url: 'https://www.fastmock.site/mock/a93e0b29161761b8153cbc02db04c643/api/page/qualification',
          },
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    routerMask = ElLoading.service({
      fullscreen: true,
      customClass: 'i-website__router__loader'
    });
  }
  next();
});

router.afterEach(() => {
  const timer = setTimeout(() => {
    if (routerMask && typeof routerMask.close === 'function') {
      routerMask.close();
      clearTimeout(timer);
    }
  }, 1000);
});
export default router;
