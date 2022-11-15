#include <stdio.h>

int main() {
	char arr[100] = { 0 };
	scanf("%s", arr);

	for (int i = 0; arr[i] != 0; i++) {
		if (arr[i] > 96 && arr[i] < 123) {
			arr[i] -= 32;
		}
		else if (arr[i] > 64 && arr[i] < 91) {
			arr[i] += 32;
		}
	}
	printf("%s",arr);

	return 0;
}