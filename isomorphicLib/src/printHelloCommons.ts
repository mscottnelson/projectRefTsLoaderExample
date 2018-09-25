import { IHelloCommons } from "./some-interface/IHelloCommons";

export interface IHelloCommonsLocal {
  anotherHelloFunc(hello: string, world: any): void;
}

export class HelloCommons {
  str: string;

  /**
  * Stores a string and provides a method for printing that string to stdout.
  * 
  * @param str - A string stored in HelloCommons for later retrieval.
  */
  constructor(str: string){
    this.str = str;
  }
  
  /**
   * Prints the current state of HelloCommons str property to stdout.
   */
  do = () => {
    console.log(this.str);
  }
}

export class HelloInterfaceImplementerFromCommons implements IHelloCommons, IHelloCommonsLocal {
  anotherHelloFunc = (hello:string, world:string) => {
    console.log(hello,world);
  }
}

const first = new HelloCommons("hello from Commons!");
const second = new HelloInterfaceImplementerFromCommons();

first.do();
second.anotherHelloFunc("Hey","world");