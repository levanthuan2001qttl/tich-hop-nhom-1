//API Human Resources
export const getEmployeesApi = () => {
  return fetch("/api/hr/get-employees")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getBenefitPlans = () => {
  return fetch("/api/hr/benefit-plans")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getEmployeeInfoApi = (employeeId) => {
  return fetch(`/api/hr/get-employee/${employeeId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const createEmployeeApi = (data) => {
  return fetch("/api/hr/create-employee", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const deleteEmployeeApi = (employeeId) => {
  return fetch("/api/hr/delete-employee", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(employeeId),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const updateEmployeeApi = (data) => {
  return fetch("/api/hr/update-employee", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// API Payroll
export const getEmployeePayrollApi = () => {
  return fetch("/api/pr/get-employees")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const getPREmployeeDetailApi = (employeeId) => {
  return fetch(`/api/pr/get-employee/${employeeId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const createEmployeePRApi = (data) => {
  return fetch("/api/pr/create-employees", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const deleteEmployeePRApi = (employeeId) => {
  return fetch("/api/pr/delete-employees", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(employeeId),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const updateEmployeePRApi = (data) => {
  return fetch("/api/pr/update-employee", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

// statistic
export const statisticBenefitPlanApi = () => {
  return fetch(`/api/hr/statistic-benefit-plan`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
