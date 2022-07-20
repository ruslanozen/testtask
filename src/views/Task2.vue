<template>
  <div class="task2">
    <div class="wrapper">
      <div
        class="image"
        :class="{ active: isActive }"
        v-for="image in images"
        :key="image"
      >
        <img
          :src="image"
          alt=""
          @click.prevent="
            {
              this.isActive = true;
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskView",
  data() {
    return {
      isActive: false,
      images: [
        require("@/assets/1.jpg"),
        require("@/assets/2.jpg"),
        require("@/assets/3.jpg"),
        require("@/assets/4.jpg"),
        require("@/assets/5.jpg"),
        require("@/assets/6.jpg"),
        require("@/assets/7.jpg"),
        require("@/assets/8.jpg"),
        require("@/assets/9.jpg"),
        require("@/assets/10.jpg"),
        require("@/assets/11.jpg"),
        require("@/assets/12.jpg"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.task2 {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  .wrapper {
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: auto auto auto auto;
    margin-inline: auto;
    gap: 20px;
    width: 80vw;
    .image {
      width: 200px;
      height: 200px;
      border: 5px solid darkgray;
      border-radius: 50%;
      align-self: center;
      justify-self: center;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      &:nth-child(4n + 1) {
        border: 5px solid red;
      }
      &:hover {
        cursor: pointer;
        border: 5px solid yellow;
        transform: rotate(45deg);
        transition: 1s ease-in;
      }
    }
    .active {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 0;
      &:hover {
        transform: none;
        border: none;
      }
      img {
        border-radius: 0;
        max-width: 80%;
      }
      &:nth-child(4n + 1) {
        border: none;
      }
    }
  }
}

@media only screen and (max-width: 900px) {
  .task2 {
    .wrapper {
      grid-template-columns: auto auto;
      .image:nth-child(2n + 1) {
        border: 5px solid red;
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  .task2 {
    .wrapper {
      grid-template-columns: auto;
      .image:nth-child(1n + 1) {
        border: 5px solid red;
      }
    }
  }
}
</style>
