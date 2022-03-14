var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","IMG_5090.HEIC", "IMG_5091.HEIC" , "IMG_5089.HEIC", "IMG_4414.HEIC", "IMG_4930.HEIC"];
var names = ["Family Book","Kannan Raj", "Vasantha Kannan", "Jc Kannan", "Yuvethi Kannan", "Nala"];
var i = 0;

function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
