import java.util.*;
import java.io.*;

class Java_Loops_II {
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            
            int val = a + b;
            for(int j=1; j<=n; j++){
                System.out.print(val + " ");
                val += b << j;
            }
            System.out.println();
        }
        in.close();
    }
}
