<template>
  <header id="header">
       <router-link to="/">RandomPost</router-link>
       <router-link to="/dashboard" tag="button">Dashboard</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style>
    #header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 60px;
        background: #202225;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    #header a{
       text-decoration: none;
       font-size: 30px;
       color: #fff;
       cursor: pointer;
       font-weight: bold;
    }
</style>