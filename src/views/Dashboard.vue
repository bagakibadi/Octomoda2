<template>
  <!-- eslint-disable max-len -->
  <div>
    <Navbar/>
          <div class="page-wrapper">

            <!-- Page Content-->
            <div class="page-content-tab">

                <div class="container-fluid" v-if="group_id === 1">
                    <!-- Page-Title -->
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="page-title-box">
                                <div class="float-right">
                                    <ol class="breadcrumb">
                                        <!-- <li class="breadcrumb-item"><a href="javascript:void(0);">Metrica</a></li>
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">UI Kit</a></li> -->
                                        <li class="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>
                                <h4 class="page-title">Asosiasi</h4>
                            </div><!--end page-title-box-->
                        </div><!--end col-->
                    </div>
                    <!-- end page title end breadcrumb -->
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body" style="overflow-x: auto">

                                    <h4 class="mt-0 header-title">List Asosiasi</h4>
                                    <!-- <p class="text-muted mb-3">DataTables has most features enabled by
                                        default, so all you need to do to use it with your own tables is to call
                                        the construction function: <code>$().DataTable();</code>.
                                    </p> -->

                                    <table id="datatable" class="table table-bordered nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                        <thead>
                                        <tr>
                                            <th>Asosiasi</th>
                                            <th>Email</th>
                                            <th>No. Telephone</th>
                                            <th>Alamat</th>
                                            <!-- <th></th> -->
                                            <th>Action</th>
                                        </tr>
                                        </thead>

                                        <tbody id="asosiasitable" v-for="data in dataAsosiasi" :key="data.id">
                                          <tr>
                                            <td>
                                              <a href="#">
                                                <div class="d-flex logoasosiasi">
                                                  <img :src="data.logo_asosiasi" alt="">
                                                  <p>
                                                    {{data.nama}}
                                                  </p>
                                                </div>
                                              </a>
                                            </td>
                                            <td>{{data.email}}</td>
                                            <td>{{data.telp}}</td>
                                            <td>{{data.alamat}}</td>
                                            <td>
                                              <button class="btn btn-danger" v-if="data.approved === 1" @click="unapprove(data.id, data.nama)">Batalkan</button>
                                              <button class="btn btn-primary" @click="konfirm(data.id, data.nama)" v-else>Konfirmasi</button>
                                            </td>
                                          </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div> <!-- end col -->
                    </div> <!-- end row -->

                </div><!-- container -->
                <div class="container-fluid" v-if="group_id === 2">
                  <div class="row">
                    <div class="col-sm-12 my-3">
                      <div class="card">
                        <div class="card-body">
                          <h3 class="page-title mb-4">Data Rayon</h3>
                          <div class="row">
                            <div class="col-md-3">
                              <div class="form-search">
                                <select name="wilayah" class="form-control" id="wilayah">
                                  <option value="" selected>Wilayah</option>
                                  <option value="">Wilayah</option>
                                  <option value="">Wilayah</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="form-search">
                                <select name="rayon" id="rayon" class="form-control">
                                  <option value="" selected>Rayon</option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <button class="btn btn-primary"><i class="fa fa-search"></i> Tampilkan Data</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card">
                        <div class="card-body">
                          <div class="d-flex justify-content-between mb-4">
                            <h4 class="page-title">Daftar Rayon</h4>
                            <button data-toggle="modal" @click="modaltambah" class="btn btn-secondary">+ Tambah Rayon</button>
                          </div>
                          <table id="datatable" class="table table-bordered nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Rayon</th>
                                <th>Nama Rayon</th>
                                <th>Wilayah</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody v-for="(data,index) in datarayon" :key="index.id">
                              <tr>
                                <td style="width: 5%;text-align: center;" >{{data.id}}</td>
                                <td>
                                  <p v-if="data.rayon_id === 2">DPW / DPD</p>
                                  <p v-else>DPC / PKH</p>
                                </td>
                                <td @click="detailRayon(index)">{{data.nama}}</td>
                                <td>{{data.provinsi.keterangan}}</td>
                                <td>{{data.email}}</td>
                                <td>{{data.password}}</td>
                                <td style="width: 10%;">
                                  <div class="d-flex justify-content-around">
                                    <button class="btn"><i class="fa fa-edit" style="color: rgba(242, 201, 76, 1);font-size: 20px;"></i></button>
                                    <button class="btn"><i class="fa fa-trash" style="color: rgba(235, 87, 87, 1);font-size: 20px;"></i></button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <!-- end page content -->
    </div>
        <!-- end page-wrapper -->
    <div class="modals2" id="modal2">
      <div class="overlay-modal"></div>
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-7">
          <div class="card">
            <div class="card-body">
              <div class="logo-exit">
                <div class="octomoda-img">
                  <img class="logo-octomoda" src="../assets/images/octomoda.png" alt="">
                  <img class="text-octomoda" src="../assets/images/octomodatext.png" alt="">
                </div>
                <div>
                  <a href="#" @click="closemodal2">
                    <i class="fa fa-times"></i>
                  </a>
                </div>
              </div>
              <div class="head-modal text-center">
                <h1>Edit Rayon</h1>
              </div>
              <div class="d-flex justify-content-between mt-4">
                <div class="col-md-4">
                    <p>No. Anggota :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>Nama Asosiasi :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>Rayon :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>Nama Perusahaan :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>Email :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>Alamat Kantor :</p>
                    <p class="font-weight-bold">0001</p>
                </div>
                <div class="col-md-4">
                    <p>Provinsi :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>Kota :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>No. Telepon :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>Website :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>No. Akte Notaris :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>No. NPWP :</p>
                    <p class="font-weight-bold">0001</p>
                </div>
                <div class="col-md-4">
                    <p>No. Kemenkumham :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>No. NIK :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>Nama :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>Jabatan :</p>
                    <p class="font-weight-bold">0001</p>
                    <p>No. Handphone :</p>
                    <p class="font-weight-bold">0001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="modal" class="modals">
      <div class="overlay-modal"></div>
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-7">
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
                <h1>Tambah Rayon</h1>
              </div>
                <form action="" class="form-tambah-rayon" @submit.prevent="tambahRayon">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-tambah">
                        <label for="rayon">Rayon</label>
                        <select name="rayon" id="rayon" v-model="tambahrayon.rayon_id" class="form-control" required>
                          <option value="" selected>Pilih Rayon</option>
                          <option :value="item.id" v-for="(item,index) in rayons" :key="index.id">{{item.nama}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="namaRayon">Nama Rayon</label>
                        <input required type="text" v-model="tambahrayon.nama" name="namaRayon" id="namaRayon" class="form-control" placeholder="Nama Rayon">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="email">Email</label>
                        <input required type="email" name="email" v-model="tambahrayon.email" id="email" class="form-control" placeholder="Email Rayon">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-tambah">
                        <label for="alamat">Alamat</label>
                        <textarea required name="alamat" id="alamat" v-model="tambahrayon.alamat" cols="30" rows="2" class="form-control" placeholder="Alamat"></textarea>
                        <!-- <input type="text" name="namaRayon" id="namaRayon" class="form-control" placeholder="Nama Rayon"> -->
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="rt">RT</label>
                        <input required type="text" name="rt" v-model="tambahrayon.rt" id="rt" class="form-control" placeholder="RT">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="rw">RW</label>
                        <input required v-model="tambahrayon.rw" type="text" name="rw" id="rw" class="form-control" placeholder="RW">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="provinsi">Provinsi</label>
                        <select required v-model="tambahrayon.prov_id" name="provinsi" id="provinsi" class="form-control">
                          <option value="" selected>Pilih Provinsi</option>
                          <option :value="item.kode" v-for="(item,index) in provinsi" :key="index.id">{{item.keterangan}}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="kab_id">Kabupaten / Kota</label>
                        <select required name="kab_id" v-model="tambahrayon.kab_id" id="kab_id" class="form-control">
                          <option value="" selected>Pilih Kabupaten</option>
                          <option :value="item.kode" v-for="(item,index) in kabupaten" :key="index.id">{{item.keterangan}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="kec_id">Kecamatan</label>
                        <select required v-model="tambahrayon.kec_id" name="kec_id" id="kec_id" class="form-control">
                          <option value="" selected>Pilih Kecamatan</option>
                          <option :value="item.kode" v-for="(item,index) in kecamatan" :key="index">{{ item.keterangan }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="kel_id">Kelurahan</label>
                        <select required v-model="tambahrayon.kel_id" name="kel_id" id="kel_id" class="form-control">
                          <option value="" selected>Pilih Kelurahan</option>
                          <option :value="item.kode" v-for="(item,index) in kelurahan" :key="index">{{ item.keterangan }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="kode_pos">Kode Pos</label>
                        <input required v-model="tambahrayon.kode_pos" type="number" name="kode_pos" id="kode_pos" class="form-control" placeholder="Kode Pos">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-tambah">
                        <label for="website">Website</label>
                        <input required v-model="tambahrayon.website" type="text" name="website" id="website" class="form-control" placeholder="Website">
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <!-- <div class="col-md-12"> -->
                      <button class="btn btn-primary" type="submit">Simpan</button>
                    <!-- </div> -->
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable max-len */
import { mapState } from 'vuex';
import Swal from 'sweetalert2';
import axios from 'axios';
import Navbar from '../components/StarterPage.vue';

export default {
  data() {
    return {
      tambahrayon: {
        rayon_id: '',
        nama: '',
        alamat: '',
        rt: '',
        rw: '',
        prov_id: '',
        kab_id: '',
        kec_id: '',
        kel_id: '',
        website: '',
        kode_pos: '',
        email: '',
      },
      dataAsosiasi: null,
      nama: '',
      group_id: '',
      datarayon: null,
    };
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapState(['provinsi']),
    ...mapState(['kabupaten']),
    ...mapState(['kecamatan']),
    ...mapState(['kelurahan']),
    ...mapState(['rayons']),
    prov_id() {
      return this.tambahrayon.prov_id;
    },
    kab_id() {
      return this.tambahrayon.kab_id;
    },
    kec_id() {
      return this.tambahrayon.kec_id;
    },
  },
  methods: {
    detailRayon(a) {
      console.log(a);
      console.log(this.datarayon[a]);
    },
    closemodal() {
      document.getElementById('modal').style.display = 'none';
      // console.log(document.getElementById('modal'));
    },
    closemodal2() {
      document.getElementById('modal2').style.display = 'none';
      // console.log(document.getElementById('modal'));
    },
    tambahRayon() {
      axios.post(`${process.env.VUE_APP_API}data_rayon`, {
        nama: this.tambahrayon.nama,
        rayon_id: this.tambahrayon.rayon_id,
        alamat: this.tambahrayon.alamat,
        rt: this.tambahrayon.rt,
        rw: this.tambahrayon.rw,
        prov_id: this.tambahrayon.prov_id,
        kab_id: this.tambahrayon.kab_id,
        kec_id: this.tambahrayon.kec_id,
        kel_id: this.tambahrayon.kel_id,
        email: this.tambahrayon.email,
        website: this.tambahrayon.website,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          // Content-Type
        },
      })
        .then((res) => {
          console.log(res);
          if (!res.data.success) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: res.data.status,
            });
            console.log('err');
          } else {
            // console.log('bnr');
            Swal.fire(
              'Success',
              res.data.msg,
              'success',
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    modaltambah() {
      document.getElementById('modal').style.display = 'block';
    },
    unapprove(a, b) {
      Swal.fire({
        title: `Batalkan Verifikasi Ke Asosiasi ${b}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Batalkan!',
      }).then((result) => {
        if (result.isConfirmed) {
          axios.get(`${process.env.VUE_APP_API}unapprove/asosiasi?id=${a}`, {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          })
            .then((res) => {
              console.log(res);
              if (res.data.success) {
                Swal.fire(
                  'Success',
                  res.data.msg,
                  'success',
                );
                setTimeout(() => {
                  this.$router.go();
                }, 400);
              } else {
                Swal.fire(
                  'Failed',
                  res.data.msg,
                  'error',
                );
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    konfirm(a, b) {
      console.log(a);
      Swal.fire({
        title: `Verifikasi Asosiasi ${b}`,
        text: `Yakin Verifikasi Asosiasi ${b}`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Verifikasi!',
      }).then((result) => {
        if (result.isConfirmed) {
          axios.get(`${process.env.VUE_APP_API}approve/asosiasi?id=${a}`, {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
            },
          })
            .then((res) => {
              if (res.data.success) {
                Swal.fire(
                  'Success',
                  res.data.msg,
                  'success',
                );
                setTimeout(() => {
                  this.$router.go();
                }, 400);
              } else {
                Swal.fire(
                  'Failed',
                  res.data.msg,
                  'error',
                );
              }
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    data() {
      axios.get(`${process.env.VUE_APP_API}anggota`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.dataAsosiasi = res.data.anggota.asosiasi;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    user() {
      axios.get(`${process.env.VUE_APP_API}user`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          if (res.data.success) {
            this.group_id = res.data.user.group_id;
            this.nama = res.data.user.name;
          } else {
            this.$router.push('/logout');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    rayon() {
      axios.get(`${process.env.VUE_APP_API}data_rayon`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.datarayon = res.data.data_rayon;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.data();
    this.user();
    this.rayon();
    this.$store.dispatch('getApi', {
      url: 'daerah/provinsi',
      mutation: 'GET_PROVINSI',
    });
    this.$store.dispatch('getApi', {
      url: 'rayon',
      mutation: 'GET_RAYONID',
    });
  },
  watch: {
    prov_id(val) {
      if (val) {
        console.log('aa');
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
  },
};
</script>

<style>
.overlay-modal {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #ddd;
  opacity: .4;
}
.modals .card{
  max-height: 550px;
  overflow: hidden;
  /* overflow-y: auto; */
}
.modals form{
  height: calc(550px - 140px);
  overflow-y: auto;
  padding: 0 20px 10px 20px;
}
.form-tambah{
  margin-bottom: 15px;
}
.form-tambah-rayon label{
  font-size: 15px;
  font-weight: 600;
  color: rgba(51, 77, 110, 1);
}
.head-modal h1{
  font-size: 20px;
  font-weight: 600;
  color: rgba(51, 77, 110, 1);
  margin-bottom: 12px;
}
.logo-exit{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-octomoda{
  width: 24px;
  height: 24px;
}
.text-octomoda{
  height: 24px;
  margin-left: 5px;
}
  .modals{
    z-index: 9991;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    opacity: 1;
    background: transparent;
    display: none;
  }
  .modals2{
    z-index: 9991;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    opacity: 1;
    background: transparent;
    display: none;
  }
  .modals2 p{
    margin: 0 0 5px 0;
  }
  .form-search select{
    /* border: none; */
    border-bottom: 1px solid #E9E9E9;
  }
  .selected {
    color: rgba(189, 189, 189, 1) !important;
    font-size: 13px;
  }
  .logoasosiasi{
    align-items: center;
  }
  .logoasosiasi img{
    width: 60px;
    height: 60px;
    border-radius: 100%;
    margin-right: 10px;
  }
  .logoasosiasi p{
    margin: 0;
  }
  tbody tr td:first-child{
    width: 200px;
  }
  tbody tr:hover{
    transition: all .3s;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25) !important;
  }
  .modal-show{
    opacity: 1 !important;
    display: block !important;
  }
  .swal2-container{
    z-index: 99999;
  }
/* @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
@import url('https://cdn.datatables.net/1.10.23/css/dataTables.bootstrap5.min.css'); */
</style>
