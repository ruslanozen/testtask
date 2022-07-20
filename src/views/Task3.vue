<template>
  <div class="task3">
    <div class="container">
      <div class="search">
        <input
          type="text"
          v-model="value"
          placeholder="Search universities...    "
        />
        <button class="btn" @click="fetchUniversities">Search</button>
        <button class="btn red" @click.prevent="clear">Reset</button>
      </div>
      <ul class="results">
        <li class="list-item" v-for="uni in universities" :key="uni">
          <div class="wrapper">
            <h3 class="name">{{ uni.name }}</h3>
            <div class="country"><b>Country:</b> {{ uni.country }}</div>
            <div class="state"><b> State:</b> {{ uni.state }}</div>
            <div class="web-pages">
              <b> Web pages:</b>
              <ul v-for="page in uni.web_pages" :key="page">
                <li>
                  <a :href="page">{{ page }}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <div class="item error" v-if="!universities || universities == 0">
          <p>No results found!</p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore, mapGetters } from "vuex";
import { ref } from "vue";

export default {
  name: "taskView",
  setup() {
    const store = useStore();

    const value = ref("");

    const fetchUniversities = () => {
      store.dispatch("fetchUniversities", {
        value: value.value,
      });
    };

    const clear = () => {
      store.dispatch("fetchUniversities", {
        value: null,
      });
      value.value = "";
    };

    return {
      value,
      fetchUniversities,
      clear,
    };
  },
  computed: {
    ...mapGetters(["universities"]),
  },
};
</script>

<style lang="scss" scoped>
.task3 {
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    margin-inline: auto;
    border: 1px solid gray;
    .search {
      margin: 2rem;
      align-self: flex-start;
      input {
        height: 30px;
        border: 1px solid gray;
        border-radius: 5px;
        padding-left: 0.5rem;
      }
      .btn {
        height: 30px;
        padding: 1px 10px 1px 10px;
        border-radius: 5px;
        border: none;
        margin-left: 1rem;
        background-color: #42b983;
        color: #fff;
        &:hover {
          background-color: #408f6b;
          transition: 0.3s ease-in-out;
        }
      }
      .red {
        background-color: tomato;
        &:hover {
          background-color: rgb(190, 85, 67);
        }
      }
    }
    .results {
      margin: 3rem;
      .list-item {
        list-style: decimal;
      }
      .wrapper {
        margin: 2rem 0;
        text-align: left;
        ul {
          margin-left: 2rem;
        }
      }
    }
  }
}
</style>
