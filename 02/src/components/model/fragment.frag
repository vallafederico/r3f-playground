uniform float u_time;

varying vec2 v_uv;
varying vec3 v_normal;




void main() {

    vec3 color = vec3(v_uv, 1.);

    gl_FragColor.rgb = vec3(v_uv, 1.);
    gl_FragColor.a = 1.0;
}