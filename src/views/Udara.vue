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
</style>
