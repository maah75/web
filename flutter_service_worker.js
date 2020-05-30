'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b4afda5ff0c29c18ff7f57604513e8be",
"/": "b4afda5ff0c29c18ff7f57604513e8be",
"main.dart.js": "e06e3ab76db9b55a45798ef1804b2457",
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
".git/objects/0c/b975bc03dfe0d7e26ac3637a1cff971e6507bd": "d5123db5e5193f7251f250b3d6b70fdf",
".git/objects/0c/3eff03aefdcbc81529d113458495ed7c28fdaa": "0f0c33b0b7a426fea6aa6f40f16009a8",
".git/objects/66/d3e601eee4a915bd4d0330f332359ac1ca24e1": "18fa02495a7ed2f086c7c179ef648acd",
".git/objects/50/7bbf1cf3f223028da9b9601e3048d2d1072006": "fd2682fe3dacf22acb5b3b0f540d558e",
".git/objects/57/9dfbc73bf7e660f395b7644433773ea05065ca": "fa3a85ff788c33dba6c7c2f2132ac4b2",
".git/objects/57/eedacd24632154cb6c7302be2b154c1b6d1612": "eb5d386c8e3b18b732979b90033224bd",
".git/objects/3b/9b1d02e38c2af81b5d55f8b1910b7ad6ba7e42": "d4497debf3cf97dc1ae7592c842f4f53",
".git/objects/03/48eab13fa93d619f28ab2d2cbf6c253ce97394": "890307b2785668baec09b3258753eaa9",
".git/objects/9b/15988a15fc5ff7d1332496d67626fbe3b30357": "d8377f718b90898d018965bea4738655",
".git/objects/04/ecd6ae590a753aef96970a33f5c927a394b017": "39414ac49bec4b8e01b8202d5be99c6a",
".git/objects/6a/706d9e3d9bb891cded18e7ca0ae865a991fe58": "d3ddbf44b7b70c7b1a1aece6a0d2a21d",
".git/objects/35/0424b21d753a52b7610389aa0b7b1393dff6c5": "d731ab9c0a7787a0890195fba182e620",
".git/objects/35/105276b32abb48cfb77a7019cd72247d2d47ee": "4301e30825810bc12bae3147e778d9af",
".git/objects/69/51f6486231f27236d2bd0a52765659e4a64323": "4ba947cadb896a78700a6cfa18ea3e4f",
".git/objects/69/dcb4040d8b61ee477bcd0037e20963dedcb8c2": "af21c399f4aad08ec1b9322131e3c757",
".git/objects/51/bcbfe3404a085be892980a9f8f92d0426d64a3": "89cfb2b0c9968daebb958ec8a43cc80e",
".git/objects/51/afeadb120bda95fa67e2dbbd335cd6f81e3ffb": "0afd201ca4adf95689abe29edf90bc13",
".git/objects/3d/3e1895c7d0571c7a3a6a82d237c96014065c97": "b1fd6b87f539071b3274370b4f926f54",
".git/objects/58/d29e790846623582f8d3f9835011ea778c79ff": "3169b3d6a1b1854ef6a759d4a6e452f2",
".git/objects/67/b12b31fb7ab1a19878f7f7e67c578738d19c40": "19d49ceec664bd0d572e617e6a5eb75d",
".git/objects/67/36023ce16c56b43c5c0f3602144f4a99cddcca": "18ce0e9166a36d6023d6721b6b4230a9",
".git/objects/0b/aa863d71bd6f0796f8ca3da5d74d24f0934f43": "537b2b078291e4ee2d3bf6c6abae18b5",
".git/objects/0b/34670ab09d5f72233e09bc098ba55e69b22944": "49cb14d3b2fb7f2f2f925c5dbea3b23a",
".git/objects/94/57e04de59ae04e809085de95bcde56ae435d4f": "6e4d3b576ac2248d4a744d03bdd80213",
".git/objects/0e/4ac9a944b55b51e20ae944416448204f08730e": "b7ae11fb2ed86303f78897b9c15ff2ed",
".git/objects/60/ea6f59179909dc9b772156583e1fc0edaa98a5": "ca7c9dc0b0d96ce44c6b08d385101d0b",
".git/objects/34/edebcb33f10ff25c8d710861741c336d371ff5": "96ac3c061772c10b433b15afa59588ba",
".git/objects/34/2683ededf59ab6a3ce0c8dff8b7dfcd65f6d44": "f1dbaad850fcfe16056021f6b76308a6",
".git/objects/33/1c65b030f48ee87dbf514e23191158536075fa": "18835d496233f63d21aa36a78bab0859",
".git/objects/05/dc76238ca01795cadf4c5c1c9a4ee504b3f93b": "661f7557f8e2ee8029386766efc3da31",
".git/objects/05/4d601951cec2babf6102c3b42e6b313cb328cf": "d54b700a24688ed639a6293c976b335e",
".git/objects/05/b7cc22dbba31c5ca64ee368558614f420f896f": "c3a475901b5902c1863b1e0e70beb89d",
".git/objects/a4/9b7536924c0469cfc6c5891df41f15f29fa490": "5b8977ace7f00a4c56472ff10588228b",
".git/objects/a4/1718e37887eaee89b9e895a928e1a65a932b38": "51bb51092e416b235de0c268642e369b",
".git/objects/a3/e2cfed66dddc196d499824fa4593a3eee1c7ec": "89755d674db24b512452a43dd3feaef9",
".git/objects/b5/a38e05aaa07805e2352654a6f75fa7167f40a8": "a7faa12185d7d3a55b0a80599441e746",
".git/objects/b5/8731b5d134659d5a33e57b05792b5c6fa9b184": "45bcf6aa1d51466a920947d4a6e3fccc",
".git/objects/b5/63b01dff41bdd56b3dbbfdfca9e4afb26d51f8": "e12722d5df0722bc4e00a51e8cac5ff7",
".git/objects/b2/0609835f2c28614e629817cd73b274eb7df2f4": "a268bdc415135bd99f5aedaa05db3c96",
".git/objects/bb/ebf26d347fab863dffad4afe95db101818c3a9": "da95ca6fb7b6f4ac58673db70c2a8cd9",
".git/objects/d7/d0173b27b987fa4d338cffebaee08aa232bcf2": "d1a613c930a13b5cf677cf0d72e1f4b9",
".git/objects/d0/e923e54a0f121740b8bc65801e119cd86dacd0": "74a8644ddbd920092f91b1d9fca09379",
".git/objects/be/410da7e4f0f3d4551e07ab1154a91ee135de08": "ea1f9c485f3f0345501ce46f34a44082",
".git/objects/b3/aaabab8f08c738641da84bce32134c0f7fd537": "cf321a0f7331d8b1602e1ee0b5723de7",
".git/objects/b3/a844b4f5b6ace56c10dd4a609c3f9b9c93c4dd": "31ab4a667d48a778bbe2a2cfee25448f",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/da/c347c4c6bac796dba7c7768a4150cb0974eda0": "e157fb65ef666db97256aa145b067248",
".git/objects/b4/344bc31ca0ca2541e5380b20518910a1642edf": "a2a1957dcf2368f4b93f32c74743a0a2",
".git/objects/b4/efe020387759373d4970661d8a3b3236bc95ca": "888dc1ce2f4006145fce137b1387dcaa",
".git/objects/a2/8e2fdc7816c7e2a4b2cb2393293ecfa0a770d4": "33214a5e1f33c2dbe21ff7896e9d629d",
".git/objects/a5/afb920cb6e7bc7be4f5356f8cb0e4557f671b3": "b5f1a7393e123fd583451e54a605f257",
".git/objects/ae/83a6ce2d5fcb93fc5bd78eba9086a4682d459b": "dabdb71d38f2c64199a73cc15b95d4a1",
".git/objects/d8/7f604132927b40754aa94d77f4a0f135df6e22": "aa996c6d2ec07436f341f37b81d85492",
".git/objects/e5/9b30d1f99801a4355fc159bdc534c29f88c08a": "c0c7a4841815fa74777c3792ab4a76a8",
".git/objects/e5/4811c0bc8dc565e7ad0506b9a919067aba3db2": "36715de5a94fa8d8d2fc91719fdf70eb",
".git/objects/f4/dcc7008bf8469052fc04b18a8281a7ecc61772": "7bcfddbb8932ac62059027965d7b3d8e",
".git/objects/c0/dda8749ad55727ea4cb1f275140d45006f3b2e": "4ef0f3096a074e670dac09122989c311",
".git/objects/c0/1c1757341ed483dbca01e6faa425620939bd3e": "64d9a5a6b1c65b81aa70d06e202351cc",
".git/objects/ee/b7147707d3009fbbb0ecc1848226a1f1d7ecce": "64a98e3a54fec9dcc02ad75b70e54161",
".git/objects/c9/c46c2da5bfe1bfdd8ab52b7f28fa35079c35c3": "038315a696fdddf11ee212078b42a097",
".git/objects/fc/265bcb1a0b43373dde4fad0f422ac8d9ac39ec": "e46ed460a00be3b3d66099cacb48591f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f2/00030d3923f7fdbbb1b950bf5dbb2fcec59b7a": "798cffff165aa94896ceba1bb52e9404",
".git/objects/f5/7fefb9c6d36d1b7f2771e2aa95ea02c48175b0": "82ada8885a1e18a4a5a6524a448b3a10",
".git/objects/f5/5b09d4a52a740a8c1189b316f5759d16e945b9": "3e3fdb661ab9716704229e156d381cfd",
".git/objects/f5/3df438d150da36dadcba65cf686ba5f3b8612b": "4b5367c1c4cd48b337f003a47167454d",
".git/objects/e3/1264c03ce75f0ae550a2ce99c4c9432f822954": "cdb206c9b3378b2e9f06927f358c97c2",
".git/objects/e3/22bbc573c0ecac0dfc97d393c29fdef0001082": "7fa24d939bde41336a3cc56b45f555db",
".git/objects/e3/bbdb8d0f8ae7b1594e66143960b0c360c83dbb": "7a1c1534a32e193aee4b9bae521be620",
".git/objects/ca/eab8d0edb6598654ba52523b74ebc60cd932ce": "060c37c9b0c787924c9fc1e0d7d9ed35",
".git/objects/e4/44b399becedb8968e6fa2d0e82edd6ab1d7e8e": "55848af8db1619da5bbb6e2067ddc25c",
".git/objects/fe/90e1a2fe60ca914e5e1f4a8978c6fd224d5855": "e637bcbdaf7934f8b689e1e88eaeac72",
".git/objects/fe/60b8eac936a0a750f841306dd7c92f4760893a": "5900d1affede58f3706c0b39e98de874",
".git/objects/c8/27f08e0116df390467044b0ce0268cd46f8ea7": "f2a9e13d065936fdb7a05ea50c96d72f",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/3faeb766a8d66c1e5bd20c80ccd43824e0ef46": "729b3cdaea7e0850185f8de33f6472e0",
".git/objects/11/a283db22bfe15c12249b8d46acc81d3631e24d": "6c213fec336a6756caca06b2233d94d4",
".git/objects/7d/66400f11874623d71e561ff9cb1a097d3acaab": "1e650830ce9d9aee96b03477ad480641",
".git/objects/16/67c00586fe8ddb5d34cd25764364e7136431c9": "fe3dc5eaaa3bbfa81c9fe94d3b97d5f2",
".git/objects/42/1f883461560a773791b8e0bd2699c7b9a007d6": "b5a4004ec4fb400ce29ac4b39bb15411",
".git/objects/89/bd718635350aab6405de6a142ce1c487d9033c": "6ae44e4e386dd2d177009db23e3e2149",
".git/objects/45/0bcf6eb9d1605e9e4cb4025155086f09e20511": "2a31794e8b32b364a4fc64daa71def28",
".git/objects/1f/c641d444fe728740ac2d529b03930a06a5024b": "f0a35d8f1c91c7648b80a3630018b0ac",
".git/objects/73/43e3df078938d7655b292d5b10f1508a95ee6d": "348bb8e88c0ae010c82587a656a9b5fe",
".git/objects/87/91a1655b53aeb6b9d8f3598039e016cc7d1c1d": "f8b34e2332dcb1de6e3c27114474479c",
".git/objects/74/2da82e7d7f56489f42e9ef67527d243835d5d9": "c58ea4c5a7925002f6e9afe589111d6b",
".git/objects/1a/86073e415a80b9f5c95e370dfd415892df489c": "5d0e5cc79cf6c9098585d7893f9b6f5b",
".git/objects/28/40712c2323a5f6d31ece5f4b297fe7ca516145": "2c7e8cf73855b2c204bb85fe74cbffbe",
".git/objects/8a/2c78ade635213248ef400b5ab3bdcae980a33b": "4544acda7e476384e40a43f96c3dcb99",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e4b9b0f6806fd317a8a10ee4d169495fc0464d": "6e27207131c88479324495c9b3c2d8f5",
".git/objects/10/7f6c260dbaf7ca0645b8986f33e8844aaaf397": "ecbb35f67460d0a874fa3237c713483b",
".git/objects/19/e338bed0595eda1f0a7a7e822885fb94d68171": "34d12ff55d4e200212b9c768a81bd675",
".git/objects/21/92426a4fb69437fae5c2bde8aa2ac0be9584c3": "1eeae04d16806eeff48d1c8d2d003f21",
".git/objects/21/5c844d1c8dce162fde6db61f5b1b428807b9e8": "776adb78436706f11941f0f9c400e1ab",
".git/objects/4d/233795aca2a2a9fe8aff3c16ab2462d2931a69": "60e4dda0fcbd46f58edce4d39207cc81",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/72/93bd09dbd31c78767aadd5fd8d5f17c6a3e73d": "e1667e1702911b53d99137915d1ec1e9",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/43/1fcdf17153b7721cd0ab28195e80a2aee82d1b": "6f179430825f8f582de594244e0aa39e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/8d580a113788fbfbe6994ac3c506033805b0a3": "90d76296ceceb30b1963bb19ded6b4b6",
".git/objects/07/6f4add155b95f689f3259a5989a1a7174a09df": "a59678446cb48bbaaefbe12e76454cbb",
".git/objects/07/235c11a6401c7d4de7e6bad7d81db72719eb75": "c12afd583974e7bb1e798a9a72f30b78",
".git/objects/9a/e248d388619a9f07b0cb016a0252d59cc14fa7": "26ffbf8bfb97705e3382f0c85466e0d6",
".git/objects/36/1e8d48159d6863dc36fff6bd11fa99539aa814": "46f8a7222d3182af5e51eb4763bb83c6",
".git/objects/5c/7cdbfee77556d11884d57dfdbc5c77b633d804": "52a94c9ee0a0b190bea648f39a6de2e3",
".git/objects/5d/fbf97c91a03d8c8efc5ea168f9f5b355b87815": "31e45e4ec150f1ee1d7f3893b49d3055",
".git/objects/5d/97b946e748f5e3275f17630181923558843ed3": "4ca3274df918ca72c8b497c63fb4f7a4",
".git/objects/31/c5c7716f1c5f123242c42340c0d6d70d87d1a9": "b6cb580fd2c25b8cc1b8657689747f12",
".git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
".git/objects/91/665e87d93722a2bba4fc2458a6586cae74beec": "c10d6e921ffe22c10053fdaf19642424",
".git/objects/96/e3f86e2b7f5d62f3d6368d6ad16268d492653e": "3e8dbff2dd8f14391f483c8450dc6914",
".git/objects/54/034a644d09f7cf031a80223e082bb4eb36147a": "96f87063a0e4fcb1e672771328ed7290",
".git/objects/54/ee9e0680aa680ef4d96a625d0add667f8971ec": "1a887dfac0d99927fd20544709c5f6b6",
".git/objects/54/c752cb2bacd14b1bd5506917eb908445cb49bb": "2a65403d4f8322c733fc8d995156f7da",
".git/objects/98/4d2d0e69354de4e8c8392bc6f7d4a616a3fe83": "358c381f6db60cc5aa9273649fe42a41",
".git/objects/98/e4ca35ecda043e379e041e67c66ffd96d8ff29": "f1d724defb9e56aab8e0ad059797bc89",
".git/objects/5e/5e74f4ba08ca42b12e42d00481307b2280f28a": "5c5ff2b4b313f1643c5e27cedabed058",
".git/objects/5b/4f0216bb56a618eb1f8442a00b663aae8388a6": "36082e98ba5438fa15b9ce345e476d5c",
".git/objects/37/43415126e40eb7cb04777eb5b2d5804cae378e": "224ef76d1b94c1e5beb9faf1b52f9c6e",
".git/objects/06/c4102d72409c46ed43180ed8a88933be2910b8": "98aa285efdec8c7e0ae5465218b55b01",
".git/objects/99/adc47b35027d8ce2ff421f617ecae532f39744": "04400c690811225f86d80f83e241d457",
".git/objects/97/5d3effdd7d7fefef99b046753f6f8495a875d7": "446003a13492b3503fad643e2a6ea53b",
".git/objects/0f/1fa47742d49de039030ba07a5e5de5a24f6987": "7f206485a0eee7692effd837153bee67",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/84b98aaee4cb76e109edcef6bcceb363cacbbe": "121a46a0a73453720c62c2699b5e2fbe",
".git/objects/d3/25d5116a04ae04772b25f06fb30060686a41b5": "993f220aa6aa2ed04827715a4648a83f",
".git/objects/d4/6525b534522fd5ed95056c8c5fbec1a33a1649": "cd722359b79f46946e3a90e0aa9c2813",
".git/objects/d4/4c8809da3a5af289309639d4b815e1983d5b93": "524a692bc9f707da6b3bbe4d2dcb8179",
".git/objects/d4/9ac1005e6dbeee4a8ba83d60063f076aaaff08": "169b216ef3ef72f613ca231f7002cd5d",
".git/objects/ba/b732fecfa8694ea2a34ed22a339b161dc6e396": "d32d373bf32328f02e6db754eed2e0cf",
".git/objects/a7/d1a59ec2b262c79ccbcbecdb299cd4a2019af8": "1e8463498b25b500116723bd59bb422b",
".git/objects/b8/6a3a8e1368eb1a151261e5e1d520ed16ff49d2": "7d0f9d0c1917ae380e927f998738430b",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b6/c96a206e6468cd0fcd54cc428ab0aaf5f46988": "f8e6ccd6f457299420edce9b4f2c1067",
".git/objects/d5/b0bb6ad2bc7cdd74fcb547aba724e69d88bec0": "17449fa2ec0a13b60dd53c084e663e6d",
".git/objects/d5/ecde6123ebd4a6613be78d83f3822a5d1eca1a": "4db3a0b65fd83ad272417f3b87ec68b7",
".git/objects/b7/ad8742dd2fe93c699441d4c3f8e6d3e937b428": "1000aa9859dda2872af665d40c7c76f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/1b9e1a35b835581d8b073608299fa931d5b242": "314e39df1e6a68e30d66fd5f9bc5e1fc",
".git/objects/ef/01ddc0a371dc3a70a131cf263b49eeeba4a36a": "921c1904965f304da78f373ce12bb456",
".git/objects/c4/157ad2851421b229075a29bf580c078b10f277": "445876cd5c66a0b315cccd203eb9ab41",
".git/objects/c4/67eb101337a6b0b78d7673c710ee924b7a1258": "e7a7dcda4b23d76b97368374fc966d44",
".git/objects/cd/ed0c09cb9e304d3f3e90bfe8968676d7e4c0ec": "8c742ecc65671fa94090a20323817ea0",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f7/012db271dc05291519764e39e6b231d6e57a6d": "0abc73735e29cd8db14ac4b32fd1acb1",
".git/objects/f7/e183c1e7e25855d54c025c85e049aba68f3ee4": "334b4a2fd91f141cf2afba291bb569e3",
".git/objects/fa/7a059d6983a477af0e02e4e3a16cd26e46c8ab": "8725a01b8acd24d1ecd62fd37f020908",
".git/objects/ff/21331d6225fc3e394ac351d31a358b0b820d7c": "73ff1557f281b9fcf550ac2d7c17929e",
".git/objects/c5/9f8a65db8fc9303fe29e9bfd85f1a812a50069": "511333585d489350ad51ccff3914e8e2",
".git/objects/c2/0e5f15c921fe9e95de52031bee1dade53afafe": "a18599734d82651fc45e0e329233b616",
".git/objects/e9/10ded261b13ae5b5851a79e3c2f525e451f025": "d9283b9a165607343b96233880a84c70",
".git/objects/f1/1b644bebe90a04e4c8fd4bf1f5226911c9de66": "53d42ab59da28240c35f711dae8fc753",
".git/objects/e7/7ad9eedb5a6c04feb8696c16f2eb2f90e5b166": "60d56551d66bc23da12b1306cb544df0",
".git/objects/f8/215a659a9169ca09b4d54c9b84f413eadd5a48": "c912a619b68b1f3584f9045d0bfc58ed",
".git/objects/ce/21a9c87f68d36b7045ebf65b845e7417b7349b": "55e336a749d9e876b6ae9eb4840e7940",
".git/objects/2c/9659cdafb3e439569ad0a4f6dc3a3719039c15": "f460da5b4bce3de7f5abaeedcfe3605c",
".git/objects/83/8882bd8bf66d1f589672719e8e6ce0ee1e37bf": "372693116055209ec7448747bb1eabbd",
".git/objects/1b/31d29602403abd74876939b05f9ecfae01624e": "64f7b2fb14f1746e33a927a004cd76e5",
".git/objects/77/1853d51f3b95edf3ae2d775a530e9871cf5593": "bdfcfc79527fe5c575a29a5dfa044e00",
".git/objects/77/eb547920f28ba4905839530bfaa4daae98878a": "da3d84b13efef091fadf09a6bcb2b361",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/23/1b5854d4dd8eed39dd0fbba4efb4e2e755fbc2": "8215de7fc99e6cced2bce4b7e89ce790",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/a5c583ef7534e1242783d7ef02039b2156d4f3": "9b4a82b690b263b5c02f8c7c4d39a616",
".git/objects/12/ae73d515d67ef6888f269d8746b94d66646143": "787e181725b2936938f8af99ed34c76c",
".git/objects/1d/fe79bafaeac43f24250f895fdb8b9506918bc2": "805ab26c700f735a6558f9d57fcae879",
".git/objects/82/e403c40fc0457cf7bf1336324b93e4a5c5c78b": "1f769160030715cbfbe112b5ac93804f",
".git/objects/82/27bbd316bb90e4c95d18753bed4f75ee7179ac": "6916f43412b814e118c27cbbd5112508",
".git/objects/82/0dde1f27405fc4168fdbe7e8efa3bf1c93316d": "f981df8d82684d760385a8dfe5283ded",
".git/objects/40/4a3f5723ed20f7d87f411f8413f932b34e737f": "57994c04f8e8a06a88cf8e6eedc4fc5d",
".git/objects/2e/45cee5204eb05df78a05efa66fb97e51818bce": "16519e3d5e4d08ea5ebf852a7847c52c",
".git/objects/78/1e15be5e944368dbee45bfcf527b0a654f10d7": "195539f08c459c55e08da3fec09c443d",
".git/objects/8b/cead167c0404fa619dc782565fb447ed89031a": "cd3e9d9dfa4c419184c59ea3d601efa9",
".git/objects/8b/9914ac63a8fa20dae4327d8d73c20832bd02fb": "417cfc363f16f1709eb84b9e509afd50",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7f/5cc60f18a0676af380f532eed34523505afb05": "db2375975337a3d5d3e85ac706c9e393",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/14/3d33affd4b26fcae758c1fafca8cfdcf869dbf": "048c59993d2d68bcc4eb3fabde67b0ba",
".git/objects/8e/fbf2335ca6f0eb4fe06a2f6a6a0f38bbe20055": "32d441d7f1d6a22a5fbd79f60e20db24",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "57d6bb1476299afae38b8b5a048f936e",
".git/logs/refs/heads/master": "57d6bb1476299afae38b8b5a048f936e",
".git/logs/refs/remotes/origin/master": "89669258d88f94d4857ef0d24987a7a9",
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
".git/refs/heads/master": "8bcba511d5115bd3c92cbe68f1006737",
".git/refs/remotes/origin/master": "8bcba511d5115bd3c92cbe68f1006737",
".git/index": "92e2f19aa939e76e7ef5035906cd7a82",
".git/COMMIT_EDITMSG": "e134ec9ebb97115fa33e1175c9d3562b",
".git/FETCH_HEAD": "f115be49746685d73354b6dee7d5b217",
"assets/LICENSE": "fce0d0627f103411fa9e7a3d28fd9270",
"assets/AssetManifest.json": "065bad3142932ed5cb0ab081dd781341",
"assets/FontManifest.json": "1a4d97a3e8e8e82e2d0233b865c5014b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/img/logo-1.png": "34a97bb9e78a9f76c340e5734aa1d4d8",
"assets/assets/img/logo.png": "e5820b4ffa79796b294cff23fb571672",
"assets/assets/img/bg.jpg": "dcb98426551d07ed24452e06d7196f8b",
"assets/assets/fonts/arfonts/KufiBold.ttf": "9e1878ea22247fbe4536f93897771502",
"assets/assets/fonts/arfonts/KufiRegular.ttf": "a0c3e1769ab6afabe688540dfa7047cd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
