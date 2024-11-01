#include <iostream>
using namespace std;

// assign 01
// Example
// false // bool => Boolean
// 'a' char => character
// '9' char => character
// 9 int => integer
// true bool => boolean
// 100 int => integer
// -10 int => signed integer
// 0 int or bool 
// false bool => boolean
// 10.9 float or double

int main() {
    // assign 02
    // double salary = 5000.98;

    // cout << sizeof(salary) << " bytes\n";
    // cout << sizeof(salary) * 8 << " bits\n";

    // assign 03
    /*cout << "Maximum Integer Number Is =>" << INT_MAX;
    cout << "\nMinimum Integer Number Is =>" << INT_MIN;
    cout << "\nMaximum Integer Number Is =>" << SHRT_MAX;
    cout << "\nMinimum Integer Number Is =>" << SHRT_MIN;*/
    // Output Needed
    // "Maximum Integer Number Is => 2147483647"
    // "Minimum Integer Number Is => -2147483648"
    // "Maximum Short Integer Number Is => 32767"
    // "Minimum Short Integer Number Is => -32768"

    // assign 04
    // Edit Line To Make 8 Become 4
    //cout << sizeof(10.5f + 5 + 20.5f + 10) << "\n"; // 8

    // assign 05
    /*char a = '~';
    char b = '&';
    char c = '%';
    char d = 'A';

    cout << "ASCII value of " << a << " is " << (int)a; 
    cout << "\nASCII value of " << b << " is " << int(b); 
    cout << "\nASCII value of " << c << " is " << (int)c; 
    cout << "\nASCII value of " << d << " is " << int(d); */
    // Output Needed
    /*"ASCII Value of ~ Is 126"
    "ASCII Value of & Is 38"
    "ASCII Value of % Is 37"
    "ASCII Value of A Is 65"*/


    //assign 06
    /*int a = 69;
    int b = 108;
    int c = 122;
    int d = 101;
    int e = 114;
    int f = 111;

    cout << "Character Of This ASCII Value " << a << " is " << char(a);
    cout << "\nCharacter Of This ASCII Value " << b << " is " << char(b);
    cout << "\nCharacter Of This ASCII Value " << c << " is " << char(c);
    cout << "\nCharacter Of This ASCII Value " << d << " is " << char(d);
    cout << "\nCharacter Of This ASCII Value " << e << " is " << char(e);
    cout << "\nCharacter Of This ASCII Value " << f << " is " << char(f) << "\n";

    cout <<char(a)<<char(b)<<char(c)<<char(d)<<char(e)<<char(f);*/

    // Output Needed
    /*"Character Of This ASCII Value 69 Is E"
    "Character Of This ASCII Value 108 Is l"
    "Character Of This ASCII Value 122 Is z"
    "Character Of This ASCII Value 101 Is e"
    "Character Of This ASCII Value 114 Is r"
    "Character Of This ASCII Value 111 Is o"

    // Output Needed In Last Line
    "Elzero"*/

    // assign 07 challenge
    
    /*int a = 1;
    int b = 13;
    int c = 17;
    int d = 70;

    cout << char(d-a)<<char(c+d)<<char(b+d)<< endl;*/
    // Output Needed
    //"EWS"

    // assign 08
    // Edit Anything Except Values
    /*short a = 100;
    double b = 15001500;
    long double c = 100.54565746;

    // Do Not Edit
    cout << sizeof(a) << " Bytes\n"; // 2 Bytes
    cout << sizeof(b) << " Bytes\n"; // 8 Bytes
    cout << sizeof(c) << " Bytes\n"; // 16 Bytes*/

    // assign 09
    // Edit Anything Except Values
    /*unsigned int a = 100;
    signed int b = -100;
    short c = 100;
    float d = 500.55;

    // Do Not Edit
    cout << a << "\n"; // 100
    cout << b << "\n"; // -100
    cout << c << "\n"; // 100
    cout << d << "\n"; // 500.55*/

    // assign 10
    // Add Type Alias Here
    // using lli = long long;
    /*typedef long long int lli;
    // Do Not Edit
    lli num = 150050005; // This Is Long Long Int
    cout << num << "\n"; // 150050005
    cout << sizeof(num) << "\n"; // 150050005*/

    // assign 11
    // Do Not Edit Here
    /*short int a = 100;
    float b = 98.5f;
    double c = 1.7;

    // Edit This Line And Use Type Casting To Get The Output
    cout << a + int(b+c) << "\n"; // 200*/

    // assign 12 challenge
    // Do Not Edit Here
    /*short a = 1000;
    int b = 10000;
    long double c = 5.560000505012;

    // Change ??? To Something Else To Get The Output
    cout << sizeof(c) - sizeof(b) << "\n"; // 12
    cout << sizeof(c) + sizeof(b) << "\n"; // 20
    cout << sizeof(c) * sizeof(a) << "\n"; // 32
    cout << a * int(c) << "\n"; // 5000
    cout << char((int)c * sizeof(c)) << "\n"; // P*/

    return 0;
}