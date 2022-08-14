<template>
  <div class="message"  :class="{'success': props.type === 'success', 'error' : props.type==='error'}">{{props.text}}</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "default",
  },
  
});


</script>

<style lang="less" scoped>
.message {
  position: fixed;
  left: 50%;
  top: 50px;
  transform: translate3d(-50%, 0, 0);
  background: #000;
  background: #66b1ff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  animation: move 0.3s;
  transition: all 0.8s;
  z-index: 999;
}

.success{
    background-color: #85ce61;
}

.error{
    background-color: #f56c6c;
}
@keyframes move {
  0% {
    top: 0;
    opacity: 0;
  }
  100% {
    top: 30px;
    opacity: 1;
  }
}
</style>
