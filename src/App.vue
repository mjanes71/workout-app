<template>
  <div id="app">
  <nav>
   <router-link :to="{ name: 'Home'}">Home |</router-link> 
  <router-link :to="{ name: 'About'}"> About</router-link>
  </nav>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
nav {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  background-color: #E5E7E9;
}

</style>
