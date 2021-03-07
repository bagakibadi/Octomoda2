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
            </div>
            <!-- end page content -->
        </div>
        <!-- end page-wrapper -->
        </div>
</template>

<script>
/* eslint-disable max-len */

import Swal from 'sweetalert2';
import axios from 'axios';
import Navbar from '../components/StarterPage.vue';

export default {
  data() {
    return {
      dataAsosiasi: null,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    unapprove(a, b) {
      console.log(a);
      console.log(b);
      Swal.fire({
        title: `Batalkan Verifikasi Ke Asosiasi ${b}`,
        // text: `Yakin Verifikasi Asosiasi ${b}`,
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
        // icon: 'warning',
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
          this.dataAsosiasi = res.data.anggota.asosiasi;
          // console.log(res);
          // const table = document.getElementById('asosiasitable');
          // $(table).empty();
          // for (let i = 0; i < res.data.anggota.asosiasi.length; i += 1) {
          //   if (res.data.anggota.asosiasi[i].approved === 1) {
          //     $(table).append(`<tr><td><a href="asosiasi/${res.data.anggota.asosiasi[i].id}" target="_blank"><div class="d-flex logoasosiasi"><img src="${res.data.anggota.asosiasi[i].logo_asosiasi}"><p>${res.data.anggota.asosiasi[i].nama}</p></div></a></td><td>${res.data.anggota.asosiasi[i].email}</td><td>${res.data.anggota.asosiasi[i].telp}</td><td>${res.data.anggota.asosiasi[i].alamat}</td><td><button class="btn btn-danger">Batalkan</button></td></tr>`);
          //   } else {
          //     $(table).append(`<tr><td><a href="asosiasi/${res.data.anggota.asosiasi[i].id}" target="_blank"><div class="d-flex logoasosiasi"><img src="${res.data.anggota.asosiasi[i].logo_asosiasi}"><p>${res.data.anggota.asosiasi[i].nama}</p></div></a></td><td>${res.data.anggota.asosiasi[i].email}</td><td>${res.data.anggota.asosiasi[i].telp}</td><td>${res.data.anggota.asosiasi[i].alamat}</td><td><button class="btn btn-primary" @click="approve(${res.data.anggota.asosiasi[i].id})">Konfirmasi</button></td></tr>`);
          //   }
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.data();
  },
};
</script>

<style>
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
/* @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
@import url('https://cdn.datatables.net/1.10.23/css/dataTables.bootstrap5.min.css'); */
</style>
