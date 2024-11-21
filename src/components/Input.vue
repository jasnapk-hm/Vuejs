<template>
  <div>

    <input :value="modalValue" @input="$emit('update:modalValue',$event.target.value)"/>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Input",
  props:{
    modalValue:String
  }
};
</script>

<style lang="scss" scoped></style>
