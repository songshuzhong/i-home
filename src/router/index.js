import {createRouter, createWebHashHistory,} from 'vue-router';
import {Schema} from '../../../i-renderer/packages';
import frameSchema from '../data/frame';
import homeSchema from '../data/home';

export default createRouter({
  history: process.env.NODE_ENV === 'dev'? createWebHashHistory(): createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'IWebsite',
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
            initSchema: homeSchema
          },
        },
        {
          path: '/logs',
          component: Schema,
          props: {
            initSchema: homeSchema
          },
        },
        {
          path: '/quality',
          component: Schema,
          props: {
            initSchema: homeSchema
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
