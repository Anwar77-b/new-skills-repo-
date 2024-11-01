#include <stdio.h>

void bubleSort(int arr[], int length)
{
  for (int i = 0; i < length; i++)
  {
    for (int j = 0; j < length - 1 - i; j++)
    {
      if (arr[j] > arr[j + 1])
      {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        ;
        arr[j + 1] = temp;
      }
    }
  }
}

void selectionSort(int arr[], int length)
{
  int min;
  for (int i = 0; i < length; i++)
  {
    min = i;
    for (int j = i + 1; j < length; j++)
    {
      if (arr[j] < arr[min])
        min = j;
    }
    if (min != i)
    {
      int temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
}

void insertionSort(int arr[], int length)
{
  for (int i = 1; i < length; i++)
  {
    int current = arr[i];
    int j = i - 1;
    while (j > -1 && current < arr[j])
    {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
}


int main() {
    return 0;
}