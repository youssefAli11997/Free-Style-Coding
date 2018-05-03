import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Java_Arraylist {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        ArrayList<ArrayList<Integer>> arr = new ArrayList<>();
        for(int i=0; i<t; i++){
            arr.add(new ArrayList<Integer>());
            int n = in.nextInt();
            for(int j=0; j<n; j++){
                arr.get(i).add(in.nextInt());
            }
        }
        int q = in.nextInt();
        for(int i=0; i<q; i++){
            int x = in.nextInt(); x--;
            int y = in.nextInt(); y--;
            try{
                System.out.println(arr.get(x).get(y));
            }
            catch(Exception e){
                System.out.println("ERROR!");
            }
        }
        
    }
}
