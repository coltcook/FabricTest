// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import * as application from "application";

declare var com: any;
declare var io: any;

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
})
class AppComponentModule {}

// I know this isn't safe for iOS, only concerned about Android at the moment (our Mac Pro's aren't setup at work yet)
application.on(application.launchEvent, function (args: application.ApplicationEventData) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");

    let crashy = new com.crashlytics.android.Crashlytics();
    console.log(`Crashy Version in App Launch: ${crashy.getVersion()}`);
    console.log(`Fabric Is Init in App Launch: ${io.fabric.sdk.android.Fabric.isInitialized()}\n\n`);

    // This shouldn't work (except for per their docs). Their docs (https://docs.fabric.io/javadocs/fabric/1.3.13/index.html) show the first param being context,
    // but their example (https://fabric.io/kits/android/crashlytics/install) shows the main activity as the first param.
    //io.fabric.sdk.android.Fabric.with(application.android.context, new com.crashlytics.android.Crashlytics());
});

application.android.on(application.AndroidApplication.activityCreatedEvent, function (args: application.AndroidActivityBundleEventData) {
    console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);

    let crashy = new com.crashlytics.android.Crashlytics();
    console.log(`Crashy Version in Activity Created: ${crashy.getVersion()}`);
    console.log(`Fabric Is Init in Activity Created: ${io.fabric.sdk.android.Fabric.isInitialized()}\n\n`);

    // Their install example (https://fabric.io/kits/android/crashlytics/install) shows the main activity as the first param, so I would think this would work.
    //io.fabric.sdk.android.Fabric.with(args.activity, new com.crashlytics.android.Crashlytics());
});

application.android.on(application.AndroidApplication.activityStartedEvent, function (args: application.AndroidActivityEventData) {
    console.log("Event: " + args.eventName + ", Activity: " + args.activity);

    let crashy = new com.crashlytics.android.Crashlytics();
    console.log(`Crashy Version in Activity Started: ${crashy.getVersion()}`);
    console.log(`Fabric Is Init in  Activity Started: ${io.fabric.sdk.android.Fabric.isInitialized()}\n\n`);
    console.log(application.android.foregroundActivity);

    // Their install example (https://fabric.io/kits/android/crashlytics/install) shows the main activity as the first param, so I would think this would work.
    //io.fabric.sdk.android.Fabric.with(args.activity, new com.crashlytics.android.Crashlytics());
});

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);