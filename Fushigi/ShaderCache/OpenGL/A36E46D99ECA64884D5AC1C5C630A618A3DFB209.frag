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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_8;
layout (binding = 1) uniform samplerCube fp_t_tcb_16;
layout (binding = 2) uniform sampler2D fp_t_tcb_34;
layout (binding = 3) uniform sampler2D fp_t_tcb_20;
layout (binding = 4) uniform sampler2D fp_t_tcb_32;
layout (binding = 5) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 7) in vec4 in_attr7;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
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
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise vec3 temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise vec3 temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise vec3 temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    // 0x000008: 0xE003FF87CFF7FF07 Ipa
    // 0x000010: 0x5080000000470707 Mufu
    // 0x000018: 0xE043FF8C8077FF08 Ipa
    temp_0 = in_attr4.z;
    // 0x000028: 0xE043FF8CC077FF09 Ipa
    temp_1 = in_attr4.w;
    // 0x000030: 0xD830008FF0970808 Texs
    temp_2 = texture(fp_t_tcb_8, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000038: 0xE043FF8A0077FF00 Ipa
    temp_5 = in_attr2.x;
    // 0x000048: 0xE043FF8A4077FF02 Ipa
    temp_6 = in_attr2.y;
    // 0x000050: 0xE043FF8A8077FF0D Ipa
    temp_7 = in_attr2.z;
    // 0x000058: 0xE043FF880077FF01 Ipa
    temp_8 = in_attr0.x;
    // 0x000068: 0xE043FF884077FF0C Ipa
    temp_9 = in_attr0.y;
    // 0x000070: 0xE043FF888077FF06 Ipa
    temp_10 = in_attr0.z;
    // 0x000078: 0xE003FF870FF7FF10 Ipa
    temp_11 = gl_FragCoord.x;
    temp_12 = support_buffer.render_scale[0];
    temp_13 = temp_11 / temp_12;
    // 0x000088: 0xE003FF874FF7FF11 Ipa
    temp_14 = gl_FragCoord.y;
    temp_15 = support_buffer.render_scale[0];
    temp_16 = temp_14 / temp_15;
    // 0x000090: 0x5C68100000070003 Fmul
    temp_17 = temp_5 * temp_5;
    // 0x000098: 0x5C6810000017010B Fmul
    temp_18 = temp_8 * temp_8;
    // 0x0000A8: 0x59A0018000270203 Ffma
    temp_19 = fma(temp_6, temp_6, temp_17);
    // 0x0000B0: 0x4C68100C04A71010 Fmul
    temp_20 = temp_13 * fp_c3.data[18].z;
    // 0x0000B8: 0x4C68100C04B71111 Fmul
    temp_21 = temp_16 * fp_c3.data[18].w;
    // 0x0000C8: 0x59A0058000C70C0B Ffma
    temp_22 = fma(temp_9, temp_9, temp_18);
    // 0x0000D0: 0x59A0018000D70D0A Ffma
    temp_23 = fma(temp_7, temp_7, temp_19);
    // 0x0000D8: 0x5080000000570A03 Mufu
    temp_24 = inversesqrt(temp_23);
    // 0x0000E8: 0x59A005800067060B Ffma
    temp_25 = fma(temp_10, temp_10, temp_22);
    // 0x0000F0: 0x5080000000570B0B Mufu
    temp_26 = inversesqrt(temp_25);
    // 0x0000F8: 0x5C69100000370000 Fmul
    temp_27 = 0.0 - temp_24;
    temp_28 = temp_5 * temp_27;
    // 0x000108: 0x5C69100000370202 Fmul
    temp_29 = 0.0 - temp_24;
    temp_30 = temp_6 * temp_29;
    // 0x000110: 0x5C69100000370D0D Fmul
    temp_31 = 0.0 - temp_24;
    temp_32 = temp_7 * temp_31;
    // 0x000118: 0x5C68100000B70101 Fmul
    temp_33 = temp_8 * temp_26;
    // 0x000128: 0x5C68100000B70C0C Fmul
    temp_34 = temp_9 * temp_26;
    // 0x000130: 0x5C68100000B70606 Fmul
    temp_35 = temp_10 * temp_26;
    // 0x000138: 0x4C58301805C70005 Fadd
    temp_36 = 0.0 - fp_c6.data[23].x;
    temp_37 = temp_28 + temp_36;
    // 0x000148: 0x4C58301805D70203 Fadd
    temp_38 = 0.0 - fp_c6.data[23].y;
    temp_39 = temp_30 + temp_38;
    // 0x000150: 0x4C58301805E70D04 Fadd
    temp_40 = 0.0 - fp_c6.data[23].z;
    temp_41 = temp_32 + temp_40;
    // 0x000158: 0x5C6810000017000F Fmul
    temp_42 = temp_28 * temp_33;
    // 0x000168: 0x4C69101805C7010A Fmul
    temp_43 = 0.0 - fp_c6.data[23].x;
    temp_44 = temp_33 * temp_43;
    // 0x000170: 0x5C62578000C70113 Fmnmx
    temp_45 = abs(temp_33);
    temp_46 = abs(temp_34);
    temp_47 = max(temp_45, temp_46);
    // 0x000178: 0x5C6810000057050E Fmul
    temp_48 = temp_37 * temp_37;
    // 0x000188: 0x4C68101805C7010B Fmul
    temp_49 = temp_33 * fp_c6.data[23].x;
    // 0x000190: 0x59A0078000C7020F Ffma
    temp_50 = fma(temp_30, temp_34, temp_42);
    // 0x000198: 0x5C60578001370617 Fmnmx
    temp_51 = abs(temp_35);
    temp_52 = max(temp_51, temp_47);
    // 0x0001A8: 0x59A007000037030E Ffma
    temp_53 = fma(temp_39, temp_39, temp_48);
    // 0x0001B0: 0x5080000000471717 Mufu
    temp_54 = 1.0 / temp_52;
    // 0x0001B8: 0x49A0059805D70C0B Ffma
    temp_55 = fma(temp_34, fp_c6.data[23].y, temp_49);
    // 0x0001C8: 0x4C98079C02070013 Mov
    // 0x0001D0: 0x59A007000047040E Ffma
    temp_56 = fma(temp_41, temp_41, temp_53);
    // 0x0001D8: 0x5080000000570E0E Mufu
    temp_57 = inversesqrt(temp_56);
    // 0x0001E8: 0x5C68100000E70505 Fmul
    temp_58 = temp_37 * temp_57;
    // 0x0001F0: 0x5C68100000E70303 Fmul
    temp_59 = temp_39 * temp_57;
    // 0x0001F8: 0x5C68100000E70404 Fmul
    temp_60 = temp_41 * temp_57;
    // 0x000208: 0x5C68100000570005 Fmul
    temp_61 = temp_28 * temp_58;
    // 0x000210: 0x49A1051805D70C00 Ffma
    temp_62 = 0.0 - fp_c6.data[23].y;
    temp_63 = fma(temp_34, temp_62, temp_44);
    // 0x000218: 0xE043FF8D0077FF0A Ipa
    temp_64 = in_attr5.x;
    // 0x000228: 0x59A0028000370202 Ffma
    temp_65 = fma(temp_30, temp_59, temp_61);
    // 0x000230: 0x59A4078000670D03 Ffma
    temp_66 = fma(temp_32, temp_35, temp_50);
    temp_67 = clamp(temp_66, 0.0, 1.0);
    // 0x000238: 0x49A5001805E7060E Ffma
    temp_68 = 0.0 - fp_c6.data[23].z;
    temp_69 = fma(temp_35, temp_68, temp_63);
    temp_70 = clamp(temp_69, 0.0, 1.0);
    // 0x000248: 0xE043FF8F0077FF00 Ipa
    temp_71 = in_attr7.x;
    // 0x000250: 0x49A0059805E7060F Ffma
    temp_72 = fma(temp_35, fp_c6.data[23].z, temp_55);
    // 0x000258: 0xE043FF8D4077FF0B Ipa
    temp_73 = in_attr5.y;
    // 0x000268: 0x5C69100001770606 Fmul
    temp_74 = 0.0 - temp_54;
    temp_75 = temp_35 * temp_74;
    // 0x000270: 0x5C68100001770C05 Fmul
    temp_76 = temp_34 * temp_54;
    // 0x000278: 0x59A4010000470D0D Ffma
    temp_77 = fma(temp_32, temp_60, temp_65);
    temp_78 = clamp(temp_77, 0.0, 1.0);
    // 0x000288: 0xE043FF8F8077FF02 Ipa
    temp_79 = in_attr7.z;
    // 0x000290: 0x5C68100001770104 Fmul
    temp_80 = temp_33 * temp_54;
    // 0x000298: 0xE043FF8F4077FF01 Ipa
    temp_81 = in_attr7.y;
    // 0x0002A8: 0xC0BA0163EFF70404 Tex
    temp_82 = textureLod(fp_t_tcb_16, vec3(temp_80, temp_76, temp_75), 0.0).xyz;
    temp_83 = temp_82.x;
    temp_84 = temp_82.y;
    temp_85 = temp_82.z;
    // 0x0002B0: 0xDEBA0000C1370002 TexB
    temp_86 = texture(fp_t_cb7_20, vec3(temp_71, temp_81, temp_79)).x;
    // 0x0002B8: 0xD822034140B70A0A Texs
    temp_87 = texture(fp_t_tcb_34, vec2(temp_64, temp_73)).xyz;
    temp_88 = temp_87.x;
    temp_89 = temp_87.y;
    temp_90 = temp_87.z;
    // 0x0002C8: 0xD822020121171010 Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_20, temp_21)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x0002D0: 0xE043FF8C0077FF15 Ipa
    temp_95 = in_attr4.x;
    // 0x0002D8: 0xF0F0000034370000 Depbar
    // 0x0002E8: 0x49A00A9405870815 Ffma
    temp_96 = fma(temp_3, fp_c5.data[22].x, temp_95);
    // 0x0002F0: 0xE043FF8C4077FF08 Ipa
    temp_97 = in_attr4.y;
    // 0x0002F8: 0x49A0041405970908 Ffma
    temp_98 = fma(temp_4, fp_c5.data[22].y, temp_97);
    // 0x000308: 0xD822032FF0871508 Texs
    temp_99 = texture(fp_t_tcb_32, vec2(temp_96, temp_98)).x;
    // 0x000310: 0x0103F0000007F009 Mov32i
    // 0x000318: 0x32A004BF00070C09 Ffma
    temp_100 = fma(temp_34, 0.5, 0.5);
    // 0x000328: 0x4C9807980087000C Mov
    // 0x000330: 0x4C59101800470C00 Fadd
    temp_101 = 0.0 - fp_c6.data[2].x;
    temp_102 = temp_101 + fp_c6.data[1].x;
    // 0x000338: 0x4C9807980097000C Mov
    // 0x000348: 0x51A0001800870901 Ffma
    temp_103 = fma(temp_100, temp_102, fp_c6.data[2].x);
    // 0x000350: 0x4C98079800A70000 Mov
    // 0x000358: 0x4C59101800570C0C Fadd
    temp_104 = 0.0 - fp_c6.data[2].y;
    temp_105 = temp_104 + fp_c6.data[1].y;
    // 0x000368: 0x4C59101800670000 Fadd
    temp_106 = 0.0 - fp_c6.data[2].z;
    temp_107 = temp_106 + fp_c6.data[1].z;
    // 0x000370: 0x51A006180097090C Ffma
    temp_108 = fma(temp_100, temp_105, fp_c6.data[2].y);
    // 0x000378: 0xF0F0000034370000 Depbar
    // 0x000388: 0x49A0020400170104 Ffma
    temp_109 = fma(temp_103, fp_c1.data[0].y, temp_83);
    // 0x000390: 0x51A0001800A70901 Ffma
    temp_110 = fma(temp_100, temp_107, fp_c6.data[2].z);
    // 0x000398: 0x01040DF760C7F000 Mov32i
    // 0x0003A8: 0x49A0028400170C05 Ffma
    temp_111 = fma(temp_108, fp_c1.data[0].y, temp_84);
    // 0x0003B0: 0x49A0030400170106 Ffma
    temp_112 = fma(temp_110, fp_c1.data[0].y, temp_85);
    // 0x0003B8: 0x49A2000400070D00 Ffma
    temp_113 = fma(temp_78, fp_c1.data[0].x, -6.98316002);
    // 0x0003C8: 0x5C68100000070D0D Fmul
    temp_114 = temp_78 * temp_113;
    // 0x0003D0: 0x4C98079809070000 Mov
    // 0x0003D8: 0x5C90008000D7000D Rro
    // 0x0003E8: 0x51A1001809070313 Ffma
    temp_115 = 0.0 - fp_c6.data[36].x;
    temp_116 = fma(temp_67, temp_115, fp_c6.data[36].x);
    // 0x0003F0: 0x5080000000270D09 Mufu
    temp_117 = exp2(temp_114);
    // 0x0003F8: 0x5080400000371313 Mufu
    temp_118 = abs(temp_116);
    temp_119 = log2(temp_118);
    // 0x000408: 0x49A1049407B70909 Ffma
    temp_120 = 0.0 - fp_c5.data[30].w;
    temp_121 = fma(temp_117, temp_120, temp_117);
    // 0x000410: 0x4C68101809171300 Fmul
    temp_122 = temp_119 * fp_c6.data[36].y;
    // 0x000418: 0x3859503F80070F13 Fadd
    temp_123 = abs(temp_72);
    temp_124 = 0.0 - temp_123;
    temp_125 = temp_124 + 1.0;
    // 0x000428: 0x5C5C30000FF70F0F Fadd
    temp_126 = temp_72 + -0.0;
    temp_127 = clamp(temp_126, 0.0, 1.0);
    // 0x000430: 0x5080400000371313 Mufu
    temp_128 = abs(temp_125);
    temp_129 = log2(temp_128);
    // 0x000438: 0x5C90008000070015 Rro
    // 0x000448: 0x4C98079809B70000 Mov
    // 0x000450: 0x5084000000271503 Mufu
    temp_130 = exp2(temp_122);
    temp_131 = clamp(temp_130, 0.0, 1.0);
    // 0x000458: 0x4C58101408170000 Fadd
    temp_132 = fp_c6.data[38].w + fp_c5.data[32].y;
    // 0x000468: 0x5C68100000370000 Fmul
    temp_133 = temp_132 * temp_131;
    // 0x000470: 0x4C68101801470E03 Fmul
    temp_134 = temp_70 * fp_c6.data[5].x;
    // 0x000478: 0x4C68101808C70001 Fmul
    temp_135 = temp_133 * fp_c6.data[35].x;
    // 0x000488: 0x1E23EA2F9837030C Fmul32i
    temp_136 = temp_134 * 0.318309873;
    // 0x000490: 0x4C58101407B70903 Fadd
    temp_137 = temp_121 + fp_c5.data[30].w;
    // 0x000498: 0x49A1009408270109 Ffma
    temp_138 = 0.0 - fp_c5.data[32].z;
    temp_139 = fma(temp_135, temp_138, temp_135);
    // 0x0004A8: 0x4C68101408270101 Fmul
    temp_140 = temp_135 * fp_c5.data[32].z;
    // 0x0004B0: 0x59A1060000C7030C Ffma
    temp_141 = 0.0 - temp_136;
    temp_142 = fma(temp_137, temp_141, temp_136);
    // 0x0004B8: 0x5C58100000970C0D Fadd
    temp_143 = temp_142 + temp_139;
    // 0x0004C8: 0x4C68101801570E09 Fmul
    temp_144 = temp_70 * fp_c6.data[5].y;
    // 0x0004D0: 0x4C68101801670E0E Fmul
    temp_145 = temp_70 * fp_c6.data[5].z;
    // 0x0004D8: 0x5C58100000470D04 Fadd
    temp_146 = temp_143 + temp_109;
    // 0x0004E8: 0x1E23EA2F98370909 Fmul32i
    temp_147 = temp_144 * 0.318309873;
    // 0x0004F0: 0x1E23EA2F98370E0E Fmul32i
    temp_148 = temp_145 * 0.318309873;
    // 0x0004F8: 0x49A0009402C70401 Ffma
    temp_149 = fma(temp_146, fp_c5.data[11].x, temp_140);
    // 0x000508: 0x59A1048000970309 Ffma
    temp_150 = 0.0 - temp_147;
    temp_151 = fma(temp_137, temp_150, temp_147);
    // 0x000510: 0x59A1070000E7030E Ffma
    temp_152 = 0.0 - temp_148;
    temp_153 = fma(temp_137, temp_152, temp_148);
    // 0x000518: 0x4C68101808D70003 Fmul
    temp_154 = temp_133 * fp_c6.data[35].y;
    // 0x000528: 0x4C68101808E70000 Fmul
    temp_155 = temp_133 * fp_c6.data[35].z;
    // 0x000530: 0x49A101940827030C Ffma
    temp_156 = 0.0 - fp_c5.data[32].z;
    temp_157 = fma(temp_154, temp_156, temp_154);
    // 0x000538: 0x49A100140827000D Ffma
    temp_158 = 0.0 - fp_c5.data[32].z;
    temp_159 = fma(temp_155, temp_158, temp_155);
    // 0x000548: 0x4C68101408270303 Fmul
    temp_160 = temp_154 * fp_c5.data[32].z;
    // 0x000550: 0x5C58100000C7090C Fadd
    temp_161 = temp_151 + temp_157;
    // 0x000558: 0x5C58100000D70E0D Fadd
    temp_162 = temp_153 + temp_159;
    // 0x000568: 0x010404000007F00E Mov32i
    // 0x000570: 0x5C58100000570C09 Fadd
    temp_163 = temp_161 + temp_111;
    // 0x000578: 0xE04BFF8E4077FF05 Ipa
    temp_164 = in_attr6.y;
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x000588: 0x5C58100000670D0C Fadd
    temp_166 = temp_162 + temp_112;
    // 0x000590: 0x4C6810140827000D Fmul
    temp_167 = temp_155 * fp_c5.data[32].z;
    // 0x000598: 0x49A0069402E70C0C Ffma
    temp_168 = fma(temp_166, fp_c5.data[11].z, temp_167);
    // 0x0005A8: 0x5C68100000570506 Fmul
    temp_169 = temp_165 * temp_165;
    // 0x0005B0: 0x33A0074000070504 Ffma
    temp_170 = fma(temp_165, -2.0, 3.0);
    // 0x0005B8: 0x4C68101406671305 Fmul
    temp_171 = temp_129 * fp_c5.data[25].z;
    // 0x0005C8: 0x33A0074000070F0E Ffma
    temp_172 = fma(temp_127, -2.0, 3.0);
    // 0x0005D0: 0x5C68100000F70F0F Fmul
    temp_173 = temp_127 * temp_127;
    // 0x0005D8: 0x5C68100000670404 Fmul
    temp_174 = temp_170 * temp_169;
    // 0x0005E8: 0x5C90008000570000 Rro
    // 0x0005F0: 0x0103F8000007F006 Mov32i
    // 0x0005F8: 0x5080000000270000 Mufu
    temp_175 = exp2(temp_171);
    // 0x000608: 0x5C68100000E70F05 Fmul
    temp_176 = temp_173 * temp_172;
    // 0x000610: 0x49A0019402D7090F Ffma
    temp_177 = fma(temp_163, fp_c5.data[11].y, temp_160);
    // 0x000618: 0xE043FF8E0077FF03 Ipa
    temp_178 = in_attr6.x;
    // 0x000628: 0x4C68101803770404 Fmul
    temp_179 = temp_174 * fp_c6.data[13].w;
    // 0x000630: 0x4C5C101402C7060E Fadd
    temp_180 = 1.0 + fp_c5.data[11].x;
    temp_181 = clamp(temp_180, 0.0, 1.0);
    // 0x000638: 0x4C5C101402D7060D Fadd
    temp_182 = 1.0 + fp_c5.data[11].y;
    temp_183 = clamp(temp_182, 0.0, 1.0);
    // 0x000648: 0x4C5C101402E70606 Fadd
    temp_184 = 1.0 + fp_c5.data[11].z;
    temp_185 = clamp(temp_184, 0.0, 1.0);
    // 0x000650: 0x5C68100000170E09 Fmul
    temp_186 = temp_181 * temp_149;
    // 0x000658: 0x5C68100000F70D01 Fmul
    temp_187 = temp_183 * temp_177;
    // 0x000668: 0x4C6810180147000D Fmul
    temp_188 = temp_175 * fp_c6.data[5].x;
    // 0x000670: 0x4C6810180157000E Fmul
    temp_189 = temp_175 * fp_c6.data[5].y;
    // 0x000678: 0x4C6810180167000F Fmul
    temp_190 = temp_175 * fp_c6.data[5].z;
    // 0x000688: 0x5C68100000C7060C Fmul
    temp_191 = temp_185 * temp_168;
    // 0x000690: 0x4C98079802870006 Mov
    // 0x000698: 0xF0F0000034170000 Depbar
    // 0x0006A8: 0x59A1068000D70A0D Ffma
    temp_192 = 0.0 - temp_188;
    temp_193 = fma(temp_88, temp_192, temp_188);
    // 0x0006B0: 0x59A1070000E70B0E Ffma
    temp_194 = 0.0 - temp_189;
    temp_195 = fma(temp_89, temp_194, temp_189);
    // 0x0006B8: 0x4C9807980B47000B Mov
    // 0x0006C8: 0x59A1078000F71414 Ffma
    temp_196 = 0.0 - temp_190;
    temp_197 = fma(temp_90, temp_196, temp_190);
    // 0x0006D0: 0x4C68101406770D00 Fmul
    temp_198 = temp_193 * fp_c5.data[25].w;
    // 0x0006D8: 0x4C68101406770E0E Fmul
    temp_199 = temp_195 * fp_c5.data[25].w;
    // 0x0006E8: 0x4C9807980297000D Mov
    // 0x0006F0: 0x51A205980B471010 Ffma
    temp_200 = 0.0 - fp_c6.data[45].x;
    temp_201 = fma(temp_92, fp_c6.data[45].x, temp_200);
    // 0x0006F8: 0x51A205980B47110F Ffma
    temp_202 = 0.0 - fp_c6.data[45].x;
    temp_203 = fma(temp_93, fp_c6.data[45].x, temp_202);
    // 0x000708: 0x51A205980B471212 Ffma
    temp_204 = 0.0 - fp_c6.data[45].x;
    temp_205 = fma(temp_94, fp_c6.data[45].x, temp_204);
    // 0x000710: 0x49A0049406C70000 Ffma
    temp_206 = fma(temp_198, fp_c5.data[27].x, temp_186);
    // 0x000718: 0x49A0009406C70E01 Ffma
    temp_207 = fma(temp_199, fp_c5.data[27].x, temp_187);
    // 0x000728: 0x51A0031802871006 Ffma
    temp_208 = fma(temp_201, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000730: 0x51A0069802970F0B Ffma
    temp_209 = fma(temp_203, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000738: 0x49A501980BC70210 Ffma
    temp_210 = 0.0 - fp_c6.data[47].x;
    temp_211 = fma(temp_86, temp_210, temp_178);
    temp_212 = clamp(temp_211, 0.0, 1.0);
    // 0x000748: 0x4C68101406771402 Fmul
    temp_213 = temp_197 * fp_c5.data[25].w;
    // 0x000750: 0x5080000000371010 Mufu
    temp_214 = log2(temp_212);
    // 0x000758: 0x4C98079802A7000D Mov
    // 0x000768: 0x5C58300000670003 Fadd
    temp_215 = 0.0 - temp_208;
    temp_216 = temp_206 + temp_215;
    // 0x000770: 0x5C58300000B70109 Fadd
    temp_217 = 0.0 - temp_209;
    temp_218 = temp_207 + temp_217;
    // 0x000778: 0x49A0061406C70202 Ffma
    temp_219 = fma(temp_213, fp_c5.data[27].x, temp_191);
    // 0x000788: 0x51A0069802A7120C Ffma
    temp_220 = fma(temp_205, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000790: 0x49A003180BF7030F Ffma
    temp_221 = fma(temp_216, fp_c6.data[47].w, temp_208);
    // 0x000798: 0xE043FF89C077FF03 Ipa
    temp_222 = in_attr1.w;
    // 0x0007A8: 0x49A005980BF7090E Ffma
    temp_223 = fma(temp_218, fp_c6.data[47].w, temp_209);
    // 0x0007B0: 0xE043FF8B8077FF09 Ipa
    temp_224 = in_attr3.z;
    // 0x0007B8: 0x5C58300000C7020D Fadd
    temp_225 = 0.0 - temp_220;
    temp_226 = temp_219 + temp_225;
    // 0x0007C8: 0x4C68101803171010 Fmul
    temp_227 = temp_214 * fp_c6.data[12].y;
    // 0x0007D0: 0x5C60178000E70B0B Fmnmx
    temp_228 = max(temp_209, temp_223);
    // 0x0007D8: 0x49A2021803470407 Ffma
    temp_229 = 0.0 - temp_179;
    temp_230 = fma(temp_179, fp_c6.data[13].x, temp_229);
    // 0x0007E8: 0x5C60178000F70606 Fmnmx
    temp_231 = max(temp_208, temp_221);
    // 0x0007F0: 0x49A006180BF70D0D Ffma
    temp_232 = fma(temp_226, fp_c6.data[47].w, temp_220);
    // 0x0007F8: 0x5C9000800107000F Rro
    // 0x000808: 0x5080000000270F0F Mufu
    temp_233 = exp2(temp_227);
    // 0x000810: 0x5C58100000870A0E Fadd
    temp_234 = temp_88 + temp_99;
    // 0x000818: 0x49A202180357040A Ffma
    temp_235 = 0.0 - temp_179;
    temp_236 = fma(temp_179, fp_c6.data[13].y, temp_235);
    // 0x000828: 0x49A2021803670404 Ffma
    temp_237 = 0.0 - temp_179;
    temp_238 = fma(temp_179, fp_c6.data[13].z, temp_237);
    // 0x000830: 0x5C60178000D70C0D Fmnmx
    temp_239 = max(temp_220, temp_232);
    // 0x000838: 0x59A107000057080E Ffma
    temp_240 = 0.0 - temp_176;
    temp_241 = fma(temp_99, temp_240, temp_234);
    // 0x000848: 0x59A0030000770605 Ffma
    temp_242 = fma(temp_231, temp_230, temp_231);
    // 0x000850: 0x59A0058000A70B0B Ffma
    temp_243 = fma(temp_228, temp_236, temp_228);
    // 0x000858: 0x59A0068000470D07 Ffma
    temp_244 = fma(temp_239, temp_238, temp_239);
    // 0x000868: 0x4C6C101406370E06 Fmul
    temp_245 = temp_241 * fp_c5.data[24].w;
    temp_246 = clamp(temp_245, 0.0, 1.0);
    // 0x000870: 0x4C68101802B70F0A Fmul
    temp_247 = temp_233 * fp_c6.data[10].w;
    // 0x000878: 0x5C59100000570005 Fadd
    temp_248 = 0.0 - temp_206;
    temp_249 = temp_248 + temp_242;
    // 0x000888: 0x5C59100000B70104 Fadd
    temp_250 = 0.0 - temp_207;
    temp_251 = temp_250 + temp_243;
    // 0x000890: 0x5C59100000770207 Fadd
    temp_252 = 0.0 - temp_219;
    temp_253 = temp_252 + temp_244;
    // 0x000898: 0x4C58100C03870908 Fadd
    temp_254 = temp_224 + fp_c3.data[14].x;
    // 0x0008A8: 0x5C68100000370603 Fmul
    temp_255 = temp_246 * temp_222;
    // 0x0008B0: 0x5C9807800FF70006 Mov
    // 0x0008B8: 0x59A0000000A70500 Ffma
    temp_256 = fma(temp_249, temp_247, temp_206);
    // 0x0008C8: 0x59A0008000A70401 Ffma
    temp_257 = fma(temp_251, temp_247, temp_207);
    // 0x0008D0: 0x59A0010000A70702 Ffma
    temp_258 = fma(temp_253, temp_247, temp_219);
    // 0x0008D8: 0x0103F8000007F005 Mov32i
    // 0x0008E8: 0x49A37F8C03C70804 Ffma
    temp_259 = 0.0 - fp_c3.data[15].x;
    temp_260 = fma(temp_254, temp_259, -0.0);
    // 0x0008F0: 0x5C98078000370007 Mov
    // 0x0008F8: 0xE30000000007000F Exit
    out_attr0.x = temp_256;
    out_attr0.y = temp_257;
    out_attr0.z = temp_258;
    out_attr0.w = temp_255;
    out_attr1.x = temp_260;
    out_attr1.y = 1.0;
    out_attr1.z = 0.0;
    out_attr1.w = temp_255;
    return;
}
