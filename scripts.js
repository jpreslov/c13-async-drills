document.addEventListener('DOMContentLoaded', () => {
  let loggy = (msg) => console.log(msg);
  // loggy(`This one's instant`)

  //can pass params for the callback inside of setTimeout after the milliseconds
  // setTimeout(loggy, 2000, `This one happens after 2 seconds. Thanks :)`);

  //also an option
  // setTimeout(() => loggy(`This one happens after 2 seconds. Thanks :)`), 2000);

  let getWords = () => {
    console.log('One');

    setTimeout(() => {
      console.log('Two');

      setTimeout(() => {
        console.log('Three');

        setTimeout(() => console.log('Four'), 1000);
      }, 2000);
    }, 3000);

    // setTimeout(() => console.log('Two'), 3000)
    // setTimeout(() => console.log('Three'), 5000)
    // setTimeout(() => console.log('Four'), 6000)
  };

  //   getWords();

  let done = () => console.log(`Job's done!`);

  let countdown = (num, callback) => {
    setTimeout(() => {
        if (num > 0) {
          console.log(num)
          countdown(num - 1, callback)
      } else {
        callback();
      }
    }, 1000);
  };

  // countdown(5, done);

let lunchTime = false

const orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
    let favFood = {
      lunch: `Mojadra wrap from Makarios`,
      drink: `sporkling water`
    }

    if(lunchTime){
      resolve(favFood)
    } else {
      reject(new Error('ohhhh godddd'))
    }
  });
};

orderMeSomeFood(lunchTime)
.then(res => console.log(res))
.catch(err => console.error(err))
});
