class Add {
    
    public void add(Integer...numbers){
        int sum = 0;
        for(int i=0; i<numbers.length; i++){
            if(i>0)
                System.out.print("+");
            System.out.print(numbers[i]);
            sum +=  numbers[i];
        }
        System.out.println("=" + sum);
    }
    
}
