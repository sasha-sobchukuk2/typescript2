"use strict";
class Department {
    constructor(id, name, employes = []) {
        this.id = id;
        this.name = name;
        this.employes = employes;
    }
    static createWorker(name) {
        /** statick method colud work without of instans , just from Department.createWorker*/
        console.log(this.fiscalYear);
        return { name: name };
    }
    addEmploys(emp) {
        this.employes.push(emp);
    }
    printEmploys() {
        console.log(`id:${this.id} employes:  ${this.employes}`);
    }
}
/**
 abstract означає шо з нього н еможна зробити інстанс,
 і описуєм методи методи і поля які будуть обоязкові в  дочірніх класах
 */
/**
 * static означає поза екземпляром
 * static означає шо доступ до властивості нема з цього класу, крім статичних методів

 */
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins, depName) {
        super(id, 'IT');
        this.admins = admins;
        this.depName = depName;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new ITDepartment('1', ['sasa admin'], 'it-dep');
            return this.instance;
        }
    }
    describe() {
        console.log('it-department' + this.id);
    }
    addITEmploy(name) {
        if (name === 'max') {
            console.log('dont exceptable');
        }
        this.employes.push(name);
    }
}
class ReportsDepartment extends Department {
    constructor(id, name, reports, depName) {
        super(id, name, reports);
        this.lastReport = reports[-1];
        this.reports = reports;
        this.depName = depName;
    }
    get firstReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error('No report found.');
        }
    }
    set firstReport(data) {
        this.addReport(data);
    }
    describe() {
        console.log('ReportsDepartment');
    }
    addReportsToFirst(report) {
        this.reports = [report, ...this.reports];
    }
    addReport(report) {
        this.reports.push(report);
    }
}
// const itDep = ITDepartment.getInstance()
// const itDe2 = ITDepartment.getInstance()
// console.log(itDep ===itDe2)
// debugger
// const dep = new Department('0','dep')
// const itDep = new ITDepartment('1',['it-admin'],'it-dep')
// dep.describe()
// itDep.describe()
// const worker1 = Department.createWorker('1')
// console.log(worker1)
// console.log(Department.fiscalYear)
// const worker1  = new Department('1')
// const reportsDep = new ReportsDepartment(1,'sasha',['report1'])
// reportsDep.firstReport = '123'
// console.log(reportsDep.firstReport )
// const acaunting = new ITDepartment('1', ['admin1','admin2'],)
// acaunting.addEmploys('1 employ')
// acaunting.addEmploys('2 employ')
// acaunting.printEmploys()
// console.log(acaunting)
//# sourceMappingURL=class.js.map