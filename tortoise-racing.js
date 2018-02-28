/*
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (don't worry for fractions of second).

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin.
*/


/* My Solution */

function race(v1, v2, g) {
    if( v1 >= v2) return null;
    let dist_A = g;
    let dist_B = 0;
    let time = -1;
    while (dist_A > dist_B){
      dist_A += v1/3600;
      dist_B += v2/3600;
      time += 1;
    }
    let hh = Math.floor(time / 3600);
    let mm = Math.floor((time % 3600) / 60);
    let ss = time % 60;
    return[hh , mm, ss];
}
