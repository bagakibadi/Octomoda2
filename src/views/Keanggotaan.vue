<template>
  <!-- eslint-disable max-len -->
    <div>
    <Navbar/>
        <div class="page-wrapper">

            <!-- Page Content-->
            <div class="page-content-tab">

                <div class="container-fluid mt-4">
                    <!-- Page-Title -->
                    <!-- <div class="row">
                        <div class="col-sm-12">
                            <div class="page-title-box">
                                <div class="float-right">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">Metrica</a></li>
                                        <li class="breadcrumb-item"><a href="javascript:void(0);">UI Kit</a></li>
                                        <li class="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>
                                <h4 class="page-title">Asosiasi</h4> -->
                            <!-- </div>end page-title-box -->
                        <!-- </div>end col -->
                    <!-- </div> -->
                    <!-- end page title end breadcrumb -->
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body" style="overflow-x: auto">
                                    <h4 class="mt-2 mb-4 header-title font-22">Data Keanggotaan</h4>
                                    <div class="d-flex justify-content-center mb-2">
                                        <div class="col-3">
                                            <select class="form-control">
                                                <option>Rayon</option>
                                                <option>Large select</option>
                                                <option>Small select</option>
                                            </select>
                                        </div>
                                        <div class="col-3">
                                            <select class="form-control">
                                                <option>Nama</option>
                                                <option>Large select</option>
                                                <option>Small select</option>
                                            </select>
                                        </div>
                                        <div class="col-3">
                                            <select class="form-control">
                                                <option>Status</option>
                                                <option>Large select</option>
                                                <option>Small select</option>
                                            </select>
                                        </div>
                                        <div class="col-3">
                                            <button type="button" class="btn btn-blue" data-toggle="modal" data-animation="bounce" data-target=".bs-example-modal-center"><i data-feather="activity"></i> Tampilkan Data</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body" style="overflow-x: auto">

                                    <h4 class="mt-2 mb-4 header-title font-22">Daftar Keanggotaan</h4>
                                    <!-- <p class="text-muted mb-3">DataTables has most features enabled by
                                        default, so all you need to do to use it with your own tables is to call
                                        the construction function: <code>$().DataTable();</code>.
                                    </p> -->

                                    <table id="datatable" class="table table-bordered nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                        <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Rayon</th>
                                            <th>Nama</th>
                                            <th>Status</th>
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
/* @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
@import url('https://cdn.datatables.net/1.10.23/css/dataTables.bootstrap5.min.css'); */
</style>
