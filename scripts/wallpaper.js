$(document).ready(function () {
  // Load images from JSON file
  $.getJSON("../wallpaper.json", function (data) {
    var imageGrid = $("#image-grid");

    console.log(data);

    data.forEach(function (image) {
      var imageItem = $("<div class='image-item'>");
      var img = $("<img>")
        .attr("src", image.src)
        .attr("alt", image.alt)
        .attr("width", image.width)
        .attr("height", image.height)
        .addClass("img-thumbnail");

      console.log(image.src, image.alt);

      console.log("Appending image:", image.src);

      // Append the image item to the grid
      imageItem.append(img);
      imageGrid.append(imageItem);
    });
  });
});
