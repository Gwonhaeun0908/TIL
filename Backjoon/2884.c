#include <stdio.h>
int main()
{
	int hour, min, result;

	scanf("%d %d", &hour, &min);

	result = hour * 60 + min;

	result -= 45;

	if (result < 0)
	{
		result += 1440;
	}

	hour = result / 60;

	min = result % 60;

	printf("%d %d", hour, min);

	return 0;
}