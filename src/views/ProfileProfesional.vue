<template>
  <!-- eslint-disable max-len -->
  <div>
    <Navbar/>
    <div class="page-wrapper">
      <!-- Page Content-->
      <div class="page-content-tab">
        <div class="container-fluid">
          <!-- Page-Title -->
          <div class="row">
            <div class="col-sm-12">
              <div class="page-title-box">
                <div class="float-right">
                  <ol class="breadcrumb">
                    <!-- <li class="breadcrumb-item"><router-link to="/home">Home</router-link></li> -->
                    <li class="breadcrumb-item active">Profile</li>
                  </ol>
                </div>
                <h4 class="page-title">Profile</h4>
              </div><!--end page-title-box-->
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="mt-0 header-title">Edit Profile</h4>
                  <p class="text-danger mb-3" v-if="msg === 1">Mohon Lengkapi Profile</p>
                  <div v-if="msg === 2" class="d-flex my-3 justify-content-between">
                    <p class="text-warning mb-3">Terimakasih Data Sedang Ditinjau</p>
                    <button class="btn btn-success align-self-center" @click="openNomer">Dapatkan Nomor Rayon</button>
                  </div>
                  <p class="text-danger mb-3" v-if="msg === 0"></p>
                  <form action="" @submit.prevent="saveprofile">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="row">
                            <label class="col-sm-2 col-form-label text-right" for="asosiasi">Asosiasi</label>
                            <div class="col-sm-4">
                              <select v-model="profile.asos_id" name="asosiasi" class="form-control" id="asosiasi">
                                <option value="" selected disabled="disabled"> - Asosiasi - </option>
                                <option :value="item.id" v-for="(item,index) in asosiasi" :key="index">{{ item.nama }}</option>
                              </select>
                            </div>
                            <label class="col-sm-2 col-form-label text-right" for="rayon">Rayon</label>
                            <div class="col-sm-4">
                              <select v-model="profile.rayon_id" name="rayon" class="form-control" id="rayon">
                                <option value="" selected> - Rayon - </option>
                                <option :value="item.id" v-for="(item,index) in rayons" :key="index">{{ item.nama }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="nama" class="col-sm-2 col-form-label text-right">Nama</label>
                            <div class="col-sm-4">
                              <input type="text" name="nama" id="nama" placeholder="Nama" class="form-control" v-model="profile.nama">
                            </div>
                            <label for="no_id" class="col-sm-2 col-form-label">No ID</label>
                            <div class="col-sm-4">
                              <input type="number" name="no_id" id="no_id" v-model="profile.no_id" class="form-control" placeholder="No ID">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <!-- <label for="nowa" class="col-sm-2 col-form-label text-right">NO. WA</label>
                            <div class="col-sm-4">
                              <input type="number" name="nowa" id="nowa" class="form-control" placeholder="No Whatsapp" v-model="profile.telepon">
                            </div> -->
                            <label for="email" class="col-sm-2 col-form-label text-right">Email</label>
                            <div class="col-sm-4">
                              <input type="email" name="email" id="email" class="form-control" placeholder="Email" v-model="profile.email">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="alamat" class="col-sm-2 col-form-label text-right">Alamat</label>
                            <div class="col-sm-10">
                              <textarea name="alamat" placeholder="Alamat" id="alamat" class="form-control" cols="30" rows="2" v-model="profile.alamat"></textarea>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="provinsi" class="col-sm-2 col-form-label text-right">Province</label>
                            <div class="col-sm-4">
                              <select name="provinsi" id="provinsi" class="form-control" v-model="profile.prov_id">
                                <option value="" selected>- Province -</option>
                                <option :value="item.kode" v-for="(item,index) in provinsi" :key="index">{{ item.keterangan }}</option>
                              </select>
                            </div>
                            <label for="kabupaten" class="col-sm-2 col-form-label text-right">Kabupaten</label>
                            <div class="col-sm-4">
                              <select name="kabupaten" id="kabupaten" class="form-control" v-model="profile.kab_id">
                                <option value="" selected>- Kabupaten -</option>
                                <option :value="item.kode" v-for="(item,index) in kabupaten" :key="index">{{ item.keterangan }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="kecamatan" class="col-sm-2 col-form-label">Kecamatan</label>
                            <div class="col-sm-4">
                              <select name="kecamatan" id="kecamatan" class="form-control" v-model="profile.kec_id">
                                <option value="" selected>- Kecamatan -</option>
                                <option :value="item.kode" v-for="(item,index) in kecamatan" :key="index">{{ item.keterangan }}</option>
                              </select>
                            </div>
                            <label for="kelurahan" class="col-sm-2 col-form-label">Kelurahan</label>
                            <div class="col-sm-4">
                              <select name="kelurahan" id="kelurahan" class="form-control" v-model="profile.kel_id">
                                <option value="" selected>- Kelurahan -</option>
                                <option :value="item.kode" v-for="(item,index) in kelurahan" :key="index">{{ item.keterangan }}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="kodepos" class="col-sm-2 col-form-label">Kode Pos</label>
                            <div class="col-sm-4">
                              <input type="text" name="kodepos" id="kodepos" v-model="profile.kode_pos" class="form-control" placeholder="Kode Pos">
                            </div>
                            <label for="tempatLahir" class="col-sm-2 col-form-label">Tempat Lahir</label>
                            <div class="col-sm-4">
                              <input type="text" name="tempatLahir" id="tempatLahir" v-model="profile.tempat_lahir" class="form-control" placeholder="Tempat Lahir">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="tanngallahir" class="col-sm-2 col-form-label">Tanggal Lahir</label>
                            <div class="col-sm-4">
                              <input type="date" name="tanggallahir" id="tanggallahir" v-model="profile.tanggal_lahir" class="form-control" placeholder="Tanggal Lahir">
                            </div>
                            <label for="nik" class="col-sm-2 col-form-label">NIK</label>
                            <div class="col-sm-4">
                              <input type="number" name="nik" id="nik" placeholder="NIK" v-model="profile.nik" class="form-control">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="keahlian" class="col-sm-2 col-form-label">Keahlian</label>
                            <div class="col-sm-4">
                              <input type="text" name="keahlian" id="keahlian" v-model="profile.keahlian" class="form-control" placeholder="Keahlian">
                            </div>
                            <label for="npwp" class="col-sm-2 col-form-label">NPWP</label>
                            <div class="col-sm-4">
                              <input type="text" name="npwp" class="form-control" id="NPWP" v-model="profile.npwp">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="namaPerusahaan" class="col-sm-2 col-form-label">Nama Perusahaan</label>
                            <div class="col-sm-4">
                              <input type="text" name="namaPerusahaan" id="namaPerusahaan" v-model="profile.nama_perusahaan" class="form-control" placeholder="Nama Perusahaan">
                            </div>
                            <label for="emailperusahaan" class="col-sm-2 col-form-label">Email Perusahaan</label>
                            <div class="col-sm-4">
                              <input type="email" name="emailperusahaan" id="emailperusahaan" v-model="profile.email_perusahaan" class="form-control" placeholder="Email Perusahaan">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="alamatPerusahaan" class="col-sm-2 col-form-label">Alamat Perusahaan</label>
                            <div class="col-sm-10">
                              <textarea name="alamatPerusahaan" placeholder="Alamat Perusahaan" id="alamatPerusahaan" class="form-control" cols="30" rows="2" v-model="profile.alamat_perusahaan"></textarea>
                            </div>
                          </div>
                        </div>
                        <!-- <div class="form-group">
                          <div class="row">
                            <label for="logoperusahaan" class="col-sm-2 col-form-label">Logo Perusahaan</label>
                            <div class="col-md-4">
                              <input type="file" name="logoperusahaan" id="logoperusahaan" @change="upload" class="form-control">
                            </div>
                            <img :src="profile.file_ktp" style="width: 100px" alt="">
                          </div>
                        </div> -->
                        <div class="row justify-content-end">
                          <button type="submit" class="btn btn-primary mr-3">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modals" id="modal" >
      <div class="overlay-modal"></div>
      <div class="row justify-content-center align-items-center h-100">
        <!-- <div class="col-md-7"> -->
          <div class="card">
            <div class="card-body">
              <div class="logo-exit">
                <div class="octomoda-img">
                  <img class="logo-octomoda" src="../assets/images/octomoda.png" alt="">
                  <img class="text-octomoda" src="../assets/images/octomodatext.png" alt="">
                </div>
                <div>
                  <a href="#" @click="closemodal">
                    <i class="fa fa-times"></i>
                  </a>
                </div>
              </div>
              <div class="head-modal text-center">
                <img src="../assets/images/getnumber.png" alt="">
                <h3>Verifikasi Data Diri</h3>
                <p>Hubungi nomor berikut untuk mendapatkan Validasi Data Diri anda :</p>
                <a :href="'https://wa.me/' + no_telp_rayon" style="font-weight: 500;font-size: 22px">{{no_telp_rayon}}</a>
              </div>
            </div>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapState } from 'vuex';
import Navbar from '../components/StarterPage.vue';
// import base64 from 'image-to-base64';

export default {
  data() {
    return {
      profile: {},
      msg: 0,
      file_ktp: null,
      no_telp_rayon: null,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    closemodal() {
      document.getElementById('modal').style.display = 'none';
    },
    openNomer() {
      document.getElementById('modal').style.display = 'block';
      // console.log(document.getElementById('modal'));
    },
    upload(a) {
      // const file = document.getElementById('images').files[0];
      console.log(a);
      const file = a.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.profile.file_ktp = e.target.result;
      };
      // reader.onerror = (error) => {
      //   console.log(error);
      // };
      reader.readAsDataURL(file);
    },
    saveprofile() {
      axios.post(`${process.env.VUE_APP_API}profile`, {
        asos_id: this.profile.asos_id,
        no_id: this.profile.no_id,
        nama: this.profile.nama,
        rayon_id: this.profile.rayon_id,
        alamat: this.profile.alamat,
        prov_id: this.profile.prov_id,
        kab_id: this.profile.kab_id,
        kec_id: this.profile.kec_id,
        kel_id: this.profile.kel_id,
        kode_pos: this.profile.kode_pos,
        tempat_lahir: this.profile.tempat_lahir,
        tanggal_lahir: this.profile.tanggal_lahir,
        nik: this.profile.nik,
        npwp: this.profile.npwp,
        keahlian: this.profile.keahlian,
        nama_perusahaan: this.profile.nama_perusahaan,
        alamat_perusahaan: this.profile.alamat_perusahaan,
        email_perusahaan: this.profile.email_perusahaan,
        email: this.profile.email,
        // file_ktp: this.profile.file_ktp,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            Swal.fire(
              res.data.msg,
              'Harap Tunggu Admin Untuk Memverifikasi Data',
              'success',
            ).then((ret) => {
              if (ret.isConfirmed) {
                this.$router.go();
              }
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.data.msg,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    ...mapState(['kategori']),
    ...mapState(['provinsi']),
    ...mapState(['kabupaten']),
    ...mapState(['kecamatan']),
    ...mapState(['kelurahan']),
    ...mapState(['asosiasi']),
    ...mapState(['rayons']),
    asos_id() {
      return this.profile.asos_id;
    },
    prov_id() {
      return this.profile.prov_id;
    },
    kab_id() {
      return this.profile.kab_id;
    },
    kec_id() {
      return this.profile.kec_id;
    },
  },
  mounted() {
    this.$store.dispatch('getApi', {
      url: 'kategori',
      mutation: 'GET_KATEGORI',
    });
    this.$store.dispatch('getApi', {
      url: 'daerah/provinsi',
      mutation: 'GET_PROVINSI',
    });
    this.$store.dispatch('getApi', {
      url: 'asosiasi',
      mutation: 'GET_ASOSIASI',
    });
  },
  beforeCreate() {
    if (localStorage.token) {
      axios.get(`${process.env.VUE_APP_API}user`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            if (res.data.user.group_id === 3) {
              this.$router.push('/profile-perusahaan');
            } else if (res.data.user.group_id === 2) {
              this.$router.push('/profile');
            } else if (res.data.user.group_id === 5) {
              this.$router.push('/profile-rayon');
            }
          } else {
            this.$router.push('/logout');
          }
          if (res.data.user.have_profile === 1) {
            axios.get(`${process.env.VUE_APP_API}getambilwa`, {
              headers: {
                Authorization: `Bearer ${localStorage.token}`,
              },
            })
              .then((result) => {
                this.no_telp_rayon = result.data.no_telp;
              })
              .catch((Err) => {
                console.log(Err);
              });
          } else {
            console.log('blom');
          }
        })
        .catch((err) => {
          console.log(err);
        });
      axios.get(`${process.env.VUE_APP_API}profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.approved === 1) {
            this.msg = 0;
            this.profile = res.data.profile;
          } else if (res.data.success) {
            this.profile = res.data.profile;
            this.msg = 2;
          } else {
            this.msg = 1;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.$router.push('/login');
    }
  },
  watch: {
    prov_id(val) {
      if (val) {
        this.$store.dispatch('getApi', {
          url: `daerah/kabupaten/${val}`,
          mutation: 'GET_KABUPATEN',
        });
      }
    },
    kab_id(val) {
      if (val) {
        this.$store.dispatch('getApi', {
          url: `daerah/kecamatan/${val}`,
          mutation: 'GET_KECAMATAN',
        });
      }
    },
    kec_id(val) {
      if (val) {
        this.$store.dispatch('getApi', {
          url: `daerah/kelurahan/${val}`,
          mutation: 'GET_KELURAHAN',
        });
      }
    },
    asos_id(val) {
      if (val) {
        this.$store.dispatch('getApi', {
          url: `data_rayon?asos_id=${val}`,
          mutation: 'GET_RAYONSS',
          headers: {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          },
        });
      }
    },
  },
};
</script>

<style>
  .modals{
    z-index: 9991;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    opacity: 1;
    background: transparent;
    display: none;
  }
</style>
