#include <iostream>

#include "Matrix.h"

int main(){
    double m, n;
    std::cout << "helloworld" << std::endl;
    std::cin >> m >> n;
    std::cout << "m: " << m << std::endl << "n: " << n << std::endl;
    Matrix mainMatrix = Matrix(m, n);
    
}