#include <stdarg.h>
#include <stdio.h>

int fib(int n)
{

  if (n==0) {
        return 0;
  }

  if (n==1 || n==2)
    return 1;
  int sum,i;
  sum = 0;
  for (i=2; i<=n; i++) {
    sum = sum + i;
  }
  return sum;
}

int main(void)
{
  printf("%d\n", add_em_up(3, 1, 2, 3));
  return 0;
}