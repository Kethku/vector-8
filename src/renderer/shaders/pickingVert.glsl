attribute vec2 a_position;
attribute vec4 a_pickId;

varying vec4 v_pickId;

uniform vec4 u_camera_dimensions;

void main() {
  gl_Position = vec4((a_position - u_camera_dimensions.xy - u_camera_dimensions.zw / 2.0) / (u_camera_dimensions.zw / 2.0), 0, 1);
  a_pickId = v_pickId;
}
