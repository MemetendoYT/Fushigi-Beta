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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_36;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform sampler2D fp_t_tcb_1E;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform samplerCube fp_t_tcb_16;
layout (binding = 6) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 7) uniform samplerCube fp_t_tcb_18;
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
    precise vec3 temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise vec3 temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise vec3 temp_22;
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
    uint temp_171;
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
    int temp_186;
    precise float temp_187;
    int temp_188;
    uint temp_189;
    uint temp_190;
    int temp_191;
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
    bool temp_247;
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
    int temp_279;
    bool temp_280;
    int temp_281;
    int temp_282;
    int temp_283;
    int temp_284;
    int temp_285;
    uint temp_286;
    uint temp_287;
    int temp_288;
    precise float temp_289;
    int temp_290;
    int temp_291;
    uint temp_292;
    uint temp_293;
    int temp_294;
    precise float temp_295;
    int temp_296;
    uint temp_297;
    int temp_298;
    precise float temp_299;
    int temp_300;
    uint temp_301;
    uint temp_302;
    int temp_303;
    precise float temp_304;
    int temp_305;
    uint temp_306;
    int temp_307;
    precise float temp_308;
    int temp_309;
    uint temp_310;
    uint temp_311;
    int temp_312;
    precise float temp_313;
    int temp_314;
    uint temp_315;
    int temp_316;
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
    int temp_338;
    uint temp_339;
    uint temp_340;
    int temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    int temp_345;
    uint temp_346;
    uint temp_347;
    int temp_348;
    precise float temp_349;
    int temp_350;
    uint temp_351;
    int temp_352;
    precise float temp_353;
    precise float temp_354;
    precise float temp_355;
    precise float temp_356;
    precise float temp_357;
    precise float temp_358;
    int temp_359;
    uint temp_360;
    uint temp_361;
    int temp_362;
    precise float temp_363;
    int temp_364;
    uint temp_365;
    int temp_366;
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
    uint temp_379;
    int temp_380;
    bool temp_381;
    uint temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    uint temp_390;
    precise float temp_391;
    bool temp_392;
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
    int temp_421;
    uint temp_422;
    uint temp_423;
    int temp_424;
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
    int temp_446;
    uint temp_447;
    uint temp_448;
    int temp_449;
    precise float temp_450;
    precise float temp_451;
    precise float temp_452;
    precise float temp_453;
    uint temp_454;
    uint temp_455;
    int temp_456;
    precise float temp_457;
    int temp_458;
    uint temp_459;
    int temp_460;
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
    precise vec3 temp_526;
    precise float temp_527;
    precise float temp_528;
    precise float temp_529;
    precise vec3 temp_530;
    precise float temp_531;
    precise float temp_532;
    precise float temp_533;
    precise vec3 temp_534;
    precise float temp_535;
    precise float temp_536;
    precise float temp_537;
    precise float temp_538;
    precise float temp_539;
    precise float temp_540;
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    precise float temp_547;
    precise float temp_548;
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
    // 0x000008: 0x0103F8000007F001 Mov32i
    // 0x000010: 0xE003FF87CFF7FF00 Ipa
    // 0x000018: 0x5C9807800FF70023 Mov
    // 0x000028: 0xE003FF870FF7FF06 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000030: 0x5C9807800FF70025 Mov
    // 0x000038: 0xE003FF874FF7FF07 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000048: 0x4C68100C04A70606 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000050: 0x5080000000470000 Mufu
    // 0x000058: 0x4C68100C04B70707 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000068: 0xE043FF8E0007FF0B Ipa
    temp_8 = in_attr6.x;
    // 0x000070: 0xE043FF8E4007FF0C Ipa
    temp_9 = in_attr6.y;
    // 0x000078: 0xD830026FF0C70B08 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000088: 0xD8240360D0C70B02 Texs
    temp_13 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    // 0x000090: 0xD8220241B0C70B04 Texs
    temp_17 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyz;
    temp_18 = temp_17.x;
    temp_19 = temp_17.y;
    temp_20 = temp_17.z;
    // 0x000098: 0xD86201EFF0170601 Texs
    temp_21 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x0000A8: 0xD822020140770610 Texs
    temp_22 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_23 = temp_22.x;
    temp_24 = temp_22.y;
    temp_25 = temp_22.z;
    // 0x0000B0: 0xE043FF8B0007FF30 Ipa
    temp_26 = in_attr3.x;
    // 0x0000B8: 0xE043FF8B4007FF2F Ipa
    temp_27 = in_attr3.y;
    // 0x0000C8: 0xE043FF8A0007FF0E Ipa
    temp_28 = in_attr2.x;
    // 0x0000D0: 0xE043FF8B8007FF2E Ipa
    temp_29 = in_attr3.z;
    // 0x0000D8: 0xE043FF880007FF0A Ipa
    temp_30 = in_attr0.x;
    // 0x0000E8: 0xE043FF8A4007FF0F Ipa
    temp_31 = in_attr2.y;
    // 0x0000F0: 0xE043FF890007FF16 Ipa
    temp_32 = in_attr1.x;
    // 0x0000F8: 0xE043FF884007FF1F Ipa
    temp_33 = in_attr0.y;
    // 0x000108: 0xE043FF8A8007FF12 Ipa
    temp_34 = in_attr2.z;
    // 0x000110: 0xE043FF894007FF17 Ipa
    temp_35 = in_attr1.y;
    // 0x000118: 0xE043FF888007FF0B Ipa
    temp_36 = in_attr0.z;
    // 0x000128: 0xE043FF898007FF19 Ipa
    temp_37 = in_attr1.z;
    // 0x000130: 0xE2900000D6000000 Ssy
    // 0x000138: 0x5C9807800FF70024 Mov
    // 0x000148: 0x5C9807800FF70026 Mov
    // 0x000150: 0x5C6810000307300C Fmul
    temp_38 = temp_26 * temp_26;
    // 0x000158: 0x5C68100000E70E15 Fmul
    temp_39 = temp_28 * temp_28;
    // 0x000168: 0x5C68100000A70A1C Fmul
    temp_40 = temp_30 * temp_30;
    // 0x000170: 0x59A0060002F72F0C Ffma
    temp_41 = fma(temp_27, temp_27, temp_38);
    // 0x000178: 0x5C68100001671618 Fmul
    temp_42 = temp_32 * temp_32;
    // 0x000188: 0x59A00A8000F70F13 Ffma
    temp_43 = fma(temp_31, temp_31, temp_39);
    // 0x000190: 0x59A00E0001F71F1C Ffma
    temp_44 = fma(temp_33, temp_33, temp_40);
    // 0x000198: 0x59A0060002E72E0C Ffma
    temp_45 = fma(temp_29, temp_29, temp_41);
    // 0x0001A8: 0x59A00C000177171A Ffma
    temp_46 = fma(temp_35, temp_35, temp_42);
    // 0x0001B0: 0x5080000000570C15 Mufu
    temp_47 = inversesqrt(temp_45);
    // 0x0001B8: 0x59A0098001271213 Ffma
    temp_48 = fma(temp_34, temp_34, temp_43);
    // 0x0001C8: 0x59A00E0000B70B21 Ffma
    temp_49 = fma(temp_36, temp_36, temp_44);
    // 0x0001D0: 0x5080000000571318 Mufu
    temp_50 = inversesqrt(temp_48);
    // 0x0001D8: 0x59A00D000197191A Ffma
    temp_51 = fma(temp_37, temp_37, temp_46);
    // 0x0001E8: 0x5080000000572121 Mufu
    temp_52 = inversesqrt(temp_49);
    // 0x0001F0: 0x5C69100001573030 Fmul
    temp_53 = 0.0 - temp_47;
    temp_54 = temp_26 * temp_53;
    // 0x0001F8: 0x5080000000571A20 Mufu
    temp_55 = inversesqrt(temp_51);
    // 0x000208: 0x5C69100001572F2F Fmul
    temp_56 = 0.0 - temp_47;
    temp_57 = temp_27 * temp_56;
    // 0x000210: 0x5C69100001572E2E Fmul
    temp_58 = 0.0 - temp_47;
    temp_59 = temp_29 * temp_58;
    // 0x000218: 0x5C68100001870E1C Fmul
    temp_60 = temp_28 * temp_50;
    // 0x000228: 0x5C68100001870F1E Fmul
    temp_61 = temp_31 * temp_50;
    // 0x000230: 0x5C68100001871218 Fmul
    temp_62 = temp_34 * temp_50;
    // 0x000238: 0x4C58301805C7300C Fadd
    temp_63 = 0.0 - fp_c6.data[23].x;
    temp_64 = temp_54 + temp_63;
    // 0x000248: 0x4C58301805D72F0F Fadd
    temp_65 = 0.0 - fp_c6.data[23].y;
    temp_66 = temp_57 + temp_65;
    // 0x000250: 0x5C68100002171F1A Fmul
    temp_67 = temp_33 * temp_52;
    // 0x000258: 0x5C68100002170A1F Fmul
    temp_68 = temp_30 * temp_52;
    // 0x000268: 0x4C58301805E72E12 Fadd
    temp_69 = 0.0 - fp_c6.data[23].z;
    temp_70 = temp_59 + temp_69;
    // 0x000270: 0x5C68100000C70C0E Fmul
    temp_71 = temp_64 * temp_64;
    // 0x000278: 0x5C6810000207161D Fmul
    temp_72 = temp_32 * temp_55;
    // 0x000288: 0x5C68100002071717 Fmul
    temp_73 = temp_35 * temp_55;
    // 0x000290: 0x5C68100002071919 Fmul
    temp_74 = temp_37 * temp_55;
    // 0x000298: 0x59A0070000F70F13 Ffma
    temp_75 = fma(temp_66, temp_66, temp_71);
    // 0x0002A8: 0x5C68100002170B0E Fmul
    temp_76 = temp_36 * temp_52;
    // 0x0002B0: 0x5C9807800FF70021 Mov
    // 0x0002B8: 0x59A0098001271213 Ffma
    temp_77 = fma(temp_70, temp_70, temp_75);
    // 0x0002C8: 0x5080000000571315 Mufu
    temp_78 = inversesqrt(temp_77);
    // 0x0002D0: 0x5C68100001570C0B Fmul
    temp_79 = temp_64 * temp_78;
    // 0x0002D8: 0x5C6810000157120C Fmul
    temp_80 = temp_70 * temp_78;
    // 0x0002E8: 0x01040DF760C7F012 Mov32i
    // 0x0002F0: 0x4C69101805C70B13 Fmul
    temp_81 = 0.0 - fp_c6.data[23].x;
    temp_82 = temp_79 * temp_81;
    // 0x0002F8: 0xF0F0000034270000 Depbar
    // 0x000308: 0x5C6810000097090A Fmul
    temp_83 = temp_12 * temp_12;
    // 0x000310: 0x5C68100000971E1E Fmul
    temp_84 = temp_61 * temp_12;
    // 0x000318: 0x4C6810180A070202 Fmul
    temp_85 = temp_14 * fp_c6.data[40].x;
    // 0x000328: 0x4C68101402E71B1B Fmul
    temp_86 = temp_20 * fp_c5.data[11].z;
    // 0x000330: 0x4C6C101406870D22 Fmul
    temp_87 = temp_16 * fp_c5.data[26].x;
    temp_88 = clamp(temp_87, 0.0, 1.0);
    // 0x000338: 0x59A005000087080A Ffma
    temp_89 = fma(temp_11, temp_11, temp_83);
    // 0x000348: 0x59A00F0001770817 Ffma
    temp_90 = fma(temp_11, temp_73, temp_84);
    // 0x000350: 0x386013BF80070202 Fmnmx
    temp_91 = min(temp_85, 1.0);
    // 0x000358: 0x4C58301407B71B1E Fadd
    temp_92 = 0.0 - fp_c5.data[30].w;
    temp_93 = temp_86 + temp_92;
    // 0x000368: 0x385D103F80070A16 Fadd
    temp_94 = 0.0 - temp_89;
    temp_95 = temp_94 + 1.0;
    temp_96 = clamp(temp_95, 0.0, 1.0);
    // 0x000370: 0x5C68100000971C0A Fmul
    temp_97 = temp_60 * temp_12;
    // 0x000378: 0x508000000087161C Mufu
    temp_98 = sqrt(temp_96);
    // 0x000388: 0x51A00F1407B7031E Ffma
    temp_99 = fma(temp_15, temp_93, fp_c5.data[30].w);
    // 0x000390: 0x59A0050001D7081D Ffma
    temp_100 = fma(temp_11, temp_72, temp_97);
    // 0x000398: 0x5C68100001570F0A Fmul
    temp_101 = temp_66 * temp_78;
    // 0x0003A8: 0x5C6810000097180F Fmul
    temp_102 = temp_62 * temp_12;
    // 0x0003B0: 0x5C68100000B73009 Fmul
    temp_103 = temp_54 * temp_79;
    // 0x0003B8: 0x4C60178400170216 Fmnmx
    temp_104 = max(temp_91, fp_c1.data[0].y);
    // 0x0003C8: 0x59A00E8001C71F1D Ffma
    temp_105 = fma(temp_68, temp_98, temp_100);
    // 0x0003D0: 0x59A007800197080F Ffma
    temp_106 = fma(temp_11, temp_74, temp_102);
    // 0x0003D8: 0x59A00B8001C71A17 Ffma
    temp_107 = fma(temp_67, temp_98, temp_90);
    // 0x0003E8: 0x59A0048000A72F09 Ffma
    temp_108 = fma(temp_57, temp_101, temp_103);
    // 0x0003F0: 0x49A1099805D70A13 Ffma
    temp_109 = 0.0 - fp_c6.data[23].y;
    temp_110 = fma(temp_101, temp_109, temp_82);
    // 0x0003F8: 0x4C68101402D7051A Fmul
    temp_111 = temp_19 * fp_c5.data[11].y;
    // 0x000408: 0x5C68100001D71D08 Fmul
    temp_112 = temp_105 * temp_105;
    // 0x000410: 0x59A0078001C70E0E Ffma
    temp_113 = fma(temp_76, temp_98, temp_106);
    // 0x000418: 0x59A4048000C72E09 Ffma
    temp_114 = fma(temp_59, temp_80, temp_108);
    temp_115 = clamp(temp_114, 0.0, 1.0);
    // 0x000428: 0x49A5099805E70C13 Ffma
    temp_116 = 0.0 - fp_c6.data[23].z;
    temp_117 = fma(temp_80, temp_116, temp_110);
    temp_118 = clamp(temp_117, 0.0, 1.0);
    // 0x000430: 0x59A004000177170F Ffma
    temp_119 = fma(temp_107, temp_107, temp_112);
    // 0x000438: 0x49A2090400070908 Ffma
    temp_120 = fma(temp_115, fp_c1.data[0].x, -6.98316002);
    // 0x000448: 0x59A0078000E70E0F Ffma
    temp_121 = fma(temp_113, temp_113, temp_119);
    // 0x000450: 0x5080000000570F18 Mufu
    temp_122 = inversesqrt(temp_121);
    // 0x000458: 0x5C68100000870909 Fmul
    temp_123 = temp_115 * temp_120;
    // 0x000468: 0x49A2090400071308 Ffma
    temp_124 = fma(temp_118, fp_c1.data[0].x, -6.98316002);
    // 0x000470: 0x5C68100000871308 Fmul
    temp_125 = temp_118 * temp_124;
    // 0x000478: 0x3868104110070713 Fmul
    temp_126 = temp_7 * 9.0;
    // 0x000488: 0x0103F0000007F00F Mov32i
    // 0x000490: 0x5CA8148001370A13 F2f
    temp_127 = floor(temp_126);
    // 0x000498: 0x5C68100001871D12 Fmul
    temp_128 = temp_105 * temp_122;
    // 0x0004A8: 0x5C68100001871715 Fmul
    temp_129 = temp_107 * temp_122;
    // 0x0004B0: 0x5C68100001870E2D Fmul
    temp_130 = temp_113 * temp_122;
    // 0x0004B8: 0x4C68101402C70418 Fmul
    temp_131 = temp_18 * fp_c5.data[11].x;
    // 0x0004C8: 0x32A007BF0007160E Ffma
    temp_132 = fma(temp_104, 0.5, 0.5);
    // 0x0004D0: 0x5C90008000970004 Rro
    // 0x0004D8: 0x5C68100001270B0B Fmul
    temp_133 = temp_79 * temp_128;
    // 0x0004E8: 0x5080000000270404 Mufu
    temp_134 = exp2(temp_123);
    // 0x0004F0: 0x5C68100001273002 Fmul
    temp_135 = temp_54 * temp_128;
    // 0x0004F8: 0x4C69101805C71207 Fmul
    temp_136 = 0.0 - fp_c6.data[23].x;
    temp_137 = temp_128 * temp_136;
    // 0x000508: 0x5C68120000E70E0E Fmul
    temp_138 = temp_132 * 0.5;
    temp_139 = temp_138 * temp_132;
    // 0x000510: 0x4C58301407B71819 Fadd
    temp_140 = 0.0 - fp_c5.data[30].w;
    temp_141 = temp_131 + temp_140;
    // 0x000518: 0x4C58301407B71A1D Fadd
    temp_142 = 0.0 - fp_c5.data[30].w;
    temp_143 = temp_111 + temp_142;
    // 0x000528: 0x59A0058001570A0B Ffma
    temp_144 = fma(temp_101, temp_129, temp_133);
    // 0x000530: 0x386810418007060A Fmul
    temp_145 = temp_6 * 16.0;
    // 0x000538: 0x51A40B0400171606 Ffma
    temp_146 = fma(temp_104, temp_104, fp_c1.data[0].y);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000548: 0x5CA8148000A70A0A F2f
    temp_148 = floor(temp_145);
    // 0x000550: 0x59A0010001572F17 Ffma
    temp_149 = fma(temp_57, temp_129, temp_135);
    // 0x000558: 0x49A1039805D71507 Ffma
    temp_150 = 0.0 - fp_c6.data[23].y;
    temp_151 = fma(temp_129, temp_150, temp_137);
    // 0x000568: 0x59A4058002D70C0B Ffma
    temp_152 = fma(temp_80, temp_130, temp_144);
    temp_153 = clamp(temp_152, 0.0, 1.0);
    // 0x000570: 0x5C90008000870008 Rro
    // 0x000578: 0x51A00C9407B70319 Ffma
    temp_154 = fma(temp_15, temp_141, fp_c5.data[30].w);
    // 0x000588: 0x5080000000270808 Mufu
    temp_155 = exp2(temp_125);
    // 0x000590: 0x5C68100000670602 Fmul
    temp_156 = temp_147 * temp_147;
    // 0x000598: 0x59A40B8002D72E17 Ffma
    temp_157 = fma(temp_59, temp_130, temp_149);
    temp_158 = clamp(temp_157, 0.0, 1.0);
    // 0x0005A8: 0x49A5039805E72D07 Ffma
    temp_159 = 0.0 - fp_c6.data[23].z;
    temp_160 = fma(temp_130, temp_159, temp_151);
    temp_161 = clamp(temp_160, 0.0, 1.0);
    // 0x0005B0: 0x51A00E9407B7031D Ffma
    temp_162 = fma(temp_15, temp_143, fp_c5.data[30].w);
    // 0x0005B8: 0xF0F0000034170000 Depbar
    // 0x0005C8: 0x51A5110400270101 Ffma
    temp_163 = 0.0 - temp_88;
    temp_164 = fma(temp_21, temp_163, fp_c1.data[0].z);
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x0005D0: 0x5C9807800FF70022 Mov
    // 0x0005D8: 0x32A005418007130C Ffma
    temp_166 = fma(temp_127, 16.0, temp_148);
    // 0x0005E8: 0x59A2058000270B02 Ffma
    temp_167 = 0.0 - temp_153;
    temp_168 = fma(temp_153, temp_156, temp_167);
    // 0x0005F0: 0x5CB0118000C70A0C F2i
    temp_169 = trunc(temp_166);
    temp_170 = max(temp_169, 0.0);
    temp_171 = uint(temp_170);
    // 0x0005F8: 0x59A10B8000E7170F Ffma
    temp_172 = 0.0 - temp_139;
    temp_173 = fma(temp_158, temp_172, temp_158);
    // 0x000608: 0x59A1038000E70709 Ffma
    temp_174 = 0.0 - temp_139;
    temp_175 = fma(temp_161, temp_174, temp_161);
    // 0x000610: 0x4C68101801570705 Fmul
    temp_176 = temp_161 * fp_c6.data[5].y;
    // 0x000618: 0x5C6810000177120D Fmul
    temp_177 = temp_128 * temp_158;
    // 0x000628: 0x51A0010400270B0A Ffma
    temp_178 = fma(temp_153, temp_168, fp_c1.data[0].z);
    // 0x000630: 0x5C58100000F70E0F Fadd
    temp_179 = temp_139 + temp_173;
    // 0x000638: 0x5080000000470A0B Mufu
    temp_180 = 1.0 / temp_178;
    // 0x000648: 0x5C58100000970E13 Fadd
    temp_181 = temp_139 + temp_175;
    // 0x000650: 0x5080000000470F0F Mufu
    temp_182 = 1.0 / temp_179;
    // 0x000658: 0x59A1020001970402 Ffma
    temp_183 = 0.0 - temp_154;
    temp_184 = fma(temp_134, temp_183, temp_134);
    // 0x000668: 0x508000000047131C Mufu
    temp_185 = 1.0 / temp_181;
    // 0x000670: 0x3848000000870C1F Shl
    temp_186 = int(temp_171) << 8;
    // 0x000678: 0x1E23EA2F98370505 Fmul32i
    temp_187 = temp_176 * 0.318309873;
    // 0x000688: 0xEF94008200471F0A Ldc
    temp_188 = temp_186 + 0x2004;
    temp_189 = uint(temp_188) >> 2;
    temp_190 = temp_189 >> 2;
    temp_191 = int(temp_189) & 3;
    temp_192 = fp_c8.data[int(temp_190)][temp_191];
    // 0x000690: 0x5C58100000271902 Fadd
    temp_193 = temp_154 + temp_184;
    // 0x000698: 0x32A2184000070D0D Ffma
    temp_194 = 0.0 - temp_54;
    temp_195 = fma(temp_177, 2.0, temp_194);
    // 0x0006A8: 0x59A1040000871D13 Ffma
    temp_196 = 0.0 - temp_155;
    temp_197 = fma(temp_162, temp_196, temp_155);
    // 0x0006B0: 0x5C68100000B70609 Fmul
    temp_198 = temp_147 * temp_180;
    // 0x0006B8: 0x4C68101801470706 Fmul
    temp_199 = temp_161 * fp_c6.data[5].x;
    // 0x0006C8: 0x3868103F00070F0B Fmul
    temp_200 = temp_182 * 0.5;
    // 0x0006D0: 0x4C68101406970202 Fmul
    temp_201 = temp_193 * fp_c5.data[26].y;
    // 0x0006D8: 0x5C58100001371D13 Fadd
    temp_202 = temp_162 + temp_197;
    // 0x0006E8: 0x5C68100000970909 Fmul
    temp_203 = temp_198 * temp_198;
    // 0x0006F0: 0x5C68100001C70B0F Fmul
    temp_204 = temp_200 * temp_185;
    // 0x0006F8: 0x1E23EA2F9837061C Fmul32i
    temp_205 = temp_199 * 0.318309873;
    // 0x000708: 0x59A1020001D70406 Ffma
    temp_206 = 0.0 - temp_162;
    temp_207 = fma(temp_134, temp_206, temp_134);
    // 0x000710: 0x59A1020001E70404 Ffma
    temp_208 = 0.0 - temp_99;
    temp_209 = fma(temp_134, temp_208, temp_134);
    // 0x000718: 0x4C68101406971313 Fmul
    temp_210 = temp_202 * fp_c5.data[26].y;
    // 0x000728: 0x5C68100000F70909 Fmul
    temp_211 = temp_203 * temp_204;
    // 0x000730: 0x59A104000087190F Ffma
    temp_212 = 0.0 - temp_155;
    temp_213 = fma(temp_154, temp_212, temp_155);
    // 0x000738: 0x59A1040000871E08 Ffma
    temp_214 = 0.0 - temp_155;
    temp_215 = fma(temp_99, temp_214, temp_155);
    // 0x000748: 0x59A10E0001C7021C Ffma
    temp_216 = 0.0 - temp_205;
    temp_217 = fma(temp_201, temp_216, temp_205);
    // 0x000750: 0x5C58100000471E04 Fadd
    temp_218 = temp_99 + temp_209;
    // 0x000758: 0x4C68101801571313 Fmul
    temp_219 = temp_210 * fp_c6.data[5].y;
    // 0x000768: 0x5C68100000970702 Fmul
    temp_220 = temp_161 * temp_211;
    // 0x000770: 0x5C58100000F7190F Fadd
    temp_221 = temp_154 + temp_213;
    // 0x000778: 0x5C58100000871E08 Fadd
    temp_222 = temp_99 + temp_215;
    // 0x000788: 0x4C68101801670707 Fmul
    temp_223 = temp_161 * fp_c6.data[5].z;
    // 0x000790: 0x4C68101406970404 Fmul
    temp_224 = temp_218 * fp_c5.data[26].y;
    // 0x000798: 0x5C58100000671D06 Fadd
    temp_225 = temp_162 + temp_207;
    // 0x0007A8: 0x5C6810000027132B Fmul
    temp_226 = temp_219 * temp_220;
    // 0x0007B0: 0x4C68101406970F0F Fmul
    temp_227 = temp_221 * fp_c5.data[26].y;
    // 0x0007B8: 0x4C68101406970808 Fmul
    temp_228 = temp_222 * fp_c5.data[26].y;
    // 0x0007C8: 0x1E23EA2F98370707 Fmul32i
    temp_229 = temp_223 * 0.318309873;
    // 0x0007D0: 0x4C68101406970606 Fmul
    temp_230 = temp_225 * fp_c5.data[26].y;
    // 0x0007D8: 0x1E23E22F98372B2B Fmul32i
    temp_231 = temp_226 * 0.159154937;
    // 0x0007E8: 0x4C68101801470F0F Fmul
    temp_232 = temp_227 * fp_c6.data[5].x;
    // 0x0007F0: 0x4C68101801670808 Fmul
    temp_233 = temp_228 * fp_c6.data[5].z;
    // 0x0007F8: 0x59A1038000770420 Ffma
    temp_234 = 0.0 - temp_229;
    temp_235 = fma(temp_224, temp_234, temp_229);
    // 0x000808: 0x49A200980AD70104 Ffma
    temp_236 = 0.0 - temp_165;
    temp_237 = fma(temp_165, fp_c6.data[43].y, temp_236);
    // 0x000810: 0x59A102800057061F Ffma
    temp_238 = 0.0 - temp_187;
    temp_239 = fma(temp_230, temp_238, temp_187);
    // 0x000818: 0x5C68100000270F2A Fmul
    temp_240 = temp_232 * temp_220;
    // 0x000828: 0x5C68100000270808 Fmul
    temp_241 = temp_233 * temp_220;
    // 0x000830: 0x49A200980AC70102 Ffma
    temp_242 = 0.0 - temp_165;
    temp_243 = fma(temp_165, fp_c6.data[43].x, temp_242);
    // 0x000838: 0x49A200980AE70101 Ffma
    temp_244 = 0.0 - temp_165;
    temp_245 = fma(temp_165, fp_c6.data[43].z, temp_244);
    // 0x000848: 0x3858103F80070404 Fadd
    temp_246 = temp_237 + 1.0;
    // 0x000850: 0x5B6603800FF70A07 Isetp
    temp_247 = floatBitsToUint(temp_192) <= 0u;
    // 0x000858: 0x5C68100001772D0F Fmul
    temp_248 = temp_130 * temp_158;
    // 0x000868: 0x1E23E22F98372A2A Fmul32i
    temp_249 = temp_240 * 0.159154937;
    // 0x000870: 0x3858103F80070202 Fadd
    temp_250 = temp_243 + 1.0;
    // 0x000878: 0x3858103F80070129 Fadd
    temp_251 = temp_245 + 1.0;
    // 0x000888: 0x5C68100001771501 Fmul
    temp_252 = temp_129 * temp_158;
    // 0x000890: 0x59A4020000471A28 Ffma
    temp_253 = fma(temp_111, temp_246, temp_246);
    temp_254 = clamp(temp_253, 0.0, 1.0);
    // 0x000898: 0x32A2174000070F0F Ffma
    temp_255 = 0.0 - temp_59;
    temp_256 = fma(temp_248, 2.0, temp_255);
    // 0x0008A8: 0x1E23E22F9837082C Fmul32i
    temp_257 = temp_241 * 0.159154937;
    // 0x0008B0: 0x59A4010000271827 Ffma
    temp_258 = fma(temp_131, temp_250, temp_250);
    temp_259 = clamp(temp_258, 0.0, 1.0);
    // 0x0008B8: 0x59A4148002971B29 Ffma
    temp_260 = fma(temp_86, temp_251, temp_251);
    temp_261 = clamp(temp_260, 0.0, 1.0);
    // 0x0008C8: 0x32A217C000070113 Ffma
    temp_262 = 0.0 - temp_57;
    temp_263 = fma(temp_252, 2.0, temp_262);
    // 0x0008D0: 0xF0F800000000000F Sync
    temp_264 = 0.0;
    temp_265 = 0.0;
    temp_266 = 0.0;
    temp_267 = 0.0;
    temp_268 = 0.0;
    temp_269 = 0.0;
    temp_270 = 0.0;
    temp_271 = 0.0;
    temp_272 = 0.0;
    temp_273 = 0.0;
    temp_274 = 0.0;
    temp_275 = 0.0;
    if (!temp_247)
    {
        // 0x0008D8: 0x5C9807800FF70033 Mov
        // 0x0008E8: 0xE043FF8D0007FF09 Ipa
        temp_276 = in_attr5.x;
        // 0x0008F0: 0xE043FF8D4007FF08 Ipa
        temp_277 = in_attr5.y;
        // 0x0008F8: 0xE043FF8D8007FF02 Ipa
        temp_278 = in_attr5.z;
        temp_279 = 0;
        do
        {
            // 0x000908: 0x5C18020003370C36 Iscadd
            temp_281 = int(temp_171) << 4;
            temp_282 = temp_281 + temp_279;
            // 0x000910: 0xE290000056800000 Ssy
            // 0x000918: 0x1C00000000173333 Iadd32i
            temp_283 = temp_279 + 1;
            // 0x000928: 0x3848000000473636 Shl
            temp_284 = temp_282 << 4;
            // 0x000930: 0x5B6C038000A7330F Isetp
            temp_280 = uint(temp_283) >= floatBitsToUint(temp_192);
            // 0x000938: 0xEF94008200073631 Ldc
            temp_285 = temp_284 + 0x2000;
            temp_286 = uint(temp_285) >> 2;
            temp_287 = temp_286 >> 2;
            temp_288 = int(temp_286) & 3;
            temp_289 = fp_c8.data[int(temp_287)][temp_288];
            // 0x000948: 0x3848000000673131 Shl
            temp_290 = floatBitsToInt(temp_289) << 6;
            // 0x000950: 0xEF95008001073100 Ldc
            temp_291 = temp_290 + 16;
            temp_292 = uint(temp_291) >> 2;
            temp_293 = temp_292 >> 2;
            temp_294 = int(temp_292) & 3;
            temp_295 = fp_c8.data[int(temp_293)][temp_294];
            temp_296 = int(temp_292) + 1;
            temp_297 = uint(temp_296) >> 2;
            temp_298 = temp_296 & 3;
            temp_299 = fp_c8.data[int(temp_297)][temp_298];
            // 0x000958: 0xEF95008001873104 Ldc
            temp_300 = temp_290 + 24;
            temp_301 = uint(temp_300) >> 2;
            temp_302 = temp_301 >> 2;
            temp_303 = int(temp_301) & 3;
            temp_304 = fp_c8.data[int(temp_302)][temp_303];
            temp_305 = int(temp_301) + 1;
            temp_306 = uint(temp_305) >> 2;
            temp_307 = temp_305 & 3;
            temp_308 = fp_c8.data[int(temp_306)][temp_307];
            // 0x000968: 0xEF95008002073106 Ldc
            temp_309 = temp_290 + 32;
            temp_310 = uint(temp_309) >> 2;
            temp_311 = temp_310 >> 2;
            temp_312 = int(temp_310) & 3;
            temp_313 = fp_c8.data[int(temp_311)][temp_312];
            temp_314 = int(temp_310) + 1;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_314 & 3;
            temp_317 = fp_c8.data[int(temp_315)][temp_316];
            // 0x000970: 0x5C58300000970032 Fadd
            temp_318 = 0.0 - temp_276;
            temp_319 = temp_295 + temp_318;
            // 0x000978: 0x5C58300000870134 Fadd
            temp_320 = 0.0 - temp_277;
            temp_321 = temp_299 + temp_320;
            // 0x000988: 0x5C58300000270404 Fadd
            temp_322 = 0.0 - temp_278;
            temp_323 = temp_304 + temp_322;
            // 0x000990: 0x5C68100003273201 Fmul
            temp_324 = temp_319 * temp_319;
            // 0x000998: 0x59A1020000470500 Ffma
            temp_325 = 0.0 - temp_323;
            temp_326 = fma(temp_308, temp_325, temp_323);
            // 0x0009A8: 0x59A0008003473405 Ffma
            temp_327 = fma(temp_321, temp_321, temp_324);
            // 0x0009B0: 0x59A0028000070035 Ffma
            temp_328 = fma(temp_326, temp_326, temp_327);
            // 0x0009B8: 0x5080000000573501 Mufu
            temp_329 = inversesqrt(temp_328);
            // 0x0009C8: 0x5080000000873536 Mufu
            temp_330 = sqrt(temp_328);
            // 0x0009D0: 0x5C68100000173237 Fmul
            temp_331 = temp_319 * temp_329;
            // 0x0009D8: 0x5C68100000170000 Fmul
            temp_332 = temp_326 * temp_329;
            // 0x0009E8: 0x5C68100000173401 Fmul
            temp_333 = temp_321 * temp_329;
            // 0x0009F0: 0x5C69100000673706 Fmul
            temp_334 = 0.0 - temp_313;
            temp_335 = temp_331 * temp_334;
            // 0x0009F8: 0x59A1030000770106 Ffma
            temp_336 = 0.0 - temp_317;
            temp_337 = fma(temp_333, temp_336, temp_335);
            // 0x000A08: 0xEF94008002873101 Ldc
            temp_338 = temp_290 + 40;
            temp_339 = uint(temp_338) >> 2;
            temp_340 = temp_339 >> 2;
            temp_341 = int(temp_339) & 3;
            temp_342 = fp_c8.data[int(temp_340)][temp_341];
            // 0x000A10: 0x59A1030000170006 Ffma
            temp_343 = 0.0 - temp_342;
            temp_344 = fma(temp_332, temp_343, temp_337);
            // 0x000A18: 0xEF95008003873100 Ldc
            temp_345 = temp_290 + 56;
            temp_346 = uint(temp_345) >> 2;
            temp_347 = temp_346 >> 2;
            temp_348 = int(temp_346) & 3;
            temp_349 = fp_c8.data[int(temp_347)][temp_348];
            temp_350 = int(temp_346) + 1;
            temp_351 = uint(temp_350) >> 2;
            temp_352 = temp_350 & 3;
            temp_353 = fp_c8.data[int(temp_351)][temp_352];
            // 0x000A28: 0x59A4008000070600 Ffma
            temp_354 = fma(temp_344, temp_349, temp_353);
            temp_355 = clamp(temp_354, 0.0, 1.0);
            // 0x000A30: 0x010404000007F006 Mov32i
            // 0x000A38: 0x5C68100000070007 Fmul
            temp_356 = temp_355 * temp_355;
            // 0x000A48: 0x33A0034000070000 Ffma
            temp_357 = fma(temp_355, -2.0, 3.0);
            // 0x000A50: 0x5C68100000070707 Fmul
            temp_358 = temp_356 * temp_357;
            // 0x000A58: 0xEF95008003073100 Ldc
            temp_359 = temp_290 + 48;
            temp_360 = uint(temp_359) >> 2;
            temp_361 = temp_360 >> 2;
            temp_362 = int(temp_360) & 3;
            temp_363 = fp_c8.data[int(temp_361)][temp_362];
            temp_364 = int(temp_360) + 1;
            temp_365 = uint(temp_364) >> 2;
            temp_366 = temp_364 & 3;
            temp_367 = fp_c8.data[int(temp_365)][temp_366];
            // 0x000A68: 0x59A4008003670037 Ffma
            temp_368 = fma(temp_363, temp_330, temp_367);
            temp_369 = clamp(temp_368, 0.0, 1.0);
            // 0x000A70: 0x33A0034000073706 Ffma
            temp_370 = fma(temp_369, -2.0, 3.0);
            // 0x000A78: 0x5C68100003773737 Fmul
            temp_371 = temp_369 * temp_369;
            // 0x000A88: 0x5C68100000673706 Fmul
            temp_372 = temp_371 * temp_370;
            // 0x000A90: 0x5C68100000670707 Fmul
            temp_373 = temp_358 * temp_372;
            // 0x000A98: 0x39585042F0070406 Fadd
            temp_374 = abs(temp_323);
            temp_375 = temp_374 + -120.0;
            // 0x000AA8: 0x1EABD4CCCCD70606 Fmul32i
            temp_376 = temp_375 * -0.0500000007;
            temp_377 = clamp(temp_376, 0.0, 1.0);
            // 0x000AB0: 0x5C68100000670706 Fmul
            temp_378 = temp_373 * temp_377;
            // 0x000AB8: 0x36247F9000170707 Xmad
            temp_379 = floatBitsToUint(temp_373) >> 16;
            temp_380 = int(temp_379) << 16;
            // 0x000AC8: 0x5BB383800FF70607 Fsetp
            temp_381 = temp_378 <= 0.0;
            // 0x000AD0: 0x7A05083C0F00FF07 Hadd2
            temp_279 = temp_283;
            temp_382 = uint(temp_380);
            temp_383 = temp_264;
            temp_384 = temp_265;
            temp_385 = temp_266;
            temp_386 = temp_267;
            temp_387 = temp_268;
            temp_388 = temp_269;
            if (temp_381)
            {
                temp_389 = unpackHalf2x16(uint(temp_380)).y;
                temp_390 = packHalf2x16(vec2(1.0, temp_389));
                temp_382 = temp_390;
            }
            // 0x000AD8: 0x5D2103902FF70707 Hsetp2
            temp_391 = unpackHalf2x16(temp_382).x;
            temp_392 = temp_391 == 0.0;
            // 0x000AE8: 0xF0F800000008000F Sync
            if (temp_392)
            {
                // 0x000AF0: 0x5080000000470000 Mufu
                temp_393 = 1.0 / temp_363;
                // 0x000AF8: 0x5C69100000070101 Fmul
                temp_394 = 0.0 - temp_393;
                temp_395 = temp_367 * temp_394;
                // 0x000B08: 0x5C60138000170404 Fmnmx
                temp_396 = min(temp_323, temp_395);
                // 0x000B10: 0x5C61178000470104 Fmnmx
                temp_397 = 0.0 - temp_395;
                temp_398 = max(temp_397, temp_396);
                // 0x000B18: 0x59A0028000470405 Ffma
                temp_399 = fma(temp_398, temp_398, temp_327);
                // 0x000B28: 0x5080000000570507 Mufu
                temp_400 = inversesqrt(temp_399);
                // 0x000B30: 0x5080000000870505 Mufu
                temp_401 = sqrt(temp_399);
                // 0x000B38: 0x5C68100000773201 Fmul
                temp_402 = temp_319 * temp_400;
                // 0x000B48: 0x5C68100000773434 Fmul
                temp_403 = temp_321 * temp_400;
                // 0x000B50: 0x5C68100000770407 Fmul
                temp_404 = temp_398 * temp_400;
                // 0x000B58: 0x5C58100000173004 Fadd
                temp_405 = temp_54 + temp_402;
                // 0x000B68: 0x5C58100003472F32 Fadd
                temp_406 = temp_57 + temp_403;
                // 0x000B70: 0x5C68100000171236 Fmul
                temp_407 = temp_128 * temp_402;
                // 0x000B78: 0x5C68100000470400 Fmul
                temp_408 = temp_405 * temp_405;
                // 0x000B88: 0x59A0000003273235 Ffma
                temp_409 = fma(temp_406, temp_406, temp_408);
                // 0x000B90: 0x5C58100000772E00 Fadd
                temp_410 = temp_59 + temp_404;
                // 0x000B98: 0x59A01A8000070035 Ffma
                temp_411 = fma(temp_410, temp_410, temp_409);
                // 0x000BA8: 0x5080000000573535 Mufu
                temp_412 = inversesqrt(temp_411);
                // 0x000BB0: 0x5C68100003570404 Fmul
                temp_413 = temp_405 * temp_412;
                // 0x000BB8: 0x5C68100003573232 Fmul
                temp_414 = temp_406 * temp_412;
                // 0x000BC8: 0x5C68100003570000 Fmul
                temp_415 = temp_410 * temp_412;
                // 0x000BD0: 0x01040DF760C7F035 Mov32i
                // 0x000BD8: 0x5C68100000470137 Fmul
                temp_416 = temp_402 * temp_413;
                // 0x000BE8: 0x5C68100000471204 Fmul
                temp_417 = temp_128 * temp_413;
                // 0x000BF0: 0x59A01B8003273401 Ffma
                temp_418 = fma(temp_403, temp_414, temp_416);
                // 0x000BF8: 0x59A01B0003471534 Ffma
                temp_419 = fma(temp_129, temp_403, temp_407);
                // 0x000C08: 0x59A0020003271536 Ffma
                temp_420 = fma(temp_129, temp_414, temp_417);
                // 0x000C10: 0xEF94008002C73104 Ldc
                temp_421 = temp_290 + 44;
                temp_422 = uint(temp_421) >> 2;
                temp_423 = temp_422 >> 2;
                temp_424 = int(temp_422) & 3;
                temp_425 = fp_c8.data[int(temp_423)][temp_424];
                // 0x000C18: 0x59A4008000070701 Ffma
                temp_426 = fma(temp_404, temp_415, temp_418);
                temp_427 = clamp(temp_426, 0.0, 1.0);
                // 0x000C28: 0x59A01A0000772D32 Ffma
                temp_428 = fma(temp_130, temp_404, temp_419);
                // 0x000C30: 0x59A41B0000072D36 Ffma
                temp_429 = fma(temp_130, temp_415, temp_420);
                temp_430 = clamp(temp_429, 0.0, 1.0);
                // 0x000C38: 0x51A40B0400171607 Ffma
                temp_431 = fma(temp_104, temp_104, fp_c1.data[0].y);
                temp_432 = clamp(temp_431, 0.0, 1.0);
                // 0x000C48: 0x5C68100000770734 Fmul
                temp_433 = temp_432 * temp_432;
                // 0x000C50: 0x59A21B0003673434 Ffma
                temp_434 = 0.0 - temp_430;
                temp_435 = fma(temp_433, temp_430, temp_434);
                // 0x000C58: 0x51A01A0400273636 Ffma
                temp_436 = fma(temp_430, temp_435, fp_c1.data[0].z);
                // 0x000C68: 0x5C5C30000FF73234 Fadd
                temp_437 = temp_428 + -0.0;
                temp_438 = clamp(temp_437, 0.0, 1.0);
                // 0x000C70: 0x5080000000473636 Mufu
                temp_439 = 1.0 / temp_436;
                // 0x000C78: 0x5C68100003670707 Fmul
                temp_440 = temp_432 * temp_439;
                // 0x000C88: 0x5080000000470404 Mufu
                temp_441 = 1.0 / temp_425;
                // 0x000C90: 0x51A0028400370437 Ffma
                temp_442 = fma(temp_441, temp_401, fp_c1.data[0].w);
                // 0x000C98: 0x49A21A8400070104 Ffma
                temp_443 = fma(temp_427, fp_c1.data[0].x, -6.98316002);
                // 0x000CA8: 0x5080000000473700 Mufu
                temp_444 = 1.0 / temp_442;
                // 0x000CB0: 0x5C68100000470135 Fmul
                temp_445 = temp_427 * temp_443;
                // 0x000CB8: 0xEF94008000873105 Ldc
                temp_446 = temp_290 + 8;
                temp_447 = uint(temp_446) >> 2;
                temp_448 = temp_447 >> 2;
                temp_449 = int(temp_447) & 3;
                temp_450 = fp_c8.data[int(temp_448)][temp_449];
                // 0x000CC8: 0x59A11A0003470E37 Ffma
                temp_451 = 0.0 - temp_438;
                temp_452 = fma(temp_139, temp_451, temp_438);
                // 0x000CD0: 0x5C90008003570035 Rro
                // 0x000CD8: 0x1E23FB3333370004 Fmul32i
                temp_453 = temp_444 * 1.39999998;
                // 0x000CE8: 0xEF95008000073100 Ldc
                temp_454 = uint(temp_290) >> 2;
                temp_455 = temp_454 >> 2;
                temp_456 = int(temp_454) & 3;
                temp_457 = fp_c8.data[int(temp_455)][temp_456];
                temp_458 = int(temp_454) + 1;
                temp_459 = uint(temp_458) >> 2;
                temp_460 = temp_458 & 3;
                temp_461 = fp_c8.data[int(temp_459)][temp_460];
                // 0x000CF0: 0x5C58100003770E37 Fadd
                temp_462 = temp_139 + temp_452;
                // 0x000CF8: 0x5C68100000470404 Fmul
                temp_463 = temp_453 * temp_453;
                // 0x000D08: 0x59A1020000473204 Ffma
                temp_464 = 0.0 - temp_463;
                temp_465 = fma(temp_428, temp_464, temp_463);
                // 0x000D10: 0x5C5C100000473204 Fadd
                temp_466 = temp_428 + temp_465;
                temp_467 = clamp(temp_466, 0.0, 1.0);
                // 0x000D18: 0x5080000000473732 Mufu
                temp_468 = 1.0 / temp_462;
                // 0x000D28: 0x5080000000273537 Mufu
                temp_469 = exp2(temp_445);
                // 0x000D30: 0x5C68100000770735 Fmul
                temp_470 = temp_440 * temp_440;
                // 0x000D38: 0x5C68100003270B32 Fmul
                temp_471 = temp_200 * temp_468;
                // 0x000D48: 0x5C68100000570605 Fmul
                temp_472 = temp_378 * temp_450;
                // 0x000D50: 0x5C68100000070607 Fmul
                temp_473 = temp_378 * temp_457;
                // 0x000D58: 0x5C68100000170601 Fmul
                temp_474 = temp_378 * temp_461;
                // 0x000D68: 0x5C68100003273506 Fmul
                temp_475 = temp_470 * temp_471;
                // 0x000D70: 0x59A11B8003771900 Ffma
                temp_476 = 0.0 - temp_469;
                temp_477 = fma(temp_154, temp_476, temp_469);
                // 0x000D78: 0x59A11B8003771D32 Ffma
                temp_478 = 0.0 - temp_469;
                temp_479 = fma(temp_162, temp_478, temp_469);
                // 0x000D88: 0x59A11B8003771E37 Ffma
                temp_480 = 0.0 - temp_469;
                temp_481 = fma(temp_99, temp_480, temp_469);
                // 0x000D90: 0x5C68100000673406 Fmul
                temp_482 = temp_438 * temp_475;
                // 0x000D98: 0x5C58100000071900 Fadd
                temp_483 = temp_154 + temp_477;
                // 0x000DA8: 0x5C58100003271D32 Fadd
                temp_484 = temp_162 + temp_479;
                // 0x000DB0: 0x5C58100003771E37 Fadd
                temp_485 = temp_99 + temp_481;
                // 0x000DB8: 0x4C68101406970000 Fmul
                temp_486 = temp_483 * fp_c5.data[26].y;
                // 0x000DC8: 0x4C68101406973232 Fmul
                temp_487 = temp_484 * fp_c5.data[26].y;
                // 0x000DD0: 0x4C68101406973737 Fmul
                temp_488 = temp_485 * fp_c5.data[26].y;
                // 0x000DD8: 0x5C68100000770034 Fmul
                temp_489 = temp_486 * temp_473;
                // 0x000DE8: 0x5C68100000173200 Fmul
                temp_490 = temp_487 * temp_474;
                // 0x000DF0: 0x5C68100000573731 Fmul
                temp_491 = temp_488 * temp_472;
                // 0x000DF8: 0x5C68100000470707 Fmul
                temp_492 = temp_473 * temp_467;
                // 0x000E08: 0x5C68100000470101 Fmul
                temp_493 = temp_474 * temp_467;
                // 0x000E10: 0x5C68100000470504 Fmul
                temp_494 = temp_472 * temp_467;
                // 0x000E18: 0x5C68100000673434 Fmul
                temp_495 = temp_489 * temp_482;
                // 0x000E28: 0x5C68100000670000 Fmul
                temp_496 = temp_490 * temp_482;
                // 0x000E30: 0x5C68100000673131 Fmul
                temp_497 = temp_491 * temp_482;
                // 0x000E38: 0x49A0128400570725 Ffma
                temp_498 = fma(temp_492, fp_c1.data[1].y, temp_264);
                // 0x000E48: 0x49A0120400570124 Ffma
                temp_499 = fma(temp_493, fp_c1.data[1].y, temp_265);
                // 0x000E50: 0x49A0130400570426 Ffma
                temp_500 = fma(temp_494, fp_c1.data[1].y, temp_266);
                // 0x000E58: 0x49A0108400473421 Ffma
                temp_501 = fma(temp_495, fp_c1.data[1].x, temp_267);
                // 0x000E68: 0x49A0110400470022 Ffma
                temp_502 = fma(temp_496, fp_c1.data[1].x, temp_268);
                // 0x000E70: 0x49A0118400473123 Ffma
                temp_503 = fma(temp_497, fp_c1.data[1].x, temp_269);
                // 0x000E78: 0xF0F800000007000F Sync
                temp_383 = temp_498;
                temp_384 = temp_499;
                temp_385 = temp_500;
                temp_386 = temp_501;
                temp_387 = temp_502;
                temp_388 = temp_503;
            }
            // 0x000E88: 0xE2400FFFA709000F Bra
            temp_264 = temp_383;
            temp_265 = temp_384;
            temp_266 = temp_385;
            temp_267 = temp_386;
            temp_268 = temp_387;
            temp_269 = temp_388;
            temp_270 = temp_387;
            temp_271 = temp_386;
            temp_272 = temp_384;
            temp_273 = temp_388;
            temp_274 = temp_383;
            temp_275 = temp_385;
        }
        while (!temp_280);
        // 0x000E90: 0xF0F800000007000F Sync
    }
    // 0x000E98: 0x5C62578001370D01 Fmnmx
    temp_504 = abs(temp_195);
    temp_505 = abs(temp_263);
    temp_506 = max(temp_504, temp_505);
    // 0x000EA8: 0xE003FF87CFF7FF07 Ipa
    // 0x000EB0: 0x38681040E007162E Fmul
    temp_507 = temp_104 * 7.0;
    // 0x000EB8: 0x5C62578001571200 Fmnmx
    temp_508 = abs(temp_128);
    temp_509 = abs(temp_129);
    temp_510 = max(temp_508, temp_509);
    // 0x000EC8: 0x010000000017F00C Mov32i
    // 0x000ED0: 0x386810408007160B Fmul
    temp_511 = temp_104 * 4.0;
    // 0x000ED8: 0x4C98079C0207002F Mov
    // 0x000EE8: 0x5C60578000170F02 Fmnmx
    temp_512 = abs(temp_256);
    temp_513 = max(temp_512, temp_506);
    // 0x000EF0: 0x5080000000470202 Mufu
    temp_514 = 1.0 / temp_513;
    // 0x000EF8: 0x5C60578000072D01 Fmnmx
    temp_515 = abs(temp_130);
    temp_516 = max(temp_515, temp_510);
    // 0x000F08: 0x5080000000470104 Mufu
    temp_517 = 1.0 / temp_516;
    // 0x000F10: 0x5C68100000270D0D Fmul
    temp_518 = temp_195 * temp_514;
    // 0x000F18: 0x5C6810000027130E Fmul
    temp_519 = temp_263 * temp_514;
    // 0x000F28: 0x5080000000470707 Mufu
    // 0x000F30: 0x5C69100000270F0F Fmul
    temp_520 = 0.0 - temp_514;
    temp_521 = temp_256 * temp_520;
    // 0x000F38: 0x5C69100000472D0A Fmul
    temp_522 = 0.0 - temp_517;
    temp_523 = temp_130 * temp_522;
    // 0x000F48: 0x5C68100000471208 Fmul
    temp_524 = temp_128 * temp_517;
    // 0x000F50: 0x5C68100000471509 Fmul
    temp_525 = temp_129 * temp_517;
    // 0x000F58: 0xC0BA0163EFF70804 Tex
    temp_526 = textureLod(fp_t_tcb_16, vec3(temp_524, temp_525, temp_523), 0.0).xyz;
    temp_527 = temp_526.x;
    temp_528 = temp_526.y;
    temp_529 = temp_526.z;
    // 0x000F68: 0xC1BA0143F2E70C0C Tex
    temp_530 = textureLod(fp_t_tcb_14, vec4(temp_518, temp_519, temp_521, float(1)), temp_507).xyz;
    temp_531 = temp_530.x;
    temp_532 = temp_530.y;
    temp_533 = temp_530.z;
    // 0x000F70: 0xD9A20180B0A70812 Texs
    temp_534 = textureLod(fp_t_tcb_18, vec3(temp_524, temp_525, temp_523), temp_511).xyz;
    temp_535 = temp_534.x;
    temp_536 = temp_534.y;
    temp_537 = temp_534.z;
    // 0x000F78: 0xE043FF910077FF00 Ipa
    temp_538 = in_attr9.x;
    // 0x000F88: 0xE043FF914077FF01 Ipa
    temp_539 = in_attr9.y;
    // 0x000F90: 0xE043FF918077FF02 Ipa
    temp_540 = in_attr9.z;
    // 0x000F98: 0xDEBA0000C2F70000 TexB
    temp_541 = texture(fp_t_cb7_20, vec3(temp_538, temp_539, temp_540)).x;
    // 0x000FA8: 0x3859103F80071616 Fadd
    temp_542 = 0.0 - temp_104;
    temp_543 = temp_542 + 1.0;
    // 0x000FB0: 0x49A015980A17222B Ffma
    temp_544 = fma(temp_270, fp_c6.data[40].y, temp_231);
    // 0x000FB8: 0x3859103F80071722 Fadd
    temp_545 = 0.0 - temp_158;
    temp_546 = temp_545 + 1.0;
    // 0x000FC8: 0x49A015180A17212A Ffma
    temp_547 = fma(temp_271, fp_c6.data[40].y, temp_249);
    // 0x000FD0: 0x010410676C97F021 Mov32i
    // 0x000FD8: 0x49A00F980A17241F Ffma
    temp_548 = fma(temp_272, fp_c6.data[40].y, temp_239);
    // 0x000FE8: 0x5C68100001671616 Fmul
    temp_549 = temp_543 * temp_543;
    // 0x000FF0: 0x0103E2CD9E87F00F Mov32i
    // 0x000FF8: 0x1E23E468DB971708 Fmul32i
    temp_550 = temp_158 * 0.193900004;
    // 0x001008: 0x0103F0000007F024 Mov32i
    // 0x001010: 0x49A010840097170A Ffma
    temp_551 = fma(temp_158, fp_c1.data[2].y, 8.40400028);
    // 0x001018: 0x49A016180A17232C Ffma
    temp_552 = fma(temp_273, fp_c6.data[40].y, temp_257);
    // 0x001028: 0x5C68100001671609 Fmul
    temp_553 = temp_549 * temp_549;
    // 0x001030: 0x4C98079800970021 Mov
    // 0x001038: 0x4C98079800A70023 Mov
    // 0x001048: 0x49A00E180A17251C Ffma
    temp_554 = fma(temp_274, fp_c6.data[40].y, temp_217);
    // 0x001050: 0x4C68101809072201 Fmul
    temp_555 = temp_546 * fp_c6.data[36].x;
    // 0x001058: 0x51A0050400A71716 Ffma
    temp_556 = fma(temp_158, temp_551, fp_c1.data[2].z);
    // 0x001068: 0xE04BFF904077FF0A Ipa
    temp_557 = in_attr8.y;
    temp_558 = clamp(temp_557, 0.0, 1.0);
    // 0x001070: 0x49A2078400B7090F Ffma
    temp_559 = fma(temp_553, fp_c1.data[2].w, -0.168799996);
    // 0x001078: 0x5080400000370101 Mufu
    temp_560 = abs(temp_555);
    temp_561 = log2(temp_560);
    // 0x001088: 0x4C9807980B470022 Mov
    // 0x001090: 0x49A0040400670902 Ffma
    temp_562 = fma(temp_553, fp_c1.data[1].z, temp_550);
    // 0x001098: 0x32A0123F00071508 Ffma
    temp_563 = fma(temp_129, 0.5, 0.5);
    // 0x0010A8: 0x4C98079809A70015 Mov
    // 0x0010B0: 0x51A00B0400C71716 Ffma
    temp_564 = fma(temp_158, temp_556, fp_c1.data[3].x);
    // 0x0010B8: 0x5C68100000F7090F Fmul
    temp_565 = temp_553 * temp_559;
    // 0x0010C8: 0xF0F0000034370000 Depbar
    // 0x0010D0: 0x51A211180B471111 Ffma
    temp_566 = 0.0 - fp_c6.data[45].x;
    temp_567 = fma(temp_24, fp_c6.data[45].x, temp_566);
    // 0x0010D8: 0x51A211180B471414 Ffma
    temp_568 = 0.0 - fp_c6.data[45].x;
    temp_569 = fma(temp_25, fp_c6.data[45].x, temp_568);
    // 0x0010E8: 0x51A211180B471010 Ffma
    temp_570 = 0.0 - fp_c6.data[45].x;
    temp_571 = fma(temp_23, fp_c6.data[45].x, temp_570);
    // 0x0010F0: 0x088BF05D63970202 Fadd32i
    temp_572 = temp_562 + -0.522800028;
    // 0x0010F8: 0x0104066978D7F022 Mov32i
    // 0x001108: 0x4C58101408171515 Fadd
    temp_573 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x001110: 0x4C68101809170101 Fmul
    temp_574 = temp_561 * fp_c6.data[36].y;
    // 0x001118: 0x4C98079408270025 Mov
    // 0x001128: 0x5C60138000F7160F Fmnmx
    temp_575 = min(temp_564, temp_565);
    // 0x001130: 0x5C68100000271717 Fmul
    temp_576 = temp_158 * temp_572;
    // 0x001138: 0x49A2110400770922 Ffma
    temp_577 = fma(temp_553, fp_c1.data[1].w, -3.60299993);
    // 0x001148: 0x4C98079800870002 Mov
    // 0x001150: 0x5C90008000170016 Rro
    // 0x001158: 0x4C68101406972525 Fmul
    temp_578 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x001168: 0x5084000000271616 Mufu
    temp_579 = exp2(temp_574);
    temp_580 = clamp(temp_579, 0.0, 1.0);
    // 0x001170: 0x49A010180A172620 Ffma
    temp_581 = fma(temp_275, fp_c6.data[40].y, temp_235);
    // 0x001178: 0x51A0110400870922 Ffma
    temp_582 = fma(temp_553, temp_577, fp_c1.data[2].x);
    // 0x001188: 0x4C59101800470201 Fadd
    temp_583 = 0.0 - fp_c6.data[2].x;
    temp_584 = temp_583 + fp_c6.data[1].x;
    // 0x001190: 0x4C59101800572102 Fadd
    temp_585 = 0.0 - fp_c6.data[2].y;
    temp_586 = temp_585 + fp_c6.data[1].y;
    // 0x001198: 0x4C59101800672321 Fadd
    temp_587 = 0.0 - fp_c6.data[2].z;
    temp_588 = temp_587 + fp_c6.data[1].z;
    // 0x0011A8: 0x010404000007F023 Mov32i
    // 0x0011B0: 0x59A00B8002270917 Ffma
    temp_589 = fma(temp_553, temp_582, temp_576);
    // 0x0011B8: 0x51A0041800870101 Ffma
    temp_590 = fma(temp_584, temp_563, fp_c6.data[2].x);
    // 0x0011C8: 0x51A0041800970202 Ffma
    temp_591 = fma(temp_586, temp_563, fp_c6.data[2].y);
    // 0x0011D0: 0x5C68100000A70A22 Fmul
    temp_592 = temp_558 * temp_558;
    // 0x0011D8: 0x33A011C000070A09 Ffma
    temp_593 = fma(temp_558, -2.0, 3.0);
    // 0x0011E8: 0x5C68100001671515 Fmul
    temp_594 = temp_573 * temp_580;
    // 0x0011F0: 0x5C5C30000FF70F16 Fadd
    temp_595 = temp_575 + -0.0;
    temp_596 = clamp(temp_595, 0.0, 1.0);
    // 0x0011F8: 0x51A0041800A72108 Ffma
    temp_597 = fma(temp_588, temp_563, fp_c6.data[2].z);
    // 0x001208: 0x386C104248071D21 Fmul
    temp_598 = temp_162 * 50.0;
    temp_599 = clamp(temp_598, 0.0, 1.0);
    // 0x001210: 0x4C5C100400D71717 Fadd
    temp_600 = temp_589 + fp_c1.data[3].y;
    temp_601 = clamp(temp_600, 0.0, 1.0);
    // 0x001218: 0x5C68100002270909 Fmul
    temp_602 = temp_593 * temp_592;
    // 0x001228: 0x4C68101808D7150A Fmul
    temp_603 = temp_594 * fp_c6.data[35].y;
    // 0x001230: 0x4C68101808E7150F Fmul
    temp_604 = temp_594 * fp_c6.data[35].z;
    // 0x001238: 0x4C68101808C71515 Fmul
    temp_605 = temp_594 * fp_c6.data[35].x;
    // 0x001248: 0x5C68100002171623 Fmul
    temp_606 = temp_596 * temp_599;
    // 0x001250: 0x5C59100001771624 Fadd
    temp_607 = 0.0 - temp_596;
    temp_608 = temp_607 + temp_601;
    // 0x001258: 0x4C68101803770909 Fmul
    temp_609 = temp_602 * fp_c6.data[13].w;
    // 0x001268: 0x59A0158002570A2B Ffma
    temp_610 = fma(temp_603, temp_578, temp_544);
    // 0x001270: 0x49A1051408270A16 Ffma
    temp_611 = 0.0 - fp_c5.data[32].z;
    temp_612 = fma(temp_603, temp_611, temp_603);
    // 0x001278: 0xE043FF900077FF0A Ipa
    temp_613 = in_attr8.x;
    // 0x001288: 0x59A015000257152A Ffma
    temp_614 = fma(temp_605, temp_578, temp_547);
    // 0x001290: 0xE043FF8C8077FF07 Ipa
    temp_615 = in_attr4.z;
    // 0x001298: 0x49A10A9408271515 Ffma
    temp_616 = 0.0 - fp_c5.data[32].z;
    temp_617 = fma(temp_605, temp_616, temp_605);
    // 0x0012A8: 0x59A0160002570F2C Ffma
    temp_618 = fma(temp_604, temp_578, temp_552);
    // 0x0012B0: 0x59A0118002471919 Ffma
    temp_619 = fma(temp_154, temp_608, temp_606);
    // 0x0012B8: 0x49A1079408270F0F Ffma
    temp_620 = 0.0 - fp_c5.data[32].z;
    temp_621 = fma(temp_604, temp_620, temp_604);
    // 0x0012C8: 0x59A0118002471D1D Ffma
    temp_622 = fma(temp_162, temp_608, temp_606);
    // 0x0012D0: 0x59A0118002471E1E Ffma
    temp_623 = fma(temp_99, temp_608, temp_606);
    // 0x0012D8: 0x5C58100001571C15 Fadd
    temp_624 = temp_554 + temp_617;
    // 0x0012E8: 0x5C58100001671F16 Fadd
    temp_625 = temp_548 + temp_612;
    // 0x0012F0: 0x4C68101406971919 Fmul
    temp_626 = temp_619 * fp_c5.data[26].y;
    // 0x0012F8: 0x5C58100000F7200F Fadd
    temp_627 = temp_581 + temp_621;
    // 0x001308: 0x4C68101406971D1D Fmul
    temp_628 = temp_622 * fp_c5.data[26].y;
    // 0x001310: 0x4C68101406971E1E Fmul
    temp_629 = temp_623 * fp_c5.data[26].y;
    // 0x001318: 0xF0F0000034170000 Depbar
    // 0x001328: 0x49A0020400570104 Ffma
    temp_630 = fma(temp_590, fp_c1.data[1].y, temp_527);
    // 0x001330: 0x49A0028400570205 Ffma
    temp_631 = fma(temp_591, fp_c1.data[1].y, temp_528);
    // 0x001338: 0x49A0091808570C0C Ffma
    temp_632 = fma(temp_531, fp_c6.data[33].y, temp_535);
    // 0x001348: 0x49A0030400570806 Ffma
    temp_633 = fma(temp_597, fp_c1.data[1].y, temp_529);
    // 0x001350: 0x4C98079802870001 Mov
    // 0x001358: 0x49A0099808570D08 Ffma
    temp_634 = fma(temp_532, fp_c6.data[33].y, temp_536);
    // 0x001368: 0x5C58100000471504 Fadd
    temp_635 = temp_624 + temp_630;
    // 0x001370: 0x5C58100000571605 Fadd
    temp_636 = temp_625 + temp_631;
    // 0x001378: 0x59A0150000C71919 Ffma
    temp_637 = fma(temp_626, temp_632, temp_614);
    // 0x001388: 0x5C58100000670F06 Fadd
    temp_638 = temp_627 + temp_633;
    // 0x001390: 0x49A0059808570E0B Ffma
    temp_639 = fma(temp_533, fp_c6.data[33].y, temp_537);
    // 0x001398: 0x51A0009802871010 Ffma
    temp_640 = fma(temp_571, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0013A8: 0x59A1020000470302 Ffma
    temp_641 = 0.0 - temp_635;
    temp_642 = fma(temp_15, temp_641, temp_635);
    // 0x0013B0: 0x59A0158000871D1D Ffma
    temp_643 = fma(temp_628, temp_634, temp_610);
    // 0x0013B8: 0x59A1028000570304 Ffma
    temp_644 = 0.0 - temp_636;
    temp_645 = fma(temp_15, temp_644, temp_636);
    // 0x0013C8: 0x59A1030000670301 Ffma
    temp_646 = 0.0 - temp_638;
    temp_647 = fma(temp_15, temp_646, temp_638);
    // 0x0013D0: 0x59A0160000B71E1E Ffma
    temp_648 = fma(temp_629, temp_639, temp_618);
    // 0x0013D8: 0x4C9807980297000C Mov
    // 0x0013E8: 0x59A00C8000271802 Ffma
    temp_649 = fma(temp_131, temp_642, temp_637);
    // 0x0013F0: 0x49A2049803570905 Ffma
    temp_650 = 0.0 - temp_609;
    temp_651 = fma(temp_609, fp_c6.data[13].y, temp_650);
    // 0x0013F8: 0x59A00E8000471A1D Ffma
    temp_652 = fma(temp_111, temp_645, temp_643);
    // 0x001408: 0x49A2049803670904 Ffma
    temp_653 = 0.0 - temp_609;
    temp_654 = fma(temp_609, fp_c6.data[13].z, temp_653);
    // 0x001410: 0x59A00F0000171B1E Ffma
    temp_655 = fma(temp_86, temp_647, temp_648);
    // 0x001418: 0x51A0061802971111 Ffma
    temp_656 = fma(temp_567, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001428: 0x5C68100000272727 Fmul
    temp_657 = temp_259 * temp_649;
    // 0x001430: 0x4C98079802A70002 Mov
    // 0x001438: 0x5C68100001D72828 Fmul
    temp_658 = temp_254 * temp_652;
    // 0x001448: 0x5C68100001E72929 Fmul
    temp_659 = temp_261 * temp_655;
    // 0x001450: 0x5C58300001072701 Fadd
    temp_660 = 0.0 - temp_640;
    temp_661 = temp_657 + temp_660;
    // 0x001458: 0x51A0011802A71414 Ffma
    temp_662 = fma(temp_569, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001468: 0x49A008180BF70102 Ffma
    temp_663 = fma(temp_661, fp_c6.data[47].w, temp_640);
    // 0x001470: 0x5C58300001472901 Fadd
    temp_664 = 0.0 - temp_662;
    temp_665 = temp_659 + temp_664;
    // 0x001478: 0x49A505180BC7000A Ffma
    temp_666 = 0.0 - fp_c6.data[47].x;
    temp_667 = fma(temp_541, temp_666, temp_613);
    temp_668 = clamp(temp_667, 0.0, 1.0);
    // 0x001488: 0x5C58300001172800 Fadd
    temp_669 = 0.0 - temp_656;
    temp_670 = temp_658 + temp_669;
    // 0x001490: 0x5080000000370A0A Mufu
    temp_671 = log2(temp_668);
    // 0x001498: 0x5C60178000271002 Fmnmx
    temp_672 = max(temp_640, temp_663);
    // 0x0014A8: 0x49A00A180BF70101 Ffma
    temp_673 = fma(temp_665, fp_c6.data[47].w, temp_662);
    // 0x0014B0: 0x49A008980BF70000 Ffma
    temp_674 = fma(temp_670, fp_c6.data[47].w, temp_656);
    // 0x0014B8: 0x5C60178000171401 Fmnmx
    temp_675 = max(temp_662, temp_673);
    // 0x0014C8: 0x5C60178000071100 Fmnmx
    temp_676 = max(temp_656, temp_674);
    // 0x0014D0: 0x4C68101803170A03 Fmul
    temp_677 = temp_671 * fp_c6.data[12].y;
    // 0x0014D8: 0x59A0008000470104 Ffma
    temp_678 = fma(temp_675, temp_654, temp_675);
    // 0x0014E8: 0x59A0000000570005 Ffma
    temp_679 = fma(temp_676, temp_651, temp_676);
    // 0x0014F0: 0x5C90008000370006 Rro
    // 0x0014F8: 0x49A2049803470903 Ffma
    temp_680 = 0.0 - temp_609;
    temp_681 = fma(temp_609, fp_c6.data[13].x, temp_680);
    // 0x001508: 0x5080000000270606 Mufu
    temp_682 = exp2(temp_677);
    // 0x001510: 0x5C59100000572801 Fadd
    temp_683 = 0.0 - temp_658;
    temp_684 = temp_683 + temp_679;
    // 0x001518: 0x0103F6000007F005 Mov32i
    // 0x001528: 0x59A0010000370202 Ffma
    temp_685 = fma(temp_672, temp_681, temp_672);
    // 0x001530: 0x5C59100000272700 Fadd
    temp_686 = 0.0 - temp_657;
    temp_687 = temp_686 + temp_685;
    // 0x001538: 0x4C68101802B70603 Fmul
    temp_688 = temp_682 * fp_c6.data[10].w;
    // 0x001548: 0x5C59100000472902 Fadd
    temp_689 = 0.0 - temp_659;
    temp_690 = temp_689 + temp_678;
    // 0x001550: 0x4C58100C03870704 Fadd
    temp_691 = temp_615 + fp_c3.data[14].x;
    // 0x001558: 0x5C9807800FF70006 Mov
    // 0x001568: 0x0103F8000007F007 Mov32i
    // 0x001570: 0x59A0138000370000 Ffma
    temp_692 = fma(temp_687, temp_688, temp_657);
    // 0x001578: 0x59A0140000370101 Ffma
    temp_693 = fma(temp_684, temp_688, temp_658);
    // 0x001588: 0x59A0148000370202 Ffma
    temp_694 = fma(temp_690, temp_688, temp_659);
    // 0x001590: 0x0103F8000007F003 Mov32i
    // 0x001598: 0x49A37F8C03C70404 Ffma
    temp_695 = 0.0 - fp_c3.data[15].x;
    temp_696 = fma(temp_691, temp_695, -0.0);
    // 0x0015A8: 0xE30000000007000F Exit
    out_attr0.x = temp_692;
    out_attr0.y = temp_693;
    out_attr0.z = temp_694;
    out_attr0.w = 1.0;
    out_attr1.x = temp_696;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
