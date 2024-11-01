#include <iostream>
using namespace std;

class Person
{
    public:
    string Name;
    int Age;
    char Sex;
    Person (string n = " ", int a = 0, char s = 'N') {
        Name = n;
        Age = a;
        Sex = s;
    }
};

int main()
{
    Person manny("manny",3,'4');

    cout << manny.Sex;
}