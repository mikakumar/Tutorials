import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class StandardDeviation {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */

        Scanner scan = new Scanner(System.in);
        int size = scan.nextInt();
        int[] arr = new int[size];

        int total = 0;

        for(int i=0;i<size;i++)
        {
            arr[i] = scan.nextInt();
            total+=arr[i];
        }

        double mean = (double)total/size;
        double stdsq = 0;

        for(int i=0;i<size;i++)
        stdsq += Math.pow(arr[i]-mean, 2);

        double var = stdsq/size;

        double std = Math.sqrt(var);

        System.out.format("%.1f", std);
    }
}
