        // ====== loops ===\\


        let waterTank = 0; // // liters
        let waterLimit = 10; // //  limit of water
        // // while loops example
        //  while (waterTank < waterLimit) {
        //         waterTank = waterTank + 1;
        //         console.log("waterTank filled " + waterTank +
        //          "liters");
        //  }       
                         // // filter even numbers
        // let number = 0; 
        // while (number < 10 ){
        //         number = number + 1;
        //         if (number % 2 !== 0) {
        //                 console.log(number);
        //         }
        // }

        let names = [ "jon", "jane", "maver", "mary", "bob", "chis"];
        let groupA = [];
        let groupB = [];
        let count = 0;
        while (names.length > count ){
          if (count % 2 !== 0){
                groupA.push(names[count]);
          } else if (count % 2 === 0) {
                groupB.push(names[count]);
          }
          count = count + 1;
        }
        console.log(groupA);
        console.log(groupB);
        