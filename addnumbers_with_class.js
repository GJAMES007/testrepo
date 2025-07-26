
        function addNumbers()
        {
        
            const a = document.getElementById('num1').value;
            const b = document.getElementById('num2').value;
        //     const a2 = new addtwonumbers();
        //    const result = a2.addnumber(a,b);
            const result = parseInt(a)+parseInt(b);
            console.log("Triggering add method", result)
            document.getElementById("result").textContent = result;
        }
//         class addtwonumbers {
// constructor(value) 
// {
//     this.title = value;
// }
// addnumber(a,b)
// {
// return (parseInt(a)+parseInt(b));
// }
// }
const a = document.getElementById('num1').value;
const b = document.getElementById('num2').value;
// const a1 = new addtwonumbers(a,b);
// console.log("Sum of two numbers " + a1.addnumber(a,b));
console.log("Value of " + a);