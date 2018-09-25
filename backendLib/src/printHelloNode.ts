import { HelloCommons } from "../../isomorphicLib/src/printHelloCommons";

export const helloNode = (str: string) => {
  let hey = new HelloCommons(str);
  hey.do();
}