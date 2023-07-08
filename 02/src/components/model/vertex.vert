uniform float u_time;

varying vec2 v_uv;
varying vec3 v_normal;



void main() {
    vec3 pos = position;
    vec3 nor = normal;


    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    
    v_normal = normalize(nor * inverse(normalMatrix));
    v_uv = uv;
}