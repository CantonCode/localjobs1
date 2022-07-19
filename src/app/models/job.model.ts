export class Job { 
    jobName: string;
    jobDescription: string; 
    jobCat: Array<string>;
    jobAddress:string;
    jobDate:Date;

    
    constructor(jobName:string,jobDescription:string,jobCat: Array<string>,jobAddress:string,jobDate:Date
        ){
        this.jobName = jobName;
        this.jobDescription = jobDescription;
        this.jobCat = jobCat;
        this.jobAddress = jobAddress;
        this.jobDate = jobDate;
        }
} 