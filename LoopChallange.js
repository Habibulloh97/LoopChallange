// Print odds 1-20

for(i=1; i<21; i++){
    if(i%2!=0)
    console.log(i)
}

// Print the sequence

for(i=4; i>=-3.5; i-=1.5){
    console.log(i)
}

// Sigma

sum=0
for(i=1; i<101; i++){
    sum=sum+i
}
console.log(sum)

// Factorial


product=1
n=1
while(product<1e8){
    n++
    product=product*n
}
console.log(n)