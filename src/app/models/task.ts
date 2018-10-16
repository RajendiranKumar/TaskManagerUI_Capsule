export class Task {
    Task_Id:number;
    Task_Name:string;
    Parent_Task:string;
    Priority:number;
    Start_Date:Date | 'MM/dd/yyyy';
    End_Date:Date | 'MM/dd/yyyy';
    Is_End_Task:boolean;
    Priority_From:number;
    Priority_To:number;
}
