import {AppStore} from "./app-store";

/**
 * Abstract class to provide utility methods for action creators
 */
export class Actions {

    constructor(private appStore:AppStore) {
        this.appStore = appStore;
    }

    public createDispatcher(action:(...n:any[])=>any):(...n)=>void {
        return (...n)=>this.appStore.dispatch(action.call(this, ...n))
    }

}
