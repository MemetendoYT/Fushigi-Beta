#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
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

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 9, std140) uniform _vp_c8
{
    precise vec4 data[4096];
} vp_c8;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (location = 0) in vec4 in_attr0;
layout (location = 6) in vec4 in_attr6;
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    int temp_7;
    uint temp_8;
    uint temp_9;
    int temp_10;
    precise float temp_11;
    int temp_12;
    uint temp_13;
    int temp_14;
    precise float temp_15;
    int temp_16;
    uint temp_17;
    uint temp_18;
    int temp_19;
    precise float temp_20;
    int temp_21;
    uint temp_22;
    int temp_23;
    precise float temp_24;
    int temp_25;
    uint temp_26;
    uint temp_27;
    int temp_28;
    precise float temp_29;
    int temp_30;
    int temp_31;
    int temp_32;
    uint temp_33;
    int temp_34;
    int temp_35;
    int temp_36;
    int temp_37;
    uint temp_38;
    uint temp_39;
    int temp_40;
    precise float temp_41;
    int temp_42;
    uint temp_43;
    int temp_44;
    precise float temp_45;
    uint temp_46;
    uint temp_47;
    int temp_48;
    precise float temp_49;
    int temp_50;
    uint temp_51;
    int temp_52;
    precise float temp_53;
    int temp_54;
    uint temp_55;
    uint temp_56;
    int temp_57;
    precise float temp_58;
    int temp_59;
    uint temp_60;
    int temp_61;
    precise float temp_62;
    int temp_63;
    uint temp_64;
    uint temp_65;
    int temp_66;
    precise float temp_67;
    int temp_68;
    uint temp_69;
    int temp_70;
    precise float temp_71;
    int temp_72;
    uint temp_73;
    uint temp_74;
    int temp_75;
    precise float temp_76;
    int temp_77;
    uint temp_78;
    int temp_79;
    precise float temp_80;
    int temp_81;
    uint temp_82;
    uint temp_83;
    int temp_84;
    precise float temp_85;
    int temp_86;
    uint temp_87;
    int temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    int temp_94;
    uint temp_95;
    uint temp_96;
    int temp_97;
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
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x010000000107F010 Mov32i
    // 0x000010: 0xEFD87F800E07FF01 Ald
    temp_0 = in_attr6.x;
    // 0x000018: 0x4CB0119002371A06 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0xEFD87F800807FF13 Ald
    temp_3 = in_attr0.x;
    // 0x000030: 0xEFD87F800847FF14 Ald
    temp_4 = in_attr0.y;
    // 0x000038: 0xEFD87F800887FF15 Ald
    temp_5 = in_attr0.z;
    // 0x000048: 0x3848000000470611 Shl
    temp_6 = temp_2 << 4;
    // 0x000050: 0xEF95007048071106 Ldc
    temp_7 = temp_6 + 0x480;
    temp_8 = uint(temp_7) >> 2;
    temp_9 = temp_8 >> 2;
    temp_10 = int(temp_8) & 3;
    temp_11 = vp_c7.data[int(temp_9)][temp_10];
    temp_12 = int(temp_8) + 1;
    temp_13 = uint(temp_12) >> 2;
    temp_14 = temp_12 & 3;
    temp_15 = vp_c7.data[int(temp_13)][temp_14];
    // 0x000058: 0xEF95007068071108 Ldc
    temp_16 = temp_6 + 0x680;
    temp_17 = uint(temp_16) >> 2;
    temp_18 = temp_17 >> 2;
    temp_19 = int(temp_17) & 3;
    temp_20 = vp_c7.data[int(temp_18)][temp_19];
    temp_21 = int(temp_17) + 1;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_21 & 3;
    temp_24 = vp_c7.data[int(temp_22)][temp_23];
    // 0x000068: 0xEF94007068871112 Ldc
    temp_25 = temp_6 + 0x688;
    temp_26 = uint(temp_25) >> 2;
    temp_27 = temp_26 >> 2;
    temp_28 = int(temp_26) & 3;
    temp_29 = vp_c7.data[int(temp_27)][temp_28];
    // 0x000070: 0x3600080003070110 Xmad
    temp_30 = floatBitsToInt(temp_0) & 0xFFFF;
    temp_31 = temp_30 * 48;
    temp_32 = temp_31 + 16;
    // 0x000078: 0x3620081003070110 Xmad
    temp_33 = floatBitsToUint(temp_0) >> 16;
    temp_34 = int(temp_33) * 48;
    temp_35 = temp_34 << 16;
    temp_36 = temp_35 + temp_32;
    // 0x000088: 0xEF95008FFF07100E Ldc
    temp_37 = temp_36 + -16;
    temp_38 = uint(temp_37) >> 2;
    temp_39 = temp_38 >> 2;
    temp_40 = int(temp_38) & 3;
    temp_41 = vp_c8.data[int(temp_39)][temp_40];
    temp_42 = int(temp_38) + 1;
    temp_43 = uint(temp_42) >> 2;
    temp_44 = temp_42 & 3;
    temp_45 = vp_c8.data[int(temp_43)][temp_44];
    // 0x000090: 0xEF9500800007100C Ldc
    temp_46 = uint(temp_36) >> 2;
    temp_47 = temp_46 >> 2;
    temp_48 = int(temp_46) & 3;
    temp_49 = vp_c8.data[int(temp_47)][temp_48];
    temp_50 = int(temp_46) + 1;
    temp_51 = uint(temp_50) >> 2;
    temp_52 = temp_50 & 3;
    temp_53 = vp_c8.data[int(temp_51)][temp_52];
    // 0x000098: 0xEF9500800107100A Ldc
    temp_54 = temp_36 + 16;
    temp_55 = uint(temp_54) >> 2;
    temp_56 = temp_55 >> 2;
    temp_57 = int(temp_55) & 3;
    temp_58 = vp_c8.data[int(temp_56)][temp_57];
    temp_59 = int(temp_55) + 1;
    temp_60 = uint(temp_59) >> 2;
    temp_61 = temp_59 & 3;
    temp_62 = vp_c8.data[int(temp_60)][temp_61];
    // 0x0000A8: 0xEF95008FFF871004 Ldc
    temp_63 = temp_36 + -8;
    temp_64 = uint(temp_63) >> 2;
    temp_65 = temp_64 >> 2;
    temp_66 = int(temp_64) & 3;
    temp_67 = vp_c8.data[int(temp_65)][temp_66];
    temp_68 = int(temp_64) + 1;
    temp_69 = uint(temp_68) >> 2;
    temp_70 = temp_68 & 3;
    temp_71 = vp_c8.data[int(temp_69)][temp_70];
    // 0x0000B0: 0xEF95008000871002 Ldc
    temp_72 = temp_36 + 8;
    temp_73 = uint(temp_72) >> 2;
    temp_74 = temp_73 >> 2;
    temp_75 = int(temp_73) & 3;
    temp_76 = vp_c8.data[int(temp_74)][temp_75];
    temp_77 = int(temp_73) + 1;
    temp_78 = uint(temp_77) >> 2;
    temp_79 = temp_77 & 3;
    temp_80 = vp_c8.data[int(temp_78)][temp_79];
    // 0x0000B8: 0xEF95008001871000 Ldc
    temp_81 = temp_36 + 24;
    temp_82 = uint(temp_81) >> 2;
    temp_83 = temp_82 >> 2;
    temp_84 = int(temp_82) & 3;
    temp_85 = vp_c8.data[int(temp_83)][temp_84];
    temp_86 = int(temp_82) + 1;
    temp_87 = uint(temp_86) >> 2;
    temp_88 = temp_86 & 3;
    temp_89 = vp_c8.data[int(temp_87)][temp_88];
    // 0x0000C8: 0x5C68100001370E0E Fmul
    temp_90 = temp_41 * temp_3;
    // 0x0000D0: 0x5C68100001370C0C Fmul
    temp_91 = temp_49 * temp_3;
    // 0x0000D8: 0x5C68100001370A0A Fmul
    temp_92 = temp_58 * temp_3;
    // 0x0000E8: 0x59A0070001470F0E Ffma
    temp_93 = fma(temp_45, temp_4, temp_90);
    // 0x0000F0: 0xEF9400704887110F Ldc
    temp_94 = temp_6 + 0x488;
    temp_95 = uint(temp_94) >> 2;
    temp_96 = temp_95 >> 2;
    temp_97 = int(temp_95) & 3;
    temp_98 = vp_c7.data[int(temp_96)][temp_97];
    // 0x0000F8: 0x59A0060001470D0C Ffma
    temp_99 = fma(temp_53, temp_4, temp_91);
    // 0x000108: 0x59A0050001470B0A Ffma
    temp_100 = fma(temp_62, temp_4, temp_92);
    // 0x000110: 0x59A0070001570404 Ffma
    temp_101 = fma(temp_67, temp_5, temp_93);
    // 0x000118: 0x59A0060001570202 Ffma
    temp_102 = fma(temp_76, temp_5, temp_99);
    // 0x000128: 0x59A0050001570000 Ffma
    temp_103 = fma(temp_85, temp_5, temp_100);
    // 0x000130: 0x5C58100000470505 Fadd
    temp_104 = temp_71 + temp_101;
    // 0x000138: 0x5C58100000270302 Fadd
    temp_105 = temp_80 + temp_102;
    // 0x000148: 0x5C58100000070100 Fadd
    temp_106 = temp_89 + temp_103;
    // 0x000150: 0x59A0040000670505 Ffma
    temp_107 = fma(temp_104, temp_11, temp_20);
    // 0x000158: 0x59A0048000770207 Ffma
    temp_108 = fma(temp_105, temp_15, temp_24);
    // 0x000168: 0x4C68100C00070504 Fmul
    temp_109 = temp_107 * vp_c3.data[0].x;
    // 0x000170: 0x4C68100C00870501 Fmul
    temp_110 = temp_107 * vp_c3.data[2].x;
    // 0x000178: 0x4C68100C00470506 Fmul
    temp_111 = temp_107 * vp_c3.data[1].x;
    // 0x000188: 0x59A0090000F70002 Ffma
    temp_112 = fma(temp_106, temp_98, temp_29);
    // 0x000190: 0x4C5810180B870500 Fadd
    temp_113 = temp_107 + vp_c6.data[46].x;
    // 0x000198: 0x4C5830180B070509 Fadd
    temp_114 = 0.0 - vp_c6.data[44].x;
    temp_115 = temp_107 + temp_114;
    // 0x0001A8: 0x49A0020C00170704 Ffma
    temp_116 = fma(temp_108, vp_c3.data[0].y, temp_109);
    // 0x0001B0: 0x49A0008C00970705 Ffma
    temp_117 = fma(temp_108, vp_c3.data[2].y, temp_110);
    // 0x0001B8: 0xEFD87F8014C7FF01 Ald
    temp_118 = in_attr12.w;
    // 0x0001C8: 0x49A0030C00570708 Ffma
    temp_119 = fma(temp_108, vp_c3.data[1].y, temp_111);
    // 0x0001D0: 0x4C58101002070203 Fadd
    temp_120 = temp_112 + vp_c4.data[8].x;
    // 0x0001D8: 0x4C5810180B97070A Fadd
    temp_121 = temp_108 + vp_c6.data[46].y;
    // 0x0001E8: 0x4C5830180B17070F Fadd
    temp_122 = 0.0 - vp_c6.data[44].y;
    temp_123 = temp_108 + temp_122;
    // 0x0001F0: 0x49A0020C00270206 Ffma
    temp_124 = fma(temp_112, vp_c3.data[0].z, temp_116);
    // 0x0001F8: 0x4C68101803870910 Fmul
    temp_125 = temp_115 * vp_c6.data[14].x;
    // 0x000208: 0x49A0040C00670207 Ffma
    temp_126 = fma(temp_112, vp_c3.data[1].z, temp_119);
    // 0x000210: 0x4C5810180BA7020B Fadd
    temp_127 = temp_112 + vp_c6.data[46].z;
    // 0x000218: 0x4C58100C00370609 Fadd
    temp_128 = temp_124 + vp_c3.data[0].w;
    // 0x000228: 0x49A0020C00270306 Ffma
    temp_129 = fma(temp_120, vp_c3.data[0].z, temp_116);
    // 0x000230: 0x49A0040C00670304 Ffma
    temp_130 = fma(temp_120, vp_c3.data[1].z, temp_119);
    // 0x000238: 0x49A0028C00A70303 Ffma
    temp_131 = fma(temp_120, vp_c3.data[2].z, temp_117);
    // 0x000248: 0x4C58100C00770707 Fadd
    temp_132 = temp_126 + vp_c3.data[1].w;
    // 0x000250: 0x49A0028C00A70205 Ffma
    temp_133 = fma(temp_112, vp_c3.data[2].z, temp_117);
    // 0x000258: 0xEFF07F8008C7FF01 Ast
    out_attr0.w = temp_118;
    // 0x000268: 0x4C68101802C70909 Fmul
    temp_134 = temp_128 * vp_c6.data[11].x;
    // 0x000270: 0x49A0081803970F0F Ffma
    temp_135 = fma(temp_123, vp_c6.data[14].y, temp_125);
    // 0x000278: 0x4C5830180B270202 Fadd
    temp_136 = 0.0 - vp_c6.data[44].z;
    temp_137 = temp_112 + temp_136;
    // 0x000288: 0x4C58100C00370606 Fadd
    temp_138 = temp_129 + vp_c3.data[0].w;
    // 0x000290: 0x4C6810180C670B0D Fmul
    temp_139 = temp_127 * vp_c6.data[49].z;
    // 0x000298: 0x4C58100C00B70505 Fadd
    temp_140 = temp_133 + vp_c3.data[2].w;
    // 0x0002A8: 0x49A0049802D70707 Ffma
    temp_141 = fma(temp_132, vp_c6.data[11].y, temp_134);
    // 0x0002B0: 0xEFF07F800987FF05 Ast
    out_attr1.z = temp_140;
    // 0x0002B8: 0x4C6810180C270B0C Fmul
    temp_142 = temp_127 * vp_c6.data[48].z;
    // 0x0002C8: 0x49A0079803A7020F Ffma
    temp_143 = fma(temp_137, vp_c6.data[14].z, temp_135);
    // 0x0002D0: 0x4C6810180CA70B0B Fmul
    temp_144 = temp_127 * vp_c6.data[50].z;
    // 0x0002D8: 0x4C68100C02470602 Fmul
    temp_145 = temp_138 * vp_c3.data[9].x;
    // 0x0002E8: 0x4C68100C01C70601 Fmul
    temp_146 = temp_138 * vp_c3.data[7].x;
    // 0x0002F0: 0x49A0039802E70507 Ffma
    temp_147 = fma(temp_140, vp_c6.data[11].z, temp_141);
    // 0x0002F8: 0x4C58100C00770404 Fadd
    temp_148 = temp_130 + vp_c3.data[1].w;
    // 0x000308: 0x4C68100C02870605 Fmul
    temp_149 = temp_138 * vp_c3.data[10].x;
    // 0x000310: 0x4C68100C02070606 Fmul
    temp_150 = temp_138 * vp_c3.data[8].x;
    // 0x000318: 0x49A006980C570A0E Ffma
    temp_151 = fma(temp_121, vp_c6.data[49].y, temp_139);
    // 0x000328: 0x49A006180C170A0D Ffma
    temp_152 = fma(temp_121, vp_c6.data[48].y, temp_142);
    // 0x000330: 0x49A005980C970A0B Ffma
    temp_153 = fma(temp_121, vp_c6.data[50].y, temp_144);
    // 0x000338: 0x4C58100C00B70303 Fadd
    temp_154 = temp_131 + vp_c3.data[2].w;
    // 0x000348: 0x49A0010C02570402 Ffma
    temp_155 = fma(temp_148, vp_c3.data[9].y, temp_145);
    // 0x000350: 0x49A0008C01D70401 Ffma
    temp_156 = fma(temp_148, vp_c3.data[7].y, temp_146);
    // 0x000358: 0x49A0028C02970405 Ffma
    temp_157 = fma(temp_148, vp_c3.data[10].y, temp_149);
    // 0x000368: 0x49A0030C02170406 Ffma
    temp_158 = fma(temp_148, vp_c3.data[8].y, temp_150);
    // 0x000370: 0x49A007180C47000E Ffma
    temp_159 = fma(temp_113, vp_c6.data[49].x, temp_151);
    // 0x000378: 0x49A005980C87000B Ffma
    temp_160 = fma(temp_113, vp_c6.data[50].x, temp_153);
    // 0x000388: 0x49A006980C07000D Ffma
    temp_161 = fma(temp_113, vp_c6.data[48].x, temp_152);
    // 0x000390: 0x4C98079803C70008 Mov
    // 0x000398: 0x4C98079803070000 Mov
    // 0x0003A8: 0x49A0010C02670302 Ffma
    temp_162 = fma(temp_154, vp_c3.data[9].z, temp_155);
    // 0x0003B0: 0x49A0008C01E70301 Ffma
    temp_163 = fma(temp_154, vp_c3.data[7].z, temp_156);
    // 0x0003B8: 0x49A0028C02A70305 Ffma
    temp_164 = fma(temp_154, vp_c3.data[10].z, temp_157);
    // 0x0003C8: 0x49A0030C02270306 Ffma
    temp_165 = fma(temp_154, vp_c3.data[8].z, temp_158);
    // 0x0003D0: 0x4C6810180BB70E0E Fmul
    temp_166 = temp_159 * vp_c6.data[46].w;
    // 0x0003D8: 0x4C6810180BB70D0D Fmul
    temp_167 = temp_161 * vp_c6.data[46].w;
    // 0x0003E8: 0xEFF07F800B47FF0E Ast
    out_attr3.y = temp_166;
    // 0x0003F0: 0x4C6810180BB70B0B Fmul
    temp_168 = temp_160 * vp_c6.data[46].w;
    // 0x0003F8: 0xEFF07F800B07FF0D Ast
    out_attr3.x = temp_167;
    // 0x000408: 0x51A0041803B70F0F Ffma
    temp_169 = fma(temp_143, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000410: 0xEFF07F800B87FF0B Ast
    out_attr3.z = temp_168;
    // 0x000418: 0x51A0001802F70707 Ffma
    temp_170 = fma(temp_147, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000428: 0xEFF07F800A47FF0F Ast
    out_attr2.y = temp_169;
    // 0x000430: 0x4C58100C02770202 Fadd
    temp_171 = temp_162 + vp_c3.data[9].w;
    // 0x000438: 0xEFF07F800A07FF07 Ast
    out_attr2.x = temp_170;
    // 0x000448: 0x4C58100C01F70101 Fadd
    temp_172 = temp_163 + vp_c3.data[7].w;
    // 0x000450: 0xEFF07F800787FF02 Ast
    gl_Position.z = temp_171;
    // 0x000458: 0x4C58100C02B70505 Fadd
    temp_173 = temp_164 + vp_c3.data[10].w;
    // 0x000468: 0xEFF07F800707FF01 Ast
    gl_Position.x = temp_172;
    // 0x000470: 0x4C58100C02370606 Fadd
    temp_174 = temp_165 + vp_c3.data[8].w;
    // 0x000478: 0xEFF07F8007C7FF05 Ast
    gl_Position.w = temp_173;
    // 0x000488: 0xEFF07F800747FF06 Ast
    gl_Position.y = temp_174;
    // 0x000490: 0xE30000000007000F Exit
    return;
}
