precision highp float;

varying float v_color;

uniform vec3 u_color_0;
uniform vec3 u_color_1;
uniform vec3 u_color_2;
uniform vec3 u_color_3;
uniform vec3 u_color_4;
uniform vec3 u_color_5;
uniform vec3 u_color_6;
uniform vec3 u_color_7;

void main() {
  int index = int(mod(v_color, 8.0));
  if (index == 0) {
    gl_FragColor = vec4(u_color_0, 1.0);
  } else if (index == 1) {
    gl_FragColor = vec4(u_color_1, 1.0);
  } else if (index == 2) {
    gl_FragColor = vec4(u_color_2, 1.0);
  } else if (index == 3) {
    gl_FragColor = vec4(u_color_3, 1.0);
  } else if (index == 4) {
    gl_FragColor = vec4(u_color_4, 1.0);
  } else if (index == 5) {
    gl_FragColor = vec4(u_color_5, 1.0);
  } else if (index == 6) {
    gl_FragColor = vec4(u_color_6, 1.0);
  } else if (index == 7) {
    gl_FragColor = vec4(u_color_7, 1.0);
  }
}
