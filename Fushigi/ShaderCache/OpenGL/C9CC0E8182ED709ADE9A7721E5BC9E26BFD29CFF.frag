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

layout (binding = 9, std140) uniform _fp_c8
{
    precise vec4 data[4096];
} fp_c8;

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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_36;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform sampler2D fp_t_tcb_1E;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform samplerCube fp_t_tcb_16;
layout (binding = 6) uniform samplerCube fp_t_tcb_18;
layout (binding = 7) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 8) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;
layout (location = 9) in vec4 in_attr9;

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
    precise vec2 temp_10;
    precise float temp_11;
    precise float temp_12;
    precise vec2 temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise vec3 temp_18;
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
    uint temp_139;
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
    int temp_164;
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
    int temp_177;
    uint temp_178;
    uint temp_179;
    int temp_180;
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
    bool temp_242;
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
    int temp_274;
    bool temp_275;
    int temp_276;
    int temp_277;
    int temp_278;
    int temp_279;
    int temp_280;
    uint temp_281;
    uint temp_282;
    int temp_283;
    precise float temp_284;
    int temp_285;
    int temp_286;
    uint temp_287;
    uint temp_288;
    int temp_289;
    precise float temp_290;
    int temp_291;
    uint temp_292;
    int temp_293;
    precise float temp_294;
    int temp_295;
    uint temp_296;
    uint temp_297;
    int temp_298;
    precise float temp_299;
    int temp_300;
    uint temp_301;
    int temp_302;
    precise float temp_303;
    int temp_304;
    uint temp_305;
    uint temp_306;
    int temp_307;
    precise float temp_308;
    int temp_309;
    uint temp_310;
    int temp_311;
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
    int temp_333;
    uint temp_334;
    uint temp_335;
    int temp_336;
    precise float temp_337;
    precise float temp_338;
    precise float temp_339;
    int temp_340;
    uint temp_341;
    uint temp_342;
    int temp_343;
    precise float temp_344;
    int temp_345;
    uint temp_346;
    int temp_347;
    precise float temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    int temp_354;
    uint temp_355;
    uint temp_356;
    int temp_357;
    precise float temp_358;
    int temp_359;
    uint temp_360;
    int temp_361;
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
    uint temp_374;
    int temp_375;
    bool temp_376;
    uint temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    uint temp_385;
    precise float temp_386;
    bool temp_387;
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
    int temp_411;
    uint temp_412;
    uint temp_413;
    int temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    int temp_420;
    uint temp_421;
    uint temp_422;
    int temp_423;
    precise float temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    uint temp_431;
    uint temp_432;
    int temp_433;
    precise float temp_434;
    int temp_435;
    uint temp_436;
    int temp_437;
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
    precise float temp_466;
    precise float temp_467;
    precise float temp_468;
    precise float temp_469;
    precise float temp_470;
    precise float temp_471;
    precise float temp_472;
    precise float temp_473;
    precise float temp_474;
    precise float temp_475;
    precise float temp_476;
    precise float temp_477;
    precise float temp_478;
    precise float temp_479;
    precise float temp_480;
    precise float temp_481;
    precise float temp_482;
    precise float temp_483;
    precise float temp_484;
    precise float temp_485;
    precise float temp_486;
    precise float temp_487;
    precise float temp_488;
    precise float temp_489;
    precise float temp_490;
    precise float temp_491;
    precise float temp_492;
    precise float temp_493;
    precise float temp_494;
    precise float temp_495;
    precise float temp_496;
    precise float temp_497;
    precise float temp_498;
    precise float temp_499;
    precise float temp_500;
    precise float temp_501;
    precise float temp_502;
    precise float temp_503;
    precise float temp_504;
    precise float temp_505;
    precise float temp_506;
    precise float temp_507;
    precise float temp_508;
    precise float temp_509;
    precise float temp_510;
    precise float temp_511;
    precise float temp_512;
    precise float temp_513;
    precise float temp_514;
    precise float temp_515;
    precise float temp_516;
    precise float temp_517;
    precise float temp_518;
    precise float temp_519;
    precise float temp_520;
    precise float temp_521;
    precise float temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise float temp_526;
    precise float temp_527;
    precise float temp_528;
    precise float temp_529;
    precise float temp_530;
    precise float temp_531;
    precise float temp_532;
    precise float temp_533;
    precise float temp_534;
    precise float temp_535;
    precise vec3 temp_536;
    precise float temp_537;
    precise float temp_538;
    precise float temp_539;
    precise vec3 temp_540;
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    precise float temp_547;
    precise vec3 temp_548;
    precise float temp_549;
    precise float temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise float temp_555;
    precise float temp_556;
    precise float temp_557;
    precise float temp_558;
    precise float temp_559;
    precise float temp_560;
    precise float temp_561;
    precise float temp_562;
    precise float temp_563;
    precise float temp_564;
    precise float temp_565;
    precise float temp_566;
    precise float temp_567;
    precise float temp_568;
    precise float temp_569;
    precise float temp_570;
    precise float temp_571;
    precise float temp_572;
    precise float temp_573;
    precise float temp_574;
    precise float temp_575;
    precise float temp_576;
    precise float temp_577;
    precise float temp_578;
    precise float temp_579;
    precise float temp_580;
    precise float temp_581;
    precise float temp_582;
    precise float temp_583;
    precise float temp_584;
    precise float temp_585;
    precise float temp_586;
    precise float temp_587;
    precise float temp_588;
    precise float temp_589;
    precise float temp_590;
    precise float temp_591;
    precise float temp_592;
    precise float temp_593;
    precise float temp_594;
    precise float temp_595;
    precise float temp_596;
    precise float temp_597;
    precise float temp_598;
    precise float temp_599;
    precise float temp_600;
    precise float temp_601;
    precise float temp_602;
    precise float temp_603;
    precise float temp_604;
    precise float temp_605;
    precise float temp_606;
    precise float temp_607;
    precise float temp_608;
    precise float temp_609;
    precise float temp_610;
    precise float temp_611;
    precise float temp_612;
    precise float temp_613;
    precise float temp_614;
    precise float temp_615;
    precise float temp_616;
    precise float temp_617;
    precise float temp_618;
    precise float temp_619;
    precise float temp_620;
    precise float temp_621;
    precise float temp_622;
    precise float temp_623;
    precise float temp_624;
    precise float temp_625;
    precise float temp_626;
    precise float temp_627;
    precise float temp_628;
    precise float temp_629;
    precise float temp_630;
    precise float temp_631;
    precise float temp_632;
    precise float temp_633;
    precise float temp_634;
    precise float temp_635;
    precise float temp_636;
    precise float temp_637;
    precise float temp_638;
    precise float temp_639;
    precise float temp_640;
    precise float temp_641;
    precise float temp_642;
    precise float temp_643;
    precise float temp_644;
    precise float temp_645;
    precise float temp_646;
    precise float temp_647;
    precise float temp_648;
    precise float temp_649;
    precise float temp_650;
    precise float temp_651;
    precise float temp_652;
    precise float temp_653;
    precise float temp_654;
    precise float temp_655;
    precise float temp_656;
    precise float temp_657;
    precise float temp_658;
    precise float temp_659;
    precise float temp_660;
    precise float temp_661;
    precise float temp_662;
    precise float temp_663;
    precise float temp_664;
    precise float temp_665;
    precise float temp_666;
    precise float temp_667;
    precise float temp_668;
    precise float temp_669;
    precise float temp_670;
    precise float temp_671;
    precise float temp_672;
    precise float temp_673;
    precise float temp_674;
    precise float temp_675;
    precise float temp_676;
    precise float temp_677;
    precise float temp_678;
    precise float temp_679;
    precise float temp_680;
    precise float temp_681;
    precise float temp_682;
    precise float temp_683;
    precise float temp_684;
    precise float temp_685;
    precise float temp_686;
    precise float temp_687;
    precise float temp_688;
    precise float temp_689;
    precise float temp_690;
    precise float temp_691;
    precise float temp_692;
    precise float temp_693;
    precise float temp_694;
    precise float temp_695;
    precise float temp_696;
    precise float temp_697;
    precise float temp_698;
    precise float temp_699;
    precise float temp_700;
    precise float temp_701;
    precise float temp_702;
    precise float temp_703;
    precise float temp_704;
    // 0x000008: 0x0103F8000007F003 Mov32i
    // 0x000010: 0xE003FF87CFF7FF02 Ipa
    // 0x000018: 0x0103F8000007F023 Mov32i
    // 0x000028: 0xE003FF870FF7FF04 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0x5C9807800FF7001C Mov
    // 0x000038: 0xE003FF874FF7FF05 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000048: 0x4C68100C04A70404 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x5080000000470202 Mufu
    // 0x000058: 0x4C68100C04B70505 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000068: 0xE043FF8E0027FF0B Ipa
    temp_8 = in_attr6.x;
    // 0x000070: 0xE043FF8E4027FF0E Ipa
    temp_9 = in_attr6.y;
    // 0x000078: 0xD830026FF0E70B06 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000088: 0xD834036FF0E70B00 Texs
    temp_13 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    // 0x000090: 0xD822024FF0E70B08 Texs
    temp_16 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).x;
    // 0x000098: 0xD86201EFF0370403 Texs
    temp_17 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x0000A8: 0xD8220202A057040C Texs
    temp_18 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_19 = temp_18.x;
    temp_20 = temp_18.y;
    temp_21 = temp_18.z;
    // 0x0000B0: 0xE043FF8B0027FF30 Ipa
    temp_22 = in_attr3.x;
    // 0x0000B8: 0xE043FF8B4027FF2C Ipa
    temp_23 = in_attr3.y;
    // 0x0000C8: 0xE043FF8A0027FF09 Ipa
    temp_24 = in_attr2.x;
    // 0x0000D0: 0xE043FF8B8027FF2B Ipa
    temp_25 = in_attr3.z;
    // 0x0000D8: 0xE043FF8A4027FF0A Ipa
    temp_26 = in_attr2.y;
    // 0x0000E8: 0xE043FF890027FF11 Ipa
    temp_27 = in_attr1.x;
    // 0x0000F0: 0xE043FF880027FF16 Ipa
    temp_28 = in_attr0.x;
    // 0x0000F8: 0xE043FF894027FF12 Ipa
    temp_29 = in_attr1.y;
    // 0x000108: 0xE043FF884027FF17 Ipa
    temp_30 = in_attr0.y;
    // 0x000110: 0xE043FF898027FF13 Ipa
    temp_31 = in_attr1.z;
    // 0x000118: 0xE043FF8A8027FF0B Ipa
    temp_32 = in_attr2.z;
    // 0x000128: 0xE043FF888027FF18 Ipa
    temp_33 = in_attr0.z;
    // 0x000130: 0xE2900000D4800000 Ssy
    // 0x000138: 0x5C6810000307300E Fmul
    temp_34 = temp_22 * temp_22;
    // 0x000148: 0x5C6810000097090F Fmul
    temp_35 = temp_24 * temp_24;
    // 0x000150: 0x5C68100001171110 Fmul
    temp_36 = temp_27 * temp_27;
    // 0x000158: 0x59A0070002C72C14 Ffma
    temp_37 = fma(temp_23, temp_23, temp_34);
    // 0x000168: 0x5C68100001671615 Fmul
    temp_38 = temp_28 * temp_28;
    // 0x000170: 0x59A0078000A70A0E Ffma
    temp_39 = fma(temp_26, temp_26, temp_35);
    // 0x000178: 0x59A00A0002B72B1A Ffma
    temp_40 = fma(temp_25, temp_25, temp_37);
    // 0x000188: 0x59A0080001271214 Ffma
    temp_41 = fma(temp_29, temp_29, temp_36);
    // 0x000190: 0x5080000000571A1A Mufu
    temp_42 = inversesqrt(temp_40);
    // 0x000198: 0x59A0070000B70B0E Ffma
    temp_43 = fma(temp_32, temp_32, temp_39);
    // 0x0001A8: 0x59A00A8001771715 Ffma
    temp_44 = fma(temp_30, temp_30, temp_38);
    // 0x0001B0: 0x5080000000570E10 Mufu
    temp_45 = inversesqrt(temp_43);
    // 0x0001B8: 0x59A00A0001371314 Ffma
    temp_46 = fma(temp_31, temp_31, temp_41);
    // 0x0001C8: 0x5080000000571414 Mufu
    temp_47 = inversesqrt(temp_46);
    // 0x0001D0: 0x59A00A800187180F Ffma
    temp_48 = fma(temp_33, temp_33, temp_44);
    // 0x0001D8: 0x5080000000570F19 Mufu
    temp_49 = inversesqrt(temp_48);
    // 0x0001E8: 0x5C69100001A7302F Fmul
    temp_50 = 0.0 - temp_42;
    temp_51 = temp_22 * temp_50;
    // 0x0001F0: 0x5C69100001A72C2C Fmul
    temp_52 = 0.0 - temp_42;
    temp_53 = temp_23 * temp_52;
    // 0x0001F8: 0x5C69100001A72B2B Fmul
    temp_54 = 0.0 - temp_42;
    temp_55 = temp_25 * temp_54;
    // 0x000208: 0x5C68100001070909 Fmul
    temp_56 = temp_24 * temp_45;
    // 0x000210: 0x5C68100001070A0A Fmul
    temp_57 = temp_26 * temp_45;
    // 0x000218: 0x5C68100001070B10 Fmul
    temp_58 = temp_32 * temp_45;
    // 0x000228: 0x4C58301805C72F1B Fadd
    temp_59 = 0.0 - fp_c6.data[23].x;
    temp_60 = temp_51 + temp_59;
    // 0x000230: 0x4C58301805D72C1A Fadd
    temp_61 = 0.0 - fp_c6.data[23].y;
    temp_62 = temp_53 + temp_61;
    // 0x000238: 0x5C68100001471111 Fmul
    temp_63 = temp_27 * temp_47;
    // 0x000248: 0x5C68100001471215 Fmul
    temp_64 = temp_29 * temp_47;
    // 0x000250: 0x5C68100001471313 Fmul
    temp_65 = temp_31 * temp_47;
    // 0x000258: 0x4C58301805E72B14 Fadd
    temp_66 = 0.0 - fp_c6.data[23].z;
    temp_67 = temp_55 + temp_66;
    // 0x000268: 0x5C68100001B71B0B Fmul
    temp_68 = temp_60 * temp_60;
    // 0x000270: 0x5C68100001971712 Fmul
    temp_69 = temp_30 * temp_49;
    // 0x000278: 0x5C68100001971817 Fmul
    temp_70 = temp_33 * temp_49;
    // 0x000288: 0x5C68100001971616 Fmul
    temp_71 = temp_28 * temp_49;
    // 0x000290: 0x59A0058001A71A0E Ffma
    temp_72 = fma(temp_62, temp_62, temp_68);
    // 0x000298: 0x59A0070001471418 Ffma
    temp_73 = fma(temp_67, temp_67, temp_72);
    // 0x0002A8: 0x508000000057181D Mufu
    temp_74 = inversesqrt(temp_73);
    // 0x0002B0: 0x5C9807800FF70018 Mov
    // 0x0002B8: 0xF0F0000034270000 Depbar
    // 0x0002C8: 0x5C6810000077070B Fmul
    temp_75 = temp_12 * temp_12;
    // 0x0002D0: 0x5C68100000770A0F Fmul
    temp_76 = temp_57 * temp_12;
    // 0x0002D8: 0x5C68100000771010 Fmul
    temp_77 = temp_58 * temp_12;
    // 0x0002E8: 0x5C68100001D7140A Fmul
    temp_78 = temp_67 * temp_74;
    // 0x0002F0: 0x01040DF760C7F014 Mov32i
    // 0x0002F8: 0x59A005800067060B Ffma
    temp_79 = fma(temp_11, temp_11, temp_75);
    // 0x000308: 0x59A007800157060F Ffma
    temp_80 = fma(temp_11, temp_64, temp_76);
    // 0x000310: 0x59A0080001370610 Ffma
    temp_81 = fma(temp_11, temp_65, temp_77);
    // 0x000318: 0x4C98079403270015 Mov
    // 0x000328: 0x385D103F80070B0E Fadd
    temp_82 = 0.0 - temp_79;
    temp_83 = temp_82 + 1.0;
    temp_84 = clamp(temp_83, 0.0, 1.0);
    // 0x000330: 0x5C6810000077090B Fmul
    temp_85 = temp_56 * temp_12;
    // 0x000338: 0x5080000000870E19 Mufu
    temp_86 = sqrt(temp_84);
    // 0x000348: 0x5C68100001D71B09 Fmul
    temp_87 = temp_60 * temp_74;
    // 0x000350: 0x5C68100001D71A07 Fmul
    temp_88 = temp_62 * temp_74;
    // 0x000358: 0xF0F0000034170000 Depbar
    // 0x000368: 0x51A5018400270101 Ffma
    temp_89 = 0.0 - temp_17;
    temp_90 = fma(temp_15, temp_89, fp_c1.data[0].z);
    temp_91 = clamp(temp_90, 0.0, 1.0);
    // 0x000370: 0x5C9807800FF7001D Mov
    // 0x000378: 0x5C9807800FF7001B Mov
    // 0x000388: 0x59A005800117060B Ffma
    temp_92 = fma(temp_11, temp_63, temp_85);
    // 0x000390: 0x5C68100000972F11 Fmul
    temp_93 = temp_51 * temp_87;
    // 0x000398: 0x4C69101805C7090E Fmul
    temp_94 = 0.0 - fp_c6.data[23].x;
    temp_95 = temp_87 * temp_94;
    // 0x0003A8: 0x49A200980AD70103 Ffma
    temp_96 = 0.0 - temp_91;
    temp_97 = fma(temp_91, fp_c6.data[43].y, temp_96);
    // 0x0003B0: 0x5C9807800FF7001A Mov
    // 0x0003B8: 0x59A005800197160B Ffma
    temp_98 = fma(temp_71, temp_86, temp_92);
    // 0x0003C8: 0x59A0088000772C11 Ffma
    temp_99 = fma(temp_53, temp_88, temp_93);
    // 0x0003D0: 0x59A007800197120F Ffma
    temp_100 = fma(temp_69, temp_86, temp_80);
    // 0x0003D8: 0x49A1071805D70713 Ffma
    temp_101 = 0.0 - fp_c6.data[23].y;
    temp_102 = fma(temp_88, temp_101, temp_95);
    // 0x0003E8: 0x59A0080001971710 Ffma
    temp_103 = fma(temp_70, temp_86, temp_81);
    // 0x0003F0: 0x4C98079406970017 Mov
    // 0x0003F8: 0x5C68100000B70B06 Fmul
    temp_104 = temp_98 * temp_98;
    // 0x000408: 0x59A4088000A72B11 Ffma
    temp_105 = fma(temp_55, temp_78, temp_99);
    temp_106 = clamp(temp_105, 0.0, 1.0);
    // 0x000410: 0x3858103F80070303 Fadd
    temp_107 = temp_97 + 1.0;
    // 0x000418: 0x49A5099805E70A13 Ffma
    temp_108 = 0.0 - fp_c6.data[23].z;
    temp_109 = fma(temp_78, temp_108, temp_102);
    temp_110 = clamp(temp_109, 0.0, 1.0);
    // 0x000428: 0x5C9807800FF70019 Mov
    // 0x000430: 0x59A0030000F70F06 Ffma
    temp_111 = fma(temp_100, temp_100, temp_104);
    // 0x000438: 0x49A20A0400171112 Ffma
    temp_112 = fma(temp_106, fp_c1.data[0].y, -6.98316002);
    // 0x000448: 0x59A003000107100E Ffma
    temp_113 = fma(temp_103, temp_103, temp_111);
    // 0x000450: 0x5C68100001271106 Fmul
    temp_114 = temp_106 * temp_112;
    // 0x000458: 0x5080000000570E0E Mufu
    temp_115 = inversesqrt(temp_113);
    // 0x000468: 0x49A20A0400171312 Ffma
    temp_116 = fma(temp_110, fp_c1.data[0].y, -6.98316002);
    // 0x000470: 0x4C6810180A070011 Fmul
    temp_117 = temp_14 * fp_c6.data[40].x;
    // 0x000478: 0x5C90008000670006 Rro
    // 0x000488: 0x5C68100001271300 Fmul
    temp_118 = temp_110 * temp_116;
    // 0x000490: 0x3868104180070412 Fmul
    temp_119 = temp_6 * 16.0;
    // 0x000498: 0x3868104110070513 Fmul
    temp_120 = temp_7 * 9.0;
    // 0x0004A8: 0x5CA8148001270A12 F2f
    temp_121 = floor(temp_119);
    // 0x0004B0: 0x386013BF80071111 Fmnmx
    temp_122 = min(temp_117, 1.0);
    // 0x0004B8: 0x5CA8148001370A13 F2f
    temp_123 = floor(temp_120);
    // 0x0004C8: 0x5C68100000E70B2E Fmul
    temp_124 = temp_98 * temp_115;
    // 0x0004D0: 0x32A211C000070805 Ffma
    temp_125 = fma(temp_16, 2.0, -1.0);
    // 0x0004D8: 0x5C68100000E70F29 Fmul
    temp_126 = temp_100 * temp_115;
    // 0x0004E8: 0x5C68100000E7102D Fmul
    temp_127 = temp_103 * temp_115;
    // 0x0004F0: 0x0103F0000007F00E Mov32i
    // 0x0004F8: 0x4C60178400071128 Fmnmx
    temp_128 = max(temp_122, fp_c1.data[0].x);
    // 0x000508: 0x5C68100000972E04 Fmul
    temp_129 = temp_124 * temp_87;
    // 0x000510: 0x5C68100002F72E0B Fmul
    temp_130 = temp_124 * temp_51;
    // 0x000518: 0x4C98079403070009 Mov
    // 0x000528: 0x51A4140400072811 Ffma
    temp_131 = fma(temp_128, temp_128, fp_c1.data[0].x);
    temp_132 = clamp(temp_131, 0.0, 1.0);
    // 0x000530: 0x32A009418007130F Ffma
    temp_133 = fma(temp_123, 16.0, temp_121);
    // 0x000538: 0x5C5970000FF70513 Fadd
    temp_134 = abs(temp_125);
    temp_135 = 0.0 - temp_134;
    temp_136 = temp_135 + -0.0;
    // 0x000548: 0x5CB0118000F70A0F F2i
    temp_137 = trunc(temp_133);
    temp_138 = max(temp_137, 0.0);
    temp_139 = uint(temp_138);
    // 0x000550: 0x59A0020000772904 Ffma
    temp_140 = fma(temp_126, temp_88, temp_129);
    // 0x000558: 0x59A0058002C72912 Ffma
    temp_141 = fma(temp_126, temp_53, temp_130);
    // 0x000568: 0x33A411C00007080B Ffma
    temp_142 = fma(temp_16, -2.0, 1.0);
    temp_143 = clamp(temp_142, 0.0, 1.0);
    // 0x000570: 0x32A611C000070823 Ffma
    temp_144 = fma(temp_16, 2.0, -1.0);
    temp_145 = clamp(temp_144, 0.0, 1.0);
    // 0x000578: 0x4C98079403170008 Mov
    // 0x000588: 0x51A0049403071305 Ffma
    temp_146 = fma(temp_136, fp_c5.data[12].x, fp_c5.data[12].x);
    // 0x000590: 0x59A4020000A72D0A Ffma
    temp_147 = fma(temp_127, temp_78, temp_140);
    temp_148 = clamp(temp_147, 0.0, 1.0);
    // 0x000598: 0x5C68100001171110 Fmul
    temp_149 = temp_132 * temp_132;
    // 0x0005A8: 0x4C69101805C72E07 Fmul
    temp_150 = 0.0 - fp_c6.data[23].x;
    temp_151 = temp_124 * temp_150;
    // 0x0005B0: 0x32A0073F0007280E Ffma
    temp_152 = fma(temp_128, 0.5, 0.5);
    // 0x0005B8: 0x59A4090002B72D27 Ffma
    temp_153 = fma(temp_127, temp_55, temp_141);
    temp_154 = clamp(temp_153, 0.0, 1.0);
    // 0x0005C8: 0x49A0029403470B26 Ffma
    temp_155 = fma(temp_143, fp_c5.data[13].x, temp_146);
    // 0x0005D0: 0x51A0041403171305 Ffma
    temp_156 = fma(temp_136, fp_c5.data[12].y, fp_c5.data[12].y);
    // 0x0005D8: 0x51A00A9403271308 Ffma
    temp_157 = fma(temp_136, fp_c5.data[12].z, fp_c5.data[12].z);
    // 0x0005E8: 0x59A2050001070A04 Ffma
    temp_158 = 0.0 - temp_148;
    temp_159 = fma(temp_148, temp_149, temp_158);
    // 0x0005F0: 0x49A1039805D72907 Ffma
    temp_160 = 0.0 - fp_c6.data[23].y;
    temp_161 = fma(temp_126, temp_160, temp_151);
    // 0x0005F8: 0x5C68120000E70E0E Fmul
    temp_162 = temp_152 * 0.5;
    temp_163 = temp_162 * temp_152;
    // 0x000608: 0x3848000000870F14 Shl
    temp_164 = int(temp_139) << 8;
    // 0x000610: 0x49A0029403570B05 Ffma
    temp_165 = fma(temp_143, fp_c5.data[13].y, temp_156);
    // 0x000618: 0x49A0041403670B08 Ffma
    temp_166 = fma(temp_143, fp_c5.data[13].z, temp_157);
    // 0x000628: 0x51A0020400270A0A Ffma
    temp_167 = fma(temp_148, temp_159, fp_c1.data[0].z);
    // 0x000630: 0x49A5039805E72D04 Ffma
    temp_168 = 0.0 - fp_c6.data[23].z;
    temp_169 = fma(temp_127, temp_168, temp_161);
    temp_170 = clamp(temp_169, 0.0, 1.0);
    // 0x000638: 0x5080000000470A0A Mufu
    temp_171 = 1.0 / temp_167;
    // 0x000648: 0x59A1138002770E07 Ffma
    temp_172 = 0.0 - temp_154;
    temp_173 = fma(temp_163, temp_172, temp_154);
    // 0x000650: 0x49A0131402C72326 Ffma
    temp_174 = fma(temp_145, fp_c5.data[11].x, temp_155);
    // 0x000658: 0x49A0029402D72324 Ffma
    temp_175 = fma(temp_145, fp_c5.data[11].y, temp_165);
    // 0x000668: 0x49A0041402E72323 Ffma
    temp_176 = fma(temp_145, fp_c5.data[11].z, temp_166);
    // 0x000670: 0xEF94008200471408 Ldc
    temp_177 = temp_164 + 0x2004;
    temp_178 = uint(temp_177) >> 2;
    temp_179 = temp_178 >> 2;
    temp_180 = int(temp_178) & 3;
    temp_181 = fp_c8.data[int(temp_179)][temp_180];
    // 0x000678: 0x59A1020000E70409 Ffma
    temp_182 = 0.0 - temp_163;
    temp_183 = fma(temp_170, temp_182, temp_170);
    // 0x000688: 0x5C58100000770E12 Fadd
    temp_184 = temp_163 + temp_173;
    // 0x000690: 0x5080000000270607 Mufu
    temp_185 = exp2(temp_114);
    // 0x000698: 0x4C58301407B72625 Fadd
    temp_186 = 0.0 - fp_c5.data[30].w;
    temp_187 = temp_174 + temp_186;
    // 0x0006A8: 0x5080000000471212 Mufu
    temp_188 = 1.0 / temp_184;
    // 0x0006B0: 0x5C9000800007000B Rro
    // 0x0006B8: 0x4C68101801470400 Fmul
    temp_189 = temp_170 * fp_c6.data[5].x;
    // 0x0006C8: 0x5080000000270B0B Mufu
    temp_190 = exp2(temp_118);
    // 0x0006D0: 0x5C58100000970E13 Fadd
    temp_191 = temp_163 + temp_183;
    // 0x0006D8: 0x5C68100000A71109 Fmul
    temp_192 = temp_132 * temp_171;
    // 0x0006E8: 0x5080000000471313 Mufu
    temp_193 = 1.0 / temp_191;
    // 0x0006F0: 0x51A00B9407B72525 Ffma
    temp_194 = fma(temp_187, fp_c5.data[26].y, fp_c5.data[30].w);
    // 0x0006F8: 0x4C58301407B72422 Fadd
    temp_195 = 0.0 - fp_c5.data[30].w;
    temp_196 = temp_175 + temp_195;
    // 0x000708: 0x4C58301407B72321 Fadd
    temp_197 = 0.0 - fp_c5.data[30].w;
    temp_198 = temp_176 + temp_197;
    // 0x000710: 0x1E23EA2F98370000 Fmul32i
    temp_199 = temp_189 * 0.318309873;
    // 0x000718: 0x59A4018000372416 Ffma
    temp_200 = fma(temp_175, temp_107, temp_107);
    temp_201 = clamp(temp_200, 0.0, 1.0);
    // 0x000728: 0x5C68100000970909 Fmul
    temp_202 = temp_192 * temp_192;
    // 0x000730: 0x3868103F0007120A Fmul
    temp_203 = temp_188 * 0.5;
    // 0x000738: 0x59A1038002570706 Ffma
    temp_204 = 0.0 - temp_194;
    temp_205 = fma(temp_185, temp_204, temp_185);
    // 0x000748: 0x51A00B9407B72222 Ffma
    temp_206 = fma(temp_196, fp_c5.data[26].y, fp_c5.data[30].w);
    // 0x000750: 0x51A00B9407B72121 Ffma
    temp_207 = fma(temp_198, fp_c5.data[26].y, fp_c5.data[30].w);
    // 0x000758: 0x3859103F80072714 Fadd
    temp_208 = 0.0 - temp_154;
    temp_209 = temp_208 + 1.0;
    // 0x000768: 0x5C68100001370A12 Fmul
    temp_210 = temp_203 * temp_193;
    // 0x000770: 0x5C58100000672506 Fadd
    temp_211 = temp_194 + temp_205;
    // 0x000778: 0x59A1038002270705 Ffma
    temp_212 = 0.0 - temp_206;
    temp_213 = fma(temp_185, temp_212, temp_185);
    // 0x000788: 0x59A1038002170707 Ffma
    temp_214 = 0.0 - temp_207;
    temp_215 = fma(temp_185, temp_214, temp_185);
    // 0x000790: 0x5C68100001270909 Fmul
    temp_216 = temp_202 * temp_210;
    // 0x000798: 0x59A1000000070620 Ffma
    temp_217 = 0.0 - temp_199;
    temp_218 = fma(temp_211, temp_217, temp_199);
    // 0x0007A8: 0x4C68101801570400 Fmul
    temp_219 = temp_170 * fp_c6.data[5].y;
    // 0x0007B0: 0x59A1058000B72506 Ffma
    temp_220 = 0.0 - temp_190;
    temp_221 = fma(temp_194, temp_220, temp_190);
    // 0x0007B8: 0x5C58100000572205 Fadd
    temp_222 = temp_206 + temp_213;
    // 0x0007C8: 0x5C58100000772107 Fadd
    temp_223 = temp_207 + temp_215;
    // 0x0007D0: 0x5C68100000970412 Fmul
    temp_224 = temp_170 * temp_216;
    // 0x0007D8: 0x59A1058000B72209 Ffma
    temp_225 = 0.0 - temp_190;
    temp_226 = fma(temp_206, temp_225, temp_190);
    // 0x0007E8: 0x59A1058000B7210B Ffma
    temp_227 = 0.0 - temp_190;
    temp_228 = fma(temp_207, temp_227, temp_190);
    // 0x0007F0: 0x1E23EA2F98370000 Fmul32i
    temp_229 = temp_219 * 0.318309873;
    // 0x0007F8: 0x5C58100000672506 Fadd
    temp_230 = temp_194 + temp_221;
    // 0x000808: 0x4C68101801670404 Fmul
    temp_231 = temp_170 * fp_c6.data[5].z;
    // 0x000810: 0x5C58100000972209 Fadd
    temp_232 = temp_206 + temp_226;
    // 0x000818: 0x5C58100000B7210B Fadd
    temp_233 = temp_207 + temp_228;
    // 0x000828: 0x59A100000007051F Ffma
    temp_234 = 0.0 - temp_229;
    temp_235 = fma(temp_222, temp_234, temp_229);
    // 0x000830: 0x49A200980AC70100 Ffma
    temp_236 = 0.0 - temp_91;
    temp_237 = fma(temp_91, fp_c6.data[43].x, temp_236);
    // 0x000838: 0x4C68101801470613 Fmul
    temp_238 = temp_230 * fp_c6.data[5].x;
    // 0x000848: 0x49A200980AE70101 Ffma
    temp_239 = 0.0 - temp_91;
    temp_240 = fma(temp_91, fp_c6.data[43].z, temp_239);
    // 0x000850: 0x4C68101801570909 Fmul
    temp_241 = temp_232 * fp_c6.data[5].y;
    // 0x000858: 0x5B6603800FF70807 Isetp
    temp_242 = floatBitsToUint(temp_181) <= 0u;
    // 0x000868: 0x4C68101801670B0B Fmul
    temp_243 = temp_233 * fp_c6.data[5].z;
    // 0x000870: 0x1E23EA2F98370404 Fmul32i
    temp_244 = temp_231 * 0.318309873;
    // 0x000878: 0x5C68100001371213 Fmul
    temp_245 = temp_224 * temp_238;
    // 0x000888: 0x3858103F80070000 Fadd
    temp_246 = temp_237 + 1.0;
    // 0x000890: 0x5C68100000971209 Fmul
    temp_247 = temp_224 * temp_241;
    // 0x000898: 0x3858103F80070101 Fadd
    temp_248 = temp_240 + 1.0;
    // 0x0008A8: 0x5C68100000B7120B Fmul
    temp_249 = temp_224 * temp_243;
    // 0x0008B0: 0x59A102000047071E Ffma
    temp_250 = 0.0 - temp_244;
    temp_251 = fma(temp_223, temp_250, temp_244);
    // 0x0008B8: 0x1E23E22F98371313 Fmul32i
    temp_252 = temp_245 * 0.159154937;
    // 0x0008C8: 0x59A4000000072617 Ffma
    temp_253 = fma(temp_174, temp_246, temp_246);
    temp_254 = clamp(temp_253, 0.0, 1.0);
    // 0x0008D0: 0x1E23E22F98370912 Fmul32i
    temp_255 = temp_247 * 0.159154937;
    // 0x0008D8: 0x59A4008000172315 Ffma
    temp_256 = fma(temp_176, temp_248, temp_248);
    temp_257 = clamp(temp_256, 0.0, 1.0);
    // 0x0008E8: 0x1E23E22F98370B0B Fmul32i
    temp_258 = temp_249 * 0.159154937;
    // 0x0008F0: 0xF0F800000000000F Sync
    temp_259 = 0.0;
    temp_260 = 0.0;
    temp_261 = 0.0;
    temp_262 = 0.0;
    temp_263 = 0.0;
    temp_264 = 0.0;
    temp_265 = 0.0;
    temp_266 = 0.0;
    temp_267 = 0.0;
    temp_268 = 0.0;
    temp_269 = 0.0;
    temp_270 = 0.0;
    if (!temp_242)
    {
        // 0x0008F8: 0x5C9807800FF70032 Mov
        // 0x000908: 0xE043FF8D0027FF09 Ipa
        temp_271 = in_attr5.x;
        // 0x000910: 0xE043FF8D4027FF06 Ipa
        temp_272 = in_attr5.y;
        // 0x000918: 0xE043FF8D8027FF07 Ipa
        temp_273 = in_attr5.z;
        temp_274 = 0;
        do
        {
            // 0x000928: 0x5C18020003270F37 Iscadd
            temp_276 = int(temp_139) << 4;
            temp_277 = temp_276 + temp_274;
            // 0x000930: 0xE290000053800000 Ssy
            // 0x000938: 0x1C00000000173232 Iadd32i
            temp_278 = temp_274 + 1;
            // 0x000948: 0x3848000000473737 Shl
            temp_279 = temp_277 << 4;
            // 0x000950: 0x5B6C03800087320F Isetp
            temp_275 = uint(temp_278) >= floatBitsToUint(temp_181);
            // 0x000958: 0xEF94008200073731 Ldc
            temp_280 = temp_279 + 0x2000;
            temp_281 = uint(temp_280) >> 2;
            temp_282 = temp_281 >> 2;
            temp_283 = int(temp_281) & 3;
            temp_284 = fp_c8.data[int(temp_282)][temp_283];
            // 0x000968: 0x3848000000673131 Shl
            temp_285 = floatBitsToInt(temp_284) << 6;
            // 0x000970: 0xEF95008001073100 Ldc
            temp_286 = temp_285 + 16;
            temp_287 = uint(temp_286) >> 2;
            temp_288 = temp_287 >> 2;
            temp_289 = int(temp_287) & 3;
            temp_290 = fp_c8.data[int(temp_288)][temp_289];
            temp_291 = int(temp_287) + 1;
            temp_292 = uint(temp_291) >> 2;
            temp_293 = temp_291 & 3;
            temp_294 = fp_c8.data[int(temp_292)][temp_293];
            // 0x000978: 0xEF95008001873102 Ldc
            temp_295 = temp_285 + 24;
            temp_296 = uint(temp_295) >> 2;
            temp_297 = temp_296 >> 2;
            temp_298 = int(temp_296) & 3;
            temp_299 = fp_c8.data[int(temp_297)][temp_298];
            temp_300 = int(temp_296) + 1;
            temp_301 = uint(temp_300) >> 2;
            temp_302 = temp_300 & 3;
            temp_303 = fp_c8.data[int(temp_301)][temp_302];
            // 0x000988: 0xEF95008002073104 Ldc
            temp_304 = temp_285 + 32;
            temp_305 = uint(temp_304) >> 2;
            temp_306 = temp_305 >> 2;
            temp_307 = int(temp_305) & 3;
            temp_308 = fp_c8.data[int(temp_306)][temp_307];
            temp_309 = int(temp_305) + 1;
            temp_310 = uint(temp_309) >> 2;
            temp_311 = temp_309 & 3;
            temp_312 = fp_c8.data[int(temp_310)][temp_311];
            // 0x000990: 0x5C58300000970033 Fadd
            temp_313 = 0.0 - temp_271;
            temp_314 = temp_290 + temp_313;
            // 0x000998: 0x5C58300000670134 Fadd
            temp_315 = 0.0 - temp_272;
            temp_316 = temp_294 + temp_315;
            // 0x0009A8: 0x5C58300000770202 Fadd
            temp_317 = 0.0 - temp_273;
            temp_318 = temp_299 + temp_317;
            // 0x0009B0: 0x5C68100003373335 Fmul
            temp_319 = temp_314 * temp_314;
            // 0x0009B8: 0x59A1010000270303 Ffma
            temp_320 = 0.0 - temp_318;
            temp_321 = fma(temp_303, temp_320, temp_318);
            // 0x0009C8: 0x59A01A8003473435 Ffma
            temp_322 = fma(temp_316, temp_316, temp_319);
            // 0x0009D0: 0x59A01A8000370336 Ffma
            temp_323 = fma(temp_321, temp_321, temp_322);
            // 0x0009D8: 0x5080000000573601 Mufu
            temp_324 = inversesqrt(temp_323);
            // 0x0009E8: 0x5080000000873636 Mufu
            temp_325 = sqrt(temp_323);
            // 0x0009F0: 0x5C68100000173300 Fmul
            temp_326 = temp_314 * temp_324;
            // 0x0009F8: 0x5C68100000170303 Fmul
            temp_327 = temp_321 * temp_324;
            // 0x000A08: 0x5C69100000470004 Fmul
            temp_328 = 0.0 - temp_308;
            temp_329 = temp_326 * temp_328;
            // 0x000A10: 0x5C68100000173400 Fmul
            temp_330 = temp_316 * temp_324;
            // 0x000A18: 0x59A1020000570005 Ffma
            temp_331 = 0.0 - temp_312;
            temp_332 = fma(temp_330, temp_331, temp_329);
            // 0x000A28: 0xEF94008002873100 Ldc
            temp_333 = temp_285 + 40;
            temp_334 = uint(temp_333) >> 2;
            temp_335 = temp_334 >> 2;
            temp_336 = int(temp_334) & 3;
            temp_337 = fp_c8.data[int(temp_335)][temp_336];
            // 0x000A30: 0x59A1028000070303 Ffma
            temp_338 = 0.0 - temp_337;
            temp_339 = fma(temp_327, temp_338, temp_332);
            // 0x000A38: 0xEF95008003873100 Ldc
            temp_340 = temp_285 + 56;
            temp_341 = uint(temp_340) >> 2;
            temp_342 = temp_341 >> 2;
            temp_343 = int(temp_341) & 3;
            temp_344 = fp_c8.data[int(temp_342)][temp_343];
            temp_345 = int(temp_341) + 1;
            temp_346 = uint(temp_345) >> 2;
            temp_347 = temp_345 & 3;
            temp_348 = fp_c8.data[int(temp_346)][temp_347];
            // 0x000A48: 0x59A4008000070300 Ffma
            temp_349 = fma(temp_339, temp_344, temp_348);
            temp_350 = clamp(temp_349, 0.0, 1.0);
            // 0x000A50: 0x010404000007F003 Mov32i
            // 0x000A58: 0x5C68100000070004 Fmul
            temp_351 = temp_350 * temp_350;
            // 0x000A68: 0x33A001C000070001 Ffma
            temp_352 = fma(temp_350, -2.0, 3.0);
            // 0x000A70: 0x5C68100000170404 Fmul
            temp_353 = temp_351 * temp_352;
            // 0x000A78: 0xEF95008003073100 Ldc
            temp_354 = temp_285 + 48;
            temp_355 = uint(temp_354) >> 2;
            temp_356 = temp_355 >> 2;
            temp_357 = int(temp_355) & 3;
            temp_358 = fp_c8.data[int(temp_356)][temp_357];
            temp_359 = int(temp_355) + 1;
            temp_360 = uint(temp_359) >> 2;
            temp_361 = temp_359 & 3;
            temp_362 = fp_c8.data[int(temp_360)][temp_361];
            // 0x000A88: 0x59A4008003670005 Ffma
            temp_363 = fma(temp_358, temp_325, temp_362);
            temp_364 = clamp(temp_363, 0.0, 1.0);
            // 0x000A90: 0x33A001C000070503 Ffma
            temp_365 = fma(temp_364, -2.0, 3.0);
            // 0x000A98: 0x5C68100000570505 Fmul
            temp_366 = temp_364 * temp_364;
            // 0x000AA8: 0x5C68100000370503 Fmul
            temp_367 = temp_366 * temp_365;
            // 0x000AB0: 0x5C68100000370404 Fmul
            temp_368 = temp_353 * temp_367;
            // 0x000AB8: 0x39585042F0070203 Fadd
            temp_369 = abs(temp_318);
            temp_370 = temp_369 + -120.0;
            // 0x000AC8: 0x1EABD4CCCCD70303 Fmul32i
            temp_371 = temp_370 * -0.0500000007;
            temp_372 = clamp(temp_371, 0.0, 1.0);
            // 0x000AD0: 0x5C68100000470303 Fmul
            temp_373 = temp_372 * temp_368;
            // 0x000AD8: 0x36247F9000170404 Xmad
            temp_374 = floatBitsToUint(temp_368) >> 16;
            temp_375 = int(temp_374) << 16;
            // 0x000AE8: 0x5BB383800FF70307 Fsetp
            temp_376 = temp_373 <= 0.0;
            // 0x000AF0: 0x7A05083C0F00FF04 Hadd2
            temp_274 = temp_278;
            temp_377 = uint(temp_375);
            temp_378 = temp_259;
            temp_379 = temp_260;
            temp_380 = temp_261;
            temp_381 = temp_262;
            temp_382 = temp_263;
            temp_383 = temp_264;
            if (temp_376)
            {
                temp_384 = unpackHalf2x16(uint(temp_375)).y;
                temp_385 = packHalf2x16(vec2(1.0, temp_384));
                temp_377 = temp_385;
            }
            // 0x000AF8: 0x5D2103902FF70407 Hsetp2
            temp_386 = unpackHalf2x16(temp_377).x;
            temp_387 = temp_386 == 0.0;
            // 0x000B08: 0xF0F800000008000F Sync
            if (temp_387)
            {
                // 0x000B10: 0x5080000000470000 Mufu
                temp_388 = 1.0 / temp_358;
                // 0x000B18: 0x5C69100000070101 Fmul
                temp_389 = 0.0 - temp_388;
                temp_390 = temp_362 * temp_389;
                // 0x000B28: 0x5C60138000170202 Fmnmx
                temp_391 = min(temp_318, temp_390);
                // 0x000B30: 0x5C61178000270104 Fmnmx
                temp_392 = 0.0 - temp_390;
                temp_393 = max(temp_392, temp_391);
                // 0x000B38: 0x59A01A8000470435 Ffma
                temp_394 = fma(temp_393, temp_393, temp_322);
                // 0x000B48: 0x5080000000573505 Mufu
                temp_395 = inversesqrt(temp_394);
                // 0x000B50: 0x5080000000873535 Mufu
                temp_396 = sqrt(temp_394);
                // 0x000B58: 0x5C68100000573301 Fmul
                temp_397 = temp_314 * temp_395;
                // 0x000B68: 0x5C68100000573402 Fmul
                temp_398 = temp_316 * temp_395;
                // 0x000B70: 0x5C68100000570404 Fmul
                temp_399 = temp_393 * temp_395;
                // 0x000B78: 0x5C58100000172F34 Fadd
                temp_400 = temp_51 + temp_397;
                // 0x000B88: 0x5C58100000272C05 Fadd
                temp_401 = temp_53 + temp_398;
                // 0x000B90: 0x5C58100000472B33 Fadd
                temp_402 = temp_55 + temp_399;
                // 0x000B98: 0x5C68100000172E37 Fmul
                temp_403 = temp_124 * temp_397;
                // 0x000BA8: 0x5C68100003473400 Fmul
                temp_404 = temp_400 * temp_400;
                // 0x000BB0: 0x59A0000000570500 Ffma
                temp_405 = fma(temp_401, temp_401, temp_404);
                // 0x000BB8: 0x59A0000003373336 Ffma
                temp_406 = fma(temp_402, temp_402, temp_405);
                // 0x000BC8: 0x5080000000573636 Mufu
                temp_407 = inversesqrt(temp_406);
                // 0x000BD0: 0x5C68100003673434 Fmul
                temp_408 = temp_400 * temp_407;
                // 0x000BD8: 0x5C68100003670500 Fmul
                temp_409 = temp_401 * temp_407;
                // 0x000BE8: 0x5C68100003673333 Fmul
                temp_410 = temp_402 * temp_407;
                // 0x000BF0: 0xEF94008000873136 Ldc
                temp_411 = temp_285 + 8;
                temp_412 = uint(temp_411) >> 2;
                temp_413 = temp_412 >> 2;
                temp_414 = int(temp_412) & 3;
                temp_415 = fp_c8.data[int(temp_413)][temp_414];
                // 0x000BF8: 0x5C68100003470105 Fmul
                temp_416 = temp_397 * temp_408;
                // 0x000C08: 0x59A0028000070201 Ffma
                temp_417 = fma(temp_398, temp_409, temp_416);
                // 0x000C10: 0x59A01B8000272902 Ffma
                temp_418 = fma(temp_126, temp_398, temp_403);
                // 0x000C18: 0x5C68100003472E37 Fmul
                temp_419 = temp_124 * temp_408;
                // 0x000C28: 0xEF94008002C73134 Ldc
                temp_420 = temp_285 + 44;
                temp_421 = uint(temp_420) >> 2;
                temp_422 = temp_421 >> 2;
                temp_423 = int(temp_421) & 3;
                temp_424 = fp_c8.data[int(temp_422)][temp_423];
                // 0x000C30: 0x59A0010000472D02 Ffma
                temp_425 = fma(temp_127, temp_399, temp_418);
                // 0x000C38: 0x59A01B8000072900 Ffma
                temp_426 = fma(temp_126, temp_409, temp_419);
                // 0x000C48: 0x59A4008003370404 Ffma
                temp_427 = fma(temp_399, temp_410, temp_417);
                temp_428 = clamp(temp_427, 0.0, 1.0);
                // 0x000C50: 0x59A4000003372D05 Ffma
                temp_429 = fma(temp_127, temp_410, temp_426);
                temp_430 = clamp(temp_429, 0.0, 1.0);
                // 0x000C58: 0xEF95008000073100 Ldc
                temp_431 = uint(temp_285) >> 2;
                temp_432 = temp_431 >> 2;
                temp_433 = int(temp_431) & 3;
                temp_434 = fp_c8.data[int(temp_432)][temp_433];
                temp_435 = int(temp_431) + 1;
                temp_436 = uint(temp_435) >> 2;
                temp_437 = temp_435 & 3;
                temp_438 = fp_c8.data[int(temp_436)][temp_437];
                // 0x000C68: 0x5C68100003670336 Fmul
                temp_439 = temp_373 * temp_415;
                // 0x000C70: 0x5080000000473434 Mufu
                temp_440 = 1.0 / temp_424;
                // 0x000C78: 0x5C68100000070300 Fmul
                temp_441 = temp_373 * temp_434;
                // 0x000C88: 0x51A01A8400373437 Ffma
                temp_442 = fma(temp_440, temp_396, fp_c1.data[0].w);
                // 0x000C90: 0x5C68100000170301 Fmul
                temp_443 = temp_373 * temp_438;
                // 0x000C98: 0x5080000000473733 Mufu
                temp_444 = 1.0 / temp_442;
                // 0x000CA8: 0x01040DF760C7F034 Mov32i
                // 0x000CB0: 0x1E23FB3333373333 Fmul32i
                temp_445 = temp_444 * 1.39999998;
                // 0x000CB8: 0x5C68100003373333 Fmul
                temp_446 = temp_445 * temp_445;
                // 0x000CC8: 0x59A1198003370233 Ffma
                temp_447 = 0.0 - temp_446;
                temp_448 = fma(temp_425, temp_447, temp_446);
                // 0x000CD0: 0x5C5C100003370203 Fadd
                temp_449 = temp_425 + temp_448;
                temp_450 = clamp(temp_449, 0.0, 1.0);
                // 0x000CD8: 0x5C5C30000FF70233 Fadd
                temp_451 = temp_425 + -0.0;
                temp_452 = clamp(temp_451, 0.0, 1.0);
                // 0x000CE8: 0x59A2028000571002 Ffma
                temp_453 = 0.0 - temp_430;
                temp_454 = fma(temp_149, temp_430, temp_453);
                // 0x000CF0: 0x51A0010400270535 Ffma
                temp_455 = fma(temp_430, temp_454, fp_c1.data[0].z);
                // 0x000CF8: 0x49A21A0400170405 Ffma
                temp_456 = fma(temp_428, fp_c1.data[0].y, -6.98316002);
                // 0x000D08: 0x5080000000473502 Mufu
                temp_457 = 1.0 / temp_455;
                // 0x000D10: 0x59A1198003370E34 Ffma
                temp_458 = 0.0 - temp_452;
                temp_459 = fma(temp_163, temp_458, temp_452);
                // 0x000D18: 0x5C68100000570405 Fmul
                temp_460 = temp_428 * temp_456;
                // 0x000D28: 0x5C58100003470E37 Fadd
                temp_461 = temp_163 + temp_459;
                // 0x000D30: 0x5080000000473737 Mufu
                temp_462 = 1.0 / temp_461;
                // 0x000D38: 0x5C90008000570004 Rro
                // 0x000D48: 0x5C68100000271102 Fmul
                temp_463 = temp_132 * temp_457;
                // 0x000D50: 0x5080000000270404 Mufu
                temp_464 = exp2(temp_460);
                // 0x000D58: 0x5C68100000270202 Fmul
                temp_465 = temp_463 * temp_463;
                // 0x000D68: 0x5C68100003770A05 Fmul
                temp_466 = temp_203 * temp_462;
                // 0x000D70: 0x59A1020000472534 Ffma
                temp_467 = 0.0 - temp_464;
                temp_468 = fma(temp_194, temp_467, temp_464);
                // 0x000D78: 0x5C68100000570202 Fmul
                temp_469 = temp_465 * temp_466;
                // 0x000D88: 0x59A1020000472205 Ffma
                temp_470 = 0.0 - temp_464;
                temp_471 = fma(temp_206, temp_470, temp_464);
                // 0x000D90: 0x59A1020000472104 Ffma
                temp_472 = 0.0 - temp_464;
                temp_473 = fma(temp_207, temp_472, temp_464);
                // 0x000D98: 0x5C58100003472531 Fadd
                temp_474 = temp_194 + temp_468;
                // 0x000DA8: 0x5C68100000273302 Fmul
                temp_475 = temp_452 * temp_469;
                // 0x000DB0: 0x5C58100000572234 Fadd
                temp_476 = temp_206 + temp_471;
                // 0x000DB8: 0x5C58100000472105 Fadd
                temp_477 = temp_207 + temp_473;
                // 0x000DC8: 0x5C68100003170031 Fmul
                temp_478 = temp_441 * temp_474;
                // 0x000DD0: 0x5C68100000370000 Fmul
                temp_479 = temp_441 * temp_450;
                // 0x000DD8: 0x5C68100003470104 Fmul
                temp_480 = temp_443 * temp_476;
                // 0x000DE8: 0x5C68100000573605 Fmul
                temp_481 = temp_439 * temp_477;
                // 0x000DF0: 0x5C68100000370101 Fmul
                temp_482 = temp_443 * temp_450;
                // 0x000DF8: 0x5C68100000373636 Fmul
                temp_483 = temp_439 * temp_450;
                // 0x000E08: 0x5C68100000273131 Fmul
                temp_484 = temp_478 * temp_475;
                // 0x000E10: 0x49A00E840057001D Ffma
                temp_485 = fma(temp_479, fp_c1.data[1].y, temp_259);
                // 0x000E18: 0x5C68100000270404 Fmul
                temp_486 = temp_480 * temp_475;
                // 0x000E28: 0x5C68100000270505 Fmul
                temp_487 = temp_481 * temp_475;
                // 0x000E30: 0x49A00E040057011C Ffma
                temp_488 = fma(temp_482, fp_c1.data[1].y, temp_260);
                // 0x000E38: 0x49A00D840057361B Ffma
                temp_489 = fma(temp_483, fp_c1.data[1].y, temp_261);
                // 0x000E48: 0x49A00D040047311A Ffma
                temp_490 = fma(temp_484, fp_c1.data[1].x, temp_262);
                // 0x000E50: 0x49A00C8400470419 Ffma
                temp_491 = fma(temp_486, fp_c1.data[1].x, temp_263);
                // 0x000E58: 0x49A00C0400470518 Ffma
                temp_492 = fma(temp_487, fp_c1.data[1].x, temp_264);
                // 0x000E68: 0xF0F800000007000F Sync
                temp_378 = temp_485;
                temp_379 = temp_488;
                temp_380 = temp_489;
                temp_381 = temp_490;
                temp_382 = temp_491;
                temp_383 = temp_492;
            }
            // 0x000E70: 0xE2400FFFAA89000F Bra
            temp_259 = temp_378;
            temp_260 = temp_379;
            temp_261 = temp_380;
            temp_262 = temp_381;
            temp_263 = temp_382;
            temp_264 = temp_383;
            temp_265 = temp_383;
            temp_266 = temp_382;
            temp_267 = temp_381;
            temp_268 = temp_380;
            temp_269 = temp_378;
            temp_270 = temp_379;
        }
        while (!temp_275);
        // 0x000E78: 0xF0F800000007000F Sync
    }
    // 0x000E88: 0x5C68100003073001 Fmul
    temp_493 = temp_22 * temp_22;
    // 0x000E90: 0xE003FF87CFF7FF03 Ipa
    // 0x000E98: 0x5C68100002772E05 Fmul
    temp_494 = temp_124 * temp_154;
    // 0x000EA8: 0x5C68100002772906 Fmul
    temp_495 = temp_126 * temp_154;
    // 0x000EB0: 0x3868104080072811 Fmul
    temp_496 = temp_128 * 4.0;
    // 0x000EB8: 0x38681040E007282B Fmul
    temp_497 = temp_128 * 7.0;
    // 0x000EC8: 0x4C98079C0207002F Mov
    // 0x000ED0: 0x5080000000470303 Mufu
    // 0x000ED8: 0xE043FF8B4037FF00 Ipa
    temp_498 = in_attr3.y;
    // 0x000EE8: 0xE043FF8B8037FF02 Ipa
    temp_499 = in_attr3.z;
    // 0x000EF0: 0xE043FF8B0037FF04 Ipa
    temp_500 = in_attr3.x;
    // 0x000EF8: 0x59A0008000070001 Ffma
    temp_501 = fma(temp_498, temp_498, temp_493);
    // 0x000F08: 0x59A0008000270201 Ffma
    temp_502 = fma(temp_499, temp_499, temp_501);
    // 0x000F10: 0x5080000000570101 Mufu
    temp_503 = inversesqrt(temp_502);
    // 0x000F18: 0x5C69100000170404 Fmul
    temp_504 = 0.0 - temp_503;
    temp_505 = temp_500 * temp_504;
    // 0x000F28: 0x5C69100000170000 Fmul
    temp_506 = 0.0 - temp_503;
    temp_507 = temp_498 * temp_506;
    // 0x000F30: 0x5C69100000170207 Fmul
    temp_508 = 0.0 - temp_503;
    temp_509 = temp_499 * temp_508;
    // 0x000F38: 0xE043FF914037FF01 Ipa
    temp_510 = in_attr9.y;
    // 0x000F48: 0x5C68100002772D02 Fmul
    temp_511 = temp_127 * temp_154;
    // 0x000F50: 0x32A2024000070505 Ffma
    temp_512 = 0.0 - temp_505;
    temp_513 = fma(temp_494, 2.0, temp_512);
    // 0x000F58: 0x32A2004000070606 Ffma
    temp_514 = 0.0 - temp_507;
    temp_515 = fma(temp_495, 2.0, temp_514);
    // 0x000F68: 0x010000000017F004 Mov32i
    // 0x000F70: 0x32A203C000070207 Ffma
    temp_516 = 0.0 - temp_509;
    temp_517 = fma(temp_511, 2.0, temp_516);
    // 0x000F78: 0x5C62578002972E02 Fmnmx
    temp_518 = abs(temp_124);
    temp_519 = abs(temp_126);
    temp_520 = max(temp_518, temp_519);
    // 0x000F88: 0x5C62578000670500 Fmnmx
    temp_521 = abs(temp_513);
    temp_522 = abs(temp_515);
    temp_523 = max(temp_521, temp_522);
    // 0x000F90: 0x5C60578000272D02 Fmnmx
    temp_524 = abs(temp_127);
    temp_525 = max(temp_524, temp_520);
    // 0x000F98: 0x508000000047020F Mufu
    temp_526 = 1.0 / temp_525;
    // 0x000FA8: 0x5C60578000070700 Fmnmx
    temp_527 = abs(temp_517);
    temp_528 = max(temp_527, temp_523);
    // 0x000FB0: 0xE043FF918037FF02 Ipa
    temp_529 = in_attr9.z;
    // 0x000FB8: 0x5C68100000F72E0E Fmul
    temp_530 = temp_124 * temp_526;
    // 0x000FC8: 0x5080000000470000 Mufu
    temp_531 = 1.0 / temp_528;
    // 0x000FD0: 0x5C69100000F72D10 Fmul
    temp_532 = 0.0 - temp_526;
    temp_533 = temp_127 * temp_532;
    // 0x000FD8: 0x5C68100000F7290F Fmul
    temp_534 = temp_126 * temp_526;
    // 0x000FE8: 0x5C98078000E70008 Mov
    // 0x000FF0: 0x5C9807800107000A Mov
    // 0x000FF8: 0x5C98078000F70009 Mov
    // 0x001008: 0x5C68100000070505 Fmul
    temp_535 = temp_513 * temp_531;
    // 0x001010: 0xC0BA0163EFF70808 Tex
    temp_536 = textureLod(fp_t_tcb_16, vec3(temp_530, temp_534, temp_533), 0.0).xyz;
    temp_537 = temp_536.x;
    temp_538 = temp_536.y;
    temp_539 = temp_536.z;
    // 0x001018: 0xD9A2018111070E0E Texs
    temp_540 = textureLod(fp_t_tcb_18, vec3(temp_530, temp_534, temp_533), temp_496).xyz;
    temp_541 = temp_540.x;
    temp_542 = temp_540.y;
    temp_543 = temp_540.z;
    // 0x001028: 0x5C68100000070606 Fmul
    temp_544 = temp_515 * temp_531;
    // 0x001030: 0x5C69100000070707 Fmul
    temp_545 = 0.0 - temp_531;
    temp_546 = temp_517 * temp_545;
    // 0x001038: 0xE043FF910037FF00 Ipa
    temp_547 = in_attr9.x;
    // 0x001048: 0xC1BA0143F2B70404 Tex
    temp_548 = textureLod(fp_t_tcb_14, vec4(temp_535, temp_544, temp_546, float(1)), temp_497).xyz;
    temp_549 = temp_548.x;
    temp_550 = temp_548.y;
    temp_551 = temp_548.z;
    // 0x001050: 0xDEBA0000C2F70000 TexB
    temp_552 = texture(fp_t_cb7_20, vec3(temp_547, temp_510, temp_529)).x;
    // 0x001058: 0x3859103F80072828 Fadd
    temp_553 = 0.0 - temp_128;
    temp_554 = temp_553 + 1.0;
    // 0x001068: 0x4C68101809071414 Fmul
    temp_555 = temp_209 * fp_c6.data[36].x;
    // 0x001070: 0x49A005980A17180B Ffma
    temp_556 = fma(temp_265, fp_c6.data[40].y, temp_258);
    // 0x001078: 0x5080400000371418 Mufu
    temp_557 = abs(temp_555);
    temp_558 = log2(temp_557);
    // 0x001088: 0x49A009180A171912 Ffma
    temp_559 = fma(temp_266, fp_c6.data[40].y, temp_255);
    // 0x001090: 0x010410676C97F019 Mov32i
    // 0x001098: 0x5C68100002872828 Fmul
    temp_560 = temp_554 * temp_554;
    // 0x0010A8: 0x49A009980A171A13 Ffma
    temp_561 = fma(temp_267, fp_c6.data[40].y, temp_252);
    // 0x0010B0: 0x1E23E468DB972707 Fmul32i
    temp_562 = temp_154 * 0.193900004;
    // 0x0010B8: 0x0103E2CD9E87F01A Mov32i
    // 0x0010C8: 0x49A00F180A171B1E Ffma
    temp_563 = fma(temp_268, fp_c6.data[40].y, temp_251);
    // 0x0010D0: 0x49A00C8400972710 Ffma
    temp_564 = fma(temp_154, fp_c1.data[2].y, 8.40400028);
    // 0x0010D8: 0x4C9807980B47001B Mov
    // 0x0010E8: 0x49A010180A171D20 Ffma
    temp_565 = fma(temp_269, fp_c6.data[40].y, temp_218);
    // 0x0010F0: 0x4C9807980097001D Mov
    // 0x0010F8: 0x49A00F980A171C1F Ffma
    temp_566 = fma(temp_270, fp_c6.data[40].y, temp_235);
    // 0x001108: 0x0103F0000007F002 Mov32i
    // 0x001110: 0x5C68100002872801 Fmul
    temp_567 = temp_560 * temp_560;
    // 0x001118: 0x4C68101809171819 Fmul
    temp_568 = temp_558 * fp_c6.data[36].y;
    // 0x001128: 0x51A0080400A72714 Ffma
    temp_569 = fma(temp_154, temp_564, fp_c1.data[2].z);
    // 0x001130: 0xF0F0000034370000 Depbar
    // 0x001138: 0x51A20D980B470D0D Ffma
    temp_570 = 0.0 - fp_c6.data[45].x;
    temp_571 = fma(temp_20, fp_c6.data[45].x, temp_570);
    // 0x001148: 0x51A20D980B472A2A Ffma
    temp_572 = 0.0 - fp_c6.data[45].x;
    temp_573 = fma(temp_21, fp_c6.data[45].x, temp_572);
    // 0x001150: 0x32A0013F00072929 Ffma
    temp_574 = fma(temp_126, 0.5, 0.5);
    // 0x001158: 0xE04BFF904037FF02 Ipa
    temp_575 = in_attr8.y;
    temp_576 = clamp(temp_575, 0.0, 1.0);
    // 0x001168: 0x49A0038400670107 Ffma
    temp_577 = fma(temp_567, fp_c1.data[1].z, temp_562);
    // 0x001170: 0x49A20D0400B70118 Ffma
    temp_578 = fma(temp_567, fp_c1.data[2].w, -0.168799996);
    // 0x001178: 0x5C90008001970019 Rro
    // 0x001188: 0x51A20D980B470C0C Ffma
    temp_579 = 0.0 - fp_c6.data[45].x;
    temp_580 = fma(temp_19, fp_c6.data[45].x, temp_579);
    // 0x001190: 0x5084000000271919 Mufu
    temp_581 = exp2(temp_568);
    temp_582 = clamp(temp_581, 0.0, 1.0);
    // 0x001198: 0x0104066978D7F01A Mov32i
    // 0x0011A8: 0x088BF05D63970710 Fadd32i
    temp_583 = temp_577 + -0.522800028;
    // 0x0011B0: 0x51A00A0400C72707 Ffma
    temp_584 = fma(temp_154, temp_569, fp_c1.data[3].x);
    // 0x0011B8: 0x5C68100001870118 Fmul
    temp_585 = temp_567 * temp_578;
    // 0x0011C8: 0x4C9807980977001B Mov
    // 0x0011D0: 0x4C9807980087001C Mov
    // 0x0011D8: 0x4C98079800A70028 Mov
    // 0x0011E8: 0x5C68100001072714 Fmul
    temp_586 = temp_154 * temp_583;
    // 0x0011F0: 0x5C60138000771827 Fmnmx
    temp_587 = min(temp_585, temp_584);
    // 0x0011F8: 0x49A20D0400770107 Ffma
    temp_588 = fma(temp_567, fp_c1.data[1].w, -3.60299993);
    // 0x001208: 0x4C58101408171B10 Fadd
    temp_589 = fp_c6.data[37].w + fp_c5.data[32].y;
    // 0x001210: 0x4C59101800571D1B Fadd
    temp_590 = 0.0 - fp_c6.data[2].y;
    temp_591 = temp_590 + fp_c6.data[1].y;
    // 0x001218: 0x010404000007F01D Mov32i
    // 0x001228: 0x4C59101800471C1A Fadd
    temp_592 = 0.0 - fp_c6.data[2].x;
    temp_593 = temp_592 + fp_c6.data[1].x;
    // 0x001230: 0x4C5910180067281C Fadd
    temp_594 = 0.0 - fp_c6.data[2].z;
    temp_595 = temp_594 + fp_c6.data[1].z;
    // 0x001238: 0x51A0038400870107 Ffma
    temp_596 = fma(temp_567, temp_588, fp_c1.data[2].x);
    // 0x001248: 0x5C68100001971018 Fmul
    temp_597 = temp_589 * temp_582;
    // 0x001250: 0x51A0149800971B10 Ffma
    temp_598 = fma(temp_591, temp_574, fp_c6.data[2].y);
    // 0x001258: 0x51A0149800871A19 Ffma
    temp_599 = fma(temp_593, temp_574, fp_c6.data[2].x);
    // 0x001268: 0x51A0149800A71C29 Ffma
    temp_600 = fma(temp_595, temp_574, fp_c6.data[2].z);
    // 0x001270: 0x59A00A0000770114 Ffma
    temp_601 = fma(temp_567, temp_596, temp_586);
    // 0x001278: 0x5C5C30000FF72701 Fadd
    temp_602 = temp_587 + -0.0;
    temp_603 = clamp(temp_602, 0.0, 1.0);
    // 0x001288: 0x33A00EC00007021B Ffma
    temp_604 = fma(temp_576, -2.0, 3.0);
    // 0x001290: 0x5C6810000027021D Fmul
    temp_605 = temp_576 * temp_576;
    // 0x001298: 0x386C104248072202 Fmul
    temp_606 = temp_206 * 50.0;
    temp_607 = clamp(temp_606, 0.0, 1.0);
    // 0x0012A8: 0x4C68101808C7181A Fmul
    temp_608 = temp_597 * fp_c6.data[35].x;
    // 0x0012B0: 0x4C68101808D7181C Fmul
    temp_609 = temp_597 * fp_c6.data[35].y;
    // 0x0012B8: 0x5C68100001D71B07 Fmul
    temp_610 = temp_604 * temp_605;
    // 0x0012C8: 0x4C68101808E7181D Fmul
    temp_611 = temp_597 * fp_c6.data[35].z;
    // 0x0012D0: 0x4C5C100400D71418 Fadd
    temp_612 = temp_601 + fp_c1.data[3].y;
    temp_613 = clamp(temp_612, 0.0, 1.0);
    // 0x0012D8: 0x5C68100000270114 Fmul
    temp_614 = temp_603 * temp_607;
    // 0x0012E8: 0x49A0099408271A13 Ffma
    temp_615 = fma(temp_608, fp_c5.data[32].z, temp_561);
    // 0x0012F0: 0x49A10D1408271A1A Ffma
    temp_616 = 0.0 - fp_c5.data[32].z;
    temp_617 = fma(temp_608, temp_616, temp_608);
    // 0x0012F8: 0x49A10E1408271C02 Ffma
    temp_618 = 0.0 - fp_c5.data[32].z;
    temp_619 = fma(temp_609, temp_618, temp_609);
    // 0x001308: 0x49A10E9408271D27 Ffma
    temp_620 = 0.0 - fp_c5.data[32].z;
    temp_621 = fma(temp_611, temp_620, temp_611);
    // 0x001310: 0x5C5910000187011B Fadd
    temp_622 = 0.0 - temp_603;
    temp_623 = temp_622 + temp_613;
    // 0x001318: 0xE043FF900037FF01 Ipa
    temp_624 = in_attr8.x;
    // 0x001328: 0x49A0091408271C12 Ffma
    temp_625 = fma(temp_609, fp_c5.data[32].z, temp_559);
    // 0x001330: 0x49A0059408271D0B Ffma
    temp_626 = fma(temp_611, fp_c5.data[32].z, temp_556);
    // 0x001338: 0x5C58100002071A1A Fadd
    temp_627 = temp_617 + temp_565;
    // 0x001348: 0x5C58100001F70202 Fadd
    temp_628 = temp_619 + temp_566;
    // 0x001350: 0x5C58100001E72727 Fadd
    temp_629 = temp_621 + temp_563;
    // 0x001358: 0x59A00A0001B72218 Ffma
    temp_630 = fma(temp_206, temp_623, temp_614);
    // 0x001368: 0x59A00A0001B72525 Ffma
    temp_631 = fma(temp_194, temp_623, temp_614);
    // 0x001370: 0x59A00A0001B72114 Ffma
    temp_632 = fma(temp_207, temp_623, temp_614);
    // 0x001378: 0x4C68101803770707 Fmul
    temp_633 = temp_610 * fp_c6.data[13].w;
    // 0x001388: 0xF0F0000034170000 Depbar
    // 0x001390: 0x49A0040400571908 Ffma
    temp_634 = fma(temp_599, fp_c1.data[1].y, temp_537);
    // 0x001398: 0x49A0048400571009 Ffma
    temp_635 = fma(temp_598, fp_c1.data[1].y, temp_538);
    // 0x0013A8: 0x49A005040057290A Ffma
    temp_636 = fma(temp_600, fp_c1.data[1].y, temp_539);
    // 0x0013B0: 0x49A0079808570505 Ffma
    temp_637 = fma(temp_550, fp_c6.data[33].y, temp_542);
    // 0x0013B8: 0x49A0071808570404 Ffma
    temp_638 = fma(temp_549, fp_c6.data[33].y, temp_541);
    // 0x0013C8: 0x5C58100001A70808 Fadd
    temp_639 = temp_634 + temp_627;
    // 0x0013D0: 0x5C58100000270902 Fadd
    temp_640 = temp_635 + temp_628;
    // 0x0013D8: 0x49A0089808570606 Ffma
    temp_641 = fma(temp_551, fp_c6.data[33].y, temp_543);
    // 0x0013E8: 0x5C58100002770A0A Fadd
    temp_642 = temp_636 + temp_629;
    // 0x0013F0: 0x59A0090000571812 Ffma
    temp_643 = fma(temp_630, temp_637, temp_625);
    // 0x0013F8: 0x59A0098000472513 Ffma
    temp_644 = fma(temp_631, temp_638, temp_615);
    // 0x001408: 0x49A1041406970808 Ffma
    temp_645 = 0.0 - fp_c5.data[26].y;
    temp_646 = fma(temp_639, temp_645, temp_639);
    // 0x001410: 0x49A1011406970205 Ffma
    temp_647 = 0.0 - fp_c5.data[26].y;
    temp_648 = fma(temp_640, temp_647, temp_640);
    // 0x001418: 0x4C98079802870002 Mov
    // 0x001428: 0x59A0058000671414 Ffma
    temp_649 = fma(temp_632, temp_641, temp_626);
    // 0x001430: 0x49A1051406970A0A Ffma
    temp_650 = 0.0 - fp_c5.data[26].y;
    temp_651 = fma(temp_642, temp_650, temp_642);
    // 0x001438: 0x4C98079802970004 Mov
    // 0x001448: 0x59A0098000872608 Ffma
    temp_652 = fma(temp_174, temp_646, temp_644);
    // 0x001450: 0x59A0090000572424 Ffma
    temp_653 = fma(temp_175, temp_648, temp_643);
    // 0x001458: 0x51A0011802870C05 Ffma
    temp_654 = fma(temp_580, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001468: 0x4C98079406C70009 Mov
    // 0x001470: 0x59A00A0000A72302 Ffma
    temp_655 = fma(temp_176, temp_651, temp_649);
    // 0x001478: 0x51A0021802970D04 Ffma
    temp_656 = fma(temp_571, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001488: 0xE043FF8C8037FF0D Ipa
    temp_657 = in_attr4.z;
    // 0x001490: 0x5C68100000871717 Fmul
    temp_658 = temp_254 * temp_652;
    // 0x001498: 0x5C68100002471616 Fmul
    temp_659 = temp_201 * temp_653;
    // 0x0014A8: 0x4C98079802A70008 Mov
    // 0x0014B0: 0x5C68100000271502 Fmul
    temp_660 = temp_257 * temp_655;
    // 0x0014B8: 0x49A500980BC7000B Ffma
    temp_661 = 0.0 - fp_c6.data[47].x;
    temp_662 = fma(temp_552, temp_661, temp_624);
    temp_663 = clamp(temp_662, 0.0, 1.0);
    // 0x0014C8: 0x49A00B9403870900 Ffma
    temp_664 = fma(fp_c5.data[27].x, fp_c5.data[14].x, temp_658);
    // 0x0014D0: 0x5080000000370B0B Mufu
    temp_665 = log2(temp_663);
    // 0x0014D8: 0x49A00B1403970901 Ffma
    temp_666 = fma(fp_c5.data[27].x, fp_c5.data[14].y, temp_659);
    // 0x0014E8: 0x49A0011403A70902 Ffma
    temp_667 = fma(fp_c5.data[27].x, fp_c5.data[14].z, temp_660);
    // 0x0014F0: 0x51A0041802A72A08 Ffma
    temp_668 = fma(temp_573, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0014F8: 0x5C58300000570006 Fadd
    temp_669 = 0.0 - temp_654;
    temp_670 = temp_664 + temp_669;
    // 0x001508: 0x5C58300000470109 Fadd
    temp_671 = 0.0 - temp_656;
    temp_672 = temp_666 + temp_671;
    // 0x001510: 0x49A002980BF7060A Ffma
    temp_673 = fma(temp_670, fp_c6.data[47].w, temp_654);
    // 0x001518: 0x4C68101803170B0C Fmul
    temp_674 = temp_665 * fp_c6.data[12].y;
    // 0x001528: 0x49A002180BF70909 Ffma
    temp_675 = fma(temp_672, fp_c6.data[47].w, temp_656);
    // 0x001530: 0x5C58300000870206 Fadd
    temp_676 = 0.0 - temp_668;
    temp_677 = temp_667 + temp_676;
    // 0x001538: 0x49A203980357070B Ffma
    temp_678 = 0.0 - temp_633;
    temp_679 = fma(temp_633, fp_c6.data[13].y, temp_678);
    // 0x001548: 0x5C60178000A7050A Fmnmx
    temp_680 = max(temp_654, temp_673);
    // 0x001550: 0x5C90008000C7000C Rro
    // 0x001558: 0x49A004180BF70606 Ffma
    temp_681 = fma(temp_677, fp_c6.data[47].w, temp_668);
    // 0x001568: 0x5080000000270C0C Mufu
    temp_682 = exp2(temp_674);
    // 0x001570: 0x5C60178000970409 Fmnmx
    temp_683 = max(temp_656, temp_675);
    // 0x001578: 0x49A2039803470704 Ffma
    temp_684 = 0.0 - temp_633;
    temp_685 = fma(temp_633, fp_c6.data[13].x, temp_684);
    // 0x001588: 0x49A2039803670707 Ffma
    temp_686 = 0.0 - temp_633;
    temp_687 = fma(temp_633, fp_c6.data[13].z, temp_686);
    // 0x001590: 0x5C60178000670806 Fmnmx
    temp_688 = max(temp_668, temp_681);
    // 0x001598: 0x59A0050000470A03 Ffma
    temp_689 = fma(temp_680, temp_685, temp_680);
    // 0x0015A8: 0x59A0048000B70904 Ffma
    temp_690 = fma(temp_683, temp_679, temp_683);
    // 0x0015B0: 0x59A0030000770605 Ffma
    temp_691 = fma(temp_688, temp_687, temp_688);
    // 0x0015B8: 0x4C68101802B70C06 Fmul
    temp_692 = temp_682 * fp_c6.data[10].w;
    // 0x0015C8: 0x5C59100000370003 Fadd
    temp_693 = 0.0 - temp_664;
    temp_694 = temp_693 + temp_689;
    // 0x0015D0: 0x5C59100000470104 Fadd
    temp_695 = 0.0 - temp_666;
    temp_696 = temp_695 + temp_690;
    // 0x0015D8: 0x0103F8000007F007 Mov32i
    // 0x0015E8: 0x5C59100000570205 Fadd
    temp_697 = 0.0 - temp_667;
    temp_698 = temp_697 + temp_691;
    // 0x0015F0: 0x59A0000000670300 Ffma
    temp_699 = fma(temp_694, temp_692, temp_664);
    // 0x0015F8: 0x59A0008000670401 Ffma
    temp_700 = fma(temp_696, temp_692, temp_666);
    // 0x001608: 0x4C58100C03870D04 Fadd
    temp_701 = temp_657 + fp_c3.data[14].x;
    // 0x001610: 0x0103F8000007F003 Mov32i
    // 0x001618: 0x59A0010000670502 Ffma
    temp_702 = fma(temp_698, temp_692, temp_667);
    // 0x001628: 0x0103F0000007F005 Mov32i
    // 0x001630: 0x5C9807800FF70006 Mov
    // 0x001638: 0x49A37F8C03C70404 Ffma
    temp_703 = 0.0 - fp_c3.data[15].x;
    temp_704 = fma(temp_701, temp_703, -0.0);
    // 0x001648: 0xE30000000007000F Exit
    out_attr0.x = temp_699;
    out_attr0.y = temp_700;
    out_attr0.z = temp_702;
    out_attr0.w = 1.0;
    out_attr1.x = temp_704;
    out_attr1.y = 0.5;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
