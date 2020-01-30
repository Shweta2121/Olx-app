import { IDataModel } from "../interfaces/data-model";

export class DataService<T> {
    private table: T[] = [];

    async add(data: T) {
        const now = new Date();
        const pl: T = {
            id: now.getTime(),
            createdAt: now,
            modifiedAt: now,
            isActive: true,
            ...data
        };
        this.table.push(pl);
        return pl;
    }
    async get(id: number) {
        return this.table.find(v => (v as IDataModel).id === id);

    }
    async list(query?: (value: T) => boolean) {
        let pl = [];
        if (query) pl = this.table.filter(query);
        else pl = this.table;
        return pl;
    }
}
