$(document).ready(function () {
  var imagesData = [];

  $.getJSON("../wallpaper.json", function (data) {
    imagesData = data;
    renderImages(imagesData);
  });

  function renderImages(images) {
    var imageGrid = $("#image-grid");
    imageGrid.empty();

    images.forEach(function (image) {
      var imageItem = $("<div class='image-item'>");
      var columnSpan = image.columnSpan || 1;
      var rowSpan = image.rowSpan || 1;

      // Apply the grid span styles
      imageItem.css({
        "grid-column": "span " + columnSpan,
        "grid-row": "span " + rowSpan,
      });

      var img = $("<img>")
        .attr("src", image.src)
        .attr("alt", image.alt)
        .addClass("img-sec");

      imageItem.append(img);
      imageGrid.append(imageItem);
    });
  }

  $("#search-input").on("input", function () {
    var searchText = $(this).val().toLowerCase();
    var filteredImages = imagesData.filter(function (image) {
      return (
        image.title.toLowerCase().includes(searchText) ||
        image.description.toLowerCase().includes(searchText)
      );
    });
    renderImages(filteredImages);
  });

  $(".filter-group a").on("click", function (event) {
    event.preventDefault();

    $(".filter-group a").removeClass("active");
    $(this).addClass("active");

    var selectedCategory = $(this).data("category");
    var selectedLicense = $(this).data("license");
    var selectedAI = $(this).data("ai");

    var filteredImages = imagesData.filter(function (image) {
      if (selectedCategory && image.category !== selectedCategory) return false;

      if (selectedLicense && image.license !== selectedLicense) return false;

      if (selectedAI && image.aiGenerated !== selectedAI) return false;

      return true;
    });

    renderImages(filteredImages);
  });

  $("#clear-filters").on("click", function () {
    $("#search-input").val("");
    $(".filter-group a").removeClass("active");
    renderImages(imagesData);
  });
});
