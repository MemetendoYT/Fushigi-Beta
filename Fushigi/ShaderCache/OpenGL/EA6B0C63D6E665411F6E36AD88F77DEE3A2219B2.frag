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

uint local_memory[16];
layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_1E;
layout (binding = 3) uniform sampler2D fp_t_tcb_36;
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
    precise vec4 temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise vec3 temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise vec3 temp_23;
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
    bool temp_81;
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
    uint temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    int temp_109;
    precise float temp_110;
    int temp_111;
    uint temp_112;
    uint temp_113;
    int temp_114;
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
    bool temp_185;
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
    int temp_299;
    bool temp_300;
    int temp_301;
    int temp_302;
    int temp_303;
    int temp_304;
    int temp_305;
    uint temp_306;
    uint temp_307;
    int temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    int temp_313;
    int temp_314;
    uint temp_315;
    uint temp_316;
    int temp_317;
    precise float temp_318;
    int temp_319;
    uint temp_320;
    int temp_321;
    precise float temp_322;
    int temp_323;
    uint temp_324;
    uint temp_325;
    int temp_326;
    precise float temp_327;
    int temp_328;
    uint temp_329;
    int temp_330;
    precise float temp_331;
    int temp_332;
    uint temp_333;
    uint temp_334;
    int temp_335;
    precise float temp_336;
    int temp_337;
    uint temp_338;
    int temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    int temp_343;
    uint temp_344;
    uint temp_345;
    int temp_346;
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
    int temp_377;
    uint temp_378;
    uint temp_379;
    int temp_380;
    precise float temp_381;
    int temp_382;
    uint temp_383;
    int temp_384;
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
    uint temp_401;
    int temp_402;
    precise float temp_403;
    bool temp_404;
    uint temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    uint temp_413;
    precise float temp_414;
    bool temp_415;
    precise float temp_416;
    int temp_417;
    uint temp_418;
    uint temp_419;
    int temp_420;
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
    uint temp_452;
    uint temp_453;
    int temp_454;
    precise float temp_455;
    int temp_456;
    uint temp_457;
    int temp_458;
    precise float temp_459;
    precise float temp_460;
    int temp_461;
    uint temp_462;
    uint temp_463;
    int temp_464;
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
    precise vec3 temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise float temp_555;
    precise float temp_556;
    precise float temp_557;
    precise float temp_558;
    precise float temp_559;
    precise vec3 temp_560;
    precise float temp_561;
    precise float temp_562;
    precise float temp_563;
    precise vec3 temp_564;
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
    // 0x000008: 0x0103F8000007F00E Mov32i
    // 0x000010: 0xE003FF87CFF7FF0C Ipa
    // 0x000018: 0xE003FF870FF7FF04 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000028: 0xE003FF874FF7FF05 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0x5080000000470C0C Mufu
    // 0x000038: 0x4C68100C04A70404 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000048: 0x4C68100C04B70505 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000050: 0xE043FF8E00C7FF08 Ipa
    temp_8 = in_attr6.x;
    // 0x000058: 0xE043FF8E40C7FF0F Ipa
    temp_9 = in_attr6.y;
    // 0x000068: 0xD830026FF0F70802 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000070: 0xD8300241A0F70820 Texs
    temp_13 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyzw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    temp_17 = temp_13.w;
    // 0x000078: 0xD86201EFF0E70409 Texs
    temp_18 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000088: 0xD8240360A0F7081C Texs
    temp_19 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x000090: 0xD82202000057041E Texs
    temp_23 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x000098: 0xE043FF8A00C7FF01 Ipa
    temp_27 = in_attr2.x;
    // 0x0000A8: 0xE043FF8A40C7FF06 Ipa
    temp_28 = in_attr2.y;
    // 0x0000B0: 0xE043FF8900C7FF0B Ipa
    temp_29 = in_attr1.x;
    // 0x0000B8: 0xE043FF8800C7FF11 Ipa
    temp_30 = in_attr0.x;
    // 0x0000C8: 0xE043FF8A80C7FF07 Ipa
    temp_31 = in_attr2.z;
    // 0x0000D0: 0xE043FF8940C7FF0D Ipa
    temp_32 = in_attr1.y;
    // 0x0000D8: 0xE043FF8840C7FF12 Ipa
    temp_33 = in_attr0.y;
    // 0x0000E8: 0xE043FF8880C7FF13 Ipa
    temp_34 = in_attr0.z;
    // 0x0000F0: 0xE043FF8B00C7FF31 Ipa
    temp_35 = in_attr3.x;
    // 0x0000F8: 0xE043FF8B40C7FF30 Ipa
    temp_36 = in_attr3.y;
    // 0x000108: 0xE043FF8B80C7FF2F Ipa
    temp_37 = in_attr3.z;
    // 0x000110: 0xE043FF8980C7FF0E Ipa
    temp_38 = in_attr1.z;
    // 0x000118: 0x5C68100000170108 Fmul
    temp_39 = temp_27 * temp_27;
    // 0x000128: 0x5C68100000B70B0F Fmul
    temp_40 = temp_29 * temp_29;
    // 0x000130: 0x5C68100001171110 Fmul
    temp_41 = temp_30 * temp_30;
    // 0x000138: 0x59A0040000670608 Ffma
    temp_42 = fma(temp_28, temp_28, temp_39);
    // 0x000148: 0x59A0078000D70D0F Ffma
    temp_43 = fma(temp_32, temp_32, temp_40);
    // 0x000150: 0x59A0080001271210 Ffma
    temp_44 = fma(temp_33, temp_33, temp_41);
    // 0x000158: 0x5C68100003173116 Fmul
    temp_45 = temp_35 * temp_35;
    // 0x000168: 0x59A0040000770708 Ffma
    temp_46 = fma(temp_31, temp_31, temp_42);
    // 0x000170: 0x5080000000570808 Mufu
    temp_47 = inversesqrt(temp_46);
    // 0x000178: 0x59A0078000E70E0F Ffma
    temp_48 = fma(temp_38, temp_38, temp_43);
    // 0x000188: 0x59A0080001371315 Ffma
    temp_49 = fma(temp_34, temp_34, temp_44);
    // 0x000190: 0x5080000000570F14 Mufu
    temp_50 = inversesqrt(temp_48);
    // 0x000198: 0x59A00B0003073016 Ffma
    temp_51 = fma(temp_36, temp_36, temp_45);
    // 0x0001A8: 0x5080000000571518 Mufu
    temp_52 = inversesqrt(temp_49);
    // 0x0001B0: 0x59A00B0002F72F16 Ffma
    temp_53 = fma(temp_37, temp_37, temp_51);
    // 0x0001B8: 0x386810418007040F Fmul
    temp_54 = temp_6 * 16.0;
    // 0x0001C8: 0x5080000000571616 Mufu
    temp_55 = inversesqrt(temp_53);
    // 0x0001D0: 0x5C68100000870101 Fmul
    temp_56 = temp_27 * temp_47;
    // 0x0001D8: 0x5CA8148000F70A0F F2f
    temp_57 = floor(temp_54);
    // 0x0001E8: 0x5C68100000870606 Fmul
    temp_58 = temp_28 * temp_47;
    // 0x0001F0: 0x5C68100000870710 Fmul
    temp_59 = temp_31 * temp_47;
    // 0x0001F8: 0x5C68100001470E07 Fmul
    temp_60 = temp_38 * temp_50;
    // 0x000208: 0x5C68100001871212 Fmul
    temp_61 = temp_33 * temp_52;
    // 0x000210: 0x5C6810000187130E Fmul
    temp_62 = temp_34 * temp_52;
    // 0x000218: 0x5C68100001871118 Fmul
    temp_63 = temp_30 * temp_52;
    // 0x000228: 0x3868104110070511 Fmul
    temp_64 = temp_7 * 9.0;
    // 0x000230: 0x5C68100001470B0B Fmul
    temp_65 = temp_29 * temp_50;
    // 0x000238: 0x5CA8148001170A11 F2f
    temp_66 = floor(temp_64);
    // 0x000248: 0x5C68100001470D0D Fmul
    temp_67 = temp_32 * temp_50;
    // 0x000250: 0x5C69100001673131 Fmul
    temp_68 = 0.0 - temp_55;
    temp_69 = temp_35 * temp_68;
    // 0x000258: 0x5C69100001673030 Fmul
    temp_70 = 0.0 - temp_55;
    temp_71 = temp_36 * temp_70;
    // 0x000268: 0x5C69100001672F2F Fmul
    temp_72 = 0.0 - temp_55;
    temp_73 = temp_37 * temp_72;
    // 0x000270: 0x32A007C18007112D Ffma
    temp_74 = fma(temp_66, 16.0, temp_57);
    // 0x000278: 0xF0F0000034370000 Depbar
    // 0x000288: 0x5C68100000370308 Fmul
    temp_75 = temp_12 * temp_12;
    // 0x000290: 0x5C68100000370101 Fmul
    temp_76 = temp_56 * temp_12;
    // 0x000298: 0x5C68100000370604 Fmul
    temp_77 = temp_58 * temp_12;
    // 0x0002A8: 0x5C68100000371010 Fmul
    temp_78 = temp_59 * temp_12;
    // 0x0002B0: 0x4C58301805C73106 Fadd
    temp_79 = 0.0 - fp_c6.data[23].x;
    temp_80 = temp_69 + temp_79;
    // 0x0002B8: 0x4BB1839406071B07 Fsetp
    temp_81 = temp_17 < fp_c5.data[24].x;
    // 0x0002C8: 0x59A0040000270208 Ffma
    temp_82 = fma(temp_11, temp_11, temp_75);
    // 0x0002D0: 0x59A0008000B70201 Ffma
    temp_83 = fma(temp_11, temp_65, temp_76);
    // 0x0002D8: 0x59A0020000D70204 Ffma
    temp_84 = fma(temp_11, temp_67, temp_77);
    // 0x0002E8: 0x59A0080000770207 Ffma
    temp_85 = fma(temp_11, temp_60, temp_78);
    // 0x0002F0: 0x5C68100000670603 Fmul
    temp_86 = temp_80 * temp_80;
    // 0x0002F8: 0x385D103F80070808 Fadd
    temp_87 = 0.0 - temp_82;
    temp_88 = temp_87 + 1.0;
    temp_89 = clamp(temp_88, 0.0, 1.0);
    // 0x000308: 0x5080000000870805 Mufu
    temp_90 = sqrt(temp_89);
    // 0x000310: 0x59A0008000571801 Ffma
    temp_91 = fma(temp_63, temp_90, temp_83);
    // 0x000318: 0x59A0020000571204 Ffma
    temp_92 = fma(temp_61, temp_90, temp_84);
    // 0x000328: 0x59A0038000570E07 Ffma
    temp_93 = fma(temp_62, temp_90, temp_85);
    // 0x000330: 0x4C58301805D73005 Fadd
    temp_94 = 0.0 - fp_c6.data[23].y;
    temp_95 = temp_71 + temp_94;
    // 0x000338: 0x5C68100000170102 Fmul
    temp_96 = temp_91 * temp_91;
    // 0x000348: 0x59A0010000470402 Ffma
    temp_97 = fma(temp_92, temp_92, temp_96);
    // 0x000350: 0xE24000000688000F Bra
    if (temp_81)
    {
        // 0x000358: 0x5C9807800FF70000 Mov
        // 0x000368: 0xE33000000007000F Kil
        discard;
    }
    // 0x0003C8: 0x59A0010000770702 Ffma
    temp_98 = fma(temp_93, temp_93, temp_97);
    // 0x0003D0: 0x5CB0118002D70A2D F2i
    temp_99 = trunc(temp_74);
    temp_100 = max(temp_99, 0.0);
    temp_101 = uint(temp_100);
    // 0x0003D8: 0x4C58301805E72F08 Fadd
    temp_102 = 0.0 - fp_c6.data[23].z;
    temp_103 = temp_73 + temp_102;
    // 0x0003E8: 0xE2900000C4000000 Ssy
    // 0x0003F0: 0x59A0018000570503 Ffma
    temp_104 = fma(temp_95, temp_95, temp_86);
    // 0x0003F8: 0x5080000000570202 Mufu
    temp_105 = inversesqrt(temp_98);
    // 0x000408: 0x0103F0000007F02E Mov32i
    // 0x000410: 0x5C9807800FF70018 Mov
    // 0x000418: 0x59A001800087080B Ffma
    temp_106 = fma(temp_103, temp_103, temp_104);
    // 0x000428: 0xF0F0000034170000 Depbar
    // 0x000430: 0x32A0173F00071C2E Ffma
    temp_107 = fma(temp_20, 0.5, 0.5);
    // 0x000438: 0x5080000000570B0B Mufu
    temp_108 = inversesqrt(temp_106);
    // 0x000448: 0x3848000000872D2B Shl
    temp_109 = int(temp_101) << 8;
    // 0x000450: 0x5C6810000027010E Fmul
    temp_110 = temp_91 * temp_105;
    // 0x000458: 0xEF94008200472B2B Ldc
    temp_111 = temp_109 + 0x2004;
    temp_112 = uint(temp_111) >> 2;
    temp_113 = temp_112 >> 2;
    temp_114 = int(temp_112) & 3;
    temp_115 = fp_c8.data[int(temp_113)][temp_114];
    // 0x000468: 0x5C68100000270401 Fmul
    temp_116 = temp_92 * temp_105;
    // 0x000470: 0x5C68100000270712 Fmul
    temp_117 = temp_93 * temp_105;
    // 0x000478: 0x5C68120002E72E2E Fmul
    temp_118 = temp_107 * 0.5;
    temp_119 = temp_118 * temp_107;
    // 0x000488: 0x5C68100003170E03 Fmul
    temp_120 = temp_110 * temp_69;
    // 0x000490: 0x5C68100000B7060F Fmul
    temp_121 = temp_80 * temp_108;
    // 0x000498: 0x5C68100000B70506 Fmul
    temp_122 = temp_95 * temp_108;
    // 0x0004A8: 0x5C68100000B7080D Fmul
    temp_123 = temp_103 * temp_108;
    // 0x0004B0: 0x59A0018003070104 Ffma
    temp_124 = fma(temp_116, temp_71, temp_120);
    // 0x0004B8: 0x5C68100000F73107 Fmul
    temp_125 = temp_69 * temp_121;
    // 0x0004C8: 0x4C68101805C70E03 Fmul
    temp_126 = temp_110 * fp_c6.data[23].x;
    // 0x0004D0: 0x4C69101805C70F05 Fmul
    temp_127 = 0.0 - fp_c6.data[23].x;
    temp_128 = temp_121 * temp_127;
    // 0x0004D8: 0x5C68100000F70E0F Fmul
    temp_129 = temp_110 * temp_121;
    // 0x0004E8: 0x59A4020002F71202 Ffma
    temp_130 = fma(temp_117, temp_73, temp_124);
    temp_131 = clamp(temp_130, 0.0, 1.0);
    // 0x0004F0: 0x59A0038000673008 Ffma
    temp_132 = fma(temp_71, temp_122, temp_125);
    // 0x0004F8: 0x49A0019805D70107 Ffma
    temp_133 = fma(temp_116, fp_c6.data[23].y, temp_126);
    // 0x000508: 0x49A1029805D7060B Ffma
    temp_134 = 0.0 - fp_c6.data[23].y;
    temp_135 = fma(temp_122, temp_134, temp_128);
    // 0x000510: 0x59A0078000670110 Ffma
    temp_136 = fma(temp_116, temp_122, temp_129);
    // 0x000518: 0x01040DF760C7F005 Mov32i
    // 0x000528: 0x3859103F80070203 Fadd
    temp_137 = 0.0 - temp_131;
    temp_138 = temp_137 + 1.0;
    // 0x000530: 0x59A4040000D72F0F Ffma
    temp_139 = fma(temp_73, temp_123, temp_132);
    temp_140 = clamp(temp_139, 0.0, 1.0);
    // 0x000538: 0x51A40E0400171C04 Ffma
    temp_141 = fma(temp_20, temp_20, fp_c1.data[0].y);
    temp_142 = clamp(temp_141, 0.0, 1.0);
    // 0x000548: 0x49A4039805E71207 Ffma
    temp_143 = fma(temp_117, fp_c6.data[23].z, temp_133);
    temp_144 = clamp(temp_143, 0.0, 1.0);
    // 0x000550: 0x59A4080000D71211 Ffma
    temp_145 = fma(temp_117, temp_123, temp_136);
    temp_146 = clamp(temp_145, 0.0, 1.0);
    // 0x000558: 0x5080000000370708 Mufu
    temp_147 = log2(temp_144);
    // 0x000568: 0x4C68101406370303 Fmul
    temp_148 = temp_138 * fp_c5.data[24].w;
    // 0x000570: 0x49A2028400070F10 Ffma
    temp_149 = fma(temp_140, fp_c1.data[0].x, -6.98316002);
    // 0x000578: 0x5080400000370303 Mufu
    temp_150 = abs(temp_148);
    temp_151 = log2(temp_150);
    // 0x000588: 0x5C68100000470413 Fmul
    temp_152 = temp_142 * temp_142;
    // 0x000590: 0x49A5059805E70D06 Ffma
    temp_153 = 0.0 - fp_c6.data[23].z;
    temp_154 = fma(temp_123, temp_153, temp_135);
    temp_155 = clamp(temp_154, 0.0, 1.0);
    // 0x000598: 0x5C68100000270E2A Fmul
    temp_156 = temp_110 * temp_131;
    // 0x0005A8: 0x5C68100001070F10 Fmul
    temp_157 = temp_140 * temp_149;
    // 0x0005B0: 0x4C58301407B7200F Fadd
    temp_158 = 0.0 - fp_c5.data[30].w;
    temp_159 = temp_14 + temp_158;
    // 0x0005B8: 0x59A2088001371114 Ffma
    temp_160 = 0.0 - temp_146;
    temp_161 = fma(temp_146, temp_152, temp_160);
    // 0x0005C8: 0x4C69101805C70E13 Fmul
    temp_162 = 0.0 - fp_c6.data[23].x;
    temp_163 = temp_110 * temp_162;
    // 0x0005D0: 0x4C6810140667080B Fmul
    temp_164 = temp_147 * fp_c5.data[25].z;
    // 0x0005D8: 0x32A218C000072A2A Ffma
    temp_165 = 0.0 - temp_69;
    temp_166 = fma(temp_156, 2.0, temp_165);
    // 0x0005E8: 0x4C68101406470307 Fmul
    temp_167 = temp_151 * fp_c5.data[25].x;
    // 0x0005F0: 0x51A0079407B71D03 Ffma
    temp_168 = fma(temp_21, temp_159, fp_c5.data[30].w);
    // 0x0005F8: 0x1E23F99999A7080F Fmul32i
    temp_169 = temp_147 * 1.20000005;
    // 0x000608: 0x49A1099805D70113 Ffma
    temp_170 = 0.0 - fp_c6.data[23].y;
    temp_171 = fma(temp_116, temp_170, temp_163);
    // 0x000610: 0x51A00A0400271114 Ffma
    temp_172 = fma(temp_146, temp_161, fp_c1.data[0].z);
    // 0x000618: 0x5C90008001070008 Rro
    // 0x000628: 0x5080000000471416 Mufu
    temp_173 = 1.0 / temp_172;
    // 0x000630: 0x5C90008000B7000D Rro
    // 0x000638: 0x5080000000270808 Mufu
    temp_174 = exp2(temp_157);
    // 0x000648: 0x5C9000800077000B Rro
    // 0x000650: 0x5080000000270D0D Mufu
    temp_175 = exp2(temp_164);
    // 0x000658: 0x5C90008000F70017 Rro
    // 0x000668: 0x5084000000270B0B Mufu
    temp_176 = exp2(temp_167);
    temp_177 = clamp(temp_176, 0.0, 1.0);
    // 0x000670: 0x49A5099805E71207 Ffma
    temp_178 = 0.0 - fp_c6.data[23].z;
    temp_179 = fma(temp_117, temp_178, temp_171);
    temp_180 = clamp(temp_179, 0.0, 1.0);
    // 0x000678: 0x59A1010002E70211 Ffma
    temp_181 = 0.0 - temp_119;
    temp_182 = fma(temp_131, temp_181, temp_131);
    // 0x000688: 0x49A202840007060F Ffma
    temp_183 = fma(temp_155, fp_c1.data[0].x, -6.98316002);
    // 0x000690: 0x5080000000271705 Mufu
    temp_184 = exp2(temp_169);
    // 0x000698: 0x5B6603800FF72B07 Isetp
    temp_185 = floatBitsToUint(temp_115) <= 0u;
    // 0x0006A8: 0x59A1038002E70710 Ffma
    temp_186 = 0.0 - temp_119;
    temp_187 = fma(temp_180, temp_186, temp_180);
    // 0x0006B0: 0x5C58100001172E13 Fadd
    temp_188 = temp_119 + temp_182;
    // 0x0006B8: 0x5C68100000F7060F Fmul
    temp_189 = temp_155 * temp_183;
    // 0x0006C8: 0x5080000000471313 Mufu
    temp_190 = 1.0 / temp_188;
    // 0x0006D0: 0x59A1040000370806 Ffma
    temp_191 = 0.0 - temp_168;
    temp_192 = fma(temp_174, temp_191, temp_174);
    // 0x0006D8: 0x5C68100001670411 Fmul
    temp_193 = temp_142 * temp_173;
    // 0x0006E8: 0x5C58100001072E15 Fadd
    temp_194 = temp_119 + temp_187;
    // 0x0006F0: 0x4C68101801470704 Fmul
    temp_195 = temp_180 * fp_c6.data[5].x;
    // 0x0006F8: 0x5080000000471515 Mufu
    temp_196 = 1.0 / temp_194;
    // 0x000708: 0x5C68100000D70B0D Fmul
    temp_197 = temp_177 * temp_175;
    // 0x000710: 0x3859103F00070505 Fadd
    temp_198 = 0.0 - temp_184;
    temp_199 = temp_198 + 0.5;
    // 0x000718: 0x5C5810000067030B Fadd
    temp_200 = temp_168 + temp_192;
    // 0x000728: 0x5C90008000F70010 Rro
    // 0x000730: 0x4C58301407B72106 Fadd
    temp_201 = 0.0 - fp_c5.data[30].w;
    temp_202 = temp_15 + temp_201;
    // 0x000738: 0x5080000000271010 Mufu
    temp_203 = exp2(temp_189);
    // 0x000748: 0x1E23EA2F9837040F Fmul32i
    temp_204 = temp_195 * 0.318309873;
    // 0x000750: 0x4C6C101406570504 Fmul
    temp_205 = temp_199 * fp_c5.data[25].y;
    temp_206 = clamp(temp_205, 0.0, 1.0);
    // 0x000758: 0x3868103F0007132C Fmul
    temp_207 = temp_190 * 0.5;
    // 0x000768: 0x4C68101406970B05 Fmul
    temp_208 = temp_200 * fp_c5.data[26].y;
    // 0x000770: 0x4C58301407B71A0B Fadd
    temp_209 = 0.0 - fp_c5.data[30].w;
    temp_210 = temp_16 + temp_209;
    // 0x000778: 0x5C68100001171111 Fmul
    temp_211 = temp_193 * temp_193;
    // 0x000788: 0x4C68101801670714 Fmul
    temp_212 = temp_180 * fp_c6.data[5].z;
    // 0x000790: 0x49A0021406770D0D Ffma
    temp_213 = fma(temp_197, fp_c5.data[25].w, temp_206);
    // 0x000798: 0x5C68100001572C13 Fmul
    temp_214 = temp_207 * temp_196;
    // 0x0007A8: 0x59A1078000F70504 Ffma
    temp_215 = 0.0 - temp_204;
    temp_216 = fma(temp_208, temp_215, temp_204);
    // 0x0007B0: 0x51A0031407B71D05 Ffma
    temp_217 = fma(temp_21, temp_202, fp_c5.data[30].w);
    // 0x0007B8: 0x51A0059407B71D06 Ffma
    temp_218 = fma(temp_21, temp_210, fp_c5.data[30].w);
    // 0x0007C8: 0x4C68101403170D37 Fmul
    temp_219 = temp_213 * fp_c5.data[12].y;
    // 0x0007D0: 0x5C68100001371116 Fmul
    temp_220 = temp_211 * temp_214;
    // 0x0007D8: 0x59A1080001070311 Ffma
    temp_221 = 0.0 - temp_203;
    temp_222 = fma(temp_168, temp_221, temp_203);
    // 0x0007E8: 0x59A108000107050F Ffma
    temp_223 = 0.0 - temp_203;
    temp_224 = fma(temp_217, temp_223, temp_203);
    // 0x0007F0: 0x59A104000057080B Ffma
    temp_225 = 0.0 - temp_217;
    temp_226 = fma(temp_174, temp_225, temp_174);
    // 0x0007F8: 0x59A1080001070610 Ffma
    temp_227 = 0.0 - temp_203;
    temp_228 = fma(temp_218, temp_227, temp_203);
    // 0x000808: 0x59A1040000670808 Ffma
    temp_229 = 0.0 - temp_218;
    temp_230 = fma(temp_174, temp_229, temp_174);
    // 0x000810: 0x4C68101801570713 Fmul
    temp_231 = temp_180 * fp_c6.data[5].y;
    // 0x000818: 0x5C58100001170311 Fadd
    temp_232 = temp_168 + temp_222;
    // 0x000828: 0x5C68100001670716 Fmul
    temp_233 = temp_180 * temp_220;
    // 0x000830: 0x5C58100000F7050F Fadd
    temp_234 = temp_217 + temp_224;
    // 0x000838: 0x5C58100001070610 Fadd
    temp_235 = temp_218 + temp_228;
    // 0x000848: 0x5C58100000870608 Fadd
    temp_236 = temp_218 + temp_230;
    // 0x000850: 0x1E23EA2F98371315 Fmul32i
    temp_237 = temp_231 * 0.318309873;
    // 0x000858: 0x1E23EA2F98371413 Fmul32i
    temp_238 = temp_212 * 0.318309873;
    // 0x000868: 0x4C68101406971111 Fmul
    temp_239 = temp_232 * fp_c5.data[26].y;
    // 0x000870: 0x4C68101406970F0F Fmul
    temp_240 = temp_234 * fp_c5.data[26].y;
    // 0x000878: 0x4C68101406971010 Fmul
    temp_241 = temp_235 * fp_c5.data[26].y;
    // 0x000888: 0x4C68101406970808 Fmul
    temp_242 = temp_236 * fp_c5.data[26].y;
    // 0x000890: 0x5C58100000B7050B Fadd
    temp_243 = temp_217 + temp_226;
    // 0x000898: 0x4C68101403270D29 Fmul
    temp_244 = temp_213 * fp_c5.data[12].z;
    // 0x0008A8: 0x4C68101801471111 Fmul
    temp_245 = temp_239 * fp_c6.data[5].x;
    // 0x0008B0: 0x4C68101801570F0F Fmul
    temp_246 = temp_240 * fp_c6.data[5].y;
    // 0x0008B8: 0x4C68101801671010 Fmul
    temp_247 = temp_241 * fp_c6.data[5].z;
    // 0x0008C8: 0x59A1098001370808 Ffma
    temp_248 = 0.0 - temp_238;
    temp_249 = fma(temp_242, temp_248, temp_238);
    // 0x0008D0: 0x51A5048400270A13 Ffma
    temp_250 = 0.0 - temp_18;
    temp_251 = fma(temp_22, temp_250, fp_c1.data[0].z);
    temp_252 = clamp(temp_251, 0.0, 1.0);
    // 0x0008D8: 0x4C68101406970B0B Fmul
    temp_253 = temp_243 * fp_c5.data[26].y;
    // 0x0008E8: 0x5C68100001671126 Fmul
    temp_254 = temp_245 * temp_233;
    // 0x0008F0: 0x5C68100001670F27 Fmul
    temp_255 = temp_246 * temp_233;
    // 0x0008F8: 0x5C68100001671028 Fmul
    temp_256 = temp_247 * temp_233;
    // 0x000908: 0x5C68100000270116 Fmul
    temp_257 = temp_116 * temp_131;
    // 0x000910: 0x49A209980AC71310 Ffma
    temp_258 = 0.0 - temp_252;
    temp_259 = fma(temp_252, fp_c6.data[43].x, temp_258);
    // 0x000918: 0x49A209980AD71311 Ffma
    temp_260 = 0.0 - temp_252;
    temp_261 = fma(temp_252, fp_c6.data[43].y, temp_260);
    // 0x000928: 0x49A209980AE71314 Ffma
    temp_262 = 0.0 - temp_252;
    temp_263 = fma(temp_252, fp_c6.data[43].z, temp_262);
    // 0x000930: 0x59A10A8001570B07 Ffma
    temp_264 = 0.0 - temp_237;
    temp_265 = fma(temp_253, temp_264, temp_237);
    // 0x000938: 0x5C9807800FF70009 Mov
    // 0x000948: 0x5C9807800FF7000A Mov
    // 0x000950: 0x3858103F80071019 Fadd
    temp_266 = temp_259 + 1.0;
    // 0x000958: 0x5C68100000271210 Fmul
    temp_267 = temp_117 * temp_131;
    // 0x000968: 0x3858103F80071124 Fadd
    temp_268 = temp_261 + 1.0;
    // 0x000970: 0x3858103F80071414 Fadd
    temp_269 = temp_263 + 1.0;
    // 0x000978: 0x5C9807800FF7000B Mov
    // 0x000988: 0x5C9807800FF7000F Mov
    // 0x000990: 0x5C9807800FF70013 Mov
    // 0x000998: 0x32A217C000071017 Ffma
    temp_270 = 0.0 - temp_73;
    temp_271 = fma(temp_267, 2.0, temp_270);
    // 0x0009A8: 0x4C68101403070D10 Fmul
    temp_272 = temp_213 * fp_c5.data[12].x;
    // 0x0009B0: 0x59A40C8001972019 Ffma
    temp_273 = fma(temp_14, temp_266, temp_266);
    temp_274 = clamp(temp_273, 0.0, 1.0);
    // 0x0009B8: 0x59A4120002472124 Ffma
    temp_275 = fma(temp_15, temp_268, temp_268);
    temp_276 = clamp(temp_275, 0.0, 1.0);
    // 0x0009C8: 0x59A40A0001471A25 Ffma
    temp_277 = fma(temp_16, temp_269, temp_269);
    temp_278 = clamp(temp_277, 0.0, 1.0);
    // 0x0009D0: 0x32A2184000071616 Ffma
    temp_279 = 0.0 - temp_71;
    temp_280 = fma(temp_257, 2.0, temp_279);
    // 0x0009D8: 0x1E23E22F98372626 Fmul32i
    temp_281 = temp_254 * 0.159154937;
    // 0x0009E8: 0x4C6810180147100D Fmul
    temp_282 = temp_272 * fp_c6.data[5].x;
    // 0x0009F0: 0x1E23E22F98372727 Fmul32i
    temp_283 = temp_255 * 0.159154937;
    // 0x0009F8: 0xEF5400000007FF0D Stl
    local_memory[0] = floatBitsToUint(temp_282);
    // 0x000A08: 0x1E23E22F98372828 Fmul32i
    temp_284 = temp_256 * 0.159154937;
    // 0x000A10: 0x4C68101801573737 Fmul
    temp_285 = temp_219 * fp_c6.data[5].y;
    // 0x000A18: 0x4C68101801672929 Fmul
    temp_286 = temp_244 * fp_c6.data[5].z;
    // 0x000A28: 0xF0F800000000000F Sync
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
    if (!temp_185)
    {
        // 0x000A30: 0x5C9807800FF70023 Mov
        temp_299 = 0;
        do
        {
            // 0x000A38: 0x5C18020002372D15 Iscadd
            temp_301 = int(temp_101) << 4;
            temp_302 = temp_301 + temp_299;
            // 0x000A48: 0xE003FF87CFF7FF32 Ipa
            // 0x000A50: 0x1C00000000172323 Iadd32i
            temp_303 = temp_299 + 1;
            // 0x000A58: 0xE003FF87CFF7FF34 Ipa
            // 0x000A68: 0x3848000000471515 Shl
            temp_304 = temp_302 << 4;
            // 0x000A70: 0xE003FF87CFF7FF33 Ipa
            // 0x000A78: 0x5B6C038002B7230F Isetp
            temp_300 = uint(temp_303) >= floatBitsToUint(temp_115);
            // 0x000A88: 0xE290000058800000 Ssy
            // 0x000A90: 0xEF94008200071515 Ldc
            temp_305 = temp_304 + 0x2000;
            temp_306 = uint(temp_305) >> 2;
            temp_307 = temp_306 >> 2;
            temp_308 = int(temp_306) & 3;
            temp_309 = fp_c8.data[int(temp_307)][temp_308];
            // 0x000A98: 0x5080000000473232 Mufu
            // 0x000AA8: 0x5080000000473434 Mufu
            // 0x000AB0: 0x5080000000473333 Mufu
            // 0x000AB8: 0xE043FF8D0327FF32 Ipa
            temp_310 = in_attr5.x;
            // 0x000AC8: 0xE043FF8D8347FF34 Ipa
            temp_311 = in_attr5.z;
            // 0x000AD0: 0xE043FF8D4337FF33 Ipa
            temp_312 = in_attr5.y;
            // 0x000AD8: 0x3848000000671522 Shl
            temp_313 = floatBitsToInt(temp_309) << 6;
            // 0x000AE8: 0xEF9500800107220C Ldc
            temp_314 = temp_313 + 16;
            temp_315 = uint(temp_314) >> 2;
            temp_316 = temp_315 >> 2;
            temp_317 = int(temp_315) & 3;
            temp_318 = fp_c8.data[int(temp_316)][temp_317];
            temp_319 = int(temp_315) + 1;
            temp_320 = uint(temp_319) >> 2;
            temp_321 = temp_319 & 3;
            temp_322 = fp_c8.data[int(temp_320)][temp_321];
            // 0x000AF0: 0xEF95008001872210 Ldc
            temp_323 = temp_313 + 24;
            temp_324 = uint(temp_323) >> 2;
            temp_325 = temp_324 >> 2;
            temp_326 = int(temp_324) & 3;
            temp_327 = fp_c8.data[int(temp_325)][temp_326];
            temp_328 = int(temp_324) + 1;
            temp_329 = uint(temp_328) >> 2;
            temp_330 = temp_328 & 3;
            temp_331 = fp_c8.data[int(temp_329)][temp_330];
            // 0x000AF8: 0xEF95008002072214 Ldc
            temp_332 = temp_313 + 32;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_333 >> 2;
            temp_335 = int(temp_333) & 3;
            temp_336 = fp_c8.data[int(temp_334)][temp_335];
            temp_337 = int(temp_333) + 1;
            temp_338 = uint(temp_337) >> 2;
            temp_339 = temp_337 & 3;
            temp_340 = fp_c8.data[int(temp_338)][temp_339];
            // 0x000B08: 0x5C58300003270C32 Fadd
            temp_341 = 0.0 - temp_310;
            temp_342 = temp_318 + temp_341;
            // 0x000B10: 0xEF9400800287220C Ldc
            temp_343 = temp_313 + 40;
            temp_344 = uint(temp_343) >> 2;
            temp_345 = temp_344 >> 2;
            temp_346 = int(temp_344) & 3;
            temp_347 = fp_c8.data[int(temp_345)][temp_346];
            // 0x000B18: 0x5C58300003370D33 Fadd
            temp_348 = 0.0 - temp_312;
            temp_349 = temp_322 + temp_348;
            // 0x000B28: 0x5C58300003471034 Fadd
            temp_350 = 0.0 - temp_311;
            temp_351 = temp_327 + temp_350;
            // 0x000B30: 0x5C68100003273235 Fmul
            temp_352 = temp_342 * temp_342;
            // 0x000B38: 0x59A11A0003471111 Ffma
            temp_353 = 0.0 - temp_351;
            temp_354 = fma(temp_331, temp_353, temp_351);
            // 0x000B48: 0x59A01A8003373335 Ffma
            temp_355 = fma(temp_349, temp_349, temp_352);
            // 0x000B50: 0x59A01A8001171136 Ffma
            temp_356 = fma(temp_354, temp_354, temp_355);
            // 0x000B58: 0x508000000057360D Mufu
            temp_357 = inversesqrt(temp_356);
            // 0x000B68: 0x5080000000873636 Mufu
            temp_358 = sqrt(temp_356);
            // 0x000B70: 0x5C68100000D73210 Fmul
            temp_359 = temp_342 * temp_357;
            // 0x000B78: 0x5C69100001471010 Fmul
            temp_360 = 0.0 - temp_336;
            temp_361 = temp_359 * temp_360;
            // 0x000B88: 0x5C68100000D73314 Fmul
            temp_362 = temp_349 * temp_357;
            // 0x000B90: 0x5C68100000D7110D Fmul
            temp_363 = temp_354 * temp_357;
            // 0x000B98: 0x59A1080001571414 Ffma
            temp_364 = 0.0 - temp_340;
            temp_365 = fma(temp_362, temp_364, temp_361);
            // 0x000BA8: 0xEF95008003872210 Ldc
            temp_366 = temp_313 + 56;
            temp_367 = uint(temp_366) >> 2;
            temp_368 = temp_367 >> 2;
            temp_369 = int(temp_367) & 3;
            temp_370 = fp_c8.data[int(temp_368)][temp_369];
            temp_371 = int(temp_367) + 1;
            temp_372 = uint(temp_371) >> 2;
            temp_373 = temp_371 & 3;
            temp_374 = fp_c8.data[int(temp_372)][temp_373];
            // 0x000BB0: 0x010404000007F015 Mov32i
            // 0x000BB8: 0x59A10A0000C70D14 Ffma
            temp_375 = 0.0 - temp_347;
            temp_376 = fma(temp_363, temp_375, temp_365);
            // 0x000BC8: 0xEF9500800307220C Ldc
            temp_377 = temp_313 + 48;
            temp_378 = uint(temp_377) >> 2;
            temp_379 = temp_378 >> 2;
            temp_380 = int(temp_378) & 3;
            temp_381 = fp_c8.data[int(temp_379)][temp_380];
            temp_382 = int(temp_378) + 1;
            temp_383 = uint(temp_382) >> 2;
            temp_384 = temp_382 & 3;
            temp_385 = fp_c8.data[int(temp_383)][temp_384];
            // 0x000BD0: 0x59A4088001071410 Ffma
            temp_386 = fma(temp_376, temp_370, temp_374);
            temp_387 = clamp(temp_386, 0.0, 1.0);
            // 0x000BD8: 0x59A4068003670C36 Ffma
            temp_388 = fma(temp_381, temp_358, temp_385);
            temp_389 = clamp(temp_388, 0.0, 1.0);
            // 0x000BE8: 0x33A00AC000073611 Ffma
            temp_390 = fma(temp_389, -2.0, 3.0);
            // 0x000BF0: 0x5C68100003673614 Fmul
            temp_391 = temp_389 * temp_389;
            // 0x000BF8: 0x33A00AC000071015 Ffma
            temp_392 = fma(temp_387, -2.0, 3.0);
            // 0x000C08: 0x5C68100001071010 Fmul
            temp_393 = temp_387 * temp_387;
            // 0x000C10: 0x5C68100001171411 Fmul
            temp_394 = temp_391 * temp_390;
            // 0x000C18: 0x39585042F0073414 Fadd
            temp_395 = abs(temp_351);
            temp_396 = temp_395 + -120.0;
            // 0x000C28: 0x5C68100001571010 Fmul
            temp_397 = temp_393 * temp_392;
            // 0x000C30: 0x1EABD4CCCCD71414 Fmul32i
            temp_398 = temp_396 * -0.0500000007;
            temp_399 = clamp(temp_398, 0.0, 1.0);
            // 0x000C38: 0x5C68100001171010 Fmul
            temp_400 = temp_397 * temp_394;
            // 0x000C48: 0x36247F9000171111 Xmad
            temp_401 = floatBitsToUint(temp_394) >> 16;
            temp_402 = int(temp_401) << 16;
            // 0x000C50: 0x5C68100001471010 Fmul
            temp_403 = temp_400 * temp_399;
            // 0x000C58: 0x5BB383800FF71007 Fsetp
            temp_404 = temp_403 <= 0.0;
            // 0x000C68: 0x7A05083C0F00FF11 Hadd2
            temp_299 = temp_303;
            temp_405 = uint(temp_402);
            temp_406 = temp_287;
            temp_407 = temp_288;
            temp_408 = temp_289;
            temp_409 = temp_290;
            temp_410 = temp_291;
            temp_411 = temp_292;
            if (temp_404)
            {
                temp_412 = unpackHalf2x16(uint(temp_402)).y;
                temp_413 = packHalf2x16(vec2(1.0, temp_412));
                temp_405 = temp_413;
            }
            // 0x000C70: 0x5D2103902FF71107 Hsetp2
            temp_414 = unpackHalf2x16(temp_405).x;
            temp_415 = temp_414 == 0.0;
            // 0x000C78: 0xF0F800000008000F Sync
            if (temp_415)
            {
                // 0x000C88: 0x5080000000470C0C Mufu
                temp_416 = 1.0 / temp_381;
                // 0x000C90: 0xEF94008002C72214 Ldc
                temp_417 = temp_313 + 44;
                temp_418 = uint(temp_417) >> 2;
                temp_419 = temp_418 >> 2;
                temp_420 = int(temp_418) & 3;
                temp_421 = fp_c8.data[int(temp_419)][temp_420];
                // 0x000C98: 0x5C69100000C70D0D Fmul
                temp_422 = 0.0 - temp_416;
                temp_423 = temp_385 * temp_422;
                // 0x000CA8: 0x5C60138000D73434 Fmnmx
                temp_424 = min(temp_351, temp_423);
                // 0x000CB0: 0x5C61178003470D11 Fmnmx
                temp_425 = 0.0 - temp_423;
                temp_426 = max(temp_425, temp_424);
                // 0x000CB8: 0x59A01A800117110D Ffma
                temp_427 = fma(temp_426, temp_426, temp_355);
                // 0x000CC8: 0x5080000000570D15 Mufu
                temp_428 = inversesqrt(temp_427);
                // 0x000CD0: 0x5C6810000157320C Fmul
                temp_429 = temp_342 * temp_428;
                // 0x000CD8: 0x5080000000471414 Mufu
                temp_430 = 1.0 / temp_421;
                // 0x000CE8: 0x5C68100001573334 Fmul
                temp_431 = temp_349 * temp_428;
                // 0x000CF0: 0x5C68100001571111 Fmul
                temp_432 = temp_426 * temp_428;
                // 0x000CF8: 0x5C58100000C73133 Fadd
                temp_433 = temp_69 + temp_429;
                // 0x000D08: 0x5C58100003473015 Fadd
                temp_434 = temp_71 + temp_431;
                // 0x000D10: 0x5C58100001172F35 Fadd
                temp_435 = temp_73 + temp_432;
                // 0x000D18: 0x5C68100003373332 Fmul
                temp_436 = temp_433 * temp_433;
                // 0x000D28: 0x59A0190001571532 Ffma
                temp_437 = fma(temp_434, temp_434, temp_436);
                // 0x000D30: 0x59A0190003573532 Ffma
                temp_438 = fma(temp_435, temp_435, temp_437);
                // 0x000D38: 0x5080000000573236 Mufu
                temp_439 = inversesqrt(temp_438);
                // 0x000D48: 0x5080000000870D32 Mufu
                temp_440 = sqrt(temp_427);
                // 0x000D50: 0x5C68100000C70E0D Fmul
                temp_441 = temp_110 * temp_429;
                // 0x000D58: 0x5C68100003673333 Fmul
                temp_442 = temp_433 * temp_439;
                // 0x000D68: 0x5C68100003671515 Fmul
                temp_443 = temp_434 * temp_439;
                // 0x000D70: 0x5C68100003673535 Fmul
                temp_444 = temp_435 * temp_439;
                // 0x000D78: 0x59A0068003470136 Ffma
                temp_445 = fma(temp_116, temp_431, temp_441);
                // 0x000D88: 0x51A0190400371414 Ffma
                temp_446 = fma(temp_430, temp_440, fp_c1.data[0].w);
                // 0x000D90: 0x5C68100003370C0C Fmul
                temp_447 = temp_429 * temp_442;
                // 0x000D98: 0x5080000000471414 Mufu
                temp_448 = 1.0 / temp_446;
                // 0x000DA8: 0x5C68100003370E33 Fmul
                temp_449 = temp_110 * temp_442;
                // 0x000DB0: 0x59A01B0001171236 Ffma
                temp_450 = fma(temp_117, temp_432, temp_445);
                // 0x000DB8: 0x59A0060001573434 Ffma
                temp_451 = fma(temp_431, temp_443, temp_447);
                // 0x000DC8: 0xEF9500800007220C Ldc
                temp_452 = uint(temp_313) >> 2;
                temp_453 = temp_452 >> 2;
                temp_454 = int(temp_452) & 3;
                temp_455 = fp_c8.data[int(temp_453)][temp_454];
                temp_456 = int(temp_452) + 1;
                temp_457 = uint(temp_456) >> 2;
                temp_458 = temp_456 & 3;
                temp_459 = fp_c8.data[int(temp_457)][temp_458];
                // 0x000DD0: 0x59A0198001570133 Ffma
                temp_460 = fma(temp_116, temp_443, temp_449);
                // 0x000DD8: 0xEF94008000872222 Ldc
                temp_461 = temp_313 + 8;
                temp_462 = uint(temp_461) >> 2;
                temp_463 = temp_462 >> 2;
                temp_464 = int(temp_462) & 3;
                temp_465 = fp_c8.data[int(temp_463)][temp_464];
                // 0x000DE8: 0x59A41A0003571134 Ffma
                temp_466 = fma(temp_432, temp_444, temp_451);
                temp_467 = clamp(temp_466, 0.0, 1.0);
                // 0x000DF0: 0x51A40E0400171C11 Ffma
                temp_468 = fma(temp_20, temp_20, fp_c1.data[0].y);
                temp_469 = clamp(temp_468, 0.0, 1.0);
                // 0x000DF8: 0x01040DF760C7F015 Mov32i
                // 0x000E08: 0x1E23FB3333371414 Fmul32i
                temp_470 = temp_448 * 1.39999998;
                // 0x000E10: 0x59A4198003571233 Ffma
                temp_471 = fma(temp_117, temp_444, temp_460);
                temp_472 = clamp(temp_471, 0.0, 1.0);
                // 0x000E18: 0x5C68100001171132 Fmul
                temp_473 = temp_469 * temp_469;
                // 0x000E28: 0x49A20A8400073415 Ffma
                temp_474 = fma(temp_467, fp_c1.data[0].x, -6.98316002);
                // 0x000E30: 0x5C68100001471414 Fmul
                temp_475 = temp_470 * temp_470;
                // 0x000E38: 0x59A2198003373232 Ffma
                temp_476 = 0.0 - temp_472;
                temp_477 = fma(temp_473, temp_472, temp_476);
                // 0x000E48: 0x5C68100001573434 Fmul
                temp_478 = temp_467 * temp_474;
                // 0x000E50: 0x5C5C30000FF73615 Fadd
                temp_479 = temp_450 + -0.0;
                temp_480 = clamp(temp_479, 0.0, 1.0);
                // 0x000E58: 0x59A10A0001473614 Ffma
                temp_481 = 0.0 - temp_475;
                temp_482 = fma(temp_450, temp_481, temp_475);
                // 0x000E68: 0x51A0190400273332 Ffma
                temp_483 = fma(temp_472, temp_477, fp_c1.data[0].z);
                // 0x000E70: 0x5C90008003470034 Rro
                // 0x000E78: 0x5080000000473232 Mufu
                temp_484 = 1.0 / temp_483;
                // 0x000E88: 0x59A10A8001572E33 Ffma
                temp_485 = 0.0 - temp_480;
                temp_486 = fma(temp_119, temp_485, temp_480);
                // 0x000E90: 0x5080000000273434 Mufu
                temp_487 = exp2(temp_478);
                // 0x000E98: 0x5C5C100001473614 Fadd
                temp_488 = temp_450 + temp_482;
                temp_489 = clamp(temp_488, 0.0, 1.0);
                // 0x000EA8: 0x5C58100003372E33 Fadd
                temp_490 = temp_119 + temp_486;
                // 0x000EB0: 0x5080000000473333 Mufu
                temp_491 = 1.0 / temp_490;
                // 0x000EB8: 0x5C68100003271132 Fmul
                temp_492 = temp_469 * temp_484;
                // 0x000EC8: 0x59A11A0003470311 Ffma
                temp_493 = 0.0 - temp_487;
                temp_494 = fma(temp_168, temp_493, temp_487);
                // 0x000ED0: 0x5C68100000C7100C Fmul
                temp_495 = temp_403 * temp_455;
                // 0x000ED8: 0x5C68100000D7100D Fmul
                temp_496 = temp_403 * temp_459;
                // 0x000EE8: 0x5C68100003273232 Fmul
                temp_497 = temp_492 * temp_492;
                // 0x000EF0: 0x5C58100001170311 Fadd
                temp_498 = temp_168 + temp_494;
                // 0x000EF8: 0x5C68100003372C33 Fmul
                temp_499 = temp_207 * temp_491;
                // 0x000F08: 0x5C68100002271022 Fmul
                temp_500 = temp_403 * temp_465;
                // 0x000F10: 0x59A11A0003470510 Ffma
                temp_501 = 0.0 - temp_487;
                temp_502 = fma(temp_217, temp_501, temp_487);
                // 0x000F18: 0x59A11A0003470634 Ffma
                temp_503 = 0.0 - temp_487;
                temp_504 = fma(temp_218, temp_503, temp_487);
                // 0x000F28: 0x5C68100003373232 Fmul
                temp_505 = temp_497 * temp_499;
                // 0x000F30: 0x4C68101406971111 Fmul
                temp_506 = temp_498 * fp_c5.data[26].y;
                // 0x000F38: 0x5C58100001070510 Fadd
                temp_507 = temp_217 + temp_502;
                // 0x000F48: 0x5C58100003470634 Fadd
                temp_508 = temp_218 + temp_504;
                // 0x000F50: 0x5C68100003271532 Fmul
                temp_509 = temp_480 * temp_505;
                // 0x000F58: 0x5C68100001170C11 Fmul
                temp_510 = temp_495 * temp_506;
                // 0x000F68: 0x5C68100001470C0C Fmul
                temp_511 = temp_495 * temp_489;
                // 0x000F70: 0x4C68101406971010 Fmul
                temp_512 = temp_507 * fp_c5.data[26].y;
                // 0x000F78: 0x4C68101406973434 Fmul
                temp_513 = temp_508 * fp_c5.data[26].y;
                // 0x000F88: 0x49A0078400570C0F Ffma
                temp_514 = fma(temp_511, fp_c1.data[1].y, temp_287);
                // 0x000F90: 0x5C68100001070D10 Fmul
                temp_515 = temp_496 * temp_512;
                // 0x000F98: 0x5C68100003472234 Fmul
                temp_516 = temp_500 * temp_513;
                // 0x000FA8: 0x5C68100001470D0D Fmul
                temp_517 = temp_496 * temp_489;
                // 0x000FB0: 0x5C68100001472222 Fmul
                temp_518 = temp_500 * temp_489;
                // 0x000FB8: 0x5C68100003271114 Fmul
                temp_519 = temp_510 * temp_509;
                // 0x000FC8: 0x5C68100003271010 Fmul
                temp_520 = temp_515 * temp_509;
                // 0x000FD0: 0x5C68100003273434 Fmul
                temp_521 = temp_516 * temp_509;
                // 0x000FD8: 0x49A0098400570D13 Ffma
                temp_522 = fma(temp_517, fp_c1.data[1].y, temp_288);
                // 0x000FE8: 0x49A00C0400572218 Ffma
                temp_523 = fma(temp_518, fp_c1.data[1].y, temp_289);
                // 0x000FF0: 0x49A0048400471409 Ffma
                temp_524 = fma(temp_519, fp_c1.data[1].x, temp_290);
                // 0x000FF8: 0x49A005040047100A Ffma
                temp_525 = fma(temp_520, fp_c1.data[1].x, temp_291);
                // 0x001008: 0x49A005840047340B Ffma
                temp_526 = fma(temp_521, fp_c1.data[1].x, temp_292);
                // 0x001010: 0xF0F800000007000F Sync
                temp_406 = temp_514;
                temp_407 = temp_522;
                temp_408 = temp_523;
                temp_409 = temp_524;
                temp_410 = temp_525;
                temp_411 = temp_526;
            }
            // 0x001018: 0xE2400FFFA189000F Bra
            temp_287 = temp_406;
            temp_288 = temp_407;
            temp_289 = temp_408;
            temp_290 = temp_409;
            temp_291 = temp_410;
            temp_292 = temp_411;
            temp_293 = temp_406;
            temp_294 = temp_407;
            temp_295 = temp_410;
            temp_296 = temp_409;
            temp_297 = temp_408;
            temp_298 = temp_411;
        }
        while (!temp_300);
        // 0x001028: 0xF0F800000007000F Sync
    }
    // 0x001030: 0x5C62578000170E0C Fmnmx
    temp_527 = abs(temp_110);
    temp_528 = abs(temp_116);
    temp_529 = max(temp_527, temp_528);
    // 0x001038: 0xE003FF87CFF7FF2B Ipa
    // 0x001048: 0x5C62578001672A0D Fmnmx
    temp_530 = abs(temp_166);
    temp_531 = abs(temp_280);
    temp_532 = max(temp_530, temp_531);
    // 0x001050: 0xEF4410000007FF32 Ldl
    temp_533 = uintBitsToFloat(local_memory[0]);
    // 0x001058: 0x010000000017F014 Mov32i
    // 0x001068: 0x3868104080071C23 Fmul
    temp_534 = temp_20 * 4.0;
    // 0x001070: 0x4C98079C0207002F Mov
    // 0x001078: 0x5C60578000C7120C Fmnmx
    temp_535 = abs(temp_117);
    temp_536 = max(temp_535, temp_529);
    // 0x001088: 0x5C60578000D7170D Fmnmx
    temp_537 = abs(temp_271);
    temp_538 = max(temp_537, temp_532);
    // 0x001090: 0x5080000000470C0C Mufu
    temp_539 = 1.0 / temp_536;
    // 0x001098: 0x49A002180A170F04 Ffma
    temp_540 = fma(temp_293, fp_c6.data[40].y, temp_216);
    // 0x0010A8: 0x5080000000470D0D Mufu
    temp_541 = 1.0 / temp_538;
    // 0x0010B0: 0x5C69100000C71212 Fmul
    temp_542 = 0.0 - temp_539;
    temp_543 = temp_117 * temp_542;
    // 0x0010B8: 0x5C68100000C70E10 Fmul
    temp_544 = temp_110 * temp_539;
    // 0x0010C8: 0x5080000000472B2B Mufu
    // 0x0010D0: 0x5C68100000C70111 Fmul
    temp_545 = temp_116 * temp_539;
    // 0x0010D8: 0x5C68100000D72A15 Fmul
    temp_546 = temp_166 * temp_541;
    // 0x0010E8: 0x5C68100000D71616 Fmul
    temp_547 = temp_280 * temp_541;
    // 0x0010F0: 0x5C69100000D71717 Fmul
    temp_548 = 0.0 - temp_541;
    temp_549 = temp_271 * temp_548;
    // 0x0010F8: 0xC0BA0163EFF7100C Tex
    temp_550 = textureLod(fp_t_tcb_16, vec3(temp_544, temp_545, temp_543), 0.0).xyz;
    temp_551 = temp_550.x;
    temp_552 = temp_550.y;
    temp_553 = temp_550.z;
    // 0x001108: 0x38681040E0071C2A Fmul
    temp_554 = temp_20 * 7.0;
    // 0x001110: 0xE043FF9102B7FF2C Ipa
    temp_555 = in_attr9.x;
    // 0x001118: 0x5C98078001270022 Mov
    // 0x001128: 0xE043FF9142B7FF2D Ipa
    temp_556 = in_attr9.y;
    // 0x001130: 0x3859103F80071C1C Fadd
    temp_557 = 0.0 - temp_20;
    temp_558 = temp_557 + 1.0;
    // 0x001138: 0xE043FF9182B7FF2E Ipa
    temp_559 = in_attr9.z;
    // 0x001148: 0xC1BA0143F2A71414 Tex
    temp_560 = textureLod(fp_t_tcb_14, vec4(temp_546, temp_547, temp_549, float(1)), temp_554).xyz;
    temp_561 = temp_560.x;
    temp_562 = temp_560.y;
    temp_563 = temp_560.z;
    // 0x001150: 0xD9A2018232271010 Texs
    temp_564 = textureLod(fp_t_tcb_18, vec3(temp_544, temp_545, temp_543), temp_534).xyz;
    temp_565 = temp_564.x;
    temp_566 = temp_564.y;
    temp_567 = temp_564.z;
    // 0x001158: 0xDEBA0000C2F72C2C TexB
    temp_568 = texture(fp_t_cb7_20, vec3(temp_555, temp_556, temp_559)).x;
    // 0x001168: 0x3859103F8007020F Fadd
    temp_569 = 0.0 - temp_131;
    temp_570 = temp_569 + 1.0;
    // 0x001170: 0x49A003980A171307 Ffma
    temp_571 = fma(temp_294, fp_c6.data[40].y, temp_265);
    // 0x001178: 0x5C68100001C71C1C Fmul
    temp_572 = temp_558 * temp_558;
    // 0x001188: 0x010410676C97F013 Mov32i
    // 0x001190: 0x49A013980A170A27 Ffma
    temp_573 = fma(temp_295, fp_c6.data[40].y, temp_283);
    // 0x001198: 0x49A013180A170926 Ffma
    temp_574 = fma(temp_296, fp_c6.data[40].y, temp_281);
    // 0x0011A8: 0x4C68101809070F0F Fmul
    temp_575 = temp_570 * fp_c6.data[36].x;
    // 0x0011B0: 0x0103E2CD9E87F017 Mov32i
    // 0x0011B8: 0x5080400000370F0F Mufu
    temp_576 = abs(temp_575);
    temp_577 = log2(temp_576);
    // 0x0011C8: 0x5C68100001C71C0A Fmul
    temp_578 = temp_572 * temp_572;
    // 0x0011D0: 0x49A0098400870213 Ffma
    temp_579 = fma(temp_131, fp_c1.data[2].x, 8.40400028);
    // 0x0011D8: 0x1E23E468DB970209 Fmul32i
    temp_580 = temp_131 * 0.193900004;
    // 0x0011E8: 0x49A004180A171808 Ffma
    temp_581 = fma(temp_297, fp_c6.data[40].y, temp_249);
    // 0x0011F0: 0x0103F0000007F01C Mov32i
    // 0x0011F8: 0x49A014180A170B28 Ffma
    temp_582 = fma(temp_298, fp_c6.data[40].y, temp_284);
    // 0x001208: 0xE04BFF9042B7FF0B Ipa
    temp_583 = in_attr8.y;
    temp_584 = clamp(temp_583, 0.0, 1.0);
    // 0x001210: 0x49A20B8400A70A17 Ffma
    temp_585 = fma(temp_578, fp_c1.data[2].z, -0.168799996);
    // 0x001218: 0x4C9807980B47002D Mov
    // 0x001228: 0x51A0098400B70218 Ffma
    temp_586 = fma(temp_131, temp_579, fp_c1.data[2].w);
    // 0x001230: 0x49A0048400670A12 Ffma
    temp_587 = fma(temp_578, fp_c1.data[1].z, temp_580);
    // 0x001238: 0x32A00E3F00070109 Ffma
    temp_588 = fma(temp_116, 0.5, 0.5);
    // 0x001248: 0x4C98079809970022 Mov
    // 0x001250: 0x5C68100001770A17 Fmul
    temp_589 = temp_578 * temp_585;
    // 0x001258: 0xF0F0000034370000 Depbar
    // 0x001268: 0x51A216980B470001 Ffma
    temp_590 = 0.0 - fp_c6.data[45].x;
    temp_591 = fma(temp_26, fp_c6.data[45].x, temp_590);
    // 0x001270: 0x51A00C0400C70218 Ffma
    temp_592 = fma(temp_131, temp_586, fp_c1.data[3].x);
    // 0x001278: 0x4C68101809170F00 Fmul
    temp_593 = temp_577 * fp_c6.data[36].y;
    // 0x001288: 0x51A216980B471F1F Ffma
    temp_594 = 0.0 - fp_c6.data[45].x;
    temp_595 = fma(temp_25, fp_c6.data[45].x, temp_594);
    // 0x001290: 0x51A216980B471E1E Ffma
    temp_596 = 0.0 - fp_c6.data[45].x;
    temp_597 = fma(temp_24, fp_c6.data[45].x, temp_596);
    // 0x001298: 0x0104066978D7F02D Mov32i
    // 0x0012A8: 0x088BF05D63971213 Fadd32i
    temp_598 = temp_587 + -0.522800028;
    // 0x0012B0: 0x4C9807980097001C Mov
    // 0x0012B8: 0x5C6013800187170F Fmnmx
    temp_599 = min(temp_589, temp_592);
    // 0x0012C8: 0x4C98079800A7002A Mov
    // 0x0012D0: 0x5C90008000070018 Rro
    // 0x0012D8: 0x49A2168400770A17 Ffma
    temp_600 = fma(temp_578, fp_c1.data[1].w, -3.60299993);
    // 0x0012E8: 0x5084000000271818 Mufu
    temp_601 = exp2(temp_593);
    temp_602 = clamp(temp_601, 0.0, 1.0);
    // 0x0012F0: 0x5C68100001370213 Fmul
    temp_603 = temp_131 * temp_598;
    // 0x0012F8: 0x4C98079800870002 Mov
    // 0x001308: 0x4C98079408270012 Mov
    // 0x001310: 0x4C59101800571C00 Fadd
    temp_604 = 0.0 - fp_c6.data[2].y;
    temp_605 = temp_604 + fp_c6.data[1].y;
    // 0x001318: 0x4C59101800672A1C Fadd
    temp_606 = 0.0 - fp_c6.data[2].z;
    temp_607 = temp_606 + fp_c6.data[1].z;
    // 0x001328: 0x51A00B8400970A2D Ffma
    temp_608 = fma(temp_578, temp_600, fp_c1.data[2].y);
    // 0x001330: 0x4C58101408172217 Fadd
    temp_609 = fp_c6.data[38].y + fp_c5.data[32].y;
    // 0x001338: 0x4C59101800470202 Fadd
    temp_610 = 0.0 - fp_c6.data[2].x;
    temp_611 = temp_610 + fp_c6.data[1].x;
    // 0x001348: 0x010404000007F022 Mov32i
    // 0x001350: 0x51A0001800970900 Ffma
    temp_612 = fma(temp_588, temp_605, fp_c6.data[2].y);
    // 0x001358: 0x5C68100000B70B2F Fmul
    temp_613 = temp_584 * temp_584;
    // 0x001368: 0x59A0098002D70A13 Ffma
    temp_614 = fma(temp_578, temp_608, temp_603);
    // 0x001370: 0x5C68100001871717 Fmul
    temp_615 = temp_609 * temp_602;
    // 0x001378: 0x51A0011800870902 Ffma
    temp_616 = fma(temp_588, temp_611, fp_c6.data[2].x);
    // 0x001388: 0x4C6810140697122D Fmul
    temp_617 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x001390: 0x33A0114000070B0A Ffma
    temp_618 = fma(temp_584, -2.0, 3.0);
    // 0x001398: 0x51A00E1800A70909 Ffma
    temp_619 = fma(temp_588, temp_607, fp_c6.data[2].z);
    // 0x0013A8: 0x386C104248070518 Fmul
    temp_620 = temp_217 * 50.0;
    temp_621 = clamp(temp_620, 0.0, 1.0);
    // 0x0013B0: 0x5C5C30000FF70F0F Fadd
    temp_622 = temp_599 + -0.0;
    temp_623 = clamp(temp_622, 0.0, 1.0);
    // 0x0013B8: 0x4C68101808D71712 Fmul
    temp_624 = temp_615 * fp_c6.data[35].y;
    // 0x0013C8: 0x4C68101808E7170B Fmul
    temp_625 = temp_615 * fp_c6.data[35].z;
    // 0x0013D0: 0x4C5C100400D7131C Fadd
    temp_626 = temp_614 + fp_c1.data[3].y;
    temp_627 = clamp(temp_626, 0.0, 1.0);
    // 0x0013D8: 0x4C68101808C71717 Fmul
    temp_628 = temp_615 * fp_c6.data[35].x;
    // 0x0013E8: 0x5C68100002F70A0A Fmul
    temp_629 = temp_618 * temp_613;
    // 0x0013F0: 0x5C68100001870F18 Fmul
    temp_630 = temp_623 * temp_621;
    // 0x0013F8: 0x59A0138002D71227 Ffma
    temp_631 = fma(temp_624, temp_617, temp_573);
    // 0x001408: 0x49A1091408271212 Ffma
    temp_632 = 0.0 - fp_c5.data[32].z;
    temp_633 = fma(temp_624, temp_632, temp_624);
    // 0x001410: 0x5C59100001C70F0F Fadd
    temp_634 = 0.0 - temp_623;
    temp_635 = temp_634 + temp_627;
    // 0x001418: 0x59A0130002D71726 Ffma
    temp_636 = fma(temp_628, temp_617, temp_574);
    // 0x001428: 0x49A10B9408271717 Ffma
    temp_637 = 0.0 - fp_c5.data[32].z;
    temp_638 = fma(temp_628, temp_637, temp_628);
    // 0x001430: 0x59A0140002D70B28 Ffma
    temp_639 = fma(temp_625, temp_617, temp_582);
    // 0x001438: 0x49A1059408270B0B Ffma
    temp_640 = 0.0 - fp_c5.data[32].z;
    temp_641 = fma(temp_625, temp_640, temp_625);
    // 0x001448: 0x5C58100001270707 Fadd
    temp_642 = temp_571 + temp_633;
    // 0x001450: 0x59A00C0000F70313 Ffma
    temp_643 = fma(temp_168, temp_635, temp_630);
    // 0x001458: 0xE043FF9002B7FF03 Ipa
    temp_644 = in_attr8.x;
    // 0x001468: 0x59A00C0000F70505 Ffma
    temp_645 = fma(temp_217, temp_635, temp_630);
    // 0x001470: 0x5C58100001770404 Fadd
    temp_646 = temp_540 + temp_638;
    // 0x001478: 0x59A00C0000F70606 Ffma
    temp_647 = fma(temp_218, temp_635, temp_630);
    // 0x001488: 0x5C58100000B70808 Fadd
    temp_648 = temp_581 + temp_641;
    // 0x001490: 0x4C68101803770A0A Fmul
    temp_649 = temp_629 * fp_c6.data[13].w;
    // 0x001498: 0x4C68101406971313 Fmul
    temp_650 = temp_643 * fp_c5.data[26].y;
    // 0x0014A8: 0x4C68101406970505 Fmul
    temp_651 = temp_645 * fp_c5.data[26].y;
    // 0x0014B0: 0x4C68101406970606 Fmul
    temp_652 = temp_647 * fp_c5.data[26].y;
    // 0x0014B8: 0xF0F0000034270000 Depbar
    // 0x0014C8: 0x49A0060400570202 Ffma
    temp_653 = fma(temp_616, fp_c1.data[1].y, temp_551);
    // 0x0014D0: 0x49A0068400570000 Ffma
    temp_654 = fma(temp_612, fp_c1.data[1].y, temp_552);
    // 0x0014D8: 0x49A0070400570909 Ffma
    temp_655 = fma(temp_619, fp_c1.data[1].y, temp_553);
    // 0x0014E8: 0x5C58100000270402 Fadd
    temp_656 = temp_646 + temp_653;
    // 0x0014F0: 0x5C58100000070700 Fadd
    temp_657 = temp_642 + temp_654;
    // 0x0014F8: 0x5C58100000970808 Fadd
    temp_658 = temp_648 + temp_655;
    // 0x001508: 0x59A1010000271D02 Ffma
    temp_659 = 0.0 - temp_656;
    temp_660 = fma(temp_21, temp_659, temp_656);
    // 0x001510: 0xF0F0000034170000 Depbar
    // 0x001518: 0x49A0081808571410 Ffma
    temp_661 = fma(temp_561, fp_c6.data[33].y, temp_565);
    // 0x001528: 0x49A0089808571504 Ffma
    temp_662 = fma(temp_562, fp_c6.data[33].y, temp_566);
    // 0x001530: 0x49A0119808571623 Ffma
    temp_663 = fma(temp_563, fp_c6.data[33].y, temp_567);
    // 0x001538: 0x59A1000000071D00 Ffma
    temp_664 = 0.0 - temp_657;
    temp_665 = fma(temp_21, temp_664, temp_657);
    // 0x001548: 0x59A1040000871D1D Ffma
    temp_666 = 0.0 - temp_658;
    temp_667 = fma(temp_21, temp_666, temp_658);
    // 0x001550: 0xE043FF8C82B7FF08 Ipa
    temp_668 = in_attr4.z;
    // 0x001558: 0x59A0130001071313 Ffma
    temp_669 = fma(temp_650, temp_661, temp_636);
    // 0x001568: 0x59A0138000470527 Ffma
    temp_670 = fma(temp_651, temp_662, temp_631);
    // 0x001570: 0x59A0140002370628 Ffma
    temp_671 = fma(temp_652, temp_663, temp_639);
    // 0x001578: 0x4C98079802870004 Mov
    // 0x001588: 0x4C98079802970005 Mov
    // 0x001590: 0x59A0098000272002 Ffma
    temp_672 = fma(temp_14, temp_660, temp_669);
    // 0x001598: 0x59A0138000072127 Ffma
    temp_673 = fma(temp_15, temp_665, temp_670);
    // 0x0015A8: 0x51A0021802871E1E Ffma
    temp_674 = fma(temp_597, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0015B0: 0x51A0029802971F04 Ffma
    temp_675 = fma(temp_595, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0015B8: 0x5C68100000271900 Fmul
    temp_676 = temp_274 * temp_672;
    // 0x0015C8: 0x59A0140001D71A02 Ffma
    temp_677 = fma(temp_16, temp_667, temp_671);
    // 0x0015D0: 0x5C68100002772424 Fmul
    temp_678 = temp_276 * temp_673;
    // 0x0015D8: 0x49A0001406C73200 Ffma
    temp_679 = fma(temp_533, fp_c5.data[27].x, temp_676);
    // 0x0015E8: 0x5C68100000272502 Fmul
    temp_680 = temp_278 * temp_677;
    // 0x0015F0: 0x49A0121406C73737 Ffma
    temp_681 = fma(temp_285, fp_c5.data[27].x, temp_678);
    // 0x0015F8: 0x49A501980BC72C2C Ffma
    temp_682 = 0.0 - fp_c6.data[47].x;
    temp_683 = fma(temp_568, temp_682, temp_644);
    temp_684 = clamp(temp_683, 0.0, 1.0);
    // 0x001608: 0x4C98079802A70003 Mov
    // 0x001610: 0x5080000000372C2C Mufu
    temp_685 = log2(temp_684);
    // 0x001618: 0x49A0011406C72929 Ffma
    temp_686 = fma(temp_286, fp_c5.data[27].x, temp_680);
    // 0x001628: 0x5C58300001E70005 Fadd
    temp_687 = 0.0 - temp_674;
    temp_688 = temp_679 + temp_687;
    // 0x001630: 0x4C58100C03870808 Fadd
    temp_689 = temp_668 + fp_c3.data[14].x;
    // 0x001638: 0x51A0019802A70103 Ffma
    temp_690 = fma(temp_591, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001648: 0x5C58300000473701 Fadd
    temp_691 = 0.0 - temp_675;
    temp_692 = temp_681 + temp_691;
    // 0x001650: 0x49A00F180BF70505 Ffma
    temp_693 = fma(temp_688, fp_c6.data[47].w, temp_674);
    // 0x001658: 0x5C58300000372902 Fadd
    temp_694 = 0.0 - temp_690;
    temp_695 = temp_686 + temp_694;
    // 0x001668: 0x4C68101803172C06 Fmul
    temp_696 = temp_685 * fp_c6.data[12].y;
    // 0x001670: 0x49A002180BF70101 Ffma
    temp_697 = fma(temp_692, fp_c6.data[47].w, temp_675);
    // 0x001678: 0x5C60178000571E05 Fmnmx
    temp_698 = max(temp_674, temp_693);
    // 0x001688: 0x49A001980BF70202 Ffma
    temp_699 = fma(temp_695, fp_c6.data[47].w, temp_690);
    // 0x001690: 0x5C90008000670007 Rro
    // 0x001698: 0x49A2051803570A06 Ffma
    temp_700 = 0.0 - temp_649;
    temp_701 = fma(temp_649, fp_c6.data[13].y, temp_700);
    // 0x0016A8: 0x5080000000270707 Mufu
    temp_702 = exp2(temp_696);
    // 0x0016B0: 0x5C60178000170401 Fmnmx
    temp_703 = max(temp_675, temp_697);
    // 0x0016B8: 0x49A2051803470A04 Ffma
    temp_704 = 0.0 - temp_649;
    temp_705 = fma(temp_649, fp_c6.data[13].x, temp_704);
    // 0x0016C8: 0x5C60178000270302 Fmnmx
    temp_706 = max(temp_690, temp_699);
    // 0x0016D0: 0x49A2051803670A03 Ffma
    temp_707 = 0.0 - temp_649;
    temp_708 = fma(temp_649, fp_c6.data[13].z, temp_707);
    // 0x0016D8: 0x59A0008000670106 Ffma
    temp_709 = fma(temp_703, temp_701, temp_703);
    // 0x0016E8: 0x59A0028000470505 Ffma
    temp_710 = fma(temp_698, temp_705, temp_698);
    // 0x0016F0: 0x59A0010000370203 Ffma
    temp_711 = fma(temp_706, temp_708, temp_706);
    // 0x0016F8: 0x4C68101802B70704 Fmul
    temp_712 = temp_702 * fp_c6.data[10].w;
    // 0x001708: 0x5C59100000570001 Fadd
    temp_713 = 0.0 - temp_679;
    temp_714 = temp_713 + temp_710;
    // 0x001710: 0x5C59100000673702 Fadd
    temp_715 = 0.0 - temp_681;
    temp_716 = temp_715 + temp_709;
    // 0x001718: 0x5C59100000372903 Fadd
    temp_717 = 0.0 - temp_686;
    temp_718 = temp_717 + temp_711;
    // 0x001728: 0x5C98078001B70007 Mov
    // 0x001730: 0x0103F4000007F005 Mov32i
    // 0x001738: 0x5C9807800FF70006 Mov
    // 0x001748: 0x59A0000000470100 Ffma
    temp_719 = fma(temp_714, temp_712, temp_679);
    // 0x001750: 0x59A01B8000470201 Ffma
    temp_720 = fma(temp_716, temp_712, temp_681);
    // 0x001758: 0x59A0148000470302 Ffma
    temp_721 = fma(temp_718, temp_712, temp_686);
    // 0x001768: 0x5C98078001B70003 Mov
    // 0x001770: 0x49A37F8C03C70804 Ffma
    temp_722 = 0.0 - fp_c3.data[15].x;
    temp_723 = fma(temp_689, temp_722, -0.0);
    // 0x001778: 0xE30000000007000F Exit
    out_attr0.x = temp_719;
    out_attr0.y = temp_720;
    out_attr0.z = temp_721;
    out_attr0.w = temp_17;
    out_attr1.x = temp_723;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
