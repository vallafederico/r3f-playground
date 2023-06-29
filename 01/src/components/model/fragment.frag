uniform float u_time;
varying vec2 v_uv;
varying vec3 v_normal;


uniform sampler2D u_diff;
uniform sampler2D u_rough;
uniform sampler2D u_nor;


void main() {
    vec3 diff = texture2D(u_diff, v_uv).rgb;
    vec3 nor = texture2D(u_nor, v_uv).rgb;

    vec3 h_sky = vec3(1., 1., 1.);
    vec3 h_ground = vec3(.1, .1, .1);
    vec3 h_dir = normalize(vec3(0., -2., 1.5));
    vec3 hlight = mix(h_ground, h_sky, 1. - (dot(h_dir, v_normal) + dot(h_dir, nor)));

    vec3 col = diff * hlight;

    // gl_FragColor.rgb = vec3(v_uv, 0.);
    gl_FragColor.rgb = col;
    gl_FragColor.a = 1.0;
}