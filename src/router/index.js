import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Registrasi from '../views/Registrasi.vue';
import Profile from '../views/Profile.vue';
import ProfilePerusahaan from '../views/ProfilePerusahaan.vue';
import Keanggotaan from '../views/Keanggotaan.vue';
import KeanggotaanApproval from '../views/KeanggotaanApproval.vue';
import Profesional from '../views/AnggotaProfesional.vue';
import Perusahaan from '../views/AnggotaPerusahaan.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/registrasi',
    name: 'Registrasi',
    component: Registrasi,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/profile-perusahaan',
    name: 'Profile Perusahaan',
    component: ProfilePerusahaan,
  },
  {
    path: '/anggota',
    name: 'Perusahaan123',
    component: Perusahaan,
  },
  {
    path: '/profesional',
    name: 'Profesional',
    component: Profesional,
  },
  {
    path: '/keanggotaan',
    name: 'Keanggotaan',
    component: Keanggotaan,
  },
  {
    path: '/approval-keanggotaan',
    name: 'Approval Keanggotaan',
    component: KeanggotaanApproval,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
