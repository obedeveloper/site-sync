import type { Item } from './types';

export const items = new (class {
	values: Item[] = $state([]);

	get total() {
		return this.values.reduce((prev, curr) => prev + curr.quantity * curr.unitPrice, 0);
	}

	private getIndex(id: number) {
		return this.values.findIndex((item) => item.id === id);
	}

	delete(id: number) {
		this.values.splice(this.getIndex(id), 1);
	}

	duplicate(id: number) {
		const index = this.getIndex(id);
		this.values = [
			...this.values.slice(0, index + 1),
			{ ...this.values[index], id: Date.now() },
			...this.values.slice(index + 1)
		];
	}

	moveUp(id: number) {
		const index = this.getIndex(id);
		if (index === 0) return;

		const item = this.values[index];
		this.values.splice(index, 1);
		this.values.splice(index - 1, 0, item);
	}

	moveDown(id: number) {
		const index = this.getIndex(id);
		if (index === this.values.length - 1) return;

		const item = this.values[index];
		this.values.splice(index, 1);
		this.values.splice(index + 1, 0, item);
	}

	clear() {
		this.values = [];
	}
})();
