import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
  
    public static String getSmallestAndLargest(String s, int k) {
        String smallest = s.substring(0,k), largest = s.substring(0,k);
        for(int i=0; i<s.length()-k+1; i++){
            String currSubs = s.substring(i,i+k);
            if(smallest.compareTo(currSubs) > 0){
                smallest = currSubs;
            }
            if(largest.compareTo(currSubs) < 0){
                largest = currSubs;
            }
        }
        return smallest + "\n" + largest;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.next();
        int k = scan.nextInt();
        scan.close();
      
        System.out.println(getSmallestAndLargest(s, k));
    }
}
