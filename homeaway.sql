-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 09, 2018 at 09:09 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homeaway`
--

-- --------------------------------------------------------

--
-- Table structure for table `ownerdata`
--

CREATE TABLE `ownerdata` (
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ownerdata`
--

INSERT INTO `ownerdata` (`firstName`, `lastName`, `email`, `password`) VALUES
('Ranjith', 'Cheguri', 'cheguri@sjsu.edu', '$2a$10$dnFUA1/ihOAZ1MkGgyH4e.C82eTfb3MD6DKgTLUpMFwttXJOxrHbW'),
('Ranjith', 'Cheguri', 'rky@123.com', '$2a$10$w0PRSIQiTK1WuTGyDX7xfObneM8coxZgCr1Tfue0gL2RfuwT9D9Ka');

-- --------------------------------------------------------

--
-- Table structure for table `ownerprofile`
--

CREATE TABLE `ownerprofile` (
  `key` int(11) NOT NULL,
  `country` varchar(40) DEFAULT NULL,
  `street` varchar(40) DEFAULT NULL,
  `building` varchar(40) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(40) DEFAULT NULL,
  `zipcode` int(6) DEFAULT NULL,
  `headline` varchar(200) DEFAULT NULL,
  `description` varchar(20000) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `bedrooms` int(2) DEFAULT NULL,
  `accomodates` int(2) DEFAULT NULL,
  `bathrooms` int(2) DEFAULT NULL,
  `bookingoptions` tinyint(1) DEFAULT NULL,
  `photos` varchar(2000) DEFAULT NULL,
  `startdate` date DEFAULT NULL,
  `enddate` date DEFAULT NULL,
  `currency` varchar(10) DEFAULT NULL,
  `rent` int(10) DEFAULT NULL,
  `tax` int(5) DEFAULT NULL,
  `cleaningfee` int(10) DEFAULT NULL,
  `ownername` varchar(200) NOT NULL,
  `booked` int(20) NOT NULL,
  `bookedBy` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ownerprofile`
--

INSERT INTO `ownerprofile` (`key`, `country`, `street`, `building`, `city`, `state`, `zipcode`, `headline`, `description`, `type`, `bedrooms`, `accomodates`, `bathrooms`, `bookingoptions`, `photos`, `startdate`, `enddate`, `currency`, `rent`, `tax`, `cleaningfee`, `ownername`, `booked`, `bookedBy`) VALUES
(1, 'US', '351 LIANA WAY, APT 351,', '222', 'SAN JOSE', 'CA', 95126, 'Gorgeous Rose Garden Home ~ Minutes to Airport SAP', 'Take a step back in time with a relaxing stay in our comfortably remodeled 28 ft. vintage, 1977 Silver Streak travel trailer (NO it is not an Airstream). This beauty is tucked away on three oak tree covered acres. She sits with her covered picnic area and solar outdoor shower beckoning you to unwind and recharge. A few days stay at Streaking in the Oaks is the perfect chance to try satisfying your curiosity about camping without the bother of towing a camper/trailer or the hassles associated with hook up and set up.\n\nThe Streak has two regular length twin beds, a kitchen area with a refrigerator, microwave, hot plate, French press and electric tea kettle. Basic cooking necessities including dishes, wine glasses, coffee cups, and silverware are included. Coffee and tea are also provided. The Streak has been outfitted with a \"whisper quiet\" heat and a/c unit and normal size dual flush toilet. There is also an indoor shower if you prefer this to using the spacious, outdoor solar shower.\n\nAfter your day of exploring Wimberley and the Hill Country, the Silver Streak will provide a spacious outdoor area to have a picnic or BBQ steaks. This place will provide the treasured respite you have been searching for.', 'Hotel', 2, 3, 2, 0, '___image_1538369040953.jpg___image_1538369040960.jpg___image_1538369040983.jpg', '2018-09-07', '2018-09-13', '', 3200, 0, 0, 'rky@123.com', 1, 'rky@123.com'),
(2, 'US', '101 washington Square', '111', 'SAN JOSE', 'CALIFORNIA', 95196, 'Mediterranean Castle Fit For Kings & Queens With Pool, Spa, Sauna, And Views!', 'Single story Castle fit for Kings and Queens but made available for the common man with an innovative floorplans and luxury amenities abound at the Bel Aire Estates in the evergreen foothills. The Greenbriar Homes Communities properties have three-coat exterior stucco, hand-set stone and classic building materials. Bel Aire homes offer classic features such as extra-wide front porches, dramatic rotunda entries, bonus rooms, home offices and grand circular staircases. Set on very large and private lots. Restaurants, shopping, libraries and golf clubs are located very close to this phenomenal home. Downtown San Jose, San Francisco Bay Area major attractions are a quick drive away from your secluded and peaceful home away from home.\n\nOpportunity to stay in the rare Carnelian Heights Executive Home in Bel Aire Estates\n\n A distinctive side driveway with private gate welcomes your guest to this resort like executive home in the heart of Bel Aire Estates with a 21,212 Square manicured lot\n\nConvenient location to downtown San Jose, Silver Creek Golf Courses and Silver Creek Sports Complex.\n\nFlagstone front courtyard leads to an expansive rounded entry with an Old World custom wood door with center marble medallion and an overhead rotunda\n\nDining room has excellent front courtyard views with oversized French doors that open to this area\n\nThe living room is an excellent formal room for entertaining with a cathedral ceiling and a stylish gas fireplace with a custom mantel\n\nFamily Room View: Beautiful and recently refinished Brazilian cherry hardwood flooring throughout the main house provides sophistication and distinction to this estate new custom interior designer two­tone paint, custom lighting features, and upgraded Italian tile adorn this upgraded contemporary home\n\nExquisite remodeled epicurean kitchen with granite countertops, and stainless steel appliances, backsplash, an oversized center island, and a long breakfast bar side counter for casual family dining.\n\nButlers pantry/ wet bar area includes a long granite slab counter and maple cabinetry for extra storage\n\nExquisite master bath has polished marble floors and His & Her marble slab vanities and a make up station with double­ogee designed edges Master bathroom has a large sunken bathtub that is jetted and a separate seamless glass shower enclosure\n\n2nd Bedroom Suite: This bedroom has a comfortable queen size bed and is a large suite with excellent views and is connected to a separate bathroom with granite counters and a shower over a large bath tub.\n\n3rd bedroom suite: This bedroom has a comfortable queen size bed.\n\n3rd Bathroom: The third full bathroom is accessible to two bedrooms and has granite tile flooring, granite counters, and has a shower tub combination\n\nBedroom 3 : This bedroom has a comfortable queen size bed.\n\n2nd Full Bathroom: One bedroom is a large suite and is connected to this separate bathroom with granite counters and a shower over a large bath tub\n\nAll bedroom suites are large and spacious. All bedrooms have mountain and garden views. Each room has fantastic storage space with walk in or mirror sliding door closets\n\nMature trees, extensive flagstone patios and lush lawn outlines this magnificent yard. Beautiful swimming with spa to view the entire neighborhood and east valley mountain range. Outdoor sauna room with two showers with heated floor is just steps away from the pool. This California Resort yard is excellent for BBQs, dining, relaxing, entertaining, and enjoying fantastic family fun. Make this home the most memorable experience your family has ever experienced.\n\nPool has a safety net that can be put in place for when young children are present.', 'Hotel', 3, 12, 3, 0, '___image_1538642665734.jpg___image_1538642665740.jpg___image_1538642665745.jpg', '2018-10-10', '2018-10-15', '', 4100, 0, 0, 'rky@123.com', 1, 'rky@123.com'),
(3, 'US', '101 Washington Square', '101', 'SAN JOSE', 'CALIFORNIA', 95129, '  Santana Row Executive Luxury Condo - Silicon Valley - Levi\'s Stadium', 'HOT VIEWS Santana Row Executive Condo\nExperience luxury and solitude in this loft right on Santana Row, with easy access to shops and restaurants right below you. The Row has become a magnet for both locals and out-of-towners. It\'s the place to stay in SJ with it\'s chic European charm.\n\nChic loft/condo with endless upgrades in the Santana Row Margo building. Modern glass tile & custom paint throughout, upgraded bath with vessel sink. Plush queen platform bed offering a serene & private nights rest. Custom lighting hardware throughout and FREE dedicated underground parking space in secure garage below the building.\n\nLuxury flat is located in the most desirable area in Silicon Valley, Santana Row. \"The Row\" is an upscale residential, shopping, dining, and entertainment complex in San Jose, California. Everything is within walking distance. There is no need to drive.\n\nThe condominium is perfect for business travelers or family vacationers. The loft has a spacious queen bed with an in-suite full bathroom and closet.\n\nThe open floor plan includes full size kitchen and living room area. You\'ll have the entire unit all to yourself. If you need something larger than please look at listing www.vrbo.com/1296897\n\nThis high end loft has the amenities that you would expect from a world class vacation and executive corporate rental:\n\no Fully furnished luxury loft with large open floor plan. ~740 sq/ft\n\no 1 Queen size bed and full bathroom\n\no If you book for 3 people a Twin XL air mattress will be set-up upon your arrival.\n\no If you book for 4 people a Queen air mattress will be set-up upon your arrival.\n\no Complimentary Comcast Cable on a 65\" HDTV. On Demand is not included\n\no Complimentary High Speed Wi-Fi internet.\n\no One Complimentary assigned underground parking space. (Additional parking may be available at an additional cost. Please inquire if you need more than one spot)\n\no Complimentary coffee and tea.\n\no Business ready: Wifi, printer, and paper.\n\no Central heating / air conditioning\n\no Modern full size kitchen with granite counter tops and major appliances.\n\no In-unit washer and dryer\n\no Facing the Row for the best people watching spot you could ask for.\n\no No pets\n\no No smoking\n\no If time of booking is within 7 days of arrival date a government-issued ID will be required prior to check-in . This is due to recent fraud activity and for both our protection.\n\nThe neighborhood:\n\nSantana Row is an upscale outdoor shopping mall in the heart of San Jose. Santana Row offers a mix of brand name shops, local boutiques, twenty restaurants, nine spas and salons, CineArts movie theatre, and the boutique hotel Hotel Valencia. The shops range from luxury brands such as Gucci and Kate Spade to more casual brands like Diesel, H&M, Ann Taylor LOFT, and Urban Outfitters. Also on The Row include restaurants ranging from local concepts like Left Bank Brasserie and sister restaurant LB Steak, Pizza Antica, and Blowfish Sushi, to chains like The Counter, Maggiano\'s Little Italy, Pinkberry and a Yard House. The district is anchored by Crate & Barrel, Best Buy, The Container Store as well as Valley Fair Shopping Mall. Visit the Santana Row website for more info.\n\nSafeway (Grocery), CVS (Pharmacy), Bank of America, Chase Bank, Wells Fargo Bank, Winchester Mystery House, just to name a few places, are all within a 2 min walk from the unit.\n\nGetting around:\n\nConveniently location with easy access to highways 101, 880, highway 280, 17 and 87.\n\nMajor airports:\n\n• To SJC (San Jose Airport): 5.9 miles / around 13 min.\n\n• To OAK (Oakland International): 37.5 miles / around 43 min.\n\n• To SFO (San Francisco International): 37.9 miles / around 45 min.\n\nConvention Centers:\n\n• 3.7 Miles from San Jose Convention Center\n\n• 7.5 Miles from Santa Clara Convention Center\n\n• 3 Miles from SAP Center / HP Pavilion\n\n• 8.4 Miles from the brand new Levi\'s Stadium. Home of the 49\'ers.\n\nPublic transit in San Jose (and the entire South Bay portion of the Bay Area) is provided primarily by VTA, which operates bus and light-rail (modern streetcar) service. Caltrain also provides rail service throughout a portion of Santa Clara County. BART is also an option within the Bay Area.\n\nOther things to note:\n\nThis condo is very clean and kept up to date with no expense spared. The pictures reflect it\'s current state and there are no surprises. This loft is directly on Santana Row street above Kit & Ace and LuLulemon. From your window you can see Tesla Motors, Straits Cafe, Gucci, and Cocola Bakery. It\'s really the ultimate location if you are staying on Santana Row or San Jose.', 'House', 2, 3, 5, 0, '___image_1538965768466.jpg___image_1538965768473.jpg___image_1538965768475.jpg___image_1538965768479.jpg', '2018-10-01', '2018-10-10', 'USD', 4500, 25, 50, 'cheguri@sjsu.edu', 1, 'rky@123.com'),
(4, 'US', '351 LIANA WAY, APT 351,', '111', 'SAN JOSE', 'CA', 95126, 'Private Studio Urban Flat in San Jose by Cisco HQ - Studio Apartment, Sleeps 4', 'The Urban Flat experience was designed for modern business and leisure travelers seeking an alternative to traditional accommodations, where one may enjoy the comforts of a home, without the confinements of a hotel. Welcome Home.\n\nThe Space:\n\nType: Studio - Urban Flat\n\nLocation: San Jose, CA\n\nFlat Features: Fully-Equipped Kitchen + TV + Cable + WiFi + Washer & Dryer\n\nBuilding Amenities: Pool + Spa + Fitness Center + Parking Available\n\nNeighborhood Walk Score: 8\n\nTravel Time to SJC: 10\n\nTravel Time to SFO: 40\n\nTravel Time to San Francisco: 50\n\n*Flat Features*\n\n-Fully-Equipped Kitchen\n\n-In-Flat Washer + Dryer\n\n-High-Speed WiFi\n\n-HDTV + Cable + Bluetooth Sound System\n\n-Workspace Equipped\n\n-Parking Available @ $5/day\n\n-1 Queen Bed + 1 Queen Air-Mattress\n\n? Additional Bedding Included\n\n-Fresh Towels, Linens, & Essentials\n\n-Iron, Coffee Machine, Hair Dryer\n\n*Property Features*\n\n-Guest Pool & Spa\n\n-Multiple BBQ Grills\n\n-Fitness Center\n\n-Business Center\n\n-Common Areas\n\n-24/7 Security\n\nGuest Access:\n\nGuests of Urban Flat will have access to all building amenities.\n\n-Pool\n\n-Spa\n\n-Fitness Center\n\n-Business Center\n\n-Fire Pits\n\n-Lounge\n\nInteraction with Guests:\n\nWe\'re available 24/7 via Text | Email | Emergency Phone Line\n\n-Your Flat however, is 100% private and belongs to you while our guest.\n\nThe Neighborhood:\n\n*Area Highlights*\n\n-Located in the Heart of the Silicon Valley\n\n-Convenient Transport Links (Freeway + Caltrain)\n\n-To SJC: Est. 10 Minutes\n\n-To SFO: Est. 40 Minutes\n\n-To San Francisco, CA: Est. 50 Minutes\n\n-Walkable + Safe Neighborhood\n\n-Restaurants, Markets, Bars, Shopping - > 5 Minutes\n\nGetting Around:\n\nThis Flat Location is Uber/Lyft Accessible & Close to Major Transport Links\n\nOther Things to Note:\n\n- Stays of 30+ days cannot be booked more than 1-year in advance\n\n- Short-term stays are subject to a 30-day booking window in most cases\n\n- Flat may vary slightly in floorplan, furnishings, or view\n\n- No Onsite Luggage Storage\n\n- No Filming or Commercial Photo-shoots without written consent\n\n- Self Check-in Process\n\n*The Urban Flat Advantage*\n\n-Streamlined Self-Check-in Process\n\n-24/7 Guest Support\n\n-On-Demand Cleaning Available @ $79/per\n\n-100% Private Apartment\n\n*What’s Next*\n\nSubmit a Booking Request ? We’ll Accept & Confirm ? Self-Check-In Instructions Sent via Text & Email 24-hours Prior to Arrival ? Use Instructions to Access your Urban Flat ? Welcome Home.\n\nHouse Rules:\n\n• No smoking\n\n• No pets\n\n• Check-in is anytime after 4PM', 'Hotel', 1, 4, 2, 0, '___image_1538966336251.jpg___image_1538966336255.jpg___image_1538966336258.jpg', '2018-10-12', '2018-10-24', 'USD', 6500, 37, 77, 'rky@123.com', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `travelerdata`
--

CREATE TABLE `travelerdata` (
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `travelerdata`
--

INSERT INTO `travelerdata` (`firstName`, `lastName`, `email`, `password`) VALUES
('Ranjith', 'Cheguri', 'rky@123.com', '$2a$10$JKohVxO1IB8C1Pgx1up8nOw2pzW6j8tAyDkK94oYTtACJXgmf7IRa'),
('Ranjith', 'Cheguri', 'rky@sjsu.edu', '$2a$10$LiD6MigbZ8U2AnTV2VUkBOjxzn/ZR.unMKv.e7h0GD74VRBJvomg2');

-- --------------------------------------------------------

--
-- Table structure for table `viewprofile`
--

CREATE TABLE `viewprofile` (
  `profileId` int(11) NOT NULL,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `aboutme` varchar(2000) NOT NULL,
  `city` varchar(200) NOT NULL,
  `company` varchar(200) NOT NULL,
  `school` varchar(200) NOT NULL,
  `hometown` varchar(200) NOT NULL,
  `languages` varchar(200) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `phonenumber` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `viewprofile`
--

INSERT INTO `viewprofile` (`profileId`, `firstname`, `lastname`, `aboutme`, `city`, `company`, `school`, `hometown`, `languages`, `gender`, `phonenumber`, `email`) VALUES
(10, 'Ranjith Kumar', 'Cheguri', 'I Like cricket and 273 full stack dev class.', 'India', 'Accenture', 'San jose state university', 'Hyderabad', 'Telugu,Hindi,English', '', '8888111188', 'rky@123.com'),
(11, 'Ranjith', 'Cheguri', 'I like cricket and 273 web dev class.', 'India', 'Accenture', 'San jose state university', 'Hyderabad', 'Telugu,Hindi,English', 'Male', '8888111188', 'rky@sjsu.edu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ownerdata`
--
ALTER TABLE `ownerdata`
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `ownerprofile`
--
ALTER TABLE `ownerprofile`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `travelerdata`
--
ALTER TABLE `travelerdata`
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `viewprofile`
--
ALTER TABLE `viewprofile`
  ADD PRIMARY KEY (`profileId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ownerprofile`
--
ALTER TABLE `ownerprofile`
  MODIFY `key` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `viewprofile`
--
ALTER TABLE `viewprofile`
  MODIFY `profileId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
