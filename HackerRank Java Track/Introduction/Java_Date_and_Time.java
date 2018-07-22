import java.util.Scanner;
import java.util.Calendar;
import java.util.GregorianCalendar;

class Problem{
    
    final static String[] dayNames = {"SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"};
    
    static String getDay(String day, String month, String year){
        Calendar calendar = new GregorianCalendar(Integer.parseInt(year), Integer.parseInt(month)-1, Integer.parseInt(day));
        return dayNames[calendar.get(Calendar.DAY_OF_WEEK)-1];
    }
     
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String month = in.next();
        String day = in.next();
        String year = in.next();
        
        System.out.println(getDay(day, month, year));
    }
}
