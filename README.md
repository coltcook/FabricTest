"# FabricTest" 

Trying to get Fabric.io (or more accurately Crashlytics) to work in NativeScript--it should be easy because of how simple it is in Android, but it always fails.
Yes that is my API Key, and no I don't really care.

App_Resources/AndroidManifest.xml and app.gradle are mostly in sync with: https://fabric.io/kits/android/crashlytics/install.
The big difference is in app.gradle, the "apply plugin" part throws an error for io.fabric. I've also tried adding that, as well as everything else to platforms/android/build.gradle (even though that wouldn't be a long term solution).
Even without that, you can call methods from each of the main classes in play here, Fabric and Crashlytics.

The docs I'm referencing for the calls are here: https://docs.fabric.io/javadocs/fabric/1.3.13/index.html and https://docs.fabric.io/javadocs/crashlytics/2.6.5/index.html

I commented out code that will cause the errors in main.ts, and app.component.ts.

This is the exception from running Fabric.with() -- (either with the context or main activity as the first param)
11-05 10:32:10.167  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]     from java.lang.Object com.tns.Runtime.callJSMethodNative(int, int, java.lang.String, int, boolean, java.lang.Object[])
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   native: #25 pc 0029787b  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (tns::CallbackHandlers::CallJSMethod(v8::Isolate*, _JNIEnv*, v8::Local<v8::Object> const&, std:
:string const&, _jobjectArray*)+667)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   native: #26 pc 002a3fc6  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (tns::Runtime::CallJSMethodNative(_JNIEnv*, _jobject*, int, _jstring*, int, unsigned char, _job
jectArray*)+406)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   native: #27 pc 002ad99e  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (Java_com_tns_Runtime_callJSMethodNative+222)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   native: #28 pc 002aa2c4  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethodNative(int, int, java.lang.String, int, boolean, java.lang
.Object[])+200)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   native: #29 pc 002aaff4  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.dispatchCallJSMethodNative(int, java.lang.String, boolean, long, java.
lang.Class, java.lang.Object[])+584)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   native: #30 pc 002aa11f  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethodImpl(java.lang.Object, java.lang.String, java.lang.Class,
boolean, long, java.lang.Object[])+1171)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   native: #31 pc 002a99c2  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, bool
ean, long, java.lang.Object[])+246)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   native: #32 pc 002a9a9a  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, bool
ean, java.lang.Object[])+158)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   native: #33 pc 002a9b36  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, java
.lang.Object[])+90)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethodNative(Native method)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:865)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethodImpl(Runtime.java:730)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethod(Runtime.java:716)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethod(Runtime.java:697)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethod(Runtime.java:687)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethodNative(Native method)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:865)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethodImpl(Runtime.java:730)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethod(Runtime.java:716)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethod(Runtime.java:697)
11-05 10:32:10.168  4230  4230 F art     : art/runtime/java_vm_ext.cc:410]   at com.tns.Runtime.callJSMethod(Runtime.java:687)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #27 pc 0029787b  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (tns::CallbackHandlers::CallJSMethod(v8::Isolate*, _JNIEnv*, v8::Local<v8::Object> const&, std::str
ing const&, _jobjectArray*)+667)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #28 pc 002a3fc6  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (tns::Runtime::CallJSMethodNative(_JNIEnv*, _jobject*, int, _jstring*, int, unsigned char, _jobject
Array*)+406)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #29 pc 002ad99e  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (Java_com_tns_Runtime_callJSMethodNative+222)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #30 pc 002aa2c4  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethodNative(int, int, java.lang.String, int, boolean, java.lang.Obj
ect[])+200)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #31 pc 002aaff4  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.dispatchCallJSMethodNative(int, java.lang.String, boolean, long, java.lang
.Class, java.lang.Object[])+584)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #32 pc 002aa11f  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethodImpl(java.lang.Object, java.lang.String, java.lang.Class, bool
ean, long, java.lang.Object[])+1171)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #33 pc 002a99c2  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, boolean,
 long, java.lang.Object[])+246)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #34 pc 002a9a9a  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, boolean,
 java.lang.Object[])+158)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #35 pc 002a9b36  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, java.lan
