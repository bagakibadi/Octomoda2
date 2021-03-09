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
                  <h3 class="page-title mb-4">Data Perusahaan</h3>
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
                      <button class="btn btn-primary" @click="loading"><i class="fa fa-search"></i> Tampilkan Data</button>
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
                    <tbody v-for="(data,index) in dataPerusahaan.anggota.perusahaan" :key="index.id">
                      <tr>
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
                            <button class="btn btn-danger" v-else>Unapprove</button>
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
                <div class="row">
                  <div class="col-md-4">
                    <p>Nama :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].nama}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>Nama Inggris :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].nama_ing}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>Email :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].email}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>No ID :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].no_id}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>No. HP :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].no_wa}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>Alamat :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].alamat}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>Provinsi :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].provinsi.keterangan}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>Kabupaten/Kota :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].kabupaten.keterangan}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>Kode Pos</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].kode_pos}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>NIB :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].nib}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>NPWP :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].npwp}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>No. Kemenkumham :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].no_kemenkumham}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>No. Akta Notaris :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].no_akta_notaris}}</p>
                  </div>
                  <div class="col-md-4">
                    <p>Website :</p>
                    <p class="font-weight-bold">{{dataPerusahaan.anggota.perusahaan[indexke].website}}</p>
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
    approve(e) {
      axios.get(`${process.env.VUE_APP_API}approve/perusahaan?id=${e}`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => {
          console.log(res);
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
    anggota() {
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
    },
  },
  created() {
    this.anggota();
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
