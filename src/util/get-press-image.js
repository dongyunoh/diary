import chest_action1 from "./../assets/chest_action1.png";

export function getPressImage(pressId) {
  switch (pressId) {
    case 1:
      return chest_action1;
    default:
      return null;
  }
}
