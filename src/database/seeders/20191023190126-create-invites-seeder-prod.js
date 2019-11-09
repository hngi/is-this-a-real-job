const removeTags = (str) => {
  if ((str===null) || (str===''))
  return false;
  else
  str = str.toString();
  return str.replace( /(<([^>]+)>)/ig, '');
}

const inviteArr =  [
  {
    userId: "6d1bcba1-0cb8-4248-a500-e581911793c9",
    body: "#world is greater than #good things",
    createdAt: "2018-02-28 00:14:37",
    updatedAt: "2018-02-28 00:14:37",
    title: "Hello World",
    
    inviteId: "1c5c4e45-283a-4dc2-a51b-a9ee2e1be733"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "You are invited for a JOB INTERVIEW on THUR 23RD NOV, 9am @ 4 Alara St, off Commercial Avenue Sabo-Yaba, Lagos. Details in ur mailbox.www.hyinsco.com.ng.",
    createdAt: "2018-03-30 21:54:17",
    updatedAt: "2018-03-30 21:54:17",
    title: "If you got this mail ..don't bother wasting your time.",
    
    inviteId: "bc828eba-1ca5-4425-a74f-fb3406b74d7f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Global Resources invites u for Aptitude test/briefing on Fri 02/03/18 by 9 am @ 19 Bode Thomas Road, Awoyokun/Onipanu bstop.\nRef: HR/12/MGT18\n090-9807-7757",
    createdAt: "2018-03-01 22:08:11",
    updatedAt: "2018-03-01 22:08:11",
    title: "Is this real",
    
    inviteId: "cf7f7cc9-a12f-4b95-99d9-7b517110685a"
  },
  {
    userId: "d24808fc-a1c9-4779-9b0a-7b334de769c7",
    body:
      "Who knew a hug could win you free VVIP tickets to the FIFA World Cup™ Trophy Tour? We challenged a few excited fans to hug-a-stranger and you’ve got to see how it went.Check it out. #SeeTheTrophyNG #ReadyFor",
    createdAt: "2018-03-01 22:25:07",
    updatedAt: "2018-03-01 22:25:07",
    title: "Real jobs",
    
    inviteId: "f7904e1e-902c-4f08-b276-72d00e8fb91a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dps invites u for an interview chat to work with us on Fri 02/03/2018 by 9am@daura rd by magajin gari opp yabi plaza kad Dps/ygo/115",
    createdAt: "2018-03-02 03:46:18",
    updatedAt: "2018-03-02 03:46:18",
    title:
      "PLEASE DOES ANY ONE KNOW THIS PLACE, AND HOW LEGIT IS THE COMPANY THANKS",
    
    inviteId: "ff2028d9-4803-4ef3-a003-704aecc4bc50"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Foreign Exchange Trader \r\nNorthgate Capital Management -\r\nNorthgate Capital Management is looking break into the African market and to add to their team by recruiting Trainee Foreign Exchange and Stock Traders with an ambition to succeed in the industry.\r\n\r\nAs a Foreign Trader you will be given training in trading forex and equities. Once training is complete the correct candidate will switch onto trading live funds for the firm. You will be working closely with senior members of the team to manage risk and portfolio diversification.\r\n\r\nThe ideal candidate will possess the following:\r\n\r\nAbility to work within a team\r\nA keen interest in the financial markets\r\nAmbition to succeed\r\nAbility to work long hours\r\nAble to communicate across all levels\r\nThis is a fantastic opportunity to break into this world with no prior experience needed. The chosen candidates will earn the opportunity to complete training through webinars from our London offices and gain qualifications further into the role.\r\n\r\nTraining cost do apply due to the in-depth training provided by the fund, please only apply if you understand this.\r\n\r\nJob Type: Full-time\r\n\r\nRequired education:\r\n\r\nSecondary education",
    createdAt: "2018-03-02 18:37:57",
    updatedAt: "2018-03-02 18:37:57",
    title:
      "Foreign Exchange Trader Job Might not be what you are looking for",
    
    inviteId: "1ff72941-7073-4e6a-ab0d-39af48a6a595"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "SCHLEEZ NIGERIA LIMITED\r\nNo 49, OLOWU STREET, OFF MOBOLAJI BANKS ANTHONY WAY, IKEJA, LAGOS\r\nOn 2 AUGUST By 9:00AM.",
    createdAt: "2018-03-02 19:28:01",
    updatedAt: "2018-03-02 19:28:01",
    title: "SCHLEEZ NIGERIA LIMITED Is not a real company!",
    
    inviteId: "1aa9379c-807f-4997-9c59-7935e2535e9f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are invited for an interview in LASACOAssurancePlc at Plot 36 Acme rd, Ogba Ikeja by 10 am on Tues 15/8/2017, dress corporate, come with a CV call 080xxxxxxxx",
    createdAt: "2018-03-02 19:32:16",
    updatedAt: "2018-03-02 19:32:16",
    title: "LASACOAssurancePlc is a real company, but...",
    
    inviteId: "b08eaec5-9d33-4108-8fbd-2470dd26cada"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "human.resource@minervaoilandgas.com - Phase 1 | L22 Permit | Port Campbell | VIC | 3000 | Australia, Phase 11 Annex | 192",
    createdAt: "2018-03-02 19:36:03",
    updatedAt: "2018-03-02 19:36:03",
    title: "Minerva Oil & Gas Refining Company is fake!",
    
    inviteId: "0cbf0217-b0ea-4799-9294-2f03d929b741"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "jobs@jakophite.com - 203, Favour Street Opposite Oando Fill Station, Agege Pen Cinema Bus Stop, Old Abeokuta Motor Road,Lagos",
    createdAt: "2018-03-02 19:37:06",
    updatedAt: "2018-03-02 19:37:06",
    title: "CEO Resource Nigeria Limited is fake!",
    
    inviteId: "67a306cf-e994-4dca-adfc-7ac7d879985a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "ignitehr@yahoo.com - Suite 201, Philez Plaza, 2 Osolo way, 7/8 Bus Stop, Off Murtala Intl Airport road, Beside Keystone Bank, Lagos State",
    createdAt: "2018-03-02 19:37:57",
    updatedAt: "2018-03-02 19:37:57",
    title: "Ingnitlyte Limited Company is not authentic",
    
    inviteId: "4d6086e9-3f37-4d85-a0ee-215c995ae04a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '"hello Dear how are you doing. i saw your profile today i became interested to know you please i want you to contact me with this e-mail address(kristanaabdel7@gmail.com) i have something very important to tell you thanks and God bless you"',
    createdAt: "2018-03-03 16:04:58",
    updatedAt: "2018-03-07 05:56:46",
    title:
      'If kristina abdel sent you a new message: "Hello" : Its a scam!',
    

    inviteId: "d466521d-849c-43d0-bf2f-be73a333d3d2"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are selected for an interview for post applied. Interview holds in Gtext Hub, 3rd Floor 51/52 Ijaiye Road, Ogba Bus Stop, Lagos. Date: Tuesday 6th March by 12noon. No rescheduling allowed, only apply if u can be available that date and can resume next day if selected.",
    createdAt: "2018-03-03 16:15:29",
    updatedAt: "2018-03-03 16:15:29",
    title: "Is this invite real please",
    
    inviteId: "cdafe44a-eedb-43bd-a9ed-276cbd74147e"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please who knows or applied for a job interview for a school at Ifo, Ogun state for a school teacher with email edugrowthconsult2002@gmail.com\r\nComes with free accommodation.",
    createdAt: "2018-03-03 16:22:41",
    updatedAt: "2018-03-03 16:22:41",
    title: "Is Rabbi Model College in Ifo, Ogun state real",
    
    inviteId: "a5b13cf4-b16e-443f-815f-b59b28cc8e31"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You've been scheduled for a job interview at Workforce Group, Beside UPS, Gbagada, Lagos on TUES 7th MAR 2018 by 10AM. Kindly check your email for details.",
    createdAt: "2018-03-06 21:02:31",
    updatedAt: "2018-03-06 21:02:31",
    title: "Please how true is this",
    
    inviteId: "4d0353d4-870f-4fc5-95b1-98e4d13df23f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been shortlisted to have a written test with TGN. kindly come along with a hard copy of your CV and a print out copy of your invitation. venue; no 2 Akin Osiyemi street, ground floor, opposite sterling bank at first bank bus stop,Allen,Ikeja, Lagos. Date: Monday 5th March, 2018 TIME: 9am prompt Hr Job Placement",
    createdAt: "2018-03-06 21:06:19",
    updatedAt: "2018-03-06 21:06:19",
    title: "i received dis",
    
    inviteId: "9a845d50-ff66-4c6c-9606-ee7c5c157221"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Your CV details have been considered. You have been shortlisted for an interview/job briefing with our organization @LIVE SOLUTION RESOURCES on Tuesday 6th March 2018. \r\nTime: 9am prompt\r\nLocation: 3rd floor, crownet plaza, idris gidado street, wuye. Abuja.\r\nKindly come with an hard copy of your CV and writing materials for documentation \r\nREF-- HR Thyme.",
    createdAt: "2018-03-06 21:07:53",
    updatedAt: "2018-03-06 21:07:53",
    title: "Pls HW LEGIT IS DIS invite",
    
    inviteId: "941b53e7-2696-46ca-a122-7ca0d6f8e041"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Custodian And Allied invite you for an interview on Wednesday 7/3 /18, Address 27 Commercial Avenue Sabo Yaba Lagos.\r\nTime - 8am\r\nDress coperate",
    createdAt: "2018-03-06 21:11:26",
    updatedAt: "2018-03-06 21:11:26",
    title:
      "Pls I Just got this message how real is it and pls give me useful hint",
    
    inviteId: "d4657a4f-293b-4b8e-93fa-a2c9845a5566"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This is your interview invite with MAG CONSULT (RC11159) on wed 07/03/18 by 8am at 5, oke close off olayiwola street, police post, oregun ikeja.",
    createdAt: "2018-03-06 21:13:41",
    updatedAt: "2018-03-06 21:13:41",
    title: "pls help me confirm. is this true",
    
    inviteId: "9e8227b5-a4b7-42d9-8450-7d588ce177af"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I got an interview invite from African Alliance Insurance PLC for the role of a marketing executive. The address on the text is Allen avenue ikeja.",
    createdAt: "2018-03-06 21:18:57",
    updatedAt: "2018-03-06 21:18:57",
    title: "Any info will be highly appreciated.",
    
    inviteId: "dc41d6f2-6fb7-44e3-8d86-93ba2438ad51"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are invited for an INTERVIEW on WED 7/3/18 by 9am@27Ayodele Ojo,CokerRd, Traffic Light B/Stop Ilupeju Lagos.ADM964.STARROSE CONSULT. Enq Call 080-9754-6721",
    createdAt: "2018-03-06 21:20:58",
    updatedAt: "2018-03-06 21:20:58",
    title:
      "Hey guys help confirm this interview invite. Hope it's not one of those GNLD.",
    
    inviteId: "718bd5cd-eabb-4328-98bd-c4a12aa3da03"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been shortlisted for an interview of the post of Customer service assistant /sales representative at our company. \nAddress : Chicken Republic Ogudu road, Ojota\nDate: March 7th, 2018\nTime: 3pm",
    createdAt: "2018-03-06 21:22:27",
    updatedAt: "2018-03-06 21:22:27",
    title:
      "Good day, I got this interview invite. Please, is it real or fake",
    
    inviteId: "89459195-4b6e-4fe8-bf29-edf3861aa3a1"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant, Sequel to your application for employment in our organization. You have been shortlisted for an interview. Address: 15, otunubi Street Haruna Bus Stop Off College Road Ogba, Lagos State. Date: xth March ,2018 Time: am Dress code: Dress Corporately. Thank you.",
    createdAt: "2018-03-07 18:33:46",
    updatedAt: "2018-03-07 18:33:46",
    title: "Can someone help me check if this invite is real?",
    
    inviteId: "9a2b8614-dde2-418a-afa7-9deab0e6fa14"
  },
  {
    userId: "2057511c-9379-4009-89cc-80f54630406b",
    body: "Testing this thing",
    createdAt: "2018-03-07 20:48:45",
    updatedAt: "2018-03-07 20:48:45",
    title: "James Where are you?",
    
    inviteId: "4f8758e9-dc19-4d45-83ae-4480be58762e"
  },
  {
    userId: "d24808fc-a1c9-4779-9b0a-7b334de769c7",
    body:
      "Who knew a hug could win you free VVIP tickets to the FIFA World Cup™ Trophy Tour? We challenged a few excited fans to hug-a-stranger and you’ve got to see how it went.Check it out...",
    createdAt: "2018-03-09 00:06:33",
    updatedAt: "2018-03-09 00:06:33",
    title: "Hello World????",
    
    inviteId: "7ebafdb3-1e47-4698-b6c7-1f030cf28400"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "We received your details from our online agency and it interests our organization. In view of that, we would like to invite you for an interview session as a Graduate Trainee. The interview would be conducted in Two phases, Oral and Essay. Kindly find the details below.\r\n\r\n\r\nDate Monday, 12th March, 2018\r\n\r\nTime-8:40 am prompt\r\n\r\nVenue-The Zonal Office, B&G Consulting Group, Suite 4A, Ogungbeye str, Off Amaraolu, Opposite Zenith Bank, Agidingbi-1st gate, Ikeja, Lagos.\r\n\r\n\r\nYou are required to come with a hard copy of your Resume and 2 passport photographs. Dress appropriately and be punctual. You will be meeting with the Executive board. Use the code below for proper identification. GTR15280\r\n\r\n\r\nWe apologize for the short notice; however it is important you confirm your availability. Kindly do that by replying this email as soon as possible.\r\n\r\nBest Regards\r\n\r\nFor: The Human Resource Team",
    createdAt: "2018-03-12 16:18:26",
    updatedAt: "2018-03-12 16:18:26",
    title: "Please help me confirm this",
    
    inviteId: "e523281b-c2b6-400e-b7f9-8d3d8ca640f6"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Based on referral,your Interview with BSGM Directors is on Mon 11/3/18 by 9am @ 4 Ogungbeye close,Agidingbi,1st Gate Bustop,Ikeja\r\nEnq: 08120296353",
    createdAt: "2018-03-12 16:20:19",
    updatedAt: "2018-03-12 16:20:19",
    title:
      "please are they real or scam... awaiting your quick response my people",
    
    inviteId: "57cb8846-ad2a-437c-b817-767d7d22192f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "ou are invited for an interview at Daily Jobs Global Outsourcing Ltd on 14/03/2018 by 9.am at House 2, r close 21 road Festac town Lagos.Come with your CV.",
    createdAt: "2018-03-14 00:28:12",
    updatedAt: "2018-03-14 00:28:12",
    title:
      "Daily Jobs Global Outsourcing Ltd: Somebody please help me out, I want to know if it's real or fake..",
    
    inviteId: "f52191ef-3bcf-4346-afb8-9dfa0bd78d44"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Fortune Careers Ltd invites you for Career Chat by 9am Wed 14/03/18 @192,Ikorodu Rd, beside Firstbank,Palmgrove Lagos, 080-6257-4347. FC/55/FM,Http://v.ht/n89p",
    createdAt: "2018-03-14 01:18:36",
    updatedAt: "2018-03-14 01:18:36",
    title: "Fortune Careers Ltd is likely GNLD",
    
    inviteId: "c1e2de8e-b7a7-4cd8-9f65-9cdf73ad027b"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "please does anyone know anything about exus pharmaceutical? I googled it but couldn't get anything reason about them. I have an interview with them at ph on Friday. I am currently far from ph and don't want to waste tfare. pls, help!!!",
    createdAt: "2018-03-14 16:19:20",
    updatedAt: "2018-03-14 16:19:20",
    title: "please does anyone know anything about exus pharmaceutical",
    
    inviteId: "43b73e05-e09f-4f30-b46a-40bc5030ab76"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Base on CV review, you have been shortlisted for an interview with DGS on [date] by [time] at 2, Sunday street, Beside GTBANK, Palmgrove B/stop, Lagos . Slot: AMD4",
    createdAt: "2018-03-15 01:01:34",
    updatedAt: "2018-03-15 01:01:34",
    title: "Interview message from DGS is fake!",
    
    inviteId: "daeb5343-f415-40fc-a47c-5f3ea3ed74cf"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Candidate,\r\n\r\nI got your cv, thank you for sending. I would like to invite you for an interview /chat our office to tell you a little more about the position- Human Resources Officer, get to know you better, and see if this job is right for you.\r\n\r\nI would also like you to come over with relevant documents, updated cv and certificates that might help us in ascertaining your suitability for the position.\r\n\r\nVenue: 15, Bola Sonoiki Street, Ogudu GRA, Lagos\r\n\r\nTime: 10.00am.\r\n\r\nDate: Friday March 16, 2018.\r\n\r\nThank you\r\n\r\nKind Regards\r\n\r\n'Lamide Adeoti\r\n\r\nHR, Business Fulfillment Unit\r\n\r\nOmnicom Solutions Limited\r\n\r\n15, Bola Sonoiki Street, Ogudu GRA, Lagos",
    createdAt: "2018-03-15 17:12:50",
    updatedAt: "2018-03-15 17:12:50",
    title:
      "please house, any information about the interview invite below;",
    
    inviteId: "5ae41288-469b-45e5-904e-a5b7910f3737"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are hereby invited for an aptitude test at Accion Mfb (Solid Foundation High School, Ilupeju Street Aule Akure Ondo State. on Mar 17 2018 by 10am. Come with a passport and a copy of your ID card. Batch 1. Tk a bike from Ilesha Garage to the above venue.",
    createdAt: "2018-03-15 14:31:59",
    updatedAt: "2018-03-15 14:31:59",
    title:
      "Gud morning house pls I receive an aptitude test interview for job and I don't kno how geneu it is",
    
    inviteId: "fdfad475-d45e-4c59-be8f-f10e33552d7d"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I sent in an application to HYNSCO.com.ng on Wednesday March 14th, 2018 precisely and by Thursday, 15th I have gotten an invitation from them for an interview/oral discussion scheduled on friday16th, It look so fake. Can some one talk to Me on this!!!\r\n\r\nDear Candidate,\r\n\r\nBased on your online application for employment and your submitted C.V which has been considered satisfactory. \r\nYou have been  invited for a written and oral interview with the HUMAN RESOURCE MANAGEMENT OF HYINSCO INTEGRATED SERVICES for the position of a Business Development Officer.\r\n\r\n\r\nVenue: HYINSCO office, No 4, 2nd floor, upward Sanitas outlet, Alara Street, Off Commercial Avenue, Onike Sabo Yaba, Lagos.\r\n\r\n Date: FRIDAY 16TH MARCH, 2018\r\n\r\n Time: 9 AM\r\n\r\nHence, lateness will not be tolerated as interview will not be conducted or rescheduled for anyone who comes later than 9am. \r\n\r\n Come with a passport photograph, relevant credentials and a print out/proof of this mail.\r\n\r\n\r\nwww.hyinsco.com.ng\r\n Regards,\r\n HR HYINSCO 001",
    createdAt: "2018-03-15 17:17:29",
    updatedAt: "2018-03-15 17:17:29",
    title: "Is HYNSCO.com.ng a real company?",
    
    inviteId: "fed9d4dd-c12b-4c04-98dd-a256f7c683ac"
  },
  {
    userId: "1190c4c7-e430-427e-8cc0-04eb68ad7209",
    body:
      "Vacancy!!\r\nJob role: Tele Marketing \r\nCompany-Access bank\r\nRecruitment Agency -Sumeru Nigeria Limited!\r\nRequirement: 26years and below.\r\nMust have completed NYSC.\r\nGrade- second class lower only ! (2.2)\r\nDegree holders only! No HND no NCE!\r\n\r\nNob of people needed -250\r\n\r\nPlease dress corporate !\r\n\r\nInterview schedule - March 16..7am prompt!\r\n\r\nIf you are eligible kindly visit Access Bank Oniru   with your original WAEC certificate, NYSC certificate ,Degree certificate and Birth Certificate (All Original) and photocopies\r\n\r\nVenue -Access bank Oniru Victoria island",
    createdAt: "2018-03-16 03:40:53",
    updatedAt: "2018-03-16 04:02:35",
    title: "Please help me confirm",
    
    inviteId: "081f51cc-c54c-45e5-9f9f-3e3382c9f54a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear candidate. \r\n\r\nYou have been shortlisted for the BAT Technical training recruitment test. It will take place at our Ibadan factory by 10am on Monday, Mar 19, 2018. Address is 1 Tobacco road, off Toll gate, lagos Ibadan Express way. Please wear shoes that cover your feet properly.",
    createdAt: "2018-03-16 03:52:45",
    updatedAt: "2018-03-16 03:52:45",
    title: "Is this real?",
    
    inviteId: "04fc2292-1ebe-4692-ba13-b8de40000434"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I got an invite from Geometrics Synergy Services Limited \r\nGeometrics Synergy Services Limited, House T6C,Minimah Estate, Ikeja (By First Bank @ Airport Bustop along Lagos Abeokuta Express way.",
    createdAt: "2018-03-16 04:54:06",
    updatedAt: "2018-03-16 04:54:06",
    title:
      "I got an invite from Geometrics Synergy Services Limited, Please how true is this company",
    
    inviteId: "1fd25517-7292-408d-9a22-0e85c484d2b0"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant,\r\n\r\n\r\nWe received your CV and\r\n\r\n​ ​\r\n\r\nare \r\n\r\nconsidering you for an Internship role in our Vendor Operations Department.\r\n\r\n\r\nWe would, therefore, like to invite you for a Test & interview \r\n\r\n. Please find details below;\r\n\r\n \r\n\r\n​\r\n\r\nDate:\r\n\r\n​ Friday, 16th March \r\n\r\n2018\r\n\r\nTime:\r\n\r\n​ ​10:00 AM\r\n\r\nAddress: Jumia Corporate Office, 109 Adeniyi Jones Avenue, Ikeja (Brown building beside Med-plus Pharmacy).\r\n\r\n\r\nPlease reply this email confirming your availability as soon as possible. Also, go along with a copy of your CV and a pen.​\r\n\r\n\r\n\r\n￼\r\nWarm Regards,",
    createdAt: "2018-03-16 03:58:19",
    updatedAt: "2018-03-16 03:58:19",
    title: "Is this a real jumia Job",
    
    inviteId: "e8b4e136-7d02-4d3d-ac2e-671dc04dbf0e"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Your CV APPROVED! INTERVIEW holds 9A.M on SATURDAY 17/3/2018 at Ground floor, 32 Olufemi Road off Ogunlana Drive Surulere Lagos. APP. ID: FUFE SHOW TO SECURITY",
    createdAt: "2018-03-17 00:07:09",
    updatedAt: "2018-03-17 00:07:09",
    title: "who else got this? real or scam",
    
    inviteId: "1586a1ca-7b70-4ec2-bf91-a42ff073fc81"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "32 Olufemi Rd is a residential address, less likely to be a company",
    createdAt: "2018-03-17 00:10:57",
    updatedAt: "2018-03-17 00:10:57",
    title:
      "32 Olufemi Rd is a residential address, less likely to be a company",
    

    inviteId: "655bc78d-ce77-4535-aab1-434f56fa7bff"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Based on your application and after due consideration, please note that you are scheduled for interview on Monday 19th March, 2018. \r\n\r\n\r\nVenue of interview is MHS office, 6th floor, 65C Opebi Road, opposite glass house by Salvation Bus Stop, Opebi - Lagos.\r\n\r\nTime is 9.00am Prompt.\r\n\r\n\r\nDo present a hard copy of your CV and a passport photograph and please ensure to be punctual.\r\n\r\n\r\nNeed help/direction? Call Admin:\r\n\r\n0803-449-6175/6207",
    createdAt: "2018-03-17 00:13:05",
    updatedAt: "2018-03-17 00:13:05",
    title:
      "Can anyone help me confirm if this is a scam or real. I just got this email now",
    
    inviteId: "5966c8e1-4f50-45e1-8da6-8b7e964e2327"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Likely address of the said interview",
    createdAt: "2018-03-17 00:23:46",
    updatedAt: "2018-03-17 00:23:46",
    title: "65c Opebi",
    

    inviteId: "bfb1599b-4086-4bdc-9af9-43cbe3736470"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Job Title: ICT Graduate Trainee\r\n\r\nLocation: Lagos\r\n\r\nJob Responsibilities\r\nInstall and configure computer hardware operating systems and applications.\r\nMonitor and maintain computer systems and networks.\r\nTalk staff or clients through a series of actions, either face-to-face or over the phone, to help set up systems or resolve issues.\r\nTroubleshoot system and network problems, diagnosing and solving hardware or software faults replace parts as required.\r\nProvide support, including procedural documentation and relevant reports.\r\nFollow diagrams and written instructions to repair a fault or set up a system.\r\nSupport the roll-out of new applications.\r\nSet up new users' accounts and profiles and deal with password issues.\r\nRespond within agreed time limits to call-outs.\r\nWork continuously on a task until completion (or referral to third parties, if appropriate).\r\nPrioritise and manage many open cases at one time.\r\nRapidly establish a good working relationship with customers and other professionals, such as software developers.\r\nTest and evaluate new technology.\r\nConduct electrical safety checks on computer equipment.\r\nRequirements\r\nHND, B.Sc, B. Eng in Computer Science\r\nFresh graduate with discharged Certificate\r\n25 - 28 years of age.\r\nApplication Closing Date\r\n28th March, 2018.\r\n\r\nHow to Apply\r\nInterested and qualified candidates should send their CV's to: johnson.akinkuowo@lantern-books.com using the job position as subject of the mail e.g Application for the post of ICT Graduate Trainee.",
    createdAt: "2018-03-17 05:16:44",
    updatedAt: "2018-03-17 05:16:44",
    title:
      "Literamed Publications Nigeria Limited ICT Graduate Trainee Recruitment",
    
    inviteId: "445e0332-4efb-4810-abe1-e3718d83f7a9"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Hencmoss Concepts - Our client, a nationally acclaimed Health Organisation, is currently recruiting suitably qualified candidates to fill the position below:\r\n\r\nJob Title: Business Development Officer/ Marketer\r\n\r\nLocation: Nationwide\r\n\r\nJob Description/Requirement\r\nWe are in need to employ Business Development Officer/Marketers.\r\nAbility to work in most parts of the country is a plus.\r\nBenefit\r\nWork conditions are very favourable.\r\n\r\nApplication Closing Date\r\n19th March, 2018.\r\n\r\nHow to Apply\r\nInterested and qualified candidates should send their Cover Letter and detailed CV's to: recruitment@hencmoss.com",
    createdAt: "2018-03-18 08:02:59",
    updatedAt: "2018-03-18 08:02:59",
    title:
      "Business Development Officer/ Marketer at Hencmoss Concepts - Nationwide",
    
    inviteId: "615a7cd1-71ac-4345-87a2-05e3def95b4f"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Giant Beverages Limited is a new manufacturing company engaged in the production of natural and healthy non-alcoholic beverages. As a corporate entity, we produce products of the highest quality and are committed to delivering quality service to our customers. Giant Beverages drinks are produced with the finest natural ingredients to meet high-quality standards.\r\n\r\nRecruiting to fill the position of\r\n\r\nGraphic/Web Designer\r\n\r\nRequirement:\r\n\r\nDegree in Graphic Designs or equivalent experience\r\nMinimum 3 years web server administration experience\r\nKnowledge of Amazon Web Services, Rack Space, Linode, and/or similar cloud hosted environments desired.\r\nStrong DNS management and automation background\r\nClear communication and documentation of projects and procedures\r\nStrong problem-solving skill\r\nWorking knowledge of Adobe Creative Suite, especially, Photoshop, Illustrator, InDesign, Dreamweaver and Flash among others\r\nPassionate about the internet. Digital Marketing Content Marketing, Online Advertising, Social Media and Mobile.\r\nApplication Closing Date \r\n20th March, 2018.\r\n\r\nHow to Apply\r\n\r\nsend application Letter and CV’s to: admin@giantbeverages.com",
    createdAt: "2018-03-19 00:12:52",
    updatedAt: "2018-03-19 00:19:19",
    title: "Giant Beverages Limited Job Alert / Web Design Job",
    
    inviteId: "5de44dc5-c6a2-4df0-aacb-e02ac6d3ba09"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Job requirements: Implement approved preventive and predictive maintenance plans and programs to ensure the availability, reliability and efficiency of equipment.Plan and coordinate production engineering processes on daily basis to produce high quality  products and reduce wastage.Applying proper supervisory skills team management in achieving all deliverableProvide training and guidance to team members to accomplish productions goals.Assist with planning and implementing plant improvement and expansionPrepare report, analyze and make recommendation for improving plant operations and solving maintenance-related problemsContribute to the development of maintenance policies, strategies, plans and programsEstablish and maintain a computerized maintenance management system (CMMS) for tracking words orders, spare parts and maintenance history of plant equipment.\r\n\r\nQualification/Experience\r\n\r\nCompleted a fully indentured apprenticeship with a mechanical/ electrical/ electronic discipline.Understanding of Advanced Product Quality Planning (APQP), lean manufacturingExperience of managing profit and Loss (P&L) responsibilities for maintenanceUnderstanding of manufacturing and procurement/supply chainRelevant Manufacturing/Engineering degree is preferred, or HND5+ years experience in maintenance management roleStrong knowledge of engineering concepts, including electrical, hydraulic and mechanical systemsAbility to interpret blueprints, specifications and schematicsExtensive plant level experience with significant proven man management experienceEnvironmental/Industrial analysis.\r\n\r\nAll qualified candidates should send their CV’s and Cover Letter (with the relevant position included in the subject line of your email) to: NASCONcareers@dangote.com",
    createdAt: "2018-03-19 16:35:09",
    updatedAt: "2018-03-19 16:35:09",
    title: "Maintenance Manager  - NASCON Allied Industries Plc",
    
    inviteId: "b5178258-0491-40ce-8aa3-bae0007a361d"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Based on referral,your Interview with BSGM Directors is on Tues 20/3/18 by 9am @ 4 Ogungbeye close,Agidingbi,1st Gate Bustop,Ikeja\r\nEnq: 08120296353\r\n10019",
    createdAt: "2018-03-19 21:08:14",
    updatedAt: "2018-03-19 21:08:14",
    title:
      "Real or Fake? Based on referral,your Interview with BSGM Directors",
    
    inviteId: "44ebb9be-e579-4b8e-8b7b-316413445f0b"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are invited for Test & Interview at the SOL Apapa Office Ground floor, IAL Place, 16 Burma road, Apapa, Lagos, tomorrow Tuesday 20th March, 2018 by 09:00am. Come with your CV, Credentials & Birth certificate. Be formally dressed. ENQUIRIES: 08082448664, 08072190630.",
    createdAt: "2018-03-19 22:19:16",
    updatedAt: "2018-03-19 22:19:16",
    title: "Just got this now, Real or Fake?",
    
    inviteId: "b5191308-0cce-43fc-9889-0cf923efa1e1"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Pls guys.... Anyone in here who has heard anything of B. S. G. M... I just received a message from them saying I was referred to them.... And I don't knw anything Abt them....",
    createdAt: "2018-03-19 22:20:21",
    updatedAt: "2018-03-19 22:20:21",
    title: "Anyone in here who has heard anything of B. S. G. M?",
    
    inviteId: "48f74ffe-8666-424b-ad46-7588d209fb01"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "The Dangote Group is a diversified and fully integrated conglomerate with interests across a range of sectors in Nigeria and Africa. Current interests include Cement, Sugar, Flour, Salt, Pasta, Beverages, Noodles, Poly Products, Transportation and real estate with new initiatives in the Oil and Gas, Telecommunication, Fertilizer and Steel sector of the economy.\r\n\r\nWe are recruiting to fill the following positions in Lagos State:\r\n\r\nJob Position: Production Supervisor\r\nJob Location: Lagos\r\n\r\nJob Responsibilities\r\nOrganize work flow by assigning responsibilities and preparing schedules\r\nSubmit reports on performance and progress\r\nMaintains safe and clean work environment by educating and directing personnel on the use of all control points,equipment,and resources;maintaining compliance with established policies and procedures.\r\nProvide manufacturing information by compiling,initiating,sorting,and analyzing production performance records and data;answering questions and responding to requests\r\nCreate and revise systems and procedures by analyzing operating practices,record­keeping systems,forms of control,and budgetary and personnel requirements\r\nMaintain quality service by establishing and enforcing organization standards.\r\nEnsures operation of equipment by calling for repairs;evaluating new equipment and techniques\r\nSet daily/weekly/monthly objectives and communicate them to employees\r\nQualification/Experience\r\n\r\n5+years’ experience in manufacturing operations\r\n2+years’ experience in a supervisory capacity\r\nBachelor’s degree required\r\nWorking knowledge of OSHA and EPA regulations\r\nCompetence Requirements:\r\n\r\nExcellent reasoning and decision making ability\r\nReport writing and record keeping\r\nAnalysis and interpretation of result\r\nManagerial and leadership skills\r\nExcellent interpersonal and communication skills(oral and written)\r\nStrong understanding of core demand management process and understanding of forecasting heuristics.\r\n\r\nMethod of Application\r\nAll qualified candidates should send their CV’s and Cover Letter (with the relevant position included in the subject line of your email) to: NASCONcareers@dangote.com",
    createdAt: "2018-03-20 00:43:38",
    updatedAt: "2018-03-20 00:43:38",
    title: "Production Supervisor - Dangote Group",
    
    inviteId: "127b798f-066e-427e-8b2b-8e7171d57764"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Based on recommendation, PMC Nig Ltd invites you to an interview/ briefing for an Opportunity on 21/03/2018 @ 108 Aba Rd opp Seabia hotels Umuahia, Abia State. Time:8:30am. PMC/dtm/001\r\nHRM: 07030138137.",
    createdAt: "2018-03-20 00:45:56",
    updatedAt: "2018-03-20 00:45:56",
    title: "Abeg wetin this one be!! Got this msg on my fone",
    
    inviteId: "e15929e7-d348-4290-822d-2485aff9e172"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Job Position: Electrical Mechanical Technician\r\nLocation: Lagos\r\nOrganization: NASCON Allied Industries Plc\r\nEmployment Type: Full-time\r\n\r\nJob Responsibilities\r\n\r\nInstall electric parts and hardware using appropriate tools equipment such as soldering irons Align and fit assemblies using hand and power tools\r\nFabricate replacements (temporarily where possible) for unavailable parts until they can be procured from the vendor\r\nDiagnose issues with complex control systems and employ tactics to resolve them electively\r\nInstall, maintain and repair a variety of electrical and mechanical equipment\r\nPerform regular and preventative maintenance on installed electric and mechanical equipment\r\nTroubleshoot complex problems associated with electrical and mechanical machinery by following precedential steps and corrective actions\r\nTrain others to install, use, or maintain electrical and mechanical systems\r\nExecute functions requiring a thorough knowledge of electrical/electronic and mechanical theories and principles.\r\nQualification/Experience\r\n\r\nDegree, NABTEB Electrical Mechanical certification or equivalent from an approved institution\r\n3 years previous experience in a maintenance technician role\r\nCompetence Requirements:\r\n\r\nPlanning and Organizing skills\r\nGood oral and written communication skills\r\nExperience and ability to work in a fast-paced manufacturing environment\r\nA thorough knowledge of electrical/electronic components and equipment including the use of special instruments for diagnostic purposes\r\nKnowledge and experience regarding industry HSE standards.\r\n\r\nMethod of Application\r\nAll qualified candidates should send their CV’s and Cover Letter (with the relevant position included in the subject line of your email) to: NASCONcareers@dangote.com",
    createdAt: "2018-03-20 00:47:26",
    updatedAt: "2018-03-20 00:47:26",
    title:
      "Electrical Mechanical Technician - NASCON Allied Industries Plc",
    
    inviteId: "a360fd50-8f5f-4b65-bda7-d1ae9266740a"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Human Edge Limited  a leading provider of maritime services, is currently recruiting suitably qualified candidates to fill the position of account Officer.\r\nHow to Apply\r\n\r\nInterested and qualified candidates should send their résumé to: recruitment@heworld.com quoting the  job reference as the subject of the mail.",
    createdAt: "2018-03-20 06:16:36",
    updatedAt: "2018-03-20 06:16:36",
    title: "Account Officer (Administration) at Human Edge Limited",
    
    inviteId: "98cd4fad-fa3d-4617-9d50-d4c21e87a8fc"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hi Davis,\r\nThank you for applying to our organization through Iminds media. \r\nYour application for the position applied for stood out to us and we would like to invite you for an interview at our office.\r\nYou will meet with our Head of HR, Ms Nzekwue. \r\nThe interview will last about 2 Hours. \r\nYou’ll have the chance to discuss the position’s responsibilities and learn more about our company.\r\nWe would like to conduct your interview on Thursday 22/03/2018 by 9.30am. \r\n\r\nOur office is located at Plot 5 Adeniyi Jones Adjacent Mikano Bus stop. University press building. Ikeja Lagos. \r\nPlease bring your CV and your credentials,\r\nLooking forward to hearing from you.",
    createdAt: "2018-03-20 15:57:38",
    updatedAt: "2018-03-20 15:57:38",
    title: "Hello guys please I got this in my e-mail. Are they genuine",
    
    inviteId: "331f0025-f151-49a7-8a49-f4355514c5a4"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hello guys, \r\n\r\nangryBelieve me,  angry when I say this....  angry angry  angry\r\n\r\nGrandlead heritage is a spin off of practical bullshtako (bullshit). Imagine them starting off with questions of technical knowledge, customer service, logistics and customer management, then you see people bowing thinking hard to find answers to those questions.\r\n\r\nPens up, Up next, video presentations of fashola and few entrepreneurs. As that was not enough...then a dude with a big attitude waltz in after being invited on stage. \r\n\r\nThis gentleman started and few people stood up and waltz out like a boss they are. And so, the pep talk started, the gentleman made me remember all my experience with GNLD folks, wasting my tfare and time. \r\n\r\nI remained, smiled at the individual, then he started bragging about his qualifications and all. His sugar coated mouth began, explaining his backup plan, contingency plan and retirement plans. \r\n\r\nHe said and I quote \"I want to retire by age 30\" having a landed property in ikorodu and begin tenancy.. I began to wonder how does this information help us discern the job specification. \r\n\r\nI was invited for graduate trainee position, and others were invited for other positions by different referrals. \r\n\r\nI left, then a friend on nairaland whom I met there prior to our communications and meet up plans in the previous day, told me they requested for money, which became clear that this individuals are looking for loyal, daft, jobfull people to feel their pockets for training kits and begin marketing jobs. \r\n\r\nSo tell me isn't this GNLD!!!!!!!or what ever they discribe themselves as. \r\n\r\nSo I drew my conclusion as tfare wasted, time wasted = non-fruitful endeavor = useless COY. Ignore their SMS or emails and search for other jobs. They even have a shitty website with no specificity as they also post jobs of other firms. \r\n\r\n#DECLINE EVERY INVITATION FROM GRANDLEAD HERITAGE as it isn't a legitimate job placement. \r\n\r\nThank you for reading.\r\n\r\n\r\nhttp://www.nairaland.com/3668579/grand-lead-heritage/2",
    createdAt: "2018-03-20 16:02:05",
    updatedAt: "2018-03-20 16:03:13",
    title:
      "Be warned: Grandlead heritage is a spin off of practical bullshtako (bullshit)",
    
    inviteId: "d1d41131-0301-4215-a0fd-33da599b1e46"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been selected for an Interview on Monday 26th March, 2018 @ Livingstonewall Invest. Ltd.\r\n\r\n44, Opebi Rd. Ikeja. For inquiry call:08188885124, 09064099484",
    createdAt: "2018-03-20 16:38:25",
    updatedAt: "2018-03-20 16:38:25",
    title: "Pls house how authentic is this",
    
    inviteId: "edda1090-0789-4f98-bba7-4de8bfc25adb"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'Please who knows about this company, is it real??\r\n\r\n\r\n"Sequel to your application, you are hereby invited for an interview with Forza Nig. Ltd, Block 15, Suite 9, Oodua Int. Mkt., Ojota on 28/2/2018 at 2pm prompt".',
    createdAt: "2018-03-21 00:44:38",
    updatedAt: "2018-03-21 00:44:38",
    title: "Is this interview real?",
    
    inviteId: "a1c83f34-05b5-4436-bee2-6e5088c9e156"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This company has been associated with the extortion of funds from people. They claim to carry out several tests for which payment must be made. \r\nAlso, no legitimate website has been found for this organization. \r\nbeware people!\r\n\r\n\r\n\"Dear Intending Trainee,\r\n\r\n\r\nWith reference to your application about the Oil & Gas\r\nTraining/Employment Opportunity.\r\nCurrently, there is a new batch of lucrative oil jobs opportunities\r\navailable in the Petroleum Industry.\r\n\r\nBased on the exploration contract to recruit new employees to undergo\r\na short training course that will enable trainees work in the Oil &\r\nGas Fields.\r\nThere will be a two stage progressive method to evaluate trainees,to\r\nensure that they fit into the Oilfield Training and Employment\r\nProgram.\r\n\r\nThere will be an online test on the 29th of September 2012,by 5pm\r\nprompt.\r\n\r\nAll Intending trainees are expected to apply for,\"A Petroleum e-book\".\r\nApplication for this Petroleum e-book starts on the 24th of September\r\n2012 and closes on the 28th of September 2012 for the issuance of\r\nthis Petroleum e-book.\r\nQuestions to be asked during the online test will come strictly\r\nfrom this Petroleum e-book. All Intending trainees must obtain a\r\ncopy to enable intending trainees prepare for the online test on the\r\n29th of September 2012.\r\n\r\n\r\n\r\nHowever,the cost for the Petroleum e-book is N5,000. The Petroleum\r\ne-book comes with a registration number and a copyright trademark.\r\nThus to place order for the Petroleum e-book,you are expected to make\r\ndeposit of the sum of N5,000, to our company's bank details below;\r\n\r\n\r\nAccount Name: Globaldrill Bay Oil & Gas Limited\r\nBank: Diamond Bank PLC\r\nAccount Number:0026913945\r\n\r\n\r\nAfter payment,you should send Scan proof of payment to our email below.\r\nWe will then contact you immediately via email with your registration\r\ndetails and your Petroleum e-book,so that you can download it and\r\nprint out for easy study.\r\nIt is very important that you obtain your Petroleum e-book on time to\r\nenable you to start preparing for the online test that will hold\r\non the 29th of September 2012,by 5pm prompt.\r\n\r\nThe online test will be a qualifier to undertake the\r\nAdvance Oil Drilling Training that will lead to Employment\r\nin the Oil & Gas industry.\r\n\r\nThe training course outline will cover areas such as;\r\n*Introduction to Offshore Drilling\r\n*BDC-Basic Drilling, Completion & Workover Operations\r\n*EPB-Exploration and Production Process Basics\r\n*Health, Safety & Environment\r\n\r\nThe above courses provides a technical overview of the phases,\r\noperations, and terminology used in Exploration and Production\r\nProcess.\r\n\r\nAll applicants must be above 18 years of age and medically fit to\r\nundergo the Oil & Gas Practical Training. The training is open to both\r\nmale & female trainees.\r\n\r\nFor Official inquiries,visiting days and hours to the company's\r\nLagos liaison office is on Monday's,Wednesday's and Friday's;\r\nbetween the hours of 10am to 11am.\r\n\r\n\r\nSigned,\r\n\r\nManagement\r\nGlobaldrill Bay Oil & Gas LTD.\r\n#17 Karimu st,off Cole st,Lagos State.\r\nTel: 08057657399,08073849355\r\nEmail: globaldrillbay@gmail.com\r\nWeb: www.globaldrillbayoil.com\"",
    createdAt: "2018-03-21 01:01:32",
    updatedAt: "2018-03-21 01:01:32",
    title: "Globaldrill Bay Oil & Gas Limited appears to be scam",
    
    inviteId: "d64defca-880f-4d40-8484-05b698850af1"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Virtual Human Resources Limited appears to be a registerd company with Public Corporate Affairs Commission, but it has been reported to be GNLD. You'd be required to pay a fee and then you're recruited to join their sales force, then you start marketing products.",
    createdAt: "2018-03-21 01:25:25",
    updatedAt: "2018-03-21 01:25:25",
    title: "Is Virtual Human Resources Limited a real company?",
    
    inviteId: "06b576b5-26b5-4af6-8d03-5a520661240a"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Email: career.schleez@gmail.com \r\nAddress: No 49, Olowu Street, Off Mobolaji Banks Anthony Way, Ikeja, Lagos state.\r\n\r\nThey deal on multilevel marketing of drugs, Although they claim to have positions for employment. When unsuspecting job seekers attend interviews, they collect money from them and lure them to purchase products, hawk and refer more people.",
    createdAt: "2018-03-21 06:44:47",
    updatedAt: "2018-03-21 06:44:47",
    title: 'Got a message form "Schleez Nigeria Limited"? **Beware!**',
    
    inviteId: "b58a082f-b528-41dd-afca-e21e4d19fb71"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Email: hr@ssacf.org \r\nAddress: Sub Saharan Africa Climate Fund (SSACF), 5-16 Dering Street, Mayfair, London, W1S 5AR\r\n\r\nThey will demand  for  Psychometric testing - International Certified Psychometric and Situational Judgement Test (CPSJT) before you can be employed, after which they will refer you to other fake agencies who  will demand between $90 USD and $150 USD for online tests. and will usually ask you to pay through western Union etc.",
    createdAt: "2018-03-21 06:52:27",
    updatedAt: "2018-03-21 06:52:27",
    title: "Sub Saharan Africa Climate Fund --- SCAM!",
    
    inviteId: "7fd66747-a953-4827-aacc-edeaa1785fc2"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "This coporation's name doesn't come up on a search on the C.A.C website. \r\nThey claim to be a consulting firm with experience in healthcare management and human resource management but they're a multi level marketing outfit and will try to coax you into supplying products with promises of huge financial rewards",
    createdAt: "2018-03-21 06:59:26",
    updatedAt: "2018-03-21 06:59:26",
    title: "O'neal Incorporated - Beware!",
    
    inviteId: "68789163-72f9-4606-9840-907ca2fac0c9"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      'The C.A.C has no records of this entity. They potray themselves to be a development firm based in Washington D.C who provide specialized technical assistance. \r\nThe real organisation is "Clinton Foundation" with web address.(https://www.clintonfoundation.org/)',
    createdAt: "2018-03-21 07:05:47",
    updatedAt: "2018-03-21 07:05:47",
    title: 'Recieved a message from "Clinton Fund"?',
    
    inviteId: "059c48e0-d739-42fb-95d5-10c8bbf69df4"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "The United States of America announced the creation of more than 2000 jobs in America for worldwide countries. Registration from this website, we wish everyone success and achieve the dream of migration the regestration avaliable from here offer valid until 30/04/2018 ",
    createdAt: "2018-03-21 19:51:47",
    updatedAt: "2018-03-21 19:51:47",
    title: "The United States of America is not recruiting!",
    
    inviteId: "b3c62003-6caa-4e9a-bc52-ec5bd740122b"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Based on an online recomendation, you have been selected among a few candidates to meet with the HR Director of BGM Ltd on Thursday 22nd March 2018; time:9am.\r\nFor enquiries: 080-8837-5009\r\nBest Regards;\r\nHR Dep>",
    createdAt: "2018-03-21 20:08:17",
    updatedAt: "2018-03-21 20:08:17",
    title: "Dis one weak me oh, no address sef. Pls how true",
    
    inviteId: "d888edb6-6b9e-4bb9-872d-3436657aa5cc"
  },
  {
    userId: "14b6ab0e-d591-4987-9751-ba37e12a42e3",
    body:
      "After a careful evaluation of your online application and a great recommendation from our Human Resource Database.We are impressed with your qualifications which makes you an excellent candidate for this role, we are therefore  pleased to inform you that you have been Shortlisted  for an interview/Assessment at our office to tell you more about this role, our company's mode of operation and of course, get to know you better. \r\n\r\nOur organization is a foremost provider of enhanced consulting ,human resource and business development services solutions. \r\n\r\nDate:  Thursday 22nd March 2018\r\n\r\nTime: 8 AM \r\n\r\nAddress: No 4, Ogungbeye Estate, Off Amaraolu  Way, Agidingbi Opposite  Mega Chicken Bustop, 1st Gate,Ikeja, Lagos. \r\n\r\nKindly come along with your updated C.V and acknowledge this mail with reply . \r\n\r\nFor more Enquiries: Call  07088117459\r\n\r\nWe look forward to seeing you. \r\n\r\nBest regards, \r\n\r\nDAYO\r\n\r\nHR ADMINISTRATOR \r\n\r\nBGM CONSULTING LTD",
    createdAt: "2018-03-21 21:34:29",
    updatedAt: "2018-03-21 21:34:29",
    title: "Got a mail and text message,how real is this please",
    
    inviteId: "efbd32b8-80ec-4329-bc66-7625e204ceb2"
  },
  {
    userId: "289ef267-021e-4b02-963e-eac6bc039575",
    body:
      "We are in receipt of your application for the advertised position.\r\n\r\nCan you please join us for an interview on Thursday, 22nd March, 2018 by 9am at the address below?\r\n\r\n3rd Floor, King's Deck. Chevron Alternative Road.\r\nOff Chevron Drive, Lekki.\r\nLagos.\r\n\r\nKindly confirm to us by email and contact the Employer on 090******  if you can make it.\r\n\r\nAlso come with copies of your CV and relevant credentials.\r\n\r\nIs it legit?",
    createdAt: "2018-03-21 22:21:52",
    updatedAt: "2018-03-21 22:21:52",
    title: "got this invite",
    
    inviteId: "b8ddb79e-c3e7-482b-82fb-e67792efcc2e"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Email: hr.recruitment044@outlook.com \r\n\r\nAddress: Starlink house, suit 202, 8/10 Salamotu Eniola strt, Ilasa Lagos\r\n\r\nThey are a GNLD company (Multilevel marketing). They claim to be a Nigerian firm with offices in Lagos who offer services, business and management consulting services to private and public companies.\r\n\r\nA search on the C.A.C website doesn't yeild any result.",
    createdAt: "2018-03-22 00:33:58",
    updatedAt: "2018-03-22 00:33:58",
    title: "Hyena Ltd (MLM)",
    
    inviteId: "d9ca40ec-cc09-4f02-abde-c170cdf028bb"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Email: recruitment@nsmiglobal.com\r\n\r\nAddress: 1-6 Alhaji Lateef Sulaimon Street (Behind AP Filling Station) Opposite Owode-Onirin Market Kosofe LGA Lagos State\r\n\r\nNSMI Global Concept fronts to be an international companywho is into farm produce etc, However they are a multilevel marketing company (MLM) who lure unsuspecting jobseekers into parting with their money and joining them in getting more people to register.",
    createdAt: "2018-03-22 00:42:24",
    updatedAt: "2018-03-22 00:42:24",
    title: "NSMI Global Concept **Beware!**",
    
    inviteId: "f25820b2-135b-4f6e-88b0-fe18fd37a93b"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Phone no: 07031666139 \r\n\r\nAddress: 6,Akinremi str., Anifowose, Ikeja\r\n\r\nZeolite Plus claims to be a multi-national company who majors in Human Resources Development, Business Management, Branding/Packaging, Sales &Marketing etc. But on the contrary they recruit mainly for GNLD, MLM outfits or individuals.",
    createdAt: "2018-03-22 02:48:35",
    updatedAt: "2018-03-22 02:48:35",
    title: "Zeolite Plus **Fake Recruiter**",
    
    inviteId: "5c6727ce-1a11-42ce-9b0b-4fbf29f7faca"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Email: info.marigoldkitchen@gmail.com\r\n\r\nAddress: 73, Akerele Street Surulere Lagos\r\n\r\nMarigold Mobile Kitchens claims to be a privately owned and operated corporation established in 2010 to provide mobile food service and logistics equipment in Nigeria. William Consult who recruits for them states the company's headquarters is in Nasarawa and that they serve by providing temporary food service solutions with their customers from all around the country. Marigold Mobile Kitchens doesn't exist on the CAC site, The real company is Marigold Kitchens based in Philadelphia, PA 19104, United States",
    createdAt: "2018-03-22 03:34:28",
    updatedAt: "2018-03-22 03:34:28",
    title: "Marigold Mobile Kitchens",
    
    inviteId: "7eabe425-7028-4160-90dd-181f9467c399"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Email: admin@pmicoins.com\r\n\r\nAddress: 269a - 279 Barking Road Plaistow, London E13 8EQ UK\r\n\r\nPMIN Limited claim to have a product called PMICollectibles set to connect Africa to the world by facilitating the distribution of wide varieties of modern precious coins through Direct Sales and that the PMICoins will be distributed by individuals who chose to trade with the company as independent dealers in developing a powerful network that makes it easier for many to benefit. Each collectible coin bought will be helping in creating business for the nation through our diverse social action projects. They will ask you to pay as they are out to defraud unsuspecting members of the public. Beware.\r\n\r\nA search on the CAC website show's PRECIOUS METAL INT'L NETWORK LIMITED's address is:\r\n\r\nBLOCK `11 FLAT 4, LSDPC ESTATE, ABULENLA, EBUTEMETTA, OYINGBO LAGOS.\r\n\r\nno websites.",
    createdAt: "2018-03-22 03:53:46",
    updatedAt: "2018-03-22 03:53:46",
    title: "Precious Metal International Network (PMIN) Limited **SCAM**",
    
    inviteId: "59e5cf84-0d91-414d-8be0-7c3ed588a431"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'Like many other "companies", Crystalite Care Ventures located along  Ibadan Road, Ibadan South-West, Oyo, Nigeria. Claim to be a company in collaboration with world health organization,ASSAP, and other multi national companies.However, they are into GNLD/ Multilevel marketing looking for candidates to swindle to sell drugs.',
    createdAt: "2018-03-22 04:11:38",
    updatedAt: "2018-03-22 04:14:10",
    title: "Is Crystalite Care Ventures legit?",
    
    inviteId: "b9727a71-7fb6-4a90-af30-4403ec75edb3"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They claim to be a consulting firm that offer high quality services to provide the best outcomes for clients with a different approach. They are however a Fake recruitment agency.",
    createdAt: "2018-03-22 04:18:41",
    updatedAt: "2018-03-22 04:18:41",
    title: "Mahama Business Consult",
    
    inviteId: "efbd0692-936a-4cde-beab-97eb34b9667b"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Pls,4m details wth us-u a invitd4 intervw4 positn of Accnts ofica wth ur cv on thu(22/03/18)by 8am@crystal&diamond,6m/m intl a/port rd-beside Diamnd bnk-mafluku",
    createdAt: "2018-03-22 04:23:05",
    updatedAt: "2018-03-22 04:23:05",
    title:
      "Got this message last night. I don't know how genuine this is. Can someone help me out",
    
    inviteId: "d639c14f-7c1a-4014-9311-c1701cba56c3"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Boss Resources claim to be a multinational Company with substantial investments in Nigeria, South Africa and Ghana. They are into GNLD/ Multilevel marketing looking for candidates to swindle. Don't fall for this.",
    createdAt: "2018-03-22 04:24:57",
    updatedAt: "2018-03-22 04:24:57",
    title: "Is this a fake company? - Boss Resources",
    
    inviteId: "e1775060-143d-44f0-bdaa-0626b7ab004a"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They are into GNLD/ Multilevel marketing looking for candidates to swindle to sell drugs. Don't be deceived!!!",
    createdAt: "2018-03-22 04:58:45",
    updatedAt: "2018-03-22 04:58:45",
    title: "Medpro Global Resources is GNLD",
    
    inviteId: "d61abfa4-6783-4930-a11f-bc8d01ef79a3"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "This company is not registered with the CAC, and there are reports that they are scam. They claim to be into importation and exportation of cosmetics.",
    createdAt: "2018-03-22 06:33:07",
    updatedAt: "2018-03-22 06:33:07",
    title: "I received an invitation from Grace Land Global Resources.",
    
    inviteId: "6cd53e28-b09d-46ae-b2ef-b309d1a8c050"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Candidate, \r\n\r\n \r\n\r\nCongratulations for being selected for an interview with us in American international insurance company (Aiico).\r\n\r\n \r\n\r\nVENUE- 203/205, Oshodi-Apapa Expressway, Iyana Isolo, Lagos (Aiico/union bank building) 2nd floor.\r\n\r\n\r\nDATE - Tomorrow Friday 23rd March 2018\r\n\r\n\r\n\r\nTime - 8am prompt.\r\n\r\n\r\n\r\nKindly note that you are expected to come with your cv and one passport.you must however be officially dressed.",
    createdAt: "2018-03-22 22:49:47",
    updatedAt: "2018-03-22 22:49:47",
    title: "Anyone had experience with this coy? Please kindly help.",
    
    inviteId: "44fa7bdd-b687-4cb0-8034-924c7b513b8c"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Contrary to the name, Esther Breakthrough (EBT), would  give you everything else but a 'breakthrough'. They used to be somehwere around Ojuelegba in surulere. You will be made to pay a sum only to be given fake employment letter. Beware!!",
    createdAt: "2018-03-23 04:49:19",
    updatedAt: "2018-03-23 04:49:19",
    title: "EBT is fake!!!",
    
    inviteId: "dc111406-6e8f-4e10-b0db-9271d2b33921"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Swissgarde Distributor is a marketing firm that is GNLD, if you're not interested in going around marketing products just steer clear from this coast, don't waste your time.",
    createdAt: "2018-03-23 04:53:03",
    updatedAt: "2018-03-23 04:53:03",
    title: "Swissgarde Distributor is GNLD",
    
    inviteId: "580a0733-c0db-4028-838f-3f6445320ae1"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Virginland Careers seem to be another fake recruitment agency that claim to recruit for non-existent companies. Any mail containing interview details should be disregarded.",
    createdAt: "2018-03-23 06:19:45",
    updatedAt: "2018-03-23 06:19:45",
    title: "Another fake company?",
    
    inviteId: "4d831be4-ca9f-4c5d-a7dc-3f690e15c9c9"
  },
  {
    userId: "c3c25bae-40dc-4728-b9c3-53610fb7742b",
    body:
      "Following your application for Female customer care/experience centre job role, \r\nWe invite you for aptitude test/interview on Monday 26th March, 2018.\r\nTime: 8am\r\nVenue: JKK house. 229, (btw anthony & ilupeju b/stop) Ikorodu Rd,Lagos.\r\nPlease come with a copy of your CV, passport photo, original and a copies of your credentials (NYSC compulsory)\r\nN.B: Pls do not come if you have attended this same excercise within the last 6 months.\r\nGLOBACOM HR.",
    createdAt: "2018-03-23 15:29:10",
    updatedAt: "2018-03-23 15:29:10",
    title: "is this a real job",
    
    inviteId: "f683f636-59cd-42e8-adb7-c7340f7f982f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You've been invited for an interview at Success Drives Ltd,  18, Afolabi Aina str, Allen Avenue, Ikeja Lagos  on Friday, 23rd  March, 12pm. Come with your CV.",
    createdAt: "2018-03-23 17:36:54",
    updatedAt: "2018-03-23 17:36:54",
    title: "Is dis real",
    
    inviteId: "66c280c1-44d3-44cd-a8fa-46e6fd432645"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Candidate,\r\n\r\nThank you for expressing interest in a position with our Organization.\r\nWe have received your information and curriculum vitae, and you have\r\nbeen slated for an Interview by 10.00 a.m. Saturday March 24th,\r\n2018.\r\n\r\nPlease come along with photocopies of your credentials, 2\r\npassport photographs and a hand written Application Letter.\r\n\r\nThank you.\r\n\r\nDahra A. H. Jnr.\r\nICT and Business Development Officer,\r\nFor:\r\nINTER-ARC CONSULTANTS LTD.,\r\n90 AKPAKPAVA RD, OPP STANBIC IBTC,\r\nBESIDE ZENITH BANK, BENIN CITY, EDO STATE.",
    createdAt: "2018-03-23 17:47:32",
    updatedAt: "2018-03-23 17:47:32",
    title: "Pls how tru is did invite landers? Help oooo",
    
    inviteId: "0d56874b-6dfc-4177-89fb-6fa767ef386b"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "They claim to a business development consulting firm. Their mission is to be the best customer service provider in the world, while unvailing great mystery behind man’s inability to live optimally in the area of wealth and health. They are into GNLD and MLM marketing of of drugs and health products. Beware, they will ask for money to introduce you into their Multi level marketing scheme. Steer clear!!",
    createdAt: "2018-03-24 06:56:39",
    updatedAt: "2018-03-24 06:56:39",
    title: "Ingnitlyte Limited Company is up to no good.",
    
    inviteId: "4ce98cba-c36b-4bf9-9aa8-739fd8924769"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'If anyone gets invites from manteledox logistics Ltd. which States as follows;\r\n"MANTLEDOX LOGISTICS LTD INVITES YOU FOR A JOB BRIEFING/ TEST BY ..." Don\'t waste your time, they are into GNLD',
    createdAt: "2018-03-24 07:00:00",
    updatedAt: "2018-03-24 07:06:50",
    title: "Definitely scam!!!",
    
    inviteId: "adc5cfa3-55f9-49d4-bd7e-e88d673e355d"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "Is MPG Resources legit?",
    createdAt: "2018-03-24 07:02:09",
    updatedAt: "2018-03-24 07:10:09",
    title: "Scam alert!!!",
    
    inviteId: "29fa15bb-9699-4af2-afc5-b6c7d7cd0645"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Following your application for male customer care/experience centre job role, \r\nWe invite you for aptitude test/interview on Monday 26th March, 2018.\r\nTime: 8am\r\nVenue: JKK house. 229, (btw anthony & ilupeju b/stop) Ikorodu Rd,Lagos.\r\nPlease come with a copy of your CV, passport photo, original and a copies of your credentials (NYSC compulsory)\r\nN.B: Pls do not come if you have attended this same excercise within the last 6 months.\r\nGLOBACOM HR.",
    createdAt: "2018-03-25 00:22:03",
    updatedAt: "2018-03-25 00:22:03",
    title: "how true is this? has anyone bn called?",
    
    inviteId: "a856aad1-ef1d-407f-92c5-e84d473ce6a8"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Following your application for Female customer care role, \r\nWe invite you for aptitude test/interview on Monday 26th March, 2018.\r\nTime: 8am\r\nVenue: Faculty of Tech CBT centre U.I, Ibadan\r\nPlease come with a copy of your CV, passport photo, original and a copies of your credentials (NYSC compulsory)\r\nN.B: Pls do not come if you have attended this same excercise within the last 6 months.GLOBACOM HR.",
    createdAt: "2018-03-25 00:22:48",
    updatedAt: "2018-03-25 00:22:48",
    title: "How true is this please?",
    
    inviteId: "07764258-3a82-490a-9617-adc37813fc66"
  },
  {
    userId: "1db6dd8b-bcf8-4813-ab78-61bf25a0deb6",
    body:
      "Sequel to the receipt of your Resume, the Board of TGN requests your presence to be interviewed based on your qualification.\r\n\r\nSCHEDULED DATE:\r\nMonday, 26th March 2018\r\n\r\nTIME: 9.00Hours in the Morning.\r\n\r\nOFFICE ADDRESS: Ground Floor, 2, Akin Osiyemi Str. Opp. Sterling Bank Bus-stop, Allen Avenue, Ikeja, Lagos State.\r\n\r\nREQUIREMENTS;\r\n-Hard copy/Print-out of this Email Notification.\r\n-Hard copy of your Resume/Curriculum Vitae.\r\n-Two (2) Passport Photographs.\r\n\r\nDress Corporately and be sure to come early as lateness will NOT be entertained.\r\n\r\nOPTIONAL\r\n-A regulatory I.D Card i.e. Driver's License, National I.D card, Voter's Card, INT'L Passport.\r\n\r\nBest of Luck, HR DEPT.\r\n\r\nDIRECTION:\r\nFROM OJUELEGBA/OSHODI, LAGOS TAKE A COMMERCIAL BUS TO ALLEN/ALAUSA/SHOPRITE, ALIGHT AT ALLEN AVENUE, STERLING BANK BUS-STOP.",
    createdAt: "2018-03-25 23:02:58",
    updatedAt: "2018-03-25 23:02:58",
    title: "is this real?",
    
    inviteId: "d4681585-65cd-443d-a589-26543e0cc7e5"
  },
  {
    userId: "1db6dd8b-bcf8-4813-ab78-61bf25a0deb6",
    body:
      "Does anyone have a reliable  information about this company: GMIS ?.. I am invited for an assessment section on Monday at no,8 Thomas salako ,Ogba bus stop,Ikeja Lagos.",
    createdAt: "2018-03-25 23:04:41",
    updatedAt: "2018-03-25 23:04:41",
    title: "is this real?",
    
    inviteId: "fd44cf8f-b527-4e36-a587-4d6cf07c77eb"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Sequel to the receipt of your Resume, the Board of TGN requests your presence to be interviewed based on your qualification.\r\n\r\nSCHEDULED DATE:\r\nMonday, 26th March 2018\r\n\r\nTIME: 9.00Hours in the Morning.\r\n\r\nOFFICE ADDRESS: Ground Floor, 2, Akin Osiyemi Str. Opp. Sterling Bank Bus-stop, Allen Avenue, Ikeja, Lagos State.\r\n\r\nREQUIREMENTS;\r\n-Hard copy/Print-out of this Email Notification.\r\n-Hard copy of your Resume/Curriculum Vitae.\r\n-Two (2) Passport Photographs.\r\n\r\nDress Corporately and be sure to come early as lateness will NOT be entertained.\r\n\r\nOPTIONAL\r\n-A regulatory I.D Card i.e. Driver's License, National I.D card, Voter's Card, INT'L Passport.\r\n\r\nBest of Luck, HR DEPT.\r\n\r\nDIRECTION:\r\nFROM OJUELEGBA/OSHODI, LAGOS TAKE A COMMERCIAL BUS TO ALLEN/ALAUSA/SHOPRITE, ALIGHT AT ALLEN AVENUE, STERLING BANK BUS-STOP.",
    createdAt: "2018-03-26 01:04:18",
    updatedAt: "2018-03-26 01:04:18",
    title: "Is this real please?",
    
    inviteId: "fb33e829-3a02-45d5-9fdc-302e9c75ff50"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Resume approved. ICA shortlisted you for an ASSESSMENT on FRI.23/03/18 by 9am prompt at 98,Palm Avenue,Beside Methodist Church Olorunsogo Mushin Lagos. HR/CEO",
    createdAt: "2018-03-26 01:06:11",
    updatedAt: "2018-03-26 01:06:11",
    title: "Is this MLM?",
    
    inviteId: "fd9eb76f-71db-4f57-8c7b-3345b8c696e2"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      'Please I need your candid opinion about this messages I got from Career jet, as SMS, and as mail early this morning\r\n\r\n"You have been shortlisted for a JOB INTERVIEW on \r\n12/5/17 by 9am,No 2 Akin Osiyemi street,Off Allen \r\nAvenue,opposite Sterling Bank,Ikeja Lagos"\r\n\r\n\r\nI am not sure if it is a scam or not. Please help......',
    createdAt: "2018-03-26 02:10:03",
    updatedAt: "2018-03-26 02:10:03",
    title:
      "Please I need your candid opinion about this messages I got from Career jet, as SMS, and as mail early this morning",
    
    inviteId: "cfbcceb8-dff7-40be-b5ba-821dfd1476c1"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hi guys. Pls can anyone give feedback on this?\r\nI got a mail for an interview just thus evening\r\n\r\nYOU ARE INVITED FOR A JOB INTERVIEW AT GRANDLEAD HERITAGE, at No-5 SURULERE INDUSTRIAL ESTATE, ADENIYI JONES IKEJA, ON TUESDAY 4/7/17 BY 10:00AM.\r\n\r\nPlease be informed that you should come with updated CV, two-passport photograph and a printout of this mail.\r\n\r\nNote: Dress Corporately and be sure to come early as lateness will not be welcomes.\r\n\r\nRegards,\r\nCareer Jet",
    createdAt: "2018-03-26 02:14:18",
    updatedAt: "2018-03-26 02:14:18",
    title: "Hi guys. Pls can anyone give feedback on this?",
    
    inviteId: "4cf11494-294f-4f0d-9026-fc0111081286"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Abeg o, if you got below message, do not even try going there. I'm so angry at myself now that I honored their invite, went under the rain and bit turned out to be rubbish. I mean rubbish. On my way home. Wasted time and t.fare. You are invited for a JOB INTERVIEW on Wednesday 5 July 2017 by 9:00am at No-2 Akin Oshiyemi street,off Allen Avenue,Opposite Sterling Bank Bus-Stop,Ikeja,Lagos.\r\n\r\nPlease be informed that you should come with updated CV,two-passport photograph and a printout of this mail.\r\n\r\nNote: Dress corporately and be sure to come early as lateness will not be welcomed.\r\n\r\nRegards\r\nCareer jet\r\n\r\n\r\n(Credit to Beautyagu)",
    createdAt: "2018-03-26 02:16:25",
    updatedAt: "2018-03-26 02:16:25",
    title: "Career jet Is Scam!!!",
    
    inviteId: "388927ad-964d-41ea-957a-5b0d1f8834e8"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "U are invited for an interview at custodian life. F27, commercial avenue, sabo, Yaba lagos. Dress code official credentials and cv.\r\n\r\nPlease how real is this interview? Thanks",
    createdAt: "2018-03-26 14:21:39",
    updatedAt: "2018-03-26 14:21:39",
    title: "Please how real is this interview?",
    
    inviteId: "2f69d135-2b14-4d62-8ff8-e03f75527bb8"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Strictly by recommendation,PML invites  you for an interview as unit manager on xo xo date at 13 Oladosu Street, Off Toyin Street ,Ikeja...\r\nAux please how true is ds\r\nHop not gold",
    createdAt: "2018-03-26 21:52:50",
    updatedAt: "2018-03-26 21:52:50",
    title: "Please confirm dat for me",
    
    inviteId: "63a19165-d539-4340-a8fe-689744b8731c"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant, Sequel to your application for an employment in our organization. You have been shortlisted for an interview. Address: RCCG OFFICE: Lagos province 28 building, lotto road, beside tree of life estate, redemption camp. Date: Tuesday, 27TH March, 2018. Time: 9:00 AM prompt. Please come along with your Credentials. Dress Corporately. Thank you.",
    createdAt: "2018-03-26 22:49:44",
    updatedAt: "2018-03-26 22:49:44",
    title: "I got dis msg dis morning,hp is real house?",
    
    inviteId: "879c9817-4230-43d5-a6ee-843a30e31a27"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "PML Ltd, an ICT Company INVITES you for an ORAL INTERVIEW tomorrow MON. 11TH DEC. @13 Oladosu, Off Toyin, Ikeja by 9am.(For Enquiry Call- Taiwo: 07064417437)",
    createdAt: "2018-03-26 22:54:25",
    updatedAt: "2018-03-26 22:54:25",
    title: "PML Ltd. fake or real?",
    
    inviteId: "187f568b-5ab9-4177-8e20-3a098e5388ea"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "BGI GROUP NIGERIA LIMITED is a fast-growing business strategy and human capacity development outfit dedicated to providing innovation business solution to her teeming clients and customers.\r\n\r\n\r\nLocation: 4 All Ogungbeye st, off Amara-olu,( first gate bus stop), Agidingbi, Ikeja.",
    createdAt: "2018-03-27 14:36:24",
    updatedAt: "2018-03-27 14:36:24",
    title: "does any one here knows the company and it's address below?",
    
    inviteId: "191262dd-9ba8-41b2-b9f7-ce1833ae05ab"
  },
  {
    userId: "aa7b641a-2730-433f-9d0e-65c520c7d269",
    body:
      'pls how through is this\r\n   "your application refers. you are shortlisted for an interview on Tuesday 27/03/18, 9am @98 palm avenue beside Methodist church Mushin, Lagos. Ref: MGT/85',
    createdAt: "2018-03-27 15:19:39",
    updatedAt: "2018-03-27 15:19:39",
    title: "pls confirm",
    
    inviteId: "4709ae90-c1dc-4359-b420-026daf376676"
  },
  {
    userId: "aa7b641a-2730-433f-9d0e-65c520c7d269",
    body:
      'pls how true is this\r\n   "your application refers. you are shortlisted for an interview on Tuesday 27/03/18, 9am @98 palm avenue beside Methodist church Mushin, Lagos. Ref: MGT/85',
    createdAt: "2018-03-27 15:20:34",
    updatedAt: "2018-03-27 15:20:34",
    title: "pls confirm",
    
    inviteId: "a379ac83-bb84-40e2-ac37-265183ba8a21"
  },
  {
    userId: "aa7b641a-2730-433f-9d0e-65c520c7d269",
    body:
      'pls how true is this\r\n   "your application refers. you are shortlisted for an interview on Tuesday 27/03/18, 9am @98 palm avenue beside Methodist church Mushin, Lagos. Ref: MGT/85',
    createdAt: "2018-03-27 15:20:47",
    updatedAt: "2018-03-27 15:20:47",
    title: "pls confirm",
    
    inviteId: "eba24871-6d1f-4838-8419-14b2ba0965bf"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "After thorough preview of your details and curriculum vitae, considering the working experience, skills and attribute you encompassed. The Board of Directors of BS-SYSTEM has decided to invite you for an ASSESSMENT, a business organization into investment management, human resources management, capital building, entrepreneurial/personal development and strategic planning with headquarters in Lagos, Nigeria.\r\n\r\nDate: Thursday 8TH of Febuary 2018\r\n\r\nTime: 8am Prompt\r\n\r\nRef code: 10010\r\n\r\nVenue: Suite 4 Ogungbeye Avenue, behind Zenith bank, Mega chicken\r\n\r\nb/stop, Agidingbi,Alausa,Ikeja,Lagos.\r\n\r\nYou can also reach the Secretary on 07038880326 if you have any issues/requests.\r\n\r\nRegards,\r\n\r\nDR. OLAB",
    createdAt: "2018-03-27 21:35:04",
    updatedAt: "2018-03-27 21:35:04",
    title: "KINDLY HELP CHECK IF THIS IS REAL",
    
    inviteId: "c44bc1c3-a302-4132-b6a1-9c0fe44f814b"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Following the receipt of your CV, you are hereby invited for interview for the position of a DSA at SOL Mainland Office, Jolaade House, 28, ogudu Road, Idi Aba Bus Stop, Ojota, Lagos, on Thursday March 29, 2018 by 9am. Kindly dress formal and come with your CV and credentials. Please disregard if you have been interviewed at SOL before. SOLNIGERIA. www.solnigeria.com",
    createdAt: "2018-03-27 22:59:24",
    updatedAt: "2018-03-27 22:59:24",
    title: "This is what i got, is this real?",
    
    inviteId: "73441d80-4793-49be-88bd-6876f2dd376a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Pls who has come across PD connect investment limited?",
    createdAt: "2018-03-27 23:34:19",
    updatedAt: "2018-03-27 23:34:19",
    title: "Is PD Connect Real?",
    
    inviteId: "a0387415-1fa6-4869-a0b7-3187c6ed4ebd"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dynamic Group, 32 olufemi street, off ogunlana  drive, surulere Lagos state and Neo life beside visafone house challenge-molete Ibadan Oyo state, these two company or what they call themselves, they are original scammers. They will send interview message to u, if u get there, they will b telling u another thing, Dynamic group will say bring #16000 so they can help u to become a millionaire, Neo life their own na just  #16500. If u received from them pls don't go ooo.\r\n\r\n\r\nCredit: Olubusolami",
    createdAt: "2018-03-28 02:20:07",
    updatedAt: "2018-03-28 02:20:52",
    title: "Dynamic Group and Neo life are original scammers!",
    
    inviteId: "b6ef7386-552d-4232-94d7-a7cffe6fca90"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Response 2 yur application,you are invite for job briefing on Fri. 30-03-18 by 9am @PGC Odua printing & publishing, opp Police Headquarters, Eleyele Rd Ibadan.V",
    createdAt: "2018-03-28 19:01:42",
    updatedAt: "2018-03-28 19:01:42",
    title:
      "Please how true is this invite? I was sent a mail and SMS. Thanks for your contributions.",
    
    inviteId: "2b65d4cf-639b-4ac1-9800-579e1658d205"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hey guys help confirm this job invite, hope it's not one of those deceptive moves by gnld.\r\n\r\nBased on recommendation of your CV through our online job placements you are privileged to be among the few selected to meet the HR of our organisation for an interview at the head office, BUILD GLOBAL SERVICES, \r\nTime: 9:00 AM prompt, Date: Thursday 29/03/2018. \r\nAddress: No 4, Alh. Ogungbeye Street, Off Amaraolu, by Zenith Bank, 1st Gate b/stop, Agidingbi, Ikeja, Lagos\r\nHR Moses\r\n\r\nFor Enquiries:\r\n070-6275-0417\r\n\r\nBest of luck",
    createdAt: "2018-03-28 19:03:21",
    updatedAt: "2018-03-28 19:03:21",
    title:
      "Hey guys help confirm this job invite, hope it's not one of those deceptive move by gnld.",
    
    inviteId: "41beed8d-a1ac-42f7-9e22-3af06cea1a1d"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Sequel to your response to the published job for customer service duty, Nitro Gas Limited in affiliation with ACR GROUP NIGERIA, have considered you to have an interview session with ACR GROUP.\r\n\r\n\r\nThis interview session is going to be of two phases, a written test and oral session, which would last for about 2 hours.\r\n\r\nShould you have any suggestion, inconvinience date for the interview, kindly write us to know when to reschedule you if the vacant position still available.\r\n\r\nThe interview is going to be with Deputy Managing Director, Human Resources Manager and the Managing Director.\r\n\r\nDate: Monday, 3rd April , 2017.\r\nTime: 9 am prompt\r\nVenue: No 95, Ikorodu Road, Fadeyi bus/stop, Fadeyi Lagos State.\r\n\r\nHuman Resources Desk\r\nAnne Adekunle\r\nacrng.com.\r\n\r\n\r\nThe mentioned companies do not exist, it's a ploy to lure people to participate in MLM referral marketing.",
    createdAt: "2018-03-29 04:22:45",
    updatedAt: "2018-03-29 04:22:45",
    title:
      "Nitro Gas Limited in affiliation with ACR GROUP NIGERIA  SCAM!",
    
    inviteId: "5a439e1a-9b71-414b-98c0-c26e570b5a39"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "You are invited for an Assessment/Interview on Friday 25/11/16 by 9:00am at 27, Ayodele Ojo, By Traffic Light Bus Stop, Coker Rd, Ilupeju, Lagos.\r\nHRM- Matthew.",
    createdAt: "2018-03-29 04:28:53",
    updatedAt: "2018-03-29 04:28:53",
    title: "FAKE INVITE! GNLD marketers",
    
    inviteId: "8f5ade07-066f-4349-8e87-1fcc938d742a"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "As a result of your application on our online HRM portal, we were impressed with your qualifications which makes you an excellent candidate for this role, so we would like to invite you for an interview at our office to tell you more about this role, our company, and of course, get to know you better.\r\n\r\nDate: Wednesday 13th September 2017 \r\nTime: 8:30am\r\nAddress: 4 Ogunbeye Street, Off Mega Chicken Bustop, Amaraolu Junction,Ikeja, Lagos.\r\n\r\nKindly come along with your updated CV and acknowledge this mail with reply.\r\n\r\nFor more Enquires: Call 09050000082 or if you need to reschedule.\r\nWe look forward to seeing you.",
    createdAt: "2018-03-29 04:35:31",
    updatedAt: "2018-03-29 04:35:31",
    title: "Scam BEWARE!!",
    
    inviteId: "077d2d38-0101-4df5-873e-eee9a01d21f6"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "PG Invites you for an Assessment with HR. on Fri.09/06/17 by 9am at N027 Ayodele ojo by TRAFIC LIGHT Bus Stop Ilupeju.Lagos resident\r\n09071404599\r\nHR/BESTWILL",
    createdAt: "2018-03-29 04:38:29",
    updatedAt: "2018-03-29 04:38:29",
    title: "Scam Invite Alert!!!",
    
    inviteId: "35b28e09-1843-4517-9c69-400eeda9d3f0"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "The attached photos are scam, if you do get an invite similar to any of the images, don't go.",
    createdAt: "2018-03-29 05:32:33",
    updatedAt: "2018-03-29 05:32:33",
    title: "Invite from any of theses companies is a scam!",
    

    inviteId: "c82d6b86-aeb2-473b-bd6d-02b4f1b116fe"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "The establishment isn't registered with CAC, they send invites at random. So it's no surprise if you get an invite without even having applied for a position with them. Further search show's the are actually GNLD peddlers.",
    createdAt: "2018-03-29 21:22:21",
    updatedAt: "2018-03-29 21:22:21",
    title: "ACE MGT (Beware!!)",
    

    inviteId: "00dcb24d-fa76-4a43-9647-309acf95820d"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Good afternoon,\r\n\r\nSequel to your application for the role of a Human Resource Assistant with Divergent Enterprise, I am pleased to inform you that you are hereby invited for a brief chat with our HR team. \r\n\r\nPlease come with a copy of your CV. \r\n\r\nDetails are as follows:\r\n\r\nDate: Friday, 11th October 2017\r\nTime: 10am\r\nVenue: 1686B, Oladele Olashore Street, off Sanusi Fafunwa, Victoria Island\r\n\r\nWe look forward to meeting you.\r\n\r\nThe Divergent Team",
    createdAt: "2018-03-29 21:26:11",
    updatedAt: "2018-03-29 21:26:11",
    title: "Divergent Enterprise",
    
    inviteId: "d25dc83b-ad93-47dd-b1f3-d44182d806ca"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Sequel to the receipt of your Resume, the Board of LS-RESOURCE requests your presence to be interviewed based on your qualification.\r\n\r\nTIME: 10.00Hours in the Morning.\r\n\r\nOFFICE ADDRESS: 3RD FLR, CROWNET PLAZA, IDRIS GIGADO STR, WUYE, ABUJA.\r\n\r\nREQUIREMENTS;\r\n-Hard copy/Print-out of this Email Notification.\r\n-Hard copy of your Resume/Curriculum Vitae.\r\n-Two (2) Passport Photographs.\r\n\r\nDress Corporately and be sure to come early as lateness will NOT be entertained.\r\n\r\nOPTIONAL\r\n-A regulatory I.D Card i.e. Driver's License, National I.D card, Voter's Card, INT'L Passport.\r\n\r\nBest of Luck, HR DEPT, LAGOS.",
    createdAt: "2018-03-29 21:41:33",
    updatedAt: "2018-03-29 21:41:33",
    title: "LS-RESOURCE",
    
    inviteId: "4b795f18-0055-4a6c-bf0e-0c417eda558b"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "After thorough preview of your details and curriculum\r\nvitae,considering the working experience,skills and attribute you\r\nencompassed,The Board of Directors has decided to invite you for an\r\nASSESSMENT.\r\n\r\nDate: Friday15th December,2017\r\nTime: 9am Prompt\r\nVenue: Suite 4 Ogungbeye Avenue,behide Zenith bank,Mega chicken\r\nb/stop,Agidingbi,Alausa,Ikeja,Lagos.\r\n\r\nWe apologies for the short notice,however it is important you confirm\r\nyour availability to enable us make adequate preparations. Please\r\nkindly confirm your availability by replying this email as soon as",
    createdAt: "2018-03-29 22:08:39",
    updatedAt: "2018-03-29 22:08:39",
    title: "Scam BEWARE!!",
    
    inviteId: "0b348733-676f-458e-82d8-ea4c6768269f"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "M.Global Resources invites you for Aptitude test /Briefing on Mon 12/03/18 By 9:am @ 19 Bode Thomas Road, Awoyokun/ ONIPANU B/STOP. Ref: MGR/12/JE 090-8041-6747.",
    createdAt: "2018-03-29 22:25:02",
    updatedAt: "2018-03-29 22:25:02",
    title: "Beware!! (GNLD Peddlers)",
    
    inviteId: "fdb9033f-68e8-435f-a1eb-119db350e92f"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Sequel to your online application,a Firm that is into Human Resources,Logistics and Consulting invites You to meet her HR Director for an Interview at our office to tell you more about this role, our company, and of course, get to know you better. \r\n\r\n\r\nDate: Friday 29th December 2017\r\nTime: 8.30AM \r\n\r\nAddress: No 4, Alh. Ogungbeye Street, Off Amaraolu Junction, Agidingbi by 1st gate Bustop, Ikeja, Lagos.\r\n\r\nkindly Come Along With Your updated CV and acknowledge this mail with reply .\r\n\r\nCall Daniella 070 3347 5042 \r\n\r\n\r\n\r\nBest regards,",
    createdAt: "2018-03-30 21:55:23",
    updatedAt: "2018-03-30 21:55:23",
    title: "Is this legitimate?",
    
    inviteId: "78972f18-7bf7-43fc-9b93-91280bc35bdb"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "ON A REFERRAL,GRATULATION\r\nCONCEPT INVITE U FOR INTERVIEW ON 22/8/16\r\n8 OLABISI ONABANJO WAY,OPP BAPTIST PRIMARY SCH,\r\nIDI-ABA ABEOKUTA,1ST FLOOR\r\nBY 10AM\r\nRK1",
    createdAt: "2018-03-30 21:59:13",
    updatedAt: "2018-03-30 21:59:13",
    title: "Scam 101! Beware!",
    
    inviteId: "2db3340d-07e8-412d-b8e3-d3c53bf9ae51"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Your application for job refers; you are invited for interview@ Prime Solutions Ltd 110 Awolowo Way opp Trinity Mall Ikeja Lagos on mon 5th June by 9am",
    createdAt: "2018-03-31 01:23:48",
    updatedAt: "2018-03-31 01:23:48",
    title: "Scam or not?",
    
    inviteId: "26fc1d5d-aa79-4f04-8176-4c1dc31e100f"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Sequel to your CV review, you are to report for an interview on TUE 16/5/17 9am @ 98, Hillstar Building 3rd Floor, Papa Ajao Mushin Lagos.",
    createdAt: "2018-03-31 02:24:53",
    updatedAt: "2018-03-31 02:24:53",
    title: "Is this real?",
    
    inviteId: "a79e6338-713e-4863-8fe4-8ea73e203e4f"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "GC RESOURCES INVITES YOU FOR AN INTERVIEW ON A REFERRAL,GRATULATION\r\nCONCEPT INVITE U FOR INTERVIEW ON 22/8/16\r\n8 OLABISI ONABANJO WAY,OPP BAPTIST PRIMARY SCH,\r\nIDI-ABA ABEOKUTA,1ST FLOOR\r\nBY 10AM\r\nRK1",
    createdAt: "2018-03-31 20:03:29",
    updatedAt: "2018-03-31 20:03:29",
    title: '"ON A REFERRAL,GRATULATION CONCEPT" REALLY?! (SCAM)',
    
    inviteId: "b2061d1a-84b2-4530-abe9-c6b7c31f63a8"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Following your application on our online Human Resource Management Portal,We were impressed with your qualifications which make you an excellent candidate for this role,so we would like to invite you for an Interview/Assessment at our office to tell you more about this role, our company's mode of operations and of course, get to know you better. You will be meeting with the Executive board.Use the code below for proper identification.\r\n\r\n\r\nBS/***/***/**\r\nDate: Monday 5th February 2018\r\nTime: 9am prompt\r\n\r\nVenue-The Zonal Office,B.S Nigeria Limited,Suite 4A, Ogungbeye str, Off Amaraolu, Opposite Zenith Bank,Agidingbi, Ikeja, Lagos. \r\n\r\nWe apologise for the short notice; however it is important you confirm your availability.Kindly do that by replying this email as soon as possible.Come Along With Your updated CV and acknowledge this mail with reply .\r\n\r\nFor more Enquiries:09050000082\r\n\r\nWe look forward to seeing you.\r\n\r\nBest regards,\r\n\r\nDr. ZOE \r\n\r\nHR DEPT\r\n\r\nHR ADMINISTRATOR\r\n\r\nB.S.NIGERIA LIMITED",
    createdAt: "2018-03-31 20:27:25",
    updatedAt: "2018-03-31 20:27:25",
    title: "This is a SCAM!",
    
    inviteId: "d18ba813-bb10-4a82-a65d-938f9f8e6bc1"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      '"Congrats as you are being called up for an interview in Aiico Insurance Plc. On Tuesday 25th of April at 203 / 205 Oshodi-Apapa Expressway, Iyana Isolo, Lagos by 8.00am. Ask of Mr Oshineye, 08023134744"',
    createdAt: "2018-03-31 20:34:40",
    updatedAt: "2018-03-31 20:34:40",
    title: "Scam Invite Alert!!!",
    
    inviteId: "f46392e7-e071-4409-8433-76f5a80a4012"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Hello AKINRINOLA OLATUNDE, This is to inform you that the management of S.N.L approved your details and has selected you to come in person for an assessment interview on Friday 10/02/2017.\r\nTime:9am\r\nVenue: 228 ikorodu road, after Shepherd hill church by Obanikoro bus-stop, Lagos.\r\nYou are required to come with a hard copy of your CV and a passport photograph.\r\n\r\nFor help/directions you may call the Admin Unit: 0909-467-9990. Goodluck\r\nRC:024/MPT",
    createdAt: "2018-03-31 20:47:00",
    updatedAt: "2018-03-31 20:47:00",
    title: "S.N.L Scam!!!",
    
    inviteId: "62c7d7dd-0801-464b-a7bf-de2e725f42e7"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Edgerit Limited invites you for an interview for the position of Medical Sales Representative on Monday, January 8, 2018.\r\nTime: 1pm\r\nVenue: WaterCress Hotel, 48, Oritshe Street, Off Balogun Street, Off Awolowo way, Ikeja, Lagos.\r\nKindly acknowledge the receipt of this message.",
    createdAt: "2018-04-01 06:20:03",
    updatedAt: "2018-04-01 06:20:03",
    title: "Real or not?",
    
    inviteId: "06b983fe-8b1d-4475-bb02-1272890c5412"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Sequel to your application, you are hereby invited for an interview with Forza Nig. Ltd, Block 15, Suite 9, Oodua Int. Mkt., Ojota on 28/2/2018 at 2pm prompt",
    createdAt: "2018-04-01 22:09:52",
    updatedAt: "2018-04-01 22:09:52",
    title: "Please who knows about this company, is it real??",
    
    inviteId: "9a1da0c2-d4d3-42bd-8de1-f9af799b8e36"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "DEAR APPLICANT \r\nWe Are Pleased to inform you that you have been shortlisted for an Interview/chat session at B.S INCORPORATION LTD\r\nDate:THUR 29/3/18 & FRI 30/3/18 by 9am\r\nVenue: 4 karim Ogungbeye Estate off Amaraolu way,beside Zenith Bank,1st Gate,Agidingbi, Ikeja Lagos. Come with your updated CV. for Enquiries 080-3941-1675 /H. R - Alexis.\r\nKindly Call to Confirm Your Availability.",
    createdAt: "2018-04-01 22:12:23",
    updatedAt: "2018-04-01 22:12:23",
    title: "Gnld yet again!!!",
    
    inviteId: "748e72b7-92fa-4d9b-99a0-c1e832a5126c"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Good afternoon house, pls i just got a txt from dovegreen global service for an interview.\r\npls is it genuine and hope its not gnld.\r\nTHANKS for the prompt response",
    createdAt: "2018-04-01 22:17:18",
    updatedAt: "2018-04-01 22:17:18",
    title: "Is this real?",
    
    inviteId: "2b58e1ce-b427-4ebc-be2a-846c23f2b1d2"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Hello OGINNI OLUWASEUN, based on your application to M.H.S, you're required to come over for an Interview \r\non Friday 30th March, 2018.\r\nTime: 9am prompt\r\nVenue is MHS Office, 6th Floor, 65c Opebi road, opposite glass house by Salvation b/stop, Opebi, Ikeja, Lagos.\r\nA copy of your CV and a passport photograph is required and pls ensure to be punctual.",
    createdAt: "2018-04-01 22:27:34",
    updatedAt: "2018-04-01 22:27:34",
    title: "Is this authentic?",
    
    inviteId: "35710418-94dd-4603-a392-140b70c368f0"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Sequel to your application for the MCA position; We would like to invite you for an interview at BISYOM PUBLISHING LTD.\r\n\r\nAddress: 37b Ladipo Kasunmu Street, off Bisi Ogabi Street, Balogun Bus Stop, Ikeja, Lagos. \r\n\r\nDate: Wednesday, 31/1/18\r\n\r\nTime: 9.00AM\r\n\r\nWarm regards",
    createdAt: "2018-04-02 07:20:35",
    updatedAt: "2018-04-02 07:20:35",
    title: "Is this real?",
    
    inviteId: "6d20214f-eb56-421e-b11e-52fb1d13998c"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Search results show that the above address is used by GNLD operators to invite potential referrals for \r\nPresentations under the guise of interviews. On the screenshot information provided about the would be employer is vague. Mention is made only of HR.",
    createdAt: "2018-04-03 00:16:19",
    updatedAt: "2018-04-03 00:16:19",
    title: "Scam Invite...! (GNLD Operators)",
    

    inviteId: "ff258fe7-91ca-4b89-9f58-3a8cd7089efc"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Hi ,abiola is me Onyemaechi Anthony ur 15A ex-copa mate in Ekite State, code Ek/15A/1410, am working with Shell Oil Company in Rivers State branch, cal me now 4 details b/cos internal Recruitment is going on now so dat i can link u to d company.",
    createdAt: "2018-04-03 00:47:13",
    updatedAt: "2018-04-03 00:47:13",
    title: "Fraudster on the prowl!",
    
    inviteId: "d55682fb-f952-499d-8509-dca7c13acbcf"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Sequel to your online application and submission of CV, you are hereby invited for a JOB INTERVIEW on Monday 3rd July, 2017 at NO. 2, Akin Osiyemi, Allen Avenue, Ikeja, Lagos by 9am.\r\n\r\nCome with a your CV and a printout of this invitation.\r\n\r\nRegards.\r\n\r\nCareer Gems HR",
    createdAt: "2018-04-03 01:13:02",
    updatedAt: "2018-04-03 01:13:02",
    title: "How real is this?",
    
    inviteId: "6c309d99-7c79-4b58-a59b-a7913eef9e46"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "DG's HR Invites you for an ASSESSMENT AS A UNIT HEAD.\r\nDATE; 07/08/17\r\nVENUE;32 Olufemi Road,Off Ogunlana Drive,Surulere Lagos.\r\nHR/ADMIN\r\nSHOW THIS TEXT...",
    createdAt: "2018-04-03 01:37:54",
    updatedAt: "2018-04-03 01:37:54",
    title: "Is this for real?",
    
    inviteId: "e92be9f7-0d3c-4a00-bae2-5cc71f61317c"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "MAX GLOBAL invites you for a WORK BRIEF/WORK OUTLINE on TUE 21/6/16 by 9am at 13 OLADOSU STR, OPP TOYIN STR IKEJA. DR AKINKUNMI 07037630606.",
    createdAt: "2018-04-03 04:36:04",
    updatedAt: "2018-04-03 04:36:04",
    title: "Another Scam invite?",
    
    inviteId: "c557debd-4b77-4007-b41c-0ccc7d0600aa"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "SEQUEL TO YOUR APPLICATION\r\nVIA OUR ONLINE HR,MGL\r\nSHORTLIST YOU FOR AN ASSESSMENT ON THURSDAY\r\n@13 OLADOSU STREET OFF TOYIN IKEJA",
    createdAt: "2018-04-03 04:47:52",
    updatedAt: "2018-04-03 04:47:52",
    title: "Yet another GNLD invite",
    
    inviteId: "1f38e35f-55a5-4959-a062-1dc904c55f7f"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "STRICTLY BY RECOMMENDATION PMG LTD. SHORTLISTS YOU FOR INTERVIEW AS A UNIT MANAGER ON TUE 19/12/17 BY 9A.M. @13 OLADOSU STR TOYIN IKEJA. DRESS OFFICIAL",
    createdAt: "2018-04-03 04:51:05",
    updatedAt: "2018-04-03 04:51:05",
    title: "Did anyone get this?",
    
    inviteId: "1305dc8e-0881-4c05-8d56-ff35f75be434"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "I personally got this offer by Your CV meets our requirements, HR invites you for an interview sat 3 /02 /2018.9A.m@32 olufemi rd, \r\noff ogunlana drive surulere Lagos. YD /YHN. 080-3539-9993.\r\nIt was motivational talk, I went and I spent good 8hours listing to them I could not bear it to end of the day, I have to go but the meeting was ok but it appears they don’t give job.",
    createdAt: "2018-04-03 04:54:31",
    updatedAt: "2018-04-03 04:54:31",
    title: "What someone has to say;",
    
    inviteId: "38590724-c17f-4115-b23a-1af942fac8a3"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "...",
    createdAt: "2018-04-03 05:07:48",
    updatedAt: "2018-04-03 05:07:48",
    title: "If you received this, reports are they are scam",
    

    inviteId: "fb9f3d85-f416-4cfd-9d33-1e810cd6ec96"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear LinkedIn Subscriber,\r\n\r\nWe are pleased to inform you about the result of the LinkedIn online Promo 2018, Your name was among the Seventeen winners, You have been awarded the sum $615,810.00 from the total cash prize of $10.468.770,00 shared among \r\nthe seventeen winners,  This program was organized by Microsoft, for the encouragement of  subscribers that are active online on LinkedIn Professional Network.\r\nDue to some profiles of the same names dictated on our database in \r\nNigeria, we have decided to verify your LinkedIn login email and password before the payment of your winning prize.You are required to send the below listed information's via email or forward them directly to our VIBER instant messaging App number+12092481917\r\n  (1) Your LinkedIn login email address and password.\r\n (2) Your home address\r\nVIBER is an instant messaging application which you can download via Google play store or App Store.After the verification of the above login details by the LinkedIn audit department, if they are accurate, Your details shall be send to the LinkedIn  Local representative in Nigeria, they will contact you for instant payment.\r\nDiana Graham\r\nLinkedIn Safety Operations Support Specialist 1000 Avenue West Maude,\r\nSunnyvale, CA 94085, USA\r\nViber: +12092481917",
    createdAt: "2018-04-03 21:09:57",
    updatedAt: "2018-04-03 21:09:57",
    title: "LINKEDIN SCAM ALERT!!!",
    
    inviteId: "cba8cdd5-3767-4c16-9933-7bbfc2d4392a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I got this mail yesterday, please is it real?\r\n\r\nDear xxxxxx xxxxxx\r\n\r\nWith reference to your CV sent to us\r\nYou are hereby scheduled for an INTERVIEW with us at Strategic &Global Resources\r\n\r\nTime: 10:00am\r\n\r\nDate: Wednesday 4th April, 2018.\r\n\r\nAddress : 5,Resource Building, Surulere Industrial, Adeniyi Jones, ikeja Lagos.\r\n\r\nNote: please come along with a copy of your CV\r\n\r\nRegards\r\nADMIN UNIT\r\nStrategiccareers Nigeria\r\n09037567921",
    createdAt: "2018-04-03 21:40:46",
    updatedAt: "2018-04-03 21:40:46",
    title: "I got this mail yesterday, please is it real?",
    
    inviteId: "b575bc83-89bc-4a26-b95e-598f95b165bc"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please guys help me Check this company. My interview is stated for tomorrow..\r\n\r\n5, Surulere Industrial Estate, Sanusi Bus-Stop by Jumia, Adeniyi Jones, Ikeja, Lagos.",
    createdAt: "2018-04-03 21:44:23",
    updatedAt: "2018-04-03 21:44:23",
    title: "Please guys help me Check this company",
    
    inviteId: "700c0874-c47c-4120-84db-da933edf618c"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hi [Name],\r\nThank you for applying to our organization through Accessglobalng LinkedIn.\r\nYour application for the position applied for stood out to us and we would like to invite you for an interview at our office.\r\nYou will meet with our Head of HR, Ms Nzekwue. \r\nThe interview will last about 2 Hours. \r\nYou’ll have the chance to discuss the position’s responsibilities and learn more about our company.\r\nWe would like to conduct your interview on Thursday 5/4/2018 by 9.30am. \r\nPlease let us know if this date will be convenient for you.\r\n\r\nOur office is located at Plot 5 Adeniyi Jones Adjacent Mikano Bus stop. Ikeja Lagos. \r\nPlease bring your CV and your credentials,\r\nLooking forward to hearing from you.\r\n\r\nRegards,\r\nBrooklyn.",
    createdAt: "2018-04-03 21:47:02",
    updatedAt: "2018-04-03 21:47:02",
    title: "Is this genuine?",
    
    inviteId: "73c778ca-d9a3-4662-a395-c5bdabea15bd"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "DEAR DOSUMU OLUWATOYIN, Sequel to your online application,a Firm that is into Human Resources,Logistics and Consulting invites You to meet her HR Director for an Interview at our office to tell you more about this role, our company, and of course, get to know you better. Date: Friday 29th December 2017 Time: 8.30AM Address: No 4, Alh. Ogungbeye Street, Off Amaraolu Junction, Agidingbi by 1st gate Bustop, Ikeja, Lagos. kindly Come Along With Your updated CV and acknowledge this mail with reply . Call Daniella 070 3347 5042 Best regards, HR DEPT BGN NIGERIA L",
    createdAt: "2018-04-03 23:23:32",
    updatedAt: "2018-04-03 23:23:32",
    title: "GNLD operators... BEWARE!",
    
    inviteId: "432d2b1f-9c64-4e3c-a51b-39fd22420be2"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Responding 2ur application, BG Nig invites u4 an interview/test on Thu 17/12/15 @16, Akinremi Str Anifowose Opp New Garage Ikeja by 10am. HR Mr.JERRY 08089582847",
    createdAt: "2018-04-03 23:31:55",
    updatedAt: "2018-04-03 23:31:55",
    title: "Is this a SCAM!",
    
    inviteId: "23872834-502a-43e5-966c-c3aa07d01b5b"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "These type of invites with vague details mostly end up to be scams. Please beware and be sure you applied for the position you're invited to interview for.",
    createdAt: "2018-04-04 00:32:40",
    updatedAt: "2018-04-04 00:32:40",
    title: "Scammers on the prowl!",
    

    inviteId: "ace34d21-d884-4a50-a164-fdb2dd7536de"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Following your application on SCIENTIFIC ADVERSARY BOARD, you are hereby notified that your interview/ screening has been scheduled to hold on; \r\n\r\nDate: 14th August, 2017. \r\n\r\nTime :9:00am \r\n\r\nVenue : Green complex, 98 Adageorge road, opposite Mouka foam Depot, Portharcourt, Rivers State. \r\n\r\n\r\n\r\nFor direction only, call 08053363892 \r\n\r\nN/B: Ensure that you present this mail as a prove of shortlisted candidate.\r\n\r\n\r\nApproved by ADMIN DIRECTOR..... \r\n\r\nDR. OKOLI C. E. \r\n\r\n(HD/2388)",
    createdAt: "2018-04-04 00:41:23",
    updatedAt: "2018-04-04 00:41:23",
    title: "Is this a scam?!",
    
    inviteId: "86aa962a-0e9e-4e8c-b75e-3df11bb803ac"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I applied for different jobs on jiji...I got a call some minutes ago from a guy...He asked for the uni I graduated from....And told me to come along with my CV tomorrow. I asked him to send the addy of his company......He sent me this ...Wednesday 4th of April 2018 by 10am at 21/23 aromire avenue off adeniyi Jones Ikeja Lagos.\r\nHe didn't add the name of the company.....Is this legit?",
    createdAt: "2018-04-04 03:53:41",
    updatedAt: "2018-04-04 03:53:41",
    title: "He didn't add the name of the company.....Is this legit?",
    
    inviteId: "8e4cc0de-d314-4868-bad0-341eab0ad197"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please how real is this invite, and please is their anyone with info about the company? I need a reply urgently\r\n\r\nfollowing the receipt of your CV, You are invited for Test/Interview at DOL Office 27/29, 3rd floor king George v road, opposite ghana high restaurant, onikan, lagos island, lagos on Wednesday 04/04/2018 by 8:30am prompt. kindly come with.....blah blah blah.\r\ninquiry- 09090404206, 09053903363.\r\nwww.solnigeria.com",
    createdAt: "2018-04-04 03:55:27",
    updatedAt: "2018-04-04 03:55:27",
    title:
      "Please how real is this invite, and please is their anyone with info about the company? I need a reply urgently",
    
    inviteId: "dffebb39-9e10-4128-aafc-a3f04a324953"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "dahlia.consult110@gmail.com - Lagos State\r\nThey are a multilevel marketing company. They lure unsuspecting candidates into parting with their money in order to join their scheme.",
    createdAt: "2018-04-04 05:22:24",
    updatedAt: "2018-04-06 04:26:11",
    title: "Who has come across this - Dahlia Consult",
    
    inviteId: "fb4f9489-591f-4d0c-90b7-84835f09ad1d"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "visiontechnologistresources@gmail.com - Lagos\r\n\r\nNone existent and takes a name similar to another company abroad.",
    createdAt: "2018-04-04 05:24:29",
    updatedAt: "2018-04-04 05:24:29",
    title: "Vision Technologist Resources is another deceitful firm",
    
    inviteId: "feb88739-745e-436f-afed-97d3513b18d8"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Home Places Consult\r\nhomeplacesconsult@gmail.com - Lagos State\r\n\r\nThey are a multilevel marketing company. They lure unsuspecting candidates into parting with their money in order to join their scheme.",
    createdAt: "2018-04-04 05:32:55",
    updatedAt: "2018-04-04 05:33:20",
    title: "Has anyone heard about Home places consult?",
    
    inviteId: "f1778f89-52ef-4760-9646-28b4303e5361"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "We appreciate you reaching out to us.\r\n\r\nSequel to your request. You have been shortlisted for the post of a Yoruba Channel Digital intern.\r\n\r\nYou're expected to come with a copy of your CV and passport 9:00AM Friday 18th August 2017 at 27, Coker str Orimolade bus/stop, College rd Ifako-ijaiye Ogba, Lagos.\r\n\r\nGoodluck!",
    createdAt: "2018-04-05 00:37:35",
    updatedAt: "2018-04-05 00:37:35",
    title: "Is this legit?",
    
    inviteId: "450de1dd-8def-4f85-a075-c888d6f532cc"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Good day,\r\n\r\nWe recently received your application via our online opening. \r\nWe are impressed with your expertise.\r\nHowever, the human resources team officially invites you for an aptitude test/oral assessment of an open portfolio as scheduled below:-\r\n\r\nDate: Tuesday, 15th August 2017.\r\n\r\nTime: 10:am prompt\r\n\r\nVenue: 5 surulere industrial estate,surulere house, University Press Building,down the end of Adeniyi Jones way, Ikeja, Lagos\r\n\r\nBe punctual and ensure you print a copy of this email, to be presented at the point accreditation at the security department.\r\n\r\nBest Regards,\r\nFortech Consults.",
    createdAt: "2018-04-05 00:44:29",
    updatedAt: "2018-04-05 00:44:29",
    title: "Fortech consults... Beware!",
    
    inviteId: "15da7fff-2e1e-4e36-a476-fa823a7a1a30"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Dear Candidate,\r\nIn response to your mail to us. You are hereby invited to GRAND HERITAGE LTD for an interview for the role of A CUSTOMER SERVICE OFFICER(CSO)\r\n\r\nVenue: 25, Surulere industrial Estate, Adeniyi Jones ikeja Lagos\r\n\r\nTime:10:00a.m prompt.\r\n\r\nDress code: cooperate \r\n\r\nDirection:\r\nFrom Ikeja under bridge take a tricycle(keke) to adeniyi Jones, ogba. Drop at universal and locate university press building, GRANLEAD HERITAGE (last floor).\r\n\r\nYou are required to come along with a copy of your CV \r\n\r\n.For further inquiries, kindly visit:\r\ngrandleadheritage.org\r\nOr Call 09090664018\r\nRegards \r\nTalent and Recruitment.",
    createdAt: "2018-04-05 00:53:25",
    updatedAt: "2018-04-05 00:53:25",
    title: "how legit is this mail please?",
    
    inviteId: "1abcd13f-bc02-47b0-8f9c-da1180ebaca9"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "So I got the below mail today and responded, I did not suspect fraud until I was defrauded. I was duped of N27,000. After making payment, they stopped picking my calls\r\n \r\nPlease beware so you won't fall victim.\r\n\r\n \r\n\r\nDear Obayopo Adeola Abiodun\r\n\r\n \r\n\r\nThis is to remind you again that we are yet to receive all the required documents as requested by our company .\r\n\r\nBelow is the link to the letter we previously sent to you\r\n\r\n \r\n\r\nCLICK HERE TO READ THE LETTER\r\n\r\n \r\n\r\nIf you need any clarification contact us through the below contact number\r\n\r\nContact Person: Joseph Asaghi\r\nPhone:\r\n08064553565\r\n\r\n \r\n\r\nWe await to hear from you.\r\n\r\n \r\n\r\nThanks\r\n\r\n \r\n\r\n \r\n\r\n \r\n\r\nConocoPhillips Company Ltd. \r\nPlot 11  Akin Adesola,\r\nVictoria Island, Lagos State\r\nNigeria\r\nWebsite: http://www.conocophillips.com\r\n\r\n\r\n\r\n\r\n'Find below the contents of the letter....\r\n\r\n\r\nCONOCOPHILLIPS COMPANY LTD\r\nPlot 11 Akin Adesola,\r\nVictoria Island, Lagos State\r\nNigeria.\r\nInvitation For Training Program\r\nThis is to remind you that you have been selected for the 2017/ 2018 ConocoPhillips Company Ltd. Training Program which is to commence on the 23rd April ,2018\r\nAfter the auto screening you have been assigned with a trainee number LN8790.\r\nYou are required to submit to us all the below requirements on or before the 5th April 2018 as failure will result to disqualification.\r\nREQUIREMENTS\r\n1. Photocopies of Academic Certificate.\r\n2 Proof of Identification..\r\n3. 2 copies of Sized Photo Passport.\r\n4. IOSH 1 & 2 Certificate.\r\n5. HSE Level 3 Certificate.\r\nAll required documents are to be submitted to\r\nConocoPhillips Company Ltd.\r\nPlot 11 Akin Adesola,\r\nVictoria Island, Lagos State\r\nNigeria\r\nWebsite: http://www.conocophillips.com\r\nTHE PROGRAM\r\nConocoPhillips Company Ltd training Program is designed to help candidates to get adequate training and at the same time work in the oil and gas industry. The training period will last for only (1)Year after which candidate will become a full staff of the company.\r\nSALARY /BENEFIT\r\n\r\nAs per the company policy, you'll be eligible to receive the following beginning on your hire date/resumption date.\r\nSalary: Monthly starting salary of N200,000 (Two Hundred Thousand Naira Monthly)\r\nTraining Bonus: N20,000 (Twenty Thousand Naira Monthly).\r\nEMPLOYMENT DOCUMENTS\r\n\r\nAfter the submission and confirmation of all the above listed documents, The hardcopy of the appointment letter will be sent to you via courier service.\r\nSo ensure you submit all the listed requirements on or before the 5th April 2018. as failure will result to the cancellation of appointment.\r\nIf you need any clarification or any help on the submission of any of the requirements contact the below person.\r\nContact Person: Joseph Atigha\r\nPhone: 08064553565\r\n\r\n\r\nWe at ConocoPhillips Company Ltd. hope that you'll accept this job offer and look forward to welcoming you aboard.\r\n\r\nSincerely,\r\nFatai Adeleke\r\nHiring Coordinator, Human Resources.\r\n\r\nResource",
    createdAt: "2018-04-05 15:17:28",
    updatedAt: "2018-04-05 15:17:28",
    title: "ConocoPhillips Company Ltd is a fraud!!!",
    
    inviteId: "713c8fc9-b0a6-4896-85b7-b63380a44c5f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Candidate,\r\n\r\n\r\nSequel to your application, you are invited to interview for the role of a Loan Officer.\r\n\r\n\r\nVenue: Doheney Services Ltd., 55, Coker Road, Ilupeju, Lagos\r\n\r\nDate: Tuesday, 10th April, 2018 \r\n\r\nTime: 10:00am\r\n\r\n\r\nKindly respond to confirm your availability.\r\n\r\n​\r\n\r\nRegards, \r\n\r\n\r\nOyinkansola Daramola\r\n\r\nRecruitment Analyst.\r\n\r\n+234 813 460 2626\r\n\r\nodaramola@doheneyservices.com \r\n\r\n55, Coker Road, Ilupeju, Lagos",
    createdAt: "2018-04-05 16:43:26",
    updatedAt: "2018-04-05 16:43:26",
    title: "G or scam?",
    
    inviteId: "823c9794-d359-4dcf-8dd2-d7eeeb244e26"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "LIVEOPS JOB SERVICE\r\n\r\n\r\n48 Marina, Lagos Island, \r\nP.M.B 2027 \r\nLagos, USA. \r\n\r\n\r\nCURRICULUM VITAE CONFIRMATION\r\n\r\nDear Mr/Mrs \r\n\r\nYour application for the Graduate Contract Staff has been approved, You are to make registration payment of N1000 to Fidelity Bank, Sandra Menye. ACC NO. 6018175876\r\nAttach your NYSC Discharge Certificate, Birth Certificate and your proof of payment and your screening venue and all necessary details will be communicated across to you immediately\r\nPlease note that applicants above the age of 30 are not eligible for the job.\r\nFor more info call the screening officer on 08071860389 \r\n\r\n\r\nSIGNED \r\nMANAGEMENT \r\nLIVEOPS",
    createdAt: "2018-04-05 22:21:13",
    updatedAt: "2018-04-05 22:21:13",
    title: "Has anyone heard of this please?",
    
    inviteId: "a46dfc6e-c056-4c28-9206-b6cfea6f9ea6"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Based on referral,your INTERVIEW with PGMC is on Fri 06/04/18 @ 11 Adebowale street beside Trendy Inn Hotel,Mende Rd,Maryland,Lagos\r\nEnq: 08120296353\r\n345",
    createdAt: "2018-04-05 22:27:03",
    updatedAt: "2018-04-05 22:27:03",
    title: "I got this text this afternoon pls check for me if its real",
    
    inviteId: "130579d6-9269-4c1a-ab89-f9f64331621e"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Vacancy!!! Vacancy!! Vacancy!\r\nPrecious Paint USA Limited Ikotun Egbe lagos requires the service of:\r\n\r\n1. Factory Operation Supervisor\r\n-minimum of two years experience and physically agile to coordinate factory workers \r\n- minimum of O.N.D any discipline.\r\n2. COLOR MATCHER\r\n-minimum of 5 years experience in paints industry on the field \r\n-must be able to identify and spots variations in colors\r\n- minimum of O.N.D in any discipline\r\n- must be able to produce formula for paints of any categories and color\r\n3. CREDIT AND STOCK RECONCILIATION OFFICER\r\n- HND/BSC in accounting\r\n- minimum of 5 years experience \r\n- must be able to reconcile account and have passion for traveling with good customer relation\r\n- must know Lagos metropolis \r\n\r\ncandidate that meet the requirement should forward application and CV to Info@preciouspaints.com or Hcm@preciouspaints.com",
    createdAt: "2018-04-05 22:33:28",
    updatedAt: "2018-04-05 22:33:28",
    title: "Scam or Legit please?",
    
    inviteId: "55d93028-b04f-4dc2-b0a4-7d9e664f3553"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "You are Shortlisted and hereby invited for an Interview slated for 16/08/17 by 9am at No 32, Olufemi Road, off Ogunlana Drive, Surulere, Lagos. ERC/S",
    createdAt: "2018-04-05 23:32:16",
    updatedAt: "2018-04-05 23:32:16",
    title: "Any ideas if this is real please?",
    
    inviteId: "5570c647-14e5-47a3-b665-ccf670495351"
  },
  {
    userId: "0f8f49fd-72f5-4563-8ae2-3a9c80b86e78",
    body:
      "you are invited for interview by ACE LTD, at 8,Adebare street ogudu, lagos",
    createdAt: "2018-04-05 23:47:41",
    updatedAt: "2018-04-05 23:47:41",
    title: "wants to confirm this asap. please.",
    
    inviteId: "9586ae2c-1e5f-4661-ba06-7eb2b39ecdfb"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Sequel to your application via our online advertorial ,after much evaluation of your profile on our portal,We were impressed with your qualifications and skills which makes you a prospective candidate, We are please to inform you that you have been selected and invited for an interview with our HR Director as an Administrative Officer.\r\n\r\n\r\n\r\nEndeavor to be at BGI Group Nigeria Ltd on Friday 6th ,April,2018 by 9am prompt\r\n\r\n\r\n\r\nBGI GROUP NIGERIA LIMITED is a fast-growing business strategy and human capacity development outfit dedicated to providing innovation business solution to her teeming clients and customers.\r\n\r\n\r\n\r\nLocation: 4 All Ogungbeye st, off Amara-olu,( first gate bus stop), Agidingbi, Ikeja\r\n\r\nCome with a copy of your CV,photocopies of your credentials and this mail for clarification issues and for security purposes.\r\n\r\n\r\n\r\nDo well to respond to this mail to confirm receipt and your availability\r\n\r\n\r\n\r\nFor further inquiries, please call the secretary on 07033475042.\r\n\r\n\r\n\r\nMANAGEMENT\r\n\r\nHR A.D HAPPINESS\r\n\r\n\r\n\r\nBEST OF LUCK",
    createdAt: "2018-04-06 03:03:11",
    updatedAt: "2018-04-06 03:03:11",
    title: "Please is this legit????",
    
    inviteId: "7915d072-1f85-4f23-93f0-66dc57ff771a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Supermarket job\r\nPER DAY   :#3500\r\nPER MONTH:#45000\r\nMale/Female\r\nEducated and Uneducated, if interested CALL 08188524615",
    createdAt: "2018-04-06 15:22:08",
    updatedAt: "2018-04-06 15:22:08",
    title: "Is this real?",
    
    inviteId: "f230efcf-9710-4fe7-8409-96de90754849"
  },
  {
    userId: "07f57d25-db1e-493b-accb-7d4c57da1eaa",
    body:
      "any reliable info on \r\nWith reference to your CV sent to us,\r\n\r\n you are hereby scheduled for an interview with us at Strategic and Global Resources .\r\n\r\n\r\nTime : 10am\r\n\r\n\r\nDate: Monday 16th April 2018\r\n\r\n\r\nAddress : 5 Resource building, surulere Industrial Road, Adeniyi Jones,\r\n\r\n\r\nCome  with a copy of your CV.  \r\n\r\n\r\n\r\nRegards\r\n\r\n\r\nADMIN UNIT \r\n\r\nStrategic careers Nigeria ",
    createdAt: "2018-04-14 03:23:13",
    updatedAt: "2018-04-14 03:23:13",
    title: "Any Reliable Info",
    
    inviteId: "2ab158e7-dead-458c-afb5-138950504a68"
  },
  {
    userId: "50b19f3f-4d97-4278-9f48-f8315cece748",
    body:
      "Dear Applicant,\r\n\r\n \r\n\r\nWe are pleased to invite you for an interview for the role of a Customer Service Representative scheduled for Monday 16th April 2018 by 11noon prompt at plot 4, Jeremiah Ugwu Street, Off Admiralty Way Lekki phase 1,Lagos. Kindly attend with copy of CV, 3 passport photographs and photocopy of all credentials with birth certificate in a file. Kindly do a research on Cable TV and TV Content.\r\n\r\n \r\n\r\nRegards\r\n\r\n \r\n\r\nFront Desk",
    createdAt: "2018-04-14 01:24:41",
    updatedAt: "2018-04-14 01:24:41",
    title: "Please how genuine is this job",
    
    inviteId: "cd194a96-ed81-4002-8e36-1e0763a446de"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been shortlisted for an assessment on MON.9/04/18. Details;\r\nVenue:No 8 Adebare Street, B.Q Bakery Building, Ogudu, Lagos \r\nTime:9am",
    createdAt: "2018-04-08 04:41:43",
    updatedAt: "2018-04-08 04:41:43",
    title: "Please does anyone know if this is real",
    
    inviteId: "7843b41d-d3d1-415a-8f88-9b689d2c82af"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Young Engineers are needed in a multinational company. Applicants with degree in electrical/electronics engineering should write to networkengineer945@gmail.com",
    createdAt: "2018-04-07 02:53:36",
    updatedAt: "2018-04-07 02:53:36",
    title: "is this real?",
    
    inviteId: "0c1c5d1f-eecb-43ae-8bfc-174e5d252a70"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Based on your CV evaluation, GM Group invites you for an interview at No. 19 Bode Thomas Road, Onipanu Lagos on Sat. 07/4/18 by 9am. Enq. 07032973392",
    createdAt: "2018-04-07 04:16:45",
    updatedAt: "2018-04-07 04:16:45",
    title: "pls help just got dis now",
    
    inviteId: "8b8e136c-2e5b-4dda-8328-cc88c8d15623"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Your CV was successfully received by us, we shall review it, but please note, You have been Automatically Scheduled for an interview at Alajo Online Head Office on the 9/4/2018 by 9am. The interview include Oral and Written test, you are advised to come with both Original and photocopy of your credentials and 1 colored passport photograph.\r\n\r\nAt present, available positions ares: Direct Sales Representatives/Cash Officer (Involves Sales of our product and services) And Marketing Executives. Any other position except this are presently unavailable.\r\n\r\nFollow this description to our office, From Iwo-Road Ibadan, take a Cab to Iyana Church, alight at Cele Bus Stop. At this same spot (Cele Bus-Stop) You'll see a Glass House, Green Color, a 2 Storey Building that's Alajo Online Head Office.\r\n\r\nConfirmation of this appointment is inevitable as this would determine whom we are expecting for this interview. \r\n\r\nPlease call +2349094284239 for Confirmation",
    createdAt: "2018-04-07 12:30:20",
    updatedAt: "2018-04-07 12:30:20",
    title: "Please is this legit????",
    
    inviteId: "988a1e5b-5f07-420a-8610-91348c7775a3"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      'In need of 5 young programmers - fresh graduates who are good at code. Salary would be between 300-400k monthly \r\nA lot of travel and travel allowances. \r\n\r\nThey would be working with a GIS company and would be traveling among Abuja, Lagos, Kaduna, Edo and Oyo. Trainings in Germany and UAE"\r\n\r\n Send cvs to tijani.nwadei@gmail.com"\r\n\r\n kindly share to help someone...',
    createdAt: "2018-04-08 05:13:11",
    updatedAt: "2018-04-08 05:13:11",
    title: "This has been around for years!",
    
    inviteId: "650d0eab-5944-487c-a12b-ee93533df048"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant.\r\n\r\n \r\n\r\nTrust his meets you in perfect shape.\r\n\r\n \r\n\r\nYour application for the position of VSR has be considered and you are shortlisted form interview with details below.\r\n\r\n \r\n\r\nDATE: Tuesday,10th April, 2018.\r\n\r\nTIME: 10:00AM\r\n\r\nVENUE: 5, Prince Adelowo Adedeji Street, Off Admiralty Way, Lekki Phase 1. Lagos.\r\n\r\n \r\n\r\nPlease come with Original and photocopies of your credentials with a VALID DRIVERS LICENCE.\r\n\r\n \r\n\r\nKindly confirm receipt and availability for the interview.\r\n\r\nCall 09061626385 for details.\r\n\r\n \r\n\r\n \r\n\r\nRegards,\r\n\r\nAllen\r\n\r\nAllen-Alebiosu Akinwunmi Raphael,\r\n\r\nRecruitment Officer,",
    createdAt: "2018-04-08 14:32:09",
    updatedAt: "2018-04-08 14:32:09",
    title: "Just received this text  Please help me scrutinize it",
    
    inviteId: "dc8a2be2-5677-4586-b15f-24dde41dac69"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Candidate,\r\n\r\n                           \r\n\r\nIn response to your application for the role of PROFESSIONAL SALES STAFF. You have been invited for an interview at  FOSAD CONSULTING LIMITED.\r\n\r\n \r\n\r\nDetails below:\r\n\r\n \r\n\r\nDate: Monday 9th of April , 2018\r\n \r\nTime: 3:00pm prompt.\r\n \r\nVenue: No 8, office apartment , Alaba Williams ,off Admiralty way, Lekki Phase 1.\r\n \r\n\r\n \r\n\r\n \r\n\r\n \r\n\r\nKind regards,\r\n\r\n \r\n\r\nOlalekan Adeyanju\r\n\r\nRecruitment Associate/HSE Officer\r\n\r\ncid:image001.jpg@01D33880.837AAA60\r\n\r\nA :No. 8, Office Apartment Rasheed Alaba Williams Off Admiralty Way,\r\n\r\n      Lekki Scheme 1, Lagos, Nigeria.\r\n\r\nT :+234 01 735 8675 Ext. 102, 120 |  M: +234 708 860 9855\r\nE : oadeyanju@fosadconsulting.com\r\n\r\nW: www.fosadconsulting.com",
    createdAt: "2018-04-08 14:34:30",
    updatedAt: "2018-04-08 14:34:30",
    title: "Just received this mail  Please help me scrutinize it",
    
    inviteId: "e6a8c13e-8f5a-41bd-8172-bdcf874bf1f3"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Sequel to your application received via our online advertorial page, your details as been screened  and it interests our organization. In view of that, you have been shortlisted for an interview, it would be conducted in Two phases, Oral and Essay. Kindly find the details below. \r\n\r\n\r\n\r\n Date Tuesday, 10th April, 2018\r\nTime -8:30am prompt\r\nVenue-The Zonal Office, B&S Consulting Group, Suite 4A, Ogungbeye str, Off Amaraolu, Opposite Zenith Bank, Agidingbi-1st gate, Ikeja, Lagos. \r\n\r\n\r\n\r\nB&S Consulting Group is a fast growing business strategy and human capacity development outfit: Provides customized solutions for the formulation and implementation of business strategies\r\n\r\n\r\n\r\nYou are required to come with a hard copy of your Resume and 2 passport photographs. Dress appropriately and be punctual. You will be meeting with the Executive board\r\n\r\n\r\n\r\nWe apologize for the short notice; however it is important you confirm your availability. Kindly do that by replying this email as soon as possible. For more details reach call79 on 08184429919\r\n\r\nBest Regards\r\n\r\n\r\n\r\nFor: The Human Resource Team",
    createdAt: "2018-04-08 15:37:02",
    updatedAt: "2018-04-08 15:37:02",
    title: "Great minds, please how legit is this??",
    
    inviteId: "09d573a8-378f-42b1-b6f2-567fb25e7388"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Global Resources schedule you for Aptitude test /briefing on Mon 9/04/18 by 9:am @ 19 Bode Thomas Road, Awoyokun/ Onipanu Bus/stop. Ref: MGR/12/JE 090-8041-6747",
    createdAt: "2018-04-08 15:42:26",
    updatedAt: "2018-04-08 15:42:26",
    title: "Please is this legit????",
    
    inviteId: "15f2a58e-eac5-4385-9302-110afb316f47"
  },
  {
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "Dear [applicant name],\r\n\r\nThank you for your recent application to our company.\r\n\r\nI am pleased to inform you that you have been shortlisted and you are invited to attend an interview for a Graduate Trainee role Tuesday 10th of April, 2018.\r\n\r\nVenue: Suite 1 - Eleganza Plaza 33, Mobolaji Johnson Avenue, Oregon",
    createdAt: "2018-04-08 22:22:01",
    updatedAt: "2018-04-08 22:22:01",
    title:
      "Pls my people is this legit? I just got an invitation for interview from AfriGlobalGroup",
    
    inviteId: "46abce35-56bd-4ae7-8802-f3bb62fe5011"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "In line with your application via our online advertorial,after much evaluation of your profile on our portal, we were impressed with your qualifications and skills which makes you a prospective candidate,we are pleased to inform you that you have been selected and invited for an Interview/Assessment with our HR department.\r\n\r\nEndeavor to be at GLOBAL GROUP MULTI-SERVICE on Tuesday 10th April,2018  by 8:30am prompt.\r\n\r\nGLOBAL GROUP  MULTI-SERVICE is a fast-growing business strategy and human capacity development outfit dedicated to providing innovative business solution to her teeming clients and customers.\r\n\r\nLocation:Suit 4B Ogungbeye Street,Off Amaraolu,Ikeja.Lagos.\r\n\r\nCome with a copy of your CV containing three references, photocopies of your credentials and this mail for clarification issues and for security purposes. \r\n\r\nDo well to respond to this mail to confirm receipt and your availability.\r\n\r\n\r\nFor further inquiries,please call the secretary on 08155575732\r\n\r\nMANAGEMENT/HR\r\n\r\nDr. BELLA",
    createdAt: "2018-04-09 14:40:35",
    updatedAt: "2018-04-09 14:40:35",
    title:
      "I think this is not legit because more than 4 companies are tagged with the same address below. Just for info or what do you think? Have a great week ahead!",
    
    inviteId: "ead5f061-bce6-4c20-9241-6aae664dc785"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "HR 110 You are to come for Job briefing with live solutio @ 3rd for, Crownet Plaza Doris Gidado Street Wuye Abuja by 9am",
    createdAt: "2018-04-10 05:32:17",
    updatedAt: "2018-04-10 05:32:17",
    title: "Please how Legit is this?",
    
    inviteId: "0d4329e5-549d-4d8c-9189-55871c65d2f6"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "HR invites you for an interview slated for Thursday 17th August 2017 at 27, Ayodele Ojo, By Traffic Light Bus Stop, Coker Rd, Ilupeju, Lagos.Time 9am. DESTINY",
    createdAt: "2018-04-10 05:33:55",
    updatedAt: "2018-04-10 05:33:55",
    title: "I have a funny feeling about this, can anyone verify please?",
    
    inviteId: "4e356ff9-8690-474e-bc94-16cea09c47e9"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "JnJRecruting\r\n\r\nJob placement for fresh graduate\r\nExperience: Little or no\r\nHonours: Minimum of Second Class\r\nAge: 27 or less\r\nSalary: #20,000 - #40,000\r\n\r\nPlease submit your CV to jnjrecruits@hotmail.com",
    createdAt: "2018-04-10 05:37:26",
    updatedAt: "2018-04-10 05:37:26",
    title: "JnJRecruting?!",
    
    inviteId: "f6e9c2fe-1e7f-44a5-b3d5-33e261525e5e"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear {applicant’s name}\r\n\r\nWe refer to your online application for the position of a Software Developer / Programmer and wish to invite you to an interview as follows:\r\n\r\nVenueL 5 Sadiku Street, Agidingbi, Ikeja Lagos behind Zenith Bank on Lateef Jakande Road (old Agidingbi Road)\r\nDate: Friday, April 13, 2018\r\nTime: 11 am\r\n\r\nKindly confirm your attendance by responding to this email\r\n\r\nPlease bring along your credentials and last pay advice, if any.\r\n\r\nRegards,\r\n\r\nOla.\r\n\r\n(Sent from careers@cittanuvola.com)",
    createdAt: "2018-04-10 05:55:25",
    updatedAt: "2018-04-10 05:55:25",
    title:
      "Hello guys, Please is this email real, they also sent a text message. from careers@cittanuvola.com",
    
    inviteId: "a815fa3d-6f34-43f6-ada0-a83c5bb03ea5"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Dear Applicant,based on your application through a recruiting firm, you have been shortlisted for an interview with OAS LTD branch office by 7:30am @ Emiloju House, 1st floor, adj 7up bus stop, Monatan Iwo rd, Ibadan. For more information, please visit www . omohsapexsolutionlimited.com #achiever#",
    createdAt: "2018-04-11 05:26:38",
    updatedAt: "2018-04-11 05:26:38",
    title: "is this real please?",
    
    inviteId: "68c4aca2-bc59-4414-ac81-450043a9f729"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "MG USA invites you for an interview with our HR executives on Fri 18/08/17@5,oke close by police post junction oregun ikeja Lagos by 8am prompt.(10512435)",
    createdAt: "2018-04-11 05:29:55",
    updatedAt: "2018-04-11 05:29:55",
    title: "Anyone received this too?",
    
    inviteId: "22ec6c0e-ff4f-4826-a0b0-e9e16656b356"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Pls have anybody heard about mg groups of company...i was ask to send my cv to mggroupsofcompany@gmail.com",
    createdAt: "2018-04-11 05:33:04",
    updatedAt: "2018-04-11 05:33:04",
    title: "Legit?",
    
    inviteId: "510d98b9-ca27-4806-a1bf-ee758d26594f"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "IMPORTANT; Following the reciept of your application at PURE GOLD LOGISTICS SYNERGY (PGLogS) you are hereby invited for an interview on\r\n26th Aug. 2017\r\nTIME: 10:30 AM\r\nAT 35 EWEJE STR, OFF INT. AIRPORT ROAD, MAFOLUKU LAGOS.\r\nCOME ALONG WITH 6 COPIES OF YOUR CV AND 2 PASSPORT PHOTOGRAPH.",
    createdAt: "2018-04-11 05:34:21",
    updatedAt: "2018-04-11 05:34:21",
    title: "Any ideas if this is real please?",
    
    inviteId: "0c03068a-c61d-49b1-a1a0-f5867428e2f0"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Pls can you help me to confirm how true it is \r\nCongratulations, You have been shortlisted for an interview on Monday at No5, Oke- close off olayinwola street oregun ikeja Lagos, close to House of Assembly service Commission by 9:00am. Good luck \r\n\r\nHand of Hr\r\nAdejobi Esther",
    createdAt: "2018-04-11 05:35:58",
    updatedAt: "2018-04-11 05:35:58",
    title: "Has anyone received this please?",
    
    inviteId: "eef6b526-ff01-4f81-9bed-f662676ec4b2"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please, I need to know if this company is real.\r\nProlight Resources Limited \r\n4, Karim Est, Amara-Olu Str, Off Ltv8 way, 1st gate Agidingbi-Ikeja.",
    createdAt: "2018-04-11 17:26:13",
    updatedAt: "2018-04-11 17:26:13",
    title: "Please I need to know if this company is real",
    
    inviteId: "96a6d807-4224-446d-a74c-b4865e84e01f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "BG-LEAD CONCEPT schedule you for ASSESSMENT/INTERVIEW on Thursday 12/4/18 at Cranfield consulting \r\n7, Razaq Balogun Street, off Adebola street, off Adeniran Ogunsanya road, Surulere by 9am.  \r\n HR-RICHARDSON   17527",
    createdAt: "2018-04-11 20:04:28",
    updatedAt: "2018-04-11 20:04:28",
    title: "This is fake right?",
    
    inviteId: "87ad0a7d-cc60-4d39-82e2-f0bd898d2a99"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear  Applicant\r\n\r\n\r\nWith reference to your CV sent to us. You are hereby qualified for the position of a Sales Representative and you are scheduled for an interview with us at Management Resources .\r\n\r\n\r\nTime : 10am\r\n\r\n\r\nDate:Wednesday 11th April, 2018\r\n\r\n\r\nAddress : 5 Resource building, Surulere industrial ,Acume Junction, Adeniyi Jones ,Ikeja, Lagos State.\r\n\r\n\r\nPlease come with a copy of your CV.  \r\n\r\n\r\nRegards\r\n\r\nADMIN UNIT \r\n\r\nStrategic careers Nigeria ",
    createdAt: "2018-04-11 20:08:18",
    updatedAt: "2018-04-11 20:08:18",
    title: "is this real?",
    
    inviteId: "7fd70202-19a5-4c30-827f-2366fe325a3e"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please guys, I got a mail from handicap international asking me to fill some form for job,....... Please how real is it? I mean are they real?",
    createdAt: "2018-04-12 03:55:58",
    updatedAt: "2018-04-12 03:55:58",
    title: "handicap international: How real is it?",
    
    inviteId: "2e5ec68a-37f1-42f3-b950-5de6968cfc3a"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Good day (name) your CV on OLX was reviewed and you are invited for an interview at SNL branch office, 168 Emis bus stop, Ilo Awela, Tollgate, Ogun state on Monday 21st Aug., 2017 by 9a.m with a copy of your CV and a passport. Identification code:Ref/2224/SN. Contact: 09025702224.",
    createdAt: "2018-04-12 05:37:18",
    updatedAt: "2018-04-12 05:37:18",
    title: "I need verification on this please",
    
    inviteId: "5929af96-952f-4d28-8952-cabce97e2833"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Dear Applicant\r\n\r\n \r\n\r\nThank you again for your application.\r\n\r\n \r\n\r\nWe are writing to invite you for an assessment test and interview with our organisation on the xxxxx at 9am prompt.\r\n\r\n \r\n\r\nAddress:\r\n\r\nAndchristie Building\r\n\r\n46 Raymond Njoku Street\r\n\r\nOff Awolowo Road\r\n\r\nIkoyi, Lagos.",
    createdAt: "2018-04-12 05:39:51",
    updatedAt: "2018-04-12 05:39:51",
    title: "Can anyone inform me reliably about the following address?",
    
    inviteId: "9c4a24f5-7249-4feb-8328-2b6ed037a1b6"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Based on our advert on jiji,SMART TECH CONSTRUCTION COMPANY invites you for an interview at our branch office on Monday 21st August by 8:30 am @No,11 Monilola Oyeyinka Street, off Ajibade Babatola junction, Ajao Estate, Airport Road, Lagos . Come with your CV Help Line: 081-8336-4437",
    createdAt: "2018-04-12 05:43:44",
    updatedAt: "2018-04-12 05:43:44",
    title: "Is this legit please?",
    
    inviteId: "34e4391b-a8bd-43ee-a2c4-a0e4857338d9"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "READ OOOOOO!!!!\r\n\r\nGreetings from Lagos.pls help me share cos I know most of your followers are here in Lagos. its God that\r\nsaved me yesterday.I applied for a job via Jiji on Monday, on Wednesday I was called for interview in Maryland Lagos.I got to Maryland took a bike to the location for the interview. When I got to the lonely building in mende there in Maryland, Okada dropped me and left, no one to ask a question, I called the number that was attached to the message of interview to tell him I'm at the venue, he picked and said his men are downstairs, I looked around and saw two men, the looks on their faces was not funny.They asked me to open the message for them to see, I opened it, after Reading they said I belong to room one, that I should switch off my phone b4 climbing the stairs, I told them I'm not expecting any call, they said its compulsory.I asked them how long the interview will last and they said 3 to 4hrs, I was tired. I told them to give me a minute let me inform my pple that I won't be home early as I told them, l went towards the gate to call my sister, as I was answering the call two men came down making them four, they started shouting on me that I'm wasting their time that is like I'm not ready for the job.As this was happening a guy from no where came behind me all I heard was \"my case is different \"and I said so is mine.\r\n\r\nHe said he saw the winners bangle I was wearing that I should meet him outside the gate. I followed him, he asked what brought me here, I told him I came for an interview, he said I should thank my God that I saw him if not it will be a different story by evening.That I should leave the place immediately that the pple are using charms on pple. I thanked him and entered a bike that dropped one guy at the gate there and left. They called and called I no pick.This morning they sent a text that my interview has been rescheduled.Lets be vigilant with online Jobs I have not been myself since yesterday.) Incase u get a text message like this..\r\n\r\n You are SHORTLISTED for an assessment on THUR 27-04-17 by 10am at\r\n1, Olabisi close, MENDE, Maryland (Lagos resident\r\nonly) HR 080-7464-5567\r\n\r\nPls Beware of this Address \r\nThey are Kidnappers and ritualists.... \r\n\r\nKindly spread de news. we never know who we might save.Sent as received....",
    createdAt: "2018-04-12 05:44:26",
    updatedAt: "2018-04-12 06:23:10",
    title: "BEWARE OF MENDE, Maryland",
    
    inviteId: "f9536dd8-7c14-4d58-84b1-c273beee3748"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Dear Candidate,\r\nYou have been invited for an interview at Lofty Heights LTD \r\nVenue: Pharmacy Plus house 28, Olanrewaju STREET, off Billings way, Oregun, Ikeja,Lagos\r\nDate:Monday 21st August,2017\r\nTime:9:30am\r\n\r\nCome with 3 copies of your CV.\r\nPlease confirm availability",
    createdAt: "2018-04-12 05:54:50",
    updatedAt: "2018-04-12 05:54:50",
    title: "Please has anyone heard of Lofty Heights LTD before?",
    
    inviteId: "cccd4699-1dd2-4abc-9e68-4fe24c34d997"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "YOU ARE AMONG THOSE QUALIFIED FOR OUR JOB TEST/INTERVIEW ON MON. 21ST AUG 2017 ADDRESS: 3RD FLOOR, NO. 8 THOMAS SALAKO STREET, OGBA B/STOP BY 9:00am 08059959913",
    createdAt: "2018-04-12 06:05:10",
    updatedAt: "2018-04-12 06:05:10",
    title:
      "This doesn't look legitimate to me, can anyone please confirm?",
    
    inviteId: "994d10c7-b06c-488f-a49a-3b9dd48dcef4"
  },
  {
    userId: "57c8bc63-9467-442b-91f7-b93d3f9cb7d0",
    body:
      "We acknowledged your cv for the position of Radio Presenter. You are hereby invited for an interview at our Head Office Zion City Radio 13th Floor, Bookshop House, 50/52, Broad Street, CMS, Lagos, on Thursday 12/04/18 by 10am. 08062904990",
    createdAt: "2018-04-12 06:09:06",
    updatedAt: "2018-04-12 06:09:06",
    title: "How true is this?",
    
    inviteId: "e2b63a21-1ed0-42d5-8bea-928055789052"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Dear Bushrah, after due review of your CV,you are invited for interview on WED 25/01/2017 by 9am at #98, Palm Avenue,Papa Ajao, Mushin, Lagos. IA/HRM.",
    createdAt: "2018-04-12 06:11:12",
    updatedAt: "2018-04-12 06:11:12",
    title: "Please is this real?",
    
    inviteId: "e1bc14e7-a30f-4a52-9ad0-27b9cf9e7fb8"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Dear Applicant,\r\nWith respect to our advert on 1st august 2017. In the Guardian Newspaper and your interest.\r\nI am pleased to inform you that you have been invited for an interview at pure Gold Logistics Synergy Ltd. No 35, Eweje Street beside Aviation Estate, off international Airport Road. Mafoluku Lagos. Find the interview scheduled date and time below.",
    createdAt: "2018-04-12 06:12:19",
    updatedAt: "2018-04-12 06:12:19",
    title: "How legit is this please?",
    
    inviteId: "35edbf0c-f2d8-4f3d-a14b-5aceb165c0b9"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "This is to inform you that you have been invite to attend an interview \r\ntomorrow, Wednesday 23rd of August 2017\r\n\r\nPlease find below the details of the interview:\r\n\r\nVenue: WAPIC Insurance PLC\r\n\r\nAddress: 119, Awolowo Road, Falomo, Ikoyi, Lagos\r\n\r\nTime: 10:00am\r\n\r\nKindly ensure to be there on time\r\n\r\nPlease acknowledge this mail to confirm receipt and attendance.\r\n\r\nWish you the best of luck",
    createdAt: "2018-04-12 06:13:26",
    updatedAt: "2018-04-12 06:13:26",
    title: "Please who knows this place?",
    
    inviteId: "fc989570-0960-47ec-8bbf-cc12cf3d4033"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "SILVER HEIGHT ENT. Invites You For An Interview Tomorrow @No. 9 Parliamentary Road, Opposite Njimintai Filling Station, Calabar. Time: 8.30am. REF: Ebt/L/637..For enquiries call 081-6894-7512",
    createdAt: "2018-04-12 06:14:31",
    updatedAt: "2018-04-12 06:14:31",
    title: "Silver height Ent? legit please?",
    
    inviteId: "501258df-576d-4de1-ae4c-8192536d4466"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "You are invited for a written test and interview on Thursday 24th August. 2017 by 8.00:am at the Head office of NewsDirect at 34, Aromobi Str, Blessing Estate, Gasline B/stop, Ijoko Road, Sango Ota. Please come with your CV. Ask of Seun 08069815558",
    createdAt: "2018-04-12 06:17:03",
    updatedAt: "2018-04-12 06:17:03",
    title: "Sham or real?",
    
    inviteId: "c767c753-b9a9-4ec1-9761-4da0d4dbf898"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Dear Applicant,\r\n\r\nPrior to your application for the available job of a customer service representative, you have been considered for an aptitude test and oral interview with GERALD GROUP which has been scheduled for AUGUST 25TH 2017, the interview will start exactly 9.00 am. Be punctual\r\n\r\nPlease bring original copies your credentials, resume (hard copy), two passports with you to the interview, and hand them to our Human Resource Desk @ No 95, Fadeyi Express Road Fadeyi Bus-stop Lagos State USA\r\n\r\n\r\nPlease Note: The interview session will last 3 hours minimum which includes written test and oral. However come with your writing material\r\n\r\nPlease write us to confirm/acknowledge your presence at the interview. \r\n\r\nWe look forward to meeting you. \r\n\r\nBEST REGARDS",
    createdAt: "2018-04-12 06:18:21",
    updatedAt: "2018-04-12 06:18:21",
    title: "Can anyone inform me reliably about Gerald group please?",
    
    inviteId: "dd876ee4-4bea-4b2b-abe3-461dc101680a"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Dear (Name), B'SKILLED LTD invites you for a career path interview on SAT 26/8/17 at 4, Alh. Kareem street (1st Gate) Agidingbi, Ikeja by 9am.HR JANE",
    createdAt: "2018-04-12 06:21:38",
    updatedAt: "2018-04-12 06:21:38",
    title: "Please who knows this company?",
    
    inviteId: "9b2be8a9-377e-4f1f-8d06-71f2eaa51d35"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "DC SERVICES invites You for a Recruitment Tomorrow at Our Office:70 Airport-Ogba Rd,Opp Airport Quarters at DENVER CASTLE,B4 BENONI-JUNCTION,Benin by 9am.GAEM",
    createdAt: "2018-04-12 06:23:24",
    updatedAt: "2018-04-12 06:23:24",
    title: "DC services, are they real please?",
    
    inviteId: "d9afce05-dda5-4504-bd71-a9ad92f8706e"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Good day, Your application has been reviewed and you are to report at SUPREME NIG by 9am on Wednesday August 30th with your CV and one passport for an assessment interview\r\nVenue:6th floor of L,monarch plaza opposite rikaz shopping plaza by salvation bus stop,Opebi,Ikeja,\r\ncall the admin on 08120860979 for enquiries.. ID/088/SN",
    createdAt: "2018-04-12 06:24:50",
    updatedAt: "2018-04-12 06:24:50",
    title: "Who can confirm this please?",
    
    inviteId: "3b6e5ade-5fe6-4a60-8ee9-c7c747d1d955"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Further to your resume sent in, kindly make yourself available for an interview. See details below.\r\n\r\nVenue: 8 Thomas Salako street, Ogba Lagos \r\nTime: 9am",
    createdAt: "2018-04-12 06:26:19",
    updatedAt: "2018-04-12 06:26:19",
    title: "Does anyone have anything on this address?",
    
    inviteId: "1caeb10a-2745-4f89-ad11-2dedad8b9ee3"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "PG shortlist you for an interview on Fri 1/9/17 by 9am @27 Ayodele Ojo by Coker Road Traffic Light B/Stop Ilupeju, Lagos. 090-****-****\r\nRITECONCEPTS",
    createdAt: "2018-04-12 06:27:20",
    updatedAt: "2018-04-12 06:27:20",
    title: "Authentic?",
    
    inviteId: "fcfefe11-9ef5-47e8-b5aa-18d2f0cc94a7"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "PINNACLE-O SERVICES invites you for an interview TOMORROW @SUITE 208,PLOT 16C TRANS AMADI IND LAYOUT OPP.WEST AFRICAN GLASS IND. OGINIGBA, PH.BY 9AM.(HR116)",
    createdAt: "2018-04-12 06:28:26",
    updatedAt: "2018-04-12 06:28:26",
    title: "Who knows Pinnacle-o Services please?",
    
    inviteId: "e6fa8ea3-e88b-4e52-9920-983500b173d9"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Based on CV review, you've been considered for an interview by 9am on THU 31/8 at 2 Sunday St off Ikorodu Road, Palmgrove B/S, Lagos dovegreenglobalservices.comGT",
    createdAt: "2018-04-12 06:29:46",
    updatedAt: "2018-04-12 06:29:46",
    title: "No company name, anyone else got this?",
    
    inviteId: "dd8c4f21-1885-4e2d-b016-5b130895fba3"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "You are invited to the screening interview on 5/9/2017 by 9 am prompt. Venue:-Corporate office, New Abak Road, off Ikot Oku Ikono Junction, Uyo Akwa Ibom State. Come with the original and photocopies of your credentials, two file jackets,two passports photograph.",
    createdAt: "2018-04-12 06:31:49",
    updatedAt: "2018-04-12 06:31:49",
    title: "verification needed please.",
    
    inviteId: "e0d308db-4198-4a7d-8fcf-f9bf5881f384"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Sequel to your CV submitted for job application at Pcon Energy Services Limited.\r\n\r\nYou are hereby invited for interview\r\n\r\nDate: Wednesday, 6th of September, 2017\r\n\r\nTime: 9am prompt\r\n\r\nVenue: No73 Itokin Road, Rainbow Event Center, Akasolori Bus Stop, Ikorodu, Lagos State.\r\n\r\nKindly come with the following:\r\n\r\n1. Print out of the Invitation Letter direct from the email page\r\n\r\n2. Photocopies and original credentials and CV\r\n\r\n3. Two recent passport photograph\r\n\r\nFor directive call the following Numbers 090********, 080********\r\n\r\nRegards\r\n\r\nManagement",
    createdAt: "2018-04-12 06:34:22",
    updatedAt: "2018-04-12 06:34:22",
    title: "Legit or not?",
    
    inviteId: "a64d049d-a32e-4afd-ba6b-0d07dbd6df7a"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Dear applicant, \r\nI am pleased to inform you that you have been shortlisted for a job interview with TOPVIEW NIG PST70. Our hiring committee has reviewed your resume and would like to meet with you in person. \r\nThur,7 Sept, 9am. 31 New Market Road(3rd floor) opp Nairabet,Bata junction,Onitsha.\r\nBe Punctual.",
    createdAt: "2018-04-12 06:36:19",
    updatedAt: "2018-04-12 06:36:19",
    title: "Please how Legit is this?",
    
    inviteId: "9733ec1b-a59a-4323-b926-27d51b50a89f"
  },
  {
    userId: "e99c2719-975f-4ebd-b818-36619eadca0c",
    body:
      "Greetings,\r\n\r\nDEAR EMMANUEL OKONTA\r\n\r\nSequel to the recent application you made online and after a careful analysis of your application and a great recommendation by our online Human Resource Management Portal, we were impressed with your qualifications and skills which makes you an excellent candidate for this role and also to our organization. We would like to invite you for an Interview/Assessment at our office to tell you more about this role, our company's mode of operations and of course get to know you better.\r\n\r\nDate: Thursday 12th April 2018\r\n\r\nTime: 9:00AM\r\n\r\nAddress: No 7, Razaq Balogun Street Adebola Street by Adeniran Ogunsanya Road, Surulere, Lagos.\r\n\r\nKindly come along with your updated CV and acknowledge this mail with reply.\r\n\r\nFor more enquiry: Call 0902-445-8133\r\n\r\nWe look forward to seeing you.\r\n\r\nBest regards,\r\n\r\nESTHER.\r\n\r\nHR DEPT\r\nCRANFIELD CONSULTING\r\nBG-LEAD CONCEPT",
    createdAt: "2018-04-12 09:45:42",
    updatedAt: "2018-04-12 09:45:42",
    title: "Please help me identify if it's a real or a fake job invite",
    
    inviteId: "2d1d6357-43a2-4b14-b0f0-99104460cdfc"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Got this Interview invite as text message, not email, please how wanna if it's genuine...help a brother, very confused abt this.\r\n\r\nYou are invited for an aptitude test with UBA Plc, at UBA House 57 Marina.\r\n\r\nDate: 12/04/18\r\nTime: 2:00PM\r\n\r\nPlease come with all your original credentials.",
    createdAt: "2018-04-12 15:00:14",
    updatedAt: "2018-04-12 15:00:14",
    title:
      "Got this Interview invite as text message not email, please how wanna if it's genuine...help a brother, very confused abt this.",
    
    inviteId: "fc5dd2aa-ea5b-45bd-8345-365269084dbb"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hello ADEYINKA, present your CV for interview on the MD’s desk on FRIDAY 13/04/2018 at MADE HILLS SOLUTION.\r\nTime: 9am.\r\nAddress: 65c Opebi road, opposite glass house by Salvation b/stop, Opebi, Ikeja, Lagos.\r\nNeed help/directions?\r\nCall Admin: 0803-449-6175/6202",
    createdAt: "2018-04-13 16:00:27",
    updatedAt: "2018-04-13 16:00:27",
    title:
      "PLEASE HELP A BROTHER OUT OOO.... HOW  REAL IS THIS INTERVIEW? THANKS",
    
    inviteId: "20bc5e02-fa83-4e94-aacf-143ebb415b68"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear. Applicant\r\nYour application form has been received by us,you are to call the company lawyer for your approval letter.\r\nThere is an interview/training for you scheduled for 7th march 2018 at 9:00am sharp,when going for the interview take along with you a copy of your cv and approval letter which will be given to you by the barrister.\r\nName: Barr. Richie Roberts esq.\r\nContact No: 08088340885",
    createdAt: "2018-04-13 16:01:42",
    updatedAt: "2018-04-13 16:01:42",
    title: "Scam Alert!",
    
    inviteId: "aacfca42-e27a-434b-88c7-1902707fa3c7"
  },
  {
    userId: "32a94525-892f-4d7f-9b47-f101a2ed6914",
    body:
      "Dear JOHN, your INTERVIEW with our EXECUTIVES at DPCS has been scheduled for FRI 13/04/18 by 9am at 116,Akowonjo rd,Jimoh bustop,Egbeda.Come with ur CV.10017555",
    createdAt: "2018-04-13 17:39:31",
    updatedAt: "2018-04-13 17:39:31",
    title: "I want to know the realness of this message",
    
    inviteId: "6fee1768-8105-41e9-84d6-10c6e94592c6"
  },
  {
    userId: "cce4914a-0c4f-41be-9bfb-ab117cf935ce",
    body:
      "Help Pls I genuine is this interview \r\n\r\nDEAR IDOGAI HOPE,\r\n\r\n\r\nYour application for the position of a HUMAN RESOURCE OFFICER scaled through our selection system and am pleased to inform you that you have been short-listed for interview with us at ELITE OUTSOURCING SOLUTIONS NIG. The interview is likely to last for about 2 hours 45 minutes.\r\n\r\n\r\nInterview Details:\r\n\r\nDate: Monday 16th April, 2018\r\n\r\nTime: 10:00 am\r\n\r\nAddress: No. 5, University press building, surulere industrial road, Adeniyi Jones, Ikeja.\r\n\r\nKindly reply this mail if you will be available for further details.\r\n\r\n\r\nREGARDS\r\n\r\nHR MANAGER, ELITE OUTSOURCING\r\n\r\n08071160929",
    createdAt: "2018-04-13 19:01:43",
    updatedAt: "2018-04-13 19:01:43",
    title: "Miss Hope",
    
    inviteId: "bac11f01-9f9e-47be-a254-5954bca7da89"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please any one knows how genuine GAIN recruitment Ltd is? 16 Akinhanni street surulere, Lagos",
    createdAt: "2018-04-14 05:50:37",
    updatedAt: "2018-04-14 05:50:37",
    title: "GAIN recruitment Ltd",
    
    inviteId: "428a60fc-7a57-4b6e-a42f-ec9657f6d0f7"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "pls I want to know if this interview is genuine or real?\r\n\r\nYou have been scheduled for interview with MetroHealth HMO Limited for the position of Data Entry Officer (ADHOC STAFF)\r\nDate: Tuesday 17th April, 2018\r\nTime: 12:00pm\r\nVenue: 14th Floor, St Nicholas House,",
    createdAt: "2018-04-14 06:28:04",
    updatedAt: "2018-04-14 06:28:04",
    title: "MetroHealth HMO Limited",
    
    inviteId: "ec2ac541-1687-4e2d-b840-a213706981f9"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Fifth Quadrant Performance Limited (FQPL)\r\n\r\nAddress: 2nd Floor, No 2, Macarthy Street\r\n          Beside TBS, Onikan\r\n          Lagos",
    createdAt: "2018-04-15 01:24:03",
    updatedAt: "2018-04-15 01:24:03",
    title: "Great minds, please any info on the company below?",
    
    inviteId: "498ec640-fe8d-4a44-ae59-76cd43e222a1"
  },
  {
    userId: "fd13de9e-085f-4b14-950c-b6067dcbbe07",
    body:
      "Resume Approved. You have been shortlisted for an ASSESSMENT on TUE 17-04-18 by 9am,at 8, Adebare street, B&Q Building Ogudu, Ojota, Lagos State. MD/CEO\r\n\r\nCan someone confirm this for me please.... Thanks.",
    createdAt: "2018-04-16 23:07:01",
    updatedAt: "2018-04-16 23:07:01",
    title: "Interview confirmation",
    
    inviteId: "ec99c678-f14b-48b4-96e5-736ffa5b858c"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Meat the HRM your interview comes up by 9am Tuesday 11/4/18 Ground Floor, 32 Olufemi Rd Off Ogunlana Drive S/Lere Lagos. Application ID: FUFX Show security",
    createdAt: "2018-04-17 16:00:37",
    updatedAt: "2018-04-17 16:00:37",
    title: "Please are they real??",
    
    inviteId: "4ec1fc2f-a6f8-48fb-b361-4fb45256af76"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "In view of ur c.v,u re invited to Job interview: Relationship officer; 14/4/16;8am;VENUE:203-205 Oshodi/Apapa iyana Isolo,Lagos.Ask of Mrs.Beatrice 08068697227",
    createdAt: "2018-04-18 02:16:14",
    updatedAt: "2018-04-18 02:16:14",
    title: "Invites like this are definitely not legitimate",
    
    inviteId: "6d74640e-b990-4fe6-89ed-14cd8f1e1a8c"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'Guys abeg i need you help, I gat a message yesterday that goes like this "BSGM LTD selects you for an Assessment with our HRM on Tue 12/04/16 by 9am at 4 Alh. Karrem Str, Amaraolu by 1st Gate Agidingbi, Ikeja....... pls is this real or just a scam, or did anyone here also gat the message..thanks',
    createdAt: "2018-04-18 02:18:22",
    updatedAt: "2018-04-18 02:18:22",
    title: "BGSM is scam",
    
    inviteId: "23109847-dcc1-4e31-ae99-5f95e001c0ae"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Morning all, I got this message this week. I want to know if the company is genuine. Did anyone get this message. Peeps plz help a brother out. Tnx\r\n\r\nYou have been selected for our first interview as follows:\r\nVenue : Soultrag hotel (Hall-1) at Petedo Bustop, Agbara.",
    createdAt: "2018-04-18 22:36:47",
    updatedAt: "2018-04-18 22:36:47",
    title: "please I need to know if this is real.",
    
    inviteId: "a4a63eef-a219-4112-a5e2-5e9491ef487d"
  },
  {
    userId: "9ff8fc7e-04c5-4670-937d-f854331dfdef",
    body:
      "Please does anyone here know anything about Dailyfamily? I got an invite from them. Please assist if you can.\r\n\r\nThanks",
    createdAt: "2018-04-18 22:40:55",
    updatedAt: "2018-04-18 22:40:55",
    title: "Hello",
    
    inviteId: "076912c0-bc65-4232-9075-92fb006a873b"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Following the consideration of an online  recommendation, after much evaluation of your profile, we were impressed with your qualification and skills which makes you one of the prospective candidates.We are pleased to inform you that you have been selected and invited for an Interview/Assessment at BOSS GROUP GLOBAL MULTI-SERVICE on  Friday 20th April,2018  by 8:30am prompt. \r\n\r\nBOSS GROUP GLOBAL MULTI-SERVICE is a fast-growing business strategy and human capacity development outfit dedicated to providing innovative business solution to her teeming clients,assists clients in creating and managing strategic relationships and alliances with other organisations,including startups to multinational companies, research institutions,and government agencies.As a result, they are able to leverage on external expertise,technology,and intellectual properly to expand their products,service,functionality.\r\n\r\nLocation:Suit 4A Ogungbeye Street,Off Amaraolu,Ikeja.Lagos. \r\n\r\nCome with a copy of your CV,photocopies of your credentials and this mail for clarification issues and for security purposes. \r\n\r\nHowever it is important you  confirm receipt and your availability replying this email. \r\n\r\n\r\nFor further inquiries,please call the secretary on 08155575732\r\n\r\nMANAGEMENT/HR\r\n\r\nDr. BRIGGS",
    createdAt: "2018-04-19 01:25:18",
    updatedAt: "2018-04-19 01:25:18",
    title:
      "Just getting different invitation since the day i register on one job site tagged jobomas. More than 2 companies having same address. Is jobomas really a genuine site?",
    
    inviteId: "95bfba5d-7612-49a5-950a-3ace32e93296"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Pls I have just been invited for an assessment followed by interview by this company, WHOgoHost limited for the role of a customer support intern\r\nPls house I need info as much as possible about them.\r\nThanks",
    createdAt: "2018-04-19 03:45:47",
    updatedAt: "2018-04-19 03:45:47",
    title: "WHOgoHost limited for the role of a customer support",
    
    inviteId: "2d3ea9a6-b045-4948-860f-68b680bcf273"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Candidate,\r\n\r\nSequel to your application for the position of a Customer Service Officer, you have been scheduled for an interview. \r\n\r\nDetails are as follows:\r\n\r\nDate: Friday 20th April 2018\r\n\r\nTime: 9:00 am\r\n\r\nVenue:16, Adelabu Street, Masha, Surulere, Lagos\r\n\r\nKindly confirm your availability and come along with an updated copy of your CV.\r\n\r\nMany thanks,\r\nRecruitment\r\ncareers@haulageandlogisticsnigeria.com\r\n\r\n\r\n\r\nPls how real is dis",
    createdAt: "2018-04-19 03:47:46",
    updatedAt: "2018-04-19 03:47:46",
    title: "Please help with this",
    
    inviteId: "553f4e9c-707a-4853-a79b-642f2ab1d64a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Further to ur recent application to showpiece Corporate Resourcing, U have been scheduled for an interview on Friday, April 20,2018 at 16a Ijaiye Road Ogba by 8.45am. Please come with originals and photocopies of ur credentials as well as one (1) passport and 3copies of ur CV",
    createdAt: "2018-04-19 03:48:38",
    updatedAt: "2018-04-19 03:48:38",
    title: "Please help me confirm how true is this",
    
    inviteId: "934ca831-10d5-4d3f-bb79-6b6d9b943c9d"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "SUPERMARKET JOB.\r\nPER DAY---#3,500\r\nPER MONTH----#45,000+\r\nMALE AND FEMALE.\r\nEDUCATED AND UNEDUCATED.\r\nIF INTERESTED CALL 08188524615.",
    createdAt: "2018-04-19 14:01:42",
    updatedAt: "2018-04-19 14:01:42",
    title: "Pls is dis a real job?",
    
    inviteId: "3555fc0b-040e-49c8-bedb-afb352862647"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant,\r\n\r\nThank you for your interest in working with.\r\n\r\nAs part of our selection process, we would like you to complete this short Questionnaire by clicking this link here\r\n\r\nInterview\r\nWe would also like to invite you to an interview as follows:\r\n\r\nDate: Friday, 20th April 2018\r\nTime: 12:00noon\r\nAddress: 3rd Floor, SUM House, 350 Borno Way, Off Hughes Avenue, Herbert Macaulay, Yaba (near Alagomeji bus stop).\r\n\r\nPlease confirm your availability by replying this email as soon as possible and come along to the interview with a hard copy of your CV.\r\n\r\nPlease visit to familiarize yourself with us.\r\n\r\nWe look forward to meeting with you soon. \r\n\r\nROSEMARY OGBONNA\r\n\r\nHuman Resources\r\n\r\nPhone No: 08130630300.......A friend of mine got this mail this evening ..the lady even called........Please is this legit?",
    createdAt: "2018-04-19 14:05:42",
    updatedAt: "2018-04-19 14:05:42",
    title: "Please is this legit",
    
    inviteId: "0015fda2-d611-4e62-9281-107297790ab7"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Your CV meets our requirement! You are invited for an INTERVIEW by ACE LTD on FRI 20/04/2018 by 9AM at 8 ADEBARE STR (B&Q BAKERY COMPOUND), Ogudu B/Stop, Lagos.",
    createdAt: "2018-04-19 18:14:33",
    updatedAt: "2018-04-19 18:14:33",
    title: "Help...",
    
    inviteId: "3182bd50-4b1f-42b7-b6a7-0b0566e59c74"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please what's the authenticity of this mail just received it now.\r\nGood day Daramola after proper review of your application via workahman with HR/BSM/10018079 you are scheduled for an interview with BSM LIMITED,on Friday 20 /4/18. Venue: 4, Alh Kareem Ogungbeye str, beside LASMIRA off AMARAOLU road Agidingbi 1st gate Ikeja by 9am prompt YOUR DOCUMENTS REQUIRED.",
    createdAt: "2018-04-20 06:09:47",
    updatedAt: "2018-04-20 06:09:47",
    title:
      "Please what's the authenticity of this mail just received it now",
    
    inviteId: "9ce75ff1-2d73-4037-bb9a-2c5dbbf37fda"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please, guys, who knows anything about something like this or has ever attended their interview?\r\n\r\nDear applicant,\r\n\r\nYou are invited for an Interview for the role of a CREDIT CONTROL OFFICER on Monday 23rd April 2018. Time; 11:00am. \r\nVenue: UniHOLD Office, Works and Physical Planning Complex, New Hall Bus-stop, Unilag, Akoka \r\nKindly confirm your attendance by responding to text by stating your FULL NAME. Elizabeth Chile",
    createdAt: "2018-04-21 03:12:51",
    updatedAt: "2018-04-21 03:12:51",
    title:
      "Please guys, who knows anything about something like this or has ever attended their interview?",
    
    inviteId: "4580b2de-b28f-4f59-b862-6840de956c13"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "You have been scheduled for an interview session with ATB TECHSOFT SOLUTIONS LIMITED as detailed below:\r\nDate:                         Monday, 23rd of  April 2018. \r\nTime:                         10:00 a.m.\r\nAddress:                   8,Jubilee/CMD Road, Magodo, Lagos.\r\nRole:                          Graphics Designer and Web Administrator\r\n\r\nPlease, come along with your CV, credentials and a passport photograph.\r\n\r\nKindly acknowledge receipt of this mail and confirm availability",
    createdAt: "2018-04-21 08:26:16",
    updatedAt: "2018-04-21 08:26:16",
    title: "This is an example of a legit invite",
    
    inviteId: "7a53157a-9e22-45f6-9ed1-976c47af3841"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Great minds, kindly recommend Job sites that are always equip with vacancies. ?",
    createdAt: "2018-04-21 18:28:42",
    updatedAt: "2018-04-21 18:28:42",
    title: "Job Opportunity",
    
    inviteId: "d003c656-01a6-459c-a77f-5fd3b076c4ac"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Sequel to your application for the position of a Frozen food liaison officer at MeatWorld.ng you are invited for an interview at Witzing Group Nigeria. Suite 11, Nikky Afrikana Plaza. 70c, Allen Avenue, Ikeja, Lagos. Street opposite UBA/MTN. \r\nDate: tomorrow Monday 23rd April 2018. \r\nTime: 12noon prompt",
    createdAt: "2018-04-23 05:48:23",
    updatedAt: "2018-04-23 05:48:23",
    title: "Please, I need an urgent response. Is this real or scam?",
    
    inviteId: "d4bd6975-ef69-481f-8352-907f6f9918cf"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Sequel  to the recent application you made Online and  after a Careful analysis of Your application and a great recommendation by our online Human Resource Management Portal, We were impressed with your qualifications and skills, which makes you an excellent candidate for this role and also to our Organization, We would like to invite you for an Assessment/ Interview at our office to tell you more about this role, our company's mode of operations and of course, get to know you better. \r\n\r\nDate: TUESDAY  24TH APRIL  2018\r\n\r\nTime: 9 AM \r\n\r\nAddress: 7 Rasaq  Balogun Street, Off Adebola Street by Adeniran Ogunsanya Road,Surulere,Lagos.\r\n\r\nkindly Come Along With Your updated CV and acknowledge this mail with reply .\r\n\r\nFor more Enquiries: Call the Secretary: Miss Tina:  0805-816-0651/  0705-977-6091\r\n\r\nWe look forward to seeing you.\r\n\r\nBest regards,\r\n\r\n\r\n\r\nHR DEPT\r\n\r\nHR ADMINISTRATOR\r\n\r\nCRAINFIELD  CONSULTING\r\n\r\nBG-LEAD CONCEPT.",
    createdAt: "2018-04-23 17:00:20",
    updatedAt: "2018-04-23 17:00:20",
    title: "Great minds, please how legit is this??",
    
    inviteId: "71fb26ed-96da-41d8-b4fd-047841eec96e"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please, who knows anything about *Hi-Deas Expedient Solutions Limited*?\r\n\r\nAre they Genuine\r\n\r\nThanks.",
    createdAt: "2018-04-24 15:39:18",
    updatedAt: "2018-04-24 15:39:18",
    title:
      "who knows anything about *Hi-Deas Expedient Solutions Limited",
    
    inviteId: "7119056a-5c46-4792-9716-f287605ab8b6"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Based on a referral from a FRIEND , you're invited for an interview at WORKFORCE, Beside UPS Gbagada Lagos on Fri 21st APRIL by 10AM. Bring a CV and dress formal.",
    createdAt: "2018-04-24 22:13:53",
    updatedAt: "2018-04-24 22:13:53",
    title: "Is this real?",
    
    inviteId: "2f0521c3-c7f6-4693-bc8e-e16ee0359d0e"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Quick one: Does anyone here have a useful info about Tek Experts, got and interview with them in coming days.\r\n\r\nAny info will be relevant.",
    createdAt: "2018-04-24 22:31:11",
    updatedAt: "2018-04-24 22:31:11",
    title: "Is this real?",
    
    inviteId: "6fb58e77-2f05-4ab2-a4f5-cd8991941002"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Candidate,\r\nThank you for your interest at smart track forte Nigeria limited.\r\n\r\nWe are pleased to inform you that following your application, we would like to invite you to the next phase of the recruitment process which is the interview.\r\nThe interview will take place at our office at No 25 Oduduwa way GRA, Lagos on Wednesday, 25rd of April, 2018 by 10:00am. Unable to make it on the scheduled date, please contact us at 08038131854/08069479180 or You can reply via email in time, so as to reschedule the time and date.\r\nPlease come with your CV and passport.. Thank you.\r\nBest Wishes\r\nOkafor Sandra\r\nManager.",
    createdAt: "2018-04-25 06:25:41",
    updatedAt: "2018-04-25 06:25:41",
    title: "I just got this mail, did anyone also get the same?",
    
    inviteId: "6c9fca26-122c-4bc8-9bd1-5692ee3d555f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Just got an interview text from peen nigeria and coudn't even rememberd when i applied.",
    createdAt: "2018-04-25 06:34:43",
    updatedAt: "2018-04-25 06:34:43",
    title:
      "peen nigeria: And are they an outsourcing firm or a real company.",
    
    inviteId: "cbf0578a-ccc1-4e16-b41a-941c7ba4370a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear applicant,\r\n\r\nThis is to inform you that your application has been selected for an attitude test, immediately after a training section of our product usage.\r\n\r\nRole: Senior marketer\r\nCompany: Sante Barley Nigeria\r\nAddress: 1B, Akin Osiyemi Street, Off Allen. Opposite Sterling Bank\r\nDate: 27-04-2018\r\nTime 9am\r\nhttps://santebarley.com/nigeria \r\n\r\nKindly reply YES as your acceptance to this test.\r\nThis position is for only those living in Lagos.\r\n\r\nResponsible Coordinator,\r\nGibson Anath",
    createdAt: "2018-04-25 06:35:28",
    updatedAt: "2018-04-25 06:35:28",
    title:
      "Someone should please confirm this for me. Is it a real job? Or one of those GNLD reincarnate?",
    
    inviteId: "f4e134dc-3396-4593-8cd8-1f97ddbd2489"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "This is your interview invite with MAGGIE CONSULT on Wed 25/4/18 by 8am at5, oke close olayiwola street police post oregun ikeja.",
    createdAt: "2018-04-25 06:36:11",
    updatedAt: "2018-04-25 06:36:11",
    title: "I want to know if they are real or fake",
    
    inviteId: "3194e89d-963a-432b-a8cc-c6c9b18be053"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Base on referrer, GMIS is please to invite you among those qualified 4 our Interview @ 8Thomas Salako Stret Ogba Bstp Lagos on Wed10/01/2018 by 10am.",
    createdAt: "2018-04-28 00:15:50",
    updatedAt: "2018-04-28 00:15:50",
    title: "Invites structured like this should not be taken seriously",
    
    inviteId: "9fc731b1-698f-4f9d-97c3-8c8499267af7"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Dear Applicant,\r\nYou have been shortlisted for an Interview at one of our resource companies as scheduled below:\r\n\r\nvenue: Last floor, University Press Building, Fumec Bus-Stop, Acme, Ikeja\r\nDate: Tuesday 23rd January 2018 \r\nTime: 10:00am prompt\r\n\r\nEnsure to come with your writing materials, no calculators are allowed for the screening. Come with a printout of this mail, failure to do so automatically disqualifies you.\r\n\r\n\r\nNote: Dress corporately and be sure to come early as lateness will not be welcomed.\r\n\r\nRegards\r\nHR OFFICER\r\nTOPMOSTCAREER",
    createdAt: "2018-04-28 00:17:33",
    updatedAt: "2018-04-28 00:17:33",
    title: "Who got this?",
    
    inviteId: "84fbb984-6de4-4b3e-a8be-e06b978ebb8e"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Your Application to Careerhost as been received.\r\n\r\nWe are pleased to inform you that you have been selected to attend an interview section with the Head of Human resource(HR) at Managment Resource consulting firm that also offer Entrepreneurial services.\r\n\r\nTime: 10:00am Prompt\r\n\r\nVenue: Plot 5, voda paint plc,university press house,off Adeniyi jones, ogba road.lagos.\r\n\r\nDate: Monday 30th, April 2018.\r\n\r\nNote : come along with an updated copy of your CV and be puntual as lateness will not be tolerated inside.\r\n\r\nRegards,",
    createdAt: "2018-04-28 03:02:58",
    updatedAt: "2018-04-28 03:02:58",
    title: "Please is this GNLD",
    
    inviteId: "7d9a1f93-cf4d-4818-9261-b90aca09b1a9"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Sequel to your online application and submission of CV, you are hereby invited for a JOB INTERVIEW on Monday 3rd July, 2017 at NO. 2, Akin Osiyemi, Allen Avenue, Ikeja, Lagos by 9am.\r\n\r\nCome with a your CV and a printout of this invitation.\r\n\r\nRegards.\r\n\r\nCareer Gems HR",
    createdAt: "2018-04-29 03:23:04",
    updatedAt: "2018-04-29 03:23:04",
    title: "Real or not?",
    
    inviteId: "802bcf5f-0492-4e7d-ab7b-72092b811839"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "CONGRATULATIONS AFTER CV REVIEW,\r\n\r\nWe were impressed by your background and you have been recommended for a JOB BRIEFING with the MANAGEMENT OF LIVE SOLUTION which has been scheduled for MONDAY 30TH April 2018 , the interview will start exactly 9:15AM\r\n\r\n\r\nVENUE; 3RD floor,CROWNET PLAZA IDRIS GIGADO STRT WUYE ABUJA ( just after FAMILY WORSHIP)\r\n\r\n\r\n\r\nPrior to the interview we will be contacting your references as given on your application form. If you have stated that you do not wish us to contact your current employer, this reference will not be taken up unless you are successful with the interview\r\nWE look forward to meeting you.\r\n\r\n\r\n\r\nREGARDS\r\n\r\nHR 001 abuja unit\r\n\r\nfor more background knowledge info logon to http://www.livesolution.com.ng/\r\nfor proper documentation and easy assess printout this mail as evidence",
    createdAt: "2018-04-30 15:06:22",
    updatedAt: "2018-04-30 15:06:22",
    title: "Pls how real is this? I just got this mail.",
    
    inviteId: "323f70bb-2d8c-49ad-a75e-f7f2a79d04eb"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant, based on your application you have be been shortlisted for an interview, scheduled for Tuesday 1st of May 2018, by 9am prompt, at 3rd Floor, Euni Brown House, 195, Ikorodu Road Palmgroove, Lagos State.\r\nAPPLICANT CODE: OL093\r\nHOTLINE: +23481-0429-9787\r\nFrom: Elite'O consultant",
    createdAt: "2018-05-01 01:44:53",
    updatedAt: "2018-05-01 01:44:53",
    title: "Please verify if it's real",
    
    inviteId: "a8a12efc-0882-4834-87ff-a844be063329"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Base on referral,you've been considered for interview by GMIS on Tue 1/5/18 by 9am at 3rd floor, 8 Thomas Salako Street, off Ogba B/stop, Ogba Ikeja Lagos\r\nHR3",
    createdAt: "2018-05-01 01:46:33",
    updatedAt: "2018-05-01 01:46:33",
    title:
      "I just received this one today and I really want to know if is part of the scammers message.",
    
    inviteId: "8f4c576c-84d6-4697-8769-60ac6a7258d5"
  },
  {
    userId: "6c9be451-7f88-4673-a827-931ef07d6dc0",
    body:
      "Please i want to confirm if this job invitation for interview is real\r\n\r\nBase on referral,you've been considered for interview by GMIS on Tue 1/5/18 by 9am at 3rd floor, 8 Thomas Salako Street, off Ogba B/stop, Ogba Ikeja Lagos\r\nHR3",
    createdAt: "2018-05-01 17:22:16",
    updatedAt: "2018-05-01 17:22:16",
    title: "Job",
    
    inviteId: "0cb469b5-62ad-4391-bd10-178154b0b29f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "They say they are currently recruiting for the post of a graduate trainee and that they are situated in Lagos. They have no website and no online presence as well and I think it doesn't check out.\r\n\r\nWho has genuine info about them?",
    createdAt: "2018-05-01 18:22:15",
    updatedAt: "2018-05-01 18:22:15",
    title: "Who knows about Zenith Engineering Limited?",
    
    inviteId: "1741928a-a8c3-4552-8104-6e5fd7ccaba3"
  },
  {
    userId: "6c9be451-7f88-4673-a827-931ef07d6dc0",
    body: "Has FRSC and NDA start recruitment??",
    createdAt: "2018-05-02 03:44:47",
    updatedAt: "2018-05-02 03:44:47",
    title: "Job",
    
    inviteId: "d794c62c-a131-4223-a024-cf092e4d938f"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "You have been scheduled for an Interview at The chesterfield Hotel #54 Adeniyi Jones Ikeja.",
    createdAt: "2018-05-02 03:52:53",
    updatedAt: "2018-05-02 03:52:53",
    title: "Please is this legit????",
    
    inviteId: "bfdb2eaa-b98e-48e3-ac63-37883bde82e5"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Good day.Sequel to your registration on www.icsjobportal.com, you are being considered for the role of Customer Service Executive.Please follow the instructions below:· Log on totest.smarthire.organd input the username and password sent to your mailbox.· Complete the online test· Kindly report to ICS Limited, 6 Olusoji Idowu street off association avenue, by Obanikoro bus stop Ilupeju by 8am.Date is Wednesday 2/5/18· Come along with all your original credentials, 1 passport photograph and your updated CV.Please note that you must complete the test before you report to ICS Limited on Wednesday.",
    createdAt: "2018-05-02 18:02:01",
    updatedAt: "2018-05-02 21:23:03",
    title: "how real is this",
    
    inviteId: "b248ca29-5f47-4a37-b1b6-c5de019b4330"
  },
  {
    userId: "ada77ebb-abfb-448b-b470-e57d4be6ffcb",
    body:
      "based on your application via jiji.Ng. Pls note that you're required to present a hardcopy of your CV, Credentials and a passport photograph for an Assessment Interview with MHS on Thursday 03/5/2018.\r\nTime: 9am\r\nAddress: 65c Opebi road, opposite Glass House by salvation B/stop, Opebi, Ikeja. Lagos. \r\nPls note that lateness could mean disqualification.\r\n\r\nNeed help/directions? call Admin: 0803-449-6175/6805 www.madehillssolution.com.ng",
    createdAt: "2018-05-03 00:56:44",
    updatedAt: "2018-05-03 00:56:44",
    title: "Is this real",
    
    inviteId: "9ba6d217-4c3d-4104-ab7f-1b151c13acd3"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Based on referral, GMIS invites you for an interview holding tomorrow THURS 03/05/18 by 9am at 8 Thomas Salako Street, 3rd floor, Ogba Lagos. REF: GMIS/ADMIN80",
    createdAt: "2018-05-03 02:55:28",
    updatedAt: "2018-05-03 02:55:28",
    title: "Please is this legit????",
    
    inviteId: "0a182784-ebca-475b-96f2-4da79b55f556"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been selected for an interview with the GM in our office;8,Adebare Street,B&Q Building,Ogudu Bustop,Lagos on THURS 3RD May,2018 by 9AM PROMPT.",
    createdAt: "2018-05-03 05:13:01",
    updatedAt: "2018-05-03 05:13:01",
    title: "please how legit is this?",
    
    inviteId: "9c0fedec-6a09-425f-9097-5bd95cf6a38e"
  },
  {
    userId: "472537a2-ea2c-4b1d-a47d-ce9ed668f68f",
    body:
      "You have been shortlisted for an interview on 7th of may 2018, bethelmendels....27, Atinuke Olabanji street, Ikeja ....Time 11:00am",
    createdAt: "2018-05-04 01:18:52",
    updatedAt: "2018-05-04 01:18:52",
    title: "Is this real please?",
    
    inviteId: "4dd6998e-a53e-484e-b5e0-e5bfa6340a4d"
  },
  {
    userId: "57c8bc63-9467-442b-91f7-b93d3f9cb7d0",
    body:
      "Your Application to Concept Careers & Recruitment  as been received.\r\n\r\nWe are pleased to inform you that you have selected to attend an interview session with the Head of Human resource(HR) at Management Resource a Consulting Firm, we also offer Entrepreneurial services.\r\n\r\nTime :10:00am.\r\nDate :Monday 07/05/2018\r\nAddress:Plot 5, voda paint plc,university press house,fumec bustop off Adeniyi jones,Ogba road, Lagos.\r\n\r\nRegards \r\nHelen Edidion\r\nHead of Admin\r\nGlobal Management Resource \r\nIkeja Branch \r\n Lagos.",
    createdAt: "2018-05-05 07:02:14",
    updatedAt: "2018-05-05 07:02:14",
    title: "Please is this legit?",
    
    inviteId: "eaf1c76b-fd1e-4145-9933-14ea990a75b8"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      'Dear Applicant, \r\n\r\nBliss initiatives is a consulting firm and offers various Entrepreneurial services and based on your application for the post of "Graduate trainee" you have been shortlisted for an oral interview on TUES 08/05/18 at last floor university press building, plot 5 funmec b/s Acme, Ikeja Lagos by 10am. Pls do ensure to dress corporately. \r\n\r\nNB: come along with your Cv & a copy of the printout of this mail to ensure confidentiality \r\n\r\nBest regards, \r\n\r\nBlisscareers',
    createdAt: "2018-05-05 21:06:06",
    updatedAt: "2018-05-05 21:06:06",
    title: "please how real Is this invite",
    
    inviteId: "80e8381a-644e-43ae-bd57-b0648df175a9"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been invited to an oral assessment as a GRADUATE TRAINING at one of the selected centres in Lagos on 8th May 2018.\r\n\r\n\r\nVenue: last floor, university press building\r\n\r\nfumec bus stop,acme road,Ikeja\r\n\r\nTime: 10:00 AM \r\n\r\nkindly come with a printed copy of this invitation and your updated cv as you will not be allowed in without it. \r\n\r\nNote that the invitation is a response to the application/cv you submitted which we are handling on behalf of our client and you can recourse to us if you did not apply for such position for us to manage our record properly.\r\nConfirm your attendance.",
    createdAt: "2018-05-06 19:18:09",
    updatedAt: "2018-05-06 19:18:09",
    title:
      "Pls house help me confirm dis mesg,if thr is any that has got such b4",
    
    inviteId: "dbea8652-9cb8-4963-a41c-c30ee3555fc6"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "t",
    createdAt: "2018-05-06 19:23:46",
    updatedAt: "2018-05-06 19:24:24",
    title: "r",
    
    inviteId: "934f5244-5194-4bb4-b7ad-ac1bfaaeb5e0"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "t",
    createdAt: "2018-05-06 19:23:49",
    updatedAt: "2018-05-06 19:24:37",
    title: "r",
    
    inviteId: "80cf2f1a-63aa-4324-8093-430492d230c4"
  },
  {
    userId: "e38a60e1-f621-4509-90a2-824813a9f672",
    body:
      "Dear Njepu Ebubechukwu,\r\n\r\n\r\nYour  Application to Careerhost  as been received.\r\n\r\nWe are pleased to inform you that your Application/ CV information with us matches the request of one of our client;\r\n\r\nTo this effect, You are hereby invited for an Oral/ Writing Assessment with our Human Resources(HR) Team for one of the following post:\r\n\r\n* Customer Service Representative.\r\n* Administration Officer.\r\n*Business Development Officer. \r\n\r\nTime: 10:00am Prompt\r\n\r\nVenue: Plot 5, Voda Paint plc,University Press House,off Adeniyi Jones, Ogba road.Lagos.\r\n\r\nDate: Monday 7th, May  2018.\r\n\r\nNB: Come along with an updated copy of your CV and be puntual as lateness will not be tolerated inside.",
    createdAt: "2018-05-07 06:49:59",
    updatedAt: "2018-05-07 06:49:59",
    title: "Please confirm ASAP",
    
    inviteId: "75825347-521d-413e-9a3d-a1604afc54d4"
  },
  {
    userId: "e38a60e1-f621-4509-90a2-824813a9f672",
    body:
      "Dear Njepu Ebubechukwu,\r\n\r\n\r\nYour  Application to Careerhost  as been received.\r\n\r\nWe are pleased to inform you that your Application/ CV information with us matches the request of one of our client;\r\n\r\nTo this effect, You are hereby invited for an Oral/ Writing Assessment with our Human Resources(HR) Team for one of the following post:\r\n\r\n* Customer Service Representative.\r\n* Administration Officer.\r\n*Business Development Officer. \r\n\r\nTime: 10:00am Prompt\r\n\r\nVenue: Plot 5, Voda Paint plc,University Press House,off Adeniyi Jones, Ogba road.Lagos.\r\n\r\nDate: Monday 7th, May  2018.\r\n\r\nNB: Come along with an updated copy of your CV and be puntual as lateness will not be tolerated inside.",
    createdAt: "2018-05-07 06:50:13",
    updatedAt: "2018-05-07 06:50:13",
    title: "Please confirm ASAP",
    
    inviteId: "ab9e6c68-e5c5-47be-964f-e60379c1bbf1"
  },
  {
    userId: "e38a60e1-f621-4509-90a2-824813a9f672",
    body:
      "Dear Njepu Ebubechukwu,\r\n\r\n\r\nYour  Application to Careerhost  as been received.\r\n\r\nWe are pleased to inform you that your Application/ CV information with us matches the request of one of our client;\r\n\r\nTo this effect, You are hereby invited for an Oral/ Writing Assessment with our Human Resources(HR) Team for one of the following post:\r\n\r\n* Customer Service Representative.\r\n* Administration Officer.\r\n*Business Development Officer. \r\n\r\nTime: 10:00am Prompt\r\n\r\nVenue: Plot 5, Voda Paint plc,University Press House,off Adeniyi Jones, Ogba road.Lagos.\r\n\r\nDate: Monday 7th, May  2018.\r\n\r\nNB: Come along with an updated copy of your CV and be puntual as lateness will not be tolerated inside.",
    createdAt: "2018-05-07 06:50:38",
    updatedAt: "2018-05-07 06:50:38",
    title: "Please confirm ASAP",
    
    inviteId: "9ea38d19-8e44-4375-ad5b-d05c0e90f77d"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "After thorough evaluation of your cv, PML invites for an oral interview @13 oladosu street, off Toyin street ikeja.",
    createdAt: "2018-05-07 15:41:27",
    updatedAt: "2018-05-07 15:41:27",
    title: "Please how real is this invite?",
    
    inviteId: "72473e41-74dc-41b4-a643-2a78ed43aa6c"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Who knows about Zenith Engineering Limited?\r\n\r\nThey say they are currently recruiting for the post of a graduate trainee and that they are situated in Lagos. They have no website and no online presence as well and I think it doesn't check out.",
    createdAt: "2018-05-07 15:50:19",
    updatedAt: "2018-05-07 15:50:19",
    title: "Who has genuine info about them?",
    
    inviteId: "1962573e-113a-44bf-b988-0c79eba19f22"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are invited for a pre-employment aptitude test at Landover Company Ltd, 17 simbiat abiola way,ikeja on wednesday 9 may, 2018 by 4:30pm. please come with original and duplicate of credentials,1 passport &birth certificate.",
    createdAt: "2018-05-08 09:32:18",
    updatedAt: "2018-05-08 09:32:18",
    title: "please how real is this",
    
    inviteId: "cf3e7098-3ffb-42e4-a44d-e97772c7a4f8"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear xoxo\r\n\r\nDUNCASON OIL&GAS CONSTRUCTION OIL AND GAS ENGINEERING COMPANY management have properly access your CV/RESUME after appropriate screening has been done by the management of DUNCASON OIL&GAS CONSTRUCTION OIL AND GAS ENGINEERING COMPANY sincerely appreciate your interest in working in our company.therefore for employment consideration we notice your education back ground with your previous job experience meets up with our required qualifications.\r\nwe are pleased to appoint you the POSITION OF BUSINESS DEVELOPMENT OFFICER Onshore/Offshore with the salary amount of 9,000(euros) per month salary also We are serious to have you work with us after this assessment by us,as we observe your skills as an addition value to our company and our clients respectively.\r\n\r\nBenefit:\r\nFree Accommodation will be provided by DUNCASON OIL&GAS CONSTRUCTION OIL AND GAS ENGINEERING COMPANY,Flight Ticket,Tax Free,Salary Allowance,Free Medical Expenses,Vacation paid leave Allowance and many more benefit you will see in your Appointment Letter\r\n\r\nSalary:You will be entitled to a monthly starting remuneration of 9,000((euros)you shall receive your monthly salary payment before 31st of every month.\r\n\r\nConfirmation: \r\nRegular performance review wll be conducted to assess your performance and suitability with your continued employment at DUNCASON OIL&GAS CONSTRUCTION OIL AND GAS ENGINEERING COMPANY Europe is dependent on your successful completion of the probationary period,your salary will be reviewed after a period of 6 months and thereafter every 12 months,you will be entitled to all allowances and benefits whatsoever decided by the management \r\nand absence for a continuous period of ten days without prior approval of your superior,(including overstay on leave/training) would result in your losing your lien on the service and the same shall automatically come to an end without any notice or intimation.\r\n\r\n\r\nTravel Expenses:\r\nYou will be reimbursed for expenses which you will incure in the course of coming to Europe,for those traveling from outside Europe as we shall give you traveling expenses claim form,\r\nwhich should be completed and returned with the original receipts to Personnel Manager.\r\n\r\nTERMINATION:\r\nUpon confirmation,this appointment can be terminated by either party by giving two weeks notice in writing or payment in lieu of such notice during the first year or one month notice or payment in lieu of such notice after one year.\r\nIn case of gross misconduct on the part of the employee the Appointment shall be terminated without notice or payment in lieu thereof,this Appointment is subject to your complying with the company's Rules and Regulations.\r\n\r\nCOMPANY'S ABIDING POLICIES.\r\n1.You will not(except in the normal course of the Company's business)publish any article or statement,deliver any lecture or broadcast or make any communication to the press,including magazine publication relating to the Company's products or to any matter with which the Company may be concerned,unless you have previously applied to and obtained the written permission from the Company.\r\n\r\n2.You will be required to maintain utmost secrecy in respect of Project documents,commercial offer,design documents,Project cost & Estimation,Technology,Software packages license,Company’s polices,Company’s patterns & Trade Mark and Company’s Human assets profile.\r\n\r\n3.You will be required to comply with all such rules and regulations as the Company may frame from time to time.\r\n\r\n4.Any of our technical or other important information which might come into your possession during the continuance of your service with us shall not be disclosed,divulged or made public by you even thereafter.\r\n\r\n5. If at any time in our opinion,which is final in this matter you are found non- performer or guilty of fraud, dishonest, disobedience,\r\ndisorderly behavior,negligence,indiscipline,absence from duty without permission or any other conduct considered by us deterrent to our interest or of violation of one or more terms of this letter,your services may be terminated without notice and on account of reason of any of the acts or omission the company shall be entitled to recover the damages from you.\r\n\r\n6.Working Schedule:\r\n•Working Days & time:Monday to Friday:9:00am-4:00pm(GMT)with break period of 2hours only,beginning from 12.00noon to 2.00pm\r\n\r\n•Employee's shall also be entitled to over-time allowance if their work time exceeds the official stipulated hours.Salary shall be liable to increments with time and employee's official promotions and position in service.\r\n\r\n•Saturday & Sunday:Off Day\r\n\r\n•Shift Time:Morning and Night\r\n\r\n•Contract Period:2 Years contract and it can be extended if you wish to remain with our company\r\n\r\nWe are offering you 3 month vacation interval yearly and during this period you have the chance to visit your love ones and family.The company will take care of your vacation flight ticket (Return Ticket to and Fro).\r\n\r\nWe intend to inform you that DUNCASON OIL&GAS CONSTRUCTION OIL AND GAS ENGINEERING COMPANY is only interested in serious and reliable employee's who is ready to work and seek international knowledge and experience in oil and gas as a whole and as a notice of acceptance of job offer,hence,your Appointment and Invitation letter for you to sign and return the signed copy back to us for record purpose.\r\nHence, kindly let us know if you are interested in working with us in Cyprus,Europe and also let us know if you are satisfied with the salary rate above in order for us to proceed further.\r\n\r\nkeep this job reference number(DUCANJOB/EU/MAY/DUCAN2018)it will be needed from time to time in respect of your job application and Interview\r\nand if you are processing employment with other company while processing with us kindly inform us also note.\r\n\r\nYour are highly appreciated.\r\n\r\nYour's Faithfully\r\nMr Tremblett Stewart",
    createdAt: "2018-05-08 11:18:54",
    updatedAt: "2018-05-08 11:18:54",
    title:
      "Please how real is this i just sent my Cv to them and without interview they gave me offer letter",
    
    inviteId: "6d791d8f-ad58-498d-af3b-7e9c127b7504"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "After careful preview of your details and Curriculum Vitae, considering the skills and attributes you have, the Board of Directors of BG Careers NIG. has decided to invite you for an interview for the position of Graduate Intern.\r\n\r\nOn Wednesday 9th May 2018, by 9am at 4 Alhaji Kareem Ogungbeye street, off Amaraolu street  beside Zenith bank Agidingbi Ikeja, Lagos.\r\n\r\nPlease, come with your CV, a passport photograph and this mail to the interview.\r\n\r\nIt is important you confirm your availability by replying this email as soon as possible. You can reach the Human Resource Manager on 15035/08157295044\r\n\r\nWe look forward to seeing you.\r\n\r\nWishing you the best\r\n_________\r\nBoard of Directors BG Careers NIG \r\n4 Alhaji Kareem Ogungbeye street off Amaraolu street beside Zenith bank Agidingbi Ikeja, Lagos. \r\n15035/08157295044 \r\nbgcareers.hr@gmail.com",
    createdAt: "2018-05-08 11:48:55",
    updatedAt: "2018-05-08 11:48:55",
    title: "Please help check if it's genuine",
    
    inviteId: "45d05d55-5a34-4da7-bb3e-e805832a19ed"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "WAAP Ltd., Scout Camp, Opp. Sufi Centre, Challenge, Ibadan\r\npls who know of this address in Ibadan, I have interview there tomorrow pls help me confirm what they are into.",
    createdAt: "2018-05-11 09:12:40",
    updatedAt: "2018-05-11 09:12:40",
    title: "pls who know of this address in Ibadan,",
    
    inviteId: "e280a6ae-664d-49af-a7b8-90bd8a6f972e"
  },
  {
    userId: "201d9577-62e9-4633-bac3-64094f82a81e",
    body:
      "pls I need urgent reply from u guys plssssss\r\nis this real or scam?\r\nI got an SMS for a job interview from ACE LTD 8 Adebare str B&Q bakery building ogudu B/stop on Monday 9am\r\nplease someone should help me out\r\nshould I go",
    createdAt: "2018-05-11 20:13:36",
    updatedAt: "2018-05-11 20:13:36",
    title: "please is this Real???",
    
    inviteId: "08e2b313-cc6d-4455-99f0-d2b80c5c2e52"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear samuel, you are invited for an interview in AIICO plc at AIICO building 203/205 oshodi apapa express way, iyana isolo, lagos on Wednesday 16th may 2018....",
    createdAt: "2018-05-12 14:12:21",
    updatedAt: "2018-05-12 14:12:21",
    title:
      "Please i got this message today in the afternoon, how real is it?",
    
    inviteId: "2554a9f2-3b7f-4cec-9862-2f60a1364d85"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Pls whoelse got a call from Starterbag.. I want to know how genuine it is .. please help! thanks",
    createdAt: "2018-05-13 10:03:52",
    updatedAt: "2018-05-13 10:03:52",
    title: "Pls whoelse got a call from Starterbag",
    
    inviteId: "f17b4075-e251-40ee-a446-5dd363889627"
  },
  {
    userId: "744355e5-de8a-459a-a900-9b455fc3a4a8",
    body:
      "Hello joshua, based on your application to M.H.S, you're required to come over for an Interview on Friday 30th March, 2018. Time: 9am prompt Venue is MHS Office, 6th Floor, 65c Opebi road, opposite glass house by Salvation b/stop, Opebi, Ikeja, Lagos. A copy of your CV and a passport photograph is required and pls ensure to be punctual.",
    createdAt: "2018-05-13 19:46:24",
    updatedAt: "2018-05-13 19:46:24",
    title:
      "traeat AsAP aw true is this? ,pls confirm or any body wth such experience.",
    
    inviteId: "03493e4f-6d48-4482-b1da-84f52f421e13"
  },
  {
    userId: "81993cba-ca8b-4be2-a5b7-8c0711e28063",
    body:
      "Pls is pink events a real stuff dey say its an ushering agency",
    createdAt: "2018-05-13 21:22:02",
    updatedAt: "2018-05-13 21:22:02",
    title: "Want to find out if pinkEvent is real",
    

    inviteId: "a0f510a5-8ac0-4d9f-9864-a3c6f4a4c5cc"
  },
  {
    userId: "744355e5-de8a-459a-a900-9b455fc3a4a8",
    body: "BG.Lead Concept.....any info on this",
    createdAt: "2018-05-14 16:28:51",
    updatedAt: "2018-05-14 16:28:51",
    title: "treat ASAP",
    
    inviteId: "fa1d1339-c164-4198-a1fe-16743b88bddd"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been shortlisted for the position of a marketing officer @Silverbird Communications Abuja. Come with 1 passport, originals and copies of your cv & credentials and a pen.\r\nDate: May 16th, Time: 10am, Venue: Rhythm FM station, Abuja. RSVP pls.",
    createdAt: "2018-05-14 22:53:39",
    updatedAt: "2018-05-14 22:53:39",
    title: "Good evening guys. Please how legit is this interview",
    
    inviteId: "47ebc31b-352b-43c1-b486-d1f058e1b2f1"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "PG invites you for an Interview/Opportunity to work with the Executives on Sat 15/04/2017 by 9:30am at 27 Ayodele Ojo, Coker Rd Ilupeju Lagos. Enq. @ HRM WEM.\r\nThe E-mail is from Wilfred Executive Management Services. \r\nPlease does anyone know this company? \r\nThanks",
    createdAt: "2018-05-15 18:50:50",
    updatedAt: "2018-05-15 18:50:50",
    title: "Is this real?",
    
    inviteId: "97f8c59d-2764-4161-b22c-6e0ddf6d6171"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "We wish to invite you for an aptitude test in connection with your  \r\napplication for the above position in an Engineering Company based in  \r\nLekki area of Lagos recently advertised by us.\r\n\r\nDate:   Friday August 19, 2016\r\nTime:   10 am\r\nVenue: Beckley Consulting Ltd\r\n        No 19, Ire Akari Road\r\n        Ire Akari Est\r\n        Isolo – Lagos\r\n        Close to Isolo Market and Taiwo Supermarket\r\n\r\nPlease let us know with a response to this mail or to  \r\ninfo@beckleyconsulting.com, if you will be available for the test not  \r\nlater than 3pm noon on Thursday August 18, 2016 as only candidates who  \r\nconfirm their availability will be allowed to write the test.\r\n\r\nRegards.\r\nCollins O.\r\n08161717603\r\ninfo@beckleyconsulting.com",
    createdAt: "2018-05-15 19:13:20",
    updatedAt: "2018-05-15 19:13:20",
    title:
      "Please who got this interview invite and i want to know if the recruiting firm is legitimate. thanks",
    
    inviteId: "0d8dc873-769f-47dc-9f70-8d2446a41750"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Do you know anything about M.global? Are they real or scam?",
    createdAt: "2018-05-16 10:22:12",
    updatedAt: "2018-05-16 10:22:12",
    title: "Any information on M.global",
    
    inviteId: "7938c773-d2b3-4f16-be76-edaa17c74cf7"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "TIZETI\r\n\r\nYou have been invited for the next stage.\r\n\r\nTime: 10am\r\n\r\nVenue: Oakwood Park Hotel; 53 Lekki-Epe expressway, Lekki,  Lagos",
    createdAt: "2018-05-16 19:32:46",
    updatedAt: "2018-05-16 19:32:46",
    title: "Please any info about TIZETI?",
    
    inviteId: "edc68309-5d3b-4d9c-8dcd-fc0885143fa2"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "With reference to your application for the position of Research and Development Officer, you are hereby invited for an interview at West African Seasoning Co Ltd. \r\nDate: 11th Jan 2018 \r\nVenue: 37 Creek Road Apapa, Lagos -Conference room \r\nTime: 10:00am prompt",
    createdAt: "2018-05-16 20:23:24",
    updatedAt: "2018-05-16 20:23:24",
    title: "Is this job invite legit?",
    
    inviteId: "083f73a8-a1f5-4472-aeca-fa2afe0302e1"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Please who else got this sms: Following the receipt of your CV/Application, we are please to invite you for an assessment scheduled as follow : DATE:Friday august 12, 2016. TIME: 10am VENUE: 124, Norman Williams Street, South West Ikoyi, Lagos. For FEEDBACK & ENQUIRIES, please call:02-271735",
    createdAt: "2018-05-16 20:40:10",
    updatedAt: "2018-05-16 20:40:10",
    title: "Is this real",
    
    inviteId: "11b00701-1cb3-409c-a048-d287a4f93ff8"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Good day,\r\n\r\n \r\n\r\nWe confirm receipt of your application as a residential field agent via our web portal.\r\n\r\n \r\n\r\nTrapezoid is a full-service background checks provider for various organisations (locally and internationally).\r\n\r\n \r\n\r\nThe job listing is for residential field agents (verification officers) to assist in conducting on-site/physical address verification for our various clients.\r\n\r\n \r\n\r\nSequel to your application, you have been selected for a chat/interview with the Managing Director.\r\n\r\n \r\n\r\nThe interview will take place on Friday 18th May 2018 at 39, Opebi Road, Opposite Adebola House, Ikeja, Lagos by 10am.\r\n\r\n \r\n\r\nKindly come along with a copy of your CV, 2 passport photographs, means of identification (regulatory ID) and android phone.",
    createdAt: "2018-05-16 22:36:34",
    updatedAt: "2018-05-16 22:36:34",
    title:
      "Is dere anybody dat familiar with the address nd what did dy mean by regulatory ID card  ?",
    
    inviteId: "d911b956-b638-4ee8-bd8d-360c7b3ef399"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please be informed that you have been shortlisted for an interview for the post of Retail Sales Executive on Friday May 25, 2018. \r\nKindly come along with your CV.The venue is 95 Broad Street, Opposite Fidelity Bank (Ensure Insurance Plc).\r\nTime: 9:00 a:m.\r\nThank you.",
    createdAt: "2018-05-16 22:44:10",
    updatedAt: "2018-05-16 22:44:10",
    title: "Please guys help me out ooooo, how real is it?",
    
    inviteId: "b05639cb-2b30-48a3-9b4b-d44b0c244fc2"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Who else got the interview invite from dangote sino-truck,oba akran way,ikeja. ?\r\nWHAT IS THE NATURE OF THEIR JOB?",
    createdAt: "2018-05-16 22:49:49",
    updatedAt: "2018-05-16 22:49:49",
    title:
      "Who else got the interview invite from dangote sino-truck,oba akran way,ikeja",
    
    inviteId: "c75525b8-cb70-4a19-bd99-fffaf12f89db"
  },
  {
    userId: "d73b6f7a-78c6-49a7-81ef-9581b9b6dddf",
    body:
      "I got this message, and it smells fishy\r\n\"Sequel to the receipt of your Resume, the Board of LS-RESOURCE requests your presence to be interviewed based on your qualification.\r\n\r\nSCHEDULED DATE:\r\nFriday, 18th May. 2018\r\n\r\nTIME: 9.00Hours in the Morning.\r\n\r\nOFFICE ADDRESS: 3RD FLR, CROWNET PLAZA, IDRIS GIGADO STR, WUYE, ABUJA.\r\n\r\nREQUIREMENTS;\r\n-Hard copy/Print-out of this Email Notification.\r\n-Hard copy of your Resume/Curriculum Vitae.\r\n-Two (2) Passport Photographs.\r\n\r\nDress Corporately and be sure to come early as lateness will NOT be entertained.\r\n\r\nOPTIONAL\r\n-A regulatory I.D Card i.e. Driver's License, National I.D card, Voter's Card, INT'L Passport.\r\n\r\nBest of Luck, HR MINET",
    createdAt: "2018-05-17 21:35:58",
    updatedAt: "2018-05-17 21:35:58",
    title: "This doesn't feel right",
    
    inviteId: "30366d84-9fde-4ab9-8280-9362eb99a076"
  },
  {
    userId: "d73b6f7a-78c6-49a7-81ef-9581b9b6dddf",
    body:
      "This is a new scam where they will contact you on WhatsApp  about ushering with promises of daily renumeration. I got scammed of #6500. I feel so ashamed.\r\nIt is called @lr_faces that is Lola ray ushering and Modeling agency. The money was meant for registration. It was after that I realised that I just got duped. They are even on Instagram with fake pictures. Beware of these so called agencies they are scammers.",
    createdAt: "2018-05-17 21:40:58",
    updatedAt: "2018-05-17 21:40:58",
    title: "Beware of Ushering and Modeling agencies",
    
    inviteId: "dc3e5529-e520-42a4-b9eb-c2d05221ab7d"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "U'RE SELECTED FOR AN ORAL INTERVIEW TOMOROW BY 8AM @ SIMON GROUP OF COMPANY HERE @ MOLETE BESIDE ADRON TOWER AFTER ST ANNE'S SCH, ALONG CHALLENGE RD.(SHUAIB.HR)\r\nPls help someone",
    createdAt: "2018-05-18 10:29:09",
    updatedAt: "2018-05-18 10:29:09",
    title: "Pls is this interview message real",
    
    inviteId: "0c7a4d80-f2e2-466e-9c34-e70aeca2b8c1"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "You are shortlisted for an Office Assistant assessment at no4 Alh Kareem off Amaraolu, Agidingbi,1st Gate, Ikeja on Fri 16th Sept by 8am. HBMI/09054471606",
    createdAt: "2018-05-18 12:12:14",
    updatedAt: "2018-05-18 12:12:14",
    title: "Any information on this?",
    
    inviteId: "ca4c98c9-16e4-4337-b238-5df30e41001c"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "Good day, you have been shortlisted for an interview on Fri 16th Sept. 2016 by 09:30am The Proxynet House, 5b Adedeji Close, by Every woman stores Opebi Lagos",
    createdAt: "2018-05-18 12:28:08",
    updatedAt: "2018-05-18 12:28:08",
    title: "who else got this job invite?",
    
    inviteId: "8fce0654-7318-43ed-9100-9908237e9fd6"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear xxxx,\r\n \r\nThank you for applying for the position of a customer care personnel with KKON Technologies Ltd.\r\n \r\nWe would like to invite you to interview for the position. Please find details below:\r\n \r\nDate: 29 May, 2018.\r\nTime: 10:00am\r\nLocation: Km 14, Lagos - Ibadan Expressway, Arepo. (Description: Take a bus from berger and alight at Arepo bus stop. If you look up, you'll see a building with blue roof and KKONTech and IcellPower Signage.Make your way to that building.) \r\n \r\nKindly confirm your avai. If you have any questions or need to reschedule, call",
    createdAt: "2018-05-18 23:04:12",
    updatedAt: "2018-05-18 23:04:12",
    title: "Please, do advise if you have any info about this company.",
    
    inviteId: "b1e9b1f0-04c7-454b-b7ce-0b849b3d5ef5"
  },
  {
    userId: "a0cd58e9-19ac-427d-b68c-f88fc2e5079a",
    body:
      "IGNIT INITIATIVES invite you for JOB \r\n\r\nINTERVIEW on Tuesday 22/5/18 by 10am \r\n\r\nat no 5 Last floor,University Press \r\n\r\nBuilding,Fume b/stop,acme,Ikeja,Lagos\r\n\r\n\r\n\r\n\r\n\r\nEnsure to come with your writing materials,no calculators are allowed to the screening.Come with a printout of this mail,failure to do so automatically disqualifies you.\r\n\r\n\r\nNote:Dress corporately and be sure to come early as lateness will not be welcomed.\r\n\r\nRegards\r\nCareer Tips",
    createdAt: "2018-05-19 08:05:06",
    updatedAt: "2018-05-19 08:05:06",
    title: "Is this a scam",
    
    inviteId: "30a56c88-8e85-4cf8-9b50-7b0290cc25b9"
  },
  {
    userId: "a0cd58e9-19ac-427d-b68c-f88fc2e5079a",
    body:
      "IGNIT INITIATIVES invite you for JOB \r\n\r\nINTERVIEW on Tuesday 22/5/18 by 10am \r\n\r\nat no 5 Last floor,University Press \r\n\r\nBuilding,Fume b/stop,acme,Ikeja,Lagos\r\n\r\n\r\n\r\n\r\n\r\nEnsure to come with your writing materials,no calculators are allowed to the screening.Come with a printout of this mail,failure to do so automatically disqualifies you.\r\n\r\n\r\nNote:Dress corporately and be sure to come early as lateness will not be welcomed.\r\n\r\nRegards\r\nCareer Tips",
    createdAt: "2018-05-19 08:05:08",
    updatedAt: "2018-05-19 08:06:49",
    title: "Is this a scam",
    
    inviteId: "2fcd0f74-6506-4bb0-8524-33138b3aa4e1"
  },
  {
    userId: "67b3b735-5376-4712-a625-d780901239f9",
    body:
      "Got this e-mail this afternoon. I tried finding out how real and I read on this timeline that its a GNLD company. Please what does that mean?\r\n\r\nFollowing the consideration of an online recommendation,after much evaluation of your profile, we were impressed with your qualification and skills which makes you one of the prospective candidates. We are pleased to inform you that you have been selected and invited for an Assessment at BG-LEAD CONCEPT.\r\n\r\nDate: Tuesday, 22nd May 2018\r\nTime: 9.00am prompt\r\n\r\nAddress: Cranfield consulting 7, Razaq Balogun street, off Adebola street, off Adeniran Ogunsanya road, Surulere, Lagos.\r\n\r\nBG-LEAD CONCEPT is a fast-growing business strategy and human capacity development outfit dedicated to providing innovative business solution to her teeming clients, assists clients in creating and managing strategic relationships and alliances with other organisations, including startups to multinational external expertise, technology, and intellectual properly to expand their product, service, functionality.\r\n\r\nCome with a copy of your updated CV, photocopies of your credentials and this mail for clarification issues and for security purposes. \r\n\r\nHowever it is important you confirm receipt and your availability replying this mail \r\n\r\nFor further inquiries: Call the secretary on 07089747778 or email (info.co.linus@gmail.com)  \r\n\r\nWe look forward to seeing you.\r\n\r\nBest Regards,\r\n\r\nMANAGEMENT/HR\r\n\r\nDr Tayo",
    createdAt: "2018-05-19 21:28:34",
    updatedAt: "2018-05-19 21:29:57",
    title: "Enquiry",
    
    inviteId: "68b71398-70bc-461a-8671-a9a81d45d9e4"
  },
  {
    userId: "67b3b735-5376-4712-a625-d780901239f9",
    body:
      "Got this e-mail this afternoon. I tried finding out how real and I read on this timeline that its a GNLD company. Please what does that mean?\r\n\r\nFollowing the consideration of an online recommendation,after much evaluation of your profile, we were impressed with your qualification and skills which makes you one of the prospective candidates. We are pleased to inform you that you have been selected and invited for an Assessment at BG-LEAD CONCEPT.\r\n\r\nDate: Tuesday, 22nd May 2018\r\nTime: 9.00am prompt\r\n\r\nAddress: Cranfield consulting 7, Razaq Balogun street, off Adebola street, off Adeniran Ogunsanya road, Surulere, Lagos.\r\n\r\nBG-LEAD CONCEPT is a fast-growing business strategy and human capacity development outfit dedicated to providing innovative business solution to her teeming clients, assists clients in creating and managing strategic relationships and alliances with other organisations, including startups to multinational external expertise, technology, and intellectual properly to expand their product, service, functionality.\r\n\r\nCome with a copy of your updated CV, photocopies of your credentials and this mail for clarification issues and for security purposes. \r\n\r\nHowever it is important you confirm receipt and your availability replying this mail \r\n\r\nFor further inquiries: Call the secretary on 07089747778 or email (info.co.linus@gmail.com)  \r\n\r\nWe look forward to seeing you.\r\n\r\nBest Regards,\r\n\r\nMANAGEMENT/HR\r\n\r\nDr Tayo",
    createdAt: "2018-05-19 21:28:36",
    updatedAt: "2018-05-19 21:28:36",
    title: "Enquiry",
    
    inviteId: "83fb43d5-44d1-4cb6-83a3-e8a9f3a85671"
  },
  {
    userId: "2d062917-b6fd-44e4-abf8-8d1baa6482c4",
    body:
      "Following the consideration of an online recommendation,after much evaluation of your profile, we were impressed with your qualification and skills which makes you one of the prospective candidates. We are pleased to inform you that you have been selected and invited for an Assessment at BG-LEAD CONCEPT.\r\nDate: Tuesday, 22nd May 2018\r\nTime: 9.00am prompt\r\nAddress: Cranfield consulting 7, Razaq Balogun street, off Adebola street, off Adeniran Ogunsanya road, Surulere, Lagos.\r\nBG-LEAD CONCEPT is a fast-growing business strategy and human capacity development outfit dedicated to providing innovative business solution to her teeming clients, assists clients in creating and managing strategic relationships and alliances with other organisations, including startups to multinational external expertise, technology, and intellectual properly to expand their product, service, functionality.\r\nCome with a copy of your updated CV, photocopies of your credentials and this mail for clarification issues and for security purposes.\r\nHowever it is important you confirm receipt and your availability replying this mail\r\nFor further inquiries: Call the secretary on 08037513947 or email (info.co.felix@gmail.com )\r\nWe look forward to seeing you.\r\nBest Regards,\r\nMANAGEMENT/HR\r\nDr Onyinye",
    createdAt: "2018-05-20 01:32:33",
    updatedAt: "2018-05-20 01:32:33",
    title: "how real is this company and the invitation",
    
    inviteId: "7dfdcd49-5ac5-41f7-bbda-6784cbf0eadf"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      'EKOSHOPPING \r\n\r\nHello, we received your application! u are invited for an interview on 19th April. 9B, Adedotun Dina, Mende, Maryland(10AM). Please accept iv "YES to 080......54"',
    createdAt: "2018-05-21 05:34:39",
    updatedAt: "2018-05-21 05:34:39",
    title: "Who knows about this?",
    
    inviteId: "2e9f425f-0e22-4cef-af20-4e33f2d4a906"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been shortlisted to attend an interview/screening on Thursday 24th May, 2018. At PROWAYS DYNAMICS RESOURCES LTD, By 10am prompt. At number 12, alaafia close opposite olowo tinfowosanu shopping complex, iwo road Ibadan. For more details call 081-3970-3667 or 070-5810-1023. Ref code:55EM.",
    createdAt: "2018-05-21 19:10:16",
    updatedAt: "2018-05-21 19:10:16",
    title:
      "Good day guys received this message today, how authentic can it be thanks",
    
    inviteId: "eb118fcc-342d-444a-bbe3-7457db8f984b"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear **\r\nManagement Resource is a consulting firm that offers Enterpreneural services.\r\nBased on your application to us, you have been shortlisted for an interview with the Head of Human Resource (HR).\r\n\r\nTime: 10:00am\r\n\r\nDate: Wed 23/05/2018\r\n\r\nAddress: Plot 5, voda paint plc, university press house, funmec bus stop off Adeniyi Jones, ogba road. Lagos.\r\n\r\nRegards, \r\n\r\n\r\nMrs Lola Blessing\r\n\r\nHead of admin\r\n\r\nGlobal Management Resource\r\n\r\nIkeja Branch\r\n\r\nIkeja Lagos.",
    createdAt: "2018-05-22 09:55:22",
    updatedAt: "2018-05-22 09:55:22",
    title:
      "Good morning house, please help me verify this invite...thanks in anticipation.",
    
    inviteId: "69bf4239-4502-4e5b-b9aa-a8a37f2ff64e"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant,\r\nIn lieu of your application via Lekki Agency, you are invited for an interview on\r\nDate: Wednesday,23rd May 2018\r\nTime: 1 pm\r\nVenue: Limeridge Hotel, Chevron Drive, Lekki.\r\n\r\nKindly come along with a passport photograph.\r\nFor more details call :09062850604",
    createdAt: "2018-05-22 17:29:07",
    updatedAt: "2018-05-22 17:29:07",
    title: "Amigos, please help confirm this invite.",
    
    inviteId: "5e7e0860-8eb3-408c-94ad-289668bc73ed"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hello, this is to inform you that you have been scheduled to attend interview with details below. Date-24th may 2018. Time- 10am. venue- 5th quadrant performance limited. please are they genuine?",
    createdAt: "2018-05-23 11:54:27",
    updatedAt: "2018-05-23 11:54:27",
    title: "Please guys kindly help me confirm this interview invite",
    
    inviteId: "889d20db-5502-491b-b1d6-942b938e63bf"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hello, please I got a mail form shaldag limited in\r\nEpe Lagos. Anyone familiar with this company?",
    createdAt: "2018-05-23 16:38:25",
    updatedAt: "2018-05-23 16:38:25",
    title: "Shaldag Limited : Anyone familiar with this company?",
    
    inviteId: "068a177a-0963-48db-a3b7-26953df5e840"
  },
  {
    userId: "5fae5ac2-0920-46e4-b1ae-02400db11f50",
    body:
      "Good morning ma,\r\nI received an HR job interview message this morning. Please, I would like to verify if it is genuine:\r\n\r\nHello OGUNLEYE ABRAHAM, based on your online application to M.H.S, pls note that you're required to come over for an Assessment Interview with the HR Dept on FRIDAY 25/05/2018.\r\nTime: 9am.\r\nAddress: 65c Opebi road, opposite glass house by Salvation b/stop, Opebi, Ikeja, Lagos.\r\nDo present a hard copy of your CV,a passport photograph and pls ensure to be punctual.\r\nPlease come with writing materials.Need help/directions?\r\nCall Admin: 0803-449-6175/6151",
    createdAt: "2018-05-24 12:31:28",
    updatedAt: "2018-05-24 12:31:28",
    title: "Please is this genuine",
    
    inviteId: "608b6cd6-c095-4fd3-9052-f11b15097a78"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "P.wan heritage Awoyaya lagos not a real job interview but an invitation to join as a commission referral partner or paid partner(u pay), no sale no pay\r\n\r\nUnless you can do that don't waste your t fare\r\n\r\nIn fact beware of most real estate companies in general especially in ibeju lekki axis\r\n\r\nFrom :  http://www.nairaland.com/968512/list-fake-employment-companies-stay/81#968512.2603",
    createdAt: "2018-05-24 22:38:36",
    updatedAt: "2018-05-24 22:38:36",
    title: "P.wan heritage Awoyaya lagos not a real job interview",
    
    inviteId: "3f3d81d7-6bd1-4e38-8dfa-2cc684d53f89"
  },
  {
    userId: "88b7f91a-14f2-4241-b624-3fe1e98ef06b",
    body:
      "Dear applicant\r\n\r\nYou are hereby invited for an interview with INVSHARE NIG LTD on the 28th of May 9:00am prompt. At 3, Abraham  imuse street, 2nd junction bustop, governors road, Ikotun Lagos. \r\nKindly come with 3 copies your CV and original certificates. \r\n+2347037374370",
    createdAt: "2018-05-25 12:35:32",
    updatedAt: "2018-05-25 12:35:32",
    title: "please someone should assist how real is this Job",
    
    inviteId: "bb02988c-e0de-49bd-93d2-0e1c642bba98"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I have been invited for an interview by this Firm below, can someone help me check the authenticity of this organization. Below is their message:\r\n\r\nYou have been shortlisted to attend an interview on the 28th of May 2018 at TSM House behind Apo Legislative Quarters, Gudu District, Abuja.11am\r\n\r\nHot FM Abuja",
    createdAt: "2018-05-25 17:17:45",
    updatedAt: "2018-05-25 17:17:45",
    title: "help me check the authenticity of this organization",
    
    inviteId: "05cd6217-f4a2-4669-be8c-c01df9f3b84c"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant\r\nYour application to Careerswise Recruitment Agency as been received. \r\nWe are pleased to inform you that you have been selected to attend an interview session with the Head of Human Resource (HRM) at Management Resource a Consulting Firm and also offer Entrepreneurial services. \r\n\r\nTime: 10:00 am\r\nDate: Monday 28th MAY,2018 \r\nAddress:5 SURULERE HOUSE, surulere industrial road, Off Adeniyi jones. Ikeja Lagos.\r\nCome with a hard copy of your CV\r\nKindly reply this mail if you will be available and for further details.\r\n\r\nRegards,\r\nMary Davies\r\nRelationship Officer\r\n09037567921\r\nIkeja Branch\r\nLagos",
    createdAt: "2018-05-25 22:44:40",
    updatedAt: "2018-05-25 22:44:40",
    title: "Amigos, please help confirm this invite",
    
    inviteId: "5ecc92a8-4413-4a6b-b944-27924c0eed48"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body: "Any information on them?",
    createdAt: "2018-05-27 10:06:37",
    updatedAt: "2018-05-27 10:06:37",
    title: "Who knows about Henkel AG & Company?",
    
    inviteId: "076b0d8a-2d5c-469c-ac82-38dc21fccabd"
  },
  {
    userId: "fc96b985-42f1-47fd-9ce9-2724d48bff92",
    body:
      "SABMiller Plc Recruitment 2018/2019 | Applicatiin is on. SABMiller is in the beer and soft drinks business, bringing refreshment and sociability to millions of people all over the world who enjoy our drinks.\r\nClick below for full details and application \r\nhttps://jobandschool.com.ng/sabmiller-plc-recruitment-2018-2019-apply-for-sabmiller-jobs/",
    createdAt: "2018-05-29 10:11:54",
    updatedAt: "2018-05-29 10:11:54",
    title: "Is SABMILLER plc real?",
    
    inviteId: "d2c71d09-c132-45f7-bd97-ee4a86bcc863"
  },
  {
    userId: "472537a2-ea2c-4b1d-a47d-ce9ed668f68f",
    body:
      "Based on Recommendation through our online agent for the post you applied for you have been shortlisted.\r\nAfter thorough preview of your details and your Curriculum vitae,considering the working experience, skills and attribute you encompassed, the Board of Directors of  BG LEAD NIGERIA LIMITED , invites you for an assessment.\r\n\r\nDate: Monday    4th  June ,2018\r\nTime: 9am prompt\r\n\r\nVenue: Suite 4a Karim Ogungbeye Estate, off Amaraolu beside zenith bank, LTv8 w",
    createdAt: "2018-05-31 17:39:00",
    updatedAt: "2018-05-31 17:39:00",
    title: "Is this legit?",
    
    inviteId: "6bd4de86-ddee-42aa-bf70-d2d012cb9c1a"
  },
  {
    userId: "472537a2-ea2c-4b1d-a47d-ce9ed668f68f",
    body:
      "Based on Recommendation through our online agent for the post you applied for you have been shortlisted.\r\nAfter thorough preview of your details and your Curriculum vitae,considering the working experience, skills and attribute you encompassed, the Board of Directors of  BG LEAD NIGERIA LIMITED , invites you for an assessment.\r\n\r\nDate: Monday    4th  June ,2018\r\nTime: 9am prompt\r\n\r\nVenue: Suite 4a Karim Ogungbeye Estate, off Amaraolu beside zenith bank, LTv8 w",
    createdAt: "2018-05-31 17:39:06",
    updatedAt: "2018-05-31 17:39:06",
    title: "Is this legit?",
    
    inviteId: "5fb91802-cb6b-4abd-abe8-7fbb290495ee"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "U are Invitd 4 an Interview On Mon 4th June '18, 12.30pm @ Mutual Benefits Life Ass,75,lagos Rd,slot Buildng,haruna B/stop,ikorodu,come Wt Ur Cv & Credentials",
    createdAt: "2018-06-01 17:11:57",
    updatedAt: "2018-06-01 17:11:57",
    title: "how true is this?",
    
    inviteId: "1e99b930-50df-4b0f-80aa-5e281999a5d5"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Sequel to the reciept of curriculum vitae (CV), the board of LS\r\nResources request your presence to be interviewed based on your\r\nQualifications.\r\n\r\nScheduled Date\r\nWednesday: 06/06/018\r\nTime: 9:00am\r\nOfficial Address: 3rd flr, Crownnet Plaza, Idris Gigado Str Wuye Abuja.\r\n\r\nRequirement:\r\nHard copy of this email notification\r\nHard copy of your Curriculum Vitae\r\nA passport photograph\r\n\r\nDress Decently and be punctual as lateness will not be entertained.\r\n\r\nGood Luck (HR T ALKALINE )",
    createdAt: "2018-06-01 17:18:46",
    updatedAt: "2018-06-01 17:18:46",
    title: "Same here.. Received this today",
    
    inviteId: "8f15f763-4775-4cdf-b263-c2b1463a5938"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Good Evening 2 u all\r\n\r\nIn response to your application, you are hereby invited for an interview on Monday 4th June, 2018, by 9.A.M. at Ample Life Foundation office First Floor, 561 Agege Motor Road Opposite GRA Ikeja, near Zenith Bank. Sogunle Bus stop, Lagos. Kindly come with a photocopy of your CV and credentials.",
    createdAt: "2018-06-04 12:21:36",
    updatedAt: "2018-06-04 12:21:36",
    title: "I just got that message now, pls who has been der b4",
    
    inviteId: "9dbdba1e-9866-4a31-a305-185507221376"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear TAIWO ISAIAH, \r\n\r\nOYATIMET Consultancy Firm is a recruiting firm and also is an outsourcing firm which also offers ICT and Entrepreneurship services. As part of screening and selection process, you have been scheduled for an interview session slated for Monday, June 4th, 2018 by 10am, at Plot 14, Block A, Voda Paint, Surulere House, Off Fumec bus-stop, Surulere industrial road, Ogba, Lagos.\r\n\r\n \r\n\r\nCome with your cv and academics docs.\r\n\r\n \r\n\r\nThe HRM look forward to meeting with you soon.\r\n\r\n \r\n\r\nSincerely,\r\n\r\nMary Davis, \r\n\r\n09037567921\r\n\r\nfor OYATIMET Consultancy Firm.\r\n\r\nOutsourcing Unit",
    createdAt: "2018-06-04 12:28:36",
    updatedAt: "2018-06-04 12:28:36",
    title: "I just receive that now, Plz who has been der b4",
    
    inviteId: "7c45f718-74d0-4a4e-aa16-20efad7c582e"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please admin, verify this for me, very urgent oh\r\n\r\nLooks real.\r\n\r\nThank you for your interest in our job opening.\r\n\r\nYou have been shortlisted and hereby invited for an interview at our office:\r\n\r\nAddress: 04, Oye Balogun Street off freedom way, Lekki Phase 1, Lagos Nigeria.\r\n\r\nTime: 11am.\r\n\r\nDate: 4th, June 2018.",
    createdAt: "2018-06-04 19:02:31",
    updatedAt: "2018-06-04 19:02:31",
    title: "Please admin, verify this for me, very urgent oh",
    
    inviteId: "3f8c3c62-fc16-4990-9bdf-a0e8b67283c9"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Your Application / CV information with us matches the request of one of our clients, to this effect you are hereby invited for Oral $ writing assessment with out human resources team on Monday 6th of June 2018 at one of the selected venues in Lagos. End of Adeniyi Jones, Adjacent SON, then Locate 5 resources press building Ogba Lagos.\r\n\r\nTime: 9:30am\r\n\r\nNote: Come along with a printed copy of this invitation and your updated curriculum vitae.\r\n\r\nDress corporately and be ensure to come early as lateness will not be welcome",
    createdAt: "2018-06-04 19:43:08",
    updatedAt: "2018-06-04 19:43:08",
    title: "Admin please verify",
    
    inviteId: "76bc1bbe-d55d-48a3-b32c-13c94fdbf0e3"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been invited for an interview for the position of a SALES/CUSTOMER SERVICE REPRESENTATIVE tomorrow 6/6/18 by 10.00am at JANCHINE NIG LTD. 217/219  Olabode house ikorodu road Ilupeju lagos. B/w Anthony and Obanikoro busstop. Come with the hardcopy of CV and passport",
    createdAt: "2018-06-05 14:28:16",
    updatedAt: "2018-06-05 14:28:16",
    title: "pls I just got this mail are they for real.pls",
    
    inviteId: "37d4c72b-3a55-40f9-bfb7-fb3196ff01c3"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant,\r\n\r\n\r\n\r\nThank you for applying for the position of a Sales Executive with Re-ThinkHR Company in IKEJA, LAGOS. \r\n\r\n\r\n\r\nWe would like to invite you to come to our office to interview for the position. Your interview has been scheduled for Wednesday June 6th, 2018, 12pm, at 2 Esomo Close, Toyin, Ikeja.\r\n\r\n\r\n\r\nCome along with a copy of your CV.",
    createdAt: "2018-06-05 23:25:24",
    updatedAt: "2018-06-05 23:25:24",
    title: "Please who know them?",
    
    inviteId: "2946ce65-c224-42fa-839a-e5429e659756"
  },
  {
    userId: "d59cf59d-6163-4c3e-9d12-26cdddc2bf95",
    body:
      "You have been selected for an interview with the HRA in our office;8,Adebare Street,B&Q Building,Ogudu Bustop,Lagos on Thur 7th June,2018 by 9am.080-3860-4624 \r\nthey called themselves ICA Ltd",
    createdAt: "2018-06-06 13:45:04",
    updatedAt: "2018-06-06 13:45:04",
    title: "Is this real",
    
    inviteId: "55171ae2-a529-49be-a5de-c5d5380e2fbd"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Following the consideration of an online recommendation, after much evaluation of your profile, we were impressed with your qualification and skills which makes you one of the prospective candidates.We are pleased to inform you that you have been selected and invited for an Interview/Assessment at BOSS GLOBAL CONCEPT on Thursday 7th June,2018 by 8:30am prompt. \r\n\r\nBOSS GLOBAL CONCEPT is a fast-growing business strategy and human capacity development outfit dedicated to providing innovative business solution to her teeming clients,assists clients in creating and managing strategic relationships and alliances with other organisations,including startups to multinational companies, research institutions,and government agencies.As a result, they are able to leverage on external expertise,technology,and intellectual properly to expand their products,service,functionality.\r\n\r\nLocation: Suit 4B Ogunbeye Street, Off Amaraolu street Agindibi,Ikeja.Lagos. \r\n\r\n\r\nCome with a copy of your CV,photocopies of your credentials and this mail for clarification issues and for security purposes. \r\n\r\nHowever it is important you confirm receipt and your availability replying this email. \r\n\r\n\r\nFor further inquiries,please call the secretary on 09050000082",
    createdAt: "2018-06-06 15:01:28",
    updatedAt: "2018-06-06 15:01:28",
    title:
      "I just got a mail for an interview. Kindly confirm if it's a scam",
    
    inviteId: "13fd98e3-29b2-4d53-abcd-d23a0597a307"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "After thorough consideration, You are invited for an INTERVIEW by ACE NIG on THURSDAY 7/06/18 by 9AM at 8 ADEBARE STR (B&Q Bakery Building) Ogudu B/Stop, Lagos.",
    createdAt: "2018-06-06 18:19:15",
    updatedAt: "2018-06-06 18:19:15",
    title: "Please is this legit????",
    
    inviteId: "af1997e4-cb7c-4d70-ba05-1d47a95433c1"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "U Are Invited For Employment Interview At Mega Chicken Rest Ikota Firstgate Lekki~Epe Expressway Ajah On Fri 8 June By 12noon. .",
    createdAt: "2018-06-06 18:28:09",
    updatedAt: "2018-06-06 18:28:09",
    title: "Please is this legit????",
    
    inviteId: "e32b69d2-d92b-43a1-bc9e-36ebda39ac09"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "BASED ON REFERRAL,DLE INVITES YOU FOR AN INTERVIEW TOMORROW.\r\n@SUITES 6 INNOSON PLAZA\r\nOPP ST BENEDICT HOSPITAL, 94 OWERRI ROAD NNEWI\r\nBY 10:00AM\r\nSeat No:B-171.",
    createdAt: "2018-06-07 10:20:10",
    updatedAt: "2018-06-07 10:20:10",
    title: "I got the same message too...how true is it",
    
    inviteId: "5d9431e0-ed82-43ef-bbdf-abd8daf6a9f6"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Thank you for applying for the position of Senior Supervisor, Quality Control.\r\n\r\n\r\n\r\nSequel to your response to the advert from a newly established Abuja based Beverage Company; you are hereby invited for the next round which has been rescheduled as follows:\r\n\r\nDate: June 8, 2018.\r\n\r\nTime: 1:00pm prompt.\r\n\r\nVenue: Hotel 1960 Clasic, 24 Olufunmilola Okikiola Street, Off Toyin Street, Ikeja, Lagos.\r\n\r\n\r\n\r\nKindly confirm your availability by replying this mail",
    createdAt: "2018-06-08 12:05:03",
    updatedAt: "2018-06-08 12:05:03",
    title:
      "Please I just got this e-mail. Pls kindly confirm if its legit so I don't waste my time and money from Ilorin.",
    
    inviteId: "ec708ff1-e734-4d5c-95d4-18a4abf364b0"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are hereby invited for an interview @ De-Skyline Hotel,beside MM local Airport,Ikeja on Friday 8th of June,2018 by 11:00AM.Come along with the original and photocopies of your credentials,CV and passport photograph.",
    createdAt: "2018-06-08 12:19:07",
    updatedAt: "2018-06-08 12:19:07",
    title: "Pls, it is genuine?",
    
    inviteId: "3480e6e2-03c1-4892-9b2d-b30f0399091b"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been selected for an interview at Pork Money Nigeria. Your interview has been scheduled for 8thJune Friday, time 10:00am prompt. Kindly come in with your CV, your work portfolio and original credentials. Venue 1686 Oladele Olashore Street, off Sanusi Fafunwa Victoria Island Lagos. Kindly Indicate attendance by responding to this text.",
    createdAt: "2018-06-08 15:59:19",
    updatedAt: "2018-06-08 15:59:19",
    title: "How real is this house?",
    
    inviteId: "3390d500-7c23-4060-a282-3874a99c3618"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Candidate, \r\n\r\nSequel to your recent application for the role of teller, you have been shortlisted for an interview.\r\n\r\nPlease find the details below for your adoption.\r\n\r\nDate: Monday 11th, June 2018.\r\nVenue: Union Bank; Yenogoa Main\r\nTime: 2pm\r\nContact Person: Nkechi Anyanwui\r\n\r\nFor any clarification, please contact me via mail.\r\n\r\nThank you.",
    createdAt: "2018-06-08 16:08:49",
    updatedAt: "2018-06-08 16:08:49",
    title: "Admin please help me confirm",
    
    inviteId: "7875908b-cc77-4c91-80a1-cc4c7a979dd9"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "D Pearl Consulting at 116 Akowonjo road egbeda is a scam, they will send you a mail telling you that you are the best candidate for the position. When I got there I met about ten people and twenty others came after me. The rude ladies there told us no talking, no laughing and that if you're not comfortable with that you should take your leave Like we were in a WAEC hall undecided. Very hungry looking ladies with rude attitude, one was even looking like a house girl with 'my madam dash me' kind of cloth grin grin grin. After sitting for like thirty minutes, one aggressive dude came out and was giving lecture o saying that DPearl is a group of companies, group of companies that doesn't even have a website o, telling us we have been chosen and are going to meet with his BDM  undecided undecided stories that touch the arsehole. He said we were going to have a two hour assessment, immediately I heard that, I carried my bag, packed my slippers and left. I took another applicant's number and asked him because he decided to wait till the end of the whole thing, he said all they did was brain wash people like those GNLD companies.\r\nI went there just to see what they were up to because after I got their invite I went online to check for them, I only saw them on vconnect, no website, no specific service that they render. \r\nIf you get anything from them, whether you applied or not, don't waste your transport fare biko, they are time wasters and scammers.\r\n\r\nSource:  http://www.nairaland.com/1841414/how-identify-scam-interview-invitation/130#1841414.4189",
    createdAt: "2018-06-09 18:37:58",
    updatedAt: "2018-06-09 18:37:58",
    title: "D Pearl Consulting at 116 Akowonjo road egbeda is a scam",
    
    inviteId: "70034f6f-61dc-4e35-90f1-1054bd3b21f5"
  },
  {
    userId: "7936d00c-f9ff-4aab-af4c-fe4aaec09519",
    body:
      "this mail is with reference to your proposed candidature received earlier, in order to arrange a face-to-face interview with you based on your prospective potentials with DEW PLATFORM PLUS RESOURCES.\r\nSCHEDULED DATE; Monday 11, 2018, 9.00am\r\nOFFICE AVENUE; Ground Floor, No 2, Akin Osiyemi Street, Opp. Sterling Bank Bus Stop, Allen Avenue, Lagos State.\r\n\r\nhttp;//home.dpprng.com/",
    createdAt: "2018-06-09 22:15:52",
    updatedAt: "2018-06-09 22:15:52",
    title:
      "Can anyone confirm if this is fake or real, i just got the email for an interview",
    
    inviteId: "66dea123-e58e-473b-935d-62d5930cdc4b"
  },
  {
    userId: "053fa2c6-033d-4fcc-8c41-591dc91213b8",
    body:
      "Are you are corps member in Lagos state or you resides in Lagos, here is an opportunity for you at Pertinence Limited the Owners of ABC&VIP Gardens Nationwide.\r\nPERTINENT LIMITED is currently recruiting Marketer/free lancers (Part time/full time) to Market her Real Etate Business across Lagos state and it's environment.....\r\nSend your résumé to.... rufus@pertinencegroup.com. \r\n\r\n\r\nYou are invited for an interview at our Branch Office: Pertinence Limited Alaba International Market Lagos.\r\nNo 35, Balogun B/stop mile 10 off vokes bus stop Iyano Oba Lagos or call 08181068760, 07032448395",
    createdAt: "2018-06-10 07:01:46",
    updatedAt: "2018-06-10 07:01:46",
    title: "Pls i want to know if this is a real job. ITS URGENT",
    
    inviteId: "c5ee8a33-14f2-423e-a0f0-ea0bf3b84e87"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Please I got this text today . I want to know if this MATRIXGLOVER is real or fake abeg make una help me. Thanks\r\n\r\nYou are invited for an interview on tue 12/06/1018 by 9am @ 6, remilekun street off falolu rd,akerele str, surulere lagos. GD/7447/DA. MATRIXGLOVER.",
    createdAt: "2018-06-12 10:17:04",
    updatedAt: "2018-06-12 10:17:04",
    title: "I want to know if this MATRIXGLOVER is real or fake",
    
    inviteId: "51cb5f17-e62d-4a8a-a54d-c47c2cdeafa7"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "MADE HILL SOLUTION\r\n\r\n\r\nAddress: 65c Opebi road, opposite glass house by Salvation b/stop, Opebi, Ikeja, Lagos",
    createdAt: "2018-06-13 15:00:52",
    updatedAt: "2018-06-13 15:00:52",
    title: "Please is this legit????",
    
    inviteId: "94474295-8411-43e1-84cb-0df7a467053b"
  },
  {
    userId: "ff87a0dd-6772-4f26-9ddd-2bdbcd1893f7",
    body:
      "Dear Candidate,\r\n\r\nGreetings!\r\n\r\nThis mail is with reference to your proposed candidature received earlier, in order to arrange a face-to-face interview with you based on your prospective potentials with DEW PLATFORM PLUS RESOURCES.\r\n\r\nSCHEDULED DATE:\r\nThursday, 14th June 2018\r\n\r\nTIME: 9.00Hours in the Morning.\r\n\r\nOFFICE ADDRESS: Ground Floor, No. 2 Akin Osiyemi Street Opp. Sterling Bank Bus-stop, Allen Avenue, Ikeja, Lagos State.\r\n\r\nREQUIREMENTS;\r\n-Hard copy/Print-out of this Email Notification.\r\n-Hard copy of your Resume/Curriculum Vitae.\r\n-Two (2) Passport Photographs.\r\n\r\nOPTIONAL\r\n-A regulatory I.D Card i.e. Driver's License, National I.D card, Voter's Card, INT'L Passport.\r\n\r\n\r\nDIRECTION:\r\nFROM OJUELEGBA/OSHODI, LAGOS TAKE A COMMERCIAL BUS TO ALLEN/ALAUSA/SHOPRITE, ALIGHT AT ALLEN AVENUE, STERLING BANK BUS-STOP.\r\n\r\n\r\n\r\nWE look forward to meeting you.\r\n\r\nYou can visit our website given below for further details. If there is any query please feel free to write us.\r\n\r\nAll the Best!\r\n\r\n\r\nHR DEPT\r\n\r\n\r\nhttp://home.dpprng.com/",
    createdAt: "2018-06-13 19:27:22",
    updatedAt: "2018-06-13 19:27:22",
    title: "Please help me confirm this",
    
    inviteId: "e55a568a-22bf-412b-a161-ea49b6e529d5"
  },
  {
    userId: "ff87a0dd-6772-4f26-9ddd-2bdbcd1893f7",
    body:
      "Prior to ur application,u're SHORTLISTED 4 A TEST/JOB BRIEF with SCHLEEZ NIG LTD by 9AM ON 14JUN @49,OLOWU STR,BANKS WAY,IKEJA,LAGOS\r\nDetails in ur mail\r\nC.Nig",
    createdAt: "2018-06-13 19:30:04",
    updatedAt: "2018-06-13 20:43:40",
    title: "Please help me confirm this too",
    
    inviteId: "e5af7e4c-628f-4b6d-a4da-73c7d35c8d8d"
  },
  {
    userId: "ff87a0dd-6772-4f26-9ddd-2bdbcd1893f7",
    body:
      "Prior to ur application,u're SHORTLISTED 4 A TEST/JOB BRIEF with SCHLEEZ NIG LTD by 9AM ON 14JUN @49,OLOWU STR,BANKS WAY,IKEJA,LAGOS\r\nDetails in ur mail\r\nC.Nig",
    createdAt: "2018-06-13 19:30:05",
    updatedAt: "2018-06-13 19:30:05",
    title: "Please help me confirm this too",
    
    inviteId: "0d15aa55-6546-4a04-bcf0-cf377915d3bf"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Candidate, Linktech Resource is outstanding when it comes to outsourcing for it clients. We also offer excellent ICT and Entrepreneurship services. As part of our screening and selection process, you have been scheduled for a one on one interview session with the HRM, slated for Friday, June 15th, 2018 by 10am, at Plot 14, Block A, University Press building, Surulere industrial road, Ogba, Lagos. Come with an updated hard copy of your CV The HRM look forward to meeting with you soon. Regards, Linktech_hr For inquiries: Call:- 08030832748",
    createdAt: "2018-06-14 23:45:30",
    updatedAt: "2018-06-14 23:45:30",
    title: "is this real?",
    
    inviteId: "0d2ba871-dc43-4773-b602-ee93f55820d6"
  },
  {
    userId: "59ddd389-8350-4027-97ab-222cebbc9495",
    body:
      "Dear Candidate,\r\n\r\nThe   Search Committee of Malock Consult in Affiliations with FDI hereby shortlists you to have an interview for an OPEN PORTFOLIO with DEW PLATFORM PLUS RESOURCES\r\n\r\n\r\nSCHEDULED DATE;\r\nTuesday 19th JUNE. 2018\r\n\r\nTime:- 9.00am in the Morning.\r\n\r\nOFFICE ADDRESS: Ground Floor, 2, Akin Osiyemi Str. Opp. Sterling Bank, Firstbank Bus-stop, Allen Avenue, Ikeja, Lagos State.\r\n\r\nREQUIREMENTS;\r\n-Hard copy/Print-out of this Email Notification.\r\n-Hard copy of your Resume/Curriculum Vitae.\r\n-Two (2) Passport Photographs.\r\n\r\nDress Corporately and be sure to come early as lateness will NOT be welcomed.\r\n\r\nOPTIONAL\r\n-A regulatory I.D Card i.e. Driver's License, National I.D card, Voter's Card, INT'L Passport (AS YOU MIGHT HAVE NEED FOR IT AT THE END OF THE WHOLE EXERCISE).\r\n\r\nBest of Luck, HR/M DEPT.\r\n\r\nDIRECTION:\r\nFROM OJUELEGBA/OSHODI, LAGOS TAKE A COMMERCIAL BUS TO ALLEN/ALAUSA/SHOPRITE , ALIGHT AT ALLEN AVENUE, FIRSTBANK BUS-STOP\r\n\r\n\r\n\r\nWe look forward to meeting you\r\n\r\nYou can visit our website given below for further details\r\n\r\nAll the best!\r\n\r\nhttp://home.dpprng.com/",
    createdAt: "2018-06-15 14:32:06",
    updatedAt: "2018-06-15 14:32:06",
    title: "Please is this real",
    
    inviteId: "1bcaed2a-145c-4e46-b829-3359065ee9b1"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Good afternoon. Does anyone know about Megatech software Ltd at town planning way, Ilupeju? I got a text from them inviting me for an interview.",
    createdAt: "2018-06-15 15:42:22",
    updatedAt: "2018-06-15 15:42:22",
    title:
      "Does anyone know about Megatech software Ltd at town planning way, Ilupeju",
    
    inviteId: "f345e407-86a5-40e8-82c1-674d99002509"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "You are invited for an interview scheduled for 20/6/2018 at Dulux Colour Centre Gbagada, 22A Lanre Awolokun road Gbagada Lagos.",
    createdAt: "2018-06-16 11:17:13",
    updatedAt: "2018-06-16 11:17:13",
    title: "Please is this legit????",
    
    inviteId: "e54274e0-6e90-431e-85d7-c32a6c46244b"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "with regards to your resume sent to us, we are pleased to recommend you for an opening in our organisation after much evaluation of your profile.You have been cordially invited to partake in the ongoing recruitment at Lead Concept. \r\n\r\n \r\n\r\nLEAD CONCEPT is a top direct fast-growing business strategy and human capacity development outfit dedicated to providing innovative business solution to her teeming clients, assists clients in creating and managing strategic relationships and alliances with other organizations, including startups to multinational companies, research institutions, and government agencies, we generate the best high-quality leads your business needs to succeed in business world globally and we have a constant flow of new  leads as a result of professionalism in our field. At lead concept we have values that have always contributed to our success; take pride, we are passionate, never give up, and work as a team and it fun. Our values are reflected in everything we do, its what sets us apart. \r\n\r\n \r\n\r\nDate: Tuesday 19th June,2018  by 10am prompt.\r\n\r\n \r\n\r\nOffice  Address:Suit 18B Bayo Ajayi Street,Opp African Shine by Cadbury bus stop,Agindibi,Ikeja.Lagos  \r\n\r\n \r\n\r\n \r\n\r\nNote:You are required to come along with an updated copy of your CV and a means of proper identification. \r\n\r\n \r\n\r\nHowever it is important you  confirm receipt and your availability replying this email. \r\n\r\n \r\n\r\n \r\n\r\nRegards,\r\n\r\nHR ADMIN\r\n\r\nDr. ZARA\r\n\r\nHuman Resource\r\n\r\nOffice-Line:08051897778",
    createdAt: "2018-06-17 15:28:15",
    updatedAt: "2018-06-17 15:28:15",
    title: "Please is this legit????",
    
    inviteId: "6f1d5502-c6bf-499b-8f15-b9377d31b144"
  },
  {
    userId: "4d7879ec-c38d-4d9e-a580-e7146d33f5bc",
    body:
      "Please help out to know if this company is real or what they do. PETOL, recruiting for CALL CENTRE REPRESENTATIVE. Thank you",
    createdAt: "2018-06-17 18:55:53",
    updatedAt: "2018-06-17 18:55:53",
    title: "about PETOL",
    
    inviteId: "7c399517-cf58-4597-b50a-c6928af38bd4"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "DEAR APPLICANT, YOU HAVE AN INTERVIEW WITH DPP-RESOURCE, AKIN OSIYEMI STR, OPP. STERLING BANK, ALLEN AVE. IKEJA. CHECK YOUR MAIL NOW!",
    createdAt: "2018-06-17 22:08:09",
    updatedAt: "2018-06-17 22:08:09",
    title: "Please help me with this:",
    
    inviteId: "2aa65511-fdff-4852-aa54-c8543f799bd6"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are here-by invited for a Test Interview with NMR-INT LTD for Operations Technician Position.\r\n\r\nCome with a pen and a valid ID card.\r\nTime: 12.00pm\r\nDate: 19/06/2018\r\nNo 23 acme Rd,AcmeHouse,Ogba-Ikeja,Lagos,\r\n\r\nyou can Email: Prince.Okereafor@nmr-int.com OR Undiel.Ugbe@nmr-int.com or call 080 621 05831",
    createdAt: "2018-06-18 05:52:19",
    updatedAt: "2018-06-18 05:52:19",
    title:
      "No tangible information about them online. Please who knows about this firm?",
    
    inviteId: "2c575bab-51e5-461c-8eb6-4e6b91c33d52"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant,\r\n\r\nThis is to inform you that you have been shortlisted for the Position of Business Development / Marketing Personel.\r\n\r\nThere will be an interview on 13/6/2018 (Wednesday) at our office (326 Bornowy Alagomeji Yaba :Lagos) by 11:30am prompt.\r\n\r\nPlease call 07035807350 in case you need directions to our office.\r\n\r\nKindly confirm the receipt of this email",
    createdAt: "2018-06-18 05:58:48",
    updatedAt: "2018-06-18 05:58:48",
    title: "Admin pls help me confirm this invitation",
    
    inviteId: "edef512f-7950-4de9-8362-c56fde9ce23c"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Dear Applicant,         \r\n\r\nSequel to your application,\r\nThe selection committee has carefully identified you for this great opportunity, please be informed that your application has been considered and you are hereby recommended for an aptitude test and oral job brief, followed by the job duties and specifications.\r\n\r\nWith SCHLEEZ NIGERIA LIMITED\r\nFirst floor,  No 49, OLOWU STREET, OFF MOBOLAJI BANK ANTHONY WAY, IKEJA, LAGOS\r\nOn Wednesday 20th June 2018 BY 9:00AM.\r\n\r\nThe interview will be with the Human Resources department.\r\nUpon arrival at reception ask the security for the center.\r\n\r\n\r\nThe interview is scheduled to last approximately 1-3 hours tentatively and will take the form of \r\nA written aptitude test for about 20 minutes or less,\r\nOne on one interview with the HR for about 5 minutes or less,\r\nThen the job duty and specification for about 25 minutes or less,\r\nThe selection process with the Hr Head for about 1 hour 48minutes or less,\r\nFinal interview with the Hr Head which will last for about 15 minutes for the selected candidates to be shortlisted for the job.\r\n\r\n\r\nPlease note that you are to bring along with you,\r\nAny valid ID card, hard copy of your credentials, a copy of this invite and  the sms you will receive from SCHLEEZ LTD\r\nThe Human resources team and general management will be available to conduct the interview fully with you, we are not affected by the general holiday.\r\n\r\nWe look forward to meeting you.\r\nRegards",
    createdAt: "2018-06-18 19:31:27",
    updatedAt: "2018-06-18 19:31:27",
    title: "Please is this legit????",
    
    inviteId: "b90fb451-ff9e-4594-8d2d-d15e11771e28"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Good Morning,\r\n\r\n\r\n\r\nSequel to your application and after careful review of your CV, we are pleased to invite you for an interview.\r\n\r\nVenue: FILMO GROUP, 1 Kandi Close, Off Aminu Kano Crescent, Wuse II, Abuja, Nigeria\r\n\r\nDate: 14-5-2018\r\n\r\nTime: 10am prompt.\r\n\r\nPlease come along with a copy of your CV/credentials.\r\n\r\n\r\n\r\nRegards,\r\n\r\nAdebowale",
    createdAt: "2018-06-20 10:30:00",
    updatedAt: "2018-06-20 10:30:00",
    title: "Please i got this mail. Please is it genuine?",
    
    inviteId: "677fb236-dbac-43a1-be7d-1d24161ac423"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "So I got this mail this noon and I was thinking has anyone gone to any of their interview? Seems somewhat legit since the mail was sent with an official mail with their domain name\r\n\r\nDear Applicant,\r\nWe received your application for the position of Admin/HR Assistant. \r\nYou are hereby invited for interview and discussion, see details of invite below;\r\n\r\nDate: Friday, 22nd June, 2018\r\n\r\nTime: 10.00 am\r\nVenue: Sylken Limited , Plot 817 Raji Rasaki Road,\r\n\r\nAfter Mama Kitchen, Adjacent to Better Height Montessori, \r\nAmuwo Odofin, Off Festac Link Road, Lagos.\r\n\r\nPlease come with a passport photo, copies of your Cv and credentials. \r\nAsk to see the Sales Admin or HR once you get to the venue.\r\n\r\nKindly acknowledge the receipt of this email and advice on availability.",
    createdAt: "2018-06-20 10:39:12",
    updatedAt: "2018-06-20 10:39:12",
    title: "Sylken Limited at Plot 817 Raji Rasaki Road",
    
    inviteId: "481d2ebd-c98a-496a-b543-a28e26505b7a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You have been selected for a job interview @ NUOVOTER km 36 lekki epe expressway golf bstop lakowe lekki on 22/6/ 2018 by 12pm. come with your CV. Demola",
    createdAt: "2018-06-20 10:39:53",
    updatedAt: "2018-06-20 10:39:53",
    title:
      "Good afternoon house...please help me confirm if this is true.",
    
    inviteId: "bd8ff4f9-2449-4b25-9048-df7791167af6"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Does anyone know about pathway global Multiconcept limited. Their office is at Maryland!!",
    createdAt: "2018-06-20 10:40:50",
    updatedAt: "2018-06-20 10:40:50",
    title:
      "ANy info on pathway global Multiconcept limited of Maryland!!",
    
    inviteId: "bee1126c-5c44-4951-a12c-ba236c3c74eb"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Help confirm if this company is real DPPR Resources. 2,Akin.Osiyemi street, Mr Biggs B/stop, Allen Avenue Ikeja",
    createdAt: "2018-06-20 10:41:52",
    updatedAt: "2018-06-20 10:41:52",
    title: "Help confirm if this company is real DPPR Resources",
    
    inviteId: "e3a1b38f-87ba-46d4-a51b-3c3e25e3bdbe"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "Sequel to the application you made for the position of a Front desk officer, I hereby invite you for an interview at our office with the below details\r\n\r\n \r\n\r\nVenue: Culminate Consulting, 2nd Floor 4b bola Street Anthony Lagos (King Solomon Hospital Building)",
    createdAt: "2018-06-20 15:16:03",
    updatedAt: "2018-06-20 15:16:03",
    title: "Please is this legit????",
    
    inviteId: "8e30f147-3dd0-4d78-a17e-fc4e2ac303e0"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "WHO knows ICA INTERNATIONAL 8,ADEBARE STREET (B&Q BAKERY BUILDING)Ogudu,B/Stop,Lagos.",
    createdAt: "2018-06-20 22:27:58",
    updatedAt: "2018-06-20 22:28:28",
    title: "WHO knows ICA INTERNATIONAL 8,ADEBARE STREET",
    
    inviteId: "cdd8e2f3-f4f9-4568-b54e-c9338ffd5905"
  },
  {
    userId: "26d336ff-f6c5-45a6-aa4e-0de89d538c8e",
    body:
      "Dear Applicant \r\n\r\nWith regards to your resume sent to us. we are pleased to recommend you for a Job opening, \r\n\r\nYou have been cordially invited to partake in the ongoing recruitment session.\r\n\r\n\r\n\r\nDate: Friday 22th, June 2018.\r\n\r\n\r\nTime: 9:30am\r\n\r\nOffice Address: Plot 5, Voda paint plc, university press house off Adeniyi Jone Ogba road Acme bustop Lagos.\r\n\r\n\r\n\r\nNote : You are required to come along with an updated copy of your CV.\r\n\r\n\r\nRegards.recruit Providence\r\n\r\nOffice-line: 08156793362",
    createdAt: "2018-06-21 16:49:04",
    updatedAt: "2018-06-21 16:49:04",
    title:
      "Please, I got this interview invitation today..is this genuine?",
    
    inviteId: "296db929-47f6-439d-94f5-d274d87f39b1"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hello everyone k just received a mail from Quincy consults for an interview, do anyone know about them.\r\n\r\nBased on Recommendation through our online agent (Quincyconsults), the post you applied for, you have been shortlisted for an assessment.\r\n\r\n\r\nAfter thorough preview of your details and your Curriculum Vitae, considering the working experience, skills and attribute you encompassed, the Board of Directors of BG Lead consult invites you for an assessment on Friday 22/06/2018 by 8am @ BSM premises No4 Kareem Ogungbeye estate agidingbi first gate bus stop.\r\n\r\n\r\n\r\nWe apologise for the short notice, however it is important you confirm your availability to ensure us make adequate preparations.\r\n\r\n\r\nPlease Kindly confirm your availability by replying this e-mail as soon as possible.\r\n\r\n\r\nAnd please dress properly when coming.",
    createdAt: "2018-06-23 10:00:49",
    updatedAt: "2018-06-23 10:00:49",
    title:
      "just received a mail from Quincy consults for an interview, do anyone know about them.",
    
    inviteId: "25b85cc3-b1a2-4a1b-aa26-56ff7747cfae"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Dear Applicant, \r\nSequel to your application, you are invited for a written interview. Find details below: \r\nVenue: Solution Platform Limited, 34, Diya Street, Opp. Mr Bigg;s, Ifako Gbagada, Lagos. \r\nTime: 12:00 Noon Prompt. \r\nKindly confirm your availability through 08152215839 before 1:00Pm today. Please come with your writing Materials1",
    createdAt: "2018-06-23 10:01:32",
    updatedAt: "2018-06-23 10:01:32",
    title: "PLS HOW TRUE IS THIS",
    
    inviteId: "98b8f190-ec0f-4b42-aa13-0bbacbb3ac13"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are invited for an interview with Homework designs and consultants limited. Bring along your CV and this invitation with you. Address, plot 5b Charle",
    createdAt: "2018-06-23 10:02:13",
    updatedAt: "2018-06-23 10:02:13",
    title: "Please help verify this",
    
    inviteId: "8ae19bce-7f43-4987-84ef-f41d7545ea2f"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "Hello AKEEM SAMUEL, your application via was approved and you have been scheduled to undergo a Screening Interview with PSIS HR Board.\r\nDate: FRI 22/6/2018\r\nTime: 9am.\r\nAddress: L'monarch Towers, 65 Opebi road Opp Glass House by Salvation b/stop, Ikeja, Lagos.\r\nKindly present copies of your Credentials and a Passport Photograph and do ensure to be punctual.\r\n\r\nShould you need help/directions, you may call: 0701-061-6106/1004 www.prosterlingng.com",
    createdAt: "2018-06-23 10:02:45",
    updatedAt: "2018-06-23 10:02:45",
    title: "Please how true is this",
    
    inviteId: "80fe90e7-4c58-419e-be02-9d8b34c7fce2"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "I applied for financial advisor at ARM, does anyone know if its about marketing and what the salary looks like. this is what sent to my mail. \r\n\r\n\r\nWe have reviewed your application for the position of a Financial Advisor and would like to invite you to attend an interview on \r\n\r\nDate: Friday, June 22 2018 \r\n\r\nTime: 9 AM\r\n\r\nAddress: 95b, Opebi Road, Ikeja, Lagos.\r\n\r\nPlease bring along with you, copies of your original documents and do contact us on 08035816311 orisaac.osaigbevo@armlife.com.ng to confirm your attendance at the interview.\r\n\r\nPlease note that it is very important that you confirm your availability for the interview and if you'll like to reschedule, we have a free day next week to meet with you. Please do call or send us a mail as well.",
    createdAt: "2018-06-23 10:03:59",
    updatedAt: "2018-06-23 10:03:59",
    title:
      "I applied for financial advisor at ARM, does anyone know if its about marketing",
    
    inviteId: "cebf688c-dc43-4817-88e0-f90ed98b4f56"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      'Hello, my name is Segun Ogunlana and i work with Afripreneur. You filled our Afripreneur AgentMe job applicants form earlier..\r\n\r\nYou can do all your job search and personal development in sales, marketing & business development on AgentMe. "Once you are on AgentMe, you get trained to upgrade your skills, then choose the businesses you work with based on your interest at any location you want while you are supported continually by AgentMe. You earn unlimited amount as businesses pay an allowance plus commission on sales/deals achieved.\r\n\r\nBusinesses pay (N40,000-N50,000 per month PLUS commission) on anything you sell depending on the need of the businesses every month. With good performance, it can go to N60,000 - N100,000 or more per month PLUS commission on sales in 3-6 months. \r\n\r\nThe product or service you sell/work on could be any from technology, insurance, entertainment, financial services, Fashion, Software, FMCG, Real Estate, etc.\r\n\r\nPLEASE ENSURE YOU HAVE ALSO SAVED OUR NUMBER ON YOUR PHONE AS "AFRIPRENEUR" for subsequent communication using whatsapp online to access you.\r\n\r\nPlease Let us know if you accept or reject by sending ACCEPT or REJECT?',
    createdAt: "2018-06-23 10:04:41",
    updatedAt: "2018-06-23 10:04:41",
    title: "Please do anybody know about this people",
    
    inviteId: "224692ce-127a-41cb-b2ea-06f66280d2e5"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "Please How real is B.G Service ltd",
    createdAt: "2018-06-23 10:05:00",
    updatedAt: "2018-06-23 10:05:00",
    title: "Please How real is B.G Service ltd",
    
    inviteId: "59da82d3-1a96-49d6-98f1-6e97bcf631bc"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "You are invited for an interview on Tuesday, 26th June, 2018 by 3pm at Food House, 67, Ikosi Road, Ketu (opposite Mr Biggs). \r\n\r\nAnyone attended this before?",
    createdAt: "2018-06-24 11:06:00",
    updatedAt: "2018-06-24 11:06:00",
    title:
      "I got this interview text, does any one know if its real or GNLD?",
    
    inviteId: "c498e017-36ff-4a2b-82c9-f675ea524bef"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Hello,you are to come for an Interview Monday 25th june\'18 at No 1 Adeeko Banjo street,Igando phase 1 bus/stop along igando/Lasu Road.time 8:00am. DESCR</span></p>',
    createdAt: "2018-06-25 10:04:53",
    updatedAt: "2018-06-25 10:04:53",
    title:
      "Real or fake, please help I don't want to waste my transport,",
    
    inviteId: "4553ac90-756c-4b6b-8e9a-5fa861848090"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Congrats! You’ve been shortlisted for an interview with Berlyft LLC as a Marketer. We are very impressed with your profile.</span></p>',
    createdAt: "2018-06-25 18:22:22",
    updatedAt: "2018-06-25 18:22:22",
    title: "Please help a brother, is this real?",
    
    inviteId: "99213533-37da-428e-a43e-0b5326a50af0"
  },
  {
    userId: "472537a2-ea2c-4b1d-a47d-ce9ed668f68f",
    body:
      "<p>Dear APPLICANT,</p><p><br></p><p>After thorough preview of your details and your Curriculum vitae based on recommendations,considering the working experience, skills and attributes you encompassed, the Board of Directors of DPCS Int'l Resources, Lagos Nig.,&nbsp;invites you for an assessment.</p><p><br></p><p><br></p><p><br></p><p><br></p><p>Date:Wednesday 27,June 2018</p><p><br></p><p><br></p><p>Time: 9am prompt</p><p><br></p><p>Venue: 116,Akowonjo rd,Jimoh bustop ,Egbeda Lagos</p><p><br></p><p><br></p><p><br></p><p>We apologize for the short notice, however it is important you confirm your availability to enable us make adequate preparations. Please kindly confirm your availability by replying this email as soon as possible.&nbsp;</p><p><br></p><p>Kindly respond to the mail.HR Sophie//368</p><p><br></p><p><br></p><p><br></p><p>You can also reach the Secretary on 07037431412</p><p><br></p><p><br></p><p>&nbsp;if you have any issues/requests.</p><p><br></p><p>The secretary will text you via the contact number above.</p>",
    createdAt: "2018-06-26 09:00:16",
    updatedAt: "2018-06-26 09:00:16",
    title:
      "Is this real please?  I will appreciate a quick response. Thanks.",
    
    inviteId: "b2174ee8-4254-4b96-8e53-f82287c83f59"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p>CERTIFICATION EDGE</p><p><br></p><p>We would&nbsp;<span style="color: rgb(0, 0, 0);">like to invite you for a follow-up test holding on&nbsp;Wednesday the 27th of June, 2018 at&nbsp;</span><a href="https://maps.google.com/?q=2%C2%A0Esomo+Close,+Toyin,+Ikeja&amp;entry=gmail&amp;source=g" target="_blank" style="color: rgb(66, 133, 244);">2&nbsp;Esomo Close, off Toyin street, Ikeja</a>.</p>',
    createdAt: "2018-06-26 16:21:37",
    updatedAt: "2018-06-26 16:21:37",
    title: "Please is this legit????",
    
    inviteId: "087aec78-c7cf-4298-b8f5-e048d7109558"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You are invited 4 interview @ Consolidated Hallmark Ins.Plc.No264 Ikr Road Obanikoro,Lag.by 10am on 27/06/18.Acknowledge Ur presence THRU 08035501054/0902151682.</span></p><p><br></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Hope this ain\'t a scam cuz it still seems totally awkward to me receiving an abbreviated text from a firm</span></p>',
    createdAt: "2018-06-26 17:52:20",
    updatedAt: "2018-06-26 17:52:20",
    title: "Hope this ain't a scam",
    
    inviteId: "fc3ce22e-923d-4ea0-bbcf-a1667b0e3df2"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Sarahchris Ventures Limited</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">424, Ikorodu Road, After MRS Filling&nbsp;</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Station, Ojota Lagos.</span></p>',
    createdAt: "2018-06-26 17:58:23",
    updatedAt: "2018-06-26 17:58:23",
    title: "Anyone know anything about Sarahchris",
    
    inviteId: "7e1ecad0-264b-4ed7-849e-809d8c4aa620"
  },
  {
    userId: "f3f2b071-2d0a-4bfa-a48a-3ed9111323dc",
    body:
      "<p>Dear Osmond,</p><p><br></p><p>This is to notify you that you have an interview scheduled for the position of a Waiting Staff.</p><p><br></p><p>The interview will hold Wednesday 27/06/2018 10:00am at Lekki Leisure Lake, Block 1, Plot 3, Okunda Blue Water Tourism Scheme, Lekki, Lagos.</p><p><br></p><p>You are advised to be corporately dressed.</p><p><br></p><p>Kindly bring all relevant documents, updated copy of your CV along with you and a password photograph.</p><p><br></p><p>Also, please acknowledge this email to confirm your availability.</p><p><br></p><p>Warn Regards.</p>",
    createdAt: "2018-06-27 10:32:50",
    updatedAt: "2018-06-27 10:32:50",
    title: "How real is this?",
    
    inviteId: "e64a6bc2-ba26-4418-8cfc-3723191383ee"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body: "<p>Linktech&nbsp;Resource</p><p><br></p><p><br></p>",
    createdAt: "2018-06-28 00:17:59",
    updatedAt: "2018-06-28 00:18:12",
    title: "Please any info about Linktech Resource?",
    
    inviteId: "ed2976b2-cf2c-46d9-b5c0-18f48669da26"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>Linktech&nbsp;Resource</p><p>Plot 14, Block A, University Press building,&nbsp;Surulere&nbsp;industrial road,&nbsp;Ogba, Lagos</p>",
    createdAt: "2018-06-28 00:19:05",
    updatedAt: "2018-06-28 00:19:05",
    title: "Please any info about Linktech Resource?",
    
    inviteId: "5ecaebb4-d5d1-450e-89bc-f885add69b74"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p>4.<span style="color: rgb(0, 92, 156);">fortunecareers ltd invite you for career chat by 9am on fri 29/06/18 192 Ikorodu Rd beside FirstBank Palmgrove Lagos 080-50387293 Ref:FC/ZP/DD7 </span></p>',
    createdAt: "2018-06-28 13:51:50",
    updatedAt: "2018-06-28 13:51:50",
    title: "Who knows about this company?",
    
    inviteId: "248897ce-2645-4f8a-a40b-aef71ce2df07"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You are invited for an Interview Scheduled on Fri 29th June, 2018 for the position of Bus. Dev. Executive. Time: 11:30AM, Venue: 1b Alfred Olaiya Street, Awuse Estate, Opebi, Ikeja Lagos. Please come with originals &amp; copies of CV/Credentials and be corporately dressed. For details call: 070-1335-3014</span></p>',
    createdAt: "2018-06-29 11:34:31",
    updatedAt: "2018-06-29 11:34:31",
    title: "how legit is this??",
    
    inviteId: "4703a963-1ebf-491a-88ae-08c7d0a73f4b"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>You are invited for a Direct Sales Executive role interview with workforce, Bayse One Plaza, Adeoyo Junction Ring Road Ibadan.</p>",
    createdAt: "2018-06-29 21:31:00",
    updatedAt: "2018-06-29 21:31:00",
    title: "Please is this legit????",
    
    inviteId: "e5388193-3666-4928-b664-f99197322417"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">My brother received the message below from B Merchant.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">\'You have been shortlisted for an interview &amp; Training on Sat. June 30, 2018 at RCCG Hall, 7th Ave, C Close, Festac Town, Lagos by 8:30am prompt. Come with your CV.</span></p>',
    createdAt: "2018-06-30 05:27:53",
    updatedAt: "2018-06-30 05:27:53",
    title: "Is this a scam or real job?",
    
    inviteId: "a00d4275-c249-4e10-b36b-fd9d90bc3cb8"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You are invited for an interview on:</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Tue 3 July. 2 pm</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">4Power Building 6B Peter Odili Rd by Sasun Roundabout, Port Harcourt.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Come with original &amp; copy of your credentials, Degree Cert, Passport photo, Means of identification &amp; CV&nbsp;</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Call Sam 08093301848</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Thank you.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Please did anyone get this too and is this real or GNLD guys.... Please guys help me on this.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Thanks</span></p>',
    createdAt: "2018-06-30 05:28:32",
    updatedAt: "2018-06-30 05:28:32",
    title: "Please did anyone get this too and is this real or GNLD guys",
    
    inviteId: "defadf7b-10ad-4165-b5a5-819eb76ff75c"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p>Your application has been reviewed and you are invited for an interview session with the&nbsp;<strong><em>Recruitment Manager for the role of an admin,</em></strong>&nbsp;on Monday, 2nd&nbsp;July, 2018 at plot 5, university press building, close to fumec junction or sanusi bus-stop, ogba. Lagos.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p><br></p><p><span style="background-color: rgb(255, 255, 255);">RS consulting is an entrepreneurship firm that handles/provides all HR functions, including outsourcing, recruitment, man power training, executive development and talent management for selected organizations.</span>&nbsp;</p><p><br></p><p>Come with&nbsp;your CV and references.</p><p><br></p><p>Kindly&nbsp;acknowledge&nbsp;for availability.</p>',
    createdAt: "2018-06-30 06:26:14",
    updatedAt: "2018-06-30 06:26:14",
    title: "Great minds, please how legit is this??",
    
    inviteId: "31393283-0fce-4566-8842-c72b689f32e9"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You have been invited to an oral assessment as a&nbsp;<strong>CUSTOMER RELATION OFFICER</strong>&nbsp;at one of the selected centers in Lagos on 3rd July 2018.</p><p><strong>venue Last floor university press building</strong></p><p><strong>fumec bus stop Ikeja.</strong></p>",
    createdAt: "2018-06-30 10:10:05",
    updatedAt: "2018-06-30 10:10:05",
    title: "Please is this legit????",
    
    inviteId: "3cf23b01-ef1e-4f17-8f6b-d8f4ee802a04"
  },
  {
    userId: "9e8d678c-a7f6-47c2-998a-b4e84bbfa76b",
    body:
      "<p>You are invited for a recruitment test on Tuesday 3rd July 2018. Venue: Smart X , 16B, Mobolaji Bank Anthony way, behind Keystone Bank, Maryland, Lagos. Time: 11am prompt. For enquiries call 08085184511. </p><p>Thank you</p>",
    createdAt: "2018-06-30 11:08:54",
    updatedAt: "2018-06-30 11:08:54",
    title: "Is it legitimate",
    
    inviteId: "7cedad0d-0aba-4c60-99fe-0bba07a49ca2"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>&nbsp;You have been invited to an oral assessment as a&nbsp;<strong>CUSTOMER RELATION OFFICER</strong>&nbsp;at one of the selected centers in Lagos on 3rd July 2018.</p><p><strong>venue Last floor university press building</strong></p><p><strong>fumec bus stop Ikeja.</strong></p>",
    createdAt: "2018-07-01 09:57:48",
    updatedAt: "2018-07-01 09:57:48",
    title: "Great minds, please how legit is this??",
    
    inviteId: "82e0defb-e0ff-4742-9799-838afa5709af"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p><span style="background-color: rgb(245, 245, 245);">Your application has been reviewed and you are invited for an interview session with the&nbsp;</span><strong style="background-color: rgb(245, 245, 245);"><em>Recruitment Manager for the role of an admin,</em></strong><span style="background-color: rgb(245, 245, 245);">&nbsp;on Monday, 2nd&nbsp;July, 2018 at plot 5, university press building, close to fumec junction or sanusi bus-stop, ogba. Lagos..</span></p>',
    createdAt: "2018-07-01 09:58:35",
    updatedAt: "2018-07-01 09:58:35",
    title: "Great minds, please how legit is this??",
    
    inviteId: "0ce93e82-c98b-494c-bc42-c4519bb3193f"
  },
  {
    userId: "e9b0e442-86f6-4498-97fa-8df6d7f0b156",
    body:
      "<p>You are invited for an interview on:</p><p><br></p><p>Tue 3 July. 2 pm</p><p><br></p><p>4Power Building 6B Peter Odili Rd by Sasun Roundabout, Port Harcourt.</p><p><br></p><p>Come with original &amp; copy of your credentials, Degree Cert, Passport photo, Means of identification &amp; CV </p><p><br></p><p>Call Sam 08093301848</p><p><br></p><p>Thank you.</p><p><br></p><p><br></p><p><br></p><p>Please did anyone get this too and is this real or GNLD guys.... Please guys help me on this.</p><p><br></p><p>Thanks</p>",
    createdAt: "2018-07-01 17:07:49",
    updatedAt: "2018-07-01 17:07:49",
    title: "How real is this please?",
    
    inviteId: "b5f31625-229b-4d70-852a-257190a1bc1f"
  },
  {
    userId: "a55fdd4f-405f-4967-a472-681d44ddaca7",
    body:
      "<p>Based on CV Review, GMIS urgently considers you for an interview by 9am on MONDAY , 02/07/18 at 3rd Floor, 8, Thomas Salako Street Ogba Bus-Stop, Ikeja, Lagos....pleaee is this real</p>",
    createdAt: "2018-07-01 19:38:42",
    updatedAt: "2018-07-01 19:38:42",
    title: "is this real",
    
    inviteId: "dfab9c6a-c362-4f65-812f-9224e5e0cd0c"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You are shortlisted for assessment on MON 2/7/18 by 9am @ 6 Remilekun Str. Off Falolu Rd, Falolu B/Stop Surulere, Lagos. Transview Integrated. Ref:GD/2816/M</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Pls how true are this ppl, anyone who has come across such before should pls let me know so as not to waste my Tfare. Thanks</span></p>',
    createdAt: "2018-07-02 11:05:51",
    updatedAt: "2018-07-02 11:05:51",
    title: "Pls how true are this ppl,",
    
    inviteId: "784f7645-eddc-44e3-8f26-368414557fb6"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 92, 156);">DEAR APPLICANT, YOU HAVE AN INTERVIEW WITH US AT LS-RESOURCE, MON. 2/7/18 BY 9AM, 3RD FLR, CROWNET PLAZA, IDRIS GIGADO STR, WUYE, ABUJA. CHECK YOUR MAIL NOW!</span></p>',
    createdAt: "2018-07-02 11:08:45",
    updatedAt: "2018-07-02 11:08:45",
    title: "LS-RESOURCES",
    
    inviteId: "7bb27470-58a7-4f4b-b529-000d1566009c"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>Hello,</p><p><br></p><p>Due to your online application&nbsp;to M.H.S. you're invited to come over for an&nbsp;Interview session with the HR Dept on Thursday 05/07/2018.</p><p>Time: 9am.</p><p>Address: 4b Toyin street, opposite Victory home school before unity b/stop, Ikeja, Lagos. Do present a hard copy of your CV and ensure to be there on time.</p>",
    createdAt: "2018-07-03 16:00:00",
    updatedAt: "2018-07-03 16:00:00",
    title: "Please is this legit????",
    
    inviteId: "ebcd291a-bbf6-426f-819d-3f452ed0cb07"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">pls who know about impco ltd</span></p>',
    createdAt: "2018-07-07 17:48:56",
    updatedAt: "2018-07-07 17:48:56",
    title: "pls who know about impco ltd",
    
    inviteId: "8e4bfa98-877b-4622-a944-4029d3541602"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 92, 156);">BECO at Thomas salako street ogba, bustop</span></p>',
    createdAt: "2018-07-07 17:51:44",
    updatedAt: "2018-07-07 17:51:44",
    title: "Is anyone familiar with this address?",
    
    inviteId: "f87ddb30-8f15-49f5-bd31-da15baf6146a"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p><span style="color: rgb(0, 0, 0);">Dear Candidate,</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Sequel to your most recent online job application to our advertised vacancy,</span></p><p><span style="color: rgb(0, 0, 0);">The selection committee has carefully identified you for this great opportunity, please be informed that your application has been considered and you are hereby recommended for an aptitude test and oral job brief, followed by the job duties and specifications.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">With SCHLEEZ NIGERIA LIMITED</span></p><p><span style="color: rgb(0, 0, 0);">First floor, left wing&nbsp;No 49, OLOWU STREET, OFF MOBOLAJI BANK ANTHONY WAY, IKEJA, LAGOS.</span></p><p><span style="color: rgb(0, 0, 0);">On 9 JULY By 9:00AM.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">The interview will be with the Human Resources department.</span></p><p><span style="color: rgb(0, 0, 0);">Upon arrival at reception ask the security for the center.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">The interview is scheduled to last approximately 1 hour tentatively and will take the form of;</span></p><p><span style="color: rgb(0, 0, 0);">A written aptitude test for about 10 minutes or less,</span></p><p><span style="color: rgb(0, 0, 0);">One on one interview with the HR for about 5 minutes or less,</span></p><p><span style="color: rgb(0, 0, 0);">Then the job duty and specification for about 15 minutes or less,</span></p><p><span style="color: rgb(0, 0, 0);">The selection process with the Hr Head for about 28minutes or less,</span></p><p><span style="color: rgb(0, 0, 0);">Final interview with the Hr Head which will last for about 8 minutes for the selected candidates to be shortlisted for the job.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Please note that you are to bring along with you,</span></p><p><span style="color: rgb(0, 0, 0);">Any valid ID card, hard copy of your credentials, a copy of this invite and&nbsp;the sms you will receive from JOB BRIEF</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">We look forward to meeting you.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Regards.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Okon Shontelle</span></p><p><span style="color: rgb(0, 0, 0);">01-724-5339</span></p><p><a href="http://schleez.com/" target="_blank" style="color: rgb(66, 133, 244);">http://schleez.com</a></p>',
    createdAt: "2018-07-08 09:07:07",
    updatedAt: "2018-07-08 09:07:07",
    title: "Great minds, please how legit is this??",
    
    inviteId: "70b5f209-cad0-468e-8a2c-d2c9274d27cb"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>Dear Applicant,</p><p><br></p><p>Sequel to your application received via our online human resource,After a thorough evaluation of your resume and we are duely impressed,An Assessment has been scheduled with details below;</p><p><br></p><p>Date:Monday 9th july,2018</p><p>&nbsp;</p><p>Time:8;30am prompt</p><p><br></p><p>Venue:4,Karim street,off sadiku,Ltv8 way 1st gate b/stop-agidingbi lateef jakande Ikeja.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>&nbsp;&nbsp;BSL-CONSULTING- is a Consulting&nbsp;company specialized on Business Intelligence to Utilize unique and proven methodologies to deliver actionable results to clients in a timely, efficient, and cost-effective manner.</p><p><br></p><p>- Assists clients in creating and managing strategic relationships and alliances with other organizations, including startups to multinational companies, research institutions, and government agencies. As a result, they are able to leverage external expertise, technology, and intellectual property to expand their products, services, functionality, and/or market reach without the need to invest in building or acquiring them with internal resources.</p><p><br></p><p>NB: Kindly come along with 2 passport photographs and a hard copy of your CV.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We apologize for the late information;however it is imperative that you confirm your availability.Do so by replying this mail.For further inquiry or assistance call 07083402825.</p>",
    createdAt: "2018-07-08 14:29:02",
    updatedAt: "2018-07-08 14:29:02",
    title: "Please is this legit????",
    
    inviteId: "d50198d9-a264-4f2a-8611-3a2d110fa680"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p><br></p><p><span style="color: rgb(0, 32, 96);">This is to notify you that you have an interview scheduled for the position of a&nbsp;</span><strong style="color: red;">Cashier.</strong></p><p><span style="color: rgb(0, 32, 96);">The interview will hold at&nbsp;Lekki Leisure Lake, Block 1, Plot 3, Okunda Blue Water Tourism Scheme, Lekki, Lagos.</span></p><p><br></p>',
    createdAt: "2018-07-09 17:05:41",
    updatedAt: "2018-07-09 17:05:41",
    title: "Please is this legit????",
    
    inviteId: "109bbce9-092d-423b-a9da-2c3ff136d0ea"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p><strong style="color: rgb(34, 34, 34);">CONGRATULATIONS!!!</strong></p><p><span style="color: rgb(34, 34, 34);">You are invited to take part in an interview session.</span></p><p><span style="color: rgb(34, 34, 34); background-color: rgb(255, 255, 255);">RS consulting (Nig)</span><span style="color: rgb(34, 34, 34);">&nbsp;is a recruitment firm that handles human resource functions for selected organizations. As part of selection process, you are invited for an oral interview session as follows:</span></p><p><strong style="color: rgb(34, 34, 34);">Date:</strong><span style="color: rgb(34, 34, 34);">&nbsp;Wednesday, 11h July, 2018</span></p><p><strong style="color: rgb(34, 34, 34);">Address:</strong><span style="color: rgb(34, 34, 34);">&nbsp;Plot 5, resource press building, adjacent to sanusi bus-stop, off adeniyi jones avenue, ogba. Lagos.</span></p><p><br></p>',
    createdAt: "2018-07-10 08:39:09",
    updatedAt: "2018-07-10 08:39:09",
    title: "Great minds, please how legit is this??",
    
    inviteId: "8b082849-8577-4609-bbf6-4c49f17878db"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p>FORTUNE ACHIEVERS</p><p><br></p><p> due to your online application&nbsp;to M.H.S&nbsp;you\'re invited to come over for an&nbsp;Interview session with the HR Dept on Friday 13/07/2018.</p><p>Time: 9am.</p><p>Address: 4b Toyin street, opposite Victory home school before unity b/stop, Ikeja, Lagos.</p><p>Pls do present a hard copy of your CV and ensure to be there on time.&nbsp;</p><p><br></p><p>help/directives?</p><p>Call the ADMG: 0803-449-6175/M102</p><p><a href="http://www.madehillssolution.com.ng/" target="_blank" style="color: rgb(66, 133, 244);">www.madehillssolution.com.ng</a></p>',
    createdAt: "2018-07-12 08:43:01",
    updatedAt: "2018-07-12 08:43:01",
    title: "Please is this legit????",
    
    inviteId: "af0757fd-a83f-4071-ba43-d8f5d772040b"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>GOLD CONSULT</p><p><br></p><p><br></p><p><br></p><p><strong><em>Thank you for submitting an application on our online job seeking portal. We have looked over your application and see that you are the best candidate for this role</em></strong>.&nbsp;</p><p><strong><em>&nbsp;We would like to invite you for an Interview/Assessment at our office to tell you more about this role, our company's mode of operations and of course, get to know you better.&nbsp;</em></strong></p><p><strong><em>Date: Fri. 13th July, 2018</em></strong></p><p><strong><em>Time: 9 am&nbsp;</em></strong></p><p><strong><em>Address: 116, Akowonjo Road, Jimoh Bus stop, Egbeda Lagos.</em></strong></p><p><strong><em>Kindly come along with your updated CV and acknowledge this mail with reply .</em></strong></p><p><strong><em>For more Inquiries: Call&nbsp;08136532119</em></strong></p><p><strong><em>We look forward to seeing you.</em></strong></p><p><strong><em>Best regards,</em></strong></p><p><strong><em>ADEMOLA ADETOYE</em></strong></p><p><strong><em>HR ADMINISTRATOR</em></strong></p>",
    createdAt: "2018-07-12 08:44:26",
    updatedAt: "2018-07-12 08:44:26",
    title: "Great minds, please how legit is this??",
    
    inviteId: "2374e155-1737-499d-8f2f-bfb3b6702a6c"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Please has anyone attended interview before at 11a Alhaja Kofoworola crescent balogun bus stop ikeja?</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">I want to know if they are genuine.</span></p>',
    createdAt: "2018-07-12 14:31:18",
    updatedAt: "2018-07-12 14:31:18",
    title: "Help with this address",
    
    inviteId: "e43b23f6-d2d2-448b-81c7-8caf0e2c1171"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You are shortlisted for Mtn MFA project! Kindly come for documentation! @ Sol 84 Emmanuel Alayande Street, 1st Floor Samsung Stores, Opposite U.B.A, Iwo Road, Ibadan. Time: 10:00am, Date: Thursday July 12th, 2018. Come formally dress: pls do come along with your 6 passport (white background), two guarantor passport, photocopy of each of their valid I\'d card and your credentials.</span></p>',
    createdAt: "2018-07-12 14:32:21",
    updatedAt: "2018-07-12 14:32:21",
    title: "Please how genuine is this?",
    
    inviteId: "4ccf9d90-9b82-4e82-9d2a-da9eba5b465e"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">I will like to know if petroguin E&amp;P in Guinness bussiau is real or not,I work in the oil and gas industry and I saw there advert some weeks ago,I applied for position of my choose days later they sent an employment form to me to fill as an expertraite and send back to them with my supporting credentials and my scanned page of international passport for visa processing,but I am still sceptical about it either to go ahead or not or could it be a scam?does any one have any idea about the company that claims to be into oil and gas exploration offshore in Guinea bissau</span></p>',
    createdAt: "2018-07-12 14:33:21",
    updatedAt: "2018-07-12 14:33:21",
    title:
      "I will like to know if petroguin E&P in Guinness bussiau is real or not",
    
    inviteId: "877501b1-30d5-4132-b612-e01e57af8c08"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>Based on Referral,BLS invites you for interview @ 3rd floor,8 Thomas Salako str. ogba Ikeja, Lagos.FRI.13/7/2018 by 9am.</p><p>www.becologistics.com ED.</p>",
    createdAt: "2018-07-12 19:57:08",
    updatedAt: "2018-07-12 19:57:08",
    title: "Please is this legit????",
    
    inviteId: "d314d3da-705b-41d0-bacb-671f2a22ba0c"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>You're shortlisted for an INTERVIEW with our EXECUTIVES at D.P.C.S on Wed. 18/07 by 9am @116,Akowonjo rd,Jimoh b/s,Egbeda.</p><p>INQ:081-3653-2119(16596).</p>",
    createdAt: "2018-07-17 15:02:33",
    updatedAt: "2018-07-17 15:02:33",
    title: "Great minds, please how legit is this??",
    
    inviteId: "cf5b4b78-8d4d-454f-9727-064b68f585e5"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p><br></p><p><br></p><p>You are invited for a JOB BRIEFING on FRI 20th July by 9:00am at 4 Alara Street off commercial avenue, Sabo. Details in your mailbox. www.hyinsco.com.ng 010..</p>",
    createdAt: "2018-07-19 14:24:33",
    updatedAt: "2018-07-19 14:24:33",
    title: "Great minds, please how legit is this??",
    
    inviteId: "247a5891-9bdc-4bf5-8070-9adbaae4ab8d"
  },
  {
    userId: "d5d9f0e3-d5b5-40eb-9618-d43e7e6940f6",
    body:
      "<p>Please is this job legit....i applied for it yesterday&nbsp;,and I was  called for an interview tomorrow </p>",
    createdAt: "2018-07-19 22:37:49",
    updatedAt: "2018-07-19 22:37:49",
    title: "Pearlforth consult Nigerian Limited",
    

    inviteId: "b342a40e-c6f8-4ca6-9aef-af7678d747db"
  },
  {
    userId: "52fb71c4-f127-409a-9176-840c4390d56a",
    body:
      '<p><br></p><p>Dear Candidate,</p><p><br></p><p>Sequel to your recent online job application to our advertised vacancy,</p><p>The selection committee has carefully identified you for this great opportunity, please be informed that your application has been considered and you are hereby recommended for an aptitude test and oral job brief, followed by the job duties and specifications.</p><p><br></p><p>Opportunities: Customer Service Executives and Outsourcing Personnel</p><p><br></p><p>With SCHLEEZ NIGERIA LIMITED</p><p>First floor, left wing&nbsp;&nbsp;<a href="https://maps.google.com/?q=No+49,+OLOWU+STREET&amp;entry=gmail&amp;source=g" target="_blank">No 49, OLOWU STREET</a>, OFF MOBOLAJI BANK ANTHONY WAY, IKEJA, LAGOS STATE, NIGERIA.</p><p>On 20TH JULY BY 9:00AM.</p><p><br></p><p>The interview will be with the Human Resources department.</p><p>Upon arrival at reception ask the security for the center.</p><p><br></p><p>The interview is scheduled to last approximately 1 hour tentatively and will take the form of;</p><p>A written aptitude test for about 10 minutes or less,</p><p>One on one interview with the HR for about 5 minutes or less,</p><p>Then the job duty and specification for about 15 minutes or less,</p><p>The selection process with the Hr Head for about 28minutes or less,</p><p>Final interview with the Hr Head which will last for about 8 minutes for the selected candidates to be shortlisted for the job.</p><p><br></p><p>Please note that you are to bring along with you,</p><p>Any valid ID card, hard copy of your credentials, a copy of this invite and&nbsp;the sms you will receive from JOB BRIEF</p><p><br></p><p>We look forward to meeting you.</p><p>Regards</p><p><br></p><p>Okon Shontelle</p><p>Human Resources Department</p><p>01-724-5339</p><p><a href="http://schleez.com/" target="_blank">http://schleez.com/</a></p>',
    createdAt: "2018-07-19 23:17:44",
    updatedAt: "2018-07-19 23:17:44",
    title: "Great people, help me confirm the legitimacy of this",
    
    inviteId: "2ad609af-34ca-43d1-ae4c-0aa49f8fb9cb"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Dear Applicant,</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Thank you for applying to Rethink-HR.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">We would like to invite you for a follow-up test holding on Tuesday, the 17th of July, 2018 by 02:00 pm at 18 Esomo Close, off Toyin Street, Ikeja.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Please read the following information carefully:</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Please do not arrive at the center later than your scheduled time.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You are to come along with your CV.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">All candidates are expected to dress presentably.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">For further enquiries, please call: 09090418162</span></p><p><br></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Regards.</span></p>',
    createdAt: "2018-07-20 06:39:05",
    updatedAt: "2018-07-20 06:39:05",
    title: "Please how real is this?",
    
    inviteId: "58fb5642-792c-4ae6-a101-660221498125"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Any information about this Kennedy\'s Consulting Plsss<img src="http://www.nairaland.com/faces/huh.png">?&nbsp;</span></p><p><br></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Sequel to your application for the&nbsp;Executive Trainee Programme&nbsp;with our client-a reputable Financial Institution, we are happy to inform you that, you have been shortlisted for the 1st&nbsp;stage of the recruitment process with Kennedia Consulting, which is an Aptitude Test. This Aptitude Test is basically designed to assess your cognitive abilities.</span></p>',
    createdAt: "2018-07-20 06:41:44",
    updatedAt: "2018-07-20 06:41:44",
    title: "Any information about this Kennedy's Consulting",
    
    inviteId: "e66a816a-e95c-41c6-a86c-6a84923d6476"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Dear Candidate,</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You have been invited for an Assessment for the position of Marketing Executive for one of our clients in the Financial Sector. The assessment is on Verbal and Quantitative reasoning scheduled for 30 minutes.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Please see details below:</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Date: Friday 20th Jun, 2018</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Time: 10:00am</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Venue: Phillips Outsourcing, 9, Shaffi Sule, off Babatunde Masha, off Admiralty way, Lekki Phase 1, Lagos.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Whom to ask for: Rolayo</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Kindly confirm receipt and availability for the assessment</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Thank you</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Kind Regards,</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Rolayo Omitogun&nbsp;|&nbsp;Recruitment Manager</span></p>',
    createdAt: "2018-07-20 06:42:49",
    updatedAt: "2018-07-20 06:42:49",
    title: "Please house, how real is tjis job invite:",
    
    inviteId: "3f0d2d47-bfb0-4c9e-8ffa-e8f30e072b12"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p><span style=\"background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);\">Please I need opinions about this: I applied with kennedia consulting for a job, I was shortlisted for an aptitude test, but I couldn't make it. They sent messages of new schedules about two more times, and I didn't go for any. So this evening, I got a mail stating that I passed the aptitude test, and I'm invited for the next stage (assessment centre) slated for tomorrow. I really don't know what to make of this.</span></p>",
    createdAt: "2018-07-20 06:43:42",
    updatedAt: "2018-07-20 06:43:42",
    title:
      "kennedia consulting: I passed aptitude test which i never took!",
    
    inviteId: "6301c14a-741b-46a4-85e9-5b2a10621fe7"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">I have an interview (Customer care representative) scheduled for 20/07/2018&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">The location is 279, Babs Animashaun, Surulere, Lagos.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">I don search tire cry , I\'m unable to get tangible information about them.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Please help a brother.</span></p>',
    createdAt: "2018-07-20 06:45:13",
    updatedAt: "2018-07-20 06:45:13",
    title:
      "Please who knows something about this Yikodeen Footwear Limited?",
    
    inviteId: "85338eab-1db6-4550-bb29-95425f1a963c"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Pls who knows about brickwall global investment ltd, pls are they real?</span></p>',
    createdAt: "2018-07-20 06:45:35",
    updatedAt: "2018-07-20 06:45:35",
    title:
      "Pls who knows about brickwall global investment ltd, pls are they real?",
    
    inviteId: "dea20820-99c2-4532-ad14-6e1ade66fdae"
  },
  {
    userId: "b129397c-fe5c-4790-b5da-a8489ab5c7a1",
    body:
      '<p><br></p><p>Venue: Plot 14, university press building, adjacent to Oando filling station or sanusi bus-stop, ogba, Lagos.</p><p><br></p><p>Please lateness would not be tolerated.&nbsp;</p><p><br></p><p>Come with an updated copy of your CV.</p><p><br></p><p>Best Regards,</p><p>Admin Unit</p><p>Rita Odion&nbsp;</p><p><br></p><p>For inquiries:</p><p>Email:&nbsp;&nbsp;<a href="mailto:pathfindersconsultancy.hr@gmail.com" target="_blank" style="color: rgb(25, 106, 212);">pathfindersconsultancy.hr@gmail.com</a></p><p>Tel: +234 (0)&nbsp;7086379372</p>',
    createdAt: "2018-07-20 15:05:26",
    updatedAt: "2018-07-20 15:05:26",
    title: "pls how real is dis job invite?",
    
    inviteId: "5c30edd2-c6cc-4b90-9db9-a3b50f86a5cf"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p><span style="background-color: rgb(243, 243, 243); color: rgb(0, 0, 0);">HYT Consulting, </span></p><p><br></p><p><span style="background-color: rgb(243, 243, 243); color: rgb(0, 0, 0);"><span class="ql-cursor">﻿</span>13a Fagba crescent, Agidingbi, Ikeja.</span></p>',
    createdAt: "2018-07-20 16:10:17",
    updatedAt: "2018-07-20 16:10:17",
    title: "Great minds, please any info on HYT Consulting?",
    
    inviteId: "0df54367-0050-46e0-b32c-7a5de48aa169"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p><span style="background-color: white; color: rgb(34, 34, 34);">Due to having your CV in our database, you are hereby invited for an interview for the position of HR.</span> Please see details below;</p><p><strong style="color: rgb(34, 34, 34);">Venue</strong><span style="color: rgb(34, 34, 34);">: HYT Consulting, 13A Fagba Crescent, beside Mega Chicken, Agindingbi Ikeja.</span></p><p><br></p>',
    createdAt: "2018-07-20 18:46:13",
    updatedAt: "2018-07-20 18:46:13",
    title: "Please any info about HYT?",
    
    inviteId: "49c674e4-1f57-43ce-849a-906cd055511a"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p><span style="color: rgb(34, 34, 34); background-color: white;">Due to having your CV in our database, you are hereby invited for an interview for the position of HR.</span>&nbsp;Please see details below;</p><p><strong style="color: rgb(34, 34, 34);">Venue</strong><span style="color: rgb(34, 34, 34);">: HYT Consulting, 13A Fagba Crescent, beside Mega Chicken, Agindingbi Ikeja.</span></p>',
    createdAt: "2018-07-21 14:27:12",
    updatedAt: "2018-07-21 14:27:12",
    title: "Please any info about HYT?",
    
    inviteId: "163d9009-c290-452f-82fb-242858af4571"
  },
  {
    userId: "531bf2f2-59f0-4d20-b80d-7801a5d3d363",
    body:
      "<p><br></p><ul><li><br></li><li><br></li><li><br></li></ul><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><ul><li><br></li><li><br></li><li><br></li><li><br></li></ul><p><br></p>",
    createdAt: "2018-07-23 11:07:21",
    updatedAt: "2018-07-23 11:07:43",
    title: "Please is this legit?",
    
    inviteId: "1ddc2a85-6c3e-4e43-810e-cc2661d9a669"
  },
  {
    userId: "531bf2f2-59f0-4d20-b80d-7801a5d3d363",
    body:
      '<p>Dear Applicant,&nbsp;</p><p>In line with your application for the position of HUMAN RESOURCE OFFICER, You have been invited for an oral&nbsp;assessment at one of the selected centers in Lagos.</p><p>Date:&nbsp;Tuesday, July 24th 2018</p><p>Time: 10:00am</p><p>Venue: Last floor Universal press building plot 5 funmec b/s Acme, Adeniyi Jones, Ikeja Lagos.</p><p>Kindly come with a printed copy of this invitation and your updated CV.</p><p><br></p><p>Note that the invitation is a response to the application you submitted which we are handling on behalf of our client and you can recourse to us if you did not apply for such position so we can manage our records properly.</p><p>Best regards,&nbsp;</p><p>RECRUITMENT TEAM,</p><p><span style="color: rgb(0, 120, 215);">Phoenix Initiatives&nbsp;</span></p><p>NOTE: You will meet with the Deputy Managing Director, Head of Human Resource of our client(IGNYTE INITIATIVES,&nbsp;</p><p>website: www.ignyteinitiatives.com.ng) after the oral assessment for proper evaluation. </p>',
    createdAt: "2018-07-23 11:08:20",
    updatedAt: "2018-07-23 11:08:20",
    title: "Please how legit is this?",
    
    inviteId: "5f36a35f-62ef-4a4c-8529-eedb5015fafc"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>Base on referral,BLS urgently consider you for interview on Tue 24/7/18 by 9am @ 3rd floor,8 Thomas Salako Str, Ogba B/Stop,Ikeja Lag</p><p>www.becologistics.com</p><p><br></p>",
    createdAt: "2018-07-23 22:25:10",
    updatedAt: "2018-07-23 22:25:10",
    title: "Great minds, please how legit is this??",
    
    inviteId: "040c65d9-40d7-4d8e-a08b-584d7d607280"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p><span style="color: rgb(0, 0, 0);">Dear Applicant,</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Congratulations! You have been shortlisted for an oral interview</span></p><p><span style="color: rgb(0, 0, 0);">with our human resources team on Wednesday 25th of July 2018 at one of&nbsp;</span></p><p><span style="color: rgb(0, 0, 0);">the selected venues in Lagos.</span></p><p><span style="color: rgb(0, 0, 0);">Address: No 5 Press House, by fumec B/stop, End of Adeniyi Jones Ogba&nbsp;</span></p><p><span style="color: rgb(0, 0, 0);">Lagos</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Time : 9:00am.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Note : come along with a printed copy of this invitation and your&nbsp;</span></p><p><span style="color: rgb(0, 0, 0);">updated curriculum vitae.</span></p><p><span style="color: rgb(0, 0, 0);">Dress Corporately and be ensure to come early as lateness will not be&nbsp;</span></p><p><span style="color: rgb(0, 0, 0);">welcome.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Regards Mr. Marvel</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Global Hitech</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Contact Us @ +2348163241327.</span></p>',
    createdAt: "2018-07-24 06:31:44",
    updatedAt: "2018-07-24 06:31:44",
    title: "Great minds, please how legit is this??",
    
    inviteId: "91a94895-8ce0-43b7-a9c5-80da7baef344"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>Dear Candidate,</p><p>Wealth Resource consulting Nig. Is outstanding when it comes to outsourcing for it clients. We also offer excellent ICT and Entrepreneurship services. As part of our screening and selection process, you have been scheduled for an Oral interview session with the HRM, slated for Thursday, July 26th, 2018 by 9:30am, at Plot 14, Block A, university press building, fumec&nbsp;bus-stop, Surulere industrial road, Ogba, Lagos.</p><p>Come with an updated hard copy of your CV</p><p>Sincerely,</p><p>Wealth consulting Nig.</p><p>Admin Unit</p><p>For&nbsp;inquiries:.</p>",
    createdAt: "2018-07-24 16:31:27",
    updatedAt: "2018-07-24 16:31:27",
    title: "Please is this legit????",
    
    inviteId: "b571cfcc-d0d9-42d2-a59e-b05ea99e8145"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>You are hereby invited for an interview tomorrow  at StreSERT Services Limited, 2nd floor, 11 Maye Street Off Commercial Avenue, Sabo Yaba, Lagos. Please come with copy of your CV, One passport Photograph, Credentials and ensure you dress corporate. Regards!</p>",
    createdAt: "2018-07-25 17:04:48",
    updatedAt: "2018-07-25 17:04:48",
    title: "Great minds, please how legit is this??",
    
    inviteId: "54cd2f25-0929-476c-b521-65aa051a778b"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Based on referral,You are urgently considered for an interview to hold on SAT.21/7/18 by 10am at No.2,Sunday Street off Ikorodu road Palmgroove B/Stop Lagos.HOD</span></p>',
    createdAt: "2018-07-26 08:20:50",
    updatedAt: "2018-07-26 08:20:50",
    title: "is this fake or real",
    
    inviteId: "5fa8cac7-8d5a-4538-985b-3d3f78e11df8"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You are hereby invited for an interview on the 23rd of July (Monday) at Richlife Commercial and Logistics Ltd. 61, Mokola bus stop, idimu road, Egbeda</span></p>',
    createdAt: "2018-07-26 08:28:27",
    updatedAt: "2018-07-26 08:28:27",
    title: "Any info on this company?",
    
    inviteId: "e9b6c0a0-57bf-476a-a8e7-d48c0340d57d"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Good Day House, Pls I just need to Confirm If The Above Invite Is Real Or A Scam as Usual. Thanks</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);"><span class="ql-cursor">﻿</span></span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Dear [Name],&nbsp;</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Your application recieved from our online portal meets requirements.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">We are impressed by your background and we are pleased to inform you that you are fit to be a part of our workforce&nbsp;based on the work experience and the qualities you possess.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">We would like to invite you for a face to face work assessment&nbsp;at our office. During which you will have the chance to learn more about the Organization, and to develop a deeper understanding of our company’s objectives. On our end, we want to understand your career goals and professional experience more so.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Our office is located at No 6, Deji Odunuga Street opposite Kehinde Odusote Estate, Anthony Village. Gbagada Lagos.&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">The work assessment&nbsp;has been scheduled to hold by: WEDNESDAY 25th July 2018. By 8:30AM</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Kindly come along with an updated CV.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">If you have any questions before the work assessment,&nbsp;do contact-&nbsp;</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">08028332937</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Looking forward to seeing you.</span></p><p><br></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Best wishes.&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Your sitcode : 10617055</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Coach Audrey</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">HR Dept</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">WESTCORPServices Ltd</span></p>',
    createdAt: "2018-07-26 08:31:51",
    updatedAt: "2018-07-26 08:31:51",
    title:
      "Pls I just need to Confirm If The Above Invite Is Real Or A Scam as Usual.",
    
    inviteId: "05ff3e5c-206f-4217-9514-b47d543f2e24"
  },
  {
    userId: "32f6dcd0-d047-496f-8320-e06333b84767",
    body:
      '<p>Please how legit is this </p><p><br></p><p><span style="color: rgb(128, 0, 128);">I got this from global hitech </span></p><p><br></p><p><span style="color: rgb(128, 0, 128);">Dear. .....</span></p><p><br></p><p><span style="color: rgb(128, 0, 128);">Your Application/CV Information matches the request of our clients, to this effect you are hereby invited for Oral &amp; writing Assessment with our human resources Team on</span></p><p><span style="color: rgb(128, 0, 128);">Friday 27th of July 2018 at one of the selected venues in Lagos. End of Adeniyi Jones 5, press building, fumec b/stop Ogba Lagos.</span></p><p><span style="color: rgb(128, 0, 128);">Time : 9:30am.</span></p><p><span style="color: rgb(128, 0, 128);">&nbsp;Note : come along with a printed copy of this invitation and your updated curriculum&nbsp;vitae.</span></p><p><span style="color: rgb(128, 0, 128);">&nbsp;Dress Corporately and be ensure to come early as lateness will not be welcome.</span></p><p><span style="color: rgb(128, 0, 128);">&nbsp;Regards miss .....</span></p><p><span style="color: rgb(128, 0, 128);">&nbsp;Resource manager&nbsp;.</span></p><p><span style="color: rgb(128, 0, 128);">&nbsp;Office-line: ...........<span class="ql-cursor">﻿</span></span></p><p><a href="http://www.globallogistics.com.ng/" target="_blank" style="color: rgb(66, 133, 244);">www.globalhitech.com</a></p><p><br></p>',
    createdAt: "2018-07-26 17:44:53",
    updatedAt: "2018-07-26 17:44:53",
    title: "Interview confirmation",
    
    inviteId: "426455d5-8b41-4376-9f82-e1924d9ce758"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      "<p>You are hereby invited to come to our office on Monday, 30th of July 2018.&nbsp;Please come with your CV, two passports, valid means of ID Birth certificate,&nbsp;SSCE Result,&nbsp;OND/HND certificate </p><p><br></p><p>Time:  9am</p><p><br></p><p>Venue : 2C Gbagada Expressway Anthony Oke Bus Stop By Beko Ransome Kuti Park,&nbsp;Lagos. Kindly confirm your attendance.</p><p><br></p><p> DataMaxFiles</p>",
    createdAt: "2018-07-27 20:09:43",
    updatedAt: "2018-07-27 20:09:43",
    title: "Great minds, please how legit is this??",
    
    inviteId: "b32305cb-0142-4df6-a38b-6c50e99be4a7"
  },
  {
    userId: "472537a2-ea2c-4b1d-a47d-ce9ed668f68f",
    body:
      "<p>After thorough preview of your details and your Curriculum vitae,considering the working experience, skills and attribute you encompassed, the Board of Directors of&nbsp;D, PEARL CONSULT NIGERIA LIMITED , invites you for an assessment.</p><p><br></p><p>Date:&nbsp;Wednesday 1st&nbsp;August ,2018</p><p>Time: 8am prompt</p><p><br></p><p>Venue: 116 Akowonjo Road</p><p>Jimoh Bus-top, Egbeda, Lagos.</p><p><br></p><p>We apologize for the short notice, however it is important you confirm your availability to enable us make adequate preparations. Please kindly confirm your availability by replying this message as soon as possible.</p><p><br></p><p>Kindly respond to the message</p><p><br></p><p>For more information and directions call 080-6154-0600&nbsp;</p><p><br></p><p>Thanks from the Management of D'PEARL CONSULT NIGERIA LIMITED. HR10016793/Abot</p>",
    createdAt: "2018-07-30 16:18:21",
    updatedAt: "2018-07-30 16:18:21",
    title: "Is this legit?",
    
    inviteId: "abbec1cc-343f-4cfd-b4a3-41349838c11d"
  },
  {
    userId: "531bf2f2-59f0-4d20-b80d-7801a5d3d363",
    body:
      "<p>Dear Candidate,</p><p><br></p><p>Cedex Consulting Nig.&nbsp;is outstanding when it comes to outsourcing for it clients. We also offer excellent ICT and Entrepreneurship services. As part of our screening and selection process, you have been scheduled for an Oral interview session with the HRM.</p><p><br></p><p>Date: Thursday 02/08/2018&nbsp;</p><p>Time: 9:30am</p><p>Address:5 Resource Press Building by Fumec B/stop Opposite SBN end of Adeniyi Jones Ogba, Lagos</p><p>Come with an updated hard copy of your CV</p><p><br></p><p>Sincerely,</p><p>Cedex Consult Nig.</p><p>Admin Unit</p><p>For inquiries:</p><p><br></p><p>Email: cedexconsulting@aol.com</p><p>Tel: +234(0)803-083-2748</p><p>cedex consulting.</p><p>cedexconsulting@aol.com</p><p><br></p>",
    createdAt: "2018-07-31 12:55:25",
    updatedAt: "2018-07-31 12:55:25",
    title: "Hello please is this legit?",
    
    inviteId: "6c6f2c5b-7507-4345-b537-3bf930a18fa5"
  },
  {
    userId: "96397dcd-0950-4a8d-b9b8-4da4175d4243",
    body:
      '<p><br></p><p><a href="https://plus.google.com/app/basic?nopromo=1&amp;source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Google+</a><a href="http://www.google.com.ng/?source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Web</a></p><p><a href="http://plus.google.com/app/basic/photos?nopromo=1&amp;source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Photos</a><span style="color: rgb(0, 0, 0);">more</span></p><p><br></p><p class="ql-align-center"><strong>Primary</strong></p><p class="ql-align-center"><br></p><p><br></p><p><br></p><p>Please is this legit </p><p>INTERVIEW INVITE</p><p><strong>hr. ygsconsulting</strong></p><p>to&nbsp;me</p><p>10 hours agoDetails</p><p>DEAR ELIZABETH,</p><p><br></p><p><br></p><p>Based on your application, you have been shortlisted for an oral interview with the&nbsp;Head of human resource(HRM) in our&nbsp;consulting and entrepreneurial firm.</p><p><br></p><p><strong><em>Time: 9:00am.</em></strong></p><p>&nbsp;Date: Wednesday&nbsp;1/08/2018</p><p>&nbsp;Address:&nbsp;plot A, resource Press building,Sanusi bus stop,Adeniyi Jones, Ogba Road Lagos</p><p>&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Come along with&nbsp;your CV</p><p><br></p><p>Regards,</p><p>Ololade Adeniyi</p><p>Relationhip officer</p><p>08115757035</p><p>YGS Consult</p><p><br></p>',
    createdAt: "2018-08-01 07:04:42",
    updatedAt: "2018-08-01 07:09:42",
    title: "Elizabeth",
    
    inviteId: "045bd3df-d1e7-4416-abb2-5ec9026ca150"
  },
  {
    userId: "96397dcd-0950-4a8d-b9b8-4da4175d4243",
    body:
      '<p><br></p><p><a href="https://plus.google.com/app/basic?nopromo=1&amp;source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Google+</a><a href="http://www.google.com.ng/?source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Web</a></p><p><a href="http://plus.google.com/app/basic/photos?nopromo=1&amp;source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Photos</a><span style="color: rgb(0, 0, 0);">more</span></p><p><br></p><p class="ql-align-center"><strong>Primary</strong></p><p class="ql-align-center"><br></p><p><br></p><p><br></p><p>Please is this legit </p><p>INTERVIEW INVITE</p><p><strong>hr. ygsconsulting</strong></p><p>to&nbsp;me</p><p>10 hours agoDetails</p><p>DEAR ELIZABETH,</p><p><br></p><p><br></p><p>Based on your application, you have been shortlisted for an oral interview with the&nbsp;Head of human resource(HRM) in our&nbsp;consulting and entrepreneurial firm.</p><p><br></p><p><strong><em>Time: 9:00am.</em></strong></p><p>&nbsp;Date: Wednesday&nbsp;1/08/2018</p><p>&nbsp;Address:&nbsp;plot A, resource Press building,Sanusi bus stop,Adeniyi Jones, Ogba Road Lagos</p><p>&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Come along with&nbsp;your CV</p><p><br></p><p>Regards,</p><p>Ololade Adeniyi</p><p>Relationhip officer</p><p>08115757035</p><p>YGS Consult</p><p><br></p>',
    createdAt: "2018-08-01 07:05:09",
    updatedAt: "2018-08-01 07:10:36",
    title: "Elizabeth",
    
    inviteId: "dc1b880c-223a-43ce-a1a6-537011a8855e"
  },
  {
    userId: "96397dcd-0950-4a8d-b9b8-4da4175d4243",
    body:
      '<p><br></p><p><a href="https://plus.google.com/app/basic?nopromo=1&amp;source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Google+</a><a href="http://www.google.com.ng/?source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Web</a></p><p><a href="http://plus.google.com/app/basic/photos?nopromo=1&amp;source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Photos</a><span style="color: rgb(0, 0, 0);">more</span></p><p><br></p><p class="ql-align-center"><strong>Primary</strong></p><p class="ql-align-center"><br></p><p><br></p><p><br></p><p>Please is this legit </p><p>INTERVIEW INVITE</p><p><strong>hr. ygsconsulting</strong></p><p>to&nbsp;me</p><p>10 hours agoDetails</p><p>DEAR ELIZABETH,</p><p><br></p><p><br></p><p>Based on your application, you have been shortlisted for an oral interview with the&nbsp;Head of human resource(HRM) in our&nbsp;consulting and entrepreneurial firm.</p><p><br></p><p><strong><em>Time: 9:00am.</em></strong></p><p>&nbsp;Date: Wednesday&nbsp;1/08/2018</p><p>&nbsp;Address:&nbsp;plot A, resource Press building,Sanusi bus stop,Adeniyi Jones, Ogba Road Lagos</p><p>&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Come along with&nbsp;your CV</p><p><br></p><p>Regards,</p><p>Ololade Adeniyi</p><p>Relationhip officer</p><p>08115757035</p><p>YGS Consult</p><p><br></p>',
    createdAt: "2018-08-01 07:05:18",
    updatedAt: "2018-08-01 07:09:08",
    title: "Elizabeth",
    
    inviteId: "1d8ab953-a60f-4867-a1d9-45a242660905"
  },
  {
    userId: "96397dcd-0950-4a8d-b9b8-4da4175d4243",
    body:
      '<p><br></p><p><a href="https://plus.google.com/app/basic?nopromo=1&amp;source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Google+</a><a href="http://www.google.com.ng/?source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Web</a></p><p><a href="http://plus.google.com/app/basic/photos?nopromo=1&amp;source=mog&amp;gl=ng" target="_blank" style="color: rgb(0, 0, 0);">Photos</a><span style="color: rgb(0, 0, 0);">more</span></p><p><br></p><p class="ql-align-center"><strong>Primary</strong></p><p class="ql-align-center"><br></p><p><br></p><p><br></p><p>Please is this legit </p><p>INTERVIEW INVITE</p><p><strong>hr. ygsconsulting</strong></p><p>to&nbsp;me</p><p>10 hours agoDetails</p><p>DEAR ELIZABETH,</p><p><br></p><p><br></p><p>Based on your application, you have been shortlisted for an oral interview with the&nbsp;Head of human resource(HRM) in our&nbsp;consulting and entrepreneurial firm.</p><p><br></p><p><strong><em>Time: 9:00am.</em></strong></p><p>&nbsp;Date: Wednesday&nbsp;1/08/2018</p><p>&nbsp;Address:&nbsp;plot A, resource Press building,Sanusi bus stop,Adeniyi Jones, Ogba Road Lagos</p><p>&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Come along with&nbsp;your CV</p><p><br></p><p>Regards,</p><p>Ololade Adeniyi</p><p>Relationhip officer</p><p>08115757035</p><p>YGS Consult</p><p><br></p>',
    createdAt: "2018-08-01 07:05:33",
    updatedAt: "2018-08-01 07:08:15",
    title: "Elizabeth",
    
    inviteId: "40d5ecf9-e9e5-4a9c-b6c5-b41c64ce849c"
  },
  {
    userId: "96397dcd-0950-4a8d-b9b8-4da4175d4243",
    body:
      "<p><br></p><p>Please is this legit </p><p>INTERVIEW INVITE</p><p><strong>hr. ygsconsulting</strong></p><p>to&nbsp;me</p><p>10 hours agoDetails</p><p>DEAR ELIZABETH,</p><p><br></p><p><br></p><p>Based on your application, you have been shortlisted for an oral interview with the&nbsp;Head of human resource(HRM) in our&nbsp;consulting and entrepreneurial firm.</p><p><br></p><p><strong><em>Time: 9:00am.</em></strong></p><p>&nbsp;Date: Wednesday&nbsp;1/08/2018</p><p>&nbsp;Address:&nbsp;plot A, resource Press building,Sanusi bus stop,Adeniyi Jones, Ogba Road Lagos</p><p>&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Come along with&nbsp;your CV</p><p><br></p><p>Regards,</p><p>Ololade Adeniyi</p><p>Relationhip officer</p><p>08115757035</p><p>YGS Consult</p><p><br></p>",
    createdAt: "2018-08-01 07:06:08",
    updatedAt: "2018-08-01 07:10:11",
    title: "Elizabeth",
    
    inviteId: "ef262583-1ae1-49c9-85ad-390fbe5195e5"
  },
  {
    userId: "96397dcd-0950-4a8d-b9b8-4da4175d4243",
    body:
      "<p><br></p><p>Please is this legit </p><p>INTERVIEW INVITE</p><p><strong>hr. ygsconsulting</strong></p><p>to&nbsp;me</p><p>10 hours agoDetails</p><p>DEAR ELIZABETH,</p><p><br></p><p><br></p><p>Based on your application, you have been shortlisted for an oral interview with the&nbsp;Head of human resource(HRM) in our&nbsp;consulting and entrepreneurial firm.</p><p><br></p><p><strong><em>Time: 9:00am.</em></strong></p><p>&nbsp;Date: Wednesday&nbsp;1/08/2018</p><p>&nbsp;Address:&nbsp;plot A, resource Press building,Sanusi bus stop,Adeniyi Jones, Ogba Road Lagos</p><p>&nbsp;</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>Come along with&nbsp;your CV</p><p><br></p><p>Regards,</p><p>Ololade Adeniyi</p><p>Relationhip officer</p><p>08115757035</p><p>YGS Consult</p><p><br></p>",
    createdAt: "2018-08-01 07:06:24",
    updatedAt: "2018-08-01 07:06:24",
    title: "Elizabeth",
    
    inviteId: "458c4805-5e4d-4dfd-bc20-eace86a5dd6f"
  },
  {
    userId: "91ea96fa-93df-4c53-976f-116e11a06936",
    body:
      "<p>I got this job interview for customer service officer and i don't know how legit it is. company's name Immac Concept</p><p><br></p><p><br></p><p>Dear Applicant,</p><p><br></p><p>As a result of your application for the position of a \"Customer Service \".&nbsp;</p><p><br></p><p>You have been invited to attend an interview with the head of human resource in one of our selected branches in Lagos.</p><p>Date: Thursday 02/08/2018.</p><p>Time: 10:00am.</p><p>Address: House 5,Resource Building, Fumec Bus Stop Ogba Lagos.</p><p><br></p><p>NB: Ensure you come along with the hard copy of your CV.&nbsp;</p><p><br></p><p>Best Regards</p><p>Miss Effiong</p><p>08185312569</p>",
    createdAt: "2018-08-01 22:50:07",
    updatedAt: "2018-08-01 22:50:07",
    title: "Please help me confirm this",
    
    inviteId: "a2a6cd9b-d236-4dbe-a12f-7ecbe39b2a5f"
  },
  {
    userId: "324a66d6-d56e-4d9b-8dd7-274916652e04",
    body: "<p>Pls hw true is this</p><p><br></p><p><br></p>",
    createdAt: "2018-08-03 08:05:00",
    updatedAt: "2018-08-03 08:05:00",
    title: "Realmind concept",
    
    inviteId: "9dd99183-a774-48b7-8fed-10f4eb3bc021"
  },
  {
    userId: "09f953fb-7d7b-4771-b75f-47c0c5f4e9be",
    body: "<p>From INFINITI: </p>",
    createdAt: "2018-08-06 18:08:30",
    updatedAt: "2018-08-07 05:15:31",
    title: "Is this Job interview legit?",
    
    inviteId: "dc8d5a01-93ff-4d88-bab7-aabae016bcde"
  },
  {
    userId: "09f953fb-7d7b-4771-b75f-47c0c5f4e9be",
    body: "<p>From INFINITI: </p>",
    createdAt: "2018-08-06 18:09:10",
    updatedAt: "2018-08-07 05:15:37",
    title: "Is this Job interview legit?",
    
    inviteId: "a816c5cc-32bb-4835-854c-388c1732aefc"
  },
  {
    userId: "09f953fb-7d7b-4771-b75f-47c0c5f4e9be",
    body: "<p>From INFINITI: </p>",
    createdAt: "2018-08-06 18:09:11",
    updatedAt: "2018-08-07 05:15:41",
    title: "Is this Job interview legit?",
    
    inviteId: "231eda1b-9c02-4363-9d8b-b3633d09daf6"
  },
  {
    userId: "09f953fb-7d7b-4771-b75f-47c0c5f4e9be",
    body: "<p>From INFINITI: </p>",
    createdAt: "2018-08-06 18:09:12",
    updatedAt: "2018-08-07 05:15:47",
    title: "Is this Job interview legit?",
    
    inviteId: "7884f2e8-15d3-47b2-9fa5-e6eca14a6cdc"
  },
  {
    userId: "09f953fb-7d7b-4771-b75f-47c0c5f4e9be",
    body: "<p>From INFINITI: </p>",
    createdAt: "2018-08-06 18:09:13",
    updatedAt: "2018-08-07 05:15:54",
    title: "Is this Job interview legit?",
    
    inviteId: "5cad4332-fe71-4c23-817c-97a7ce090ff7"
  },
  {
    userId: "09f953fb-7d7b-4771-b75f-47c0c5f4e9be",
    body: "<p>From INFINITI: </p>",
    createdAt: "2018-08-06 18:09:15",
    updatedAt: "2018-08-07 05:16:00",
    title: "Is this Job interview legit?",
    
    inviteId: "ed39db12-8938-4321-8ac6-5f5f88e59a56"
  },
  {
    userId: "09f953fb-7d7b-4771-b75f-47c0c5f4e9be",
    body: "<p>From INFINITI: </p>",
    createdAt: "2018-08-06 18:09:55",
    updatedAt: "2018-08-07 05:16:05",
    title: "Is this Job interview legit?",
    
    inviteId: "f907d318-a6d0-4e32-9119-a154ac2a73c6"
  },
  {
    userId: "09f953fb-7d7b-4771-b75f-47c0c5f4e9be",
    body: "<p>From INFINITI: </p>",
    createdAt: "2018-08-06 18:09:56",
    updatedAt: "2018-08-06 18:09:56",
    title: "Is this Job interview legit?",
    
    inviteId: "c30c226e-0960-43d5-aa3e-112b73d85b79"
  },
  {
    userId: "de63dd16-e6d8-42fc-88d1-554fccbdeedb",
    body:
      '<p><br></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Dear Applicant,</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Congratulations! Based on your application, you have been shortlisted</span></p><p><span style="color: rgb(0, 0, 0);">for an oral interview with our human resources team&nbsp;</span><a href="about:blank" target="_blank" style="color: rgb(0, 0, 0);">on Wednesday 8th</a></p><p><span style="color: rgb(0, 0, 0);">of August 2018 at one</span></p><p><span style="color: rgb(0, 0, 0);">of the selected venues in Lagos.</span></p><p><span style="color: rgb(0, 0, 0);">Address: No 5 Resource Press House, by Oando filling station, adjacent</span></p><p><span style="color: rgb(0, 0, 0);">Standard Organization of Nigeria (SON), End of Adeniyi Jones Ogba</span></p><p><span style="color: rgb(0, 0, 0);">Lagos</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Time :&nbsp;</span><a href="about:blank" target="_blank" style="color: rgb(0, 0, 0);">9:30am</a><span style="color: rgb(0, 0, 0);">.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Note : come along with a printed copy of this invitation and your</span></p><p><span style="color: rgb(0, 0, 0);">updated curriculum vitae.</span></p><p><span style="color: rgb(0, 0, 0);">Dress Corporately and be ensure to come early as lateness will not be welcome.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Regards Mr. Marvel</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Contact Us @&nbsp;</span><a href="tel:+2348163241327" target="_blank">+2348163241327</a></p><p><br></p><p><span style="color: rgb(0, 0, 0);">or visit&nbsp;</span><a href="http://www.globalhitech.com.ng/" target="_blank">www.globalhitech.com.ng</a><span style="color: rgb(0, 0, 0);">&nbsp;for more information.</span></p>',
    createdAt: "2018-08-07 09:55:48",
    updatedAt: "2018-08-07 09:55:48",
    title: "Pls is this real",
    
    inviteId: "111f78cd-49b1-45b4-b552-4758f8982dde"
  },
  {
    userId: "a8f391ae-97ef-4249-b8c7-47912b2fc4a6",
    body:
      '<p>Dear Candidate</p><p>Your application for "customer service representative" has been considered, and you have been given a chance to attend an interview.</p><p><br></p><p><strong>SHIELD PROTON</strong>&nbsp;takes in it most efficient and diversified service platform, powerd by "INNOVATION", TECHNICAL COMPETENCE and work ethic that is driven by a culture of continuous improvement in all the sector and within our state of operations.</p><p><br></p><p>SHIELD PROTON operate in the following sectors</p><p>* Recruiting staff outsourcing and selection</p><p>*Training and Entrepreneurship</p><p>* Call center management</p><p>* Payroll administration</p><p>* Management consulting</p><p>* Oil and gas support services</p><p>* Integrated cash management</p><p><br></p><p><strong>SHIELD PROTON</strong>&nbsp;also function through active fully owned sub service in Nigeria and West Africa.</p><p><br></p><p>Your interview has been slated for</p><p>Date: Friday 10th, August 2018</p><p>Time: 9:30am</p><p>Venue: 5,&nbsp;industrial road, mikano bus/stop. Admin building suite E, last floor, Adeniyi Jones/ Ogba Lagos.</p><p>Note: Ensure that you come with your hard copy RESUME.</p><p><br></p><p>REGARDS</p><p>MR. PEDRO JOEL</p><p>08031346130</p><p><br></p><p><strong>SHIELD PROTON....</strong></p>',
    createdAt: "2018-08-09 20:33:53",
    updatedAt: "2018-08-09 20:33:53",
    title: "Please is this legit????",
    
    inviteId: "7065259e-f852-43e2-b72b-062ff0109484"
  },
  {
    userId: "46aed066-a0f0-47c5-a416-e9d7705daee5",
    body:
      '<p><strong style="color: rgb(51, 51, 51);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please help me verify if this is a real job&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></p><p><br></p><p><strong style="color: rgb(51, 51, 51);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INTERVIEW INVITATION LETTER</strong></p><p><br></p><p><span style="color: rgb(51, 51, 51);">Resource (RS) consulting Nig. LLC handles Recruitment/HR functions, offer manpower training and executive development.</span></p><p><span style="color: rgb(51, 51, 51);">Your application has been reviewed and scheduled for interview session with the&nbsp;</span><strong style="color: rgb(51, 51, 51);"><em>HRM</em></strong><span style="color: rgb(51, 51, 51);">as part of&nbsp;</span><span style="color: rgb(34, 34, 34);">screening process, on Monday, 13th august, 2018 by 9:30am at Plot 5, Surulere house along Surulere industrial road, university press building, adjacent to soulmate Nig., before fumec junction, ogba. Ikeja, Lagos.</span></p><p class="ql-align-justify"><span style="color: rgb(34, 34, 34);">Come along with an updated copy of your&nbsp;</span><strong style="color: rgb(34, 34, 34);">Resume</strong><span style="color: rgb(34, 34, 34);">&nbsp;</span></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><u>This message is for Admission!!!</u></strong></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><u>Don’t come late!!!</u></strong></p><p class="ql-align-justify"><span style="color: rgb(34, 34, 34);">&nbsp;</span></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><em>For inquiries:</em></strong></p><p class="ql-align-justify"><em style="color: rgb(34, 34, 34);">Admin Unit</em></p><p class="ql-align-justify"><a href="mailto:Kunle.adesina@rs-consulting.com.ng" target="_blank" style="color: rgb(34, 34, 34);">Kunle.adesina@rs-consulting.com.ng</a></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><em>Tel: +234 (0)&nbsp;817 -714 - 2544</em></strong></p><p>&nbsp;</p>',
    createdAt: "2018-08-10 12:57:50",
    updatedAt: "2018-08-10 12:57:50",
    title: "@isthisarealjob",
    
    inviteId: "85da8fbb-c877-4519-b6e7-6b632efa84df"
  },
  {
    userId: "472537a2-ea2c-4b1d-a47d-ce9ed668f68f",
    body:
      '<p><br></p><p><strong style="color: rgb(51, 51, 51);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INTERVIEW INVITATION LETTER</strong></p><p><br></p><p><span style="color: rgb(51, 51, 51);">Resource (RS) consulting Nig. LLC handles Recruitment/HR functions, offer manpower training and executive development.</span></p><p><span style="color: rgb(51, 51, 51);">Your application has been reviewed and scheduled for interview session with the&nbsp;</span><strong style="color: rgb(51, 51, 51);"><em>HRM</em></strong><span style="color: rgb(51, 51, 51);">&nbsp;as part of&nbsp;</span><span style="color: rgb(34, 34, 34);">screening process, on Monday, 13th august, 2018 by 10:00am at Plot 5, Surulere house, along Surulere industrial road, university press building, adjacent to soulmate Nig. ogba. Ikeja, Lagos.</span></p><p class="ql-align-justify"><span style="color: rgb(34, 34, 34);">Come along with an updated copy of your&nbsp;</span><strong style="color: rgb(34, 34, 34);">Resume</strong><span style="color: rgb(34, 34, 34);">&nbsp;</span></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><u>This message is for Admission!!!</u></strong></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><u>Don’t come late!!!</u></strong></p><p class="ql-align-justify"><span style="color: rgb(34, 34, 34);">&nbsp;</span></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><em>For inquiries:</em></strong></p><p class="ql-align-justify"><em style="color: rgb(34, 34, 34);">Admin Unit</em></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><em>Official Email:</em></strong><em style="color: rgb(34, 34, 34);">&nbsp;</em><u>k</u><a href="mailto:Kunle.adesina@rs-consulting.com.ng" target="_blank" style="color: rgb(66, 133, 244);"><u>unle.adesina@rs-consulting.com.ng</u></a></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><em>Office Line: +234 (0)&nbsp;817 -714 - 2544</em></strong></p><p>&nbsp;</p><p><br></p><p><br></p>',
    createdAt: "2018-08-11 14:42:24",
    updatedAt: "2018-08-11 14:54:03",
    title: "Is this legit?",
    
    inviteId: "b88c57df-cfd5-4ec2-a997-c99cebfecc9f"
  },
  {
    userId: "472537a2-ea2c-4b1d-a47d-ce9ed668f68f",
    body:
      '<p><br></p><p><strong style="color: rgb(51, 51, 51);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INTERVIEW INVITATION LETTER</strong></p><p><br></p><p><span style="color: rgb(51, 51, 51);">Resource (RS) consulting Nig. LLC handles Recruitment/HR functions, offer manpower training and executive development.</span></p><p><span style="color: rgb(51, 51, 51);">Your application has been reviewed and scheduled for interview session with the&nbsp;</span><strong style="color: rgb(51, 51, 51);"><em>HRM</em></strong><span style="color: rgb(51, 51, 51);">&nbsp;as part of&nbsp;</span><span style="color: rgb(34, 34, 34);">screening process, on Monday, 13th august, 2018 by 10:00am at Plot 5, Surulere house, along Surulere industrial road, university press building, adjacent to soulmate Nig. ogba. Ikeja, Lagos.</span></p><p class="ql-align-justify"><span style="color: rgb(34, 34, 34);">Come along with an updated copy of your&nbsp;</span><strong style="color: rgb(34, 34, 34);">Resume</strong><span style="color: rgb(34, 34, 34);">&nbsp;</span></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><u>This message is for Admission!!!</u></strong></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><u>Don’t come late!!!</u></strong></p><p class="ql-align-justify"><span style="color: rgb(34, 34, 34);">&nbsp;</span></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><em>For inquiries:</em></strong></p><p class="ql-align-justify"><em style="color: rgb(34, 34, 34);">Admin Unit</em></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><em>Official Email:</em></strong><em style="color: rgb(34, 34, 34);">&nbsp;</em><u>k</u><a href="mailto:Kunle.adesina@rs-consulting.com.ng" target="_blank" style="color: rgb(66, 133, 244);"><u>unle.adesina@rs-consulting.com.ng</u></a></p><p class="ql-align-justify"><strong style="color: rgb(34, 34, 34);"><em>Office Line: +234 (0)&nbsp;817 -714 - 2544</em></strong></p><p>&nbsp;</p><p><br></p><p><br></p>',
    createdAt: "2018-08-11 14:47:55",
    updatedAt: "2018-08-11 14:47:55",
    title: "Is this legit?",
    
    inviteId: "5a5a158a-24c9-40d1-a31b-0fd208521989"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body: "<p>tes</p>",
    createdAt: "2018-08-15 22:25:02",
    updatedAt: "2018-08-15 22:32:15",
    title: "tes",
    
    inviteId: "97f2fcc7-9954-4ec7-aac1-c7a38af110b3"
  },
  {
    userId: "9805215f-5d96-4101-b084-bbfcc2628b10",
    body:
      '<p>Pls guys help me with this</p><p><strong>Hello Applicant,&nbsp;</strong></p><p><strong>Due to your online application to M.H.S, you\'re invited to come over for an Interview session with the HR Dept on Monday&nbsp;20/08/2018.</strong></p><p><strong>Time: 9am.</strong></p><p><strong>Address:&nbsp;</strong><a href="https://maps.google.com/?q=4b+Toyin+street&amp;entry=gmail&amp;source=g" target="_blank" style="color: rgb(66, 133, 244);"><strong>4b Toyin street</strong></a><strong>, opposite Victory home school, before unity b/stop, Ikeja, Lagos.</strong></p><p><strong>Do present a hard copy of your CV and ensure to be there on time.</strong></p><p><strong>&nbsp;</strong></p><p><strong>Help/Directives?</strong></p><p><strong>Call the ADMGR: 0803-449-6175/M303</strong></p><p><a href="http://www.madehillssolution.com.ng/" target="_blank" style="color: rgb(66, 133, 244);"><strong>www.madehillssolution.com.ng</strong></a></p>',
    createdAt: "2018-08-18 13:49:26",
    updatedAt: "2018-08-18 13:49:26",
    title: "Interview",
    
    inviteId: "4ec494c3-749a-42ad-95b8-e968eb8e8f14"
  },
  {
    userId: "adbe0097-075b-4517-a776-71da575c4034",
    body: "<p><br></p>",
    createdAt: "2018-08-25 15:14:36",
    updatedAt: "2018-08-25 15:14:36",
    title: "Is this real please?",
    
    inviteId: "b4213f2c-764a-4026-bfc8-e3a8f8d0c988"
  },
  {
    userId: "adbe0097-075b-4517-a776-71da575c4034",
    body: "<p><br></p>",
    createdAt: "2018-08-25 15:14:37",
    updatedAt: "2018-08-25 15:14:37",
    title: "Is this real please",
    
    inviteId: "98a3fb40-ff77-4f7e-bdbb-89c56585ce3b"
  },
  {
    userId: "46363570-8b78-4ab1-93ec-b0fabc64fa14",
    body:
      "<p>Please help me verify if this is a real job interview invite.</p>",
    createdAt: "2018-09-05 14:42:26",
    updatedAt: "2018-09-05 14:42:26",
    title: "Is this a real interview invite.",
    

    inviteId: "c8dd3f47-71d3-4a81-8279-18f0ee4a30c6"
  },
  {
    userId: "01226448-92c7-4450-b657-6f0c3186c062",
    body:
      '<p>Hi Guys please I got this on Monday, and could not make it but called yesterday and was told to come today Saturday. </p><p><br></p><p>please do you have any tip about this. Kindly assist as I am still not sure if to go or not.</p><p><br></p><p>Thank you</p><p><br></p><p><br></p><p><br></p><p>"Dear&nbsp;Applicant,&nbsp;</p><p><br></p><p>&nbsp;Your application has been reviewed and you have been shortlisted&nbsp;for an oral interview with our human resource team on&nbsp;Wednesday 12th September 2018 at one of the selected venues in Lagos.</p><p><br></p><p>Address: No 5 Resource Press House, by Oando filling station, adjacent&nbsp;Standard Organization of Nigeria (SON), end of Adeniyi Jones, Ogba,Lagos.</p><p><br></p><p>Time : 9:30am.&nbsp;</p><p><br></p><p>Note : come along with a printed copy of this invitation and a hard copy of your updated curriculum vitae.&nbsp;</p><p>Dress Corporately and ensure to come early as lateness will not be&nbsp;welcome.&nbsp;</p><p><br></p><p>Regards Ms Angela</p><p>Office-line:</p><p>08112229947."</p>',
    createdAt: "2018-09-15 08:31:48",
    updatedAt: "2018-09-15 08:31:48",
    title: "5 RESOURCE PRESS HOUSE, FROM HRCONSULT247",
    
    inviteId: "365cb2c7-b187-4517-a943-8fcb08f7a5a0"
  },
  {
    userId: "c9fd88d9-113a-4b7d-b772-4217c2f42218",
    body:
      "<p>Please, is this genuine?? I rescheduled the interview for Monday. I want to be sure I don't waste my time. </p>",
    createdAt: "2018-09-19 08:07:53",
    updatedAt: "2018-09-19 08:36:18",
    title: "M. H. S.",
    

    inviteId: "9ecca3ef-5142-42b7-b3bc-69bb3eb5e62f"
  },
  {
    userId: "c9fd88d9-113a-4b7d-b772-4217c2f42218",
    body:
      "<p>Please, is this genuine?? I rescheduled the interview for Monday. I want to be sure I don't waste my time. </p>",
    createdAt: "2018-09-19 08:08:38",
    updatedAt: "2018-09-19 08:36:43",
    title: "M. H. S.",
    

    inviteId: "4cb33ba4-2778-441b-9c93-834e6051ac92"
  },
  {
    userId: "c9fd88d9-113a-4b7d-b772-4217c2f42218",
    body:
      "<p>Please, is this genuine?? I rescheduled the interview for Monday. I want to be sure so I don't waste my time. </p>",
    createdAt: "2018-09-19 08:10:08",
    updatedAt: "2018-09-19 08:10:08",
    title: "M. H. S.",
    

    inviteId: "5bd2f037-c3cd-4f69-9a4a-8d153e0a3ce9"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You are invited to part take in an interview session.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Mega Height Resources (Nig) is a recruitment firm that handles human resource functions for selected organizations. As part of selection process, you are invited for an oral interview session as follows:</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Date: Monday 30th July, 2018</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Time: 10:00am</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Address: Plot 5, university press building,surulere industrial road,adjacent to sanusi bus-stop, off adeniyi jones avenue, ogba. Lagos.</span></p><p><br></p><p><br></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Come along with a printed copy of your CV</span></p><p><br></p><p><br></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Best Regards,</span></p><p><br></p><p><br></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">For inquiries:</span></p><p><br></p><p><a href="http://www.rs-consulting.com.ng/" target="_blank" style="background-color: rgb(246, 246, 236); color: rgb(24, 24, 85);">www.rs-consulting.com.ng</a></p>',
    createdAt: "2018-09-23 22:53:12",
    updatedAt: "2018-09-23 22:53:12",
    title: "How real is this please?",
    
    inviteId: "98640b74-4970-440d-a869-0581a7842b67"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Does anyone any ISN tracking Company in Marina. And if yes I do I get there from Oshodi</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">ISN Tracking Company&nbsp;</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Venue:6th floor,St Peter\'s Building,3 Ajele str.,off Broad str. Marina</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Pls I need urgent responses biko</span></p>',
    createdAt: "2018-09-23 22:54:38",
    updatedAt: "2018-09-23 22:54:38",
    title: "Does anyone any ISN tracking Company in Marina",
    
    inviteId: "31f8c3d2-e1fa-413c-9a01-208288d70fe8"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You are invited to partake in an interview session.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">HILLS CONSULT, is an outsourcing firm that handles human resource functions for Various organizations nationwide. As part of the selection process, you have been scheduled for an oral interview session as follows:</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Date: Monday, 30th July, 2018.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Time: 9:30am</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Address: 5, Resource press building, beside soulmate industry adjacent to sanusi bus-stop, off adeniyi jones avenue, ogba, Lagos.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Come along with a printed copy of your CV</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">To a successful job interview you must be at your best Attitude, Tolerance and Patience.&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Best Regards;</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">RICHARD DAVIS.&nbsp;</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">ADMINISTRATIVE UNIT,</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">HILLSCONSULT</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">For inquiries:</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Tel: +234 (0) 909-220-2771</span></p>',
    createdAt: "2018-09-23 22:56:32",
    updatedAt: "2018-09-23 22:56:32",
    title: "Pls house,is this legit",
    
    inviteId: "bda6a4ad-90b5-49f3-a7b7-eda6f7726f9a"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Please does this look legit? And is the location popular? Thanks. It\'s an interview invitation from Eclat support systems</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Hi,</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);"><span class="ql-cursor">﻿</span></span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Congratulations!&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">You have been selected for the next recruitment phase for Eclat Management Associate Program. Kindly avail yourself for an interview on Tuesday 31st July, 2018 at 09.00am Nigerian time.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Venue: No 8 Sabiu Ajose Street, Off Bode Thomas, Surulere, Lagos. Or you can come in through Adeniran Ogunsanya, off Modupe Johnson Street by Skye Bank.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Come prepared to take a project-based test, make a presentation, have a chat and discuss in fine detail your skills, competencies and experience within and outside the workplace.&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Kindly confirm receipt of this email and your attendance for the interview before close of business on Monday (30/07/2018).</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Ask to see Gbenga Johnson when you arrive.&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Thanks and see you Tuesday.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Sincerely,</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">HR Team</span></p>',
    createdAt: "2018-09-23 22:58:02",
    updatedAt: "2018-09-23 22:58:02",
    title: "Please does this look legit",
    
    inviteId: "19003d68-a6d2-427a-afdb-b06b0f349024"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      "<p>RiseUp.college</p><p><br></p><p><br></p><p><br></p><p>Good day,</p><p><br></p><p>You are cordially invited for a written test at RiseUp College as follows:</p><p>Date: Wednesday, 1st August, 2018</p><p>Time: 11:00 am</p><p>Venue: 5, Oriade Close, Water Bus Stop Ipaja Lagos</p><p>Direction: From Iyana-Ipaja, take keke napep to gate along Ipaja road,</p><p>stop at water bus stop. Walk down the road by the filling station and turn</p><p>to the 4th turning by your right, then locate the above address.</p><p><br></p><p>Come along with writing material, copy of your CV and a passport photograph</p><p><br></p><p>Kindly acknowledge the receipt of this invitation by reply</p><p><br></p><p>Best regards.</p><p><br></p><p><br></p><p><br></p><p>Oluwatosin Akintan</p><p><br></p>",
    createdAt: "2018-09-23 22:58:48",
    updatedAt: "2018-09-23 22:58:48",
    title: "please can diz be fake",
    
    inviteId: "b06cc469-3036-4a25-b555-9b29a82989cd"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Pls is this a scam interview or who else got this? Interview for post of a&nbsp;</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);"><span class="ql-cursor">﻿</span></span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">For EFB INDUSTRIES LTD on Saturday 4th August at 9, Ojike crescent, Ohafia, Abia State. I need your help to be sure before I embark on this long distance travel.</span></p>',
    createdAt: "2018-09-23 22:59:26",
    updatedAt: "2018-09-23 22:59:26",
    title:
      "Pls is this a scam interview or who else got this? Interview for post of a",
    
    inviteId: "8283d3dc-f6ac-4af8-a3ff-b3a740b567ac"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Dear {APPLICANT},&nbsp;</span></p><p><br></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">This is to notify you that your application has been Successfully Completed and Submitted by the NIGERIA NATIONAL PETROLEUM CORPORATION&nbsp;with Registration no**421004356118GL.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Proceed to obtain your Applicant ID for the interview.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Thank You.</span></p><p><br></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Call :-</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">Adewunmi Olufemi.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">08119258255.</span></p><p><span style="background-color: rgb(246, 246, 236); color: rgb(0, 0, 0);">For assistance/enquiries.</span></p>',
    createdAt: "2018-09-23 23:01:35",
    updatedAt: "2018-09-23 23:01:35",
    title: "Please house, I got this on my email. How true is it",
    
    inviteId: "5073cb25-27d9-41e4-9435-11fc05166d8a"
  },
  {
    userId: "c3bbcb23-05e8-4caa-a249-a457ebab7eed",
    body:
      "<p>You are invited for an assessment by the Executives of BS Resources at 4,Alh Kareem St.Agidingbi,Ikeja,1st gate on Wed.26/9/18 by 8.30am.HR TERRY.08023805004.Please is this a real job company and what are they into?I got the above text inviting me for an interview tomorrow.</p>",
    createdAt: "2018-09-25 21:12:23",
    updatedAt: "2018-09-25 21:12:23",
    title: "Miss",
    
    inviteId: "1092d202-4a08-489d-b2ff-8111d9cdbc57"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 92, 156);">GMG NIG INVITES YOU FOR AN INTERVIEW WITH THE HR EXECUTIVES ON THURSDAY 27-09-2018 BY 8AM AT 8,BISI OGABI STR, BALOGUN B/STOP, IKEJA LAGOS. HR-MISS PRINCESS scam</span></p>',
    createdAt: "2018-09-26 22:42:28",
    updatedAt: "2018-09-26 22:42:28",
    title: "IS GMG Nigeria Real?",
    
    inviteId: "6414b610-1f66-4ba8-b455-161cb3728c62"
  },
  {
    userId: "0ed13517-55f4-4023-8e90-b7b00e602e4c",
    body:
      '<p><span style="background-color: rgb(255, 255, 255); color: rgb(0, 92, 156);">oasl branch office ibadan, is this a real company?</span></p>',
    createdAt: "2018-09-26 22:49:39",
    updatedAt: "2018-09-26 22:49:39",
    title: "oasl branch office ibadan",
    
    inviteId: "2d1e5440-a5b0-4149-a3a9-6adb378d2872"
  },
  {
    userId: "25657948-da38-4be5-96cb-ae5d64525da7",
    body:
      '<p><span style="color: rgb(34, 34, 34);">Dear&nbsp;Applicant,</span></p><p><span style="color: rgb(34, 34, 34);">With Respect to your Cv received from our HRM PORTAL, We are impressed by your background.we are pleased to inform you that you are fit to work with us based on your work experience and the qualities you possess.</span></p><p><span style="color: rgb(34, 34, 34);">We would like to invite you for a face to face interview at our office.</span></p><p><span style="color: rgb(34, 34, 34);">During the interview, you will have the chance to learn more about the Organization, and to develop a deeper understanding of our company’s objectives.</span></p><p><span style="color: rgb(34, 34, 34);">On our end, we want to understand your career goals and professional experience more so.</span></p><p><span style="color: rgb(34, 34, 34);">Our office is located @ 6 deji Odunuga street,opposite kehinde odusote estate.Anthony village.Anthony bustop.Lagos.</span></p><p><span style="color: rgb(34, 34, 34);">The date for the interview is Wednesday 28TH&nbsp;SEPTEMBER 2018. By 8:30am</span></p><p><span style="color: rgb(34, 34, 34);">Kindly come along with an updated CV.</span></p><p><span style="color: rgb(34, 34, 34);">If you have any questions before the interview. Contact- 08085190015</span></p><p><span style="color: rgb(34, 34, 34);">I look forward to meeting with you.</span></p><p><span style="color: rgb(34, 34, 34);">All the best.</span></p><p><span style="color: rgb(34, 34, 34);">LOLA.A. H</span></p><p><span style="color: rgb(34, 34, 34);">HR ADMINISTRATOR</span></p><p><span style="color: rgb(34, 34, 34);">WESTCORP SERVICES LTD.</span></p><p><br></p>',
    createdAt: "2018-09-28 11:36:15",
    updatedAt: "2018-09-28 11:36:15",
    title: "Please are they real?",
    
    inviteId: "6345de67-c8ef-42dc-a126-b82336e0045b"
  },
  {
    userId: "25657948-da38-4be5-96cb-ae5d64525da7",
    body:
      '<p>Dear Applicant</p><p><br></p><p>In line with your application for the position of a "ACCOUNT OFFICER you have been invited for an oral interview section with the human resource unit at one of our selected centers in Lagos.</p><p><br></p><p>Date: Thursday, 18th October, 2018</p><p>Time: 9:am</p><p>Address: 5, Resource Press Building, Oando Filling Station B/Stop Opposite SBN End of Adeniyi Jones, Ogba Lagos.</p><p><br></p><p>Note that the invitation is a response to the application you submitted which we are handling on behalf of our client and you recourse to us if you did not apply for such position so we can manage our records properly.</p><p><br></p><p>Best Regards,</p><p>RECRUITMENT TEAM</p><p><br></p><p><br></p><p><strong>RUN FROM THESE GUYS. THEY ARE FAKE. </strong></p><p><strong>THEY ALSO USE THE ADDRESS BELOW AND MANY OTHER ADDRESSES </strong></p><p><br></p><p><br></p><p>Dear Applicant,</p><p><br></p><p>In line with your application for the position of "BUSINESS ANALYST", you have been invited for an oral interview section with the human resource unit at one of our selected centers in Lagos.</p><p><br></p><p>Date: Thursday, 18th October, 2018</p><p>Time: 9:45am</p><p>Address:5,Jonax Building Before Oando Filling Station Acme Junction Opposite SBN At The End Of Adeniyi Jones Ogba,Lagos.</p><p><br></p><p>Note that the invitation is a response to the application you submitted which we are handling on behalf of our client and you can recourse to us if you did not apply for such position so we can manage our records properly.</p><p><br></p><p>Best Regards,</p><p>RECRUITMENT TEAM,</p><p>ORIENTAL GROUP</p><p>08030832748</p><p>Mrs.Kahley.</p><p><br></p><p><img src="https://ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif"></p>',
    createdAt: "2018-10-23 12:32:54",
    updatedAt: "2018-10-23 12:32:54",
    title: "IMAC INCORPORATED ARE FAKE. BEWARE",
    
    inviteId: "82c5b65c-13d3-4a7b-b18b-47bf88ec77b6"
  },
  {
    userId: "74058450-c7da-46c8-9b9e-3c52c0c30a13",
    body:
      "<p>I got interview invite from global Kreative consult Ltd please are they real</p>",
    createdAt: "2018-10-23 20:02:40",
    updatedAt: "2018-10-23 20:02:40",
    title: "Check this out",
    
    inviteId: "772fac92-3a02-402e-81f2-0b8ff901720c"
  },
  {
    userId: "e075cd98-16ce-4ded-9b80-5e0f5cc13d98",
    body:
      '<p><span style="color: inherit;">Dear Candidate,</span></p><p><span style="color: inherit;">We were impressed by your background, skills, experience and have just</span></p><p><span style="color: inherit;">been recommended to have an aptitude and interview session with the</span></p><p><span style="color: inherit;">Human Capital Management team of DPP- Resources.</span></p><p><br></p><p><span style="color: inherit;">Date: THURSDAY 25 OCTOBER, 2018.</span></p><p><span style="color: inherit;">Time: 9 am prompt</span></p><p><span style="color: inherit;">Venue:&nbsp;Number 2, Akin Osiyemi street,&nbsp;Opposite Sterling bank/Canon, Mr</span></p><p><span style="color: inherit;">Biggs B/stop, Allen Avenue, Ikeja.</span></p><p><br></p><p><span style="color: inherit;">We look forward to meeting you and having a good working relationship</span></p><p><span style="color: inherit;">with you in our team.</span></p><p><br></p>',
    createdAt: "2018-10-24 10:59:42",
    updatedAt: "2018-10-24 10:59:42",
    title: "How true is this please",
    

    inviteId: "d3316214-b530-4825-b9b4-80198f98472a"
  },
  {
    userId: "e075cd98-16ce-4ded-9b80-5e0f5cc13d98",
    body:
      '<p><span style="color: inherit;">Dear Candidate,</span></p><p><span style="color: inherit;">We were impressed by your background, skills, experience and have just</span></p><p><span style="color: inherit;">been recommended to have an aptitude and interview session with the</span></p><p><span style="color: inherit;">Human Capital Management team of DPP- Resources.</span></p><p><br></p><p><span style="color: inherit;">Date: THURSDAY 25 OCTOBER, 2018.</span></p><p><span style="color: inherit;">Time: 9 am prompt</span></p><p><span style="color: inherit;">Venue:&nbsp;Number 2, Akin Osiyemi street,&nbsp;Opposite Sterling bank/Canon, Mr</span></p><p><span style="color: inherit;">Biggs B/stop, Allen Avenue, Ikeja.</span></p><p><br></p><p><span style="color: inherit;">We look forward to meeting you and having a good working relationship</span></p><p><span style="color: inherit;">with you in our team.</span></p><p><br></p><p><br></p>',
    createdAt: "2018-10-24 11:02:37",
    updatedAt: "2018-10-24 11:02:37",
    title: "How true is this please",
    

    inviteId: "6d777e7c-bd5f-4c7e-8e33-50ebb99551ac"
  },
  {
    userId: "acc19546-d513-40bd-823c-1fb0ac86a3ff",
    body: "<p>Please I wNt to know if this is real or fake </p>",
    createdAt: "2018-10-25 09:03:57",
    updatedAt: "2018-10-25 09:03:57",
    title: "Customer relations job offer",
    

    inviteId: "c5bd84fe-0d83-440f-9310-e66ccd2de2af"
  },
  {
    userId: "1ee76f40-7e9e-4337-bd35-1977dd1a6433",
    body:
      '<p>INVITATION FOR INTERVIEW</p><p>Inbox</p><p>x</p><p><span style="background-color: rgb(204, 204, 204);"><img src="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png"></span></p><h3><strong style="color: rgb(32, 33, 36);">Elite Consulting</strong></h3><p><span style="color: rgb(95, 99, 104);">11:29 (3 hours ago)</span></p><p><br></p><p><span style="background-color: initial;"><img src="https://mail.google.com/mail/u/0/images/cleardot.gif"><img src="https://mail.google.com/mail/u/0/images/cleardot.gif"></span></p><p><span style="color: rgb(95, 99, 104);">to&nbsp;me</span></p><p><br></p><p><span style="background-color: initial;"><img src="https://mail.google.com/mail/u/0/images/cleardot.gif"></span></p><p><br></p><p><br></p><p>Dear Peter,</p><p><br></p><p>Congratulations!&nbsp;</p><p><br></p><p>You have been invited for an oral interview with our human resource team following your application with ELITE CONSULTS on Wednesday 7th of November, 2018 at one of the selected venues in Lagos.</p><p><br></p><p><br></p><p>Address: No 5, University Press House, surulere industrial road, by Oando filling station, adjacent Standard Organization of Nigeria (SON), end of Adeniyi Jones, Ogba, Lagos.</p><p><br></p><p><br></p><p>Time : 9:30am.&nbsp;</p><p><br></p><p><br></p><p>Note : come along with a printed copy of this invitation and your updated curriculum vitae.&nbsp;</p><p><br></p><p><br></p><p>Dress Corporately and ensure to come early as lateness will not be tolerated.</p><p><br></p><p><br></p><p>Regards,</p><p><br></p><p>Ms EVELYN</p><p><br></p><p><br></p><p>Office-line: 07089450699</p><p><br></p><p><br></p><p>I received the above mail not long ago, i will to confirm if it is real or scam </p>',
    createdAt: "2018-11-05 15:30:23",
    updatedAt: "2018-11-05 15:30:23",
    title: "elite consults",
    

    inviteId: "4c9ca940-8fd7-4a67-96d2-b785a652785e"
  },
  {
    userId: "1ee76f40-7e9e-4337-bd35-1977dd1a6433",
    body:
      '<p>INVITATION FOR INTERVIEW</p><p>Inbox</p><p>x</p><p><span style="background-color: rgb(204, 204, 204);"><img src="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png"></span></p><h3><strong style="color: rgb(32, 33, 36);">Elite Consulting</strong></h3><p><span style="color: rgb(95, 99, 104);">11:29 (3 hours ago)</span></p><p><br></p><p><span style="background-color: initial;"><img src="https://mail.google.com/mail/u/0/images/cleardot.gif"><img src="https://mail.google.com/mail/u/0/images/cleardot.gif"></span></p><p><span style="color: rgb(95, 99, 104);">to&nbsp;me</span></p><p><br></p><p><span style="background-color: initial;"><img src="https://mail.google.com/mail/u/0/images/cleardot.gif"></span></p><p><br></p><p><br></p><p>Dear Peter,</p><p><br></p><p>Congratulations!&nbsp;</p><p><br></p><p>You have been invited for an oral interview with our human resource team following your application with ELITE CONSULTS on Wednesday 7th of November, 2018 at one of the selected venues in Lagos.</p><p><br></p><p><br></p><p>Address: No 5, University Press House, surulere industrial road, by Oando filling station, adjacent Standard Organization of Nigeria (SON), end of Adeniyi Jones, Ogba, Lagos.</p><p><br></p><p><br></p><p>Time : 9:30am.&nbsp;</p><p><br></p><p><br></p><p>Note : come along with a printed copy of this invitation and your updated curriculum vitae.&nbsp;</p><p><br></p><p><br></p><p>Dress Corporately and ensure to come early as lateness will not be tolerated.</p><p><br></p><p><br></p><p>Regards,</p><p><br></p><p>Ms EVELYN</p><p><br></p><p><br></p><p>Office-line: 07089450699</p><p><br></p><p><br></p><p><strong>I received the above mail not long ago, i will to confirm if it is real or scam </strong></p>',
    createdAt: "2018-11-05 15:30:45",
    updatedAt: "2018-11-05 15:30:45",
    title: "elite consults",
    

    inviteId: "5990f975-f341-485c-9b08-6c18324494f3"
  },
  {
    userId: "1ee76f40-7e9e-4337-bd35-1977dd1a6433",
    body:
      '<p>INVITATION FOR INTERVIEW</p><p>Inbox</p><p>x</p><p><span style="background-color: rgb(204, 204, 204);"><img src="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png"></span></p><h3><strong style="color: rgb(32, 33, 36);">Elite Consulting</strong></h3><p><span style="color: rgb(95, 99, 104);">11:29 (3 hours ago)</span></p><p><br></p><p><span style="background-color: initial;"><img src="https://mail.google.com/mail/u/0/images/cleardot.gif"><img src="https://mail.google.com/mail/u/0/images/cleardot.gif"></span></p><p><span style="color: rgb(95, 99, 104);">to&nbsp;me</span></p><p><br></p><p><span style="background-color: initial;"><img src="https://mail.google.com/mail/u/0/images/cleardot.gif"></span></p><p><br></p><p><br></p><p>Dear Peter,</p><p><br></p><p>Congratulations!&nbsp;</p><p><br></p><p>You have been invited for an oral interview with our human resource team following your application with ELITE CONSULTS on Wednesday 7th of November, 2018 at one of the selected venues in Lagos.</p><p><br></p><p><br></p><p>Address: No 5, University Press House, surulere industrial road, by Oando filling station, adjacent Standard Organization of Nigeria (SON), end of Adeniyi Jones, Ogba, Lagos.</p><p><br></p><p><br></p><p>Time : 9:30am.&nbsp;</p><p><br></p><p><br></p><p>Note : come along with a printed copy of this invitation and your updated curriculum vitae.&nbsp;</p><p><br></p><p><br></p><p>Dress Corporately and ensure to come early as lateness will not be tolerated.</p><p><br></p><p><br></p><p>Regards,</p><p><br></p><p>Ms EVELYN</p><p><br></p><p><br></p><p>Office-line: 07089450699</p><p><br></p><p><br></p><p><strong>I received the above mail not long ago, i will to confirm if it is real or scam </strong></p>',
    createdAt: "2018-11-05 15:31:06",
    updatedAt: "2018-11-05 15:31:06",
    title: "elite consults",
    

    inviteId: "bfbe76ea-48ce-4702-b13a-3aed191e061f"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Please I want to know if this is real. Thanks </p><p><br></p><p>Dear applicant</p><p>&nbsp;&nbsp;&nbsp;</p><p><br></p><p><br></p><p>Congratulations.You have been shortlisted for an oral interview in one of our consulting firm as a customer service officer.Successful candidates are always better than unsuccessful ones.</p><p><br></p><p>To aid entry into the venue,printout this email</p><p>Your specific entry details are as below</p><p><br></p><p><br></p><p>Venue:End of Adeniyi jones,last floor University Press Building,Acme Ikeja.</p><p>10:00AM</p><p>9/11/2018</p><p><br></p><p>Note:Dress corporately and be sure to come early as lateness will not be welcomed,come with your Updated Cv,a passport photograph</p><p><br></p><p>Regards</p><p>Career Tips</p><p><br></p>",
    createdAt: "2018-11-06 03:28:59",
    updatedAt: "2018-11-06 03:28:59",
    title: "Job interview",
    
    inviteId: "765fa509-c35a-4045-9f7f-2789eda0ff33"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      '<p>Here\'s a other one, please help with it.</p><p><span style="color: rgb(0, 32, 96);">Dear&nbsp;</span><strong>Tosin Adenugba</strong></p><p><span style="color: rgb(0, 32, 96);">Thank you for taking your time to apply for our advertised job online. You’re hereby scheduled for a job interview at our Office. Kindly find the details of the interview below:</span></p><p><span style="color: rgb(0, 32, 96);">&nbsp;</span></p><p><span style="color: rgb(0, 32, 96);">Candidate Full Name:&nbsp;</span><strong>Tosin Adenugba</strong><span style="color: rgb(0, 32, 96); background-color: transparent;">.</span></p><p><span style="color: rgb(0, 32, 96);">Date:&nbsp;Thursday 8th November, 2018</span></p><p><span style="color: rgb(0, 32, 96);">Remuneration: Attractive Basic</span></p><p><span style="color: rgb(0, 32, 96);">Other Benefits: HMO, Pension &amp; Other benefits</span></p><p><span style="color: rgb(0, 32, 96);">Time:&nbsp;9:35 AM (Prompt)</span></p><p><span style="color: rgb(0, 32, 96);">Venue:&nbsp;The top floor, Voda Paint building Surulere Industry road, before Oando Filling Station Acme Junction, Adeniyi Jones street, Ogba, Ikeja, Lagos.</span></p><p><span style="color: rgb(0, 32, 96);">Contact Person:&nbsp;Recruitment Team</span></p><p><span style="color: rgb(0, 32, 96);">Please dress formally and come along with originals and copies of the following:</span></p><ol><li>CV</li><li>Credentials (O’LEVEL, OND/HND/BSc.)</li><li>Birth Certificate/Declaration of Age</li></ol><p><span style="color: rgb(0, 32, 96);">4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NYSC Discharge Certificate</span></p><p><span style="color: rgb(0, 32, 96);">5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Valid ID e.g(Voters card, National ID, International Passport, Driver’s License, Lasra)</span></p><p><br></p><p>Recruitment Team.</p><p>+234 701 235 7703.</p><p>Mrs Eze.</p><p><br></p>',
    createdAt: "2018-11-06 13:23:21",
    updatedAt: "2018-11-06 13:25:49",
    title: "Job interview",
    
    inviteId: "dc357e4c-9aef-4e20-8634-8410e6ed59f4"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body: "<p>Please help me confirm this </p>",
    createdAt: "2018-11-11 21:11:23",
    updatedAt: "2018-11-11 21:11:23",
    title: "Job invite,  address confirmation",
    

    inviteId: "89b6bbcc-8161-4071-bcd6-4a1eb8188550"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p><br></p><p><br></p><p>Dear Adenugba Oluwatosin,</p><p><br></p><p>You have been shortlisted for an interview at LibiShop Limited. Please make yourself available on Tuesday 13th November 2018 by 12.00AM at 320 Odunsanmi Street Off Wempco Road Ogba Lagos</p><p><br></p><p>Please confirm availability, Thanks</p><p>08060660979</p><p><br></p><p>The posting is customer care agent</p>",
    createdAt: "2018-11-12 08:46:33",
    updatedAt: "2018-11-12 08:46:33",
    title: "Job invite,  address confirmation",
    
    inviteId: "376b751c-c4b2-4503-b613-3fa06c93842b"
  },
  {
    userId: "38bf2fd9-eba7-4f51-99c7-3ccca581d5ce",
    body:
      "<p>Is this company real and what are they into ?</p><p><br></p><p>I recently received an interview message from the company and want to know about it before wasting time pursuing any ghost job </p>",
    createdAt: "2018-11-15 09:04:42",
    updatedAt: "2018-11-15 09:04:42",
    title: "Nexfrot group",
    
    inviteId: "88052586-699e-4d03-85ab-de16080c318a"
  },
  {
    userId: "38bf2fd9-eba7-4f51-99c7-3ccca581d5ce",
    body:
      "<p>Is this company real and what are they into ?</p><p><br></p><p>I recently received an interview message from the company and want to know about it before wasting time pursuing any ghost job </p>",
    createdAt: "2018-11-15 09:05:25",
    updatedAt: "2018-11-15 12:13:46",
    title:
      "Nexfrot group schedules you for an INTERVIEW on Friday 16/11/2018 by 9am at 6 Remilekun Str, Opp Agape Sec Sch off Falolu Road by Akerele Road, Surulere, Lagos.",
    
    inviteId: "1dcc7841-090a-4eb9-922c-df2dace7018f"
  },
  {
    userId: "38bf2fd9-eba7-4f51-99c7-3ccca581d5ce",
    body:
      "<p>Nexfrot group schedules you for an INTERVIEW on Friday 16/11/2018 by 9am at 6 Remilekun Str, Opp Agape Sec Sch off Falolu Road by Akerele Road, Surulere, Lagos.</p><p><br></p><p>Is this real ?</p>",
    createdAt: "2018-11-15 15:03:31",
    updatedAt: "2018-11-15 15:03:31",
    title: "Nexfrot group",
    
    inviteId: "66c141c2-80f2-4488-8e95-8a8062e5984b"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Please help me confirm this </p><p><br></p><p>Prior to your previous application you are invited for an interview on Tuesday, Nov. 20th, 2018 by 9:00am at</p><p>&nbsp;Richlife Commercial and Logistics Limited, 61, Idimu Rd, Beside Primal Tek Plaza, Mokola B/Stop by, Egbeda,&nbsp;</p><p>Lagos. Pls come with your CV. 07037541388</p>",
    createdAt: "2018-11-16 12:46:06",
    updatedAt: "2018-11-16 12:46:06",
    title: "Job interview",
    
    inviteId: "312b3552-303b-42fb-a487-d55c5f34e3f8"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Please help a friend confirm this </p><p><br></p><p><br></p>",
    createdAt: "2018-11-26 21:05:05",
    updatedAt: "2018-11-26 21:05:05",
    title: "Job invite,  address confirmation",
    
    inviteId: "b6b9f886-e7c5-4c90-9f32-e560c8fd9922"
  },
  {
    userId: "87a52c2d-8eb6-41ef-acb5-e1daf21d1509",
    body:
      "<p>Is this real invite?</p><p>You are invited for an INTERVIEW by the HRM (PAXY GLOBAL) on WED 28/11//2018 by 9am at 6 Remilekun Str, off Falolu Road by Akerele Road, Surulere, Lagos...</p>",
    createdAt: "2018-11-27 09:20:24",
    updatedAt: "2018-11-27 09:20:24",
    title: "Job invite",
    
    inviteId: "9e2f6b29-55d1-4800-8776-19a973268462"
  },
  {
    userId: "08b664cd-d991-4e38-b09b-b4c9b7beccb7",
    body:
      '<p>Hello , kindly assist with this confirmation . received job interview invite from Crownstar consulting .</p><p><br></p><p>Dear Applicant,</p><p><br></p><p>In line with your application for the position of CUSTOMER SERVICE&nbsp;OFFICER, You have been invited for an oral assessment at one of the&nbsp;selected centers in Lagos.</p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Date: Friday, November 30th 2018.</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Time: 10:00am</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Venue: 2 Akin Oshiyemi Street Opposite Sterling Bank By First Bank Bus Stop, Off Allen Avenue, Ikeja Lagos.</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Kindly come with a printed copy of this invitation and your updated CV.</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Note that the invitation is a response to the application you&nbsp;submitted which we are handling on behalf of our client and you can&nbsp;recourse to us if you did not apply for such position so we can manage&nbsp;our records properly.</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Best regards,</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">RECRUITMENT TEAM,</span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">Crownstar Consulting&nbsp;</span></p><p><br></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34);">NOTE: You will meet with the Deputy Managing Director, Head of Human&nbsp;Resource of our client after the oral assessment for proper&nbsp;evaluation.</span></p><p><br></p><p><br></p>',
    createdAt: "2018-11-27 10:43:15",
    updatedAt: "2018-11-27 10:43:15",
    title: "JOB INVITE CONFIRMATION",
    
    inviteId: "ccc88f10-b2fd-414d-b5e4-65a4965d7c9e"
  },
  {
    userId: "5683d974-d09d-4630-8640-2035497f7fe6",
    body:
      "<p>HR HEAD INVITES YOU FOR A CHAT WITH BOARD OF DIRECTORS ON FRIDAY 30/11/18.9AM@1ST FLOOR 32 OLUFEMI RD,LAWANSON B/STOP SURULERE LAGOS.YDLG.SHOW TEXT TO SECURITY.        Pls help me confirm if this is real got the message some hours ago. Thanks</p>",
    createdAt: "2018-11-29 21:41:13",
    updatedAt: "2018-11-29 21:41:13",
    title: "Invitation for job interview",
    
    inviteId: "3266b6fc-addb-46a2-a3fc-f464f9ce24cc"
  },
  {
    userId: "ee595838-f52e-405a-b6ef-33e5c37447aa",
    body:
      "<p>You have been shortlisted for an interview at LibiShop Limited. Please make yourself available on Friday 7th December&nbsp;2018 by 10.00AM at 320 Odunsanmi Street Off Wempco Road Ogba Lagos</p><p><br></p><p>Please confirm availability, Thanks</p><p>08060660979</p><p><br></p><p>Please help me confirm if this is real,  I got this email few hours ago.</p><p>Thanks </p><p><br></p><p><br></p><p><br></p>",
    createdAt: "2018-12-05 21:54:21",
    updatedAt: "2018-12-05 21:54:21",
    title: "Invitation for interview",
    
    inviteId: "1128a946-6331-4570-a38f-8fb14a7e65f2"
  },
  {
    userId: "504b923e-0e64-4154-9835-9239c4ebb456",
    body:
      "<p>Good day,\r\n\r\nYour application has been reviewed and you have been fixed for an oral interview by the Human Resource Manager.\r\n\r\nJob position: Graduate Trainee\r\n\r\nDate-Time: Friday 21st December 2018 by 10:00am\r\nInterview Venue: Surulere house, along industrial road. Ikeja lagos state.\r\n\r\nWarm regards,\r\n\r\nHR Unit\r\n\r\n08126696580</p><p><br></p><p>Please help me confirm if this is real </p>",
    createdAt: "2018-12-18 16:46:33",
    updatedAt: "2018-12-18 16:54:12",
    title: "Interview invitation",
    
    inviteId: "0e405ebc-0529-4280-bef1-721d0c3e3592"
  },
  {
    userId: "504b923e-0e64-4154-9835-9239c4ebb456",
    body:
      "<p>Good day,\r\n\r\nYour application has been reviewed and you have been fixed for an oral interview by the Human Resource Manager.\r\n\r\nJob position: Graduate Trainee\r\n\r\nDate-Time: Friday 21st December 2018 by 10:00am\r\nInterview Venue: Surulere house, along industrial road. Ikeja lagos state.\r\n\r\nWarm regards,\r\n\r\nHR Unit\r\n\r\n08126696580</p><p><br></p><p>Please help me confirm if this is real. Got this message from Spin consulting Nig</p>",
    createdAt: "2018-12-18 16:52:20",
    updatedAt: "2018-12-18 16:52:20",
    title: "Interview invitation",
    
    inviteId: "9fdf7e7c-622d-4c29-9a30-2a2b137f7582"
  },
  {
    userId: "89823d9e-dfd3-47b6-a64a-a2e433918363",
    body:
      "<p>Hello here also got this massage yesterday ao true is it old,  pls note that your application via jiji.ng was approved and you're required to present a hardcopy of your CV and a passport photograph for a Screening Interview with PSIS HR Board on&nbsp;</p><p>THU 27/12/2018</p><p>Time: 9am</p><p>Address: L'Monarch Towers, 65 Opebi Road Opp Glass House by Salvation B/Stop, Ikeja,Lagos</p><p>Kindly note that lateness automatically disqualifies you</p><p><br></p><p>If you need help/directions call: 0701-061-6106/1039</p><p>www.prosterlingng.com</p>",
    createdAt: "2018-12-25 03:22:27",
    updatedAt: "2018-12-25 03:22:27",
    title: "CNC Operator",
    
    inviteId: "3f6d8221-a904-4ea5-8093-7bb5afec2e98"
  },
  {
    userId: "89823d9e-dfd3-47b6-a64a-a2e433918363",
    body:
      "<p>Hello here also got this massage yesterday ao true is it old,  pls note that your application via jiji.ng was approved and you're required to present a hardcopy of your CV and a passport photograph for a Screening Interview with PSIS HR Board on&nbsp;</p><p>THU 27/12/2018</p><p>Time: 9am</p><p>Address: L'Monarch Towers, 65 Opebi Road Opp Glass House by Salvation B/Stop, Ikeja,Lagos</p><p>Kindly note that lateness automatically disqualifies you</p><p><br></p><p>If you need help/directions call: 0701-061-6106/1039</p><p>www.prosterlingng.com</p>",
    createdAt: "2018-12-25 03:22:57",
    updatedAt: "2018-12-25 03:22:57",
    title: "Machine Operator",
    
    inviteId: "b99abf5b-c41f-433e-b32c-51092eed5ad0"
  },
  {
    userId: "5a1579c1-46ba-462a-ae89-fc1a5263ac58",
    body:
      "<p>Hello guys please help me out i got an interview invitation from the company below (Text message)</p><p><br></p><p>Here is Your to Invitation to meet the CEO/ GM GLOBAL, for an interview on Friday 28/12/18,by 8:00am.Office; No8, Bisi Ogabi Street Balogun Bus stop off Awolowo way Ikeji, Lagos. HR MRS OLAITAN </p><p><br></p><p>Please is this Real or Fake? </p>",
    createdAt: "2018-12-27 17:56:30",
    updatedAt: "2018-12-27 17:56:30",
    title: "Is GM Global fake or real!",
    
    inviteId: "4a43a891-77b7-4a61-9fac-d26a392717a8"
  },
  {
    userId: "4c322720-350a-4327-ac3f-91c7a2dafe39",
    body:
      '<p><span style="color: rgb(0, 0, 0);">Dear Applicant,</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">in further assessment of your Online application, you have been Successfully Scheduled for a SCREENING INTERVIEW EXERCISE at one of our centres.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">DATE: FRIDAY 4th January, 2019.</span></p><p><span style="color: rgb(0, 0, 0);">TIME: 10 a.m prompt.</span></p><p><span style="color: rgb(0, 0, 0);">VENUE: Ground Floor, 2 Akin Osiyemi Street, Off Allen Ave Opposite Sterling Bank plc, Ikeja Lagos.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Successful Candidates are always better prepared than Unsuccessful ones. Therefore, to aid entry into the venue please ensure the following:</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Come with an updated Resume/ Curriculum Vitae, two (2) Passport Photographs and a hard copy print out of this mail.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">This invitation is a response to the Application / Curriculum Vitae you submitted which we are handling on behalf of our clients. You can recourse to us if you did not apply for such position to enable us manage your records properly.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">You will meet with the Deputy Managing Director, Head of Human Resource of our clients after the Oral assessments for proper evaluation.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Dress corporately and be sure to come early as lateness will not be ALLOWED.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Please note that the venue would be open to you 20 minutes before SCREENING time and you are expected to be seated 10 minutes before the exercise.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">REGARDS,</span></p><p><span style="color: rgb(0, 0, 0);">RECRUIT TEAM.</span></p><p><span style="color: rgb(0, 0, 0);">PHILZYY CONSULTS</span></p><p><br></p><p><br></p><p>Please real or fake </p><p><br></p>',
    createdAt: "2019-01-02 23:03:45",
    updatedAt: "2019-01-03 14:31:10",
    title: "Interview",
    
    inviteId: "34bd5b9e-c928-4300-9ca5-221e01249b22"
  },
  {
    userId: "4c322720-350a-4327-ac3f-91c7a2dafe39",
    body:
      '<p><span style="color: rgb(0, 0, 0);">Dear Applicant,</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">in further assessment of your Online application, you have been Successfully Scheduled for a SCREENING INTERVIEW EXERCISE at one of our centres.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">DATE: FRIDAY 4th January, 2019.</span></p><p><span style="color: rgb(0, 0, 0);">TIME: 10 a.m prompt.</span></p><p><span style="color: rgb(0, 0, 0);">VENUE: Ground Floor, 2 Akin Osiyemi Street, Off Allen Ave Opposite Sterling Bank plc, Ikeja Lagos.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Successful Candidates are always better prepared than Unsuccessful ones. Therefore, to aid entry into the venue please ensure the following:</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Come with an updated Resume/ Curriculum Vitae, two (2) Passport Photographs and a hard copy print out of this mail.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">This invitation is a response to the Application / Curriculum Vitae you submitted which we are handling on behalf of our clients. You can recourse to us if you did not apply for such position to enable us manage your records properly.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">You will meet with the Deputy Managing Director, Head of Human Resource of our clients after the Oral assessments for proper evaluation.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Dress corporately and be sure to come early as lateness will not be ALLOWED.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Please note that the venue would be open to you 20 minutes before SCREENING time and you are expected to be seated 10 minutes before the exercise.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">REGARDS,</span></p><p><span style="color: rgb(0, 0, 0);">RECRUIT TEAM.</span></p><p><span style="color: rgb(0, 0, 0);">PHILZYY CONSULTS</span></p><p><br></p><p><br></p><p>Please real or fake </p><p><br></p>',
    createdAt: "2019-01-02 23:04:30",
    updatedAt: "2019-01-02 23:04:30",
    title: "Interview",
    
    inviteId: "60174285-2684-400f-8532-3088b5298448"
  },
  {
    userId: "4c322720-350a-4327-ac3f-91c7a2dafe39",
    body:
      '<p><span style="color: rgb(0, 0, 0);">Dear Applicant,</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">in further assessment of your Online application, you have been Successfully Scheduled for a SCREENING INTERVIEW EXERCISE at one of our centres.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">DATE: FRIDAY 4th January, 2019.</span></p><p><span style="color: rgb(0, 0, 0);">TIME: 10 a.m prompt.</span></p><p><span style="color: rgb(0, 0, 0);">VENUE: Ground Floor, 2 Akin Osiyemi Street, Off Allen Ave Opposite Sterling Bank plc, Ikeja Lagos.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Successful Candidates are always better prepared than Unsuccessful ones. Therefore, to aid entry into the venue please ensure the following:</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Come with an updated Resume/ Curriculum Vitae, two (2) Passport Photographs and a hard copy print out of this mail.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">This invitation is a response to the Application / Curriculum Vitae you submitted which we are handling on behalf of our clients. You can recourse to us if you did not apply for such position to enable us manage your records properly.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">You will meet with the Deputy Managing Director, Head of Human Resource of our clients after the Oral assessments for proper evaluation.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Dress corporately and be sure to come early as lateness will not be ALLOWED.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Please note that the venue would be open to you 20 minutes before SCREENING time and you are expected to be seated 10 minutes before the exercise.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">REGARDS,</span></p><p><span style="color: rgb(0, 0, 0);">RECRUIT TEAM.</span></p><p><span style="color: rgb(0, 0, 0);">PHILZYY CONSULTS</span></p><p><br></p><p><br></p><p>Please real or fake </p><p><br></p>',
    createdAt: "2019-01-02 23:04:54",
    updatedAt: "2019-01-03 14:31:56",
    title: "Interview",
    
    inviteId: "74ee046e-8003-472c-b245-1ac7a5f632ea"
  },
  {
    userId: "4c322720-350a-4327-ac3f-91c7a2dafe39",
    body:
      '<p><span style="color: rgb(0, 0, 0);">Dear Applicant,</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">in further assessment of your Online application, you have been Successfully Scheduled for a SCREENING INTERVIEW EXERCISE at one of our centres.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">DATE: FRIDAY 4th January, 2019.</span></p><p><span style="color: rgb(0, 0, 0);">TIME: 10 a.m prompt.</span></p><p><span style="color: rgb(0, 0, 0);">VENUE: Ground Floor, 2 Akin Osiyemi Street, Off Allen Ave Opposite Sterling Bank plc, Ikeja Lagos.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Successful Candidates are always better prepared than Unsuccessful ones. Therefore, to aid entry into the venue please ensure the following:</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Come with an updated Resume/ Curriculum Vitae, two (2) Passport Photographs and a hard copy print out of this mail.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">This invitation is a response to the Application / Curriculum Vitae you submitted which we are handling on behalf of our clients. You can recourse to us if you did not apply for such position to enable us manage your records properly.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">You will meet with the Deputy Managing Director, Head of Human Resource of our clients after the Oral assessments for proper evaluation.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Dress corporately and be sure to come early as lateness will not be ALLOWED.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Please note that the venue would be open to you 20 minutes before SCREENING time and you are expected to be seated 10 minutes before the exercise.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">REGARDS,</span></p><p><span style="color: rgb(0, 0, 0);">RECRUIT TEAM.</span></p><p><span style="color: rgb(0, 0, 0);">PHILZYY CONSULTS</span></p><p><br></p><p><br></p><p>Please fake or real </p>',
    createdAt: "2019-01-02 23:06:15",
    updatedAt: "2019-01-03 14:31:32",
    title: "Interview",
    
    inviteId: "8a2e163f-4a5e-42b3-a601-f439f9d96ea8"
  },
  {
    userId: "a867375d-f2bc-4573-9924-72831fba478d",
    body:
      '<p>Dear Applicant,</p><p><br></p><p>After a background check of your CV, you are hereby invited for an interview at one of the selected centres in Lagos on Monday, 7th January , 2019.&nbsp;</p><p><br></p><p>Venue:&nbsp;<a href="https://maps.google.com/?q=Number+2,+Akin+Osiyemi+street&amp;entry=gmail&amp;source=g" target="_blank" style="color: rgb(66, 133, 244);">Number 2, Akin Osiyemi street</a>, First Bank Bus Stop, Opposite Sterling Bank, Allen Avenue, Ikeja Lagos.</p><p><br></p><p>Time: 10am</p><p><br></p><p>Kindly come with a printed copy of this invitation, a pen and a print out of your updated CV as you will not be allowed in without it.</p><p><br></p><p>Note that the invitation is a response to the application/CV you submitted which we are handling on behalf of our client and you can recourse to us if you did not apply for such position for us to manage your records properly.</p><p><br></p><p>Best Regards,</p><p><br></p><p>Skyline Consulting&nbsp;</p><p><br></p><p>NOTE: You will meet with the Deputy Managing Director, Head of Human Resource of our client after the oral assessment for proper evaluation.</p><p><br></p><p><br></p><p>How genuine is this invitations.. pls I need quick response since it\'s scheduled tomorrow mrn</p><p><br></p>',
    createdAt: "2019-01-06 18:35:50",
    updatedAt: "2019-01-06 18:35:50",
    title: "Mr.",
    
    inviteId: "e3d6e06f-c99d-407c-a641-4323bd44e45c"
  },
  {
    userId: "7afe8746-69b2-41df-9a4d-940d11adfd91",
    body:
      "<p><br></p><p><br></p><p><br></p><p><br></p><p>Sequel to your response, you are invited for an interview for the position of&nbsp;<strong>MARKETING&nbsp;EXECUTIVE&nbsp;</strong>in&nbsp;<strong>STERLING HOMES LIMITED.&nbsp;</strong>Date:&nbsp;<strong>MONDAY 14th&nbsp;JANUARY, 2019, Time: 11am.</strong>&nbsp;Venue:&nbsp;&nbsp;<strong>#Plot 2 , River Valley Estate, Ojodu Berger, Lagos, Nigeria.</strong></p><p>&nbsp;</p>",
    createdAt: "2019-01-11 23:11:05",
    updatedAt: "2019-01-11 23:11:05",
    title: "Pls is the job real?",
    
    inviteId: "2c9a9964-d152-4dc6-ba1a-3e4960ea0e0a"
  },
  {
    userId: "38bf2fd9-eba7-4f51-99c7-3ccca581d5ce",
    body:
      '<p>Pls I received this message and want to know how genuine they  are </p><p><br></p><p>\tThank you for applying to become part of our workforce. Sequel to your recent application via our online advertorial page, we are pleased with your background.</p><p>\tIn view of this you have been Shortlisted to attend our LEADERSHIP/BUSINESS ASSESSMENT and WORKSHOP for an INTERVIEW to be a Team/ Unit leader.</p><p class="ql-align-center"><strong>OVERVIEW OF CENTER FOR LEADERSHIP, ENTREPRENEURSHIP AND DEVELOPMENT INITIATIVE CFLEAD</strong></p><p>\tIs the culmination of years of experience in the corporate and small business worlds, with a passion for raising businessmen and women.</p><p>\tOur priority is to assist individuals in having a befitting lifestyle, acquire their desire and live a healthy life, using capacity building as a critical tool.</p><p><strong>VENUE:&nbsp;</strong>13 Ajumobi&nbsp;Olorounje street, off&nbsp;acme road BESIDE FIRST BANK. Firstgate Bus-stop Agidingbi Ikeja.</p><p><strong>DATE:</strong>&nbsp;Tuesday 15<sup>th</sup>&nbsp;January 2019</p><p><strong>TIME</strong>: 9am prompt</p><p><strong>NOTE:-&nbsp;</strong>&nbsp;You are required to tender this invitation and passport photographs at the point of entrance for security purpose.</p><p><em>We are sorry for the short notice, however; it’s imperative to confirm your availability, do so by replying to this e-mail.</em></p><p>We look forward to seeing you.</p><p><strong>DR BRUCE</strong></p>',
    createdAt: "2019-01-14 06:36:32",
    updatedAt: "2019-01-14 06:36:32",
    title: "Cflead",
    
    inviteId: "a8d1292d-1e0c-4ae3-800c-6eba58aec169"
  },
  {
    userId: "8c922c74-7f4d-45e2-be0d-34a11593f491",
    body:
      "<p><br></p><p>You have been shortlisted for an interview at LibiShop Limited. Please make yourself available on Tuesday&nbsp;15th Jan 2019 by 10.00AM at 320 Odunsanmi Street Off Wempco Road Ogba Lagos</p><p><br></p><p>Please confirm availability, Thanks</p><p>08110128588</p><p><br></p>",
    createdAt: "2019-01-14 17:35:55",
    updatedAt: "2019-01-14 17:35:55",
    title: "Please how real is this.",
    
    inviteId: "47376700-bcfe-4124-8eb5-7facecc26984"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Good afternoon,  please help me confirm this address thanks </p><p><br></p><p><br></p>",
    createdAt: "2019-01-18 16:18:01",
    updatedAt: "2019-01-18 16:24:31",
    title: "Job invite,  address confirmation",
    
    inviteId: "3d10f18d-9963-423c-b16d-27962449fdbb"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Good afternoon,  please help me confirm this address thanks </p><p><br></p><p><br></p>",
    createdAt: "2019-01-18 16:18:26",
    updatedAt: "2019-01-18 16:24:58",
    title: "Job invite,  address confirmation",
    
    inviteId: "f268f1f1-7a1d-496b-b65f-b8e04bb06b1a"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Good afternoon,  please help me confirm this address thanks </p><p><br></p><p><br></p>",
    createdAt: "2019-01-18 16:18:56",
    updatedAt: "2019-01-18 16:25:51",
    title: "Job invite,  address confirmation",
    
    inviteId: "fedb045d-61f3-46b6-b943-0a0eb1126cb6"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Good afternoon,  please help me confirm this address thanks </p><p><br></p><p><br></p>",
    createdAt: "2019-01-18 16:19:40",
    updatedAt: "2019-01-18 16:30:14",
    title: "Job invite,  address confirmation",
    
    inviteId: "7919e4ef-72f9-4b23-9269-6bb13fd7581f"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Please help me confirm this address. </p><p>GOF Autos Ltd has received and perused your application; you are hereby invited for an interview on Monday (21/1/19) by 10am at 26, Ayo Balogun street, green field estate, opic, isheri north estates. DIR: from Berger, alight at Fagbem filling station after opic event hall; you can also call 090-3017-5326 or 080-8014-3083 for direction NB. Come with a copy of your CV and you must be in LAGOS STATE.</p>",
    createdAt: "2019-01-18 16:31:03",
    updatedAt: "2019-01-18 16:31:03",
    title: "Job invite,  address confirmation",
    
    inviteId: "ac182e4d-36d3-4ac3-b5a0-e2ddf6d4c88c"
  },
  {
    userId: "2cceaf05-91cd-4ffa-a386-933e92f5c98a",
    body:
      '<p>Please is this real? </p><p>I need response as quick as possible</p><p>Dear Applicant,</p><p><br></p><p>After a background check of your CV, you are hereby invited for an interview at one of the selected centres in Lagos on Tuesday 22nd January 2019.</p><p><br></p><p>Venue:&nbsp;<a href="https://maps.google.com/?q=Number+2,+Akin+Osiyemi+street&amp;entry=gmail&amp;source=g" target="_blank" style="color: rgb(66, 133, 244);">Number 2, Akin Osiyemi street</a>, First bank Bus-stop, opposite Sterling Bank, Allen Avenue, Ikeja Lagos</p><p><br></p><p>Time: 10am</p><p><br></p><p>Kindly come with a printed copy of this invitation, a pen and a print out of your updated CV as you will not be allowed in without it.</p><p><br></p><p>Note that the invitation is a response to the application/CV you submitted which we are handling on behalf of our client and you can recourse to us if you did not apply for such position for us to manage your record properly.</p><p><br></p><p>Best Regards,</p><p>Recruitment Team</p><p><br></p><p>Foreshore Consulting</p>',
    createdAt: "2019-01-21 16:17:34",
    updatedAt: "2019-01-21 16:17:34",
    title: "Johnson",
    
    inviteId: "c1f8b889-0cf5-451b-947d-29ec93f8b501"
  },
  {
    userId: "2cceaf05-91cd-4ffa-a386-933e92f5c98a",
    body:
      '<p>Please is this real? </p><p>I need response as quick as possible</p><p>Dear Applicant,</p><p><br></p><p>After a background check of your CV, you are hereby invited for an interview at one of the selected centres in Lagos on Tuesday 22nd January 2019.</p><p><br></p><p>Venue:&nbsp;<a href="https://maps.google.com/?q=Number+2,+Akin+Osiyemi+street&amp;entry=gmail&amp;source=g" target="_blank" style="color: rgb(66, 133, 244);">Number 2, Akin Osiyemi street</a>, First bank Bus-stop, opposite Sterling Bank, Allen Avenue, Ikeja Lagos</p><p><br></p><p>Time: 10am</p><p><br></p><p>Kindly come with a printed copy of this invitation, a pen and a print out of your updated CV as you will not be allowed in without it.</p><p><br></p><p>Note that the invitation is a response to the application/CV you submitted which we are handling on behalf of our client and you can recourse to us if you did not apply for such position for us to manage your record properly.</p><p><br></p><p>Best Regards,</p><p>Recruitment Team</p><p><br></p><p>Foreshore Consulting</p>',
    createdAt: "2019-01-21 16:22:38",
    updatedAt: "2019-01-21 16:22:38",
    title: "Johnson",
    
    inviteId: "9778f306-cd72-414a-8d50-a2e8ca695ced"
  },
  {
    userId: "307bd2b5-a74d-445e-bf81-eec09b93ea15",
    body:
      "<p>Please help me confirm this address,I for an interview invitation from them,: No 5,University Press House Off Oando Filling Station,Adjacent Standard Organisation of Nigeria(SON)Ogba Lagos.</p><p><br></p>",
    createdAt: "2019-01-22 17:37:52",
    updatedAt: "2019-01-22 17:37:52",
    title: "Interview verification",
    
    inviteId: "d5840c9e-561c-4943-b0ca-9c43fa18f486"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Dear Applicant,</p><p><br></p><p>Your application has been Reviewed and you have been fixed for an Oral Interview with the head of Human Resource</p><p><br></p><p>JOB POSITION: Administrative officer&nbsp;</p><p><br></p><p>Dates: Monday,18th February, 2019</p><p>&nbsp;by 10:00am</p><p><br></p><p>Interview Venue: 5, Surulere House, Along Industrial Road, End off Adeniyi Jones. Ikeja&nbsp;</p><p>Lagos state.</p><p><br></p><p>Come with an updated copy of your CV.</p><p>Please show your availability for the interview&nbsp;</p><p><br></p><p>Warm regards,</p><p><br></p><p>HR Unit</p><p>Miss Adebayo</p><p>07087242450</p>",
    createdAt: "2019-02-17 06:38:06",
    updatedAt: "2019-02-17 06:38:06",
    title: "Job invite,  address confirmation",
    
    inviteId: "73a855a6-1b45-4b6e-b92e-24a2c38d5035"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>BLUERIDGE GLOBAL&nbsp;&lt;info.blueridgeglobal@gmail.com&gt;</p><p>Feb 25 at 11:20 AM</p><p>Dear Applicant, </p><p>Congratulations! After careful consideration of your application, you stood out to us and you are hereby invited for a brief oral interview with our human resource team.</p><p>Kindly find details of the interview below:</p><p><strong>Date</strong>: &nbsp;&nbsp;Wednesday, 27th February 2019</p><p><strong>Venue</strong>: Last Floor Surulere House, Fummec</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bus-stop, adjacent Standard Organization &nbsp;</p><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of Nigeria, End of Adeniyi Jones, Ogba, Lagos.</p><p><strong>Time</strong>: &nbsp;&nbsp;9:30a.m. </p><p><strong>Note</strong>: Kindly CONFIRM your attendance, Dress cooperate and come along with the printed copy of this invitation and your updated resume</p><p>Regards,</p><p>Admin Joan</p><p>Office line- 08074557813</p>",
    createdAt: "2019-02-25 16:02:49",
    updatedAt: "2019-02-25 16:02:49",
    title: "address confirmation",
    
    inviteId: "d88a1a27-1db6-4951-965b-580649ebb440"
  },
  {
    userId: "ad8e5b3a-31f4-4dcf-b32c-5bb197f69edc",
    body:
      "<p>Dear Applicant, Your application has been Reviewed and you have been fixed for an Oral Interview with the Human Resource Team. JOB POSITION: BUSINESS DEVELOPMENT OFFICER DATE :Friday 1st March 2019 TIME : 10am VENUE:No5, Surulere House, Along Industrial Road, End off Adeniyi Jones. Ikeja Lagos state. Come with an updated copy of your CV. Warm regards, Mrs Bella 08169294074 HR UNIT</p>",
    createdAt: "2019-02-28 15:19:03",
    updatedAt: "2019-02-28 15:19:03",
    title: "Address confirmation",
    
    inviteId: "2d268cab-c149-4a26-9ff5-79484aa885d3"
  },
  {
    userId: "f38e6e4b-06b1-443f-8ddf-8412e1b1bfb3",
    body:
      '<p><br></p><p>After a background check of your CV, you are hereby invited for an interview at one of the selected centers in Lagos on Friday 1st March 2019.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify"><strong>Venue:</strong>&nbsp;<a href="https://maps.google.com/?q=Number+2,+Akin+Osiyemi+street&amp;entry=gmail&amp;source=g" target="_blank" style="color: blue;">Number 2, Akin Osiyemi Street</a>, First Bank Bus Stop, Opposite Sterling Bank, Allen Avenue, Ikeja Lagos.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify"><strong>Time:</strong>&nbsp;10am</p><p class="ql-align-justify"><br></p><p class="ql-align-justify">Kindly come with a printed copy of this invitation, your writing materials; a pen, notebook and a print out of your updated CV as you will not be allowed in without it.</p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><br></p><p class="ql-align-justify">Note that the invitation is a response to the application/CV you submitted which we are handling on behalf of our client and you can recourse to us if you did not apply for such position for us to manage your records properly.</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify">Best Regards,</p><p class="ql-align-justify">Uni Consult.</p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><strong>Note:</strong>&nbsp;You would meet with the Deputy Managing Director, Head of Human Resources of our client after the oral assessment for proper evaluation. Pls, is this real?</p>',
    createdAt: "2019-03-02 08:16:55",
    updatedAt: "2019-03-02 08:16:55",
    title: "Odunlabi",
    
    inviteId: "41448fbc-2a17-42de-bae4-cf3e1d414169"
  },
  {
    userId: "3b24bfd1-9856-4548-b47b-5f4dbcf988d9",
    body:
      '<p><img src="https://ci6.googleusercontent.com/proxy/pLSYpj0x58wyul7x_ASq4FbYSK9vXDGN9s7T3c7igt0hZpotOfwuDYsULZQdVVkeZ7PHnqv4vpmGOPUC6stg7UpZ-Oaf2vFT3jxTxk316bQxW3GC9ci7ElK0WD3dZRes4ZFOx2qQjweZtAyNeQHuia1reHbQ-LC7uYEWRXtmgjSP9JwVob7Z4TpoYn7DIvcxyn6LnvAPuEYg_kOB2IaMeh9ynRbu4Xs8PmskNV2NhlYVAoYOUjh_YfFXRVS5nlZqHjTNTqElFoi4Bvh2wnDZjx-Oth4ur0IbqJx48PIKdNCH_VgkzSurxL3m6jHQosWNaqHnceTtYnahNIjmoP8Rh_6TCLEHAOUmU9hcFbuCtBBlx_kFGBY=s0-d-e1-ft#https://m.indeedemail.com/emailpixel.gif?info=YsRSQYLYPQ3bN0zjp_4Wd1zl4EWLzUhfjkGGgao3gFLPpb2WoSz4kOH-Wx5vnH91V8l5cVV-qpdWK6G3boMRIps9r9Osxc7k5nsjZpNUnir5wlQ_i3aULmwJaUi3BmriHtczdKYjydfNwcVj3z5jIHs-bxn_j3YOgwiEOw7Emu86S0TQM1zvfH0XgBenuXpSUnNBpasuqP_mVIV2Fjep">I need an answer please,  us this real? </p><p>Dear Candidate,</p><p>We are impressed by your background, you have been recommended for a JOB BRIEFING which has been scheduled for Tuesday, 5th March&nbsp;&nbsp;2019, the interview&nbsp;will start at exactly 9:00am</p><p>VENUE: 3RD FLOOR, CROWNET PLAZA, IDRIS GIDADO STREET, WUYE, ABUJA.</p><p>We look forward to meeting you.</p><p>For proper documentation and easy access print out this mail.</p><p>Two(2) passport photograph</p><p>Writing materials</p><p>If there is any query please feel free to write to us.</p><p>REGARDS</p><p>REF NO: LSR/513/FCT</p>',
    createdAt: "2019-03-04 23:36:33",
    updatedAt: "2019-03-04 23:36:33",
    title: "Job invite",
    
    inviteId: "0abc587d-cf9d-4a6d-a540-83abbedf0ba2"
  },
  {
    userId: "ce4c4635-665b-4f05-a9b9-dc7ef27faf95",
    body:
      "<p>Isthisarealjob? </p><p>Dear Applicant,</p><p><br></p><p>After a background check of your CV, you are hereby invited for an interview at one of our selected centers in Lagos on FRIDAY 15th of March 2019.</p><p><br></p><p>Venue: Number&nbsp;6, Remilekun Street, off&nbsp;Ogunlana Drive, Surulere&nbsp;Lagos.</p><p><br></p><p>Time: 9am</p><p><br></p><p>Kindly come with a printed copy of this invitation, a pen and a print out of your CV as you will not be allowed in without it.</p><p><br></p><p>Note that the invitation is a response to the Application/CV you submitted which we are handling on behalf of our client and you can recourse to us if you did not apply for such position for us to manage your record properly.</p><p><br></p><p>Best Regards,</p><p><br></p><p>Recruitment Team</p><p><br></p><p>MATRIXGLOVER INTERNATIONAL</p><p><br></p><p>NOTE: You will meet with the Deputy Managing Director, Head Human Resources of our client after this oral assessment for proper evaluation.</p><p><br></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>",
    createdAt: "2019-03-14 02:20:38",
    updatedAt: "2019-03-14 02:20:38",
    title: "Isthisarealjob",
    
    inviteId: "ffa84567-61de-4bb0-82b1-fa819c7e0bea"
  },
  {
    userId: "61f9010a-d94f-48fd-8497-722bfe81bbb7",
    body:
      "<p><br></p><p>Good evening,  pls I got this text tonight and I want to confirm if it's real</p><p>Thanks!</p><p><br></p><p><br></p><p>HR APPROVED! You are invited for an Interview with Board of Directors Tomorow Sat 30/3/19 by 9am at 32 Olufemi Rd by Lawanson B/Stop SuruLere Lagos. Ref:PTL/MT</p>",
    createdAt: "2019-03-29 23:10:31",
    updatedAt: "2019-03-29 23:10:31",
    title: "Interview",
    
    inviteId: "f99f4686-fe71-4fb8-859d-a81ee77fe7ef"
  },
  {
    userId: "8813c8c6-f70a-4c87-9a37-efef1bf4327f",
    body:
      "<p><br></p><p>Your application as (Customer Service ) has been officially&nbsp;received by us.</p><p>&nbsp;&nbsp;&nbsp;You are hereby invited for recruitment session with our Human&nbsp;resource Team.</p><p>Your assessment will determine if you are fit for a JOB OFFER.</p><p>Find details below:</p><p>&nbsp;&nbsp;&nbsp;Date: Tuesday 28/05/2019</p><p>&nbsp;&nbsp;&nbsp;Venue: Chemline Building 2nd gate, Obasa Street, off Forte</p><p>&nbsp;&nbsp;&nbsp;Oil Filling&nbsp;Station, Oba Akran Avenue, Ikeja, Lagos.</p><p>&nbsp;&nbsp;&nbsp;Time: 9.00am</p><p>&nbsp;&nbsp;&nbsp;Kindly respond to this email and confirm your availability with your full name and phone number attached.</p><p>&nbsp;&nbsp;&nbsp;Come with a copy of your CV and a print out of this invite to gain&nbsp;Access.</p><p>Best Regards,</p><p>&nbsp;&nbsp;&nbsp;HR Jerry</p><p>&nbsp;&nbsp;&nbsp;08115757035</p>",
    createdAt: "2019-05-24 12:41:16",
    updatedAt: "2019-05-24 12:41:16",
    title: "Pls is this legit",
    
    inviteId: "cc1b295f-e70c-4b02-bafd-e2a40c6b052f"
  },
  {
    userId: "8226e023-abba-45dc-bc6e-2768ae288632",
    body:
      "<p>please, is this legit </p><p><br></p><p>Hello Hassan Motunrayo Kafilat,\r\n\r\n\r\n Your application has been approved. You have been slated for an interview session with the Human Resource Team. Your performance will determine if you will be selected.\r\n \r\n Date: Monday, 3rd JUNE, 2019 by 9:00am\r\n Venue: Gate II, Chemline Building, 7 Obasa Street, Oba Akran Avenue, Ikeja, Lagos.\r\n \r\n Print your CV and this Email message\r\n\r\n HR JOHNSON\r\n TEL:08032769959\r\n www.rs-consulting.com,ng</p><p><br></p><p>Got this from RS consulting services</p>",
    createdAt: "2019-06-01 14:47:26",
    updatedAt: "2019-06-01 14:48:56",
    title: "Is this legit please",
    
    inviteId: "39d32390-9a12-43a1-a9df-cd87d4729d1e"
  },
  {
    userId: "9b7a1eca-9152-4206-a082-f78220b6464c",
    body:
      "<p>Dear SALAMI,</p><p><br></p><p>Sequel to your CV submitted, I am pleased to inform you that we received and reviewed your application along side with other applicants. However, We found your résumé quite interesting, and have decided to invite you for a Brief Chat which you are been scheduled for Friday, 28th June 2019, time is 10am Prompt.</p><p><br></p><p>Hence, the venue is at the company's Ikeja office; Schemelink Properties Limited, 76 Mobolaji Bank Anthony way, Ikeja Lagos, (Lagos Local Govt Cooperative Complex) by Ikeja Plaza.</p><p><br></p><p>You are advised to come with two copies of your resume. We hope you do not find the notice short. Very importantly, acknowledge the receipt of this email and confirm your availability, cheers! </p><p><br></p><p>Regards,</p><p>Ruth Tolu</p><p><br></p><p>07015186066</p>",
    createdAt: "2019-06-27 22:11:26",
    updatedAt: "2019-06-27 22:11:26",
    title: "Please is this real",
    
    inviteId: "7236bc5d-cbbe-4a12-948a-a22e64b0a51b"
  },
  {
    userId: "b7b52c29-b89b-47a5-a4e5-c514563fffa9",
    body:
      "<p>HR HEAD INVITES YOU FOR A CHAT WITH BOARD OF DIRECTORS ON MONDAY 15/7/2019 9AM@1ST FLOOR 32, OLUFEMI RD BY LAWANSON, SURULERE, LAGOS. UBT/1</p><p>SHOW TO SECURITY.</p><p><br></p><p>please is this real interview invite?</p>",
    createdAt: "2019-07-14 13:34:43",
    updatedAt: "2019-07-14 13:34:43",
    title: "Graduate Engineer",
    
    inviteId: "cdb811aa-d01e-4836-b8e5-d37bde1ad644"
  },
  {
    userId: "51b0b606-148d-4b44-a04a-449ca78dfd61",
    body:
      "<p>Please is this real?</p><p><br></p><p>WE ARE PLEASED TO INVITE YOU FOR AN INTERVIEW WITH MAG GLOBAL LTD THUR 01-08-2019, 9AM&nbsp;@GMG LTD, 8A BISI OGABI ST, BALOGUN B/STOP, IKEJA, LAGOS. HR- Miss Osayi.O</p>",
    createdAt: "2019-07-31 19:53:34",
    updatedAt: "2019-07-31 19:53:34",
    title: "Funmi",
    
    inviteId: "0c10db57-706b-4f10-a2f8-90f23412b504"
  },
  {
    userId: "51b0b606-148d-4b44-a04a-449ca78dfd61",
    body:
      "<p>Please is this real?</p><p><br></p><p>WE ARE PLEASED TO INVITE YOU FOR AN INTERVIEW WITH MAG GLOBAL LTD THUR 01-08-2019, 9AM&nbsp;@GMG LTD, 8A BISI OGABI ST, BALOGUN B/STOP, IKEJA, LAGOS. HR- Miss Osayi.O</p>",
    createdAt: "2019-07-31 19:53:57",
    updatedAt: "2019-07-31 19:53:57",
    title: "Funmi",
    
    inviteId: "9cf5549e-cb97-4388-9323-1f99c6467e8a"
  },
  {
    userId: "51b0b606-148d-4b44-a04a-449ca78dfd61",
    body:
      "<p>Please is this real?</p><p><br></p><p>WE ARE PLEASED TO INVITE YOU FOR AN INTERVIEW WITH MAG GLOBAL LTD THUR 01-08-2019, 9AM&nbsp;@GMG LTD, 8A BISI OGABI ST, BALOGUN B/STOP, IKEJA, LAGOS. HR- Miss Osayi.O</p>",
    createdAt: "2019-07-31 19:54:14",
    updatedAt: "2019-07-31 19:54:14",
    title: "Funmi",
    
    inviteId: "6a5c111e-bc8e-4a6c-992f-8143b8527c99"
  },
  {
    userId: "51b0b606-148d-4b44-a04a-449ca78dfd61",
    body:
      "<p>Please is this real?</p><p><br></p><p>WE ARE PLEASED TO INVITE YOU FOR AN INTERVIEW WITH MAG GLOBAL LTD THUR 01-08-2019, 9AM&nbsp;@GMG LTD, 8A BISI OGABI ST, BALOGUN B/STOP, IKEJA, LAGOS. HR- Miss Osayi.O</p>",
    createdAt: "2019-07-31 19:54:15",
    updatedAt: "2019-07-31 19:54:15",
    title: "Funmi",
    
    inviteId: "406b4f74-0001-405b-942e-e1a139a515ba"
  },
  {
    userId: "b2396203-8ba6-4850-a914-2c0b4ebdfd64",
    body: "<p>\r\n</p><p><br></p>",
    createdAt: "2019-10-13 10:04:33",
    updatedAt: "2019-10-13 10:08:33",
    title: "Please is this real? From Synergy Line Inc",
    
    inviteId: "6c67857b-5812-417e-a00f-f6dbe2968745"
  },
  {
    userId: "b2396203-8ba6-4850-a914-2c0b4ebdfd64",
    body: "<p>\r\n</p><p><br></p>",
    createdAt: "2019-10-13 10:05:11",
    updatedAt: "2019-10-13 10:06:41",
    title: "Please is this real? From Synergy Line Inc",
    
    inviteId: "44aa3c5b-3b67-4511-9281-6fe8f40fe649"
  },
  {
    userId: "a40c0e9d-4e2d-438c-9a50-39f36e592f69",
    body: "<p>Hmm, there there</p>",
    createdAt: "2019-10-21 17:32:45",
    updatedAt: "2019-10-21 17:32:45",
    title: "Pancakes?",
    
    inviteId: "335980d7-850b-4d43-a2a6-9f9e922d54b6"
  }
];
inviteArr.forEach((invite)=>{
  return invite.body = removeTags(invite.body)
})
export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Invites", inviteArr,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Invites', null, {});
  }
};
