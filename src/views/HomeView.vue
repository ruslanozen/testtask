<template>
  <div class="home">
    <div class="flags">
      <div class="flag ukraine">
        <div class="yellow"></div>
        <div class="blue"></div>
      </div>
      <div class="flag japan">
        <div class="red"></div>
      </div>
      <div class="flag iceland">
        <div class="vertical stripe">
          <div class="red"></div>
        </div>
        <div class="horizontal stripe">
          <div class="red"></div>
        </div>
      </div>
      <div class="flag czech">
        <div class="blue"></div>
        <div class="white"></div>
        <div class="red"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.flags {
  display: flex;
  flex-direction: column;
  margin: 2rem;
  .flag {
    display: flex;
    width: 300px;
    height: 150px;
    box-shadow: 0 0 10px 1px lightgray;
    margin-bottom: 1rem;
  }
  /* Ukraine start */
  .ukraine {
    flex-direction: column;
    .yellow,
    .blue {
      width: 100%;
      height: 50%;
    }
    .yellow {
      background-color: yellow;
    }
    .blue {
      background-color: blue;
    }
  }
  /* Ukraine end */
  /* Japan start */
  .japan {
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
    .red {
      background-color: red;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  /* Japan end */
  /* Iceland start */
  .iceland {
    position: relative;
    background-color: blue;
    .stripe {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
    }
    .vertical {
      height: 100%;
      width: 30px;
      margin-left: 20%;
      .red {
        z-index: 100;
        height: 100%;
        width: 50%;
        background-color: red;
      }
    }

    .horizontal {
      position: absolute;
      width: 100%;
      height: 30px;
      margin-top: 60px;
      .red {
        width: 100%;
        height: 50%;
        background-color: red;
      }
    }
  }

  /* Iceland end */
  /* Czech start */
  .czech {
    position: relative;
    flex-direction: column;
    .blue {
      position: absolute;
      width: 0;
      height: 0;
      background-color: transparent;
      border-top: 75px solid transparent;
      border-bottom: 75px solid transparent;
      border-left: 110px solid blue;
    }
    .white {
      background-color: whitesmoke;
      height: 50%;
      width: 100%;
    }
    .red {
      height: 50%;
      width: 100%;
      background-color: red;
    }
  }
}
</style>
