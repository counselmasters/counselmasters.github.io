'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "af5cb0facdebbeabe1f46fed12d84a88",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d2aced7dc29e6cfd611e9de12a29de9f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc6255e3eec2323a8bab693d744bb8b0",
".git/logs/refs/heads/master": "dc6255e3eec2323a8bab693d744bb8b0",
".git/objects/07/04365438b8a92e83fd173c48783afa835cf94a": "ae6713b75ea5d8caee2dba37935ad530",
".git/objects/07/b12a5c63cdcdabcd184839bdf3472f2ed2599d": "7cf912afbde82422142f577b94ecb1a8",
".git/objects/0d/faa6c7b063224f611681de620bb32ae7252123": "75c4ba7c585b3a19b0ab3838ea4ad4e3",
".git/objects/10/cc57f690b0bfb5a1bee0dd240c50447019346a": "fb35d4946b4474f811c07ed5134aa0a0",
".git/objects/12/415db218b5ab238469c91698b9c9c4297ff221": "84640ee3ba6d555a34deb88809a20fbf",
".git/objects/13/185c68d639df89d1ddf5e064993469f15e0657": "ba0e0f2738868bcac2de4690f1d54736",
".git/objects/15/8fcbd422f52e2256afc5abc8813207d6159e7e": "2fc932185a2a789c4a660355f703f7f8",
".git/objects/16/b92cec6f7671b470a65c21070b2107add871d2": "2fe63a9e1717c09ca2b200e20652549c",
".git/objects/1a/0e312a2b56e7ab6ec9676903ba1e4ee8a687c5": "1f830f7f57370e01370afd183fc733b5",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/2732758892946d7e55c540a92361f8327c4456": "0ce982456df2c12975a5d25e2848473b",
".git/objects/1e/fceb3f2393feabdf7b15acabd362bc934ff51a": "36e48101ec9e84c46e6a7deab0dd4a83",
".git/objects/24/151ef980a687663192cae77cabe532033fef6f": "e4b1dcbe0fdacaf72f46ad68de164232",
".git/objects/25/0712925101e12f12890367d65350610d412694": "33ac34d0e0194ba1895bea2f3ce66207",
".git/objects/28/9e116827165a49b37072a102dc6063a31bfc07": "e47c569c47258a94b38b03c3cc515f08",
".git/objects/2d/25bb0ddd3592945cf2eddc52f827480faec7dc": "bd45060adf3d6f5acf851810ffd1c87a",
".git/objects/30/a8d45d5c8c82e550ffad0625ed1a1242e965a7": "291ac5039d40cfb8be836f94770fed95",
".git/objects/31/0704f21624141005965b905c3ffc4c81afb643": "882099b79ff1dd6809404d0e0906911f",
".git/objects/31/628c18f97ec886b9b4d9b4c2e285ca9a0efce0": "feb22e7946528f241ad9ebc8a2a2ae57",
".git/objects/32/3e52f2ebe179599cfcbe4b459a71db9815b5f8": "442ddefee5655c1931c3186b6adb9d4e",
".git/objects/32/79938e11544aa7400f7333b03b9aed45b0062e": "0391f6a2fcb8a7ec5016a440788c1145",
".git/objects/34/83f4e01a9443d547123d3e41d6f9e797d5cf90": "880eb9923eb41e464c1fb9c8918b034a",
".git/objects/34/c6375968b1ae05b487536cfe2e607fbb16739f": "23f4e2850b8dc6a3787ba622fc643423",
".git/objects/3c/efe27942291c3c40c4dbb6c2643755461362c3": "a74f2bccdf798f38cba5c7345d7fb3b8",
".git/objects/3f/0a3368aebe81e01dd803da413a440e1f01c8fe": "7ce05c0342808376162923b58652a7cb",
".git/objects/3f/b8ba3c97571ba8a5665bddd7334e670a8f39b7": "92cbf7c0feca588ba6d4e6d3b26b6600",
".git/objects/46/bc6fb7a69e8bce56f40d56fd5d6195e151dc90": "c2539deffa1e1e864d5ba4768a1079f4",
".git/objects/48/729f2fe6a327217543dc2ff540f08bd34fd560": "a0c7972c4c8ebdb32c74f39366d150ea",
".git/objects/4a/c0955010b0ada496e30b2945db5c56177b7002": "40ec90633653a684804750c5b615dfb2",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/2d5c82035ada75ca0faf28c15a2a180eb13030": "867febbbb7177a53f817304ea97024f2",
".git/objects/4f/4b9d594c015544d9cb9c06da08a9bc48b9623a": "2e0a55753fedfefc6e1ae1f4fb224333",
".git/objects/51/fb3bd1f56a9d9d3beb2a27806ec2d35883b968": "368406eed3a76e285aab97ba243010d3",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/c024898570dcb1a5d3cc68e425a2b3662517c6": "28ecdac55b4a8c011b0a6e86d372268f",
".git/objects/56/1fcbf7e5cabe888619b63cc7af2386090e0034": "073482e9aac695f44edf3d8167f4e3bf",
".git/objects/60/28897d4e65f882edb5d1efed14cf84d52737e1": "18eb5d5039524c0875eaf495e38ccbeb",
".git/objects/60/ab710058e2514ca442fe6596090122e8912271": "e5575ca007ff662da176e5de670ec3a7",
".git/objects/66/2cf40469b7af499bbd6b0bcf72192429836089": "1369de2435fc607bd36db9f79a7e7ede",
".git/objects/66/445891d8d155dad552c81bf1bcee95faea4103": "ee8798f639bddb197f875e185721722e",
".git/objects/68/c8c350a6a1daaae0f6a974b1ac5e5e64fb8514": "7d2a1f1b595048b6b83f5d4caa5966fa",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/2b8f8a4e946017a2b969aac7d3bbccaaee9d70": "a1d36e758a5e5333cc936551b3568897",
".git/objects/6d/5a16d093c92b0320e309d11c8a288913123e9b": "fd4ce5a02f083ef9b276d60311290dca",
".git/objects/6e/3cfbd49896ae0e6316de6b43e95edea17ac8d5": "a8293ff16ea5fb25f462c80d3f37322d",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/9b4b62d979b16a1e4bf104bc5e8939286380f8": "ed907521117503a8ee9df7eb8bc7ce70",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/c2d2f1bf2e2e6ee97cda1339d9dfc1ec2006db": "1cb08eb7f82b762c6e34047f1a1669bb",
".git/objects/78/5ba3c5439b85d1e1f46663c4f6d7b1a2b5c2b0": "8d5d32a91540f23d6bf8036d7693f109",
".git/objects/79/2c20508a0ad346af20ba5de19417a0b0de4d5c": "189924dc56350517f8e1ea0562a0a115",
".git/objects/79/4921b4dba8eee0d0a9045249c1442f9369ce18": "618ca461ed927846a138cd3b5b49ee24",
".git/objects/79/f0f03ffc0175715326868e46aa85c825b860f7": "dbfe4b0e0f8f9a7ef008185384b00794",
".git/objects/7a/3fb13d45d63373e6937461e07518d794b71e55": "13aeb313268480822b9ffe8c26c95a7c",
".git/objects/7d/d854da7e03834fc55f508744c887050e46f5e7": "db4fa40290001c15e616df72b72ea3be",
".git/objects/7e/05b2b0382ccecf736691b9d87535a73148d409": "85c4951cc3324a7e1861ebafbc87408c",
".git/objects/7e/3bb2f8ce7ae5b69e9f32c1481a06f16ebcfe71": "4ac6c0fcf7071bf9fc9c013172f9996f",
".git/objects/7e/ac70a4792279aef2d6df8d0f3ecdfba40d2c56": "969b86d86979405bce4dec973a2368b9",
".git/objects/7e/d5b74b9f52480f02c24c9f1544bfcf67276047": "d9cd79997cf13c5dae685629bc0be568",
".git/objects/80/23fb59bd2de05fd036cb4fb0b95587b94fe091": "ebf9b450cef4951b093c6f9548068fec",
".git/objects/83/4331713a97dcc0a8eb77a45535d83d9c320874": "2befd417696b546816197e5a2747618c",
".git/objects/84/52ba05198a51ba2c92a619c48145c697a4c9e4": "e537c5fa3655657cf0f6fae44e637903",
".git/objects/87/0e8f3535c8c30c93f34dffe5f19cd17d4ef8b1": "9220c4e21290293f15c458964bba9775",
".git/objects/88/cd1f3182b66b889b2e17508df230808e20d311": "9ea2608c9cb6de4ca04d9fbc615f0218",
".git/objects/88/e8aadc0c2a0331f4712b13741d44421f95c3f9": "ce60bccdb0126cd403542b55f2dd8497",
".git/objects/89/656184c43183e607fbb67156110cd31ec6018a": "c4c1fd5e8e0d975d476d6a9523efc689",
".git/objects/8b/31406d48dd87aafe90412824e6d6aa03321b60": "8542961b087c1c5672f05f9a05316026",
".git/objects/8d/8978f319cd29df33f9f1fa59b3af99cf9bf5a9": "7d6a95783e7ca588669886fd482e9ca9",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/92/6f93defe3fff97b1484cc3c525364c2be9fbbb": "f28d249f7ddd1ee3329269a2ce0fd477",
".git/objects/97/5be37eb009c24c41cd1646a5d4b339c43fd340": "4454471a87f056f61546d9fa8d85c8d8",
".git/objects/97/bcdf5d8878850d20a24b6b1d2e751a3ed46e23": "cde98c9ad70b3d00357285002fac0a03",
".git/objects/98/8d984834bf8b85d8680b804e4c0753f03ef1d3": "80642d2cd5dd2f84c12196fd455bdd19",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/f69e3df322fed9adec3fe110efb289487e6136": "a70edea5c5701edfb3d93b3392cf67e5",
".git/objects/9f/552370de7c1ed159cb9cfda09bd1100cd4d841": "46ca50a1652593d154601167b87ac80e",
".git/objects/9f/786c5e5c84d26c756d5e134bc1961dc96f346b": "431a62765e1e6c6c6f5fcb9952fc7d83",
".git/objects/a1/c12f6c98b0162d89089161d5ed2df2a9878e77": "479c73db00b5c1bbd145f52c24701c46",
".git/objects/a3/705bd1df412376a3cb33f5209964da6d25d205": "9f5d2c9b3a3023cb732afdbda9c98e31",
".git/objects/a6/a62a1c324877a34a7204f046f071f540927d31": "83bc71396f3e297f92f6343193188f3b",
".git/objects/a9/fe7f5d34cb2de964c699f5e570d4e1a99e5bb1": "362322c3d5132e896f4f8c9a1c49b2ff",
".git/objects/ab/26b5d78843ff9869c9cbde1fde74f02c4aa5a0": "1f7982ebdee030aa688f142f082f1e4d",
".git/objects/ab/8cb05c95f0426251a2414887753b622aa1b9d4": "048ba3264b75b7db1381e120e7ce4c6d",
".git/objects/b1/f244ef7ab69cf8e47397a00f6c8f03b2e13d79": "7d7de56a45d89003632ca0ef1d9b4145",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/0f644ef5e32d8d882ab26fba2c78a969588c6b": "bd9bc3f9ae410d135218c27513149536",
".git/objects/c3/14dbdbab1b46fd92e661720d5efa749843d5d6": "58a0454dc60be8122edac326dcdcec00",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/9e1ab693d41e41ac593103057bf80037cb07ab": "295b3742be18a9beb7cac32f8fea64fa",
".git/objects/d1/e71c54c59ee4a5b63c368c6349fb19c1eaa4ac": "9061a547b11887f33e96278b78708c6c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/1aebb8835aca7b3e4e802ece9d3597c1def8ba": "47588989fc74fdfd930f2211f4d0edbc",
".git/objects/da/fb1e81890ed2b214fe5ab9b52819279e61d8f2": "8b9e440a8d54169a183a37464bc8e575",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/e1974795bd1f6deaa84e0090659dbf71007fd6": "49567258f6343382d3ec9b195965c780",
".git/objects/de/254403b504c0f43d02aa60fb4e70ad89c0ac36": "f153d7cffc86276f550d12e38e5d5672",
".git/objects/e0/54240903b55bdd33ed97a22146fc2e8fb5dfe0": "eea62734e0585b750ee1159d1918c58c",
".git/objects/e0/65b4f34602dbcf7c24b77a14306943f639a7a8": "fa4246475b5ca079f7307c7b1cd7e5cb",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/e9c232504a4d34c85e4e4c1d6836323a8b44f1": "a42800c85f5561423b396fca8a907537",
".git/objects/e3/bd3c1a42d75ae07a97609ddeddec50474c85ce": "711122489c1303fec42bd03f548b34ce",
".git/objects/e4/3bb11e4f9182f131b77ec69fb42bfe1692f121": "af588274257c6065489a6c886f804ace",
".git/objects/e5/50f7ad7e6be57ea53b1d87c80e843373dd1950": "d71b1292ff5dda4d43c9e0caacf57c46",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/b80b4f43a235f126a5e28f84e38bc2606a9760": "09682f99c267df6a4751bc6c0781e89d",
".git/objects/ec/57c2dca491bd8598e24d35c559dcc6c4efdf11": "de8c995a685a382ca9e4c4a845ac0ff4",
".git/objects/ec/e1ec2aa82f880c949be1b715b059da0ce52143": "98e59203e374d137f760c85421498595",
".git/objects/ee/41380bb2d42d5b07c3786d0912bcf4d9cd976d": "0f6626bbc6c92c75accc5772cf62da69",
".git/objects/ee/afe561e817829358ffcb50125345f57890a119": "fb85ab4888dee814876ea1b333e2dfc3",
".git/objects/ee/db270e873994adbdffadbe37cbc534b0f3e6d4": "38b7882d96dbb0e6e6882699a9ea688e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/120c5a9c0433000aa76cf7ffa8e95a67819ec9": "e751a2c82c2c9e4d1297d82de1864398",
".git/objects/f5/641af1541cc0514f06d5ba9c2faa9656760a14": "8abea34b5f03e75324fe83f7ff41befe",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ff/823cdb73f9ed76316e2efcc0931d2d9343d5ef": "6771cc039cc2ed869599581ddede13a2",
".git/refs/heads/master": "01b7e36d763d371e4f7a83e6afe2f74a",
"assets/AssetManifest.bin": "acebe2d883c39a6667b79697ee0ffff9",
"assets/AssetManifest.bin.json": "0865e6de4cbb05d8aca16f24b76775e3",
"assets/AssetManifest.json": "b0f206d4b0bb4d970e9c65f25840bce5",
"assets/assets/fonts/NotoSansArabic-Regular.ttf": "9312b42d104b5903a29b24a65a77933b",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/logo.png": "5e8de7f326230986ac0b22d73a2685db",
"assets/assets/orgchart/index.html": "6f8bd0cf6aab42f59638e36af910de8b",
"assets/FontManifest.json": "7a43bd391364a4f39be08769961d70f4",
"assets/fonts/MaterialIcons-Regular.otf": "d0d134cdec1d6c6030ec83fe7c7eebd0",
"assets/NOTICES": "e2eac6402c7a57541cc14c094edb04f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "09b860729b4b0d65251add113c32c757",
"icons/favicon.ico": "17be748134b26af8a86f8e2343da48b5",
"icons/favicon.png": "dcfa7bcab340a28d52577fc075fdaf09",
"icons/Icon-192.png": "53b43a9ac2774ce7e806e6ae5e4cecdd",
"icons/Icon-512.png": "dcfa7bcab340a28d52577fc075fdaf09",
"icons/icon-maskable-192.png": "dcfa7bcab340a28d52577fc075fdaf09",
"icons/icon-maskable-512.png": "dcfa7bcab340a28d52577fc075fdaf09",
"index.html": "d020ca53e791694369a4947b9bb86f57",
"/": "d020ca53e791694369a4947b9bb86f57",
"main.dart.js": "f4d3225a6bc641ee9f2673f86c6e4222",
"manifest.json": "72b32edf2c66a03953d87a563cebe78e",
"version.json": "4ad5f98d28434edd82147c5a39aa54bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
