import Vue from 'vue'
import App from './App.vue'
//引入vue-router
import VueRouter from 'vue-router'

//引入mobile，styles
import '@/mobile/flexible'
import '@/styles/reset.css'

//引入路由器
import router from '@/router'
Vue.use(VueRouter)

//引入vant组件
import { Button,NavBar,Tabbar,TabbarItem,Col,Row,
        Image as VanImage,Cell,CellGroup,Icon,
        Search,PullRefresh,List,Skeleton,Divider
  } from 'vant'

Vue.use(PullRefresh);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);
Vue.use(Skeleton);
Vue.use(Divider);





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
