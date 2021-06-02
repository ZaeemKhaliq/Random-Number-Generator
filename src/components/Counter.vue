<template>
  <br />
  <h4 style="margin: 0;">Change color of text</h4>
  <input type="text" placeholder="Enter Color..." v-model="setColor" />
  <h1 :style="{ color: $store.state.color }" style="font-size: 3rem;">
    {{ $store.state.counter }}
  </h1>
  <p style="margin: 0;" v-if="$store.state.status == 'loading'">
    Generating Number...
  </p>
  <p style="color: red" v-if="$store.state.status == 'error'">
    Error generating number! There maybe problem with your network or the usage
    quota may have reached its limit.
  </p>
  <div style="width: 70%; text-align: left; margin: 0 auto;">
    <p class="info">
      GENERATED NUMBER: <strong>{{ $store.state.generatedNum }}</strong>
    </p>
    <p class="info">
      ACTION: <strong>{{ $store.state.action }}</strong>
    </p>
  </div>
  <button
    @click="$store.dispatch('increaseCounter')"
    :disabled="$store.state.status == 'loading'"
  >
    +
  </button>
  <button
    @click="$store.dispatch('decreaseCounter')"
    :disabled="$store.state.status == 'loading'"
  >
    -
  </button>
  <p>
    {{ $store.state.counter }} <sup>2</sup> =
    {{ $store.getters.counterSquared }}
  </p>
  <p>{{ $store.state.counter }} <sup>3</sup> = {{ cube }}</p>
  <p>{{ $store.state.counter }} <sup>4</sup> = {{ quad }}</p>
</template>

<script>
import { computed, watch, watchEffect } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    let cube = computed(() => {
      return store.state.counter * store.state.counter * store.state.counter;
    });

    let quad = computed(() => {
      return (
        store.state.counter *
        store.state.counter *
        store.state.counter *
        store.state.counter
      );
    });

    return { cube, quad };
  },
  computed: {
    setColor: {
      get() {
        return this.$store.state.color;
      },
      set(newValue) {
        this.$store.commit("setColor", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
}
.info {
  font-size: 1.1rem;
  margin: 10px 0px;
}
</style>
