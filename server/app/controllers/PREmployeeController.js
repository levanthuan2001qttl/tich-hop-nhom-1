const connectionMySQL = require("../config/MySQL");

class PRController {
  async getListEmployee(req, res, next) {
    await connectionMySQL.query(
      "SELECT * FROM payroll.employee",
      (err, result) => {
        if (err) {
          return res.json(err);
        }
        return res.json(result);
      }
    );
  }
  async create(req, res, next) {
    const {
      Employee_Number,
      idEmployee,
      Last_Name,
      First_Name,
      SSNEm,
      Pay_Rate,
      PayRates_id,
      Vacation_Days,
      Paid_To_Date,
      Paid_Last_Year,
    } = req.body;

    await connectionMySQL.query(
      `insert into payroll.employee 
(Employee_Number,idEmployee,Last_Name,First_Name,SSN,Pay_Rate,PayRates_id,Vacation_Days,Paid_To_Date,Paid_Last_Year) 
values (${Employee_Number},${idEmployee},N'${Last_Name}',N'${First_Name}', ${SSNEm}, '${Pay_Rate}', ${PayRates_id}, ${Vacation_Days} ,${Paid_To_Date} ,${Paid_Last_Year});`,
      (err, result) => {
        if (err) {
          return res.json(err);
        }
        return res.json(result);
      }
    );
  }
  async delete(req, res, next) {
    const id = req.body.employeeId;
    await connectionMySQL.query(
      `delete from payroll.employee where Employee_Number = ${id}`,
      (err, result) => {
        if (err) {
          return res.json(err);
        }
        return res.json(result);
      }
    );
  }
  async detailEmployee(req, res, next) {
    const employeeId = req.params.employeeId;
    await connectionMySQL.query(
      `select * from employee where Employee_Number = ${employeeId}`,
      (err, result) => {
        if (err) {
          return res.json(err);
        }
        return res.json(result);
      }
    );
  }
  async update(req, res, next) {
    const {
      Employee_Number,
      idEmployee,
      Last_Name,
      First_Name,
      SSNEm,
      Pay_Rate,
      PayRates_id,
      Vacation_Days,
      Paid_To_Date,
      Paid_Last_Year,
    } = req.body;
    await connectionMySQL.query(
      `
update employee set idEmployee = ${idEmployee},Last_Name = '${Last_Name}', First_Name = '${First_Name}', SSN = ${SSNEm}, Pay_Rate= ${Pay_Rate}, PayRates_id=${PayRates_id}, Vacation_Days = ${Vacation_Days}, Paid_To_Date = ${Paid_To_Date}, Paid_Last_Year = ${Paid_Last_Year} where Employee_Number = ${Employee_Number}`,
      (err, result) => {
        if (err) {
          return res.json(err);
        }
        return res.json(result);
      }
    );
  }
}
module.exports = new PRController();
