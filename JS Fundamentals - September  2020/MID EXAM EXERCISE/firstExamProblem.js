function cofeeShop(input) {
   input = input.map(Number);
   let numOrders = input.shift();
   let totalPrice = 0;

   for (let i = 0; i < numOrders; i++) {
      let pricePerCapsule = input.shift();
      let numDays = input.shift();
      let capsulesCount = input.shift();

      let priceForCofee = ((numDays * capsulesCount) * pricePerCapsule);
      console.log(`The price for the coffee is: $${(priceForCofee).toFixed(2)}`);
      totalPrice += priceForCofee;
   }

   console.log(`Total: $${(totalPrice).toFixed(2)}`);
}

cofeeShop([2,
   4.99,
   31,
   3,
   0.35,
   31,
   5])

