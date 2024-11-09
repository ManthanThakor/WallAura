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

      // Wrap the image in a link that triggers lightbox
      var imgLink = $("<a>")
        .attr("href", image.src)
        .attr("data-lightbox", "wallpapers")
        .attr("data-title", image.alt);

      var img = $("<img>")
        .attr("src", image.src)
        .attr("alt", image.alt)
        .addClass("img-sec");
      // Add hover buttons for download and embed copy
      var hoverOverlay = $(`
    <div class="hover-overlay">
      <button class="download-btn"><i class="fa-solid fa-download" id="img-download"></i></button>
      <button class="embed-btn"><i class="fa-solid fa-code" id="img-code-copy"></i></button>
    </div>
  `);

      hoverOverlay.find(".download-btn").on("click", function () {
        // Show the notification before downloading
        showPopupNotification("Download started!");

        // Create a temporary <a> element to force download
        var link = document.createElement("a");
        link.href = image.src;
        link.download = image.alt || "downloaded-image";

        // Set the download attribute to force the browser to download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Simulate "Download completed" notification after a delay
        setTimeout(function () {
          showPopupNotification("Download completed!");
        }, 2000); // Adjust delay time as needed
      });

      function showPopupNotification(message) {
        var popup = $("#popup-notification");
        popup.text(message).removeClass("hidden").addClass("show");

        // Hide the popup after 3 seconds
        setTimeout(function () {
          popup.removeClass("show").addClass("hidden");
        }, 3000);
      }

      hoverOverlay.find(".embed-btn").on("click", function () {
        var embedCode = `<img src="${image.src}" alt="${image.alt}" />`;
        navigator.clipboard.writeText(embedCode).then(
          function () {
            showPopupNotification("Embed code copied to clipboard!");
          },
          function () {
            showPopupNotification("Failed to copy embed code.");
          }
        );
      });
      // Append the image and hover overlay to the link, then the link to the image item
      imgLink.append(img);
      imageItem.append(imgLink).append(hoverOverlay);
      imageGrid.append(imageItem);
    });
    lightGallery(document.getElementById("image-grid"), {
      selector: ".image-item a",
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
