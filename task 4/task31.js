function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result = cashback();

for (let value of result) {
    console.log(value);
}