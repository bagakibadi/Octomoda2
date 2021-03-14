<template>
  <div>
    <Navbar/>
    <div class="page-wrapper">
      <!-- Page Content-->
      <div class="page-content-tab">
        <div class="container-fluid">
          <div class="row my-3">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12 my-3">
                        <h1 class="text-center">Transportasi Darat</h1>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4 darat">
                        <button class="btn btn-primary">
                          <i class="fa fa-truck"></i> Ketersediaan Kendaraan
                        </button>
                      </div>
                      <div class="col-md-4 darat">
                        <button class="btn btn-primary">
                          <i class="fa fa-plane"></i> Port Handling
                        </button>
                      </div>
                      <div class="col-md-4 darat">
                        <button class="btn btn-primary">
                          <i class="fa fa-archive"></i>
                          Consul Barang
                        </button>
                      </div>
                      <div class="col-md-4 darat">
                        <button class="btn btn-primary">
                          <i class="fa fa-bus"></i>
                          Station Handling
                        </button>
                      </div>
                      <div class="col-md-4 darat">
                        <button class="btn btn-primary">
                          <i class="fa fa-ship"></i>
                          Sea Handling
                        </button>
                      </div>
                    </div>
                  </div>
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
import Navbar from '../components/StarterPage.vue';

export default {
  components: {
    Navbar,
  },

};
</script>

<style>
  .transport{
    padding: 50px;
    width: 100%;
  }
  .transport i {
    font-size: 90px;
  }
  .transport h1 {
    margin: 0;
    color: white;
  }
  .darat{
    margin: 10px 0;
  }
  .darat button {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    font-size: 18px;
    height: 106px;
  }
  .darat i{
    margin: 0 20px 0 0;
    font-size: 50px;
  }
</style>
