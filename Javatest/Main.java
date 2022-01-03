public class Main {
    public static void main(String[] args) {
     // ...
    int n = 16;
    int result = 0;
    int tmp = 0;
    while(n > 0) {
        tmp = n % 10;
        result =+ tmp;
     }
    System.out.print(result);
}
}