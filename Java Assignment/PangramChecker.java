import java.util.Scanner;
public class Pangram {
	
	    public static boolean isPangram(String str) 
	    {
	        int[] charCount = new int[26];
	        str = str.toLowerCase();

	        for (char c : str.toCharArray())
	        {
	            if (Character.isLetter(c))
	            {
	                charCount[c - 'a']++;
	            }
	        }

	        for (int count : charCount)
	        {
	            if (count == 0) 
	            {
	                return false;
	            }
	        }

	        return true;
	    }

	    public static void main(String[] args) 
	    {
	        Scanner scanner = new Scanner(System.in);

	        System.out.print("Enter a sentence: ");
	        
	        String sentence = scanner.nextLine();
	        boolean isPangram = isPangram(sentence);
	        
	        if (isPangram)
	        {
	            System.out.println("The input is a Pangram.");
	        } else 
	        {
	            System.out.println("The input is not a Pangram.");
	        }

	        
	    }
	}
