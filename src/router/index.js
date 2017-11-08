import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Login from '@/components/login';
import Signup from '@/components/signup';
import Main from '@/components/main';
import Input from '@/components/input';
// import Summary from '@/components/summary';
import CurrWeekSummary from '@/components/currweek-summary';
import HistorySummary from '@/components/history-summary';
import UserSetting from '@/components/usersetting';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          component: Input
        },
        {
          path: 'input',
          name: 'input',
          component: Input
        },
        {
          path: 'summary',
          name: 'summary',
          component: CurrWeekSummary
        },
        {
          path: 'history',
          name: 'history',
          component: HistorySummary
        }
      ]
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/setting',
      name: 'UserSetting',
      component: UserSetting
    }
  ]
});
