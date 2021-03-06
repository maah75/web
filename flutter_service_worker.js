'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ec084af203357eac62db69403f8e8d25",
"/": "ec084af203357eac62db69403f8e8d25",
"main.dart.js": "eed54df038935c5db4d58b8156c869d5",
"favicon.png": "5ea2a516b3028fdf45310d7979e66d96",
"icons/Icon-192.png": "5916dea47330110fc6c0a569d670bbce",
"icons/Icon-512.png": "ca2e5737fdc8af83c151fbbf8cb071f1",
"manifest.json": "8461c377b19e3084c18a0b58e5888c75",
".git/config": "30f5f9c361c3afac7572d23a54698fbb",
".git/objects/61/231ce7cc762acddd4a9f67ea2aff6a1309077e": "aae5d9b9b2a1233f89b361377efe4f48",
".git/objects/61/11d21ab937cf013efeb237890959470a7450cf": "2e42fc3ccaeca01c3535943bf9bdaf35",
".git/objects/61/9c5930cb00285d39d39aca38b0f126f84169f4": "39798fa96a30c6e0db4931492c9757ef",
".git/objects/61/85643d6f1c758dbe0e20cd1d2c223552f6809a": "4fb36a6e14be92a12af5d38b44f8b33c",
".git/objects/61/c7a8e49289dc2b48b7dbb1c7dd8d85ac4acefe": "fa515bc961c81b3beb21fd4aadbc06cf",
".git/objects/0d/00bd09ae497f1402db760a7e789820f8245b6e": "e7825c8bfbbfd07a7525e02017a607d1",
".git/objects/0d/5b05fd3d52986cd5a84a499d43899c123ce9b1": "f39a0b5458799e23eb529bae1a5d4493",
".git/objects/95/40c98f3a4480cd85a5f44922272f0d513a095c": "610905f49cbdf7c2d0aa76cc03f7424f",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/317d5cc234293785734422ae5b7b5268098bf7": "bc45c6d20c513e5956b49669d6b54d1e",
".git/objects/59/02cbda15770aae65056103833a5dd089899336": "c8bbb6a57113cc129aee36b8e7a692be",
".git/objects/0c/b975bc03dfe0d7e26ac3637a1cff971e6507bd": "d5123db5e5193f7251f250b3d6b70fdf",
".git/objects/0c/3eff03aefdcbc81529d113458495ed7c28fdaa": "0f0c33b0b7a426fea6aa6f40f16009a8",
".git/objects/66/d3e601eee4a915bd4d0330f332359ac1ca24e1": "18fa02495a7ed2f086c7c179ef648acd",
".git/objects/50/7bbf1cf3f223028da9b9601e3048d2d1072006": "fd2682fe3dacf22acb5b3b0f540d558e",
".git/objects/68/c8e8bda3ae8ddd7fc696acf13d49f8927cb3fb": "29ca290e173101725e6807b096a5f526",
".git/objects/57/9dfbc73bf7e660f395b7644433773ea05065ca": "fa3a85ff788c33dba6c7c2f2132ac4b2",
".git/objects/57/eedacd24632154cb6c7302be2b154c1b6d1612": "eb5d386c8e3b18b732979b90033224bd",
".git/objects/3b/9b1d02e38c2af81b5d55f8b1910b7ad6ba7e42": "d4497debf3cf97dc1ae7592c842f4f53",
".git/objects/03/a83aa7c78ba45b2a1177dc5933d4242080816b": "6f30c7e01ae8bd074fb887471b599441",
".git/objects/03/fc1c1a223be9adf482d9511bd375babed81b76": "8d6ed47ef4d0e0fc4ecc32f85634f91a",
".git/objects/03/48eab13fa93d619f28ab2d2cbf6c253ce97394": "890307b2785668baec09b3258753eaa9",
".git/objects/03/27e8643443e7d89e71adec019b1e9c46b8bede": "fd094496eeb79c566c871d52885a92d0",
".git/objects/9b/47317262f3a9d7fb3f9931aa6929869ae7dcb6": "0574f8244d6be4c84e37b73e28db113d",
".git/objects/9b/15988a15fc5ff7d1332496d67626fbe3b30357": "d8377f718b90898d018965bea4738655",
".git/objects/9e/fbfc788abe5431204c18020a196b1d15e149ce": "724f3aa81d5aa41b8909207a966a1fb9",
".git/objects/04/ecd6ae590a753aef96970a33f5c927a394b017": "39414ac49bec4b8e01b8202d5be99c6a",
".git/objects/6a/706d9e3d9bb891cded18e7ca0ae865a991fe58": "d3ddbf44b7b70c7b1a1aece6a0d2a21d",
".git/objects/32/a5a4f3a790f092889155e117f2f476c9a6ef78": "6f51ff562c3a98b3a1a5696f2eaa56d0",
".git/objects/32/1058f9506ccf964c864fb89288a7840cb4a9a3": "0a2d23f8c81b1acd9e22b3025351d897",
".git/objects/35/0424b21d753a52b7610389aa0b7b1393dff6c5": "d731ab9c0a7787a0890195fba182e620",
".git/objects/35/105276b32abb48cfb77a7019cd72247d2d47ee": "4301e30825810bc12bae3147e778d9af",
".git/objects/69/51f6486231f27236d2bd0a52765659e4a64323": "4ba947cadb896a78700a6cfa18ea3e4f",
".git/objects/69/dcb4040d8b61ee477bcd0037e20963dedcb8c2": "af21c399f4aad08ec1b9322131e3c757",
".git/objects/3c/da066f5a3aa184cac85c0810fe0769421b1176": "66af3dac757cbe07c33eeaad5c9df70b",
".git/objects/56/f2eb9c97fbc4fc58167af8f61cd7b4507a1245": "e0e925aac5a722843bb56ad5e15fca36",
".git/objects/51/47c5d5c7bafd873d14347eefd410c718cdd2b3": "969abd56ab04378275af2ce20046ea19",
".git/objects/51/bcbfe3404a085be892980a9f8f92d0426d64a3": "89cfb2b0c9968daebb958ec8a43cc80e",
".git/objects/51/afeadb120bda95fa67e2dbbd335cd6f81e3ffb": "0afd201ca4adf95689abe29edf90bc13",
".git/objects/3d/3e1895c7d0571c7a3a6a82d237c96014065c97": "b1fd6b87f539071b3274370b4f926f54",
".git/objects/58/d29e790846623582f8d3f9835011ea778c79ff": "3169b3d6a1b1854ef6a759d4a6e452f2",
".git/objects/67/b12b31fb7ab1a19878f7f7e67c578738d19c40": "19d49ceec664bd0d572e617e6a5eb75d",
".git/objects/67/36023ce16c56b43c5c0f3602144f4a99cddcca": "18ce0e9166a36d6023d6721b6b4230a9",
".git/objects/0b/6a09a5f12593d951329e2af95c397beab37470": "40c44b0fffca75feae3e543ce18f3758",
".git/objects/0b/aa863d71bd6f0796f8ca3da5d74d24f0934f43": "537b2b078291e4ee2d3bf6c6abae18b5",
".git/objects/0b/34670ab09d5f72233e09bc098ba55e69b22944": "49cb14d3b2fb7f2f2f925c5dbea3b23a",
".git/objects/94/57e04de59ae04e809085de95bcde56ae435d4f": "6e4d3b576ac2248d4a744d03bdd80213",
".git/objects/0e/84608b46e0621ec58b471f78062a2b9b505cbf": "3af601e65bd30674212b0b166df75265",
".git/objects/0e/4ac9a944b55b51e20ae944416448204f08730e": "b7ae11fb2ed86303f78897b9c15ff2ed",
".git/objects/60/be51903d4539e5ebc8a5239f9b1f58e3edae32": "c2964ee44dd85b9c137fc961f8b16db9",
".git/objects/60/ea6f59179909dc9b772156583e1fc0edaa98a5": "ca7c9dc0b0d96ce44c6b08d385101d0b",
".git/objects/34/edebcb33f10ff25c8d710861741c336d371ff5": "96ac3c061772c10b433b15afa59588ba",
".git/objects/34/2683ededf59ab6a3ce0c8dff8b7dfcd65f6d44": "f1dbaad850fcfe16056021f6b76308a6",
".git/objects/5a/80b053e2994586d7265221532c9041ce0ee7f0": "b045aed47e892c49c6ff5d0698b5f6c2",
".git/objects/33/cf9033e3cc5d6f28b577d31d7979d33959a51d": "985a6df0c4648e3d2e6889a23d5ecb20",
".git/objects/33/ba5ec5c12fcdb0a9c96abc8cfa137fdf03340e": "dc18a818a643810563df1386bef4825c",
".git/objects/33/1c65b030f48ee87dbf514e23191158536075fa": "18835d496233f63d21aa36a78bab0859",
".git/objects/33/1d173b10cb60d5530c3047c5f79233cf95fefd": "35e78ca06eff237e106ed8c5a2d31d7c",
".git/objects/05/dc76238ca01795cadf4c5c1c9a4ee504b3f93b": "661f7557f8e2ee8029386766efc3da31",
".git/objects/05/4d601951cec2babf6102c3b42e6b313cb328cf": "d54b700a24688ed639a6293c976b335e",
".git/objects/05/b7cc22dbba31c5ca64ee368558614f420f896f": "c3a475901b5902c1863b1e0e70beb89d",
".git/objects/9d/567c4900ee78705626e585a0fd142391bda43b": "f2cd22bd2c15613655e3d0176ed344a7",
".git/objects/9d/9a7e59091e01aaeaecfdbc21adb8bcc91d5d6a": "3c8ec32afa4f66270d335946d47638bd",
".git/objects/9d/bca1daaa5e271e28889d01813f0e2699014e72": "a5ec0b31930cf5e5432bde08366c2fb6",
".git/objects/a4/9b7536924c0469cfc6c5891df41f15f29fa490": "5b8977ace7f00a4c56472ff10588228b",
".git/objects/a4/1718e37887eaee89b9e895a928e1a65a932b38": "51bb51092e416b235de0c268642e369b",
".git/objects/a4/0f4dac0415ee020e2680e701dd28654d5f510a": "9ab421452025fdc362105078f979db52",
".git/objects/a3/e2cfed66dddc196d499824fa4593a3eee1c7ec": "89755d674db24b512452a43dd3feaef9",
".git/objects/b5/a38e05aaa07805e2352654a6f75fa7167f40a8": "a7faa12185d7d3a55b0a80599441e746",
".git/objects/b5/8731b5d134659d5a33e57b05792b5c6fa9b184": "45bcf6aa1d51466a920947d4a6e3fccc",
".git/objects/b5/63b01dff41bdd56b3dbbfdfca9e4afb26d51f8": "e12722d5df0722bc4e00a51e8cac5ff7",
".git/objects/b2/0609835f2c28614e629817cd73b274eb7df2f4": "a268bdc415135bd99f5aedaa05db3c96",
".git/objects/bb/ebf26d347fab863dffad4afe95db101818c3a9": "da95ca6fb7b6f4ac58673db70c2a8cd9",
".git/objects/d7/d0173b27b987fa4d338cffebaee08aa232bcf2": "d1a613c930a13b5cf677cf0d72e1f4b9",
".git/objects/d0/9931c53124c115d383dd34f0c99b300a55f032": "68275204dd75615a8d49861324c4b45d",
".git/objects/d0/e923e54a0f121740b8bc65801e119cd86dacd0": "74a8644ddbd920092f91b1d9fca09379",
".git/objects/be/aecde194cb9c9c637f64a43bdd225a52a82b05": "f2b8e3148c0450f1cdc4072ad21fd161",
".git/objects/be/410da7e4f0f3d4551e07ab1154a91ee135de08": "ea1f9c485f3f0345501ce46f34a44082",
".git/objects/b3/aaabab8f08c738641da84bce32134c0f7fd537": "cf321a0f7331d8b1602e1ee0b5723de7",
".git/objects/b3/a844b4f5b6ace56c10dd4a609c3f9b9c93c4dd": "31ab4a667d48a778bbe2a2cfee25448f",
".git/objects/b3/44d6b38abc7810633c39823ecf3e65ce7de4e5": "7efcdbbff30d2bb2c0e1d62d835e31ef",
".git/objects/df/1635cdd3ada288a1a20823a619bbafa628566d": "f70aaefae2087045742938d9e6bdc538",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/da/c347c4c6bac796dba7c7768a4150cb0974eda0": "e157fb65ef666db97256aa145b067248",
".git/objects/da/670d3f810de9767e9698193440f7a32b600385": "f8aebc1d393a18ee64be536faf048525",
".git/objects/da/a2a875b0afddd8c2c2d56a542c9de07721896f": "ea3ee4dff4644119d825f1364ba6cac4",
".git/objects/b4/344bc31ca0ca2541e5380b20518910a1642edf": "a2a1957dcf2368f4b93f32c74743a0a2",
".git/objects/b4/efe020387759373d4970661d8a3b3236bc95ca": "888dc1ce2f4006145fce137b1387dcaa",
".git/objects/a2/8e2fdc7816c7e2a4b2cb2393293ecfa0a770d4": "33214a5e1f33c2dbe21ff7896e9d629d",
".git/objects/a5/afb920cb6e7bc7be4f5356f8cb0e4557f671b3": "b5f1a7393e123fd583451e54a605f257",
".git/objects/bd/e49378aea56dff842a3e46a124112c8bf7f200": "d487115f972748cce2c1c7110e484347",
".git/objects/ae/8bcb2ee09c9793d01d1755e6648d2973347dfa": "e377c4506cc19d384bac122adb72f22b",
".git/objects/ae/83a6ce2d5fcb93fc5bd78eba9086a4682d459b": "dabdb71d38f2c64199a73cc15b95d4a1",
".git/objects/d8/7f604132927b40754aa94d77f4a0f135df6e22": "aa996c6d2ec07436f341f37b81d85492",
".git/objects/e5/9b30d1f99801a4355fc159bdc534c29f88c08a": "c0c7a4841815fa74777c3792ab4a76a8",
".git/objects/e5/4811c0bc8dc565e7ad0506b9a919067aba3db2": "36715de5a94fa8d8d2fc91719fdf70eb",
".git/objects/e2/92b33c776e3c3911e16867e2a7432751ba4912": "398ccda9e29bfda6a382d391c0810294",
".git/objects/f4/7c7f4521f7dde53a6f7a17922128eddf43594f": "a30a26eb42ed58da3ad9adf4b126d726",
".git/objects/f4/dcc7008bf8469052fc04b18a8281a7ecc61772": "7bcfddbb8932ac62059027965d7b3d8e",
".git/objects/c7/347a608b87d3dd951ec95f71e067240f285ab0": "bb7a066e4d850ea0d5ddaafcb691cf88",
".git/objects/c0/dda8749ad55727ea4cb1f275140d45006f3b2e": "4ef0f3096a074e670dac09122989c311",
".git/objects/c0/1c1757341ed483dbca01e6faa425620939bd3e": "64d9a5a6b1c65b81aa70d06e202351cc",
".git/objects/c0/bc391bd9d9c6af1453edfc19fdf92fa2239418": "cf91de82c7839ab63d4d55fbbb332c6d",
".git/objects/ee/04f84f5a7be60e5f9cb8e91a82c20aaff45cfe": "a0c59e3e594f8c49588ae865d67840b6",
".git/objects/ee/b7147707d3009fbbb0ecc1848226a1f1d7ecce": "64a98e3a54fec9dcc02ad75b70e54161",
".git/objects/c9/c46c2da5bfe1bfdd8ab52b7f28fa35079c35c3": "038315a696fdddf11ee212078b42a097",
".git/objects/fc/265bcb1a0b43373dde4fad0f422ac8d9ac39ec": "e46ed460a00be3b3d66099cacb48591f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f2/8c2f46951dd16ba34fda7389d36c756045f918": "fd5014b436cb931c4d5e1292071b1c0d",
".git/objects/f2/b92494d7491d601f37a9df7a1633f771b5ec90": "9087dbbb6f2a5334d0503f6d7f917081",
".git/objects/f2/00030d3923f7fdbbb1b950bf5dbb2fcec59b7a": "798cffff165aa94896ceba1bb52e9404",
".git/objects/f5/7fefb9c6d36d1b7f2771e2aa95ea02c48175b0": "82ada8885a1e18a4a5a6524a448b3a10",
".git/objects/f5/5b09d4a52a740a8c1189b316f5759d16e945b9": "3e3fdb661ab9716704229e156d381cfd",
".git/objects/f5/3df438d150da36dadcba65cf686ba5f3b8612b": "4b5367c1c4cd48b337f003a47167454d",
".git/objects/e3/1264c03ce75f0ae550a2ce99c4c9432f822954": "cdb206c9b3378b2e9f06927f358c97c2",
".git/objects/e3/22bbc573c0ecac0dfc97d393c29fdef0001082": "7fa24d939bde41336a3cc56b45f555db",
".git/objects/e3/bbdb8d0f8ae7b1594e66143960b0c360c83dbb": "7a1c1534a32e193aee4b9bae521be620",
".git/objects/ca/2ad2273cc43ec22995f18f4a10c0253c0b9be3": "1fa94d9b37afa9d66e34de2819ece79a",
".git/objects/ca/eab8d0edb6598654ba52523b74ebc60cd932ce": "060c37c9b0c787924c9fc1e0d7d9ed35",
".git/objects/e4/44b399becedb8968e6fa2d0e82edd6ab1d7e8e": "55848af8db1619da5bbb6e2067ddc25c",
".git/objects/fe/90e1a2fe60ca914e5e1f4a8978c6fd224d5855": "e637bcbdaf7934f8b689e1e88eaeac72",
".git/objects/fe/60b8eac936a0a750f841306dd7c92f4760893a": "5900d1affede58f3706c0b39e98de874",
".git/objects/c8/27f08e0116df390467044b0ce0268cd46f8ea7": "f2a9e13d065936fdb7a05ea50c96d72f",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/7fb90a732d177291c0161f76cc65544a6d0e15": "9fa1af7c14103f2d67f9edf079617431",
".git/objects/27/3faeb766a8d66c1e5bd20c80ccd43824e0ef46": "729b3cdaea7e0850185f8de33f6472e0",
".git/objects/11/a26112dc283c8ab01bf7c52d1bb335c6b68c9a": "e632f8b402a2af943255de0edaac5482",
".git/objects/11/a283db22bfe15c12249b8d46acc81d3631e24d": "6c213fec336a6756caca06b2233d94d4",
".git/objects/7d/b533b1a78e4c57b3608ca2d766290a92a6e60d": "4745a19c2fec1625c3b7405bdcf8d5a1",
".git/objects/7d/66400f11874623d71e561ff9cb1a097d3acaab": "1e650830ce9d9aee96b03477ad480641",
".git/objects/7d/23b194ecfe1a0b3069d2a8af809f7a90e76456": "c2af07ba0e8db14e88bf326e7b317d97",
".git/objects/29/e7f403d36ff596a980ecf9855f2331cdcff770": "1053668f33ca1abead5b67a2bddd9a2f",
".git/objects/16/67c00586fe8ddb5d34cd25764364e7136431c9": "fe3dc5eaaa3bbfa81c9fe94d3b97d5f2",
".git/objects/42/1f883461560a773791b8e0bd2699c7b9a007d6": "b5a4004ec4fb400ce29ac4b39bb15411",
".git/objects/89/bd718635350aab6405de6a142ce1c487d9033c": "6ae44e4e386dd2d177009db23e3e2149",
".git/objects/45/0bcf6eb9d1605e9e4cb4025155086f09e20511": "2a31794e8b32b364a4fc64daa71def28",
".git/objects/1f/c641d444fe728740ac2d529b03930a06a5024b": "f0a35d8f1c91c7648b80a3630018b0ac",
".git/objects/73/43e3df078938d7655b292d5b10f1508a95ee6d": "348bb8e88c0ae010c82587a656a9b5fe",
".git/objects/87/91a1655b53aeb6b9d8f3598039e016cc7d1c1d": "f8b34e2332dcb1de6e3c27114474479c",
".git/objects/74/2da82e7d7f56489f42e9ef67527d243835d5d9": "c58ea4c5a7925002f6e9afe589111d6b",
".git/objects/1a/9087f2b379c20a82815d028152409a2d908763": "53f74467c41daeaf501267e99f88f480",
".git/objects/1a/86073e415a80b9f5c95e370dfd415892df489c": "5d0e5cc79cf6c9098585d7893f9b6f5b",
".git/objects/1a/4215d1cf1cedce8d59f0a7c33fff58e6ebe40a": "6e53316bdc224bc38aa802dacd31d029",
".git/objects/28/40712c2323a5f6d31ece5f4b297fe7ca516145": "2c7e8cf73855b2c204bb85fe74cbffbe",
".git/objects/28/889f83a76ea712d5c02df54137f8be1178e831": "ded2aad634b02f84a52f09841c8af961",
".git/objects/8f/925097fa32792ef6c641c4c6ce92c451da01d0": "9c213d62e16f48e7ee4b4778cc7ca504",
".git/objects/8a/2c78ade635213248ef400b5ab3bdcae980a33b": "4544acda7e476384e40a43f96c3dcb99",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e4b9b0f6806fd317a8a10ee4d169495fc0464d": "6e27207131c88479324495c9b3c2d8f5",
".git/objects/10/7f6c260dbaf7ca0645b8986f33e8844aaaf397": "ecbb35f67460d0a874fa3237c713483b",
".git/objects/10/5109219abddad1d95ba6c3ae5803ee34251031": "62fe391c2f6f3b009c89f5c49617f7f5",
".git/objects/19/e338bed0595eda1f0a7a7e822885fb94d68171": "34d12ff55d4e200212b9c768a81bd675",
".git/objects/19/61e555d3aea8690b0e912c62e1306671951c3c": "ab8a52865dc0c2763d65dcb650817f61",
".git/objects/4c/269ae472cc1fab89ed86b334c44e7faf4f3570": "f66c777db7a6f4fe81ccd636838aae8b",
".git/objects/4c/2b7bfd73e3e2e32732321a46d401c2acd16feb": "4cce2ea7c06c989010df130089196c21",
".git/objects/21/92426a4fb69437fae5c2bde8aa2ac0be9584c3": "1eeae04d16806eeff48d1c8d2d003f21",
".git/objects/21/5c844d1c8dce162fde6db61f5b1b428807b9e8": "776adb78436706f11941f0f9c400e1ab",
".git/objects/4d/233795aca2a2a9fe8aff3c16ab2462d2931a69": "60e4dda0fcbd46f58edce4d39207cc81",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/72/dabc24dd83bb0552d4a81dff728f734dedcd08": "72f1712f5324c93c8b07990a3d916c3e",
".git/objects/72/2ba425be0106f039e0783868bc42c784b54b71": "aa6a526e2cc32ec7220465c9b528775f",
".git/objects/72/93bd09dbd31c78767aadd5fd8d5f17c6a3e73d": "e1667e1702911b53d99137915d1ec1e9",
".git/objects/44/49ca3d26ff89f8aefcb9992b2c4ee05851b07c": "9bf4c30d644de0f9caad4b40096a084d",
".git/objects/2a/dafde6b55d8c8d233a142458d21d330c4ad80d": "f5b1ec3e53284f9b7c69d80d875915cb",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/43/1fcdf17153b7721cd0ab28195e80a2aee82d1b": "6f179430825f8f582de594244e0aa39e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/581c76613bbd226aa12a8bf501b9fee73afb7c": "605790c5abd70a3ea23caa7576f35e15",
".git/objects/6b/df15f45e2f2c972493221495771387716d612b": "c88f8e792690f049a1c6cb3926997cb6",
".git/objects/07/8d580a113788fbfbe6994ac3c506033805b0a3": "90d76296ceceb30b1963bb19ded6b4b6",
".git/objects/07/6f4add155b95f689f3259a5989a1a7174a09df": "a59678446cb48bbaaefbe12e76454cbb",
".git/objects/07/235c11a6401c7d4de7e6bad7d81db72719eb75": "c12afd583974e7bb1e798a9a72f30b78",
".git/objects/38/901abc270019efe80ad3fcff24cfdc1f9b50d8": "7c40844113fb9ce931a21ee345ba51fd",
".git/objects/00/a341e987176d19eba68d5419fa33375dd4b7f6": "03db0690ce20f76c50ec0d316cf55808",
".git/objects/00/d1ca67a0341f7bafa588eec942f207096b1f28": "2b986297f12d66222c63595c487744fc",
".git/objects/9a/9e73b51312f0dbca9643c9bad2ddd75be90257": "6fbdcdf29d84a54ff7a87391ac7f5829",
".git/objects/9a/e248d388619a9f07b0cb016a0252d59cc14fa7": "26ffbf8bfb97705e3382f0c85466e0d6",
".git/objects/36/1e8d48159d6863dc36fff6bd11fa99539aa814": "46f8a7222d3182af5e51eb4763bb83c6",
".git/objects/5c/7cdbfee77556d11884d57dfdbc5c77b633d804": "52a94c9ee0a0b190bea648f39a6de2e3",
".git/objects/5c/bce24be2f870ea12cb59a4830a6127fb280033": "6a390ac728ab843ec05471b44cbe6fec",
".git/objects/5c/48385d66f90fb810703eb1d31283a4e69d583a": "7086df1726d8ed645523ed68c2819b9e",
".git/objects/5d/fbf97c91a03d8c8efc5ea168f9f5b355b87815": "31e45e4ec150f1ee1d7f3893b49d3055",
".git/objects/5d/97b946e748f5e3275f17630181923558843ed3": "4ca3274df918ca72c8b497c63fb4f7a4",
".git/objects/31/c5c7716f1c5f123242c42340c0d6d70d87d1a9": "b6cb580fd2c25b8cc1b8657689747f12",
".git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
".git/objects/91/665e87d93722a2bba4fc2458a6586cae74beec": "c10d6e921ffe22c10053fdaf19642424",
".git/objects/62/d3ba42204753f86ff42609f9b829bb4020502e": "afc85781a2695228115d770710dac5ab",
".git/objects/62/0c0f81b5ff36ae04fc647d3cc630e944fee8fb": "8b2547492ef4b535b8a960f507424e90",
".git/objects/96/e3f86e2b7f5d62f3d6368d6ad16268d492653e": "3e8dbff2dd8f14391f483c8450dc6914",
".git/objects/96/662df80e7a6e00e26c53ecc6d0c2226ef93917": "a557beeb01750dccb4092b5bbb0ae0ec",
".git/objects/54/034a644d09f7cf031a80223e082bb4eb36147a": "96f87063a0e4fcb1e672771328ed7290",
".git/objects/54/ee9e0680aa680ef4d96a625d0add667f8971ec": "1a887dfac0d99927fd20544709c5f6b6",
".git/objects/54/c752cb2bacd14b1bd5506917eb908445cb49bb": "2a65403d4f8322c733fc8d995156f7da",
".git/objects/98/4d2d0e69354de4e8c8392bc6f7d4a616a3fe83": "358c381f6db60cc5aa9273649fe42a41",
".git/objects/98/e4ca35ecda043e379e041e67c66ffd96d8ff29": "f1d724defb9e56aab8e0ad059797bc89",
".git/objects/53/bfb409cc096f1b0642536c72f47a0058fca812": "4aa5e890b72d32c77627a70d43113f56",
".git/objects/53/15acdbf982dab2aa596558732af8c10ebefd8a": "d64f40626d1e520b291b431d5015e1f9",
".git/objects/5e/5e74f4ba08ca42b12e42d00481307b2280f28a": "5c5ff2b4b313f1643c5e27cedabed058",
".git/objects/5b/b00c974718da6d92096ae00b48ac6e2e927b8a": "bac69b6d1b3a7344d4bd7ae6364616cd",
".git/objects/5b/4f0216bb56a618eb1f8442a00b663aae8388a6": "36082e98ba5438fa15b9ce345e476d5c",
".git/objects/37/4ad63e64b735b9de7c8d7292a2816b3ef4e791": "df5173a2870310eb0d15412eb307cb18",
".git/objects/37/43415126e40eb7cb04777eb5b2d5804cae378e": "224ef76d1b94c1e5beb9faf1b52f9c6e",
".git/objects/06/c4102d72409c46ed43180ed8a88933be2910b8": "98aa285efdec8c7e0ae5465218b55b01",
".git/objects/6c/3b4a56a2bcb3326468c1fa3ace33c7398b8b1a": "66c5db3fa270f966ab5742904913cadb",
".git/objects/6c/ba5e38a49f484470fa8aa0c8439c93a00a31b8": "6bb780b1761b7e395b5f18abb877a7df",
".git/objects/99/adc47b35027d8ce2ff421f617ecae532f39744": "04400c690811225f86d80f83e241d457",
".git/objects/97/5d3effdd7d7fefef99b046753f6f8495a875d7": "446003a13492b3503fad643e2a6ea53b",
".git/objects/63/2616985ddf161a71ddddda8636092b0a3ad740": "dde8871641bea78c7e73cb5f7fafff3e",
".git/objects/0f/1fa47742d49de039030ba07a5e5de5a24f6987": "7f206485a0eee7692effd837153bee67",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/84b98aaee4cb76e109edcef6bcceb363cacbbe": "121a46a0a73453720c62c2699b5e2fbe",
".git/objects/90/250664463a1034102455f6b94f12349a04dff0": "5e70d55d4906986c4f1c720ddf72817e",
".git/objects/d3/25d5116a04ae04772b25f06fb30060686a41b5": "993f220aa6aa2ed04827715a4648a83f",
".git/objects/d4/6525b534522fd5ed95056c8c5fbec1a33a1649": "cd722359b79f46946e3a90e0aa9c2813",
".git/objects/d4/4c8809da3a5af289309639d4b815e1983d5b93": "524a692bc9f707da6b3bbe4d2dcb8179",
".git/objects/d4/9ac1005e6dbeee4a8ba83d60063f076aaaff08": "169b216ef3ef72f613ca231f7002cd5d",
".git/objects/ba/b732fecfa8694ea2a34ed22a339b161dc6e396": "d32d373bf32328f02e6db754eed2e0cf",
".git/objects/a0/742d1ac4b9bf5257bffa3921750ff720bf2439": "f51293d93b7a0c5bf9bfbec335b8d04c",
".git/objects/a7/d1a59ec2b262c79ccbcbecdb299cd4a2019af8": "1e8463498b25b500116723bd59bb422b",
".git/objects/b8/6a3a8e1368eb1a151261e5e1d520ed16ff49d2": "7d0f9d0c1917ae380e927f998738430b",
".git/objects/dd/90cf474720a972ab33ff48d01b027cebb852ec": "43618f4761425f69f4ea5c1b948998e8",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b6/c96a206e6468cd0fcd54cc428ab0aaf5f46988": "f8e6ccd6f457299420edce9b4f2c1067",
".git/objects/b6/15417d8cadd190f48affd07d370050af36fd7e": "bfa808ea279c0e4d4e4e2d711c79dade",
".git/objects/b6/da7d433451d944cb6733b29f089567af0bf1d3": "a48633f237de23ebc9dfb39aeef73dba",
".git/objects/d5/b0bb6ad2bc7cdd74fcb547aba724e69d88bec0": "17449fa2ec0a13b60dd53c084e663e6d",
".git/objects/d5/ecde6123ebd4a6613be78d83f3822a5d1eca1a": "4db3a0b65fd83ad272417f3b87ec68b7",
".git/objects/aa/1e23c7d0681db844d49fd116f651523abfd5e7": "db8131bb37da0036f823a1bc17d43dd4",
".git/objects/b7/ad8742dd2fe93c699441d4c3f8e6d3e937b428": "1000aa9859dda2872af665d40c7c76f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ef235f255c817d9759f0182a6637d3fa49e9df": "050d37bb8e4f1fcae56b69b19c23300f",
".git/objects/db/879ff5717476b5a9402005e76d1861712e08d8": "1cab2b2d53a7df98cf93d1542a1b7f27",
".git/objects/de/6c7da72db246b8a32a968ea57342657340b400": "920a07f048822955a3a88f258f95911f",
".git/objects/de/1b9e1a35b835581d8b073608299fa931d5b242": "314e39df1e6a68e30d66fd5f9bc5e1fc",
".git/objects/b9/21654ee1f49212e21dea77c0ca90476eed094f": "3b4f21e5e5ecd56d64b0950086623771",
".git/objects/ef/01ddc0a371dc3a70a131cf263b49eeeba4a36a": "921c1904965f304da78f373ce12bb456",
".git/objects/c4/157ad2851421b229075a29bf580c078b10f277": "445876cd5c66a0b315cccd203eb9ab41",
".git/objects/c4/67eb101337a6b0b78d7673c710ee924b7a1258": "e7a7dcda4b23d76b97368374fc966d44",
".git/objects/cd/ed0c09cb9e304d3f3e90bfe8968676d7e4c0ec": "8c742ecc65671fa94090a20323817ea0",
".git/objects/cc/6be04e125a897c36463cea17180a575d09fd77": "b71d7c7544bbbda546ea6cc58a8e06ce",
".git/objects/f9/656d85b998e804f039d622451e4713440ecc6e": "c45cffb8eea35bebdfb0bfde4b42325a",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f7/012db271dc05291519764e39e6b231d6e57a6d": "0abc73735e29cd8db14ac4b32fd1acb1",
".git/objects/f7/e183c1e7e25855d54c025c85e049aba68f3ee4": "334b4a2fd91f141cf2afba291bb569e3",
".git/objects/fa/7a059d6983a477af0e02e4e3a16cd26e46c8ab": "8725a01b8acd24d1ecd62fd37f020908",
".git/objects/fa/0e5b2db871eb0f9f4cc914c96c9eba0a2dd566": "c614ed6bd59cd0bfee66c7fa39351e79",
".git/objects/ff/5246964e318609ec6504cf1f39eddc8cebac76": "f14711aedee52c4c90c44a5d33146496",
".git/objects/ff/21331d6225fc3e394ac351d31a358b0b820d7c": "73ff1557f281b9fcf550ac2d7c17929e",
".git/objects/c5/9f8a65db8fc9303fe29e9bfd85f1a812a50069": "511333585d489350ad51ccff3914e8e2",
".git/objects/c5/9c427925fb5a155c403f16b33b48ce9897b984": "7d43cfbb9f630f9b98f269555667b547",
".git/objects/c2/0e5f15c921fe9e95de52031bee1dade53afafe": "a18599734d82651fc45e0e329233b616",
".git/objects/e9/10ded261b13ae5b5851a79e3c2f525e451f025": "d9283b9a165607343b96233880a84c70",
".git/objects/f1/1b644bebe90a04e4c8fd4bf1f5226911c9de66": "53d42ab59da28240c35f711dae8fc753",
".git/objects/e7/7ad9eedb5a6c04feb8696c16f2eb2f90e5b166": "60d56551d66bc23da12b1306cb544df0",
".git/objects/cb/059d3a8b815ddc347d37388fad388bd2c3ed8e": "6200cc3a1232afb5d855741cd45a3a82",
".git/objects/f8/02126ad52c7ee7ce4ded30e774fbea8801124d": "bd9dac88febc90778fec4fb29aad1186",
".git/objects/f8/215a659a9169ca09b4d54c9b84f413eadd5a48": "c912a619b68b1f3584f9045d0bfc58ed",
".git/objects/ce/21a9c87f68d36b7045ebf65b845e7417b7349b": "55e336a749d9e876b6ae9eb4840e7940",
".git/objects/46/dda6ebf1031b84ec8312a27b7320522704a2e9": "70c1db17dacf69d82218cf4a3eaab5ac",
".git/objects/2c/98d099b29c3995faeca8c5bf9e8b1fa94cf08d": "898f6243cc9e367372010207bbfb59bb",
".git/objects/2c/9659cdafb3e439569ad0a4f6dc3a3719039c15": "f460da5b4bce3de7f5abaeedcfe3605c",
".git/objects/83/8882bd8bf66d1f589672719e8e6ce0ee1e37bf": "372693116055209ec7448747bb1eabbd",
".git/objects/1b/867b1e1e3c3a819432651ceee2a67024dd8fae": "f4ae0b8d707c9b1f8d855f84cd5ec4a0",
".git/objects/1b/31d29602403abd74876939b05f9ecfae01624e": "64f7b2fb14f1746e33a927a004cd76e5",
".git/objects/77/1853d51f3b95edf3ae2d775a530e9871cf5593": "bdfcfc79527fe5c575a29a5dfa044e00",
".git/objects/77/eec4071e9bf41182fbc8a0b489c2304d24abc0": "b7f3316c9282f97ad99a126632da0aff",
".git/objects/77/f94219fd6b76369c5916159f1d347c1e1cea7a": "608f8747b1102355f82747ea792512a4",
".git/objects/77/eb547920f28ba4905839530bfaa4daae98878a": "da3d84b13efef091fadf09a6bcb2b361",
".git/objects/77/c6f9fce41c6057e023a5c6c10e2d2c1999861a": "4d5202abc6e71450d7cc476a1b28dc4e",
".git/objects/70/48f81ba2b2b965047b6d1af78e5397d0e1c0ae": "14c13bbe5c75d0cdfcc54deed05b9912",
".git/objects/1e/c99bdef24be996ca3e1b34ae0a7ee3defa0ef9": "53a82db125d5aea05323ceb8719361e7",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/23/6f599b24385d2ddf496c611906aef411a0038d": "3192690d69f10099065fe214e45173cb",
".git/objects/23/dad9ff032c67677ceff1eb3cd9a783d3e8c936": "e07e3495d04d22795a3c01b6701c1ff8",
".git/objects/23/1b5854d4dd8eed39dd0fbba4efb4e2e755fbc2": "8215de7fc99e6cced2bce4b7e89ce790",
".git/objects/4f/e8e45cd49b8aba6f8b2aedb453d6bfd8b662d1": "79c7c3195ddda3540da3d6d519ae8876",
".git/objects/4f/e47b8630e0b319c6d6c902a91c21176c05af71": "f289215c53de1a232544677d6a70846c",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/a5c583ef7534e1242783d7ef02039b2156d4f3": "9b4a82b690b263b5c02f8c7c4d39a616",
".git/objects/12/ae73d515d67ef6888f269d8746b94d66646143": "787e181725b2936938f8af99ed34c76c",
".git/objects/12/ecbf2c8e308537f51ce7aa9001f0669de45980": "def249c10768c9a1a32de4dd6d1c34c2",
".git/objects/8c/a7da1a11455bf2ba2772538de696fff40189d1": "9f1c110775a909415f2c9536466620d0",
".git/objects/85/29ca284f6735aebf3bda47e5fb436f8978436c": "e58d2c3f0eaf4879ffab6f868e331f49",
".git/objects/85/aee0f043b3b872bbb690f8c25c58ec175ca50b": "e85a7929a803c2af73d6aa1486178c21",
".git/objects/1d/60f3d7b88beac983ec9ca6ec09dd86feb2dc79": "718fb2c53d3cfee5cb491beaa40ff671",
".git/objects/1d/fe79bafaeac43f24250f895fdb8b9506918bc2": "805ab26c700f735a6558f9d57fcae879",
".git/objects/76/3d1b66a855796c0082c4fb5ae8d03e7d416bca": "e81acec64b6513a557e6029c411e5e5e",
".git/objects/82/e403c40fc0457cf7bf1336324b93e4a5c5c78b": "1f769160030715cbfbe112b5ac93804f",
".git/objects/82/8d7d2c033a1412ac084f2629ffb7749c0ad5ca": "3945314c2e08be71a8a3178a31061f8a",
".git/objects/82/27bbd316bb90e4c95d18753bed4f75ee7179ac": "6916f43412b814e118c27cbbd5112508",
".git/objects/82/0dde1f27405fc4168fdbe7e8efa3bf1c93316d": "f981df8d82684d760385a8dfe5283ded",
".git/objects/40/4a3f5723ed20f7d87f411f8413f932b34e737f": "57994c04f8e8a06a88cf8e6eedc4fc5d",
".git/objects/2e/a7e11f2c341583fd20ea11004639141db7f23b": "665c54bf2b8bf7a03023be650a5f30ff",
".git/objects/2e/45cee5204eb05df78a05efa66fb97e51818bce": "16519e3d5e4d08ea5ebf852a7847c52c",
".git/objects/2e/c9cdd6e576e7d21e303624402aa9bcda8da256": "9025a10fd14db3abb86c3058db4cded0",
".git/objects/47/0de303c88a1a8b9981ec6f6a1af612b8be58e3": "195c435d21af16c38d7053e449da0ab8",
".git/objects/78/1e15be5e944368dbee45bfcf527b0a654f10d7": "195539f08c459c55e08da3fec09c443d",
".git/objects/8b/cead167c0404fa619dc782565fb447ed89031a": "cd3e9d9dfa4c419184c59ea3d601efa9",
".git/objects/8b/9914ac63a8fa20dae4327d8d73c20832bd02fb": "417cfc363f16f1709eb84b9e509afd50",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7f/5cc60f18a0676af380f532eed34523505afb05": "db2375975337a3d5d3e85ac706c9e393",
".git/objects/7f/dfa499bab55d056ddfd2d1aec6300a821cabf0": "42bb91e54f27d1789ffe8238b7892555",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/14/3d33affd4b26fcae758c1fafca8cfdcf869dbf": "048c59993d2d68bcc4eb3fabde67b0ba",
".git/objects/14/9b8f85f800457c6289d98bf48b75b7a972cb0a": "d7e56d6b0d88b2a3b066d4119009586e",
".git/objects/8e/fbf2335ca6f0eb4fe06a2f6a6a0f38bbe20055": "32d441d7f1d6a22a5fbd79f60e20db24",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31596cdbe4283e2d34b16b9dfa12271f",
".git/logs/refs/heads/master": "31596cdbe4283e2d34b16b9dfa12271f",
".git/logs/refs/remotes/origin/master": "94eb36dda539fde8feb190f43e73b6b5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "a9ac2b88b5d8a0396ee0b00fbcb75c4e",
".git/refs/remotes/origin/master": "a9ac2b88b5d8a0396ee0b00fbcb75c4e",
".git/index": "311922dccf0f2b67eae545ac8645f869",
".git/COMMIT_EDITMSG": "2f9f59f6b4f2a9c99fb52a2684996b8c",
".git/FETCH_HEAD": "4c7a1ce58cc492010b942e2a742572e5",
"assets/AssetManifest.json": "00d5e28d0af68ade10fd25c08d22685f",
"assets/NOTICES": "51c8f781bf39dd8d3a9033da8663882a",
"assets/FontManifest.json": "1a4d97a3e8e8e82e2d0233b865c5014b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/img/ControlL.png": "efae8721a518edd8041156f75a9bed03",
"assets/assets/img/logo-2.png": "100f2037a53bf16d0157a6975103a306",
"assets/assets/img/logo-1.png": "41d24d2907bbae09c1b2d1fb54ec16c8",
"assets/assets/img/logo.png": "e5820b4ffa79796b294cff23fb571672",
"assets/assets/img/Rpic/RZ04.jpg": "439cbac2b10acef0ae66b96dfe4053fc",
"assets/assets/img/Rpic/RZ05.jpg": "5eae78831649f7b8bbc50c436410e16c",
"assets/assets/img/Rpic/RZ06.jpg": "cdcb5e9dc38639b46a8bc6dfc56f75bf",
"assets/assets/img/Rpic/RZ02.jpg": "af5e0fb2d412d5ca3bbd4388cdad75b4",
"assets/assets/img/Rpic/RZ03.jpg": "fbae3035bc621889ea60b1246184164d",
"assets/assets/img/Rpic/RZ01.jpg": "001d29ffd2f289712a7d28a5e8d33a00",
"assets/assets/img/ControlR.png": "cd1b1e1828ffb4e983f350cf0ea4fe69",
"assets/assets/img/bg.jpg": "dcb98426551d07ed24452e06d7196f8b",
"assets/assets/fonts/arfonts/KufiBold.ttf": "9e1878ea22247fbe4536f93897771502",
"assets/assets/fonts/arfonts/KufiRegular.ttf": "a0c3e1769ab6afabe688540dfa7047cd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
