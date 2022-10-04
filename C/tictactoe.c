#include<stdio.h>
#include<stdlib.h>
#include<ctype.h>
#include<time.h>

char board[3][3];
const char player = 'X';
const char computer = 'O';

void resetBoard();
void printBoard();
int checkFreeSpaces();
void playerMove();
void computerMove();
char checkWinner();
void printWinner(char Winner);

int main()
{
    
char Winner = ' ';
char response;
do
{   
    Winner = ' ';
    response = ' ';
    resetBoard();

    while(Winner == ' '&& checkFreeSpaces()!=0)
    {
        printBoard();

        playerMove();
        computerMove();
        Winner = checkWinner();
        if (Winner != ' '|| checkFreeSpaces() == 0)
        {
            break;
        }
    }
    printBoard();
    printWinner(Winner);
    printf("Would you like to play again? (Y/N) : ");
    scanf("%c\n", &response);
    scanf("%c");
    response=toupper(response);
} while (response =='Y');
printf("Thanks for playing");
return 0;
}
void resetBoard()
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            board[i][j] = ' ';
        }   
    }  
}
void printBoard()
{
      printf("%c  | %c | %c", board[0][0], board[0][1], board[0][2]); 
    printf("\n---|---|---\n");
      printf("%c  | %c | %c", board[1][0], board[1][1], board[1][2]); 
    printf("\n---|---|---\n");
      printf("%c  | %c | %c", board[2][0], board[2][1], board[2][2]); 
      printf("\n");
}
int checkFreeSpaces()
{
    int freeSpaces = 9;
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            if(board[i][j]!= ' ')
            {
                freeSpaces--;
            }
        }   
    } 
    return freeSpaces; 
}
void playerMove()
{
    int x;
    int y;
printf("Enter Row No. #(1-3): ");
scanf("%d",&x);
x--;
printf("Enter column No. #(1-3): ");
scanf("%d",&y);
y--; 
do
{
    if (board[x][y]!=' ')
    {
        printf("Invalid move!\n");
    }
    else
    {
        board[x][y]= player;
        break;
    }
}while (board[x][y]!=' ');
}

void computerMove()
{
    //creates a seed based on current time
    srand(time(0));
    int x;
    int y;

    if(checkFreeSpaces() > 0)
    {
        do
        {
            x = rand() % 3;
            y = rand() % 3;
        } while (board[x][y]!=' ');
        board[x][y] = computer;
    }
    else
    {
        printWinner(' ');
    }
}
char checkWinner()
{   //check rows
    for (int i = 0; i < 3; i++)
    {
       if(board[i][0] == board[i][1] && board[i][0] == board[i][2]) 
        {
           return board[i][0];
        }  
    } 
    //check columns
    for (int i = 0; i < 3; i++)
    {
       if(board[0][i] == board[1][i] && board[0][i] == board[2][i]) 
        {
           return board[0][i];
        }  
    }
    // check diagonals
    for (int i = 0; i < 3; i++)
    {
       if(board[0][0] == board[1][1] && board[0][0] == board[2][2]) 
        {
           return board[0][0];
        }  
        if(board[0][2] == board[1][1] && board[0][2] == board[2][0]) 
        {
           return board[0][2];
        }  
        return ' ';
    }
}
void printWinner(char Winner)
{
    if (Winner == player)
    {
        printf("You Win!\n");
    }
    else if (Winner == computer)
    {
        printf("You Lose\n");
    }
    else 
    {
        printf("IT IS A TIE!\n");
    }
}
