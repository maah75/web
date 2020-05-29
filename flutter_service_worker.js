'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "c804f55fcd3ae48cc9ed47d61e5ac034",
"/": "c804f55fcd3ae48cc9ed47d61e5ac034",
"main.dart.js": "1a75fc11001264cf1735a6bbf380f688",
"favicon.png": "5ea2a516b3028fdf45310d7979e66d96",
"icons/Icon-192.png": "5916dea47330110fc6c0a569d670bbce",
"icons/Icon-512.png": "ca2e5737fdc8af83c151fbbf8cb071f1",
"manifest.json": "8461c377b19e3084c18a0b58e5888c75",
".git/config": "30f5f9c361c3afac7572d23a54698fbb",
".git/objects/61/85643d6f1c758dbe0e20cd1d2c223552f6809a": "4fb36a6e14be92a12af5d38b44f8b33c",
".git/objects/0d/00bd09ae497f1402db760a7e789820f8245b6e": "e7825c8bfbbfd07a7525e02017a607d1",
".git/objects/95/40c98f3a4480cd85a5f44922272f0d513a095c": "610905f49cbdf7c2d0aa76cc03f7424f",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/317d5cc234293785734422ae5b7b5268098bf7": "bc45c6d20c513e5956b49669d6b54d1e",
".git/objects/66/d3e601eee4a915bd4d0330f332359ac1ca24e1": "18fa02495a7ed2f086c7c179ef648acd",
".git/objects/57/9dfbc73bf7e660f395b7644433773ea05065ca": "fa3a85ff788c33dba6c7c2f2132ac4b2",
".git/objects/3b/9b1d02e38c2af81b5d55f8b1910b7ad6ba7e42": "d4497debf3cf97dc1ae7592c842f4f53",
".git/objects/9b/15988a15fc5ff7d1332496d67626fbe3b30357": "d8377f718b90898d018965bea4738655",
".git/objects/35/0424b21d753a52b7610389aa0b7b1393dff6c5": "d731ab9c0a7787a0890195fba182e620",
".git/objects/35/105276b32abb48cfb77a7019cd72247d2d47ee": "4301e30825810bc12bae3147e778d9af",
".git/objects/58/d29e790846623582f8d3f9835011ea778c79ff": "3169b3d6a1b1854ef6a759d4a6e452f2",
".git/objects/0b/34670ab09d5f72233e09bc098ba55e69b22944": "49cb14d3b2fb7f2f2f925c5dbea3b23a",
".git/objects/0e/4ac9a944b55b51e20ae944416448204f08730e": "b7ae11fb2ed86303f78897b9c15ff2ed",
".git/objects/34/edebcb33f10ff25c8d710861741c336d371ff5": "96ac3c061772c10b433b15afa59588ba",
".git/objects/05/b7cc22dbba31c5ca64ee368558614f420f896f": "c3a475901b5902c1863b1e0e70beb89d",
".git/objects/a4/1718e37887eaee89b9e895a928e1a65a932b38": "51bb51092e416b235de0c268642e369b",
".git/objects/b5/8731b5d134659d5a33e57b05792b5c6fa9b184": "45bcf6aa1d51466a920947d4a6e3fccc",
".git/objects/b2/0609835f2c28614e629817cd73b274eb7df2f4": "a268bdc415135bd99f5aedaa05db3c96",
".git/objects/d7/d0173b27b987fa4d338cffebaee08aa232bcf2": "d1a613c930a13b5cf677cf0d72e1f4b9",
".git/objects/be/410da7e4f0f3d4551e07ab1154a91ee135de08": "ea1f9c485f3f0345501ce46f34a44082",
".git/objects/b3/aaabab8f08c738641da84bce32134c0f7fd537": "cf321a0f7331d8b1602e1ee0b5723de7",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/da/c347c4c6bac796dba7c7768a4150cb0974eda0": "e157fb65ef666db97256aa145b067248",
".git/objects/a2/8e2fdc7816c7e2a4b2cb2393293ecfa0a770d4": "33214a5e1f33c2dbe21ff7896e9d629d",
".git/objects/f4/dcc7008bf8469052fc04b18a8281a7ecc61772": "7bcfddbb8932ac62059027965d7b3d8e",
".git/objects/c0/dda8749ad55727ea4cb1f275140d45006f3b2e": "4ef0f3096a074e670dac09122989c311",
".git/objects/fc/265bcb1a0b43373dde4fad0f422ac8d9ac39ec": "e46ed460a00be3b3d66099cacb48591f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/f2/00030d3923f7fdbbb1b950bf5dbb2fcec59b7a": "798cffff165aa94896ceba1bb52e9404",
".git/objects/f5/7fefb9c6d36d1b7f2771e2aa95ea02c48175b0": "82ada8885a1e18a4a5a6524a448b3a10",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/45/0bcf6eb9d1605e9e4cb4025155086f09e20511": "2a31794e8b32b364a4fc64daa71def28",
".git/objects/73/43e3df078938d7655b292d5b10f1508a95ee6d": "348bb8e88c0ae010c82587a656a9b5fe",
".git/objects/1a/86073e415a80b9f5c95e370dfd415892df489c": "5d0e5cc79cf6c9098585d7893f9b6f5b",
".git/objects/28/40712c2323a5f6d31ece5f4b297fe7ca516145": "2c7e8cf73855b2c204bb85fe74cbffbe",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/7f6c260dbaf7ca0645b8986f33e8844aaaf397": "ecbb35f67460d0a874fa3237c713483b",
".git/objects/21/92426a4fb69437fae5c2bde8aa2ac0be9584c3": "1eeae04d16806eeff48d1c8d2d003f21",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/8d580a113788fbfbe6994ac3c506033805b0a3": "90d76296ceceb30b1963bb19ded6b4b6",
".git/objects/07/6f4add155b95f689f3259a5989a1a7174a09df": "a59678446cb48bbaaefbe12e76454cbb",
".git/objects/36/1e8d48159d6863dc36fff6bd11fa99539aa814": "46f8a7222d3182af5e51eb4763bb83c6",
".git/objects/5c/7cdbfee77556d11884d57dfdbc5c77b633d804": "52a94c9ee0a0b190bea648f39a6de2e3",
".git/objects/5d/fbf97c91a03d8c8efc5ea168f9f5b355b87815": "31e45e4ec150f1ee1d7f3893b49d3055",
".git/objects/5d/97b946e748f5e3275f17630181923558843ed3": "4ca3274df918ca72c8b497c63fb4f7a4",
".git/objects/91/e6a127a04c442e5e14538c702e25c52d200852": "4d328aedca97f7f2a7a6bf8eb01dfa06",
".git/objects/54/ee9e0680aa680ef4d96a625d0add667f8971ec": "1a887dfac0d99927fd20544709c5f6b6",
".git/objects/98/4d2d0e69354de4e8c8392bc6f7d4a616a3fe83": "358c381f6db60cc5aa9273649fe42a41",
".git/objects/98/e4ca35ecda043e379e041e67c66ffd96d8ff29": "f1d724defb9e56aab8e0ad059797bc89",
".git/objects/5e/5e74f4ba08ca42b12e42d00481307b2280f28a": "5c5ff2b4b313f1643c5e27cedabed058",
".git/objects/5b/4f0216bb56a618eb1f8442a00b663aae8388a6": "36082e98ba5438fa15b9ce345e476d5c",
".git/objects/06/c4102d72409c46ed43180ed8a88933be2910b8": "98aa285efdec8c7e0ae5465218b55b01",
".git/objects/97/5d3effdd7d7fefef99b046753f6f8495a875d7": "446003a13492b3503fad643e2a6ea53b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/a7/d1a59ec2b262c79ccbcbecdb299cd4a2019af8": "1e8463498b25b500116723bd59bb422b",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c4/157ad2851421b229075a29bf580c078b10f277": "445876cd5c66a0b315cccd203eb9ab41",
".git/objects/e7/7ad9eedb5a6c04feb8696c16f2eb2f90e5b166": "60d56551d66bc23da12b1306cb544df0",
".git/objects/77/1853d51f3b95edf3ae2d775a530e9871cf5593": "bdfcfc79527fe5c575a29a5dfa044e00",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1d/fe79bafaeac43f24250f895fdb8b9506918bc2": "805ab26c700f735a6558f9d57fcae879",
".git/objects/82/e403c40fc0457cf7bf1336324b93e4a5c5c78b": "1f769160030715cbfbe112b5ac93804f",
".git/objects/40/4a3f5723ed20f7d87f411f8413f932b34e737f": "57994c04f8e8a06a88cf8e6eedc4fc5d",
".git/objects/8b/cead167c0404fa619dc782565fb447ed89031a": "cd3e9d9dfa4c419184c59ea3d601efa9",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7f/5cc60f18a0676af380f532eed34523505afb05": "db2375975337a3d5d3e85ac706c9e393",
".git/objects/8e/fbf2335ca6f0eb4fe06a2f6a6a0f38bbe20055": "32d441d7f1d6a22a5fbd79f60e20db24",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9ac2cd942ef9cb5bdb3c2c17a916910a",
".git/logs/refs/heads/master": "9ac2cd942ef9cb5bdb3c2c17a916910a",
".git/logs/refs/remotes/origin/master": "943633dd3c456159a947e14a42028a66",
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
".git/refs/heads/master": "a102e27071c7fb616cb8787154dfddba",
".git/refs/remotes/origin/master": "a102e27071c7fb616cb8787154dfddba",
".git/index": "afd95299bc84f7576f9087d5931515fa",
".git/COMMIT_EDITMSG": "f166e3b8185e582275e3cb2f3e07feb7",
".git/FETCH_HEAD": "b16a3cd45c9196dc5695f5868f64cc99",
"assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"assets/AssetManifest.json": "d2f0a7a05f5c56c7de6b8014a11f213b",
"assets/FontManifest.json": "7936e2c8cf4abe0cd017504cd74b8395",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/img/Background.png": "dd575d260c674deafd2c4e1a83d25a9a",
"assets/assets/img/logo.png": "e5820b4ffa79796b294cff23fb571672",
"assets/assets/img/bg.jpg": "dcb98426551d07ed24452e06d7196f8b",
"assets/assets/fonts/arfonts/KufiBold.ttf": "9e1878ea22247fbe4536f93897771502"
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
