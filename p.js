function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a')
            resolve(1);
        }, 10000);


        
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b')
            resolve(1);
        }, 5000);
    })
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c')
            resolve(1);
        }, 1000);
    })
}

function aa() {
    return a();
}

(async () => {
    await aa();
    b();
})()

