function tes(nil) {

    if (nil === 1) {
        return 1
    } else {
        return nil * tes(nil - 1)
    }
}


console.log(tes(5))


function loop(nill) {
    let result;
    if (nill === 0) {
        console.log('Print Selesai');
    } else {
        console.log('reqursive', nill);
        loop(nill - 1)
    }
    return result;
}



loop(100);