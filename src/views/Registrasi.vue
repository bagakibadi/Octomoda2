<template>
  <!-- eslint-disable max-len -->
<div>
  <div class="loading" id="loading">
    <div class="overlay-modal"></div>
    <i class="fa fa-spinner fa-spin"></i>
    <h1>Loading</h1>
  </div>
  <div class="account-body accountbg" style="padding: 100px 0 50px 0;height: auto;min-height: 100vh">
      <!-- Log In page -->
      <div class="container">
          <div class="row">
              <div class="col-12 align-self-center">
                  <div class="auth-page">
                      <div class="card auth-card shadow-lg">
                          <div class="card-body" v-if="result === 1">
                              <div class="px-3">
                                  <div class="auth-logo-box">
                                    <router-link to="/" class="logo logo-admin">
                                      <img src="../assets/images/octomoda.png" height="55" alt="logo" class="auth-logo">
                                    </router-link>
                                  </div><!--end auth-logo-box-->

                                  <div class="text-center auth-logo-text">
                                      <h4 class="mt-0 mb-3 mt-5">Registrasi Octomoda</h4>
                                  </div> <!--end auth-logo-text-->

                                  <form class="form-horizontal auth-form my-4" @submit.prevent="registrasi">

                                      <div class="form-group">
                                          <label for="jenis">Jenis</label>
                                          <div class="input-group mb-3">
                                              <span class="auth-form-icon">
                                                  <i class="fa fa-user"></i>
                                              </span>
                                              <select name="jenis" id="jenis" required class="form-control" v-model="regis.jenis">
                                                <option value="" selected>- Pilih Jenis -</option>
                                                <!-- <option value="1">Admin</option> -->
                                                <option value="2">Asosiasi</option>
                                                <option value="3">Perusahaan</option>
                                                <option value="4">Profesional</option>
                                              </select>
                                              <!-- <input type="text" class="form-control" name="username" id="username" placeholder="Enter username"> -->
                                          </div>
                                      </div><!--end form-group-->
                                      <div class="form-group">
                                          <label for="username">Nama</label>
                                          <div class="input-group mb-3">
                                              <span class="auth-form-icon">
                                                  <i class="fa fa-user"></i>
                                              </span>
                                              <input type="text" class="form-control" name="username" id="username" v-model="regis.username" required placeholder="Enter Nama">
                                          </div>
                                      </div><!--end form-group-->

                                      <div class="form-group">
                                          <label for="useremail">Email</label>
                                          <div class="input-group mb-3">
                                              <span class="auth-form-icon">
                                                  <i class="fa fa-envelope"></i>
                                              </span>
                                              <input type="email" class="form-control" name="useremail" id="useremail" v-model="regis.email" required placeholder="Enter Email">
                                          </div>
                                      </div><!--end form-group-->

                                      <div class="form-group">
                                          <label for="userpassword">Password</label>
                                          <div class="input-group mb-3">
                                              <span class="auth-form-icon">
                                                  <i class="fa fa-lock"></i>
                                              </span>
                                              <input type="password" class="form-control" name="password" id="userpassword" v-model="regis.password" required placeholder="Enter password">
                                          </div>
                                      </div><!--end form-group-->

                                      <div class="form-group">
                                        <div class="form-group">
                                            <label for="mo_number">Mobile Number</label>
                                            <div class="input-group mb-3">
                                                <span class="auth-form-icon">
                                                    <i class="fa fa-phone"></i>
                                                </span>
                                                <input type="text" class="form-control" name="mobile-number" id="mo_number" v-model="regis.no" required placeholder="Enter Mobile Number +62xxx">
                                            </div>
                                        </div><!--end form-group-->
                                      </div><!--end form-group-->

                                      <div class="form-group row mt-4">
                                          <div class="col-sm-12">
                                              <div class="custom-control custom-switch switch-success">
                                                  <input type="checkbox" class="custom-control-input" id="customSwitchSuccess" required>
                                                  <label class="custom-control-label text-muted" for="customSwitchSuccess">By registering you agree to the Octomoda</label>
                                              </div>
                                          </div><!--end col-->
                                      </div><!--end form-group-->

                                      <div class="form-group mb-0 row">
                                          <div class="col-12 mt-2">
                                              <button class="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" type="submit">Register <i class="fa fa-sign-in ml-1"></i></button>
                                          </div><!--end col-->
                                      </div> <!--end form-group-->
                                  </form><!--end form-->
                              </div><!--end /div-->

                              <div class="m-3 text-center text-muted">
                                  <p class="">Already have an account ? <router-link to="/login" class="text-primary ml-2">Log in</router-link></p>
                              </div>
                          </div><!--end card-body-->
                          <div class="card-body" v-if="result === 2">
                            <form @submit="verifikasi(e)">
                              <div class="head text-center">
                                <h4>Nomor Whatsapp yang anda masukkan : </h4>
                                <h4>{{regis.no}}</h4>
                              </div>
                              <h5 class="text-center mt-5 mb-3">Input Kode Verifikasi yang telah dikirim melalui Whatsapp</h5>
                              <div class="inpt">
                                <input type="text" required class="inputs" @keyup="otps" v-model="otp1" maxlength="1">
                                <input type="text" required class="inputs" @keyup="otps" v-model="otp2" maxlength="1">
                                <input type="text" required class="inputs" @keyup="otps" v-model="otp3" maxlength="1">
                                <input type="text" required class="inputs" @keyup="otps" v-model="otp4" maxlength="1">
                                <input type="text" required class="inputs" @keyup="otps" v-model="otp5" maxlength="1">
                              </div>
                              <div class="submit">
                                <button type="submit" @click="verifikasi" class="btn btn-primary">Verifikasi</button>
                              </div>
                            </form>
                          </div>
                      </div><!--end card-->
                  </div><!--end auth-card-->
              </div><!--end col-->
          </div><!--end row-->
      </div><!--end container-->
      <!-- End Log In page -->
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      otp1: null,
      otp2: null,
      otp3: null,
      otp4: null,
      otp5: null,
      id: '',
      otp: null,
      result: 1,
      regis: {
        jenis: '',
      },
    };
  },
  methods: {
    registrasi() {
      document.getElementById('loading').style.display = 'flex';
      axios.post(`${process.env.VUE_APP_API}register`, {
        name: this.regis.username,
        no_hp: this.regis.no,
        email: this.regis.email,
        password: this.regis.password,
        group_id: this.regis.jenis,
      })
        .then((res) => {
          document.getElementById('loading').style.display = 'none';
          console.log(res);
          if (!res.data.success) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${res.data.msg} Silahkan Cek Kode OTP baru`,
            });
          } else {
            localStorage.token = res.data.token;
            Swal.fire(
              res.data.msg,
              // 'Silahkan Cek Kode OTP di Whatsapp',
              'success',
            );
            this.result = 2;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    otps(e) {
      const inputs = Array.from(e.target.form.querySelectorAll('input[type="text"]'));
      const index = inputs.indexOf(e.target);

      if (index < inputs.length) {
        inputs[index + 1].focus();
        // this.otp1.next('.inputs').focus()
      }
    },
    verifikasi(e) {
      document.getElementById('loading').style.display = 'flex';
      const otp = [this.otp1, this.otp2, this.otp3, this.otp4, this.otp5];
      let str = '';
      for (let i = 0; i < otp.length; i += 1) {
        str += otp[i];
      }
      const otpint = Number(str);
      console.log(otpint);

      axios.post(`${process.env.VUE_APP_API}verifikasi_token`, {
        token: otpint,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          document.getElementById('loading').style.display = 'none';
          console.log(res);
          if (!res.data.success) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.data.msg,
            });
          } else {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'OTP success',
              showConfirmButton: false,
              timer: 2000,
            });
            setTimeout(() => {
              this.$router.push('/profile');
            }, 1500);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      e.preventDefault();
    },
  },
};
</script>

<style>
.inpt{
  display: flex;
  justify-content: center;
}
.inputs{
  margin: 0 5px;
  border: 1px solid #999;
  border-radius: 7px;
  font-size: 20px;
  width: 40px;
  height: 40px;
  text-align: center;
}
.submit{
  margin: 20px 0;
  width: 100%;
}
.submit button{
  width: 100%;
}

</style>
