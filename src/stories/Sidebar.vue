<template>
    <div class="sidebar" :class="{ 'collapsed': collapsed }">
      <div class="header">
        <h2 class="title">{{ title }}</h2>
        <button class="toggle-btn" @click="collapsed = !collapsed">
          <i :class="{ 'fa-chevron-left': !collapsed, 'fa-chevron-right': collapsed }"></i>
        </button>
      </div>
      <ul class="menu" v-show="!collapsed">
        <li v-for="item in items" :key="item.id">
          <a :href="item.link">
            <i :class="item.icon"></i>
            <span>{{ item.label }}</span>
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
    props: {
      title: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        collapsed: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 16px;
    background-color: #f5f5f5;
    box-shadow: 0 0 5px rgba(5, 65, 100, 0.2);
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .title {
    margin: 0;
    font-size: 24px;
  }
  
  .toggle-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  .toggle-btn i {
    font-size: 14px;
    color: #333;
    transition: transform 0.2s ease;
  }
  
  .toggle-btn:hover i {
    transform: scale(1.1);
  }
  
  .collapsed .title {
    display: none;
  }
  
  .collapsed .menu li {
    margin-bottom: 4px;
  }
  
  .menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .menu li {
    margin-bottom: 8px;
  }
  
  .menu a {
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: #fff;
    border-radius: 4px;
    text-decoration: none;
    color: #333;
    transition: all 0.2s ease;
  }
  
  .menu a:hover {
    background-color: #2e2f2f;
    color: #fff;
  }
  
  .menu a i {
    margin-right: 8px;
    font-size: 16px;
    color: #333;
  }
  </style>
  