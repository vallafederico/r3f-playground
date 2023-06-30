uniform float u_time;

varying vec2 v_uv;
varying vec3 v_normal;

#include ../_chunks/rotate3d.glsl


void main() {
    vec3 pos = position;
    vec3 nor = normal;

    pos = rotate(pos, vec3(1.0, 0.8, 0.2), u_time);
    nor = rotate(nor, vec3(1.0, 0.8, 0.2), u_time);



    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    
    v_normal = normalize(nor * inverse(normalMatrix));
    v_uv = uv;
}