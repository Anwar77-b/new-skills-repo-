// assing 01
/*
#include <iostream>
using namespace std;

int main()
{
  // Write Your Code Here
    int age = 40;
    int period = 10;
  // Do Not Edit The Next 2 Lines
  cout << "My Age Is: " << age << "\n";
  cout << period << " Years Ago My Age Was: " << age - period << "\n";
  // Add The Third Line Below
    cout << "After " << period << "years  My Age Will Be: " << age + period;
  return 0;
}*/

//assign 02
/*
#include <iostream>
using namespace std;

int main()
{
  // Write Your One Line Code Here
    int a,b,c;
  // Do Not Edit Below
  a = 10, b = 20, c = 70;
  cout << "Sum Of All Number Is: " << a + b + c;
  return 0;
}*/

// assign 03
/*
  name        [ Valid | Good Practice ]
  NAME        [ Valid | Bad Practice ]
  1name       [ nv ] => Reason ?
  __name      [ v ] => Reason bp
  name@name   [ nv ] => Reason pb
  name10name  [ v ] => Reason bp
  name!name   [ nv ] => Reason ?
  first_NAME  [ v ] => Reason bp
  first_name  [ v ] => Reason bp
  firstName   [ v ] => Reason gp
  first name  [ nv ] => Reason ?
  fn          [ v ] => Reason gp
  public      [ nv ] => Reason ?
  Public      [ v ] => Reason bp
*/

// assign 04
/*
#include <iostream>
using namespace std;

int main()
{
  // Write my_text Variable Content Here
  string my_text = "============\n== Elzero ==\n============\n";
  // Do Not Edit Below
  cout << my_text;
  return 0;
}

Needed Output

============
== Elzero ==
============
*/

// assign 05
/*
#include <iostream>
using namespace std;

int main()
{
  // Do Not Edit Below
  int a, b, c = 100;
  // Add Your Code Here
  a = b = c;
  // Do Not Edit Below
  cout << a + b + c; // 300
  return 0;
}*/

// assign 06
/*
#include <iostream>
using namespace std;

int main()
{
  // Do Not Edit Below
  int a = 210, b = -50, c = -40;
  // Write Your cout Code Here
  cout << a-b-c;
  return 0;
}*/

// assign 07
/*
#include <iostream>
using namespace std;
int num = 50;
int read()
{
  int num = 100;
  cout << num;
  return 0;
}
int play()
{
  int num = 200;
  read();
  return 0;
}
int main()
{
  play();
  return 0;
}*/

// assign 08
/*
#include <iostream>
using namespace std;
int main()
{
  // Edit Here To Fix The Error
  int current_year;
  int birth_year;

  // Do Not Edit Here
  current_year = 2022;
  birth_year = 1982;
  int age_in_years = current_year - birth_year;
  cout << age_in_years;
  return 0;
}*/

// assign 09
/*#include <iostream>
using namespace std;

int main()
{
  // Write Your Code Here
  int num;
  cout << "please enter your number\n";
  cin >> num;
  cout << num*num;
  // Num 10
  // Needed Output 100 [10 * 10]
  return 0;
}*/

// assign 10 challenge

/*#include <iostream>
using namespace std;

int main()
{
  // Write Your Code Here
  int num1,num2;
  cout << "enter num1 then num2\n";
  cin >> num1;
  cin >> num2;

  cout << "the multiple of num1 and num2 is "<<num1*num2<<"\n";
  // Number One => 10
  // Number Two => 100
  // Needed Output 1000 [10 * 100]
  return 0;
}*/

// assign 11 challenge
/*#include <iostream>
using namespace std;

int main()
{
  cout << "Bello\r\"Hello Elzeroo\b";
  cout << " Web Schoolll\b\b";
  cout << " I Love Programming";
  cout << " Too Much";
  cout << " Specially C++\"";
  return 0;
}*/

// Needed Output
//"Hello Elzero Web School I Love Programming Too Much Specially C++"