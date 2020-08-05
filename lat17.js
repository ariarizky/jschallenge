let a = [1, 3, 4, 1, 201, 100, 4, 7, 42, 85, 12, 583, 13, 104, 31, 76, 49];


function bubbleSort(a) {
    let b;
    do {
        b = false;
        for (let i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                let c = a[i];
                a[i] = a[i+1];
                a[i+1] = c;
                b = true;
            }
        }
    } while (b);
}

bubbleSort(a);
console.log(a.join(' '));