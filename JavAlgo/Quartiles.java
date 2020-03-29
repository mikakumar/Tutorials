import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Quartiles {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */

        Scanner scan = new Scanner(System.in);
        int size = scan.nextInt();
        int arr[] = new int[size];

        for (int i=0;i<size;i++)
        {
            arr[i] = scan.nextInt();
        }

        scan.close();

        Arrays.sort(arr);
        int q1 = findMed(arr, 0, arr.length / 2 - 1);
        int q2 = findMed(arr, 0, arr.length - 1);
        int q3 = findMed(arr, (arr.length + 1) / 2, arr.length - 1);

        System.out.println(q1);
        System.out.println(q2);
        System.out.println(q3);
        System.out.println("Interquartile range :", q3-q1);
    }

    private static int findMed(int[] arr, int start, int end){
        if((end-start)%2==0)
        {
            return arr[(end+start)/2];
        }
        else {
            int value1 = arr[(end + start) / 2];
            int value2 = arr[(end + start) / 2 + 1];
            return Math.round((value1 + value2) / 2);
        }
    }
}
