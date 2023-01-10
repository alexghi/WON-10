// function one(x) {
//   // daca dati valori lui x (fie primitive, fie functii o sa puteti testa sa vedeti cum se comporta - valabil peste tot in exemple)
//   console.log(x);
// }

// function two(x, cb) {
//   setTimeout(function () {
//     console.log(x);
//     cb(x);
//   }, 1000);
// }

// function three(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(x);
//     }, 1000);
//   });
// }

// three(2)
//   .then((resp) => {
//     return resp + 2;
//   })
//   .then((m) => {
//     return m * 2;
//   })
//   .then((something) => {
//     console.log(something);
//   });

function four(x) {
  return new Promise((resolve, reject) => {
    if (x > 5) {
      resolve(x);
    } else {
      reject(x);
    }
  });
}

// four(4)
//   .then((resp) => {
//     return resp * 3;
//   })
//   .then((m) => {
//     console.log(m);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

function five(x) {
  return Promise.resolve(x);
}

// five(5)
//   .then((r) => {
//     return r * 10;
//   })
//   .then((r) => {
//     console.log(r);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

function six(x) {
  return Promise.reject(x);
}

// six(6)
//   .then((r) => {
//     console.log("here", r);
//   })
//   .catch((e) => {
//     console.log("catch", e);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// function seven(x) {
//   return five(x).then((a) => {
//     return a;
//   });
// }

// seven(7).then((r) => {
//   console.log(`${r} something`);
// });

// function eight(x) {
//   return six(x).then(
//     console.log,
//     (error) => console.log("error", error)
//     );
// }

// eight(8);

// function nine(x) {
//   return five(x).then(
//     () => {
//       throw new Error("error");
//     },
//     (error) => console.log("error", error)
//   );
// }

// nine(9);

// function ten(x) {
//   return five(x)
//     .then(() => {
//       throw new Error("error");
//     })
//     .catch((error) => console.log("error", error));
// }

// try {
//   ten(10);
// } catch (e) {
//   console.log(e);
// }

// function eleven(x) {
//   console.log(x);
//   return new Promise((resolve, reject) => {
//     resolve(x);
//   });
// }

// eleven(11).then((r) => {
//   console.log(r);
// });

function twelve(x) {
  console.log(x);
  return new Promise((resolve, reject) => {
    if (x >= 2) {
      console.log("larger");
    } else {
      console.log("smaller");
    }
    resolve(x);
  });
}

// twelve(12)
//   .then((a) => {
//     console.log("a", a);
//     return a;
//   })
//   .then((b) => {
//     console.log(b);
//     return b;
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log("either fullfilled, or rejected");
//   });

// function thirteen(x) {
//   return Promise.all([twelve(1), twelve(2)]).then((r) => r);
// }

// thirteen().then((message) => {
//   console.log("message", message);
// });

// function fourteen(x) {
//   twelve(1).then(console.log);
//   twelve(3).then(console.log);
// }

// fourteen();

// function fifteen(x) {
//   return Promise.resolve(
//     Promise.resolve(
//         Promise.resolve(
//             Promise.resolve(1)
//         )
//     )
//   ).then(console.log);
// }

// fifteen(2);

// function sixteen(x) {
//   Promise.resolve(1)
//     .then((x) => {
//       console.log("1st", x);
//       return x + 1;
//     })
//     .then((x) => {
//       console.log("2nd", x);
//       throw x + 1;
//     })
//     .catch((x) => {
//       console.log("catch", x);
//       return x + 1;
//     })
//     .then((x) => {
//       console.log("3rd", x);
//       return Promise.resolve(x + 1);
//     })
//     .then((x) => {
//       console.log("4th", x);
//       return Promise.reject(x + 1);
//     })
//     .catch((x) => {
//       console.log("last catch", x);
//     });
// }

// sixteen(1);

// async function seventeen(x) {
//   return await Promise.resolve(1);
// }

// async function eighteen(x) {
//   return await Promise.reject(1);
// }

// async function nineteen(x) {
//   try {
//     throw 1;
//   } catch (e) {
//     return 2;
//   }
// }

// async function twenty(x) {
//   try {
//     throw 1;
//   } catch (e) {
//     throw 2;
//   }
// }

// async function twentyone(x) {
//   try {
//     const response = await fetch("http://google.com");
//     const html = response.text();
//     return html;
//   } catch (e) {
//     return e;
//   }
// }

// async function twentytwo(x) {
//   return await twentyone()
//     .then((x) => x.slice(0, 15))
//     .then(console.log);
// }

// function twentythree(x) {
//   let b = 0;
//   return new Promise((resolve, reject) => {
//     resolve(b++);
//   });
// }

// function twentyfour() {
//   const x = twentythree();
//   x.then(console.log);
//   x.then(console.log);
// }
