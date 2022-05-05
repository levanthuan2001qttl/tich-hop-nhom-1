const { connectionSQLServer } = require("../config/SQLServer");

class HRController {
  async getListEmployeeTest(req, res, next) {
    const pool = await connectionSQLServer;
    pool
      .request()
      .query("SELECT [Last_Name] ,[City], [State] FROM [dbo].[Personal]")
      .then((result) => {
        res.json({ result: result.recordset });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async getListEmployee(req, res, next) {
    const pool = await connectionSQLServer;
    pool
      .request()
      .query(
        "SELECT [Employee_ID], [First_Name],[Middle_Initial], [Last_Name] ,[City], [State],[Phone_Number],[Marital_Status] ,[Plan_Name],[Benefit_Plan_ID] FROM [dbo].[Personal],  [dbo].[Benefit_Plans]  WHERE [dbo].[Personal].Benefit_Plans = [dbo].[Benefit_Plans].Benefit_Plan_ID "
      )
      .then((result) => {
        res.json({ result: result.recordset });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async detailEmployee(req, res, next) {
    const employeeId = req.params.employeeId;
    const pool = await connectionSQLServer;
    pool
      .request()
      .query(
        `
        select * from  [dbo].[Personal],[dbo].[Benefit_Plans] where [dbo].[Personal].Benefit_Plans = [dbo].[Benefit_Plans].Benefit_Plan_ID AND [Employee_ID] =  ${employeeId}
        `
      )
      .then((result) => {
        res.json({ result: result.recordset });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async createEmployee(req, res, next) {
    const {
      employeeId,
      fullName,
      email,
      state,
      city,
      zip,
      phone,
      licenseDrivers,
      gender,
      marital,
      shareholder,
      benefit,
      ethnicity,
    } = req.body;

    const pool = await connectionSQLServer;
    pool
      .request()
      .query(
        `insert into [dbo].[Personal]([Employee_ID], [First_Name],[Last_Name],[Middle_Initial], [Email], [State],[City] ,[Zip],[Phone_Number],[Drivers_License],[Gender],[Marital_Status],[Shareholder_Status],[Benefit_Plans],[Ethnicity])
            values(${employeeId}, N'${fullName.split(" ")[0]}', N'${
          fullName.split(" ")[2]
        }',N'${
          fullName.split(" ")[1]
        }' , N'${email}', N'${state}',N'${city}',  ${zip},  '${phone}', '${licenseDrivers}',${gender}, N'${marital}',${shareholder}, ${benefit}, N'${ethnicity}')`
      )
      .then((result) => {
        res.json(result.rowsAffected);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async deleteEmployee(req, res, next) {
    const id = req.body.employeeId;
    const pool = await connectionSQLServer;
    pool
      .request()
      .query(`delete from [dbo].[Personal] where [Employee_ID] = ${id}`)
      .then((result) => {
        res.json(result.rowsAffected);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async updateEmployee(req, res, next) {
    const {
      employeeId,
      fullName,
      email,
      state,
      city,
      zip,
      phone,
      licenseDrivers,
      gender,
      marital,
      shareholder,
      benefit,
      ethnicity,
    } = req.body;

    const pool = await connectionSQLServer;
    pool
      .request()
      .query(
        `update [dbo].[Personal] set [First_Name] = N'${
          fullName.split(" ")[0]
        }',
         [Middle_Initial] = N'${fullName.split(" ")[2]}', [Last_Name] = N'${
          fullName.split(" ")[1]
        }',
         [Email] = '${email}',[State]= N'${state}',  [City] = N'${city}',[Zip]='${zip}',
         [Drivers_License] = '${licenseDrivers}',
         [Marital_Status] = N'${marital}', [Phone_Number] = '${phone}',[Gender] = '${gender}',
         [Shareholder_Status]= '${shareholder}',[Benefit_Plans] = '${benefit}',
         [Ethnicity]= N'${ethnicity}'  where [Employee_ID] = ${employeeId}`
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getListBenefitPlans(req, res, next) {
    const pool = await connectionSQLServer;
    pool
      .request()
      .query("select * from  [dbo].[Benefit_Plans] ")
      .then((result) => {
        res.json({ result: result.recordset });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async statisticsBenefitPlan(req, res, next) {
    const pool = await connectionSQLServer;
    pool
      .request()
      .query(
        ` SELECT [Plan_Name], COUNT (*) AS TONG FROM [dbo].[Personal], [Benefit_Plans]
       where [Benefit_Plans].Benefit_Plan_ID = [dbo].[Personal].Benefit_Plans GROUP BY [Plan_Name] `
      )
      .then((result) => {
        res.json({ result: result.recordset });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
// update employee set idEmployee = 1,Last_Name = 'test', First_Name = 'test', SSN = 2, Pay_Rate= 3, PayRates_id=3, Vacation_Days = 3, Paid_To_Date = 3, Paid_Last_Year = 3 where Employee_Number = 1212
module.exports = new HRController();
