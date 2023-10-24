import java.util.Scanner;
public class ArrayShuffle {
	public static void shuffle(int[] arr)
	{
		int n = arr.length;
		int increment = 7;
		
		for (int i = 0; i < n; i++)
		{
			int j = (i + increment)%n;
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Enter the number of elements in the array: ");
		
		int n = scanner.nextInt();
		int[] array = new int[n];
		
		System.out.println("Enter the array elements:");
		
		for (int i = 0; i < n; i++)
		{
			array[i] = scanner.nextInt();
		}
		shuffle(array);
		
		System.out.print("Shuffled Array: ");
		
		for(int a:array)
		{
			System.out.print(a+" ");
		}
	}
}

	

