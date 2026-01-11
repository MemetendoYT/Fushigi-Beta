#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 0) uniform sampler2D fp_t_tcb_20;
layout (binding = 1) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise vec3 temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    // 0x000008: 0x4C98079C0207000B Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x010404000007F008 Mov32i
    // 0x000028: 0xE003FF870FF7FF01 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0xE003FF874FF7FF02 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000038: 0x5080000000470000 Mufu
    // 0x000048: 0x4C68100C04A70103 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x4C68100C04B70202 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000058: 0xE043FF8B0007FF04 Ipa
    temp_8 = in_attr3.x;
    // 0x000068: 0xE043FF8B4007FF05 Ipa
    temp_9 = in_attr3.y;
    // 0x000070: 0xE043FF8B8007FF06 Ipa
    temp_10 = in_attr3.z;
    // 0x000078: 0xDEBA0000C0B70404 TexB
    temp_11 = texture(fp_t_cb7_20, vec3(temp_8, temp_9, temp_10)).x;
    // 0x000088: 0xD822020070270302 Texs
    temp_12 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_13 = temp_12.x;
    temp_14 = temp_12.y;
    temp_15 = temp_12.z;
    // 0x000090: 0xE04BFF8A4007FF01 Ipa
    temp_16 = in_attr2.y;
    temp_17 = clamp(temp_16, 0.0, 1.0);
    // 0x000098: 0xE043FF8A0007FF09 Ipa
    temp_18 = in_attr2.x;
    // 0x0000A8: 0x4C98079802870006 Mov
    // 0x0000B0: 0x4C9807980297000B Mov
    // 0x0000B8: 0x33A0044000070108 Ffma
    temp_19 = fma(temp_17, -2.0, 3.0);
    // 0x0000C8: 0x5C68100000170101 Fmul
    temp_20 = temp_17 * temp_17;
    // 0x0000D0: 0x5C68100000170801 Fmul
    temp_21 = temp_19 * temp_20;
    // 0x0000D8: 0x4C9807980B470008 Mov
    // 0x0000E8: 0x4C68101803770101 Fmul
    temp_22 = temp_21 * fp_c6.data[13].w;
    // 0x0000F0: 0x49A504980BC70409 Ffma
    temp_23 = 0.0 - fp_c6.data[47].x;
    temp_24 = fma(temp_11, temp_23, temp_18);
    temp_25 = clamp(temp_24, 0.0, 1.0);
    // 0x0000F8: 0xE043FF898007FF04 Ipa
    temp_26 = in_attr1.z;
    // 0x000108: 0x51A204180B470205 Ffma
    temp_27 = 0.0 - fp_c6.data[45].x;
    temp_28 = fma(temp_13, fp_c6.data[45].x, temp_27);
    // 0x000110: 0x5080000000370909 Mufu
    temp_29 = log2(temp_25);
    // 0x000118: 0x51A204180B470302 Ffma
    temp_30 = 0.0 - fp_c6.data[45].x;
    temp_31 = fma(temp_14, fp_c6.data[45].x, temp_30);
    // 0x000128: 0xE043FF88C007FF03 Ipa
    temp_32 = in_attr0.w;
    // 0x000130: 0x51A204180B470707 Ffma
    temp_33 = 0.0 - fp_c6.data[45].x;
    temp_34 = fma(temp_15, fp_c6.data[45].x, temp_33);
    // 0x000138: 0x4C98079802A70008 Mov
    // 0x000148: 0x51A0031802870505 Ffma
    temp_35 = fma(temp_28, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000150: 0x51A0059802970202 Ffma
    temp_36 = fma(temp_31, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000158: 0x51A0041802A70706 Ffma
    temp_37 = fma(temp_34, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000168: 0x49A102980BF70508 Ffma
    temp_38 = 0.0 - fp_c6.data[47].w;
    temp_39 = fma(temp_35, temp_38, temp_35);
    // 0x000170: 0x4C6810180317090A Fmul
    temp_40 = temp_29 * fp_c6.data[12].y;
    // 0x000178: 0x49A101180BF70209 Ffma
    temp_41 = 0.0 - fp_c6.data[47].w;
    temp_42 = fma(temp_36, temp_41, temp_36);
    // 0x000188: 0x49A103180BF7060B Ffma
    temp_43 = 0.0 - fp_c6.data[47].w;
    temp_44 = fma(temp_37, temp_43, temp_37);
    // 0x000190: 0x5C60178000870508 Fmnmx
    temp_45 = max(temp_35, temp_39);
    // 0x000198: 0x49A2009803670105 Ffma
    temp_46 = 0.0 - temp_22;
    temp_47 = fma(temp_22, fp_c6.data[13].z, temp_46);
    // 0x0001A8: 0x5C90008000A7000A Rro
    // 0x0001B0: 0x5080000000270A07 Mufu
    temp_48 = exp2(temp_40);
    // 0x0001B8: 0x5C60178000970209 Fmnmx
    temp_49 = max(temp_36, temp_42);
    // 0x0001C8: 0x49A2009803470102 Ffma
    temp_50 = 0.0 - temp_22;
    temp_51 = fma(temp_22, fp_c6.data[13].x, temp_50);
    // 0x0001D0: 0x5C60178000B7060B Fmnmx
    temp_52 = max(temp_37, temp_44);
    // 0x0001D8: 0x49A2009803570106 Ffma
    temp_53 = 0.0 - temp_22;
    temp_54 = fma(temp_22, fp_c6.data[13].y, temp_53);
    // 0x0001E8: 0x4C58100C03870404 Fadd
    temp_55 = temp_26 + fp_c3.data[14].x;
    // 0x0001F0: 0x59A0040000270800 Ffma
    temp_56 = fma(temp_45, temp_51, temp_45);
    // 0x0001F8: 0x59A0058000570B02 Ffma
    temp_57 = fma(temp_52, temp_47, temp_52);
    // 0x000208: 0x59A0048000670901 Ffma
    temp_58 = fma(temp_49, temp_54, temp_49);
    // 0x000210: 0x0103F0000007F005 Mov32i
    // 0x000218: 0x5C9807800FF70006 Mov
    // 0x000228: 0x4C68101802B70707 Fmul
    temp_59 = temp_48 * fp_c6.data[10].w;
    // 0x000230: 0x49A37F8C03C70404 Ffma
    temp_60 = 0.0 - fp_c3.data[15].x;
    temp_61 = fma(temp_55, temp_60, -0.0);
    // 0x000238: 0x5C68100000770000 Fmul
    temp_62 = temp_56 * temp_59;
    // 0x000248: 0x5C68100000770101 Fmul
    temp_63 = temp_58 * temp_59;
    // 0x000250: 0x5C68100000770202 Fmul
    temp_64 = temp_57 * temp_59;
    // 0x000258: 0x5C98078000370007 Mov
    // 0x000268: 0xE30000000007000F Exit
    out_attr0.x = temp_62;
    out_attr0.y = temp_63;
    out_attr0.z = temp_64;
    out_attr0.w = temp_32;
    out_attr1.x = temp_61;
    out_attr1.y = 0.5;
    out_attr1.z = 0.0;
    out_attr1.w = temp_32;
    return;
}
