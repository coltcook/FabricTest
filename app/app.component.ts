import {Component} from "@angular/core";
import * as application from "application";

declare var com: any;
declare var io: any;

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;

        this.doStuff();
    }

    doStuff(){
        let crashy = new com.crashlytics.android.Crashlytics();
        console.log(`Crashy Version: ${crashy.getVersion()}`);
        console.log(`Fabric Is Init: ${io.fabric.sdk.android.Fabric.isInitialized()}`);
        console.log(application.android.foregroundActivity);

        // Their install example (https://fabric.io/kits/android/crashlytics/install) shows the main activity as the first param, so I would think this would work.
        //io.fabric.sdk.android.Fabric.with(application.android.foregroundActivity, new com.crashlytics.android.Crashlytics());
    }
}
