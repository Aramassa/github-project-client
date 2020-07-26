import {GithubApi} from "../lib/github/GithubApi"

const projectId:string = "4038195";
const apiTest1:GithubApi = new GithubApi("Aramassa", "github-project-due-test");

describe("GithubApi", function() {

    test('list projects on repo', async ()=>{
        let projects: any = await apiTest1.listProjects();
        return expect(projects.length).toBeGreaterThanOrEqual(1);
    });

    test('get repository issue list', async ()=>{
        let issue: any = await apiTest1.getRepoIssueList();
        return expect(issue.length).toBeGreaterThanOrEqual(1);
    });

    test('get repository issue by id', async ()=>{
        let issue: any = await apiTest1.getIssue(1);
    })

    test('list cards on project', async ()=>{

        let cards = await apiTest1.listProjectCards(projectId);
    });

    test('list columns on project', async ()=>{
        let columns = await apiTest1.listProjectColumns(projectId);
    });

    test('comment to issue', async ()=>{
        let issue: any = await apiTest1.getRepoIssueList();
    });

    // it('update issue', async function(){
    //     this.timeout(5000);
    //     const issueNumber:number = 3;

    //     let issue: any = await apiTest1.getIssue(issueNumber);
    //     await apiTest1.editIssue(issueNumber, {
    //         title: DueStamp.modify(issue.title, '2020.3.25')
    //     });
    // });

    // it('remove issue due', async function(){
    //     this.timeout(5000);
    //     const issueNumber:number = 3;

    //     let issue: any = await apiTest1.getIssue(issueNumber);
    //     await apiTest1.editIssue(issueNumber, {
    //         title: DueStamp.remove(issue.title)
    //     });
    // });

    // it('increment issue due', async function(){
    //     this.timeout(5000);
    //     const issueNumber:number = 2;

    //     let issue: any = await apiTest1.getIssue(issueNumber);
    //     await apiTest1.editIssue(issueNumber, {
    //         title: DueStamp.calculate(issue.title, 10, 'day')
    //     });
    // });
});
