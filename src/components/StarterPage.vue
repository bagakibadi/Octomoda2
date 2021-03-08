<template>
  <!-- eslint-disable max-len -->
  <div>
    <!-- Left Sidenav -->
        <div class="left-sidenav">
            <!-- LOGO -->
            <div class="topbar-left">
                <a href="../dashboard/crm-index.html" class="logo">
                    <span>
                        <img src="../assets/images/octomoda.png" alt="logo-small" class="logo-sm">
                    </span>
                    <span>
                        <img src="../assets/images/octomodatext.png" alt="logo-large" class="logo-lg logo-dark">
                    </span>
                </a>
            </div>
            <!--end logo-->
            <div class="leftbar-profile p-3 w-100">
                <div class="media position-relative">
                    <div class="leftbar-user online">
                        <img src="../assets/images/users/user-9.jpg" alt="" class="thumb-md rounded-circle">
                    </div>
                    <div class="media-body align-self-center text-truncate ml-3">
                        <!-- <h5 class="mt-0 mb-1 font-weight-semibold">{{namaUser.user.name}}</h5> -->
                        <!-- <p class="text-uppercase mb-0 font-12" v-if="namaUser.user.group_id === 2">Asosiasi</p>
                        <p class="text-uppercase mb-0 font-12" v-if="namaUser.user.group_id === 1">Admin</p>
                        <p class="text-uppercase mb-0 font-12" v-if="namaUser.user.group_id === 3">Rayon</p> -->
                    </div><!--end media-body-->
                </div>
            </div>
            <ul class="metismenu left-sidenav-menu slimscroll">
                <li class="menu-label">Main</li>
                <li class="leftbar-menu-item">
                    <router-link to="/" class="menu-link">
                        <monitor-icon size="2x" class="align-self-center vertical-menu-icon icon-dual-vertical"></monitor-icon>
                        <span>Dashboard</span>
                        <span class="menu-arrow">
                            <i class="fa fa-angle-right"></i>
                        </span>
                    </router-link>
                    <router-link to="/keanggotaan" class="menu-link">
                        <monitor-icon size="2x" class="align-self-center vertical-menu-icon icon-dual-vertical"></monitor-icon>
                        <span>Keanggotaan</span>
                        <span class="menu-arrow">
                            <i class="fa fa-angle-right"></i>
                        </span>
                    </router-link>
                </li>
            </ul>

        </div>
        <!-- end left-sidenav-->

        <!-- Top Bar Start -->
        <div class="topbar">
            <!-- Navbar -->
            <nav class="navbar-custom">
                <ul class="list-unstyled topbar-nav float-right mb-0">

                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button"
                            aria-haspopup="false" aria-expanded="false">
                            <img src="../assets/images/users/user-4.jpg" alt="profile-user" class="rounded-circle" />
                            <span class="ml-1 nav-user-name hidden-sm">Amelia <i class="fa fa-angle-down"></i> </span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="#"><i class="dripicons-user text-muted mr-2"></i> Profile</a>
                            <a class="dropdown-item" href="#"><i class="dripicons-wallet text-muted mr-2"></i> My Wallet</a>
                            <a class="dropdown-item" href="#"><i class="dripicons-gear text-muted mr-2"></i> Settings</a>
                            <a class="dropdown-item" href="#"><i class="dripicons-lock text-muted mr-2"></i> Lock screen</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#"><i class="dripicons-exit text-muted mr-2"></i> Logout</a>
                        </div>
                    </li>
                </ul><!--end topbar-nav-->

                <ul class="list-unstyled topbar-nav mb-0">
                    <li>
                        <router-link to="/">
                            <span class="responsive-logo">
                                <img src="../assets/images/octomoda.png" alt="logo-small" class="logo-sm align-self-center" height="34">
                            </span>
                        </router-link>
                    </li>
                    <li>
                        <button class="button-menu-mobile nav-link">
                            <menu-icon size="1.5x" class="align-self-center"></menu-icon>
                            <!-- <i data-feather="menu" class="align-self-center"></i> -->
                        </button>
                    </li>
                </ul>
            </nav>
            <!-- end navbar-->
        </div>
        <!-- Top Bar End -->
  </div>
</template>

<script>
// import axios from 'axios';
import { MonitorIcon, MenuIcon } from 'vue-feather-icons';

export default {
  data() {
    return {
      namaUser: null,
    };
  },
  components: {
    MonitorIcon,
    MenuIcon,
  },
//   beforeCreate() {
//     axios.get(`${process.env.VUE_APP_API}user`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.token}`,
//       },
//     })
//       .then((res) => {
//         console.log(res);
//         this.namaUser = res.data;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
};
</script>

<style>

</style>
