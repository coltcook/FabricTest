"use strict";
var core_1 = require("@angular/core");
var application = require("application");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
        this.doStuff();
    };
    AppComponent.prototype.doStuff = function () {
        var crashy = new com.crashlytics.android.Crashlytics();
        console.log("Crashy Version: " + crashy.getVersion());
        console.log("Fabric Is Init: " + io.fabric.sdk.android.Fabric.isInitialized());
        console.log(application.android.foregroundActivity);
        // Their install example (https://fabric.io/kits/android/crashlytics/install) shows the main activity as the first param, so I would think this would work.
        //io.fabric.sdk.android.Fabric.with(application.android.foregroundActivity, new com.crashlytics.android.Crashlytics());
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map