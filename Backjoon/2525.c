#include <stdio.h>

int main()
{
	int h, m, t, result;

	scanf("%d %d %d", &h, &m,&t);

	result = h * 60 + m;

	result += t;

	h = (result / 60) % 24;

	m = result % 60;

	printf("%d %d", h, m);

	return 0;

}