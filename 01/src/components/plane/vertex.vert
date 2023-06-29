varying vec2 v_uv;

void main() {
    vec3 pos = position;


    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    
    v_uv = uv;
}