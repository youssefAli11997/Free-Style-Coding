// link: https://www.hackerrank.com/challenges/java-anagrams/problem
// solved using: bitmasks
static boolean isAnagram(String a, String b) {
    if(a.length() != b.length())
        return false;
    a = a.toLowerCase();
    b = b.toLowerCase();
    int maskA = 0, maskB = 0;
    for(int i=0; i<a.length(); i++){
        maskA ^= 1 << (a.charAt(i)-'a');
        maskB ^= 1 << (b.charAt(i)-'a');
    }
    return maskA == maskB;
}
