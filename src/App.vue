<template>
  <!-- <div>hello {{ name }}</div>
  <div v-text="channel"></div>
  <h2 v-html="place"></h2>
  <button v-bind:disabled="status">bind</button>
  <h2 v-bind:class="isPromoted && 'promoted'">Promoted movieeee</h2>

  <h2 v-bind:class="sold ? 'new' : 'old'">Promoted movieeee</h2>
  <p v-bind:class="['new', 'promoted']">jjjjjjjj</p>

  <h2 v-bind:style="style">stylee</h2>
  <h2 v-bind:style="[style1, style2]">stylee</h2>
  <h2 v-for="(name, index) in names" :key="name">{{ index }}{{ name }}</h2>
  <h2 v-for="name in fullname" :key="name">
    {{ name.firstname }}{{ name.last }}
  </h2>
  <h2 v-for="(value, key, index) in style1" :key="value">
    {{ key }}-{{ value }}-{{ index }}
  </h2>

  <h1>{{ add(1, 2, 3) }}</h1>

  <h2>{{ mult(3) }}</h2>
  <h1>{{ count }}</h1>
  <button v-on:click="count += 1">increment</button>
  <button @click="decrement,changeName($event)">decrement</button>


    <button v-on:click="increment(3)">increment by 3</button>
    <h1>Name{{name}}</h1>
<button v-on:click="changeName()">click</button> -->
  <!-- <div>
    <h1>{{ JSON.stringify(formValues, null, 2) }}</h1>
  </div> -->
  <h2>Formsss</h2>
  <!-- <form @submit="formSubmit">
    <div>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        v-model.trim="formValues.name"
      />
    </div>
    <div>
      <label>Profile summary</label>
      <input
        type="textarea"
        name="profile summary"
        placeholder=" Please enter "
        v-model="formValues.summary"
      />
    </div>
    <div>
      <label>country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select option</option>
        <option id="option" value="USA">USA</option>
        <option id="option" value="UAE">UAE</option>
        <option id="option" value="india">india</option>
      </select>

      <label>job location</label>
      <select id="job" multiple v-model="formValues.joblocation">
        <option value="">Select option</option>
        <option id="option" value="US">US</option>
        <option id="option" value="UA">UA</option>
        <option id="option" value="indi">indi</option>
      </select>
      <div>
        <input type="checkbox" v-model="formValues.remote" true-value="yes" false-value="no" /><label
          >open to work?</label
        >
      </div>


       <div>
        <input type="checkbox" v-model="formValues.skill"   /><label
          >Skill set</label
        >
      </div> <div>
        <input type="checkbox" v-model="formValues.skill"  value="js" /><label
          >js</label
        >
      </div> <div>
        <input type="checkbox" v-model="formValues.skill" value="css" /><label
          >css</label
        >
      </div>
    </div>
    <button>Submit</button>
  </form> -->

  <!-- <h2>{{ name }} - {{ channel }}</h2>
  <h1>{{ details }}</h1>
  <button @click="detailsChange"></button>
  <h3>Calc - {{ calc }}</h3>
  <button @click="data0.push({ count: 5, price: 10, skill: 'asfsdf' })">
    Calcnew
  </button>
  <template v-for="items in data0" :key="items.count">
    <h2 v-if="items.price > 5">{{ items.skill }}</h2>
  </template>
  <h3 v-for="item in greater" :key="item.count">{{ item }}</h3>

  <Watcher /> -->
  <Watcher :name="name" :channnel="channel" />
  <Article title="Articl tictlee lejhjgdesjfguehdjhjh" />
  <button @click="show = true">open the popup</button>
  <Popup v-show="show" @close="ClosePopup" />
  <InputCompo />
  <button @click="active ='TabA'">Tab A</button>
   <button @click="active ='TabB'">Tab B</button>
    <button @click="active ='TabC'"> Tab C</button>



    <component :is="active" />
  <!-- <TabA v-if="active === 'TabA'"/>  <TabB v-if="active === 'TabB'"/>
  <TabC v-if="active === 'TabC'" /> -->

</template>
<script>
import Watcher from "./components/Watcher.vue";
import Article from "./components/Article.vue";
import Popup from "./components/Popup.vue";
import InputCompo from "./components/Input.vue";
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
import TabC from "./components/TabC.vue";

export default {
  name: "App",
  components: {
    Watcher,
    Article,
    Popup,InputCompo,TabA,TabB,TabC
  },
  data() {
    return {
      active:'TabA',
      show: false,
      data0: [
        { count: 1, price: 3, skill: "Activating" },
        { count: 4, price: 3, skill: "Using" },
        { count: 2, price: 13, skill: "Analyzing" },
      ],
      formValues: {
        name: "",
        summary: "",
        country: "",
        joblocation: [],
        remote: "no",
        skill: [],
      },
      name: "jasna",
      channel: "its me jpk",
      place: "<b>bnglr </b>",
      status: true,
      isPromoted: true,
      sold: false,
      names: ["jesu", "jiji", "anvi"],

      fullname: [
        { firstname: "jasna", last: "P K" },
        { firstname: "jiji", last: "P K" },
        { firstname: "greeshma", last: "P K" },
      ],
      count: 0,
      style: {
        color: "blue",
        backgroundColor: "chocolate",
      },
      style1: {
        color: "yellow",
        backgroundColor: "chocolate",
      },
      style2: {
        color: "black",
        backgroundColor: "chocolate",
      },
      baseMultiplier: 5,
    };
  },
  methods: {
    ClosePopup(formValue) {this.show=false;
      console.log(formValue);
    },
    changeName() {
      this.name = "jesu";
    },
    add(a, b, c) {
      return a + b + c;
    },
    mult(num) {
      return 2 * this.baseMultiplier * num;
    },
    increment(num) {
      this.count = this.count + num;
    },
    formSubmit(event) {
      event.preventDefault();
      console.log(this.formValues);
    },
    detailsChange() {
      this.details = "jeeeeeeenniiiii jjjjjjjjjjjjjjj";
    },
  },

  computed: {
    details: {
      get() {
        return this.name + this.channel;
      },
      set(value) {
        const namess = value.split("");
        this.name = namess[0];
        this.channel = namess[1];
      },
    },
    calc() {
      return this.data0.reduce((acc, curre) => (acc = acc + curre.price), 0);
    },
    greater() {
      console.log(
        "this.data0.filter((item)=> item.price > 5",
        this.data0.filter((item) => item.price > 5)
      );
      return this.data0.filter((item) => item.price > 5);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.promoted {
  text-decoration-color: aquamarine;
}
.new {
  color: blueviolet;
}
.old {
  color: red;
}
.style {
  color: blue;
  background-color: chocolate;
}
</style>
