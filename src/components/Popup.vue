<template>
  <div>
    <h1>POP UP banner</h1>
    <button @click="$emit('close',formValue)">close</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Popup",
  emits:['close'],
  data(){
    return{
        formValue:{
            name:"Kukkuu",
            place:"Mayyil"
        }
    }
  }
};
</script>

<style lang="scss" scoped></style>
