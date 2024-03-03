export class ObjectManipulator {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor(protected obj: object) {}

  public set<T>(key: string | number, value: T): ObjectManipulator {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get(key: string | number) {
    return this.obj[key];
  }

  public delete(key: string | number): ObjectManipulator {
    const newObj: object = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject(): object {
    return this.obj;
  }
}
