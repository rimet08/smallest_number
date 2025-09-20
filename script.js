function main() {
    var smallestNumber;
    var x;

    for (x = 0; x <= 19; x++) {
        window.alert("Enter " + x + 1 + "number of 20");
        var number;

        number = Number(window.prompt('Enter a value for number'));
        if (x == 0) {
            smallestNumber = number;
        } else {
            if (number < smallestNumber) {
                smallestNumber = number;
            }
        }
    }
    window.alert("Smallest number is: " + smallestNumber);
}