g.Object[])+90)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethodNative(Native method)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:865)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethodImpl(Runtime.java:730)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:716)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:697)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:687)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethodNative(Native method)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:865)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethodImpl(Runtime.java:730)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:716)
11-05 10:32:10.216  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:697)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:687)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #30 pc 0029787b  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (tns::CallbackHandlers::CallJSMethod(v8::Isolate*, _JNIEnv*, v8::Local<v8::Object> const&, std::str
ing const&, _jobjectArray*)+667)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #31 pc 002a3fc6  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (tns::Runtime::CallJSMethodNative(_JNIEnv*, _jobject*, int, _jstring*, int, unsigned char, _jobject
Array*)+406)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #32 pc 002ad99e  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (Java_com_tns_Runtime_callJSMethodNative+222)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #33 pc 002aa2c4  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethodNative(int, int, java.lang.String, int, boolean, java.lang.Obj
ect[])+200)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #34 pc 002aaff4  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.dispatchCallJSMethodNative(int, java.lang.String, boolean, long, java.lang
.Class, java.lang.Object[])+584)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #35 pc 002aa11f  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethodImpl(java.lang.Object, java.lang.String, java.lang.Class, bool
ean, long, java.lang.Object[])+1171)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #36 pc 002a99c2  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, boolean,
 long, java.lang.Object[])+246)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #37 pc 002a9a9a  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, boolean,
 java.lang.Object[])+158)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   native: #38 pc 002a9b36  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, java.lan
g.Object[])+90)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethodNative(Native method)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:865)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethodImpl(Runtime.java:730)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:716)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:697)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:687)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethodNative(Native method)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:865)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethodImpl(Runtime.java:730)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:716)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:697)
11-05 10:32:10.217  4230  4230 F art     : art/runtime/runtime.cc:366]   at com.tns.Runtime.callJSMethod(Runtime.java:687)
11-05 10:32:10.339  4158  4158 F DEBUG   :     #29 pc 0029787b  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (tns::CallbackHandlers::CallJSMethod(v8::Isolate*, _JNIEnv*, v8::Local<v8::Object> const&, std::string const&, _jobjectArray*)+667)
11-05 10:32:10.339  4158  4158 F DEBUG   :     #30 pc 002a3fc6  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (tns::Runtime::CallJSMethodNative(_JNIEnv*, _jobject*, int, _jstring*, int, unsigned char, _jobjectArray*)+406)
11-05 10:32:10.339  4158  4158 F DEBUG   :     #31 pc 002ad99e  /data/app/org.nativescript.FabricTest-1/lib/x86/libNativeScript.so (Java_com_tns_Runtime_callJSMethodNative+222)
11-05 10:32:10.339  4158  4158 F DEBUG   :     #32 pc 007e22c4  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (offset 0x538000) (java.lang.Object com.tns.Runtime.callJSMethodNative(int, int, java.lang.String, int, boolean, java.lang.Object[])+200)
11-05 10:32:10.339  4158  4158 F DEBUG   :     #33 pc 007e2ff4  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (offset 0x538000) (java.lang.Object com.tns.Runtime.dispatchCallJSMethodNative(int, java.lang.String, boolean, long, java.lang.Class, java.lan
g.Object[])+584)
11-05 10:32:10.339  4158  4158 F DEBUG   :     #34 pc 007e211f  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (offset 0x538000) (java.lang.Object com.tns.Runtime.callJSMethodImpl(java.lang.Object, java.lang.String, java.lang.Class, boolean, long, java.
lang.Object[])+1171)
11-05 10:32:10.339  4158  4158 F DEBUG   :     #35 pc 007e19c2  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (offset 0x538000) (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, boolean, long, java.lang
.Object[])+246)
11-05 10:32:10.339  4158  4158 F DEBUG   :     #36 pc 007e1a9a  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (offset 0x538000) (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, boolean, java.lang.Objec
t[])+158)
11-05 10:32:10.339  4158  4158 F DEBUG   :     #37 pc 007e1b36  /data/app/org.nativescript.FabricTest-1/oat/x86/base.odex (offset 0x538000) (java.lang.Object com.tns.Runtime.callJSMethod(java.lang.Object, java.lang.String, java.lang.Class, java.lang.Object[])+90)
