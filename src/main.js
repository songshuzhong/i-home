import {createApp} from 'vue';
import * as ElementPlus from 'element-plus';
import ResizeObserver from 'resize-observer-polyfill';
import routers from './router/index';
import Application from './App.vue';
import {IRenderer} from '../../i-renderer/packages';

import 'element-plus/dist/index.css';
import '../../i-renderer/packages/renderer/styles/index.scss';
import './style/index.scss';
import './registerServiceWorker';

const app = createApp(Application);

app
  .use(ElementPlus)
  .use(IRenderer)
  .use(routers)
  .mount('.i-website-app__container');

if (!window.ResizeObserver) {
  window.ResizeObserver = ResizeObserver;
}
