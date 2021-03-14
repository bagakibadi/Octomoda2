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
import Supply from '../views/SupplyChain.vue';
import ProfileProfesional from '../views/ProfileProfesional.vue';
import Darat from '../views/Udara.vue';
import KetersediaanDarat from '../views/KetersediaanDarat.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard,
  },
  {
    path: '/supply',
    name: 'Supply',
    component: Supply,
  },
  {
    path: '/darat',
    name: 'Darat',
    component: Darat,
  },
  {
    path: '/ketersediaan-darat',
    name: 'Ketersediaan Darat',
    component: KetersediaanDarat,
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
    path: '/profile-profesional',
    name: 'Profile Profesional',
    component: ProfileProfesional,
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
