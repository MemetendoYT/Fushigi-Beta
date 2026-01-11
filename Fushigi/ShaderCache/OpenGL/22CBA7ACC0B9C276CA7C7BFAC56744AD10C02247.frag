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
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_1E;
layout (binding = 3) uniform sampler2D fp_t_tcb_22;
layout (binding = 4) uniform sampler2D fp_t_tcb_36;
layout (binding = 5) uniform sampler2D fp_t_tcb_20;
layout (binding = 6) uniform samplerCube fp_t_tcb_16;
layout (binding = 7) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 8) uniform samplerCube fp_t_tcb_18;
layout (binding = 9) uniform sampler3D fp_t_cb7_20;
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
    precise vec4 temp_86;
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
    bool temp_101;
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
    uint temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    int temp_174;
    precise float temp_175;
    int temp_176;
    uint temp_177;
    uint temp_178;
    int temp_179;
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
    bool temp_222;
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
    int temp_320;
    bool temp_321;
    int temp_322;
    int temp_323;
    int temp_324;
    int temp_325;
    int temp_326;
    uint temp_327;
    uint temp_328;
    int temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    int temp_334;
    int temp_335;
    uint temp_336;
    uint temp_337;
    int temp_338;
    precise float temp_339;
    int temp_340;
    uint temp_341;
    int temp_342;
    precise float temp_343;
    int temp_344;
    uint temp_345;
    uint temp_346;
    int temp_347;
    precise float temp_348;
    int temp_349;
    uint temp_350;
    int temp_351;
    precise float temp_352;
    int temp_353;
    uint temp_354;
    uint temp_355;
    int temp_356;
    precise float temp_357;
    int temp_358;
    uint temp_359;
    int temp_360;
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
    int temp_371;
    uint temp_372;
    uint temp_373;
    int temp_374;
    precise float temp_375;
    int temp_376;
    uint temp_377;
    int temp_378;
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
    int temp_389;
    uint temp_390;
    uint temp_391;
    int temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    int temp_396;
    uint temp_397;
    uint temp_398;
    int temp_399;
    precise float temp_400;
    int temp_401;
    uint temp_402;
    int temp_403;
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
    uint temp_423;
    int temp_424;
    bool temp_425;
    uint temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    precise float temp_431;
    precise float temp_432;
    precise float temp_433;
    uint temp_434;
    precise float temp_435;
    bool temp_436;
    precise float temp_437;
    precise float temp_438;
    int temp_439;
    uint temp_440;
    uint temp_441;
    int temp_442;
    precise float temp_443;
    int temp_444;
    uint temp_445;
    uint temp_446;
    int temp_447;
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
    uint temp_474;
    uint temp_475;
    int temp_476;
    precise float temp_477;
    int temp_478;
    uint temp_479;
    int temp_480;
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
    precise vec3 temp_570;
    precise float temp_571;
    precise float temp_572;
    precise float temp_573;
    precise vec3 temp_574;
    precise float temp_575;
    precise float temp_576;
    precise float temp_577;
    precise float temp_578;
    precise float temp_579;
    precise vec3 temp_580;
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
    precise float temp_729;
    precise float temp_730;
    precise float temp_731;
    precise float temp_732;
    precise float temp_733;
    precise float temp_734;
    precise float temp_735;
    precise float temp_736;
    precise float temp_737;
    precise float temp_738;
    precise float temp_739;
    precise float temp_740;
    precise float temp_741;
    precise float temp_742;
    precise float temp_743;
    precise float temp_744;
    precise float temp_745;
    precise float temp_746;
    precise float temp_747;
    precise float temp_748;
    precise float temp_749;
    precise float temp_750;
    precise float temp_751;
    precise float temp_752;
    precise float temp_753;
    precise float temp_754;
    precise float temp_755;
    precise float temp_756;
    precise float temp_757;
    // 0x000008: 0x0103F8000007F012 Mov32i
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0xE003FF870FF7FF04 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000028: 0xE003FF874FF7FF05 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000030: 0x5080000000471010 Mufu
    // 0x000038: 0x4C68100C04A70404 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000048: 0x4C68100C04B70505 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000050: 0xE043FF8E0107FF1F Ipa
    temp_8 = in_attr6.x;
    // 0x000058: 0xE043FF8E4107FF1E Ipa
    temp_9 = in_attr6.y;
    // 0x000068: 0xD830026FF1E71F00 Texs
    temp_10 = texture(fp_t_tcb_26, vec2(temp_8, temp_9)).xy;
    temp_11 = temp_10.x;
    temp_12 = temp_10.y;
    // 0x000070: 0xD8300241C1E71F20 Texs
    temp_13 = texture(fp_t_tcb_24, vec2(temp_8, temp_9)).xyzw;
    temp_14 = temp_13.x;
    temp_15 = temp_13.y;
    temp_16 = temp_13.z;
    temp_17 = temp_13.w;
    // 0x000078: 0xD86201EFF1270409 Texs
    temp_18 = textureLod(fp_t_tcb_1E, vec2(temp_6, temp_7), 1.0).x;
    // 0x000088: 0xE043FF8A0107FF02 Ipa
    temp_19 = in_attr2.x;
    // 0x000090: 0xE043FF8A4107FF03 Ipa
    temp_20 = in_attr2.y;
    // 0x000098: 0xE043FF890107FF07 Ipa
    temp_21 = in_attr1.x;
    // 0x0000A8: 0xE043FF8A8107FF06 Ipa
    temp_22 = in_attr2.z;
    // 0x0000B0: 0xE043FF880107FF0E Ipa
    temp_23 = in_attr0.x;
    // 0x0000B8: 0xE043FF894107FF0A Ipa
    temp_24 = in_attr1.y;
    // 0x0000C8: 0xE043FF884107FF0F Ipa
    temp_25 = in_attr0.y;
    // 0x0000D0: 0xE043FF898107FF0B Ipa
    temp_26 = in_attr1.z;
    // 0x0000D8: 0xE043FF888107FF11 Ipa
    temp_27 = in_attr0.z;
    // 0x0000E8: 0xE043FF8B0107FF38 Ipa
    temp_28 = in_attr3.x;
    // 0x0000F0: 0xE043FF8B4107FF37 Ipa
    temp_29 = in_attr3.y;
    // 0x0000F8: 0xE043FF8B8107FF36 Ipa
    temp_30 = in_attr3.z;
    // 0x000108: 0x5C68100000270208 Fmul
    temp_31 = temp_19 * temp_19;
    // 0x000110: 0x5C6810000077070C Fmul
    temp_32 = temp_21 * temp_21;
    // 0x000118: 0x5C68100000E70E0D Fmul
    temp_33 = temp_23 * temp_23;
    // 0x000128: 0x59A0040000370308 Ffma
    temp_34 = fma(temp_20, temp_20, temp_31);
    // 0x000130: 0x59A0060000A70A0C Ffma
    temp_35 = fma(temp_24, temp_24, temp_32);
    // 0x000138: 0x59A0040000670608 Ffma
    temp_36 = fma(temp_22, temp_22, temp_34);
    // 0x000148: 0x5080000000570808 Mufu
    temp_37 = inversesqrt(temp_36);
    // 0x000150: 0x59A0068000F70F12 Ffma
    temp_38 = fma(temp_25, temp_25, temp_33);
    // 0x000158: 0x59A0060000B70B0C Ffma
    temp_39 = fma(temp_26, temp_26, temp_35);
    // 0x000168: 0x5080000000570C0C Mufu
    temp_40 = inversesqrt(temp_39);
    // 0x000170: 0x59A0090001171112 Ffma
    temp_41 = fma(temp_27, temp_27, temp_38);
    // 0x000178: 0x5C68100000870202 Fmul
    temp_42 = temp_19 * temp_37;
    // 0x000188: 0x5C68100000870303 Fmul
    temp_43 = temp_20 * temp_37;
    // 0x000190: 0x5C68100000870606 Fmul
    temp_44 = temp_22 * temp_37;
    // 0x000198: 0x5080000000571208 Mufu
    temp_45 = inversesqrt(temp_41);
    // 0x0001A8: 0x5C68100000C70707 Fmul
    temp_46 = temp_21 * temp_40;
    // 0x0001B0: 0x5C68100000C70A0A Fmul
    temp_47 = temp_24 * temp_40;
    // 0x0001B8: 0x5C68100000C70B0B Fmul
    temp_48 = temp_26 * temp_40;
    // 0x0001C8: 0x5C68100000870F0C Fmul
    temp_49 = temp_25 * temp_45;
    // 0x0001D0: 0x5C68100000871111 Fmul
    temp_50 = temp_27 * temp_45;
    // 0x0001D8: 0x5C68100000870E08 Fmul
    temp_51 = temp_23 * temp_45;
    // 0x0001E8: 0xF0F0000034270000 Depbar
    // 0x0001F0: 0x5C6810000017010D Fmul
    temp_52 = temp_12 * temp_12;
    // 0x0001F8: 0x5C68100000170202 Fmul
    temp_53 = temp_42 * temp_12;
    // 0x000208: 0x5C68100000170303 Fmul
    temp_54 = temp_43 * temp_12;
    // 0x000210: 0x5C68100000170606 Fmul
    temp_55 = temp_44 * temp_12;
    // 0x000218: 0x59A006800007000D Ffma
    temp_56 = fma(temp_11, temp_11, temp_52);
    // 0x000228: 0x59A0010000770002 Ffma
    temp_57 = fma(temp_11, temp_46, temp_53);
    // 0x000230: 0x59A0018000A70003 Ffma
    temp_58 = fma(temp_11, temp_47, temp_54);
    // 0x000238: 0x59A0030000B70006 Ffma
    temp_59 = fma(temp_11, temp_48, temp_55);
    // 0x000248: 0x385D103F80070D0D Fadd
    temp_60 = 0.0 - temp_56;
    temp_61 = temp_60 + 1.0;
    temp_62 = clamp(temp_61, 0.0, 1.0);
    // 0x000250: 0x5080000000870D0D Mufu
    temp_63 = sqrt(temp_62);
    // 0x000258: 0x59A0010000D70802 Ffma
    temp_64 = fma(temp_51, temp_63, temp_57);
    // 0x000268: 0x59A0018000D70C03 Ffma
    temp_65 = fma(temp_49, temp_63, temp_58);
    // 0x000270: 0x59A0030000D71106 Ffma
    temp_66 = fma(temp_50, temp_63, temp_59);
    // 0x000278: 0x5C68100000270200 Fmul
    temp_67 = temp_64 * temp_64;
    // 0x000288: 0x59A0000000370300 Ffma
    temp_68 = fma(temp_65, temp_65, temp_67);
    // 0x000290: 0x59A0000000670601 Ffma
    temp_69 = fma(temp_66, temp_66, temp_68);
    // 0x000298: 0x5080000000570101 Mufu
    temp_70 = inversesqrt(temp_69);
    // 0x0002A8: 0x5C68100000170616 Fmul
    temp_71 = temp_66 * temp_70;
    // 0x0002B0: 0x5C68100000170300 Fmul
    temp_72 = temp_65 * temp_70;
    // 0x0002B8: 0x5C68100000170212 Fmul
    temp_73 = temp_64 * temp_70;
    // 0x0002C8: 0x4C68100C00671603 Fmul
    temp_74 = temp_71 * fp_c3.data[1].z;
    // 0x0002D0: 0x4C68100C00271602 Fmul
    temp_75 = temp_71 * fp_c3.data[0].z;
    // 0x0002D8: 0x49A0018C00570007 Ffma
    temp_76 = fma(temp_72, fp_c3.data[1].y, temp_74);
    // 0x0002E8: 0x49A0010C00170003 Ffma
    temp_77 = fma(temp_72, fp_c3.data[0].y, temp_75);
    // 0x0002F0: 0x49A0038C00471207 Ffma
    temp_78 = fma(temp_73, fp_c3.data[1].x, temp_76);
    // 0x0002F8: 0x49A0018C00071203 Ffma
    temp_79 = fma(temp_73, fp_c3.data[0].x, temp_77);
    // 0x000308: 0x4C69100C03E70707 Fmul
    temp_80 = 0.0 - fp_c3.data[15].z;
    temp_81 = temp_78 * temp_80;
    // 0x000310: 0x4C68101808B70303 Fmul
    temp_82 = temp_79 * fp_c6.data[34].w;
    // 0x000318: 0x4C68101808B70707 Fmul
    temp_83 = temp_81 * fp_c6.data[34].w;
    // 0x000328: 0x49A0020400270324 Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].z, temp_6);
    // 0x000330: 0x49A0028400270707 Ffma
    temp_85 = fma(temp_83, fp_c1.data[0].z, temp_7);
    // 0x000338: 0xD832022260772424 Texs
    temp_86 = texture(fp_t_tcb_22, vec2(temp_84, temp_85)).xyzw;
    temp_87 = temp_86.x;
    temp_88 = temp_86.y;
    temp_89 = temp_86.z;
    temp_90 = temp_86.w;
    // 0x000348: 0xD8240360A1E71F1E Texs
    temp_91 = texture(fp_t_tcb_36, vec2(temp_8, temp_9)).xyw;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000350: 0xD822020010570422 Texs
    temp_95 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_96 = temp_95.x;
    temp_97 = temp_95.y;
    temp_98 = temp_95.z;
    // 0x000358: 0x5C68100003873802 Fmul
    temp_99 = temp_28 * temp_28;
    // 0x000368: 0x4C68101805C71206 Fmul
    temp_100 = temp_73 * fp_c6.data[23].x;
    // 0x000370: 0xF0F0000034470000 Depbar
    // 0x000378: 0x4BB1839406071D07 Fsetp
    temp_101 = temp_17 < fp_c5.data[24].x;
    // 0x000388: 0x59A0010003773703 Ffma
    temp_102 = fma(temp_29, temp_29, temp_99);
    // 0x000390: 0x59A0018003673603 Ffma
    temp_103 = fma(temp_30, temp_30, temp_102);
    // 0x000398: 0x508000000057030D Mufu
    temp_104 = inversesqrt(temp_103);
    // 0x0003A8: 0x5C69100000D73838 Fmul
    temp_105 = 0.0 - temp_104;
    temp_106 = temp_28 * temp_105;
    // 0x0003B0: 0x5C69100000D73737 Fmul
    temp_107 = 0.0 - temp_104;
    temp_108 = temp_29 * temp_107;
    // 0x0003B8: 0x5C69100000D73636 Fmul
    temp_109 = 0.0 - temp_104;
    temp_110 = temp_30 * temp_109;
    // 0x0003C8: 0x5C68100003871202 Fmul
    temp_111 = temp_73 * temp_106;
    // 0x0003D0: 0x59A0010003770007 Ffma
    temp_112 = fma(temp_72, temp_108, temp_111);
    // 0x0003D8: 0x59A4038003671602 Ffma
    temp_113 = fma(temp_71, temp_110, temp_112);
    temp_114 = clamp(temp_113, 0.0, 1.0);
    // 0x0003E8: 0x49A0031805D70007 Ffma
    temp_115 = fma(temp_72, fp_c6.data[23].y, temp_100);
    // 0x0003F0: 0x3859103F80070206 Fadd
    temp_116 = 0.0 - temp_114;
    temp_117 = temp_116 + 1.0;
    // 0x0003F8: 0x49A4039805E71607 Ffma
    temp_118 = fma(temp_71, fp_c6.data[23].z, temp_115);
    temp_119 = clamp(temp_118, 0.0, 1.0);
    // 0x000408: 0x5080000000370707 Mufu
    temp_120 = log2(temp_119);
    // 0x000410: 0x4C68101406370606 Fmul
    temp_121 = temp_117 * fp_c5.data[24].w;
    // 0x000418: 0x5080400000370606 Mufu
    temp_122 = abs(temp_121);
    temp_123 = log2(temp_122);
    // 0x000428: 0x1E23F99999A7070B Fmul32i
    temp_124 = temp_120 * 1.20000005;
    // 0x000430: 0x4C68101406670708 Fmul
    temp_125 = temp_120 * fp_c5.data[25].z;
    // 0x000438: 0x4C68101406470603 Fmul
    temp_126 = temp_123 * fp_c5.data[25].x;
    // 0x000448: 0x5C90008000B7000D Rro
    // 0x000450: 0x5080000000270D0B Mufu
    temp_127 = exp2(temp_124);
    // 0x000458: 0x5C90008000870008 Rro
    // 0x000468: 0x5C9000800037000C Rro
    // 0x000470: 0x5080000000270808 Mufu
    temp_128 = exp2(temp_125);
    // 0x000478: 0x3859103F00070B0B Fadd
    temp_129 = 0.0 - temp_127;
    temp_130 = temp_129 + 0.5;
    // 0x000488: 0x5084000000270C03 Mufu
    temp_131 = exp2(temp_126);
    temp_132 = clamp(temp_131, 0.0, 1.0);
    // 0x000490: 0x4C6C101406570B06 Fmul
    temp_133 = temp_130 * fp_c5.data[25].y;
    temp_134 = clamp(temp_133, 0.0, 1.0);
    // 0x000498: 0x5C68100000870303 Fmul
    temp_135 = temp_132 * temp_128;
    // 0x0004A8: 0x49A003140677030B Ffma
    temp_136 = fma(temp_135, fp_c5.data[25].w, temp_134);
    // 0x0004B0: 0xE24000000688000F Bra
    if (temp_101)
    {
        // 0x0004B8: 0x5C9807800FF70000 Mov
        // 0x0004C8: 0xE33000000007000F Kil
        discard;
    }
    // 0x000528: 0x4C58301805C73803 Fadd
    temp_137 = 0.0 - fp_c6.data[23].x;
    temp_138 = temp_106 + temp_137;
    // 0x000530: 0xE2900000BA000000 Ssy
    // 0x000538: 0x4C58301805D73706 Fadd
    temp_139 = 0.0 - fp_c6.data[23].y;
    temp_140 = temp_108 + temp_139;
    // 0x000548: 0x4C58301805E73607 Fadd
    temp_141 = 0.0 - fp_c6.data[23].z;
    temp_142 = temp_110 + temp_141;
    // 0x000550: 0x3868104180070411 Fmul
    temp_143 = temp_6 * 16.0;
    // 0x000558: 0x3868104110070513 Fmul
    temp_144 = temp_7 * 9.0;
    // 0x000568: 0x5CA8148001170A11 F2f
    temp_145 = floor(temp_143);
    // 0x000570: 0x5C68100000370308 Fmul
    temp_146 = temp_138 * temp_138;
    // 0x000578: 0x5CA8148001370A13 F2f
    temp_147 = floor(temp_144);
    // 0x000588: 0x01040DF760C7F00F Mov32i
    // 0x000590: 0x0103F0000007F034 Mov32i
    // 0x000598: 0x4C69101805C7120E Fmul
    temp_148 = 0.0 - fp_c6.data[23].x;
    temp_149 = temp_73 * temp_148;
    // 0x0005A8: 0xF0F0000034170000 Depbar
    // 0x0005B0: 0x51A40F0400171E35 Ffma
    temp_150 = fma(temp_92, temp_92, fp_c1.data[0].y);
    temp_151 = clamp(temp_150, 0.0, 1.0);
    // 0x0005B8: 0x4C58301407B72004 Fadd
    temp_152 = 0.0 - fp_c5.data[30].w;
    temp_153 = temp_14 + temp_152;
    // 0x0005C8: 0x59A0040000670608 Ffma
    temp_154 = fma(temp_140, temp_140, temp_146);
    // 0x0005D0: 0x5C6810000027001A Fmul
    temp_155 = temp_72 * temp_114;
    // 0x0005D8: 0x32A01A3F00071E34 Ffma
    temp_156 = fma(temp_92, 0.5, 0.5);
    // 0x0005E8: 0x5C6810000027161B Fmul
    temp_157 = temp_71 * temp_114;
    // 0x0005F0: 0x5C68100003573514 Fmul
    temp_158 = temp_151 * temp_151;
    // 0x0005F8: 0x5C9807800FF7002F Mov
    // 0x000608: 0x59A0040000770708 Ffma
    temp_159 = fma(temp_142, temp_142, temp_154);
    // 0x000610: 0x32A008C180071332 Ffma
    temp_160 = fma(temp_147, 16.0, temp_145);
    // 0x000618: 0x5080000000570808 Mufu
    temp_161 = inversesqrt(temp_159);
    // 0x000628: 0x5C68120003473434 Fmul
    temp_162 = temp_156 * 0.5;
    temp_163 = temp_162 * temp_156;
    // 0x000630: 0x5CB0118003270A32 F2i
    temp_164 = trunc(temp_160);
    temp_165 = max(temp_164, 0.0);
    temp_166 = uint(temp_165);
    // 0x000638: 0x32A21BC000071A1A Ffma
    temp_167 = 0.0 - temp_108;
    temp_168 = fma(temp_155, 2.0, temp_167);
    // 0x000648: 0x32A21B4000071B1B Ffma
    temp_169 = 0.0 - temp_110;
    temp_170 = fma(temp_157, 2.0, temp_169);
    // 0x000650: 0x5C68100000870303 Fmul
    temp_171 = temp_138 * temp_161;
    // 0x000658: 0x5C68100000870606 Fmul
    temp_172 = temp_140 * temp_161;
    // 0x000668: 0x5C68100000870707 Fmul
    temp_173 = temp_142 * temp_161;
    // 0x000670: 0x3848000000873231 Shl
    temp_174 = int(temp_166) << 8;
    // 0x000678: 0x5C6810000037380C Fmul
    temp_175 = temp_106 * temp_171;
    // 0x000688: 0xEF94008200473131 Ldc
    temp_176 = temp_174 + 0x2004;
    temp_177 = uint(temp_176) >> 2;
    temp_178 = temp_177 >> 2;
    temp_179 = int(temp_177) & 3;
    temp_180 = fp_c8.data[int(temp_178)][temp_179];
    // 0x000690: 0x59A006000067370D Ffma
    temp_181 = fma(temp_108, temp_172, temp_175);
    // 0x000698: 0x4C69101805C7030C Fmul
    temp_182 = 0.0 - fp_c6.data[23].x;
    temp_183 = temp_171 * temp_182;
    // 0x0006A8: 0x5C68100000371203 Fmul
    temp_184 = temp_73 * temp_171;
    // 0x0006B0: 0x59A406800077360D Ffma
    temp_185 = fma(temp_110, temp_173, temp_181);
    temp_186 = clamp(temp_185, 0.0, 1.0);
    // 0x0006B8: 0x49A1061805D7060C Ffma
    temp_187 = 0.0 - fp_c6.data[23].y;
    temp_188 = fma(temp_172, temp_187, temp_183);
    // 0x0006C8: 0x59A0018000670008 Ffma
    temp_189 = fma(temp_72, temp_172, temp_184);
    // 0x0006D0: 0x49A2078400070D03 Ffma
    temp_190 = fma(temp_186, fp_c1.data[0].x, -6.98316002);
    // 0x0006D8: 0x49A5061805E7070C Ffma
    temp_191 = 0.0 - fp_c6.data[23].z;
    temp_192 = fma(temp_173, temp_191, temp_188);
    temp_193 = clamp(temp_192, 0.0, 1.0);
    // 0x0006E8: 0x59A4040000771606 Ffma
    temp_194 = fma(temp_71, temp_173, temp_189);
    temp_195 = clamp(temp_194, 0.0, 1.0);
    // 0x0006F0: 0x49A1071805D70008 Ffma
    temp_196 = 0.0 - fp_c6.data[23].y;
    temp_197 = fma(temp_72, temp_196, temp_149);
    // 0x0006F8: 0x59A101000347020E Ffma
    temp_198 = 0.0 - temp_163;
    temp_199 = fma(temp_114, temp_198, temp_114);
    // 0x000708: 0x5C68100000370D03 Fmul
    temp_200 = temp_186 * temp_190;
    // 0x000710: 0x59A2030001470605 Ffma
    temp_201 = 0.0 - temp_195;
    temp_202 = fma(temp_195, temp_158, temp_201);
    // 0x000718: 0x49A5041805E71607 Ffma
    temp_203 = 0.0 - fp_c6.data[23].z;
    temp_204 = fma(temp_71, temp_203, temp_197);
    temp_205 = clamp(temp_204, 0.0, 1.0);
    // 0x000728: 0x5C58100000E7340E Fadd
    temp_206 = temp_163 + temp_199;
    // 0x000730: 0x5C90008000370008 Rro
    // 0x000738: 0x5080000000470E0E Mufu
    temp_207 = 1.0 / temp_206;
    // 0x000748: 0x51A0021407B71F03 Ffma
    temp_208 = fma(temp_93, temp_153, fp_c5.data[30].w);
    // 0x000750: 0x5080000000270808 Mufu
    temp_209 = exp2(temp_200);
    // 0x000758: 0x51A0028400370606 Ffma
    temp_210 = fma(temp_195, temp_202, fp_c1.data[0].w);
    // 0x000768: 0x59A103800347070D Ffma
    temp_211 = 0.0 - temp_163;
    temp_212 = fma(temp_205, temp_211, temp_205);
    // 0x000770: 0x5080000000470606 Mufu
    temp_213 = 1.0 / temp_210;
    // 0x000778: 0x49A2078400070C05 Ffma
    temp_214 = fma(temp_193, fp_c1.data[0].x, -6.98316002);
    // 0x000788: 0x5C58100000D7340F Fadd
    temp_215 = temp_163 + temp_212;
    // 0x000790: 0x5C68100000570C05 Fmul
    temp_216 = temp_193 * temp_214;
    // 0x000798: 0x5080000000470F15 Mufu
    temp_217 = 1.0 / temp_215;
    // 0x0007A8: 0x4C6810180147070C Fmul
    temp_218 = temp_205 * fp_c6.data[5].x;
    // 0x0007B0: 0x59A1040000870304 Ffma
    temp_219 = 0.0 - temp_209;
    temp_220 = fma(temp_208, temp_219, temp_209);
    // 0x0007B8: 0x3868103F00070E33 Fmul
    temp_221 = temp_207 * 0.5;
    // 0x0007C8: 0x5B6603800FF73107 Isetp
    temp_222 = floatBitsToUint(temp_180) <= 0u;
    // 0x0007D0: 0x5C90008000570014 Rro
    // 0x0007D8: 0x5C58100000470311 Fadd
    temp_223 = temp_208 + temp_220;
    // 0x0007E8: 0x5080000000271414 Mufu
    temp_224 = exp2(temp_216);
    // 0x0007F0: 0x5C68100000673504 Fmul
    temp_225 = temp_151 * temp_213;
    // 0x0007F8: 0x4C58301407B71C05 Fadd
    temp_226 = 0.0 - fp_c5.data[30].w;
    temp_227 = temp_16 + temp_226;
    // 0x000808: 0x4C58301407B72106 Fadd
    temp_228 = 0.0 - fp_c5.data[30].w;
    temp_229 = temp_15 + temp_228;
    // 0x000810: 0x1E23EA2F98370C0D Fmul32i
    temp_230 = temp_218 * 0.318309873;
    // 0x000818: 0x5C6810000157330E Fmul
    temp_231 = temp_221 * temp_217;
    // 0x000828: 0x4C68101406971113 Fmul
    temp_232 = temp_223 * fp_c5.data[26].y;
    // 0x000830: 0x5C6810000047040C Fmul
    temp_233 = temp_225 * temp_225;
    // 0x000838: 0x51A0029407B71F05 Ffma
    temp_234 = fma(temp_93, temp_227, fp_c5.data[30].w);
    // 0x000848: 0x51A0031407B71F06 Ffma
    temp_235 = fma(temp_93, temp_229, fp_c5.data[30].w);
    // 0x000850: 0x4C68101801570711 Fmul
    temp_236 = temp_205 * fp_c6.data[5].y;
    // 0x000858: 0x4C98079808A7000F Mov
    // 0x000868: 0x59A1068001370D04 Ffma
    temp_237 = 0.0 - temp_232;
    temp_238 = fma(temp_230, temp_237, temp_230);
    // 0x000870: 0x5C68100000E70C0C Fmul
    temp_239 = temp_233 * temp_231;
    // 0x000878: 0x59A10A000147030D Ffma
    temp_240 = 0.0 - temp_224;
    temp_241 = fma(temp_208, temp_240, temp_224);
    // 0x000888: 0x59A10A000147050E Ffma
    temp_242 = 0.0 - temp_224;
    temp_243 = fma(temp_234, temp_242, temp_224);
    // 0x000890: 0x59A10A0001470614 Ffma
    temp_244 = 0.0 - temp_224;
    temp_245 = fma(temp_235, temp_244, temp_224);
    // 0x000898: 0x1E23EA2F98371115 Fmul32i
    temp_246 = temp_236 * 0.318309873;
    // 0x0008A8: 0x59A1040000870611 Ffma
    temp_247 = 0.0 - temp_209;
    temp_248 = fma(temp_235, temp_247, temp_209);
    // 0x0008B0: 0x59A1040000870508 Ffma
    temp_249 = 0.0 - temp_209;
    temp_250 = fma(temp_234, temp_249, temp_209);
    // 0x0008B8: 0x4C68101808770F0F Fmul
    temp_251 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0008C8: 0x5C58100000E7050E Fadd
    temp_252 = temp_234 + temp_243;
    // 0x0008D0: 0x5C58100001470614 Fadd
    temp_253 = temp_235 + temp_245;
    // 0x0008D8: 0x5C58100000D7030D Fadd
    temp_254 = temp_208 + temp_241;
    // 0x0008E8: 0x5C58100001170617 Fadd
    temp_255 = temp_235 + temp_248;
    // 0x0008F0: 0x5C58100000870518 Fadd
    temp_256 = temp_234 + temp_250;
    // 0x0008F8: 0x51A0121801470F08 Ffma
    temp_257 = fma(temp_251, temp_87, fp_c6.data[5].x);
    // 0x000908: 0x51A0129801570F11 Ffma
    temp_258 = fma(temp_251, temp_88, fp_c6.data[5].y);
    // 0x000910: 0x4C68101406970E0E Fmul
    temp_259 = temp_252 * fp_c5.data[26].y;
    // 0x000918: 0x4C68101406971414 Fmul
    temp_260 = temp_253 * fp_c5.data[26].y;
    // 0x000928: 0x51A0131801670F0F Ffma
    temp_261 = fma(temp_251, temp_89, fp_c6.data[5].z);
    // 0x000930: 0x4C68101406970D0D Fmul
    temp_262 = temp_254 * fp_c5.data[26].y;
    // 0x000938: 0x5C68100000C7070C Fmul
    temp_263 = temp_205 * temp_239;
    // 0x000948: 0x4C68101801670713 Fmul
    temp_264 = temp_205 * fp_c6.data[5].z;
    // 0x000950: 0x4C68101406971717 Fmul
    temp_265 = temp_255 * fp_c5.data[26].y;
    // 0x000958: 0x5C68100001171411 Fmul
    temp_266 = temp_260 * temp_258;
    // 0x000968: 0x5C68100000F70E0E Fmul
    temp_267 = temp_259 * temp_261;
    // 0x000970: 0x51A5048400370A0F Ffma
    temp_268 = 0.0 - temp_18;
    temp_269 = fma(temp_94, temp_268, fp_c1.data[0].w);
    temp_270 = clamp(temp_269, 0.0, 1.0);
    // 0x000978: 0x5C68100000870D0D Fmul
    temp_271 = temp_262 * temp_257;
    // 0x000988: 0x5C68100000271209 Fmul
    temp_272 = temp_73 * temp_114;
    // 0x000990: 0x4C68101403070B0A Fmul
    temp_273 = temp_136 * fp_c5.data[12].x;
    // 0x000998: 0x5C68100000C7112D Fmul
    temp_274 = temp_266 * temp_263;
    // 0x0009A8: 0x5C68100000C70E2E Fmul
    temp_275 = temp_267 * temp_263;
    // 0x0009B0: 0x49A207980AC70F0E Ffma
    temp_276 = 0.0 - temp_270;
    temp_277 = fma(temp_270, fp_c6.data[43].x, temp_276);
    // 0x0009B8: 0x49A207980AD70F11 Ffma
    temp_278 = 0.0 - temp_270;
    temp_279 = fma(temp_270, fp_c6.data[43].y, temp_278);
    // 0x0009C8: 0x49A207980AE70F0F Ffma
    temp_280 = 0.0 - temp_270;
    temp_281 = fma(temp_270, fp_c6.data[43].z, temp_280);
    // 0x0009D0: 0x5C68100000C70D2C Fmul
    temp_282 = temp_271 * temp_263;
    // 0x0009D8: 0x1E23EA2F98371313 Fmul32i
    temp_283 = temp_264 * 0.318309873;
    // 0x0009E8: 0x4C68101406971818 Fmul
    temp_284 = temp_256 * fp_c5.data[26].y;
    // 0x0009F0: 0x59A10A8001771507 Ffma
    temp_285 = 0.0 - temp_265;
    temp_286 = fma(temp_246, temp_285, temp_246);
    // 0x0009F8: 0x4C68101403170B0C Fmul
    temp_287 = temp_136 * fp_c5.data[12].y;
    // 0x000A08: 0x4C68101403270B0B Fmul
    temp_288 = temp_136 * fp_c5.data[12].z;
    // 0x000A10: 0x3858103F80070E17 Fadd
    temp_289 = temp_277 + 1.0;
    // 0x000A18: 0x3858103F8007112A Fadd
    temp_290 = temp_279 + 1.0;
    // 0x000A28: 0x3858103F80070F2B Fadd
    temp_291 = temp_281 + 1.0;
    // 0x000A30: 0x32A21C4000070930 Ffma
    temp_292 = 0.0 - temp_106;
    temp_293 = fma(temp_272, 2.0, temp_292);
    // 0x000A38: 0x4C68101801470A09 Fmul
    temp_294 = temp_273 * fp_c6.data[5].x;
    // 0x000A48: 0x59A1098001871308 Ffma
    temp_295 = 0.0 - temp_284;
    temp_296 = fma(temp_283, temp_295, temp_283);
    // 0x000A50: 0x4C68101801570C0A Fmul
    temp_297 = temp_287 * fp_c6.data[5].y;
    // 0x000A58: 0x4C68101801670B0B Fmul
    temp_298 = temp_288 * fp_c6.data[5].z;
    // 0x000A68: 0x5C9807800FF70013 Mov
    // 0x000A70: 0x5C9807800FF7000C Mov
    // 0x000A78: 0x5C9807800FF7000D Mov
    // 0x000A88: 0x5C9807800FF7000E Mov
    // 0x000A90: 0x5C9807800FF7000F Mov
    // 0x000A98: 0x59A40B8001772017 Ffma
    temp_299 = fma(temp_14, temp_289, temp_289);
    temp_300 = clamp(temp_299, 0.0, 1.0);
    // 0x000AA8: 0x59A4150002A7212A Ffma
    temp_301 = fma(temp_15, temp_290, temp_290);
    temp_302 = clamp(temp_301, 0.0, 1.0);
    // 0x000AB0: 0x59A4158002B71C2B Ffma
    temp_303 = fma(temp_16, temp_291, temp_291);
    temp_304 = clamp(temp_303, 0.0, 1.0);
    // 0x000AB8: 0x1E23E22F98372C2C Fmul32i
    temp_305 = temp_282 * 0.159154937;
    // 0x000AC8: 0x1E23E22F98372D2D Fmul32i
    temp_306 = temp_274 * 0.159154937;
    // 0x000AD0: 0x1E23E22F98372E2E Fmul32i
    temp_307 = temp_275 * 0.159154937;
    // 0x000AD8: 0xF0F800000000000F Sync
    temp_308 = 0.0;
    temp_309 = 0.0;
    temp_310 = 0.0;
    temp_311 = 0.0;
    temp_312 = 0.0;
    temp_313 = 0.0;
    temp_314 = 0.0;
    temp_315 = 0.0;
    temp_316 = 0.0;
    temp_317 = 0.0;
    temp_318 = 0.0;
    temp_319 = 0.0;
    if (!temp_222)
    {
        // 0x000AE8: 0x5C9807800FF70029 Mov
        temp_320 = 0;
        do
        {
            // 0x000AF0: 0x5C18020002973228 Iscadd
            temp_322 = int(temp_166) << 4;
            temp_323 = temp_322 + temp_320;
            // 0x000AF8: 0xE003FF87CFF7FF39 Ipa
            // 0x000B08: 0x1C00000000172929 Iadd32i
            temp_324 = temp_320 + 1;
            // 0x000B10: 0xE003FF87CFF7FF3B Ipa
            // 0x000B18: 0x3848000000472828 Shl
            temp_325 = temp_323 << 4;
            // 0x000B28: 0xE003FF87CFF7FF3A Ipa
            // 0x000B30: 0x5B6C03800317290F Isetp
            temp_321 = uint(temp_324) >= floatBitsToUint(temp_180);
            // 0x000B38: 0xE290000058000000 Ssy
            // 0x000B48: 0xEF94008200072828 Ldc
            temp_326 = temp_325 + 0x2000;
            temp_327 = uint(temp_326) >> 2;
            temp_328 = temp_327 >> 2;
            temp_329 = int(temp_327) & 3;
            temp_330 = fp_c8.data[int(temp_328)][temp_329];
            // 0x000B50: 0x5080000000473939 Mufu
            // 0x000B58: 0x5080000000473B3B Mufu
            // 0x000B68: 0x5080000000473A3A Mufu
            // 0x000B70: 0xE043FF8D0397FF39 Ipa
            temp_331 = in_attr5.x;
            // 0x000B78: 0xE043FF8D83B7FF3B Ipa
            temp_332 = in_attr5.z;
            // 0x000B88: 0xE043FF8D43A7FF3A Ipa
            temp_333 = in_attr5.y;
            // 0x000B90: 0x3848000000672828 Shl
            temp_334 = floatBitsToInt(temp_330) << 6;
            // 0x000B98: 0xEF95008001072810 Ldc
            temp_335 = temp_334 + 16;
            temp_336 = uint(temp_335) >> 2;
            temp_337 = temp_336 >> 2;
            temp_338 = int(temp_336) & 3;
            temp_339 = fp_c8.data[int(temp_337)][temp_338];
            temp_340 = int(temp_336) + 1;
            temp_341 = uint(temp_340) >> 2;
            temp_342 = temp_340 & 3;
            temp_343 = fp_c8.data[int(temp_341)][temp_342];
            // 0x000BA8: 0xEF95008001872814 Ldc
            temp_344 = temp_334 + 24;
            temp_345 = uint(temp_344) >> 2;
            temp_346 = temp_345 >> 2;
            temp_347 = int(temp_345) & 3;
            temp_348 = fp_c8.data[int(temp_346)][temp_347];
            temp_349 = int(temp_345) + 1;
            temp_350 = uint(temp_349) >> 2;
            temp_351 = temp_349 & 3;
            temp_352 = fp_c8.data[int(temp_350)][temp_351];
            // 0x000BB0: 0xEF95008002072818 Ldc
            temp_353 = temp_334 + 32;
            temp_354 = uint(temp_353) >> 2;
            temp_355 = temp_354 >> 2;
            temp_356 = int(temp_354) & 3;
            temp_357 = fp_c8.data[int(temp_355)][temp_356];
            temp_358 = int(temp_354) + 1;
            temp_359 = uint(temp_358) >> 2;
            temp_360 = temp_358 & 3;
            temp_361 = fp_c8.data[int(temp_359)][temp_360];
            // 0x000BB8: 0x5C58300003971039 Fadd
            temp_362 = 0.0 - temp_331;
            temp_363 = temp_339 + temp_362;
            // 0x000BC8: 0x5C58300003A7113A Fadd
            temp_364 = 0.0 - temp_333;
            temp_365 = temp_343 + temp_364;
            // 0x000BD0: 0x5C58300003B7143B Fadd
            temp_366 = 0.0 - temp_332;
            temp_367 = temp_348 + temp_366;
            // 0x000BD8: 0x5C6810000397393C Fmul
            temp_368 = temp_363 * temp_363;
            // 0x000BE8: 0x59A11D8003B7153E Ffma
            temp_369 = 0.0 - temp_367;
            temp_370 = fma(temp_352, temp_369, temp_367);
            // 0x000BF0: 0xEF95008003872814 Ldc
            temp_371 = temp_334 + 56;
            temp_372 = uint(temp_371) >> 2;
            temp_373 = temp_372 >> 2;
            temp_374 = int(temp_372) & 3;
            temp_375 = fp_c8.data[int(temp_373)][temp_374];
            temp_376 = int(temp_372) + 1;
            temp_377 = uint(temp_376) >> 2;
            temp_378 = temp_376 & 3;
            temp_379 = fp_c8.data[int(temp_377)][temp_378];
            // 0x000BF8: 0x59A01E0003A73A3C Ffma
            temp_380 = fma(temp_365, temp_365, temp_368);
            // 0x000C08: 0x59A01E0003E73E3F Ffma
            temp_381 = fma(temp_370, temp_370, temp_380);
            // 0x000C10: 0x5080000000573F3D Mufu
            temp_382 = inversesqrt(temp_381);
            // 0x000C18: 0x5080000000873F3F Mufu
            temp_383 = sqrt(temp_381);
            // 0x000C28: 0x5C68100003D73910 Fmul
            temp_384 = temp_363 * temp_382;
            // 0x000C30: 0x5C68100003D73A11 Fmul
            temp_385 = temp_365 * temp_382;
            // 0x000C38: 0x5C68100003D73E3D Fmul
            temp_386 = temp_370 * temp_382;
            // 0x000C48: 0x5C69100001871010 Fmul
            temp_387 = 0.0 - temp_357;
            temp_388 = temp_384 * temp_387;
            // 0x000C50: 0xEF94008002872818 Ldc
            temp_389 = temp_334 + 40;
            temp_390 = uint(temp_389) >> 2;
            temp_391 = temp_390 >> 2;
            temp_392 = int(temp_390) & 3;
            temp_393 = fp_c8.data[int(temp_391)][temp_392];
            // 0x000C58: 0x59A1080001971119 Ffma
            temp_394 = 0.0 - temp_361;
            temp_395 = fma(temp_385, temp_394, temp_388);
            // 0x000C68: 0xEF95008003072810 Ldc
            temp_396 = temp_334 + 48;
            temp_397 = uint(temp_396) >> 2;
            temp_398 = temp_397 >> 2;
            temp_399 = int(temp_397) & 3;
            temp_400 = fp_c8.data[int(temp_398)][temp_399];
            temp_401 = int(temp_397) + 1;
            temp_402 = uint(temp_401) >> 2;
            temp_403 = temp_401 & 3;
            temp_404 = fp_c8.data[int(temp_402)][temp_403];
            // 0x000C70: 0x59A10C8001873D18 Ffma
            temp_405 = 0.0 - temp_393;
            temp_406 = fma(temp_386, temp_405, temp_395);
            // 0x000C78: 0x010404000007F019 Mov32i
            // 0x000C88: 0x59A4088003F7103F Ffma
            temp_407 = fma(temp_400, temp_383, temp_404);
            temp_408 = clamp(temp_407, 0.0, 1.0);
            // 0x000C90: 0x59A40A8001471814 Ffma
            temp_409 = fma(temp_406, temp_375, temp_379);
            temp_410 = clamp(temp_409, 0.0, 1.0);
            // 0x000C98: 0x33A00CC000073F15 Ffma
            temp_411 = fma(temp_408, -2.0, 3.0);
            // 0x000CA8: 0x5C68100003F73F18 Fmul
            temp_412 = temp_408 * temp_408;
            // 0x000CB0: 0x33A00CC000071419 Ffma
            temp_413 = fma(temp_410, -2.0, 3.0);
            // 0x000CB8: 0x5C68100001471414 Fmul
            temp_414 = temp_410 * temp_410;
            // 0x000CC8: 0x5C68100001571815 Fmul
            temp_415 = temp_412 * temp_411;
            // 0x000CD0: 0x5C68100001971418 Fmul
            temp_416 = temp_414 * temp_413;
            // 0x000CD8: 0x39585042F0073B14 Fadd
            temp_417 = abs(temp_367);
            temp_418 = temp_417 + -120.0;
            // 0x000CE8: 0x5C68100001571815 Fmul
            temp_419 = temp_416 * temp_415;
            // 0x000CF0: 0x1EABD4CCCCD71414 Fmul32i
            temp_420 = temp_418 * -0.0500000007;
            temp_421 = clamp(temp_420, 0.0, 1.0);
            // 0x000CF8: 0x5C68100001471514 Fmul
            temp_422 = temp_419 * temp_421;
            // 0x000D08: 0x36247F9000171515 Xmad
            temp_423 = floatBitsToUint(temp_419) >> 16;
            temp_424 = int(temp_423) << 16;
            // 0x000D10: 0x5BB383800FF71407 Fsetp
            temp_425 = temp_422 <= 0.0;
            // 0x000D18: 0x7A05083C0F00FF15 Hadd2
            temp_320 = temp_324;
            temp_426 = uint(temp_424);
            temp_427 = temp_308;
            temp_428 = temp_309;
            temp_429 = temp_310;
            temp_430 = temp_311;
            temp_431 = temp_312;
            temp_432 = temp_313;
            if (temp_425)
            {
                temp_433 = unpackHalf2x16(uint(temp_424)).y;
                temp_434 = packHalf2x16(vec2(1.0, temp_433));
                temp_426 = temp_434;
            }
            // 0x000D28: 0x5D2103902FF71507 Hsetp2
            temp_435 = unpackHalf2x16(temp_426).x;
            temp_436 = temp_435 == 0.0;
            // 0x000D30: 0xF0F800000008000F Sync
            if (temp_436)
            {
                // 0x000D38: 0x5C6810000357353F Fmul
                temp_437 = temp_151 * temp_151;
                // 0x000D48: 0x5080000000471010 Mufu
                temp_438 = 1.0 / temp_400;
                // 0x000D50: 0xEF94008002C7283D Ldc
                temp_439 = temp_334 + 44;
                temp_440 = uint(temp_439) >> 2;
                temp_441 = temp_440 >> 2;
                temp_442 = int(temp_440) & 3;
                temp_443 = fp_c8.data[int(temp_441)][temp_442];
                // 0x000D58: 0xEF9400800087283E Ldc
                temp_444 = temp_334 + 8;
                temp_445 = uint(temp_444) >> 2;
                temp_446 = temp_445 >> 2;
                temp_447 = int(temp_445) & 3;
                temp_448 = fp_c8.data[int(temp_446)][temp_447];
                // 0x000D68: 0x5C69100001071111 Fmul
                temp_449 = 0.0 - temp_438;
                temp_450 = temp_404 * temp_449;
                // 0x000D70: 0x5C60138001173B3B Fmnmx
                temp_451 = min(temp_367, temp_450);
                // 0x000D78: 0x5C61178003B71110 Fmnmx
                temp_452 = 0.0 - temp_450;
                temp_453 = max(temp_452, temp_451);
                // 0x000D88: 0x59A01E0001071018 Ffma
                temp_454 = fma(temp_453, temp_453, temp_380);
                // 0x000D90: 0x5080000000571811 Mufu
                temp_455 = inversesqrt(temp_454);
                // 0x000D98: 0x5080000000871818 Mufu
                temp_456 = sqrt(temp_454);
                // 0x000DA8: 0x5C68100001173939 Fmul
                temp_457 = temp_363 * temp_455;
                // 0x000DB0: 0x5080000000473D3D Mufu
                temp_458 = 1.0 / temp_443;
                // 0x000DB8: 0x5C68100001173A3C Fmul
                temp_459 = temp_365 * temp_455;
                // 0x000DC8: 0x5C6810000117103A Fmul
                temp_460 = temp_453 * temp_455;
                // 0x000DD0: 0x5C68100003E7143E Fmul
                temp_461 = temp_422 * temp_448;
                // 0x000DD8: 0x5C58100003973815 Fadd
                temp_462 = temp_106 + temp_457;
                // 0x000DE8: 0x5C58100003C7373B Fadd
                temp_463 = temp_108 + temp_459;
                // 0x000DF0: 0x5C58100003A73619 Fadd
                temp_464 = temp_110 + temp_460;
                // 0x000DF8: 0x5C68100001571510 Fmul
                temp_465 = temp_462 * temp_462;
                // 0x000E08: 0x51A00C0400473D18 Ffma
                temp_466 = fma(temp_458, temp_456, fp_c1.data[1].x);
                // 0x000E10: 0x5080000000471818 Mufu
                temp_467 = 1.0 / temp_466;
                // 0x000E18: 0x59A0080003B73B10 Ffma
                temp_468 = fma(temp_463, temp_463, temp_465);
                // 0x000E28: 0x59A0080001971910 Ffma
                temp_469 = fma(temp_464, temp_464, temp_468);
                // 0x000E30: 0x5080000000571010 Mufu
                temp_470 = inversesqrt(temp_469);
                // 0x000E38: 0x5C68100001071515 Fmul
                temp_471 = temp_462 * temp_470;
                // 0x000E48: 0x5C68100001073B3B Fmul
                temp_472 = temp_463 * temp_470;
                // 0x000E50: 0x5C68100001071919 Fmul
                temp_473 = temp_464 * temp_470;
                // 0x000E58: 0xEF95008000072810 Ldc
                temp_474 = uint(temp_334) >> 2;
                temp_475 = temp_474 >> 2;
                temp_476 = int(temp_474) & 3;
                temp_477 = fp_c8.data[int(temp_475)][temp_476];
                temp_478 = int(temp_474) + 1;
                temp_479 = uint(temp_478) >> 2;
                temp_480 = temp_478 & 3;
                temp_481 = fp_c8.data[int(temp_479)][temp_480];
                // 0x000E68: 0x5C68100001573928 Fmul
                temp_482 = temp_457 * temp_471;
                // 0x000E70: 0x5C68100001571215 Fmul
                temp_483 = temp_73 * temp_471;
                // 0x000E78: 0x5C68100003971239 Fmul
                temp_484 = temp_73 * temp_457;
                // 0x000E88: 0x59A0140003B73C28 Ffma
                temp_485 = fma(temp_459, temp_472, temp_482);
                // 0x000E90: 0x59A00A8003B70015 Ffma
                temp_486 = fma(temp_72, temp_472, temp_483);
                // 0x000E98: 0x59A01C8003C70039 Ffma
                temp_487 = fma(temp_72, temp_459, temp_484);
                // 0x000EA8: 0x01040DF760C7F03B Mov32i
                // 0x000EB0: 0x1E23FB333337183C Fmul32i
                temp_488 = temp_467 * 1.39999998;
                // 0x000EB8: 0x59A4140001973A28 Ffma
                temp_489 = fma(temp_460, temp_473, temp_485);
                temp_490 = clamp(temp_489, 0.0, 1.0);
                // 0x000EC8: 0x59A40A8001971615 Ffma
                temp_491 = fma(temp_71, temp_473, temp_486);
                temp_492 = clamp(temp_491, 0.0, 1.0);
                // 0x000ED0: 0x59A01C8003A71639 Ffma
                temp_493 = fma(temp_71, temp_460, temp_487);
                // 0x000ED8: 0x5C68100003C73C3C Fmul
                temp_494 = temp_488 * temp_488;
                // 0x000EE8: 0x49A21D840007283B Ffma
                temp_495 = fma(temp_490, fp_c1.data[0].x, -6.98316002);
                // 0x000EF0: 0x59A20A8001573F3A Ffma
                temp_496 = 0.0 - temp_492;
                temp_497 = fma(temp_437, temp_492, temp_496);
                // 0x000EF8: 0x5C5C30000FF73919 Fadd
                temp_498 = temp_493 + -0.0;
                temp_499 = clamp(temp_498, 0.0, 1.0);
                // 0x000F08: 0x59A11E0003C7393C Ffma
                temp_500 = 0.0 - temp_494;
                temp_501 = fma(temp_493, temp_500, temp_494);
                // 0x000F10: 0x5C68100003B7283B Fmul
                temp_502 = temp_490 * temp_495;
                // 0x000F18: 0x51A01D040037153A Ffma
                temp_503 = fma(temp_492, temp_497, fp_c1.data[0].w);
                // 0x000F28: 0x59A10C8001973415 Ffma
                temp_504 = 0.0 - temp_499;
                temp_505 = fma(temp_163, temp_504, temp_499);
                // 0x000F30: 0x5080000000473A3A Mufu
                temp_506 = 1.0 / temp_503;
                // 0x000F38: 0x5C5C100003C7393F Fadd
                temp_507 = temp_493 + temp_501;
                temp_508 = clamp(temp_507, 0.0, 1.0);
                // 0x000F48: 0x5C90008003B7003B Rro
                // 0x000F50: 0x5080000000273B18 Mufu
                temp_509 = exp2(temp_502);
                // 0x000F58: 0x5C5810000157343D Fadd
                temp_510 = temp_163 + temp_505;
                // 0x000F68: 0x5080000000473D15 Mufu
                temp_511 = 1.0 / temp_510;
                // 0x000F70: 0x5C68100001071410 Fmul
                temp_512 = temp_422 * temp_477;
                // 0x000F78: 0x5C68100001171411 Fmul
                temp_513 = temp_422 * temp_481;
                // 0x000F88: 0x5C68100003A73528 Fmul
                temp_514 = temp_151 * temp_506;
                // 0x000F90: 0x59A10C0001870339 Ffma
                temp_515 = 0.0 - temp_509;
                temp_516 = fma(temp_208, temp_515, temp_509);
                // 0x000F98: 0x59A10C0001870614 Ffma
                temp_517 = 0.0 - temp_509;
                temp_518 = fma(temp_235, temp_517, temp_509);
                // 0x000FA8: 0x59A10C0001870518 Ffma
                temp_519 = 0.0 - temp_509;
                temp_520 = fma(temp_234, temp_519, temp_509);
                // 0x000FB0: 0x5C68100001573315 Fmul
                temp_521 = temp_221 * temp_511;
                // 0x000FB8: 0x5C68100002872828 Fmul
                temp_522 = temp_514 * temp_514;
                // 0x000FC8: 0x5C58100003970339 Fadd
                temp_523 = temp_208 + temp_516;
                // 0x000FD0: 0x5C58100001470614 Fadd
                temp_524 = temp_235 + temp_518;
                // 0x000FD8: 0x5C58100001870518 Fadd
                temp_525 = temp_234 + temp_520;
                // 0x000FE8: 0x5C68100001572828 Fmul
                temp_526 = temp_522 * temp_521;
                // 0x000FF0: 0x4C68101406973939 Fmul
                temp_527 = temp_523 * fp_c5.data[26].y;
                // 0x000FF8: 0x4C68101406971414 Fmul
                temp_528 = temp_524 * fp_c5.data[26].y;
                // 0x001008: 0x4C68101406971818 Fmul
                temp_529 = temp_525 * fp_c5.data[26].y;
                // 0x001010: 0x5C68100002871928 Fmul
                temp_530 = temp_499 * temp_526;
                // 0x001018: 0x5C68100003971039 Fmul
                temp_531 = temp_512 * temp_527;
                // 0x001028: 0x5C68100001471115 Fmul
                temp_532 = temp_513 * temp_528;
                // 0x001030: 0x5C68100001873E19 Fmul
                temp_533 = temp_461 * temp_529;
                // 0x001038: 0x5C68100003F71010 Fmul
                temp_534 = temp_512 * temp_508;
                // 0x001048: 0x5C68100003F71111 Fmul
                temp_535 = temp_513 * temp_508;
                // 0x001050: 0x5C68100003F73E3E Fmul
                temp_536 = temp_461 * temp_508;
                // 0x001058: 0x5C68100002873939 Fmul
                temp_537 = temp_531 * temp_530;
                // 0x001068: 0x5C68100002871515 Fmul
                temp_538 = temp_532 * temp_530;
                // 0x001070: 0x5C68100002871928 Fmul
                temp_539 = temp_533 * temp_530;
                // 0x001078: 0x49A017840067102F Ffma
                temp_540 = fma(temp_534, fp_c1.data[1].z, temp_308);
                // 0x001088: 0x49A007040067110E Ffma
                temp_541 = fma(temp_535, fp_c1.data[1].z, temp_309);
                // 0x001090: 0x49A0078400673E0F Ffma
                temp_542 = fma(temp_536, fp_c1.data[1].z, temp_310);
                // 0x001098: 0x49A0098400573913 Ffma
                temp_543 = fma(temp_537, fp_c1.data[1].y, temp_311);
                // 0x0010A8: 0x49A006040057150C Ffma
                temp_544 = fma(temp_538, fp_c1.data[1].y, temp_312);
                // 0x0010B0: 0x49A006840057280D Ffma
                temp_545 = fma(temp_539, fp_c1.data[1].y, temp_313);
                // 0x0010B8: 0xF0F800000007000F Sync
                temp_427 = temp_540;
                temp_428 = temp_541;
                temp_429 = temp_542;
                temp_430 = temp_543;
                temp_431 = temp_544;
                temp_432 = temp_545;
            }
            // 0x0010C8: 0xE2400FFFA209000F Bra
            temp_308 = temp_427;
            temp_309 = temp_428;
            temp_310 = temp_429;
            temp_311 = temp_430;
            temp_312 = temp_431;
            temp_313 = temp_432;
            temp_314 = temp_427;
            temp_315 = temp_428;
            temp_316 = temp_430;
            temp_317 = temp_429;
            temp_318 = temp_431;
            temp_319 = temp_432;
        }
        while (!temp_321);
        // 0x0010D0: 0xF0F800000007000F Sync
    }
    // 0x0010D8: 0x5C62578000071210 Fmnmx
    temp_546 = abs(temp_73);
    temp_547 = abs(temp_72);
    temp_548 = max(temp_546, temp_547);
    // 0x0010E8: 0xE003FF87CFF7FF33 Ipa
    // 0x0010F0: 0x38681040E0071E34 Fmul
    temp_549 = temp_92 * 7.0;
    // 0x0010F8: 0x5C62578001A73011 Fmnmx
    temp_550 = abs(temp_293);
    temp_551 = abs(temp_168);
    temp_552 = max(temp_550, temp_551);
    // 0x001108: 0x010000000017F018 Mov32i
    // 0x001110: 0x3868104080071E29 Fmul
    temp_553 = temp_92 * 4.0;
    // 0x001118: 0x4C98079C02070037 Mov
    // 0x001128: 0x5C60578001071610 Fmnmx
    temp_554 = abs(temp_71);
    temp_555 = max(temp_554, temp_548);
    // 0x001130: 0x5C60578001171B11 Fmnmx
    temp_556 = abs(temp_170);
    temp_557 = max(temp_556, temp_552);
    // 0x001138: 0x5080000000471015 Mufu
    temp_558 = 1.0 / temp_555;
    // 0x001148: 0x3859103F80071E1E Fadd
    temp_559 = 0.0 - temp_92;
    temp_560 = temp_559 + 1.0;
    // 0x001150: 0x5080000000471111 Mufu
    temp_561 = 1.0 / temp_557;
    // 0x001158: 0x5C69100001571616 Fmul
    temp_562 = 0.0 - temp_558;
    temp_563 = temp_71 * temp_562;
    // 0x001168: 0x5C68100001571214 Fmul
    temp_564 = temp_73 * temp_558;
    // 0x001170: 0x5080000000473333 Mufu
    // 0x001178: 0x5C68100001570015 Fmul
    temp_565 = temp_72 * temp_558;
    // 0x001188: 0x5C68100001173019 Fmul
    temp_566 = temp_293 * temp_561;
    // 0x001190: 0x5C68100001171A1A Fmul
    temp_567 = temp_168 * temp_561;
    // 0x001198: 0x5C69100001171B1B Fmul
    temp_568 = 0.0 - temp_561;
    temp_569 = temp_170 * temp_568;
    // 0x0011A8: 0xC0BA0163EFF71410 Tex
    temp_570 = textureLod(fp_t_tcb_16, vec3(temp_564, temp_565, temp_563), 0.0).xyz;
    temp_571 = temp_570.x;
    temp_572 = temp_570.y;
    temp_573 = temp_570.z;
    // 0x0011B0: 0x5C98078001670028 Mov
    // 0x0011B8: 0xC1BA0143F3471818 Tex
    temp_574 = textureLod(fp_t_tcb_14, vec4(temp_566, temp_567, temp_569, float(1)), temp_549).xyz;
    temp_575 = temp_574.x;
    temp_576 = temp_574.y;
    temp_577 = temp_574.z;
    // 0x0011C8: 0x3859103F80070235 Fadd
    temp_578 = 0.0 - temp_114;
    temp_579 = temp_578 + 1.0;
    // 0x0011D0: 0xD9A2018282871414 Texs
    temp_580 = textureLod(fp_t_tcb_18, vec3(temp_564, temp_565, temp_563), temp_553).xyz;
    temp_581 = temp_580.x;
    temp_582 = temp_580.y;
    temp_583 = temp_580.z;
    // 0x0011D8: 0x49A002180A172F04 Ffma
    temp_584 = fma(temp_314, fp_c6.data[40].y, temp_238);
    // 0x0011E8: 0xE043FF910337FF30 Ipa
    temp_585 = in_attr9.x;
    // 0x0011F0: 0x49A003980A170E07 Ffma
    temp_586 = fma(temp_315, fp_c6.data[40].y, temp_286);
    // 0x0011F8: 0xE043FF914337FF31 Ipa
    temp_587 = in_attr9.y;
    // 0x001208: 0x010410676C97F02F Mov32i
    // 0x001210: 0xE043FF918337FF32 Ipa
    temp_588 = in_attr9.z;
    // 0x001218: 0xDEBA0000C3773030 TexB
    temp_589 = texture(fp_t_cb7_20, vec3(temp_585, temp_587, temp_588)).x;
    // 0x001228: 0x5C68100001E71E0E Fmul
    temp_590 = temp_560 * temp_560;
    // 0x001230: 0x4C68101809073516 Fmul
    temp_591 = temp_579 * fp_c6.data[36].x;
    // 0x001238: 0x49A016180A17132C Ffma
    temp_592 = fma(temp_316, fp_c6.data[40].y, temp_305);
    // 0x001248: 0x5080400000371616 Mufu
    temp_593 = abs(temp_591);
    temp_594 = log2(temp_593);
    // 0x001250: 0x49A0178400970213 Ffma
    temp_595 = fma(temp_114, fp_c1.data[2].y, 8.40400028);
    // 0x001258: 0x0103E2CD9E87F01B Mov32i
    // 0x001268: 0x5C68100000E70E0E Fmul
    temp_596 = temp_590 * temp_590;
    // 0x001270: 0x49A004180A170F08 Ffma
    temp_597 = fma(temp_317, fp_c6.data[40].y, temp_296);
    // 0x001278: 0x1E23E468DB97020F Fmul32i
    temp_598 = temp_114 * 0.193900004;
    // 0x001288: 0x49A016980A170C2D Ffma
    temp_599 = fma(temp_318, fp_c6.data[40].y, temp_306);
    // 0x001290: 0x51A0098400C70213 Ffma
    temp_600 = fma(temp_114, temp_595, fp_c1.data[3].x);
    // 0x001298: 0x0103F0000007F029 Mov32i
    // 0x0012A8: 0x49A20D8400B70E0C Ffma
    temp_601 = fma(temp_596, fp_c1.data[2].w, -0.168799996);
    // 0x0012B0: 0x0104066978D7F02F Mov32i
    // 0x0012B8: 0x49A0078400770E0F Ffma
    temp_602 = fma(temp_596, fp_c1.data[1].w, temp_598);
    // 0x0012C8: 0x49A017180A170D2E Ffma
    temp_603 = fma(temp_319, fp_c6.data[40].y, temp_307);
    // 0x0012D0: 0x51A0098400D7021E Ffma
    temp_604 = fma(temp_114, temp_600, fp_c1.data[3].y);
    // 0x0012D8: 0x5080000000373513 Mufu
    temp_605 = log2(temp_579);
    // 0x0012E8: 0x4C68101809171616 Fmul
    temp_606 = temp_594 * fp_c6.data[36].y;
    // 0x0012F0: 0x5C68100000C70E1B Fmul
    temp_607 = temp_596 * temp_601;
    // 0x0012F8: 0x32A014BF0007000C Ffma
    temp_608 = fma(temp_72, 0.5, 0.5);
    // 0x001308: 0x088BF05D63970F0D Fadd32i
    temp_609 = temp_602 + -0.522800028;
    // 0x001310: 0x49A2178400870E2F Ffma
    temp_610 = fma(temp_596, fp_c1.data[2].x, -3.60299993);
    // 0x001318: 0x4C9807980B470034 Mov
    // 0x001328: 0x5C90008001670029 Rro
    // 0x001330: 0x4C68101808772727 Fmul
    temp_611 = temp_90 * fp_c6.data[33].w;
    // 0x001338: 0x5084000000272929 Mufu
    temp_612 = exp2(temp_606);
    temp_613 = clamp(temp_612, 0.0, 1.0);
    // 0x001348: 0x5C60138001E71B0F Fmnmx
    temp_614 = min(temp_607, temp_604);
    // 0x001350: 0x4C98079800A7001E Mov
    // 0x001358: 0x4C98079809970031 Mov
    // 0x001368: 0x4C9807980097001B Mov
    // 0x001370: 0x5C68100000D7020D Fmul
    temp_615 = temp_114 * temp_609;
    // 0x001378: 0x4C68101808971300 Fmul
    temp_616 = temp_605 * fp_c6.data[34].y;
    // 0x001388: 0x51A0178400A70E2F Ffma
    temp_617 = fma(temp_596, temp_610, fp_c1.data[2].z);
    // 0x001390: 0x4C59101800671E16 Fadd
    temp_618 = 0.0 - fp_c6.data[2].z;
    temp_619 = temp_618 + fp_c6.data[1].z;
    // 0x001398: 0x4C5810140817311E Fadd
    temp_620 = fp_c6.data[38].y + fp_c5.data[32].y;
    // 0x0013A8: 0x4C59101800571B13 Fadd
    temp_621 = 0.0 - fp_c6.data[2].y;
    temp_622 = temp_621 + fp_c6.data[1].y;
    // 0x0013B0: 0x4C98079408270031 Mov
    // 0x0013B8: 0x4C98079800870002 Mov
    // 0x0013C8: 0x5C9000800007001B Rro
    // 0x0013D0: 0x59A0068002F70E2F Ffma
    temp_623 = fma(temp_596, temp_617, temp_615);
    // 0x0013D8: 0xE04BFF904337FF0D Ipa
    temp_624 = in_attr8.y;
    temp_625 = clamp(temp_624, 0.0, 1.0);
    // 0x0013E8: 0x5C68100002971E1E Fmul
    temp_626 = temp_620 * temp_613;
    // 0x0013F0: 0x5084000000271B1B Mufu
    temp_627 = exp2(temp_616);
    temp_628 = clamp(temp_627, 0.0, 1.0);
    // 0x0013F8: 0x51A0099800970C00 Ffma
    temp_629 = fma(temp_608, temp_622, fp_c6.data[2].y);
    // 0x001408: 0x4C68101406973131 Fmul
    temp_630 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x001410: 0x4C59101800470202 Fadd
    temp_631 = 0.0 - fp_c6.data[2].x;
    temp_632 = temp_631 + fp_c6.data[1].x;
    // 0x001418: 0x4C98079808670032 Mov
    // 0x001428: 0x386C104248070629 Fmul
    temp_633 = temp_235 * 50.0;
    temp_634 = clamp(temp_633, 0.0, 1.0);
    // 0x001430: 0x4C68101808D71E0E Fmul
    temp_635 = temp_626 * fp_c6.data[35].y;
    // 0x001438: 0x4C68101808E71E13 Fmul
    temp_636 = temp_626 * fp_c6.data[35].z;
    // 0x001448: 0x4C68101808C71E1E Fmul
    temp_637 = temp_626 * fp_c6.data[35].x;
    // 0x001450: 0x51A0011800870C02 Ffma
    temp_638 = fma(temp_608, temp_632, fp_c6.data[2].x);
    // 0x001458: 0x51A00B1800A70C0C Ffma
    temp_639 = fma(temp_608, temp_619, fp_c6.data[2].z);
    // 0x001468: 0x5C5C30000FF70F16 Fadd
    temp_640 = temp_614 + -0.0;
    temp_641 = clamp(temp_640, 0.0, 1.0);
    // 0x001470: 0x59A0168003170E2D Ffma
    temp_642 = fma(temp_635, temp_630, temp_599);
    // 0x001478: 0x49A1071408270E0E Ffma
    temp_643 = 0.0 - fp_c5.data[32].z;
    temp_644 = fma(temp_635, temp_643, temp_635);
    // 0x001488: 0x4C68101808871B1B Fmul
    temp_645 = temp_628 * fp_c6.data[34].x;
    // 0x001490: 0x4C5C100400E72F2F Fadd
    temp_646 = temp_623 + fp_c1.data[3].z;
    temp_647 = clamp(temp_646, 0.0, 1.0);
    // 0x001498: 0x59A0160003171E2C Ffma
    temp_648 = fma(temp_637, temp_630, temp_592);
    // 0x0014A8: 0x49A10F1408271E1E Ffma
    temp_649 = 0.0 - fp_c5.data[32].z;
    temp_650 = fma(temp_637, temp_649, temp_637);
    // 0x0014B0: 0xF0F0000034370000 Depbar
    // 0x0014B8: 0x51A21A180B472323 Ffma
    temp_651 = 0.0 - fp_c6.data[45].x;
    temp_652 = fma(temp_97, fp_c6.data[45].x, temp_651);
    // 0x0014C8: 0x5C58100000E70707 Fadd
    temp_653 = temp_586 + temp_644;
    // 0x0014D0: 0x51A0191808671B0F Ffma
    temp_654 = fma(temp_645, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x0014D8: 0x51A21A180B470101 Ffma
    temp_655 = 0.0 - fp_c6.data[45].x;
    temp_656 = fma(temp_98, fp_c6.data[45].x, temp_655);
    // 0x0014E8: 0x51A21A180B472222 Ffma
    temp_657 = 0.0 - fp_c6.data[45].x;
    temp_658 = fma(temp_96, fp_c6.data[45].x, temp_657);
    // 0x0014F0: 0x5C68100002971634 Fmul
    temp_659 = temp_641 * temp_634;
    // 0x0014F8: 0x5C59100002F7162F Fadd
    temp_660 = 0.0 - temp_641;
    temp_661 = temp_660 + temp_647;
    // 0x001508: 0x5C58100001E7041E Fadd
    temp_662 = temp_584 + temp_650;
    // 0x001510: 0x010404000007F016 Mov32i
    // 0x001518: 0x59A017000317132E Ffma
    temp_663 = fma(temp_636, temp_630, temp_603);
    // 0x001528: 0x49A1099408271313 Ffma
    temp_664 = 0.0 - fp_c5.data[32].z;
    temp_665 = fma(temp_636, temp_664, temp_636);
    // 0x001530: 0x59A01A0002F70303 Ffma
    temp_666 = fma(temp_208, temp_661, temp_659);
    // 0x001538: 0x59A01A0002F70606 Ffma
    temp_667 = fma(temp_235, temp_661, temp_659);
    // 0x001548: 0x59A01A0002F70505 Ffma
    temp_668 = fma(temp_234, temp_661, temp_659);
    // 0x001550: 0x5C58100001370808 Fadd
    temp_669 = temp_597 + temp_665;
    // 0x001558: 0x4C68101406970303 Fmul
    temp_670 = temp_666 * fp_c5.data[26].y;
    // 0x001568: 0x4C68101406970606 Fmul
    temp_671 = temp_667 * fp_c5.data[26].y;
    // 0x001570: 0x4C68101406970505 Fmul
    temp_672 = temp_668 * fp_c5.data[26].y;
    // 0x001578: 0xF0F0000034270000 Depbar
    // 0x001588: 0x49A008040067020E Ffma
    temp_673 = fma(temp_638, fp_c1.data[1].z, temp_571);
    // 0x001590: 0xE043FF900337FF02 Ipa
    temp_674 = in_attr8.x;
    // 0x001598: 0x49A0088400670004 Ffma
    temp_675 = fma(temp_629, fp_c1.data[1].z, temp_572);
    // 0x0015A8: 0xE043FF8C8337FF33 Ipa
    temp_676 = in_attr4.z;
    // 0x0015B0: 0x59A2070000F72424 Ffma
    temp_677 = 0.0 - temp_673;
    temp_678 = fma(temp_87, temp_654, temp_677);
    // 0x0015B8: 0x49A0090400670C0C Ffma
    temp_679 = fma(temp_639, fp_c1.data[1].z, temp_573);
    // 0x0015C8: 0x33A00B4000070D00 Ffma
    temp_680 = fma(temp_625, -2.0, 3.0);
    // 0x0015D0: 0x5C68100000D70D0D Fmul
    temp_681 = temp_625 * temp_625;
    // 0x0015D8: 0xF0F0000034170000 Depbar
    // 0x0015E8: 0x49A0141808571A28 Ffma
    temp_682 = fma(temp_577, fp_c6.data[33].y, temp_583);
    // 0x0015F0: 0x59A2020000F72525 Ffma
    temp_683 = 0.0 - temp_675;
    temp_684 = fma(temp_88, temp_654, temp_683);
    // 0x0015F8: 0x59A0070002772424 Ffma
    temp_685 = fma(temp_678, temp_611, temp_673);
    // 0x001608: 0x59A2060000F7260F Ffma
    temp_686 = 0.0 - temp_679;
    temp_687 = fma(temp_89, temp_654, temp_686);
    // 0x001610: 0x5C68100000D70000 Fmul
    temp_688 = temp_680 * temp_681;
    // 0x001618: 0x49A00A180857180D Ffma
    temp_689 = fma(temp_575, fp_c6.data[33].y, temp_581);
    // 0x001628: 0x59A0020002772525 Ffma
    temp_690 = fma(temp_684, temp_611, temp_675);
    // 0x001630: 0x5C58100001E7241E Fadd
    temp_691 = temp_685 + temp_662;
    // 0x001638: 0x59A0060002770F0F Ffma
    temp_692 = fma(temp_687, temp_611, temp_679);
    // 0x001648: 0x49A00A9808571904 Ffma
    temp_693 = fma(temp_576, fp_c6.data[33].y, temp_582);
    // 0x001650: 0x59A0170002870505 Ffma
    temp_694 = fma(temp_672, temp_682, temp_663);
    // 0x001658: 0x59A0160000D70303 Ffma
    temp_695 = fma(temp_670, temp_689, temp_648);
    // 0x001668: 0x5C58100000772525 Fadd
    temp_696 = temp_690 + temp_653;
    // 0x001670: 0x59A10F0001E71F1E Ffma
    temp_697 = 0.0 - temp_691;
    temp_698 = fma(temp_93, temp_697, temp_691);
    // 0x001678: 0x5C58100000870F08 Fadd
    temp_699 = temp_692 + temp_669;
    // 0x001688: 0x59A0168000470606 Ffma
    temp_700 = fma(temp_671, temp_693, temp_642);
    // 0x001690: 0x4C98079802870007 Mov
    // 0x001698: 0x4C68101803770000 Fmul
    temp_701 = temp_688 * fp_c6.data[13].w;
    // 0x0016A8: 0x59A1128002571F04 Ffma
    temp_702 = 0.0 - temp_696;
    temp_703 = fma(temp_93, temp_702, temp_696);
    // 0x0016B0: 0x59A0018001E7201E Ffma
    temp_704 = fma(temp_14, temp_698, temp_695);
    // 0x0016B8: 0x59A1040000871F1F Ffma
    temp_705 = 0.0 - temp_699;
    temp_706 = fma(temp_93, temp_705, temp_699);
    // 0x0016C8: 0x4C98079802970008 Mov
    // 0x0016D0: 0x51A0039802872222 Ffma
    temp_707 = fma(temp_658, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0016D8: 0x49A2001803570007 Ffma
    temp_708 = 0.0 - temp_701;
    temp_709 = fma(temp_701, fp_c6.data[13].y, temp_708);
    // 0x0016E8: 0x59A0030000472103 Ffma
    temp_710 = fma(temp_15, temp_703, temp_700);
    // 0x0016F0: 0x5C68100001E71717 Fmul
    temp_711 = temp_300 * temp_704;
    // 0x0016F8: 0x59A0028001F71C05 Ffma
    temp_712 = fma(temp_16, temp_706, temp_694);
    // 0x001708: 0x49A501180BC73030 Ffma
    temp_713 = 0.0 - fp_c6.data[47].x;
    temp_714 = fma(temp_589, temp_713, temp_674);
    temp_715 = clamp(temp_714, 0.0, 1.0);
    // 0x001710: 0x4C98079802A70004 Mov
    // 0x001718: 0x5080000000373030 Mufu
    temp_716 = log2(temp_715);
    // 0x001728: 0x5C68100000372A03 Fmul
    temp_717 = temp_302 * temp_710;
    // 0x001730: 0x49A00B9406C70909 Ffma
    temp_718 = fma(temp_294, fp_c5.data[27].x, temp_711);
    // 0x001738: 0x5C68100000572B02 Fmul
    temp_719 = temp_304 * temp_712;
    // 0x001748: 0x51A0041802972323 Ffma
    temp_720 = fma(temp_652, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001750: 0x51A0021802A70101 Ffma
    temp_721 = fma(temp_656, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001758: 0x49A0019406C70A0A Ffma
    temp_722 = fma(temp_297, fp_c5.data[27].x, temp_717);
    // 0x001768: 0x5C58300002270903 Fadd
    temp_723 = 0.0 - temp_707;
    temp_724 = temp_718 + temp_723;
    // 0x001770: 0x49A0011406C70B0B Ffma
    temp_725 = fma(temp_298, fp_c5.data[27].x, temp_719);
    // 0x001778: 0x5C58300002370A02 Fadd
    temp_726 = 0.0 - temp_720;
    temp_727 = temp_722 + temp_726;
    // 0x001788: 0x49A011180BF70304 Ffma
    temp_728 = fma(temp_724, fp_c6.data[47].w, temp_707);
    // 0x001790: 0x5C58300000170B03 Fadd
    temp_729 = 0.0 - temp_721;
    temp_730 = temp_725 + temp_729;
    // 0x001798: 0x4C68101803173005 Fmul
    temp_731 = temp_716 * fp_c6.data[12].y;
    // 0x0017A8: 0x49A011980BF70202 Ffma
    temp_732 = fma(temp_727, fp_c6.data[47].w, temp_720);
    // 0x0017B0: 0x5C60178000472204 Fmnmx
    temp_733 = max(temp_707, temp_728);
    // 0x0017B8: 0x49A000980BF70303 Ffma
    temp_734 = fma(temp_730, fp_c6.data[47].w, temp_721);
    // 0x0017C8: 0x5C90008000570006 Rro
    // 0x0017D0: 0x49A2001803470005 Ffma
    temp_735 = 0.0 - temp_701;
    temp_736 = fma(temp_701, fp_c6.data[13].x, temp_735);
    // 0x0017D8: 0x5080000000270606 Mufu
    temp_737 = exp2(temp_731);
    // 0x0017E8: 0x5C60178000272302 Fmnmx
    temp_738 = max(temp_720, temp_732);
    // 0x0017F0: 0x49A2001803670000 Ffma
    temp_739 = 0.0 - temp_701;
    temp_740 = fma(temp_701, fp_c6.data[13].z, temp_739);
    // 0x0017F8: 0x5C60178000370103 Fmnmx
    temp_741 = max(temp_721, temp_734);
    // 0x001808: 0x59A0020000570404 Ffma
    temp_742 = fma(temp_733, temp_736, temp_733);
    // 0x001810: 0x59A0010000770201 Ffma
    temp_743 = fma(temp_738, temp_709, temp_738);
    // 0x001818: 0x5C98078001D70007 Mov
    // 0x001828: 0x59A0018000070302 Ffma
    temp_744 = fma(temp_741, temp_740, temp_741);
    // 0x001830: 0x0103F4000007F005 Mov32i
    // 0x001838: 0x5C59100000470900 Fadd
    temp_745 = 0.0 - temp_718;
    temp_746 = temp_745 + temp_742;
    // 0x001848: 0x4C68101802B70603 Fmul
    temp_747 = temp_737 * fp_c6.data[10].w;
    // 0x001850: 0x5C59100000170A01 Fadd
    temp_748 = 0.0 - temp_722;
    temp_749 = temp_748 + temp_743;
    // 0x001858: 0x5C59100000270B02 Fadd
    temp_750 = 0.0 - temp_725;
    temp_751 = temp_750 + temp_744;
    // 0x001868: 0x4C58100C03873304 Fadd
    temp_752 = temp_676 + fp_c3.data[14].x;
    // 0x001870: 0x5C9807800FF70006 Mov
    // 0x001878: 0x59A0048000370000 Ffma
    temp_753 = fma(temp_746, temp_747, temp_718);
    // 0x001888: 0x59A0050000370101 Ffma
    temp_754 = fma(temp_749, temp_747, temp_722);
    // 0x001890: 0x59A0058000370202 Ffma
    temp_755 = fma(temp_751, temp_747, temp_725);
    // 0x001898: 0x5C98078001D70003 Mov
    // 0x0018A8: 0x49A37F8C03C70404 Ffma
    temp_756 = 0.0 - fp_c3.data[15].x;
    temp_757 = fma(temp_752, temp_756, -0.0);
    // 0x0018B0: 0xE30000000007000F Exit
    out_attr0.x = temp_753;
    out_attr0.y = temp_754;
    out_attr0.z = temp_755;
    out_attr0.w = temp_17;
    out_attr1.x = temp_757;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = temp_17;
    return;
}
