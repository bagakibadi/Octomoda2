<template>
  <!-- eslint-disable max-len -->
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
                        <h1 class="text-center">Ketersediaan Kendaraan</h1>
                        <div class="d-flex justify-content-end">
                            <button @click="openTambah" class="btn btn-success" style="right: 0;position: relative;">+ Tambah</button>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <table id="datatable2" class="table table-bordered nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                <thead>
                                    <tr>
                                        <th>Kapasitas Truk</th>
                                        <th>Merk</th>
                                        <th>No. Polisi</th>
                                        <th>Tipe</th>
                                        <th>Kecepatan Max</th>
                                        <th>Berat Max</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody v-for="(item, index) in kendaraan" :key="index.id">
                                    <tr>
                                        <td>{{item.deskripsi.deskripsi}}</td>
                                        <td>{{item.deskripsi.merk}}</td>
                                        <td>{{item.no_polisi}}</td>
                                        <td>{{item.ukuran.ukuran_karoseri.tipe}}</td>
                                        <td>{{item.spesifikasi.kecepatan_max}}</td>
                                        <td>{{item.berat.berat_max}}</td>
                                        <td>
                                            <button class="btn btn-warning" @click="detailKendaraan(index)">Detail</button>
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
        </div>
      </div>
    </div>
    <div class="modals" id="modal">
      <div class="overlay-modal"></div>
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-7">
          <div class="card">
            <div class="card-body" style="max-height: 500px;">
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
                <h1>{{modaljudul}}</h1>
              </div>
              <div class="row" v-if="indexke !== null" style="max-height: 350px;overflow-y: auto;">
                <div class="col-md-12">
                  <h6>Deskripsi</h6>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="kapasitas">Kapasitas Truk</label>
                        <input type="text" name="kapasitas" id="kapasitas" class="form-control" v-model="kendaraan[indexke].deskripsi.deskripsi">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="merk">Merk</label>
                        <input type="text" name="merk" id="merk" class="form-control" v-model="kendaraan[indexke].deskripsi.merk">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="nodeskripsi">No</label>
                        <input type="text" name="nodeskripsi" id="nodeskripsi" class="form-control" v-model="kendaraan[indexke].deskripsi.no">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="nopol">No Polisi</label>
                        <input type="text" name="nopol" id="nopol" class="form-control" v-model="kendaraan[indexke].no_polisi">
                    </div>
                </div>
                <div class="col-md-12">
                    <h6>Spesifikasi</h6>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="kapsilinder">Kap Silinder</label>
                        <input type="text" name="kapsilinder" id="kapsilinder" class="form-control" v-model="kendaraan[indexke].spesifikasi.kap_silinder">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="kecmax">Kecepatan Max</label>
                        <input type="text" name="kecmax" id="kecmax" class="form-control" v-model="kendaraan[indexke].spesifikasi.kecepatan_max">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="model">Model Mesin</label>
                        <input type="text" name="model" id="model" class="form-control" v-model="kendaraan[indexke].spesifikasi.model_mesin">
                    </div>
                </div>
                <div class="col-md-12">
                    <h6>Ukuran Karoseri</h6>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="tipekaro">Tipe</label>
                        <input type="text" name="tipekaro" id="tipekaro" class="form-control" v-model="kendaraan[indexke].ukuran.ukuran_karoseri.tipe">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="dalamkaro">Dalam</label>
                        <input type="text" name="dalamkaro" id="dalamkaro" class="form-control" v-model="kendaraan[indexke].ukuran.ukuran_karoseri.dalam">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="panjangkaro">Panjang</label>
                        <input type="text" name="panjangkaro" id="panjangkaro" class="form-control" v-model="kendaraan[indexke].ukuran.ukuran_karoseri.panjang">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="Lebarkaro">Lebar</label>
                        <input type="text" name="Lebarkaro" id="Lebarkaro" class="form-control" v-model="kendaraan[indexke].ukuran.ukuran_karoseri.lebar">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="Tinggikaro">Tinggi</label>
                        <input type="text" name="Tinggikaro" id="Tinggikaro" class="form-control" v-model="kendaraan[indexke].ukuran.ukuran_karoseri.tinggi">
                    </div>
                </div>
                <div class="col-md-12">
                    <h6>Ukuran Mobil</h6>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="Panjangmob">Panjang</label>
                        <input type="text" name="Panjangmob" id="Panjangmob" class="form-control" v-model="kendaraan[indexke].ukuran.ukuran_mobil.panjang">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="Lebarmob">Lebar</label>
                        <input type="text" name="Lebarmob" id="Lebarmob" class="form-control" v-model="kendaraan[indexke].ukuran.ukuran_mobil.lebar">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="Tinggimob">Tinggi</label>
                        <input type="text" name="Tinggimob" id="Tinggimob" class="form-control" v-model="kendaraan[indexke].ukuran.ukuran_mobil.tinggi">
                    </div>
                </div>
              </div>
              <div class="row" v-else style="max-height: 350px;overflow-y: auto;">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="kapasitas">Kapasitas Truk</label>
                    <select name="kapasitas" id="kapasitas" v-model="tambah.kapasitas" class="form-control">
                        <option :value="[item.id, index]" v-for="(item, index) in listkendaraan" :key="index.id">{{item.deskripsi.deskripsi}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                    <div class="row" v-if="listke">
                        <div class="col-md-12">
                            <h6>Ukuran Karoseri</h6>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="tipe">Tipe</label>
                                <input type="text" name="tipe" id="tipe" class="form-control" v-model="listke.ukuran.ukuran_karoseri.tipe">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="dalamkar">Dalam</label>
                                <input type="text" name="dalamkar" id="dalamkar" class="form-control" v-model="listke.ukuran.ukuran_karoseri.dalam">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="Panjangkar">Panjang</label>
                                <input type="text" name="Panjangkar" id="Panjangkar" class="form-control" v-model="listke.ukuran.ukuran_karoseri.panjang">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="Lebarkar">Lebar</label>
                                <input type="text" name="Lebarkar" id="Lebarkar" class="form-control" v-model="listke.ukuran.ukuran_karoseri.lebar">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="Tinggikar">Tinggi</label>
                                <input type="text" name="Tinggikar" id="Tinggikar" class="form-control" v-model="listke.ukuran.ukuran_karoseri.tinggi">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <h6>Ukuran Mobil</h6>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="Panjangmob">Panjang</label>
                                <input type="text" name="Panjangmob" id="Panjangmob" class="form-control" v-model="listke.ukuran.ukuran_mobil.panjang">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="Lebarmob">Lebar</label>
                                <input type="text" name="Lebarmob" id="Lebarmob" class="form-control" v-model="listke.ukuran.ukuran_mobil.lebar">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="Tinggimob">Tinggi</label>
                                <input type="text" name="Tinggimob" id="Tinggimob" class="form-control" v-model="listke.ukuran.ukuran_mobil.tinggi">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <h6>Berat</h6>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="kosong">Berat Kosong</label>
                                <input type="text" name="kosong" id="kosong" class="form-control" v-model="listke.berat.berat_kosong">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="bmax">Berat Max</label>
                                <input type="text" name="bmax" id="bmax" class="form-control" v-model="listke.berat.berat_max">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <h6>Spesifikasi</h6>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="silinder">Kap Silinder</label>
                                <input type="text" name="silinder" id="silinder" class="form-control" v-model="listke.spesifikasi.kap_silinder">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="Kecepatan">Kecepatan Max</label>
                                <input type="text" name="Kecepatan" id="Kecepatan" class="form-control" v-model="listke.spesifikasi.kecepatan_max">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="Tenaga">Tenaga Max</label>
                                <input type="text" name="Tenaga" id="Tenaga" class="form-control" v-model="listke.spesifikasi.tenaga_max">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="model">Model Mesin</label>
                                <input type="text" name="model" id="model" class="form-control" v-model="listke.spesifikasi.model_mesin">
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
import axios from 'axios';
import Navbar from '../components/StarterPage.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      kendaraan: [],
      indexke: null,
      modaljudul: null,
      tambah: {},
      listkendaraan: [],
      listke: null,
    };
  },
  computed: {
    ketersediaan() {
      return this.tambah.kapasitas;
    },
  },
  methods: {
    openTambah() {
      document.getElementById('modal').style.display = 'block';
      this.indexke = null;
      this.modaljudul = 'Tambah Kendaraan';
    },
    closemodal() {
      document.getElementById('modal').style.display = 'none';
    },
    detailKendaraan(e) {
      this.modaljudul = 'Detail Kendaraan';
      this.indexke = e;
      document.getElementById('modal').style.display = 'block';
    },
  },
  beforeCreate() {
    axios.get(`${process.env.VUE_APP_API}ketersediaan_kendaraan`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => {
        if (res.data.success) {
          this.kendaraan = res.data.ketersediaan_kendaraan;
        } else {
          this.$router.push('logout');
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get(`${process.env.VUE_APP_API}kendaraan`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => {
        this.listkendaraan = res.data.kendaraan;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  watch: {
    ketersediaan(val) {
      // console.log(val);
      this.listke = this.listkendaraan[val[1]];
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
