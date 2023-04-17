#ifndef __main_h__
#define __main_h__

#include <iostream>

class Matrix{
    public:
        Matrix(double m, double n);
        void printMatrix(); // possible use of "std::ostream& out"
        double value();
    private:
        double m;
        double n;
        double[][] values;
};

#endif 