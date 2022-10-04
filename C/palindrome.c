#include <stdio.h>
#include <string.h>
int main()
{
    int flag, n;
    flag = 1;
    char str1[100];
    //string str[100];
    scanf("%s", &str1);
    
    n = strlen(str1);
    /*
    char str2[n-1];
    strcpy(str2,str1);
    
    for (int i = 0; i < n; i++)
    {
        str2[i] = str1[n - i - 1];
    }
    */
    for (int i = 0; i < n; i++)
    {
        if(str1[i]!=str1[n-1-i])
        {
            printf("Not palindrome");
            flag = 0;
            break;
        }
    }
    if(flag==1){
        printf("palindrome");
    }
    
    /*
    printf("%s",str2);
    printf("\n");
    if (str2 != str1)
    {
        flag = 0;
    }
    if (flag == 1)
    {
        printf("%s IS A PALINDROME!", str1);
    }
    else
    {
        printf("%s IS NOT A PALINDROME!", str1);
    }
    */
    return 0;
}