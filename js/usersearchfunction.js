require([
  'js/jquery.js',
  'js/lunr.js',
], function (_, lunr) {
document.getElementById("searchsubmit").addEventListener("click" , function() {
  if (document.getElementById("searchtext").value) {
    $('#startsearchtext').hide();
  }
  else {
    $('#startsearchtext').show();
  }

  var query = document.getElementById("searchtext").value;
  var result1 = idx.search(query)[0];
  var result2 = idx.search(query)[1];
  var result3 = idx.search(query)[2];
  var result4 = idx.search(query)[3];
  var result5 = idx.search(query)[4];
  var result6 = idx.search(query)[5];

if (result1 === undefined) {
  result1title = "";
  result1body = "";
  result1video = "";
}
else {
switch (result1.ref) {

  case 1:
  result1title = "SmsDome";
  result1video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/U7KWRJQ9yuQ" frameborder="0" allowfullscreen></iframe><br>';
  result1body = "SmsDome is a mobile marketing solutions company that provides the platform and tools to create and execute successful mobile marketing initiatives.";
  break;

  case 2:
  result1title = "Visenze";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/visenze.jpg"></img>';
  result1body = "ViSenze is a Singapore-based startup providing visual search and visual image recognition for e-commerce and contextual advertising.";
  break;

  case 3:
  result1title = "Vault Dragon";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/vaultdragon.jpg"></img>';
  result1body = "Dubbed as the Dropbox for physical items, Vault Dragon offers a comprehensive storage solution. They deliver free storage boxes to the customers, and collect the boxes once the items are packed. The boxes are stored securely until the customers request for a return.";
  break;

  case 4:
  result1title = "Goodrich Global";
  result1video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/BOD6CA_s820" frameborder="0" allowfullscreen></iframe>';
  result1body = "Established in 1983, the Goodrich Global brand has grown to become synonymous with trend-setting wallcoverings. It offers an extensive collection of interior wallcoverings, carpets, fabrics and floorings and boasts a strong presence throughout the region, with over 30 regional offices and Goodrich Galleries located throughout 7 countries.";
  break;

  case 5:
  result1title = "CAD-IT";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cadit.jpg"></img>';
  result1body = "Providing world-class solutions, CAD-IT is a leading global certified Product Life Cycle Management (PLM), manufacturing and education provider.";
  break;

  case 6:
  result1title = "Charles & Keith";
  result1video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/yRAbKtGpfkg" frameborder="0" allowfullscreen></iframe>';
  result1body = "Founded by brothers Charles and Keith in 1996, Charles & Keith is a Singaporean fast fashion brand that draws inspiration from the runway to produce fashion forward footwear and accessories.";
  break;

  case 7:
  result1title = "Clariti Hearing";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/clariti.jpg"></img>';
  result1body = "Clariti focuses on the improvement of their customers’ quality of life through better hearing. A one-stop solution provider for all hearing needs, they prescribe only the premium hearing aid brands with the latest technologies.";
  break;

  case 8:
  result1title = "Cordlife";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cordlife.jpg"></img>';
  result1body = "With over 14 years of quality cord blood and tissue banking, Cordlife has grown from a full fledge start-up company in Singapore to a consumer healthcare group across Asia.";
  break;

  case 9:
  result1title = "Ecovis";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/ecovis.jpg"></img>';
  result1body = "Ranked the 18th largest international accounting firm in the world, Ecovis is a leading global consulting firm with its origins in Continental Europe.";
  break;

  case 10:
  result1title = "EtonHouse";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/etonhouse.jpg"></img>';
  result1body = "Headquartered in Singapore with more than 100 international schools and pre-schools, EtonHouse offers an inquiry-based program where children are encouraged to become critical thinkers and lifelong learners.";
  break;

  case 11:
  result1title = "Infinium Robotics";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/infiniumrobotics.jpg"></img>';
  result1body = "Infinium Robotics specializes in providing intelligent and autonomous solutions in Robotics and Unmanned Aerial Systems (UAS) for commercial applications across industries.";
  break;

  case 12:
  result1title = "Pacific-Tec Scientific";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pacifictec.jpg"></img>';
  result1body = "A major distributor of handheld scientific instruments in Radiation Testing and Non Destructive Testing, Pacific-Tec hopes to be the radiation industry standard in the region.";
  break;

  case 13:
  result1title = "PDS International";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pds.jpg"></img>';
  result1body = "PDS International specializes in the distribution, design, development and manufacture of innovative PPE (Personal Protective Equipment) products for both Asians and European counterparts.";
  break;

  case 14:
  result1title = "Playnation";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/playnation.jpg"></img>';
  result1body = "Founded with the vision of creating a cosy and comfortable place for youngsters to play, bond and socialize, Playnation has grown to be a leading company with over 200 designer board and card games and more than 100 handpicked console game titles.";
  break;

  case 15:
  result1title = "Rigel";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/rigel.jpg"></img>';
  result1body = "Rigel forges ahead with eco-friendly bathroom solutions, helping to create a more sustainable future with efficient resource management.";
  break;

  case 16:
  result1title = "Sunseap";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/sunseap.jpg"></img>';
  result1body = "One of the largest and most established in South East Asia Pacific, Sunseap has been in the sustainable energy business for over 3 decades, delivering bankable solar energy solutions.";
  break;

  case 17:
  result1title = "Webnatics";
  result1video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/webnatics.jpg"></img>';
  result1body = "The leading Google AdWords Premier SMB Partner, Webnatics help to ensure success and ROI for digital and search marketing campaigns.";
  break;

  default:
  result1="";
  break;
}
}

if (result2 === undefined) {
  result2title = "";
  result2body = "";
  result2video = "";
}
else {
switch (result2.ref) {

  case 1:
  result2title = "SmsDome";
  result2video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/U7KWRJQ9yuQ" frameborder="0" allowfullscreen></iframe><br>';
  result2body = "SmsDome is a mobile marketing solutions company that provides the platform and tools to create and execute successful mobile marketing initiatives.";
  break;

  case 2:
  result2title = "Visenze";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/visenze.jpg"></img>';
  result2body = "ViSenze is a Singapore-based startup providing visual search and visual image recognition for e-commerce and contextual advertising.";
  break;

  case 3:
  result2title = "Vault Dragon";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/vaultdragon.jpg"></img>';
  result2body = "Dubbed as the Dropbox for physical items, Vault Dragon offers a comprehensive storage solution. They deliver free storage boxes to the customers, and collect the boxes once the items are packed. The boxes are stored securely until the customers request for a return.";
  break;

  case 4:
  result2title = "Goodrich Global";
  result2video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/BOD6CA_s820" frameborder="0" allowfullscreen></iframe>';
  result2body = "Established in 1983, the Goodrich Global brand has grown to become synonymous with trend-setting wallcoverings. It offers an extensive collection of interior wallcoverings, carpets, fabrics and floorings and boasts a strong presence throughout the region, with over 30 regional offices and Goodrich Galleries located throughout 7 countries.";
  break;

  case 5:
  result2title = "CAD-IT";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cadit.jpg"></img>';
  result2body = "Providing world-class solutions, CAD-IT is a leading global certified Product Life Cycle Management (PLM), manufacturing and education provider.";
  break;

  case 6:
  result2title = "Charles & Keith";
  result2video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/yRAbKtGpfkg" frameborder="0" allowfullscreen></iframe>';
  result2body = "Founded by brothers Charles and Keith in 1996, Charles & Keith is a Singaporean fast fashion brand that draws inspiration from the runway to produce fashion forward footwear and accessories.";
  break;

  case 7:
  result2title = "Clariti Hearing";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/clariti.jpg"></img>';
  result2body = "Clariti focuses on the improvement of their customers’ quality of life through better hearing. A one-stop solution provider for all hearing needs, they prescribe only the premium hearing aid brands with the latest technologies.";
  break;

  case 8:
  result2title = "Cordlife";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cordlife.jpg"></img>';
  result2body = "With over 14 years of quality cord blood and tissue banking, Cordlife has grown from a full fledge start-up company in Singapore to a consumer healthcare group across Asia.";
  break;

  case 9:
  result2title = "Ecovis";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/ecovis.jpg"></img>';
  result2body = "Ranked the 18th largest international accounting firm in the world, Ecovis is a leading global consulting firm with its origins in Continental Europe.";
  break;

  case 10:
  result2title = "EtonHouse";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/etonhouse.jpg"></img>';
  result2body = "Headquartered in Singapore with more than 100 international schools and pre-schools, EtonHouse offers an inquiry-based program where children are encouraged to become critical thinkers and lifelong learners.";
  break;

  case 11:
  result2title = "Infinium Robotics";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/infiniumrobotics.jpg"></img>';
  result2body = "Infinium Robotics specializes in providing intelligent and autonomous solutions in Robotics and Unmanned Aerial Systems (UAS) for commercial applications across industries.";
  break;

  case 12:
  result2title = "Pacific-Tec Scientific";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pacifictec.jpg"></img>';
  result2body = "A major distributor of handheld scientific instruments in Radiation Testing and Non Destructive Testing, Pacific-Tec hopes to be the radiation industry standard in the region.";
  break;

  case 13:
  result2title = "PDS International";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pds.jpg"></img>';
  result2body = "PDS International specializes in the distribution, design, development and manufacture of innovative PPE (Personal Protective Equipment) products for both Asians and European counterparts.";
  break;

  case 14:
  result2title = "Playnation";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/playnation.jpg"></img>';
  result2body = "Founded with the vision of creating a cosy and comfortable place for youngsters to play, bond and socialize, Playnation has grown to be a leading company with over 200 designer board and card games and more than 100 handpicked console game titles.";
  break;

  case 15:
  result2title = "Rigel";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/rigel.jpg"></img>';
  result2body = "Rigel forges ahead with eco-friendly bathroom solutions, helping to create a more sustainable future with efficient resource management.";
  break;

  case 16:
  result2title = "Sunseap";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/sunseap.jpg"></img>';
  result2body = "One of the largest and most established in South East Asia Pacific, Sunseap has been in the sustainable energy business for over 3 decades, delivering bankable solar energy solutions.";
  break;

  case 17:
  result2title = "Webnatics";
  result2video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/webnatics.jpg"></img>';
  result2body = "The leading Google AdWords Premier SMB Partner, Webnatics help to ensure success and ROI for digital and search marketing campaigns.";
  break;

  default:
  result2="";
  break;
}
}

if (result3 === undefined) {
  result3title = "";
  result3body = "";
  result3video = "";
}
else {
switch (result3.ref) {

  case 1:
  result3title = "SmsDome";
  result3video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/U7KWRJQ9yuQ" frameborder="0" allowfullscreen></iframe><br>';
  result3body = "SmsDome is a mobile marketing solutions company that provides the platform and tools to create and execute successful mobile marketing initiatives.";
  break;

  case 2:
  result3title = "Visenze";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/visenze.jpg"></img>';
  result3body = "ViSenze is a Singapore-based startup providing visual search and visual image recognition for e-commerce and contextual advertising.";
  break;

  case 3:
  result3title = "Vault Dragon";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/vaultdragon.jpg"></img>';
  result3body = "Dubbed as the Dropbox for physical items, Vault Dragon offers a comprehensive storage solution. They deliver free storage boxes to the customers, and collect the boxes once the items are packed. The boxes are stored securely until the customers request for a return.";
  break;

  case 4:
  result3title = "Goodrich Global";
  result3video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/BOD6CA_s820" frameborder="0" allowfullscreen></iframe>';
  result3body = "Established in 1983, the Goodrich Global brand has grown to become synonymous with trend-setting wallcoverings. It offers an extensive collection of interior wallcoverings, carpets, fabrics and floorings and boasts a strong presence throughout the region, with over 30 regional offices and Goodrich Galleries located throughout 7 countries.";
  break;

  case 5:
  result3title = "CAD-IT";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cadit.jpg"></img>';
  result3body = "Providing world-class solutions, CAD-IT is a leading global certified Product Life Cycle Management (PLM), manufacturing and education provider.";
  break;

  case 6:
  result3title = "Charles & Keith";
  result3video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/yRAbKtGpfkg" frameborder="0" allowfullscreen></iframe>';
  result3body = "Founded by brothers Charles and Keith in 1996, Charles & Keith is a Singaporean fast fashion brand that draws inspiration from the runway to produce fashion forward footwear and accessories.";
  break;

  case 7:
  result3title = "Clariti Hearing";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/clariti.jpg"></img>';
  result3body = "Clariti focuses on the improvement of their customers’ quality of life through better hearing. A one-stop solution provider for all hearing needs, they prescribe only the premium hearing aid brands with the latest technologies.";
  break;

  case 8:
  result3title = "Cordlife";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cordlife.jpg"></img>';
  result3body = "With over 14 years of quality cord blood and tissue banking, Cordlife has grown from a full fledge start-up company in Singapore to a consumer healthcare group across Asia.";
  break;

  case 9:
  result3title = "Ecovis";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/ecovis.jpg"></img>';
  result3body = "Ranked the 18th largest international accounting firm in the world, Ecovis is a leading global consulting firm with its origins in Continental Europe.";
  break;

  case 10:
  result3title = "EtonHouse";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/etonhouse.jpg"></img>';
  result3body = "Headquartered in Singapore with more than 100 international schools and pre-schools, EtonHouse offers an inquiry-based program where children are encouraged to become critical thinkers and lifelong learners.";
  break;

  case 11:
  result3title = "Infinium Robotics";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/infiniumrobotics.jpg"></img>';
  result3body = "Infinium Robotics specializes in providing intelligent and autonomous solutions in Robotics and Unmanned Aerial Systems (UAS) for commercial applications across industries.";
  break;

  case 12:
  result3title = "Pacific-Tec Scientific";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pacifictec.jpg"></img>';
  result3body = "A major distributor of handheld scientific instruments in Radiation Testing and Non Destructive Testing, Pacific-Tec hopes to be the radiation industry standard in the region.";
  break;

  case 13:
  result3title = "PDS International";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pds.jpg"></img>';
  result3body = "PDS International specializes in the distribution, design, development and manufacture of innovative PPE (Personal Protective Equipment) products for both Asians and European counterparts.";
  break;

  case 14:
  result3title = "Playnation";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/playnation.jpg"></img>';
  result3body = "Founded with the vision of creating a cosy and comfortable place for youngsters to play, bond and socialize, Playnation has grown to be a leading company with over 200 designer board and card games and more than 100 handpicked console game titles.";
  break;

  case 15:
  result3title = "Rigel";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/rigel.jpg"></img>';
  result3body = "Rigel forges ahead with eco-friendly bathroom solutions, helping to create a more sustainable future with efficient resource management.";
  break;

  case 16:
  result3title = "Sunseap";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/sunseap.jpg"></img>';
  result3body = "One of the largest and most established in South East Asia Pacific, Sunseap has been in the sustainable energy business for over 3 decades, delivering bankable solar energy solutions.";
  break;

  case 17:
  result3title = "Webnatics";
  result3video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/webnatics.jpg"></img>';
  result3body = "The leading Google AdWords Premier SMB Partner, Webnatics help to ensure success and ROI for digital and search marketing campaigns.";
  break;

  default:
  result3="";
  break;
}
}

if (result4 === undefined) {
  result4title = "";
  result4body = "";
  result4video = "";
}
else {
switch (result4.ref) {

  case 1:
  result4title = "SmsDome";
  result4video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/U7KWRJQ9yuQ" frameborder="0" allowfullscreen></iframe><br>';
  result4body = "SmsDome is a mobile marketing solutions company that provides the platform and tools to create and execute successful mobile marketing initiatives.";
  break;

  case 2:
  result4title = "Visenze";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/visenze.jpg"></img>';
  result4body = "ViSenze is a Singapore-based startup providing visual search and visual image recognition for e-commerce and contextual advertising.";
  break;

  case 3:
  result4title = "Vault Dragon";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/vaultdragon.jpg"></img>';
  result4body = "Dubbed as the Dropbox for physical items, Vault Dragon offers a comprehensive storage solution. They deliver free storage boxes to the customers, and collect the boxes once the items are packed. The boxes are stored securely until the customers request for a return.";
  break;

  case 4:
  result4title = "Goodrich Global";
  result4video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/BOD6CA_s820" frameborder="0" allowfullscreen></iframe>';
  result4body = "Established in 1983, the Goodrich Global brand has grown to become synonymous with trend-setting wallcoverings. It offers an extensive collection of interior wallcoverings, carpets, fabrics and floorings and boasts a strong presence throughout the region, with over 30 regional offices and Goodrich Galleries located throughout 7 countries.";
  break;

  case 5:
  result4title = "CAD-IT";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cadit.jpg"></img>';
  result4body = "Providing world-class solutions, CAD-IT is a leading global certified Product Life Cycle Management (PLM), manufacturing and education provider.";
  break;

  case 6:
  result4title = "Charles & Keith";
  result4video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/yRAbKtGpfkg" frameborder="0" allowfullscreen></iframe>';
  result4body = "Founded by brothers Charles and Keith in 1996, Charles & Keith is a Singaporean fast fashion brand that draws inspiration from the runway to produce fashion forward footwear and accessories.";
  break;

  case 7:
  result4title = "Clariti Hearing";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/clariti.jpg"></img>';
  result4body = "Clariti focuses on the improvement of their customers’ quality of life through better hearing. A one-stop solution provider for all hearing needs, they prescribe only the premium hearing aid brands with the latest technologies.";
  break;

  case 8:
  result4title = "Cordlife";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cordlife.jpg"></img>';
  result4body = "With over 14 years of quality cord blood and tissue banking, Cordlife has grown from a full fledge start-up company in Singapore to a consumer healthcare group across Asia.";
  break;

  case 9:
  result4title = "Ecovis";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/ecovis.jpg"></img>';
  result4body = "Ranked the 18th largest international accounting firm in the world, Ecovis is a leading global consulting firm with its origins in Continental Europe.";
  break;

  case 10:
  result4title = "EtonHouse";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/etonhouse.jpg"></img>';
  result4body = "Headquartered in Singapore with more than 100 international schools and pre-schools, EtonHouse offers an inquiry-based program where children are encouraged to become critical thinkers and lifelong learners.";
  break;

  case 11:
  result4title = "Infinium Robotics";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/infiniumrobotics.jpg"></img>';
  result4body = "Infinium Robotics specializes in providing intelligent and autonomous solutions in Robotics and Unmanned Aerial Systems (UAS) for commercial applications across industries.";
  break;

  case 12:
  result4title = "Pacific-Tec Scientific";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pacifictec.jpg"></img>';
  result4body = "A major distributor of handheld scientific instruments in Radiation Testing and Non Destructive Testing, Pacific-Tec hopes to be the radiation industry standard in the region.";
  break;

  case 13:
  result4title = "PDS International";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pds.jpg"></img>';
  result4body = "PDS International specializes in the distribution, design, development and manufacture of innovative PPE (Personal Protective Equipment) products for both Asians and European counterparts.";
  break;

  case 14:
  result4title = "Playnation";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/playnation.jpg"></img>';
  result4body = "Founded with the vision of creating a cosy and comfortable place for youngsters to play, bond and socialize, Playnation has grown to be a leading company with over 200 designer board and card games and more than 100 handpicked console game titles.";
  break;

  case 15:
  result4title = "Rigel";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/rigel.jpg"></img>';
  result4body = "Rigel forges ahead with eco-friendly bathroom solutions, helping to create a more sustainable future with efficient resource management.";
  break;

  case 16:
  result4title = "Sunseap";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/sunseap.jpg"></img>';
  result4body = "One of the largest and most established in South East Asia Pacific, Sunseap has been in the sustainable energy business for over 3 decades, delivering bankable solar energy solutions.";
  break;

  case 17:
  result4title = "Webnatics";
  result4video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/webnatics.jpg"></img>';
  result4body = "The leading Google AdWords Premier SMB Partner, Webnatics help to ensure success and ROI for digital and search marketing campaigns.";
  break;

  default:
  result4="";
  break;
}
}

if (result5 === undefined) {
  result5title = "";
  result5body = "";
  result5video = "";
}
else {
switch (result5.ref) {

  case 1:
  result5title = "SmsDome";
  result5video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/U7KWRJQ9yuQ" frameborder="0" allowfullscreen></iframe><br>';
  result5body = "SmsDome is a mobile marketing solutions company that provides the platform and tools to create and execute successful mobile marketing initiatives.";
  break;

  case 2:
  result5title = "Visenze";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/visenze.jpg"></img>';
  result5body = "ViSenze is a Singapore-based startup providing visual search and visual image recognition for e-commerce and contextual advertising.";
  break;

  case 3:
  result5title = "Vault Dragon";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/vaultdragon.jpg"></img>';
  result5body = "Dubbed as the Dropbox for physical items, Vault Dragon offers a comprehensive storage solution. They deliver free storage boxes to the customers, and collect the boxes once the items are packed. The boxes are stored securely until the customers request for a return.";
  break;

  case 4:
  result5title = "Goodrich Global";
  result5video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/BOD6CA_s820" frameborder="0" allowfullscreen></iframe>';
  result5body = "Established in 1983, the Goodrich Global brand has grown to become synonymous with trend-setting wallcoverings. It offers an extensive collection of interior wallcoverings, carpets, fabrics and floorings and boasts a strong presence throughout the region, with over 30 regional offices and Goodrich Galleries located throughout 7 countries.";
  break;

  case 5:
  result5title = "CAD-IT";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cadit.jpg"></img>';
  result5body = "Providing world-class solutions, CAD-IT is a leading global certified Product Life Cycle Management (PLM), manufacturing and education provider.";
  break;

  case 6:
  result5title = "Charles & Keith";
  result5video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/yRAbKtGpfkg" frameborder="0" allowfullscreen></iframe>';
  result5body = "Founded by brothers Charles and Keith in 1996, Charles & Keith is a Singaporean fast fashion brand that draws inspiration from the runway to produce fashion forward footwear and accessories.";
  break;

  case 7:
  result5title = "Clariti Hearing";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/clariti.jpg"></img>';
  result5body = "Clariti focuses on the improvement of their customers’ quality of life through better hearing. A one-stop solution provider for all hearing needs, they prescribe only the premium hearing aid brands with the latest technologies.";
  break;

  case 8:
  result5title = "Cordlife";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cordlife.jpg"></img>';
  result5body = "With over 14 years of quality cord blood and tissue banking, Cordlife has grown from a full fledge start-up company in Singapore to a consumer healthcare group across Asia.";
  break;

  case 9:
  result5title = "Ecovis";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/ecovis.jpg"></img>';
  result5body = "Ranked the 18th largest international accounting firm in the world, Ecovis is a leading global consulting firm with its origins in Continental Europe.";
  break;

  case 10:
  result5title = "EtonHouse";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/etonhouse.jpg"></img>';
  result5body = "Headquartered in Singapore with more than 100 international schools and pre-schools, EtonHouse offers an inquiry-based program where children are encouraged to become critical thinkers and lifelong learners.";
  break;

  case 11:
  result5title = "Infinium Robotics";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/infiniumrobotics.jpg"></img>';
  result5body = "Infinium Robotics specializes in providing intelligent and autonomous solutions in Robotics and Unmanned Aerial Systems (UAS) for commercial applications across industries.";
  break;

  case 12:
  result5title = "Pacific-Tec Scientific";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pacifictec.jpg"></img>';
  result5body = "A major distributor of handheld scientific instruments in Radiation Testing and Non Destructive Testing, Pacific-Tec hopes to be the radiation industry standard in the region.";
  break;

  case 13:
  result5title = "PDS International";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pds.jpg"></img>';
  result5body = "PDS International specializes in the distribution, design, development and manufacture of innovative PPE (Personal Protective Equipment) products for both Asians and European counterparts.";
  break;

  case 14:
  result5title = "Playnation";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/playnation.jpg"></img>';
  result5body = "Founded with the vision of creating a cosy and comfortable place for youngsters to play, bond and socialize, Playnation has grown to be a leading company with over 200 designer board and card games and more than 100 handpicked console game titles.";
  break;

  case 15:
  result5title = "Rigel";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/rigel.jpg"></img>';
  result5body = "Rigel forges ahead with eco-friendly bathroom solutions, helping to create a more sustainable future with efficient resource management.";
  break;

  case 16:
  result5title = "Sunseap";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/sunseap.jpg"></img>';
  result5body = "One of the largest and most established in South East Asia Pacific, Sunseap has been in the sustainable energy business for over 3 decades, delivering bankable solar energy solutions.";
  break;

  case 17:
  result5title = "Webnatics";
  result5video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/webnatics.jpg"></img>';
  result5body = "The leading Google AdWords Premier SMB Partner, Webnatics help to ensure success and ROI for digital and search marketing campaigns.";
  break;

  default:
  result5="";
  break;
}
}

if (result6 === undefined) {
  result6title = "";
  result6body = "";
  result6video = "";
}
else {
switch (result6.ref) {

  case 1:
  result6title = "SmsDome";
  result6video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/U7KWRJQ9yuQ" frameborder="0" allowfullscreen></iframe><br>';
  result6body = "SmsDome is a mobile marketing solutions company that provides the platform and tools to create and execute successful mobile marketing initiatives.";
  break;

  case 2:
  result6title = "Visenze";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/visenze.jpg"></img>';
  result6body = "ViSenze is a Singapore-based startup providing visual search and visual image recognition for e-commerce and contextual advertising.";
  break;

  case 3:
  result6title = "Vault Dragon";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/vaultdragon.jpg"></img>';
  result6body = "Dubbed as the Dropbox for physical items, Vault Dragon offers a comprehensive storage solution. They deliver free storage boxes to the customers, and collect the boxes once the items are packed. The boxes are stored securely until the customers request for a return.";
  break;

  case 4:
  result6title = "Goodrich Global";
  result6video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/BOD6CA_s820" frameborder="0" allowfullscreen></iframe>';
  result6body = "Established in 1983, the Goodrich Global brand has grown to become synonymous with trend-setting wallcoverings. It offers an extensive collection of interior wallcoverings, carpets, fabrics and floorings and boasts a strong presence throughout the region, with over 30 regional offices and Goodrich Galleries located throughout 7 countries.";
  break;

  case 5:
  result6title = "CAD-IT";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cadit.jpg"></img>';
  result6body = "Providing world-class solutions, CAD-IT is a leading global certified Product Life Cycle Management (PLM), manufacturing and education provider.";
  break;

  case 6:
  result6title = "Charles & Keith";
  result6video = '<iframe style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="https://www.youtube.com/embed/yRAbKtGpfkg" frameborder="0" allowfullscreen></iframe>';
  result6body = "Founded by brothers Charles and Keith in 1996, Charles & Keith is a Singaporean fast fashion brand that draws inspiration from the runway to produce fashion forward footwear and accessories.";
  break;

  case 7:
  result6title = "Clariti Hearing";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/clariti.jpg"></img>';
  result6body = "Clariti focuses on the improvement of their customers’ quality of life through better hearing. A one-stop solution provider for all hearing needs, they prescribe only the premium hearing aid brands with the latest technologies.";
  break;

  case 8:
  result6title = "Cordlife";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/cordlife.jpg"></img>';
  result6body = "With over 14 years of quality cord blood and tissue banking, Cordlife has grown from a full fledge start-up company in Singapore to a consumer healthcare group across Asia.";
  break;

  case 9:
  result6title = "Ecovis";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/ecovis.jpg"></img>';
  result6body = "Ranked the 18th largest international accounting firm in the world, Ecovis is a leading global consulting firm with its origins in Continental Europe.";
  break;

  case 10:
  result6title = "EtonHouse";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/etonhouse.jpg"></img>';
  result6body = "Headquartered in Singapore with more than 100 international schools and pre-schools, EtonHouse offers an inquiry-based program where children are encouraged to become critical thinkers and lifelong learners.";
  break;

  case 11:
  result6title = "Infinium Robotics";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/infiniumrobotics.jpg"></img>';
  result6body = "Infinium Robotics specializes in providing intelligent and autonomous solutions in Robotics and Unmanned Aerial Systems (UAS) for commercial applications across industries.";
  break;

  case 12:
  result6title = "Pacific-Tec Scientific";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pacifictec.jpg"></img>';
  result6body = "A major distributor of handheld scientific instruments in Radiation Testing and Non Destructive Testing, Pacific-Tec hopes to be the radiation industry standard in the region.";
  break;

  case 13:
  result6title = "PDS International";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/pds.jpg"></img>';
  result6body = "PDS International specializes in the distribution, design, development and manufacture of innovative PPE (Personal Protective Equipment) products for both Asians and European counterparts.";
  break;

  case 14:
  result6title = "Playnation";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/playnation.jpg"></img>';
  result6body = "Founded with the vision of creating a cosy and comfortable place for youngsters to play, bond and socialize, Playnation has grown to be a leading company with over 200 designer board and card games and more than 100 handpicked console game titles.";
  break;

  case 15:
  result6title = "Rigel";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/rigel.jpg"></img>';
  result6body = "Rigel forges ahead with eco-friendly bathroom solutions, helping to create a more sustainable future with efficient resource management.";
  break;

  case 16:
  result6title = "Sunseap";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/sunseap.jpg"></img>';
  result6body = "One of the largest and most established in South East Asia Pacific, Sunseap has been in the sustainable energy business for over 3 decades, delivering bankable solar energy solutions.";
  break;

  case 17:
  result6title = "Webnatics";
  result6video = '<img style="border-top: solid; border-top-color: #ff4848;" width="400" height="250" src="img/temp/webnatics.jpg"></img>';
  result6body = "The leading Google AdWords Premier SMB Partner, Webnatics help to ensure success and ROI for digital and search marketing campaigns.";
  break;

  default:
  result6="";
  break;
}
}

  $('#result1title').html(result1title);
  $('#result1body').html(result1body);
  $('#result1video').html(result1video);

  $('#result2title').html(result2title);
  $('#result2body').html(result2body);
  $('#result2video').html(result2video);

  $('#result3title').html(result3title);
  $('#result3body').html(result3body);
  $('#result3video').html(result3video);

  $('#result4title').html(result4title);
  $('#result4body').html(result4body);
  $('#result4video').html(result4video);

  $('#result5title').html(result5title);
  $('#result5body').html(result5body);
  $('#result5video').html(result5video);

  $('#result6title').html(result6title);
  $('#result6body').html(result6body);
  $('#result6video').html(result6video);

  console.log(idx.search(query)[0]);
  console.log(idx.search(query)[1]);
  console.log(idx.search(query)[2]);
  console.log(idx.search(query)[3]);
  console.log(idx.search(query)[4]);
  console.log(idx.search(query)[5]);
});

var idx = lunr(function () {
    this.field('title', { boost: 10 });
    this.field('body', { boost: 5 });
    this.field('industry', { boost: 8 });
});

var smsdome = {
    "title": "SmsDome",
    "body": "SmsDome is a mobile marketing solutions company that provides the platform and tools to create and execute successful mobile marketing initiatives.",
    "industry": "Communications Technology SMS Texting Messaging Phone Mobile Message",
    "id": 1
};

var visenze = {
    "title": "Visenze Dragon",
    "body": "ViSenze is a Singapore-based startup providing visual search and visual image recognition for e-commerce and contextual advertising.",
    "industry": "Digital Media Technology Image Recognition SMS",
    "id": 2
};

var vault = {
    "title": "Vault Dragon",
    "body": "Dubbed as the Dropbox for physical items, Vault Dragon offers a comprehensive storage solution. They deliver free storage boxes to the customers, and collect the boxes once the items are packed. They are stored securely until the customers request for a return.",
    "industry": "Logistics Packing Move Pack Dropbox Storage",
    "id": 3
};

var goodrich = {
    "title": "Goodrich Global",
    "body": "Established in 1983, the Goodrich Global brand has grown to become synonymous with trend-setting wallcoverings. It offers an extensive collection of interior wallcoverings, carpets, fabrics and floorings and boasts a strong presence throughout the region, with over 30 regional offices and Goodrich Galleries located throughout 7 countries.",
    "industry": "Interior Design Wall Covering Architecture Home International",
    "id": 4
};

var cadit = {
    "title": "CAD-IT",
    "body": "Providing world-class solutions, CAD-IT is a leading global certified Product Life Cycle Management (PLM), manufacturing and education provider.",
    "industry": "Product Life Cycle Management Solutions",
    "id": 5
};

var ck = {
    "title": "Charles & Keith",
    "body": "Founded by brothers Charles and Keith in 1996, Charles & Keith is a Singaporean fast fashion brand that draws inspiration from the runway to produce fashion forward footwear and accessories.",
    "industry": "Fast Fashion Branding Clothes Clothing Footwear Shoes Accessories Design",
    "id": 6
};

var clariti = {
    "title": "Clariti Hearing",
    "body": "Clariti focuses on the improvement of their customers’ quality of life through better hearing. A one-stop solution provider for all hearing needs, they prescribe only the premium hearing aid brands with the latest technologies.",
    "industry": "Medical Devices Technology Hearing Aid Care Health",
    "id": 7
};

var cordlife = {
    "title": "Cordlife",
    "body": "With over 14 years of quality cord blood and tissue banking, Cordlife has grown from a full fledge start-up company in Singapore to a consumer healthcare group across Asia.",
    "industry": "Medical Devices Technology Cord Blood Tissue Banking Aid Care Health",
    "id": 8
};

var ecovis = {
    "title": "Ecovis",
    "body": "Ranked the 18th largest international accounting firm in the world, Ecovis is a leading global consulting firm with its origins in Continental Europe.",
    "industry": "Accounting Business Consulting Firm International",
    "id": 9
};

var etonhouse = {
    "title": "EtonHouse",
    "body": "Headquartered in Singapore with more than 100 international schools and pre-schools, EtonHouse offers an inquiry-based program where children are encouraged to become critical thinkers and lifelong learners.",
    "industry": "Education Pre School Children Teaching International",
    "id": 10
};

var infinium = {
    "title": "Infinium Robotics",
    "body": "Infinium Robotics specializes in providing intelligent and autonomous solutions in Robotics and Unmanned Aerial Systems (UAS) for commercial applications across industries.",
    "industry": "Technology Robotics Aerial Systems Intelligent Autonomous",
    "id": 11
};

var pacific = {
    "title": "Pacific-Tec Scientific",
    "body": "A major distributor of handheld scientific instruments in Radiation Testing and Non Destructive Testing, Pacific-Tec hopes to be the radiation industry standard in the region.",
    "industry": "Technology scientific radiation testing",
    "id": 12
};

var pds = {
    "title": "PDS International",
    "body": "PDS International specializes in the distribution, design, development and manufacture of innovative PPE (Personal Protective Equipment) products for both Asians and European counterparts.",
    "industry": "personal protective equipment distribution design development manufacturing",
    "id": 13
};

var playnation = {
    "title": "Playnation",
    "body": "Founded with the vision of creating a cosy and comfortable place for youngsters to play, bond and socialize, Playnation has grown to be a leading company with over 200 designer board and card games and more than 100 handpicked console game titles.",
    "industry": "youth young play board games socialize bond",
    "id": 14
};

var rigel = {
    "title": "Rigel",
    "body": "Rigel forges ahead with eco-friendly bathroom solutions, helping to create a more sustainable future with efficient resource management.",
    "industry": "eco friendly bathroom sustainable resource management future",
    "id": 15
};

var sunseap = {
    "title": "Sunseap",
    "body": "One of the largest and most established in South East Asia Pacific, Sunseap has been in the sustainable energy business for over 3 decades, delivering bankable solar energy solutions.",
    "industry": "eco friendly sustainable resource management future green technology energy",
    "id": 16
};

var webnatics = {
    "title": "Webnatics",
    "body": "The leading Google AdWords Premier SMB Partner, Webnatics help to ensure success and ROI for digital and search marketing campaigns.",
    "industry": "digital search marketing google adwords technology",
    "id": 17
};

idx.add(smsdome);
idx.add(visenze);
idx.add(vault);
idx.add(goodrich);
idx.add(ck);
idx.add(clariti);
idx.add(cordlife);
idx.add(ecovis);
idx.add(etonhouse);
idx.add(infinium);
idx.add(pacific);
idx.add(pds);
idx.add(playnation);
idx.add(rigel);
idx.add(sunseap);
idx.add(webnatics);

var query = "";
idx.search(query)[0]={};
idx.search(query)[1]={};


}); //end RequireJS
