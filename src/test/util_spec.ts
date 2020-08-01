import {DueStamp} from "../lib/util/DueStamp";

describe("GithubApi", function() {
  test('update issue', async function(){
    const issueNumber:number = 3;

    let title:string = "test";

    expect(DueStamp.modify(title, '2020.03.25')).toEqual("test DUE:(2020.03.25)");
  });
});
