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
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_2C;
layout (binding = 3) uniform sampler2D fp_t_tcb_36;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform sampler2D fp_t_tcb_22;
layout (binding = 6) uniform sampler2D fp_t_tcb_1E;
layout (binding = 7) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 8) uniform samplerCube fp_t_tcb_16;
layout (binding = 9) uniform samplerCube fp_t_tcb_18;
layout (binding = 10) uniform sampler3D fp_t_cb7_20;
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
    precise vec4 temp_5;
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
    precise vec3 temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise vec3 temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise vec3 temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    bool temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise vec4 temp_163;
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
    uint temp_200;
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
    int temp_263;
    precise float temp_264;
    precise float temp_265;
    int temp_266;
    uint temp_267;
    uint temp_268;
    int temp_269;
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
    bool temp_304;
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
    int temp_359;
    bool temp_360;
    int temp_361;
    int temp_362;
    int temp_363;
    int temp_364;
    uint temp_365;
    uint temp_366;
    int temp_367;
    precise float temp_368;
    int temp_369;
    int temp_370;
    uint temp_371;
    uint temp_372;
    int temp_373;
    precise float temp_374;
    int temp_375;
    uint temp_376;
    int temp_377;
    precise float temp_378;
    int temp_379;
    uint temp_380;
    uint temp_381;
    int temp_382;
    precise float temp_383;
    int temp_384;
    uint temp_385;
    int temp_386;
    precise float temp_387;
    int temp_388;
    uint temp_389;
    uint temp_390;
    int temp_391;
    precise float temp_392;
    int temp_393;
    uint temp_394;
    int temp_395;
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
    int temp_417;
    uint temp_418;
    uint temp_419;
    int temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    int temp_424;
    uint temp_425;
    uint temp_426;
    int temp_427;
    precise float temp_428;
    int temp_429;
    uint temp_430;
    int temp_431;
    precise float temp_432;
    precise float temp_433;
    precise float temp_434;
    precise float temp_435;
    precise float temp_436;
    precise float temp_437;
    int temp_438;
    uint temp_439;
    uint temp_440;
    int temp_441;
    precise float temp_442;
    int temp_443;
    uint temp_444;
    int temp_445;
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
    uint temp_458;
    int temp_459;
    bool temp_460;
    uint temp_461;
    precise float temp_462;
    precise float temp_463;
    precise float temp_464;
    precise float temp_465;
    precise float temp_466;
    precise float temp_467;
    precise float temp_468;
    uint temp_469;
    precise float temp_470;
    bool temp_471;
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
    int temp_507;
    uint temp_508;
    uint temp_509;
    int temp_510;
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
    int temp_529;
    uint temp_530;
    uint temp_531;
    int temp_532;
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
    uint temp_544;
    uint temp_545;
    int temp_546;
    precise float temp_547;
    int temp_548;
    uint temp_549;
    int temp_550;
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
    int temp_583;
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
    precise vec3 temp_604;
    precise float temp_605;
    precise float temp_606;
    precise float temp_607;
    precise float temp_608;
    precise float temp_609;
    precise float temp_610;
    precise float temp_611;
    precise vec3 temp_612;
    precise float temp_613;
    precise float temp_614;
    precise float temp_615;
    precise vec3 temp_616;
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
    precise float temp_758;
    precise float temp_759;
    precise float temp_760;
    precise float temp_761;
    precise float temp_762;
    precise float temp_763;
    precise float temp_764;
    precise float temp_765;
    precise float temp_766;
    precise float temp_767;
    precise float temp_768;
    precise float temp_769;
    precise float temp_770;
    precise float temp_771;
    precise float temp_772;
    precise float temp_773;
    precise float temp_774;
    precise float temp_775;
    precise float temp_776;
    precise float temp_777;
    precise float temp_778;
    precise float temp_779;
    precise float temp_780;
    precise float temp_781;
    precise float temp_782;
    precise float temp_783;
    precise float temp_784;
    precise float temp_785;
    precise float temp_786;
    precise float temp_787;
    precise float temp_788;
    precise float temp_789;
    precise float temp_790;
    precise float temp_791;
    precise float temp_792;
    precise float temp_793;
    precise float temp_794;
    precise float temp_795;
    precise float temp_796;
    precise float temp_797;
    precise float temp_798;
    precise float temp_799;
    // 0x000008: 0xE003FF87CFF7FF10 Ipa
    // 0x000010: 0x5080000000471010 Mufu
    // 0x000018: 0xE043FF8E0107FF03 Ipa
    temp_0 = in_attr6.x;
    // 0x000028: 0xE043FF8E4107FF04 Ipa
    temp_1 = in_attr6.y;
    // 0x000030: 0xD830026FF0470300 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000038: 0xD830024200470328 Texs
    temp_5 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    temp_9 = temp_5.w;
    // 0x000048: 0xE043FF8A0107FF02 Ipa
    temp_10 = in_attr2.x;
    // 0x000050: 0xE043FF8A4107FF05 Ipa
    temp_11 = in_attr2.y;
    // 0x000058: 0xE043FF8A8107FF06 Ipa
    temp_12 = in_attr2.z;
    // 0x000068: 0xE043FF880107FF0E Ipa
    temp_13 = in_attr0.x;
    // 0x000070: 0xE043FF890107FF08 Ipa
    temp_14 = in_attr1.x;
    // 0x000078: 0xE043FF884107FF11 Ipa
    temp_15 = in_attr0.y;
    // 0x000088: 0xE043FF894107FF09 Ipa
    temp_16 = in_attr1.y;
    // 0x000090: 0xE043FF888107FF12 Ipa
    temp_17 = in_attr0.z;
    // 0x000098: 0xE043FF898107FF0A Ipa
    temp_18 = in_attr1.z;
    // 0x0000A8: 0xE043FF8B0107FF16 Ipa
    temp_19 = in_attr3.x;
    // 0x0000B0: 0xE043FF8B4107FF2B Ipa
    temp_20 = in_attr3.y;
    // 0x0000B8: 0xE043FF8B8107FF1D Ipa
    temp_21 = in_attr3.z;
    // 0x0000C8: 0x5C68100000270207 Fmul
    temp_22 = temp_10 * temp_10;
    // 0x0000D0: 0x5C68100000E70E0C Fmul
    temp_23 = temp_13 * temp_13;
    // 0x0000D8: 0x5C6810000087080B Fmul
    temp_24 = temp_14 * temp_14;
    // 0x0000E8: 0x59A0038000570507 Ffma
    temp_25 = fma(temp_11, temp_11, temp_22);
    // 0x0000F0: 0x59A006000117110C Ffma
    temp_26 = fma(temp_15, temp_15, temp_23);
    // 0x0000F8: 0x59A005800097090B Ffma
    temp_27 = fma(temp_16, temp_16, temp_24);
    // 0x000108: 0x59A0038000670607 Ffma
    temp_28 = fma(temp_12, temp_12, temp_25);
    // 0x000110: 0x5080000000570707 Mufu
    temp_29 = inversesqrt(temp_28);
    // 0x000118: 0x59A0060001271213 Ffma
    temp_30 = fma(temp_17, temp_17, temp_26);
    // 0x000128: 0x59A0058000A70A0B Ffma
    temp_31 = fma(temp_18, temp_18, temp_27);
    // 0x000130: 0x5080000000571313 Mufu
    temp_32 = inversesqrt(temp_30);
    // 0x000138: 0x5C6810000077050C Fmul
    temp_33 = temp_11 * temp_29;
    // 0x000148: 0x5080000000570B0B Mufu
    temp_34 = inversesqrt(temp_31);
    // 0x000150: 0x5C68100000770202 Fmul
    temp_35 = temp_10 * temp_29;
    // 0x000158: 0x5C68100000770606 Fmul
    temp_36 = temp_12 * temp_29;
    // 0x000168: 0x5C68100001370E14 Fmul
    temp_37 = temp_13 * temp_32;
    // 0x000170: 0x5C68100000B7080D Fmul
    temp_38 = temp_14 * temp_34;
    // 0x000178: 0x5C68100000B7090F Fmul
    temp_39 = temp_16 * temp_34;
    // 0x000188: 0x5C68100000B70A09 Fmul
    temp_40 = temp_18 * temp_34;
    // 0x000190: 0xE003FF870FF7FF0B Ipa
    temp_41 = gl_FragCoord.x;
    temp_42 = support_buffer.render_scale[0];
    temp_43 = temp_41 / temp_42;
    // 0x000198: 0x5C68100001371108 Fmul
    temp_44 = temp_15 * temp_32;
    // 0x0001A8: 0x5C68100001371211 Fmul
    temp_45 = temp_17 * temp_32;
    // 0x0001B0: 0xF0F0000034170000 Depbar
    // 0x0001B8: 0x5C68100000170105 Fmul
    temp_46 = temp_4 * temp_4;
    // 0x0001C8: 0x5C68100000170202 Fmul
    temp_47 = temp_35 * temp_4;
    // 0x0001D0: 0x5C68100000170606 Fmul
    temp_48 = temp_36 * temp_4;
    // 0x0001D8: 0x59A0028000070005 Ffma
    temp_49 = fma(temp_3, temp_3, temp_46);
    // 0x0001E8: 0x59A0010000D70002 Ffma
    temp_50 = fma(temp_3, temp_38, temp_47);
    // 0x0001F0: 0x59A0030000970006 Ffma
    temp_51 = fma(temp_3, temp_40, temp_48);
    // 0x0001F8: 0x385D103F80070507 Fadd
    temp_52 = 0.0 - temp_49;
    temp_53 = temp_52 + 1.0;
    temp_54 = clamp(temp_53, 0.0, 1.0);
    // 0x000208: 0x5C68100000170C05 Fmul
    temp_55 = temp_33 * temp_4;
    // 0x000210: 0x5080000000870707 Mufu
    temp_56 = sqrt(temp_54);
    // 0x000218: 0x59A0028000F70005 Ffma
    temp_57 = fma(temp_3, temp_39, temp_55);
    // 0x000228: 0x59A0010001470702 Ffma
    temp_58 = fma(temp_56, temp_37, temp_50);
    // 0x000230: 0x59A0028000870705 Ffma
    temp_59 = fma(temp_56, temp_44, temp_57);
    // 0x000238: 0x59A0030001170706 Ffma
    temp_60 = fma(temp_56, temp_45, temp_51);
    // 0x000248: 0x5C68100000270200 Fmul
    temp_61 = temp_58 * temp_58;
    // 0x000250: 0x59A0000000570500 Ffma
    temp_62 = fma(temp_59, temp_59, temp_61);
    // 0x000258: 0x59A0000000670600 Ffma
    temp_63 = fma(temp_60, temp_60, temp_62);
    // 0x000268: 0x5080000000570000 Mufu
    temp_64 = inversesqrt(temp_63);
    // 0x000270: 0x5C68100000070612 Fmul
    temp_65 = temp_60 * temp_64;
    // 0x000278: 0x5C6810000007021C Fmul
    temp_66 = temp_58 * temp_64;
    // 0x000288: 0x5C68100000070502 Fmul
    temp_67 = temp_59 * temp_64;
    // 0x000290: 0x5C68100001270F07 Fmul
    temp_68 = temp_39 * temp_65;
    // 0x000298: 0x5C68100001C70908 Fmul
    temp_69 = temp_40 * temp_66;
    // 0x0002A8: 0x59A2038000270907 Ffma
    temp_70 = 0.0 - temp_68;
    temp_71 = fma(temp_40, temp_67, temp_70);
    // 0x0002B0: 0x59A2040001270D08 Ffma
    temp_72 = 0.0 - temp_69;
    temp_73 = fma(temp_38, temp_65, temp_72);
    // 0x0002B8: 0x5C68100000270D0D Fmul
    temp_74 = temp_38 * temp_67;
    // 0x0002C8: 0x4C68100C00671209 Fmul
    temp_75 = temp_65 * fp_c3.data[1].z;
    // 0x0002D0: 0x5C68100000770701 Fmul
    temp_76 = temp_71 * temp_71;
    // 0x0002D8: 0x59A2068001C70F0D Ffma
    temp_77 = 0.0 - temp_74;
    temp_78 = fma(temp_39, temp_66, temp_77);
    // 0x0002E8: 0x49A0048C00570209 Ffma
    temp_79 = fma(temp_67, fp_c3.data[1].y, temp_75);
    // 0x0002F0: 0x59A0008000870800 Ffma
    temp_80 = fma(temp_73, temp_73, temp_76);
    // 0x0002F8: 0x5C68100001671601 Fmul
    temp_81 = temp_19 * temp_19;
    // 0x000308: 0x59A0000000D70D00 Ffma
    temp_82 = fma(temp_78, temp_78, temp_80);
    // 0x000310: 0x59A0008002B72B0A Ffma
    temp_83 = fma(temp_20, temp_20, temp_81);
    // 0x000318: 0x5080000000570006 Mufu
    temp_84 = inversesqrt(temp_82);
    // 0x000328: 0x59A0050001D71D0A Ffma
    temp_85 = fma(temp_21, temp_21, temp_83);
    // 0x000330: 0x5080000000570A0C Mufu
    temp_86 = inversesqrt(temp_85);
    // 0x000338: 0x5C68100000670801 Fmul
    temp_87 = temp_73 * temp_84;
    // 0x000348: 0x5C68100000670D0D Fmul
    temp_88 = temp_78 * temp_84;
    // 0x000350: 0x5C68100000670707 Fmul
    temp_89 = temp_71 * temp_84;
    // 0x000358: 0x4C98079400A70006 Mov
    // 0x000368: 0x4C98079400B7000A Mov
    // 0x000370: 0x5C68100000171208 Fmul
    temp_90 = temp_65 * temp_87;
    // 0x000378: 0x5C68100000D71C05 Fmul
    temp_91 = temp_66 * temp_88;
    // 0x000388: 0x5C69100000C71616 Fmul
    temp_92 = 0.0 - temp_86;
    temp_93 = temp_19 * temp_92;
    // 0x000390: 0x5C69100000C72B2B Fmul
    temp_94 = 0.0 - temp_86;
    temp_95 = temp_20 * temp_94;
    // 0x000398: 0x5C69100000C71D1D Fmul
    temp_96 = 0.0 - temp_86;
    temp_97 = temp_21 * temp_96;
    // 0x0003A8: 0xE003FF874FF7FF0C Ipa
    temp_98 = gl_FragCoord.y;
    temp_99 = support_buffer.render_scale[0];
    temp_100 = temp_98 / temp_99;
    // 0x0003B0: 0x59A2040000D70208 Ffma
    temp_101 = 0.0 - temp_90;
    temp_102 = fma(temp_67, temp_88, temp_101);
    // 0x0003B8: 0x59A2028000771205 Ffma
    temp_103 = 0.0 - temp_91;
    temp_104 = fma(temp_65, temp_89, temp_103);
    // 0x0003C8: 0x5C68100000770207 Fmul
    temp_105 = temp_67 * temp_89;
    // 0x0003D0: 0x4C69101805C70800 Fmul
    temp_106 = 0.0 - fp_c6.data[23].x;
    temp_107 = temp_102 * temp_106;
    // 0x0003D8: 0x5C68100001670808 Fmul
    temp_108 = temp_102 * temp_93;
    // 0x0003E8: 0x59A2038000171C07 Ffma
    temp_109 = 0.0 - temp_105;
    temp_110 = fma(temp_66, temp_87, temp_109);
    // 0x0003F0: 0x49A1001805D70501 Ffma
    temp_111 = 0.0 - fp_c6.data[23].y;
    temp_112 = fma(temp_104, temp_111, temp_107);
    // 0x0003F8: 0x59A0040002B70508 Ffma
    temp_113 = fma(temp_104, temp_95, temp_108);
    // 0x000408: 0x5C68100001671C00 Fmul
    temp_114 = temp_66 * temp_93;
    // 0x000410: 0x4C69101805C71C05 Fmul
    temp_115 = 0.0 - fp_c6.data[23].x;
    temp_116 = temp_66 * temp_115;
    // 0x000418: 0x49A5009805E70701 Ffma
    temp_117 = 0.0 - fp_c6.data[23].z;
    temp_118 = fma(temp_110, temp_117, temp_112);
    temp_119 = clamp(temp_118, 0.0, 1.0);
    // 0x000428: 0x59A4040001D70708 Ffma
    temp_120 = fma(temp_110, temp_97, temp_113);
    temp_121 = clamp(temp_120, 0.0, 1.0);
    // 0x000430: 0x59A0000002B70200 Ffma
    temp_122 = fma(temp_67, temp_95, temp_114);
    // 0x000438: 0x49A1029805D70205 Ffma
    temp_123 = 0.0 - fp_c6.data[23].y;
    temp_124 = fma(temp_67, temp_123, temp_116);
    // 0x000448: 0x4C68100C00271207 Fmul
    temp_125 = temp_65 * fp_c3.data[0].z;
    // 0x000450: 0x5C59100000870108 Fadd
    temp_126 = 0.0 - temp_119;
    temp_127 = temp_126 + temp_121;
    // 0x000458: 0x59A4000001D71201 Ffma
    temp_128 = fma(temp_65, temp_97, temp_122);
    temp_129 = clamp(temp_128, 0.0, 1.0);
    // 0x000468: 0x49A5029805E7120F Ffma
    temp_130 = 0.0 - fp_c6.data[23].z;
    temp_131 = fma(temp_65, temp_130, temp_124);
    temp_132 = clamp(temp_131, 0.0, 1.0);
    // 0x000470: 0x49A0038C00170207 Ffma
    temp_133 = fma(temp_67, fp_c3.data[0].y, temp_125);
    // 0x000478: 0x51A0031400C70800 Ffma
    temp_134 = fma(temp_127, fp_c5.data[2].z, fp_c5.data[3].x);
    // 0x000488: 0x51A0051400D70808 Ffma
    temp_135 = fma(temp_127, fp_c5.data[2].w, fp_c5.data[3].y);
    // 0x000490: 0x5C58300000F70105 Fadd
    temp_136 = 0.0 - temp_132;
    temp_137 = temp_129 + temp_136;
    // 0x000498: 0x49A0048C00471C06 Ffma
    temp_138 = fma(temp_66, fp_c3.data[1].x, temp_79);
    // 0x0004A8: 0x4C68100C04B70C09 Fmul
    temp_139 = temp_100 * fp_c3.data[18].w;
    // 0x0004B0: 0x49A000140087050D Ffma
    temp_140 = fma(temp_137, fp_c5.data[2].x, temp_134);
    // 0x0004B8: 0x49A004140097050A Ffma
    temp_141 = fma(temp_137, fp_c5.data[2].y, temp_135);
    // 0x0004C8: 0x4C68100C04A70B08 Fmul
    temp_142 = temp_43 * fp_c3.data[18].z;
    // 0x0004D0: 0x49A0038C00071C05 Ffma
    temp_143 = fma(temp_66, fp_c3.data[0].x, temp_133);
    // 0x0004D8: 0x4C69100C03E7060C Fmul
    temp_144 = 0.0 - fp_c3.data[15].z;
    temp_145 = temp_138 * temp_144;
    // 0x0004E8: 0xD82202C0D0A70D0A Texs
    temp_146 = texture(fp_t_tcb_2C, vec2(temp_140, temp_141)).xyz;
    temp_147 = temp_146.x;
    temp_148 = temp_146.y;
    temp_149 = temp_146.z;
    // 0x0004F0: 0xD824036110470306 Texs
    temp_150 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_151 = temp_150.x;
    temp_152 = temp_150.y;
    temp_153 = temp_150.z;
    // 0x0004F8: 0xD822020000970824 Texs
    temp_154 = texture(fp_t_tcb_20, vec2(temp_142, temp_139)).xyz;
    temp_155 = temp_154.x;
    temp_156 = temp_154.y;
    temp_157 = temp_154.z;
    // 0x000508: 0xF0F0000034370000 Depbar
    // 0x000510: 0x4BB1839406072107 Fsetp
    temp_158 = temp_9 < fp_c5.data[24].x;
    // 0x000518: 0x4C68101808B70505 Fmul
    temp_159 = temp_143 * fp_c6.data[34].w;
    // 0x000528: 0x4C68101808B70C0C Fmul
    temp_160 = temp_145 * fp_c6.data[34].w;
    // 0x000530: 0x49A0040400370522 Ffma
    temp_161 = fma(temp_159, fp_c1.data[0].w, temp_142);
    // 0x000538: 0x49A0048400370C23 Ffma
    temp_162 = fma(temp_160, fp_c1.data[0].w, temp_139);
    // 0x000548: 0xE24000000688000F Bra
    if (temp_158)
    {
        // 0x000550: 0x5C9807800FF70000 Mov
        // 0x000558: 0xE33000000007000F Kil
        discard;
    }
    // 0x0005B8: 0xD832022222372226 Texs
    temp_163 = texture(fp_t_tcb_22, vec2(temp_161, temp_162)).xyzw;
    temp_164 = temp_163.x;
    temp_165 = temp_163.y;
    temp_166 = temp_163.z;
    temp_167 = temp_163.w;
    // 0x0005C8: 0x0103F8000007F003 Mov32i
    // 0x0005D0: 0xD86201EFF0370803 Texs
    temp_168 = textureLod(fp_t_tcb_1E, vec2(temp_142, temp_139), 1.0).x;
    // 0x0005D8: 0x4C58301805C71604 Fadd
    temp_169 = 0.0 - fp_c6.data[23].x;
    temp_170 = temp_93 + temp_169;
    // 0x0005E8: 0xF0F0000034370000 Depbar
    // 0x0005F0: 0xE2900000BA800000 Ssy
    // 0x0005F8: 0x5C68100002970B0E Fmul
    temp_171 = temp_148 * temp_7;
    // 0x000608: 0x4C58301805D72B05 Fadd
    temp_172 = 0.0 - fp_c6.data[23].y;
    temp_173 = temp_95 + temp_172;
    // 0x000610: 0x5C68100002870A0C Fmul
    temp_174 = temp_147 * temp_6;
    // 0x000618: 0x4C58301805E71D0A Fadd
    temp_175 = 0.0 - fp_c6.data[23].z;
    temp_176 = temp_97 + temp_175;
    // 0x000628: 0x4C6810180A070606 Fmul
    temp_177 = temp_151 * fp_c6.data[40].x;
    // 0x000630: 0x5C6810000047040B Fmul
    temp_178 = temp_170 * temp_170;
    // 0x000638: 0x0103F0000007F036 Mov32i
    // 0x000648: 0x01040DF760C7F01E Mov32i
    // 0x000650: 0x3868104180070815 Fmul
    temp_179 = temp_142 * 16.0;
    // 0x000658: 0x3868104110070918 Fmul
    temp_180 = temp_139 * 9.0;
    // 0x000668: 0x5CA8148001570A15 F2f
    temp_181 = floor(temp_179);
    // 0x000670: 0x59A005800057050B Ffma
    temp_182 = fma(temp_173, temp_173, temp_178);
    // 0x000678: 0x5CA8148001870A1A F2f
    temp_183 = floor(temp_180);
    // 0x000688: 0x4C68101408970C0C Fmul
    temp_184 = temp_174 * fp_c5.data[34].y;
    // 0x000690: 0x5C68100000171C3B Fmul
    temp_185 = temp_66 * temp_129;
    // 0x000698: 0x5C6810000017121B Fmul
    temp_186 = temp_65 * temp_129;
    // 0x0006A8: 0x3859103F8007011F Fadd
    temp_187 = 0.0 - temp_129;
    temp_188 = temp_187 + 1.0;
    // 0x0006B0: 0x5C9807800FF7002E Mov
    // 0x0006B8: 0x59A0058000A70A0B Ffma
    temp_189 = fma(temp_176, temp_176, temp_182);
    // 0x0006C8: 0x5C9807800FF7002F Mov
    // 0x0006D0: 0x5080000000570B0B Mufu
    temp_190 = inversesqrt(temp_189);
    // 0x0006D8: 0x32A20B4000073B3B Ffma
    temp_191 = 0.0 - temp_93;
    temp_192 = fma(temp_185, 2.0, temp_191);
    // 0x0006E8: 0x32A20EC000071B1B Ffma
    temp_193 = 0.0 - temp_97;
    temp_194 = fma(temp_186, 2.0, temp_193);
    // 0x0006F0: 0x5C9807800FF70034 Mov
    // 0x0006F8: 0x32A00AC180071A2A Ffma
    temp_195 = fma(temp_183, 16.0, temp_181);
    // 0x000708: 0x4C58301407B72915 Fadd
    temp_196 = 0.0 - fp_c5.data[30].w;
    temp_197 = temp_7 + temp_196;
    // 0x000710: 0x5CB0118002A70A2A F2i
    temp_198 = trunc(temp_195);
    temp_199 = max(temp_198, 0.0);
    temp_200 = uint(temp_199);
    // 0x000718: 0x5C68100000B70413 Fmul
    temp_201 = temp_170 * temp_190;
    // 0x000728: 0x386013BF80070604 Fmnmx
    temp_202 = min(temp_177, 1.0);
    // 0x000730: 0x5C68100000B70505 Fmul
    temp_203 = temp_173 * temp_190;
    // 0x000738: 0x5C68100000B70A14 Fmul
    temp_204 = temp_176 * temp_190;
    // 0x000748: 0x5C68100001371606 Fmul
    temp_205 = temp_93 * temp_201;
    // 0x000750: 0x4C60178400070404 Fmnmx
    temp_206 = max(temp_202, fp_c1.data[0].x);
    // 0x000758: 0x5C68100001371C17 Fmul
    temp_207 = temp_66 * temp_201;
    // 0x000768: 0x4C69101805C71313 Fmul
    temp_208 = 0.0 - fp_c6.data[23].x;
    temp_209 = temp_201 * temp_208;
    // 0x000770: 0x59A0030000572B0A Ffma
    temp_210 = fma(temp_95, temp_203, temp_205);
    // 0x000778: 0x32A01B3F00070436 Ffma
    temp_211 = fma(temp_206, 0.5, 0.5);
    // 0x000788: 0x51A4020400070406 Ffma
    temp_212 = fma(temp_206, temp_206, fp_c1.data[0].x);
    temp_213 = clamp(temp_212, 0.0, 1.0);
    // 0x000790: 0x59A00B8000570217 Ffma
    temp_214 = fma(temp_67, temp_203, temp_207);
    // 0x000798: 0x49A1099805D70513 Ffma
    temp_215 = 0.0 - fp_c6.data[23].y;
    temp_216 = fma(temp_203, temp_215, temp_209);
    // 0x0007A8: 0x59A4050001471D0B Ffma
    temp_217 = fma(temp_97, temp_204, temp_210);
    temp_218 = clamp(temp_217, 0.0, 1.0);
    // 0x0007B0: 0x5C68120003673636 Fmul
    temp_219 = temp_211 * 0.5;
    temp_220 = temp_219 * temp_211;
    // 0x0007B8: 0x5C6810000067060A Fmul
    temp_221 = temp_213 * temp_213;
    // 0x0007C8: 0x59A40B8001471217 Ffma
    temp_222 = fma(temp_65, temp_204, temp_214);
    temp_223 = clamp(temp_222, 0.0, 1.0);
    // 0x0007D0: 0x49A5099805E71413 Ffma
    temp_224 = 0.0 - fp_c6.data[23].z;
    temp_225 = fma(temp_204, temp_224, temp_216);
    temp_226 = clamp(temp_225, 0.0, 1.0);
    // 0x0007D8: 0x4C58301407B72814 Fadd
    temp_227 = 0.0 - fp_c5.data[30].w;
    temp_228 = temp_6 + temp_227;
    // 0x0007E8: 0x49A20F0400270B05 Ffma
    temp_229 = fma(temp_218, fp_c1.data[0].z, -6.98316002);
    // 0x0007F0: 0x59A1078003670F09 Ffma
    temp_230 = 0.0 - temp_220;
    temp_231 = fma(temp_132, temp_230, temp_132);
    // 0x0007F8: 0x59A20B8000A7170A Ffma
    temp_232 = 0.0 - temp_223;
    temp_233 = fma(temp_223, temp_221, temp_232);
    // 0x000808: 0x49A20F0400271318 Ffma
    temp_234 = fma(temp_226, fp_c1.data[0].z, -6.98316002);
    // 0x000810: 0x5C68100000570B0B Fmul
    temp_235 = temp_218 * temp_229;
    // 0x000818: 0x59A1008003670105 Ffma
    temp_236 = 0.0 - temp_220;
    temp_237 = fma(temp_129, temp_236, temp_129);
    // 0x000828: 0x51A005040017170A Ffma
    temp_238 = fma(temp_223, temp_233, fp_c1.data[0].y);
    // 0x000830: 0x5C68100001871318 Fmul
    temp_239 = temp_226 * temp_234;
    // 0x000838: 0x5080000000470A19 Mufu
    temp_240 = 1.0 / temp_238;
    // 0x000848: 0x5C90008000B70017 Rro
    // 0x000850: 0x5C58100000573608 Fadd
    temp_241 = temp_220 + temp_237;
    // 0x000858: 0x5080000000271717 Mufu
    temp_242 = exp2(temp_235);
    // 0x000868: 0x5C5810000097360B Fadd
    temp_243 = temp_220 + temp_231;
    // 0x000870: 0x5080000000470808 Mufu
    temp_244 = 1.0 / temp_241;
    // 0x000878: 0x51A00A1407B70705 Ffma
    temp_245 = fma(temp_152, temp_228, fp_c5.data[30].w);
    // 0x000888: 0x5080000000470B1E Mufu
    temp_246 = 1.0 / temp_243;
    // 0x000890: 0x4C58301407B7200A Fadd
    temp_247 = 0.0 - fp_c5.data[30].w;
    temp_248 = temp_8 + temp_247;
    // 0x000898: 0x4C68101801470F13 Fmul
    temp_249 = temp_132 * fp_c6.data[5].x;
    // 0x0008A8: 0x5C68100001970609 Fmul
    temp_250 = temp_213 * temp_240;
    // 0x0008B0: 0x51A00A9407B70706 Ffma
    temp_251 = fma(temp_152, temp_197, fp_c5.data[30].w);
    // 0x0008B8: 0x1E23EA2F9837131A Fmul32i
    temp_252 = temp_249 * 0.318309873;
    // 0x0008C8: 0x59A10B8001770514 Ffma
    temp_253 = 0.0 - temp_242;
    temp_254 = fma(temp_245, temp_253, temp_242);
    // 0x0008D0: 0x4C68101801570F15 Fmul
    temp_255 = temp_132 * fp_c6.data[5].y;
    // 0x0008D8: 0x3868103F00070833 Fmul
    temp_256 = temp_244 * 0.5;
    // 0x0008E8: 0x51A0051407B70708 Ffma
    temp_257 = fma(temp_152, temp_248, fp_c5.data[30].w);
    // 0x0008F0: 0x59A10B8001770619 Ffma
    temp_258 = 0.0 - temp_242;
    temp_259 = fma(temp_251, temp_258, temp_242);
    // 0x0008F8: 0x5C5810000147050B Fadd
    temp_260 = temp_245 + temp_254;
    // 0x000908: 0x5C68100000970914 Fmul
    temp_261 = temp_250 * temp_250;
    // 0x000910: 0x5C68100001E7330A Fmul
    temp_262 = temp_256 * temp_246;
    // 0x000918: 0x3848000000872A1E Shl
    temp_263 = int(temp_200) << 8;
    // 0x000928: 0x59A10B8001770813 Ffma
    temp_264 = 0.0 - temp_242;
    temp_265 = fma(temp_257, temp_264, temp_242);
    // 0x000930: 0xEF94008200471E1E Ldc
    temp_266 = temp_263 + 0x2004;
    temp_267 = uint(temp_266) >> 2;
    temp_268 = temp_267 >> 2;
    temp_269 = int(temp_267) & 3;
    temp_270 = fp_c8.data[int(temp_268)][temp_269];
    // 0x000938: 0x5C90008001870017 Rro
    // 0x000948: 0x4C68101406970B09 Fmul
    temp_271 = temp_260 * fp_c5.data[26].y;
    // 0x000950: 0x5080000000271717 Mufu
    temp_272 = exp2(temp_239);
    // 0x000958: 0x5C58100001970619 Fadd
    temp_273 = temp_251 + temp_259;
    // 0x000968: 0x4C68101801670F0B Fmul
    temp_274 = temp_132 * fp_c6.data[5].z;
    // 0x000970: 0x5C58100001370813 Fadd
    temp_275 = temp_257 + temp_265;
    // 0x000978: 0x1E23EA2F98371518 Fmul32i
    temp_276 = temp_255 * 0.318309873;
    // 0x000988: 0x5C68100000A71414 Fmul
    temp_277 = temp_261 * temp_262;
    // 0x000990: 0x59A10D0001A70909 Ffma
    temp_278 = 0.0 - temp_252;
    temp_279 = fma(temp_271, temp_278, temp_252);
    // 0x000998: 0x4C68101406971919 Fmul
    temp_280 = temp_273 * fp_c5.data[26].y;
    // 0x0009A8: 0x1E23EA2F98370B15 Fmul32i
    temp_281 = temp_274 * 0.318309873;
    // 0x0009B0: 0x4C6810140697130B Fmul
    temp_282 = temp_275 * fp_c5.data[26].y;
    // 0x0009B8: 0x4C98079808A7001A Mov
    // 0x0009C8: 0x5C68100002070D13 Fmul
    temp_283 = temp_149 * temp_8;
    // 0x0009D0: 0x4C68101408970E0D Fmul
    temp_284 = temp_171 * fp_c5.data[34].y;
    // 0x0009D8: 0x59A10C000187190A Ffma
    temp_285 = 0.0 - temp_276;
    temp_286 = fma(temp_280, temp_285, temp_276);
    // 0x0009E8: 0x59A10B8001770518 Ffma
    temp_287 = 0.0 - temp_272;
    temp_288 = fma(temp_245, temp_287, temp_272);
    // 0x0009F0: 0x59A10A8001570B0B Ffma
    temp_289 = 0.0 - temp_281;
    temp_290 = fma(temp_282, temp_289, temp_281);
    // 0x0009F8: 0x59A10B8001770615 Ffma
    temp_291 = 0.0 - temp_272;
    temp_292 = fma(temp_251, temp_291, temp_272);
    // 0x000A08: 0x59A10B8001770817 Ffma
    temp_293 = 0.0 - temp_272;
    temp_294 = fma(temp_257, temp_293, temp_272);
    // 0x000A10: 0x4C6810140897130E Fmul
    temp_295 = temp_283 * fp_c5.data[34].y;
    // 0x000A18: 0x5C68100001470F14 Fmul
    temp_296 = temp_132 * temp_277;
    // 0x000A28: 0x5C58100001870519 Fadd
    temp_297 = temp_245 + temp_288;
    // 0x000A30: 0x4C68101808771A18 Fmul
    temp_298 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000A38: 0x5C58100001570615 Fadd
    temp_299 = temp_251 + temp_292;
    // 0x000A48: 0x5C58100001770817 Fadd
    temp_300 = temp_257 + temp_294;
    // 0x000A50: 0x4C6810140697191A Fmul
    temp_301 = temp_297 * fp_c5.data[26].y;
    // 0x000A58: 0x4C68101406971515 Fmul
    temp_302 = temp_299 * fp_c5.data[26].y;
    // 0x000A68: 0x4C68101406971717 Fmul
    temp_303 = temp_300 * fp_c5.data[26].y;
    // 0x000A70: 0x5B6603800FF71E07 Isetp
    temp_304 = floatBitsToUint(temp_270) <= 0u;
    // 0x000A78: 0x51A0131801471819 Ffma
    temp_305 = fma(temp_298, temp_164, fp_c6.data[5].x);
    // 0x000A88: 0x51A0139801571813 Ffma
    temp_306 = fma(temp_298, temp_165, fp_c6.data[5].y);
    // 0x000A90: 0x51A0111801671818 Ffma
    temp_307 = fma(temp_298, temp_166, fp_c6.data[5].z);
    // 0x000A98: 0x51A5018400171103 Ffma
    temp_308 = 0.0 - temp_168;
    temp_309 = fma(temp_153, temp_308, fp_c1.data[0].y);
    temp_310 = clamp(temp_309, 0.0, 1.0);
    // 0x000AA8: 0x5C68100001A7191A Fmul
    temp_311 = temp_305 * temp_301;
    // 0x000AB0: 0x5C68100001571315 Fmul
    temp_312 = temp_306 * temp_302;
    // 0x000AB8: 0x5C68100001771817 Fmul
    temp_313 = temp_307 * temp_303;
    // 0x000AC8: 0x5C68100000C71919 Fmul
    temp_314 = temp_305 * temp_184;
    // 0x000AD0: 0x5C68100000D7132C Fmul
    temp_315 = temp_306 * temp_284;
    // 0x000AD8: 0x5C68100000E7182D Fmul
    temp_316 = temp_307 * temp_295;
    // 0x000AE8: 0x5C68100001471A1A Fmul
    temp_317 = temp_311 * temp_296;
    // 0x000AF0: 0x5C68100001471513 Fmul
    temp_318 = temp_312 * temp_296;
    // 0x000AF8: 0x5C68100001471717 Fmul
    temp_319 = temp_313 * temp_296;
    // 0x000B08: 0x5C68100001970F19 Fmul
    temp_320 = temp_132 * temp_314;
    // 0x000B10: 0x49A201980AC70311 Ffma
    temp_321 = 0.0 - temp_310;
    temp_322 = fma(temp_310, fp_c6.data[43].x, temp_321);
    // 0x000B18: 0x49A201980AD70314 Ffma
    temp_323 = 0.0 - temp_310;
    temp_324 = fma(temp_310, fp_c6.data[43].y, temp_323);
    // 0x000B28: 0x49A201980AE70303 Ffma
    temp_325 = 0.0 - temp_310;
    temp_326 = fma(temp_310, fp_c6.data[43].z, temp_325);
    // 0x000B30: 0x5C68100002C70F2C Fmul
    temp_327 = temp_132 * temp_315;
    // 0x000B38: 0x5C68100002D70F2D Fmul
    temp_328 = temp_132 * temp_316;
    // 0x000B48: 0x49A00C8400471A0F Ffma
    temp_329 = fma(temp_317, fp_c1.data[1].x, temp_320);
    // 0x000B50: 0x5C6810000017021A Fmul
    temp_330 = temp_67 * temp_129;
    // 0x000B58: 0x3858103F80071111 Fadd
    temp_331 = temp_322 + 1.0;
    // 0x000B68: 0x3858103F80071414 Fadd
    temp_332 = temp_324 + 1.0;
    // 0x000B70: 0x3858103F80070332 Fadd
    temp_333 = temp_326 + 1.0;
    // 0x000B78: 0x49A0160400471313 Ffma
    temp_334 = fma(temp_318, fp_c1.data[1].x, temp_327);
    // 0x000B88: 0x49A0168400471717 Ffma
    temp_335 = fma(temp_319, fp_c1.data[1].x, temp_328);
    // 0x000B90: 0x32A215C000071A1A Ffma
    temp_336 = 0.0 - temp_95;
    temp_337 = fma(temp_330, 2.0, temp_336);
    // 0x000B98: 0x5C9807800FF7002C Mov
    // 0x000BA8: 0x5C9807800FF7002D Mov
    // 0x000BB0: 0x5C9807800FF70003 Mov
    // 0x000BB8: 0x59A4088001172830 Ffma
    temp_338 = fma(temp_6, temp_331, temp_331);
    temp_339 = clamp(temp_338, 0.0, 1.0);
    // 0x000BC8: 0x59A40A0001472931 Ffma
    temp_340 = fma(temp_7, temp_332, temp_332);
    temp_341 = clamp(temp_340, 0.0, 1.0);
    // 0x000BD0: 0x59A4190003272032 Ffma
    temp_342 = fma(temp_8, temp_333, temp_333);
    temp_343 = clamp(temp_342, 0.0, 1.0);
    // 0x000BD8: 0xF0F800000000000F Sync
    temp_344 = 0.0;
    temp_345 = 0.0;
    temp_346 = 0.0;
    temp_347 = 0.0;
    temp_348 = 0.0;
    temp_349 = 0.0;
    temp_350 = 0.0;
    temp_351 = 0.0;
    temp_352 = 0.0;
    temp_353 = 0.0;
    temp_354 = 0.0;
    temp_355 = 0.0;
    if (!temp_304)
    {
        // 0x000BE8: 0x5C9807800FF7003C Mov
        // 0x000BF0: 0xE043FF8D0107FF35 Ipa
        temp_356 = in_attr5.x;
        // 0x000BF8: 0xE043FF8D4107FF37 Ipa
        temp_357 = in_attr5.y;
        // 0x000C08: 0xE043FF8D8107FF39 Ipa
        temp_358 = in_attr5.z;
        temp_359 = 0;
        do
        {
            // 0x000C10: 0x5C18020003C72A3F Iscadd
            temp_361 = int(temp_200) << 4;
            temp_362 = temp_361 + temp_359;
            // 0x000C18: 0xE290000055800000 Ssy
            // 0x000C28: 0x3848000000473F3F Shl
            temp_363 = temp_362 << 4;
            // 0x000C30: 0xEF94008200073F38 Ldc
            temp_364 = temp_363 + 0x2000;
            temp_365 = uint(temp_364) >> 2;
            temp_366 = temp_365 >> 2;
            temp_367 = int(temp_365) & 3;
            temp_368 = fp_c8.data[int(temp_366)][temp_367];
            // 0x000C38: 0x3848000000673838 Shl
            temp_369 = floatBitsToInt(temp_368) << 6;
            // 0x000C48: 0xEF95008001073810 Ldc
            temp_370 = temp_369 + 16;
            temp_371 = uint(temp_370) >> 2;
            temp_372 = temp_371 >> 2;
            temp_373 = int(temp_371) & 3;
            temp_374 = fp_c8.data[int(temp_372)][temp_373];
            temp_375 = int(temp_371) + 1;
            temp_376 = uint(temp_375) >> 2;
            temp_377 = temp_375 & 3;
            temp_378 = fp_c8.data[int(temp_376)][temp_377];
            // 0x000C50: 0xEF95008001873814 Ldc
            temp_379 = temp_369 + 24;
            temp_380 = uint(temp_379) >> 2;
            temp_381 = temp_380 >> 2;
            temp_382 = int(temp_380) & 3;
            temp_383 = fp_c8.data[int(temp_381)][temp_382];
            temp_384 = int(temp_380) + 1;
            temp_385 = uint(temp_384) >> 2;
            temp_386 = temp_384 & 3;
            temp_387 = fp_c8.data[int(temp_385)][temp_386];
            // 0x000C58: 0xEF95008002073818 Ldc
            temp_388 = temp_369 + 32;
            temp_389 = uint(temp_388) >> 2;
            temp_390 = temp_389 >> 2;
            temp_391 = int(temp_389) & 3;
            temp_392 = fp_c8.data[int(temp_390)][temp_391];
            temp_393 = int(temp_389) + 1;
            temp_394 = uint(temp_393) >> 2;
            temp_395 = temp_393 & 3;
            temp_396 = fp_c8.data[int(temp_394)][temp_395];
            // 0x000C68: 0x5C5830000357103A Fadd
            temp_397 = 0.0 - temp_356;
            temp_398 = temp_374 + temp_397;
            // 0x000C70: 0x5C5830000377113D Fadd
            temp_399 = 0.0 - temp_357;
            temp_400 = temp_378 + temp_399;
            // 0x000C78: 0x5C58300003971414 Fadd
            temp_401 = 0.0 - temp_358;
            temp_402 = temp_383 + temp_401;
            // 0x000C88: 0x5C68100003A73A3E Fmul
            temp_403 = temp_398 * temp_398;
            // 0x000C90: 0x59A10A0001471511 Ffma
            temp_404 = 0.0 - temp_402;
            temp_405 = fma(temp_387, temp_404, temp_402);
            // 0x000C98: 0x59A01F0003D73D3E Ffma
            temp_406 = fma(temp_400, temp_400, temp_403);
            // 0x000CA8: 0x59A01F0001171115 Ffma
            temp_407 = fma(temp_405, temp_405, temp_406);
            // 0x000CB0: 0x5080000000571510 Mufu
            temp_408 = inversesqrt(temp_407);
            // 0x000CB8: 0x5C68100001073A3F Fmul
            temp_409 = temp_398 * temp_408;
            // 0x000CC8: 0x5C68100001071111 Fmul
            temp_410 = temp_405 * temp_408;
            // 0x000CD0: 0x5C68100001073D10 Fmul
            temp_411 = temp_400 * temp_408;
            // 0x000CD8: 0x5C69100001873F18 Fmul
            temp_412 = 0.0 - temp_392;
            temp_413 = temp_409 * temp_412;
            // 0x000CE8: 0x508000000087153F Mufu
            temp_414 = sqrt(temp_407);
            // 0x000CF0: 0x59A10C0001971018 Ffma
            temp_415 = 0.0 - temp_396;
            temp_416 = fma(temp_411, temp_415, temp_413);
            // 0x000CF8: 0xEF94008002873810 Ldc
            temp_417 = temp_369 + 40;
            temp_418 = uint(temp_417) >> 2;
            temp_419 = temp_418 >> 2;
            temp_420 = int(temp_418) & 3;
            temp_421 = fp_c8.data[int(temp_419)][temp_420];
            // 0x000D08: 0x59A10C0001071118 Ffma
            temp_422 = 0.0 - temp_421;
            temp_423 = fma(temp_410, temp_422, temp_416);
            // 0x000D10: 0xEF95008003873810 Ldc
            temp_424 = temp_369 + 56;
            temp_425 = uint(temp_424) >> 2;
            temp_426 = temp_425 >> 2;
            temp_427 = int(temp_425) & 3;
            temp_428 = fp_c8.data[int(temp_426)][temp_427];
            temp_429 = int(temp_425) + 1;
            temp_430 = uint(temp_429) >> 2;
            temp_431 = temp_429 & 3;
            temp_432 = fp_c8.data[int(temp_430)][temp_431];
            // 0x000D18: 0x59A4088001071811 Ffma
            temp_433 = fma(temp_423, temp_428, temp_432);
            temp_434 = clamp(temp_433, 0.0, 1.0);
            // 0x000D28: 0x010404000007F018 Mov32i
            // 0x000D30: 0x5C68100001171119 Fmul
            temp_435 = temp_434 * temp_434;
            // 0x000D38: 0x33A00C4000071110 Ffma
            temp_436 = fma(temp_434, -2.0, 3.0);
            // 0x000D48: 0x5C68100001071919 Fmul
            temp_437 = temp_435 * temp_436;
            // 0x000D50: 0xEF95008003073810 Ldc
            temp_438 = temp_369 + 48;
            temp_439 = uint(temp_438) >> 2;
            temp_440 = temp_439 >> 2;
            temp_441 = int(temp_439) & 3;
            temp_442 = fp_c8.data[int(temp_440)][temp_441];
            temp_443 = int(temp_439) + 1;
            temp_444 = uint(temp_443) >> 2;
            temp_445 = temp_443 & 3;
            temp_446 = fp_c8.data[int(temp_444)][temp_445];
            // 0x000D58: 0x59A4088003F7103F Ffma
            temp_447 = fma(temp_442, temp_414, temp_446);
            temp_448 = clamp(temp_447, 0.0, 1.0);
            // 0x000D68: 0x33A00C4000073F18 Ffma
            temp_449 = fma(temp_448, -2.0, 3.0);
            // 0x000D70: 0x5C68100003F73F3F Fmul
            temp_450 = temp_448 * temp_448;
            // 0x000D78: 0x5C68100001873F18 Fmul
            temp_451 = temp_450 * temp_449;
            // 0x000D88: 0x5C68100001871919 Fmul
            temp_452 = temp_437 * temp_451;
            // 0x000D90: 0x39585042F0071418 Fadd
            temp_453 = abs(temp_402);
            temp_454 = temp_453 + -120.0;
            // 0x000D98: 0x1EABD4CCCCD71818 Fmul32i
            temp_455 = temp_454 * -0.0500000007;
            temp_456 = clamp(temp_455, 0.0, 1.0);
            // 0x000DA8: 0x5C6810000187193F Fmul
            temp_457 = temp_452 * temp_456;
            // 0x000DB0: 0x36247F9000171818 Xmad
            temp_458 = floatBitsToUint(temp_456) >> 16;
            temp_459 = int(temp_458) << 16;
            // 0x000DB8: 0x5BB383800FF73F07 Fsetp
            temp_460 = temp_457 <= 0.0;
            // 0x000DC8: 0x7A05083C0F00FF18 Hadd2
            temp_461 = uint(temp_459);
            temp_462 = temp_344;
            temp_463 = temp_345;
            temp_464 = temp_346;
            temp_465 = temp_347;
            temp_466 = temp_348;
            temp_467 = temp_349;
            if (temp_460)
            {
                temp_468 = unpackHalf2x16(uint(temp_459)).y;
                temp_469 = packHalf2x16(vec2(1.0, temp_468));
                temp_461 = temp_469;
            }
            // 0x000DD0: 0x5D2103902FF71807 Hsetp2
            temp_470 = unpackHalf2x16(temp_461).x;
            temp_471 = temp_470 == 0.0;
            // 0x000DD8: 0xF0F800000008000F Sync
            if (temp_471)
            {
                // 0x000DE8: 0x5080000000471010 Mufu
                temp_472 = 1.0 / temp_442;
                // 0x000DF0: 0x5C69100001071111 Fmul
                temp_473 = 0.0 - temp_472;
                temp_474 = temp_446 * temp_473;
                // 0x000DF8: 0x5C60138001171414 Fmnmx
                temp_475 = min(temp_402, temp_474);
                // 0x000E08: 0x5C61178001471114 Fmnmx
                temp_476 = 0.0 - temp_474;
                temp_477 = max(temp_476, temp_475);
                // 0x000E10: 0x59A01F000147143E Ffma
                temp_478 = fma(temp_477, temp_477, temp_406);
                // 0x000E18: 0x5080000000573E15 Mufu
                temp_479 = inversesqrt(temp_478);
                // 0x000E28: 0x5080000000873E3E Mufu
                temp_480 = sqrt(temp_478);
                // 0x000E30: 0x5C68100001573A11 Fmul
                temp_481 = temp_398 * temp_479;
                // 0x000E38: 0x5C68100001573D3D Fmul
                temp_482 = temp_400 * temp_479;
                // 0x000E48: 0x5C68100001571414 Fmul
                temp_483 = temp_477 * temp_479;
                // 0x000E50: 0x5C58100001171618 Fadd
                temp_484 = temp_93 + temp_481;
                // 0x000E58: 0x5C58100003D72B3A Fadd
                temp_485 = temp_95 + temp_482;
                // 0x000E68: 0x5C68100001871810 Fmul
                temp_486 = temp_484 * temp_484;
                // 0x000E70: 0x59A0080003A73A15 Ffma
                temp_487 = fma(temp_485, temp_485, temp_486);
                // 0x000E78: 0x5C58100001471D10 Fadd
                temp_488 = temp_97 + temp_483;
                // 0x000E88: 0x59A00A8001071019 Ffma
                temp_489 = fma(temp_488, temp_488, temp_487);
                // 0x000E90: 0x5080000000571919 Mufu
                temp_490 = inversesqrt(temp_489);
                // 0x000E98: 0x5C68100001971015 Fmul
                temp_491 = temp_488 * temp_490;
                // 0x000EA8: 0x5C68100001973A10 Fmul
                temp_492 = temp_485 * temp_490;
                // 0x000EB0: 0x5C6810000197183A Fmul
                temp_493 = temp_484 * temp_490;
                // 0x000EB8: 0x5C68100001171C19 Fmul
                temp_494 = temp_66 * temp_481;
                // 0x000EC8: 0x5C68100003A71118 Fmul
                temp_495 = temp_481 * temp_493;
                // 0x000ED0: 0x59A00C0001073D11 Ffma
                temp_496 = fma(temp_482, temp_492, temp_495);
                // 0x000ED8: 0x59A00C8003D7023D Ffma
                temp_497 = fma(temp_67, temp_482, temp_494);
                // 0x000EE8: 0x51A4020400070419 Ffma
                temp_498 = fma(temp_206, temp_206, fp_c1.data[0].x);
                temp_499 = clamp(temp_498, 0.0, 1.0);
                // 0x000EF0: 0x59A4088001571411 Ffma
                temp_500 = fma(temp_483, temp_491, temp_496);
                temp_501 = clamp(temp_500, 0.0, 1.0);
                // 0x000EF8: 0x59A01E8001471218 Ffma
                temp_502 = fma(temp_65, temp_483, temp_497);
                // 0x000F08: 0x5C68100003A71C3D Fmul
                temp_503 = temp_66 * temp_493;
                // 0x000F10: 0x5C5C30000FF71814 Fadd
                temp_504 = temp_502 + -0.0;
                temp_505 = clamp(temp_504, 0.0, 1.0);
                // 0x000F18: 0x59A01E8001070210 Ffma
                temp_506 = fma(temp_67, temp_492, temp_503);
                // 0x000F28: 0xEF94008002C7383D Ldc
                temp_507 = temp_369 + 44;
                temp_508 = uint(temp_507) >> 2;
                temp_509 = temp_508 >> 2;
                temp_510 = int(temp_508) & 3;
                temp_511 = fp_c8.data[int(temp_509)][temp_510];
                // 0x000F30: 0x59A4080001571210 Ffma
                temp_512 = fma(temp_65, temp_491, temp_506);
                temp_513 = clamp(temp_512, 0.0, 1.0);
                // 0x000F38: 0x5C68100001971915 Fmul
                temp_514 = temp_499 * temp_499;
                // 0x000F48: 0x59A2080001071515 Ffma
                temp_515 = 0.0 - temp_513;
                temp_516 = fma(temp_514, temp_513, temp_515);
                // 0x000F50: 0x51A00A8400171015 Ffma
                temp_517 = fma(temp_513, temp_516, fp_c1.data[0].y);
                // 0x000F58: 0x5080000000471510 Mufu
                temp_518 = 1.0 / temp_517;
                // 0x000F68: 0x5C68100001071910 Fmul
                temp_519 = temp_499 * temp_518;
                // 0x000F70: 0x59A10A0001473619 Ffma
                temp_520 = 0.0 - temp_505;
                temp_521 = fma(temp_220, temp_520, temp_505);
                // 0x000F78: 0x5C68100001071010 Fmul
                temp_522 = temp_519 * temp_519;
                // 0x000F88: 0x5C5810000197363A Fadd
                temp_523 = temp_220 + temp_521;
                // 0x000F90: 0x5080000000473A19 Mufu
                temp_524 = 1.0 / temp_523;
                // 0x000F98: 0x5C68100001973319 Fmul
                temp_525 = temp_256 * temp_524;
                // 0x000FA8: 0x5C68100001971019 Fmul
                temp_526 = temp_522 * temp_525;
                // 0x000FB0: 0x5080000000473D10 Mufu
                temp_527 = 1.0 / temp_511;
                // 0x000FB8: 0x5C68100001971414 Fmul
                temp_528 = temp_505 * temp_526;
                // 0x000FC8: 0xEF9400800087383D Ldc
                temp_529 = temp_369 + 8;
                temp_530 = uint(temp_529) >> 2;
                temp_531 = temp_530 >> 2;
                temp_532 = int(temp_530) & 3;
                temp_533 = fp_c8.data[int(temp_531)][temp_532];
                // 0x000FD0: 0x51A01F0400571019 Ffma
                temp_534 = fma(temp_527, temp_480, fp_c1.data[1].y);
                // 0x000FD8: 0x5080000000471910 Mufu
                temp_535 = 1.0 / temp_534;
                // 0x000FE8: 0x1E23FB3333371010 Fmul32i
                temp_536 = temp_535 * 1.39999998;
                // 0x000FF0: 0x5C68100001071015 Fmul
                temp_537 = temp_536 * temp_536;
                // 0x000FF8: 0x01040DF760C7F010 Mov32i
                // 0x001008: 0x59A10A8001571815 Ffma
                temp_538 = 0.0 - temp_537;
                temp_539 = fma(temp_502, temp_538, temp_537);
                // 0x001010: 0x49A2080400271110 Ffma
                temp_540 = fma(temp_501, fp_c1.data[0].z, -6.98316002);
                // 0x001018: 0x5C5C100001571815 Fadd
                temp_541 = temp_502 + temp_539;
                temp_542 = clamp(temp_541, 0.0, 1.0);
                // 0x001028: 0x5C68100001071118 Fmul
                temp_543 = temp_501 * temp_540;
                // 0x001030: 0xEF95008000073810 Ldc
                temp_544 = uint(temp_369) >> 2;
                temp_545 = temp_544 >> 2;
                temp_546 = int(temp_544) & 3;
                temp_547 = fp_c8.data[int(temp_545)][temp_546];
                temp_548 = int(temp_544) + 1;
                temp_549 = uint(temp_548) >> 2;
                temp_550 = temp_548 & 3;
                temp_551 = fp_c8.data[int(temp_549)][temp_550];
                // 0x001038: 0x5C90008001870018 Rro
                // 0x001048: 0x5080000000271818 Mufu
                temp_552 = exp2(temp_543);
                // 0x001050: 0x59A10C000187053E Ffma
                temp_553 = 0.0 - temp_552;
                temp_554 = fma(temp_245, temp_553, temp_552);
                // 0x001058: 0x59A10C0001870819 Ffma
                temp_555 = 0.0 - temp_552;
                temp_556 = fma(temp_257, temp_555, temp_552);
                // 0x001068: 0x5C58100003E7053E Fadd
                temp_557 = temp_245 + temp_554;
                // 0x001070: 0x5C58100001970819 Fadd
                temp_558 = temp_257 + temp_556;
                // 0x001078: 0x4C68101406973E3E Fmul
                temp_559 = temp_557 * fp_c5.data[26].y;
                // 0x001088: 0x4C68101406971919 Fmul
                temp_560 = temp_558 * fp_c5.data[26].y;
                // 0x001090: 0x5C68100001173F3A Fmul
                temp_561 = temp_457 * temp_551;
                // 0x001098: 0x59A10C0001870611 Ffma
                temp_562 = 0.0 - temp_552;
                temp_563 = fma(temp_251, temp_562, temp_552);
                // 0x0010A8: 0x5C68100001073F10 Fmul
                temp_564 = temp_457 * temp_547;
                // 0x0010B0: 0x5C68100003D73F3F Fmul
                temp_565 = temp_457 * temp_533;
                // 0x0010B8: 0x5C58100001170611 Fadd
                temp_566 = temp_251 + temp_563;
                // 0x0010C8: 0x5C68100001073E3E Fmul
                temp_567 = temp_559 * temp_564;
                // 0x0010D0: 0x5C68100003F71919 Fmul
                temp_568 = temp_560 * temp_565;
                // 0x0010D8: 0x5C68100001571018 Fmul
                temp_569 = temp_564 * temp_542;
                // 0x0010E8: 0x4C68101406971111 Fmul
                temp_570 = temp_566 * fp_c5.data[26].y;
                // 0x0010F0: 0x5C68100001473E3E Fmul
                temp_571 = temp_567 * temp_528;
                // 0x0010F8: 0x5C68100001471919 Fmul
                temp_572 = temp_568 * temp_528;
                // 0x001108: 0x49A0018400671803 Ffma
                temp_573 = fma(temp_569, fp_c1.data[1].z, temp_344);
                // 0x001110: 0x5C68100003A71111 Fmul
                temp_574 = temp_570 * temp_561;
                // 0x001118: 0x5C68100001573A3A Fmul
                temp_575 = temp_561 * temp_542;
                // 0x001128: 0x5C68100001573F15 Fmul
                temp_576 = temp_565 * temp_542;
                // 0x001130: 0x49A0160400473E2C Ffma
                temp_577 = fma(temp_571, fp_c1.data[1].x, temp_345);
                // 0x001138: 0x49A017040047192E Ffma
                temp_578 = fma(temp_572, fp_c1.data[1].x, temp_346);
                // 0x001148: 0x5C68100001471110 Fmul
                temp_579 = temp_574 * temp_528;
                // 0x001150: 0x49A0178400673A2F Ffma
                temp_580 = fma(temp_575, fp_c1.data[1].z, temp_347);
                // 0x001158: 0x49A01A0400671534 Ffma
                temp_581 = fma(temp_576, fp_c1.data[1].z, temp_348);
                // 0x001168: 0x49A016840047102D Ffma
                temp_582 = fma(temp_579, fp_c1.data[1].x, temp_349);
                // 0x001170: 0xF0F800000007000F Sync
                temp_462 = temp_573;
                temp_463 = temp_577;
                temp_464 = temp_578;
                temp_465 = temp_580;
                temp_466 = temp_581;
                temp_467 = temp_582;
            }
            // 0x001178: 0x1C00000000173C3C Iadd32i
            temp_583 = temp_359 + 1;
            // 0x001188: 0x5B6C038001E73C07 Isetp
            temp_360 = uint(temp_583) >= floatBitsToUint(temp_270);
            // 0x001190: 0xE2400FFFA788000F Bra
            temp_359 = temp_583;
            temp_344 = temp_462;
            temp_345 = temp_463;
            temp_346 = temp_464;
            temp_347 = temp_465;
            temp_348 = temp_466;
            temp_349 = temp_467;
            temp_350 = temp_465;
            temp_351 = temp_462;
            temp_352 = temp_463;
            temp_353 = temp_464;
            temp_354 = temp_467;
            temp_355 = temp_466;
        }
        while (!temp_360);
        // 0x001198: 0xF0F800000007000F Sync
    }
    // 0x0011A8: 0x5C62578001A73B11 Fmnmx
    temp_584 = abs(temp_192);
    temp_585 = abs(temp_337);
    temp_586 = max(temp_584, temp_585);
    // 0x0011B0: 0xE003FF87CFF7FF33 Ipa
    // 0x0011B8: 0x38681040E0070437 Fmul
    temp_587 = temp_206 * 7.0;
    // 0x0011C8: 0x5C62578000271C10 Fmnmx
    temp_588 = abs(temp_66);
    temp_589 = abs(temp_67);
    temp_590 = max(temp_588, temp_589);
    // 0x0011D0: 0x010000000017F018 Mov32i
    // 0x0011D8: 0x386810408007042B Fmul
    temp_591 = temp_206 * 4.0;
    // 0x0011E8: 0x5C60578001171B14 Fmnmx
    temp_592 = abs(temp_194);
    temp_593 = max(temp_592, temp_586);
    // 0x0011F0: 0x5080000000471414 Mufu
    temp_594 = 1.0 / temp_593;
    // 0x0011F8: 0x5C60578001071210 Fmnmx
    temp_595 = abs(temp_65);
    temp_596 = max(temp_595, temp_590);
    // 0x001208: 0x5080000000471011 Mufu
    temp_597 = 1.0 / temp_596;
    // 0x001210: 0x5C68100001473B19 Fmul
    temp_598 = temp_192 * temp_594;
    // 0x001218: 0x5C68100001471A1A Fmul
    temp_599 = temp_337 * temp_594;
    // 0x001228: 0x5080000000473333 Mufu
    // 0x001230: 0x5C69100001471B1B Fmul
    temp_600 = 0.0 - temp_594;
    temp_601 = temp_194 * temp_600;
    // 0x001238: 0x5C69100001171212 Fmul
    temp_602 = 0.0 - temp_597;
    temp_603 = temp_65 * temp_602;
    // 0x001248: 0xC1BA0143F3771818 Tex
    temp_604 = textureLod(fp_t_tcb_14, vec4(temp_598, temp_599, temp_601, float(1)), temp_587).xyz;
    temp_605 = temp_604.x;
    temp_606 = temp_604.y;
    temp_607 = temp_604.z;
    // 0x001250: 0x5C68100001171C10 Fmul
    temp_608 = temp_66 * temp_597;
    // 0x001258: 0x5C68100001170211 Fmul
    temp_609 = temp_67 * temp_597;
    // 0x001268: 0xE043FF910337FF14 Ipa
    temp_610 = in_attr9.x;
    // 0x001270: 0x5C9807800127002A Mov
    // 0x001278: 0xE043FF914337FF15 Ipa
    temp_611 = in_attr9.y;
    // 0x001288: 0xC0BA0163EFF7101C Tex
    temp_612 = textureLod(fp_t_tcb_16, vec3(temp_608, temp_609, temp_603), 0.0).xyz;
    temp_613 = temp_612.x;
    temp_614 = temp_612.y;
    temp_615 = temp_612.z;
    // 0x001290: 0xD9A2018352A7102A Texs
    temp_616 = textureLod(fp_t_tcb_18, vec3(temp_608, temp_609, temp_603), temp_591).xyz;
    temp_617 = temp_616.x;
    temp_618 = temp_616.y;
    temp_619 = temp_616.z;
    // 0x001298: 0xE043FF918337FF16 Ipa
    temp_620 = in_attr9.z;
    // 0x0012A8: 0x4C98079C0207003B Mov
    // 0x0012B0: 0xDEBA0000C3B71414 TexB
    temp_621 = texture(fp_t_cb7_20, vec3(temp_610, temp_611, temp_620)).x;
    // 0x0012B8: 0x49A005180A172F0A Ffma
    temp_622 = fma(temp_350, fp_c6.data[40].y, temp_286);
    // 0x0012C8: 0x010410676C97F02F Mov32i
    // 0x0012D0: 0x3859103F80070404 Fadd
    temp_623 = 0.0 - temp_206;
    temp_624 = temp_623 + 1.0;
    // 0x0012D8: 0x49A004980A170309 Ffma
    temp_625 = fma(temp_351, fp_c6.data[40].y, temp_279);
    // 0x0012E8: 0x1E23E468DB970136 Fmul32i
    temp_626 = temp_129 * 0.193900004;
    // 0x0012F0: 0x49A007980A172C0F Ffma
    temp_627 = fma(temp_352, fp_c6.data[40].y, temp_329);
    // 0x0012F8: 0x4C9807980B47001B Mov
    // 0x001308: 0x49A0178400A70110 Ffma
    temp_628 = fma(temp_129, fp_c1.data[2].z, 8.40400028);
    // 0x001310: 0x5C68100000470404 Fmul
    temp_629 = temp_624 * temp_624;
    // 0x001318: 0x0103F0000007F011 Mov32i
    // 0x001328: 0x49A00B980A172E17 Ffma
    temp_630 = fma(temp_353, fp_c6.data[40].y, temp_335);
    // 0x001330: 0x4C98079800A7002C Mov
    // 0x001338: 0x51A20D980B472525 Ffma
    temp_631 = 0.0 - fp_c6.data[45].x;
    temp_632 = fma(temp_156, fp_c6.data[45].x, temp_631);
    // 0x001348: 0x51A20D980B470000 Ffma
    temp_633 = 0.0 - fp_c6.data[45].x;
    temp_634 = fma(temp_157, fp_c6.data[45].x, temp_633);
    // 0x001350: 0x5C68100000470403 Fmul
    temp_635 = temp_629 * temp_629;
    // 0x001358: 0xE04BFF904337FF04 Ipa
    temp_636 = in_attr8.y;
    temp_637 = clamp(temp_636, 0.0, 1.0);
    // 0x001368: 0x51A20D980B472424 Ffma
    temp_638 = 0.0 - fp_c6.data[45].x;
    temp_639 = fma(temp_155, fp_c6.data[45].x, temp_638);
    // 0x001370: 0x51A0080400B70116 Ffma
    temp_640 = fma(temp_129, temp_628, fp_c1.data[2].w);
    // 0x001378: 0x5080000000371F10 Mufu
    temp_641 = log2(temp_188);
    // 0x001388: 0x4C68101809071F15 Fmul
    temp_642 = temp_188 * fp_c6.data[36].x;
    // 0x001390: 0x32A008BF00070202 Ffma
    temp_643 = fma(temp_67, 0.5, 0.5);
    // 0x001398: 0x5080400000371515 Mufu
    temp_644 = abs(temp_642);
    temp_645 = log2(temp_644);
    // 0x0013A8: 0x4C9807980097001B Mov
    // 0x0013B0: 0x49A009980A172D13 Ffma
    temp_646 = fma(temp_354, fp_c6.data[40].y, temp_334);
    // 0x0013B8: 0x51A00B0400D70111 Ffma
    temp_647 = fma(temp_129, temp_640, fp_c1.data[3].y);
    // 0x0013C8: 0x0103E2CD9E87F02E Mov32i
    // 0x0013D0: 0x49A01B0400870336 Ffma
    temp_648 = fma(temp_635, fp_c1.data[2].x, temp_626);
    // 0x0013D8: 0x0104066978D7F02D Mov32i
    // 0x0013E8: 0x49A005980A17340B Ffma
    temp_649 = fma(temp_355, fp_c6.data[40].y, temp_290);
    // 0x0013F0: 0x4C9807980997002F Mov
    // 0x0013F8: 0x4C68101808772323 Fmul
    temp_650 = temp_167 * fp_c6.data[33].w;
    // 0x001408: 0x4C68101808971016 Fmul
    temp_651 = temp_641 * fp_c6.data[34].y;
    // 0x001410: 0x4C59101800571B10 Fadd
    temp_652 = 0.0 - fp_c6.data[2].y;
    temp_653 = temp_652 + fp_c6.data[1].y;
    // 0x001418: 0x4C59101800672C1B Fadd
    temp_654 = 0.0 - fp_c6.data[2].z;
    temp_655 = temp_654 + fp_c6.data[1].z;
    // 0x001428: 0x4C6810180917151F Fmul
    temp_656 = temp_645 * fp_c6.data[36].y;
    // 0x001430: 0x49A2170400C7032C Ffma
    temp_657 = fma(temp_635, fp_c1.data[3].x, -0.168799996);
    // 0x001438: 0x088BF05D63973612 Fadd32i
    temp_658 = temp_648 + -0.522800028;
    // 0x001448: 0x5C90008001670034 Rro
    // 0x001450: 0x49A2168400770316 Ffma
    temp_659 = fma(temp_635, fp_c1.data[1].w, -3.60299993);
    // 0x001458: 0x010404000007F036 Mov32i
    // 0x001468: 0x4C58101408172F15 Fadd
    temp_660 = fp_c6.data[38].y + fp_c5.data[32].y;
    // 0x001470: 0x5C90008001F7002E Rro
    // 0x001478: 0x5C68100002C7031F Fmul
    temp_661 = temp_635 * temp_657;
    // 0x001488: 0x5084000000272E2E Mufu
    temp_662 = exp2(temp_656);
    temp_663 = clamp(temp_662, 0.0, 1.0);
    // 0x001490: 0x5C68100001270112 Fmul
    temp_664 = temp_129 * temp_658;
    // 0x001498: 0x51A00B040097032C Ffma
    temp_665 = fma(temp_635, temp_659, fp_c1.data[2].y);
    // 0x0014A8: 0x5084000000273416 Mufu
    temp_666 = exp2(temp_651);
    temp_667 = clamp(temp_666, 0.0, 1.0);
    // 0x0014B0: 0x33A01B400007042D Ffma
    temp_668 = fma(temp_637, -2.0, 3.0);
    // 0x0014B8: 0x5C6810000047042F Fmul
    temp_669 = temp_637 * temp_637;
    // 0x0014C8: 0x51A0011800971004 Ffma
    temp_670 = fma(temp_653, temp_643, fp_c6.data[2].y);
    // 0x0014D0: 0x5C60138001171F11 Fmnmx
    temp_671 = min(temp_661, temp_647);
    // 0x0014D8: 0x51A0011800A71B10 Ffma
    temp_672 = fma(temp_655, temp_643, fp_c6.data[2].z);
    // 0x0014E8: 0x59A0090002C70312 Ffma
    temp_673 = fma(temp_635, temp_665, temp_664);
    // 0x0014F0: 0x386C10424807061B Fmul
    temp_674 = temp_251 * 50.0;
    temp_675 = clamp(temp_674, 0.0, 1.0);
    // 0x0014F8: 0x4C98079800870001 Mov
    // 0x001508: 0x4C98079808670003 Mov
    // 0x001510: 0x5C68100002E7152E Fmul
    temp_676 = temp_660 * temp_663;
    // 0x001518: 0x5C5C30000FF71115 Fadd
    temp_677 = temp_671 + -0.0;
    temp_678 = clamp(temp_677, 0.0, 1.0);
    // 0x001528: 0x4C5C100400E71212 Fadd
    temp_679 = temp_673 + fp_c1.data[3].z;
    temp_680 = clamp(temp_679, 0.0, 1.0);
    // 0x001530: 0x4C68101808871611 Fmul
    temp_681 = temp_667 * fp_c6.data[34].x;
    // 0x001538: 0x4C59101800470101 Fadd
    temp_682 = 0.0 - fp_c6.data[2].x;
    temp_683 = temp_682 + fp_c6.data[1].x;
    // 0x001548: 0x4C68101808C72E16 Fmul
    temp_684 = temp_676 * fp_c6.data[35].x;
    // 0x001550: 0x5C68100001571B1B Fmul
    temp_685 = temp_675 * temp_678;
    // 0x001558: 0x5C59100001271512 Fadd
    temp_686 = 0.0 - temp_678;
    temp_687 = temp_686 + temp_680;
    // 0x001568: 0x51A0019808671111 Ffma
    temp_688 = fma(temp_681, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001570: 0x51A0011800870101 Ffma
    temp_689 = fma(temp_683, temp_643, fp_c6.data[2].x);
    // 0x001578: 0x5C68100002F72D02 Fmul
    temp_690 = temp_668 * temp_669;
    // 0x001588: 0x4C9807940827002D Mov
    // 0x001590: 0x49A10B140827161F Ffma
    temp_691 = 0.0 - fp_c5.data[32].z;
    temp_692 = fma(temp_684, temp_691, temp_684);
    // 0x001598: 0x59A00D8001270503 Ffma
    temp_693 = fma(temp_245, temp_687, temp_685);
    // 0x0015A8: 0x59A00D8001270606 Ffma
    temp_694 = fma(temp_251, temp_687, temp_685);
    // 0x0015B0: 0x59A00D8001270808 Ffma
    temp_695 = fma(temp_257, temp_687, temp_685);
    // 0x0015B8: 0x4C68101808D72E2C Fmul
    temp_696 = temp_676 * fp_c6.data[35].y;
    // 0x0015C8: 0x4C68101406972D2D Fmul
    temp_697 = fp_c5.data[32].z * fp_c5.data[26].y;
    // 0x0015D0: 0x4C68101808E72E2E Fmul
    temp_698 = temp_676 * fp_c6.data[35].z;
    // 0x0015D8: 0x4C68101406970303 Fmul
    temp_699 = temp_693 * fp_c5.data[26].y;
    // 0x0015E8: 0x4C68101406970606 Fmul
    temp_700 = temp_694 * fp_c5.data[26].y;
    // 0x0015F0: 0x4C68101406970808 Fmul
    temp_701 = temp_695 * fp_c5.data[26].y;
    // 0x0015F8: 0x5C58100000971F09 Fadd
    temp_702 = temp_692 + temp_625;
    // 0x001608: 0x59A0078002D7160F Ffma
    temp_703 = fma(temp_684, temp_697, temp_627);
    // 0x001610: 0x59A0098002D72C13 Ffma
    temp_704 = fma(temp_696, temp_697, temp_646);
    // 0x001618: 0x49A1161408272C2C Ffma
    temp_705 = 0.0 - fp_c5.data[32].z;
    temp_706 = fma(temp_696, temp_705, temp_696);
    // 0x001628: 0x59A00B8002D72E17 Ffma
    temp_707 = fma(temp_698, temp_697, temp_630);
    // 0x001630: 0x49A1171408272E2E Ffma
    temp_708 = 0.0 - fp_c5.data[32].z;
    temp_709 = fma(temp_698, temp_708, temp_698);
    // 0x001638: 0x4C68101803770202 Fmul
    temp_710 = temp_690 * fp_c6.data[13].w;
    // 0x001648: 0x5C58100000A72C0A Fadd
    temp_711 = temp_706 + temp_622;
    // 0x001650: 0x5C58100000B72E0B Fadd
    temp_712 = temp_709 + temp_649;
    // 0x001658: 0xF0F0000034370000 Depbar
    // 0x001668: 0x5C68100000371805 Fmul
    temp_713 = temp_605 * temp_699;
    // 0x001670: 0x5C68100000671919 Fmul
    temp_714 = temp_606 * temp_700;
    // 0x001678: 0x5C68100000871A1A Fmul
    temp_715 = temp_607 * temp_701;
    // 0x001688: 0x4C68101808570516 Fmul
    temp_716 = temp_713 * fp_c6.data[33].y;
    // 0x001690: 0xE043FF900337FF05 Ipa
    temp_717 = in_attr8.x;
    // 0x001698: 0x4C6810180857191B Fmul
    temp_718 = temp_714 * fp_c6.data[33].y;
    // 0x0016A8: 0xF0F0000034170000 Depbar
    // 0x0016B0: 0x49A00E040067011C Ffma
    temp_719 = fma(temp_689, fp_c1.data[1].z, temp_613);
    // 0x0016B8: 0x49A00E8400670412 Ffma
    temp_720 = fma(temp_670, fp_c1.data[1].z, temp_614);
    // 0x0016C8: 0x49A00F0400671018 Ffma
    temp_721 = fma(temp_672, fp_c1.data[1].z, temp_615);
    // 0x0016D0: 0x59A00B0000170C0C Ffma
    temp_722 = fma(temp_184, temp_689, temp_716);
    // 0x0016D8: 0x4C68101808571A01 Fmul
    temp_723 = temp_715 * fp_c6.data[33].y;
    // 0x0016E8: 0x59A00D8000470D04 Ffma
    temp_724 = fma(temp_284, temp_670, temp_718);
    // 0x0016F0: 0x59A20E0001172626 Ffma
    temp_725 = 0.0 - temp_719;
    temp_726 = fma(temp_164, temp_688, temp_725);
    // 0x0016F8: 0x59A2090001172715 Ffma
    temp_727 = 0.0 - temp_720;
    temp_728 = fma(temp_165, temp_688, temp_727);
    // 0x001708: 0x59A20C0001172211 Ffma
    temp_729 = 0.0 - temp_721;
    temp_730 = fma(temp_166, temp_688, temp_729);
    // 0x001710: 0x59A0060002A7030C Ffma
    temp_731 = fma(temp_699, temp_617, temp_722);
    // 0x001718: 0x59A0008001070E0E Ffma
    temp_732 = fma(temp_295, temp_672, temp_723);
    // 0x001728: 0x59A0020002B70604 Ffma
    temp_733 = fma(temp_700, temp_618, temp_724);
    // 0x001730: 0x59A00E0002672326 Ffma
    temp_734 = fma(temp_650, temp_726, temp_719);
    // 0x001738: 0x59A0090001572315 Ffma
    temp_735 = fma(temp_650, temp_728, temp_720);
    // 0x001748: 0x59A00C0001172311 Ffma
    temp_736 = fma(temp_650, temp_730, temp_721);
    // 0x001750: 0x5C58100000F70C0F Fadd
    temp_737 = temp_731 + temp_703;
    // 0x001758: 0x59A007000357080E Ffma
    temp_738 = fma(temp_701, temp_619, temp_732);
    // 0x001768: 0xE043FF8C8337FF08 Ipa
    temp_739 = in_attr4.z;
    // 0x001770: 0x5C58100001370404 Fadd
    temp_740 = temp_733 + temp_704;
    // 0x001778: 0x5C58100000972609 Fadd
    temp_741 = temp_734 + temp_702;
    // 0x001788: 0x5C58100000A7150A Fadd
    temp_742 = temp_735 + temp_711;
    // 0x001790: 0x5C58100000B71111 Fadd
    temp_743 = temp_736 + temp_712;
    // 0x001798: 0x4C98079802870001 Mov
    // 0x0017A8: 0x5C58100001770E0E Fadd
    temp_744 = temp_738 + temp_707;
    // 0x0017B0: 0x4C98079802970003 Mov
    // 0x0017B8: 0x59A1048000970709 Ffma
    temp_745 = 0.0 - temp_741;
    temp_746 = fma(temp_152, temp_745, temp_741);
    // 0x0017C8: 0x59A1050000A7070A Ffma
    temp_747 = 0.0 - temp_742;
    temp_748 = fma(temp_152, temp_747, temp_742);
    // 0x0017D0: 0x59A1088001170707 Ffma
    temp_749 = 0.0 - temp_743;
    temp_750 = fma(temp_152, temp_749, temp_743);
    // 0x0017D8: 0x51A0009802872401 Ffma
    temp_751 = fma(temp_639, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0017E8: 0x51A0019802972503 Ffma
    temp_752 = fma(temp_632, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0017F0: 0x59A0078000972809 Ffma
    temp_753 = fma(temp_6, temp_746, temp_737);
    // 0x0017F8: 0x59A0020000A72904 Ffma
    temp_754 = fma(temp_7, temp_748, temp_740);
    // 0x001808: 0x49A502980BC71414 Ffma
    temp_755 = 0.0 - fp_c6.data[47].x;
    temp_756 = fma(temp_621, temp_755, temp_717);
    temp_757 = clamp(temp_756, 0.0, 1.0);
    // 0x001810: 0x4C98079802A70005 Mov
    // 0x001818: 0x5080000000371414 Mufu
    temp_758 = log2(temp_757);
    // 0x001828: 0x59A0070000772007 Ffma
    temp_759 = fma(temp_8, temp_750, temp_744);
    // 0x001830: 0x5C68100000973030 Fmul
    temp_760 = temp_339 * temp_753;
    // 0x001838: 0x5C68100000473131 Fmul
    temp_761 = temp_341 * temp_754;
    // 0x001848: 0x51A0029802A70000 Ffma
    temp_762 = fma(temp_634, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001850: 0x5C68100000773232 Fmul
    temp_763 = temp_343 * temp_759;
    // 0x001858: 0x5C58300000173004 Fadd
    temp_764 = 0.0 - temp_751;
    temp_765 = temp_760 + temp_764;
    // 0x001868: 0x5C58300000373105 Fadd
    temp_766 = 0.0 - temp_752;
    temp_767 = temp_761 + temp_766;
    // 0x001870: 0x4C58100C03870808 Fadd
    temp_768 = temp_739 + fp_c3.data[14].x;
    // 0x001878: 0x5C58300000073206 Fadd
    temp_769 = 0.0 - temp_762;
    temp_770 = temp_763 + temp_769;
    // 0x001888: 0x4C68101803171407 Fmul
    temp_771 = temp_758 * fp_c6.data[12].y;
    // 0x001890: 0x49A000980BF70404 Ffma
    temp_772 = fma(temp_765, fp_c6.data[47].w, temp_751);
    // 0x001898: 0x49A001980BF70505 Ffma
    temp_773 = fma(temp_767, fp_c6.data[47].w, temp_752);
    // 0x0018A8: 0x49A000180BF70606 Ffma
    temp_774 = fma(temp_770, fp_c6.data[47].w, temp_762);
    // 0x0018B0: 0x5C90008000770007 Rro
    // 0x0018B8: 0x5C60178000470104 Fmnmx
    temp_775 = max(temp_751, temp_772);
    // 0x0018C8: 0x5080000000270707 Mufu
    temp_776 = exp2(temp_771);
    // 0x0018D0: 0x49A2011803470201 Ffma
    temp_777 = 0.0 - temp_710;
    temp_778 = fma(temp_710, fp_c6.data[13].x, temp_777);
    // 0x0018D8: 0x5C60178000570305 Fmnmx
    temp_779 = max(temp_752, temp_773);
    // 0x0018E8: 0x49A2011803570203 Ffma
    temp_780 = 0.0 - temp_710;
    temp_781 = fma(temp_710, fp_c6.data[13].y, temp_780);
    // 0x0018F0: 0x5C60178000670006 Fmnmx
    temp_782 = max(temp_762, temp_774);
    // 0x0018F8: 0x49A2011803670200 Ffma
    temp_783 = 0.0 - temp_710;
    temp_784 = fma(temp_710, fp_c6.data[13].z, temp_783);
    // 0x001908: 0x59A0020000170401 Ffma
    temp_785 = fma(temp_775, temp_778, temp_775);
    // 0x001910: 0x59A0028000370502 Ffma
    temp_786 = fma(temp_779, temp_781, temp_779);
    // 0x001918: 0x0103F4000007F005 Mov32i
    // 0x001928: 0x59A0030000070600 Ffma
    temp_787 = fma(temp_782, temp_784, temp_782);
    // 0x001930: 0x5C9807800FF70006 Mov
    // 0x001938: 0x4C68101802B70704 Fmul
    temp_788 = temp_776 * fp_c6.data[10].w;
    // 0x001948: 0x5C59100000173001 Fadd
    temp_789 = 0.0 - temp_760;
    temp_790 = temp_789 + temp_785;
    // 0x001950: 0x5C59100000273102 Fadd
    temp_791 = 0.0 - temp_761;
    temp_792 = temp_791 + temp_786;
    // 0x001958: 0x5C98078002170007 Mov
    // 0x001968: 0x5C59100000073203 Fadd
    temp_793 = 0.0 - temp_763;
    temp_794 = temp_793 + temp_787;
    // 0x001970: 0x59A0180000470100 Ffma
    temp_795 = fma(temp_790, temp_788, temp_760);
    // 0x001978: 0x59A0188000470201 Ffma
    temp_796 = fma(temp_792, temp_788, temp_761);
    // 0x001988: 0x59A0190000470302 Ffma
    temp_797 = fma(temp_794, temp_788, temp_763);
    // 0x001990: 0x5C98078002170003 Mov
    // 0x001998: 0x49A37F8C03C70804 Ffma
    temp_798 = 0.0 - fp_c3.data[15].x;
    temp_799 = fma(temp_768, temp_798, -0.0);
    // 0x0019A8: 0xE30000000007000F Exit
    out_attr0.x = temp_795;
    out_attr0.y = temp_796;
    out_attr0.z = temp_797;
    out_attr0.w = temp_9;
    out_attr1.x = temp_799;
    out_attr1.y = 0.75;
    out_attr1.z = 0.0;
    out_attr1.w = temp_9;
    return;
}
