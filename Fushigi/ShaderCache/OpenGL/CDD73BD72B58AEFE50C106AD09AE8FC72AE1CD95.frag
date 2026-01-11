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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_24;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform sampler2D fp_t_tcb_36;
layout (binding = 3) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 4) uniform samplerCube fp_t_tcb_18;
layout (binding = 5) uniform samplerCube fp_t_tcb_16;
layout (binding = 6) uniform sampler2D fp_t_tcb_20;
layout (binding = 7) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec4 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    bool temp_7;
    precise vec2 temp_8;
    precise float temp_9;
    precise float temp_10;
    precise vec3 temp_11;
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
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
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
    precise vec3 temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise vec3 temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise vec3 temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise vec3 temp_157;
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
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    precise float temp_336;
    precise float temp_337;
    precise float temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    precise float temp_345;
    precise float temp_346;
    precise float temp_347;
    precise float temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    precise float temp_355;
    precise float temp_356;
    precise float temp_357;
    precise float temp_358;
    precise float temp_359;
    precise float temp_360;
    precise float temp_361;
    precise float temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    precise float temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    precise float temp_431;
    // 0x000008: 0x4C98079C02070023 Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF8D0007FF04 Ipa
    temp_0 = in_attr5.x;
    // 0x000030: 0xE043FF8D4007FF05 Ipa
    temp_1 = in_attr5.y;
    // 0x000038: 0xD832024080570402 Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    temp_5 = temp_2.z;
    temp_6 = temp_2.w;
    // 0x000048: 0x5C98078000970007 Mov
    // 0x000050: 0x4BB1839406070707 Fsetp
    temp_7 = temp_6 < fp_c5.data[24].x;
    // 0x000058: 0xE33000000000000F Kil
    if (temp_7)
    {
        discard;
    }
    // 0x000068: 0xD830026FF057040A Texs
    temp_8 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_9 = temp_8.x;
    temp_10 = temp_8.y;
    // 0x000070: 0xD824036010570412 Texs
    temp_11 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_12 = temp_11.x;
    temp_13 = temp_11.y;
    temp_14 = temp_11.z;
    // 0x000078: 0xE043FF8A0007FF06 Ipa
    temp_15 = in_attr2.x;
    // 0x000088: 0xE043FF8A4007FF09 Ipa
    temp_16 = in_attr2.y;
    // 0x000090: 0xE043FF890007FF0D Ipa
    temp_17 = in_attr1.x;
    // 0x000098: 0xE043FF880007FF15 Ipa
    temp_18 = in_attr0.x;
    // 0x0000A8: 0xE043FF8A8007FF0C Ipa
    temp_19 = in_attr2.z;
    // 0x0000B0: 0xE043FF894007FF10 Ipa
    temp_20 = in_attr1.y;
    // 0x0000B8: 0xE043FF884007FF17 Ipa
    temp_21 = in_attr0.y;
    // 0x0000C8: 0xE043FF898007FF11 Ipa
    temp_22 = in_attr1.z;
    // 0x0000D0: 0xE043FF888007FF18 Ipa
    temp_23 = in_attr0.z;
    // 0x0000D8: 0xE003FF870FF7FF1D Ipa
    temp_24 = gl_FragCoord.x;
    temp_25 = support_buffer.render_scale[0];
    temp_26 = temp_24 / temp_25;
    // 0x0000E8: 0xE003FF874FF7FF1C Ipa
    temp_27 = gl_FragCoord.y;
    temp_28 = support_buffer.render_scale[0];
    temp_29 = temp_27 / temp_28;
    // 0x0000F0: 0x5C6810000067060E Fmul
    temp_30 = temp_15 * temp_15;
    // 0x0000F8: 0x5C68100000D70D05 Fmul
    temp_31 = temp_17 * temp_17;
    // 0x000108: 0x5C68100001571514 Fmul
    temp_32 = temp_18 * temp_18;
    // 0x000110: 0x59A007000097090E Ffma
    temp_33 = fma(temp_16, temp_16, temp_30);
    // 0x000118: 0x59A0028001071004 Ffma
    temp_34 = fma(temp_20, temp_20, temp_31);
    // 0x000128: 0x59A00A0001771705 Ffma
    temp_35 = fma(temp_21, temp_21, temp_32);
    // 0x000130: 0x4C68100C04A71D1D Fmul
    temp_36 = temp_26 * fp_c3.data[18].z;
    // 0x000138: 0x4C68100C04B71C1C Fmul
    temp_37 = temp_29 * fp_c3.data[18].w;
    // 0x000148: 0x59A0070000C70C0E Ffma
    temp_38 = fma(temp_19, temp_19, temp_33);
    // 0x000150: 0x5080000000570E0F Mufu
    temp_39 = inversesqrt(temp_38);
    // 0x000158: 0x59A0020001171104 Ffma
    temp_40 = fma(temp_22, temp_22, temp_34);
    // 0x000168: 0x59A0028001871819 Ffma
    temp_41 = fma(temp_23, temp_23, temp_35);
    // 0x000170: 0xE043FF8B0007FF05 Ipa
    temp_42 = in_attr3.x;
    // 0x000178: 0x5080000000570416 Mufu
    temp_43 = inversesqrt(temp_40);
    // 0x000188: 0x508000000057191A Mufu
    temp_44 = inversesqrt(temp_41);
    // 0x000190: 0x5C68100000F70614 Fmul
    temp_45 = temp_15 * temp_39;
    // 0x000198: 0xE043FF8B4007FF06 Ipa
    temp_46 = in_attr3.y;
    // 0x0001A8: 0x5C68100000F70909 Fmul
    temp_47 = temp_16 * temp_39;
    // 0x0001B0: 0x5C68100000F70C0C Fmul
    temp_48 = temp_19 * temp_39;
    // 0x0001B8: 0x5C68100001670D0D Fmul
    temp_49 = temp_17 * temp_43;
    // 0x0001C8: 0x5C68100001A71717 Fmul
    temp_50 = temp_21 * temp_44;
    // 0x0001D0: 0x5C68100001A7180F Fmul
    temp_51 = temp_23 * temp_44;
    // 0x0001D8: 0x5C68100001671010 Fmul
    temp_52 = temp_20 * temp_43;
    // 0x0001E8: 0x5C68100001A7151A Fmul
    temp_53 = temp_18 * temp_44;
    // 0x0001F0: 0xE043FF904007FF15 Ipa
    temp_54 = in_attr8.y;
    // 0x0001F8: 0x5C68100001671111 Fmul
    temp_55 = temp_22 * temp_43;
    // 0x000208: 0x5C68100000B70B04 Fmul
    temp_56 = temp_10 * temp_10;
    // 0x000210: 0x5C68100000B71414 Fmul
    temp_57 = temp_45 * temp_10;
    // 0x000218: 0x5C68100000B70909 Fmul
    temp_58 = temp_47 * temp_10;
    // 0x000228: 0x5C68100000B70C0C Fmul
    temp_59 = temp_48 * temp_10;
    // 0x000230: 0x5C6810000057050B Fmul
    temp_60 = temp_42 * temp_42;
    // 0x000238: 0x4C6810180A071212 Fmul
    temp_61 = temp_12 * fp_c6.data[40].x;
    // 0x000248: 0x59A0020000A70A0E Ffma
    temp_62 = fma(temp_9, temp_9, temp_56);
    // 0x000250: 0xE043FF8B8007FF04 Ipa
    temp_63 = in_attr3.z;
    // 0x000258: 0x59A00A0000D70A0D Ffma
    temp_64 = fma(temp_9, temp_49, temp_57);
    // 0x000268: 0xE043FF900007FF14 Ipa
    temp_65 = in_attr8.x;
    // 0x000270: 0x59A0048001070A09 Ffma
    temp_66 = fma(temp_9, temp_52, temp_58);
    // 0x000278: 0x59A0060001170A0C Ffma
    temp_67 = fma(temp_9, temp_55, temp_59);
    // 0x000288: 0x59A005800067060B Ffma
    temp_68 = fma(temp_46, temp_46, temp_60);
    // 0x000290: 0x386013BF80071212 Fmnmx
    temp_69 = min(temp_61, 1.0);
    // 0x000298: 0x385D103F80070E0E Fadd
    temp_70 = 0.0 - temp_62;
    temp_71 = temp_70 + 1.0;
    temp_72 = clamp(temp_71, 0.0, 1.0);
    // 0x0002A8: 0x5080000000870E0E Mufu
    temp_73 = sqrt(temp_72);
    // 0x0002B0: 0x4C60178400071222 Fmnmx
    temp_74 = max(temp_69, fp_c1.data[0].x);
    // 0x0002B8: 0x38681040E0072225 Fmul
    temp_75 = temp_74 * 7.0;
    // 0x0002C8: 0x3868104080072219 Fmul
    temp_76 = temp_74 * 4.0;
    // 0x0002D0: 0x3859103F80072221 Fadd
    temp_77 = 0.0 - temp_74;
    temp_78 = temp_77 + 1.0;
    // 0x0002D8: 0x59A0068000E71A0D Ffma
    temp_79 = fma(temp_53, temp_73, temp_64);
    // 0x0002E8: 0x59A0048000E71709 Ffma
    temp_80 = fma(temp_50, temp_73, temp_66);
    // 0x0002F0: 0x59A0060000E70F0C Ffma
    temp_81 = fma(temp_51, temp_73, temp_67);
    // 0x0002F8: 0x5C68100000D70D0A Fmul
    temp_82 = temp_79 * temp_79;
    // 0x000308: 0x59A005800047040B Ffma
    temp_83 = fma(temp_63, temp_63, temp_68);
    // 0x000310: 0x5080000000570B0B Mufu
    temp_84 = inversesqrt(temp_83);
    // 0x000318: 0x59A005000097090A Ffma
    temp_85 = fma(temp_80, temp_80, temp_82);
    // 0x000328: 0x59A0050000C70C0A Ffma
    temp_86 = fma(temp_81, temp_81, temp_85);
    // 0x000330: 0x5080000000570A0A Mufu
    temp_87 = inversesqrt(temp_86);
    // 0x000338: 0x5C69100000B70505 Fmul
    temp_88 = 0.0 - temp_84;
    temp_89 = temp_42 * temp_88;
    // 0x000348: 0x5C69100000B70606 Fmul
    temp_90 = 0.0 - temp_84;
    temp_91 = temp_46 * temp_90;
    // 0x000350: 0x5C69100000B70404 Fmul
    temp_92 = 0.0 - temp_84;
    temp_93 = temp_63 * temp_92;
    // 0x000358: 0x4C58301805C7051A Fadd
    temp_94 = 0.0 - fp_c6.data[23].x;
    temp_95 = temp_89 + temp_94;
    // 0x000368: 0x4C58301805D7061B Fadd
    temp_96 = 0.0 - fp_c6.data[23].y;
    temp_97 = temp_91 + temp_96;
    // 0x000370: 0x4C58301805E7041E Fadd
    temp_98 = 0.0 - fp_c6.data[23].z;
    temp_99 = temp_93 + temp_98;
    // 0x000378: 0x5C68100000A70D1F Fmul
    temp_100 = temp_79 * temp_87;
    // 0x000388: 0x5C68100000A70920 Fmul
    temp_101 = temp_80 * temp_87;
    // 0x000390: 0x5C68100000A70C09 Fmul
    temp_102 = temp_81 * temp_87;
    // 0x000398: 0x5C68100001A71A0D Fmul
    temp_103 = temp_95 * temp_95;
    // 0x0003A8: 0x5C68100000571F0B Fmul
    temp_104 = temp_100 * temp_89;
    // 0x0003B0: 0x59A0068001B71B0D Ffma
    temp_105 = fma(temp_97, temp_97, temp_103);
    // 0x0003B8: 0x59A005800067200B Ffma
    temp_106 = fma(temp_101, temp_91, temp_104);
    // 0x0003C8: 0x59A0068001E71E0C Ffma
    temp_107 = fma(temp_99, temp_99, temp_105);
    // 0x0003D0: 0x5080000000570C0C Mufu
    temp_108 = inversesqrt(temp_107);
    // 0x0003D8: 0x59A4058000470917 Ffma
    temp_109 = fma(temp_102, temp_93, temp_106);
    temp_110 = clamp(temp_109, 0.0, 1.0);
    // 0x0003E8: 0x5C68100001771F0A Fmul
    temp_111 = temp_100 * temp_110;
    // 0x0003F0: 0x5C6810000177200B Fmul
    temp_112 = temp_101 * temp_110;
    // 0x0003F8: 0x5C6810000177090D Fmul
    temp_113 = temp_102 * temp_110;
    // 0x000408: 0x32A202C000070A0A Ffma
    temp_114 = 0.0 - temp_89;
    temp_115 = fma(temp_111, 2.0, temp_114);
    // 0x000410: 0x32A2034000070B0B Ffma
    temp_116 = 0.0 - temp_91;
    temp_117 = fma(temp_112, 2.0, temp_116);
    // 0x000418: 0x5C68100000C71A1A Fmul
    temp_118 = temp_95 * temp_108;
    // 0x000428: 0x5C68100000C71B1B Fmul
    temp_119 = temp_97 * temp_108;
    // 0x000430: 0x5C68100000C71E1E Fmul
    temp_120 = temp_99 * temp_108;
    // 0x000438: 0x32A2024000070D0F Ffma
    temp_121 = 0.0 - temp_93;
    temp_122 = fma(temp_113, 2.0, temp_121);
    // 0x000448: 0x5C62578000B70A0C Fmnmx
    temp_123 = abs(temp_115);
    temp_124 = abs(temp_117);
    temp_125 = max(temp_123, temp_124);
    // 0x000450: 0x5C60578000C70F10 Fmnmx
    temp_126 = abs(temp_122);
    temp_127 = max(temp_126, temp_125);
    // 0x000458: 0x5C62578002071F0C Fmnmx
    temp_128 = abs(temp_100);
    temp_129 = abs(temp_101);
    temp_130 = max(temp_128, temp_129);
    // 0x000468: 0x5080000000471010 Mufu
    temp_131 = 1.0 / temp_127;
    // 0x000470: 0x5C60578000C70911 Fmnmx
    temp_132 = abs(temp_102);
    temp_133 = max(temp_132, temp_130);
    // 0x000478: 0x010000000017F00C Mov32i
    // 0x000488: 0x5080000000471116 Mufu
    temp_134 = 1.0 / temp_133;
    // 0x000490: 0x5C68100001070A0D Fmul
    temp_135 = temp_115 * temp_131;
    // 0x000498: 0x5C68100001070B0E Fmul
    temp_136 = temp_117 * temp_131;
    // 0x0004A8: 0x5C69100001070F0F Fmul
    temp_137 = 0.0 - temp_131;
    temp_138 = temp_122 * temp_137;
    // 0x0004B0: 0x5C68100001671F0A Fmul
    temp_139 = temp_100 * temp_134;
    // 0x0004B8: 0xC1BA0143F2570C0C Tex
    temp_140 = textureLod(fp_t_tcb_14, vec4(temp_135, temp_136, temp_138, float(1)), temp_75).xyz;
    temp_141 = temp_140.x;
    temp_142 = temp_140.y;
    temp_143 = temp_140.z;
    // 0x0004C8: 0x5C6810000167200B Fmul
    temp_144 = temp_101 * temp_134;
    // 0x0004D0: 0x5C69100001670918 Fmul
    temp_145 = 0.0 - temp_134;
    temp_146 = temp_102 * temp_145;
    // 0x0004D8: 0xE043FF908007FF16 Ipa
    temp_147 = in_attr8.z;
    // 0x0004E8: 0x5C98078000A70010 Mov
    // 0x0004F0: 0x5C98078000B70011 Mov
    // 0x0004F8: 0xD9A2018191870A0A Texs
    temp_148 = textureLod(fp_t_tcb_18, vec3(temp_139, temp_144, temp_146), temp_76).xyz;
    temp_149 = temp_148.x;
    temp_150 = temp_148.y;
    temp_151 = temp_148.z;
    // 0x000508: 0x5C98078001870012 Mov
    // 0x000510: 0xC0BA0163EFF71010 Tex
    temp_152 = textureLod(fp_t_tcb_16, vec3(temp_139, temp_144, temp_146), 0.0).xyz;
    temp_153 = temp_152.x;
    temp_154 = temp_152.y;
    temp_155 = temp_152.z;
    // 0x000518: 0xDEBA0000C2371414 TexB
    temp_156 = texture(fp_t_cb7_20, vec3(temp_65, temp_54, temp_147)).x;
    // 0x000528: 0xD822020241C71D1C Texs
    temp_157 = texture(fp_t_tcb_20, vec2(temp_36, temp_37)).xyz;
    temp_158 = temp_157.x;
    temp_159 = temp_157.y;
    temp_160 = temp_157.z;
    // 0x000530: 0x5C68100002172121 Fmul
    temp_161 = temp_78 * temp_78;
    // 0x000538: 0x5C68100001A70527 Fmul
    temp_162 = temp_89 * temp_118;
    // 0x000548: 0x4C69101805C71A05 Fmul
    temp_163 = 0.0 - fp_c6.data[23].x;
    temp_164 = temp_118 * temp_163;
    // 0x000550: 0x5C68100001A71F26 Fmul
    temp_165 = temp_100 * temp_118;
    // 0x000558: 0x0104066978D7F018 Mov32i
    // 0x000568: 0x4C69101805C71F1F Fmul
    temp_166 = 0.0 - fp_c6.data[23].x;
    temp_167 = temp_100 * temp_166;
    // 0x000570: 0x5C6810000217211A Fmul
    temp_168 = temp_161 * temp_161;
    // 0x000578: 0x1E23E468DB971721 Fmul32i
    temp_169 = temp_110 * 0.193900004;
    // 0x000588: 0x59A0138001B7060F Ffma
    temp_170 = fma(temp_91, temp_119, temp_162);
    // 0x000590: 0x49A1029805D71B05 Ffma
    temp_171 = 0.0 - fp_c6.data[23].y;
    temp_172 = fma(temp_119, temp_171, temp_164);
    // 0x000598: 0x59A0130001B7201B Ffma
    temp_173 = fma(temp_101, temp_119, temp_165);
    // 0x0005A8: 0x51A4110400072206 Ffma
    temp_174 = fma(temp_74, temp_74, fp_c1.data[0].x);
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x0005B0: 0x49A10F9805D7201F Ffma
    temp_176 = 0.0 - fp_c6.data[23].y;
    temp_177 = fma(temp_101, temp_176, temp_167);
    // 0x0005B8: 0x49A0108400271A21 Ffma
    temp_178 = fma(temp_168, fp_c1.data[0].z, temp_169);
    // 0x0005C8: 0x59A4078001E7040F Ffma
    temp_179 = fma(temp_93, temp_120, temp_170);
    temp_180 = clamp(temp_179, 0.0, 1.0);
    // 0x0005D0: 0x49A20C0400371A04 Ffma
    temp_181 = fma(temp_168, fp_c1.data[0].w, -3.60299993);
    // 0x0005D8: 0x49A5029805E71E15 Ffma
    temp_182 = 0.0 - fp_c6.data[23].z;
    temp_183 = fma(temp_120, temp_182, temp_172);
    temp_184 = clamp(temp_183, 0.0, 1.0);
    // 0x0005E8: 0x0103E2CD9E87F018 Mov32i
    // 0x0005F0: 0x0103F0000007F005 Mov32i
    // 0x0005F8: 0x088BF05D63972121 Fadd32i
    temp_185 = temp_178 + -0.522800028;
    // 0x000608: 0x59A40D8001E7091E Ffma
    temp_186 = fma(temp_102, temp_120, temp_173);
    temp_187 = clamp(temp_186, 0.0, 1.0);
    // 0x000610: 0x51A0020400471A04 Ffma
    temp_188 = fma(temp_168, temp_181, fp_c1.data[1].x);
    // 0x000618: 0x5C6810000067061B Fmul
    temp_189 = temp_175 * temp_175;
    // 0x000628: 0x49A20C0400771A18 Ffma
    temp_190 = fma(temp_168, fp_c1.data[1].w, -0.168799996);
    // 0x000630: 0x32A002BF00072222 Ffma
    temp_191 = fma(temp_74, 0.5, 0.5);
    // 0x000638: 0x5C68100002171721 Fmul
    temp_192 = temp_110 * temp_185;
    // 0x000648: 0x49A50F9805E70909 Ffma
    temp_193 = 0.0 - fp_c6.data[23].z;
    temp_194 = fma(temp_102, temp_193, temp_177);
    temp_195 = clamp(temp_194, 0.0, 1.0);
    // 0x000650: 0x01040DF760C7F016 Mov32i
    // 0x000658: 0x59A20F0001B71E1B Ffma
    temp_196 = 0.0 - temp_187;
    temp_197 = fma(temp_187, temp_189, temp_196);
    // 0x000668: 0x01040DF760C7F026 Mov32i
    // 0x000670: 0x32A002BF00072020 Ffma
    temp_198 = fma(temp_101, 0.5, 0.5);
    // 0x000678: 0x59A0108000471A04 Ffma
    temp_199 = fma(temp_168, temp_188, temp_192);
    // 0x000688: 0x010410676C97F021 Mov32i
    // 0x000690: 0x5C68100001871A1A Fmul
    temp_200 = temp_168 * temp_190;
    // 0x000698: 0x5C68120002272218 Fmul
    temp_201 = temp_191 * 0.5;
    temp_202 = temp_201 * temp_191;
    // 0x0006A8: 0x51A00D8400A71E1E Ffma
    temp_203 = fma(temp_187, temp_197, fp_c1.data[2].z);
    // 0x0006B0: 0x49A20B0400171516 Ffma
    temp_204 = fma(temp_184, fp_c1.data[0].y, -6.98316002);
    // 0x0006B8: 0x385D103F80070101 Fadd
    temp_205 = 0.0 - temp_14;
    temp_206 = temp_205 + 1.0;
    temp_207 = clamp(temp_206, 0.0, 1.0);
    // 0x0006C8: 0x49A0108400571721 Ffma
    temp_208 = fma(temp_110, fp_c1.data[1].y, 8.40400028);
    // 0x0006D0: 0x59A10B800187171B Ffma
    temp_209 = 0.0 - temp_202;
    temp_210 = fma(temp_110, temp_209, temp_110);
    // 0x0006D8: 0x59A104800097181F Ffma
    temp_211 = 0.0 - temp_195;
    temp_212 = fma(temp_202, temp_211, temp_195);
    // 0x0006E8: 0x5C68100001671516 Fmul
    temp_213 = temp_184 * temp_204;
    // 0x0006F0: 0x4C58301407B70315 Fadd
    temp_214 = 0.0 - fp_c5.data[30].w;
    temp_215 = temp_4 + temp_214;
    // 0x0006F8: 0x51A0108400671721 Ffma
    temp_216 = fma(temp_110, temp_208, fp_c1.data[1].z);
    // 0x000708: 0x5C58100001B71822 Fadd
    temp_217 = temp_202 + temp_210;
    // 0x000710: 0x5C58100001F7181F Fadd
    temp_218 = temp_202 + temp_212;
    // 0x000718: 0x5080000000471E18 Mufu
    temp_219 = 1.0 / temp_203;
    // 0x000728: 0x51A00A9407B71315 Ffma
    temp_220 = fma(temp_13, temp_215, fp_c5.data[30].w);
    // 0x000730: 0x508000000047221B Mufu
    temp_221 = 1.0 / temp_217;
    // 0x000738: 0x51A0108400871721 Ffma
    temp_222 = fma(temp_110, temp_216, fp_c1.data[2].x);
    // 0x000748: 0x5080000000471F25 Mufu
    temp_223 = 1.0 / temp_218;
    // 0x000750: 0x3859103F80071717 Fadd
    temp_224 = 0.0 - temp_110;
    temp_225 = temp_224 + 1.0;
    // 0x000758: 0x5C9000800167001E Rro
    // 0x000768: 0x5C60138001A7211A Fmnmx
    temp_226 = min(temp_222, temp_200);
    // 0x000770: 0x5080000000271E1E Mufu
    temp_227 = exp2(temp_213);
    // 0x000778: 0x49A2130400170F21 Ffma
    temp_228 = fma(temp_180, fp_c1.data[0].y, -6.98316002);
    // 0x000788: 0x4C5C10040097041F Fadd
    temp_229 = temp_199 + fp_c1.data[2].y;
    temp_230 = clamp(temp_229, 0.0, 1.0);
    // 0x000790: 0x5C68100001870606 Fmul
    temp_231 = temp_175 * temp_219;
    // 0x000798: 0x4C58301407B70804 Fadd
    temp_232 = 0.0 - fp_c5.data[30].w;
    temp_233 = temp_5 + temp_232;
    // 0x0007A8: 0x4C68101809071717 Fmul
    temp_234 = temp_225 * fp_c6.data[36].x;
    // 0x0007B0: 0x5C68120002571B18 Fmul
    temp_235 = temp_221 * 0.5;
    temp_236 = temp_235 * temp_223;
    // 0x0007B8: 0x5080400000371717 Mufu
    temp_237 = abs(temp_234);
    temp_238 = log2(temp_237);
    // 0x0007C8: 0x5C68100002170F0F Fmul
    temp_239 = temp_180 * temp_228;
    // 0x0007D0: 0x4C58301407B70221 Fadd
    temp_240 = 0.0 - fp_c5.data[30].w;
    temp_241 = temp_3 + temp_240;
    // 0x0007D8: 0x386C10424807151B Fmul
    temp_242 = temp_220 * 50.0;
    temp_243 = clamp(temp_242, 0.0, 1.0);
    // 0x0007E8: 0x5C5C30000FF71A22 Fadd
    temp_244 = temp_226 + -0.0;
    temp_245 = clamp(temp_244, 0.0, 1.0);
    // 0x0007F0: 0x5C68100000670606 Fmul
    temp_246 = temp_231 * temp_231;
    // 0x0007F8: 0x5C90008000F70016 Rro
    // 0x000808: 0x51A0109407B71321 Ffma
    temp_247 = fma(temp_13, temp_241, fp_c5.data[30].w);
    // 0x000810: 0x5080000000271616 Mufu
    temp_248 = exp2(temp_239);
    // 0x000818: 0x5C68100002271B1A Fmul
    temp_249 = temp_243 * temp_245;
    // 0x000828: 0x5C59100001F7220F Fadd
    temp_250 = 0.0 - temp_245;
    temp_251 = temp_250 + temp_230;
    // 0x000830: 0x51A0021407B7131F Ffma
    temp_252 = fma(temp_13, temp_233, fp_c5.data[30].w);
    // 0x000838: 0x5C68100000671818 Fmul
    temp_253 = temp_236 * temp_246;
    // 0x000848: 0x59A00D0000F72104 Ffma
    temp_254 = fma(temp_247, temp_251, temp_249);
    // 0x000850: 0x59A00D0000F71506 Ffma
    temp_255 = fma(temp_220, temp_251, temp_249);
    // 0x000858: 0x59A00D0000F71F0F Ffma
    temp_256 = fma(temp_252, temp_251, temp_249);
    // 0x000868: 0x59A10F0001E7151A Ffma
    temp_257 = 0.0 - temp_227;
    temp_258 = fma(temp_220, temp_257, temp_227);
    // 0x000870: 0x59A10B000167151B Ffma
    temp_259 = 0.0 - temp_248;
    temp_260 = fma(temp_220, temp_259, temp_248);
    // 0x000878: 0x59A10B0001672122 Ffma
    temp_261 = 0.0 - temp_248;
    temp_262 = fma(temp_247, temp_261, temp_248);
    // 0x000888: 0x59A10B0001671F16 Ffma
    temp_263 = 0.0 - temp_248;
    temp_264 = fma(temp_252, temp_263, temp_248);
    // 0x000890: 0x4C68101406270F0F Fmul
    temp_265 = temp_256 * fp_c5.data[24].z;
    // 0x000898: 0x5C58100001A7151A Fadd
    temp_266 = temp_220 + temp_258;
    // 0x0008A8: 0x5C58100001B71515 Fadd
    temp_267 = temp_220 + temp_260;
    // 0x0008B0: 0x59A10F0001E7211B Ffma
    temp_268 = 0.0 - temp_227;
    temp_269 = fma(temp_247, temp_268, temp_227);
    // 0x0008B8: 0x5C58100002272122 Fadd
    temp_270 = temp_247 + temp_262;
    // 0x0008C8: 0x4C68101406271A1A Fmul
    temp_271 = temp_266 * fp_c5.data[24].z;
    // 0x0008D0: 0x4C68101406271515 Fmul
    temp_272 = temp_267 * fp_c5.data[24].z;
    // 0x0008D8: 0x5C58100001B7211B Fadd
    temp_273 = temp_247 + temp_269;
    // 0x0008E8: 0x59A10F0001E71F21 Ffma
    temp_274 = 0.0 - temp_227;
    temp_275 = fma(temp_252, temp_274, temp_227);
    // 0x0008F0: 0x4C6810140627221E Fmul
    temp_276 = temp_270 * fp_c5.data[24].z;
    // 0x0008F8: 0x4C68101801571A1A Fmul
    temp_277 = temp_271 * fp_c6.data[5].y;
    // 0x000908: 0x4C68101406271B1B Fmul
    temp_278 = temp_273 * fp_c5.data[24].z;
    // 0x000910: 0x5C58100002171F21 Fadd
    temp_279 = temp_252 + temp_275;
    // 0x000918: 0x5C58100001671F1F Fadd
    temp_280 = temp_252 + temp_264;
    // 0x000928: 0x4C68101801470916 Fmul
    temp_281 = temp_195 * fp_c6.data[5].x;
    // 0x000930: 0x4C68101801471B1B Fmul
    temp_282 = temp_278 * fp_c6.data[5].x;
    // 0x000938: 0x4C68101406272121 Fmul
    temp_283 = temp_279 * fp_c5.data[24].z;
    // 0x000948: 0x1E23EA2F98371623 Fmul32i
    temp_284 = temp_281 * 0.318309873;
    // 0x000950: 0x4C68101801570916 Fmul
    temp_285 = temp_195 * fp_c6.data[5].y;
    // 0x000958: 0x59A1118002371E1E Ffma
    temp_286 = 0.0 - temp_284;
    temp_287 = fma(temp_276, temp_286, temp_284);
    // 0x000968: 0x1E23EA2F98371616 Fmul32i
    temp_288 = temp_285 * 0.318309873;
    // 0x000970: 0x4C98079800670023 Mov
    // 0x000978: 0x59A10B0001671516 Ffma
    temp_289 = 0.0 - temp_288;
    temp_290 = fma(temp_272, temp_289, temp_288);
    // 0x000988: 0x4C68101801670915 Fmul
    temp_291 = temp_195 * fp_c6.data[5].z;
    // 0x000990: 0x5C68100001870909 Fmul
    temp_292 = temp_195 * temp_253;
    // 0x000998: 0x4C68101801672118 Fmul
    temp_293 = temp_283 * fp_c6.data[5].z;
    // 0x0009A8: 0x4C98079406270021 Mov
    // 0x0009B0: 0x4C58301800A72323 Fadd
    temp_294 = 0.0 - fp_c6.data[2].z;
    temp_295 = fp_c6.data[1].z + temp_294;
    // 0x0009B8: 0x1E23EA2F98371522 Fmul32i
    temp_296 = temp_291 * 0.318309873;
    // 0x0009C8: 0x4C68101406271F15 Fmul
    temp_297 = temp_280 * fp_c5.data[24].z;
    // 0x0009D0: 0x4C6810180917171F Fmul
    temp_298 = temp_238 * fp_c6.data[36].y;
    // 0x0009D8: 0x4C68101408272121 Fmul
    temp_299 = fp_c5.data[24].z * fp_c5.data[32].z;
    // 0x0009E8: 0x5C68100000971B1B Fmul
    temp_300 = temp_282 * temp_292;
    // 0x0009F0: 0x5C68100000971A1A Fmul
    temp_301 = temp_277 * temp_292;
    // 0x0009F8: 0x5C68100000971818 Fmul
    temp_302 = temp_293 * temp_292;
    // 0x000A08: 0x59A1110002271515 Ffma
    temp_303 = 0.0 - temp_296;
    temp_304 = fma(temp_297, temp_303, temp_296);
    // 0x000A10: 0x4C98079809A70022 Mov
    // 0x000A18: 0x5C90008001F7001F Rro
    // 0x000A28: 0x5084000000271F1F Mufu
    temp_305 = exp2(temp_298);
    temp_306 = clamp(temp_305, 0.0, 1.0);
    // 0x000A30: 0x4C58101408172222 Fadd
    temp_307 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x000A38: 0x5C68100002271F17 Fmul
    temp_308 = temp_306 * temp_307;
    // 0x000A48: 0x4C98079800570022 Mov
    // 0x000A50: 0x4C68101808C7171F Fmul
    temp_309 = temp_308 * fp_c6.data[35].x;
    // 0x000A58: 0x4C58301800972222 Fadd
    temp_310 = 0.0 - fp_c6.data[2].y;
    temp_311 = fp_c6.data[1].y + temp_310;
    // 0x000A68: 0x5C68100002171F09 Fmul
    temp_312 = temp_309 * temp_299;
    // 0x000A70: 0x49A10F9408271F1F Ffma
    temp_313 = 0.0 - fp_c5.data[32].z;
    temp_314 = fma(temp_309, temp_313, temp_309);
    // 0x000A78: 0x49A0048400B71B09 Ffma
    temp_315 = fma(temp_300, fp_c1.data[2].w, temp_312);
    // 0x000A88: 0x4C68101808D7171B Fmul
    temp_316 = temp_308 * fp_c6.data[35].y;
    // 0x000A90: 0x5C58100001F71E1E Fadd
    temp_317 = temp_287 + temp_314;
    // 0x000A98: 0x4C68101808E71717 Fmul
    temp_318 = temp_308 * fp_c6.data[35].z;
    // 0x000AA8: 0x5C68100002171B1F Fmul
    temp_319 = temp_316 * temp_299;
    // 0x000AB0: 0x5C68100002171721 Fmul
    temp_320 = temp_318 * temp_299;
    // 0x000AB8: 0x49A10B9408271717 Ffma
    temp_321 = 0.0 - fp_c5.data[32].z;
    temp_322 = fma(temp_318, temp_321, temp_318);
    // 0x000AC8: 0x49A00F8400B71A1A Ffma
    temp_323 = fma(temp_301, fp_c1.data[2].w, temp_319);
    // 0x000AD0: 0x4C9807980047001F Mov
    // 0x000AD8: 0x49A0108400B71805 Ffma
    temp_324 = fma(temp_302, fp_c1.data[2].w, temp_320);
    // 0x000AE8: 0x49A10D9408271B21 Ffma
    temp_325 = 0.0 - fp_c5.data[32].z;
    temp_326 = fma(temp_316, temp_325, temp_316);
    // 0x000AF0: 0x51A0101800972218 Ffma
    temp_327 = fma(temp_311, temp_198, fp_c6.data[2].y);
    // 0x000AF8: 0x51A0101800A7231B Ffma
    temp_328 = fma(temp_295, temp_198, fp_c6.data[2].z);
    // 0x000B08: 0x5C58100001771515 Fadd
    temp_329 = temp_304 + temp_322;
    // 0x000B10: 0x4C58301800871F1F Fadd
    temp_330 = 0.0 - fp_c6.data[2].x;
    temp_331 = fp_c6.data[1].x + temp_330;
    // 0x000B18: 0x010404000007F017 Mov32i
    // 0x000B28: 0x5C58100002171616 Fadd
    temp_332 = temp_290 + temp_326;
    // 0x000B30: 0x51A0101800871F1F Ffma
    temp_333 = fma(temp_331, temp_198, fp_c6.data[2].x);
    // 0x000B38: 0xE04BFF8F4007FF20 Ipa
    temp_334 = in_attr7.y;
    temp_335 = clamp(temp_334, 0.0, 1.0);
    // 0x000B48: 0xF0F0000034170000 Depbar
    // 0x000B50: 0x49A0059808570D0D Ffma
    temp_336 = fma(temp_142, fp_c6.data[33].y, temp_150);
    // 0x000B58: 0x4C6810140627060B Fmul
    temp_337 = temp_255 * fp_c5.data[24].z;
    // 0x000B68: 0xE043FF8F0007FF06 Ipa
    temp_338 = in_attr7.x;
    // 0x000B70: 0x49A0051808570C23 Ffma
    temp_339 = fma(temp_141, fp_c6.data[33].y, temp_149);
    // 0x000B78: 0x4C6810140627040A Fmul
    temp_340 = temp_254 * fp_c5.data[24].z;
    // 0x000B88: 0x49A0080400C71F10 Ffma
    temp_341 = fma(temp_333, fp_c1.data[3].x, temp_153);
    // 0x000B90: 0x33A00BC00007200C Ffma
    temp_342 = fma(temp_335, -2.0, 3.0);
    // 0x000B98: 0x5C68100002072017 Fmul
    temp_343 = temp_335 * temp_335;
    // 0x000BA8: 0x59A00D0000D70B1A Ffma
    temp_344 = fma(temp_337, temp_336, temp_323);
    // 0x000BB0: 0x49A0088400C71811 Ffma
    temp_345 = fma(temp_327, fp_c1.data[3].x, temp_154);
    // 0x000BB8: 0x59A0048002370A09 Ffma
    temp_346 = fma(temp_340, temp_339, temp_315);
    // 0x000BC8: 0x49A200980AC7010A Ffma
    temp_347 = 0.0 - temp_207;
    temp_348 = fma(temp_207, fp_c6.data[43].x, temp_347);
    // 0x000BD0: 0x5C58100001071E10 Fadd
    temp_349 = temp_317 + temp_341;
    // 0x000BD8: 0x49A0090400C71B12 Ffma
    temp_350 = fma(temp_328, fp_c1.data[3].x, temp_155);
    // 0x000BE8: 0x49A200980AD7010B Ffma
    temp_351 = 0.0 - temp_207;
    temp_352 = fma(temp_207, fp_c6.data[43].y, temp_351);
    // 0x000BF0: 0x5C68100001770C04 Fmul
    temp_353 = temp_342 * temp_343;
    // 0x000BF8: 0x5C58100001171611 Fadd
    temp_354 = temp_332 + temp_345;
    // 0x000C08: 0x3858103F80070A0C Fadd
    temp_355 = temp_348 + 1.0;
    // 0x000C10: 0x59A1080001071310 Ffma
    temp_356 = 0.0 - temp_349;
    temp_357 = fma(temp_13, temp_356, temp_349);
    // 0x000C18: 0x49A00C9808570E0E Ffma
    temp_358 = fma(temp_143, fp_c6.data[33].y, temp_151);
    // 0x000C28: 0x5C58100001271512 Fadd
    temp_359 = temp_329 + temp_350;
    // 0x000C30: 0x49A200980AE70101 Ffma
    temp_360 = 0.0 - temp_207;
    temp_361 = fma(temp_207, fp_c6.data[43].z, temp_360);
    // 0x000C38: 0x3858103F80070B0A Fadd
    temp_362 = temp_352 + 1.0;
    // 0x000C48: 0x4C9807980B47000B Mov
    // 0x000C50: 0x59A1088001171311 Ffma
    temp_363 = 0.0 - temp_354;
    temp_364 = fma(temp_13, temp_363, temp_354);
    // 0x000C58: 0x59A4060000C7020C Ffma
    temp_365 = fma(temp_3, temp_355, temp_355);
    temp_366 = clamp(temp_365, 0.0, 1.0);
    // 0x000C68: 0x59A0048001070209 Ffma
    temp_367 = fma(temp_3, temp_357, temp_346);
    // 0x000C70: 0x59A0028000E70F05 Ffma
    temp_368 = fma(temp_265, temp_358, temp_324);
    // 0x000C78: 0x59A1090001271312 Ffma
    temp_369 = 0.0 - temp_359;
    temp_370 = fma(temp_13, temp_369, temp_359);
    // 0x000C88: 0x3858103F80070101 Fadd
    temp_371 = temp_361 + 1.0;
    // 0x000C90: 0x59A4050000A70302 Ffma
    temp_372 = fma(temp_4, temp_362, temp_362);
    temp_373 = clamp(temp_372, 0.0, 1.0);
    // 0x000C98: 0x4C9807980287000A Mov
    // 0x000CA8: 0x51A205980B471C1C Ffma
    temp_374 = 0.0 - fp_c6.data[45].x;
    temp_375 = fma(temp_158, fp_c6.data[45].x, temp_374);
    // 0x000CB0: 0x59A00D0001170311 Ffma
    temp_376 = fma(temp_4, temp_364, temp_344);
    // 0x000CB8: 0x59A0028001270812 Ffma
    temp_377 = fma(temp_5, temp_370, temp_368);
    // 0x000CC8: 0x59A4008000170803 Ffma
    temp_378 = fma(temp_5, temp_371, temp_371);
    temp_379 = clamp(temp_378, 0.0, 1.0);
    // 0x000CD0: 0x49A503180BC71414 Ffma
    temp_380 = 0.0 - fp_c6.data[47].x;
    temp_381 = fma(temp_156, temp_380, temp_338);
    temp_382 = clamp(temp_381, 0.0, 1.0);
    // 0x000CD8: 0x5C68100000970C01 Fmul
    temp_383 = temp_366 * temp_367;
    // 0x000CE8: 0x5080000000371414 Mufu
    temp_384 = log2(temp_382);
    // 0x000CF0: 0x51A205980B471D1D Ffma
    temp_385 = 0.0 - fp_c6.data[45].x;
    temp_386 = fma(temp_159, fp_c6.data[45].x, temp_385);
    // 0x000CF8: 0x51A0051802871C1C Ffma
    temp_387 = fma(temp_375, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000D08: 0x4C98079802970008 Mov
    // 0x000D10: 0x51A205980B472424 Ffma
    temp_388 = 0.0 - fp_c6.data[45].x;
    temp_389 = fma(temp_160, fp_c6.data[45].x, temp_388);
    // 0x000D18: 0xE043FF8C8007FF0B Ipa
    temp_390 = in_attr4.z;
    // 0x000D28: 0x4C98079802A70006 Mov
    // 0x000D30: 0x5C68100001170202 Fmul
    temp_391 = temp_373 * temp_376;
    // 0x000D38: 0x5C68100001270303 Fmul
    temp_392 = temp_379 * temp_377;
    // 0x000D48: 0x5C58300001C70105 Fadd
    temp_393 = 0.0 - temp_387;
    temp_394 = temp_383 + temp_393;
    // 0x000D50: 0x51A0041802971D1D Ffma
    temp_395 = fma(temp_386, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000D58: 0x4C68101803770404 Fmul
    temp_396 = temp_353 * fp_c6.data[13].w;
    // 0x000D68: 0x51A0031802A72424 Ffma
    temp_397 = fma(temp_389, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000D70: 0x4C68101803171408 Fmul
    temp_398 = temp_384 * fp_c6.data[12].y;
    // 0x000D78: 0x49A00E180BF70509 Ffma
    temp_399 = fma(temp_394, fp_c6.data[47].w, temp_387);
    // 0x000D88: 0x5C58300001D70206 Fadd
    temp_400 = 0.0 - temp_395;
    temp_401 = temp_391 + temp_400;
    // 0x000D90: 0x49A2021803470400 Ffma
    temp_402 = 0.0 - temp_396;
    temp_403 = fma(temp_396, fp_c6.data[13].x, temp_402);
    // 0x000D98: 0x5C58300002470305 Fadd
    temp_404 = 0.0 - temp_397;
    temp_405 = temp_392 + temp_404;
    // 0x000DA8: 0x5C9000800087000A Rro
    // 0x000DB0: 0x49A2021803570408 Ffma
    temp_406 = 0.0 - temp_396;
    temp_407 = fma(temp_396, fp_c6.data[13].y, temp_406);
    // 0x000DB8: 0x5080000000270A0A Mufu
    temp_408 = exp2(temp_398);
    // 0x000DC8: 0x49A00E980BF70606 Ffma
    temp_409 = fma(temp_401, fp_c6.data[47].w, temp_395);
    // 0x000DD0: 0x49A012180BF70505 Ffma
    temp_410 = fma(temp_405, fp_c6.data[47].w, temp_397);
    // 0x000DD8: 0x49A2021803670404 Ffma
    temp_411 = 0.0 - temp_396;
    temp_412 = fma(temp_396, fp_c6.data[13].z, temp_411);
    // 0x000DE8: 0x5C60178000971C09 Fmnmx
    temp_413 = max(temp_387, temp_399);
    // 0x000DF0: 0x5C60178000671D06 Fmnmx
    temp_414 = max(temp_395, temp_409);
    // 0x000DF8: 0x5C60178000572405 Fmnmx
    temp_415 = max(temp_397, temp_410);
    // 0x000E08: 0x59A0048000070900 Ffma
    temp_416 = fma(temp_413, temp_403, temp_413);
    // 0x000E10: 0x59A0030000870608 Ffma
    temp_417 = fma(temp_414, temp_407, temp_414);
    // 0x000E18: 0x4C68101802B70A06 Fmul
    temp_418 = temp_408 * fp_c6.data[10].w;
    // 0x000E28: 0x59A0028000470505 Ffma
    temp_419 = fma(temp_415, temp_412, temp_415);
    // 0x000E30: 0x5C59100000070100 Fadd
    temp_420 = 0.0 - temp_383;
    temp_421 = temp_420 + temp_416;
    // 0x000E38: 0x5C59100000870204 Fadd
    temp_422 = 0.0 - temp_391;
    temp_423 = temp_422 + temp_417;
    // 0x000E48: 0x4C58100C03870B08 Fadd
    temp_424 = temp_390 + fp_c3.data[14].x;
    // 0x000E50: 0x5C59100000570305 Fadd
    temp_425 = 0.0 - temp_392;
    temp_426 = temp_425 + temp_419;
    // 0x000E58: 0x59A0008000670000 Ffma
    temp_427 = fma(temp_421, temp_418, temp_383);
    // 0x000E68: 0x59A0010000670401 Ffma
    temp_428 = fma(temp_423, temp_418, temp_391);
    // 0x000E70: 0x49A37F8C03C70804 Ffma
    temp_429 = 0.0 - fp_c3.data[15].x;
    temp_430 = fma(temp_424, temp_429, -0.0);
    // 0x000E78: 0x59A0018000670502 Ffma
    temp_431 = fma(temp_426, temp_418, temp_392);
    // 0x000E88: 0x0103F6000007F005 Mov32i
    // 0x000E90: 0x5C9807800FF70006 Mov
    // 0x000E98: 0x5C98078000770003 Mov
    // 0x000EA8: 0xE30000000007000F Exit
    out_attr0.x = temp_427;
    out_attr0.y = temp_428;
    out_attr0.z = temp_431;
    out_attr0.w = temp_6;
    out_attr1.x = temp_430;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_6;
    return;
}
