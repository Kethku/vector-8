attribute vec2 a_position;
attribute vec4 a_color;

varying highp vec4 v_color;

uniform vec4 u_camera_dimensions;

void main() {
  gl_Position = vec4((a_position - u_camera_dimensions.xy - u_camera_dimensions.zw / 2.0) / (u_camera_dimensions.zw / 2.0), 0, 1);
  v_color = a_color;
}
