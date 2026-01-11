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

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

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
    precise vec2 temp_11;
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
    precise vec3 temp_198;
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
    precise vec3 temp_238;
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
    precise vec3 temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise vec3 temp_262;
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
    precise float temp_432;
    precise float temp_433;
    precise float temp_434;
    precise float temp_435;
    precise float temp_436;
    precise float temp_437;
    precise float temp_438;
    precise float temp_439;
    precise float temp_440;
    precise float temp_441;
    precise float temp_442;
    precise float temp_443;
    precise float temp_444;
    precise float temp_445;
    precise float temp_446;
    precise float temp_447;
    precise float temp_448;
    precise float temp_449;
    precise float temp_450;
    precise float temp_451;
    precise float temp_452;
    precise float temp_453;
    precise float temp_454;
    precise float temp_455;
    precise float temp_456;
    precise float temp_457;
    precise float temp_458;
    precise float temp_459;
    precise float temp_460;
    precise float temp_461;
    precise float temp_462;
    precise float temp_463;
    precise float temp_464;
    precise float temp_465;
    // 0x000008: 0x4C98079406570021 Mov
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5080000000470000 Mufu
    // 0x000028: 0xE043FF8D0007FF15 Ipa
    temp_0 = in_attr5.x;
    // 0x000030: 0xE043FF8D4007FF14 Ipa
    temp_1 = in_attr5.y;
    // 0x000038: 0xD832024161471508 Texs
    temp_2 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    temp_5 = temp_2.z;
    temp_6 = temp_2.w;
    // 0x000048: 0x5C98078001770007 Mov
    // 0x000050: 0x4BB1839406070707 Fsetp
    temp_7 = temp_6 < fp_c5.data[24].x;
    // 0x000058: 0xE33000000000000F Kil
    if (temp_7)
    {
        discard;
    }
    // 0x000068: 0xD830026FF1471502 Texs
    temp_8 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_9 = temp_8.x;
    temp_10 = temp_8.y;
    // 0x000070: 0xD83A036FF1471514 Texs
    temp_11 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).yw;
    temp_12 = temp_11.x;
    temp_13 = temp_11.y;
    // 0x000078: 0xE043FF890007FF13 Ipa
    temp_14 = in_attr1.x;
    // 0x000088: 0xE043FF880007FF0D Ipa
    temp_15 = in_attr0.x;
    // 0x000090: 0xE043FF894007FF0F Ipa
    temp_16 = in_attr1.y;
    // 0x000098: 0xE043FF884007FF0C Ipa
    temp_17 = in_attr0.y;
    // 0x0000A8: 0xE043FF8B0007FF05 Ipa
    temp_18 = in_attr3.x;
    // 0x0000B0: 0xE043FF8A0007FF10 Ipa
    temp_19 = in_attr2.x;
    // 0x0000B8: 0xE043FF8B4007FF06 Ipa
    temp_20 = in_attr3.y;
    // 0x0000C8: 0xE043FF8A4007FF0A Ipa
    temp_21 = in_attr2.y;
    // 0x0000D0: 0xE043FF8B8007FF0B Ipa
    temp_22 = in_attr3.z;
    // 0x0000D8: 0xE043FF8A8007FF04 Ipa
    temp_23 = in_attr2.z;
    // 0x0000E8: 0xE043FF898007FF0E Ipa
    temp_24 = in_attr1.z;
    // 0x0000F0: 0xE043FF888007FF01 Ipa
    temp_25 = in_attr0.z;
    // 0x0000F8: 0x5C68100001371312 Fmul
    temp_26 = temp_14 * temp_14;
    // 0x000108: 0x5C68100000D70D19 Fmul
    temp_27 = temp_15 * temp_15;
    // 0x000110: 0x5C68100001071011 Fmul
    temp_28 = temp_19 * temp_19;
    // 0x000118: 0x59A0090000F70F17 Ffma
    temp_29 = fma(temp_16, temp_16, temp_26);
    // 0x000128: 0x59A00C8000C70C12 Ffma
    temp_30 = fma(temp_17, temp_17, temp_27);
    // 0x000130: 0x5C68100000570519 Fmul
    temp_31 = temp_18 * temp_18;
    // 0x000138: 0x59A0088000A70A11 Ffma
    temp_32 = fma(temp_21, temp_21, temp_28);
    // 0x000148: 0x59A00B8000E70E17 Ffma
    temp_33 = fma(temp_24, temp_24, temp_29);
    // 0x000150: 0x59A0090000170112 Ffma
    temp_34 = fma(temp_25, temp_25, temp_30);
    // 0x000158: 0x5080000000571718 Mufu
    temp_35 = inversesqrt(temp_33);
    // 0x000168: 0x59A00C8000670619 Ffma
    temp_36 = fma(temp_20, temp_20, temp_31);
    // 0x000170: 0x5080000000571212 Mufu
    temp_37 = inversesqrt(temp_34);
    // 0x000178: 0x59A0088000470411 Ffma
    temp_38 = fma(temp_23, temp_23, temp_32);
    // 0x000188: 0x5080000000571111 Mufu
    temp_39 = inversesqrt(temp_38);
    // 0x000190: 0x59A00C8000B70B19 Ffma
    temp_40 = fma(temp_22, temp_22, temp_36);
    // 0x000198: 0x508000000057191C Mufu
    temp_41 = inversesqrt(temp_40);
    // 0x0001A8: 0x5C68100001871313 Fmul
    temp_42 = temp_14 * temp_35;
    // 0x0001B0: 0x5C68100001870F0F Fmul
    temp_43 = temp_16 * temp_35;
    // 0x0001B8: 0x5C68100001270D0D Fmul
    temp_44 = temp_15 * temp_37;
    // 0x0001C8: 0x5C68100001270C0C Fmul
    temp_45 = temp_17 * temp_37;
    // 0x0001D0: 0x5C68100001270101 Fmul
    temp_46 = temp_25 * temp_37;
    // 0x0001D8: 0x5C68100001171010 Fmul
    temp_47 = temp_19 * temp_39;
    // 0x0001E8: 0x5C68100001170A0A Fmul
    temp_48 = temp_21 * temp_39;
    // 0x0001F0: 0x5C68100001170404 Fmul
    temp_49 = temp_23 * temp_39;
    // 0x0001F8: 0x5C68100001870E11 Fmul
    temp_50 = temp_24 * temp_35;
    // 0x000208: 0x5C69100001C70505 Fmul
    temp_51 = 0.0 - temp_41;
    temp_52 = temp_18 * temp_51;
    // 0x000210: 0x5C69100001C70606 Fmul
    temp_53 = 0.0 - temp_41;
    temp_54 = temp_20 * temp_53;
    // 0x000218: 0x5C69100001C70B0B Fmul
    temp_55 = 0.0 - temp_41;
    temp_56 = temp_22 * temp_55;
    // 0x000228: 0x4C58301805C7050E Fadd
    temp_57 = 0.0 - fp_c6.data[23].x;
    temp_58 = temp_52 + temp_57;
    // 0x000230: 0x5C68100000E70E1A Fmul
    temp_59 = temp_58 * temp_58;
    // 0x000238: 0xF0F0000034170000 Depbar
    // 0x000248: 0x5C68100000370317 Fmul
    temp_60 = temp_10 * temp_10;
    // 0x000250: 0x5C68100000371018 Fmul
    temp_61 = temp_47 * temp_10;
    // 0x000258: 0x4C58301805D70610 Fadd
    temp_62 = 0.0 - fp_c6.data[23].y;
    temp_63 = temp_54 + temp_62;
    // 0x000268: 0x5C68100000370A19 Fmul
    temp_64 = temp_48 * temp_10;
    // 0x000270: 0x5C68100000370404 Fmul
    temp_65 = temp_49 * temp_10;
    // 0x000278: 0x4C58301805E70B03 Fadd
    temp_66 = 0.0 - fp_c6.data[23].z;
    temp_67 = temp_56 + temp_66;
    // 0x000288: 0x59A00B8000270217 Ffma
    temp_68 = fma(temp_9, temp_9, temp_60);
    // 0x000290: 0x59A00C0000271313 Ffma
    temp_69 = fma(temp_42, temp_9, temp_61);
    // 0x000298: 0x59A00D000107101A Ffma
    temp_70 = fma(temp_63, temp_63, temp_59);
    // 0x0002A8: 0x59A00C8000270F0F Ffma
    temp_71 = fma(temp_43, temp_9, temp_64);
    // 0x0002B0: 0x59A0020000271104 Ffma
    temp_72 = fma(temp_50, temp_9, temp_65);
    // 0x0002B8: 0x385D103F80071717 Fadd
    temp_73 = 0.0 - temp_68;
    temp_74 = temp_73 + 1.0;
    temp_75 = clamp(temp_74, 0.0, 1.0);
    // 0x0002C8: 0x5080000000871712 Mufu
    temp_76 = sqrt(temp_75);
    // 0x0002D0: 0x59A00D000037031A Ffma
    temp_77 = fma(temp_67, temp_67, temp_70);
    // 0x0002D8: 0x5080000000571A11 Mufu
    temp_78 = inversesqrt(temp_77);
    // 0x0002E8: 0x59A0098001270D0D Ffma
    temp_79 = fma(temp_44, temp_76, temp_69);
    // 0x0002F0: 0x59A0078001270C0C Ffma
    temp_80 = fma(temp_45, temp_76, temp_71);
    // 0x0002F8: 0x59A0020001270101 Ffma
    temp_81 = fma(temp_46, temp_76, temp_72);
    // 0x000308: 0x5C68100001170319 Fmul
    temp_82 = temp_67 * temp_78;
    // 0x000310: 0x4C98079406970003 Mov
    // 0x000318: 0x5C68100001170E0E Fmul
    temp_83 = temp_58 * temp_78;
    // 0x000328: 0x5C68100000D70D02 Fmul
    temp_84 = temp_79 * temp_79;
    // 0x000330: 0x5C68100001171010 Fmul
    temp_85 = temp_63 * temp_78;
    // 0x000338: 0x4C6810180A070303 Fmul
    temp_86 = fp_c5.data[26].y * fp_c6.data[40].x;
    // 0x000348: 0x4C69101805C70E0A Fmul
    temp_87 = 0.0 - fp_c6.data[23].x;
    temp_88 = temp_83 * temp_87;
    // 0x000350: 0x59A0010000C70C02 Ffma
    temp_89 = fma(temp_80, temp_80, temp_84);
    // 0x000358: 0x386013BF8007031B Fmnmx
    temp_90 = min(temp_86, 1.0);
    // 0x000368: 0x49A1051805D7100A Ffma
    temp_91 = 0.0 - fp_c6.data[23].y;
    temp_92 = fma(temp_85, temp_91, temp_88);
    // 0x000370: 0x59A0010000170102 Ffma
    temp_93 = fma(temp_81, temp_81, temp_89);
    // 0x000378: 0x5080000000570202 Mufu
    temp_94 = inversesqrt(temp_93);
    // 0x000388: 0x4C60178400171B1B Fmnmx
    temp_95 = max(temp_90, fp_c1.data[0].y);
    // 0x000390: 0x5C68100000270D18 Fmul
    temp_96 = temp_79 * temp_94;
    // 0x000398: 0x5C68100000E7050D Fmul
    temp_97 = temp_52 * temp_83;
    // 0x0003A8: 0x5C68100000270C03 Fmul
    temp_98 = temp_80 * temp_94;
    // 0x0003B0: 0x5C6810000027011A Fmul
    temp_99 = temp_81 * temp_94;
    // 0x0003B8: 0x51A40D8400171B0C Ffma
    temp_100 = fma(temp_95, temp_95, fp_c1.data[0].y);
    temp_101 = clamp(temp_100, 0.0, 1.0);
    // 0x0003C8: 0x49A5051805E71902 Ffma
    temp_102 = 0.0 - fp_c6.data[23].z;
    temp_103 = fma(temp_82, temp_102, temp_92);
    temp_104 = clamp(temp_103, 0.0, 1.0);
    // 0x0003D0: 0x5C68100000E7180E Fmul
    temp_105 = temp_96 * temp_83;
    // 0x0003D8: 0x5C68100000571804 Fmul
    temp_106 = temp_96 * temp_52;
    // 0x0003E8: 0x59A0068001070612 Ffma
    temp_107 = fma(temp_54, temp_85, temp_97);
    // 0x0003F0: 0x01040DF760C7F00D Mov32i
    // 0x0003F8: 0x5C68100000C70C0F Fmul
    temp_108 = temp_101 * temp_101;
    // 0x000408: 0x0103F0000007F001 Mov32i
    // 0x000410: 0x59A0070001070310 Ffma
    temp_109 = fma(temp_98, temp_85, temp_105);
    // 0x000418: 0x59A0020000670311 Ffma
    temp_110 = fma(temp_98, temp_54, temp_106);
    // 0x000428: 0x59A4090001970B04 Ffma
    temp_111 = fma(temp_56, temp_82, temp_107);
    temp_112 = clamp(temp_111, 0.0, 1.0);
    // 0x000430: 0x4C69101805C71812 Fmul
    temp_113 = 0.0 - fp_c6.data[23].x;
    temp_114 = temp_96 * temp_113;
    // 0x000438: 0x49A206840007020D Ffma
    temp_115 = fma(temp_104, fp_c1.data[0].x, -6.98316002);
    // 0x000448: 0x3859103F80071B0E Fadd
    temp_116 = 0.0 - temp_95;
    temp_117 = temp_116 + 1.0;
    // 0x000450: 0x59A4080001971A10 Ffma
    temp_118 = fma(temp_99, temp_82, temp_109);
    temp_119 = clamp(temp_118, 0.0, 1.0);
    // 0x000458: 0x59A4088000B71A11 Ffma
    temp_120 = fma(temp_99, temp_56, temp_110);
    temp_121 = clamp(temp_120, 0.0, 1.0);
    // 0x000468: 0x32A000BF00071B17 Ffma
    temp_122 = fma(temp_95, 0.5, 0.5);
    // 0x000470: 0x5C68100000D70202 Fmul
    temp_123 = temp_104 * temp_115;
    // 0x000478: 0x5C68100000E70E0D Fmul
    temp_124 = temp_117 * temp_117;
    // 0x000488: 0x59A2080000F71013 Ffma
    temp_125 = 0.0 - temp_119;
    temp_126 = fma(temp_119, temp_108, temp_125);
    // 0x000490: 0x5C6810000117180A Fmul
    temp_127 = temp_96 * temp_121;
    // 0x000498: 0x49A1091805D7030F Ffma
    temp_128 = 0.0 - fp_c6.data[23].y;
    temp_129 = fma(temp_98, temp_128, temp_114);
    // 0x0004A8: 0x5C68120001771717 Fmul
    temp_130 = temp_122 * 0.5;
    temp_131 = temp_130 * temp_122;
    // 0x0004B0: 0x5C68100001171A12 Fmul
    temp_132 = temp_99 * temp_121;
    // 0x0004B8: 0x5C68100000D70D0D Fmul
    temp_133 = temp_124 * temp_124;
    // 0x0004C8: 0x51A0098400A7100E Ffma
    temp_134 = fma(temp_119, temp_126, fp_c1.data[2].z);
    // 0x0004D0: 0x32A202C000070A0A Ffma
    temp_135 = 0.0 - temp_52;
    temp_136 = fma(temp_127, 2.0, temp_135);
    // 0x0004D8: 0x5080000000470E0E Mufu
    temp_137 = 1.0 / temp_134;
    // 0x0004E8: 0x49A5079805E71A05 Ffma
    temp_138 = 0.0 - fp_c6.data[23].z;
    temp_139 = fma(temp_99, temp_138, temp_129);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x0004F0: 0x010410676C97F013 Mov32i
    // 0x0004F8: 0x1E23E468DB97110F Fmul32i
    temp_141 = temp_121 * 0.193900004;
    // 0x000508: 0x5C68100001170310 Fmul
    temp_142 = temp_98 * temp_121;
    // 0x000510: 0x59A1088001771119 Ffma
    temp_143 = 0.0 - temp_131;
    temp_144 = fma(temp_121, temp_143, temp_121);
    // 0x000518: 0x32A205C00007120B Ffma
    temp_145 = 0.0 - temp_56;
    temp_146 = fma(temp_132, 2.0, temp_145);
    // 0x000528: 0x59A102800177051C Ffma
    temp_147 = 0.0 - temp_131;
    temp_148 = fma(temp_140, temp_147, temp_140);
    // 0x000530: 0x49A0098400571112 Ffma
    temp_149 = fma(temp_121, fp_c1.data[1].y, 8.40400028);
    // 0x000538: 0x49A0078400270D0F Ffma
    temp_150 = fma(temp_133, fp_c1.data[0].z, temp_141);
    // 0x000548: 0x32A2034000071010 Ffma
    temp_151 = 0.0 - temp_54;
    temp_152 = fma(temp_142, 2.0, temp_151);
    // 0x000550: 0x5C58100001971706 Fadd
    temp_153 = temp_131 + temp_144;
    // 0x000558: 0x5C90008000270002 Rro
    // 0x000568: 0x5080000000470606 Mufu
    temp_154 = 1.0 / temp_153;
    // 0x000570: 0x5C58100001C71719 Fadd
    temp_155 = temp_131 + temp_148;
    // 0x000578: 0x5080000000270202 Mufu
    temp_156 = exp2(temp_123);
    // 0x000588: 0x0104066978D7F01C Mov32i
    // 0x000590: 0x508000000047191F Mufu
    temp_157 = 1.0 / temp_155;
    // 0x000598: 0x51A0090400871113 Ffma
    temp_158 = fma(temp_121, temp_149, fp_c1.data[2].x);
    // 0x0005A8: 0x088BF05D63970F12 Fadd32i
    temp_159 = temp_150 + -0.522800028;
    // 0x0005B0: 0x5C68100000E70C0C Fmul
    temp_160 = temp_101 * temp_137;
    // 0x0005B8: 0x5C62578001070A1D Fmnmx
    temp_161 = abs(temp_136);
    temp_162 = abs(temp_152);
    temp_163 = max(temp_161, temp_162);
    // 0x0005C8: 0x0103E2CD9E87F017 Mov32i
    // 0x0005D0: 0x49A20E0400370D0F Ffma
    temp_164 = fma(temp_133, fp_c1.data[0].w, -3.60299993);
    // 0x0005D8: 0x51A009840097111C Ffma
    temp_165 = fma(temp_121, temp_158, fp_c1.data[2].y);
    // 0x0005E8: 0x5C6810000127110E Fmul
    temp_166 = temp_121 * temp_159;
    // 0x0005F0: 0x3859103F80071113 Fadd
    temp_167 = 0.0 - temp_121;
    temp_168 = temp_167 + 1.0;
    // 0x0005F8: 0x5C60578001D70B11 Fmnmx
    temp_169 = abs(temp_146);
    temp_170 = max(temp_169, temp_163);
    // 0x000608: 0x49A20B8400770D17 Ffma
    temp_171 = fma(temp_133, fp_c1.data[1].w, -0.168799996);
    // 0x000610: 0x5080000000471111 Mufu
    temp_172 = 1.0 / temp_170;
    // 0x000618: 0x5C68120001F7061D Fmul
    temp_173 = temp_154 * 0.5;
    temp_174 = temp_173 * temp_157;
    // 0x000628: 0x3868103F00070906 Fmul
    temp_175 = temp_4 * 0.5;
    // 0x000630: 0x4C68101406771312 Fmul
    temp_176 = temp_168 * fp_c5.data[25].w;
    // 0x000638: 0x4C6810180907131E Fmul
    temp_177 = temp_168 * fp_c6.data[36].x;
    // 0x000648: 0x5080400000371212 Mufu
    temp_178 = abs(temp_176);
    temp_179 = log2(temp_178);
    // 0x000650: 0x5C68100001770D19 Fmul
    temp_180 = temp_133 * temp_171;
    // 0x000658: 0x5080400000371E1E Mufu
    temp_181 = abs(temp_177);
    temp_182 = log2(temp_181);
    // 0x000668: 0x51A0078400470D17 Ffma
    temp_183 = fma(temp_133, temp_164, fp_c1.data[1].x);
    // 0x000670: 0x3868103F0007080F Fmul
    temp_184 = temp_3 * 0.5;
    // 0x000678: 0x010000000017F008 Mov32i
    // 0x000688: 0x5C68100000C70C20 Fmul
    temp_185 = temp_160 * temp_160;
    // 0x000690: 0x5C68100001170A09 Fmul
    temp_186 = temp_136 * temp_172;
    // 0x000698: 0x5C6810000117100A Fmul
    temp_187 = temp_152 * temp_172;
    // 0x0006A8: 0x5C69100001170B0B Fmul
    temp_188 = 0.0 - temp_172;
    temp_189 = temp_146 * temp_188;
    // 0x0006B0: 0x5C62578000371810 Fmnmx
    temp_190 = abs(temp_96);
    temp_191 = abs(temp_98);
    temp_192 = max(temp_190, temp_191);
    // 0x0006B8: 0x38681040E0071B11 Fmul
    temp_193 = temp_95 * 7.0;
    // 0x0006C8: 0x4C68101406671212 Fmul
    temp_194 = temp_179 * fp_c5.data[25].z;
    // 0x0006D0: 0x4C58301407B70F25 Fadd
    temp_195 = 0.0 - fp_c5.data[30].w;
    temp_196 = temp_184 + temp_195;
    // 0x0006D8: 0x4C68101809171E1E Fmul
    temp_197 = temp_182 * fp_c6.data[36].y;
    // 0x0006E8: 0xC1BA0143F1170808 Tex
    temp_198 = textureLod(fp_t_tcb_14, vec4(temp_186, temp_187, temp_189, float(1)), temp_193).xyz;
    temp_199 = temp_198.x;
    temp_200 = temp_198.y;
    temp_201 = temp_198.z;
    // 0x0006F0: 0x5C60578001071A10 Fmnmx
    temp_202 = abs(temp_99);
    temp_203 = max(temp_202, temp_192);
    // 0x0006F8: 0x59A0070001770D0D Ffma
    temp_204 = fma(temp_133, temp_183, temp_166);
    // 0x000708: 0x5C60138001C7190C Fmnmx
    temp_205 = min(temp_180, temp_165);
    // 0x000710: 0x5080000000471019 Mufu
    temp_206 = 1.0 / temp_203;
    // 0x000718: 0x4C58301407B7060E Fadd
    temp_207 = 0.0 - fp_c5.data[30].w;
    temp_208 = temp_175 + temp_207;
    // 0x000728: 0xE003FF874FF7FF1C Ipa
    temp_209 = gl_FragCoord.y;
    temp_210 = support_buffer.render_scale[0];
    temp_211 = temp_209 / temp_210;
    // 0x000730: 0x5C90008001270023 Rro
    // 0x000738: 0x51A0129407B71425 Ffma
    temp_212 = fma(temp_12, temp_196, fp_c5.data[30].w);
    // 0x000748: 0x5084000000272323 Mufu
    temp_213 = exp2(temp_194);
    temp_214 = clamp(temp_213, 0.0, 1.0);
    // 0x000750: 0x5C90008001E70012 Rro
    // 0x000758: 0x4C98079809A70017 Mov
    // 0x000768: 0x5084000000271212 Mufu
    temp_215 = exp2(temp_197);
    temp_216 = clamp(temp_215, 0.0, 1.0);
    // 0x000770: 0x51A0071407B71424 Ffma
    temp_217 = fma(temp_12, temp_208, fp_c5.data[30].w);
    // 0x000778: 0x3868104080071B1B Fmul
    temp_218 = temp_95 * 4.0;
    // 0x000788: 0x59A101000027250E Ffma
    temp_219 = 0.0 - temp_156;
    temp_220 = fma(temp_212, temp_219, temp_156);
    // 0x000790: 0x5C5C30000FF70C0C Fadd
    temp_221 = temp_205 + -0.0;
    temp_222 = clamp(temp_221, 0.0, 1.0);
    // 0x000798: 0x4C5C100400670D0D Fadd
    temp_223 = temp_204 + fp_c1.data[1].z;
    temp_224 = clamp(temp_223, 0.0, 1.0);
    // 0x0007A8: 0x4C58101408171717 Fadd
    temp_225 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x0007B0: 0x5C68100001971818 Fmul
    temp_226 = temp_96 * temp_206;
    // 0x0007B8: 0x5C69100001971A1A Fmul
    temp_227 = 0.0 - temp_206;
    temp_228 = temp_99 * temp_227;
    // 0x0007C8: 0x5C58100000E7250E Fadd
    temp_229 = temp_212 + temp_220;
    // 0x0007D0: 0x5C68100001970319 Fmul
    temp_230 = temp_98 * temp_206;
    // 0x0007D8: 0x386C10424807241E Fmul
    temp_231 = temp_217 * 50.0;
    temp_232 = clamp(temp_231, 0.0, 1.0);
    // 0x0007E8: 0x5C68100001D72020 Fmul
    temp_233 = temp_185 * temp_174;
    // 0x0007F0: 0xE003FF870FF7FF1D Ipa
    temp_234 = gl_FragCoord.x;
    temp_235 = support_buffer.render_scale[0];
    temp_236 = temp_234 / temp_235;
    // 0x0007F8: 0x5C68100001771217 Fmul
    temp_237 = temp_216 * temp_225;
    // 0x000808: 0x5C98078001870010 Mov
    // 0x000810: 0x5C98078001A70012 Mov
    // 0x000818: 0xD9A2018181A7181A Texs
    temp_238 = textureLod(fp_t_tcb_18, vec3(temp_226, temp_230, temp_228), temp_218).xyz;
    temp_239 = temp_238.x;
    temp_240 = temp_238.y;
    temp_241 = temp_238.z;
    // 0x000828: 0x4C68101406270E0E Fmul
    temp_242 = temp_229 * fp_c5.data[24].z;
    // 0x000830: 0x51A1109406572323 Ffma
    temp_243 = 0.0 - fp_c5.data[25].y;
    temp_244 = fma(temp_214, temp_243, fp_c5.data[25].y);
    // 0x000838: 0x5C58300000C70D0B Fadd
    temp_245 = 0.0 - temp_222;
    temp_246 = temp_224 + temp_245;
    // 0x000848: 0xE043FF904007FF0D Ipa
    temp_247 = in_attr8.y;
    // 0x000850: 0x5C68100001E70C1E Fmul
    temp_248 = temp_222 * temp_232;
    // 0x000858: 0xE043FF900007FF0C Ipa
    temp_249 = in_attr8.x;
    // 0x000868: 0x5C98078001970011 Mov
    // 0x000870: 0x4C98079C02070027 Mov
    // 0x000878: 0x4C68101801470E21 Fmul
    temp_250 = temp_242 * fp_c6.data[5].x;
    // 0x000888: 0xE043FF908007FF0E Ipa
    temp_251 = in_attr8.z;
    // 0x000890: 0xC0BA0163EFF71010 Tex
    temp_252 = textureLod(fp_t_tcb_16, vec3(temp_226, temp_230, temp_228), 0.0).xyz;
    temp_253 = temp_252.x;
    temp_254 = temp_252.y;
    temp_255 = temp_252.z;
    // 0x000898: 0x4C68100C04B71C1C Fmul
    temp_256 = temp_211 * fp_c3.data[18].w;
    // 0x0008A8: 0x4C9807940627001F Mov
    // 0x0008B0: 0x5C68100002070520 Fmul
    temp_257 = temp_140 * temp_233;
    // 0x0008B8: 0x4C68101808C71722 Fmul
    temp_258 = temp_237 * fp_c6.data[35].x;
    // 0x0008C8: 0x4C68101408271F1F Fmul
    temp_259 = fp_c5.data[24].z * fp_c5.data[32].z;
    // 0x0008D0: 0x4C68100C04A71D1D Fmul
    temp_260 = temp_236 * fp_c3.data[18].z;
    // 0x0008D8: 0xDEBA0000C2770C0C TexB
    temp_261 = texture(fp_t_cb7_20, vec3(temp_249, temp_247, temp_251)).x;
    // 0x0008E8: 0xD822020261C71D1C Texs
    temp_262 = texture(fp_t_tcb_20, vec2(temp_260, temp_256)).xyz;
    temp_263 = temp_262.x;
    temp_264 = temp_262.y;
    temp_265 = temp_262.z;
    // 0x0008F0: 0x3868103F00071616 Fmul
    temp_266 = temp_5 * 0.5;
    // 0x0008F8: 0x5C68100002072121 Fmul
    temp_267 = temp_250 * temp_257;
    // 0x000908: 0x4C68101406371313 Fmul
    temp_268 = temp_168 * fp_c5.data[24].w;
    // 0x000910: 0x5080400000371313 Mufu
    temp_269 = abs(temp_268);
    temp_270 = log2(temp_269);
    // 0x000918: 0x4C58301407B7160D Fadd
    temp_271 = 0.0 - fp_c5.data[30].w;
    temp_272 = temp_266 + temp_271;
    // 0x000928: 0x5C68100001F7220E Fmul
    temp_273 = temp_258 * temp_259;
    // 0x000930: 0x49A1111408272222 Ffma
    temp_274 = 0.0 - fp_c5.data[32].z;
    temp_275 = fma(temp_258, temp_274, temp_258);
    // 0x000938: 0x51A0069407B7140D Ffma
    temp_276 = fma(temp_12, temp_272, fp_c5.data[30].w);
    // 0x000948: 0x49A0070400B72121 Ffma
    temp_277 = fma(temp_267, fp_c1.data[2].w, temp_273);
    // 0x000950: 0x59A101000027240E Ffma
    temp_278 = 0.0 - temp_156;
    temp_279 = fma(temp_217, temp_278, temp_156);
    // 0x000958: 0x59A1010000270D02 Ffma
    temp_280 = 0.0 - temp_156;
    temp_281 = fma(temp_276, temp_280, temp_156);
    // 0x000968: 0x5C58100000E72419 Fadd
    temp_282 = temp_217 + temp_279;
    // 0x000970: 0x5C58100000270D02 Fadd
    temp_283 = temp_276 + temp_281;
    // 0x000978: 0x4C68101406271919 Fmul
    temp_284 = temp_282 * fp_c5.data[24].z;
    // 0x000988: 0x4C68101406270202 Fmul
    temp_285 = temp_283 * fp_c5.data[24].z;
    // 0x000990: 0x4C6810180157190E Fmul
    temp_286 = temp_284 * fp_c6.data[5].y;
    // 0x000998: 0x4C68101808E71719 Fmul
    temp_287 = temp_237 * fp_c6.data[35].z;
    // 0x0009A8: 0x4C68101801670202 Fmul
    temp_288 = temp_285 * fp_c6.data[5].z;
    // 0x0009B0: 0x5C68100002070E0E Fmul
    temp_289 = temp_286 * temp_257;
    // 0x0009B8: 0x5C68100002070220 Fmul
    temp_290 = temp_288 * temp_257;
    // 0x0009C8: 0x4C68101808D71702 Fmul
    temp_291 = temp_237 * fp_c6.data[35].y;
    // 0x0009D0: 0x5C68100001F70217 Fmul
    temp_292 = temp_291 * temp_259;
    // 0x0009D8: 0x5C68100001F7191F Fmul
    temp_293 = temp_287 * temp_259;
    // 0x0009E8: 0x49A00B8400B70E0E Ffma
    temp_294 = fma(temp_289, fp_c1.data[2].w, temp_292);
    // 0x0009F0: 0x49A00F8400B7201F Ffma
    temp_295 = fma(temp_290, fp_c1.data[2].w, temp_293);
    // 0x0009F8: 0x59A00F0000B72520 Ffma
    temp_296 = fma(temp_212, temp_246, temp_248);
    // 0x000A08: 0x59A00F0000B72417 Ffma
    temp_297 = fma(temp_217, temp_246, temp_248);
    // 0x000A10: 0x59A00F0000B70D0B Ffma
    temp_298 = fma(temp_276, temp_246, temp_248);
    // 0x000A18: 0x01040DF760C7F01E Mov32i
    // 0x000A28: 0x4C68101406272020 Fmul
    temp_299 = temp_296 * fp_c5.data[24].z;
    // 0x000A30: 0x49A20F040007041E Ffma
    temp_300 = fma(temp_112, fp_c1.data[0].x, -6.98316002);
    // 0x000A38: 0x5C68100001E7041E Fmul
    temp_301 = temp_112 * temp_300;
    // 0x000A48: 0x5C90008001E70027 Rro
    // 0x000A50: 0x508000000027271E Mufu
    temp_302 = exp2(temp_301);
    // 0x000A58: 0x59A10F0001E72504 Ffma
    temp_303 = 0.0 - temp_302;
    temp_304 = fma(temp_212, temp_303, temp_302);
    // 0x000A68: 0x59A10F0001E72427 Ffma
    temp_305 = 0.0 - temp_302;
    temp_306 = fma(temp_217, temp_305, temp_302);
    // 0x000A70: 0x59A10F0001E70D1E Ffma
    temp_307 = 0.0 - temp_302;
    temp_308 = fma(temp_276, temp_307, temp_302);
    // 0x000A78: 0x5C58100000472525 Fadd
    temp_309 = temp_212 + temp_304;
    // 0x000A88: 0x4C68101801470504 Fmul
    temp_310 = temp_140 * fp_c6.data[5].x;
    // 0x000A90: 0x5C58100001E70D1E Fadd
    temp_311 = temp_276 + temp_308;
    // 0x000A98: 0x5C58100002772424 Fadd
    temp_312 = temp_217 + temp_306;
    // 0x000AA8: 0x1E23EA2F9837040D Fmul32i
    temp_313 = temp_310 * 0.318309873;
    // 0x000AB0: 0x4C68101406272504 Fmul
    temp_314 = temp_309 * fp_c5.data[24].z;
    // 0x000AB8: 0x59A1068000D70404 Ffma
    temp_315 = 0.0 - temp_313;
    temp_316 = fma(temp_314, temp_315, temp_313);
    // 0x000AC8: 0x4C6810180157050D Fmul
    temp_317 = temp_140 * fp_c6.data[5].y;
    // 0x000AD0: 0x4C68101801670505 Fmul
    temp_318 = temp_140 * fp_c6.data[5].z;
    // 0x000AD8: 0x5C58100002270404 Fadd
    temp_319 = temp_316 + temp_275;
    // 0x000AE8: 0x1E23EA2F98370D27 Fmul32i
    temp_320 = temp_317 * 0.318309873;
    // 0x000AF0: 0x4C6810140627240D Fmul
    temp_321 = temp_312 * fp_c5.data[24].z;
    // 0x000AF8: 0x1E23EA2F98370524 Fmul32i
    temp_322 = temp_318 * 0.318309873;
    // 0x000B08: 0x4C68101406271E05 Fmul
    temp_323 = temp_311 * fp_c5.data[24].z;
    // 0x000B10: 0x49A101140827021E Ffma
    temp_324 = 0.0 - fp_c5.data[32].z;
    temp_325 = fma(temp_291, temp_324, temp_291);
    // 0x000B18: 0x49A10C9408271922 Ffma
    temp_326 = 0.0 - fp_c5.data[32].z;
    temp_327 = fma(temp_287, temp_326, temp_287);
    // 0x000B28: 0x4C68101406471302 Fmul
    temp_328 = temp_270 * fp_c5.data[25].x;
    // 0x000B30: 0x59A1138002770D0D Ffma
    temp_329 = 0.0 - temp_320;
    temp_330 = fma(temp_321, temp_329, temp_320);
    // 0x000B38: 0x32A000BF00070319 Ffma
    temp_331 = fma(temp_98, 0.5, 0.5);
    // 0x000B48: 0x59A1120002470505 Ffma
    temp_332 = 0.0 - temp_322;
    temp_333 = fma(temp_323, temp_332, temp_322);
    // 0x000B50: 0x4C98079800870003 Mov
    // 0x000B58: 0x4C68101406271724 Fmul
    temp_334 = temp_297 * fp_c5.data[24].z;
    // 0x000B68: 0x5C58100001E70D0D Fadd
    temp_335 = temp_330 + temp_325;
    // 0x000B70: 0x4C98079800A7001E Mov
    // 0x000B78: 0x5C58100002270501 Fadd
    temp_336 = temp_333 + temp_327;
    // 0x000B88: 0x5C90008000270022 Rro
    // 0x000B90: 0x4C98079800970005 Mov
    // 0x000B98: 0x5084000000272213 Mufu
    temp_337 = exp2(temp_328);
    temp_338 = clamp(temp_337, 0.0, 1.0);
    // 0x000BA8: 0x4C59101800470303 Fadd
    temp_339 = 0.0 - fp_c6.data[2].x;
    temp_340 = temp_339 + fp_c6.data[1].x;
    // 0x000BB0: 0x4C59101800671E1E Fadd
    temp_341 = 0.0 - fp_c6.data[2].z;
    temp_342 = temp_341 + fp_c6.data[1].z;
    // 0x000BB8: 0x4C59101800570502 Fadd
    temp_343 = 0.0 - fp_c6.data[2].y;
    temp_344 = temp_343 + fp_c6.data[1].y;
    // 0x000BC8: 0x51A0019800871903 Ffma
    temp_345 = fma(temp_331, temp_340, fp_c6.data[2].x);
    // 0x000BD0: 0x51A00F1800A71905 Ffma
    temp_346 = fma(temp_331, temp_342, fp_c6.data[2].z);
    // 0x000BD8: 0x4C6810140327231E Fmul
    temp_347 = temp_244 * fp_c5.data[12].z;
    // 0x000BE8: 0x51A0011800971902 Ffma
    temp_348 = fma(temp_331, temp_344, fp_c6.data[2].y);
    // 0x000BF0: 0x4C68101406871313 Fmul
    temp_349 = temp_338 * fp_c5.data[26].x;
    // 0x000BF8: 0x4C68101403172319 Fmul
    temp_350 = temp_244 * fp_c5.data[12].y;
    // 0x000C08: 0x49A00F1402E7131E Ffma
    temp_351 = fma(temp_349, fp_c5.data[11].z, temp_347);
    // 0x000C10: 0x49A00C9402D71319 Ffma
    temp_352 = fma(temp_349, fp_c5.data[11].y, temp_350);
    // 0x000C18: 0x4C68101801671E1E Fmul
    temp_353 = temp_351 * fp_c6.data[5].z;
    // 0x000C28: 0xF0F0000034170000 Depbar
    // 0x000C30: 0x49A00D180857081A Ffma
    temp_354 = fma(temp_199, fp_c6.data[33].y, temp_239);
    // 0x000C38: 0x4C68101403072308 Fmul
    temp_355 = temp_244 * fp_c5.data[12].x;
    // 0x000C48: 0x49A00D980857091B Ffma
    temp_356 = fma(temp_200, fp_c6.data[33].y, temp_240);
    // 0x000C50: 0xE04BFF8F4007FF09 Ipa
    temp_357 = in_attr7.y;
    temp_358 = clamp(temp_357, 0.0, 1.0);
    // 0x000C58: 0x49A00C1808570A18 Ffma
    temp_359 = fma(temp_201, fp_c6.data[33].y, temp_241);
    // 0x000C68: 0x4C68101406270B0A Fmul
    temp_360 = temp_298 * fp_c5.data[24].z;
    // 0x000C70: 0x59A0108001A7201A Ffma
    temp_361 = fma(temp_299, temp_354, temp_277);
    // 0x000C78: 0x49A0041402C71308 Ffma
    temp_362 = fma(temp_349, fp_c5.data[11].x, temp_355);
    // 0x000C88: 0x5C68100001571513 Fmul
    temp_363 = temp_13 * temp_13;
    // 0x000C90: 0x49A0080400C7030B Ffma
    temp_364 = fma(temp_345, fp_c1.data[3].x, temp_253);
    // 0x000C98: 0x59A0070001B72403 Ffma
    temp_365 = fma(temp_334, temp_356, temp_294);
    // 0x000CA8: 0x49A0088400C7020E Ffma
    temp_366 = fma(temp_348, fp_c1.data[3].x, temp_254);
    // 0x000CB0: 0xE043FF8F0007FF02 Ipa
    temp_367 = in_attr7.x;
    // 0x000CB8: 0x49A0090400C70512 Ffma
    temp_368 = fma(temp_346, fp_c1.data[3].x, temp_255);
    // 0x000CC8: 0x4C68101801470808 Fmul
    temp_369 = temp_362 * fp_c6.data[5].x;
    // 0x000CD0: 0x5C68100001371525 Fmul
    temp_370 = temp_13 * temp_363;
    // 0x000CD8: 0x385D103F80071515 Fadd
    temp_371 = 0.0 - temp_13;
    temp_372 = temp_371 + 1.0;
    temp_373 = clamp(temp_372, 0.0, 1.0);
    // 0x000CE8: 0x5C58100000B7040B Fadd
    temp_374 = temp_319 + temp_364;
    // 0x000CF0: 0x5C58100000E70D0D Fadd
    temp_375 = temp_335 + temp_366;
    // 0x000CF8: 0x5C58100001270101 Fadd
    temp_376 = temp_336 + temp_368;
    // 0x000D08: 0x59A00F8001870A1F Ffma
    temp_377 = fma(temp_360, temp_359, temp_295);
    // 0x000D10: 0x4C68101801571913 Fmul
    temp_378 = temp_352 * fp_c6.data[5].y;
    // 0x000D18: 0x49A20A980AC71505 Ffma
    temp_379 = 0.0 - temp_373;
    temp_380 = fma(temp_373, fp_c6.data[43].x, temp_379);
    // 0x000D28: 0x59A1058000B71410 Ffma
    temp_381 = 0.0 - temp_374;
    temp_382 = fma(temp_12, temp_381, temp_374);
    // 0x000D30: 0x49A20A980AD71504 Ffma
    temp_383 = 0.0 - temp_373;
    temp_384 = fma(temp_373, fp_c6.data[43].y, temp_383);
    // 0x000D38: 0x49A20A980AE71515 Ffma
    temp_385 = 0.0 - temp_373;
    temp_386 = fma(temp_373, fp_c6.data[43].z, temp_385);
    // 0x000D48: 0x59A1068000D7140D Ffma
    temp_387 = 0.0 - temp_375;
    temp_388 = fma(temp_12, temp_387, temp_375);
    // 0x000D50: 0x4C9807980B47000B Mov
    // 0x000D58: 0x3858103F80070505 Fadd
    temp_389 = temp_380 + 1.0;
    // 0x000D68: 0x59A00D0001070F10 Ffma
    temp_390 = fma(temp_184, temp_382, temp_361);
    // 0x000D70: 0x3858103F80070404 Fadd
    temp_391 = temp_384 + 1.0;
    // 0x000D78: 0x59A1008000171401 Ffma
    temp_392 = 0.0 - temp_376;
    temp_393 = fma(temp_12, temp_392, temp_376);
    // 0x000D88: 0x3858103F80071515 Fadd
    temp_394 = temp_386 + 1.0;
    // 0x000D90: 0x59A0018000D7060D Ffma
    temp_395 = fma(temp_175, temp_388, temp_365);
    // 0x000D98: 0x59A4028000570F05 Ffma
    temp_396 = fma(temp_184, temp_389, temp_389);
    temp_397 = clamp(temp_396, 0.0, 1.0);
    // 0x000DA8: 0x5C68100002570819 Fmul
    temp_398 = temp_369 * temp_370;
    // 0x000DB0: 0x59A4020000470604 Ffma
    temp_399 = fma(temp_175, temp_391, temp_391);
    temp_400 = clamp(temp_399, 0.0, 1.0);
    // 0x000DB8: 0x59A00F800017161F Ffma
    temp_401 = fma(temp_266, temp_393, temp_377);
    // 0x000DC8: 0x59A40A8001571615 Ffma
    temp_402 = fma(temp_266, temp_394, temp_394);
    temp_403 = clamp(temp_402, 0.0, 1.0);
    // 0x000DD0: 0x51A205980B471C1C Ffma
    temp_404 = 0.0 - fp_c6.data[45].x;
    temp_405 = fma(temp_263, fp_c6.data[45].x, temp_404);
    // 0x000DD8: 0x5C68100001070503 Fmul
    temp_406 = temp_397 * temp_390;
    // 0x000DE8: 0x4C98079802870005 Mov
    // 0x000DF0: 0x5C68100002571E08 Fmul
    temp_407 = temp_353 * temp_370;
    // 0x000DF8: 0x010404000007F01E Mov32i
    // 0x000E08: 0x49A501180BC70C0C Ffma
    temp_408 = 0.0 - fp_c6.data[47].x;
    temp_409 = fma(temp_261, temp_408, temp_367);
    temp_410 = clamp(temp_409, 0.0, 1.0);
    // 0x000E10: 0x5C68100002571313 Fmul
    temp_411 = temp_378 * temp_370;
    // 0x000E18: 0x5080000000370C0C Mufu
    temp_412 = log2(temp_410);
    // 0x000E28: 0x49A0019406C71901 Ffma
    temp_413 = fma(temp_398, fp_c5.data[27].x, temp_406);
    // 0x000E30: 0x5C68100000D70404 Fmul
    temp_414 = temp_400 * temp_395;
    // 0x000E38: 0xE043FF8C8007FF0D Ipa
    temp_415 = in_attr4.z;
    // 0x000E48: 0x51A205980B471D1D Ffma
    temp_416 = 0.0 - fp_c6.data[45].x;
    temp_417 = fma(temp_264, fp_c6.data[45].x, temp_416);
    // 0x000E50: 0x51A205980B472626 Ffma
    temp_418 = 0.0 - fp_c6.data[45].x;
    temp_419 = fma(temp_265, fp_c6.data[45].x, temp_418);
    // 0x000E58: 0x51A0029802871C1C Ffma
    temp_420 = fma(temp_405, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000E68: 0x4C98079802970003 Mov
    // 0x000E70: 0x5C68100001F71515 Fmul
    temp_421 = temp_403 * temp_401;
    // 0x000E78: 0x4C98079802A7000B Mov
    // 0x000E88: 0x33A00F400007091E Ffma
    temp_422 = fma(temp_358, -2.0, 3.0);
    // 0x000E90: 0x5C68100000970909 Fmul
    temp_423 = temp_358 * temp_358;
    // 0x000E98: 0x49A0021406C71302 Ffma
    temp_424 = fma(temp_411, fp_c5.data[27].x, temp_414);
    // 0x000EA8: 0x5C58300001C70105 Fadd
    temp_425 = 0.0 - temp_420;
    temp_426 = temp_413 + temp_425;
    // 0x000EB0: 0x51A0019802971D1D Ffma
    temp_427 = fma(temp_417, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000EB8: 0x49A00A9406C70803 Ffma
    temp_428 = fma(temp_407, fp_c5.data[27].x, temp_421);
    // 0x000EC8: 0x51A0059802A72626 Ffma
    temp_429 = fma(temp_419, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000ED0: 0x5C68100001E70909 Fmul
    temp_430 = temp_423 * temp_422;
    // 0x000ED8: 0x4C68101803170C08 Fmul
    temp_431 = temp_412 * fp_c6.data[12].y;
    // 0x000EE8: 0x49A00E180BF70506 Ffma
    temp_432 = fma(temp_426, fp_c6.data[47].w, temp_420);
    // 0x000EF0: 0x5C58300001D70204 Fadd
    temp_433 = 0.0 - temp_427;
    temp_434 = temp_424 + temp_433;
    // 0x000EF8: 0x5C58300002670305 Fadd
    temp_435 = 0.0 - temp_429;
    temp_436 = temp_428 + temp_435;
    // 0x000F08: 0x4C68101803770909 Fmul
    temp_437 = temp_430 * fp_c6.data[13].w;
    // 0x000F10: 0x5C9000800087000B Rro
    // 0x000F18: 0x49A00E980BF70404 Ffma
    temp_438 = fma(temp_434, fp_c6.data[47].w, temp_427);
    // 0x000F28: 0x5080000000270B0B Mufu
    temp_439 = exp2(temp_431);
    // 0x000F30: 0x49A013180BF70505 Ffma
    temp_440 = fma(temp_436, fp_c6.data[47].w, temp_429);
    // 0x000F38: 0x5C60178000671C06 Fmnmx
    temp_441 = max(temp_420, temp_432);
    // 0x000F48: 0x49A2049803470900 Ffma
    temp_442 = 0.0 - temp_437;
    temp_443 = fma(temp_437, fp_c6.data[13].x, temp_442);
    // 0x000F50: 0x49A204980357090A Ffma
    temp_444 = 0.0 - temp_437;
    temp_445 = fma(temp_437, fp_c6.data[13].y, temp_444);
    // 0x000F58: 0x49A2049803670908 Ffma
    temp_446 = 0.0 - temp_437;
    temp_447 = fma(temp_437, fp_c6.data[13].z, temp_446);
    // 0x000F68: 0x5C60178000471D04 Fmnmx
    temp_448 = max(temp_427, temp_438);
    // 0x000F70: 0x5C60178000572605 Fmnmx
    temp_449 = max(temp_429, temp_440);
    // 0x000F78: 0x59A0030000070600 Ffma
    temp_450 = fma(temp_441, temp_443, temp_441);
    // 0x000F88: 0x59A0020000A70404 Ffma
    temp_451 = fma(temp_448, temp_445, temp_448);
    // 0x000F90: 0x4C68101802B70B06 Fmul
    temp_452 = temp_439 * fp_c6.data[10].w;
    // 0x000F98: 0x59A0028000870505 Ffma
    temp_453 = fma(temp_449, temp_447, temp_449);
    // 0x000FA8: 0x5C59100000070100 Fadd
    temp_454 = 0.0 - temp_413;
    temp_455 = temp_454 + temp_450;
    // 0x000FB0: 0x4C58100C03870D08 Fadd
    temp_456 = temp_415 + fp_c3.data[14].x;
    // 0x000FB8: 0x5C59100000470204 Fadd
    temp_457 = 0.0 - temp_424;
    temp_458 = temp_457 + temp_451;
    // 0x000FC8: 0x5C59100000570305 Fadd
    temp_459 = 0.0 - temp_428;
    temp_460 = temp_459 + temp_453;
    // 0x000FD0: 0x59A0008000670000 Ffma
    temp_461 = fma(temp_455, temp_452, temp_413);
    // 0x000FD8: 0x59A0010000670401 Ffma
    temp_462 = fma(temp_458, temp_452, temp_424);
    // 0x000FE8: 0x49A37F8C03C70804 Ffma
    temp_463 = 0.0 - fp_c3.data[15].x;
    temp_464 = fma(temp_456, temp_463, -0.0);
    // 0x000FF0: 0x59A0018000670502 Ffma
    temp_465 = fma(temp_460, temp_452, temp_428);
    // 0x000FF8: 0x0103F6000007F005 Mov32i
    // 0x001008: 0x5C9807800FF70006 Mov
    // 0x001010: 0x5C98078000770003 Mov
    // 0x001018: 0xE30000000007000F Exit
    out_attr0.x = temp_461;
    out_attr0.y = temp_462;
    out_attr0.z = temp_465;
    out_attr0.w = temp_6;
    out_attr1.x = temp_464;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_6;
    return;
}
