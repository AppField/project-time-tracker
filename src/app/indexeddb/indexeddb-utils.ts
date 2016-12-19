import {DbMode} from "./indexeddb-dbmode.interface";

export class IndexedDBUtils {
  dbMode: DbMode;
  indexedDB: IDBFactory;

  constructor() {
    this.indexedDB = window.indexedDB || (<any>window).mozIndexedDB || (<any>window).webkitIndexedDB || (<any>window).msIndexedDB;
    this.dbMode = {
      readOnly: 'readonly',
      readWrite: 'readwrite'
    };
  }
}
