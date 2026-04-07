export interface City {
  slug: string;
  name: string;
  county: "lorain" | "cuyahoga";
  population: string;
  description: string;
  courts: string[];
  nearbyHospitals: string[];
  localInfo: string;
}

export interface County {
  slug: string;
  name: string;
  description: string;
  courtInfo: string;
  cities: string[];
  population: string;
}

export const cities: City[] = [
  // Lorain County
  {
    slug: "lorain",
    name: "Lorain",
    county: "lorain",
    population: "65,000",
    description: "Lorain is a historic port city on Lake Erie and the county seat of Lorain County. With its industrial heritage and diverse community, residents face unique personal injury challenges from workplace accidents to maritime incidents.",
    courts: ["Lorain County Court of Common Pleas", "Lorain Municipal Court"],
    nearbyHospitals: ["Mercy Health - Lorain Hospital", "UH Elyria Medical Center"],
    localInfo: "Lorain's history as a steel town means many residents have worked in heavy industry. Our firm has extensive experience with workplace injuries, industrial accidents, and occupational disease claims affecting Lorain workers."
  },
  {
    slug: "elyria",
    name: "Elyria",
    county: "lorain",
    population: "52,000",
    description: "Elyria, the county seat of Lorain County, sits at the fork of the Black River. As a growing suburban community with significant retail and healthcare sectors, Elyria residents need experienced legal representation for various personal injury matters.",
    courts: ["Lorain County Court of Common Pleas", "Elyria Municipal Court"],
    nearbyHospitals: ["UH Elyria Medical Center", "Mercy Health - Lorain Hospital"],
    localInfo: "Elyria's mix of historic neighborhoods and commercial corridors along Broad Street and Cleveland Street sees significant traffic. We frequently handle car accidents, slip-and-fall incidents at retail establishments, and workplace injuries from the city's manufacturing and healthcare employers."
  },
  {
    slug: "avon",
    name: "Avon",
    county: "lorain",
    population: "25,000",
    description: "Avon is one of the fastest-growing communities in Lorain County, known for its excellent schools and retail development including the popular Avon Commons shopping area. The rapid growth brings increased traffic and construction-related injury risks.",
    courts: ["Lorain County Court of Common Pleas", "Avon Lake Municipal Court"],
    nearbyHospitals: ["UH Avon Health Center", "St. John Medical Center - Westlake"],
    localInfo: "Avon's explosive growth around SR-83 and I-90 has created busy traffic corridors. We represent Avon residents injured in accidents on major routes like Detroit Road and Jaycox Road, as well as incidents at retail centers and construction sites throughout this rapidly developing area."
  },
  {
    slug: "avon-lake",
    name: "Avon Lake",
    county: "lorain",
    population: "24,000",
    description: "Avon Lake is an affluent lakeside community along Lake Erie known for its excellent schools and high quality of life. The city's mix of residential areas and lakefront properties creates unique personal injury considerations.",
    courts: ["Lorain County Court of Common Pleas", "Avon Lake Municipal Court"],
    nearbyHospitals: ["UH Avon Health Center", "St. John Medical Center - Westlake"],
    localInfo: "Avon Lake's lakefront location means boating accidents and recreational injuries occur alongside typical suburban traffic incidents. We represent residents injured on Lake Erie, at Walker Road Park, and in accidents along Lake Road and other major corridors."
  },
  {
    slug: "north-ridgeville",
    name: "North Ridgeville",
    county: "lorain",
    population: "35,000",
    description: "North Ridgeville is the fastest-growing city in Lorain County, combining rural charm with suburban development. The rapid expansion along Center Ridge Road brings increased construction and traffic concerns.",
    courts: ["Lorain County Court of Common Pleas", "Elyria Municipal Court"],
    nearbyHospitals: ["UH Elyria Medical Center", "Mercy Health - Lorain Hospital"],
    localInfo: "North Ridgeville's growth has transformed the area around Center Ridge Road and SR-83 into a busy commercial corridor. We help residents injured in construction zones, shopping center accidents, and traffic incidents as this formerly rural community continues to develop."
  },
  {
    slug: "sheffield-lake",
    name: "Sheffield Lake",
    county: "lorain",
    population: "9,000",
    description: "Sheffield Lake is a small lakeside community offering affordable Lake Erie living. The city's industrial heritage and lakefront location create specific injury risks for residents.",
    courts: ["Lorain County Court of Common Pleas", "Sheffield Lake Municipal Court"],
    nearbyHospitals: ["Mercy Health - Lorain Hospital", "UH Elyria Medical Center"],
    localInfo: "Sheffield Lake's industrial history near the lakefront and its position along Lake Road creates unique risks. We represent residents in workplace injury cases, lake-related accidents, and traffic incidents along major corridors."
  },
  {
    slug: "amherst",
    name: "Amherst",
    county: "lorain",
    population: "12,000",
    description: "Amherst is a historic sandstone quarry town with a charming downtown and growing residential areas. The city's mix of historic properties and new development creates diverse personal injury scenarios.",
    courts: ["Lorain County Court of Common Pleas", "Elyria Municipal Court"],
    nearbyHospitals: ["UH Elyria Medical Center", "Mercy Health - Lorain Hospital"],
    localInfo: "Amherst's sandstone quarrying history and current sandstone architecture create unique premises liability concerns. We represent residents injured in historic buildings, at the quarry sites, and in traffic along State Route 58 and Cooper Foster Park Road."
  },
  {
    slug: "vermilion",
    name: "Vermilion",
    county: "lorain",
    population: "10,000",
    description: "Vermilion is a quaint harbor town known as the 'Village of Lake Captains' with a picturesque downtown and active boating community. The maritime heritage creates unique recreational and waterfront injury risks.",
    courts: ["Lorain County Court of Common Pleas", "Vermilion Municipal Court"],
    nearbyHospitals: ["Mercy Health - Lorain Hospital", "Firelands Regional Medical Center"],
    localInfo: "Vermilion's harbor and boat launch areas see frequent recreational injuries, while the historic downtown and Main Street corridor present typical pedestrian and traffic hazards. We help residents with boating accidents, harbor injuries, and downtown business incidents."
  },
  
  // Cuyahoga County - Cleveland Area
  {
    slug: "cleveland",
    name: "Cleveland",
    county: "cuyahoga",
    population: "372,000",
    description: "Cleveland is the largest city on Lake Erie and the economic and cultural heart of Northeast Ohio. The city's diverse neighborhoods, major medical centers, industrial facilities, and busy highways create complex personal injury scenarios requiring experienced legal representation.",
    courts: ["Cuyahoga County Court of Common Pleas", "Cleveland Municipal Court", "Cleveland Housing Court"],
    nearbyHospitals: ["Cleveland Clinic Main Campus", "University Hospitals Cleveland Medical Center", "MetroHealth Medical Center"],
    localInfo: "Cleveland's mix of industrial areas, major medical centers, busy highways (I-90, I-71, I-77, I-480), and diverse neighborhoods creates complex injury scenarios. We handle everything from downtown construction accidents, medical malpractice cases at world-renowned hospitals, industrial injuries, and accidents on Cleveland's busy freeway system."
  },
  {
    slug: "parma",
    name: "Parma",
    county: "cuyahoga",
    population: "81,000",
    description: "Parma is Cleveland's largest suburb, known for its strong Polish-American heritage and residential character. The city's busy commercial corridors along Ridge and Snow roads see significant traffic and retail activity.",
    courts: ["Cuyahoga County Court of Common Pleas", "Parma Municipal Court"],
    nearbyHospitals: ["University Hospitals Parma Medical Center", "Southwest General Health Center"],
    localInfo: "Parma's busy retail corridors along Ridge Road, Snow Road, and Brookpark Road generate significant traffic accidents. The city's industrial areas near I-480 also create workplace injury risks. We represent Parma residents in car accidents, retail slip-and-falls, and workplace injury cases."
  },
  {
    slug: "lakewood",
    name: "Lakewood",
    county: "cuyahoga",
    population: "50,000",
    description: "Lakewood is an inner-ring suburb with a dense, walkable urban character and the highest population density in Ohio. The city's mix of historic homes, busy retail on Detroit Avenue, and lakefront location create diverse injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Lakewood Municipal Court"],
    nearbyHospitals: ["Lakewood Hospital", "Fairview Hospital", "MetroHealth Medical Center"],
    localInfo: "Lakewood's urban density means pedestrian accidents, bicycle collisions, and busy street traffic along Detroit Avenue and Madison Avenue. The historic housing stock also creates premises liability issues. We handle pedestrian injuries, landlord-tenant injury cases, and accidents in this dense urban environment."
  },
  {
    slug: "strongsville",
    name: "Strongsville",
    county: "cuyahoga",
    population: "46,000",
    description: "Strongsville is a major retail and commercial hub in southern Cuyahoga County, centered around SouthPark Mall and the I-71/Royalton Road interchange. The heavy commercial activity generates significant traffic and shopping-related injuries.",
    courts: ["Cuyahoga County Court of Common Pleas", "Strongsville Municipal Court"],
    nearbyHospitals: ["Southwest General Health Center", "Fairview Hospital", "University Hospitals Parma Medical Center"],
    localInfo: "Strongsville's commercial dominance along Royalton Road and the I-71 corridor creates high traffic volumes and retail injury risks at SouthPark Mall and surrounding big-box stores. We frequently handle accidents on I-71, shopping center incidents, and injuries at the city's many retail and hospitality establishments."
  },
  {
    slug: "westlake",
    name: "Westlake",
    county: "cuyahoga",
    population: "34,000",
    description: "Westlake is an affluent suburb known for Crocker Park and high-end retail. The city's commercial success and busy I-90 corridor create significant traffic and premises liability concerns.",
    courts: ["Cuyahoga County Court of Common Pleas", "Westlake Municipal Court"],
    nearbyHospitals: ["St. John Medical Center - Westlake", "Fairview Hospital"],
    localInfo: "Westlake's premier shopping destination, Crocker Park, generates significant pedestrian and premises liability cases. The busy I-90 corridor and Detroit Road also see frequent traffic accidents. We represent clients injured at Crocker Park, in I-90 accidents, and at the city's many corporate campuses."
  },
  {
    slug: "brecksville",
    name: "Brecksville",
    county: "cuyahoga",
    population: "13,000",
    description: "Brecksville is an affluent community surrounded by the Cuyahoga Valley National Park. The city's natural setting and busy I-77 corridor create unique recreational and traffic injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Brecksville Mayor's Court"],
    nearbyHospitals: ["Akron General Medical Center", "University Hospitals Parma Medical Center"],
    localInfo: "Brecksville's proximity to the Cuyahoga Valley National Park means recreational injuries from hiking, biking, and skiing at Boston Mills/Brandywine. The I-77 corridor and Chippewa Road also generate traffic accidents. We help with recreational injuries, traffic accidents, and incidents at Brecksville's commercial areas."
  },
  {
    slug: "solon",
    name: "Solon",
    county: "cuyahoga",
    population: "24,000",
    description: "Solon is an affluent suburban community consistently ranked among the best places to live in Ohio. The city's business parks and residential character create professional and suburban injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Solon Mayor's Court"],
    nearbyHospitals: ["University Hospitals Ahuja Medical Center", "Hillcrest Hospital"],
    localInfo: "Solon's extensive business parks along Aurora Road and the US-422 corridor create workplace injury risks, while the affluent residential areas see typical suburban traffic incidents. We represent professionals injured in workplace accidents and residents in traffic incidents along major corridors."
  },
  {
    slug: "beachwood",
    name: "Beachwood",
    county: "cuyahoga",
    population: "12,000",
    description: "Beachwood is a premier shopping and medical destination in eastern Cuyahoga County. The city's high-end retail at Beachwood Place and proximity to major medical centers create specific injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Beachwood Mayor's Court"],
    nearbyHospitals: ["University Hospitals Ahuja Medical Center", "Hillcrest Hospital", "Cleveland Clinic Beachwood Family Health Center"],
    localInfo: "Beachwood's upscale retail at Beachwood Place and Legacy Village generates premises liability cases, while the city's medical facilities see medical malpractice matters. The I-271/Chagrin Boulevard interchange is also an accident hotspot. We handle shopping center incidents, medical cases, and traffic accidents in this commercial hub."
  },
  {
    slug: "shaker-heights",
    name: "Shaker Heights",
    county: "cuyahoga",
    population: "29,000",
    description: "Shaker Heights is a historic, planned suburb known for its distinctive architecture and excellent schools. The city's urban character and RTA rapid transit create unique pedestrian and traffic dynamics.",
    courts: ["Cuyahoga County Court of Common Pleas", "Shaker Heights Municipal Court"],
    nearbyHospitals: ["University Hospitals Ahuja Medical Center", "Hillcrest Hospital"],
    localInfo: "Shaker Heights' historic homes, tree-lined boulevards, and RTA Blue/Green Line create a unique urban-suburban environment. Van Aken District and Shaker Towne Center generate pedestrian activity, while Chagrin Boulevard sees significant traffic. We handle pedestrian accidents, historic property issues, and traffic incidents throughout this distinctive community."
  },
  {
    slug: "rocky-river",
    name: "Rocky River",
    county: "cuyahoga",
    population: "21,000",
    description: "Rocky River is an affluent lakefront suburb with a charming downtown and strong community feel. The city's lakefront location and historic Detroit Road corridor create diverse recreational and commercial injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Rocky River Municipal Court"],
    nearbyHospitals: ["Fairview Hospital", "St. John Medical Center - Westlake"],
    localInfo: "Rocky River's lakefront location at the mouth of the Rocky River creates boating and recreational injury risks, while the historic Detroit Road corridor and trendy Old Detroit shopping district generate pedestrian and premises liability cases. We represent residents in lake-related incidents, downtown business accidents, and traffic cases."
  },
  {
    slug: "bay-village",
    name: "Bay Village",
    county: "cuyahoga",
    population: "15,000",
    description: "Bay Village is a quiet, affluent lakefront community with excellent schools and a family-friendly atmosphere. The city's lakefront location and residential character create specific recreational and suburban injury concerns.",
    courts: ["Cuyahoga County Court of Common Pleas", "Bay Village Mayor's Court"],
    nearbyHospitals: ["Fairview Hospital", "St. John Medical Center - Westlake"],
    localInfo: "Bay Village's exclusive lakefront setting at Huntington Beach and the Lake Erie shoreline creates recreational injury risks from swimming, boating, and beach activities. The city's winding residential streets and busy Cahoon Road corridor also see traffic incidents. We handle recreational injuries, residential accidents, and suburban traffic cases."
  },
  {
    slug: "fairview-park",
    name: "Fairview Park",
    county: "cuyahoga",
    population: "17,000",
    description: "Fairview Park is a close-knit suburban community with convenient access to Cleveland and major retail. The city's location along Lorain Road and Westgate shopping area generate commercial and traffic activity.",
    courts: ["Cuyahoga County Court of Common Pleas", "Fairview Park Mayor's Court"],
    nearbyHospitals: ["Fairview Hospital", "St. John Medical Center - Westlake"],
    localInfo: "Fairview Park's Westgate Shopping Center and Lorain Road corridor create retail and traffic injury risks. The city's residential areas and parks also see typical suburban incidents. We represent residents injured in shopping center accidents, traffic on Lorain Road and I-90, and residential premises liability cases."
  },
  {
    slug: "north-olmsted",
    name: "North Olmsted",
    county: "cuyahoga",
    population: "32,000",
    description: "North Olmsted is a major retail hub in western Cuyahoga County, home to Great Northern Mall and extensive commercial development. The heavy commercial activity and busy I-480 corridor create significant injury risks.",
    courts: ["Cuyahoga County Court of Common Pleas", "North Olmsted Mayor's Court"],
    nearbyHospitals: ["Fairview Hospital", "St. John Medical Center - Westlake", "University Hospitals Parma Medical Center"],
    localInfo: "North Olmsted's Great Northern Mall and the massive retail corridor along Brookpark Road and Lorain Road generate significant shopping-related injuries and heavy traffic. The I-480/I-71 interchange is a major accident hotspot. We frequently handle retail premises liability, I-480 accidents, and shopping center incidents."
  },
  {
    slug: "olmsted-falls",
    name: "Olmsted Falls",
    county: "cuyahoga",
    population: "9,000",
    description: "Olmsted Falls is a charming historic village with a beautiful waterfall and quaint downtown. The city's historic character and growing residential areas create unique premises and suburban injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Olmsted Falls Mayor's Court"],
    nearbyHospitals: ["Fairview Hospital", "St. John Medical Center - Westlake"],
    localInfo: "Olmsted Falls' historic village center and popular Grand Pacific Junction shopping area see pedestrian and tourist activity. The scenic waterfalls and park areas also create recreational injury risks. We help residents and visitors with historic property incidents, recreational injuries, and suburban traffic accidents."
  },
  {
    slug: "berea",
    name: "Berea",
    county: "cuyahoga",
    population: "19,000",
    description: "Berea is known as the 'Grindstone City' for its sandstone quarrying history and is home to Baldwin Wallace University. The college town atmosphere and industrial heritage create diverse injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Berea Municipal Court"],
    nearbyHospitals: ["Southwest General Health Center", "Fairview Hospital"],
    localInfo: "Berea's college environment at Baldwin Wallace University creates premises liability and pedestrian concerns around campus. The historic sandstone quarries and industrial areas also present workplace hazards. We represent students, residents, and workers injured in this unique college-industrial community."
  },
  {
    slug: "middleburg-heights",
    name: "Middleburg Heights",
    county: "cuyahoga",
    population: "16,000",
    description: "Middleburg Heights is a suburban commercial center along the I-71 corridor, known for Southland Shopping Center and convenient location between Cleveland and Strongsville.",
    courts: ["Cuyahoga County Court of Common Pleas", "Middleburg Heights Mayor's Court"],
    nearbyHospitals: ["Southwest General Health Center", "Fairview Hospital"],
    localInfo: "Middleburg Heights' commercial focus along Pearl Road and the I-71 corridor generates retail and traffic injury risks. Southland Shopping Center and surrounding retail see significant customer traffic. We handle shopping center incidents, I-71 accidents, and commercial premises liability cases."
  },
  {
    slug: "brooklyn",
    name: "Brooklyn",
    county: "cuyahoga",
    population: "11,000",
    description: "Brooklyn is an inner-ring industrial suburb with a mix of manufacturing, distribution, and residential areas. The city's industrial character creates workplace injury risks alongside suburban traffic concerns.",
    courts: ["Cuyahoga County Court of Common Pleas", "Brooklyn Municipal Court"],
    nearbyHospitals: ["MetroHealth Medical Center", "Southwest General Health Center"],
    localInfo: "Brooklyn's industrial areas along I-480 and the Steel/T idewater areas create significant workplace injury risks in manufacturing and distribution. The residential areas along Ridge and State Roads see typical suburban traffic. We specialize in industrial workplace injuries and represent residents in traffic accidents."
  },
  {
    slug: "garfield-heights",
    name: "Garfield Heights",
    county: "cuyahoga",
    population: "28,000",
    description: "Garfield Heights is an inner-ring suburb with affordable housing and convenient access to downtown Cleveland. The city's diverse neighborhoods and commercial corridors create typical urban-suburban injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Garfield Heights Municipal Court"],
    nearbyHospitals: ["Marymount Hospital", "MetroHealth Medical Center"],
    localInfo: "Garfield Heights' location along Turney Road and Transportation Boulevard generates traffic and commercial activity. The city's mix of residential neighborhoods and industrial areas creates diverse injury scenarios. We represent residents in traffic accidents, workplace injuries, and premises liability cases throughout the community."
  },
  {
    slug: "maple-heights",
    name: "Maple Heights",
    county: "cuyahoga",
    population: "23,000",
    description: "Maple Heights is an inner-ring suburb with a strong community identity and convenient access to I-480. The city's residential character and commercial corridors along Northfield and Libby Roads see typical suburban activity.",
    courts: ["Cuyahoga County Court of Common Pleas", "Maple Heights Municipal Court"],
    nearbyHospitals: ["Marymount Hospital", "University Hospitals Bedford Medical Center", "South Pointe Hospital"],
    localInfo: "Maple Heights' location along I-480 and busy commercial corridors on Northfield and Libby Roads generates traffic and retail activity. We represent residents injured in traffic accidents on I-480, shopping incidents, and typical suburban injury cases."
  },
  {
    slug: "bedford",
    name: "Bedford",
    county: "cuyahoga",
    population: "13,000",
    description: "Bedford is a historic industrial suburb with a charming downtown and strong manufacturing heritage. The city's industrial areas and historic center create diverse workplace and commercial injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Bedford Municipal Court"],
    nearbyHospitals: ["University Hospitals Bedford Medical Center", "South Pointe Hospital"],
    localInfo: "Bedford's historic downtown and industrial heritage along Broadway Avenue and the I-271 corridor create workplace and traffic injury risks. The city's manufacturing facilities and busy retail corridors generate diverse injury scenarios. We handle workplace injuries, downtown business incidents, and traffic cases."
  },
  {
    slug: "bedford-heights",
    name: "Bedford Heights",
    county: "cuyahoga",
    population: "11,000",
    description: "Bedford Heights is a commercial and industrial hub along the I-271 and I-480 corridors. The city's business parks and distribution centers create significant workplace injury risks.",
    courts: ["Cuyahoga County Court of Common Pleas", "Bedford Heights Mayor's Court"],
    nearbyHospitals: ["University Hospitals Bedford Medical Center", "South Pointe Hospital", "Marymount Hospital"],
    localInfo: "Bedford Heights' concentration of warehouses, distribution centers, and business parks along I-271 and I-480 creates significant workplace injury risks. We specialize in industrial and distribution workplace accidents, as well as I-271/I-480 corridor traffic incidents."
  },
  {
    slug: "university-heights",
    name: "University Heights",
    county: "cuyahoga",
    population: "13,000",
    description: "University Heights is a residential community home to John Carroll University. The college town atmosphere and family-friendly neighborhoods create specific premises and pedestrian concerns.",
    courts: ["Cuyahoga County Court of Common Pleas", "University Heights Mayor's Court"],
    nearbyHospitals: ["University Hospitals Ahuja Medical Center", "Hillcrest Hospital", "South Pointe Hospital"],
    localInfo: "University Heights' college environment at John Carroll University and family neighborhoods create diverse injury scenarios. We represent students, faculty, and residents in campus incidents, residential accidents, and traffic cases along Cedar and Warrensville Center Roads."
  },
  {
    slug: "cleveland-heights",
    name: "Cleveland Heights",
    county: "cuyahoga",
    population: "45,000",
    description: "Cleveland Heights is a diverse, progressive inner-ring suburb with a vibrant Coventry Road district and beautiful historic homes. The city's urban character and pedestrian-friendly areas create unique injury dynamics.",
    courts: ["Cuyahoga County Court of Common Pleas", "Cleveland Heights Municipal Court"],
    nearbyHospitals: ["University Hospitals Ahuja Medical Center", "Hillcrest Hospital", "Cleveland Clinic South Pointe Hospital"],
    localInfo: "Cleveland Heights' walkable Coventry Road and Cedar-Fairmount districts generate significant pedestrian activity and premises liability cases. The historic housing stock and diverse neighborhoods also create unique residential injury scenarios. We handle pedestrian accidents, historic property issues, and urban traffic cases."
  },
  {
    slug: "south-euclid",
    name: "South Euclid",
    county: "cuyahoga",
    population: "22,000",
    description: "South Euclid is an inner-ring suburb with a mix of residential neighborhoods and the Notre Dame College campus. The city's diverse community and commercial corridors create typical suburban injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "South Euclid Municipal Court"],
    nearbyHospitals: ["University Hospitals Ahuja Medical Center", "Hillcrest Hospital"],
    localInfo: "South Euclid's residential neighborhoods and Notre Dame College create college-town and suburban injury dynamics. The city's commercial areas along Mayfield and Cedar Roads generate traffic and retail activity. We represent residents, students, and visitors in traffic accidents, campus incidents, and premises liability cases."
  },
  {
    slug: "lyndhurst",
    name: "Lyndhurst",
    county: "cuyahoga",
    population: "14,000",
    description: "Lyndhurst is an affluent eastern suburb along the I-271 corridor, known for Legacy Village and convenient shopping. The city's retail focus and residential character create commercial and suburban injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Lyndhurst Mayor's Court"],
    nearbyHospitals: ["Hillcrest Hospital", "University Hospitals Ahuja Medical Center", "South Pointe Hospital"],
    localInfo: "Lyndhurst's Legacy Village shopping center and commercial development along Mayfield Road generate retail and traffic injury risks. The residential neighborhoods see typical suburban incidents. We handle shopping center premises liability, I-271 accidents, and residential injury cases."
  },
  {
    slug: "mayfield-heights",
    name: "Mayfield Heights",
    county: "cuyahoga",
    population: "19,000",
    description: "Mayfield Heights is a commercial hub in eastern Cuyahoga County along the I-271 and US-322 corridors. The extensive retail and medical facilities create diverse injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Mayfield Heights Mayor's Court"],
    nearbyHospitals: ["Hillcrest Hospital", "Cleveland Clinic Hillcrest Cancer Center", "South Pointe Hospital"],
    localInfo: "Mayfield Heights' extensive medical facilities at Hillcrest Hospital and retail corridors along Mayfield Road and I-271 create medical malpractice risks, shopping injuries, and traffic accidents. We represent patients, shoppers, and residents in medical, retail, and traffic injury cases."
  },
  {
    slug: "highland-heights",
    name: "Highland Heights",
    county: "cuyahoga",
    population: "8,000",
    description: "Highland Heights is an affluent eastern suburb along I-271 with a mix of residential areas and the Notre Dame College edge. The suburban character creates typical residential and traffic injury scenarios.",
    courts: ["Cuyahoga County Court of Common Pleas", "Highland Heights Mayor's Court"],
    nearbyHospitals: ["Hillcrest Hospital", "University Hospitals Ahuja Medical Center"],
    localInfo: "Highland Heights' residential focus along I-271 and Wilson Mills Road generates suburban traffic patterns. The city's proximity to major medical centers also brings healthcare-related traffic. We handle residential premises liability and I-271 corridor traffic accidents."
  },
  {
    slug: "mentor",
    name: "Mentor",
    county: "cuyahoga",
    population: "47,000",
    description: "Mentor is the largest city in Lake County (neighboring Cuyahoga County area) and a major retail and medical hub serving the eastern suburbs. The extensive commercial activity and medical facilities create diverse injury risks.",
    courts: ["Lake County Court of Common Pleas", "Mentor Municipal Court"],
    nearbyHospitals: ["Lake Health Mentor Hospital", "Hillcrest Hospital", "UH Geauga Medical Center"],
    localInfo: "Mentor serves as a major retail and medical destination for eastern Cuyahoga County residents. The extensive shopping at Great Lakes Mall, Mentor Avenue retail, and Lake Health facilities generate shopping injuries, medical cases, and heavy traffic. We represent clients throughout the Mentor retail and medical corridor."
  }
];

