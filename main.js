var x = document.querySelectorAll('iframe'), m = 0, s = 0;
for (var i = 0; i < x.length; i++) {
    var y = x[i].parentNode.innerText.split('(');
    var z = y[1].split(':');
    m += parseInt(z[0]);
    s += parseInt(z[1]);
}
m += Math.floor(s / 60);
s = s % 60;
console.log(m + " " + s);
