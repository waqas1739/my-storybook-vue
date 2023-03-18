<template>
    <div>
      <label :for="id">{{ label }}</label>
      <input :type="type" :id="id" :placeholder="placeholder" v-model="value" @input="inputHandler">
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextField',
    props: {
      id: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
    },
    methods: {
      inputHandler(event) {
        this.$emit('input', event.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
  
  input {
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  