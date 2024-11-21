<template>
  <div><h2>Tab C content</h2></div>
  {{count}}
  <button @click="increment">increment</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "TabC",
  setup(){

const count=ref(0);
const increment=()=>{
    count.value +=1
}
return{
    count,increment
}

  }
};
</script>

<style lang="scss" scoped></style>
