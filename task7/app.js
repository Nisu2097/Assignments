

function taxCalculator(){
    let employeeName = document.getElementById("employeeName").value;
    let salaryAmount = parseFloat(document.getElementById("salaryAmount").value);

    //   when salary is 300000 or below 300000

    if(salaryAmount<=300000){
 
     document.getElementById("deduction1").value = 0 ;
     document.getElementById("deduction2").value = 0 ;
     document.getElementById("totalTaxAmount").value = 0 ;
     document.getElementById("statement").value = `Dear taxpayer ${employeeName} you are a tax free employee`;

    }

    //   when salary is 600000 or below 600000

    else if(salaryAmount <=600000){
      let tax1 = ((salaryAmount - 300000)*0.1).toFixed(2);
      document.getElementById("deduction1").value = `${tax1}`;
      document.getElementById("deduction2").value = 0;
      document.getElementById("totalTaxAmount").value = `${tax1}`;
      
     document.getElementById("statement").value=`Dear taxpayer ${employeeName} your salary lies in slab1 and the tax amount is 10% of the salary over 300000 i.e ${tax1}`;

    }

    //   when salary is more than 600000

    else if(salaryAmount>600000){
     const  tax2 = 30000;
     let tax3 = ((salaryAmount-600000)*0.2).toFixed(2) ;
     let tax4 = tax2 + tax3 ; 


     document.getElementById("deduction1").value = `${tax2}`
     document.getElementById("deduction2").value = `${tax3}`
     document.getElementById("totalTaxAmount").value = `${tax4}`
     document.getElementById("statement").value= `Dear taxpayer ${employeeName} your salary lies in slab2 and the tax amount is 10% for upto 600000 i.e ${tax2} and 20% for above 600000 i.e ${tax3}`;

    }

}