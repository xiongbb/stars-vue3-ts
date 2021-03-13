import { ref } from "vue";
export function useStars(num: Number, callback: () => void) {
  const starNum = ref(num);

  const setStarNum = (num: Number): void => {
    starNum.value = num;
    callback();
  };

  return {
    starNum,
    setStarNum,
  };
}
