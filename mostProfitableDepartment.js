export function mostProfitableDepartment(salesData) {
    const departmentSales = {};
  	for (let i = 0; i < salesData.length; i++) {
    let sale = salesData[i];
        if (departmentSales[sale.department]) {
            departmentSales[sale.department] += sale.sales;
        } else {
            departmentSales[sale.department] = sale.sales;
        }
    };

    let maxSales = 0;
    let mostProfitableDept = '';
  	const departments = Object.keys(departmentSales);
  	for(let i = 0; i < departments.length; i++){
      	const department = departments[i];
        if (departmentSales[department] > maxSales) {
            maxSales = departmentSales[department];
            mostProfitableDept = department;
        }
    }
    return mostProfitableDept;
}


export function mostProfitableDay(salesData) {
    const daySales = {};
   for (let i = 0; i < salesData.length; i++) {
    let sale = salesData[i];
        if (daySales[sale.day]) {
            daySales[sale.day] += sale.sales;
        } else {
            daySales[sale.day] = sale.sales;
        }
    }

    let maxSales = 0;
    let mostProfitableDay = '';
    for (const day in daySales) {
        if (daySales[day] > maxSales) {
            maxSales = daySales[day];
            mostProfitableDay = day;
        }
    }
    return mostProfitableDay;
}