<template>
  <!-- eslint-disable max-len -->
    <div>
    <Navbar/>
        <div class="page-wrapper">

            <!-- Page Content-->
            <div class="page-content-tab">

                <div class="container-fluid mt-4">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body" style="overflow-x: auto">

                                    <h4 class="mt-2 mb-4 header-title font-22">Menunggu Konfirmasi</h4>
                                    <table id="datatable" class="table table-bordered nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                        <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Rayon</th>
                                            <th>Nama</th>
                                            <th>Detail</th>
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
                                                  </p>
                                                </div>
                                              </a>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                              <button class="btn btn-danger" >Batalkan</button>
                                              <button class="btn btn-primary">Konfirmasi</button>
                                            </td>
                                          </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div> <!-- end col -->
                    </div> <!-- end row -->
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
                                        <h1>Detail Anggota</h1>
                                    </div>
                                    <div class="d-flex justify-content-between my-5">
                                        <div class="col-4">
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
                                        <div class="col-4">
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
                                        <div class="col-4">
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
                </div><!-- container -->
            </div>
            <!-- end page content -->
        </div>
        <!-- end page-wrapper -->
    </div>
</template>

<script>
import Navbar from '../components/StarterPage.vue';

export default {
  components: {
    Navbar,
  },
  methods: {
    modaltambah() {
      document.getElementById('modal').style.display = 'block';
    },
    closemodal() {
      document.getElementById('modal').style.display = 'none';
    },
  },
};

</script>

<style>
    .card{
        border-radius: 10px;
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
  .modals .card{
  max-height: 650px;
  overflow: hidden;
  /* overflow-y: auto; */
}
/* @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
@import url('https://cdn.datatables.net/1.10.23/css/dataTables.bootstrap5.min.css'); */
</style>
