<template>
  <header>
    <h1>This is the WatcherComponent</h1>
    <h2>volumn tracker {{ volumn }}</h2>
    <button @click="volumn = volumn + 1">increment volumn</button>
    <button @click="volumn = volumn - 1">decrement volumn</button>

    <h1>hello {{name}} {{channnel}}</h1>
  </header>
</template>

<script>
export default {
  name: "WatcherComponent",
  props:['name','channnel'],
  data() {
    return {
      volumn: 0,
    };
  },
  watch: {
    volumn(newValue, old) {
      if (newValue > old && newValue == 16) {
        alert("reached to the max ");
      }
    },
  },
};
</script>
