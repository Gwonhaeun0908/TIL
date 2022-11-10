#include <stdio.h>

int main() {
	char arr[100] = {" "};
	int len;
	scanf("%s", arr);

	len = strlen(arr);

	printf("%d", len);

	return 0;
}