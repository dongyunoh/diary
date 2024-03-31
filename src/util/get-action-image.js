import action1 from "./../assets/action1.png";
import action2 from "./../assets/action2.png";
import action3 from "./../assets/action3.png";
import action4 from "./../assets/action4.png";
import action5 from "./../assets/action5.png";
import action6 from "./../assets/action6.png";

export function getActionImage(actionId) {
  switch (actionId) {
    case 1:
      return action1;
    case 2:
      return action2;
    case 3:
      return action3;
    case 4:
      return action4;
    case 5:
      return action5;
    case 6:
      return action6;
    default:
      return null;
  }
}
