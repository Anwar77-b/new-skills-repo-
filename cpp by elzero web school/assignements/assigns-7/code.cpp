#include <string.h>
#include <array>
#include <iostream>
using namespace std;

int main()
{
    // assign 01
    /*int nums[]{100, 300, 600, 900};
    string awards[]{"iPhone", "iPad", "PC", "Car"};

    cout << "Number " << nums[0] << " Award is: " << awards[0];
    cout << "\nNumber " << nums[1] << " Award is: " << awards[1];
    cout << "\nNumber " << nums[2] << " Award is: " << awards[2];
    cout << "\nNumber " << nums[3] << " Award is: " << awards[3];*/

    // Output Needed
    /*"Number 100 Award Is: iPhone"
    "Number 300 Award Is: iPad"
    "Number 600 Award Is: PC"
    "Number 900 Award Is: Car"*/

    // assign 02
    // Example 1
    /*int check1 = 25;
    int nums[]{20, 25, 30, 70, 100};

    int resault = 0;
    if (nums[0] > check1)
    {
        resault = nums[0] + nums[sizeof(nums) / 4 - 2];
        cout << "{" << nums[0] << "}"
             << " + ";
        cout << "{" << nums[sizeof(nums) / 4 - 2];
        cout << "} = " << resault;
    }
    else if (nums[1] > check1)
    {
        resault = nums[1] + nums[sizeof(nums) / 4 - 2];
        cout << "{" << nums[1] << "}"
             << " + ";
        cout << "{" << nums[sizeof(nums) / 4 - 2];
        cout << "} = " << resault;
    }
    else if (nums[2] > check1)
    {
        resault = nums[2] + nums[sizeof(nums) / 4 - 2];
        cout << "{" << nums[2] << "}"
             << " + ";
        cout << "{" << nums[sizeof(nums) / 4 - 2];
        cout << "} = " << resault;
    }*/

    // // Ouput
    // "{40} + {70} = 110"

    // // Example 2
    // int check = 25;
    // int nums[]{20, 35, 30, 70, 100};

    // // Ouput
    // "{35} + {70} = 105"

    // // Example 2
    // int check = 25;
    // int nums[]{20, 25, 30, 70, 100};

    // // Ouput
    // "{30} + {70} = 100"

    // assign 03
    /*int filling = 10;
    int vals[]{100, 200, 300, 400};

    // Write One Line Of Code Here To Fill Array Value With Number 10
    vals[0] = vals[1] = vals[2] = vals[3] = 10;

    cout << vals[0] << "\n"; // 10
    cout << vals[1] << "\n"; // 10
    cout << vals[2] << "\n"; // 10
    cout << vals[3] << "\n"; // 10*/

    // assign 04
    // Example 1
    /*int vals[]{100, 200, 600, 400, 200};
    int last = vals[sizeof(vals) / 4 - 1];
    int sum1 = vals[0] + last;
    int sum2 = vals[1] + vals[sizeof(vals) / 4 - 2];
    int mid = vals[sizeof(vals) / 8];

    if (sum1 > mid) {
        cout << "First Number + Last Number Is Larger Than Middle Number\n";
        cout << vals[0] << " + " << last << endl;
        cout << sum1 << " > " << mid;
    } else if (sum2 > mid) {
        cout << "Second Number + Last Number Is Larger Than Middle Number\n";
        cout << vals[1] << " + " << vals[sizeof(vals) / 4 - 2] << endl;
        cout << sum2 << " > " << mid;
    } else {
        cout << "Middle Number Is The Largest\n";
        cout << mid;
    }*/

    // Needed Output
    // "First Number + Last Number Is Larger Than Middle Number"

    // assign 05
    // Example 1
    /*int vals[] = {100, 300, 600, 200, 100};
    int index = sizeof(vals) / 8;
    int i = 1;

    if (vals[-1 + i] == vals[sizeof(vals) / 4 - i] && i <= index)
    {
        i++;
        if (vals[-1 + i] == vals[sizeof(vals) / 4 - i] && i <= index)
        {
            i++;
            if (vals[-1 + i] == vals[sizeof(vals) / 4 - i] && i <= index)
            {
                i++;
            }
        }
    }
    if (i > index) {
        cout << "array is planidrome";
    } else 
        cout << "array is not palindrome";*/

    // assign 06
    
    /*int vals[] = {10, 20, 30};

    // Write Your Code Here
    vals[1] *= vals [0];
    vals[2] *= vals[0];
    vals[0] *= vals[0];

    cout << vals[0] << "\n"; // 100
    cout << vals[1] << "\n"; // 200
    cout << vals[2] << "\n"; // 300 */

    // assign 07
    // Create The Array Here
    /*string names[3][3] = {
        {"Ahmed", "Sayed" , "Mahmoud"},
        {"Sameh", "Mahdy", "Gamal"},
        {"Mohamed", "Adel", "Majed"}
    };

    cout << "First Collection Of Names:\n";
    cout << names[0][0] << "\n"; // Ahmed
    cout << names[1][1] << "\n"; // Mahdy
    cout << names[2][2] << "\n"; // Majed

    cout << "Second Collection Of Names:\n";
    cout << names[2][1] << "\n"; // Adel
    cout << names[1][2] << "\n"; // Gamal
    cout << names[0][2] << "\n"; // Mahmoud

    cout << "Third Collection Of Names:\n";
    cout << names[0][1] << "\n"; // Sayed
    cout << names[1][0] << "\n"; // Sameh
    cout << names[2][0] << "\n"; // Mohamed*/

    // assign 08
      // Your Code Here

    /*array <int,3> nums;

    // Do Not Edit
    nums.fill(100);
    cout << nums[0] << "\n"; // 100
    cout << nums[1] << "\n"; // 100
    cout << nums[2] << "\n"; // 100*/

    // assign 09
    /*int nums[] = {10, 20, 30, 40, 20, 50};
    cout << size(nums) << "\n";
    cout << sizeof(nums) / sizeof(nums[0]) << "\n";
    cout << end(nums) - begin(nums) << "\n";*/

    // assign 10
    /*array<int, 6> nums = {10, 20, 30, 40, 20, 50};
    // method 1
    cout << *nums.begin() << "\n";
    cout << *(nums.end() - 1) << "\n";
    // method 2
    cout << nums.at(0) << "\n";
    cout << nums.at(size(nums)-1) << "\n";
    // method 3
    cout << nums[0] << "\n";
    cout << nums[size(nums)-1] << "\n";*/

    // assign 11
      // Do Not Edit The Next 3 Lines
    /*int index = 1;
    array<int, 3> oldNums = {10, 20, 30};
    array<int, 3> newNums;

    // Write Your Code Here
    newNums[index] = oldNums[index];
    // cout << *oldNums.begin();
    *newNums.begin() = *oldNums.crbegin();
    *(newNums.end()-1) = *(oldNums.crend()-1);

    // Do Not Edit The Next 3 Lines
    cout << newNums[0] << "\n"; // 30
    cout << newNums[1] << "\n"; // 20
    cout << newNums[2] << "\n"; // 10*/


    // assing 12
    // Do Not Edit The Next 6 Lines
    /*int nums[] = {1, 2, 3, 5};
    int vals[] = {10, 20, 40, 30, 10, 60};
    int i1 = nums[3]; // 5
    int i2 = nums[0]; // 1
    int i3 = nums[1]; // 2
    int i4 = nums[2]; // 3

    // Need To Get Ouput 150
    // You Can Use Plus Operator Only

    // Your Code Here
    int sum = vals[i1] + vals[i3] + vals[i2] + vals[i4];
    cout << sum;*/


    // assign 13
    /*string fName = "Elzero ";
    string mName = "Web ";
    string lName = "School";

    cout << fName << mName << lName << "\n";
    cout << fName + mName + lName << "\n";
    cout << fName.append(mName.append(lName)) << "\n";*/
    // Output Needed
    //Elzero Web School * 3


    return 0;
}