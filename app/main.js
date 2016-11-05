"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var application = require("application");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
// I know this isn't safe for iOS, only concerned about Android at the moment (our Mac Pro's aren't setup at work yet)
application.on(application.launchEvent, function (args) {
    // For Android applications, args.android is an android.content.Intent class.
    console.log("Launched Android application with the following intent: " + args.android + ".");
    var crashy = new com.crashlytics.android.Crashlytics();
    console.log("Crashy Version in App Launch: " + crashy.getVersion());
    console.log("Fabric Is Init in App Launch: " + io.fabric.sdk.android.Fabric.isInitialized() + "\n\n");
    // This shouldn't work (except for per their docs). Their docs (https://docs.fabric.io/javadocs/fabric/1.3.13/index.html) show the first param being context,
    // but their example (https://fabric.io/kits/android/crashlytics/install) shows the main activity as the first param.
    //io.fabric.sdk.android.Fabric.with(application.android.context, new com.crashlytics.android.Crashlytics());
});
application.android.on(application.AndroidApplication.activityCreatedEvent, function (args) {
    console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    var crashy = new com.crashlytics.android.Crashlytics();
    console.log("Crashy Version in Activity Created: " + crashy.getVersion());
    console.log("Fabric Is Init in Activity Created: " + io.fabric.sdk.android.Fabric.isInitialized() + "\n\n");
    // Their install example (https://fabric.io/kits/android/crashlytics/install) shows the main activity as the first param, so I would think this would work.
    //io.fabric.sdk.android.Fabric.with(args.activity, new com.crashlytics.android.Crashlytics());
});
application.android.on(application.AndroidApplication.activityStartedEvent, function (args) {
    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    var crashy = new com.crashlytics.android.Crashlytics();
    console.log("Crashy Version in Activity Started: " + crashy.getVersion());
    console.log("Fabric Is Init in  Activity Started: " + io.fabric.sdk.android.Fabric.isInitialized() + "\n\n");
    console.log(application.android.foregroundActivity);
    // Their install example (https://fabric.io/kits/android/crashlytics/install) shows the main activity as the first param, so I would think this would work.
    //io.fabric.sdk.android.Fabric.with(args.activity, new com.crashlytics.android.Crashlytics());
});
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map