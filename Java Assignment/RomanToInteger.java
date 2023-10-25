import java.util.Scanner;
public class RomanToInteger {
	
	    public static int romanToInteger(String roman)
	    {
	    		if (!isValidRoman(roman)) 
	    		{
	            System.out.println("Error: Invalid Roman Numeral.");
	            return -1;
	    		}
	        
	        int result = 0;
	        int prevValue = 0;

	        for (int i = roman.length() - 1; i >= 0; i--)
	        {
	            int currentValue = getValue(roman.charAt(i));
	            
	            if (currentValue < prevValue) 
	            {
	                result -= currentValue;
	            } else 
	            {
	                result += currentValue;
	            }

	            prevValue = currentValue;  
	        }
	        return result;
	    }

	    public static boolean isValidRoman(String roman) 
	    {
	        return roman.matches("^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$");
	    }

	    public static int getValue(char c) 
	    {
	        switch (Character.toUpperCase(c))
	        {
	            case 'I': return 1;
	            case 'V': return 5;
	            case 'X': return 10;
	            case 'L': return 50;
	            case 'C': return 100;
	            case 'D': return 500;
	            case 'M': return 1000;
	            default: return -1;
	        }
	    }

	    public static void main(String[] args)
	    {
	        Scanner scanner = new Scanner(System.in);

	        System.out.print("Enter a Roman Numeral: ");
	        
	        String romanNumeral = scanner.nextLine().toUpperCase(); 
	        int result = romanToInteger(romanNumeral);

	        if (result != -1) 
	        {
	            System.out.println("Roman Numeral: " + romanNumeral);
	            
	            System.out.println("Integer: " + result);
	        }

	       
	     }
	}
