import {DueStamp} from "../lib/util/DueStamp";
import { GithubIssue } from "../../dist/lib/github/GithubIssue";

describe("util", ()=>{
  describe("DueStamp", ()=>{
    test('modiry title', ()=>{
      let title:string = "test";
  
      expect(DueStamp.modify(title, '2020.03.25')).toEqual("test DUE:(2020.03.25)");
    });

    test('caluculate due', ()=>{
      let title:string = "test DUE:(2020.03.25)";

      expect(DueStamp.calculate(title, 10, 'day')).toEqual("test DUE:(2020.1.11)");
    });

    test('remove due', ()=>{
      let title:string = DueStamp.modify("test", "2020.03.25");

      expect(DueStamp.remove(title)).toEqual("test");
    });

  });
})
