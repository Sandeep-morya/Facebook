function useGetRangeArray() {
	return (start: number, end: number, options?: Record<"reverse", boolean>) => {
		let arr = [];
		for (let i = start; i <= end; i++) {
			arr.push({ value: String(i), label: String(i) });
		}
		return options?.reverse ? arr.reverse() : arr;
	};
}

export default useGetRangeArray;
