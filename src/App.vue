<template>
  <div id="app">
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
</style>
