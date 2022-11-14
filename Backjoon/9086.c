#include <stdio.h>

int main() {
	char arr[1000] = " ", first, last;
	int n, len = 0;
	scanf("%d", &n);

	for (int i = 0; i < n; i++) {
		scanf("%s", arr);

		len = strlen(arr);
		first = arr[0];
		last = arr[len - 1];

		printf("%c%c\n", first, last);
	}

	return 0;
}