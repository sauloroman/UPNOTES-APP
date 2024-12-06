import { envs } from "../plugins/envs.plugin";

interface OnlyNumbers {
  durationMin: number;
  onlyNumbers: (value: number) => string;
  randomNumber: (startValue: number, endValue: number) => number;
}

const verificationCodeDurationMin = envs.VERIFICATION_CODE_DURATION_MIN

export const codeGenerator: OnlyNumbers = {

  durationMin: verificationCodeDurationMin,

  onlyNumbers(quantityOfNumbers: number): string {
    let finalNumber = '';

    for (let i = 0; i < quantityOfNumbers; i++) {
      const randomIndex = this.randomNumber(0, 9);
      finalNumber += randomIndex;
    }

    return finalNumber;
  },

  randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  },
};
