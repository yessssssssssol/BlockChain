// LocalStorage API
// Geolocation API

localStorage.setItem(<key>, <value>)
localStorage.getItem(<key>)
localStorage.clearItem(<key>)
localStorage.clear()

geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);

interface SStorage<T> {
  [key:string]: T
}

class LocalStorage<T> {
  private storage : SStorage<T> = {}
  set(key: string, value: T){
    this.storage[key] = value
  }
  remove(key:string){
    delete this.storage[key]
  }
  get(key:string):T{
    return this.storage[key]
  }
  clear(){
    this.storage = {}
  }
}

const stringsStorage = new LocalStorage<string>()

stringsStorage.get