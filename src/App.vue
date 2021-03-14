<template>
  <div id="app">
    <div class="loading" id="loading">
      <div class="overlay-modal"></div>
      <i class="fa fa-spinner fa-spin"></i>
      <h1>Loading</h1>
    </div>
    <router-view/>
  </div>
</template>

<style>
  .loading{
    z-index: 9999;
    width: 100%;
    height: 100vh;
    position: fixed;
    display: none;
    align-items: center;
    justify-content: center;
  }
  .loading i{
    font-size: 30px;
    position: relative;
    padding: 0 10px 0 0;
  }
  .loading h1{
    position: relative;
  }
  .modals .h-100, .modals2 .h-100, .modals3 .h-100 {
    overflow-x: auto;
  }
</style>
