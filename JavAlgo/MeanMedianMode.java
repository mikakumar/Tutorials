import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        int size = scan.nextInt();

        int[] arr = new int[size];
        for(int i = 0;i<size;i++)
        {
            arr[i]  = scan.nextInt();
    }

    scan.close();
    Arrays.sort(arr);

    int total = 0;
    for(int num:arr)
    {
    total+=num;
    }

    double mean = (double)total/size;
    double median;

            if (size % 2 == 0) {
            median = (arr[size / 2 - 1] + arr[size / 2]) / 2.0;
        } else {
            median = arr[size / 2];
        }

    HashMap<Integer, Integer> map = new HashMap();
    int maxocc = 0;
    int mode = Integer.MAX_VALUE;

    for(int num:arr){
        map.merge(num, 1);
        int occ = map.get(num);
        if(occ > maxocc || (occ < maxocc && num<mode)){
            maxocc = occ;
            mode = num;
        }
    }

        System.out.println(mean);
        System.out.println(median);
        System.out.println(mode);
}
}
