<template>
<!-- eslint-disable max-len -->
<div>
  <Navbar/>
    <div class="page-wrapper">
      <!-- Page Content-->
      <div class="page-content-tab">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 my-3">
              <div class="card">
                <div class="card-body">
                  <h3 class="page-title mb-4">Data professional</h3>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-search">
                        <input type="text" placeholder="Search" class="form-control" name="" id="">
                      </div>
                    </div>
                    <div class="col-md-3">
                      <button class="btn btn-primary" ><i class="fa fa-search"></i> Tampilkan Data</button>
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
                    <h4 class="page-title">Daftar Perusahaan</h4>
                    <!-- <button data-toggle="modal" @click="modaltambah" class="btn btn-secondary">+ Tambah Rayon</button> -->
                  </div>
                  <div style="overflow-x: auto;" v-if="dataPerusahaan !== null">
                    <table id="datatable2" class="table table-bordered nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama Professional</th>
                          <th>Nama Perusahaan</th>
                          <th>Email Perusahaan</th>
                          <th>Detail</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <!-- <div v-if="dataPerusahaan !== null"> -->
                      <tbody v-for="(data,index) in dataPerusahaan.anggota.professional" :key="index.id">
                        <tr>
                          <td style="width: 5%;text-align: center;" >{{data.id}}</td>
                          <td>{{data.nama}}</td>
                          <td>{{data.nama_perusahaan}}</td>
                          <td>{{data.email_perusahaan}}</td>
                          <td>
                            <button @click="detailPerusahaan(index)" class="btn btn-warning">Detail</button>
                          </td>
                          <td style="width: auto;">
                            <div class="d-flex justify-content-around">
                              <button class="btn btn-primary" @click="approve(data.id)" v-if="data.approved === 0">Approve</button>
                              <button class="btn btn-danger" @click="unapprove(data.id)" v-else>Unapprove</button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <!-- </div> -->
                    </table>
                  </div>
                  <div v-else>
                    <table id="datatable2" class="table table-bordered nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                      <thead>
                        <tr>
                          <th>No</th>
                          <!-- <th>Rayon</th> -->
                          <th>Nama Perusahaan</th>
                          <th>Domisili</th>
                          <th>Email</th>
                          <th>Detail</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <!-- <div v-if="dataPerusahaan !== null"> -->
                      <tbody>
                        <!-- <tr>
                          <td style="width: 5%;text-align: center;" >{{data.id}}</td>
                          <td>{{data.nama}}</td>
                          <td>{{data.domisili}}</td>
                          <td>{{data.email}}</td>
                          <td>
                            <button @click="detailPerusahaan(index)" class="btn btn-warning">Detail</button>
                          </td>
                          <td style="width: auto;">
                            <div class="d-flex justify-content-around">
                              <button class="btn btn-primary" @click="approve(data.id)" v-if="data.approved === 0">Approve</button>
                              <button class="btn btn-danger" @click="unapprove(data.id)" v-else>Unapprove</button>
                            </div>
                          </td>
                        </tr> -->
                      </tbody>
                      <!-- </div> -->
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                  <a href="#" @click="closemodal">
                    <i class="fa fa-times"></i>
                  </a>
                </div>
              </div>
              <div class="head-modal text-center">
                <h1>Detail Asosiasi</h1>
              </div>
                <div class="row" v-if="dataPerusahaan !== null && dataPerusahaan.anggota.professional">
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].nama">
                    <p>Nama :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].nama}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].tempat_lahir">
                    <p>Tempat Lahir :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].tempat_lahir}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].tanggal_lahir">
                    <p>Tanggal Lahir :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].tanggal_lahir}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].nik">
                    <p>NIK :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].nik}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].npwp">
                    <p>NPWP :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].npwp}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].alamat">
                    <p>Alamat :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].alamat}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].provinsi">
                    <p>Provinsi :</p>
                    <p class="font-weight-bold" >{{dataPerusahaan.anggota.professional[indexke].provinsi.keterangan}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].kabupaten">
                    <p>Kabupaten/Kota :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].kabupaten.keterangan}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].kecamatan">
                    <p>Kecamatan :</p>
                    <p class="font-weight-bold" >{{dataPerusahaan.anggota.professional[indexke].kecamatan.keterangan}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].kelurahan">
                    <p>Kelurahan :</p>
                    <p class="font-weight-bold" >{{dataPerusahaan.anggota.professional[indexke].kelurahan.keterangan}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].kode_pos">
                    <p>Kode Pos</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].kode_pos}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].keahlian">
                    <p>Keahlian :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].keahlian}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].nama_perusahaan">
                    <p>Nama Perusahaan :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].nama_perusahaan}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].email_perusahaan">
                    <p>Email Perusahaan:</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].email_perusahaan}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].alamat_perusahaan">
                    <p>Alamat Perusahaan:</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].alamat_perusahaan}}</p>
                  </div>
                  <div class="col-md-4" v-if="dataPerusahaan.anggota.professional[indexke].no_id">
                    <p>No ID :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.professional[indexke].no_id}}</p>
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
import Navbar from '../components/StarterPage.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      dataPerusahaan: null,
      indexke: 0,
    };
  },
  methods: {
    unapprove(e) {
      document.getElementById('loading').style.display = 'flex';
      axios.get(`${process.env.VUE_APP_API}unapprove/professional?id=${e}`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          document.getElementById('loading').style.display = 'none';
          if (res.data.success) {
            Swal.fire(
              'Good job!',
              res.data.msg,
              'success',
            ).then((rest) => {
              if (rest.isConfirmed) {
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
    approve(e) {
      axios.get(`${process.env.VUE_APP_API}approve/professional?id=${e}`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          document.getElementById('loading').style.display = 'none';
          if (res.data.success) {
            Swal.fire(
              'Good job!',
              res.data.msg,
              'success',
            ).then((rest) => {
              if (rest.isConfirmed) {
                this.$router.go();
              }
              // console.log(rest);
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
    detailPerusahaan(a) {
      this.indexke = a;
      document.getElementById('modal2').style.display = 'block';
    },
    modaltambah() {
      console.log('a');
    },
    closemodal() {
      document.getElementById('modal2').style.display = 'none';
    },
    // anggota() {
    //   axios.get(`${process.env.VUE_APP_API}anggota`, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.token}`,
    //     },
    //   })
    //     .then((res) => {
    //       console.log(res);
    //       if (res.data.success) {
    //         this.dataPerusahaan = res.data;
    //       } else {
    //         this.$router.push('/logout');
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
  beforeCreate() {
    // anggota() {
    axios.get(`${process.env.VUE_APP_API}anggota`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          this.dataPerusahaan = res.data;
        } else {
          this.$router.push('/logout');
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // };
  },
};
</script>

<style>
.modals2{
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
  .modals2 p{
    margin: 0 0 5px 0;
  }
</style>
