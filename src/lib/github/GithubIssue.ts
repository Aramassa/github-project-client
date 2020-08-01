import {Modifyer} from "../util/DueStamp";

export class GithubIssue{

  private _title: string;

  public set title(title:string){
    this._title = title;
  }

  public get title(){
    return this._title;
  }

  public get due(): Modifyer{
    return new Modifyer(this);
  }
}
