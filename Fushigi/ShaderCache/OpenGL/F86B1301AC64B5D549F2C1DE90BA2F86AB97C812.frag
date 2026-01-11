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
layout (binding = 1) uniform sampler2D fp_t_tcb_2C;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform sampler2D fp_t_tcb_36;
layout (binding = 4) uniform sampler2D fp_t_tcb_22;
layout (binding = 5) uniform sampler2D fp_t_tcb_1E;
layout (binding = 6) uniform sampler2D fp_t_tcb_28;
layout (binding = 7) uniform sampler2D fp_t_tcb_20;
layout (binding = 8) uniform samplerCube fp_t_tcb_16;
layout (binding = 9) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 10) uniform samplerCube fp_t_tcb_18;
layout (binding = 11) uniform sampler3D fp_t_cb7_20;
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
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise vec3 temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise vec2 temp_10;
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
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise vec4 temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise vec3 temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise vec3 temp_95;
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
    uint temp_192;
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
    int temp_205;
    precise float temp_206;
    int temp_207;
    uint temp_208;
    uint temp_209;
    int temp_210;
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
    bool temp_238;
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
    int temp_302;
    bool temp_303;
    int temp_304;
    int temp_305;
    int temp_306;
    int temp_307;
    uint temp_308;
    uint temp_309;
    int temp_310;
    precise float temp_311;
    int temp_312;
    int temp_313;
    uint temp_314;
    uint temp_315;
    int temp_316;
    precise float temp_317;
    int temp_318;
    uint temp_319;
    int temp_320;
    precise float temp_321;
    int temp_322;
    uint temp_323;
    uint temp_324;
    int temp_325;
    precise float temp_326;
    int temp_327;
    uint temp_328;
    int temp_329;
    precise float temp_330;
    int temp_331;
    uint temp_332;
    uint temp_333;
    int temp_334;
    precise float temp_335;
    int temp_336;
    uint temp_337;
    int temp_338;
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
    int temp_357;
    uint temp_358;
    uint temp_359;
    int temp_360;
    precise float temp_361;
    precise float temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    int temp_366;
    uint temp_367;
    uint temp_368;
    int temp_369;
    precise float temp_370;
    int temp_371;
    uint temp_372;
    int temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    int temp_381;
    uint temp_382;
    uint temp_383;
    int temp_384;
    precise float temp_385;
    int temp_386;
    uint temp_387;
    int temp_388;
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
    uint temp_401;
    int temp_402;
    bool temp_403;
    uint temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    uint temp_412;
    precise float temp_413;
    bool temp_414;
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
    int temp_434;
    uint temp_435;
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
    int temp_447;
    uint temp_448;
    uint temp_449;
    int temp_450;
    precise float temp_451;
    precise float temp_452;
    precise float temp_453;
    precise float temp_454;
    precise float temp_455;
    uint temp_456;
    uint temp_457;
    int temp_458;
    precise float temp_459;
    int temp_460;
    uint temp_461;
    int temp_462;
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
    int temp_520;
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
    precise float temp_536;
    precise float temp_537;
    precise float temp_538;
    precise float temp_539;
    precise float temp_540;
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise vec3 temp_544;
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
    precise vec3 temp_559;
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
    precise float temp_705;
    precise float temp_706;
    precise float temp_707;
    precise float temp_708;
    precise float temp_709;
    precise float temp_710;
    precise float temp_711;
    precise float temp_712;
    precise float temp_713;
    precise float temp_714;
    precise float temp_715;
    precise float temp_716;
    precise float temp_717;
    precise float temp_718;
    precise float temp_719;
    precise float temp_720;
    precise float temp_721;
    precise float temp_722;
    precise float temp_723;
    precise float temp_724;
    precise float temp_725;
    precise float temp_726;
    precise float temp_727;
    precise float temp_728;
    // 0x000008: 0x0103F0000007F031 Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8E0107FF0D Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4107FF0C Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0C70D00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD82002CFF0C70D02 Texs
    temp_5 = texture(fp_t_tcb_2C, vec2(temp_0, temp_1)).x;
    // 0x000050: 0xD822024060C70D04 Texs
    temp_6 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_7 = temp_6.x;
    temp_8 = temp_6.y;
    temp_9 = temp_6.z;
    // 0x000058: 0xD83A036FF0C70D20 Texs
    temp_10 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).yw;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000068: 0xE043FF8A0107FF03 Ipa
    temp_13 = in_attr2.x;
    // 0x000070: 0xE043FF8A4107FF07 Ipa
    temp_14 = in_attr2.y;
    // 0x000078: 0xE043FF890107FF0A Ipa
    temp_15 = in_attr1.x;
    // 0x000088: 0xE043FF8A8107FF08 Ipa
    temp_16 = in_attr2.z;
    // 0x000090: 0xE043FF894107FF0B Ipa
    temp_17 = in_attr1.y;
    // 0x000098: 0xE043FF880107FF0F Ipa
    temp_18 = in_attr0.x;
    // 0x0000A8: 0xE043FF898107FF0E Ipa
    temp_19 = in_attr1.z;
    // 0x0000B0: 0xE043FF884107FF12 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B8: 0xE043FF888107FF13 Ipa
    temp_21 = in_attr0.z;
    // 0x0000C8: 0x5C68100000370309 Fmul
    temp_22 = temp_13 * temp_13;
    // 0x0000D0: 0x5C68100000A70A11 Fmul
    temp_23 = temp_15 * temp_15;
    // 0x0000D8: 0x5C68100000F70F14 Fmul
    temp_24 = temp_18 * temp_18;
    // 0x0000E8: 0x59A0048000770709 Ffma
    temp_25 = fma(temp_14, temp_14, temp_22);
    // 0x0000F0: 0x59A0088000B70B11 Ffma
    temp_26 = fma(temp_17, temp_17, temp_23);
    // 0x0000F8: 0x59A00A0001271214 Ffma
    temp_27 = fma(temp_20, temp_20, temp_24);
    // 0x000108: 0x59A0048000870809 Ffma
    temp_28 = fma(temp_16, temp_16, temp_25);
    // 0x000110: 0x5080000000570909 Mufu
    temp_29 = inversesqrt(temp_28);
    // 0x000118: 0x59A0088000E70E11 Ffma
    temp_30 = fma(temp_19, temp_19, temp_26);
    // 0x000128: 0x5080000000571111 Mufu
    temp_31 = inversesqrt(temp_30);
    // 0x000130: 0x59A00A0001371314 Ffma
    temp_32 = fma(temp_21, temp_21, temp_27);
    // 0x000138: 0x5080000000571414 Mufu
    temp_33 = inversesqrt(temp_32);
    // 0x000148: 0x5C68100000970303 Fmul
    temp_34 = temp_13 * temp_29;
    // 0x000150: 0x5C68100000970707 Fmul
    temp_35 = temp_14 * temp_29;
    // 0x000158: 0x5C68100000970808 Fmul
    temp_36 = temp_16 * temp_29;
    // 0x000168: 0x5C68100001170A0A Fmul
    temp_37 = temp_15 * temp_31;
    // 0x000170: 0x5C68100001170B0B Fmul
    temp_38 = temp_17 * temp_31;
    // 0x000178: 0x5C68100001170E0E Fmul
    temp_39 = temp_19 * temp_31;
    // 0x000188: 0x5C68100001471212 Fmul
    temp_40 = temp_20 * temp_33;
    // 0x000190: 0x5C68100001471313 Fmul
    temp_41 = temp_21 * temp_33;
    // 0x000198: 0xF0F0000034370000 Depbar
    // 0x0001A8: 0x5C68100000170109 Fmul
    temp_42 = temp_4 * temp_4;
    // 0x0001B0: 0x5C68100000170303 Fmul
    temp_43 = temp_34 * temp_4;
    // 0x0001B8: 0x59A0048000070009 Ffma
    temp_44 = fma(temp_3, temp_3, temp_42);
    // 0x0001C8: 0x59A0018000070A03 Ffma
    temp_45 = fma(temp_37, temp_3, temp_43);
    // 0x0001D0: 0x5C68100001470F0A Fmul
    temp_46 = temp_18 * temp_33;
    // 0x0001D8: 0x385D103F80070911 Fadd
    temp_47 = 0.0 - temp_44;
    temp_48 = temp_47 + 1.0;
    temp_49 = clamp(temp_48, 0.0, 1.0);
    // 0x0001E8: 0x5C68100000170709 Fmul
    temp_50 = temp_35 * temp_4;
    // 0x0001F0: 0x5080000000871118 Mufu
    temp_51 = sqrt(temp_49);
    // 0x0001F8: 0x5C68100000170801 Fmul
    temp_52 = temp_36 * temp_4;
    // 0x000208: 0xE003FF870FF7FF08 Ipa
    temp_53 = gl_FragCoord.x;
    temp_54 = support_buffer.render_scale[0];
    temp_55 = temp_53 / temp_54;
    // 0x000210: 0x59A0048000070B09 Ffma
    temp_56 = fma(temp_38, temp_3, temp_50);
    // 0x000218: 0x59A0008000070E01 Ffma
    temp_57 = fma(temp_39, temp_3, temp_52);
    // 0x000228: 0x59A0018001870A03 Ffma
    temp_58 = fma(temp_46, temp_51, temp_45);
    // 0x000230: 0xE003FF874FF7FF0A Ipa
    temp_59 = gl_FragCoord.y;
    temp_60 = support_buffer.render_scale[0];
    temp_61 = temp_59 / temp_60;
    // 0x000238: 0x59A0048001871209 Ffma
    temp_62 = fma(temp_40, temp_51, temp_56);
    // 0x000248: 0x59A0008001871301 Ffma
    temp_63 = fma(temp_41, temp_51, temp_57);
    // 0x000250: 0x0103F8000007F013 Mov32i
    // 0x000258: 0x5C68100000370300 Fmul
    temp_64 = temp_58 * temp_58;
    // 0x000268: 0x59A0000000970900 Ffma
    temp_65 = fma(temp_62, temp_62, temp_64);
    // 0x000270: 0x59A0000000170107 Ffma
    temp_66 = fma(temp_63, temp_63, temp_65);
    // 0x000278: 0x4C68100C04A70808 Fmul
    temp_67 = temp_55 * fp_c3.data[18].z;
    // 0x000288: 0x508000000057070E Mufu
    temp_68 = inversesqrt(temp_66);
    // 0x000290: 0x5C68100000E70116 Fmul
    temp_69 = temp_63 * temp_68;
    // 0x000298: 0x5C68100000E70900 Fmul
    temp_70 = temp_62 * temp_68;
    // 0x0002A8: 0x5C68100000E7030E Fmul
    temp_71 = temp_58 * temp_68;
    // 0x0002B0: 0x4C68100C00671609 Fmul
    temp_72 = temp_69 * fp_c3.data[1].z;
    // 0x0002B8: 0x4C68100C00271601 Fmul
    temp_73 = temp_69 * fp_c3.data[0].z;
    // 0x0002C8: 0x49A0048C00570009 Ffma
    temp_74 = fma(temp_70, fp_c3.data[1].y, temp_72);
    // 0x0002D0: 0x49A0008C00170001 Ffma
    temp_75 = fma(temp_70, fp_c3.data[0].y, temp_73);
    // 0x0002D8: 0x49A0048C00470E09 Ffma
    temp_76 = fma(temp_71, fp_c3.data[1].x, temp_74);
    // 0x0002E8: 0x49A0008C00070E01 Ffma
    temp_77 = fma(temp_71, fp_c3.data[0].x, temp_75);
    // 0x0002F0: 0x4C69100C03E70903 Fmul
    temp_78 = 0.0 - fp_c3.data[15].z;
    temp_79 = temp_76 * temp_78;
    // 0x0002F8: 0x4C68100C04B70A09 Fmul
    temp_80 = temp_61 * fp_c3.data[18].w;
    // 0x000308: 0x4C68101808B70101 Fmul
    temp_81 = temp_77 * fp_c6.data[34].w;
    // 0x000310: 0x4C68101808B70303 Fmul
    temp_82 = temp_79 * fp_c6.data[34].w;
    // 0x000318: 0x49A0040400370122 Ffma
    temp_83 = fma(temp_81, fp_c1.data[0].w, temp_67);
    // 0x000328: 0x49A0048400370323 Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].w, temp_80);
    // 0x000330: 0xD832022242372222 Texs
    temp_85 = texture(fp_t_tcb_22, vec2(temp_83, temp_84)).xyzw;
    temp_86 = temp_85.x;
    temp_87 = temp_85.y;
    temp_88 = temp_85.z;
    temp_89 = temp_85.w;
    // 0x000338: 0xD86201EFF1370813 Texs
    temp_90 = textureLod(fp_t_tcb_1E, vec2(temp_67, temp_80), 1.0).x;
    // 0x000348: 0xD822028110C70D0C Texs
    temp_91 = texture(fp_t_tcb_28, vec2(temp_0, temp_1)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000350: 0xD822020010970826 Texs
    temp_95 = texture(fp_t_tcb_20, vec2(temp_67, temp_80)).xyz;
    temp_96 = temp_95.x;
    temp_97 = temp_95.y;
    temp_98 = temp_95.z;
    // 0x000358: 0xE043FF8B0107FF34 Ipa
    temp_99 = in_attr3.x;
    // 0x000368: 0xE043FF8B4107FF35 Ipa
    temp_100 = in_attr3.y;
    // 0x000370: 0xE043FF8B8107FF33 Ipa
    temp_101 = in_attr3.z;
    // 0x000378: 0xF0F0000034570000 Depbar
    // 0x000388: 0x4C6810180A070202 Fmul
    temp_102 = temp_5 * fp_c6.data[40].x;
    // 0x000390: 0xE2900000BA000000 Ssy
    // 0x000398: 0x3868104180070817 Fmul
    temp_103 = temp_67 * 16.0;
    // 0x0003A8: 0x4C68101402C70404 Fmul
    temp_104 = temp_7 * fp_c5.data[11].x;
    // 0x0003B0: 0x5CA8148001770A17 F2f
    temp_105 = floor(temp_103);
    // 0x0003B8: 0x4C68101402D70505 Fmul
    temp_106 = temp_8 * fp_c5.data[11].y;
    // 0x0003C8: 0x4C68101402E70606 Fmul
    temp_107 = temp_9 * fp_c5.data[11].z;
    // 0x0003D0: 0x5C9807800FF70032 Mov
    // 0x0003D8: 0x386013BF80070202 Fmnmx
    temp_108 = min(temp_102, 1.0);
    // 0x0003E8: 0x5C9807800FF7002F Mov
    // 0x0003F0: 0x4C60178400070202 Fmnmx
    temp_109 = max(temp_108, fp_c1.data[0].x);
    // 0x0003F8: 0x32A018BF00070231 Ffma
    temp_110 = fma(temp_109, 0.5, 0.5);
    // 0x000408: 0x51A401040007022B Ffma
    temp_111 = fma(temp_109, temp_109, fp_c1.data[0].x);
    temp_112 = clamp(temp_111, 0.0, 1.0);
    // 0x000410: 0x5C68120003173131 Fmul
    temp_113 = temp_110 * 0.5;
    temp_114 = temp_113 * temp_110;
    // 0x000418: 0x5C68100002B72B2A Fmul
    temp_115 = temp_112 * temp_112;
    // 0x000428: 0x5C68100003473403 Fmul
    temp_116 = temp_99 * temp_99;
    // 0x000430: 0x59A001800357350A Ffma
    temp_117 = fma(temp_100, temp_100, temp_116);
    // 0x000438: 0x59A005000337330A Ffma
    temp_118 = fma(temp_101, temp_101, temp_117);
    // 0x000448: 0x5080000000570A0A Mufu
    temp_119 = inversesqrt(temp_118);
    // 0x000450: 0x5C69100000A73434 Fmul
    temp_120 = 0.0 - temp_119;
    temp_121 = temp_99 * temp_120;
    // 0x000458: 0x5C69100000A73535 Fmul
    temp_122 = 0.0 - temp_119;
    temp_123 = temp_100 * temp_122;
    // 0x000468: 0x5C69100000A73333 Fmul
    temp_124 = 0.0 - temp_119;
    temp_125 = temp_101 * temp_124;
    // 0x000470: 0x4C58301805C73403 Fadd
    temp_126 = 0.0 - fp_c6.data[23].x;
    temp_127 = temp_121 + temp_126;
    // 0x000478: 0x4C58301805D73507 Fadd
    temp_128 = 0.0 - fp_c6.data[23].y;
    temp_129 = temp_123 + temp_128;
    // 0x000488: 0x4C58301805E7330B Fadd
    temp_130 = 0.0 - fp_c6.data[23].z;
    temp_131 = temp_125 + temp_130;
    // 0x000490: 0x5C68100000370312 Fmul
    temp_132 = temp_127 * temp_127;
    // 0x000498: 0x59A0090000770712 Ffma
    temp_133 = fma(temp_129, temp_129, temp_132);
    // 0x0004A8: 0x59A0090000B70B12 Ffma
    temp_134 = fma(temp_131, temp_131, temp_133);
    // 0x0004B0: 0x5080000000571212 Mufu
    temp_135 = inversesqrt(temp_134);
    // 0x0004B8: 0x5C68100001270303 Fmul
    temp_136 = temp_127 * temp_135;
    // 0x0004C8: 0x5C68100001270707 Fmul
    temp_137 = temp_129 * temp_135;
    // 0x0004D0: 0x5C68100001270B14 Fmul
    temp_138 = temp_131 * temp_135;
    // 0x0004D8: 0x4C69101805C7030A Fmul
    temp_139 = 0.0 - fp_c6.data[23].x;
    temp_140 = temp_136 * temp_139;
    // 0x0004E8: 0x5C68100000373418 Fmul
    temp_141 = temp_121 * temp_136;
    // 0x0004F0: 0x49A1051805D7070A Ffma
    temp_142 = 0.0 - fp_c6.data[23].y;
    temp_143 = fma(temp_137, temp_142, temp_140);
    // 0x0004F8: 0x59A00C0000773515 Ffma
    temp_144 = fma(temp_123, temp_137, temp_141);
    // 0x000508: 0x01040DF760C7F018 Mov32i
    // 0x000510: 0x49A5051805E7140B Ffma
    temp_145 = 0.0 - fp_c6.data[23].z;
    temp_146 = fma(temp_138, temp_145, temp_143);
    temp_147 = clamp(temp_146, 0.0, 1.0);
    // 0x000518: 0x5C68100000370E0A Fmul
    temp_148 = temp_71 * temp_136;
    // 0x000528: 0x59A40A8001473315 Ffma
    temp_149 = fma(temp_125, temp_138, temp_144);
    temp_150 = clamp(temp_149, 0.0, 1.0);
    // 0x000530: 0x49A20C0400270B12 Ffma
    temp_151 = fma(temp_147, fp_c1.data[0].z, -6.98316002);
    // 0x000538: 0x59A0050000770003 Ffma
    temp_152 = fma(temp_70, temp_137, temp_148);
    // 0x000548: 0x49A20C040027150F Ffma
    temp_153 = fma(temp_150, fp_c1.data[0].z, -6.98316002);
    // 0x000550: 0x5C68100003470E0A Fmul
    temp_154 = temp_71 * temp_121;
    // 0x000558: 0x5C68100001270B0B Fmul
    temp_155 = temp_147 * temp_151;
    // 0x000568: 0x59A4018001471614 Ffma
    temp_156 = fma(temp_69, temp_138, temp_152);
    temp_157 = clamp(temp_156, 0.0, 1.0);
    // 0x000570: 0x5C68100000F71507 Fmul
    temp_158 = temp_150 * temp_153;
    // 0x000578: 0x4C69101805C70E03 Fmul
    temp_159 = 0.0 - fp_c6.data[23].x;
    temp_160 = temp_71 * temp_159;
    // 0x000588: 0x59A0050003570015 Ffma
    temp_161 = fma(temp_70, temp_123, temp_154);
    // 0x000590: 0x5C90008000B7001A Rro
    // 0x000598: 0x59A20A0002A71412 Ffma
    temp_162 = 0.0 - temp_157;
    temp_163 = fma(temp_157, temp_115, temp_162);
    // 0x0005A8: 0x5080000000271A1A Mufu
    temp_164 = exp2(temp_155);
    // 0x0005B0: 0x49A1019805D7000F Ffma
    temp_165 = 0.0 - fp_c6.data[23].y;
    temp_166 = fma(temp_70, temp_165, temp_160);
    // 0x0005B8: 0x59A40A8003371603 Ffma
    temp_167 = fma(temp_69, temp_125, temp_161);
    temp_168 = clamp(temp_167, 0.0, 1.0);
    // 0x0005C8: 0x3868104110070915 Fmul
    temp_169 = temp_80 * 9.0;
    // 0x0005D0: 0x5C9000800077001E Rro
    // 0x0005D8: 0x5CA8148001570A15 F2f
    temp_170 = floor(temp_169);
    // 0x0005E8: 0x51A0090400171412 Ffma
    temp_171 = fma(temp_157, temp_163, fp_c1.data[0].y);
    // 0x0005F0: 0x5080000000271E1E Mufu
    temp_172 = exp2(temp_158);
    // 0x0005F8: 0x49A5079805E7160A Ffma
    temp_173 = 0.0 - fp_c6.data[23].z;
    temp_174 = fma(temp_69, temp_173, temp_166);
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x000608: 0x5080000000471212 Mufu
    temp_176 = 1.0 / temp_171;
    // 0x000610: 0x59A101800037310F Ffma
    temp_177 = 0.0 - temp_168;
    temp_178 = fma(temp_114, temp_177, temp_168);
    // 0x000618: 0x4C98079808770014 Mov
    // 0x000628: 0x4C58301407B70407 Fadd
    temp_179 = 0.0 - fp_c5.data[30].w;
    temp_180 = temp_104 + temp_179;
    // 0x000630: 0x4C58301407B7060B Fadd
    temp_181 = 0.0 - fp_c5.data[30].w;
    temp_182 = temp_107 + temp_181;
    // 0x000638: 0x5C68100000370E37 Fmul
    temp_183 = temp_71 * temp_168;
    // 0x000648: 0x59A1050003170A08 Ffma
    temp_184 = 0.0 - temp_114;
    temp_185 = fma(temp_175, temp_184, temp_175);
    // 0x000650: 0x5C58100000F7310F Fadd
    temp_186 = temp_114 + temp_178;
    // 0x000658: 0x5080000000470F0F Mufu
    temp_187 = 1.0 / temp_186;
    // 0x000668: 0x32A00BC180071519 Ffma
    temp_188 = fma(temp_170, 16.0, temp_105);
    // 0x000670: 0x4C68101801570A17 Fmul
    temp_189 = temp_175 * fp_c6.data[5].y;
    // 0x000678: 0x5CB0118001970A19 F2i
    temp_190 = trunc(temp_188);
    temp_191 = max(temp_190, 0.0);
    temp_192 = uint(temp_191);
    // 0x000688: 0x5C58100000873109 Fadd
    temp_193 = temp_114 + temp_185;
    // 0x000690: 0x5C68100001272B08 Fmul
    temp_194 = temp_112 * temp_176;
    // 0x000698: 0xF0F0000034470000 Depbar
    // 0x0006A8: 0x5080000000470909 Mufu
    temp_195 = 1.0 / temp_193;
    // 0x0006B0: 0x51A0039407B72007 Ffma
    temp_196 = fma(temp_11, temp_180, fp_c5.data[30].w);
    // 0x0006B8: 0x32A21A4000073737 Ffma
    temp_197 = 0.0 - temp_121;
    temp_198 = fma(temp_183, 2.0, temp_197);
    // 0x0006C8: 0x1E23EA2F98371728 Fmul32i
    temp_199 = temp_189 * 0.318309873;
    // 0x0006D0: 0x5C68100000870808 Fmul
    temp_200 = temp_194 * temp_194;
    // 0x0006D8: 0x3868103F00070F18 Fmul
    temp_201 = temp_187 * 0.5;
    // 0x0006E8: 0x4C68101801470A0F Fmul
    temp_202 = temp_175 * fp_c6.data[5].x;
    // 0x0006F0: 0x59A10F0001E7071D Ffma
    temp_203 = 0.0 - temp_172;
    temp_204 = fma(temp_196, temp_203, temp_172);
    // 0x0006F8: 0x3848000000871912 Shl
    temp_205 = int(temp_192) << 8;
    // 0x000708: 0x5C68100000971815 Fmul
    temp_206 = temp_201 * temp_195;
    // 0x000710: 0xEF94008200471212 Ldc
    temp_207 = temp_205 + 0x2004;
    temp_208 = uint(temp_207) >> 2;
    temp_209 = temp_208 >> 2;
    temp_210 = int(temp_208) & 3;
    temp_211 = fp_c8.data[int(temp_209)][temp_210];
    // 0x000718: 0x4C58301407B70509 Fadd
    temp_212 = 0.0 - fp_c5.data[30].w;
    temp_213 = temp_106 + temp_212;
    // 0x000728: 0x1E23EA2F98370F1B Fmul32i
    temp_214 = temp_202 * 0.318309873;
    // 0x000730: 0x5C58100001D7071D Fadd
    temp_215 = temp_196 + temp_204;
    // 0x000738: 0x5C68100001570808 Fmul
    temp_216 = temp_200 * temp_206;
    // 0x000748: 0x4C68101808A71415 Fmul
    temp_217 = fp_c6.data[33].w * fp_c6.data[34].z;
    // 0x000750: 0x5C68100000870A14 Fmul
    temp_218 = temp_175 * temp_216;
    // 0x000758: 0x4C68101801670A0A Fmul
    temp_219 = temp_175 * fp_c6.data[5].z;
    // 0x000768: 0x51A0049407B72008 Ffma
    temp_220 = fma(temp_11, temp_213, fp_c5.data[30].w);
    // 0x000770: 0x51A0059407B72009 Ffma
    temp_221 = fma(temp_11, temp_182, fp_c5.data[30].w);
    // 0x000778: 0x1E23EA2F98370A1F Fmul32i
    temp_222 = temp_219 * 0.318309873;
    // 0x000788: 0x59A10D0001A7070A Ffma
    temp_223 = 0.0 - temp_164;
    temp_224 = fma(temp_196, temp_223, temp_164);
    // 0x000790: 0x59A10D0001A7080B Ffma
    temp_225 = 0.0 - temp_164;
    temp_226 = fma(temp_220, temp_225, temp_164);
    // 0x000798: 0x59A10D0001A7091A Ffma
    temp_227 = 0.0 - temp_164;
    temp_228 = fma(temp_221, temp_227, temp_164);
    // 0x0007A8: 0x59A10F0001E70817 Ffma
    temp_229 = 0.0 - temp_172;
    temp_230 = fma(temp_220, temp_229, temp_172);
    // 0x0007B0: 0x59A10F0001E7091E Ffma
    temp_231 = 0.0 - temp_172;
    temp_232 = fma(temp_221, temp_231, temp_172);
    // 0x0007B8: 0x5C58100000A7070F Fadd
    temp_233 = temp_196 + temp_224;
    // 0x0007C8: 0x5C58100000B7081C Fadd
    temp_234 = temp_220 + temp_226;
    // 0x0007D0: 0x5C58100001A7091A Fadd
    temp_235 = temp_221 + temp_228;
    // 0x0007D8: 0x5C58100001770817 Fadd
    temp_236 = temp_220 + temp_230;
    // 0x0007E8: 0x5C58100001E7091E Fadd
    temp_237 = temp_221 + temp_232;
    // 0x0007F0: 0x5B6603800FF71207 Isetp
    temp_238 = floatBitsToUint(temp_211) <= 0u;
    // 0x0007F8: 0xF0F0000034170000 Depbar
    // 0x000808: 0x51A00A980147220A Ffma
    temp_239 = fma(temp_86, temp_217, fp_c6.data[5].x);
    // 0x000810: 0x51A00A980157230B Ffma
    temp_240 = fma(temp_87, temp_217, fp_c6.data[5].y);
    // 0x000818: 0x51A00A9801672415 Ffma
    temp_241 = fma(temp_88, temp_217, fp_c6.data[5].z);
    // 0x000828: 0x51A5098400172121 Ffma
    temp_242 = 0.0 - temp_90;
    temp_243 = fma(temp_12, temp_242, fp_c1.data[0].y);
    temp_244 = clamp(temp_243, 0.0, 1.0);
    // 0x000830: 0x4C68101403271111 Fmul
    temp_245 = temp_94 * fp_c5.data[12].z;
    // 0x000838: 0x5C9807800FF70013 Mov
    // 0x000848: 0x5C68100000F70A2D Fmul
    temp_246 = temp_239 * temp_233;
    // 0x000850: 0x5C68100001C70B2E Fmul
    temp_247 = temp_240 * temp_234;
    // 0x000858: 0x5C68100001A71515 Fmul
    temp_248 = temp_241 * temp_235;
    // 0x000868: 0x59A10D8001B71D0A Ffma
    temp_249 = 0.0 - temp_214;
    temp_250 = fma(temp_215, temp_249, temp_214);
    // 0x000870: 0x59A10F8001F71E0F Ffma
    temp_251 = 0.0 - temp_222;
    temp_252 = fma(temp_237, temp_251, temp_222);
    // 0x000878: 0x4C68101403070C1E Fmul
    temp_253 = temp_92 * fp_c5.data[12].x;
    // 0x000888: 0x5C68100002D7142D Fmul
    temp_254 = temp_218 * temp_246;
    // 0x000890: 0x5C68100002E7142E Fmul
    temp_255 = temp_218 * temp_247;
    // 0x000898: 0x5C68100001571430 Fmul
    temp_256 = temp_218 * temp_248;
    // 0x0008A8: 0x5C68100000371614 Fmul
    temp_257 = temp_69 * temp_168;
    // 0x0008B0: 0x49A210980AD72115 Ffma
    temp_258 = 0.0 - temp_244;
    temp_259 = fma(temp_244, fp_c6.data[43].y, temp_258);
    // 0x0008B8: 0x4C68101403170D1F Fmul
    temp_260 = temp_93 * fp_c5.data[12].y;
    // 0x0008C8: 0x5C6810000037001A Fmul
    temp_261 = temp_70 * temp_168;
    // 0x0008D0: 0x59A114000287170B Ffma
    temp_262 = 0.0 - temp_199;
    temp_263 = fma(temp_236, temp_262, temp_199);
    // 0x0008D8: 0x5C9807800FF7001C Mov
    // 0x0008E8: 0x32A219C00007141B Ffma
    temp_264 = 0.0 - temp_125;
    temp_265 = fma(temp_257, 2.0, temp_264);
    // 0x0008F0: 0x49A210980AC72114 Ffma
    temp_266 = 0.0 - temp_244;
    temp_267 = fma(temp_244, fp_c6.data[43].x, temp_266);
    // 0x0008F8: 0x49A210980AE72121 Ffma
    temp_268 = 0.0 - temp_244;
    temp_269 = fma(temp_244, fp_c6.data[43].z, temp_268);
    // 0x000908: 0x3858103F8007150C Fadd
    temp_270 = temp_259 + 1.0;
    // 0x000910: 0x5C9807800FF7001D Mov
    // 0x000918: 0x5C9807800FF70017 Mov
    // 0x000928: 0x32A21AC000071A1A Ffma
    temp_271 = 0.0 - temp_123;
    temp_272 = fma(temp_261, 2.0, temp_271);
    // 0x000930: 0x3858103F8007140D Fadd
    temp_273 = temp_267 + 1.0;
    // 0x000938: 0x3858103F8007212C Fadd
    temp_274 = temp_269 + 1.0;
    // 0x000948: 0x4C68101808471E1E Fmul
    temp_275 = temp_253 * fp_c6.data[33].x;
    // 0x000950: 0x4C68101808471F1F Fmul
    temp_276 = temp_260 * fp_c6.data[33].x;
    // 0x000958: 0x4C68101808471121 Fmul
    temp_277 = temp_245 * fp_c6.data[33].x;
    // 0x000968: 0x59A4060000C70529 Ffma
    temp_278 = fma(temp_106, temp_270, temp_270);
    temp_279 = clamp(temp_278, 0.0, 1.0);
    // 0x000970: 0x59A4068000D70428 Ffma
    temp_280 = fma(temp_104, temp_273, temp_273);
    temp_281 = clamp(temp_280, 0.0, 1.0);
    // 0x000978: 0x59A4160002C7062C Ffma
    temp_282 = fma(temp_107, temp_274, temp_274);
    temp_283 = clamp(temp_282, 0.0, 1.0);
    // 0x000988: 0x1E23E22F98372D2D Fmul32i
    temp_284 = temp_254 * 0.159154937;
    // 0x000990: 0x1E23E22F98372E2E Fmul32i
    temp_285 = temp_255 * 0.159154937;
    // 0x000998: 0x1E23E22F98373030 Fmul32i
    temp_286 = temp_256 * 0.159154937;
    // 0x0009A8: 0xF0F800000000000F Sync
    temp_287 = 0.0;
    temp_288 = 0.0;
    temp_289 = 0.0;
    temp_290 = 0.0;
    temp_291 = 0.0;
    temp_292 = 0.0;
    temp_293 = 0.0;
    temp_294 = 0.0;
    temp_295 = 0.0;
    temp_296 = 0.0;
    temp_297 = 0.0;
    temp_298 = 0.0;
    if (!temp_238)
    {
        // 0x0009B0: 0x5C9807800FF7003B Mov
        // 0x0009B8: 0xE043FF8D0107FF3A Ipa
        temp_299 = in_attr5.x;
        // 0x0009C8: 0xE043FF8D4107FF36 Ipa
        temp_300 = in_attr5.y;
        // 0x0009D0: 0xE043FF8D8107FF39 Ipa
        temp_301 = in_attr5.z;
        temp_302 = 0;
        do
        {
            // 0x0009D8: 0x5C18020003B71915 Iscadd
            temp_304 = int(temp_192) << 4;
            temp_305 = temp_304 + temp_302;
            // 0x0009E8: 0xE290000052000000 Ssy
            // 0x0009F0: 0x3848000000471515 Shl
            temp_306 = temp_305 << 4;
            // 0x0009F8: 0xEF94008200071515 Ldc
            temp_307 = temp_306 + 0x2000;
            temp_308 = uint(temp_307) >> 2;
            temp_309 = temp_308 >> 2;
            temp_310 = int(temp_308) & 3;
            temp_311 = fp_c8.data[int(temp_309)][temp_310];
            // 0x000A08: 0x3848000000671538 Shl
            temp_312 = floatBitsToInt(temp_311) << 6;
            // 0x000A10: 0xEF9500800107380C Ldc
            temp_313 = temp_312 + 16;
            temp_314 = uint(temp_313) >> 2;
            temp_315 = temp_314 >> 2;
            temp_316 = int(temp_314) & 3;
            temp_317 = fp_c8.data[int(temp_315)][temp_316];
            temp_318 = int(temp_314) + 1;
            temp_319 = uint(temp_318) >> 2;
            temp_320 = temp_318 & 3;
            temp_321 = fp_c8.data[int(temp_319)][temp_320];
            // 0x000A18: 0xEF95008001873810 Ldc
            temp_322 = temp_312 + 24;
            temp_323 = uint(temp_322) >> 2;
            temp_324 = temp_323 >> 2;
            temp_325 = int(temp_323) & 3;
            temp_326 = fp_c8.data[int(temp_324)][temp_325];
            temp_327 = int(temp_323) + 1;
            temp_328 = uint(temp_327) >> 2;
            temp_329 = temp_327 & 3;
            temp_330 = fp_c8.data[int(temp_328)][temp_329];
            // 0x000A28: 0xEF95008002073814 Ldc
            temp_331 = temp_312 + 32;
            temp_332 = uint(temp_331) >> 2;
            temp_333 = temp_332 >> 2;
            temp_334 = int(temp_332) & 3;
            temp_335 = fp_c8.data[int(temp_333)][temp_334];
            temp_336 = int(temp_332) + 1;
            temp_337 = uint(temp_336) >> 2;
            temp_338 = temp_336 & 3;
            temp_339 = fp_c8.data[int(temp_337)][temp_338];
            // 0x000A30: 0x5C58300003A70C3C Fadd
            temp_340 = 0.0 - temp_299;
            temp_341 = temp_317 + temp_340;
            // 0x000A38: 0x5C58300003670D3D Fadd
            temp_342 = 0.0 - temp_300;
            temp_343 = temp_321 + temp_342;
            // 0x000A48: 0x5C58300003971010 Fadd
            temp_344 = 0.0 - temp_301;
            temp_345 = temp_326 + temp_344;
            // 0x000A50: 0x5C68100003C73C3E Fmul
            temp_346 = temp_341 * temp_341;
            // 0x000A58: 0x59A108000107110C Ffma
            temp_347 = 0.0 - temp_345;
            temp_348 = fma(temp_330, temp_347, temp_345);
            // 0x000A68: 0x59A01F0003D73D3E Ffma
            temp_349 = fma(temp_343, temp_343, temp_346);
            // 0x000A70: 0x59A01F0000C70C11 Ffma
            temp_350 = fma(temp_348, temp_348, temp_349);
            // 0x000A78: 0x508000000057113F Mufu
            temp_351 = inversesqrt(temp_350);
            // 0x000A88: 0x5C68100003F73C0D Fmul
            temp_352 = temp_341 * temp_351;
            // 0x000A90: 0x5C68100003F70C0C Fmul
            temp_353 = temp_348 * temp_351;
            // 0x000A98: 0x5C68100003F73D3F Fmul
            temp_354 = temp_343 * temp_351;
            // 0x000AA8: 0x5C69100001470D14 Fmul
            temp_355 = 0.0 - temp_335;
            temp_356 = temp_352 * temp_355;
            // 0x000AB0: 0xEF9400800287380D Ldc
            temp_357 = temp_312 + 40;
            temp_358 = uint(temp_357) >> 2;
            temp_359 = temp_358 >> 2;
            temp_360 = int(temp_358) & 3;
            temp_361 = fp_c8.data[int(temp_359)][temp_360];
            // 0x000AB8: 0x59A10A0001573F3F Ffma
            temp_362 = 0.0 - temp_339;
            temp_363 = fma(temp_354, temp_362, temp_356);
            // 0x000AC8: 0x010404000007F014 Mov32i
            // 0x000AD0: 0x59A11F8000D70C3F Ffma
            temp_364 = 0.0 - temp_361;
            temp_365 = fma(temp_353, temp_364, temp_363);
            // 0x000AD8: 0xEF9500800387380C Ldc
            temp_366 = temp_312 + 56;
            temp_367 = uint(temp_366) >> 2;
            temp_368 = temp_367 >> 2;
            temp_369 = int(temp_367) & 3;
            temp_370 = fp_c8.data[int(temp_368)][temp_369];
            temp_371 = int(temp_367) + 1;
            temp_372 = uint(temp_371) >> 2;
            temp_373 = temp_371 & 3;
            temp_374 = fp_c8.data[int(temp_372)][temp_373];
            // 0x000AE8: 0x59A4068000C73F0D Ffma
            temp_375 = fma(temp_365, temp_370, temp_374);
            temp_376 = clamp(temp_375, 0.0, 1.0);
            // 0x000AF0: 0x508000000087113F Mufu
            temp_377 = sqrt(temp_350);
            // 0x000AF8: 0x5C68100000D70D15 Fmul
            temp_378 = temp_376 * temp_376;
            // 0x000B08: 0x33A00A4000070D0C Ffma
            temp_379 = fma(temp_376, -2.0, 3.0);
            // 0x000B10: 0x5C68100000C71515 Fmul
            temp_380 = temp_378 * temp_379;
            // 0x000B18: 0xEF9500800307380C Ldc
            temp_381 = temp_312 + 48;
            temp_382 = uint(temp_381) >> 2;
            temp_383 = temp_382 >> 2;
            temp_384 = int(temp_382) & 3;
            temp_385 = fp_c8.data[int(temp_383)][temp_384];
            temp_386 = int(temp_382) + 1;
            temp_387 = uint(temp_386) >> 2;
            temp_388 = temp_386 & 3;
            temp_389 = fp_c8.data[int(temp_387)][temp_388];
            // 0x000B28: 0x59A4068003F70C3F Ffma
            temp_390 = fma(temp_385, temp_377, temp_389);
            temp_391 = clamp(temp_390, 0.0, 1.0);
            // 0x000B30: 0x33A00A4000073F14 Ffma
            temp_392 = fma(temp_391, -2.0, 3.0);
            // 0x000B38: 0x5C68100003F73F3F Fmul
            temp_393 = temp_391 * temp_391;
            // 0x000B48: 0x5C68100003F71414 Fmul
            temp_394 = temp_392 * temp_393;
            // 0x000B50: 0x5C68100001471515 Fmul
            temp_395 = temp_380 * temp_394;
            // 0x000B58: 0x39585042F0071014 Fadd
            temp_396 = abs(temp_345);
            temp_397 = temp_396 + -120.0;
            // 0x000B68: 0x1EABD4CCCCD71414 Fmul32i
            temp_398 = temp_397 * -0.0500000007;
            temp_399 = clamp(temp_398, 0.0, 1.0);
            // 0x000B70: 0x5C6810000157143F Fmul
            temp_400 = temp_399 * temp_395;
            // 0x000B78: 0x36247F9000171414 Xmad
            temp_401 = floatBitsToUint(temp_399) >> 16;
            temp_402 = int(temp_401) << 16;
            // 0x000B88: 0x5BB383800FF73F07 Fsetp
            temp_403 = temp_400 <= 0.0;
            // 0x000B90: 0x7A05083C0F00FF14 Hadd2
            temp_404 = uint(temp_402);
            temp_405 = temp_287;
            temp_406 = temp_288;
            temp_407 = temp_289;
            temp_408 = temp_290;
            temp_409 = temp_291;
            temp_410 = temp_292;
            if (temp_403)
            {
                temp_411 = unpackHalf2x16(uint(temp_402)).y;
                temp_412 = packHalf2x16(vec2(1.0, temp_411));
                temp_404 = temp_412;
            }
            // 0x000B98: 0x5D2103902FF71407 Hsetp2
            temp_413 = unpackHalf2x16(temp_404).x;
            temp_414 = temp_413 == 0.0;
            // 0x000BA8: 0xF0F800000008000F Sync
            if (temp_414)
            {
                // 0x000BB0: 0x5080000000470C0C Mufu
                temp_415 = 1.0 / temp_385;
                // 0x000BB8: 0x5C69100000C70D0D Fmul
                temp_416 = 0.0 - temp_415;
                temp_417 = temp_389 * temp_416;
                // 0x000BC8: 0x5C60138000D71010 Fmnmx
                temp_418 = min(temp_345, temp_417);
                // 0x000BD0: 0x5C61178001070D10 Fmnmx
                temp_419 = 0.0 - temp_417;
                temp_420 = max(temp_419, temp_418);
                // 0x000BD8: 0x59A01F000107103E Ffma
                temp_421 = fma(temp_420, temp_420, temp_349);
                // 0x000BE8: 0x5080000000573E11 Mufu
                temp_422 = inversesqrt(temp_421);
                // 0x000BF0: 0x5080000000873E3E Mufu
                temp_423 = sqrt(temp_421);
                // 0x000BF8: 0x5C68100001173C0D Fmul
                temp_424 = temp_341 * temp_422;
                // 0x000C08: 0x5C68100001171014 Fmul
                temp_425 = temp_420 * temp_422;
                // 0x000C10: 0x5C68100001173D3D Fmul
                temp_426 = temp_343 * temp_422;
                // 0x000C18: 0x5C58100000D73410 Fadd
                temp_427 = temp_121 + temp_424;
                // 0x000C28: 0x5C5810000147330C Fadd
                temp_428 = temp_125 + temp_425;
                // 0x000C30: 0x5C58100003D7353C Fadd
                temp_429 = temp_123 + temp_426;
                // 0x000C38: 0x5C68100001071011 Fmul
                temp_430 = temp_427 * temp_427;
                // 0x000C48: 0x59A0088003C73C11 Ffma
                temp_431 = fma(temp_429, temp_429, temp_430);
                // 0x000C50: 0x59A0088000C70C15 Ffma
                temp_432 = fma(temp_428, temp_428, temp_431);
                // 0x000C58: 0x5080000000571511 Mufu
                temp_433 = inversesqrt(temp_432);
                // 0x000C68: 0xEF94008000873815 Ldc
                temp_434 = temp_312 + 8;
                temp_435 = uint(temp_434) >> 2;
                temp_436 = temp_435 >> 2;
                temp_437 = int(temp_435) & 3;
                temp_438 = fp_c8.data[int(temp_436)][temp_437];
                // 0x000C70: 0x5C68100001171010 Fmul
                temp_439 = temp_427 * temp_433;
                // 0x000C78: 0x5C68100001173C3C Fmul
                temp_440 = temp_429 * temp_433;
                // 0x000C88: 0x5C68100001170C11 Fmul
                temp_441 = temp_428 * temp_433;
                // 0x000C90: 0x5C68100001070D0C Fmul
                temp_442 = temp_424 * temp_439;
                // 0x000C98: 0x5C68100000D70E0D Fmul
                temp_443 = temp_71 * temp_424;
                // 0x000CA8: 0x5C68100001070E10 Fmul
                temp_444 = temp_71 * temp_439;
                // 0x000CB0: 0x59A0060003C73D0C Ffma
                temp_445 = fma(temp_426, temp_440, temp_442);
                // 0x000CB8: 0x59A0068003D7000D Ffma
                temp_446 = fma(temp_70, temp_426, temp_443);
                // 0x000CC8: 0xEF94008002C7383D Ldc
                temp_447 = temp_312 + 44;
                temp_448 = uint(temp_447) >> 2;
                temp_449 = temp_448 >> 2;
                temp_450 = int(temp_448) & 3;
                temp_451 = fp_c8.data[int(temp_449)][temp_450];
                // 0x000CD0: 0x59A0080003C7003C Ffma
                temp_452 = fma(temp_70, temp_440, temp_444);
                // 0x000CD8: 0x59A4060001171410 Ffma
                temp_453 = fma(temp_425, temp_441, temp_445);
                temp_454 = clamp(temp_453, 0.0, 1.0);
                // 0x000CE8: 0x59A0068001471614 Ffma
                temp_455 = fma(temp_69, temp_425, temp_446);
                // 0x000CF0: 0xEF9500800007380C Ldc
                temp_456 = uint(temp_312) >> 2;
                temp_457 = temp_456 >> 2;
                temp_458 = int(temp_456) & 3;
                temp_459 = fp_c8.data[int(temp_457)][temp_458];
                temp_460 = int(temp_456) + 1;
                temp_461 = uint(temp_460) >> 2;
                temp_462 = temp_460 & 3;
                temp_463 = fp_c8.data[int(temp_461)][temp_462];
                // 0x000CF8: 0x59A41E0001171611 Ffma
                temp_464 = fma(temp_69, temp_441, temp_452);
                temp_465 = clamp(temp_464, 0.0, 1.0);
                // 0x000D08: 0x5C68100000C73F0C Fmul
                temp_466 = temp_400 * temp_459;
                // 0x000D10: 0x5C68100000D73F0D Fmul
                temp_467 = temp_400 * temp_463;
                // 0x000D18: 0x5C68100001573F3F Fmul
                temp_468 = temp_400 * temp_438;
                // 0x000D28: 0x5080000000473D15 Mufu
                temp_469 = 1.0 / temp_451;
                // 0x000D30: 0x51A01F0400471515 Ffma
                temp_470 = fma(temp_469, temp_423, fp_c1.data[1].x);
                // 0x000D38: 0x5080000000471515 Mufu
                temp_471 = 1.0 / temp_470;
                // 0x000D48: 0x1E23FB333337153C Fmul32i
                temp_472 = temp_471 * 1.39999998;
                // 0x000D50: 0x5C68100003C73C15 Fmul
                temp_473 = temp_472 * temp_472;
                // 0x000D58: 0x59A2088001172A3C Ffma
                temp_474 = 0.0 - temp_465;
                temp_475 = fma(temp_115, temp_465, temp_474);
                // 0x000D68: 0x51A01E040017113D Ffma
                temp_476 = fma(temp_465, temp_475, fp_c1.data[0].y);
                // 0x000D70: 0x59A10A8001571411 Ffma
                temp_477 = 0.0 - temp_473;
                temp_478 = fma(temp_455, temp_477, temp_473);
                // 0x000D78: 0x5080000000473D3E Mufu
                temp_479 = 1.0 / temp_476;
                // 0x000D88: 0x5C5C30000FF7143C Fadd
                temp_480 = temp_455 + -0.0;
                temp_481 = clamp(temp_480, 0.0, 1.0);
                // 0x000D90: 0x5C5C100001171414 Fadd
                temp_482 = temp_455 + temp_478;
                temp_483 = clamp(temp_482, 0.0, 1.0);
                // 0x000D98: 0x59A11E0003C73111 Ffma
                temp_484 = 0.0 - temp_481;
                temp_485 = fma(temp_114, temp_484, temp_481);
                // 0x000DA8: 0x5C5810000117313D Fadd
                temp_486 = temp_114 + temp_485;
                // 0x000DB0: 0x5C68100003E72B11 Fmul
                temp_487 = temp_112 * temp_479;
                // 0x000DB8: 0x5080000000473D15 Mufu
                temp_488 = 1.0 / temp_486;
                // 0x000DC8: 0x5C68100001171111 Fmul
                temp_489 = temp_487 * temp_487;
                // 0x000DD0: 0x5C6810000157183E Fmul
                temp_490 = temp_201 * temp_488;
                // 0x000DD8: 0x01040DF760C7F015 Mov32i
                // 0x000DE8: 0x5C68100003E71111 Fmul
                temp_491 = temp_489 * temp_490;
                // 0x000DF0: 0x49A20A8400271015 Ffma
                temp_492 = fma(temp_454, fp_c1.data[0].z, -6.98316002);
                // 0x000DF8: 0x5C68100001173C11 Fmul
                temp_493 = temp_481 * temp_491;
                // 0x000E08: 0x5C68100001571015 Fmul
                temp_494 = temp_454 * temp_492;
                // 0x000E10: 0x5C90008001570038 Rro
                // 0x000E18: 0x508000000027383E Mufu
                temp_495 = exp2(temp_494);
                // 0x000E28: 0x59A11F0003E70710 Ffma
                temp_496 = 0.0 - temp_495;
                temp_497 = fma(temp_196, temp_496, temp_495);
                // 0x000E30: 0x5C58100001070715 Fadd
                temp_498 = temp_196 + temp_497;
                // 0x000E38: 0x5C68100001570C10 Fmul
                temp_499 = temp_466 * temp_498;
                // 0x000E48: 0x59A11F0003E70815 Ffma
                temp_500 = 0.0 - temp_495;
                temp_501 = fma(temp_220, temp_500, temp_495);
                // 0x000E50: 0x59A11F0003E7093E Ffma
                temp_502 = 0.0 - temp_495;
                temp_503 = fma(temp_221, temp_502, temp_495);
                // 0x000E58: 0x5C68100001470C0C Fmul
                temp_504 = temp_466 * temp_483;
                // 0x000E68: 0x5C68100001171010 Fmul
                temp_505 = temp_499 * temp_493;
                // 0x000E70: 0x5C58100003E7093E Fadd
                temp_506 = temp_221 + temp_503;
                // 0x000E78: 0x49A0178400670C2F Ffma
                temp_507 = fma(temp_504, fp_c1.data[1].z, temp_287);
                // 0x000E88: 0x49A0190400571032 Ffma
                temp_508 = fma(temp_505, fp_c1.data[1].y, temp_288);
                // 0x000E90: 0x5C58100001570810 Fadd
                temp_509 = temp_220 + temp_501;
                // 0x000E98: 0x5C68100003E73F3E Fmul
                temp_510 = temp_468 * temp_506;
                // 0x000EA8: 0x5C68100001070D10 Fmul
                temp_511 = temp_467 * temp_509;
                // 0x000EB0: 0x5C68100001470D0D Fmul
                temp_512 = temp_467 * temp_483;
                // 0x000EB8: 0x5C68100001473F14 Fmul
                temp_513 = temp_468 * temp_483;
                // 0x000EC8: 0x5C68100001173E3E Fmul
                temp_514 = temp_510 * temp_493;
                // 0x000ED0: 0x5C68100001171010 Fmul
                temp_515 = temp_511 * temp_493;
                // 0x000ED8: 0x49A00E0400670D1C Ffma
                temp_516 = fma(temp_512, fp_c1.data[1].z, temp_289);
                // 0x000EE8: 0x49A00E840067141D Ffma
                temp_517 = fma(temp_513, fp_c1.data[1].z, temp_290);
                // 0x000EF0: 0x49A00B8400573E17 Ffma
                temp_518 = fma(temp_514, fp_c1.data[1].y, temp_291);
                // 0x000EF8: 0x49A0098400571013 Ffma
                temp_519 = fma(temp_515, fp_c1.data[1].y, temp_292);
                // 0x000F08: 0xF0F800000007000F Sync
                temp_405 = temp_507;
                temp_406 = temp_508;
                temp_407 = temp_516;
                temp_408 = temp_517;
                temp_409 = temp_518;
                temp_410 = temp_519;
            }
            // 0x000F10: 0x1C00000000173B3B Iadd32i
            temp_520 = temp_302 + 1;
            // 0x000F18: 0x5B6C038001273B07 Isetp
            temp_303 = uint(temp_520) >= floatBitsToUint(temp_211);
            // 0x000F28: 0xE2400FFFAA88000F Bra
            temp_302 = temp_520;
            temp_287 = temp_405;
            temp_288 = temp_406;
            temp_289 = temp_407;
            temp_290 = temp_408;
            temp_291 = temp_409;
            temp_292 = temp_410;
            temp_293 = temp_408;
            temp_294 = temp_410;
            temp_295 = temp_409;
            temp_296 = temp_407;
            temp_297 = temp_405;
            temp_298 = temp_406;
        }
        while (!temp_303);
        // 0x000F30: 0xF0F800000007000F Sync
    }
    // 0x000F38: 0x5C62578000070E0C Fmnmx
    temp_521 = abs(temp_71);
    temp_522 = abs(temp_70);
    temp_523 = max(temp_521, temp_522);
    // 0x000F48: 0xE003FF87CFF7FF31 Ipa
    // 0x000F50: 0x38681040E0070234 Fmul
    temp_524 = temp_109 * 7.0;
    // 0x000F58: 0x5C62578001A7370D Fmnmx
    temp_525 = abs(temp_198);
    temp_526 = abs(temp_272);
    temp_527 = max(temp_525, temp_526);
    // 0x000F68: 0x010000000017F018 Mov32i
    // 0x000F70: 0x386810408007022B Fmul
    temp_528 = temp_109 * 4.0;
    // 0x000F78: 0x5C60578000C7160C Fmnmx
    temp_529 = abs(temp_69);
    temp_530 = max(temp_529, temp_523);
    // 0x000F88: 0x5C60578000D71B0D Fmnmx
    temp_531 = abs(temp_265);
    temp_532 = max(temp_531, temp_527);
    // 0x000F90: 0x5080000000470C15 Mufu
    temp_533 = 1.0 / temp_530;
    // 0x000F98: 0x49A007980A171D0F Ffma
    temp_534 = fma(temp_293, fp_c6.data[40].y, temp_252);
    // 0x000FA8: 0x5080000000470D0D Mufu
    temp_535 = 1.0 / temp_532;
    // 0x000FB0: 0x5C69100001571616 Fmul
    temp_536 = 0.0 - temp_533;
    temp_537 = temp_69 * temp_536;
    // 0x000FB8: 0x5C68100001570E14 Fmul
    temp_538 = temp_71 * temp_533;
    // 0x000FC8: 0x5080000000473131 Mufu
    // 0x000FD0: 0x5C68100001570015 Fmul
    temp_539 = temp_70 * temp_533;
    // 0x000FD8: 0x5C68100000D73719 Fmul
    temp_540 = temp_198 * temp_535;
    // 0x000FE8: 0x5C68100000D71A1A Fmul
    temp_541 = temp_272 * temp_535;
    // 0x000FF0: 0x5C69100000D71B1B Fmul
    temp_542 = 0.0 - temp_535;
    temp_543 = temp_265 * temp_542;
    // 0x000FF8: 0xC0BA0163EFF7140C Tex
    temp_544 = textureLod(fp_t_tcb_16, vec3(temp_538, temp_539, temp_537), 0.0).xyz;
    temp_545 = temp_544.x;
    temp_546 = temp_544.y;
    temp_547 = temp_544.z;
    // 0x001008: 0x5C9807800167002A Mov
    // 0x001010: 0xC1BA0143F3471818 Tex
    temp_548 = textureLod(fp_t_tcb_14, vec4(temp_540, temp_541, temp_543, float(1)), temp_524).xyz;
    temp_549 = temp_548.x;
    temp_550 = temp_548.y;
    temp_551 = temp_548.z;
    // 0x001018: 0x4C98079C02070037 Mov
    // 0x001028: 0xE043FF910317FF10 Ipa
    temp_552 = in_attr9.x;
    // 0x001030: 0x3859103F8007031D Fadd
    temp_553 = 0.0 - temp_168;
    temp_554 = temp_553 + 1.0;
    // 0x001038: 0xE043FF914317FF11 Ipa
    temp_555 = in_attr9.y;
    // 0x001048: 0x3859103F80070202 Fadd
    temp_556 = 0.0 - temp_109;
    temp_557 = temp_556 + 1.0;
    // 0x001050: 0xE043FF918317FF12 Ipa
    temp_558 = in_attr9.z;
    // 0x001058: 0xD9A2018332A7142A Texs
    temp_559 = textureLod(fp_t_tcb_18, vec3(temp_538, temp_539, temp_537), temp_528).xyz;
    temp_560 = temp_559.x;
    temp_561 = temp_559.y;
    temp_562 = temp_559.z;
    // 0x001068: 0xDEBA0000C3771010 TexB
    temp_563 = texture(fp_t_cb7_20, vec3(temp_552, temp_555, temp_558)).x;
    // 0x001070: 0x49A017180A17132E Ffma
    temp_564 = fma(temp_294, fp_c6.data[40].y, temp_285);
    // 0x001078: 0x0103F0000007F016 Mov32i
    // 0x001088: 0x5C68100000270213 Fmul
    temp_565 = temp_557 * temp_557;
    // 0x001090: 0x010410676C97F014 Mov32i
    // 0x001098: 0x1E23E468DB970315 Fmul32i
    temp_566 = temp_168 * 0.193900004;
    // 0x0010A8: 0x49A018180A171730 Ffma
    temp_567 = fma(temp_295, fp_c6.data[40].y, temp_286);
    // 0x0010B0: 0x0104066978D7F017 Mov32i
    // 0x0010B8: 0x32A00B3F00070002 Ffma
    temp_568 = fma(temp_70, 0.5, 0.5);
    // 0x0010C8: 0x5C68100001371300 Fmul
    temp_569 = temp_565 * temp_565;
    // 0x0010D0: 0x5080000000371D11 Mufu
    temp_570 = log2(temp_554);
    // 0x0010D8: 0x4C68101809071D12 Fmul
    temp_571 = temp_554 * fp_c6.data[36].x;
    // 0x0010E8: 0x49A00A0400B70314 Ffma
    temp_572 = fma(temp_168, fp_c1.data[2].w, 8.40400028);
    // 0x0010F0: 0x5080400000371212 Mufu
    temp_573 = abs(temp_571);
    temp_574 = log2(temp_573);
    // 0x0010F8: 0x0103E2CD9E87F013 Mov32i
    // 0x001108: 0x49A005980A171C0B Ffma
    temp_575 = fma(temp_296, fp_c6.data[40].y, temp_263);
    // 0x001110: 0x4C9807980B47001C Mov
    // 0x001118: 0x49A00A8400770015 Ffma
    temp_576 = fma(temp_569, fp_c1.data[1].w, temp_566);
    // 0x001128: 0x4C9807980087001B Mov
    // 0x001130: 0x51A00A0400C70316 Ffma
    temp_577 = fma(temp_168, temp_572, fp_c1.data[3].x);
    // 0x001138: 0x49A2098400E70013 Ffma
    temp_578 = fma(temp_569, fp_c1.data[3].z, -0.168799996);
    // 0x001148: 0x4C9807980867001D Mov
    // 0x001150: 0xF0F0000034370000 Depbar
    // 0x001158: 0x51A20E180B472626 Ffma
    temp_579 = 0.0 - fp_c6.data[45].x;
    temp_580 = fma(temp_96, fp_c6.data[45].x, temp_579);
    // 0x001168: 0x4C68101808971111 Fmul
    temp_581 = temp_570 * fp_c6.data[34].y;
    // 0x001170: 0x51A20E180B472727 Ffma
    temp_582 = 0.0 - fp_c6.data[45].x;
    temp_583 = fma(temp_97, fp_c6.data[45].x, temp_582);
    // 0x001178: 0x51A20E180B470101 Ffma
    temp_584 = 0.0 - fp_c6.data[45].x;
    temp_585 = fma(temp_98, fp_c6.data[45].x, temp_584);
    // 0x001188: 0x4C68101809171212 Fmul
    temp_586 = temp_574 * fp_c6.data[36].y;
    // 0x001190: 0x088BF05D63971515 Fadd32i
    temp_587 = temp_576 + -0.522800028;
    // 0x001198: 0x4C9807980957001C Mov
    // 0x0011A8: 0x51A00B0400D70316 Ffma
    temp_588 = fma(temp_168, temp_577, fp_c1.data[3].y);
    // 0x0011B0: 0x49A005180A172F0A Ffma
    temp_589 = fma(temp_297, fp_c6.data[40].y, temp_250);
    // 0x0011B8: 0x49A016980A17322D Ffma
    temp_590 = fma(temp_298, fp_c6.data[40].y, temp_284);
    // 0x0011C8: 0x5C90008001270014 Rro
    // 0x0011D0: 0x49A20B8400870012 Ffma
    temp_591 = fma(temp_569, fp_c1.data[2].x, -3.60299993);
    // 0x0011D8: 0x5084000000271414 Mufu
    temp_592 = exp2(temp_586);
    temp_593 = clamp(temp_592, 0.0, 1.0);
    // 0x0011E8: 0x5C68100001370017 Fmul
    temp_594 = temp_569 * temp_578;
    // 0x0011F0: 0x5C68100001570315 Fmul
    temp_595 = temp_168 * temp_587;
    // 0x0011F8: 0x4C58101408171C03 Fadd
    temp_596 = fp_c6.data[37].y + fp_c5.data[32].y;
    // 0x001208: 0x51A0090400970013 Ffma
    temp_597 = fma(temp_569, temp_591, fp_c1.data[2].y);
    // 0x001210: 0x5C90008001170012 Rro
    // 0x001218: 0x4C98079800970011 Mov
    // 0x001228: 0x5084000000271212 Mufu
    temp_598 = exp2(temp_581);
    temp_599 = clamp(temp_598, 0.0, 1.0);
    // 0x001230: 0x5C60138001771617 Fmnmx
    temp_600 = min(temp_588, temp_594);
    // 0x001238: 0x59A00A8001370016 Ffma
    temp_601 = fma(temp_569, temp_597, temp_595);
    // 0x001248: 0xE04BFF904317FF00 Ipa
    temp_602 = in_attr8.y;
    temp_603 = clamp(temp_602, 0.0, 1.0);
    // 0x001250: 0x4C98079800A70013 Mov
    // 0x001258: 0x5C68100001470315 Fmul
    temp_604 = temp_596 * temp_593;
    // 0x001268: 0x4C59101800471B03 Fadd
    temp_605 = 0.0 - fp_c6.data[2].x;
    temp_606 = temp_605 + fp_c6.data[1].x;
    // 0x001270: 0x4C59101800571111 Fadd
    temp_607 = 0.0 - fp_c6.data[2].y;
    temp_608 = temp_607 + fp_c6.data[1].y;
    // 0x001278: 0x386C10424807081B Fmul
    temp_609 = temp_220 * 50.0;
    temp_610 = clamp(temp_609, 0.0, 1.0);
    // 0x001288: 0x5C5C30000FF7171C Fadd
    temp_611 = temp_600 + -0.0;
    temp_612 = clamp(temp_611, 0.0, 1.0);
    // 0x001290: 0x4C59101800671313 Fadd
    temp_613 = 0.0 - fp_c6.data[2].z;
    temp_614 = temp_613 + fp_c6.data[1].z;
    // 0x001298: 0x4C5C100400A71616 Fadd
    temp_615 = temp_601 + fp_c1.data[2].z;
    temp_616 = clamp(temp_615, 0.0, 1.0);
    // 0x0012A8: 0x51A0011800870303 Ffma
    temp_617 = fma(temp_606, temp_568, fp_c6.data[2].x);
    // 0x0012B0: 0x4C68101808871214 Fmul
    temp_618 = temp_599 * fp_c6.data[34].x;
    // 0x0012B8: 0x51A0011800971112 Ffma
    temp_619 = fma(temp_608, temp_568, fp_c6.data[2].y);
    // 0x0012C8: 0x4C68101808D71517 Fmul
    temp_620 = temp_604 * fp_c6.data[35].y;
    // 0x0012D0: 0x51A0011800A71313 Ffma
    temp_621 = fma(temp_614, temp_568, fp_c6.data[2].z);
    // 0x0012D8: 0x4C68101808C71502 Fmul
    temp_622 = temp_604 * fp_c6.data[35].x;
    // 0x0012E8: 0x4C68101808E71515 Fmul
    temp_623 = temp_604 * fp_c6.data[35].z;
    // 0x0012F0: 0x51A00E9808671411 Ffma
    temp_624 = fma(temp_618, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x0012F8: 0x5C68100001C71B32 Fmul
    temp_625 = temp_610 * temp_612;
    // 0x001308: 0x5C58300001C7161C Fadd
    temp_626 = 0.0 - temp_612;
    temp_627 = temp_616 + temp_626;
    // 0x001310: 0x49A10B9408271716 Ffma
    temp_628 = 0.0 - fp_c5.data[32].z;
    temp_629 = fma(temp_620, temp_628, temp_620);
    // 0x001318: 0x49A1011408270214 Ffma
    temp_630 = 0.0 - fp_c5.data[32].z;
    temp_631 = fma(temp_622, temp_630, temp_622);
    // 0x001328: 0x49A0181408271530 Ffma
    temp_632 = fma(temp_623, fp_c5.data[32].z, temp_567);
    // 0x001330: 0x49A10A9408271515 Ffma
    temp_633 = 0.0 - fp_c5.data[32].z;
    temp_634 = fma(temp_623, temp_633, temp_623);
    // 0x001338: 0x49A016940827022D Ffma
    temp_635 = fma(temp_622, fp_c5.data[32].z, temp_590);
    // 0x001348: 0x59A0190001C70707 Ffma
    temp_636 = fma(temp_196, temp_627, temp_625);
    // 0x001350: 0x5C58100001670B16 Fadd
    temp_637 = temp_575 + temp_629;
    // 0x001358: 0x5C58100001470A14 Fadd
    temp_638 = temp_589 + temp_631;
    // 0x001368: 0xE043FF900317FF0A Ipa
    temp_639 = in_attr8.x;
    // 0x001370: 0x49A017140827172E Ffma
    temp_640 = fma(temp_620, fp_c5.data[32].z, temp_564);
    // 0x001378: 0xE043FF8C8317FF31 Ipa
    temp_641 = in_attr4.z;
    // 0x001388: 0x5C58100001570F0F Fadd
    temp_642 = temp_534 + temp_634;
    // 0x001390: 0x59A0190001C70808 Ffma
    temp_643 = fma(temp_220, temp_627, temp_625);
    // 0x001398: 0x59A0190001C70909 Ffma
    temp_644 = fma(temp_221, temp_627, temp_625);
    // 0x0013A8: 0x010404000007F002 Mov32i
    // 0x0013B0: 0x33A0014000070002 Ffma
    temp_645 = fma(temp_603, -2.0, 3.0);
    // 0x0013B8: 0x5C68100000070000 Fmul
    temp_646 = temp_603 * temp_603;
    // 0x0013C8: 0x5C68100000070200 Fmul
    temp_647 = temp_645 * temp_646;
    // 0x0013D0: 0x4C98079802970002 Mov
    // 0x0013D8: 0x4C68101803770000 Fmul
    temp_648 = temp_647 * fp_c6.data[13].w;
    // 0x0013E8: 0x51A0011802972702 Ffma
    temp_649 = fma(temp_583, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0013F0: 0xF0F0000034270000 Depbar
    // 0x0013F8: 0x49A0060400670303 Ffma
    temp_650 = fma(temp_617, fp_c1.data[1].z, temp_545);
    // 0x001408: 0x49A0068400671212 Ffma
    temp_651 = fma(temp_619, fp_c1.data[1].z, temp_546);
    // 0x001410: 0x4C6810180877250C Fmul
    temp_652 = temp_89 * fp_c6.data[33].w;
    // 0x001418: 0x49A007040067130E Ffma
    temp_653 = fma(temp_621, fp_c1.data[1].z, temp_547);
    // 0x001428: 0x59A2018001172222 Ffma
    temp_654 = 0.0 - temp_650;
    temp_655 = fma(temp_86, temp_624, temp_654);
    // 0x001430: 0x59A2090001172323 Ffma
    temp_656 = 0.0 - temp_651;
    temp_657 = fma(temp_87, temp_624, temp_656);
    // 0x001438: 0x59A2070001172411 Ffma
    temp_658 = 0.0 - temp_653;
    temp_659 = fma(temp_88, temp_624, temp_658);
    // 0x001448: 0x59A0018000C72222 Ffma
    temp_660 = fma(temp_655, temp_652, temp_650);
    // 0x001450: 0x59A0090000C72323 Ffma
    temp_661 = fma(temp_657, temp_652, temp_651);
    // 0x001458: 0xF0F0000034170000 Depbar
    // 0x001468: 0x49A0151808571818 Ffma
    temp_662 = fma(temp_549, fp_c6.data[33].y, temp_560);
    // 0x001470: 0x59A0070000C71111 Ffma
    temp_663 = fma(temp_659, temp_652, temp_653);
    // 0x001478: 0x49A0159808571919 Ffma
    temp_664 = fma(temp_550, fp_c6.data[33].y, temp_561);
    // 0x001488: 0x49A0199808571A1A Ffma
    temp_665 = fma(temp_551, fp_c6.data[33].y, temp_562);
    // 0x001490: 0x5C58100001472222 Fadd
    temp_666 = temp_660 + temp_638;
    // 0x001498: 0x5C58100001672316 Fadd
    temp_667 = temp_661 + temp_637;
    // 0x0014A8: 0x59A0168001870707 Ffma
    temp_668 = fma(temp_636, temp_662, temp_635);
    // 0x0014B0: 0x5C58100000F7110F Fadd
    temp_669 = temp_663 + temp_642;
    // 0x0014B8: 0x59A0170001970808 Ffma
    temp_670 = fma(temp_643, temp_664, temp_640);
    // 0x0014C8: 0x59A0180001A70909 Ffma
    temp_671 = fma(temp_644, temp_665, temp_632);
    // 0x0014D0: 0x59A1110002272022 Ffma
    temp_672 = 0.0 - temp_666;
    temp_673 = fma(temp_11, temp_672, temp_666);
    // 0x0014D8: 0x59A10B0001672016 Ffma
    temp_674 = 0.0 - temp_667;
    temp_675 = fma(temp_11, temp_674, temp_667);
    // 0x0014E8: 0x4C98079802870003 Mov
    // 0x0014F0: 0x59A1078000F7200F Ffma
    temp_676 = 0.0 - temp_669;
    temp_677 = fma(temp_11, temp_676, temp_669);
    // 0x0014F8: 0x59A0038002270407 Ffma
    temp_678 = fma(temp_104, temp_673, temp_668);
    // 0x001508: 0x59A0040001670508 Ffma
    temp_679 = fma(temp_106, temp_675, temp_670);
    // 0x001510: 0x51A0019802872603 Ffma
    temp_680 = fma(temp_580, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001518: 0x59A0048000F70609 Ffma
    temp_681 = fma(temp_107, temp_677, temp_671);
    // 0x001528: 0x4C98079802A70004 Mov
    // 0x001530: 0x5C68100000772828 Fmul
    temp_682 = temp_281 * temp_678;
    // 0x001538: 0x5C68100000872929 Fmul
    temp_683 = temp_279 * temp_679;
    // 0x001548: 0x5C68100000972C2C Fmul
    temp_684 = temp_283 * temp_681;
    // 0x001550: 0x51A0021802A70104 Ffma
    temp_685 = fma(temp_585, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001558: 0x49A505180BC7100A Ffma
    temp_686 = 0.0 - fp_c6.data[47].x;
    temp_687 = fma(temp_563, temp_686, temp_639);
    temp_688 = clamp(temp_687, 0.0, 1.0);
    // 0x001568: 0x49A0141406C71E1E Ffma
    temp_689 = fma(temp_275, fp_c5.data[27].x, temp_682);
    // 0x001570: 0x5080000000370A0A Mufu
    temp_690 = log2(temp_688);
    // 0x001578: 0x49A0149406C71F1F Ffma
    temp_691 = fma(temp_276, fp_c5.data[27].x, temp_683);
    // 0x001588: 0x49A0161406C72121 Ffma
    temp_692 = fma(temp_277, fp_c5.data[27].x, temp_684);
    // 0x001590: 0x5C58300000371E05 Fadd
    temp_693 = 0.0 - temp_680;
    temp_694 = temp_689 + temp_693;
    // 0x001598: 0x5C58300000271F01 Fadd
    temp_695 = 0.0 - temp_649;
    temp_696 = temp_691 + temp_695;
    // 0x0015A8: 0x49A001980BF70506 Ffma
    temp_697 = fma(temp_694, fp_c6.data[47].w, temp_680);
    // 0x0015B0: 0x5C58300000472105 Fadd
    temp_698 = 0.0 - temp_685;
    temp_699 = temp_692 + temp_698;
    // 0x0015B8: 0x4C68101803170A07 Fmul
    temp_700 = temp_690 * fp_c6.data[12].y;
    // 0x0015C8: 0x49A001180BF70101 Ffma
    temp_701 = fma(temp_696, fp_c6.data[47].w, temp_649);
    // 0x0015D0: 0x5C60178000670306 Fmnmx
    temp_702 = max(temp_680, temp_697);
    // 0x0015D8: 0x49A002180BF70505 Ffma
    temp_703 = fma(temp_699, fp_c6.data[47].w, temp_685);
    // 0x0015E8: 0x5C90008000770007 Rro
    // 0x0015F0: 0x49A2001803470003 Ffma
    temp_704 = 0.0 - temp_648;
    temp_705 = fma(temp_648, fp_c6.data[13].x, temp_704);
    // 0x0015F8: 0x5080000000270707 Mufu
    temp_706 = exp2(temp_700);
    // 0x001608: 0x5C60178000170201 Fmnmx
    temp_707 = max(temp_649, temp_701);
    // 0x001610: 0x49A2001803570002 Ffma
    temp_708 = 0.0 - temp_648;
    temp_709 = fma(temp_648, fp_c6.data[13].y, temp_708);
    // 0x001618: 0x5C60178000570405 Fmnmx
    temp_710 = max(temp_685, temp_703);
    // 0x001628: 0x49A2001803670000 Ffma
    temp_711 = 0.0 - temp_648;
    temp_712 = fma(temp_648, fp_c6.data[13].z, temp_711);
    // 0x001630: 0x59A0030000370604 Ffma
    temp_713 = fma(temp_702, temp_705, temp_702);
    // 0x001638: 0x5C9807800FF70006 Mov
    // 0x001648: 0x59A0008000270101 Ffma
    temp_714 = fma(temp_707, temp_709, temp_707);
    // 0x001650: 0x59A0028000070502 Ffma
    temp_715 = fma(temp_710, temp_712, temp_710);
    // 0x001658: 0x0103E8000007F005 Mov32i
    // 0x001668: 0x5C59100000471E00 Fadd
    temp_716 = 0.0 - temp_689;
    temp_717 = temp_716 + temp_713;
    // 0x001670: 0x4C68101802B70703 Fmul
    temp_718 = temp_706 * fp_c6.data[10].w;
    // 0x001678: 0x5C59100000171F01 Fadd
    temp_719 = 0.0 - temp_691;
    temp_720 = temp_719 + temp_714;
    // 0x001688: 0x4C58100C03873104 Fadd
    temp_721 = temp_641 + fp_c3.data[14].x;
    // 0x001690: 0x5C59100000272102 Fadd
    temp_722 = 0.0 - temp_692;
    temp_723 = temp_722 + temp_715;
    // 0x001698: 0x0103F8000007F007 Mov32i
    // 0x0016A8: 0x59A00F0000370000 Ffma
    temp_724 = fma(temp_717, temp_718, temp_689);
    // 0x0016B0: 0x59A00F8000370101 Ffma
    temp_725 = fma(temp_720, temp_718, temp_691);
    // 0x0016B8: 0x49A37F8C03C70404 Ffma
    temp_726 = 0.0 - fp_c3.data[15].x;
    temp_727 = fma(temp_721, temp_726, -0.0);
    // 0x0016C8: 0x59A0108000370202 Ffma
    temp_728 = fma(temp_723, temp_718, temp_692);
    // 0x0016D0: 0x0103F8000007F003 Mov32i
    // 0x0016D8: 0xE30000000007000F Exit
    out_attr0.x = temp_724;
    out_attr0.y = temp_725;
    out_attr0.z = temp_728;
    out_attr0.w = 1.0;
    out_attr1.x = temp_727;
    out_attr1.y = 0.25;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
