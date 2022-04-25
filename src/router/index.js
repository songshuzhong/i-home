import {createRouter, createWebHashHistory,} from 'vue-router';
import {Schema} from '../../../i-renderer/packages';
import frameSchema from '../data/frame';
import homeSchema from '../data/home';
import logSchema from '../data/log';

export default createRouter({
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
            url: '/',
            canSchemaUpdate: false,
            initSchema: homeSchema
          },
        },
        {
          path: '/logs',
          component: Schema,
          props: {
            url: '/logs',
            canSchemaUpdate: false,
            initSchema: logSchema
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
