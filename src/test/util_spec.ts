import DueStamp from "../lib/util/DueStamp";
import { GithubIssue } from "../lib/github/GithubIssue";

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

    test('modify issue due', ()=>{
      let i: GithubIssue = new GithubIssue();
      i.title = "test";

      i.due.modify('2020.03.25');
      expect(i.title).toEqual('test DUE:(2020.03.25)');

      i.due.modify('2020.03.28');
      expect(i.title).toEqual('test DUE:(2020.03.28)');
    });

    test('remove issue due', ()=>{
      let i: GithubIssue = new GithubIssue();
      i.title = "test";

      i.due.modify('2020.03.25');
      expect(i.title).toEqual('test DUE:(2020.03.25)');

      i.due.remove();
      expect(i.title).toEqual('test');
    });

    test('culculate issue due', ()=>{
      let i: GithubIssue = new GithubIssue();
      i.title = "test";

      i.due.modify('2020.03.25');
      expect(i.title).toEqual('test DUE:(2020.03.25)');

      i.due.calculate(10, 'day');
      expect(i.title).toEqual('test DUE:(2020.1.11)');
    });
  });
})
