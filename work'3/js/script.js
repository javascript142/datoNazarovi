        function calculator(num1,num2,action){
            if(action == "add"){
                return num1 = num2;
            }
            else if(action == "divide"){
                return num1 - num2;
            }
            else if(action == "subtract"){
                return num1 * num2;
            }
            else if(action == "multiply"){
                return num1 / num2;
            }
            else {
                return "invalid action";
            }
        }
    //  //// calculator(2,3,"add")
    //     alert(calculator(2,3,"subtract"))
    //     alert(calculator(0.01,100,"divide"))
    //     alert(calculator(0.1,5,"multiply"))
    //     alert(calculator(9,7,))

    function sumAllArray(array1=[] , array2=[],array3=[] , array4=[],array5=[] ){
        let someOfArray1 = array1.length;
        let someOfArray2 = array2.length;
        let someOfArray3 = array3.length;
        let someOfArray4 = array4.length;
        let someOfArray5 = array5.length;
        return someOfArray1 + someOfArray2 + someOfArray3 + someOfArray4
         + someOfArray5;
    }
    // alert(sumAllArray ([1,2,3],[4,5],[1,2,3]))

   // arrow function\\

    const countsAllarrayItems = (array1=[] , array2=[],array3=[] , array4=[],
        array5=[] ) =>{
        let someOfArray1 = array1.length;
        let someOfArray2 = array2.length;
        let someOfArray3 = array3.length;
        let someOfArray4 = array4.length;
        let someOfArray5 = array5.length;
        return someOfArray1 + someOfArray2 + someOfArray3 + someOfArray4
         + someOfArray5;
    }

    alert(countsAllarrayItems([1,2,3],[1,2,3],[1,2,3]))