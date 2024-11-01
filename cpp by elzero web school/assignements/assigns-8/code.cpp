#include <iostream>
using namespace std;

int main()
{
    // assign 01
    /*cout << "========= for =========\n";
    for (int i = 0; i<11; i++) {
        cout << i << "\n";
    }
    cout << "========== while ========\n";
    int i = 0;
    while (i<=10) {
        cout << i << "\n";
        i++;
    }
    cout << "======== do while =======\n";
    i = 0;
    do {
        cout << i << "\n";
        i++;
    } while (i<11);*/

    // assign 02
    /*int index = 2;
    for (;;) // <= Do Not Edit This Line
    {
        cout << index << "\n"; // From 2 To 10
        index++;
        if (index == 9)
            break;
    }*/

    // assign 03
    /*int start;
    int finish;
    cout << "enter start\n";
    cin >> start;
    cout << "\nenter finish\n";
    cin >> finish;

    if (start > finish) {
        int m = start;
        start = finish;
        finish = m;
    }
    for (int i = start + 1; i<finish; i++) {
        if (i % 2 == 0)
            continue;
        cout << i << "\n";
    }*/

    // assign 04
    /*for (int i=0; i<19; i+=2)
        cout << i << "\n";
    int i = 0;
    while (i<19) {
        cout << i << "\n";
        i+=2;
    }*/

    // assign 05
    /*for (int i=0; i<28; i+=3)
        cout << i << "\n";
    int i = 0;
    while (i<28) {
        cout << i << "\n";
        i+=3;
    }*/

    // assign 06
    /*for (int i=10; i<=100000000; i*=i) {
        cout << i << "\n";
    }*/

    // assign 07
    /*for (int i=2; i<129; i*=2) {
        cout << i << "\n";
    }*/

    // assign 08
    /*for (int i=0; i<=126; i*=2) {
        i+=2;
        cout << i << "\n";
    }*/

    // assign 09
    /*string friends[] = {"Ahmed", "Mohamed", "Sayed", "Gamal"};
    for (int i=1; i<size(friends)-1; i++)
        cout << friends[i] << "\n";*/

    // assign 10
    /*string friends[] = {"Ahmed", "Mohamed", "ameer", "Ashraf", "Amany"};
    for (int i=0; i<size(friends); i++) {
        if (friends[i][0] == 'A') {
            cout << friends[i] << "\n";
        }
    }*/

    // assign 11
    /*string friends[] = {"Ahmed", "Osama", "Ameer"};

    for (int i=0; i<size(friends); i++) {
        cout << "=========\n";
        cout << "= " << friends[i] << " =\n";
        cout << "==================\n== ";
        for (int j=0; j<size(friends[i]); j++) {
            cout << friends[i][j];
            if (j == size(friends[i])-1)
                continue;
            cout << ", ";
        }
        cout << " =\n==================\n";
    }*/

    // assign 12
    /*int nums[] = {10, 20, 14, 28, 40, 80, 15, 30};
    for (int i=0; i<size(nums)-1; i++) {
        if (nums[i+1] == nums[i]*2)
            cout << nums[i] << "\n";
    }*/

    // assign 13
    /*for (int i=30 ; i>=3; i-=3) {
        cout << i << "\n";
    }
    for (int i=30 ; i>=3; i-=3) {
        if (i % 2 == 0) 
            continue;
        cout << i << "\n";
    }*/

    // assign 14
    /*int num = 2;
    while (num < 520) {
        // Your Code Here
        if (num == 2) {
            num--;
        }  
        cout << num << "\n";
        num*=2;
        num+=2;
    }*/

    // assign 15
    /*int help_num = 4;
    int nums[] = {2, 4, 5, 6, 10};
    for (int i=0; i<size(nums); i++) {
        cout << nums[i] << " + " << nums[help_num];
        cout << " = " << nums[i] + nums[help_num] << "\n";
        help_num--;
    }*/

    //



    return 0;
}
