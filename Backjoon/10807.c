#include <stdio.h>

int main() {
	int n, v, i, j, cnt = 0;
	int arr[100];
	scanf("%d", &n);

	for (i = 0; i < n; i++) {
		scanf("%d", &arr[i]);
	}

	scanf("%d", &v);

	for (j = 0; j < n; j++) {
		if (arr[j] == v) {
			cnt++;
		}
	}

	printf("%d", cnt);

	return 0;
}