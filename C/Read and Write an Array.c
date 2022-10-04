//Program to Read and write an array using the pointer
#include<stdio.h>
int main()
{
   int x[5], i;
   int *pa;
   pa = &x[0]; // or, pa = &x;

   printf("Enter array element: ");
   for(i=0;i<5;i++)
   {
     scanf("%d", (pa+i)); 
   }

   printf("Displaying Array: ");
   for(i=0;i<5;i++)
   {
     printf("%d\t",*(pa+i));
   }

   printf("\n");

   return 0;
}
