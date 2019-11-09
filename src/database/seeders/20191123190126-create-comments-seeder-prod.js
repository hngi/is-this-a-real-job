const removeTags = (str) => {
  if ((str===null) || (str===''))
  return false;
  else
  str = str.toString();
  return str.replace( /(<([^>]+)>)/ig, '');
}

const commentArr =  [
  {
    inviteId: "1c5c4e45-283a-4dc2-a51b-a9ee2e1be733",
    userId: "2057511c-9379-4009-89cc-80f54630406b",
    body: "I don't understand",
    createdAt: "2018-03-01 18:38:50",
    updatedAt: "2018-03-01 18:38:50",
    commentId: "e4ce4064-3176-40a0-ab13-d6b1a80d0687"
  },
  {
    inviteId: "4",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body: "sdfsdfsd",
    createdAt: "2018-03-01 04:40:35",
    updatedAt: "2018-03-01 04:40:35",
    commentId: "72b9c746-020c-48c7-afab-0d536c43afb2"
  },
  {
    inviteId: "4",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body: "dgdhfgh",
    createdAt: "2018-02-28 19:02:14",
    updatedAt: "2018-02-28 19:02:14",
    commentId: "fa299194-fa4e-4387-885d-13f07952cefe"
  },
  {
    inviteId: "cf7f7cc9-a12f-4b95-99d9-7b517110685a",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "Definitely fake... the same exact message has been in circulation since 2013. \r\n\r\nhttp://www.nairaland.com/1841414/how-identify-scam-interview-invitation/110",
    createdAt: "2018-03-01 22:55:52",
    updatedAt: "2018-03-01 22:55:52",
    commentId: "bfaa8784-6a41-4e54-80ec-92e371fbb0aa"
  },
  {
    inviteId: "ff2028d9-4803-4ef3-a003-704aecc4bc50",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "This sounds like a normal GNLD advert. One, there's no mention of the position, the company name cannot be found online, the address is not on google map, the exact same sms is found here (http://www.nairaland.com/1841414/how-identify-scam-interview-invitation/19) and was posted last year. Its most likely a fake job.",
    createdAt: "2018-03-02 03:52:16",
    updatedAt: "2018-03-02 03:52:16",
    commentId: "4bc17f1e-c864-41a5-99c5-9fc5a94d36cf"
  },
  {
    inviteId: "ff2028d9-4803-4ef3-a003-704aecc4bc50",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This is another evidence of the fakeness of this : http://www.nairaland.com/4257832/please-knows-dps-yabi-plazamagaji",
    createdAt: "2018-03-02 04:05:41",
    updatedAt: "2018-03-02 04:05:41",
    commentId: "92173ae1-a250-4e2f-a956-6a804df1befa"
  },
  {
    inviteId: "1ff72941-7073-4e6a-ab0d-39af48a6a595",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "THis might not be the type of job you want.\r\n\r\nThey'll ask you to make payment. \r\n\r\nSo if you were looking forward to making payment for a training, then sure, go ahead, otherwise, don't bother.",
    createdAt: "2018-03-02 18:39:39",
    updatedAt: "2018-03-02 18:39:39",
    commentId: "f89d4603-5e80-4b0e-94ca-32b4a1b9086c"
  },
  {
    inviteId: "1aa9379c-807f-4997-9c59-7935e2535e9f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "If you get a message from this company, saying something similar to the post above, don't bother, They are into GNLD.",
    createdAt: "2018-03-02 19:29:00",
    updatedAt: "2018-03-02 19:29:00",
    commentId: "b2900974-c9d9-492c-8649-ec21ba1db771"
  },
  {
    inviteId: "b08eaec5-9d33-4108-8fbd-2470dd26cada",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "It's a real company, but this particular message is for rigorous marketing where you might be given 10 million Naira target",
    createdAt: "2018-03-02 19:33:06",
    updatedAt: "2018-03-02 19:33:06",
    commentId: "8b686acd-05e5-4efd-8075-ec4f9652935e"
  },
  {
    inviteId: "1aa9379c-807f-4997-9c59-7935e2535e9f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant,\r\n\r\nSequel to your application for the job available, you have been selected for a written and oral interview test with SCHLEEZ LIMITED on the 13th of November 2017 by 9:00 am which is located at 49, Olowu Street off Bank Anthony Way Ikeja Lagos\r\n\r\nCome with your credentials and copies of your resume.\r\n\r\nDo notify and acknowledge your presence at the interview by writing back to this invite.\r\n\r\nWARM REGARDS",
    createdAt: "2018-03-02 19:34:25",
    updatedAt: "2018-03-02 19:34:25",
    commentId: "fa090b1b-e75f-4330-8316-b6008efcd2cc"
  },
  {
    inviteId: "0cbf0217-b0ea-4799-9294-2f03d929b741",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "They claim to have exploration, development, production and marketing activities in more than a dozen countries around the globe, with a significant position in the deep water Gulf of Mexico, Nigeria, onshore US, Canada and Australia. They are out to defraud people, they will ask you to pay fees for relocation, immigration etc. Please beware",
    createdAt: "2018-03-02 19:36:17",
    updatedAt: "2018-03-02 19:36:17",
    commentId: "58b8ad87-d291-407e-adae-ac0fd98e7c5d"
  },
  {
    inviteId: "67a306cf-e994-4dca-adfc-7ac7d879985a",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "They claim to a recruiting firm. They ask job seekers, when invited for interview, to pay certain amount of money to join them. Please beware.",
    createdAt: "2018-03-02 19:37:17",
    updatedAt: "2018-03-02 19:37:17",
    commentId: "54512f5f-aa61-4580-aa8a-471cbcc4a504"
  },
  {
    inviteId: "4d6086e9-3f37-4d85-a0ee-215c995ae04a",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "They claim to a business development consulting firm. Their mission is to be the best customer service provider in the world, while unvailing great mystery behind man’s inability to live optimally in the area of wealth and health. They are into GNLD and MLM marketing of of drugs and health products. Beware, they will ask for money to introduce you into their Multi level marketing scheme. www.ignilyte.com",
    createdAt: "2018-03-02 19:38:04",
    updatedAt: "2018-03-02 19:38:04",
    commentId: "71ec9015-7280-42b6-9b45-055c3f9d3854"
  },
  {
    inviteId: "d466521d-849c-43d0-bf2f-be73a333d3d2",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "If you get a message like this, its a scam! Don't bother.",
    createdAt: "2018-03-03 16:05:28",
    updatedAt: "2018-03-03 16:05:28",
    commentId: "c8989d66-6644-4b53-8de8-ce494fbc288c"
  },
  {
    inviteId: "cdafe44a-eedb-43bd-a9ed-276cbd74147e",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "From all indications, the company is real, they have a website, they have a location, they have online presence. So, i'll say you should go for the interview and give it a try. Good luck, do keep us posted.",
    createdAt: "2018-03-03 16:17:22",
    updatedAt: "2018-03-03 16:17:22",
    commentId: "25337777-d4f8-4758-9199-da2f5bdb0b65"
  },
  {
    inviteId: "a5b13cf4-b16e-443f-815f-b59b28cc8e31",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "From initial search. it's a real school. You can give it a try and keep us posted. Good luck.",
    createdAt: "2018-03-03 16:28:48",
    updatedAt: "2018-03-03 16:28:48",
    commentId: "95bd1207-79b5-4565-b180-7f3da7d05409"
  },
  {
    inviteId: "4d0353d4-870f-4fc5-95b1-98e4d13df23f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "It looks like a real thing, although, they offer no position. They are a recruitment agent who might not necessarily have any position to offer you.",
    createdAt: "2018-03-06 21:03:24",
    updatedAt: "2018-03-06 21:03:24",
    commentId: "da4074a5-5fce-450c-99cc-18384a090abc"
  },
  {
    inviteId: "d4657a4f-293b-4b8e-93fa-a2c9845a5566",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Yes, it's a real company and seems credible enough for a try",
    createdAt: "2018-03-06 21:11:53",
    updatedAt: "2018-03-06 21:11:53",
    commentId: "3cc53a8b-936f-4ea2-a1d9-c8ef8491be20"
  },
  {
    inviteId: "9e8227b5-a4b7-42d9-8450-7d588ce177af",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "No. This company is fake!\r\n\r\nThe provided RC (RC11159) Does not exist in the CAC database.\r\n\r\nDon't waste your time.",
    createdAt: "2018-03-06 21:16:45",
    updatedAt: "2018-03-06 21:16:45",
    commentId: "084961a0-4464-4beb-a1d4-c0db50e3ac31"
  },
  {
    inviteId: "dc41d6f2-6fb7-44e3-8d86-93ba2438ad51",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "From all indication, it seems fake.\r\n\r\nThe company does exist, but the address you are given is different from the address on their portfolio.\r\n\r\nExcept they have another branch, then its fake.\r\n\r\nIts better to place a call to their customer care on their website and find out if they have a branch in Ikeja. check: http://www.africanallianceplc.com/",
    createdAt: "2018-03-06 21:20:15",
    updatedAt: "2018-03-06 21:20:15",
    commentId: "fdf9130d-b9b9-444c-868e-252fef82e64f"
  },
  {
    inviteId: "718bd5cd-eabb-4328-98bd-c4a12aa3da03",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I would you suggest you don't go for this if you are not interested in GNLD or marketing, or if you don't want to generally waste your time. First indication of falsehood is lack of company name in the post.",
    createdAt: "2018-03-06 21:21:55",
    updatedAt: "2018-03-06 21:21:55",
    commentId: "f45e15e1-cf1d-4215-8eb3-d6d0828d3d9a"
  },
  {
    inviteId: "9a845d50-ff66-4c6c-9606-ee7c5c157221",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "From initial search, this is fake.",
    createdAt: "2018-03-06 21:40:18",
    updatedAt: "2018-03-06 21:40:18",
    commentId: "f53828d9-2c02-49c8-a311-3c6f237936b0"
  },
  {
    inviteId: "1aa9379c-807f-4997-9c59-7935e2535e9f",
    userId: "2057511c-9379-4009-89cc-80f54630406b",
    body: "What is GNLD??",
    createdAt: "2018-03-06 21:49:32",
    updatedAt: "2018-03-06 21:49:32",
    commentId: "32464634-47a0-4a91-aa62-771f5fb2ba7a"
  },
  {
    inviteId: "89459195-4b6e-4fe8-bf29-edf3861aa3a1",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Chicken Republic is a real company obviously, and they have a brach at Ogudu. So, i think you should give it a shot.",
    createdAt: "2018-03-07 18:32:09",
    updatedAt: "2018-03-07 18:32:09",
    commentId: "989a1971-e5a9-4ed4-9326-3e0dd1f5ffcd"
  },
  {
    inviteId: "9a2b8614-dde2-418a-afa7-9deab0e6fa14",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This is very similar to false job posts in the following way:\r\n\r\n1. No Organization name,\r\n2. They didn't specify the position you are being interviewed for.\r\n\r\nI'll suggest you discard the invite.",
    createdAt: "2018-03-07 18:42:52",
    updatedAt: "2018-03-07 18:42:52",
    commentId: "ea8e649a-594e-4991-aa23-4bdc5b98e6a8"
  },
  {
    inviteId: "e523281b-c2b6-400e-b7f9-8d3d8ca640f6",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I would advice you don't waste your time. \r\n\r\nAlthough the company exists, It is, however, a French company with no branch in that specified address.",
    createdAt: "2018-03-12 16:19:13",
    updatedAt: "2018-03-12 16:19:13",
    commentId: "ce56626a-b7cb-4933-b20e-f06e28662720"
  },
  {
    inviteId: "57cb8846-ad2a-437c-b817-767d7d22192f",
    userId: "9",
    body: "Hello World hHHAHAHAH",
    createdAt: "2018-03-13 21:12:58",
    updatedAt: "2018-03-13 21:12:58",
    commentId: "9181aba7-1385-42e3-977a-4fd1097cd3de"
  },
  {
    inviteId: "57cb8846-ad2a-437c-b817-767d7d22192f",
    userId: "9",
    body: "NA YOU SABI",
    createdAt: "2018-03-13 21:13:25",
    updatedAt: "2018-03-13 21:13:25",
    commentId: "ecc8f12a-bdaa-4fb6-89db-336fb15bf853"
  },
  {
    inviteId: "f52191ef-3bcf-4346-afb8-9dfa0bd78d44",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "From peliminary search, the specific address is registered to a Oranu Chukwuma, phone number: 2348184078930. Its a residential address, and less likely to be a company. \r\n\r\nThe same surname was found on linkedIn in relation to the company: https://www.linkedin.com/in/blessing-oruche-557678152/\r\n\r\nThe company is registered with CAC Nigeria.\r\n\r\nFrom all these, you can give it a try. Though, choice is still yours.",
    createdAt: "2018-03-14 00:32:51",
    updatedAt: "2018-03-14 00:32:51",
    commentId: "76de5d81-93f4-4c59-8e37-eaa5af7e76f8"
  },
  {
    inviteId: "c1e2de8e-b7a7-4cd8-9f65-9cdf73ad027b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "If you get this message above, its likely GNLD. Its better you don't bother.",
    createdAt: "2018-03-14 01:18:58",
    updatedAt: "2018-03-14 01:18:58",
    commentId: "bdea6837-17e3-4ff3-b148-093d903ec21a"
  },
  {
    inviteId: "c1e2de8e-b7a7-4cd8-9f65-9cdf73ad027b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "The address is inconsistent, the company does not have a registered online presence.",
    createdAt: "2018-03-14 01:19:29",
    updatedAt: "2018-03-14 01:19:29",
    commentId: "7a4faf0c-bdc0-4a57-b6ca-09b5fb9828f5"
  },
  {
    inviteId: "43b73e05-e09f-4f30-b46a-40bc5030ab76",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "From preliminary search, the company does exist but in Lagos, not Ph.",
    createdAt: "2018-03-14 16:19:57",
    updatedAt: "2018-03-14 16:19:57",
    commentId: "09f3016b-cc5f-4631-8020-65fb78aecd9b"
  },
  {
    inviteId: "daeb5343-f415-40fc-a47c-5f3ea3ed74cf",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "If you receive a message like this, don't waste your time, as the same message format has been circulated over and over again.",
    createdAt: "2018-03-15 01:02:04",
    updatedAt: "2018-03-15 01:02:04",
    commentId: "5dca6747-561d-4eed-a36d-2454e724bd81"
  },
  {
    inviteId: "43b73e05-e09f-4f30-b46a-40bc5030ab76",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "From CAC Registration Search, the company is registered with CAC, with address at Ogun State, \r\n\r\nRC NUMBER\t681447,\tEXUS PHARMACEUTICAL (NIG) LIMITED\t, NO 18 IKISE ROAD IGBILE ODUGBOLU LGA,ODUGBOLU ,OGUN\t\r\nRegistere on: 2007-02-16\r\n\r\nFrom all indication, it is a real company, but nothing suggests that they have a branch in Ogun State.",
    createdAt: "2018-03-15 01:07:18",
    updatedAt: "2018-03-15 01:07:18",
    commentId: "ac9e76c5-c50b-401e-aed2-a37fd5d76009"
  },
  {
    inviteId: "fdfad475-d45e-4c59-be8f-f10e33552d7d",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Yes, its a real company. Registered with CAC, they have a functional website, but the branch specified in the above address does not exist on their website... you can call their head office Tel : 01-2719325-6 to ask if they have a branch in the specified address. Good Luck!",
    createdAt: "2018-03-15 14:34:18",
    updatedAt: "2018-03-15 14:34:18",
    commentId: "698cdf8f-43ab-454b-91a9-ad1bf979403c"
  },
  {
    inviteId: "5ae41288-469b-45e5-904e-a5b7910f3737",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "From initial search, the company does exist and at the specified address. they are also registered with CAC Nigeria. \r\n\r\nCongratulations, the invite is authentic.\r\n\r\nGood luck.",
    createdAt: "2018-03-15 17:14:11",
    updatedAt: "2018-03-15 17:14:11",
    commentId: "d1b4555a-f897-4d59-8bae-140d2724989e"
  },
  {
    inviteId: "fed9d4dd-c12b-4c04-98dd-a256f7c683ac",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This might be your choice, but here is what we have found out 1. The website address (HYNSCO.com.ng) is not registered, hence does not exist 2. the company is registered with CAC Nigeria 3. the closest thing to the website address is: http://www.hyinsco.com.ng/ \r\n\r\nGood luck.",
    createdAt: "2018-03-15 17:22:23",
    updatedAt: "2018-03-15 17:22:23",
    commentId: "5368ad9c-f358-4de9-b659-464ff9892c61"
  },
  {
    inviteId: "04fc2292-1ebe-4692-ba13-b8de40000434",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "There is a potential of falsehood in this message, because 1. the name BAT is probably supposed to be BATN, British America Tobacco Nigeria. 2. BAT is not registered with CAC, although there is a BAT INDUSTRIAL COMPANY LIMITED in the CAC Databse. 3. The address is not traceable via google maps.\r\n\r\nThese are some of the things we could find out, the choice still remain yours.\r\n\r\nAn advice would be to call BATN and ask if they have interview tomorrow or a factory at the stated address.",
    createdAt: "2018-03-16 03:57:20",
    updatedAt: "2018-03-16 03:57:20",
    commentId: "c4b01302-81bd-41c5-bac6-940b7fc50bc5"
  },
  {
    inviteId: "e8b4e136-7d02-4d3d-ac2e-671dc04dbf0e",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Jumia has a registered branch at the specified address",
    createdAt: "2018-03-16 03:58:47",
    updatedAt: "2018-03-16 03:58:47",
    commentId: "b43c0c47-6111-4a1a-875e-22255bd8eb95"
  },
  {
    inviteId: "081f51cc-c54c-45e5-9f9f-3e3382c9f54a",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Since the information says you should go to access bank, obviously, if you don't see access bank at the specified address, then you shouldn't risk it. But generally, specificity in address such as this, means its authentic.\r\n\r\nAnd from my search, there is a branch at that address.\r\n\r\nGood Luck.",
    createdAt: "2018-03-16 04:07:50",
    updatedAt: "2018-03-16 04:07:50",
    commentId: "095305db-3183-4232-8a7a-37bbeee1dbca"
  },
  {
    inviteId: "1fd25517-7292-408d-9a22-0e85c484d2b0",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Yes, this is a real company. You should give it a try.",
    createdAt: "2018-03-16 18:51:00",
    updatedAt: "2018-03-16 18:51:00",
    commentId: "663f7749-0e4a-480d-8900-7b6b406eca33"
  },
  {
    inviteId: "1586a1ca-7b70-4ec2-bf91-a42ff073fc81",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      'THis is likely GNLD or something similar, 1. company name is not specified, 2. interview is on saturday 3. interview is the next day. 4. This "APP. ID: FUFE SHOW TO SECURITY" makes no sense 5. Looks like a residential address (http://isthisarealjob.com/mikeale/32-olufemi-rd-is-a-residential-address,-less-likely-to-be-a-company-05X176631812936) \r\n\r\nMy advice, don\'t waste your time.',
    createdAt: "2018-03-17 00:11:19",
    updatedAt: "2018-03-17 00:11:19",
    commentId: "8a13c43e-4831-4702-90be-d78de93b15fd"
  },
  {
    inviteId: "5966c8e1-4f50-45e1-8da6-8b7e964e2327",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      'Its likely GNLD or other related things because, 1. No company name is specified 2. it says "call the admin" 3. the phone number is registered to a Grace Okota. 4. you can see the specified address here, and the likely building... http://isthisarealjob.com/mikeale/65c-opebi-02393435U173699\r\n\r\nGood luck.',
    createdAt: "2018-03-17 00:24:04",
    updatedAt: "2018-03-17 00:24:04",
    commentId: "03ba4147-3e89-44f8-9915-57fb9e4f4949"
  },
  {
    inviteId: "445e0332-4efb-4810-abe1-e3718d83f7a9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The address on the company website is different to the one the company is registered with, but this might be as a result of movement to a new location.",
    createdAt: "2018-03-17 14:56:20",
    updatedAt: "2018-03-17 14:56:20",
    commentId: "c5dbe3bb-50d5-4fb3-8b6d-2f0a6f01e40e"
  },
  {
    inviteId: "615a7cd1-71ac-4345-87a2-05e3def95b4f",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "According to search there's no official website for Hencmoss concepts. Although the company is officially registered with the Corporate Affairs Commission. \r\nAddress: SUITE C4, EFAB MALL ANNEX EXTENSION, AREA 11, ABUJA.",
    createdAt: "2018-03-18 08:23:33",
    updatedAt: "2018-03-18 08:23:33",
    commentId: "22c3773c-fd95-4b9b-ba38-5cfe361e02b7"
  },
  {
    inviteId: "5de44dc5-c6a2-4df0-aacb-e02ac6d3ba09",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Giant beverages limited is a manufacturing company whose main mandate is the production of non-alcoholic beverages.\r\n\r\nWEBSITE: https://giantbeverages.com/\r\n\r\nADDRESS ON C.A.C SITE: \r\nGIANT BEVERAGES LIMITED,\r\n71 VICTORIA AROBIEKE STREET, LEKKI PHASE 1, LAGOS.\r\n\r\nADDRESS ON THEIR WEBSITE: \r\n1 GIANT BEVERAGES ROAD, IGBERIGBE ROAD, IGBODU, IKORODU LAGOS, NIGERIA.\r\n\r\nPHONE: 08172012406, 08172012407",
    createdAt: "2018-03-19 00:35:29",
    updatedAt: "2018-03-19 00:35:29",
    commentId: "28f7d4dd-624f-488c-8656-43255942a614"
  },
  {
    inviteId: "a5b13cf4-b16e-443f-815f-b59b28cc8e31",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body: "sure?",
    createdAt: "2018-03-19 04:22:20",
    updatedAt: "2018-03-19 04:22:20",
    commentId: "db47d759-4679-4aab-8547-fd69df5d896f"
  },
  {
    inviteId: "a5b13cf4-b16e-443f-815f-b59b28cc8e31",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body: "sure?",
    createdAt: "2018-03-19 04:22:27",
    updatedAt: "2018-03-19 04:22:27",
    commentId: "f581989a-6eda-4bc6-9a5e-9c48be0eb87b"
  },
  {
    inviteId: "b5178258-0491-40ce-8aa3-bae0007a361d",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Address: 40 Ziatech Rd, Oregun\\, Ikeja\r\nnascon allied industries plc\r\n: \r\nWebsite:http://www.nasconplc.com",
    createdAt: "2018-03-19 16:39:40",
    updatedAt: "2018-03-19 16:39:40",
    commentId: "f9a29588-55ba-485e-a08e-aa40ad78f0b0"
  },
  {
    inviteId: "e15929e7-d348-4290-822d-2485aff9e172",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Obviously GNLD! Don't waste your time.",
    createdAt: "2018-03-20 00:46:26",
    updatedAt: "2018-03-20 00:46:26",
    commentId: "aa47545e-aff1-4815-afcf-ae5f2a0a5e58"
  },
  {
    inviteId: "a360fd50-8f5f-4b65-bda7-d1ae9266740a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Address on Corporate Affairs Commission:  SALT CITY, IJOKO OTTA, OTTA ,OGUN.\r\nAddress on website: 40 Ziatech Rd, Oregun\\, Ikeja.",
    createdAt: "2018-03-20 00:49:39",
    updatedAt: "2018-03-20 00:49:39",
    commentId: "2dee7397-0068-45cd-bd39-ea39dece01f9"
  },
  {
    inviteId: "98cd4fad-fa3d-4617-9d50-d4c21e87a8fc",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Human Edge Limited's Website: \r\nhttps://www.heworld.com/\r\non the directory page on the website there's no address or phone number, Rather there's a contact form.\r\n\r\nAddress on C.A.C Website: 20, ALH. TOKAN STR. , ALAKE ,LAGOS\r\nCompany registration date:",
    createdAt: "2018-03-20 06:22:06",
    updatedAt: "2018-03-20 06:22:06",
    commentId: "9a933cd3-49d8-4adf-911d-909bc636b932"
  },
  {
    inviteId: "edda1090-0789-4f98-bba7-4de8bfc25adb",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "From preliminary search, 1. The website ( http://livingstonewall.com/ ) is down. 2. They are registered with CAC, address is not the same as interview address though 3. They seem to do some sort of real estate ( http://www.stelladimokokorkus.com/2017/01/business-memes-on-sdk-blog-to-support.html), they also seem to be involved in even ushering (https://alimosho.jiji.ng/part-time-and-weekend-cvs/classic-event-ushers-11013797.html) Because of the uncertainty of what they do, i can conclude that its one of those registered companies using the same name to do several things. Ofcourse, GNLD or MLM can be part of what they do, So far i have found nothing on such. Although, a similar address is associated with GNLD (http://isthisarealjob.com/mikeale/can-anyone-help-me-confirm-if-this-is-a-scam-or-real.-i-just-got-this-email-now-119256284U38857) (http://isthisarealjob.com/mikeale/65c-opebi-02393435U173699)",
    createdAt: "2018-03-20 16:52:37",
    updatedAt: "2018-03-20 16:52:37",
    commentId: "7385b770-aaa0-4607-9245-4a2a7c9894ca"
  },
  {
    inviteId: "a1c83f34-05b5-4436-bee2-6e5088c9e156",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Forza Nig ltd is indeed a registered company with Corporate Affairs Commission. The address listed in the message is different from the registered address. Registered address is: 4 yesufu close crown plaza off ajose adeogunst , Abuja ,Fct\r\nWebsite: http://forzanigltd.com",
    createdAt: "2018-03-21 00:47:10",
    updatedAt: "2018-03-21 00:47:10",
    commentId: "ca3afd58-c4f4-4559-b9be-e99e71beab88"
  },
  {
    inviteId: "d64defca-880f-4d40-8484-05b698850af1",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "Address is not legitimate. Website link not working.",
    createdAt: "2018-03-21 01:02:05",
    updatedAt: "2018-03-21 01:02:05",
    commentId: "69febdca-139e-42b0-905d-a76b8bb344f1"
  },
  {
    inviteId: "059c48e0-d739-42fb-95d5-10c8bbf69df4",
    userId: "16",
    body: "What are their claims , like what do they do....",
    createdAt: "2018-03-21 15:19:19",
    updatedAt: "2018-03-21 15:19:19",
    commentId: "5ae3f358-c79a-47f5-9e14-23ffc10f68a9"
  },
  {
    inviteId: "b3c62003-6caa-4e9a-bc52-ec5bd740122b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Don't visit the specified site, it's a malicious website and might be dangerous for your computer.",
    createdAt: "2018-03-21 19:52:44",
    updatedAt: "2018-03-21 19:52:44",
    commentId: "6aa8f343-e261-4210-a0ed-7b6d05666885"
  },
  {
    inviteId: "d888edb6-6b9e-4bb9-872d-3436657aa5cc",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Obviously GNLD or something worse, don't waste your time.",
    createdAt: "2018-03-21 20:08:38",
    updatedAt: "2018-03-21 20:08:38",
    commentId: "7ddb31af-c06b-47a8-9105-d8ef31285974"
  },
  {
    inviteId: "b8ddb79e-c3e7-482b-82fb-e67792efcc2e",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This seems a bit off, as 1. Company name is not specified. 2. There are errors in the message 3. The specified address however belongs to Revelation Properties. Which is a registered company with CAC. \r\n\r\nI'll say you should give it a try.\r\n\r\nGood Luck.",
    createdAt: "2018-03-22 00:23:12",
    updatedAt: "2018-03-22 00:23:12",
    commentId: "d4ad4a1f-bec5-41fd-a74d-702831de15cd"
  },
  {
    inviteId: "efbd32b8-80ec-4329-bc66-7625e204ceb2",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "BGM Consulting is a well known GNLD platform, http://isthisarealjob.com/mikeale/dis-one-weak-me-oh,-no-address-sef.-pls-how-true-79725456923O654 obvious pointers that you can see in the post:\r\n\r\nMy advice is that you don't waste your time, if you're however not far from the venue, you can give it a try.",
    createdAt: "2018-03-22 00:27:55",
    updatedAt: "2018-03-22 00:27:55",
    commentId: "f8006a78-2103-46c8-baf3-5f1d0896fb56"
  },
  {
    inviteId: "b9727a71-7fb6-4a90-af30-4403ec75edb3",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "It registered with C.A.C. \r\nNo company website.",
    createdAt: "2018-03-22 04:12:27",
    updatedAt: "2018-03-22 04:12:27",
    commentId: "7db85bc4-6221-4a66-a823-f8515203d375"
  },
  {
    inviteId: "efbd0692-936a-4cde-beab-97eb34b9667b",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "No valid website. Not registered with C.A.C",
    createdAt: "2018-03-22 04:20:16",
    updatedAt: "2018-03-22 04:20:16",
    commentId: "a28d128d-b158-4b60-bb41-404ba19acacc"
  },
  {
    inviteId: "d639c14f-7c1a-4014-9311-c1701cba56c3",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This is laughable!\r\n\r\nIf its a real company, i assure you, you don't want to work there.",
    createdAt: "2018-03-22 04:23:30",
    updatedAt: "2018-03-22 04:23:30",
    commentId: "933ecaaf-eb69-4708-8122-e23fbe048263"
  },
  {
    inviteId: "d61abfa4-6783-4930-a11f-bc8d01ef79a3",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Though the company is registered with C.A.C,   there are several reports of them being a fake recruitment agency.",
    createdAt: "2018-03-22 05:03:55",
    updatedAt: "2018-03-22 05:03:55",
    commentId: "5962cfeb-c606-4e0e-8ce9-8581790db343"
  },
  {
    inviteId: "44fa7bdd-b687-4cb0-8034-924c7b513b8c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Aiico is a company registered with the C.A.C. Their website is https://www.aiicoplc.com/index.php/about-us-aiico  ..The interview appears to be a legitimate one.",
    createdAt: "2018-03-23 04:41:11",
    updatedAt: "2018-03-23 04:41:11",
    commentId: "2bbe37f9-4935-496b-b31d-a1384556c546"
  },
  {
    inviteId: "0d56874b-6dfc-4177-89fb-6fa767ef386b",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "There's no company registered on the C.A.C website as \"INTER-ARC CONSULTANTS LTD\". \r\nA search for the address brings up more ads about the vacancy being promoted, The email is:  jobs@interarcconsultants.com \r\nWebsite provided is not in existence and up for sale (http://www.interarcconsultants.com/).\r\nThey're obviously not up to any good.",
    createdAt: "2018-03-24 04:47:22",
    updatedAt: "2018-03-24 04:47:22",
    commentId: "e8b285ae-ecdf-4e4d-817a-59bf87c37a4c"
  },
  {
    inviteId: "941b53e7-2696-46ca-a122-7ca0d6f8e041",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "On the C.A.C website, the address for LIVE SOLUTION RESOURCES is:\r\nSUITE 202, 8/10, STARLINK GLOBAL HOUSE SULAMATU ENIOLA STREET. Besides you don't need a genie to tell you something isn't just right with someone who has considered your C.V but is still asking you to bring a hard copy for documentation, like who does that?",
    createdAt: "2018-03-24 04:52:37",
    updatedAt: "2018-03-24 04:52:37",
    commentId: "74a6ef74-28ef-4c1c-b097-1143d53f23a0"
  },
  {
    inviteId: "66c280c1-44d3-44cd-a8fa-46e6fd432645",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Neither Success Drives Ltd or it's address appears to be on the C.A.C database from my search. But a google search shows that the company does exist with that address, two users have given them reviews as well. All the same my advice is to be judicious in any dealings with this folks and if suspicious in anyway please avoid.",
    createdAt: "2018-03-24 05:05:53",
    updatedAt: "2018-03-24 05:05:53",
    commentId: "641a46ae-2481-4881-972c-c8fc288779cb"
  },
  {
    inviteId: "f683f636-59cd-42e8-adb7-c7340f7f982f",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "A close search shows that the interview will be conducted but there's no certainty of applicants being placed as this has been the experience of those who have been contacted prior to now.",
    createdAt: "2018-03-24 05:16:29",
    updatedAt: "2018-03-24 05:16:29",
    commentId: "57d1ba8a-d7ba-4ff4-9619-772c4e1463ab"
  },
  {
    inviteId: "29fa15bb-9699-4af2-afc5-b6c7d7cd0645",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Appears to be registered with the C.A.C but research shows they are affiliated with fake marketing and are likely GNLD.",
    createdAt: "2018-03-24 07:11:39",
    updatedAt: "2018-03-24 07:11:39",
    commentId: "129088bd-b160-470a-95f6-cd46dc78191f"
  },
  {
    inviteId: "07764258-3a82-490a-9617-adc37813fc66",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Although Globacom is a well known registered company, there is information on their official website to disregard any said recruitment excercise. However, using the university of Ibadan as the venue for the said interview might make it seem authentic, the mail received should be scrutinized delicately. Check here for details http://www.gloworld.com/ng/latest-news/disclaimer-sham-recruitment-exercise-and-unauthorised-use-of-the-name-of-globacom/",
    createdAt: "2018-03-25 06:12:01",
    updatedAt: "2018-03-25 06:12:01",
    commentId: "a0e2fc54-8e71-4adc-ac31-073a844f7b6f"
  },
  {
    inviteId: "a856aad1-ef1d-407f-92c5-e84d473ce6a8",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The location of the said interview is legit. Globacom is a registered company but there  is information on their official website to disregard any said recruitment excercise. Mails from one 'Dave Osas' are not authenticate should be ignored.",
    createdAt: "2018-03-25 06:49:05",
    updatedAt: "2018-03-25 06:49:05",
    commentId: "e6150fa0-f8fe-428a-a127-1b7066787be2"
  },
  {
    inviteId: "d4681585-65cd-443d-a589-26543e0cc7e5",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This does not seem real, and someone already posted something similar.\r\n\r\nhttp://isthisarealjob.com/mikeale/i-received-dis-277F23518766611",
    createdAt: "2018-03-26 01:12:23",
    updatedAt: "2018-03-26 01:12:23",
    commentId: "f2e85e60-914d-4c93-a5dd-0a354d16db13"
  },
  {
    inviteId: "d4681585-65cd-443d-a589-26543e0cc7e5",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "There are seceal companies with TGN as part of their name registered on CAC website, but none is TGN alone.\r\n\r\nNone of the companies registered on CAC has the same address as the address specified by your post.\r\n\r\nThe address is also associated with several scam company names.",
    createdAt: "2018-03-26 02:08:08",
    updatedAt: "2018-03-26 02:08:08",
    commentId: "4c2235c8-624f-4492-aa44-5949e211b9b9"
  },
  {
    inviteId: "cfbcceb8-dff7-40be-b5ba-821dfd1476c1",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The date on this reads 12/5/17, are they going back in time for the interview lol?",
    createdAt: "2018-03-26 02:17:10",
    updatedAt: "2018-03-26 02:17:10",
    commentId: "ce823205-de9e-404f-af13-92dc36e2ba5f"
  },
  {
    inviteId: "4cf11494-294f-4f0d-9026-fc0111081286",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Although not registered with the CAC, the company has a LinkedIn page and a website: www.grandleadheritage.org which doesn't seem to go through. There are conflicting stories on forums about if it is legit or not. Some claim they are into entrepreneurship and marketing while others claim it's a waste of time.",
    createdAt: "2018-03-26 02:30:34",
    updatedAt: "2018-03-26 02:30:34",
    commentId: "e0c89104-a3d0-4257-bcad-dfce359f6f6a"
  },
  {
    inviteId: "fb33e829-3a02-45d5-9fdc-302e9c75ff50",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No full company name, this particular address has been used by various GNLD firms in their recruitment mails. It doesn't seem to be legit. Don't waste your time.",
    createdAt: "2018-03-26 03:08:37",
    updatedAt: "2018-03-26 03:08:37",
    commentId: "0cb878c9-5dde-4755-b06e-0e6f8f424395"
  },
  {
    inviteId: "fd44cf8f-b527-4e36-a587-4d6cf07c77eb",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "A search for GMIS on the CAC website doesn't bring up anything, a wider search shows that  the stated address is for great wall logistic service limited. This invite is questionable and the information provided is ambiguous.",
    createdAt: "2018-03-26 22:30:07",
    updatedAt: "2018-03-26 22:30:07",
    commentId: "454fbd74-d784-4927-890a-3bcb43b1808c"
  },
  {
    inviteId: "187f568b-5ab9-4177-8e20-3a098e5388ea",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is real. Pml Advisory limited is a legitimate company registered withe the CAC. The official website is http://www.pml.com.ng",
    createdAt: "2018-03-27 00:23:00",
    updatedAt: "2018-03-27 00:23:00",
    commentId: "b98876ca-6c27-4d27-a7e2-658239e4c5dc"
  },
  {
    inviteId: "879c9817-4230-43d5-a6ee-843a30e31a27",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The address above is registered to Adrian Homes - a real estate development company. The mail appears to be legitimate. The company website is: www.adronhomesproperties.com",
    createdAt: "2018-03-27 00:27:30",
    updatedAt: "2018-03-27 00:27:30",
    commentId: "fb09ea7b-6c1e-47ff-aadb-9cdc98d98c84"
  },
  {
    inviteId: "63a19165-d539-4340-a8fe-689744b8731c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is real. Pml Advisory limited is a legitimate company registered withe the CAC. The official website is http://www.pml.com.ng",
    createdAt: "2018-03-27 00:31:12",
    updatedAt: "2018-03-27 00:31:12",
    commentId: "376b6038-cacf-4dc6-8341-8ecb2df543f0"
  },
  {
    inviteId: "2f69d135-2b14-4d62-8ff8-e03f75527bb8",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Custodian Life Assurance Limited is a registered company with the CAC. The address also correlates with the registered address. This is real.",
    createdAt: "2018-03-27 00:35:21",
    updatedAt: "2018-03-27 00:35:21",
    commentId: "3ea6f289-2afc-49be-9d9c-22d9b14d43a9"
  },
  {
    inviteId: "eba24871-6d1f-4838-8419-14b2ba0965bf",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This looks like a typical GNLD / MLM job invite, 1. No company name is specified, 2. it ask you to come tomorrow 3. There are errors in the invite.\r\n\r\nDon't waste your time.",
    createdAt: "2018-03-27 17:41:45",
    updatedAt: "2018-03-27 17:41:45",
    commentId: "60a78199-52f5-4a2a-9e7c-4babfbbeab2d"
  },
  {
    inviteId: "fed9d4dd-c12b-4c04-98dd-a256f7c683ac",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "UPDATE: Its pure GNLD:\r\n\r\n\r\nYou are invited for a JOB INTERVIEW on THUR 23RD NOV, 9am @ 4 Alara St, off Commercial Avenue Sabo-Yaba, Lagos. Details in ur mailbox.www.hyinsco.com.ng.\r\n\r\n\r\nI got there and the story changed.\r\nWe were asked to register for partnership with N12,000.\r\nAnd I wasted N1600 on transport.\r\n\r\nCredit: Tenifayo23",
    createdAt: "2018-03-27 21:34:00",
    updatedAt: "2018-03-27 21:34:00",
    commentId: "f78318af-295e-4b48-b1f1-dddb7d484363"
  },
  {
    inviteId: "c44bc1c3-a302-4132-b6a1-9c0fe44f814b",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "This is a Scam please do not bother. The above stated outfit isn't registered on the CAC website, It also has no visible presence on a wider search. Besides a company who is into the above mentioned sectors would definitely know the usefulness of having a website and not just asking invitees to call the secretary.",
    createdAt: "2018-03-27 22:56:38",
    updatedAt: "2018-03-27 22:56:38",
    commentId: "1edb5305-3641-4365-a3f0-0020de39aa45"
  },
  {
    inviteId: "191262dd-9ba8-41b2-b9f7-ce1833ae05ab",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Although BGI GROUP NIGERIA LIMITED is not found on the CAC website. They have a website: http://www.bgienergyservices.com.\r\n\r\nTheir Lagos contact: \r\n\r\nLagos State - Nigeria\r\nBGI Energy Services Ltd\r\n12, Adebisi Oyenola Street,\r\nIdado, Lekki,\r\nLagos State.\r\n+234-(0) 8077 708511\r\n\r\n+234-(0) 8051 108424\r\n\r\nWarri contact:\r\n\r\nDelta State - Nigeria\r\nBGI Energy Services Ltd\r\n8, 15th Street, DDPA Housing Estate,\r\nOff Airport Road, Effurun, Warri,\r\nDelta State.\r\n+234-(0) 8152 073518\r\n\r\n+234-(0) 8033 740963\r\n\r\ninfo@bgienergyservices.com",
    createdAt: "2018-03-27 23:05:41",
    updatedAt: "2018-03-27 23:05:41",
    commentId: "250fffa3-068d-4ab2-9b33-eb81dc024772"
  },
  {
    inviteId: "fd9eb76f-71db-4f57-8c7b-3345b8c696e2",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "The information provided in the invite is too limited. There are numerous outfits registered as ICA on the C.A.C website so it is difficult to pin point which of the ICA's. This might be what the poster intends to use in hiding to perpetrate his/her scam. The address given doesn't correlate with name in anyway as well.",
    createdAt: "2018-03-27 23:14:02",
    updatedAt: "2018-03-27 23:14:02",
    commentId: "2e966ae1-49a0-44a6-a068-54cd29b6922a"
  },
  {
    inviteId: "73441d80-4793-49be-88bd-6876f2dd376a",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "SOl NIgeria failed to come up on CAC search, however a wider search shows that the address stated above is affiliated to \r\n\r\nStrategic Outsourcing Limited\r\nSOL Drive, off Olusesi St, \r\n2nd Toll Gate Lekki\r\nLagos \r\nNigeria\r\n\r\nWebsite: http://www.solnigeria.com/",
    createdAt: "2018-03-27 23:23:11",
    updatedAt: "2018-03-27 23:23:11",
    commentId: "436fc4ef-1361-4a8c-acb3-76649cca0033"
  },
  {
    inviteId: "b6ef7386-552d-4232-94d7-a7cffe6fca90",
    userId: "92fca0e9-0018-415a-a448-33f0b1a6d93b",
    body: "Okay\r\nNoted",
    createdAt: "2018-03-28 03:20:48",
    updatedAt: "2018-03-28 03:20:48",
    commentId: "258c3e3b-ed0d-48c6-b880-dc8d0d9aab48"
  },
  {
    inviteId: "a0387415-1fa6-4869-a0b7-3187c6ed4ebd",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "PD connect investment limited is not registered with CAC, it is not a Nigerian company, rather it is in the U.K. It's Registered office address\r\nDaniel C Short Limited, 70 Seabourne Road, Bournemouth, BH5 2HT\r\nCompany status\r\nActive\r\nCompany type\r\nPrivate limited Company\r\nIncorporated on\r\n28 August 1991\r\n\r\nWebsite. http://www.pdinvestments.co.uk",
    createdAt: "2018-03-28 05:04:03",
    updatedAt: "2018-03-28 05:04:03",
    commentId: "63beb718-af47-40d0-af9c-5d7be792335b"
  },
  {
    inviteId: "059c48e0-d739-42fb-95d5-10c8bbf69df4",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      '"They potray themselves to be a development firm based in Washington D.C who provide specialized technical assistance". \r\n@Wisdom Anthony',
    createdAt: "2018-03-28 16:36:29",
    updatedAt: "2018-03-28 16:36:29",
    commentId: "13b86b9d-29d3-4405-afd2-50dc07afc94a"
  },
  {
    inviteId: "41beed8d-a1ac-42f7-9e22-3af06cea1a1d",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This company is not registered with the CAC, a lookup of the address shows they are indeed present at that location. However, from reviews online.. it appears they are into GNLD. Beware!!!",
    createdAt: "2018-03-29 03:47:57",
    updatedAt: "2018-03-29 03:47:57",
    commentId: "d1835a31-b619-41f8-a96f-b45d948195fc"
  },
  {
    inviteId: "2b65d4cf-639b-4ac1-9800-579e1658d205",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is a legitimate company, the address on the mail matches the one on their website. http://www.oduainvestment.com.ng/odua-printing-publishing-company-limited/",
    createdAt: "2018-03-29 03:49:44",
    updatedAt: "2018-03-29 03:49:44",
    commentId: "811496bf-d50b-4a3d-883c-036074d10068"
  },
  {
    inviteId: "d25dc83b-ad93-47dd-b1f3-d44182d806ca",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "A search show's that Divergent Enterprise exists but the address is not as provided on the invite. The address on CAC website is: \r\nDIVERGENT ENTERPRISE LIMITED\t10 Ibukunolu street, pako busstop, Akoka- Yaba.\r\n\r\nIf you get an invite like this you gotta be careful and most importantly be sure you applied for the job.",
    createdAt: "2018-03-29 21:31:51",
    updatedAt: "2018-03-29 21:31:51",
    commentId: "d6e3a553-cc2c-4e71-8420-f0940b97d2fd"
  },
  {
    inviteId: "4b795f18-0055-4a6c-bf0e-0c417eda558b",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "LS-RESOURCE doesn't bring any results on a CAC search, There is no Abuja address which matches the establishments description and a wider search brings it up among result for scam invites.",
    createdAt: "2018-03-29 21:45:30",
    updatedAt: "2018-03-29 21:45:30",
    commentId: "ab677bc5-8f9f-4e2d-8d53-e92969feff6a"
  },
  {
    inviteId: "0b348733-676f-458e-82d8-ea4c6768269f",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "There is no name for the establishment, a search for the address on CAC brings up no results and a wider search show's a lot of scam reviews.",
    createdAt: "2018-03-29 22:20:54",
    updatedAt: "2018-03-29 22:20:54",
    commentId: "8e88457b-3814-45dc-b14e-6e850c545ad3"
  },
  {
    inviteId: "c82d6b86-aeb2-473b-bd6d-02b4f1b116fe",
    userId: "d24808fc-a1c9-4779-9b0a-7b334de769c7",
    body: "I wonder why all this scams .... Who E EPP!",
    createdAt: "2018-03-30 16:22:16",
    updatedAt: "2018-03-30 16:22:16",
    commentId: "fb92712d-6e5d-462b-9ad1-c681565ac3da"
  },
  {
    inviteId: "78972f18-7bf7-43fc-9b93-91280bc35bdb",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "A firm that is indeed into all the things stated above would have a registered name, and would be formal about their recruitment exercise. Secondly, they would be registered with the CAC. This doesn't seem valid. Beware!",
    createdAt: "2018-03-30 21:58:02",
    updatedAt: "2018-03-30 21:58:02",
    commentId: "7a07f02d-6254-47ba-9d3c-a7c2ee9b3857"
  },
  {
    inviteId: "26fc1d5d-aa79-4f04-8176-4c1dc31e100f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This company is not registered with the CAC, a search of the said address doesn't bring any relevant information. This is most likely not real.",
    createdAt: "2018-03-31 01:25:15",
    updatedAt: "2018-03-31 01:25:15",
    commentId: "a9b8e6af-99da-4891-bf30-40159087c9af"
  },
  {
    inviteId: "a79e6338-713e-4863-8fe4-8ea73e203e4f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No company name is specified, the above address is registered to a hospital. The mail is definitely from a legitimate source. Steer clear!!",
    createdAt: "2018-03-31 02:26:17",
    updatedAt: "2018-03-31 02:26:17",
    commentId: "de87ba3b-d744-4f9c-b89e-24e862fb4fb8"
  },
  {
    inviteId: "b2061d1a-84b2-4530-abe9-c6b7c31f63a8",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "GC RESOURCES is non-existent based on a search on the CAC website. Further search shows that GC RESOURCES is reported on as a scam from reviews made by invitees.\r\nThey're a GNLD outfit.",
    createdAt: "2018-03-31 20:17:37",
    updatedAt: "2018-03-31 20:17:37",
    commentId: "59c50ab0-620b-47e5-8f6c-af88d1b50e6d"
  },
  {
    inviteId: "06b983fe-8b1d-4475-bb02-1272890c5412",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Edgertit is an organisation that offer specialized services to the Medicals, Pharmaceuticals, Life Sciences. The invite appears to.be legitimate",
    createdAt: "2018-04-01 06:23:54",
    updatedAt: "2018-04-01 06:23:54",
    commentId: "312fce49-6466-4a17-9007-2e4c90a44609"
  },
  {
    inviteId: "9a1da0c2-d4d3-42bd-8de1-f9af799b8e36",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Forza Nig Ltd is an automated vehicle tracking solutions firm. The invite is definitely legitimate.",
    createdAt: "2018-04-01 22:10:51",
    updatedAt: "2018-04-01 22:10:51",
    commentId: "8a505091-ba21-4cf9-adb7-024edaa1a7a7"
  },
  {
    inviteId: "748e72b7-92fa-4d9b-99a0-c1e832a5126c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The said invitation has been reported by many as scam. A relative search of the organisation doesn't yield satisfactory results to. Beware!!!",
    createdAt: "2018-04-01 22:13:49",
    updatedAt: "2018-04-01 22:13:49",
    commentId: "1f572588-4b44-4026-882e-f97d35869f0c"
  },
  {
    inviteId: "2b58e1ce-b427-4ebc-be2a-846c23f2b1d2",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Dovegreen global services appears to be a legitimate organisation. It is not GNLD. Find out more on their website at: http://www.dovegreenglobalservices.com/index.html",
    createdAt: "2018-04-01 22:19:49",
    updatedAt: "2018-04-01 22:19:49",
    commentId: "f4a097b3-3392-4436-9fd5-463e0945bca2"
  },
  {
    inviteId: "35710418-94dd-4603-a392-140b70c368f0",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The full company name was not specified, M.H.S could mean Managed Healthcare Services Ltd (MHS) which is a health management organisation in Lagos. However, the address of managed Healthcare Services Ltd is 16, Obokun Street, Off Coker Road, Ilupeju, Lagos, which is different from the one stated in the invite. Chances are they are not the same organisation. This might be scam.",
    createdAt: "2018-04-01 22:31:32",
    updatedAt: "2018-04-01 22:31:32",
    commentId: "ff403cbe-17a7-43cc-b6f9-b198fd7a4210"
  },
  {
    inviteId: "6c309d99-7c79-4b58-a59b-a7913eef9e46",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Please do not waste your time, search shows that the outfit is run by GNLD operators and the interview invite is just a ploy.",
    createdAt: "2018-04-03 01:15:27",
    updatedAt: "2018-04-03 01:15:27",
    commentId: "d93b85a4-f43f-486d-b934-5f0868d3fa26"
  },
  {
    inviteId: "e92be9f7-0d3c-4a00-bae2-5cc71f61317c",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "According to the CAC website, DG doesn't exist a wider search shows the address to be used as an address for other interview invites as well. It's a scam being thrown out in different formats to mislead job seekers.",
    createdAt: "2018-04-03 01:45:47",
    updatedAt: "2018-04-03 01:45:47",
    commentId: "9f3c63e7-e0b4-463a-8bde-cb574ac1661c"
  },
  {
    inviteId: "c557debd-4b77-4007-b41c-0ccc7d0600aa",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Max Global is an American Organization. This is clearly a fake invite. Probab;y GNLD.",
    createdAt: "2018-04-03 04:39:05",
    updatedAt: "2018-04-03 04:39:05",
    commentId: "20b1c1c8-9be3-4507-aea6-6cee95bc2650"
  },
  {
    inviteId: "1f38e35f-55a5-4959-a062-1dc904c55f7f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Research shows that this particular company has been reported by many to be GNLD. They have no working website and are definitely now worth it. Steer clear.",
    createdAt: "2018-04-03 04:49:15",
    updatedAt: "2018-04-03 04:49:15",
    commentId: "ec50a258-53ce-4626-8d22-6d24e7cb425a"
  },
  {
    inviteId: "1305dc8e-0881-4c05-8d56-ff35f75be434",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This particular address was associated with the mail in the previous post. This is clearly a waste of time.",
    createdAt: "2018-04-03 04:52:08",
    updatedAt: "2018-04-03 04:52:08",
    commentId: "6549ce1d-3b2b-47e2-a094-358c361cb6a2"
  },
  {
    inviteId: "cba8cdd5-3767-4c16-9933-7bbfc2d4392a",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This new scam has been circulating on linkedin, the fact that you are asked to provide your login details including your password is enough evidence that its scam. Don't fall victim!",
    createdAt: "2018-04-03 21:10:49",
    updatedAt: "2018-04-03 21:10:49",
    commentId: "6e457417-aefe-4581-aa38-70b0de42f8f0"
  },
  {
    inviteId: "23872834-502a-43e5-966c-c3aa07d01b5b",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "These are MLM operators using interview invites as a decoy to get referrals to participate in their scheme.",
    createdAt: "2018-04-03 23:53:39",
    updatedAt: "2018-04-03 23:53:39",
    commentId: "563f2edf-cf41-4c7f-9c24-ae23c628a0ae"
  },
  {
    inviteId: "b575bc83-89bc-4a26-b95e-598f95b165bc",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Hello please be informed that the STRATEGIC GLOBAL RESOURCES & LOGISTICS LTD registered with C.A.C is located at\tNO9,MAOTSETUNGASOKORO,ABUJA,FCT and as such I would advise you be extremely cautious in your dealings with this guys.",
    createdAt: "2018-04-03 23:58:31",
    updatedAt: "2018-04-03 23:58:31",
    commentId: "8d72e139-0493-45a3-a5db-929c5d2e53be"
  },
  {
    inviteId: "73c778ca-d9a3-4662-a395-c5bdabea15bd",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "A search on CAC website brought no results. Further search shows that Access Global is a Human resource consulting firm in Bengaluru, India\r\nAddress: Rajaji Nagar, Bengaluru, Karnataka, India\r\nPhone: +91 99868 66866",
    createdAt: "2018-04-04 00:27:13",
    updatedAt: "2018-04-04 00:27:13",
    commentId: "c5f8f315-b5d9-4480-8fb9-17310ae28d18"
  },
  {
    inviteId: "86aa962a-0e9e-4e8c-b75e-3df11bb803ac",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Yes it is a scam, CAC search on SCIENTIFIC ADVERSARY BOARD was fruitless. Further search also brought up no result..",
    createdAt: "2018-04-04 00:45:11",
    updatedAt: "2018-04-04 00:45:11",
    commentId: "2c88856d-afa1-414a-9e17-3edf5f39110e"
  },
  {
    inviteId: "700c0874-c47c-4120-84db-da933edf618c",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Sorry, no company is stated in your post, A search on the address shows it is related to  Grandlead Heritage which is not on the C.A.C website and also comes up when scam search is carried out.",
    createdAt: "2018-04-04 01:00:36",
    updatedAt: "2018-04-04 01:00:36",
    commentId: "d2d966fe-30c8-486b-a21a-b5cc849bb7c9"
  },
  {
    inviteId: "8e4cc0de-d314-4868-bad0-341eab0ad197",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is definitely not real, a proper Organisation would have done proper introduction. Also, a search of the said address brings no valid results.",
    createdAt: "2018-04-04 05:07:26",
    updatedAt: "2018-04-04 05:07:26",
    commentId: "5578c8a1-5f62-4cd3-9a26-7edb35593a8e"
  },
  {
    inviteId: "dffebb39-9e10-4128-aafc-a3f04a324953",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'The website is owned by Strategic Outsourcing limited (SOL), a "professional outsourcing company", the address is also linked to the said company. The invitation appears to be legit',
    createdAt: "2018-04-04 05:13:35",
    updatedAt: "2018-04-04 05:13:35",
    commentId: "5dd5f69e-0fb5-4ed2-985c-2c361eed3a40"
  },
  {
    inviteId: "450de1dd-8def-4f85-a075-c888d6f532cc",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "This is not legit, recipients of this invite have stated that they didn't reach out to anyone or establishment in respect of the stated position.",
    createdAt: "2018-04-05 00:39:02",
    updatedAt: "2018-04-05 00:39:02",
    commentId: "c5d27f20-ef69-4372-830d-9450a89e0283"
  },
  {
    inviteId: "15da7fff-2e1e-4e36-a476-fa823a7a1a30",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "On the CAC website there is no result for fortech consults, rather FORTECH ENGINEERING LIMITED is registered and it's address is C8, SAZODO PLAZA TRANS EKULU which is in Enugu.",
    createdAt: "2018-04-05 00:48:33",
    updatedAt: "2018-04-05 00:48:33",
    commentId: "d59752c7-0563-495f-8f85-4a231f144304"
  },
  {
    inviteId: "1abcd13f-bc02-47b0-8f9c-da1180ebaca9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Although not registered with the CAC, the company has a LinkedIn page and a website: www.grandleadheritage.org which doesn't seem to go through. There are conflicting stories on forums about if it is legit or not. Some claim they are into entrepreneurship and marketing while others claim it's a waste of time.",
    createdAt: "2018-04-05 04:40:57",
    updatedAt: "2018-04-05 04:40:57",
    commentId: "152a143e-e0de-4d02-b83e-d803e7f7c82d"
  },
  {
    inviteId: "713c8fc9-b0a6-4896-85b7-b63380a44c5f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "It's sad to hear of experiences like this...",
    createdAt: "2018-04-05 15:18:04",
    updatedAt: "2018-04-05 15:18:04",
    commentId: "1a5ea254-a7de-4fa2-8a68-75ca12e070a1"
  },
  {
    inviteId: "823c9794-d359-4dcf-8dd2-d7eeeb244e26",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "DOHENEY SERVICES LIMITED\tNO.33TOWNPLANNINGWAY,ILUPEJU,LAGOS is a credible establishment, Registered with the C.A.C. According to reviews they invite and interview you, then when you get a job they get a certain percentage of your first salary.",
    createdAt: "2018-04-05 22:14:24",
    updatedAt: "2018-04-05 22:14:24",
    commentId: "29b3f1ca-1e3a-4bac-b9b3-e4a2656f752a"
  },
  {
    inviteId: "713c8fc9-b0a6-4896-85b7-b63380a44c5f",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body: "This experience is rather unfortunate.",
    createdAt: "2018-04-05 22:16:32",
    updatedAt: "2018-04-05 22:16:32",
    commentId: "ef80c601-67fc-4fb9-8344-83860b0ab907"
  },
  {
    inviteId: "130579d6-9269-4c1a-ab89-f9f64331621e",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "According to online reviews they're touted to be an entrepreneurial outfit. Although how they work isn't clear. But a search on the CAC website didn't yield any result with respect to their name PGMC. They're also otherwise known as pathway services.",
    createdAt: "2018-04-05 22:41:54",
    updatedAt: "2018-04-05 22:41:54",
    commentId: "4890dcc8-a6ea-4acd-8b7a-29ea8d651a5e"
  },
  {
    inviteId: "9586ae2c-1e5f-4661-ba06-7eb2b39ecdfb",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "You have been shortlisted for an assessment on FRI.6/04/18. Details as follows;\r\n\r\nVenue: No 8 Adebare Street ,Ogudu, Lagos State\r\nTime: 9am\r\nRef-code: DIR/91\r\n\r\nThis is what i got...i think its scam, we even got the same address.",
    createdAt: "2018-04-06 03:05:28",
    updatedAt: "2018-04-06 03:05:28",
    commentId: "3f139904-2cba-4566-85fa-4cfc9b0cd66c"
  },
  {
    inviteId: "a46dfc6e-c056-4c28-9206-b6cfea6f9ea6",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The said company is not based in Nigeria, furthermore no legitimate company would request for a certain fee to be paid before registration. This is probably a fraud scheme.",
    createdAt: "2018-04-06 04:10:29",
    updatedAt: "2018-04-06 04:10:29",
    commentId: "24bb38fe-276e-4fff-a8e7-b368f847cd3b"
  },
  {
    inviteId: "55d93028-b04f-4dc2-b0a4-7d9e664f3553",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Precious Paints Nigeria Limited is a real organization based in Lagos. They have a working website detailing the services rendered. Also, a relative search shows they are not affiliated with any fraud scheme. This job opening is legitimate.",
    createdAt: "2018-04-06 04:16:03",
    updatedAt: "2018-04-06 04:16:03",
    commentId: "24c45962-4e92-44fc-9962-ed9d95a7655a"
  },
  {
    inviteId: "5570c647-14e5-47a3-b665-ccf670495351",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "No details of  the said company, this is a fraud scheme.",
    createdAt: "2018-04-06 04:16:54",
    updatedAt: "2018-04-06 04:16:54",
    commentId: "bbbfe6bb-fb02-4f52-8c8b-a009db3feaad"
  },
  {
    inviteId: "191262dd-9ba8-41b2-b9f7-ce1833ae05ab",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The company stated above is different from BGI Energy Services Ltd, which is a diversified oil, gas and construction company  in Nigeria. A search of BGI group doesn't bring valid information. This is probably not real but should be further looked into.",
    createdAt: "2018-04-06 04:23:51",
    updatedAt: "2018-04-06 04:23:51",
    commentId: "396e8e5f-5c31-49dc-a6cb-04b3196c764c"
  },
  {
    inviteId: "7915d072-1f85-4f23-93f0-66dc57ff771a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The company stated above is different from BGI Energy Services Ltd, which is a diversified oil, gas and construction company  in Nigeria. A search of BGI group doesn't bring valid information. This is probably not real but should be further looked into.",
    createdAt: "2018-04-06 04:24:15",
    updatedAt: "2018-04-06 04:24:15",
    commentId: "403331d3-b1e8-4170-b5e2-7aaa5c9c1e12"
  },
  {
    inviteId: "9586ae2c-1e5f-4661-ba06-7eb2b39ecdfb",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This has been verified in subsequent posts. It is a fraud scheme.",
    createdAt: "2018-04-06 04:27:16",
    updatedAt: "2018-04-06 04:27:16",
    commentId: "14985f56-dbcb-4fd6-aa0f-a7a4d4209615"
  },
  {
    inviteId: "7915d072-1f85-4f23-93f0-66dc57ff771a",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "I thought as much..i even saw another company tagged with the same address and number.",
    createdAt: "2018-04-06 04:29:39",
    updatedAt: "2018-04-06 04:29:39",
    commentId: "8a04f482-08b0-4b95-8145-bdac21359b16"
  },
  {
    inviteId: "f230efcf-9710-4fe7-8409-96de90754849",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Unfortunately the information provided here isn't enough to run a background check in order to authenticate the offer.\r\nMy advice is you call the number and make enquiries, also ensure to be discreet as you do so.",
    createdAt: "2018-04-06 15:28:47",
    updatedAt: "2018-04-06 15:28:47",
    commentId: "0c6d37bf-0b11-43c4-908a-8a1f8079b484"
  },
  {
    inviteId: "8b8e136c-2e5b-4dda-8328-cc88c8d15623",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "GM Group doesn't bring up any result from the CAC database, a wider search brings up General motors, I'd advise you be skeptical while dealing with whoever sent this invite to you.",
    createdAt: "2018-04-07 04:50:20",
    updatedAt: "2018-04-07 04:50:20",
    commentId: "3eb48f02-7ac7-4f56-9da3-619adba4cffe"
  },
  {
    inviteId: "988a1e5b-5f07-420a-8610-91348c7775a3",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Looks legit enough. If its not legit, they must have gone through a lot of trouble to fake it. Although, there are a few names on CAC with alajo as part of theie name, however, there's no name as Alajo Online. the domain was registered 2017,  Although, the address on the website is a lagos address, and there are no contact information. If you are in ibadan, or able to get to ibadan easily, i think you should give it a try",
    createdAt: "2018-04-07 16:42:46",
    updatedAt: "2018-04-07 16:42:46",
    commentId: "ddd11790-8715-4fbe-82ff-bf8e0973f356"
  },
  {
    inviteId: "988a1e5b-5f07-420a-8610-91348c7775a3",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Alajo online isn't registered with CAC. From the invite they seem serious and legit But. You should be discreet in relating with them.",
    createdAt: "2018-04-07 17:58:20",
    updatedAt: "2018-04-07 17:58:20",
    commentId: "69a1b108-7f07-4700-a8c4-63d972378c21"
  },
  {
    inviteId: "988a1e5b-5f07-420a-8610-91348c7775a3",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thanks",
    createdAt: "2018-04-07 18:11:38",
    updatedAt: "2018-04-07 18:11:38",
    commentId: "cb857a42-008d-449c-897b-f7133e5fb172"
  },
  {
    inviteId: "988a1e5b-5f07-420a-8610-91348c7775a3",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thanks",
    createdAt: "2018-04-07 18:12:18",
    updatedAt: "2018-04-07 18:12:18",
    commentId: "a03df1ce-a6ae-4617-8661-b2367d5eb49b"
  },
  {
    inviteId: "4d0353d4-870f-4fc5-95b1-98e4d13df23f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "An update, this has been confirmed as a real job. There was test done. But no information on anyone getting the job yet",
    createdAt: "2018-04-08 04:40:41",
    updatedAt: "2018-04-08 04:40:41",
    commentId: "e871b1e8-0515-4d20-8061-a5d74440745a"
  },
  {
    inviteId: "7843b41d-d3d1-415a-8f88-9b689d2c82af",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No company name is specified and thus, no further verification can be done. No legitimate recruitment process is done this way.",
    createdAt: "2018-04-08 05:08:20",
    updatedAt: "2018-04-08 05:08:20",
    commentId: "854efc95-7b92-48af-9a82-8742fc2a88b0"
  },
  {
    inviteId: "988a1e5b-5f07-420a-8610-91348c7775a3",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "I don't think this is legit, is there such thing as \"automatic interview'? ..I mean without even screening the CV yet as clearly stated.",
    createdAt: "2018-04-08 05:13:50",
    updatedAt: "2018-04-08 05:13:50",
    commentId: "9909bd35-61be-4d87-9ebc-ffa1a68cef3b"
  },
  {
    inviteId: "650d0eab-5944-487c-a12b-ee93533df048",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "For a firm that could sponsor international travels, I think the company name would have been clearly stated. Also, the recipient mail is an individual one and doesn't look official. Who composes these mails?",
    createdAt: "2018-04-08 05:16:53",
    updatedAt: "2018-04-08 05:16:53",
    commentId: "a2e3b8b8-38fc-48a1-ace5-ba96962c4afe"
  },
  {
    inviteId: "f230efcf-9710-4fe7-8409-96de90754849",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Inadequate information about the job invite, I support calling the number to make enquiries.",
    createdAt: "2018-04-08 05:21:17",
    updatedAt: "2018-04-08 05:21:17",
    commentId: "f8e8a765-e69d-4522-b13a-5a9f2f08f110"
  },
  {
    inviteId: "988a1e5b-5f07-420a-8610-91348c7775a3",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "?",
    createdAt: "2018-04-08 15:35:02",
    updatedAt: "2018-04-08 15:35:02",
    commentId: "de04f1b6-2a80-417c-bf73-ce0752544aab"
  },
  {
    inviteId: "dc8a2be2-5677-4586-b15f-24dde41dac69",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'The organisation name is not specified, however a check on the address brings out "MacTay Group", with their website at http://mactaygroup.com .The number given should be called for further information just to be on the safe side.',
    createdAt: "2018-04-08 18:09:50",
    updatedAt: "2018-04-08 18:09:50",
    commentId: "f21233f2-7d9a-4043-8235-4a0ce925fd26"
  },
  {
    inviteId: "15f2a58e-eac5-4385-9302-110afb316f47",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This invite is fake, the address is not real and has been known to be used by GNLD peddlers.",
    createdAt: "2018-04-08 18:12:02",
    updatedAt: "2018-04-08 18:12:02",
    commentId: "9aaad863-6d96-4f76-82ee-baa984d52eb8"
  },
  {
    inviteId: "e6a8c13e-8f5a-41bd-8172-bdcf874bf1f3",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is legit, Fosad consulting limited is a prpfeasional services firm. They have a working website, also, the address in the invite corresponds with the one on their website. Goodluck.",
    createdAt: "2018-04-08 18:17:43",
    updatedAt: "2018-04-08 18:17:43",
    commentId: "afbbf02d-eccc-4163-83c3-a53c18d56c96"
  },
  {
    inviteId: "09d573a8-378f-42b1-b6f2-567fb25e7388",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is GNLD, many people have received similar messages. Some invites have B&G group as the company name, with the same address. My advice is not to waste your time.",
    createdAt: "2018-04-08 18:26:12",
    updatedAt: "2018-04-08 18:26:12",
    commentId: "4922fb4d-8e2b-4295-a69c-4c23887fa4af"
  },
  {
    inviteId: "46abce35-56bd-4ae7-8802-f3bb62fe5011",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Afriglobal group consists of a firm offering various services, ranging from medical care to logistics. The address stated in the mail is registered to Nagode industries. Which is also a part of Afriglobal services. This invite is legitimate.",
    createdAt: "2018-04-09 00:16:40",
    updatedAt: "2018-04-09 00:16:40",
    commentId: "93ba9ff1-801a-4a78-80bd-342e87a6f890"
  },
  {
    inviteId: "09d573a8-378f-42b1-b6f2-567fb25e7388",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "?",
    createdAt: "2018-04-09 06:49:33",
    updatedAt: "2018-04-09 06:49:33",
    commentId: "4eccc3af-845b-4386-8dfe-9876cf0d921a"
  },
  {
    inviteId: "ead5f061-bce6-4c20-9241-6aae664dc785",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "it definitely isn't legit, that address pops up with scam reviews on search and the establishments do not also bring up a result on a CAC name search",
    createdAt: "2018-04-10 05:23:37",
    updatedAt: "2018-04-10 05:23:37",
    commentId: "bb11c779-b318-4765-aee7-5b5bbb0376d4"
  },
  {
    inviteId: "46abce35-56bd-4ae7-8802-f3bb62fe5011",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body: "spot on!",
    createdAt: "2018-04-10 05:27:53",
    updatedAt: "2018-04-10 05:27:53",
    commentId: "8345dc09-8ac7-433b-9c2d-cc45dbb77977"
  },
  {
    inviteId: "f6e9c2fe-1e7f-44a5-b3d5-33e261525e5e",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "JNJRecruiting doesn't bring up any results on  a CAC search. \r\nBut a wider search shows there is a website:\r\nhttps://www.jnjrecruiting.com, which doesn't still tally with what is on the invite because I don't see why a company with a domain would rather use a hotmail. \r\nFurthermore the information provided is sketchy. NO verifiable address included.",
    createdAt: "2018-04-10 05:47:11",
    updatedAt: "2018-04-10 05:47:11",
    commentId: "2c2d48b8-922a-4928-b096-752ebc502e4a"
  },
  {
    inviteId: "4e356ff9-8690-474e-bc94-16cea09c47e9",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Looks like a default GNLD invite.",
    createdAt: "2018-04-10 05:51:07",
    updatedAt: "2018-04-10 05:51:07",
    commentId: "e0739c17-e065-4d72-b6b7-04785e7a595c"
  },
  {
    inviteId: "46abce35-56bd-4ae7-8802-f3bb62fe5011",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Nice.",
    createdAt: "2018-04-10 05:56:53",
    updatedAt: "2018-04-10 05:56:53",
    commentId: "9d87733b-cdff-4dda-8020-540b8d8948b7"
  },
  {
    inviteId: "0d4329e5-549d-4d8c-9189-55871c65d2f6",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Looks like a default GNLD template. No company name specified. The same message has been around for a while...",
    createdAt: "2018-04-10 06:01:32",
    updatedAt: "2018-04-10 06:01:32",
    commentId: "e2271591-2423-4cb6-a858-a52b202d091d"
  },
  {
    inviteId: "a815fa3d-6f34-43f6-ada0-a83c5bb03ea5",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Cittanuvola seems to be credible. They are a cloud based business solution that provide for clients accounting operational needs etc. \r\nThe address provided is the same as the Nigerian address on their website and their email seems in order.\r\n\r\nMore details:\r\n\r\nWebsite: www.cittanuvola.com/\r\n\r\nAddress: UNITED KINGDOM OFFICE\r\n27 Old Gloucester Street,London, WC1N 3AX\r\n\r\n+44-208-133-6670\r\n\r\ninfo@cittanuvola.com\r\n\r\nNIGERIA OFFICE\r\n5 Sadiku Street,Agidingbi, Ikeja,\r\n\r\nLagos, Nigeria\r\n\r\n+2348072004999 , +2349020218214",
    createdAt: "2018-04-10 06:21:14",
    updatedAt: "2018-04-10 06:21:14",
    commentId: "a446a091-3307-419f-a779-f31520c5cce8"
  },
  {
    inviteId: "eef6b526-ff01-4f81-9bed-f662676ec4b2",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No organization name was specified, the address search brings up one Magdala limited, which is neither legitimate and is affiliated with scam reports. Beware!!",
    createdAt: "2018-04-11 16:44:15",
    updatedAt: "2018-04-11 16:44:15",
    commentId: "dbee7061-94bf-4cad-bead-58e7e001e132"
  },
  {
    inviteId: "0c03068a-c61d-49b1-a1a0-f5867428e2f0",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The address is registered to the stated company, they also have a website: http://pglogs.net/ .I think this is real.",
    createdAt: "2018-04-11 16:47:00",
    updatedAt: "2018-04-11 16:47:00",
    commentId: "a2b5edd0-40f8-4d33-a5f1-7f577ede109f"
  },
  {
    inviteId: "68c4aca2-bc59-4414-ac81-450043a9f729",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Search results are not satisfactory, no valid information found. There is a LinkedIn profile for OAS, however, this firm is based in Ireland. the website given is also not going through. Scam?",
    createdAt: "2018-04-11 22:43:49",
    updatedAt: "2018-04-11 22:43:49",
    commentId: "082f9ac0-4ccf-4e4c-8b44-748dc2d8c552"
  },
  {
    inviteId: "22ec6c0e-ff4f-4826-a0b0-e9e16656b356",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The details given in this invite are not enough to run a proper check. MG USA is not a firm here in Nigeria. Certainly not legit.",
    createdAt: "2018-04-11 22:45:56",
    updatedAt: "2018-04-11 22:45:56",
    commentId: "f4d3f9c0-ec01-4398-a70b-20f0d28d2efa"
  },
  {
    inviteId: "510d98b9-ca27-4806-a1bf-ee758d26594f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is not legitimate, there are reports that they are into GNLD",
    createdAt: "2018-04-11 22:47:11",
    updatedAt: "2018-04-11 22:47:11",
    commentId: "4eaa97e7-b3b3-40ce-a9cf-78d5117506d4"
  },
  {
    inviteId: "96a6d807-4224-446d-a74c-b4865e84e01f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This address is affiliated with one BSM limited which is probably also not legitimate. No such company exists in Nigeria, not legit.",
    createdAt: "2018-04-11 22:51:01",
    updatedAt: "2018-04-11 22:51:01",
    commentId: "51f8e72b-fb82-42ce-a2d7-9ed0a1126209"
  },
  {
    inviteId: "7fd70202-19a5-4c30-827f-2366fe325a3e",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This address is in use w=by several GNLD firms. definitely not legit.",
    createdAt: "2018-04-11 22:51:57",
    updatedAt: "2018-04-11 22:51:57",
    commentId: "9f3cb7a9-f5f3-4b78-be41-dfa626e44378"
  },
  {
    inviteId: "87ad0a7d-cc60-4d39-82e2-f0bd898d2a99",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "BG-lead concept is into GNLD, We have received several reports. Steer clear.",
    createdAt: "2018-04-11 22:53:04",
    updatedAt: "2018-04-11 22:53:04",
    commentId: "56e4b7c0-fe32-48e5-ad32-7a99b488308b"
  },
  {
    inviteId: "2e5ec68a-37f1-42f3-b950-5de6968cfc3a",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "There's a company (an organization called handicap international), however, it is impossible to determine if what you got is real or false. if you provide more information, it would go a long way",
    createdAt: "2018-04-12 03:57:42",
    updatedAt: "2018-04-12 03:57:42",
    commentId: "3f3cac48-4384-40a3-aff5-24b1598c88ef"
  },
  {
    inviteId: "2e5ec68a-37f1-42f3-b950-5de6968cfc3a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Handicap international is a non-profit organisation with headquarters in France. I doubt they message people for recruitment lol.",
    createdAt: "2018-04-12 05:50:38",
    updatedAt: "2018-04-12 05:50:38",
    commentId: "32b228cf-6301-4702-93e6-19a534fb539b"
  },
  {
    inviteId: "e2b63a21-1ed0-42d5-8bea-928055789052",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "The address is authentic for sure, but the name Zion City Radio  is not in CAC Database. Nothing is showing up on general Google search either.",
    createdAt: "2018-04-12 06:20:32",
    updatedAt: "2018-04-12 06:20:32",
    commentId: "eff92d80-7870-45d0-9231-2291c2d4045f"
  },
  {
    inviteId: "e2b63a21-1ed0-42d5-8bea-928055789052",
    userId: "57c8bc63-9467-442b-91f7-b93d3f9cb7d0",
    body:
      "That got me skeptical too. I ran a search on google and it came up with nothing as regards the name of the radio station. But going by the job notice, it states that it is a leading christian online radio station in africa, located in the heart of Lagos.",
    createdAt: "2018-04-12 06:29:31",
    updatedAt: "2018-04-12 06:29:31",
    commentId: "a92c464e-556b-43ac-afd8-763c79d2d703"
  },
  {
    inviteId: "e2b63a21-1ed0-42d5-8bea-928055789052",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Yes, i think you should give it a try.",
    createdAt: "2018-04-12 06:40:07",
    updatedAt: "2018-04-12 06:40:07",
    commentId: "864f3718-fab9-4124-bd26-8f38c3066d18"
  },
  {
    inviteId: "e2b63a21-1ed0-42d5-8bea-928055789052",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "and, update us on how it goes. :) good luck!",
    createdAt: "2018-04-12 06:40:50",
    updatedAt: "2018-04-12 06:40:50",
    commentId: "a289dbdf-7c1e-4eab-b8b0-49b961cb33f4"
  },
  {
    inviteId: "dd8c4f21-1885-4e2d-b016-5b130895fba3",
    userId: "57c8bc63-9467-442b-91f7-b93d3f9cb7d0",
    body:
      "Ive received this message severally. Never went for any though. Heard its GNLD",
    createdAt: "2018-04-12 06:45:46",
    updatedAt: "2018-04-12 06:45:46",
    commentId: "0beb9717-f126-4173-97c5-74f12919980c"
  },
  {
    inviteId: "2d1d6357-43a2-4b14-b0f0-99104460cdfc",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "There's a registered company in CAC Database called CRANFIELD BUSINESS HUB AND CONSULTING with RC 2486975, and the registered address matches the address in the invite. From all indication, it's a legit invite. Good Luck!",
    createdAt: "2018-04-12 14:50:29",
    updatedAt: "2018-04-12 14:50:29",
    commentId: "cb5a800a-9d6b-481d-9521-7d174b6b1e97"
  },
  {
    inviteId: "fc5dd2aa-ea5b-45bd-8345-365269084dbb",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "UBA is a real company, and the specified address belongs to UBA. I think you should give it a try.",
    createdAt: "2018-04-12 15:00:53",
    updatedAt: "2018-04-12 15:00:53",
    commentId: "7853486f-7dd5-4650-b87c-854c94785a97"
  },
  {
    inviteId: "dd8c4f21-1885-4e2d-b016-5b130895fba3",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body: "Thanks for coming through.",
    createdAt: "2018-04-12 20:19:44",
    updatedAt: "2018-04-12 20:19:44",
    commentId: "8f92f815-01fa-4c1e-a907-aeee4e88327f"
  },
  {
    inviteId: "9733ec1b-a59a-4323-b926-27d51b50a89f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'A search of the said firm doesn\'t bring valid results, a check on the address brings out one "Power line Resources" ..however this might be as a result of the various floors of the building. More information should be sought as regards this invite.',
    createdAt: "2018-04-12 23:29:39",
    updatedAt: "2018-04-12 23:29:39",
    commentId: "62076fcb-abca-4e54-b60b-2193e13fdbaf"
  },
  {
    inviteId: "a64d049d-a32e-4afd-ba6b-0d07dbd6df7a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This invite appears legitimate, they have a working website and the based in ikorodu. Regards.",
    createdAt: "2018-04-12 23:35:30",
    updatedAt: "2018-04-12 23:35:30",
    commentId: "ba9d437d-14a8-4821-89e5-6a499e9bb01b"
  },
  {
    inviteId: "e0d308db-4198-4a7d-8fcf-f9bf5881f384",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "No company name is stated, so no further check can be done.",
    createdAt: "2018-04-12 23:38:10",
    updatedAt: "2018-04-12 23:38:10",
    commentId: "06132abe-af4f-40b8-81a3-c11f8b4311da"
  },
  {
    inviteId: "e6fa8ea3-e88b-4e52-9920-983500b173d9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Pinnacle services is an oil and gas industry, however the address on their website says they are located in Lagos and not Port Harcourt.",
    createdAt: "2018-04-12 23:48:57",
    updatedAt: "2018-04-12 23:48:57",
    commentId: "acd597ef-f439-4359-a75b-e569597d2247"
  },
  {
    inviteId: "fcfefe11-9ef5-47e8-b5aa-18d2f0cc94a7",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "This invite is not legit. Check previous posts.",
    createdAt: "2018-04-12 23:52:02",
    updatedAt: "2018-04-12 23:52:02",
    commentId: "b47e8fc1-6449-4d8d-beb7-0785620b5999"
  },
  {
    inviteId: "1caeb10a-2745-4f89-ad11-2dedad8b9ee3",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The information contained in this invite is not enough to run a valid check. I say it is probably not legit.",
    createdAt: "2018-04-12 23:55:41",
    updatedAt: "2018-04-12 23:55:41",
    commentId: "47faf809-a3eb-45d0-ba90-6a0d05435b12"
  },
  {
    inviteId: "3b6e5ade-5fe6-4a60-8ee9-c7c747d1d955",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Supreme Nig Ltd has been affiliated with extortion. Reports are they request for money from prospective employees. Beware!",
    createdAt: "2018-04-12 23:58:52",
    updatedAt: "2018-04-12 23:58:52",
    commentId: "68aeb0a2-d6ee-45ca-9da4-6330e01b29a2"
  },
  {
    inviteId: "d9afce05-dda5-4504-bd71-a9ad92f8706e",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Denver Castle services claim to be a health maintenance firm. They do have a working website. The address in the invite corresponds to the one on their website.",
    createdAt: "2018-04-13 00:03:29",
    updatedAt: "2018-04-13 00:03:29",
    commentId: "1ee9f117-ad53-40bb-bf12-9bae1016c3be"
  },
  {
    inviteId: "9b2be8a9-377e-4f1f-8d06-71f2eaa51d35",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "There are previous posts about this organisation. They are into GNLD. Beware!!",
    createdAt: "2018-04-13 00:15:01",
    updatedAt: "2018-04-13 00:15:01",
    commentId: "a1f96f50-2a02-4b59-b3d8-da496d53bcbb"
  },
  {
    inviteId: "dd876ee4-4bea-4b2b-abe3-461dc101680a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "There are reports that this invite is in circulation and is allegedly scam. Beware.",
    createdAt: "2018-04-13 00:17:49",
    updatedAt: "2018-04-13 00:17:49",
    commentId: "29473bce-cb1c-4eeb-9a42-606494f45a93"
  },
  {
    inviteId: "c767c753-b9a9-4ec1-9761-4da0d4dbf898",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is a publishing agency located in Sango Ota. This is probably legit.",
    createdAt: "2018-04-13 03:06:57",
    updatedAt: "2018-04-13 03:06:57",
    commentId: "200e0948-8059-482f-a777-8b95e8afdc07"
  },
  {
    inviteId: "501258df-576d-4de1-ae4c-8192536d4466",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No scam related results were found and it appears they indeed exist in Calabar. No further information here though.",
    createdAt: "2018-04-13 03:14:20",
    updatedAt: "2018-04-13 03:14:20",
    commentId: "bd189685-63e5-4378-8889-7525649e2c4d"
  },
  {
    inviteId: "aacfca42-e27a-434b-88c7-1902707fa3c7",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "SCAM ALERT!!!\r\nI got this information and I applied, then i was requested to pay a certain amount of money for court affidavit and accommodation. In which all the documents given were fake. To make matter worst, the phone number the poster of this job posted here does not exists. These are the real numbers of the so called agency barrister -08097831346 & 08088340885, in which he (poster) claim to be Abubakar Karmu with unassigned number 09097831311, but happens to be barrister Richard Ozeingbe. And email used wejobz001@gmail.com and robertsrichard.esq@gmail.com are not genuine but designed for thus scam work and claim to be at Port Harcourt.\r\nFor clarity sake I later called MTN calabar work in center to confirm the so call job in which I was told nothing of such is happening. Also send someone to the center to confirm the story, and he came with no recruitment for now.\r\nFor confirmation purpose, this is the real contact to MTN calabar work in center 08032038090.\r\nAm also a victim",
    createdAt: "2018-04-13 16:02:17",
    updatedAt: "2018-04-13 16:02:17",
    commentId: "5e26118a-5c64-488a-a446-71db68447d4a"
  },
  {
    inviteId: "fc5dd2aa-ea5b-45bd-8345-365269084dbb",
    userId: "32a94525-892f-4d7f-9b47-f101a2ed6914",
    body: "Is real oooo",
    createdAt: "2018-04-13 17:36:18",
    updatedAt: "2018-04-13 17:36:18",
    commentId: "77afa60e-da02-4437-9c1f-ace6c3f6c47a"
  },
  {
    inviteId: "6fee1768-8105-41e9-84d6-10c6e94592c6",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Looks like a normal GNLD kind of invite. DPCS. The same address has been used for such invite with a different company name for about 2 years.  The company name is not in the CAC database.",
    createdAt: "2018-04-13 18:56:40",
    updatedAt: "2018-04-13 18:56:40",
    commentId: "6d4f9b54-3f21-4215-8d9a-ca822dc3b62b"
  },
  {
    inviteId: "fc989570-0960-47ec-8bbf-cc12cf3d4033",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This is a real job, they have existed for a long time, registered with CAC, they have a website and the website matches the address specified in the invite.",
    createdAt: "2018-04-13 19:09:16",
    updatedAt: "2018-04-13 19:09:16",
    commentId: "7a5a8825-6f26-4bca-b47a-541768ac0429"
  },
  {
    inviteId: "bac11f01-9f9e-47be-a254-5954bca7da89",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This is most likely GNLD or other MLM things.  check here: \r\n\r\nhttp://isthisarealjob.com/search?_token=xaNrCj3evTdqFN8tZPRW7Hu2bxswZJMy1UphVBwm&q=University+press+building",
    createdAt: "2018-04-13 19:13:43",
    updatedAt: "2018-04-13 19:13:43",
    commentId: "7e04bfdb-6e2e-44d7-b14e-083f26739a75"
  },
  {
    inviteId: "bac11f01-9f9e-47be-a254-5954bca7da89",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "The same address has been used for several job posts, make a search for \"University Press Building\" you'll see. Don't waste your time.",
    createdAt: "2018-04-13 19:17:46",
    updatedAt: "2018-04-13 19:17:46",
    commentId: "6158b715-5755-4bea-91b1-92dcd01ffdc4"
  },
  {
    inviteId: "bac11f01-9f9e-47be-a254-5954bca7da89",
    userId: "cce4914a-0c4f-41be-9bfb-ab117cf935ce",
    body: "Ok tanks taught as much",
    createdAt: "2018-04-13 19:21:01",
    updatedAt: "2018-04-13 19:21:01",
    commentId: "74432a16-01b5-40d2-8db9-3a1a95f58ee3"
  },
  {
    inviteId: "6fee1768-8105-41e9-84d6-10c6e94592c6",
    userId: "32a94525-892f-4d7f-9b47-f101a2ed6914",
    body: "Thank u",
    createdAt: "2018-04-13 19:23:46",
    updatedAt: "2018-04-13 19:23:46",
    commentId: "ff5b82c0-54df-4641-b32e-a6b0721e415f"
  },
  {
    inviteId: "35edbf0c-f2d8-4f3d-a14b-5aceb165c0b9",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This is a real company, registered with CAC, with a functioning website. The address specified in the invite is the same and the one registered with CAC.",
    createdAt: "2018-04-13 19:24:20",
    updatedAt: "2018-04-13 19:24:20",
    commentId: "d3db9303-df0a-4f6e-9f5b-ae188d1f0942"
  },
  {
    inviteId: "20bc5e02-fa83-4e94-aacf-143ebb415b68",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body: "MADE HILLS SOLUTION is a real company registered with CAC.",
    createdAt: "2018-04-13 19:33:47",
    updatedAt: "2018-04-13 19:33:47",
    commentId: "fd620b1d-8eaa-4204-8193-bf5338db3ca3"
  },
  {
    inviteId: "20bc5e02-fa83-4e94-aacf-143ebb415b68",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body: "With a functioning website.",
    createdAt: "2018-04-13 19:33:56",
    updatedAt: "2018-04-13 19:33:56",
    commentId: "70cf31ed-1904-409b-8d13-2a5b0f45d65c"
  },
  {
    inviteId: "e1bc14e7-a30f-4a52-9ad0-27b9cf9e7fb8",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This looks like a default GNLD post, it has no company name, which is enough evidence of the unauthenticity of the post",
    createdAt: "2018-04-13 19:39:11",
    updatedAt: "2018-04-13 19:39:11",
    commentId: "2e36e7d3-9a74-49e0-96b6-d41a6983116d"
  },
  {
    inviteId: "20bc5e02-fa83-4e94-aacf-143ebb415b68",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Indeed they're a real outfit, registered with CAC on 2016-08-15. Its worth checking out the offer.",
    createdAt: "2018-04-13 19:39:31",
    updatedAt: "2018-04-13 19:39:31",
    commentId: "bc85e3f0-0d05-40d0-a7ba-776f52c69d03"
  },
  {
    inviteId: "994d10c7-b06c-488f-a49a-3b9dd48dcef4",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Basic GNLD post, no company name is specified.",
    createdAt: "2018-04-13 19:39:52",
    updatedAt: "2018-04-13 19:39:52",
    commentId: "35e66470-3d23-4f89-9f5c-6f9d55f12701"
  },
  {
    inviteId: "cccd4699-1dd2-4abc-9e68-4fe24c34d997",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This is a real company, registered on CAC website with a functioning website and a lot of online presense.",
    createdAt: "2018-04-13 19:50:59",
    updatedAt: "2018-04-13 19:50:59",
    commentId: "247c415d-0fe7-458e-9cc6-ac089a62c2be"
  },
  {
    inviteId: "aacfca42-e27a-434b-88c7-1902707fa3c7",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "I saw the lack of authenticity when it was spelt out to call the company's lawyer. Who does that in the cooperate world today. #scammers",
    createdAt: "2018-04-13 19:57:42",
    updatedAt: "2018-04-13 19:57:42",
    commentId: "9964b26a-858e-4885-844e-997f34b9b247"
  },
  {
    inviteId: "f9536dd8-7c14-4d58-84b1-c273beee3748",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body: "Wow! this is eye opening indeed. Thanks for sharing.",
    createdAt: "2018-04-13 20:39:39",
    updatedAt: "2018-04-13 20:39:39",
    commentId: "14bab42d-5539-4f67-a50c-76d62c26aec2"
  },
  {
    inviteId: "34e4391b-a8bd-43ee-a2c4-a0e4857338d9",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "This firm doesn't exist on the C.A.C database and comes up among scam reviews when a wider search is carried out.",
    createdAt: "2018-04-13 20:45:38",
    updatedAt: "2018-04-13 20:45:38",
    commentId: "3c20708d-31bb-461a-a83f-b3dc4a43bbf8"
  },
  {
    inviteId: "9c4a24f5-7249-4feb-8328-2b6ed037a1b6",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "This looks like a typical scam invite, no establishment is mentioned. The address actually shows up \r\nAndchristie Dental Clinic",
    createdAt: "2018-04-13 20:50:32",
    updatedAt: "2018-04-13 20:50:32",
    commentId: "05256688-8d4e-463a-a356-6009e12cd579"
  },
  {
    inviteId: "5929af96-952f-4d28-8952-cabce97e2833",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body: "Extensive search shows that SNL is into GNLD. Please beware.",
    createdAt: "2018-04-13 20:51:43",
    updatedAt: "2018-04-13 20:51:43",
    commentId: "543acd52-ba7c-44eb-8968-f677b8c412d3"
  },
  {
    inviteId: "0c1c5d1f-eecb-43ae-8bfc-174e5d252a70",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The name of the said company was not specified. No further check can be done.",
    createdAt: "2018-04-14 00:29:49",
    updatedAt: "2018-04-14 00:29:49",
    commentId: "d06fb32f-4f6f-47cc-b4c0-46a69da6d42c"
  },
  {
    inviteId: "2ab158e7-dead-458c-afb5-138950504a68",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "http://isthisarealjob.com/mikeale/i-got-this-mail-yesterday,-please-is-it-real-2876745E5975423",
    createdAt: "2018-04-14 05:34:28",
    updatedAt: "2018-04-14 05:34:28",
    commentId: "9cb1a2d0-a52b-4961-836f-06c1bb26c99b"
  },
  {
    inviteId: "cd194a96-ed81-4002-8e36-1e0763a446de",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "The company located in the specified address is outcess.com. However, since this invite did not include the company name, I am skeptical. You can, however, give it a try. Good Luck.",
    createdAt: "2018-04-14 05:42:29",
    updatedAt: "2018-04-14 05:42:29",
    commentId: "7a0c4a54-6a86-41b3-b3a0-aaf0f4f954e1"
  },
  {
    inviteId: "2ab158e7-dead-458c-afb5-138950504a68",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "The same address is used for another company which is associated with GNLD.",
    createdAt: "2018-04-14 05:43:51",
    updatedAt: "2018-04-14 05:43:51",
    commentId: "9cfd01f9-cd4f-4b30-83a4-33ee5a1f0475"
  },
  {
    inviteId: "498ec640-fe8d-4a44-ae59-76cd43e222a1",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Fifth Quadrant Performance Limited is a real company registered with CAC, and i personally have seen their building before...",
    createdAt: "2018-04-15 18:35:23",
    updatedAt: "2018-04-15 18:35:23",
    commentId: "b6e1d534-c2ed-44c6-b73b-54dbd309777a"
  },
  {
    inviteId: "9733ec1b-a59a-4323-b926-27d51b50a89f",
    userId: "5f9012f1-8b23-4dff-9bec-898748d35bf0",
    body: "Its neolife stuff... Except if you want to give it a trial.",
    createdAt: "2018-04-17 06:46:24",
    updatedAt: "2018-04-17 06:46:24",
    commentId: "c9e953e5-2723-460c-ac1c-e4e9e6289f51"
  },
  {
    inviteId: "ec99c678-f14b-48b4-96e5-736ffa5b858c",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Looks like a typical GNLD thing. The name of the company is not specified, and there's no way to verify if it's a real company or not. I recommend you don't waste your time, but if you are close to the venue, you can check it out.",
    createdAt: "2018-04-17 15:30:07",
    updatedAt: "2018-04-17 15:30:07",
    commentId: "c6fd6528-002c-4af8-ac01-b6edb47f0865"
  },
  {
    inviteId: "4ec1fc2f-a6f8-48fb-b361-4fb45256af76",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No company name was specified in the above invite, a check on the address doesn't match any valid company too. My advice; steer clear.",
    createdAt: "2018-04-17 18:40:26",
    updatedAt: "2018-04-17 18:40:26",
    commentId: "2c865f1c-9482-4c1e-b9e7-3623c69a9b78"
  },
  {
    inviteId: "ec2ac541-1687-4e2d-b840-a213706981f9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This appears to be a legitimate company, they have a LinkedIn page and a website; http://www.metrohealthhmo.com",
    createdAt: "2018-04-17 19:17:05",
    updatedAt: "2018-04-17 19:17:05",
    commentId: "1085e9b6-6009-43fa-b94a-d1201e18b245"
  },
  {
    inviteId: "428a60fc-7a57-4b6e-a42f-ec9657f6d0f7",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are a legitimate recruitment agency. They have a website; http://www.gainrecruitment.com and the address on this invite correlates.",
    createdAt: "2018-04-17 19:22:00",
    updatedAt: "2018-04-17 19:22:00",
    commentId: "ae123fdf-c30d-4dce-92ba-869d98792cd0"
  },
  {
    inviteId: "6d74640e-b990-4fe6-89ed-14cd8f1e1a8c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The firm name was not even stated, no legitimate company would structure an invite like this. Beware!",
    createdAt: "2018-04-18 02:17:07",
    updatedAt: "2018-04-18 02:17:07",
    commentId: "88e3a941-ac0d-41b2-852d-b0faa01f311c"
  },
  {
    inviteId: "23109847-dcc1-4e31-ae99-5f95e001c0ae",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "BSGM Consulting Building Surveyors provides national specialist and professional services to Australia’s building industry. They are not based in Nigeria. Steer clear",
    createdAt: "2018-04-18 02:19:04",
    updatedAt: "2018-04-18 02:19:04",
    commentId: "5f02284c-de90-409c-a7b7-51536ec63c4b"
  },
  {
    inviteId: "076912c0-bc65-4232-9075-92fb006a873b",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is a content publishing agency. They have a website; https://dailyfamily.ng",
    createdAt: "2018-04-18 23:49:09",
    updatedAt: "2018-04-18 23:49:09",
    commentId: "1ebec058-4ada-4f70-b0cf-cf5732fceda0"
  },
  {
    inviteId: "a4a63eef-a219-4112-a5e2-5e9491ef487d",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No company details was stated. Address doesn't bring valid results and a further search couldn't be done.",
    createdAt: "2018-04-18 23:50:38",
    updatedAt: "2018-04-18 23:50:38",
    commentId: "179944e0-0fec-4006-bd63-ecbfa8b0486b"
  },
  {
    inviteId: "95bfba5d-7612-49a5-950a-3ace32e93296",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "There is no company registered with the said name. Some scam reports also showed up in search results. This is probably not real",
    createdAt: "2018-04-19 02:38:06",
    updatedAt: "2018-04-19 02:38:06",
    commentId: "5a2f0541-5e02-4a8f-963c-cacb6506ccd0"
  },
  {
    inviteId: "2d3ea9a6-b045-4948-860f-68b680bcf273",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Whogohost is a real company. However, there is no way to verify if the information you got is from them since you are not providing any more information",
    createdAt: "2018-04-19 03:46:24",
    updatedAt: "2018-04-19 03:46:24",
    commentId: "a5800188-bf50-4a5c-8308-88673d23c2cf"
  },
  {
    inviteId: "95bfba5d-7612-49a5-950a-3ace32e93296",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "http://isthisarealjob.com/Ridwan/is-this-a-fake-company---boss-resources-31613452428U363",
    createdAt: "2018-04-19 04:01:21",
    updatedAt: "2018-04-19 04:01:21",
    commentId: "55bd61db-a033-406b-80ff-a369c0d990ef"
  },
  {
    inviteId: "553f4e9c-707a-4853-a79b-642f2ab1d64a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This interview invite comes from a company that provide transportation services. It is legitimate.",
    createdAt: "2018-04-19 14:43:26",
    updatedAt: "2018-04-19 14:43:26",
    commentId: "4e66d2b9-f721-4cff-8d0a-38f4ab8874dc"
  },
  {
    inviteId: "0015fda2-d611-4e62-9281-107297790ab7",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Although the invite seems to be legit, the company name was not stated and further checks cannot be done in this. The address doesn't match any organisation's too. My advice; call the number for further information.",
    createdAt: "2018-04-19 14:49:08",
    updatedAt: "2018-04-19 14:49:08",
    commentId: "ff09d4a9-7ce8-414d-90d7-926a9c3786aa"
  },
  {
    inviteId: "3555fc0b-040e-49c8-bedb-afb352862647",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Unfortunately, these supermarkets don't make use of proper invites. The only wayto find our is to call the number provided. Be discreet.",
    createdAt: "2018-04-19 14:50:50",
    updatedAt: "2018-04-19 14:50:50",
    commentId: "5efa87ff-7177-41b8-879e-8a447253812a"
  },
  {
    inviteId: "934ca831-10d5-4d3f-bb79-6b6d9b943c9d",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The said company have a LinkedIn page,  but that's about it. No website was found and no other valid information. Address doesn't match too.",
    createdAt: "2018-04-19 14:56:57",
    updatedAt: "2018-04-19 14:56:57",
    commentId: "de3ff0cc-e73b-47c5-874d-a35e9fa174b8"
  },
  {
    inviteId: "95bfba5d-7612-49a5-950a-3ace32e93296",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "?",
    createdAt: "2018-04-19 15:29:47",
    updatedAt: "2018-04-19 15:29:47",
    commentId: "bff6d10c-8c66-483f-91b8-a1dc4c1b08f1"
  },
  {
    inviteId: "95bfba5d-7612-49a5-950a-3ace32e93296",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "?",
    createdAt: "2018-04-19 15:36:07",
    updatedAt: "2018-04-19 15:36:07",
    commentId: "0b9d4c45-da2b-4068-9d6d-2f73e0b0f378"
  },
  {
    inviteId: "0015fda2-d611-4e62-9281-107297790ab7",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I'll advice you don't go except you are living close to the address and can just check it out.",
    createdAt: "2018-04-19 18:13:39",
    updatedAt: "2018-04-19 18:13:39",
    commentId: "b25a7e2d-751f-4286-9502-7fb89f8b8055"
  },
  {
    inviteId: "3182bd50-4b1f-42b7-b6a7-0b0566e59c74",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "This same address has been used for several companies, it's GNLD.",
    createdAt: "2018-04-19 18:15:15",
    updatedAt: "2018-04-19 18:15:15",
    commentId: "b63b944e-4530-4e3a-9bad-c3a3dd486f6d"
  },
  {
    inviteId: "3182bd50-4b1f-42b7-b6a7-0b0566e59c74",
    userId: "f24701b6-57c7-4335-85a1-df32096f5342",
    body: "true",
    createdAt: "2018-04-19 22:15:28",
    updatedAt: "2018-04-19 22:15:28",
    commentId: "4cd706e4-9a5d-474e-bc1c-d648743be905"
  },
  {
    inviteId: "9ce75ff1-2d73-4037-bb9a-2c5dbbf37fda",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "BSM limited are into GNLD, there are several reports that they ask for money for registration to be employed. Beware!",
    createdAt: "2018-04-20 14:15:30",
    updatedAt: "2018-04-20 14:15:30",
    commentId: "6bd12811-f71b-416f-aee0-1fe23d4ae333"
  },
  {
    inviteId: "4580b2de-b28f-4f59-b862-6840de956c13",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "UNIHOLD stands for University of Lagos Holding Company, they are the administrative powerhouse of all income generating businesses of Unilag. The stated role seems to fit the objective of the company. They have a website; http://unihold.org/index.html .and the address is a match. This is legit.",
    createdAt: "2018-04-21 08:23:44",
    updatedAt: "2018-04-21 08:23:44",
    commentId: "36fd0877-67e8-4e76-96ee-8464f5d189b4"
  },
  {
    inviteId: "7a53157a-9e22-45f6-9ed1-976c47af3841",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The invite is clearly structured in a formal manner, the said company do exist ..they have a website; atbtechsoft.com .The address stated here matches the one on their website. This is legit.",
    createdAt: "2018-04-21 08:28:44",
    updatedAt: "2018-04-21 08:28:44",
    commentId: "8540b16b-bb19-419b-9cce-6cfe4d810c33"
  },
  {
    inviteId: "076912c0-bc65-4232-9075-92fb006a873b",
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body: "@ridwan, thank you for your assistance.",
    createdAt: "2018-04-21 17:49:24",
    updatedAt: "2018-04-21 17:49:24",
    commentId: "e0578d94-7fa5-4f5b-b8b8-354de19c72d8"
  },
  {
    inviteId: "d003c656-01a6-459c-a77f-5fd3b076c4ac",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "Careers24.com.ng",
    createdAt: "2018-04-21 21:25:33",
    updatedAt: "2018-04-21 21:25:33",
    commentId: "af6f5399-ba1d-4940-805b-9e7a76d7a340"
  },
  {
    inviteId: "d003c656-01a6-459c-a77f-5fd3b076c4ac",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "indeed.com is a really good platform too.",
    createdAt: "2018-04-22 05:05:36",
    updatedAt: "2018-04-22 05:05:36",
    commentId: "7fb0d58d-454a-4730-bef3-27ef3f002d35"
  },
  {
    inviteId: "d4bd6975-ef69-481f-8352-907f6f9918cf",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "MeatWorld.ng are into sales of agricultural products, they have a working website: http://www.meatworld.ng .The address also corresponds with the one on the website. This is legit. Goodluck",
    createdAt: "2018-04-23 11:27:19",
    updatedAt: "2018-04-23 11:27:19",
    commentId: "8a511289-dcb0-4fb1-8513-0d76b5990f59"
  },
  {
    inviteId: "d003c656-01a6-459c-a77f-5fd3b076c4ac",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thank you",
    createdAt: "2018-04-23 17:03:05",
    updatedAt: "2018-04-23 17:03:05",
    commentId: "2aa42556-c9ce-48e7-ad65-7a4b5315a615"
  },
  {
    inviteId: "d003c656-01a6-459c-a77f-5fd3b076c4ac",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thank you",
    createdAt: "2018-04-23 17:03:51",
    updatedAt: "2018-04-23 17:03:51",
    commentId: "92523e20-2451-4bf6-915a-fd5540b09e65"
  },
  {
    inviteId: "71fb26ed-96da-41d8-b4fd-047841eec96e",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "BG lead concept is into GNLD, the address given above doesn't match any valid organisation's . However, the contacts can be reached for further verification.",
    createdAt: "2018-04-23 22:12:10",
    updatedAt: "2018-04-23 22:12:10",
    commentId: "d72201c0-cea0-47ed-9374-a8eec2baea80"
  },
  {
    inviteId: "71fb26ed-96da-41d8-b4fd-047841eec96e",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thank you",
    createdAt: "2018-04-24 01:05:14",
    updatedAt: "2018-04-24 01:05:14",
    commentId: "55dc468c-55cd-4c45-8008-daf1c92fe5f2"
  },
  {
    inviteId: "7119056a-5c46-4792-9716-f287605ab8b6",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are an IT firm, they are legitimate. Their website is at: http://hideasng.com",
    createdAt: "2018-04-24 22:09:10",
    updatedAt: "2018-04-24 22:09:10",
    commentId: "b9d48a7c-f188-4b10-9d3f-f87dbd5df71c"
  },
  {
    inviteId: "2f0521c3-c7f6-4693-bc8e-e16ee0359d0e",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "WORKFORCE is a recruitment and business outsourcing firm. The are quite popular. However the jobs offered might be related to marketing. So if you're not interested you should look elsewhere.",
    createdAt: "2018-04-24 22:15:51",
    updatedAt: "2018-04-24 22:15:51",
    commentId: "09dafabb-4c7d-44d6-bcb0-4c64850c88aa"
  },
  {
    inviteId: "6fb58e77-2f05-4ab2-a4f5-cd8991941002",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are a  growing multinational business and IT outsourcing company. They recently partnered with Microsoft and are recruiting. Website is at: https://www.tek-experts.com",
    createdAt: "2018-04-24 22:33:56",
    updatedAt: "2018-04-24 22:33:56",
    commentId: "ab6123fd-52a9-4618-a878-f7623aebb984"
  },
  {
    inviteId: "3194e89d-963a-432b-a8cc-c6c9b18be053",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This invite doesn't provide adequate information, the name Maggie Consult does not match any valid firm.",
    createdAt: "2018-04-25 06:45:14",
    updatedAt: "2018-04-25 06:45:14",
    commentId: "8fb4bd16-5835-49e3-8722-f4be214c01c4"
  },
  {
    inviteId: "6c9fca26-122c-4bc8-9bd1-5692ee3d555f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The firm name doesn't ring any bells, no valid information was found associated with the stated name. The address is registered to one Cielo lounge. The numbers can be reached for further details.",
    createdAt: "2018-04-25 06:48:28",
    updatedAt: "2018-04-25 06:48:28",
    commentId: "7b42fde8-f85b-4209-8a98-d393f4f6c147"
  },
  {
    inviteId: "f4e134dc-3396-4593-8cd8-1f97ddbd2489",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is a registered firm. The address correlates with the one in their website. The website is at: https://main.santebarley.com",
    createdAt: "2018-04-25 06:51:59",
    updatedAt: "2018-04-25 06:51:59",
    commentId: "61610a47-24a0-48a6-9ca9-e55ded77cfc8"
  },
  {
    inviteId: "cbf0578a-ccc1-4e16-b41a-941c7ba4370a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "From my research, I think they perform outsourcing services. Check their LinkedIn: https://www.google.com.ng/url?sa=t&source=web&rct=j&url=https://ng.linkedin.com/in/peen-nigeria-limited-peen-58502012b&ved=2ahUKEwi83fmmgNTaAhVCzaQKHS7eBzcQFjAHegQIAhAB&usg=AOvVaw3If4O_YntTgkX7Wny50492",
    createdAt: "2018-04-25 06:56:13",
    updatedAt: "2018-04-25 06:56:13",
    commentId: "7b77334c-ce6d-418f-bd19-635ca4c3f717"
  },
  {
    inviteId: "3194e89d-963a-432b-a8cc-c6c9b18be053",
    userId: "b8196d5c-b41c-45b3-b911-fdfbecf53405",
    body: "NICE UPDATE",
    createdAt: "2018-04-26 20:16:42",
    updatedAt: "2018-04-26 20:16:42",
    commentId: "62013b8f-2ea9-4949-b1ea-efab594c29fa"
  },
  {
    inviteId: "84fbb984-6de4-4b3e-a8be-e06b978ebb8e",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "A LinkedIn page belonging to the said firm exists, however it appears they have no linked website. The address doesn't provide valid matches either.",
    createdAt: "2018-04-28 00:22:22",
    updatedAt: "2018-04-28 00:22:22",
    commentId: "48b3f441-93e6-4a00-b0aa-e456dfb792da"
  },
  {
    inviteId: "7d9a1f93-cf4d-4818-9261-b90aca09b1a9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "'CareerHost' doesn't offer any valid information. The stated firm here, Management Resource Consulting Firm doesn't match any standalone organisation too, various consulting firms popped up.  The address shows an entirely different organization as well. The invite appears vague.",
    createdAt: "2018-04-28 06:24:23",
    updatedAt: "2018-04-28 06:24:23",
    commentId: "e26cc176-8df8-4e8a-9be8-c8512150d411"
  },
  {
    inviteId: "802bcf5f-0492-4e7d-ab7b-72092b811839",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Career Gems is not a registered organization. This particular invite has been in circulation for a while now. They are into GNLD. It is a waste of time.",
    createdAt: "2018-04-29 03:25:26",
    updatedAt: "2018-04-29 03:25:26",
    commentId: "9cc97b82-ff8e-4be5-962b-e0c47d31262b"
  },
  {
    inviteId: "323f70bb-2d8c-49ad-a75e-f7f2a79d04eb",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Live solution appear to be a business development consulting firm. They have a working website and although the address information was not provided on this website, they seem to be legit.",
    createdAt: "2018-04-30 19:54:39",
    updatedAt: "2018-04-30 19:54:39",
    commentId: "a09d67e3-4591-4665-917c-9b1dc07ffca3"
  },
  {
    inviteId: "3194e89d-963a-432b-a8cc-c6c9b18be053",
    userId: "d2ff9c95-6cab-4b71-9de2-442c158a0a3e",
    body: "Itz real. The organization is into business management",
    createdAt: "2018-05-01 03:44:59",
    updatedAt: "2018-05-01 03:44:59",
    commentId: "da848956-0dd1-4748-bf53-30ef0326f353"
  },
  {
    inviteId: "a8a12efc-0882-4834-87ff-a844be063329",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The information provided in this invite is not valid enough. No company name was stated, a check of the address does not match any valid company too.",
    createdAt: "2018-05-01 05:10:44",
    updatedAt: "2018-05-01 05:10:44",
    commentId: "ffd4b7a6-4945-44b9-a075-5d1861bd3b6c"
  },
  {
    inviteId: "8f4c576c-84d6-4697-8769-60ac6a7258d5",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "This is an example of a GNLD invite. Please beware!",
    createdAt: "2018-05-01 05:11:37",
    updatedAt: "2018-05-01 05:11:37",
    commentId: "02c8e00b-37d2-4dce-9688-d4db4a3279c0"
  },
  {
    inviteId: "3194e89d-963a-432b-a8cc-c6c9b18be053",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "How do you know this? Any prove or evidence of their existence?",
    createdAt: "2018-05-01 18:21:46",
    updatedAt: "2018-05-01 18:21:46",
    commentId: "47673e8b-9108-4d87-96d2-2c31743842c3"
  },
  {
    inviteId: "0cb469b5-62ad-4391-bd10-178154b0b29f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "GMIS Already exists on the website:\r\n\r\nhttp://isthisarealjob.com/uzoma/is-this-real-34P249822138398\r\n\r\nhttp://isthisarealjob.com/Ridwan/invites-structured-like-this-should-not-be-taken-seriously-8298X7055727833",
    createdAt: "2018-05-01 18:23:19",
    updatedAt: "2018-05-01 18:23:19",
    commentId: "6c7cae19-c4f8-49b5-b226-23cb7828252c"
  },
  {
    inviteId: "0cb469b5-62ad-4391-bd10-178154b0b29f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "You can just search for GMIS, you'll see more details",
    createdAt: "2018-05-01 18:23:52",
    updatedAt: "2018-05-01 18:23:52",
    commentId: "8c64aa1e-5a55-4e82-91f8-542770c1399c"
  },
  {
    inviteId: "1741928a-a8c3-4552-8104-6e5fd7ccaba3",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No valid information was found online. I don't think this is real.",
    createdAt: "2018-05-02 03:08:24",
    updatedAt: "2018-05-02 03:08:24",
    commentId: "270eb6a4-11b5-4b16-9fee-f0aac110b159"
  },
  {
    inviteId: "d794c62c-a131-4223-a024-cf092e4d938f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "There is no information on FRSC website concerning ongoing recruitment. Same goes for NDA as far as i can see.",
    createdAt: "2018-05-02 04:50:09",
    updatedAt: "2018-05-02 04:50:09",
    commentId: "f7f8176b-b7a9-4ac5-bb62-fa63b392b36b"
  },
  {
    inviteId: "bfdb2eaa-b98e-48e3-ac63-37883bde82e5",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Looks like typical GNLD thing",
    createdAt: "2018-05-02 04:54:41",
    updatedAt: "2018-05-02 04:54:41",
    commentId: "e7a9cf53-1665-4016-ad60-42c88a6afb71"
  },
  {
    inviteId: "bfdb2eaa-b98e-48e3-ac63-37883bde82e5",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "This same address is being used by many GNLD firms. Beware.",
    createdAt: "2018-05-02 06:17:07",
    updatedAt: "2018-05-02 06:17:07",
    commentId: "e289f878-c2d1-40d9-9b77-025a02b6c1de"
  },
  {
    inviteId: "b248ca29-5f47-4a37-b1b6-c5de019b4330",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "ICS Limited is a job outsourcing firm, the website specified in the invite is legitimate and an online test has to be taken indeed. This appears real.",
    createdAt: "2018-05-02 19:34:37",
    updatedAt: "2018-05-02 19:34:37",
    commentId: "0ececf3d-2f44-438d-a415-b19466d1013c"
  },
  {
    inviteId: "bfdb2eaa-b98e-48e3-ac63-37883bde82e5",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "?",
    createdAt: "2018-05-03 02:52:28",
    updatedAt: "2018-05-03 02:52:28",
    commentId: "6bd2900f-3a90-440e-b97f-01808233a109"
  },
  {
    inviteId: "bfdb2eaa-b98e-48e3-ac63-37883bde82e5",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "?",
    createdAt: "2018-05-03 02:53:08",
    updatedAt: "2018-05-03 02:53:08",
    commentId: "d3eb2ff8-a09c-4b73-87c3-d142256bfbe9"
  },
  {
    inviteId: "9ba6d217-4c3d-4104-ab7f-1b151c13acd3",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They have a working website as stated in the invite and the address corresponds. No affiliated scam reports were found either. This appears legit.",
    createdAt: "2018-05-03 03:15:28",
    updatedAt: "2018-05-03 03:15:28",
    commentId: "582e40fd-bb6c-46c7-9973-5b9099b55418"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Information on this has been provided earlier here .http://isthisarealjob.com/Ridwan/invites-structured-like-this-should-not-be-taken-seriously-8298X7055727833",
    createdAt: "2018-05-03 03:17:38",
    updatedAt: "2018-05-03 03:17:38",
    commentId: "3610f795-fe0c-4df4-8f7b-774ba38f712b"
  },
  {
    inviteId: "9ba6d217-4c3d-4104-ab7f-1b151c13acd3",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "They are also a registered company according to CAC database. Do update us if you attend the interview",
    createdAt: "2018-05-03 05:11:05",
    updatedAt: "2018-05-03 05:11:05",
    commentId: "995d5566-22b0-461a-844c-b36688d10a61"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "You can search the website for GMIS, it already exists",
    createdAt: "2018-05-03 05:11:51",
    updatedAt: "2018-05-03 05:11:51",
    commentId: "4a1d6c52-c39d-475f-a628-441a7885c49f"
  },
  {
    inviteId: "9c0fedec-6a09-425f-9097-5bd95cf6a38e",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The name of the organisation was not stated, a search of the address doesn't match any organisation either. This can't be from a legitimate source.",
    createdAt: "2018-05-03 23:20:13",
    updatedAt: "2018-05-03 23:20:13",
    commentId: "e1609a26-9910-416e-b002-889954f4aba8"
  },
  {
    inviteId: "4dd6998e-a53e-484e-b5e0-e5bfa6340a4d",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Bethelmendels is an wholesale store situated in Ikeja as stated in the invite. They have a website at; http://www.bethelmendels.com.ng . This appears legit.",
    createdAt: "2018-05-05 01:14:34",
    updatedAt: "2018-05-05 01:14:34",
    commentId: "6b44c0f5-a3d6-4b15-95f8-707955678334"
  },
  {
    inviteId: "80e8381a-644e-43ae-bd57-b0648df175a9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "I think people are taking this GNLD thing to another level. Bliss initiative actually registered their website on a free domain, which doesn't go through. The proposed LinkedIn page doesn't have enough information either. It appears these invites are being circulated online even to those who never applied. An individual confirmed them to be GNLD, also, a search of the address matches Grand Lead Heritage.. which is also a GNLD firm. I'll say these guys are up to no good.",
    createdAt: "2018-05-06 06:35:59",
    updatedAt: "2018-05-06 06:35:59",
    commentId: "21ccbd42-87ff-40a5-a3bd-f5c210b97a9e"
  },
  {
    inviteId: "eaf1c76b-fd1e-4145-9933-14ea990a75b8",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Concept Recruitment is based in the UK, the address given in the address also matches Grandlead heritage - a GNLD firm. Not legit.",
    createdAt: "2018-05-06 06:40:43",
    updatedAt: "2018-05-06 06:40:43",
    commentId: "59b28221-2d63-41ef-a001-b2c776942028"
  },
  {
    inviteId: "dbea8652-9cb8-4963-a41c-c30ee3555fc6",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The name of the firm was not stated, the address is in use by Grandlead heritage, which happens to be a GNLD firm. Stay clear.",
    createdAt: "2018-05-06 22:39:57",
    updatedAt: "2018-05-06 22:39:57",
    commentId: "6acd264f-9ebb-463f-8524-6ba932fceb19"
  },
  {
    inviteId: "9ea38d19-8e44-4375-ad5b-d05c0e90f77d",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "The company already exist on the website: https://isthisarealjob.com/mikeale/please-is-this-gnld-65600866K292873",
    createdAt: "2018-05-07 10:07:03",
    updatedAt: "2018-05-07 10:07:03",
    commentId: "20e4d7cb-106d-4ad8-9f61-306f89621aa1"
  },
  {
    inviteId: "7d9a1f93-cf4d-4818-9261-b90aca09b1a9",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "true indeed",
    createdAt: "2018-05-07 10:36:16",
    updatedAt: "2018-05-07 10:36:16",
    commentId: "0d136052-e190-4fbe-a080-9d6bff357d3c"
  },
  {
    inviteId: "1962573e-113a-44bf-b988-0c79eba19f22",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No valid information was found online. I don't think this is real.",
    createdAt: "2018-05-08 12:12:34",
    updatedAt: "2018-05-08 12:12:34",
    commentId: "e64a51c8-8565-4640-86e5-c08bf4cf1d9e"
  },
  {
    inviteId: "cf3e7098-3ffb-42e4-a44d-e97772c7a4f8",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Landover is an aviation services company located in Ikeja. The address is a match and I believe this is legit.",
    createdAt: "2018-05-08 13:41:16",
    updatedAt: "2018-05-08 13:41:16",
    commentId: "d72d883a-edb7-48b7-b9b2-507bb39a90f2"
  },
  {
    inviteId: "72473e41-74dc-41b4-a643-2a78ed43aa6c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "PML advisory is legit. See here https://isthisarealjob.com/mikeale/pml-ltd.-fake-or-real-9916D6027044975",
    createdAt: "2018-05-08 13:45:38",
    updatedAt: "2018-05-08 13:45:38",
    commentId: "0c42d5e3-5940-46c3-8250-01d375b99a70"
  },
  {
    inviteId: "45d05d55-5a34-4da7-bb3e-e805832a19ed",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "There is no such company in Ikeja. Also, the address is affiliated with both BSM limited and BS multiservice Limited - which are GNLD peddlers.",
    createdAt: "2018-05-08 16:15:34",
    updatedAt: "2018-05-08 16:15:34",
    commentId: "fb48e724-a9d0-42ca-8856-7e57eb2e091c"
  },
  {
    inviteId: "6d791d8f-ad58-498d-af3b-7e9c127b7504",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Well this is a legitimate firm, they are obviously not based in Nigeria. Getting appointment all the way abroad might seem too good to be true though. Further enquiries should be made on their website for adequate information.",
    createdAt: "2018-05-08 20:31:47",
    updatedAt: "2018-05-08 20:31:47",
    commentId: "6e8c3317-ab7d-48dc-9e95-3966b29f3e41"
  },
  {
    inviteId: "e280a6ae-664d-49af-a7b8-90bd8a6f972e",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No information was found regarding the said company in Ibadan. Sources show that WAAP limited has its registered address in England. I don't think this is legit.",
    createdAt: "2018-05-11 15:39:07",
    updatedAt: "2018-05-11 15:39:07",
    commentId: "16c4498f-962b-40a1-a4f0-3064496f4d5b"
  },
  {
    inviteId: "08e2b313-cc6d-4455-99f0-d2b80c5c2e52",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Check here https://isthisarealjob.com/drwhyte/ace-mgt-(beware)-3868052392975L7",
    createdAt: "2018-05-12 05:28:40",
    updatedAt: "2018-05-12 05:28:40",
    commentId: "cf653f9c-8165-405a-8634-419219cbad3d"
  },
  {
    inviteId: "2554a9f2-3b7f-4cec-9862-2f60a1364d85",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The firm is legit. Aiico is an insurance firm located in Ikeja. Their website is at https://www.aiicoplc.com",
    createdAt: "2018-05-13 03:44:50",
    updatedAt: "2018-05-13 03:44:50",
    commentId: "d45e5417-f31b-49ae-b880-67d0a7a0a168"
  },
  {
    inviteId: "f17b4075-e251-40ee-a446-5dd363889627",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "According to research Starterbag is a just established consulting and business development firm. They appear to be located in Calabar. Try to make enquiries from them to see if there is a match in the information they provide.",
    createdAt: "2018-05-13 14:07:44",
    updatedAt: "2018-05-13 14:07:44",
    commentId: "76a06e82-d220-47d8-a9f0-d4f53506fe98"
  },
  {
    inviteId: "35710418-94dd-4603-a392-140b70c368f0",
    userId: "744355e5-de8a-459a-a900-9b455fc3a4a8",
    body:
      "I just received this kind of invites, did you go?,if yes what's d out come and what are they about?",
    createdAt: "2018-05-13 19:43:05",
    updatedAt: "2018-05-13 19:43:05",
    commentId: "7c003471-694d-4387-85cc-1f6620e51ede"
  },
  {
    inviteId: "03493e4f-6d48-4482-b1da-84f52f421e13",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "M.H.S already exist in the database, just do a search for M.H.S.",
    createdAt: "2018-05-13 19:53:20",
    updatedAt: "2018-05-13 19:53:20",
    commentId: "cedddc5d-ce39-4637-959b-3e84e8f38ef5"
  },
  {
    inviteId: "a0f510a5-8ac0-4d9f-9864-a3c6f4a4c5cc",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "There is no real way to verify the authenticity of this post, first, the name is not registered with CAC. but, if you can provide an address, or a phone number that might be a bit more helpful in verification.",
    createdAt: "2018-05-13 23:39:08",
    updatedAt: "2018-05-13 23:39:08",
    commentId: "28265e37-d562-4982-9ec8-aa57825c84ac"
  },
  {
    inviteId: "03493e4f-6d48-4482-b1da-84f52f421e13",
    userId: "744355e5-de8a-459a-a900-9b455fc3a4a8",
    body: "Thanks",
    createdAt: "2018-05-14 16:30:06",
    updatedAt: "2018-05-14 16:30:06",
    commentId: "f1972fca-8802-4ba0-ba3b-fb81c7b536bb"
  },
  {
    inviteId: "fa1d1339-c164-4198-a1fe-16743b88bddd",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "Information on this exists on the site. Kindly do a search.",
    createdAt: "2018-05-14 18:24:16",
    updatedAt: "2018-05-14 18:24:16",
    commentId: "a9cd9bac-45a0-46c8-b263-c770c08858b1"
  },
  {
    inviteId: "47ebc31b-352b-43c1-b486-d1f058e1b2f1",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Silverbird Communications is legit, they have branches nationwide. Rythm FM happens to be a division under them. This is real.",
    createdAt: "2018-05-15 10:36:03",
    updatedAt: "2018-05-15 10:36:03",
    commentId: "99f66123-5d69-4e63-81c3-94dc151ae260"
  },
  {
    inviteId: "97f8c59d-2764-4161-b22c-6e0ddf6d6171",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "There are reports that the said invite is being generated by a GNLD company. Stay clear.",
    createdAt: "2018-05-15 18:53:10",
    updatedAt: "2018-05-15 18:53:10",
    commentId: "21d15cf8-761c-4c0d-a27f-256a553710e3"
  },
  {
    inviteId: "0d8dc873-769f-47dc-9f70-8d2446a41750",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are a Business management consultant firm in Lagos, the address in the invite is registered to them. This is legit.",
    createdAt: "2018-05-15 21:19:04",
    updatedAt: "2018-05-15 21:19:04",
    commentId: "d6e1ce8b-e7ef-401e-874c-92fa19facbd5"
  },
  {
    inviteId: "7938c773-d2b3-4f16-be76-edaa17c74cf7",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "There are reports that they are into GNLD.",
    createdAt: "2018-05-16 11:56:07",
    updatedAt: "2018-05-16 11:56:07",
    commentId: "6b7c9e16-e01e-49d3-be0e-bcb504ca0fac"
  },
  {
    inviteId: "edc68309-5d3b-4d9c-8dcd-fc0885143fa2",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Tizeti Network Limited is a growing NCC licensed Internet Service Provider operating in Lekki, Lagos. They are a legit firm. their website is at https://www.tizeti.com/",
    createdAt: "2018-05-16 20:19:47",
    updatedAt: "2018-05-16 20:19:47",
    commentId: "a547af4f-2441-4006-8e28-a6d493d91761"
  },
  {
    inviteId: "083f73a8-a1f5-4472-aeca-fa2afe0302e1",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is legitimate, they are proud owners of the popular Ajinomoto brand. The website is at https://ajinomoto.com.ng/ Also, the location is correct based on google reviews.",
    createdAt: "2018-05-16 20:26:41",
    updatedAt: "2018-05-16 20:26:41",
    commentId: "f71fa4ee-1d2e-4d04-b256-92f149f475b8"
  },
  {
    inviteId: "11b00701-1cb3-409c-a048-d287a4f93ff8",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The address is registered to Meristem Securities Ltd, an investment firm. This is legit.",
    createdAt: "2018-05-16 20:45:15",
    updatedAt: "2018-05-16 20:45:15",
    commentId: "e09d6365-c232-497d-837c-cdb2ee21cc7f"
  },
  {
    inviteId: "edc68309-5d3b-4d9c-8dcd-fc0885143fa2",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thank you.",
    createdAt: "2018-05-16 22:51:18",
    updatedAt: "2018-05-16 22:51:18",
    commentId: "cd94b7c0-cffa-4fc0-a3ab-dc527b1f322c"
  },
  {
    inviteId: "c75525b8-cb70-4a19-bd99-fffaf12f89db",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Their job listings range from Lab trainees to site engineers, production managers and so on.",
    createdAt: "2018-05-17 13:55:01",
    updatedAt: "2018-05-17 13:55:01",
    commentId: "3db21986-f9b2-4d2d-b8cf-3e13e835b84a"
  },
  {
    inviteId: "d911b956-b638-4ee8-bd8d-360c7b3ef399",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Regulatory ID probably means any form of identification, such as a driver's license or national passport. The address is registered to Trapezoid limited, they are into running of background checks as well as individual job records.",
    createdAt: "2018-05-17 13:58:59",
    updatedAt: "2018-05-17 13:58:59",
    commentId: "fd879af7-1152-4522-979d-21d939e4383e"
  },
  {
    inviteId: "b05639cb-2b30-48a3-9b4b-d44b0c244fc2",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Ensure is an insurance company with branches all over Lagos. The address is registered to them. Their official website is at https://ensure.com.ng",
    createdAt: "2018-05-17 14:01:48",
    updatedAt: "2018-05-17 14:01:48",
    commentId: "dbf11696-de5b-4af4-96f4-9a7245b29573"
  },
  {
    inviteId: "a0f510a5-8ac0-4d9f-9864-a3c6f4a4c5cc",
    userId: "d73b6f7a-78c6-49a7-81ef-9581b9b6dddf",
    body: "It's fake",
    createdAt: "2018-05-17 21:52:12",
    updatedAt: "2018-05-17 21:52:12",
    commentId: "8271c2bf-53ee-40fc-af29-efb098026026"
  },
  {
    inviteId: "0c7a4d80-f2e2-466e-9c34-e70aeca2b8c1",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "To the best of my knowledge, the company stated above seem to have no online presence. N0 LinkedIn or website associated to them. I'm skeptical about this one..",
    createdAt: "2018-05-18 11:29:31",
    updatedAt: "2018-05-18 11:29:31",
    commentId: "41a4fbb3-915b-4985-80a3-88a637a651fd"
  },
  {
    inviteId: "30366d84-9fde-4ab9-8280-9362eb99a076",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Reports are these people are into Multi-level marketing, also known as GNLD. It is a complete waste of time.",
    createdAt: "2018-05-18 11:35:06",
    updatedAt: "2018-05-18 11:35:06",
    commentId: "2b7fd40e-af4a-4632-808c-98af8d63554b"
  },
  {
    inviteId: "dc3e5529-e520-42a4-b9eb-c2d05221ab7d",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "Duly noted. Sorry for your inconvenience.",
    createdAt: "2018-05-18 11:36:49",
    updatedAt: "2018-05-18 11:36:49",
    commentId: "3b5ac60e-3f61-4d7c-8f2b-aa16ee3e8667"
  },
  {
    inviteId: "dc3e5529-e520-42a4-b9eb-c2d05221ab7d",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Thank you for this. It will save a lot of people in future.",
    createdAt: "2018-05-18 11:41:12",
    updatedAt: "2018-05-18 11:41:12",
    commentId: "f1dfb445-e1e9-4e4b-824f-cecf86212422"
  },
  {
    inviteId: "ca4c98c9-16e4-4337-b238-5df30e41001c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The address us affiliated with BSM limited, there's already a post about them being into GNLD.",
    createdAt: "2018-05-18 12:32:09",
    updatedAt: "2018-05-18 12:32:09",
    commentId: "1dd384f8-d4d7-483e-bb66-6b09405d967b"
  },
  {
    inviteId: "8fce0654-7318-43ed-9100-9908237e9fd6",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The firm is legit, they are an IT company registered to the stated address. Their website is at http://www.proxynetgroup.com/index.php",
    createdAt: "2018-05-18 12:34:54",
    updatedAt: "2018-05-18 12:34:54",
    commentId: "f9ac0679-4092-44a7-8a3c-a4960712b4fe"
  },
  {
    inviteId: "b1e9b1f0-04c7-454b-b7ce-0b849b3d5ef5",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Hello, this is a legitimate firm situated along Lagos-Ibadan express way as stated. They specialise in providing telecom infrastructure services. They have a website at http://www.kkontech.com",
    createdAt: "2018-05-19 08:28:19",
    updatedAt: "2018-05-19 08:28:19",
    commentId: "f1d0245c-5f62-4b13-97fc-e064f436f166"
  },
  {
    inviteId: "30a56c88-8e85-4cf8-9b50-7b0290cc25b9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This has GNLD written all over it, these people keep refining the same address, checkout similar posts here https://bit.ly/2IyzuJl",
    createdAt: "2018-05-19 08:32:53",
    updatedAt: "2018-05-19 08:32:53",
    commentId: "d6bb1d1d-1985-4ad5-9de9-2f835cee89aa"
  },
  {
    inviteId: "87ad0a7d-cc60-4d39-82e2-f0bd898d2a99",
    userId: "67b3b735-5376-4712-a625-d780901239f9",
    body:
      "Whats GNLD please?\r\nCause I just got a mail requesting my presence for an interview",
    createdAt: "2018-05-19 20:43:43",
    updatedAt: "2018-05-19 20:43:43",
    commentId: "b5be31a8-20cf-4713-b60e-05a482a2b534"
  },
  {
    inviteId: "83fb43d5-44d1-4cb6-83a3-e8a9f3a85671",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "GNLD firms are those into marketing of several products, such as your typical roadside marketer urging people to by a good. Frequently they send out job invites to the public, however, at the said interview they have been known to ask for certain fees for registration from prospective applicants. So if you were expecting a white collar job don't waste your time.",
    createdAt: "2018-05-20 08:07:18",
    updatedAt: "2018-05-20 08:07:18",
    commentId: "fee70790-63ea-4504-aea3-68d654934598"
  },
  {
    inviteId: "7dfdcd49-5ac5-41f7-bbda-6784cbf0eadf",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "We are a post about this. They are into GNLD and are a waste of time.",
    createdAt: "2018-05-20 08:08:14",
    updatedAt: "2018-05-20 08:08:14",
    commentId: "e7f6fbfa-9bb0-4253-86bc-e6458e0096af"
  },
  {
    inviteId: "7dfdcd49-5ac5-41f7-bbda-6784cbf0eadf",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Just do a search for BG-LEAD on the platform, you'll see more posts on them",
    createdAt: "2018-05-20 15:19:23",
    updatedAt: "2018-05-20 15:19:23",
    commentId: "c8f23b88-fe90-461c-b86a-cd73e91fba33"
  },
  {
    inviteId: "83fb43d5-44d1-4cb6-83a3-e8a9f3a85671",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      'GNLD is a company into herbal product sales, but, we generally say "GNLD type of job" because there are others who do the same thing. What it actually is, is called MLM, multi-level-Marketing, which means, they ask you to buy a product, and sell the product to people, and the more people you sell to, the more profit you make. We consider this a scam, because they hardly ever tell you the truth about the job invite, which, in actual sense, is not a job invite, it is indeed a seminar invite.\r\n\r\nSometimes they ask people to register with a fee, if you do a search on the platform you\'ll see people with personal experience.',
    createdAt: "2018-05-20 15:22:35",
    updatedAt: "2018-05-20 15:22:35",
    commentId: "0a7c2fc7-137d-4989-81cf-ff1128116ab4"
  },
  {
    inviteId: "7d9a1f93-cf4d-4818-9261-b90aca09b1a9",
    userId: "2ab884aa-4894-4deb-b204-797ac87a2ffb",
    body: "Is it a gnld scam brother?",
    createdAt: "2018-05-21 07:12:59",
    updatedAt: "2018-05-21 07:12:59",
    commentId: "4e22070d-edd2-494e-a455-24d3999eec02"
  },
  {
    inviteId: "2e9f425f-0e22-4cef-af20-4e33f2d4a906",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They specialise in E-commerce services and are based in Maryland as stated above.",
    createdAt: "2018-05-21 16:31:00",
    updatedAt: "2018-05-21 16:31:00",
    commentId: "1b9e841a-b866-482c-9ebb-b40efd05a50e"
  },
  {
    inviteId: "eb118fcc-342d-444a-bbe3-7457db8f984b",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The stated company is registered to that address according to their website, although they can't be found on the CAC listing. Their website is at http://www.proways.org.ng",
    createdAt: "2018-05-22 14:02:03",
    updatedAt: "2018-05-22 14:02:03",
    commentId: "9409f4f0-fed5-46b1-a47b-bcca80a7e476"
  },
  {
    inviteId: "69bf4239-4502-4e5b-b9aa-a8a37f2ff64e",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "We have had several posts on invites with this same address. I believe this is a typical GNLD invite. Feel free to browse through recent posts for information.",
    createdAt: "2018-05-22 14:03:46",
    updatedAt: "2018-05-22 14:03:46",
    commentId: "8a6e2dcf-0417-429b-8905-f2820737c7b6"
  },
  {
    inviteId: "5e7e0860-8eb3-408c-94ad-289668bc73ed",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The company name was not specified in the invitation, except Limeridge hotel is the proposed firm ..which is an hotel based in Lekki. I think the cuntact provided should be reached for further info..  The hotel's website is at http://www.limeridgehotels.com/",
    createdAt: "2018-05-22 22:07:16",
    updatedAt: "2018-05-22 22:07:16",
    commentId: "cf1f0585-5b6d-417d-a0dc-e80b78873f1c"
  },
  {
    inviteId: "889d20db-5502-491b-b1d6-942b938e63bf",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are  genuine, they specialise in performance improvement services and are based in aonikan Lagos. You can visit their website to browse through the services they offer http://www.5thquadrant.net",
    createdAt: "2018-05-24 11:25:14",
    updatedAt: "2018-05-24 11:25:14",
    commentId: "8bfbec07-6e3d-478a-98e5-440de6038158"
  },
  {
    inviteId: "068a177a-0963-48db-a3b7-26953df5e840",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are an aquaculture production company situated in Epe Lagos, they specialise in fish farming. They are listed in Google directories as an online presence.",
    createdAt: "2018-05-24 11:29:14",
    updatedAt: "2018-05-24 11:29:14",
    commentId: "db29ff8c-b340-48c0-bdde-34e8c87e1be6"
  },
  {
    inviteId: "608b6cd6-c095-4fd3-9052-f11b15097a78",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "After thorough research we observed that a lot of people have been getting this invitation, Made Hills Solution limited are affiliated with several GNLD reports, they claim to have a website which has be n under construction ever since. People who also attended the said interview gave reports that are not satisfactory. I say it is a waste of time.",
    createdAt: "2018-05-24 15:29:46",
    updatedAt: "2018-05-24 15:29:46",
    commentId: "f9cc5b06-a688-4317-a3ea-1beda52ae2df"
  },
  {
    inviteId: "bb02988c-e0de-49bd-93d2-0e1c642bba98",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Looks like a typical GNLD thing.",
    createdAt: "2018-05-25 17:18:06",
    updatedAt: "2018-05-25 17:18:06",
    commentId: "67a0cbc3-607b-4f59-9198-6be912ded3d4"
  },
  {
    inviteId: "05cd6217-f4a2-4669-be8c-c01df9f3b84c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "I believe the firm that rolled out this invitation is HotFm Abuja, the address above is registered to them. They are a legitimate radio station with frequency 98.3fm. Goodluck in your interview session. Cheers!",
    createdAt: "2018-05-25 18:03:13",
    updatedAt: "2018-05-25 18:03:13",
    commentId: "d944ac5b-4eae-45d4-82b7-c851bb95ed78"
  },
  {
    inviteId: "bb02988c-e0de-49bd-93d2-0e1c642bba98",
    userId: "88b7f91a-14f2-4241-b624-3fe1e98ef06b",
    body: "Reli?",
    createdAt: "2018-05-25 18:40:35",
    updatedAt: "2018-05-25 18:40:35",
    commentId: "09bdf047-d050-4633-a4a9-a3d145a30e77"
  },
  {
    inviteId: "bb02988c-e0de-49bd-93d2-0e1c642bba98",
    userId: "88b7f91a-14f2-4241-b624-3fe1e98ef06b",
    body: "Reli?",
    createdAt: "2018-05-25 18:40:49",
    updatedAt: "2018-05-25 18:40:49",
    commentId: "471e7167-7a08-4688-a913-c94ae86e447e"
  },
  {
    inviteId: "eb118fcc-342d-444a-bbe3-7457db8f984b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Here's the report of a witness:\r\n\r\n\"Don't ever try going. Wasted all my money to the place only to be telling me rubbish\"",
    createdAt: "2018-05-25 22:46:07",
    updatedAt: "2018-05-25 22:46:07",
    commentId: "6dfb7040-3821-4c5a-8a66-24e5bab67c7b"
  },
  {
    inviteId: "bb02988c-e0de-49bd-93d2-0e1c642bba98",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Research shows they don't even exist online, no website or LinkedIn, no listings in Google business directories either. The address is not even registered to them which is typical of GNLD multimarketing firms.",
    createdAt: "2018-05-25 22:52:10",
    updatedAt: "2018-05-25 22:52:10",
    commentId: "d7ffd087-0fe1-4d6d-877b-2173ef0edab2"
  },
  {
    inviteId: "5ecc92a8-4413-4a6b-b944-27924c0eed48",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is not real, check out related posts in it here https://bit.ly/2xe7ARu",
    createdAt: "2018-05-25 22:56:14",
    updatedAt: "2018-05-25 22:56:14",
    commentId: "9ea198a4-31b1-46cf-a886-0f41c59d0978"
  },
  {
    inviteId: "076b0d8a-2d5c-469c-ac82-38dc21fccabd",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "According to research they are a Laundry & Home Care, Beauty Care and adhesive company operating globally. They are quite popular and legit.",
    createdAt: "2018-05-27 20:55:55",
    updatedAt: "2018-05-27 20:55:55",
    commentId: "3b9d32d0-7273-4aca-91ad-759107d9e075"
  },
  {
    inviteId: "d2c71d09-c132-45f7-bd97-ee4a86bcc863",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are absolutely legitimate. They are brewing giants and are recognised globally. They are owners of products like beta malt and beers.",
    createdAt: "2018-05-29 19:46:09",
    updatedAt: "2018-05-29 19:46:09",
    commentId: "7c98101e-f4d4-4fe8-8cc2-195d6b96c674"
  },
  {
    inviteId: "5fb91802-cb6b-4abd-abe8-7fbb290495ee",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "BG LEAD is a GNLD type of thing. Don't waste your time. You can search the platform to see more details about them.",
    createdAt: "2018-05-31 18:14:02",
    updatedAt: "2018-05-31 18:14:02",
    commentId: "d1435248-5776-4649-8f87-fff0ab64018a"
  },
  {
    inviteId: "8f15f763-4775-4cdf-b263-c2b1463a5938",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Check here for information on the post https://isthisarealjob.com/drwhyte/ls-resource-7Z9669231205515",
    createdAt: "2018-06-02 10:02:38",
    updatedAt: "2018-06-02 10:02:38",
    commentId: "b31208d9-3ff4-4cbe-8d43-ecdaf8e89ed4"
  },
  {
    inviteId: "6bd4de86-ddee-42aa-bf70-d2d012cb9c1a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "Bg lead is GNLD affiliated. We have several posts on them.",
    createdAt: "2018-06-02 10:04:47",
    updatedAt: "2018-06-02 10:04:47",
    commentId: "9e70768f-47af-462f-b462-55bde68d377e"
  },
  {
    inviteId: "7c45f718-74d0-4a4e-aa16-20efad7c582e",
    userId: "0d2950c5-bc7c-424a-8c99-5b13aac5548b",
    body:
      'I got the exact same message only that mine is "careerwise" now I know it\'s clearly a BIG lie and God will punish them all.\r\nDear AKPOMON DANIEL, \r\nCareerswise is a recruiting agency and is an outsourcing firm which also offers ICT and Entrepreneurship services. As part of screening and selection process, you have been scheduled for an interview session slated for Wednesday, June 6th, 2018 by 10am, at Plot 14, Block A, Voda Paint, Surulere House, Off Fumec bus-stop, Surulere industrial road, Ogba, Lagos.\r\nCome with your cv and academics docs.\r\nThe HRM look forward to meeting with you soon.\r\nSincerely,\r\nMary Davis, \r\n09037567921\r\nfor CAREERSWISE Recruitment Agency.\r\nOutsourcing Unit',
    createdAt: "2018-06-05 20:28:50",
    updatedAt: "2018-06-05 20:28:50",
    commentId: "6ad7879f-d6d9-4979-a2eb-6479775bfb75"
  },
  {
    inviteId: "7c45f718-74d0-4a4e-aa16-20efad7c582e",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Maybe we should start alerting the authority to do something about these scammers!",
    createdAt: "2018-06-05 20:32:50",
    updatedAt: "2018-06-05 20:32:50",
    commentId: "16f0578d-9a43-4659-b13b-95f94479e9b1"
  },
  {
    inviteId: "2946ce65-c224-42fa-839a-e5429e659756",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are legitimate, they are basically into Human Relations and related stuff. Their website is at http://re-thinkhr.com",
    createdAt: "2018-06-06 01:34:09",
    updatedAt: "2018-06-06 01:34:09",
    commentId: "4e8c922f-dd42-4d00-acd9-911a3f7b67aa"
  },
  {
    inviteId: "3f8c3c62-fc16-4990-9bdf-a0e8b67283c9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The address doesn't specify the name of the intended company which is not good enough, it doesn't match any registered firm online too. No contact information was also provided.",
    createdAt: "2018-06-06 01:37:02",
    updatedAt: "2018-06-06 01:37:02",
    commentId: "f510c435-d255-451c-8e5e-c7665b1f834a"
  },
  {
    inviteId: "76bc1bbe-d55d-48a3-b32c-13c94fdbf0e3",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Posts like this are typical of GNLD firms, the company name was not even stated.  The address has even been affiliated with Grandlead heritage which is a popular GNLD firm. Not legitimate for me.",
    createdAt: "2018-06-06 01:39:05",
    updatedAt: "2018-06-06 01:39:05",
    commentId: "5c32bbaa-35f4-4b14-b0e1-57ae14210459"
  },
  {
    inviteId: "37d4c72b-3a55-40f9-bfb7-fb3196ff01c3",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Information online suggests they are a logistics and support company even though they don't seem to have their own working website. It's worth checking out as there are no affiliations with the \"bad eggs\".",
    createdAt: "2018-06-06 01:42:07",
    updatedAt: "2018-06-06 01:42:07",
    commentId: "ef80f82e-cb23-4c9b-86bc-da7f1fa50f26"
  },
  {
    inviteId: "a0f510a5-8ac0-4d9f-9864-a3c6f4a4c5cc",
    userId: "05416d1c-424e-4b12-b331-b75ee0ebdfff",
    body:
      "There is a number ,my sister has just been duped by them.......\r\n09021302849.....he claimed to be the manager,....and this 08058165081 he claimed to be an Event planner",
    createdAt: "2018-06-06 09:05:10",
    updatedAt: "2018-06-06 09:05:10",
    commentId: "aed8dead-2d0b-403b-995f-e263da597ba7"
  },
  {
    inviteId: "a0f510a5-8ac0-4d9f-9864-a3c6f4a4c5cc",
    userId: "05416d1c-424e-4b12-b331-b75ee0ebdfff",
    body:
      "There is a number ,my sister has just been duped by them.......\r\n09021302849.....he claimed to be the manager,....and this 08058165081 he claimed to be an Event planner",
    createdAt: "2018-06-06 09:05:10",
    updatedAt: "2018-06-06 09:05:10",
    commentId: "6ffacc3e-0259-43cb-a521-a579cfc1a600"
  },
  {
    inviteId: "55171ae2-a529-49be-a5de-c5d5380e2fbd",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "The same address has been used for several other companies associated with GNLD, do a search on the platform and you'll see. My advice, don't waste your time.",
    createdAt: "2018-06-06 14:54:42",
    updatedAt: "2018-06-06 14:54:42",
    commentId: "36313219-9086-4502-880f-93ef134df398"
  },
  {
    inviteId: "af1997e4-cb7c-4d70-ba05-1d47a95433c1",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This address is associated to GNLD activities with different names.",
    createdAt: "2018-06-06 19:48:53",
    updatedAt: "2018-06-06 19:48:53",
    commentId: "77f75c90-22b8-4530-8c1a-d3d831a678db"
  },
  {
    inviteId: "af1997e4-cb7c-4d70-ba05-1d47a95433c1",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thank you",
    createdAt: "2018-06-06 21:45:25",
    updatedAt: "2018-06-06 21:45:25",
    commentId: "9a57a701-da2d-4962-949c-7dbe7103128e"
  },
  {
    inviteId: "e32b69d2-d92b-43a1-bc9e-36ebda39ac09",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Yes this is legitimate, they are an online food store with branches in Lekki, Ikeja and Festac. You can browse their website here www.megachickenrestaurantsltd.com",
    createdAt: "2018-06-06 22:33:33",
    updatedAt: "2018-06-06 22:33:33",
    commentId: "621ce48d-7f54-4398-a3e4-9f67685d2457"
  },
  {
    inviteId: "13fd98e3-29b2-4d53-abcd-d23a0597a307",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "We have posts related to this on the website. They are into GNLD",
    createdAt: "2018-06-06 22:34:09",
    updatedAt: "2018-06-06 22:34:09",
    commentId: "7c7ee655-5a3d-4736-8dfc-1e2c7411d723"
  },
  {
    inviteId: "c1e2de8e-b7a7-4cd8-9f65-9cdf73ad027b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "This has been confirmed as GNLD type of thing",
    createdAt: "2018-06-08 16:00:14",
    updatedAt: "2018-06-08 16:00:14",
    commentId: "a5f0f91c-41f4-443c-8cb4-27479328ffed"
  },
  {
    inviteId: "7875908b-cc77-4c91-80a1-cc4c7a979dd9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Although Union Bank is a legitimate and well known Organization, security measures have to be taken. The valid customer care lines are +234-1-2716816 and 07007007000 for more clarification.",
    createdAt: "2018-06-09 15:14:51",
    updatedAt: "2018-06-09 15:14:51",
    commentId: "3b481d5b-3a0a-4605-a9ee-3d5ecc4cab59"
  },
  {
    inviteId: "3390d500-7c23-4060-a282-3874a99c3618",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is real, PorkMoney is a legitimate firm whose main goal is to reduce the import dependency of the livestock. You can find more info here https://www.porkmoney.com/",
    createdAt: "2018-06-09 15:19:05",
    updatedAt: "2018-06-09 15:19:05",
    commentId: "1abd2b8e-6fe6-4f23-8fba-7ca1441cb172"
  },
  {
    inviteId: "5d9431e0-ed82-43ef-bbdf-abd8daf6a9f6",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No information suggests that this is a legitimate firm. A report online has affiliated them with GNLD too.",
    createdAt: "2018-06-09 15:24:03",
    updatedAt: "2018-06-09 15:24:03",
    commentId: "27300984-a027-4577-899e-9884b6f0c61b"
  },
  {
    inviteId: "ec708ff1-e734-4d5c-95d4-18a4abf364b0",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The company name was not even included in the invite. The address is not registered to any organization too according to research.",
    createdAt: "2018-06-09 15:28:41",
    updatedAt: "2018-06-09 15:28:41",
    commentId: "5f1e00c7-37ca-4620-aea1-e9c7b16344d8"
  },
  {
    inviteId: "5966c8e1-4f50-45e1-8da6-8b7e964e2327",
    userId: "7936d00c-f9ff-4aab-af4c-fe4aaec09519",
    body:
      "please i just got this same email...did you later go or are\r\n this people real?",
    createdAt: "2018-06-09 22:06:55",
    updatedAt: "2018-06-09 22:06:55",
    commentId: "481d102f-d3b6-40b3-833f-ff7936632151"
  },
  {
    inviteId: "5966c8e1-4f50-45e1-8da6-8b7e964e2327",
    userId: "7936d00c-f9ff-4aab-af4c-fe4aaec09519",
    body:
      "please i just got this same email...did you later go or are\r\n this people real?",
    createdAt: "2018-06-09 22:06:56",
    updatedAt: "2018-06-09 22:07:03",
    commentId: "db8747e5-d527-4952-8bfe-29e240dc2d5e"
  },
  {
    inviteId: "66dea123-e58e-473b-935d-62d5930cdc4b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "If you search for \"Osiyemi Street\" on the platform, you'll see that several other GNLD like companies use that same address. I'll say don't waste your time.",
    createdAt: "2018-06-10 06:39:56",
    updatedAt: "2018-06-10 06:39:56",
    commentId: "b4a277fa-2815-4936-9434-0500db607c84"
  },
  {
    inviteId: "5966c8e1-4f50-45e1-8da6-8b7e964e2327",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Don't waste your time, its GNLD. They use that same address for other companies which are also GNLD things.",
    createdAt: "2018-06-10 06:40:47",
    updatedAt: "2018-06-10 06:40:47",
    commentId: "2639ea68-b4bc-40f5-b012-65c604a70b33"
  },
  {
    inviteId: "c5ee8a33-14f2-423e-a0f0-ea0bf3b84e87",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Pertinence Limited is a firm specialising in real estate management as well as enterprise training and resource acquisition. They are a legitimate company. The address above belongs  to a branch while they have their head branch at Egbeda in Lagos state. Goodluck.",
    createdAt: "2018-06-10 08:17:18",
    updatedAt: "2018-06-10 08:17:18",
    commentId: "5dbc0527-2c29-4515-ab34-699898cccd18"
  },
  {
    inviteId: "c5ee8a33-14f2-423e-a0f0-ea0bf3b84e87",
    userId: "053fa2c6-033d-4fcc-8c41-591dc91213b8",
    body: "thanks",
    createdAt: "2018-06-11 16:32:18",
    updatedAt: "2018-06-11 16:32:18",
    commentId: "4b587a1f-2409-4b04-b9cc-9ec026ce9ce3"
  },
  {
    inviteId: "94474295-8411-43e1-84cb-0df7a467053b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This name and address already exist in the database, just search for MADE HILL. You'll see.",
    createdAt: "2018-06-13 17:08:08",
    updatedAt: "2018-06-13 17:08:08",
    commentId: "8013a740-1008-4f44-9756-8dbaa90b628b"
  },
  {
    inviteId: "51cb5f17-e62d-4a8a-a54d-c47c2cdeafa7",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "help",
    createdAt: "2018-06-13 17:08:22",
    updatedAt: "2018-06-13 17:08:22",
    commentId: "e7fcecae-2433-4374-8ef0-b31aa08252e6"
  },
  {
    inviteId: "7d9a1f93-cf4d-4818-9261-b90aca09b1a9",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Thanks",
    createdAt: "2018-06-13 19:24:13",
    updatedAt: "2018-06-13 19:24:13",
    commentId: "12799434-b25e-4bc0-ab7a-61757f4e9bc7"
  },
  {
    inviteId: "0d15aa55-6546-4a04-bcf0-cf377915d3bf",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "SCHLEEZ already exists on the platform, just search for SCHLEEZ. According to past records, its not a real company and its a scam.",
    createdAt: "2018-06-13 20:39:13",
    updatedAt: "2018-06-13 20:39:13",
    commentId: "4d169032-03f3-4cf3-a328-1f8a130170e4"
  },
  {
    inviteId: "e55a568a-22bf-412b-a161-ea49b6e529d5",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This company already exist on the platform, please search for DEW or Osiyemi Street Opp and see the records. Generally, if the same specific message is forwarded to more than 1 person over a long period of time, its probably a scam. My advice, don't waste your time.",
    createdAt: "2018-06-13 20:42:10",
    updatedAt: "2018-06-13 20:42:10",
    commentId: "e80c62b4-0c05-426d-b5a0-acc742326b68"
  },
  {
    inviteId: "1bcaed2a-145c-4e46-b829-3359065ee9b1",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are a legitimate Information and Solution Services Company. The address given in the invite is registered to them and more information can be found on their website as stated.",
    createdAt: "2018-06-15 21:50:06",
    updatedAt: "2018-06-15 21:50:06",
    commentId: "eeb8c87e-a813-4991-a199-35c44cc55a78"
  },
  {
    inviteId: "0d2ba871-dc43-4773-b602-ee93f55820d6",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The most relevant online presence for Linktech is company websites not based in Africa.  The only match as regards Lagos which is the address stated above is in Lekki. Not satisfactory enough by me. check here for more details https://www.vconnect.com/ok-linktech-services-limited-eti_osa-lagos_b354908",
    createdAt: "2018-06-15 21:57:49",
    updatedAt: "2018-06-15 21:57:49",
    commentId: "3c0891bc-4104-4879-a18c-a611e368bcd7"
  },
  {
    inviteId: "f345e407-86a5-40e8-82c1-674d99002509",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The company seems to have varying online details. Several articles link them to the address stated in the invite although they don't have a website of their own. Might be worth checking out.",
    createdAt: "2018-06-15 22:04:11",
    updatedAt: "2018-06-15 22:04:11",
    commentId: "6ab62115-0f08-4498-b0d2-f47b75a45b86"
  },
  {
    inviteId: "6f1d5502-c6bf-499b-8f15-b9377d31b144",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I believe we already have LEAD CONCEPT on the platform... do a search for the name",
    createdAt: "2018-06-17 22:05:47",
    updatedAt: "2018-06-17 22:05:47",
    commentId: "01ad3de8-f052-4fce-a29e-3ccf501c9aa8"
  },
  {
    inviteId: "2aa65511-fdff-4852-aa54-c8543f799bd6",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The company name - DPP, stated above could range from Directorate of Public Prosecutions to several other federal agencies. However it doesn't seem like a valid private organisation as no information was found concerning them. The address doesn't match a valid result either.",
    createdAt: "2018-06-17 22:22:19",
    updatedAt: "2018-06-17 22:22:19",
    commentId: "26237588-2f5d-4d8a-9d86-7cd4c8902183"
  },
  {
    inviteId: "7c399517-cf58-4597-b50a-c6928af38bd4",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "I can't seem to find any valid information as regards this. No online presence whatsoever. Can more information be provided?",
    createdAt: "2018-06-17 22:25:41",
    updatedAt: "2018-06-17 22:25:41",
    commentId: "d9808ae9-81bd-41b2-9402-ea75d75bdf7f"
  },
  {
    inviteId: "e54274e0-6e90-431e-85d7-c32a6c46244b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Seems like a real company, seeing that they have a branch locator on their website and the said address is valid on their website. Good Luck",
    createdAt: "2018-06-18 05:48:28",
    updatedAt: "2018-06-18 05:48:28",
    commentId: "36866b40-ba98-4373-9dbb-09724259b93a"
  },
  {
    inviteId: "b90fb451-ff9e-4594-8d2d-d15e11771e28",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hi, please search for SCHLEEZ you'll see lots of posts concerning them... they seem to be GNLD type of thing though",
    createdAt: "2018-06-18 20:37:32",
    updatedAt: "2018-06-18 20:37:32",
    commentId: "d9c5f3de-f87b-4943-99aa-f1b594137eb4"
  },
  {
    inviteId: "8e30f147-3dd0-4d78-a17e-fc4e2ac303e0",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "According to information online they are a professional service firm into the business of Recruitment, Training, HR outsourcing, ISO Management and more. The address is registered to them. You can find more information on their website here http://www.culminateconsulting.com/",
    createdAt: "2018-06-20 16:21:47",
    updatedAt: "2018-06-20 16:21:47",
    commentId: "3aae70d1-6bb0-4d6c-9f20-9d0859c0ee9e"
  },
  {
    inviteId: "e3a1b38f-87ba-46d4-a51b-3c3e25e3bdbe",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are affiliated with the popular GNLD schemes. It's probably not worth it",
    createdAt: "2018-06-20 16:23:15",
    updatedAt: "2018-06-20 16:23:15",
    commentId: "e9ce1466-3d96-4997-a94a-4e5350e29a07"
  },
  {
    inviteId: "bee1126c-5c44-4951-a12c-ba236c3c74eb",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Limited information was found online but the name seems like a GNLD thing to me. They don't have a website but it appears they are located in the location stated in the invite.",
    createdAt: "2018-06-20 16:28:11",
    updatedAt: "2018-06-20 16:28:11",
    commentId: "9fbe3686-20e4-4668-843f-d009f378dbac"
  },
  {
    inviteId: "bd8ff4f9-2449-4b25-9048-df7791167af6",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Although there is limited access to information about them. They seem to be a legitimate company. They have a somewhat blank Facebook page about the organisation. And several employees are linked to them on LinkedIn",
    createdAt: "2018-06-20 16:34:50",
    updatedAt: "2018-06-20 16:34:50",
    commentId: "3ea59745-8a7b-4124-97bb-25d814add8fa"
  },
  {
    inviteId: "481d2ebd-c98a-496a-b543-a28e26505b7a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are a pharmaceutical company. This is pretty legit. More information can be found here http://sylkenltd.com/",
    createdAt: "2018-06-20 16:36:56",
    updatedAt: "2018-06-20 16:36:56",
    commentId: "c5a58a51-402f-4396-9eec-e975764496f2"
  },
  {
    inviteId: "677fb236-dbac-43a1-be7d-1d24161ac423",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "FILMO Group is a property development and management services company, Congrats, this is real. You can check them out here http://filmo-group.com",
    createdAt: "2018-06-20 16:38:32",
    updatedAt: "2018-06-20 16:38:32",
    commentId: "795127df-e915-4c3d-9ec7-d14c2f5045e9"
  },
  {
    inviteId: "edef512f-7950-4de9-8362-c56fde9ce23c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The is probably GNLD. No information can be found as regards them.",
    createdAt: "2018-06-20 16:40:40",
    updatedAt: "2018-06-20 16:40:40",
    commentId: "87149a0c-a1d1-48c9-a87a-169f5d0b6828"
  },
  {
    inviteId: "cdd8e2f3-f4f9-4568-b54e-c9338ffd5905",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "iCA could mean the  Institute of Cultural Affairs which is a global community of non-profit organisations. However they are recognised globally and are not tied down to the address specified here. Other registered firms with this address and name is a wide search for now.",
    createdAt: "2018-06-22 22:56:27",
    updatedAt: "2018-06-22 22:56:27",
    commentId: "d32a4f41-ebe2-47ed-ac11-830cc9f1cf86"
  },
  {
    inviteId: "296db929-47f6-439d-94f5-d274d87f39b1",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This has GNLD written all over it. The firm name was not even specified. This address has been used by GNLD firms before, check previous posts.",
    createdAt: "2018-06-22 22:57:54",
    updatedAt: "2018-06-22 22:57:54",
    commentId: "a50a6402-ca55-441f-911a-2b40ed027508"
  },
  {
    inviteId: "59da82d3-1a96-49d6-98f1-6e97bcf631bc",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is GNLD, we have several posts on it. Feel free to check them out.",
    createdAt: "2018-06-24 10:30:46",
    updatedAt: "2018-06-24 10:30:46",
    commentId: "b5785646-3e77-434d-aaa5-d0bbf8d0deaa"
  },
  {
    inviteId: "25b85cc3-b1a2-4a1b-aa26-56ff7747cfae",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This invitation is conflicting. Quincy consults or By lead consults? If they are the same organisation then this invitation is not as legit. By lead is GNLD and the address given here has been in use by several GNLD firms too. Check out previous posts on this.",
    createdAt: "2018-06-24 10:34:16",
    updatedAt: "2018-06-24 10:34:16",
    commentId: "e1c99ee8-9ef1-4d28-87ff-4ef2532aa446"
  },
  {
    inviteId: "98b8f190-ec0f-4b42-aa13-0bbacbb3ac13",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The firm above is listed in online directories. They appear to be involved in educational services such as publishing and recruiting of teachers. Regards.",
    createdAt: "2018-06-24 10:37:33",
    updatedAt: "2018-06-24 10:37:33",
    commentId: "b16068a5-0402-4302-b047-abb6aac02635"
  },
  {
    inviteId: "8ae19bce-7f43-4987-84ef-f41d7545ea2f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They appear to be involved in construction services, although the address given here is incomplete. More information can be found at Homework design & consultants ltd - lagos, NG ...\r\nhttps://www.houzz.com › pro › adekola-6",
    createdAt: "2018-06-24 10:40:08",
    updatedAt: "2018-06-24 10:40:08",
    commentId: "d3461ace-3c8f-4779-aced-77b244def799"
  },
  {
    inviteId: "80fe90e7-4c58-419e-be02-9d8b34c7fce2",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The website provided here contains the necessary information about them although it is poorly built.",
    createdAt: "2018-06-24 10:44:26",
    updatedAt: "2018-06-24 10:44:26",
    commentId: "5a672d56-2d2f-4fea-8fdf-6877794d59ea"
  },
  {
    inviteId: "cebf688c-dc43-4817-88e0-f90ed98b4f56",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "ARM is an asset management and investment firm. Although they may have a marketing branch they are not into GNLD. You are good to go. Regards.",
    createdAt: "2018-06-24 10:50:39",
    updatedAt: "2018-06-24 10:50:39",
    commentId: "f462ebec-34fd-4b72-8070-351d744dcd04"
  },
  {
    inviteId: "224692ce-127a-41cb-b2ea-06f66280d2e5",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'From what is stated here this is a marketing scheme. The incentives explained might also be a plot to encourage people. This might not be the "white-collar" job you were expecting. More information can be found here http://www.afripreneur.com.ng',
    createdAt: "2018-06-24 10:59:30",
    updatedAt: "2018-06-24 10:59:30",
    commentId: "45aff75f-aa5a-4378-99c5-6fa05d613a66"
  },
  {
    inviteId: "c498e017-36ff-4a2b-82c9-f675ea524bef",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'No it is not GNLD, the address used to be in use by Chicken Republic. However, it is has recently morphed into another brand "Food House". This is legit.',
    createdAt: "2018-06-25 13:38:50",
    updatedAt: "2018-06-25 13:38:50",
    commentId: "ffb96274-15a9-412c-8b2b-1bbc20debd97"
  },
  {
    inviteId: "99213533-37da-428e-a43e-0b5326a50af0",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The above is registered as a bitcoin mining community. They are based in the united states and the role of marketer is probably going to be done remotely. Any agency claiming to have an interview scheduled here in Nigeria is probably scam.",
    createdAt: "2018-06-25 18:47:29",
    updatedAt: "2018-06-25 18:47:29",
    commentId: "6474b761-74d4-4e89-8093-843e3bcba82b"
  },
  {
    inviteId: "4553ac90-756c-4b6b-8e9a-5fa861848090",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The company name was not stated in the invite and as a result further checks can not be made. The address is not registered to any firm either.",
    createdAt: "2018-06-25 18:54:33",
    updatedAt: "2018-06-25 18:54:33",
    commentId: "7ea4274b-31a6-45a2-8cb4-f888e87882c1"
  },
  {
    inviteId: "51cb5f17-e62d-4a8a-a54d-c47c2cdeafa7",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "According to information online MatrixGlover is a recruitment agency, however the address in this invitation is not registered to them. Infact, the address here has been affiliated with a GNLD firm by several individuals .. claiming to be from one Raycoast resources. Beware.",
    createdAt: "2018-06-25 19:03:38",
    updatedAt: "2018-06-25 19:03:38",
    commentId: "f02c0428-8f20-4c88-b160-4969e3d3e477"
  },
  {
    inviteId: "20bc5e02-fa83-4e94-aacf-143ebb415b68",
    userId: "40c0c582-1420-4c65-aaef-c8cfac2e9702",
    body:
      "Its a complete waste of time trust me, they would act as though its a real job then later start giving motivational speech    and after which would ask u to register with them for with 5000",
    createdAt: "2018-06-26 02:46:09",
    updatedAt: "2018-06-26 02:46:09",
    commentId: "cc24442a-6ccc-45ee-8e93-fbe1d612f2c7"
  },
  {
    inviteId: "20bc5e02-fa83-4e94-aacf-143ebb415b68",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Thank you for this!",
    createdAt: "2018-06-26 18:00:03",
    updatedAt: "2018-06-26 18:00:03",
    commentId: "cd8141b6-4ec1-4256-b339-73d8d8f6272d"
  },
  {
    inviteId: "7e1ecad0-264b-4ed7-849e-809d8c4aa620",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They claim to be a Human Resource Consultants & Recruitment agency. They are indeed registered to the address stated here.",
    createdAt: "2018-06-26 18:09:31",
    updatedAt: "2018-06-26 18:09:31",
    commentId: "c5296557-9efe-446e-be6a-f34c01959714"
  },
  {
    inviteId: "b2174ee8-4254-4b96-8e53-f82287c83f59",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This seems like a typical GNLD invite. They have no online presence whatsoever.",
    createdAt: "2018-06-26 18:14:09",
    updatedAt: "2018-06-26 18:14:09",
    commentId: "e0045dec-3e0b-4adc-b178-27fe0ff3219c"
  },
  {
    inviteId: "087aec78-c7cf-4298-b8f5-e048d7109558",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Certification Edge is a training and consulting firm based in Ikeja. You can find more information here http://www.certificationedge.com",
    createdAt: "2018-06-26 18:17:01",
    updatedAt: "2018-06-26 18:17:01",
    commentId: "5041293c-d459-42ae-a444-35ec6c133f1c"
  },
  {
    inviteId: "fc3ce22e-923d-4ea0-bbcf-a1667b0e3df2",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The abbreviation might be as a result of non-challance. They are an insurance firm based in Lagos. Find more here https://chiplc.com",
    createdAt: "2018-06-26 18:23:19",
    updatedAt: "2018-06-26 18:23:19",
    commentId: "8d39bedf-a37b-45bf-bcd7-feb29509f836"
  },
  {
    inviteId: "fc3ce22e-923d-4ea0-bbcf-a1667b0e3df2",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "Actually, I don't think this is a real company. Except the HR person is extremely unprofessional. Which would mean their is something wrong with the company",
    createdAt: "2018-06-27 10:19:17",
    updatedAt: "2018-06-27 10:19:17",
    commentId: "47c22547-1989-459f-9466-a01c0f6ad710"
  },
  {
    inviteId: "5ecaebb4-d5d1-450e-89bc-f885add69b74",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "That same address has been used by other 'companies' which would suggest GNLD type business. You can search for Linktech on the platform to see more about them.",
    createdAt: "2018-06-28 13:22:50",
    updatedAt: "2018-06-28 13:22:50",
    commentId: "ec07d2f5-1c03-40ef-b6ae-f04407c33f89"
  },
  {
    inviteId: "5ecaebb4-d5d1-450e-89bc-f885add69b74",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thank you",
    createdAt: "2018-06-28 15:25:28",
    updatedAt: "2018-06-28 15:25:28",
    commentId: "2d59ad91-88d5-4656-93b4-72ef53efe37c"
  },
  {
    inviteId: "e64a6bc2-ba26-4418-8cfc-3723191383ee",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The invite appears to have some typographical errors, the name of the company was not even specified. Lekki leisure lake is a popular tourist center in Lagos state. And we can only assume this is real if you indeed applied to work with the management of this tourist centre",
    createdAt: "2018-06-29 14:37:09",
    updatedAt: "2018-06-29 14:37:09",
    commentId: "4779aa8f-5cf6-4ab2-b450-01e43f48580c"
  },
  {
    inviteId: "5ecaebb4-d5d1-450e-89bc-f885add69b74",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "https://isthisarealjob.com/mikeale/is-this-real-1055102612P5095",
    createdAt: "2018-06-29 14:38:56",
    updatedAt: "2018-06-29 14:38:56",
    commentId: "4051fc6c-3c7e-4b40-ac0b-345cfdf342a9"
  },
  {
    inviteId: "248897ce-2645-4f8a-a40b-aef71ce2df07",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is GNLD. See here https://isthisarealjob.com/mikeale/fortune-careers-ltd-is-likely-gnld-V24580352295128",
    createdAt: "2018-06-29 14:40:33",
    updatedAt: "2018-06-29 14:40:33",
    commentId: "c5a80a5f-8b0b-41a3-a8c4-80bc2c8a979f"
  },
  {
    inviteId: "4703a963-1ebf-491a-88ae-08c7d0a73f4b",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is legit. Merit Abode limited are into real estate management and they are registered to the address in the invite.",
    createdAt: "2018-06-29 14:45:49",
    updatedAt: "2018-06-29 14:45:49",
    commentId: "7579cec2-ca59-41e0-8a53-a8faf0623a80"
  },
  {
    inviteId: "0ce93e82-c98b-494c-bc42-c4519bb3193f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This same address is affiliated with some GNLD firms. This doesn't look legit.",
    createdAt: "2018-07-01 14:06:26",
    updatedAt: "2018-07-01 14:06:26",
    commentId: "8c341bb3-f108-4d61-9b41-db9e0551f83f"
  },
  {
    inviteId: "82e0defb-e0ff-4742-9799-838afa5709af",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Doesn't look legit. This address has been affiliated with some GNLD schemes.",
    createdAt: "2018-07-01 14:07:35",
    updatedAt: "2018-07-01 14:07:35",
    commentId: "539f92d0-3baa-441e-953f-340f32d418be"
  },
  {
    inviteId: "7cedad0d-0aba-4c60-99fe-0bba07a49ca2",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Yes, SmartX is a firm that specialises in providing conducive workspaces for SMEs and organisations. The are located at the address stated in the invite. Find more information here https://smartxbusinesshub.com",
    createdAt: "2018-07-01 14:11:10",
    updatedAt: "2018-07-01 14:11:10",
    commentId: "4cc36541-9864-405f-90a1-2e088208d33e"
  },
  {
    inviteId: "3cf23b01-ef1e-4f17-8f6b-d8f4ee802a04",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No legitimate firm structures their invite in such manner, the address is also in use by some GNLD schemes. Not legit.",
    createdAt: "2018-07-01 14:12:11",
    updatedAt: "2018-07-01 14:12:11",
    commentId: "055d087b-a11d-40b6-b44a-fd749fcafebe"
  },
  {
    inviteId: "31393283-0fce-4566-8842-c72b689f32e9",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Check previous posts for details about this type of invite. Typical of GNLD schemes.",
    createdAt: "2018-07-01 14:12:56",
    updatedAt: "2018-07-01 14:12:56",
    commentId: "5da87ac8-a7b5-4b4d-8fa5-9bdb220c0f14"
  },
  {
    inviteId: "a00d4275-c249-4e10-b36b-fd9d90bc3cb8",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The address here clearly belongs to a church. What type of organisation performs their interview at a church hall? Not the kind of job to look out for to me.",
    createdAt: "2018-07-01 14:15:44",
    updatedAt: "2018-07-01 14:15:44",
    commentId: "a7c38840-416c-436b-befe-52538c5dc028"
  },
  {
    inviteId: "defadf7b-10ad-4165-b5a5-819eb76ff75c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No recognised firm is registered to this address. Doesn't look real to me.",
    createdAt: "2018-07-01 14:19:25",
    updatedAt: "2018-07-01 14:19:25",
    commentId: "f3af4a05-efa0-456d-99be-564e8b7e06b2"
  },
  {
    inviteId: "e5388193-3666-4928-b664-f99197322417",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This is real, although reports from people suggest that they recruit marketers with pay of about #30,000. Goodluck.",
    createdAt: "2018-07-01 14:23:44",
    updatedAt: "2018-07-01 14:23:44",
    commentId: "8c5badf0-b651-4cf4-966c-6e4a113d60fd"
  },
  {
    inviteId: "defadf7b-10ad-4165-b5a5-819eb76ff75c",
    userId: "6ed373a8-0f41-4d3a-96e4-843d4c9542f6",
    body:
      "I got d msg too:\r\nYou are invited for an interview on:\r\nWed 4 July. 2 pm\r\n4Power Building 6B Peter Odili Rd by Sasun Roundabout, Port Harcourt.\r\nCome with original & copy of your credentials, Degree Cert, Passport photo, Means of identification & CV \r\nCall Sam 08093301848\r\nThank you.",
    createdAt: "2018-07-01 15:17:29",
    updatedAt: "2018-07-01 15:17:29",
    commentId: "4ade22c1-d59c-4e5d-aa28-343b26e9a4e0"
  },
  {
    inviteId: "defadf7b-10ad-4165-b5a5-819eb76ff75c",
    userId: "6ed373a8-0f41-4d3a-96e4-843d4c9542f6",
    body:
      "I tried calling but d Sam didn't pick...  I just don't want to go der and waste my time cox I don't remembered applying for any job der.",
    createdAt: "2018-07-01 15:19:33",
    updatedAt: "2018-07-01 15:19:33",
    commentId: "4803a5c7-435f-4215-a656-8ed5fe292eac"
  },
  {
    inviteId: "e5388193-3666-4928-b664-f99197322417",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thanks",
    createdAt: "2018-07-01 15:59:25",
    updatedAt: "2018-07-01 15:59:25",
    commentId: "91da193e-ff37-4629-bf3b-bc92812bcfa2"
  },
  {
    inviteId: "3cf23b01-ef1e-4f17-8f6b-d8f4ee802a04",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Appreciate",
    createdAt: "2018-07-01 16:01:07",
    updatedAt: "2018-07-01 16:01:07",
    commentId: "c38d0d8c-3474-4df1-b75b-85f7d7dc7356"
  },
  {
    inviteId: "defadf7b-10ad-4165-b5a5-819eb76ff75c",
    userId: "e9b0e442-86f6-4498-97fa-8df6d7f0b156",
    body:
      "I also got the text, and also a mail. Can't remember applying anything there. Also? I called the Sam, he picked... Said the name of the company is EasyRecruit and that the job position is Cashier..",
    createdAt: "2018-07-01 17:01:43",
    updatedAt: "2018-07-01 17:01:43",
    commentId: "057ed57d-7516-429d-a175-40c0ab55ce12"
  },
  {
    inviteId: "defadf7b-10ad-4165-b5a5-819eb76ff75c",
    userId: "e9b0e442-86f6-4498-97fa-8df6d7f0b156",
    body:
      "I also got the text, and also a mail. Can't remember applying anything there. Also? I called the Sam, he picked... Said the name of the company is EasyRecruit and that the job position is Cashier..",
    createdAt: "2018-07-01 17:02:51",
    updatedAt: "2018-07-01 17:02:51",
    commentId: "e4aa9e09-e0fb-48a1-a577-0470fcdce0f1"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:51:46",
    updatedAt: "2018-07-01 19:51:46",
    commentId: "2b0b4126-7ee5-4dcc-adb8-40cf3500e643"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:51:51",
    updatedAt: "2018-07-01 19:51:51",
    commentId: "1e9ec2c8-7677-4bc0-8ed9-09f608bf50a8"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:51:55",
    updatedAt: "2018-07-01 19:51:55",
    commentId: "94ea2881-de3c-43f6-a2c5-960abbd5ccb9"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:03",
    updatedAt: "2018-07-01 19:52:03",
    commentId: "894fa7d8-fb19-4441-b282-adf364d0f29f"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:06",
    updatedAt: "2018-07-01 19:52:06",
    commentId: "e7730ba4-75ee-495d-bf96-c4f1ff204ca9"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:09",
    updatedAt: "2018-07-01 19:52:09",
    commentId: "3bda2ab4-63cc-461a-9cbd-066da82e3a92"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:14",
    updatedAt: "2018-07-01 19:52:14",
    commentId: "c44ebe4e-160f-4981-8677-31ff63d035f4"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:17",
    updatedAt: "2018-07-01 19:52:17",
    commentId: "bd63374e-7286-49da-98b3-5644f62cde2c"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:26",
    updatedAt: "2018-07-01 19:52:26",
    commentId: "832e7c90-4112-497a-82ce-b6910f265ef6"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:28",
    updatedAt: "2018-07-01 19:52:28",
    commentId: "450118e8-b2b4-49bf-be8e-84c03c9a5a4e"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:31",
    updatedAt: "2018-07-01 19:52:31",
    commentId: "f3b43978-ac43-4be3-82f3-eac0609a5d69"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:36",
    updatedAt: "2018-07-01 19:52:36",
    commentId: "42ea80bb-910c-484f-8d39-ed318022f15f"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:40",
    updatedAt: "2018-07-01 19:52:40",
    commentId: "e555788f-7b33-4eac-920a-e720cfb2dcee"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:48",
    updatedAt: "2018-07-01 19:52:48",
    commentId: "15e3e784-7059-4471-9ee2-00b40c7567ea"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:50",
    updatedAt: "2018-07-01 19:52:50",
    commentId: "ed8160ed-280f-48b2-bcee-454aa0b5cc47"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:53",
    updatedAt: "2018-07-01 19:52:53",
    commentId: "deeaed77-7227-44bf-9fc4-aa9337ca608e"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:52:58",
    updatedAt: "2018-07-01 19:52:58",
    commentId: "562bfbdb-1013-4347-9f8d-443ba25c3ec6"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:02",
    updatedAt: "2018-07-01 19:53:02",
    commentId: "f3d8a15d-7759-479c-a2bc-1f79f9501f86"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:10",
    updatedAt: "2018-07-01 19:53:10",
    commentId: "182f6edb-5410-46c8-b531-b709d24651fe"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:13",
    updatedAt: "2018-07-01 19:53:13",
    commentId: "89b3b74d-6d81-4e04-87a7-01cfd749b481"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:16",
    updatedAt: "2018-07-01 19:53:16",
    commentId: "133ba6fa-3419-44bf-9b9d-aea893ece9b8"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:21",
    updatedAt: "2018-07-01 19:53:21",
    commentId: "ada3dff4-b73b-4041-98d1-cf7601aa297a"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:24",
    updatedAt: "2018-07-01 19:53:24",
    commentId: "d917cdf6-a89d-4186-b9cf-fe9834f78cf5"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:33",
    updatedAt: "2018-07-01 19:53:33",
    commentId: "d805b414-962a-4b11-aa03-d96b84cd19d2"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:35",
    updatedAt: "2018-07-01 19:53:35",
    commentId: "cb09509a-1e78-4d52-9052-0479f57a7734"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:38",
    updatedAt: "2018-07-01 19:53:38",
    commentId: "812420dc-8fef-4582-a53c-b9b290e0d053"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:43",
    updatedAt: "2018-07-01 19:53:43",
    commentId: "d6823297-8327-46cc-bbf3-e70c41ffa65e"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:46",
    updatedAt: "2018-07-01 19:53:46",
    commentId: "ba6a6a8b-c9c6-49a7-ba3d-308669effaca"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:55",
    updatedAt: "2018-07-01 19:53:55",
    commentId: "0e2be1b5-b69e-4b56-b457-fa5660187124"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:53:57",
    updatedAt: "2018-07-01 19:53:57",
    commentId: "19a5d19a-d0ad-4d5d-a764-ef2a5c9246d8"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:54:00",
    updatedAt: "2018-07-01 19:54:00",
    commentId: "428dbc0b-0205-416d-90b4-39fae067d20b"
  },
  {
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556",
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body: "Can someone go for the interview pls",
    createdAt: "2018-07-01 19:54:05",
    updatedAt: "2018-07-01 19:54:05",
    commentId: "1d6f5a6b-ac9b-4912-9e52-b84e1215e1b0"
  },
  {
    inviteId: "dfab9c6a-c362-4f65-812f-9224e5e0cd0c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "We don't have satisfactory reports about this. Probably GNLD. See here https://isthisarealjob.com/uzoma/is-this-real-34P249822138398",
    createdAt: "2018-07-01 20:58:14",
    updatedAt: "2018-07-01 20:58:14",
    commentId: "5b3ddb1d-551d-4c61-bf5d-64283d1a1631"
  },
  {
    inviteId: "defadf7b-10ad-4165-b5a5-819eb76ff75c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "Definitely not real. As you didn't even apply for the job.",
    createdAt: "2018-07-01 21:01:05",
    updatedAt: "2018-07-01 21:01:05",
    commentId: "1addb435-5c45-411a-9ab5-faba157fa5dd"
  },
  {
    inviteId: "b5f31625-229b-4d70-852a-257190a1bc1f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "See here https://isthisarealjob.com/mikeale/please-did-anyone-get-this-too-and-is-this-real-or-gnld-guys-81927507090Z723",
    createdAt: "2018-07-01 21:02:34",
    updatedAt: "2018-07-01 21:02:34",
    commentId: "5080a2af-fadf-4227-a69a-b517e02c0b6c"
  },
  {
    inviteId: "dfab9c6a-c362-4f65-812f-9224e5e0cd0c",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Actually, this is a GNLD type of thing:\r\n\r\nhttp://blog.isthisarealjob.com/most-popular-fake-companies-and-addresses-so-far-in-2018/",
    createdAt: "2018-07-01 21:07:04",
    updatedAt: "2018-07-01 21:07:04",
    commentId: "43fd862a-cff6-4608-8936-3f51ffede633"
  },
  {
    inviteId: "a00d4275-c249-4e10-b36b-fd9d90bc3cb8",
    userId: "b661220a-10b2-4fb1-98f3-0adbeb27ea11",
    body:
      "Hello, I got the invite but saw it late, had been sick and couldn't make it. Please did ur brother attend and how was it?",
    createdAt: "2018-07-02 04:17:05",
    updatedAt: "2018-07-02 04:17:05",
    commentId: "f7acebfb-79f3-4b49-a418-034feafc3ff1"
  },
  {
    inviteId: "a00d4275-c249-4e10-b36b-fd9d90bc3cb8",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "No, he didn't attend. Seems like a GNLD type of job",
    createdAt: "2018-07-02 11:02:10",
    updatedAt: "2018-07-02 11:02:10",
    commentId: "383ed138-6984-4f48-9007-91ec505d833b"
  },
  {
    inviteId: "7bb27470-58a7-4f4b-b529-000d1566009c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "This is GNLD beware.",
    createdAt: "2018-07-03 00:48:56",
    updatedAt: "2018-07-03 00:48:56",
    commentId: "6d5e8c04-c6ec-4796-aacf-34c3eef7e3c2"
  },
  {
    inviteId: "ebcd291a-bbf6-426f-819d-3f452ed0cb07",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Likely GNLD scheme. See here https://isthisarealjob.com/mikeale/can-anyone-help-me-confirm-if-this-is-a-scam-or-real.-i-just-got-this-email-now-119256284U38857",
    createdAt: "2018-07-04 14:32:02",
    updatedAt: "2018-07-04 14:32:02",
    commentId: "445654dc-5fd1-48e8-a519-ed12904be3ff"
  },
  {
    inviteId: "784f7645-eddc-44e3-8f26-368414557fb6",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "There are no reports about this company and to the best of my knowledge, they are probably scam. Someone received a similar message only that the firm name was Raycoast resources. Looks fishy to me.",
    createdAt: "2018-07-04 14:42:41",
    updatedAt: "2018-07-04 14:42:41",
    commentId: "01d94535-8822-4273-a949-0dd40deb0e8c"
  },
  {
    inviteId: "b5f31625-229b-4d70-852a-257190a1bc1f",
    userId: "c2deac72-99d3-4076-8b58-6eea799bd81c",
    body: "I also got the msg... did you go for the interview?",
    createdAt: "2018-07-06 21:54:08",
    updatedAt: "2018-07-06 21:54:08",
    commentId: "6cf59cbb-9b29-4476-b29c-dfc1145a7404"
  },
  {
    inviteId: "b5f31625-229b-4d70-852a-257190a1bc1f",
    userId: "c2deac72-99d3-4076-8b58-6eea799bd81c",
    body: "I also got the msg... did you go for the interview?",
    createdAt: "2018-07-06 21:54:23",
    updatedAt: "2018-07-06 21:54:23",
    commentId: "27515644-ec36-44c5-b46a-0d061df3bfc2"
  },
  {
    inviteId: "b5f31625-229b-4d70-852a-257190a1bc1f",
    userId: "c2deac72-99d3-4076-8b58-6eea799bd81c",
    body: "I also got the msg... did you go for the interview?",
    createdAt: "2018-07-06 21:54:32",
    updatedAt: "2018-07-06 21:54:32",
    commentId: "a1c42148-6c10-48fc-8ef6-d5eddd85c4cc"
  },
  {
    inviteId: "b5f31625-229b-4d70-852a-257190a1bc1f",
    userId: "c2deac72-99d3-4076-8b58-6eea799bd81c",
    body:
      "I checked the link and there's nothing really concrete from the link posted.",
    createdAt: "2018-07-06 21:59:51",
    updatedAt: "2018-07-06 21:59:51",
    commentId: "6e858f29-3a17-48a6-aeb6-6d3e38dbc340"
  },
  {
    inviteId: "b5f31625-229b-4d70-852a-257190a1bc1f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Hello Greg, it's probably not the white collar job you expected as you didn't even apply for the position.",
    createdAt: "2018-07-07 08:45:18",
    updatedAt: "2018-07-07 08:45:18",
    commentId: "2bf55f5f-05cd-420f-99a0-67e942a81470"
  },
  {
    inviteId: "f87ddb30-8f15-49f5-bd31-da15baf6146a",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The complete details of the address was not given and the exact location can't be pinpointed. A range of companies both legit and GNLD exist on that street though. Also, BECO doesn't ring a bell.",
    createdAt: "2018-07-08 11:15:07",
    updatedAt: "2018-07-08 11:15:07",
    commentId: "b7c8fb09-8207-42d7-9071-7bf3a8057a66"
  },
  {
    inviteId: "d50198d9-a264-4f2a-8611-3a2d110fa680",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The organisation is a human resource and a consulting firm. They have a working LinkedIn profile and are registered to the address.",
    createdAt: "2018-07-09 11:06:19",
    updatedAt: "2018-07-09 11:06:19",
    commentId: "31b21d66-a9fe-4a46-9387-cc35af6513f6"
  },
  {
    inviteId: "70b5f209-cad0-468e-8a2c-d2c9274d27cb",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "From research they are into marketing. There are reports that they are GNLD too.",
    createdAt: "2018-07-09 11:10:40",
    updatedAt: "2018-07-09 11:10:40",
    commentId: "f218a665-1a93-4bda-81b2-a454e5c66796"
  },
  {
    inviteId: "d50198d9-a264-4f2a-8611-3a2d110fa680",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Thank you for the info.",
    createdAt: "2018-07-09 15:25:02",
    updatedAt: "2018-07-09 15:25:02",
    commentId: "635317ee-37bc-41b5-a5c7-5fd2fb3ca161"
  },
  {
    inviteId: "d50198d9-a264-4f2a-8611-3a2d110fa680",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Please what is there Liinkin page name?",
    createdAt: "2018-07-09 15:28:47",
    updatedAt: "2018-07-09 15:28:47",
    commentId: "6d487058-3ded-4254-af26-ba4be98aa065"
  },
  {
    inviteId: "109bbce9-092d-423b-a9da-2c3ff136d0ea",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The name of the company was not even specified. Lekki leisure lake is a popular tourist center in Lagos state. And we can only assume this is real if you indeed applied to work with the management of this tourist centre. Otherwise it is probably not worth it.",
    createdAt: "2018-07-12 06:56:23",
    updatedAt: "2018-07-12 06:56:23",
    commentId: "33c99cf2-5ae1-4792-b5fc-2f462ab42582"
  },
  {
    inviteId: "8b082849-8577-4609-bbf6-4c49f17878db",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "This is a GNLD invite. Beware.",
    createdAt: "2018-07-12 06:57:00",
    updatedAt: "2018-07-12 06:57:00",
    commentId: "79e8346d-0c0a-4fd9-a1f9-2f0d97126379"
  },
  {
    inviteId: "d314d3da-705b-41d0-bacb-671f2a22ba0c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "I  strongly believe this is not legit. This address is in use by GMIS, a popular GNLD firm.",
    createdAt: "2018-07-14 12:37:36",
    updatedAt: "2018-07-14 12:37:36",
    commentId: "4fbb2a18-827e-4dd2-835a-99ad6ba6eeda"
  },
  {
    inviteId: "877501b1-30d5-4132-b612-e01e57af8c08",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "No derogatory reports were found as regards them. Although they have limited online presence, you should try finding more info on their website as it involves traveling abroad. Here: http://petroguinep.com",
    createdAt: "2018-07-14 13:03:33",
    updatedAt: "2018-07-14 13:03:33",
    commentId: "575ad90c-4c58-43ae-83ed-72c0e20a175f"
  },
  {
    inviteId: "4ccf9d90-9b82-4e82-9d2a-da9eba5b465e",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "There's no information on MTN's website about any MFA project, the address for the interview states 'samsung stores'. I am skeptical about this.",
    createdAt: "2018-07-14 13:07:30",
    updatedAt: "2018-07-14 13:07:30",
    commentId: "7501574b-874b-4bba-8584-6628949c208b"
  },
  {
    inviteId: "e43b23f6-d2d2-448b-81c7-8caf0e2c1171",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "What's the name of the company here? No adequate information was provided.",
    createdAt: "2018-07-14 13:08:42",
    updatedAt: "2018-07-14 13:08:42",
    commentId: "a8c5b42b-c33b-48ea-b552-951175b4f277"
  },
  {
    inviteId: "af0757fd-a83f-4071-ba43-d8f5d772040b",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "GNLD . See here https://isthisarealjob.com/mikeale/can-anyone-help-me-confirm-if-this-is-a-scam-or-real.-i-just-got-this-email-now-119256284U38857",
    createdAt: "2018-07-16 10:30:19",
    updatedAt: "2018-07-16 10:30:19",
    commentId: "b92ebd50-2f9a-4ca0-a33a-9bfef51ac9d2"
  },
  {
    inviteId: "2374e155-1737-499d-8f2f-bfb3b6702a6c",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They claim to be a Human resource consultant firm. Not much information was found on them. No reports of scam though. Stay safe.",
    createdAt: "2018-07-16 10:33:01",
    updatedAt: "2018-07-16 10:33:01",
    commentId: "82629239-5d97-4fca-a074-47112c4f1b0d"
  },
  {
    inviteId: "8b082849-8577-4609-bbf6-4c49f17878db",
    userId: "254bc4a6-8431-4e74-ac0f-bf2d05925d79",
    body: "So it's not legit right?",
    createdAt: "2018-07-17 09:10:43",
    updatedAt: "2018-07-17 09:10:43",
    commentId: "49390de1-f15d-44a6-b9f0-3b4aef532908"
  },
  {
    inviteId: "8b082849-8577-4609-bbf6-4c49f17878db",
    userId: "254bc4a6-8431-4e74-ac0f-bf2d05925d79",
    body: "So its  not legit right?",
    createdAt: "2018-07-17 09:11:08",
    updatedAt: "2018-07-17 09:11:08",
    commentId: "1d3f76bf-19ae-44ac-b51f-ca11033b8a0a"
  },
  {
    inviteId: "8b082849-8577-4609-bbf6-4c49f17878db",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Its legit GNLD, if you are interested in GNLD, then it's good. Otherwise, don't waste your time.",
    createdAt: "2018-07-17 15:04:53",
    updatedAt: "2018-07-17 15:04:53",
    commentId: "604a1d6a-cced-4c2a-85e8-bac3473891fa"
  },
  {
    inviteId: "163d9009-c290-452f-82fb-242858af4571",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Sounds like a typical GNLD post, and the error has been flagged for GNLD type activities. I wouldn't bother if i were you.</p>",
    createdAt: "2018-07-22 15:04:14",
    updatedAt: "2018-07-22 15:04:14",
    commentId: "7d571e2b-e094-4871-891e-3c8466f147c5"
  },
  {
    inviteId: "0df54367-0050-46e0-b32c-7a5de48aa169",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Seeing that the same company has more than one address, no positive web presence, no registration details on CAC website, and the interview post is very vague. I wouldn't waste time if i were you.</p>",
    createdAt: "2018-07-22 15:05:46",
    updatedAt: "2018-07-22 15:05:46",
    commentId: "84cf77e8-0f52-4d18-bd07-0671bb5a7ff7"
  },
  {
    inviteId: "5c30edd2-c6cc-4b90-9db9-a3b50f86a5cf",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Definitely scam / GNLD type thing. for one, the address is a sure and verified flag for scam/gnld type of thing, the email is a personal / free email address and company name is not specified.</p>",
    createdAt: "2018-07-22 15:06:59",
    updatedAt: "2018-07-22 15:06:59",
    commentId: "35a686ea-7b37-4787-bd4c-c36c943e4c69"
  },
  {
    inviteId: "dea20820-99c2-4532-ad14-6e1ade66fdae",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body: "<p>Sounds like a typical GNLD request.</p>",
    createdAt: "2018-07-22 15:13:57",
    updatedAt: "2018-07-22 15:13:57",
    commentId: "d1a78dc0-23cf-479e-9fbc-808e504ead8a"
  },
  {
    inviteId: "85338eab-1db6-4550-bb29-95425f1a963c",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body: "<p>This is a real company with online presence.</p>",
    createdAt: "2018-07-22 15:15:13",
    updatedAt: "2018-07-22 15:15:13",
    commentId: "2399b122-da82-48e7-b910-eea561200269"
  },
  {
    inviteId: "6301c14a-741b-46a4-85e9-5b2a10621fe7",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "<h5>From preliminary search, kennedia consulting is a real company</h5>",
    createdAt: "2018-07-22 15:16:49",
    updatedAt: "2018-07-22 15:16:49",
    commentId: "c52254b1-f819-40c2-b0af-43f5f2719b89"
  },
  {
    inviteId: "3f0d2d47-bfb0-4c9e-8ffa-e8f30e072b12",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      '<p><span style="color: rgb(0, 0, 0); background-color: rgb(246, 246, 236);">Phillips Outsourcing is a real company, though the address on their website does not match the address on the invite, which means there\'s actually no way to verify that this invite came from the company</span></p>',
    createdAt: "2018-07-22 15:18:37",
    updatedAt: "2018-07-22 15:18:37",
    commentId: "be79c6c5-2de2-4bc9-b7ca-69dca34eb6b8"
  },
  {
    inviteId: "0df54367-0050-46e0-b32c-7a5de48aa169",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "I got another info very late about them on another platform that they are genuine so i took the risk to honor the invitation. I was surprise to find out that they are real and into outsourcing. However there company is situated at the specified address above.",
    createdAt: "2018-07-23 15:01:07",
    updatedAt: "2018-07-23 15:01:07",
    commentId: "1a9b2ba2-94c9-4c86-8109-677e1c74858c"
  },
  {
    inviteId: "163d9009-c290-452f-82fb-242858af4571",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Great mind, there presence was not felt online and i think they are so backward in terms of technology because i was unable to even ascertain their status after checking through google.  I got another info very late about them on another platform that they are genuine so i took the risk to honor the invitation. I was surprise to find out that they are real and into outsourcing. However there company is situated at the specified address above.",
    createdAt: "2018-07-23 15:07:35",
    updatedAt: "2018-07-23 15:07:35",
    commentId: "6d5f4441-fc5e-49c9-9302-584f8f2420ab"
  },
  {
    inviteId: "163d9009-c290-452f-82fb-242858af4571",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>Oh, wow, thank you for the feedback. </p>",
    createdAt: "2018-07-23 15:24:10",
    updatedAt: "2018-07-23 15:24:10",
    commentId: "610d8dcf-0e8a-43a2-8f9a-cc762e60af64"
  },
  {
    inviteId: "5f36a35f-62ef-4a4c-8529-eedb5015fafc",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>This address has been flagged with GNLD type things, and the name GYNYTE also. </p>",
    createdAt: "2018-07-23 15:26:16",
    updatedAt: "2018-07-23 15:26:16",
    commentId: "df218eb9-9d2d-4041-b1b3-b83b90778e12"
  },
  {
    inviteId: "163d9009-c290-452f-82fb-242858af4571",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Thank you for being there as well and you have been very supportive in providing information.\r\nKeep the good work going?",
    createdAt: "2018-07-23 16:45:09",
    updatedAt: "2018-07-23 16:45:09",
    commentId: "e5a92aad-1904-4c00-afce-cdd9e4a0d869"
  },
  {
    inviteId: "163d9009-c290-452f-82fb-242858af4571",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>:) </p>",
    createdAt: "2018-07-23 16:57:25",
    updatedAt: "2018-07-23 16:57:25",
    commentId: "dbb1ed2c-f687-4d74-afd6-1a2ac1b653a4"
  },
  {
    inviteId: "040c65d9-40d7-4d8e-a08b-584d7d607280",
    userId: "bf885f7c-836c-4206-b1ff-337280e41ff6",
    body:
      "<p>Scam! Not legit! You won't be able to cash out. </p><p>Beware!</p>",
    createdAt: "2018-07-23 23:28:06",
    updatedAt: "2018-07-23 23:28:06",
    commentId: "dd53a9d8-a944-4789-ab74-8f3bb869c0b3"
  },
  {
    inviteId: "49c674e4-1f57-43ce-849a-906cd055511a",
    userId: "bf885f7c-836c-4206-b1ff-337280e41ff6",
    body:
      "<p>This doesn't seem to be legit! Does recruitment based on having CV on their database? Beware!</p><p>Scam Alert!</p>",
    createdAt: "2018-07-23 23:34:34",
    updatedAt: "2018-07-23 23:34:34",
    commentId: "befe308d-f4b4-4f50-a9d4-a4da22972bc0"
  },
  {
    inviteId: "b571cfcc-d0d9-42d2-a59e-b05ea99e8145",
    userId: "bf885f7c-836c-4206-b1ff-337280e41ff6",
    body: "<p>Scam! Fact from valid source</p>",
    createdAt: "2018-07-24 19:37:53",
    updatedAt: "2018-07-24 19:37:53",
    commentId: "8bd52ec1-da6d-4e5e-833c-cfb9f2d66024"
  },
  {
    inviteId: "b571cfcc-d0d9-42d2-a59e-b05ea99e8145",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Thanks for the response, but you need to reference the valid source.",
    createdAt: "2018-07-24 20:05:59",
    updatedAt: "2018-07-24 20:05:59",
    commentId: "d5bd7096-aa09-430e-bee1-8c0fd7170db2"
  },
  {
    inviteId: "91a94895-8ce0-43b7-a9c5-80da7baef344",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Already in the database, its GNLD / False. ALso, you can ready about them in the blog... blog.isthisarealjob.com </p>",
    createdAt: "2018-07-24 20:10:02",
    updatedAt: "2018-07-24 20:10:02",
    commentId: "ebf6ebda-a10b-4b07-a652-8922208c051a"
  },
  {
    inviteId: "b571cfcc-d0d9-42d2-a59e-b05ea99e8145",
    userId: "bf885f7c-836c-4206-b1ff-337280e41ff6",
    body: "The Website couldn't be found on CAC Portal.\r\nThanks @mouth",
    createdAt: "2018-07-24 20:58:27",
    updatedAt: "2018-07-24 20:58:27",
    commentId: "12a9be61-1649-4f3d-97bd-1d98b8da611f"
  },
  {
    inviteId: "426455d5-8b41-4376-9f82-e1924d9ce758",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>The address has been flagged for GNLD </p>",
    createdAt: "2018-07-27 07:04:28",
    updatedAt: "2018-07-27 07:04:28",
    commentId: "a1e12158-0861-496f-991c-d583b5438c90"
  },
  {
    inviteId: "426455d5-8b41-4376-9f82-e1924d9ce758",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>It has been tagged to be GNLD. Please lunch the link below for more details:</p><p><br></p>",
    createdAt: "2018-07-27 08:24:10",
    updatedAt: "2018-07-27 08:24:10",
    commentId: "b738ee11-756d-4985-9f1e-5847935bfba7"
  },
  {
    inviteId: "426455d5-8b41-4376-9f82-e1924d9ce758",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>http://blog.isthisarealjob.com/most-popular-fake-companies-and-addresses-so-far-in-2018/</p>",
    createdAt: "2018-07-27 08:25:03",
    updatedAt: "2018-07-27 08:25:03",
    commentId: "29862c42-ec6d-4c7f-9869-fef9da3ca9e2"
  },
  {
    inviteId: "b32305cb-0142-4df6-a38b-6c50e99be4a7",
    userId: "bf885f7c-836c-4206-b1ff-337280e41ff6",
    body: "<p>Legitimate!</p>",
    createdAt: "2018-07-28 18:06:47",
    updatedAt: "2018-07-28 18:06:47",
    commentId: "719b49a4-9632-4771-a3b8-eecec1230692"
  },
  {
    inviteId: "b32305cb-0142-4df6-a38b-6c50e99be4a7",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "Please source???",
    createdAt: "2018-07-28 21:48:19",
    updatedAt: "2018-07-28 21:48:19",
    commentId: "bec5f652-ca5c-469f-b401-84fbc5fa6283"
  },
  {
    inviteId: "b32305cb-0142-4df6-a38b-6c50e99be4a7",
    userId: "bf885f7c-836c-4206-b1ff-337280e41ff6",
    body:
      "<p>They have online presence, mailto:info@datamaxfiles.com,</p><p>Web Address</p>",
    createdAt: "2018-07-30 13:33:45",
    updatedAt: "2018-07-30 13:33:45",
    commentId: "68dd6c90-1a94-4fae-aab7-001654283261"
  },
  {
    inviteId: "b32305cb-0142-4df6-a38b-6c50e99be4a7",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Online presence is not enough to prove they are legitimate though, you have to provide more prove...",
    createdAt: "2018-07-30 14:17:44",
    updatedAt: "2018-07-30 14:17:44",
    commentId: "3c1f4a48-c491-46f9-b34b-430da4eb5b51"
  },
  {
    inviteId: "abbec1cc-343f-4cfd-b4a3-41349838c11d",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: '<p>Definitely GNLD, search "PEARL" on the platform</p>',
    createdAt: "2018-07-31 06:14:44",
    updatedAt: "2018-07-31 06:14:44",
    commentId: "b52d3f21-34ca-4f78-8711-6838d263a312"
  },
  {
    inviteId: "b32305cb-0142-4df6-a38b-6c50e99be4a7",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>Thanks great mind, the interview was honor and they are real!</p>",
    createdAt: "2018-07-31 09:38:05",
    updatedAt: "2018-07-31 09:38:05",
    commentId: "4d12369e-5a18-432f-8a0e-65330f36d4ef"
  },
  {
    inviteId: "b32305cb-0142-4df6-a38b-6c50e99be4a7",
    userId: "2057511c-9379-4009-89cc-80f54630406b",
    body: "<p>cool</p>",
    createdAt: "2018-08-03 10:11:03",
    updatedAt: "2018-08-03 10:11:03",
    commentId: "9751107d-1fe6-4de7-aefc-21b29be3c162"
  },
  {
    inviteId: "6c6f2c5b-7507-4345-b537-3bf930a18fa5",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "<p>For a firm that claims to offer ICT services, thy should at least have an online presence. This is not the case, no website or relevant information was found as regards to the stated firm. The address has been used by a opular GNLD firm too. Not legit.</p>",
    createdAt: "2018-08-06 18:16:13",
    updatedAt: "2018-08-06 18:16:13",
    commentId: "275df6c1-3bae-495d-aa1c-3a384915f42a"
  },
  {
    inviteId: "458c4805-5e4d-4dfd-bc20-eace86a5dd6f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "<p>This has GNLD written all over it. Don't waste your time.</p>",
    createdAt: "2018-08-06 18:18:46",
    updatedAt: "2018-08-06 18:18:46",
    commentId: "9e6da3f0-51f5-40b1-9baa-b61b25713ecc"
  },
  {
    inviteId: "a2a6cd9b-d236-4dbe-a12f-7ecbe39b2a5f",
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "<p>This same address has been used by so many GNLD firms, don't bother wasting your time. This is not your dream job. </p>",
    createdAt: "2018-08-06 18:22:42",
    updatedAt: "2018-08-06 18:22:42",
    commentId: "5e7edb78-a83f-4d57-ba5b-28a96c5d6d74"
  },
  {
    inviteId: "a2a6cd9b-d236-4dbe-a12f-7ecbe39b2a5f",
    userId: "91ea96fa-93df-4c53-976f-116e11a06936",
    body: "Thanks so much!",
    createdAt: "2018-08-06 20:39:49",
    updatedAt: "2018-08-06 20:39:49",
    commentId: "dbb0a7d6-b403-43f2-9749-fbbb32bb0377"
  },
  {
    inviteId: "c30c226e-0960-43d5-aa3e-112b73d85b79",
    userId: "a8aa4584-d2de-4fa6-b378-9b6958ba6cb1",
    body: "<p>You need to be a bit more specific with your request. </p>",
    createdAt: "2018-08-07 05:17:08",
    updatedAt: "2018-08-07 05:17:08",
    commentId: "f9b662d5-8797-45e9-8e96-835f091e7757"
  },
  {
    inviteId: "9dd99183-a774-48b7-8fed-10f4eb3bc021",
    userId: "a8aa4584-d2de-4fa6-b378-9b6958ba6cb1",
    body:
      "<p>The company name is not found in the cac database, if you can be a bit more specific, then we can help you do more searches.</p>",
    createdAt: "2018-08-07 05:18:53",
    updatedAt: "2018-08-07 05:18:53",
    commentId: "f2a54b0f-f40e-4cc2-b203-869b33bfd3fc"
  },
  {
    inviteId: "111f78cd-49b1-45b4-b552-4758f8982dde",
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "<p>The address has been associated with several GNLD outfits. DOn't waste your time.</p>",
    createdAt: "2018-08-07 22:29:38",
    updatedAt: "2018-08-07 22:29:38",
    commentId: "61bbde6c-6492-4329-b9fd-f1e4b3eb6253"
  },
  {
    inviteId: "111f78cd-49b1-45b4-b552-4758f8982dde",
    userId: "9805215f-5d96-4101-b084-bbfcc2628b10",
    body: "Pls I got same message as this",
    createdAt: "2018-08-08 11:38:12",
    updatedAt: "2018-08-08 11:38:12",
    commentId: "d3dacbf4-5528-42ff-9374-3304b273e334"
  },
  {
    inviteId: "111f78cd-49b1-45b4-b552-4758f8982dde",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>Thi i most likely GNLD, don't waste your time</p>",
    createdAt: "2018-08-08 16:42:25",
    updatedAt: "2018-08-08 16:42:25",
    commentId: "0ac92328-e5f0-40f6-85f9-a2382b041f70"
  },
  {
    inviteId: "458c4805-5e4d-4dfd-bc20-eace86a5dd6f",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>Run for your life GNLD. Copy the address to the search bar and search.</p>",
    createdAt: "2018-08-09 08:07:20",
    updatedAt: "2018-08-09 08:07:20",
    commentId: "a2c9f1f0-15f3-4da5-a60d-78fec9646797"
  },
  {
    inviteId: "6c6f2c5b-7507-4345-b537-3bf930a18fa5",
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>They keep changing the company name but tagged with same addresses. Beware and dodge that bullet bro.</p><p><br></p><p><br></p>",
    createdAt: "2018-08-09 08:09:40",
    updatedAt: "2018-08-09 08:09:40",
    commentId: "25e8d76a-0694-46fe-aeea-9892d7302a52"
  },
  {
    inviteId: "85da8fbb-c877-4519-b6e7-6b632efa84df",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>It appears they have up'ed their game, they now have a website that looks nice. But be careful as the same address has been used for scam / GNLD type things. If you do go for the interview, please come back here to tell us about your experience</p><p><br></p>",
    createdAt: "2018-08-10 17:05:26",
    updatedAt: "2018-08-10 17:05:26",
    commentId: "80eb1ac9-a925-42ea-8d0c-4546c917e3e3"
  },
  {
    inviteId: "5a5a158a-24c9-40d1-a31b-0fd208521989",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>this same message was posted by someone else, search the platform for RS, also, they said "this message is for Admission" this definitely suggests that its a seminar.</p>',
    createdAt: "2018-08-12 09:02:32",
    updatedAt: "2018-08-12 09:02:32",
    commentId: "08d987d6-09c6-4a32-b9e7-e11a3a642562"
  },
  {
    inviteId: "4ec494c3-749a-42ad-95b8-e968eb8e8f14",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>MLM / GNLD : Search the platform for MHS or M.H.S</p>",
    createdAt: "2018-08-19 06:06:05",
    updatedAt: "2018-08-19 06:06:05",
    commentId: "e55198f3-1205-4949-a31c-ced11a83b1f6"
  },
  {
    inviteId: "98a3fb40-ff77-4f7e-bdbb-89c56585ce3b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>It looks like you didn't post anything. You should try to post it again.</p>",
    createdAt: "2018-08-26 01:58:58",
    updatedAt: "2018-08-26 01:58:58",
    commentId: "f52da3bc-0b98-4e19-bf69-370b9fbbf27a"
  },
  {
    inviteId: "dc3e5529-e520-42a4-b9eb-c2d05221ab7d",
    userId: "e65c941e-8afc-4c0c-9e94-4a663c997985",
    body:
      "<p>I had to take time to register on this platform just because of this post. You just saved me from being duped!! I have been contacted by this same agency and they asked me to pay 6500. Thank God I decided to research the agency name. I asked for an office address and they gave me an address in lagos.......mehn, thank you so much for posting this!</p>",
    createdAt: "2018-08-30 11:11:11",
    updatedAt: "2018-08-30 11:11:11",
    commentId: "91dda9aa-fdd6-4022-b545-6672ab102f69"
  },
  {
    inviteId: "c8dd3f47-71d3-4a81-8279-18f0ee4a30c6",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>I can't see the image you posted... </p>",
    createdAt: "2018-09-11 10:50:21",
    updatedAt: "2018-09-11 10:50:21",
    commentId: "e8f61d10-346f-4f68-b909-fff7dd1769d0"
  },
  {
    inviteId: "365cb2c7-b187-4517-a943-8fcb08f7a5a0",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>That address is known to be used by a lot of GNLD type things.</p>",
    createdAt: "2018-09-15 16:03:13",
    updatedAt: "2018-09-15 16:03:13",
    commentId: "d4195380-0525-41b9-ac29-ef53be35e66d"
  },
  {
    inviteId: "ebcd291a-bbf6-426f-819d-3f452ed0cb07",
    userId: "c9fd88d9-113a-4b7d-b772-4217c2f42218",
    body:
      "<p>Please, is it genuine? I have an interview with them on Monday. </p>",
    createdAt: "2018-09-19 08:06:07",
    updatedAt: "2018-09-19 08:06:07",
    commentId: "65894dab-884c-44a6-b077-789874656a3e"
  },
  {
    inviteId: "5bd2f037-c3cd-4f69-9a4a-8d153e0a3ce9",
    userId: "a8aa4584-d2de-4fa6-b378-9b6958ba6cb1",
    body: "<p>M.H.S is a GNLD type of job.</p>",
    createdAt: "2018-09-21 14:52:57",
    updatedAt: "2018-09-21 14:52:57",
    commentId: "edb90270-c854-4848-9552-99d133e37b76"
  },
  {
    inviteId: "1092d202-4a08-489d-b2ff-8111d9cdbc57",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>BS Resources already exist in the database, you can just search for BS you'll see  a list of previous uploads and comments.</p>",
    createdAt: "2018-09-26 17:50:02",
    updatedAt: "2018-09-26 17:50:02",
    commentId: "a666a9f5-6e97-46fb-9747-55af7a51d469"
  },
  {
    inviteId: "6345de67-c8ef-42dc-a126-b82336e0045b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>From what i see, They are a registered company on CAC database, they however do not have a website. And the pattern of their invite is quite similar to other GNLD type of invite.</p><p><br></p><p>Right now, i am unable to conclude if they are real or scam.</p><p><br></p><p>If you do go for the interview, please give feedback.</p>",
    createdAt: "2018-09-29 09:39:53",
    updatedAt: "2018-09-29 09:39:53",
    commentId: "2ef936f0-007b-4a35-a059-a28493371486"
  },
  {
    inviteId: "6345de67-c8ef-42dc-a126-b82336e0045b",
    userId: "25657948-da38-4be5-96cb-ae5d64525da7",
    body:
      "I didnt go for the interview as i used other platform to check and suspected they are those GNLD guys.\r\nThanks.",
    createdAt: "2018-10-15 15:10:46",
    updatedAt: "2018-10-15 15:10:46",
    commentId: "b11c4913-bd50-40c6-842b-df041c980ff0"
  },
  {
    inviteId: "82c5b65c-13d3-4a7b-b18b-47bf88ec77b6",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>Awesome! Thanks for the info. We have the address in the database already and a more explicit piece is written here:</p><p><br></p><p><a href="http://blog.isthisarealjob.com/fake-recruitment-agencies-nigeria-2018/" target="_blank">http://blog.isthisarealjob.com/fake-recruitment-agencies-nigeria-2018/</a></p><p><br></p><p><a href="http://blog.isthisarealjob.com/list-of-fake-companies-nigeria/" target="_blank">http://blog.isthisarealjob.com/list-of-fake-companies-nigeria/</a></p><p><br></p><p><br></p>',
    createdAt: "2018-10-23 13:07:51",
    updatedAt: "2018-10-23 13:07:51",
    commentId: "2bcd7da7-52a6-40e1-897f-e7155da9e844"
  },
  {
    inviteId: "82c5b65c-13d3-4a7b-b18b-47bf88ec77b6",
    userId: "25657948-da38-4be5-96cb-ae5d64525da7",
    body:
      "I wish i had checked here before going for the stupid interview. Stupid people. God will judge them.",
    createdAt: "2018-10-23 15:54:33",
    updatedAt: "2018-10-23 15:54:33",
    commentId: "cef15c5d-c9f1-4e4f-88ec-ccc1de63657e"
  },
  {
    inviteId: "82c5b65c-13d3-4a7b-b18b-47bf88ec77b6",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Sorry to hear that. Please always do thorough research on companies before going there, and also help spread the word so others won't fall for the same tricks.</p>",
    createdAt: "2018-10-23 17:30:09",
    updatedAt: "2018-10-23 17:30:09",
    commentId: "d409663a-d98e-42c1-83d0-bddbd5c2d3dc"
  },
  {
    inviteId: "772fac92-3a02-402e-81f2-0b8ff901720c",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>I am not familiar with the name, however, preliminary search shows they are most likely GNLD type of company. If you do go for the interview, please keep us posted.</p><p><br></p><p> </p>",
    createdAt: "2018-10-24 11:01:09",
    updatedAt: "2018-10-24 11:01:09",
    commentId: "017706cd-75df-4654-a84e-51a21272fba8"
  },
  {
    inviteId: "d3316214-b530-4825-b9b4-80198f98472a",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>This is a confirmed GNLD type of company. Don\'t waste your time if you are not interested in MLM gigs. </p><p><br></p><p>You can check out:</p><p><br></p><p><a href="blog.isthisarealjob.com" target="_blank">blog.isthisarealjob.com</a></p><p><br></p><p>Or just search for DPP on this platform.</p>',
    createdAt: "2018-10-24 11:04:20",
    updatedAt: "2018-10-24 11:04:20",
    commentId: "c118303f-a08c-45d1-bdfb-f78096939a33"
  },
  {
    inviteId: "c5bd84fe-0d83-440f-9310-e66ccd2de2af",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Endeavor to type in the text instead of images, it's hard to see the images and images does not help others to find your post.</p><p><br></p><p>The address: University Press is a confirmed and well known place for GNLD type of coys, if you are not interested in Multi Level Marketing, i'll advice you don't bother. It's usually a waste of time.</p>",
    createdAt: "2018-10-25 11:14:28",
    updatedAt: "2018-10-25 11:14:28",
    commentId: "0bee925b-3039-4d5f-ac47-be2c5926279b"
  },
  {
    inviteId: "765fa509-c35a-4045-9f7f-2789eda0ff33",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>The address is well known for GNLD type things, i'll recommend you don't waste your time.</p><p><br></p><p><br></p>",
    createdAt: "2018-11-06 13:00:04",
    updatedAt: "2018-11-06 13:00:04",
    commentId: "61a8155e-78e1-47c6-a5d2-b02e1751539c"
  },
  {
    inviteId: "bfbe76ea-48ce-4702-b13a-3aed191e061f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>The address is well known for GNLD type of companies, i'll reocmmend you don't waste your time.</p>",
    createdAt: "2018-11-06 13:01:02",
    updatedAt: "2018-11-06 13:01:02",
    commentId: "68386b92-7191-40b7-937f-5790aa45cc31"
  },
  {
    inviteId: "765fa509-c35a-4045-9f7f-2789eda0ff33",
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body: "Thanks",
    createdAt: "2018-11-06 13:13:41",
    updatedAt: "2018-11-06 13:13:41",
    commentId: "15eae02f-bfb5-4dcd-a814-c8b7a19f65b8"
  },
  {
    inviteId: "dc357e4c-9aef-4e20-8634-8410e6ed59f4",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Hi,</p><p><br></p><p>The address is known for GNLD type of things, you should note the following:</p><p><br></p><ol><li>Company name is not specified</li><li>No company would ask you to come with Birth Certificate/Declaration of Age on the first interview</li><li>No serious company adds personal phone number to a job invite</li></ol><p>In summary, the job is most likely GNLD type.</p><p><br></p><p>My advice, don't waste your time... but if you choose to go, keep us updated on how it goes.</p>",
    createdAt: "2018-11-06 13:29:00",
    updatedAt: "2018-11-06 13:29:00",
    commentId: "13152556-f886-4ac8-bd49-92fd4f1f7739"
  },
  {
    inviteId: "765fa509-c35a-4045-9f7f-2789eda0ff33",
    userId: "9e842f82-3cc8-43ef-b786-99eb7dfb5c3e",
    body:
      "<p>Hi Tosin,  I got exactly same message.  My instinct says its scam. No company name,  no information about what they do? How do you even ace such interview. I am turning down the invitation. I guess you do the same. </p><p><br></p><p>Dear applicant</p><p>&nbsp;&nbsp;&nbsp;</p><p><br></p><p><br></p><p>Congratulations.You have been shortlisted for an oral interview in one of our consulting firm as a customer service officer.Successful candidates are always better than unsuccessful ones.</p><p><br></p><p>To aid entry into the venue,printout this email</p><p>Your specific entry details are as below</p><p><br></p><p><br></p><p>Venue:End of Adeniyi jones,last floor University Press Building,Acme Ikeja.</p><p>10:00AM</p><p>9/11/2018</p><p><br></p><p>Note:Dress corporately and be sure to come early as lateness will not be welcomed,come with your Updated Cv,a passport photograph</p><p><br></p><p>Regards</p><p>Career Tips</p>",
    createdAt: "2018-11-07 03:11:12",
    updatedAt: "2018-11-07 03:11:12",
    commentId: "73ff4de6-78e0-4d0f-af7a-4f0d63e88045"
  },
  {
    inviteId: "dc357e4c-9aef-4e20-8634-8410e6ed59f4",
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body: "Thanks sir",
    createdAt: "2018-11-07 16:29:42",
    updatedAt: "2018-11-07 16:29:42",
    commentId: "e29af7cd-92d3-44af-9499-56a288697f34"
  },
  {
    inviteId: "89b6bbcc-8161-4071-bcd6-4a1eb8188550",
    userId: "a8aa4584-d2de-4fa6-b378-9b6958ba6cb1",
    body:
      "<p>Hi Tosin,</p><p><br></p><p>we usually encourage users to post text instead of images.. with text others can search and find your post, but with image, that's not possible which totally defeats the purpose of the platform.</p><p><br></p><p>Can you repost the text as comment so that we can help you with the verification?</p><p><br></p><p>Thanks.</p>",
    createdAt: "2018-11-11 21:56:39",
    updatedAt: "2018-11-11 21:56:39",
    commentId: "2731a128-5c88-48d9-9a66-4d214508bb1d"
  },
  {
    inviteId: "89b6bbcc-8161-4071-bcd6-4a1eb8188550",
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body: "Okay sir",
    createdAt: "2018-11-12 08:45:14",
    updatedAt: "2018-11-12 08:45:14",
    commentId: "e287cb64-7741-4b69-80ac-f2dac336a534"
  },
  {
    inviteId: "1dcc7841-090a-4eb9-922c-df2dace7018f",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>From preliminary search, this company is not registered with CAC. It's hard to decide if they are real or not as they can be a subset of another company. </p><p><br></p><p>If you provide more information such as their address, we can help you make more research.</p>",
    createdAt: "2018-11-15 11:16:28",
    updatedAt: "2018-11-15 11:16:28",
    commentId: "df0f0a9b-57bc-48e7-b05d-15b01ebcec33"
  },
  {
    inviteId: "1dcc7841-090a-4eb9-922c-df2dace7018f",
    userId: "38bf2fd9-eba7-4f51-99c7-3ccca581d5ce",
    body:
      "Thanks for the respond , this is the address with the message \r\n\r\nNexfrot group schedules you for an INTERVIEW on Friday 16/11/2018 by 9am at 6 Remilekun Str, Opp Agape Sec Sch off Falolu Road by Akerele Road, Surulere, Lagos.",
    createdAt: "2018-11-15 12:03:29",
    updatedAt: "2018-11-15 12:03:29",
    commentId: "7088639c-ef7e-41d6-9a3b-7d307a5fb879"
  },
  {
    inviteId: "1dcc7841-090a-4eb9-922c-df2dace7018f",
    userId: "38bf2fd9-eba7-4f51-99c7-3ccca581d5ce",
    body:
      "Thanks for the reply, this is the address and mrssage sent \r\n\r\nNexfrot group schedules you for an INTERVIEW on Friday 16/11/2018 by 9am at 6 Remilekun Str, Opp Agape Sec Sch off Falolu Road by Akerele Road, Surulere, Lagos.",
    createdAt: "2018-11-15 12:09:29",
    updatedAt: "2018-11-15 12:09:29",
    commentId: "ee257f3d-3341-4cb2-b5d5-f9a315b9eef2"
  },
  {
    inviteId: "1dcc7841-090a-4eb9-922c-df2dace7018f",
    userId: "38bf2fd9-eba7-4f51-99c7-3ccca581d5ce",
    body:
      "Thanks for the reply, this is the address and mrssage sent \r\n\r\nNexfrot group schedules you for an INTERVIEW on Friday 16/11/2018 by 9am at 6 Remilekun Str, Opp Agape Sec Sch off Falolu Road by Akerele Road, Surulere, Lagos.",
    createdAt: "2018-11-15 12:10:23",
    updatedAt: "2018-11-15 12:10:23",
    commentId: "2cdb7af7-a8e3-4a6f-b9b2-b3c09db7135c"
  },
  {
    inviteId: "66c141c2-80f2-4488-8e95-8a8062e5984b",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>This same address has been used for several companies with different names, you can click <a href="https://isthisarealjob.com/mikeale/i-want-to-know-if-this-matrixglover-is-real-or-fake-02962V666930074" target="_blank">here</a> or here to see some of those companies and people\'s experience.</p><p><br></p><p>While this is most likely a scam / GNLD type of invite, it is also possible that that venue is a rented location for interview... But from experience and research, it is most like scam / GNLD.</p><p><br></p><p>If you do go for the invite, please update us.</p>',
    createdAt: "2018-11-15 17:56:25",
    updatedAt: "2018-11-15 17:56:25",
    commentId: "6705ae73-74f6-4f53-9405-5a4bb11761cb"
  },
  {
    inviteId: "312b3552-303b-42fb-a487-d55c5f34e3f8",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Richlife is a real company, i know this because i have had personal dealings with them and the address matches the address i have in my record. </p><p><br></p><p>Good luck</p>",
    createdAt: "2018-11-16 12:55:12",
    updatedAt: "2018-11-16 12:55:12",
    commentId: "d8dbbe7a-b114-4c57-97bd-4bea6baffe5a"
  },
  {
    inviteId: "312b3552-303b-42fb-a487-d55c5f34e3f8",
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body: "Thanks sir",
    createdAt: "2018-11-17 08:51:47",
    updatedAt: "2018-11-17 08:51:47",
    commentId: "fee06d35-70b1-484f-9a81-eff35fcafd82"
  },
  {
    inviteId: "b6b9f886-e7c5-4c90-9f32-e560c8fd9922",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>Hi Tosin, </p><p><br></p><p>your post is blank. :) </p>",
    createdAt: "2018-11-26 22:03:01",
    updatedAt: "2018-11-26 22:03:01",
    commentId: "a801e0bf-fab6-4d1c-965f-3a232c4464b9"
  },
  {
    inviteId: "9e2f6b29-55d1-4800-8776-19a973268462",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>There is a pattern in the invite that is consistent with GNLD type of invites, There is no company called PAXY GLOBAL according to CAC.</p>",
    createdAt: "2018-11-27 10:17:54",
    updatedAt: "2018-11-27 10:17:54",
    commentId: "048d0504-005a-47f8-8235-90bdc6a0d9d5"
  },
  {
    inviteId: "ccc88f10-b2fd-414d-b5e4-65a4965d7c9e",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>It\'s most likely GNLD type of invite, this same address has been used for other company names check: <a href="https://isthisarealjob.com/search?_token=OnAzZaxdDIgvFR8x2xUGAcSccBRB4lt4ewARHuFg&amp;q=Oshiyemi" target="_blank">https://isthisarealjob.com/search?_token=OnAzZaxdDIgvFR8x2xUGAcSccBRB4lt4ewARHuFg&amp;q=Oshiyemi</a></p><p><br></p><p>Also, there is no company called Crownstar consulting with the address in CAC database.</p><p><br></p><p>If you do however decide to go for the interview, please update this post with your experience to help others in future.</p><p><br></p><p>Good luck.</p>',
    createdAt: "2018-11-27 11:21:02",
    updatedAt: "2018-11-27 11:21:02",
    commentId: "f3bf2a9d-c574-4cac-b38b-6747043e7b5c"
  },
  {
    inviteId: "9e2f6b29-55d1-4800-8776-19a973268462",
    userId: "87a52c2d-8eb6-41ef-acb5-e1daf21d1509",
    body: "Yeah \r\nOk sir\r\nThanks...",
    createdAt: "2018-11-27 12:29:57",
    updatedAt: "2018-11-27 12:29:57",
    commentId: "d373e41e-073e-43e9-a5d1-ce4d35f45a76"
  },
  {
    inviteId: "ccc88f10-b2fd-414d-b5e4-65a4965d7c9e",
    userId: "5683d974-d09d-4630-8640-2035497f7fe6",
    body: "<p>I got same message but mine is from Emerald consulting</p>",
    createdAt: "2018-11-29 21:26:58",
    updatedAt: "2018-11-29 21:26:58",
    commentId: "af49eba1-f22c-4bff-92a1-6fd992ced48b"
  },
  {
    inviteId: "3266b6fc-addb-46a2-a3fc-f464f9ce24cc",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Hi.</p><p><br></p><p>The pattern of the invite is consistent with GNLD type of invite for the following reasons:</p><p><br></p><p>1. The company name is mot written </p><p>2. The same address has been used for other types of companies before.</p><p>3. Show text to security </p><p><br></p><p>We recommend you don't go for this invite if you are not interested in GNLD or MLM.</p><p><br></p><p>If you do go for this interview, endeavor to come back here and give update.</p>",
    createdAt: "2018-11-30 17:08:26",
    updatedAt: "2018-11-30 17:08:26",
    commentId: "3f4d9be8-e626-4281-8724-4f50326267f6"
  },
  {
    inviteId: "1128a946-6331-4570-a38f-8fb14a7e65f2",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Preliminary search shows that LibiShop is a registered company with the CAC. However, the registered address is not consistent with the address in the invite you received.</p><p><br></p><p>It's impossible to determine the authenticity of the invite at this moment as we do not have any record of the company in our database.</p><p><br></p><p>You should however note that, the pattern of the invite is consistent with GNLD type format. </p><p><br></p><p>We recommend you go for the invite (being careful and observant), however, endeavor to come back here and give feedback to help those who might come searching for the same company in future.</p>",
    createdAt: "2018-12-05 23:01:35",
    updatedAt: "2018-12-05 23:01:35",
    commentId: "97b47974-4457-4e50-b301-98a8d6d8cf5b"
  },
  {
    inviteId: "9ba6d217-4c3d-4104-ab7f-1b151c13acd3",
    userId: "64a41aec-ac4b-4ebb-87f4-52da3ee3dc14",
    body:
      "<p>Got this message too,  made my research and heard it's like GNLG.  And another thing that worries me is that their website has been under construction for too long; their website is not functional. </p>",
    createdAt: "2018-12-12 05:41:24",
    updatedAt: "2018-12-12 05:41:24",
    commentId: "d3269790-b74f-481a-abc8-b65c02c7c739"
  },
  {
    inviteId: "9fdf7e7c-622d-4c29-9a30-2a2b137f7582",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>Hello Dannysnipes,</p><p><br></p><p>Spin consulting Nig does not exist in our database as a verified or scam company.</p><p><br></p><p>A temporary search online shows that there is no specific company called Spin consulting Nig. But there are a lot of similar registered names found in Lagos, Spin Consulting Nig might be a sub-company under one of those.</p><p><br></p><p>However, the format of the message you received is very similar to other GNLD / SCAM messages. And the same address has been used for several other companies in the past. search for "Surulere house" to see the other companies.</p><p><br></p><p>I recommend you not go for the interview if you are not interested in MLM, but if you do decide to go, please endeavor to come back here and update us so as to help others in the future.</p><p><br></p><p><br></p><p><br></p><p><br></p>',
    createdAt: "2018-12-18 22:24:13",
    updatedAt: "2018-12-18 22:24:13",
    commentId: "98235086-1d93-4cdb-a03b-719dce731fad"
  },
  {
    inviteId: "b99abf5b-c41f-433e-b32c-51092eed5ad0",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>Please note that this address has been used for several other companies (bearing different names) that are associated with GNLD.</p><p><br></p><p>We recommend that you not go for the interview, as it's most likely GNLD.</p>",
    createdAt: "2018-12-25 06:24:40",
    updatedAt: "2018-12-25 06:24:40",
    commentId: "7e06323a-d397-40ca-ab42-bbb5c3880e79"
  },
  {
    inviteId: "4a43a891-77b7-4a61-9fac-d26a392717a8",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>Hi there,</p><p><br></p><p>There are a few pointers in this invite that makes it look fake, here are a few of them:</p><p><br></p><ol><li>The template is similar to other fake / scam / GNLD type of invite</li><li>The same address has been used for several other company names <a href="https://isthisarealjob.com/search?_token=rXArD9PCKllbeBRIZ76bSdfOd5wJMXVOQbvJWI8P&amp;q=Balogun" target="_blank">click here to see them</a></li><li>The invite gives you no time to think of prepare, the is a major strategy of scammers, they ask you to come the following morning to reduce the time you have to rethink your decision.</li><li>The company is not registered with CAC</li></ol><p><br></p><p>If you are not interested in GNLD, or MLM type of jobs, then i think you should not waste your time with this one.</p>',
    createdAt: "2018-12-27 18:22:32",
    updatedAt: "2018-12-27 18:22:32",
    commentId: "c430b94e-1efb-4eff-93d7-5ac3e6118c2a"
  },
  {
    inviteId: "60174285-2684-400f-8532-3088b5298448",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>This is likely a gnld type of invite, the same address has been used for several other companies.</p>",
    createdAt: "2019-01-04 08:33:23",
    updatedAt: "2019-01-04 08:33:23",
    commentId: "62304581-6288-43c2-abff-134885875d1b"
  },
  {
    inviteId: "e3d6e06f-c99d-407c-a641-4323bd44e45c",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>This is most likely GNLD type of company, the address already exists in our database and is already associated with other company names. Which usually suggests that it's not legit.</p>",
    createdAt: "2019-01-06 19:04:33",
    updatedAt: "2019-01-06 19:04:33",
    commentId: "9219b88e-9c61-4871-b9db-5276a9418510"
  },
  {
    inviteId: "3266b6fc-addb-46a2-a3fc-f464f9ce24cc",
    userId: "690ebc52-3296-4990-afe6-b3219197189d",
    body:
      "<p>Hi olufumi.. Please I just got this message from nowhere.. HR HEAD INVITES YOU FOR A CHAT WITH BOARD OF DIRECTOR ON MONDAY 14/1/19. 9AM@FIRST FLOOR 32 OLUFEMI RD LAWANSON B/STOP SURULERE,LAGOS. YDPV. </p><p>.. I want to confirm if its legit. Pls call my line</p><p>08023556136</p>",
    createdAt: "2019-01-13 19:42:06",
    updatedAt: "2019-01-13 19:42:06",
    commentId: "f4fb6091-7051-45c7-bb93-c911d0c571aa"
  },
  {
    inviteId: "3266b6fc-addb-46a2-a3fc-f464f9ce24cc",
    userId: "690ebc52-3296-4990-afe6-b3219197189d",
    body:
      "Hi mikeale.. . Please I just got this message from nowhere.. HR HEAD INVITES YOU FOR A CHAT WITH BOARD OF DIRECTOR ON MONDAY 14/1/19. 9AM@FIRST FLOOR 32 OLUFEMI RD LAWANSON B/STOP SURULERE,LAGOS. YDPV.\r\n\r\n.. I want to confirm if its legit. Pls call my line\r\n\r\n08023556136",
    createdAt: "2019-01-13 19:43:23",
    updatedAt: "2019-01-13 19:43:23",
    commentId: "7bcb45fb-4274-4055-b2fc-a67eeeb6784f"
  },
  {
    inviteId: "3266b6fc-addb-46a2-a3fc-f464f9ce24cc",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "From past experiences, no this is not legit.",
    createdAt: "2019-01-13 20:20:06",
    updatedAt: "2019-01-13 20:20:06",
    commentId: "280d13a2-82c6-4b5e-9737-ed9f0234d0e5"
  },
  {
    inviteId: "2c9a9964-d152-4dc6-ba1a-3e4960ea0e0a",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>This looks like a legit invite. Do let us know your experience after the inerview. Good luck</p>",
    createdAt: "2019-01-13 20:23:31",
    updatedAt: "2019-01-13 20:23:31",
    commentId: "3ab9eb56-04a2-40a2-a2ea-bce77a9927cf"
  },
  {
    inviteId: "a8d1292d-1e0c-4ae3-800c-6eba58aec169",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>This is an invite for a seminar, so i think it's safe to assume you'll be going for a seminar.</p><p><br></p><p>I wouldn't call it scam, as it is clear what you'll be going for.</p><p><br></p><p>I believe the choice is now yours. If you'll be interested in it or not.</p>",
    createdAt: "2019-01-14 08:23:54",
    updatedAt: "2019-01-14 08:23:54",
    commentId: "9025929d-e6fa-4b55-8f7e-366bf53a4835"
  },
  {
    inviteId: "47376700-bcfe-4124-8eb5-7facecc26984",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>The company already exists in our database, see here:</p><p><br></p><p>https://isthisarealjob.com/Lholar/invitation-for-interview-928182472969L16</p>",
    createdAt: "2019-01-15 11:41:45",
    updatedAt: "2019-01-15 11:41:45",
    commentId: "42f9b2a8-1685-4cb1-a9b5-a535085e4b01"
  },
  {
    inviteId: "47376700-bcfe-4124-8eb5-7facecc26984",
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body: "<p>They are genuine go for it </p>",
    createdAt: "2019-01-18 16:17:24",
    updatedAt: "2019-01-18 16:17:24",
    commentId: "5caa5ee6-93ac-4f63-bc90-91c063eecda7"
  },
  {
    inviteId: "47376700-bcfe-4124-8eb5-7facecc26984",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hi Tosin. Do you have experience with the company? We'll like to update our database to properly represent them. If you'll be willing to give verifiable information about them.\r\n\r\nThank you.",
    createdAt: "2019-01-18 20:48:15",
    updatedAt: "2019-01-18 20:48:15",
    commentId: "bd4c1101-068f-4dc6-bac1-4bde46f33fcb"
  },
  {
    inviteId: "47376700-bcfe-4124-8eb5-7facecc26984",
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Yes i have been invited there before for an interview and I can say they are genuine. </p><p>Thanks </p>",
    createdAt: "2019-01-18 22:38:41",
    updatedAt: "2019-01-18 22:38:41",
    commentId: "3b680e97-7d5f-4a1a-9d46-4cef924250f7"
  },
  {
    inviteId: "e3d6e06f-c99d-407c-a641-4323bd44e45c",
    userId: "2cceaf05-91cd-4ffa-a386-933e92f5c98a",
    body:
      "<p>Please I also got this mail</p><p>Is it real? </p><p>Did u later go for the interview?</p>",
    createdAt: "2019-01-21 16:37:23",
    updatedAt: "2019-01-21 16:37:23",
    commentId: "723eea66-71be-45aa-9886-6ff582e819b1"
  },
  {
    inviteId: "9778f306-cd72-414a-8d50-a2e8ca695ced",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>Hello Johnson,</p><p><br></p><p>Seeing that this same address has been used for several other company names in the past.</p><p><br></p><p>It\'s likely not a real job, mostly GNLD Marketing type of companies do this.</p><p><br></p><p>You can search <a href="https://isthisarealjob.com/Johnson/%3Ca%20href=\'http://https://m\'%3Ehttps://m%3C/a%3Eaps.google.com/?q=Number+2,+Akin+Osiyemi+street&amp;entry=gmail&amp;source=g" target="_blank" style="color: rgb(66, 133, 244); background-color: rgb(255, 255, 255);">Akin Osiyemi street</a>, on the platform to see the other results.</p>',
    createdAt: "2019-01-21 19:29:06",
    updatedAt: "2019-01-21 19:29:06",
    commentId: "7d94de5c-92bb-4d2e-b5fa-af5a75602cd0"
  },
  {
    inviteId: "ac182e4d-36d3-4ac3-b5a0-e2ddf6d4c88c",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>This address exists. If you do go for the interview, please come back to update us.</p>",
    createdAt: "2019-01-22 18:47:52",
    updatedAt: "2019-01-22 18:47:52",
    commentId: "81cae5d7-aa5e-40fc-9a77-7eebc61d9a03"
  },
  {
    inviteId: "d5840c9e-561c-4943-b0ca-9c43fa18f486",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>This address is a confirmed GNLD type of company. </p>",
    createdAt: "2019-01-22 18:48:31",
    updatedAt: "2019-01-22 18:48:31",
    commentId: "7ff41cd9-6b78-48e9-9ab0-a72def7028b0"
  },
  {
    inviteId: "47376700-bcfe-4124-8eb5-7facecc26984",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Okay. Thank you.",
    createdAt: "2019-01-22 18:49:39",
    updatedAt: "2019-01-22 18:49:39",
    commentId: "ad0ecf25-2929-4099-b8eb-75940325d410"
  },
  {
    inviteId: "ac182e4d-36d3-4ac3-b5a0-e2ddf6d4c88c",
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body: "I did not go",
    createdAt: "2019-01-22 23:46:12",
    updatedAt: "2019-01-22 23:46:12",
    commentId: "e9666b36-3528-4929-9966-f86496ac2300"
  },
  {
    inviteId: "ac182e4d-36d3-4ac3-b5a0-e2ddf6d4c88c",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>Okay. Thank you for your update.</p>",
    createdAt: "2019-01-22 23:51:12",
    updatedAt: "2019-01-22 23:51:12",
    commentId: "80f2d65a-731c-4846-9283-5b341b10a3cd"
  },
  {
    inviteId: "73a855a6-1b45-4b6e-b92e-24a2c38d5035",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>The pattern of the invite is very similar to gnld type of invite</p><p><br></p>",
    createdAt: "2019-02-20 22:01:22",
    updatedAt: "2019-02-20 22:01:22",
    commentId: "829d1e6f-56c1-46e2-811e-577d9c0e94ee"
  },
  {
    inviteId: "73a855a6-1b45-4b6e-b92e-24a2c38d5035",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>The pattern of the invite is very similar to gnld type of invite</p><p><br></p>",
    createdAt: "2019-02-20 22:12:36",
    updatedAt: "2019-02-20 22:12:36",
    commentId: "ef060924-d92f-4f26-ba1e-0d4c66267d31"
  },
  {
    inviteId: "73a855a6-1b45-4b6e-b92e-24a2c38d5035",
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body: "thanks",
    createdAt: "2019-02-25 16:06:18",
    updatedAt: "2019-02-25 16:06:18",
    commentId: "87010064-f1b3-4bee-a20e-41e43bf21ace"
  },
  {
    inviteId: "41448fbc-2a17-42de-bae4-cf3e1d414169",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>From all indication, it will be wise not to attend this invite for the following reasons:</p><p><br></p><ol><li>this same address has been used for several other companies with different names <a href="https://isthisarealjob.com/search?_token=XC01gg34eXQjuwcAXH1T84jHrLja5gjB2uNeY3Y4&amp;q=Number+2%2C+Akin+Osiyemi+Street%2C" target="_blank">click here</a>.</li><li>The pattern and format of the invite is consistent with registered SCAM /GNLD type companies</li><li>The statement: `the Deputy Managing Director, Head of Human Resources of our client&nbsp;` Makes no sense.</li><li>The company Uni Consult at the speciifed address is not registered with CAC.</li></ol>',
    createdAt: "2019-03-02 11:32:35",
    updatedAt: "2019-03-02 11:32:35",
    commentId: "5de73ad5-05c6-4a96-90c1-b0c6f1c4e598"
  },
  {
    inviteId: "0abc587d-cf9d-4a6d-a540-83abbedf0ba2",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>Hi there,</p><p><br></p><p>The format of this invite is quite suspicious for the following reasons:</p><p><br></p><ol><li>No company name is specified</li><li>The statement \'We are impressed by your background, you have been recommended for a JOB BRIEFING\' is very often used by GNLD / Scam type of invites. <a href="https://isthisarealjob.com/search?_token=fdTb0S58ITlVVUPSEGBNNiRKvvEXP8KlbDpOWymG&amp;q=background" target="_blank">Click here to see</a>.</li><li>Adding ref number to invite is very often used by scam / GNLD type of companies.</li><li>The same address has been used for several other invites bearing different company names. <a href="https://isthisarealjob.com/search?_token=fdTb0S58ITlVVUPSEGBNNiRKvvEXP8KlbDpOWymG&amp;q=+IDRIS+GIDADO" target="_blank">click here to see them</a>. </li></ol><p><br></p><p>Due to the points above, we highly recommend you don\'t attend the interview, and if you do choose to attend, endeavor to return here to give us update.</p><p><br></p><p>Thank you.</p>',
    createdAt: "2019-03-05 00:09:41",
    updatedAt: "2019-03-05 00:09:41",
    commentId: "bb4db921-eb13-489f-9e1e-73a5bbc6922a"
  },
  {
    inviteId: "2d268cab-c149-4a26-9ff5-79484aa885d3",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>This address has been used for several other invites and there is no company name in the invite.</p>",
    createdAt: "2019-03-05 00:11:25",
    updatedAt: "2019-03-05 00:11:25",
    commentId: "dff1ecd8-d76e-4727-b0fa-ad1c342f3e30"
  },
  {
    inviteId: "ffa84567-61de-4bb0-82b1-fa819c7e0bea",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>The address has been associated with GNLD type of invites in the past, you can check here for a very similar post.</p>",
    createdAt: "2019-03-14 07:57:45",
    updatedAt: "2019-03-14 07:57:45",
    commentId: "0504bbff-721d-4e1c-b723-5109ac8d0c75"
  },
  {
    inviteId: "ffa84567-61de-4bb0-82b1-fa819c7e0bea",
    userId: "afefdd69-22d2-43bb-a05b-51800a0f679e",
    body:
      "<p>Pls I got an exact same interview post from them too. Did u still go? Is it a scam?</p>",
    createdAt: "2019-03-17 22:01:54",
    updatedAt: "2019-03-17 22:01:54",
    commentId: "50a5ca5e-d432-4be0-beb8-8a29ca92c686"
  },
  {
    inviteId: "ffa84567-61de-4bb0-82b1-fa819c7e0bea",
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "If you got the same exact message, there's a high probability that its fake.",
    createdAt: "2019-03-25 22:25:51",
    updatedAt: "2019-03-25 22:25:51",
    commentId: "e9a18748-5a77-422e-ad16-99916e2bf692"
  },
  {
    inviteId: "f99f4686-fe71-4fb8-859d-a81ee77fe7ef",
    userId: "61f9010a-d94f-48fd-8497-722bfe81bbb7",
    body: "<p>Please can anyone help confirm this?</p>",
    createdAt: "2019-03-29 23:59:33",
    updatedAt: "2019-04-03 05:23:23",
    commentId: "2a2cfb6c-2f1b-4b17-8fdb-e89d7ac89c50"
  },
  {
    inviteId: "ffa84567-61de-4bb0-82b1-fa819c7e0bea",
    userId: "d64d8168-e814-4bda-b5d3-707e6f3b5ba1",
    body:
      "<p>I got this exact email, but mine is from PRIMIXLINK CONSULT. Stated d interview for tomorrow. Thank God for this website, I know now that its fake.</p>",
    createdAt: "2019-04-09 15:47:57",
    updatedAt: "2019-04-09 15:47:57",
    commentId: "e26caeca-9694-45d0-bb8d-654465354bac"
  },
  {
    inviteId: "cc1b295f-e70c-4b02-bafd-e2a40c6b052f",
    userId: "8226e023-abba-45dc-bc6e-2768ae288632",
    body: "<p>Did you go for the interview</p>",
    createdAt: "2019-06-01 16:28:38",
    updatedAt: "2019-06-01 16:28:38",
    commentId: "ec124ed6-de20-4594-bdb5-ee6707a4fb87"
  },
  {
    inviteId: "cc1b295f-e70c-4b02-bafd-e2a40c6b052f",
    userId: "ebae1945-782a-4032-8254-d56d2cbf0fca",
    body: "<p>they are scammers o</p>",
    createdAt: "2019-09-25 07:38:45",
    updatedAt: "2019-09-25 07:38:45",
    commentId: "b46d2cab-8f5b-4d68-b97f-18136f0c7b7d"
  },
  {
    inviteId: "f99f4686-fe71-4fb8-859d-a81ee77fe7ef",
    userId: "e8cdba73-f758-4240-b912-e49b36cc09ee",
    body: "<p>I just got the same now</p>",
    createdAt: "2019-09-27 20:00:35",
    updatedAt: "2019-09-27 20:00:35",
    commentId: "2e103f3c-35cb-47aa-8132-6b10354025d5"
  },
  {
    inviteId: "cc1b295f-e70c-4b02-bafd-e2a40c6b052f",
    userId: "7db2c77d-be61-469f-9797-1467acd5dbd1",
    body:
      "Pls confirm if they are the same ..... Cos I know all this people are GLND people,\r\nAfter having reviewed your application for the post of CUSTOMER RELATION OFFICER. The recruitment team is pleased to inform you that you have met the preliminary requirements as contained in your CV and other criteria assessments and thus wishes to invite you for an interview with the Human Resource Team.\r\n \r\nDated: Tuesday 8th of October2019\r\n \r\nAt: 6 Obasa Street, Chemline Building, beside Forte Oil Filling Station, Oba Akran road, Ikeja, Lagos.\r\n \r\nScheduled at 9:00am.\r\n \r\n \r\nWe hope to see you around at your best. \r\nGood luck!\r\n \r\nHR@Mark\r\n07058413368\r\nAvailable to pick calls from 8am - 4pm. \r\n \r\nNote: You are to come with a copy of your CV and a print out of this invite to gain access, as you will not be allowed access into the building without these items.\r\n \r\n \r\nDisclaimer: BRYMEDOT, is committed to helping you secure worthwhile Employment. We are a third party recruiter.\r\nThird Party Recruiters-- Third party recruiter are defined as agencies, organizations or individuals recruiting candidates for temporary, part-time, or full time employment on behalf of others and for themselves.\r\n \r\nAVAILABLE OFFERS AT BRYMEDOT\r\n \r\n1. BUSINESS DEVELOPMENT OFFICER: we develop business, both for our clients and our businesses.\r\n \r\n \r\n2. HUMAN RESOURCE PERSONNEL/CUSTOMER RELATION OFFICER: We recruit for ourselves and for our clients.\r\n \r\n \r\n3. GRADUATE/CORPORATE TRAINING: We organize training for our clients.\r\n \r\n \r\nYou understand and consent that in order to facilitate the recruitment process on your behalf, BRYMEDOT, may forward your details to clients who are interested in you OR in other case forward your details to clients who are interested in your services.",
    createdAt: "2019-10-06 05:49:28",
    updatedAt: "2019-10-06 05:49:28",
    commentId: "bb95fb0e-8254-4b09-9634-579b465261ca"
  }
];
commentArr.forEach((comment)=>{
  return comment.body = removeTags(comment.body)
})
export default {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "Comments", commentArr,
        {}
      );
    },
  
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Comments", null, {});
    }
  };

