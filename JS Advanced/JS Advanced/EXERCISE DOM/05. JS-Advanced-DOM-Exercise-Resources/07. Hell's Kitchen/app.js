function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.querySelector("#inputs textarea").value;
      let data = {};
      let allData = {}

      JSON.parse(input)
         .forEach(element => {
            let [name, workers] = element.split(" - ");
            workers = workers.split(", ");


            if (!data[name]) {
               data[name] = workers;
               allData[name] = []
               allData[name].push({
                  workers,
                  "averageSalary": averageSalary(workers),
                  "bestSalary": maxSalary(workers)
               });
            } else {
               workers = workers.concat(data[name])
               Object.keys(allData).forEach(key => {
                  if (key == name) {
                     allData[name] = []
                     allData[name].push({
                        workers,
                        "averageSalary": averageSalary(workers),
                        "bestSalary": maxSalary(workers)
                     })
                  }
               })
            }
         });

      let bestRestaurant = Object.entries(allData)
         .sort((a, b) => b[1][0].averageSalary - a[1][0].averageSalary)[0];

      let firstOutput = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1][0].averageSalary.toFixed(2)} Best Salary: ${bestRestaurant[1][0].bestSalary.toFixed(2)}`;
      document.querySelector("#bestRestaurant p").textContent = firstOutput;

      let secondOutput = '';
      let workersArr = [];
      bestRestaurant[1][0].workers
         .forEach(x => {
            let [name, salary] = x.split(" ");
            workersArr.push({ name, salary })
         })

      workersArr
         .sort((a, b) => b.salary - a.salary)
         .forEach(w => {
            secondOutput += `Name: ${w.name} With Salary: ${w.salary} `
         })

      document.querySelector("#workers p").textContent = secondOutput.trim();
   }

   function maxSalary(arr) {
      return arr
         .map(x => x.split(" ")[1])
         .map(Number)
         .sort((a, b) => b - a)[0]
   }

   function averageSalary(arr) {
      let sum = 0;
      arr.forEach(worker => {
         let salary = worker.split(" ")[1]
         sum += Number(salary)
      })
      return sum / arr.length;
   }
}