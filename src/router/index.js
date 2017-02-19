import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Targets from 'components/Targets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/targets',
      name: 'Targets',
      component: Targets
    }
  ]
})
