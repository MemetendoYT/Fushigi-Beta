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

uint local_memory[16];
layout (binding = 0) uniform sampler2DArray fp_t_tcb_26;
layout (binding = 1) uniform sampler2DArray fp_t_tcb_2A;
layout (binding = 2) uniform sampler2DArray fp_t_tcb_24;
layout (binding = 3) uniform sampler2DArray fp_t_tcb_36;
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
layout (location = 10) in vec4 in_attr10;

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
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    uint temp_13;
    uint temp_14;
    precise vec2 temp_15;
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
    precise vec3 temp_27;
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
    bool temp_67;
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
    uint temp_188;
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
    int temp_204;
    precise float temp_205;
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
    bool temp_277;
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
    int temp_317;
    bool temp_318;
    int temp_319;
    int temp_320;
    int temp_321;
    int temp_322;
    int temp_323;
    uint temp_324;
    uint temp_325;
    int temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    int temp_331;
    int temp_332;
    uint temp_333;
    uint temp_334;
    int temp_335;
    precise float temp_336;
    int temp_337;
    uint temp_338;
    int temp_339;
    precise float temp_340;
    int temp_341;
    uint temp_342;
    uint temp_343;
    int temp_344;
    precise float temp_345;
    int temp_346;
    uint temp_347;
    int temp_348;
    precise float temp_349;
    int temp_350;
    uint temp_351;
    uint temp_352;
    int temp_353;
    precise float temp_354;
    int temp_355;
    uint temp_356;
    int temp_357;
    precise float temp_358;
    precise float temp_359;
    precise float temp_360;
    int temp_361;
    uint temp_362;
    uint temp_363;
    int temp_364;
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
    int temp_384;
    uint temp_385;
    uint temp_386;
    int temp_387;
    precise float temp_388;
    int temp_389;
    uint temp_390;
    int temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    int temp_395;
    uint temp_396;
    uint temp_397;
    int temp_398;
    precise float temp_399;
    int temp_400;
    uint temp_401;
    int temp_402;
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
    uint temp_419;
    int temp_420;
    precise float temp_421;
    bool temp_422;
    uint temp_423;
    precise float temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    uint temp_431;
    precise float temp_432;
    bool temp_433;
    precise float temp_434;
    int temp_435;
    uint temp_436;
    uint temp_437;
    int temp_438;
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
    uint temp_471;
    uint temp_472;
    int temp_473;
    precise float temp_474;
    int temp_475;
    uint temp_476;
    int temp_477;
    precise float temp_478;
    precise float temp_479;
    precise float temp_480;
    int temp_481;
    uint temp_482;
    uint temp_483;
    int temp_484;
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
    precise vec3 temp_565;
    precise float temp_566;
    precise float temp_567;
    precise float temp_568;
    precise vec3 temp_569;
    precise float temp_570;
    precise float temp_571;
    precise float temp_572;
    precise float temp_573;
    precise float temp_574;
    precise vec3 temp_575;
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
    precise float temp_729;
    precise float temp_730;
    precise float temp_731;
    precise float temp_732;
    precise float temp_733;
    precise float temp_734;
    // 0x000008: 0xE003FF87CFF7FF0C Ipa
    // 0x000010: 0xE003FF870FF7FF09 Ipa
    temp_0 = gl_FragCoord.x;
    temp_1 = support_buffer.render_scale[0];
    temp_2 = temp_0 / temp_1;
    // 0x000018: 0xE003FF874FF7FF08 Ipa
    temp_3 = gl_FragCoord.y;
    temp_4 = support_buffer.render_scale[0];
    temp_5 = temp_3 / temp_4;
    // 0x000028: 0x5080000000470C0C Mufu
    // 0x000030: 0x4C68100C04A70909 Fmul
    temp_6 = temp_2 * fp_c3.data[18].z;
    // 0x000038: 0x4C68100C04B70808 Fmul
    temp_7 = temp_5 * fp_c3.data[18].w;
    // 0x000048: 0xE043FF91C0C7FF02 Ipa
    temp_8 = in_attr9.w;
    // 0x000050: 0xE043FF8E40C7FF0F Ipa
    temp_9 = in_attr6.y;
    // 0x000058: 0xE043FF8E00C7FF15 Ipa
    temp_10 = in_attr6.x;
    // 0x000068: 0x5CB0100000270914 F2i
    temp_11 = roundEven(temp_8);
    temp_12 = max(temp_11, 0.0);
    temp_13 = uint(temp_12);
    temp_14 = clamp(temp_13, 0u, 0xFFFFu);
    // 0x000070: 0xD8F0026FF0F71406 Texs
    temp_15 = texture(fp_t_tcb_26, vec3(temp_10, temp_9, float(int(temp_14)))).xy;
    temp_16 = temp_15.x;
    temp_17 = temp_15.y;
    // 0x000078: 0xD8EC02AFF0F71403 Texs
    temp_18 = texture(fp_t_tcb_2A, vec3(temp_10, temp_9, float(int(temp_14)))).w;
    // 0x000088: 0xD8E20240A0F71404 Texs
    temp_19 = texture(fp_t_tcb_24, vec3(temp_10, temp_9, float(int(temp_14)))).xyz;
    temp_20 = temp_19.x;
    temp_21 = temp_19.y;
    temp_22 = temp_19.z;
    // 0x000090: 0xD8E40360B0F7141E Texs
    temp_23 = texture(fp_t_tcb_36, vec3(temp_10, temp_9, float(int(temp_14)))).xyw;
    temp_24 = temp_23.x;
    temp_25 = temp_23.y;
    temp_26 = temp_23.z;
    // 0x000098: 0xD82202000087091C Texs
    temp_27 = texture(fp_t_tcb_20, vec2(temp_6, temp_7)).xyz;
    temp_28 = temp_27.x;
    temp_29 = temp_27.y;
    temp_30 = temp_27.z;
    // 0x0000A8: 0xE043FF8A00C7FF01 Ipa
    temp_31 = in_attr2.x;
    // 0x0000B0: 0xE043FF8A40C7FF02 Ipa
    temp_32 = in_attr2.y;
    // 0x0000B8: 0xE043FF8900C7FF0E Ipa
    temp_33 = in_attr1.x;
    // 0x0000C8: 0xE043FF8A80C7FF0D Ipa
    temp_34 = in_attr2.z;
    // 0x0000D0: 0xE043FF8940C7FF10 Ipa
    temp_35 = in_attr1.y;
    // 0x0000D8: 0xE043FF8800C7FF16 Ipa
    temp_36 = in_attr0.x;
    // 0x0000E8: 0xE043FF8980C7FF11 Ipa
    temp_37 = in_attr1.z;
    // 0x0000F0: 0xE043FF8840C7FF17 Ipa
    temp_38 = in_attr0.y;
    // 0x0000F8: 0xE043FF8880C7FF18 Ipa
    temp_39 = in_attr0.z;
    // 0x000108: 0xE043FF8B00C7FF31 Ipa
    temp_40 = in_attr3.x;
    // 0x000110: 0xE043FF8B40C7FF30 Ipa
    temp_41 = in_attr3.y;
    // 0x000118: 0xE043FF8B80C7FF2F Ipa
    temp_42 = in_attr3.z;
    // 0x000128: 0x5C6810000017010F Fmul
    temp_43 = temp_31 * temp_31;
    // 0x000130: 0x5C68100000E70E12 Fmul
    temp_44 = temp_33 * temp_33;
    // 0x000138: 0x5C68100001671614 Fmul
    temp_45 = temp_36 * temp_36;
    // 0x000148: 0x59A007800027020F Ffma
    temp_46 = fma(temp_32, temp_32, temp_43);
    // 0x000150: 0x59A0090001071012 Ffma
    temp_47 = fma(temp_35, temp_35, temp_44);
    // 0x000158: 0x59A00A0001771715 Ffma
    temp_48 = fma(temp_38, temp_38, temp_45);
    // 0x000168: 0x59A0078000D70D0F Ffma
    temp_49 = fma(temp_34, temp_34, temp_46);
    // 0x000170: 0x5080000000570F0F Mufu
    temp_50 = inversesqrt(temp_49);
    // 0x000178: 0x59A0090001171112 Ffma
    temp_51 = fma(temp_37, temp_37, temp_47);
    // 0x000188: 0x5080000000571213 Mufu
    temp_52 = inversesqrt(temp_51);
    // 0x000190: 0x59A00A8001871815 Ffma
    temp_53 = fma(temp_39, temp_39, temp_48);
    // 0x000198: 0x5080000000571515 Mufu
    temp_54 = inversesqrt(temp_53);
    // 0x0001A8: 0x5C68100000F70101 Fmul
    temp_55 = temp_31 * temp_50;
    // 0x0001B0: 0x5C68100000F70202 Fmul
    temp_56 = temp_32 * temp_50;
    // 0x0001B8: 0x5C68100000F70D0D Fmul
    temp_57 = temp_34 * temp_50;
    // 0x0001C8: 0x5C68100001370E14 Fmul
    temp_58 = temp_33 * temp_52;
    // 0x0001D0: 0x5C68100001371010 Fmul
    temp_59 = temp_35 * temp_52;
    // 0x0001D8: 0x5C68100001371113 Fmul
    temp_60 = temp_37 * temp_52;
    // 0x0001E8: 0x5C68100001571711 Fmul
    temp_61 = temp_38 * temp_54;
    // 0x0001F0: 0x5C68100001571617 Fmul
    temp_62 = temp_36 * temp_54;
    // 0x0001F8: 0x5C68100001571818 Fmul
    temp_63 = temp_39 * temp_54;
    // 0x000208: 0xF0F0000034370000 Depbar
    // 0x000210: 0x5C6810000077070F Fmul
    temp_64 = temp_17 * temp_17;
    // 0x000218: 0x5C68100000170701 Fmul
    temp_65 = temp_17 * temp_55;
    // 0x000228: 0x5C68100000D7070D Fmul
    temp_66 = temp_17 * temp_57;
    // 0x000230: 0x4BB1839406070307 Fsetp
    temp_67 = temp_18 < fp_c5.data[24].x;
    // 0x000238: 0x59A007800067060F Ffma
    temp_68 = fma(temp_16, temp_16, temp_64);
    // 0x000248: 0x59A0008001470601 Ffma
    temp_69 = fma(temp_16, temp_58, temp_65);
    // 0x000250: 0x59A006800137060D Ffma
    temp_70 = fma(temp_16, temp_60, temp_66);
    // 0x000258: 0x385D103F80070F0E Fadd
    temp_71 = 0.0 - temp_68;
    temp_72 = temp_71 + 1.0;
    temp_73 = clamp(temp_72, 0.0, 1.0);
    // 0x000268: 0x5C6810000027070F Fmul
    temp_74 = temp_17 * temp_56;
    // 0x000270: 0x5080000000870E0E Mufu
    temp_75 = sqrt(temp_73);
    // 0x000278: 0x59A007800107060F Ffma
    temp_76 = fma(temp_16, temp_59, temp_74);
    // 0x000288: 0x5C68100003173106 Fmul
    temp_77 = temp_40 * temp_40;
    // 0x000290: 0x59A0008001770E01 Ffma
    temp_78 = fma(temp_75, temp_62, temp_69);
    // 0x000298: 0x59A0078001170E0F Ffma
    temp_79 = fma(temp_75, temp_61, temp_76);
    // 0x0002A8: 0x59A0068001870E0D Ffma
    temp_80 = fma(temp_75, temp_63, temp_70);
    // 0x0002B0: 0x59A0030003073006 Ffma
    temp_81 = fma(temp_41, temp_41, temp_77);
    // 0x0002B8: 0x5C68100000170102 Fmul
    temp_82 = temp_78 * temp_78;
    // 0x0002C8: 0x59A0030002F72F06 Ffma
    temp_83 = fma(temp_42, temp_42, temp_81);
    // 0x0002D0: 0x5080000000570606 Mufu
    temp_84 = inversesqrt(temp_83);
    // 0x0002D8: 0x59A0010000F70F02 Ffma
    temp_85 = fma(temp_79, temp_79, temp_82);
    // 0x0002E8: 0x59A0010000D70D02 Ffma
    temp_86 = fma(temp_80, temp_80, temp_85);
    // 0x0002F0: 0x5080000000570202 Mufu
    temp_87 = inversesqrt(temp_86);
    // 0x0002F8: 0x5C69100000673131 Fmul
    temp_88 = 0.0 - temp_84;
    temp_89 = temp_40 * temp_88;
    // 0x000308: 0x5C69100000673030 Fmul
    temp_90 = 0.0 - temp_84;
    temp_91 = temp_41 * temp_90;
    // 0x000310: 0x5C69100000672F2F Fmul
    temp_92 = 0.0 - temp_84;
    temp_93 = temp_42 * temp_92;
    // 0x000318: 0x5C6810000027010E Fmul
    temp_94 = temp_78 * temp_87;
    // 0x000328: 0x5C68100000270F01 Fmul
    temp_95 = temp_79 * temp_87;
    // 0x000330: 0x5C68100000270D12 Fmul
    temp_96 = temp_80 * temp_87;
    // 0x000338: 0x5C68100003170E07 Fmul
    temp_97 = temp_94 * temp_89;
    // 0x000348: 0x4C68101805C70E06 Fmul
    temp_98 = temp_94 * fp_c6.data[23].x;
    // 0x000350: 0x59A003800307010D Ffma
    temp_99 = fma(temp_95, temp_91, temp_97);
    // 0x000358: 0x59A4068002F71202 Ffma
    temp_100 = fma(temp_96, temp_93, temp_99);
    temp_101 = clamp(temp_100, 0.0, 1.0);
    // 0x000368: 0x49A0031805D7010D Ffma
    temp_102 = fma(temp_95, fp_c6.data[23].y, temp_98);
    // 0x000370: 0x3859103F80070207 Fadd
    temp_103 = 0.0 - temp_101;
    temp_104 = temp_103 + 1.0;
    // 0x000378: 0xE24000000708000F Bra
    if (temp_67)
    {
        // 0x000388: 0x5C9807800FF70000 Mov
        // 0x000390: 0xE33000000007000F Kil
        discard;
    }
    // 0x0003F0: 0x4C58301805C73110 Fadd
    temp_105 = 0.0 - fp_c6.data[23].x;
    temp_106 = temp_89 + temp_105;
    // 0x0003F8: 0xE2900000CB800000 Ssy
    // 0x000408: 0x49A4069805E71206 Ffma
    temp_107 = fma(temp_96, fp_c6.data[23].z, temp_102);
    temp_108 = clamp(temp_107, 0.0, 1.0);
    // 0x000410: 0x4C68101406370707 Fmul
    temp_109 = temp_104 * fp_c5.data[24].w;
    // 0x000418: 0x5080000000370606 Mufu
    temp_110 = log2(temp_108);
    // 0x000428: 0x4C58301805D73011 Fadd
    temp_111 = 0.0 - fp_c6.data[23].y;
    temp_112 = temp_91 + temp_111;
    // 0x000430: 0x5080400000370707 Mufu
    temp_113 = abs(temp_109);
    temp_114 = log2(temp_113);
    // 0x000438: 0x5C6810000107100F Fmul
    temp_115 = temp_106 * temp_106;
    // 0x000448: 0x4C58301805E72F13 Fadd
    temp_116 = 0.0 - fp_c6.data[23].z;
    temp_117 = temp_93 + temp_116;
    // 0x000450: 0x0103F8000007F018 Mov32i
    // 0x000458: 0x4C98079403270019 Mov
    // 0x000468: 0x5C68100000270E2A Fmul
    temp_118 = temp_94 * temp_101;
    // 0x000470: 0x5C9807800FF70028 Mov
    // 0x000478: 0x59A0078001171114 Ffma
    temp_119 = fma(temp_112, temp_112, temp_115);
    // 0x000488: 0xF0F0000034270000 Depbar
    // 0x000490: 0x1E23E990AFE7040F Fmul32i
    temp_120 = temp_20 * 0.298911989;
    // 0x000498: 0x5C9807800FF7001B Mov
    // 0x0004A8: 0x5C9807800FF7001A Mov
    // 0x0004B0: 0x4C6810140667060D Fmul
    temp_121 = temp_110 * fp_c5.data[25].z;
    // 0x0004B8: 0x1E23F99999A70606 Fmul32i
    temp_122 = temp_110 * 1.20000005;
    // 0x0004C8: 0x4C68101406470704 Fmul
    temp_123 = temp_114 * fp_c5.data[25].x;
    // 0x0004D0: 0x59A00A0001371314 Ffma
    temp_124 = fma(temp_117, temp_117, temp_119);
    // 0x0004D8: 0x49A007840007050F Ffma
    temp_125 = fma(temp_21, fp_c1.data[0].x, temp_120);
    // 0x0004E8: 0x5080000000571416 Mufu
    temp_126 = inversesqrt(temp_124);
    // 0x0004F0: 0x5C90008000D70017 Rro
    // 0x0004F8: 0x32A218C000072A2A Ffma
    temp_127 = 0.0 - temp_89;
    temp_128 = fma(temp_118, 2.0, temp_127);
    // 0x000508: 0x5080000000271705 Mufu
    temp_129 = exp2(temp_121);
    // 0x000510: 0x5C90008000470015 Rro
    // 0x000518: 0x5084000000271504 Mufu
    temp_130 = exp2(temp_123);
    temp_131 = clamp(temp_130, 0.0, 1.0);
    // 0x000528: 0x49A0078400170A0F Ffma
    temp_132 = fma(temp_22, fp_c1.data[0].y, temp_125);
    // 0x000530: 0x5C68100001671010 Fmul
    temp_133 = temp_106 * temp_126;
    // 0x000538: 0x32A20C4000070F0D Ffma
    temp_134 = fma(temp_132, 2.0, -1.0);
    // 0x000548: 0x32A60C4000070F07 Ffma
    temp_135 = fma(temp_132, 2.0, -1.0);
    temp_136 = clamp(temp_135, 0.0, 1.0);
    // 0x000550: 0x5C6810000057040A Fmul
    temp_137 = temp_131 * temp_129;
    // 0x000558: 0x33A40C4000070F04 Ffma
    temp_138 = fma(temp_132, -2.0, 1.0);
    temp_139 = clamp(temp_138, 0.0, 1.0);
    // 0x000568: 0x5C6810000167110F Fmul
    temp_140 = temp_112 * temp_126;
    // 0x000570: 0x4C69101805C71005 Fmul
    temp_141 = 0.0 - fp_c6.data[23].x;
    temp_142 = temp_133 * temp_141;
    // 0x000578: 0x5C68100001671311 Fmul
    temp_143 = temp_117 * temp_126;
    // 0x000588: 0x5C68100001073115 Fmul
    temp_144 = temp_89 * temp_133;
    // 0x000590: 0x5C68100001070E16 Fmul
    temp_145 = temp_94 * temp_133;
    // 0x000598: 0x5C5970000FF70D13 Fadd
    temp_146 = abs(temp_134);
    temp_147 = 0.0 - temp_146;
    temp_148 = temp_147 + -0.0;
    // 0x0005A8: 0x4C98079403070018 Mov
    // 0x0005B0: 0x4C9807940317000D Mov
    // 0x0005B8: 0x49A1029805D70F10 Ffma
    temp_149 = 0.0 - fp_c6.data[23].y;
    temp_150 = fma(temp_140, temp_149, temp_142);
    // 0x0005C8: 0x59A00A8000F73014 Ffma
    temp_151 = fma(temp_91, temp_140, temp_144);
    // 0x0005D0: 0x59A00B0000F70117 Ffma
    temp_152 = fma(temp_95, temp_140, temp_145);
    // 0x0005D8: 0x51A00C940327130F Ffma
    temp_153 = fma(temp_148, fp_c5.data[12].z, fp_c5.data[12].z);
    // 0x0005E8: 0x51A00C1403071305 Ffma
    temp_154 = fma(temp_148, fp_c5.data[12].x, fp_c5.data[12].x);
    // 0x0005F0: 0x51A006940317130D Ffma
    temp_155 = fma(temp_148, fp_c5.data[12].y, fp_c5.data[12].y);
    // 0x0005F8: 0x3868104180070915 Fmul
    temp_156 = temp_6 * 16.0;
    // 0x000608: 0x49A5081805E71113 Ffma
    temp_157 = 0.0 - fp_c6.data[23].z;
    temp_158 = fma(temp_143, temp_157, temp_150);
    temp_159 = clamp(temp_158, 0.0, 1.0);
    // 0x000610: 0xF0F0000034170000 Depbar
    // 0x000618: 0x5CA8148001570A15 F2f
    temp_160 = floor(temp_156);
    // 0x000628: 0x51A40F0400371E09 Ffma
    temp_161 = fma(temp_24, temp_24, fp_c1.data[0].w);
    temp_162 = clamp(temp_161, 0.0, 1.0);
    // 0x000630: 0x0103F0000007F010 Mov32i
    // 0x000638: 0x3868104110070818 Fmul
    temp_163 = temp_7 * 9.0;
    // 0x000648: 0x59A40A0001172F14 Ffma
    temp_164 = fma(temp_93, temp_143, temp_151);
    temp_165 = clamp(temp_164, 0.0, 1.0);
    // 0x000650: 0x5CA8148001870A18 F2f
    temp_166 = floor(temp_163);
    // 0x000658: 0x59A40B8001171217 Ffma
    temp_167 = fma(temp_96, temp_143, temp_152);
    temp_168 = clamp(temp_167, 0.0, 1.0);
    // 0x000668: 0x5C68100000970911 Fmul
    temp_169 = temp_162 * temp_162;
    // 0x000670: 0x01040DF760C7F019 Mov32i
    // 0x000678: 0x32A0083F00071E2E Ffma
    temp_170 = fma(temp_24, 0.5, 0.5);
    // 0x000688: 0x4C69101805C70E16 Fmul
    temp_171 = 0.0 - fp_c6.data[23].x;
    temp_172 = temp_94 * temp_171;
    // 0x000690: 0x49A0029403470410 Ffma
    temp_173 = fma(temp_139, fp_c5.data[13].x, temp_154);
    // 0x000698: 0x49A0069403570405 Ffma
    temp_174 = fma(temp_139, fp_c5.data[13].y, temp_155);
    // 0x0006A8: 0x49A0079403670408 Ffma
    temp_175 = fma(temp_139, fp_c5.data[13].z, temp_153);
    // 0x0006B0: 0x59A20B8001171711 Ffma
    temp_176 = 0.0 - temp_168;
    temp_177 = fma(temp_168, temp_169, temp_176);
    // 0x0006B8: 0x49A20C840027140D Ffma
    temp_178 = fma(temp_165, fp_c1.data[0].z, -6.98316002);
    // 0x0006C8: 0x49A10B1805D7010F Ffma
    temp_179 = 0.0 - fp_c6.data[23].y;
    temp_180 = fma(temp_95, temp_179, temp_172);
    // 0x0006D0: 0x5C68120002E72E2E Fmul
    temp_181 = temp_170 * 0.5;
    temp_182 = temp_181 * temp_170;
    // 0x0006D8: 0x49A20C8400271304 Ffma
    temp_183 = fma(temp_159, fp_c1.data[0].z, -6.98316002);
    // 0x0006E8: 0x32A00AC180071818 Ffma
    temp_184 = fma(temp_166, 16.0, temp_160);
    // 0x0006F0: 0x51A0088400471717 Ffma
    temp_185 = fma(temp_168, temp_177, fp_c1.data[1].x);
    // 0x0006F8: 0x5CB0118001870A2D F2i
    temp_186 = trunc(temp_184);
    temp_187 = max(temp_186, 0.0);
    temp_188 = uint(temp_187);
    // 0x000708: 0x5C68100000D7140D Fmul
    temp_189 = temp_165 * temp_178;
    // 0x000710: 0x5080000000471717 Mufu
    temp_190 = 1.0 / temp_185;
    // 0x000718: 0x49A5079805E7120F Ffma
    temp_191 = 0.0 - fp_c6.data[23].z;
    temp_192 = fma(temp_96, temp_191, temp_180);
    temp_193 = clamp(temp_192, 0.0, 1.0);
    // 0x000728: 0x59A1010002E70211 Ffma
    temp_194 = 0.0 - temp_182;
    temp_195 = fma(temp_101, temp_194, temp_101);
    // 0x000730: 0x5C68100000471313 Fmul
    temp_196 = temp_159 * temp_183;
    // 0x000738: 0x49A0081402C70704 Ffma
    temp_197 = fma(temp_136, fp_c5.data[11].x, temp_173);
    // 0x000748: 0x49A0029402D70705 Ffma
    temp_198 = fma(temp_136, fp_c5.data[11].y, temp_174);
    // 0x000750: 0x5C90008000D70010 Rro
    // 0x000758: 0x59A1078002E70F14 Ffma
    temp_199 = 0.0 - temp_182;
    temp_200 = fma(temp_193, temp_199, temp_193);
    // 0x000768: 0x5080000000271010 Mufu
    temp_201 = exp2(temp_189);
    // 0x000770: 0x5C58100001172E15 Fadd
    temp_202 = temp_182 + temp_195;
    // 0x000778: 0x5C9000800067000D Rro
    // 0x000788: 0x5080000000471515 Mufu
    temp_203 = 1.0 / temp_202;
    // 0x000790: 0x3848000000872D2B Shl
    temp_204 = int(temp_188) << 8;
    // 0x000798: 0x5080000000270D0D Mufu
    temp_205 = exp2(temp_122);
    // 0x0007A8: 0x5C58100001472E14 Fadd
    temp_206 = temp_182 + temp_200;
    // 0x0007B0: 0xEF94008200472B2B Ldc
    temp_207 = temp_204 + 0x2004;
    temp_208 = uint(temp_207) >> 2;
    temp_209 = temp_208 >> 2;
    temp_210 = int(temp_208) & 3;
    temp_211 = fp_c8.data[int(temp_209)][temp_210];
    // 0x0007B8: 0x4C58301407870411 Fadd
    temp_212 = 0.0 - fp_c5.data[30].x;
    temp_213 = temp_197 + temp_212;
    // 0x0007C8: 0x5080000000471416 Mufu
    temp_214 = 1.0 / temp_206;
    // 0x0007D0: 0x49A0041402E70706 Ffma
    temp_215 = fma(temp_136, fp_c5.data[11].z, temp_175);
    // 0x0007D8: 0x5C90008001370018 Rro
    // 0x0007E8: 0x5C68100001770908 Fmul
    temp_216 = temp_162 * temp_190;
    // 0x0007F0: 0x5080000000271814 Mufu
    temp_217 = exp2(temp_196);
    // 0x0007F8: 0x3868103F0007152C Fmul
    temp_218 = temp_203 * 0.5;
    // 0x000808: 0x51A0089407871F07 Ffma
    temp_219 = fma(temp_25, temp_213, fp_c5.data[30].x);
    // 0x000810: 0x4C68101801470F11 Fmul
    temp_220 = temp_193 * fp_c6.data[5].x;
    // 0x000818: 0x3859103F00070D0D Fadd
    temp_221 = 0.0 - temp_205;
    temp_222 = temp_221 + 0.5;
    // 0x000828: 0x4C58301407870509 Fadd
    temp_223 = 0.0 - fp_c5.data[30].x;
    temp_224 = temp_198 + temp_223;
    // 0x000830: 0x5C68100000870808 Fmul
    temp_225 = temp_216 * temp_216;
    // 0x000838: 0x5C9807800FF70019 Mov
    // 0x000848: 0x59A1080001070715 Ffma
    temp_226 = 0.0 - temp_201;
    temp_227 = fma(temp_219, temp_226, temp_201);
    // 0x000850: 0x5C68100001672C13 Fmul
    temp_228 = temp_218 * temp_214;
    // 0x000858: 0x1E23EA2F98371117 Fmul32i
    temp_229 = temp_220 * 0.318309873;
    // 0x000868: 0x4C6C101406570D0D Fmul
    temp_230 = temp_222 * fp_c5.data[25].y;
    temp_231 = clamp(temp_230, 0.0, 1.0);
    // 0x000870: 0x4C58301407870611 Fadd
    temp_232 = 0.0 - fp_c5.data[30].x;
    temp_233 = temp_215 + temp_232;
    // 0x000878: 0x51A0049407871F09 Ffma
    temp_234 = fma(temp_25, temp_224, fp_c5.data[30].x);
    // 0x000888: 0x5C58100001570716 Fadd
    temp_235 = temp_219 + temp_227;
    // 0x000890: 0x5C68100001370815 Fmul
    temp_236 = temp_225 * temp_228;
    // 0x000898: 0x4C68101801570F13 Fmul
    temp_237 = temp_193 * fp_c6.data[5].y;
    // 0x0008A8: 0x49A0069406770A0D Ffma
    temp_238 = fma(temp_137, fp_c5.data[25].w, temp_231);
    // 0x0008B0: 0x51A0089407871F0A Ffma
    temp_239 = fma(temp_25, temp_233, fp_c5.data[30].x);
    // 0x0008B8: 0x59A10A0000771411 Ffma
    temp_240 = 0.0 - temp_219;
    temp_241 = fma(temp_217, temp_240, temp_217);
    // 0x0008C8: 0x59A10B8001771608 Ffma
    temp_242 = 0.0 - temp_229;
    temp_243 = fma(temp_235, temp_242, temp_229);
    // 0x0008D0: 0x5C68100001570F27 Fmul
    temp_244 = temp_193 * temp_236;
    // 0x0008D8: 0x4C68101801670F15 Fmul
    temp_245 = temp_193 * fp_c6.data[5].z;
    // 0x0008E8: 0x1E23EA2F98371316 Fmul32i
    temp_246 = temp_237 * 0.318309873;
    // 0x0008F0: 0x59A10A000097140F Ffma
    temp_247 = 0.0 - temp_234;
    temp_248 = fma(temp_217, temp_247, temp_217);
    // 0x0008F8: 0x59A1080001070913 Ffma
    temp_249 = 0.0 - temp_201;
    temp_250 = fma(temp_234, temp_249, temp_201);
    // 0x000908: 0x59A1080001070A10 Ffma
    temp_251 = 0.0 - temp_201;
    temp_252 = fma(temp_239, temp_251, temp_201);
    // 0x000910: 0x5C58100001170711 Fadd
    temp_253 = temp_219 + temp_241;
    // 0x000918: 0x1E23EA2F98371515 Fmul32i
    temp_254 = temp_245 * 0.318309873;
    // 0x000928: 0x385D103F80070B17 Fadd
    temp_255 = 0.0 - temp_26;
    temp_256 = temp_255 + 1.0;
    temp_257 = clamp(temp_256, 0.0, 1.0);
    // 0x000930: 0x5C58100000F7090F Fadd
    temp_258 = temp_234 + temp_248;
    // 0x000938: 0x59A10A0000A71414 Ffma
    temp_259 = 0.0 - temp_239;
    temp_260 = fma(temp_217, temp_259, temp_217);
    // 0x000948: 0x5C58100001070A10 Fadd
    temp_261 = temp_239 + temp_252;
    // 0x000950: 0x4C68101801471111 Fmul
    temp_262 = temp_253 * fp_c6.data[5].x;
    // 0x000958: 0x5C58100001370913 Fadd
    temp_263 = temp_234 + temp_250;
    // 0x000968: 0x4C68101403970D37 Fmul
    temp_264 = temp_238 * fp_c5.data[14].y;
    // 0x000970: 0x4C68101801570F26 Fmul
    temp_265 = temp_258 * fp_c6.data[5].y;
    // 0x000978: 0x5C58100001470A14 Fadd
    temp_266 = temp_239 + temp_260;
    // 0x000988: 0x59A10A800157100F Ffma
    temp_267 = 0.0 - temp_254;
    temp_268 = fma(temp_261, temp_267, temp_254);
    // 0x000990: 0x5C68100002771125 Fmul
    temp_269 = temp_262 * temp_244;
    // 0x000998: 0x49A20B980AC71710 Ffma
    temp_270 = 0.0 - temp_257;
    temp_271 = fma(temp_257, fp_c6.data[43].x, temp_270);
    // 0x0009A8: 0x49A20B980AD71711 Ffma
    temp_272 = 0.0 - temp_257;
    temp_273 = fma(temp_257, fp_c6.data[43].y, temp_272);
    // 0x0009B0: 0x49A20B980AE71717 Ffma
    temp_274 = 0.0 - temp_257;
    temp_275 = fma(temp_257, fp_c6.data[43].z, temp_274);
    // 0x0009B8: 0x4C68101801671414 Fmul
    temp_276 = temp_266 * fp_c6.data[5].z;
    // 0x0009C8: 0x5B6603800FF72B07 Isetp
    temp_277 = floatBitsToUint(temp_211) <= 0u;
    // 0x0009D0: 0x59A10B000167130B Ffma
    temp_278 = 0.0 - temp_246;
    temp_279 = fma(temp_263, temp_278, temp_246);
    // 0x0009D8: 0x3858103F80071022 Fadd
    temp_280 = temp_271 + 1.0;
    // 0x0009E8: 0x5C68100000271210 Fmul
    temp_281 = temp_96 * temp_101;
    // 0x0009F0: 0x3858103F80071717 Fadd
    temp_282 = temp_275 + 1.0;
    // 0x0009F8: 0x5C68100002772626 Fmul
    temp_283 = temp_265 * temp_244;
    // 0x000A08: 0x5C68100002771427 Fmul
    temp_284 = temp_276 * temp_244;
    // 0x000A10: 0x3858103F80071123 Fadd
    temp_285 = temp_273 + 1.0;
    // 0x000A18: 0x5C68100000270116 Fmul
    temp_286 = temp_95 * temp_101;
    // 0x000A28: 0x4C68101403A70D29 Fmul
    temp_287 = temp_238 * fp_c5.data[14].z;
    // 0x000A30: 0x59A40B8001770624 Ffma
    temp_288 = fma(temp_215, temp_282, temp_282);
    temp_289 = clamp(temp_288, 0.0, 1.0);
    // 0x000A38: 0x32A217C000071017 Ffma
    temp_290 = 0.0 - temp_93;
    temp_291 = fma(temp_281, 2.0, temp_290);
    // 0x000A48: 0x4C68101403870D10 Fmul
    temp_292 = temp_238 * fp_c5.data[14].x;
    // 0x000A50: 0x5C9807800FF70013 Mov
    // 0x000A58: 0x5C9807800FF70018 Mov
    // 0x000A68: 0x59A4110002270422 Ffma
    temp_293 = fma(temp_197, temp_280, temp_280);
    temp_294 = clamp(temp_293, 0.0, 1.0);
    // 0x000A70: 0x59A4118002370523 Ffma
    temp_295 = fma(temp_198, temp_285, temp_285);
    temp_296 = clamp(temp_295, 0.0, 1.0);
    // 0x000A78: 0x32A2184000071616 Ffma
    temp_297 = 0.0 - temp_91;
    temp_298 = fma(temp_286, 2.0, temp_297);
    // 0x000A88: 0x4C6810180147100D Fmul
    temp_299 = temp_292 * fp_c6.data[5].x;
    // 0x000A90: 0x1E23E22F98372525 Fmul32i
    temp_300 = temp_269 * 0.159154937;
    // 0x000A98: 0xEF5400000007FF0D Stl
    local_memory[0] = floatBitsToUint(temp_299);
    // 0x000AA8: 0x1E23E22F98372626 Fmul32i
    temp_301 = temp_283 * 0.159154937;
    // 0x000AB0: 0x1E23E22F98372727 Fmul32i
    temp_302 = temp_284 * 0.159154937;
    // 0x000AB8: 0x4C68101801573737 Fmul
    temp_303 = temp_264 * fp_c6.data[5].y;
    // 0x000AC8: 0x4C68101801672929 Fmul
    temp_304 = temp_287 * fp_c6.data[5].z;
    // 0x000AD0: 0xF0F800000000000F Sync
    temp_305 = 0.0;
    temp_306 = 0.0;
    temp_307 = 0.0;
    temp_308 = 0.0;
    temp_309 = 0.0;
    temp_310 = 0.0;
    temp_311 = 0.0;
    temp_312 = 0.0;
    temp_313 = 0.0;
    temp_314 = 0.0;
    temp_315 = 0.0;
    temp_316 = 0.0;
    if (!temp_277)
    {
        // 0x000AD8: 0x5C9807800FF70021 Mov
        temp_317 = 0;
        do
        {
            // 0x000AE8: 0x5C18020002172D15 Iscadd
            temp_319 = int(temp_188) << 4;
            temp_320 = temp_319 + temp_317;
            // 0x000AF0: 0xE003FF87CFF7FF32 Ipa
            // 0x000AF8: 0x1C00000000172121 Iadd32i
            temp_321 = temp_317 + 1;
            // 0x000B08: 0xE003FF87CFF7FF34 Ipa
            // 0x000B10: 0x3848000000471515 Shl
            temp_322 = temp_320 << 4;
            // 0x000B18: 0xE003FF87CFF7FF33 Ipa
            // 0x000B28: 0x5B6C038002B7210F Isetp
            temp_318 = uint(temp_321) >= floatBitsToUint(temp_211);
            // 0x000B30: 0xE290000056800000 Ssy
            // 0x000B38: 0xEF94008200071515 Ldc
            temp_323 = temp_322 + 0x2000;
            temp_324 = uint(temp_323) >> 2;
            temp_325 = temp_324 >> 2;
            temp_326 = int(temp_324) & 3;
            temp_327 = fp_c8.data[int(temp_325)][temp_326];
            // 0x000B48: 0x5080000000473232 Mufu
            // 0x000B50: 0x5080000000473434 Mufu
            // 0x000B58: 0x5080000000473333 Mufu
            // 0x000B68: 0xE043FF8D0327FF32 Ipa
            temp_328 = in_attr5.x;
            // 0x000B70: 0xE043FF8D8347FF34 Ipa
            temp_329 = in_attr5.z;
            // 0x000B78: 0xE043FF8D4337FF33 Ipa
            temp_330 = in_attr5.y;
            // 0x000B88: 0x3848000000671520 Shl
            temp_331 = floatBitsToInt(temp_327) << 6;
            // 0x000B90: 0xEF9500800107200C Ldc
            temp_332 = temp_331 + 16;
            temp_333 = uint(temp_332) >> 2;
            temp_334 = temp_333 >> 2;
            temp_335 = int(temp_333) & 3;
            temp_336 = fp_c8.data[int(temp_334)][temp_335];
            temp_337 = int(temp_333) + 1;
            temp_338 = uint(temp_337) >> 2;
            temp_339 = temp_337 & 3;
            temp_340 = fp_c8.data[int(temp_338)][temp_339];
            // 0x000B98: 0xEF95008001872010 Ldc
            temp_341 = temp_331 + 24;
            temp_342 = uint(temp_341) >> 2;
            temp_343 = temp_342 >> 2;
            temp_344 = int(temp_342) & 3;
            temp_345 = fp_c8.data[int(temp_343)][temp_344];
            temp_346 = int(temp_342) + 1;
            temp_347 = uint(temp_346) >> 2;
            temp_348 = temp_346 & 3;
            temp_349 = fp_c8.data[int(temp_347)][temp_348];
            // 0x000BA8: 0xEF95008002072014 Ldc
            temp_350 = temp_331 + 32;
            temp_351 = uint(temp_350) >> 2;
            temp_352 = temp_351 >> 2;
            temp_353 = int(temp_351) & 3;
            temp_354 = fp_c8.data[int(temp_352)][temp_353];
            temp_355 = int(temp_351) + 1;
            temp_356 = uint(temp_355) >> 2;
            temp_357 = temp_355 & 3;
            temp_358 = fp_c8.data[int(temp_356)][temp_357];
            // 0x000BB0: 0x5C58300003270C32 Fadd
            temp_359 = 0.0 - temp_328;
            temp_360 = temp_336 + temp_359;
            // 0x000BB8: 0xEF9400800287200C Ldc
            temp_361 = temp_331 + 40;
            temp_362 = uint(temp_361) >> 2;
            temp_363 = temp_362 >> 2;
            temp_364 = int(temp_362) & 3;
            temp_365 = fp_c8.data[int(temp_363)][temp_364];
            // 0x000BC8: 0x5C58300003370D33 Fadd
            temp_366 = 0.0 - temp_330;
            temp_367 = temp_340 + temp_366;
            // 0x000BD0: 0x5C58300003471034 Fadd
            temp_368 = 0.0 - temp_329;
            temp_369 = temp_345 + temp_368;
            // 0x000BD8: 0x5C68100003273235 Fmul
            temp_370 = temp_360 * temp_360;
            // 0x000BE8: 0x59A11A0003471111 Ffma
            temp_371 = 0.0 - temp_369;
            temp_372 = fma(temp_349, temp_371, temp_369);
            // 0x000BF0: 0x59A01A8003373335 Ffma
            temp_373 = fma(temp_367, temp_367, temp_370);
            // 0x000BF8: 0x59A01A8001171136 Ffma
            temp_374 = fma(temp_372, temp_372, temp_373);
            // 0x000C08: 0x508000000057360D Mufu
            temp_375 = inversesqrt(temp_374);
            // 0x000C10: 0x5080000000873636 Mufu
            temp_376 = sqrt(temp_374);
            // 0x000C18: 0x5C68100000D73210 Fmul
            temp_377 = temp_360 * temp_375;
            // 0x000C28: 0x5C69100001471010 Fmul
            temp_378 = 0.0 - temp_354;
            temp_379 = temp_377 * temp_378;
            // 0x000C30: 0x5C68100000D73314 Fmul
            temp_380 = temp_367 * temp_375;
            // 0x000C38: 0x5C68100000D7110D Fmul
            temp_381 = temp_372 * temp_375;
            // 0x000C48: 0x59A1080001571414 Ffma
            temp_382 = 0.0 - temp_358;
            temp_383 = fma(temp_380, temp_382, temp_379);
            // 0x000C50: 0xEF95008003872010 Ldc
            temp_384 = temp_331 + 56;
            temp_385 = uint(temp_384) >> 2;
            temp_386 = temp_385 >> 2;
            temp_387 = int(temp_385) & 3;
            temp_388 = fp_c8.data[int(temp_386)][temp_387];
            temp_389 = int(temp_385) + 1;
            temp_390 = uint(temp_389) >> 2;
            temp_391 = temp_389 & 3;
            temp_392 = fp_c8.data[int(temp_390)][temp_391];
            // 0x000C58: 0x010404000007F015 Mov32i
            // 0x000C68: 0x59A10A0000C70D14 Ffma
            temp_393 = 0.0 - temp_365;
            temp_394 = fma(temp_381, temp_393, temp_383);
            // 0x000C70: 0xEF9500800307200C Ldc
            temp_395 = temp_331 + 48;
            temp_396 = uint(temp_395) >> 2;
            temp_397 = temp_396 >> 2;
            temp_398 = int(temp_396) & 3;
            temp_399 = fp_c8.data[int(temp_397)][temp_398];
            temp_400 = int(temp_396) + 1;
            temp_401 = uint(temp_400) >> 2;
            temp_402 = temp_400 & 3;
            temp_403 = fp_c8.data[int(temp_401)][temp_402];
            // 0x000C78: 0x59A4088001071410 Ffma
            temp_404 = fma(temp_394, temp_388, temp_392);
            temp_405 = clamp(temp_404, 0.0, 1.0);
            // 0x000C88: 0x59A4068003670C36 Ffma
            temp_406 = fma(temp_399, temp_376, temp_403);
            temp_407 = clamp(temp_406, 0.0, 1.0);
            // 0x000C90: 0x33A00AC000073611 Ffma
            temp_408 = fma(temp_407, -2.0, 3.0);
            // 0x000C98: 0x5C68100003673614 Fmul
            temp_409 = temp_407 * temp_407;
            // 0x000CA8: 0x33A00AC000071015 Ffma
            temp_410 = fma(temp_405, -2.0, 3.0);
            // 0x000CB0: 0x5C68100001071010 Fmul
            temp_411 = temp_405 * temp_405;
            // 0x000CB8: 0x5C68100001171411 Fmul
            temp_412 = temp_409 * temp_408;
            // 0x000CC8: 0x39585042F0073414 Fadd
            temp_413 = abs(temp_369);
            temp_414 = temp_413 + -120.0;
            // 0x000CD0: 0x5C68100001571010 Fmul
            temp_415 = temp_411 * temp_410;
            // 0x000CD8: 0x1EABD4CCCCD71414 Fmul32i
            temp_416 = temp_414 * -0.0500000007;
            temp_417 = clamp(temp_416, 0.0, 1.0);
            // 0x000CE8: 0x5C68100001171010 Fmul
            temp_418 = temp_415 * temp_412;
            // 0x000CF0: 0x36247F9000171111 Xmad
            temp_419 = floatBitsToUint(temp_412) >> 16;
            temp_420 = int(temp_419) << 16;
            // 0x000CF8: 0x5C68100001071410 Fmul
            temp_421 = temp_417 * temp_418;
            // 0x000D08: 0x5BB383800FF71007 Fsetp
            temp_422 = temp_421 <= 0.0;
            // 0x000D10: 0x7A05083C0F00FF11 Hadd2
            temp_317 = temp_321;
            temp_423 = uint(temp_420);
            temp_424 = temp_305;
            temp_425 = temp_306;
            temp_426 = temp_307;
            temp_427 = temp_308;
            temp_428 = temp_309;
            temp_429 = temp_310;
            if (temp_422)
            {
                temp_430 = unpackHalf2x16(uint(temp_420)).y;
                temp_431 = packHalf2x16(vec2(1.0, temp_430));
                temp_423 = temp_431;
            }
            // 0x000D18: 0x5D2103902FF71107 Hsetp2
            temp_432 = unpackHalf2x16(temp_423).x;
            temp_433 = temp_432 == 0.0;
            // 0x000D28: 0xF0F800000008000F Sync
            if (temp_433)
            {
                // 0x000D30: 0x5080000000470C0C Mufu
                temp_434 = 1.0 / temp_399;
                // 0x000D38: 0xEF94008002C72015 Ldc
                temp_435 = temp_331 + 44;
                temp_436 = uint(temp_435) >> 2;
                temp_437 = temp_436 >> 2;
                temp_438 = int(temp_436) & 3;
                temp_439 = fp_c8.data[int(temp_437)][temp_438];
                // 0x000D48: 0x5C69100000C70D0D Fmul
                temp_440 = 0.0 - temp_434;
                temp_441 = temp_403 * temp_440;
                // 0x000D50: 0x5C60138000D73434 Fmnmx
                temp_442 = min(temp_369, temp_441);
                // 0x000D58: 0x5C61178003470D11 Fmnmx
                temp_443 = 0.0 - temp_441;
                temp_444 = max(temp_443, temp_442);
                // 0x000D68: 0x59A01A800117110C Ffma
                temp_445 = fma(temp_444, temp_444, temp_373);
                // 0x000D70: 0x5080000000570C14 Mufu
                temp_446 = inversesqrt(temp_445);
                // 0x000D78: 0x5080000000870C0C Mufu
                temp_447 = sqrt(temp_445);
                // 0x000D88: 0x5C68100001473232 Fmul
                temp_448 = temp_360 * temp_446;
                // 0x000D90: 0x5080000000471515 Mufu
                temp_449 = 1.0 / temp_439;
                // 0x000D98: 0x5C68100001473333 Fmul
                temp_450 = temp_367 * temp_446;
                // 0x000DA8: 0x5C68100001471111 Fmul
                temp_451 = temp_444 * temp_446;
                // 0x000DB0: 0x5C5810000327310D Fadd
                temp_452 = temp_89 + temp_448;
                // 0x000DB8: 0x5C58100003373014 Fadd
                temp_453 = temp_91 + temp_450;
                // 0x000DC8: 0x5C58100001172F34 Fadd
                temp_454 = temp_93 + temp_451;
                // 0x000DD0: 0x5C68100003270E36 Fmul
                temp_455 = temp_94 * temp_448;
                // 0x000DD8: 0x5C68100000D70D35 Fmul
                temp_456 = temp_452 * temp_452;
                // 0x000DE8: 0x51A0060400571515 Ffma
                temp_457 = fma(temp_449, temp_447, fp_c1.data[1].y);
                // 0x000DF0: 0x59A01B0003370136 Ffma
                temp_458 = fma(temp_95, temp_450, temp_455);
                // 0x000DF8: 0x59A01A8001471435 Ffma
                temp_459 = fma(temp_453, temp_453, temp_456);
                // 0x000E08: 0x59A01B0001171236 Ffma
                temp_460 = fma(temp_96, temp_451, temp_458);
                // 0x000E10: 0x59A01A8003473435 Ffma
                temp_461 = fma(temp_454, temp_454, temp_459);
                // 0x000E18: 0x5080000000573535 Mufu
                temp_462 = inversesqrt(temp_461);
                // 0x000E28: 0x5C68100003570D0D Fmul
                temp_463 = temp_452 * temp_462;
                // 0x000E30: 0x5C68100003571414 Fmul
                temp_464 = temp_453 * temp_462;
                // 0x000E38: 0x5C68100003573434 Fmul
                temp_465 = temp_454 * temp_462;
                // 0x000E48: 0x01040DF760C7F035 Mov32i
                // 0x000E50: 0x5C68100000D73232 Fmul
                temp_466 = temp_448 * temp_463;
                // 0x000E58: 0x5C68100000D70E0D Fmul
                temp_467 = temp_94 * temp_463;
                // 0x000E68: 0x59A0190001473332 Ffma
                temp_468 = fma(temp_450, temp_464, temp_466);
                // 0x000E70: 0x5080000000471533 Mufu
                temp_469 = 1.0 / temp_457;
                // 0x000E78: 0x59A0068001470114 Ffma
                temp_470 = fma(temp_95, temp_464, temp_467);
                // 0x000E88: 0xEF9500800007200C Ldc
                temp_471 = uint(temp_331) >> 2;
                temp_472 = temp_471 >> 2;
                temp_473 = int(temp_471) & 3;
                temp_474 = fp_c8.data[int(temp_472)][temp_473];
                temp_475 = int(temp_471) + 1;
                temp_476 = uint(temp_475) >> 2;
                temp_477 = temp_475 & 3;
                temp_478 = fp_c8.data[int(temp_476)][temp_477];
                // 0x000E90: 0x59A4190003471132 Ffma
                temp_479 = fma(temp_451, temp_465, temp_468);
                temp_480 = clamp(temp_479, 0.0, 1.0);
                // 0x000E98: 0xEF94008000872020 Ldc
                temp_481 = temp_331 + 8;
                temp_482 = uint(temp_481) >> 2;
                temp_483 = temp_482 >> 2;
                temp_484 = int(temp_482) & 3;
                temp_485 = fp_c8.data[int(temp_483)][temp_484];
                // 0x000EA8: 0x51A40F0400371E11 Ffma
                temp_486 = fma(temp_24, temp_24, fp_c1.data[0].w);
                temp_487 = clamp(temp_486, 0.0, 1.0);
                // 0x000EB0: 0x59A40A0003471214 Ffma
                temp_488 = fma(temp_96, temp_465, temp_470);
                temp_489 = clamp(temp_488, 0.0, 1.0);
                // 0x000EB8: 0x1E23FB3333373333 Fmul32i
                temp_490 = temp_469 * 1.39999998;
                // 0x000EC8: 0x49A21A8400273215 Ffma
                temp_491 = fma(temp_480, fp_c1.data[0].z, -6.98316002);
                // 0x000ED0: 0x5C68100001171134 Fmul
                temp_492 = temp_487 * temp_487;
                // 0x000ED8: 0x5C68100003373333 Fmul
                temp_493 = temp_490 * temp_490;
                // 0x000EE8: 0x5C68100001573232 Fmul
                temp_494 = temp_480 * temp_491;
                // 0x000EF0: 0x59A20A0001473434 Ffma
                temp_495 = 0.0 - temp_489;
                temp_496 = fma(temp_492, temp_489, temp_495);
                // 0x000EF8: 0x5C5C30000FF73615 Fadd
                temp_497 = temp_460 + -0.0;
                temp_498 = clamp(temp_497, 0.0, 1.0);
                // 0x000F08: 0x59A1198003373633 Ffma
                temp_499 = 0.0 - temp_493;
                temp_500 = fma(temp_460, temp_499, temp_493);
                // 0x000F10: 0x5C90008003270032 Rro
                // 0x000F18: 0x51A01A0400471414 Ffma
                temp_501 = fma(temp_489, temp_496, fp_c1.data[1].x);
                // 0x000F28: 0x5080000000273232 Mufu
                temp_502 = exp2(temp_494);
                // 0x000F30: 0x59A10A8001572E34 Ffma
                temp_503 = 0.0 - temp_498;
                temp_504 = fma(temp_182, temp_503, temp_498);
                // 0x000F38: 0x5080000000471414 Mufu
                temp_505 = 1.0 / temp_501;
                // 0x000F48: 0x5C5C100003373633 Fadd
                temp_506 = temp_460 + temp_500;
                temp_507 = clamp(temp_506, 0.0, 1.0);
                // 0x000F50: 0x5C58100003472E34 Fadd
                temp_508 = temp_182 + temp_504;
                // 0x000F58: 0x5080000000473434 Mufu
                temp_509 = 1.0 / temp_508;
                // 0x000F68: 0x5C68100001471114 Fmul
                temp_510 = temp_487 * temp_505;
                // 0x000F70: 0x59A1190003270911 Ffma
                temp_511 = 0.0 - temp_502;
                temp_512 = fma(temp_234, temp_511, temp_502);
                // 0x000F78: 0x5C68100000C7100C Fmul
                temp_513 = temp_421 * temp_474;
                // 0x000F88: 0x5C68100000D7100D Fmul
                temp_514 = temp_421 * temp_478;
                // 0x000F90: 0x5C68100001471414 Fmul
                temp_515 = temp_510 * temp_510;
                // 0x000F98: 0x5C68100003472C34 Fmul
                temp_516 = temp_218 * temp_509;
                // 0x000FA8: 0x5C58100001170911 Fadd
                temp_517 = temp_234 + temp_512;
                // 0x000FB0: 0x5C68100003370C35 Fmul
                temp_518 = temp_513 * temp_507;
                // 0x000FB8: 0x5C68100002071020 Fmul
                temp_519 = temp_421 * temp_485;
                // 0x000FC8: 0x59A1190003270710 Ffma
                temp_520 = 0.0 - temp_502;
                temp_521 = fma(temp_219, temp_520, temp_502);
                // 0x000FD0: 0x59A1190003270A32 Ffma
                temp_522 = 0.0 - temp_502;
                temp_523 = fma(temp_239, temp_522, temp_502);
                // 0x000FD8: 0x5C68100003471414 Fmul
                temp_524 = temp_515 * temp_516;
                // 0x000FE8: 0x5C68100001170D11 Fmul
                temp_525 = temp_514 * temp_517;
                // 0x000FF0: 0x5C68100003370D0D Fmul
                temp_526 = temp_514 * temp_507;
                // 0x000FF8: 0x5C68100003372033 Fmul
                temp_527 = temp_519 * temp_507;
                // 0x001008: 0x5C58100001070710 Fadd
                temp_528 = temp_219 + temp_521;
                // 0x001010: 0x5C58100003270A32 Fadd
                temp_529 = temp_239 + temp_523;
                // 0x001018: 0x5C68100001471514 Fmul
                temp_530 = temp_498 * temp_524;
                // 0x001028: 0x49A0140400773528 Ffma
                temp_531 = fma(temp_518, fp_c1.data[1].w, temp_305);
                // 0x001030: 0x49A0098400770D13 Ffma
                temp_532 = fma(temp_526, fp_c1.data[1].w, temp_306);
                // 0x001038: 0x49A00C0400773318 Ffma
                temp_533 = fma(temp_527, fp_c1.data[1].w, temp_307);
                // 0x001048: 0x5C68100001070C15 Fmul
                temp_534 = temp_513 * temp_528;
                // 0x001050: 0x5C68100003272032 Fmul
                temp_535 = temp_519 * temp_529;
                // 0x001058: 0x5C6810000147110C Fmul
                temp_536 = temp_525 * temp_530;
                // 0x001068: 0x5C68100001471515 Fmul
                temp_537 = temp_534 * temp_530;
                // 0x001070: 0x5C68100001473214 Fmul
                temp_538 = temp_535 * temp_530;
                // 0x001078: 0x49A00C8400670C19 Ffma
                temp_539 = fma(temp_536, fp_c1.data[1].z, temp_308);
                // 0x001088: 0x49A00D840067151B Ffma
                temp_540 = fma(temp_537, fp_c1.data[1].z, temp_309);
                // 0x001090: 0x49A00D040067141A Ffma
                temp_541 = fma(temp_538, fp_c1.data[1].z, temp_310);
                // 0x001098: 0xF0F800000007000F Sync
                temp_424 = temp_531;
                temp_425 = temp_532;
                temp_426 = temp_533;
                temp_427 = temp_539;
                temp_428 = temp_540;
                temp_429 = temp_541;
            }
            // 0x0010A8: 0xE2400FFFA309000F Bra
            temp_305 = temp_424;
            temp_306 = temp_425;
            temp_307 = temp_426;
            temp_308 = temp_427;
            temp_309 = temp_428;
            temp_310 = temp_429;
            temp_311 = temp_425;
            temp_312 = temp_424;
            temp_313 = temp_426;
            temp_314 = temp_427;
            temp_315 = temp_428;
            temp_316 = temp_429;
        }
        while (!temp_318);
        // 0x0010B0: 0xF0F800000007000F Sync
    }
    // 0x0010B8: 0x5C62578000170E0C Fmnmx
    temp_542 = abs(temp_94);
    temp_543 = abs(temp_95);
    temp_544 = max(temp_542, temp_543);
    // 0x0010C8: 0xE003FF87CFF7FF2B Ipa
    // 0x0010D0: 0x5C62578001672A0D Fmnmx
    temp_545 = abs(temp_128);
    temp_546 = abs(temp_298);
    temp_547 = max(temp_545, temp_546);
    // 0x0010D8: 0xEF4410000007FF33 Ldl
    temp_548 = uintBitsToFloat(local_memory[0]);
    // 0x0010E8: 0x38681040E0071E30 Fmul
    temp_549 = temp_24 * 7.0;
    // 0x0010F0: 0x010000000017F014 Mov32i
    // 0x0010F8: 0x3868104080071E21 Fmul
    temp_550 = temp_24 * 4.0;
    // 0x001108: 0x5C60578000C7120C Fmnmx
    temp_551 = abs(temp_96);
    temp_552 = max(temp_551, temp_544);
    // 0x001110: 0x4C98079C0207002F Mov
    // 0x001118: 0x5080000000470C0C Mufu
    temp_553 = 1.0 / temp_552;
    // 0x001128: 0x5C60578000D7170D Fmnmx
    temp_554 = abs(temp_291);
    temp_555 = max(temp_554, temp_547);
    // 0x001130: 0x5080000000470D0D Mufu
    temp_556 = 1.0 / temp_555;
    // 0x001138: 0x5C69100000C71212 Fmul
    temp_557 = 0.0 - temp_553;
    temp_558 = temp_96 * temp_557;
    // 0x001148: 0x5C68100000C70E10 Fmul
    temp_559 = temp_94 * temp_553;
    // 0x001150: 0x5080000000472B2B Mufu
    // 0x001158: 0x5C68100000C70111 Fmul
    temp_560 = temp_95 * temp_553;
    // 0x001168: 0x5C68100000D72A15 Fmul
    temp_561 = temp_128 * temp_556;
    // 0x001170: 0x5C68100000D71616 Fmul
    temp_562 = temp_298 * temp_556;
    // 0x001178: 0x5C69100000D71717 Fmul
    temp_563 = 0.0 - temp_556;
    temp_564 = temp_291 * temp_563;
    // 0x001188: 0xC0BA0163EFF7100C Tex
    temp_565 = textureLod(fp_t_tcb_16, vec3(temp_559, temp_560, temp_558), 0.0).xyz;
    temp_566 = temp_565.x;
    temp_567 = temp_565.y;
    temp_568 = temp_565.z;
    // 0x001190: 0x5C98078001270020 Mov
    // 0x001198: 0xC1BA0143F3071414 Tex
    temp_569 = textureLod(fp_t_tcb_14, vec4(temp_561, temp_562, temp_564, float(1)), temp_549).xyz;
    temp_570 = temp_569.x;
    temp_571 = temp_569.y;
    temp_572 = temp_569.z;
    // 0x0011A8: 0x3859103F80071E1E Fadd
    temp_573 = 0.0 - temp_24;
    temp_574 = temp_573 + 1.0;
    // 0x0011B0: 0xD9A2018202071010 Texs
    temp_575 = textureLod(fp_t_tcb_18, vec3(temp_559, temp_560, temp_558), temp_550).xyz;
    temp_576 = temp_575.x;
    temp_577 = temp_575.y;
    temp_578 = temp_575.z;
    // 0x0011B8: 0x3859103F80070232 Fadd
    temp_579 = 0.0 - temp_101;
    temp_580 = temp_579 + 1.0;
    // 0x0011C8: 0xE043FF9202B7FF2C Ipa
    temp_581 = in_attr10.x;
    // 0x0011D0: 0x010410676C97F031 Mov32i
    // 0x0011D8: 0xE043FF9242B7FF2D Ipa
    temp_582 = in_attr10.y;
    // 0x0011E8: 0x5C68100001E71E2A Fmul
    temp_583 = temp_574 * temp_574;
    // 0x0011F0: 0xE043FF9282B7FF2E Ipa
    temp_584 = in_attr10.z;
    // 0x0011F8: 0xDEBA0000C2F72C2C TexB
    temp_585 = texture(fp_t_cb7_20, vec3(temp_581, temp_582, temp_584)).x;
    // 0x001208: 0x4C6810180907321E Fmul
    temp_586 = temp_580 * fp_c6.data[36].x;
    // 0x001210: 0x49A005980A17130B Ffma
    temp_587 = fma(temp_311, fp_c6.data[40].y, temp_279);
    // 0x001218: 0x5080400000371E1E Mufu
    temp_588 = abs(temp_586);
    temp_589 = log2(temp_588);
    // 0x001228: 0x49A0188400A70213 Ffma
    temp_590 = fma(temp_101, fp_c1.data[2].z, 8.40400028);
    // 0x001230: 0x49A004180A172808 Ffma
    temp_591 = fma(temp_312, fp_c6.data[40].y, temp_243);
    // 0x001238: 0x49A007980A17180F Ffma
    temp_592 = fma(temp_313, fp_c6.data[40].y, temp_268);
    // 0x001248: 0x1E23E468DB970228 Fmul32i
    temp_593 = temp_101 * 0.193900004;
    // 0x001250: 0x5C68100002A72A12 Fmul
    temp_594 = temp_583 * temp_583;
    // 0x001258: 0x49A013180A171926 Ffma
    temp_595 = fma(temp_314, fp_c6.data[40].y, temp_301);
    // 0x001268: 0x51A0098400E70218 Ffma
    temp_596 = fma(temp_101, temp_590, fp_c1.data[3].z);
    // 0x001270: 0xE04BFF9042B7FF13 Ipa
    temp_597 = in_attr8.y;
    temp_598 = clamp(temp_597, 0.0, 1.0);
    // 0x001278: 0x0104066978D7F019 Mov32i
    // 0x001288: 0x49A012980A171B25 Ffma
    temp_599 = fma(temp_315, fp_c6.data[40].y, temp_300);
    // 0x001290: 0x0103F0000007F017 Mov32i
    // 0x001298: 0x49A0140400871228 Ffma
    temp_600 = fma(temp_594, fp_c1.data[2].x, temp_593);
    // 0x0012A8: 0x0103E2CD9E87F01B Mov32i
    // 0x0012B0: 0x4C68101809171E1E Fmul
    temp_601 = temp_589 * fp_c6.data[36].y;
    // 0x0012B8: 0x51A00C0400F70221 Ffma
    temp_602 = fma(temp_101, temp_596, fp_c1.data[3].w);
    // 0x0012C8: 0x49A20C8400971218 Ffma
    temp_603 = fma(temp_594, fp_c1.data[2].y, -3.60299993);
    // 0x0012D0: 0x32A00BBF00070117 Ffma
    temp_604 = fma(temp_95, 0.5, 0.5);
    // 0x0012D8: 0x088BF05D63972828 Fadd32i
    temp_605 = temp_600 + -0.522800028;
    // 0x0012E8: 0x49A20D8400D71201 Ffma
    temp_606 = fma(temp_594, fp_c1.data[3].y, -0.168799996);
    // 0x0012F0: 0x49A013980A171A27 Ffma
    temp_607 = fma(temp_316, fp_c6.data[40].y, temp_302);
    // 0x0012F8: 0x5C90008001E70019 Rro
    // 0x001308: 0x4C9807980B47002A Mov
    // 0x001310: 0x5084000000271919 Mufu
    temp_608 = exp2(temp_601);
    temp_609 = clamp(temp_608, 0.0, 1.0);
    // 0x001318: 0x4C9807980987001A Mov
    // 0x001328: 0x5C68100002870228 Fmul
    temp_610 = temp_101 * temp_605;
    // 0x001330: 0x51A00C0400B7121B Ffma
    temp_611 = fma(temp_594, temp_603, fp_c1.data[2].w);
    // 0x001338: 0x5C68100000171202 Fmul
    temp_612 = temp_594 * temp_606;
    // 0x001348: 0x4C98079800A7001E Mov
    // 0x001350: 0xF0F0000034370000 Depbar
    // 0x001358: 0x51A215180B470001 Ffma
    temp_613 = 0.0 - fp_c6.data[45].x;
    temp_614 = fma(temp_30, fp_c6.data[45].x, temp_613);
    // 0x001368: 0x4C58101407E71A18 Fadd
    temp_615 = fp_c6.data[38].x + fp_c5.data[31].z;
    // 0x001370: 0x4C98079800870000 Mov
    // 0x001378: 0x59A0140001B7121B Ffma
    temp_616 = fma(temp_594, temp_611, temp_610);
    // 0x001388: 0x4C9807980097001A Mov
    // 0x001390: 0x010404000007F028 Mov32i
    // 0x001398: 0x5C60138002170202 Fmnmx
    temp_617 = min(temp_612, temp_602);
    // 0x0013A8: 0x5C68100001971818 Fmul
    temp_618 = temp_615 * temp_609;
    // 0x0013B0: 0x4C59101800470012 Fadd
    temp_619 = 0.0 - fp_c6.data[2].x;
    temp_620 = temp_619 + fp_c6.data[1].x;
    // 0x0013B8: 0x4C59101800671E19 Fadd
    temp_621 = 0.0 - fp_c6.data[2].z;
    temp_622 = temp_621 + fp_c6.data[1].z;
    // 0x0013C8: 0x4C59101800571A00 Fadd
    temp_623 = 0.0 - fp_c6.data[2].y;
    temp_624 = temp_623 + fp_c6.data[1].y;
    // 0x0013D0: 0x33A014400007131E Ffma
    temp_625 = fma(temp_598, -2.0, 3.0);
    // 0x0013D8: 0x5C68100001371328 Fmul
    temp_626 = temp_598 * temp_598;
    // 0x0013E8: 0x386C104248070921 Fmul
    temp_627 = temp_234 * 50.0;
    temp_628 = clamp(temp_627, 0.0, 1.0);
    // 0x0013F0: 0x5C5C30000FF7021A Fadd
    temp_629 = temp_617 + -0.0;
    temp_630 = clamp(temp_629, 0.0, 1.0);
    // 0x0013F8: 0x4C5C100400C71B1B Fadd
    temp_631 = temp_616 + fp_c1.data[3].x;
    temp_632 = clamp(temp_631, 0.0, 1.0);
    // 0x001408: 0x51A00B9800A71913 Ffma
    temp_633 = fma(temp_622, temp_604, fp_c6.data[2].z);
    // 0x001410: 0x51A00B9800871212 Ffma
    temp_634 = fma(temp_620, temp_604, fp_c6.data[2].x);
    // 0x001418: 0x51A00B9800970000 Ffma
    temp_635 = fma(temp_624, temp_604, fp_c6.data[2].y);
    // 0x001428: 0x4C68101808D71819 Fmul
    temp_636 = temp_618 * fp_c6.data[35].y;
    // 0x001430: 0x5C68100002871E02 Fmul
    temp_637 = temp_625 * temp_626;
    // 0x001438: 0x4C68101808C71817 Fmul
    temp_638 = temp_618 * fp_c6.data[35].x;
    // 0x001448: 0x5C68100002171A28 Fmul
    temp_639 = temp_630 * temp_628;
    // 0x001450: 0x5C58300001A71B1B Fadd
    temp_640 = 0.0 - temp_630;
    temp_641 = temp_632 + temp_640;
    // 0x001458: 0x4C68101808E71818 Fmul
    temp_642 = temp_618 * fp_c6.data[35].z;
    // 0x001468: 0x49A0131407F71926 Ffma
    temp_643 = fma(temp_636, fp_c5.data[31].w, temp_595);
    // 0x001470: 0x49A10C9407F7191A Ffma
    temp_644 = 0.0 - fp_c5.data[31].w;
    temp_645 = fma(temp_636, temp_644, temp_636);
    // 0x001478: 0x49A0129407F71725 Ffma
    temp_646 = fma(temp_638, fp_c5.data[31].w, temp_599);
    // 0x001488: 0x49A10B9407F71719 Ffma
    temp_647 = 0.0 - fp_c5.data[31].w;
    temp_648 = fma(temp_638, temp_647, temp_638);
    // 0x001490: 0x59A0140001B70717 Ffma
    temp_649 = fma(temp_219, temp_641, temp_639);
    // 0x001498: 0xE043FF9002B7FF07 Ipa
    temp_650 = in_attr8.x;
    // 0x0014A8: 0x49A0139407F71827 Ffma
    temp_651 = fma(temp_642, fp_c5.data[31].w, temp_607);
    // 0x0014B0: 0xE043FF8C82B7FF2B Ipa
    temp_652 = in_attr4.z;
    // 0x0014B8: 0x49A10C1407F71818 Ffma
    temp_653 = 0.0 - fp_c5.data[31].w;
    temp_654 = fma(temp_642, temp_653, temp_642);
    // 0x0014C8: 0x5C58100001970808 Fadd
    temp_655 = temp_591 + temp_648;
    // 0x0014D0: 0x5C58100001A70B0B Fadd
    temp_656 = temp_587 + temp_645;
    // 0x0014D8: 0x59A0140001B70909 Ffma
    temp_657 = fma(temp_234, temp_641, temp_639);
    // 0x0014E8: 0x59A0140001B70A0A Ffma
    temp_658 = fma(temp_239, temp_641, temp_639);
    // 0x0014F0: 0x51A215180B471C1C Ffma
    temp_659 = 0.0 - fp_c6.data[45].x;
    temp_660 = fma(temp_28, fp_c6.data[45].x, temp_659);
    // 0x0014F8: 0x5C58100001870F0F Fadd
    temp_661 = temp_592 + temp_654;
    // 0x001508: 0x51A215180B471D1D Ffma
    temp_662 = 0.0 - fp_c6.data[45].x;
    temp_663 = fma(temp_29, fp_c6.data[45].x, temp_662);
    // 0x001510: 0x4C68101803770202 Fmul
    temp_664 = temp_637 * fp_c6.data[13].w;
    // 0x001518: 0xF0F0000034170000 Depbar
    // 0x001528: 0x49A0060400771212 Ffma
    temp_665 = fma(temp_634, fp_c1.data[1].w, temp_566);
    // 0x001530: 0x49A0068400770000 Ffma
    temp_666 = fma(temp_635, fp_c1.data[1].w, temp_567);
    // 0x001538: 0x49A007040077130E Ffma
    temp_667 = fma(temp_633, fp_c1.data[1].w, temp_568);
    // 0x001548: 0x49A0081808571410 Ffma
    temp_668 = fma(temp_570, fp_c6.data[33].y, temp_576);
    // 0x001550: 0x49A0101808571620 Ffma
    temp_669 = fma(temp_572, fp_c6.data[33].y, temp_578);
    // 0x001558: 0x5C58100001270808 Fadd
    temp_670 = temp_655 + temp_665;
    // 0x001568: 0x5C58100000070B00 Fadd
    temp_671 = temp_656 + temp_666;
    // 0x001570: 0x49A008980857150B Ffma
    temp_672 = fma(temp_571, fp_c6.data[33].y, temp_577);
    // 0x001578: 0x5C58100000E70F0E Fadd
    temp_673 = temp_661 + temp_667;
    // 0x001588: 0x59A0128001071717 Ffma
    temp_674 = fma(temp_649, temp_668, temp_646);
    // 0x001590: 0x59A0138002070A27 Ffma
    temp_675 = fma(temp_658, temp_669, temp_651);
    // 0x001598: 0x59A1040000871F0D Ffma
    temp_676 = 0.0 - temp_670;
    temp_677 = fma(temp_25, temp_676, temp_670);
    // 0x0015A8: 0x59A1000000071F00 Ffma
    temp_678 = 0.0 - temp_671;
    temp_679 = fma(temp_25, temp_678, temp_671);
    // 0x0015B0: 0x59A0130000B70926 Ffma
    temp_680 = fma(temp_657, temp_672, temp_643);
    // 0x0015B8: 0x59A1070000E71F08 Ffma
    temp_681 = 0.0 - temp_673;
    temp_682 = fma(temp_25, temp_681, temp_673);
    // 0x0015C8: 0x4C98079802870009 Mov
    // 0x0015D0: 0x4C9807980297000B Mov
    // 0x0015D8: 0x59A00B8000D7040D Ffma
    temp_683 = fma(temp_197, temp_677, temp_674);
    // 0x0015E8: 0x59A0130000070504 Ffma
    temp_684 = fma(temp_198, temp_679, temp_680);
    // 0x0015F0: 0x59A0138000870627 Ffma
    temp_685 = fma(temp_215, temp_682, temp_675);
    // 0x0015F8: 0x51A0049802871C05 Ffma
    temp_686 = fma(temp_660, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001608: 0x51A0059802971D1D Ffma
    temp_687 = fma(temp_663, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x001610: 0x5C68100000D72200 Fmul
    temp_688 = temp_294 * temp_683;
    // 0x001618: 0x5C68100000472304 Fmul
    temp_689 = temp_296 * temp_684;
    // 0x001628: 0x5C68100002772424 Fmul
    temp_690 = temp_289 * temp_685;
    // 0x001630: 0x49A0001406C73300 Ffma
    temp_691 = fma(temp_548, fp_c5.data[27].x, temp_688);
    // 0x001638: 0x49A0021406C73737 Ffma
    temp_692 = fma(temp_303, fp_c5.data[27].x, temp_689);
    // 0x001648: 0x49A0121406C72929 Ffma
    temp_693 = fma(temp_304, fp_c5.data[27].x, temp_690);
    // 0x001650: 0x5C58300000570006 Fadd
    temp_694 = 0.0 - temp_686;
    temp_695 = temp_691 + temp_694;
    // 0x001658: 0x49A503980BC72C2C Ffma
    temp_696 = 0.0 - fp_c6.data[47].x;
    temp_697 = fma(temp_585, temp_696, temp_650);
    temp_698 = clamp(temp_697, 0.0, 1.0);
    // 0x001668: 0x4C98079802A70007 Mov
    // 0x001670: 0x5080000000372C2C Mufu
    temp_699 = log2(temp_698);
    // 0x001678: 0x49A002980BF70606 Ffma
    temp_700 = fma(temp_695, fp_c6.data[47].w, temp_686);
    // 0x001688: 0x51A0039802A70104 Ffma
    temp_701 = fma(temp_614, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001690: 0x5C58300001D73707 Fadd
    temp_702 = 0.0 - temp_687;
    temp_703 = temp_692 + temp_702;
    // 0x001698: 0x5C60178000670506 Fmnmx
    temp_704 = max(temp_686, temp_700);
    // 0x0016A8: 0x49A2011803470205 Ffma
    temp_705 = 0.0 - temp_664;
    temp_706 = fma(temp_664, fp_c6.data[13].x, temp_705);
    // 0x0016B0: 0x5C58300000472901 Fadd
    temp_707 = 0.0 - temp_701;
    temp_708 = temp_693 + temp_707;
    // 0x0016B8: 0x4C68101803172C08 Fmul
    temp_709 = temp_699 * fp_c6.data[12].y;
    // 0x0016C8: 0x49A00E980BF70707 Ffma
    temp_710 = fma(temp_703, fp_c6.data[47].w, temp_687);
    // 0x0016D0: 0x59A0030000570605 Ffma
    temp_711 = fma(temp_704, temp_706, temp_704);
    // 0x0016D8: 0x49A002180BF70101 Ffma
    temp_712 = fma(temp_708, fp_c6.data[47].w, temp_701);
    // 0x0016E8: 0x5C90008000870009 Rro
    // 0x0016F0: 0x49A2011803570208 Ffma
    temp_713 = 0.0 - temp_664;
    temp_714 = fma(temp_664, fp_c6.data[13].y, temp_713);
    // 0x0016F8: 0x5080000000270909 Mufu
    temp_715 = exp2(temp_709);
    // 0x001708: 0x5C60178000771D07 Fmnmx
    temp_716 = max(temp_687, temp_710);
    // 0x001710: 0x49A2011803670202 Ffma
    temp_717 = 0.0 - temp_664;
    temp_718 = fma(temp_664, fp_c6.data[13].z, temp_717);
    // 0x001718: 0x5C60178000170401 Fmnmx
    temp_719 = max(temp_701, temp_712);
    // 0x001728: 0x59A0038000870708 Ffma
    temp_720 = fma(temp_716, temp_714, temp_716);
    // 0x001730: 0x5C98078000370007 Mov
    // 0x001738: 0x59A0008000270104 Ffma
    temp_721 = fma(temp_719, temp_718, temp_719);
    // 0x001748: 0x5C59100000570001 Fadd
    temp_722 = 0.0 - temp_691;
    temp_723 = temp_722 + temp_711;
    // 0x001750: 0x0103F2000007F005 Mov32i
    // 0x001758: 0x4C68101802B70906 Fmul
    temp_724 = temp_715 * fp_c6.data[10].w;
    // 0x001768: 0x5C59100000873702 Fadd
    temp_725 = 0.0 - temp_692;
    temp_726 = temp_725 + temp_720;
    // 0x001770: 0x5C59100000472904 Fadd
    temp_727 = 0.0 - temp_693;
    temp_728 = temp_727 + temp_721;
    // 0x001778: 0x4C58100C03872B08 Fadd
    temp_729 = temp_652 + fp_c3.data[14].x;
    // 0x001788: 0x59A0000000670100 Ffma
    temp_730 = fma(temp_723, temp_724, temp_691);
    // 0x001790: 0x59A01B8000670201 Ffma
    temp_731 = fma(temp_726, temp_724, temp_692);
    // 0x001798: 0x59A0148000670402 Ffma
    temp_732 = fma(temp_728, temp_724, temp_693);
    // 0x0017A8: 0x5C9807800FF70006 Mov
    // 0x0017B0: 0x49A37F8C03C70804 Ffma
    temp_733 = 0.0 - fp_c3.data[15].x;
    temp_734 = fma(temp_729, temp_733, -0.0);
    // 0x0017B8: 0xE30000000007000F Exit
    out_attr0.x = temp_730;
    out_attr0.y = temp_731;
    out_attr0.z = temp_732;
    out_attr0.w = temp_18;
    out_attr1.x = temp_734;
    out_attr1.y = 0.625;
    out_attr1.z = 0.0;
    out_attr1.w = temp_18;
    return;
}
