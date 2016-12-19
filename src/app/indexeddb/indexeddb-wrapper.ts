export class IndexeddbWrapper {
  dbName: string;
  dbVersion: number;
  db: IDBDatabase;

  constructor(dbName: string, dbVersion: number) {
    this.dbName = dbName;
    this.dbVersion = dbVersion || 1;
    this.db = null;
  }

  checkStoreName(storeName: string) {
    return this.db.objectStoreNames.contains(storeName);
  };

  checkTransaction(storeName: string, reject: Function) {
    if (!this.db) {
      reject('You need to create a database with the createStore function first before you query it.');
    }
    if (!this.checkStoreName(storeName)) {
      reject(('objectStore does not exist: ' + storeName));
    }
  }

  createTransaction(options: {storeName: string, dbMode: string, error: (event: Event) => any, complete: (event: Event) => any, abort?: (event: Event) => any}): IDBTransaction {
    let transaction: IDBTransaction = this.db.transaction(options.storeName, options.dbMode);
    transaction.onerror = options.error;
    transaction.oncomplete = options.complete;
    transaction.onabort = options.abort;
    return transaction;
  }
}
