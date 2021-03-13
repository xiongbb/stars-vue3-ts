<template>
  <div class="ui-stars">
    <span
      v-for="star in 5"
      :key="star"
      :class="['iconfont icon-Star', star <= starNum ? 'active' : '']"
      :style="{ fontSize: size + 'px' }"
      @click="setStarNum(star)"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStars } from "./hooks";

export default defineComponent({
  name: "Stars",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  setup(props, { emit }) {
    const { starNum, setStarNum } = useStars(props.num, () => {
      emit("onStarChange", starNum.value);
    });
    return {
      starNum,
      setStarNum,
    };
  },
});
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_2418386_jwi78f6gec.eot?t=1615636218457"); /* IE9 */
  src: url("//at.alicdn.com/t/font_2418386_jwi78f6gec.eot?t=1615636218457#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAM0AAsAAAAABvAAAALlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBfIF1ATYCJAMICwYABCAFhG0HLhsZBlFULTJkXxTGzoRQhFgnryNMeCUNv672DWhM3nD1yiwe/tuPdt/MrInEzetZNFlyKIVIgtOXlInexCueyX9j6dK1hc35blm1ppr+R/Jj59MC53EaIREKIUE4eoJnCNDVmt5moj6OAF0i9IMLGwWkGRywKoJwZeHKKo0kp+/v4HL6/xVQIPOAcptj4piAgaWB7oHRFmmDBOANYxe8wN0EGo3qK2xvzzeoK+xBgXjoOQbUC05FYZF6obZhZhFP1ahPj9Nb4En0/fhnGvUkNZmds3e1sWH+CycmX+00QLCW04PNI2MZKMRRY3BHSTBiSWOwbBIcKzP4RVUFanHUP0/UstObwTBkPhPLYz9qegIlaT8CHky6ESm/ZMgsNXMBwSHmhuFEjxfheLhTz7Qkhs9OhSMRBeSmZOrrqDKPGocwNt5Z4Rh2CR13h1Fsl0f1yxyC+Bh9ZG+ckwEX8jbe/Zaw0SNmP21oR+/RJ2mb/m4V3feA5kPwuxMO3Cfh8TL9p5Za80p71lO53P+uDymI3p89gdh9pHl4k8pR3PcvKzLNG7Tfp75kn3cpJGje2aabSR/aP6SHR/rxxXdK1gGqH3mfh370b3y84oue/+ubCvjuiyJ79aOgYWZQfzum4LeyBtYVg2OrUtFYjebkaNLAhEaNqGBrp7+p0p53iIZ6PW9irjOSQVZvGi2EZajRZAVq1VuDRkt285t0ESVRGrDoE0Bo9wVJq+eQtftBC+EXavT6h1rtkaHRSbBik9m4bSZkKNlofqBnJTG7Gm3GmRdynqEheU5EepDkngcnw3E5sqOYZIkx+cuZqjKyJBFuwX4Uhgmmkvhk6dBVTWejETcdaWglETRtEcSgiA2ZPiCPJRHjoLVqVj5/QRxPIYN0FNXpH4jIeZ2jiaHxAHQnjAcVPcohuRfHlFIMMZGIoC3Qk9AJJlDa3M1HLGrIneBPzYxQMx4qHG4vjn4gg5Vhy1I4hVk5VEMAAAAAAA==")
      format("woff2"),
    url("//at.alicdn.com/t/font_2418386_jwi78f6gec.woff?t=1615636218457")
      format("woff"),
    url("//at.alicdn.com/t/font_2418386_jwi78f6gec.ttf?t=1615636218457")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_2418386_jwi78f6gec.svg?t=1615636218457#iconfont")
      format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;

  &.icon-Star {
    transition: color 0.3s;
  }

  &.icon-Star:before {
    content: "\e748";
  }

  &.active {
    color: #fbab06;
  }
}
</style>