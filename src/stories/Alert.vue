<template>
    <div class="alert" :class="alertClass">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "Alert",
    props: {
      type: {
        type: String,
        default: "info",
        validator: function (value) {
          return ["info", "success", "warning", "error"].indexOf(value) !== -1;
        },
      },
    },
    computed: {
      alertClass: function () {
        return "alert-" + this.type;
      },
    },
  };
  </script>
  
  <style scoped>
  .alert {
    padding: 15px;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .alert-info {
    background-color: #e7f3fe;
    color: #2980b9;
    border: 1px solid #bce8f1;
  }
  
  .alert-success {
    background-color: #ebf8cc;
    color: #4f8a10;
    border: 1px solid #c5e9b5;
  }
  
  .alert-warning {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
  }
  
  .alert-error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
  </style>
  