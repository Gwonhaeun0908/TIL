#include <stdio.h>

int main() {
	int a, x, n;
	scanf("%d %d", &a, &x);
	
	for (int i = 0; i < a; i++) {
		scanf("%d", &n);
		if (x > n) {
			printf("%d ", n);
		}
	}

	return 0;
}