<template>
  <!-- eslint-disable max-len -->
  <div class="account-body accountbg" style="min-height: 100vh;padding: 100px 0 50px 0">
    <!-- Log In page -->
    <div class="container">
        <div class="row">
            <div class="col-12 align-self-center">
                <div class="auth-page">
                    <div class="card auth-card shadow-lg">
                        <div class="card-body">
                            <div class="px-3">
                                <div class="auth-logo-box" style="top: -50px">
                                    <router-link to="/" class="logo logo-admin">
                                      <img src="../assets/images/octomoda.png" height="100" alt="logo" class="auth-logo">
                                    </router-link>
                                </div><!--end auth-logo-box-->
                                <div class="text-center auth-logo-text">
                                    <h4 class="mt-0 mb-3 mt-5">Sign in to Octomoda</h4>
                                    <!-- <p class="text-muted mb-0">Sign in to continue to Metrica.</p> -->
                                </div> <!--end auth-logo-text-->

                                <form class="form-horizontal auth-form my-4 form-parsley" @submit.prevent="logins">

                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <div class="input-group mb-3">
                                            <span class="auth-form-icon">
                                                <i class="fa fa-envelope"></i>
                                            </span>
                                            <input type="text" parsley-type="email" class="form-control" id="email" placeholder="Enter Email" v-model="login.email" required>
                                        </div>
                                    </div><!--end form-group-->

                                    <div class="form-group">
                                        <label for="userpassword">Password</label>
                                        <div class="input-group mb-3">
                                            <span class="auth-form-icon">
                                                <i class="fa fa-lock"></i>
                                            </span>
                                            <input type="password" class="form-control" id="userpassword" placeholder="Enter password" v-model="login.password" required>
                                        </div>
                                    </div><!--end form-group-->

                                    <div class="form-group row mt-4">
                                        <div class="col-sm-6">
                                            <div class="custom-control custom-switch switch-success">
                                                <input type="checkbox" class="custom-control-input" id="customSwitchSuccess">
                                                <label class="custom-control-label text-muted" for="customSwitchSuccess">Remember me</label>
                                            </div>
                                        </div><!--end col-->
                                        <div class="col-sm-6 text-right">
                                          <router-link to="#" class="text-muted font-13"><i class="fa fa-lock"></i> Forgot password?</router-link>
                                        </div><!--end col-->
                                    </div><!--end form-group-->

                                    <div class="form-group mb-0 row">
                                        <div class="col-12 mt-2">
                                            <button class="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" type="submit">Log In <i class="fa fa-sign-in"></i></button>
                                        </div><!--end col-->
                                    </div> <!--end form-group-->
                                </form><!--end form-->
                            </div><!--end /div-->

                            <div class="m-3 text-center text-muted">
                                <p class="">Don't have an account ? <router-link to="/registrasi" class="text-primary ml-2">Free Resister</router-link></p>
                            </div>
                        </div><!--end card-body-->
                    </div><!--end card-->
                </div><!--end auth-page-->
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
    <!-- End Log In page -->
  </div>
</template>

<script>
/* eslint-disable no-lonely-if */

import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    logins() {
      axios.post(`${process.env.VUE_APP_API}login`, {
        username: this.login.email, password: this.login.password,
      })
        .then((res) => {
          document.getElementById('loading').style.display = 'flex';
          if (!res.data.success) {
            document.getElementById('loading').style.display = 'none';
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.data.msg,
            });
          } else {
            localStorage.token = res.data.token;
            if (res.data.group_id === 1) {
              document.getElementById('loading').style.display = 'none';
              Swal.fire(
                'Good job!',
                'Login Berhasil!',
                'success',
              );
              this.$router.go('/');
            } else if (res.data.have_profile === 0) {
              Swal.fire(
                'Good job!',
                'Login Berhasil!',
                'success',
              );
              this.$router.push('/profile');
            } else if (res.data.approved === 0) {
              Swal.fire(
                'Good job!',
                'Login Berhasil!',
                'success',
              );
              this.$router.push('/profile');
            } else {
              Swal.fire(
                'Good job!',
                'Login Berhasil!',
                'success',
              );
              this.$router.push('/');
            }
            Swal.fire(
              'Good job!',
              'Login Berhasil!',
              'success',
            );
            document.getElementById('loading').style.display = 'none';
          }
        })
        .catch((err) => {
          console.log(err);
          console.log('aa');
        });
    },
  },
  created() {
    if (localStorage.token) {
      axios.get(`${process.env.VUE_APP_API}user`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          if (res.data.success) {
            if (res.data.user.group_id === 1) {
              this.$router.push('/');
            } else {
              if (res.data.approved !== 0) {
                this.$router.push('/');
              } else if (res.data.user.have_profile === 0) {
                this.$router.push('/profile');
              } else {
                this.$router.push('/profile');
              }
            }
          } else {
            localStorage.clear();
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style>

</style>
