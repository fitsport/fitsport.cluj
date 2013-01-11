function runOnLoad(f) {
    if (runOnLoad.loaded) f();
    else runOnLoad.funcs.push(f);
}

runOnLoad.funcs = [];
runOnLoad.loaded = false;

runOnLoad.run = function() {
    if (runOnLoad.loaded) return;

    for(var i = 0; i < runOnLoad.funcs.length; i++) {
        try { runOnLoad.funcs[i](); }
        catch(e) {  }
    }
    
    runOnLoad.loaded = true;
    delete runOnLoad.funcs;
    delete runOnLoad.run;
};

if (window.addEventListener)
    window.addEventListener("load", runOnLoad.run, false);
else if (window.attachEvent) window.attachEvent("onload", runOnLoad.run);
else window.onload = runOnLoad.run;