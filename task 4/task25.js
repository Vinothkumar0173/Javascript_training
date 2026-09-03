function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(b);
    console.log(c);
}

test();
// b and c are block-scoped, so they cannot be accessed outside the if block.