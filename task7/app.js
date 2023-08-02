

function taxCalculator(){
    let employeeName = document.getElementById("employeeName").value;
    let salary = parseFloat(document.getElementById("salaryAmount").value);

    //   when salary is 300000 or below 300000

    if(salary<=300000){
 
     document.getElementById("deduction1").value = 0 ;
     document.getElementById("deduction2").value = 0 ;
     document.getElementById("totalTaxAmount").value = 0 ;
     document.getElementById("statement").value = `Dear taxpayer ${employeeName} you are a tax free employee`;

    }

    //   when salary is 600000 or below 600000

    else if(salary <=600000){
      let tax1 = (salary - 300000)*0.1;
      document.getElementById("deduction1").value = `${tax1}`;
      document.getElementById("deduction2").value = 0;
      document.getElementById("totalTaxAmount").value = `${tax1}`;
      
     document.getElementById("statement").value=`Dear taxpayer ${employeeName} your salary lies in slab1 and the tax amount is 10% of the salary over 300000 i.e ${tax1}`;

    }

    //   when salary is more than 600000

    else if(salary>600000){
     let  taxDeduction1 = 30000;
     let taxDeduction2 = (salary-600000)*0.2;
     let totalTaxDeduction = taxDeduction1 + taxDeduction2;


     document.getElementById("deduction1").value = `${taxDeduction1}`
     document.getElementById("deduction2").value = `${taxDeduction2}`
     document.getElementById("totalTaxAmount").value = `${totalTaxDeduction}`
     document.getElementById("statement").value= `Dear taxpayer ${employeeName} your salary lies in slab2 and the tax amount is 10% for upto 600000 i.e ${taxDeduction1} and 20% for above 600000 i.e ${taxDeduction2}`;

    }

}