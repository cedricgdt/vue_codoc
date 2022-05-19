<script setup>
import ProfileIcon from '../icons/ProfileIcon.vue'
import CodocIcon from '../icons/CodocIcon.vue'
</script>

<template>
  <div class="navbar">
    <div class="menu">
      <div class="logo">
        <CodocIcon />
      </div>
      <ul class="menu-list">
        <li class="menu-list-item">Recherche</li>
        <li class="menu-list-item">Cohortes</li>
        <li class="menu-list-item">Export</li>
        <li class="menu-list-item">Admin</li>
      </ul>
    </div>
    <div class="user">
      <ProfileIcon />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px 0px;
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(19, 34, 57, 0.16);
  z-index: 1;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo {

}
.menu-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.menu-list-item {
  list-style: none;
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #686F78;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
  padding: 12px 16px;

}
.menu-list-item:first-child {
    border-bottom: 2px solid #233C73;
    color: #233C73;
}
.user {

}

</style>
