function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log(`${monthNumber}:- January`);
            break;

        case 2:
            console.log(`${monthNumber}:- February`);
            break;

        case 3:
            console.log(`${monthNumber}:- March`);
            break;

        case 4:
            console.log(`${monthNumber}:- April`);
            break;

        case 5:
            console.log(`${monthNumber}:- May`);
            break;

        case 6:
            console.log(`${monthNumber}:- June`);
            break;

        case 7:
            console.log(`${monthNumber}:- July`);
            break;

        case 8:
            console.log(`${monthNumber}:- August`);
            break;

        case 9:
            console.log(`${monthNumber}:- September`);
            break;

        case 10:
            console.log(`${monthNumber}:- Octomber`);
            break;

        case 11:
            console.log(`${monthNumber}:- November`);
            break;

        case 12:
            console.log(`${monthNumber}:-December`);
            break;

        //  case 3:
        //console.log(`March`);
        //break;

        default:
            console.log(`${monthNumber}:- Please provide the valid month number`);
            break;
    }

}
monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);