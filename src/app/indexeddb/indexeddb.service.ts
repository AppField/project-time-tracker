import {Injectable} from '@angular/core';

import {IndexeddbWrapper} from "./indexeddb-wrapper";


@Injectable()
export class IndexeddbService {
  private utils: IndexedDBUtils;
  private dbWrapper: IndexeddbWrapper;


  constructor(dbName: string, dbVersion: number) {
    this.utils = new IndexedDBUtils();
    this.dbWrapper = new IndexeddbWrapper(dbName, dbVersion);
  }

  createStore(version: number, upgradeCallback: Function) {
    return new Promise((resolve, reject) => {
      this.dbWrapper.dbVersion = version;
      let request = this.utils.indexedDB.open(this.dbWrapper.dbName, version);
      request.onsuccess = (event: Event) => {
        this.dbWrapper.db = request.result;
        resolve();
      };
      request.onerror = function (event: Event) {
        reject("IndexedDB error: " + (<any>event.target).errorCode);
      };
      request.onupgradeneeded = (event: Event) => {
        upgradeCallback(event, this.dbWrapper.db);
      }
    });
  }

  getByKey(storeName: string, key: any) {
    return new Promise((resolve, reject) => {
      this.dbWrapper.checkTransaction(storeName, key);

      let transaction = this.dbWrapper.createTransaction({
          storeName: storeName,
          dbMode: this.utils.dbMode.readOnly,
          error: (event: Event) => {
            reject(event);
          },
          complete: (event: Event) => {
          }
        }),
        objectStore = transaction.objectStore(storeName),
        request: IDBRequest;
      request = objectStore.get(key);

      request.onsuccess = function (event: Event) {
        resolve((<any>event.target).result);
      }
    });
  }

  getAll(storeName: string, keyRange?: IDBKeyRange) {
    return new Promise((resolve, reject) => {
      this.dbWrapper.checkTransaction(storeName, reject);

      let transaction = this.dbWrapper.createTransaction({
          storeName: storeName,
          dbMode: this.utils.dbMode.readOnly,
          error: (event: Event) => {
            reject(event);
          },
          complete: (event: Event) => {
          }
        }),
        objectStore = transaction.objectStore(storeName),
        result: Array<any> = [],
        request = objectStore.openCursor(keyRange);

      request.onerror = function (event: Event) {
        reject(event);
      };

      request.onsuccess = function (event: Event) {
        let cursor = (<IDBOpenDBRequest>event.target).result;
        if (cursor) {
          result.push(cursor.value);
          cursor["continue"]();
        }
        else {
          resolve(result);
        }
      }
    });
  }

  add(storeName: string, value: any, key?: any) {
    return new Promise((resolve, reject) => {
      this.dbWrapper.checkTransaction(storeName, reject);

      let transaction = this.dbWrapper.createTransaction({
          storeName: storeName,
          dbMode: this.utils.dbMode.readWrite,
          error: (event: Event) => {
            reject(event);
          },
          complete: (event: Event) => {
            resolve({key: key, value: value});
          }
        }),
        objectStore = transaction.objectStore(storeName);

      objectStore.add(value.key);
    });
  }

  update(storeName: string, value: any, key?: any) {
    return new Promise((resolve, reject) => {
      this.dbWrapper.checkTransaction(storeName, reject);

      let transaction = this.dbWrapper.createTransaction({
          storeName: storeName,
          dbMode: this.utils.dbMode.readWrite,
          error: (event: Event) => {
            reject(event);
          },
          complete: (event: Event) => {
            resolve(value);
          },
          abort: (event: Event) => {
            reject(event);
          }
        }),
        objectStore = transaction.objectStore(storeName);
      objectStore.put(value, key);
    });
  }

  delete(storeName: string, key: any) {
    return new Promise((resolve, reject) => {
      this.dbWrapper.checkTransaction(storeName, reject);

      let transaction = this.dbWrapper.createTransaction({
          storeName: storeName,
          dbMode: this.utils.dbMode.readWrite,
          error: (event: Event) => {
            reject(event);
          },
          complete: (event: Event) => {
            resolve();
          },
          abort: (event: Event) => {
            reject(event);
          }
        }),
        objectStore = transaction.objectStore(storeName);
      objectStore["delete"](key);
    });
  }

  openCursor(storeName: string, cursorCallback: (event: Event) => void, keyRange?: IDBKeyRange) {
    return new Promise((resolve, reject) => {
      this.dbWrapper.checkTransaction(storeName, reject);

      let transaction = this.dbWrapper.createTransaction({
          storeName: storeName,
          dbMode: this.utils.dbMode.readOnly,
          error: (event: Event) => {
            reject(event);
          },
          complete: (event: Event) => {
            resolve();
          },
          abort: (event: Event) => {
            reject(event);
          }
        }),
        objectStore = transaction.objectStore(storeName),
        request = objectStore.openCursor(keyRange);

      request.onsuccess = function (event: Event) {
        cursorCallback(event);
        resolve();
      };
    });
  }

  clear(storeName: string) {
    return new Promise((resolve, reject) => {
      this.dbWrapper.checkTransaction(storeName, reject);

      let transaction = this.dbWrapper.createTransaction({
          storeName: storeName,
          dbMode: this.utils.dbMode.readWrite,
          error: (event: Event) => {
            reject(event);
          },
          complete: (event: Event) => {
            resolve();
          },
          abort: (event: Event) => {
            reject(event);
          }
        }),
        objectStore = transaction.objectStore(storeName);
      objectStore.clear();
      resolve();
    });
  }

  getByIndex(storeName: string, indexName: string, key: any) {
    return new Promise((resolve, reject) => {
      this.dbWrapper.checkTransaction(storeName, reject);

      let transaction = this.dbWrapper.createTransaction({
          storeName: storeName,
          dbMode: this.utils.dbMode.readOnly,
          error: (event: Event) => {
            reject(event);
          },
          complete: (event: Event) => {
            resolve();
          },
          abort: (event: Event) => {
            reject(event);
          }
        }),
        objectStore = transaction.objectStore(storeName),
        index = objectStore.index(indexName),
        request = index.get(key);

      request.onsuccess = function (event: Event) {
        resolve((<IDBOpenDBRequest>event.target).result);
      };
    });
  }
}
