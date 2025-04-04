export interface ObjectsStrategy {
    getObjects: () => Promise<any>;
}

export class FakeObjectsStrategy implements ObjectsStrategy {
    getObjects = async  () => ["1","2","2"]
}