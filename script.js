function maxminvalue() {
    let arr = [50,60,10,08,90,100,35];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    $("#max").append(max);
    $("#min").append(min);
}