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
                  <p class="text-warning mb-3" v-if="msg === 2">Terimakasih Data Sedang Ditinjau</p>
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
                            <label for="namaperusahaan" class="col-sm-2 col-form-label text-right">Nama Perusahaan</label>
                            <div class="col-sm-4">
                              <input type="text" name="namaperusahaan" id="namaperusahaan" placeholder="Nama Perusahaan" class="form-control" v-model="profile.nama">
                            </div>
                            <label for="namaing" class="col-sm-2 col-form-label text-right">Name Perusahaan</label>
                            <div class="col-sm-4">
                              <input type="text" name="namaing" id="namaing" placeholder="Nama Perusahaan (Inggris)" class="form-control" v-model="profile.nama_ing">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="email" class="col-sm-2 col-form-label">Alamat Email</label>
                            <div class="col-sm-4">
                              <input type="email" name="email" id="email" v-model="profile.email" class="form-control" placeholder="Email">
                            </div>
                            <label for="telp" class="col-sm-2 col-form-label">No. Telp</label>
                            <div class="col-sm-4">
                              <input type="number" name="telp" id="telp" v-model="profile.no_wa" class="form-control" placeholder="No. WA Kantor">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="alamat" class="col-sm-2 col-form-label text-right">Alamat Kantor</label>
                            <div class="col-sm-10">
                              <textarea name="alamat" placeholder="Alamat Kantor" id="alamat" class="form-control" cols="30" rows="2" v-model="profile.alamat"></textarea>
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
                            <label for="no_id" class="col-sm-2 col-form-label">No ID</label>
                            <div class="col-sm-4">
                              <input type="number" name="no_id" id="no_id" v-model="profile.no_id" class="form-control" placeholder="No ID">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="kbli" class="col-sm-2 col-form-label">KBLI</label>
                            <div class="col-sm-4">
                              <input type="number" name="kbli" id="kbli" placeholder="KBLI" v-model="profile.kbli" class="form-control">
                            </div>
                            <label for="domisili" class="col-sm-2 col-form-label">Domisili</label>
                            <div class="col-sm-4">
                              <input type="text" name="domisili" class="form-control" id="domisili" v-model="profile.domisili">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="nib" class="col-sm-2 col-form-label">Nib</label>
                            <div class="col-sm-4">
                              <input type="number" name="nib" id="nib" v-model="profile.nib" class="form-control" placeholder="Nib">
                            </div>
                            <label for="npwp" class="col-sm-2 col-form-label">NPWP</label>
                            <div class="col-sm-4">
                              <input type="number" name="npwp" id="npwp" v-model="profile.npwp" class="form-control" placeholder="NPWP">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="nonotaris" class="col-sm-2 col-form-label">No. Akta Notaris</label>
                            <div class="col-sm-4">
                              <input type="text" name="nonotaris" id="nonotaris" v-model="profile.no_akta_notaris" class="form-control" placeholder="No. Akta Notaris">
                            </div>
                            <label for="kemenkumham" class="col-sm-2 col-form-label">No. Kemenkumham</label>
                            <div class="col-sm-4">
                              <input type="text" name="kemenkumham" id="kemenkumham" v-model="profile.no_kemenkumham" class="form-control" placeholder="No. Kemenkunham">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="website" class="col-sm-2 col-form-label">Website</label>
                            <div class="col-sm-4">
                              <input type="text" name="website" id="website" v-model="profile.website" class="form-control" placeholder="Website">
                            </div>
                            <label for="siup" class="col-sm-2 col-form-label">SIUP</label>
                            <div class="col-sm-4">
                              <input type="text" name="siup" id="siup" v-model="profile.siup" class="form-control" placeholder="SIUP">
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <label for="tdp" class="col-sm-2 col-form-label">TDP</label>
                            <div class="col-sm-4">
                              <input type="text" name="tdp" id="tdp" v-model="profile.tdp" class="form-control" placeholder="TDP">
                            </div>
                          </div>
                        </div>
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
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapState } from 'vuex';
import Navbar from '../components/StarterPage.vue';

export default {
  data() {
    return {
      profile: {},
      msg: 0,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    saveprofile() {
      axios.post(`${process.env.VUE_APP_API}profile`, {
        nama: this.profile.nama,
        nama_ing: this.profile.nama_ing,
        rayon_id: this.profile.rayon_id,
        asos_id: this.profile.asos_id,
        alamat: this.profile.alamat,
        prov_id: this.profile.prov_id,
        kab_id: this.profile.kab_id,
        kec_id: this.profile.kec_id,
        kel_id: this.profile.kel_id,
        kode_pos: this.profile.kode_pos,
        no_wa: this.profile.no_wa,
        email: this.profile.email,
        website: this.profile.website,
        nib: this.profile.nib,
        kbli: this.profile.kbli,
        domisili: this.profile.domisili,
        siup: this.profile.siup,
        tdp: this.profile.tdp,
        npwp: this.profile.npwp,
        no_akta_notaris: this.profile.no_akta_notaris,
        no_kemenkumham: this.profile.no_kemenkumham,
        no_id: this.profile.no_id,
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
            );
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
          if (res.data.user.group_id === 3) {
            // this.$router.push('/profile-perusahaan');
          } else if (res.data.user.group_id === 4) {
            this.$router.push('/profile-profesional');
          } else if (res.data.user.group_id === 5) {
            this.$router.push('/profile-rayon');
          } else {
            // this.$router.push
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

</style>
