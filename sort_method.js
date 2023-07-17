// Sort Array method 
// ASCII codes => 

/*

 	32	space
!	33	exclamation mark
"	34	quotation mark
#	35	number sign
$	36	dollar sign
%	37	percent sign
&	38	ampersand
'	39	apostrophe
(	40	left parenthesis
)	41	right parenthesis
*	42	asterisk
+	43	plus sign
,	44	comma
-	45	hyphen
.	46	period
/	47	slash

---------------------->> Digits ASCII Codes <<-------------

0	48	digit 0
1	49	digit 1
2	50	digit 2
3	51	digit 3
4	52	digit 4
5	53	digit 5
6	54	digit 6
7	55	digit 7
8	56	digit 8
9	57	digit 9

---------------------->> <<-------------------------------
:	58	colon
;	59	semicolon
<	60	less-than
=	61	equals-to
>	62	greater-than
?	63	question mark
@	64	at sign

------------------------>> ALPHABATES <<---------------
A	65	uppercase A
B	66	uppercase B
C	67	uppercase C
D	68	uppercase D
E	69	uppercase E
F	70	uppercase F
G	71	uppercase G
H	72	uppercase H
I	73	uppercase I
J	74	uppercase J
K	75	uppercase K
L	76	uppercase L
M	77	uppercase M
N	78	uppercase N
O	79	uppercase O
P	80	uppercase P
Q	81	uppercase Q
R	82	uppercase R
S	83	uppercase S
T	84	uppercase T
U	85	uppercase U
V	86	uppercase V
W	87	uppercase W
X	88	uppercase X
Y	89	uppercase Y
Z	90	uppercase Z


[	91	left square bracket
\	92	backslash
]	93	right square bracket
^	94	caret
_	95	underscore
`	96	grave accent

----------------------->> lowercase alphabates<<-----------------
a	97	lowercase a
b	98	lowercase b
c	99	lowercase c
d	100	lowercase d
e	101	lowercase e
f	102	lowercase f
g	103	lowercase g
h	104	lowercase h
i	105	lowercase i
j	106	lowercase j
k	107	lowercase k
l	108	lowercase l
m	109	lowercase m
n	110	lowercase n
o	111	lowercase o
p	112	lowercase p
q	113	lowercase q
r	114	lowercase r
s	115	lowercase s
t	116	lowercase t
u	117	lowercase u
v	118	lowercase v
w	119	lowercase w
x	120	lowercase x
y	121	lowercase y
z	122	lowercase z


{	123	left curly brace
|	124	vertical bar
}	125	right curly brace
~	126	tilde
*/

// Like the foreach , map  ,filter methods --> they did not change the original array 
// but the sort method mutate/ changes the original array

// Example : 
const numbers = [5,9,15,1400, 40,400,32];
// Numbers are sorted according to the ascii value / as the array elements are
// treated as a string ==>Sorted acc. to the ASCII values of the numbers eg. "5" , "9" => here we compare 
// the ascii value of the of the 5 and 9 whose less => came first   

// Sort according to ASCII values 
console.log(numbers.sort());


// Now the output will be in the sorted order (Ascending order) ; 
console.log(numbers.sort((a,b) =>{
    return a-b;
}));

// if we want to sort the array in descending order ;
console.log(numbers.sort((a,b) =>{
    return b-a;
}));



// For example we want to sort the product low->high or high->low price

const product =[
    {product_id :1 , product_name :"iphone " , price:120000},
    {product_id: 2 , product_name:"laptop " , price:80000} ,
    {product_id:3 , product_name: "SSD" , price :4200},
    {product_id:4 , product_name: "tab" , price :42000},
    {product_id:5 , product_name: "watch" , price :20000},
    {product_id:6 , product_name: "charger" , price :3000},

];
// Here the sort method changes the original array

//Sort low -> high
console.log(product.sort((a,b) =>{
    return (a.price - b.price);
}));

//Sort high -> low
console.log(product.sort((a,b) =>{
    return (b.price - a.price);
}));

// If we want to make a copy of the array and then change then changes 
// can be made in it 

const hightolow = product.slice(0).sort((a,b)=>{
    return (b.price - a.price);
});
console.log(hightolow);

const lowtohigh = product.slice(0).sort((a,b) =>{
    return (a.price - b.price);
});
console.log(lowtohigh);




