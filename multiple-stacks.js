function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.log("This is coming from C");
}


function x() {
    y();
}

function y() {
    z();
}

function z() {
    console.log("This is coming from Z");
}

setTimeout(a, 0);

x();