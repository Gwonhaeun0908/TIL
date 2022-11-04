#include <stdio.h>

int main() {
	long long int N, M;
	scanf("%lld %lld", &N, &M);
	
	if (N < M) {
		printf("%lld", M - N);
	}
	else {
		printf("%lld", N - M);
	}

	return 0;
}