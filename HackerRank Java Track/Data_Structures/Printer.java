//Problem name: Java Generics
class Printer
{
   public <T> void printArray(T[] arr){
       for(T ele : arr){
           System.out.println(ele);
       }
   }
}
