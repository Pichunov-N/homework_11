let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() =>
        resolve("done"), 5000
        // reject(new Error ("something going wrong")), 5000
    );
});

myPromise
    .then(
        (result) => console.log(result),
    )
    .catch(
        (error) => console.error(error)
    )
    .finally(
        console.log("Promise was finished!")
    )

async function getMyPromise() {
    try {
        const promise = await myPromise;
        return console.log(promise)
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Finally finished")
    }
}
getMyPromise()

// console.log(myPromise)