export const counties: County[] = [
  {
    slug: "lorain",
    name: "Lorain County",
    description: "Lorain County sits along the shores of Lake Erie in Northeast Ohio, encompassing historic port cities, growing suburbs, and rural townships. The county's diverse communities from Lorain's industrial heritage to Avon's rapid suburban growth create a wide range of personal injury scenarios requiring experienced legal representation.",
    courtInfo: "Lorain County Court of Common Pleas is located at 225 Court Street, Elyria, OH 44035. The court handles all major civil cases including personal injury lawsuits with damages exceeding $15,000. Municipal courts in Elyria, Lorain, and Avon Lake handle smaller claims and traffic matters.",
    cities: ["Lorain", "Elyria", "Avon", "Avon Lake", "North Ridgeville", "Sheffield Lake", "Amherst", "Vermilion"],
    population: "315,000"
  },
  {
    slug: "cuyahoga",
    name: "Cuyahoga County",
    description: "Cuyahoga County is Ohio's second-most populous county and home to Cleveland, the economic and cultural hub of Northeast Ohio. From the dense urban neighborhoods of Cleveland to the affluent lakefront suburbs and growing southern communities, Cuyahoga County presents complex and diverse personal injury scenarios requiring sophisticated legal representation.",
    courtInfo: "Cuyahoga County Court of Common Pleas is located at 1200 Ontario Street, Cleveland, OH 44113. The court's General Division handles major personal injury cases with damages exceeding $15,000. Multiple municipal courts throughout the county handle smaller claims, traffic cases, and preliminary matters.",
    cities: ["Cleveland", "Parma", "Lakewood", "Strongsville", "Westlake", "Brecksville", "Solon", "Beachwood", "Shaker Heights", "Rocky River", "Bay Village", "Fairview Park", "North Olmsted", "Olmsted Falls", "Berea", "Middleburg Heights", "Brooklyn", "Garfield Heights", "Maple Heights", "Bedford", "Bedford Heights", "University Heights", "Cleveland Heights", "South Euclid", "Lyndhurst", "Mayfield Heights", "Highland Heights"],
    population: "1.26 million"
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getCountyBySlug(slug: string): County | undefined {
  return counties.find((county) => county.slug === slug);
}

export function getCitiesByCounty(countySlug: string): City[] {
  return cities.filter((city) => city.county === countySlug);
}
