# python program to create barcode.

# import barcode library
from barcode import EAN13
from barcode.writer import ImageWriter

#get the input number
number = input("Enter the barcode number");

#convert to the barcode (EAN-13 ) format.
my_code = EAN13(number, writer=ImageWriter())

#save barcode 
my_code.save("new_code")