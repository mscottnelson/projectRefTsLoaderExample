import { HelloInterfaceImplementerFromCommons, HelloCommons } from "../../isomorphicLib/src/printHelloCommons";
import { helloNode } from "../../backendLib/src/printHelloNode";

const p1 = new HelloInterfaceImplementerFromCommons();
const p2 = new HelloCommons("Hello From backendProject via isomorphicLib!");
const p3 = helloNode;

p1.anotherHelloFunc("Using class method", "anotherHelloFunc");
p2.do();
p3("Hello from backendProject via backendLib using isomorphicLib!");