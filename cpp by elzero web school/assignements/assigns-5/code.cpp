#include <iostream>
using namespace std;

int main() {
    // assign 01
    /*int age = 40;
    int points = 800;
    float rate = 8.5f;

    // Your Condition Here
    if (age > 18 && points > 500 && rate > 5)
        cout << "Yes Age > 18 & Points > 500 & Rate > 5\n";*/

    // Output Needed If All Conditions Is True
    //"Yes Age > 18 & Points > 500 & Rate > 5"

    // assign 02

    // Test Case 1
    /*int age = 20;
    int points = 650;

    if (age > 18) {
        cout << "age is ok\n";
    } else cout << "age is not ok\n";

    if (points > 500) {
        cout << "points are ok\n";
    } else cout << "points aren't ok\n";*/

    // Output
    // "No Age Is Not Ok"
    // "No Points Is Not Ok"

    // Test Case 2
    // int age = 20;
    // int points = 450;

    // Output
    // "Yes Age Is Ok"
    // "No Points Is Not Ok"

    // Test Case 3
    // int age = 20;
    // int points = 650;

    // Output
    // "Yes Age Is Ok"
    // "Yes Points Is Ok"

    // assign 03
    /*int num;
    cout << "Please Type A Number Between 0 And 150\n";
    cin >> num;

    if (num < 10) {
        cout << "00" << num << endl;
    } else if (num <100) {
        cout << "0" << num << endl;
    } else {
        cout << num;
    }*/

    // If Number Smaller Than 10 "Example 5" Output Will Be => 005
    // If Number Larger Than 10 And Smaller Than 100 "Example 59" Output Will Be => 059
    // If Number Larger Than 100 "Example 115" Output Will Be => 115

    // assign 04 challenge
    /*int num1 = 2;
    int num2 = 1;
    int num3 = 2;
    int num4 = 24;

    // Do Not Edit Any Condition

    // Condition 1
    if (num1 > num2)
    cout << "Condition 1 Is True\n";
    else
    cout << "Condition 1 Is False\n";
    // Condition 2
    if (num1 > num2 && num1 < num4)
    cout << "Condition 2 Is True\n";
    else
    cout << "Condition 2 Is False\n";
    // Condition 3
    if (num1 > num2 && num1 == num3)
    cout << "Condition 3 Is True\n";
    else
    cout << "Condition 3 Is False\n";
    // Condition 4
    if (num1 + num2 < num4)
    cout << "Condition 4 Is True\n";
    else
    cout << "Condition 4 Is False\n";
    // Condition 5
    if (num1 + num3 < num4)
    cout << "Condition 5 Is True\n";
    else
    cout << "Condition 5 Is False\n";
    // Condition 6
    if (num1 + num2 + num3 < num4)
    cout << "Condition 6 Is True\n";
    else
    cout << "Condition 6 Is False\n";

    // Condition 7
    if (num4 - (num1 + num3) + num2 == 21)
    cout << "Condition 7 Is True\n";
    else
    cout << "Condition 7 Is False\n";*/

    // Output Needed
    // "Condition 1 Is True"
    // "Condition 2 Is True"
    // "Condition 3 Is True"
    // "Condition 4 Is True"
    // "Condition 5 Is True"
    // "Condition 6 Is True"
    // "Condition 7 Is True"

    // assign 05
    /*int by = 82; // by => Birth Year
    int s = 1000; // s => Salary
    if (by > 80)
    {
        if (s < 600)
            cout << "Ok\n";
        else
            cout << "High\n";
    }
    else
    {
        cout << "Not Ok\n";
    }
    string msg = (by>80) ? (s<600) ? "Ok\n" : "High\n" : "Not Ok\n";
    cout << msg;*/

    // assign 06
    /*int age = 40;
    int points = 100;

    if ((age > 18) && (sizeof(age) == 4) && (points > 50)) {
        cout << "Age Data Is 4 Bytes\n";
        cout << "Age Is Ok\n";
        cout << "Points Is Ok\n";
    }*/

    // Output Needed
    // "Age Data Is 4 Bytes"
    // "Age Is Ok"
    // "Points Is Ok"

    // assign 07
    /*int result = 0;
    int num1, num2, num3, num4;
    cout << "Please Type 5 Numbers In A Row\n";
    cout << "Only Even Numbers Smaller Than 20 Will Be Counted\n";
    cin >> num1 >> num2 >> num3 >> num4;

    if (num1 < 20) 
        if (num1 % 2 == 0)
            result += num1;
    if (num2 < 20) 
        if (num2 % 2 == 0)
            result += num2;
    if (num3 < 20) 
        if (num3 % 2 == 0)
            result += num3;
    if (num4 < 20) 
        if (num4 % 2 == 0)
            result += num4;
    cout << result;*/

    /*
    Test Case 1
    Numbers => 15, 16, 22, 8
    Result => 24

    "Explain"
    Starting Result Is 0
    [Number 1] 15 => Not Even Number
    [Number 2] 16 => Smaller Than 20 And Even Number
    0 + 16 = 16
    [Number 3] 22 => Not Smaller Than 20
    [Number 4] 8  => Smaller Than 20 And Even Number
    16 + 8 = 24
    */
    return 0;
}