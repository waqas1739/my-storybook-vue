<template>
    <div class="avatar">
      <img :src="src" :alt="alt" />
    </div>
  </template>
  
  <script>
  export default {
    name: "Avatar",
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  