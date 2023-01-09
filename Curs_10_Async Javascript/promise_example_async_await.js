// modalitatea 1 - cu arrow function
const myFn = async () => {
  console.log("async arrow fn");
};

// modalitatea 2
async function myFn2() {
  console.log("async fn with function keyword");

  try {
    const myPromise = await new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve({
          message: "yaay",
          code: 200,
        });
      }, 5 * 1000);
    }).then(() => {
      return "😎";
    });
  } catch (error) {
    console.log("error", eror);
  }

  // myPromise.then((r) => {
  //   setTimeout(() => {
  //     console.log("3 - ", r);
  //     return r;
  //   }, 1000);
  // });

  console.log("👻");
}

myFn2();

// async function myPromise() {
//   const isCool = true;

//   try {
//     // operatiunea pe care o vei incerca
//   } catch (e) {
//     // se ajunge daca operatiunea nu a reusit
//     console.log(e);
//   }

//   try {
//     var data = await new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         reject("student list fetch error");
//         // resolve(['student1', 'student2'])
//         console.log("resolving students now");

//         // resolve({
//         //     message: `this man who is ${howIs} likes to keep his word`,
//         //     code: `whatever_you_like`
//         // })
//       }, 5 * 1000);
//     });
//   } catch (e) {
//     console.log("error", e);
//   }

//   const t = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       reject("something went wrong");
//       resolve(["teacher1", "teacher2"]);
//       console.log("resolving teacher now");

//       // resolve({
//       //     message: `this man who is ${howIs} likes to keep his word`,
//       //     code: `whatever_you_like`
//       // })
//     }, 1000 * 60 * 3);
//   });

//   const sum = function (a, b) {
//     console.log("your sum result", a + b);
//   };

//   sum(1, 2);

//   return t;
// }

// myPromise()
//   .then((data) => {
//     console.log("data after promise resolve", data);
//   })
//   .then(() => {
//     console.log("after");
//   })
//   .catch(function (e) {
//     console.log("error", e);
//   })
//   .finally(function () {
//     console.log("regardless of error or success, finally show this");
//   });
