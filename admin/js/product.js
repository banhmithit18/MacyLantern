window.addEventListener("DOMContentLoaded", (event) => {
  var product_image_delete = [];
  //init table
  var t = $("#table_product").DataTable({
    ajax: {
      url: "../controllers/product_controller.php?function=get_product",
      dataSrc: "",
    },
    rowId: "product_id",
    columns: [
      { data: null },
      { data: "product_name" },
      { data: "product_priority" },
      {
        data: "product_id",
        className: "dt-body-center",
        render: function (data, type, row, meta) {
          return (
            "<button id=image_" +
            data +
            ' class="btn btn-sm btn-outline-success btn_edit">View</button>'
          );
        },
      },
      {
        data: "product_id",
        className: "dt-body-center",
        render: function (data, type, row, meta) {
          return (
            "<button id=detail_" +
            data +
            ' class="btn btn-sm btn-outline-success btn_edit">View</button>'
          );
        },
      },
      {
        data: "product_status",
        className: "dt-body-center",
        render: function (data, type, row) {
          if (data == "1") {
            return '<span class="badge badge-success">Active</span>';
          } else if (data == "0") {
            return '<span class="badge badge-danger">Inactive</span>';
          }
        },
      },
      {
        data: "product_id",
        className: "dt-body-center",
        render: function (data, type, row) {
          return (
            "<button id=edit_" +
            data +
            ' class="btn btn-sm btn-outline-success btn_edit" data-toggle="modal" data-target="#modal-product">Edit</button>'
          );
        },
      },
    ],
    columnDefs: [
      {
        searchable: false,
        orderable: false,
        targets: 0,
      },
    ],

    order: [[1, "asc"]],
    ordering: false,
  });
  t.on("order.dt search.dt", function () {
    let i = 1;
    t.column(0, { search: "applied", order: "applied" })
      .nodes()
      .each(function (cell, i) {
        cell.innerHTML = i + 1;
        t.cell(cell).invalidate("dom");
      });
  }).draw();
  //get category
  $.ajax({
    type: "POST",
    url: "../controllers/category_controller.php",
    data: {
      function: "get_category",
    },
    success: function (data) {
      try {
        data = $.parseJSON(data);
        //add category to select
        $.each(data, function (index, value) {
          //check if status = 1 (active)
          if (value.category_status == 1) {
            $("#category_id").append(
              '<option value="' +
                value.category_id +
                '">' +
                value.category_name +
                "</option>"
            );
            $("#category_id_edit").append(
              '<option value="' +
                value.category_id +
                '">' +
                value.category_name +
                "</option>"
            );
          }
        });
      } catch (error) {
        $.alert({
          title: "Error",
          type: "red",
          typeAnimated: true,
          content: "Cannot get category, error: " + error,
        });
      }
    },
  });

  //add input if click add
  $("#add_input").click(function () {
    var input_count = $("#product_detail_count").val();
    var input_count_int = parseInt(input_count);
    var new_input_count = input_count_int + 1;
    $("#product_detail_count").val(new_input_count);
    $("#detail").append(
      '<div class="row" style="padding-top:10px" id="' +
        new_input_count +
        '"><div class="col-4">' +
        '<label for="name">Detail name</label>' +
        '<input class="form-control" id="product_detail_name_' +
        new_input_count +
        '" type="text" placeholder="Enter product detail name" required>' +
        "</div>" +
        '<div class="col-8">' +
        '<label for="name">Detail</label>' +
        '<input class="form-control" id="product_detail_value_' +
        new_input_count +
        '" type="text" placeholder="Enter product detail " required>' +
        "</div>" +
        "</div>"
    );
  });
  //delete last input detail
  $("#delete_input_edit").click(function () {
    var input_count = $("#product_detail_count_edit").val();
    var input_count_int = parseInt(input_count);
    var new_input_count = input_count_int - 1;
    $("#product_detail_count_edit").val(new_input_count);
    $("#detail_edit").children().last().remove();
  });
  //add input if click add
  $("#add_input_edit").click(function () {
    var input_count = $("#product_detail_count_edit").val();
    var input_count_int = parseInt(input_count);
    var new_input_count = input_count_int + 1;
    $("#product_detail_count_edit").val(new_input_count);
    $("#detail_edit").append(
      '<div class="row" style="padding-top:10px" id="' +
        new_input_count +
        '"><div class="col-4">' +
        '<label for="name">Detail name</label>' +
        '<input class="form-control" id="product_detail_name_edit_' +
        new_input_count +
        '" type="text" placeholder="Enter product detail name" required>' +
        "</div>" +
        '<div class="col-8">' +
        '<label for="name">Detail</label>' +
        '<input class="form-control" id="product_detail_value_edit_' +
        new_input_count +
        '" type="text" placeholder="Enter product detail " required>' +
        "</div>" +
        "</div>"
    );
  });
  //delete last input detail
  $("#delete_input").click(function () {
    var input_count = $("#product_detail_count").val();
    var input_count_int = parseInt(input_count);
    var new_input_count = input_count_int - 1;
    $("#product_detail_count").val(new_input_count);
    $("#detail").children().last().remove();
  });
  //show image preview
  $("#product_image").change(function () {
    //hidden button save change
    $("#btn_save_image").hide();
    //empty class casousel inner and indicator
    $(".carousel-indicators").empty();
    $(".carousel-inner").empty();
    let flag = false;
    let count = 0;

    Array.from(this.files).map(function (f) {
      {
        if (!f.type.match("image.*")) {
          {
            $.alert({
              title: "Error",
              type: "red",
              typeAnimated: true,
              content: "Please upload image only",
            });
            return;
          }
        }
        flag = true;
        var reader = new FileReader();
        reader.onload = function (e) {
          $(
            '<div class="carousel-item"><img src="' +
              e.target.result +
              '" id="c-item_' +
              f.name +
              '" width="450px" height="300px"></div>'
          ).appendTo(".carousel-inner");
          $(
            '<li data-target="#carousel_image_product" data-slide-to="' +
              count +
              '"></li>'
          ).appendTo(".carousel-indicators");
          count++;
          $(".carousel-item").first().addClass("active");
          $(".carousel-indicators > li").first().addClass("active");
          $(".carousel").carousel();
        };
        reader.readAsDataURL(f);
      }
      //show image preview modal
      if (flag == true) {
        //enable button preview image
        $("#btn-preview-image").removeAttr("disabled");
        $("#modal-product-image").modal("show");
      }
    });
    //set last image id
    $("#product_image_count").val(count);
  });
  //show image preview
  $("#product_image_add").change(function () {
    var last_image_id = $("#product_image_count").val();
    let flag = false;
    var count = 0;
    if (last_image_id != "" && last_image_id != "0") {
      count = parseInt(last_image_id);
    }
    Array.from(this.files).map(function (f) {
      {
        if (!f.type.match("image.*")) {
          {
            $.alert({
              title: "Error",
              type: "red",
              typeAnimated: true,
              content: "Please upload image only",
            });
            return;
          }
        }
        flag = true;
        var reader = new FileReader();
        reader.onload = function (e) {
          $(
            '<div class="carousel-item"><img src="' +
              e.target.result +
              '" id="c-item_' +
              f.name +
              '" width="450px" height="300px"></div>'
          ).appendTo(".carousel-inner");
          $(
            '<li data-target="#carousel_image_product" id"c-indi_' +
              f.name +
              '" data-slide-to="' +
              count +
              '"></li>'
          ).appendTo(".carousel-indicators");
          count++;
          $(".carousel").carousel();
        };
        reader.readAsDataURL(f);
      }
    });
    //set input
    var input_image = $("#product_image");
    var input_add_image = $("#product_image_add");
    const files_image = getFiles(input_image[0]);
    const files_add_image = getFiles(input_add_image[0]);
    //Add new image to input
    files_image.push(...files_add_image);
    //change input image
    input_image = setFiles(input_image[0], files_image);
    $("#product_image_count").val(count);
  });
  //delete current image
  $("#btn_delete_image").click(function () {
    var count = $("#product_image_count").val();

    //get current active image
    var current_image = $(".carousel-item.active img");
    //get current image id
    var current_image_id = current_image.attr("id");
    current_image_id = current_image_id.replace("c-item_", "");
    //get current input
    var input_image = $("#product_image");
    const files_image = getFiles(input_image[0]);
    const index = files_image.findIndex(
      (file) => file.name === current_image_id
    );
    //remove image from input
    files_image.splice(index, 1);
    //change input image
    input_image = setFiles(input_image[0], files_image);
    //remove carousel which active
    $(".carousel-item.active").remove();
    //remove indicator which active
    $(".carousel-indicators > li.active").remove();
    //set last image id
    $("#product_image_count").val(files_image.length);
    //set active image
    $(".carousel-item").first().addClass("active");
    $(".carousel-indicators > li").first().addClass("active");
    $(".carousel").carousel();
    $("#product_image_count").val(count - 1);
  });
  //change image
  $("#product_image_edit").change(function () {
    {
      //get file name and replace label
      if (!this.files[0].type.match("image.*")) {
        {
          $.alert({
            title: "Invalid file type",
            content: "Please select a valid image file",
            type: "red",
            typeAnimated: true,
            closeIcon: true,
            closeIconClass: "fa fa-close",
            closeBtnClass: "btn-danger",
            closeBtn: "Close",
            buttons: {
              close: {
                text: "Close",
                btnClass: "btn-danger",
              },
            },
          });
          $("#product_image_edit").val("");
          return;
        }
      }

      var old_name = $(".carousel-inner .active img").attr("id");
      var new_image = this.files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        $(".carousel-inner .active img").attr("src", e.target.result);
        //chaneg id image
        $(".carousel-inner .active img").attr(
          "id",
          "c-item_id_" + new_image.name
        );
        //change input image
        $(".carousel-indicators > li.active").attr(
          "id",
          "c-indi_" + new_image.name
        );
      };
      var input_image = $("#product_image");
      var input_edit_image = $("#product_image_edit");
      const files_image = getFiles(input_image[0]);
      const files_edit_image = getFiles(input_edit_image[0]);
      //get index of file name
      const index = files_image.findIndex((file) => file.name === old_name);
      //get index of image
      //remove image from input
      files_image.splice(index, 1);
      //Add new image to input
      files_image.push(files_edit_image[0]);
      //change input image
      input_image = setFiles(input_image[0], files_image);
      $(".carousel").carousel();
      reader.readAsDataURL(this.files[0]);
    }
  });

  function getFiles(input) {
    const files = new Array(input.files.length);
    for (let i = 0; i < input.files.length; i++) files[i] = input.files.item(i);
    return files;
  }

  function setFiles(input, files) {
    const dataTransfer = new DataTransfer();
    for (const file of files) dataTransfer.items.add(file);
    input.files = dataTransfer.files;
  }
  //end enit
  //start add product
  $("#btn_save").click(function () {
    //add class validate
    $("#form_product").addClass("was-validated");
    //get data
    var product_name = $("#product_name").val();
    var product_description = $("#product_description").val();
    var category_id = $("#category_id").find(":selected").val();
    var product_image = getFiles($("#product_image")[0]);
    var product_priority = $("#product_priority").val();
    var product_status = 0;
    if ($("#product_status").is(":checked")) {
      product_status = 1;
    }
    if (category_id == "0") {
      $.alert({
        title: "Error",
        type: "red",
        typeAnimated: true,
        content: "Please select category",
      });
      return;
    }
    if ((product_name == "", product_image == "")) {
      $.alert({
        title: "Error",
        type: "red",
        typeAnimated: true,
        content: "Please fill all fields",
      });
      return;
    }
    //get form detail form
    var product_detail = [];
    var product_detail_count = $("#product_detail_count").val();
    for (var i = 1; i <= product_detail_count; i++) {
      var product_detail_name = $("#product_detail_name_" + i).val();
      var product_detail_value = $("#product_detail_value_" + i).val();
      product_detail.push({
        product_detail_name: product_detail_name,
        product_detail_value: product_detail_value,
      });
    }
    //create form
    var formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_description", product_description);
    formData.append("category_id", category_id);
    formData.append("product_status", product_status);
    formData.append("function", "add_product");
    formData.append("product_priority", product_priority);
    formData.append("product_detail", JSON.stringify(product_detail));
    var product_image_count = 0;
    for (var i = 0; i < product_image.length; i++) {
      formData.append("product_image_" + i, product_image[i]);
      product_image_count++;
    }
    formData.append("product_image_count", product_image_count);

    //send data
    $.ajax({
      type: "POST",
      url: "../controllers/product_controller.php",
      data: formData,
      contentType: false,
      processData: false,
      success: function (data) {
        $("#btn-preview-image").attr("disabled", true);
        try {
          data = JSON.parse(data);
        } catch (e) {
          $.alert({
            title: "Alert!",
            content: "Something went wrong! reason : " + e,
            type: "red",
            typeAnimated: true,
            icon: "fa fa-exclamation-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-red",
              },
            },
          });
        }
        if (data.status == "1") {
          //clear form
          $("#product_name").val("");
          $("#product_description").val("");
          $("#product_image").val("");
          //disable button
          $("#product_priority").val("1");
          $("#product_detail_count").val("0");
          $("#detail").empty();
          $("#btn_preview_image").attr("disabled", true);
          $("#form_product").removeClass("was-validated");
          //reload table
          var startPos = document.body.scrollTop
          console.log(startPos)
          $("#table_product").DataTable().ajax.reload(() => {
            document.body.scrollTop = startPos;
           },false);
           document.body.scrollTop = startPos;
          //alert
          $.alert({
            title: "Success!",
            content: data.response,
            type: "green",
            typeAnimated: true,
            icon: "fa fa-check-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-green",
              },
            },
          });
        } else {
          //clear form
          $("#product_name").val("");
          $("#product_description").val("");
          $("#product_image").val(null);
          $("#product_priority").val("1");
          $("#product_detail_count").val("0");
          $("#detail").empty();
          $("#btn_preview_image").attr("disabled", true);
          $("#form_product").removeClass("was-validated");
          $.alert({
            title: "Error!",
            content: data.error,
            type: "red",
            typeAnimated: true,
            icon: "fa fa-exclamation-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-red",
              },
            },
          });
        }
      },
    });
  });
  //end start add product
  //start edit product

  $("#table_product").on("click", "button", function () {
    //get this row data
    var table = $("#table_product").DataTable();
    var data = table.row($(this).parents("tr")).data();
    //set blog id
    $("#product_id").val(data.product_id);
    //get clicked button
    var id = this.id;
    //split first underscore
    var id_split = id.split("_");
    if (id_split[0] == "edit") {
      $("#product_name_edit").val(data.product_name);
      $("#product_description_edit").val(data.product_description);
      $("#product_priority_edit").val(data.product_priority);
      if (data.product_status == "0") {
        $("#edit_product_status").prop("checked", false);
      } else {
        $("#edit_product_status").prop("checked", true);
      }
      $("#category_id_edit").val(data.category_id);
    }
    if (id_split[0] == "image") {
      product_image_delete = [];
      $.ajax({
        type: "POST",
        url: "../controllers/product_controller.php",
        data: {
          product_id: data.product_id,
          function: "get_image",
        },
        success: function (data) {
          try {
            data = $.parseJSON(data);
            //empty class casousel inner and indicator
            $("#carousel-indicators-edit").empty();
            $("#carousel-inner-edit").empty();

            let count = 0;
            var dataTransfer = new DataTransfer();
            for (let i = 0; i < data.length; i++) {
              let image_name = data[i].image_path.split("/");
              image_name = image_name[image_name.length - 1];
              let image_extension = image_name.split(".");
              image_extension =
                "image/" + image_extension[image_extension.length - 1];
              loadURLToInputFiled(
                data[i].image_path,
                image_name,
                image_extension,
                dataTransfer
              );
              //create carousel inner
              $(
                '<div class="carousel-item image_edit"><img src="' +
                  data[i].image_path +
                  '" data-name ="' +
                  data[i].product_image_id +
                  '" id="product_image_id_' +
                  image_name +
                  '" width="450px" height="300px"></div>'
              ).appendTo("#carousel-inner-edit");
              $(
                '<li data-target="#carousel_image_product" class="image_edit" data-slide-to="' +
                  count +
                  '"></li>'
              ).appendTo("#carousel-indicators-edit");
              count++;
            }
            $("#image_edit_count").val(count);
            $(".carousel-item.image_edit").first().addClass("active");
            $("#carousel-indicators-edit > li").first().addClass("active");
            $(".carousel").carousel();
            $("#modal-product-image-edit").modal("show");
          } catch ($e) {
            $.alert({
              title: "Alert!",
              content: "Something went wrong! reason : " + $e,
              type: "red",
              typeAnimated: true,
              icon: "fa fa-exclamation-circle",
              closeIcon: true,
              closeIconClass: "fa fa-close",
              autoClose: "ok|3000",
              animation: "zoom",
              closeAnimation: "zoom",
              animateFromElement: false,
              buttons: {
                ok: {
                  text: "OK",
                  btnClass: "btn-red",
                },
              },
            });
          }
        },
      });
    }
    if (id_split[0] == "detail") {
      $.ajax({
        type: "POST",
        url: "../controllers/product_controller.php",
        data: {
          product_id: data.product_id,
          function: "get_detail",
        },
        success: function (data) {
          try {
            data = $.parseJSON(data);
            $("#detail_edit").empty();
            $("#product_detail_count_edit").val(data.length);
            for (let i = 1; i <= data.length; i++) {
              $("#detail_edit").append(
                '<div class="row" style="padding-top:10px" id="product_detail_edit_' +
                  data[i - 1].product_detail_id +
                  '">' +
                  '<div class="col-4">' +
                  '<label for="name">Detail name</label>' +
                  '<input class="form-control" id="product_detail_name_edit_' +
                  i +
                  '" type="text" placeholder="Enter product detail name" value ="' +
                  data[i - 1].product_detail_name +
                  '" required>' +
                  "</div>" +
                  '<div class="col-8">' +
                  '<label for="name">Detail</label>' +
                  '<input class="form-control" id="product_detail_value_edit_' +
                  i +
                  '" type="text" placeholder="Enter product detail " value ="' +
                  data[i - 1].product_detail_value +
                  '" required>' +
                  "</div>" +
                  "</div>"
              );
            }
            $("#modal-product-detail").modal("show");
          } catch ($e) {
            $.alert({
              title: "Alert!",
              content: "Something went wrong! reason : " + $e,
              type: "red",
              typeAnimated: true,
              icon: "fa fa-exclamation-circle",
              closeIcon: true,
              closeIconClass: "fa fa-close",
              autoClose: "ok|3000",
              animation: "zoom",
              closeAnimation: "zoom",
              animateFromElement: false,
              buttons: {
                ok: {
                  text: "OK",
                  btnClass: "btn-red",
                },
              },
            });
          }
        },
      });
    }
  });
  function loadURLToInputFiled(url, name, ext, dataTransfer) {
    getImgURL(url, (imgBlob) => {
      // Load img blob to input
      // WIP: UTF8 character error
      let fileName = name;
      var file = new File(
        [imgBlob],
        fileName,
        { type: ext, lastModified: new Date().getTime() },
        "utf-8"
      );
      dataTransfer.items.add(file);
      document.querySelector("#image_edit").files = dataTransfer.files;
    });
  }
  // xmlHTTP return blob respond
  function getImgURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      callback(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }
  //add edit image
  $("#upload_image_edit").change(function () {
    //get file name and replace label
    if (!this.files[0].type.match("image.*")) {
      {
        $.alert({
          title: "Invalid file type",
          content: "Please select a valid image file",
          type: "red",
          typeAnimated: true,
          closeIcon: true,
          closeIconClass: "fa fa-close",
          closeBtnClass: "btn-danger",
          closeBtn: "Close",
          buttons: {
            close: {
              text: "Close",
              btnClass: "btn-danger",
            },
          },
        });
        $("#product_image_edit").val("");
        return;
      }
    }

    var old_name = $("#carousel-inner-edit .active img").attr("id");
    old_name = old_name.split("_")[3];
    var new_image = this.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#carousel-inner-edit .active img").attr("src", e.target.result);
      //chaneg id image
      $("#carousel-inner-edit .active img").attr(
        "id",
        "product_image_id_" + new_image.name
      );
      //change input image
    };
    var input_image = $("#image_edit");
    var input_edit_image = $("#upload_image_edit");
    const files_image = getFiles(input_image[0]);
    const files_edit_image = getFiles(input_edit_image[0]);
    //get index of file name
    const index = files_image.findIndex((file) => file.name === old_name);
    //get index of image
    //remove image from input
    files_image.splice(index, 1);
    //Add new image to input
    files_image.push(files_edit_image[0]);
    //change input image
    input_image = setFiles(input_image[0], files_image);
    $(".carousel").carousel();
    reader.readAsDataURL(this.files[0]);
  });

  $("#add_image_edit").change(function () {
    var count = $("#image_edit_count").val();
    Array.from(this.files).map(function (f) {
      {
        if (!f.type.match("image.*")) {
          {
            $.alert({
              title: "Error",
              type: "red",
              typeAnimated: true,
              content: "Please upload image only",
            });
            return;
          }
        }
        flag = true;
        var reader = new FileReader();
        reader.onload = function (e) {
          $(
            '<div class="carousel-item image_edit"><img src="' +
              e.target.result +
              '" id="product_image_id_' +
              f.name +
              '" width="450px" height="300px"></div>'
          ).appendTo("#carousel-inner-edit");
          $(
            '<li data-target="#carousel_image_product" class="image_edit" id"product_image_edit_' +
              f.name +
              '" data-slide-to="' +
              count +
              '"></li>'
          ).appendTo("#carousel-indicators-edit");
          count++;
          $(".carousel").carousel();
        };
        reader.readAsDataURL(f);
        count++;
      }
    });
    //set input
    var input_image = $("#image_edit");
    var input_add_image = $("#add_image_edit");
    const files_image = getFiles(input_image[0]);
    const files_add_image = getFiles(input_add_image[0]);
    //Add new image to input
    files_image.push(...files_add_image);
    //change input image
    input_image = setFiles(input_image[0], files_image);
    $("#image_edit_count").val(count);
  });
  //remove image
  $("#btn_delete_image_edit").click(function () {
    var count = $("#image_edit_count").val();
    var current_image = $(".carousel-item.image_edit.active img");
    var product_image_id = $(".carousel-item.image_edit.active img").attr(
      "data-name"
    );
    product_image_delete.push(product_image_id);
    //get current image id
    var current_image_id = current_image.attr("id");
    current_image_id = current_image_id.replace("product_image_edit_", "");
    //get current input
    var input_image = $("#image_edit");
    const files_image = getFiles(input_image[0]);
    const index = files_image.findIndex(
      (file) => file.name === current_image_id
    );
    //remove image from input
    files_image.splice(index, 1);
    //change input image
    input_image = setFiles(input_image[0], files_image);
    //remove carousel which active
    $(".carousel-item.image_edit.active").remove();
    //remove indicator which active
    $(".carousel-indicators > li.active").remove();
    //set last image id
    $("#product_image_count").val(files_image.length);
    //set active image
    $(".carousel-item.image_edit").first().addClass("active");
    $(".carousel-indicators.image_edit > li").first().addClass("active");
    $(".carousel").carousel();
    $("#image_edit_count").val(count - 1);
  });
  $("#btn_save_image_edit").click(function () {
    var formData = new FormData();
    var count = 0;
    var product_id = $("#product_id").val();
    var product_image = getFiles($("#image_edit")[0]);
    for (var i = 0; i < product_image.length; i++) {
      formData.append("product_image_" + i, product_image[i]);
      //get data attribute
      formData.append(
        "product_image_id_" + i,
        $("#product_image_id_" + $.escapeSelector(product_image[i].name)).attr(
          "data-name"
        )
      );
      count++;
    }
    formData.append("product_id", product_id);
    formData.append("product_image_count", count);
    formData.append("function", "save_image_edit");
    formData.append("product_image_delete", product_image_delete);
    $.ajax({
      url: "../controllers/product_controller.php",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (data) {
        $("#image_edit").val(null);
        try {
          data = JSON.parse(data);
        } catch (e) {
          $.alert({
            title: "Alert!",
            content: "Something went wrong! reason : " + e,
            type: "red",
            typeAnimated: true,
            icon: "fa fa-exclamation-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-red",
              },
            },
          });
        }
        if (data.status == "1") {
          $("#modal-product-image-edit").modal("hide");
          //alert
          $.alert({
            title: "Success!",
            content: data.response,
            type: "green",
            typeAnimated: true,
            icon: "fa fa-check-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-green",
              },
            },
          });
        } else {
          //clear form
          $.alert({
            title: "Error!",
            content: data.error,
            type: "red",
            typeAnimated: true,
            icon: "fa fa-exclamation-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-red",
              },
            },
          });
        }
      },
    });
  });

  $("#btn_save_product").click(function () {
    $("#form_product_edit").addClass("was-validated");
    var product_id = $("#product_id").val();
    var product_name = $("#product_name_edit").val();
    var product_description = $("#product_description_edit").val();
    var product_priority = $("#product_priority_edit").val();
    var category_id = $("#category_id_edit").find(":selected").val();
    var product_status = 0;
    if ($("#product_status_edit").is(":checked")) {
      product_status = 1;
    }
    if (category_id == "0") {
      $.alert({
        title: "Error",
        type: "red",
        typeAnimated: true,
        content: "Please select category",
      });
      return;
    }
    if ((product_name == "", product_priority == "")) {
      $.alert({
        title: "Error",
        type: "red",
        typeAnimated: true,
        content: "Please fill all fields",
      });
      return;
    }
    $.ajax({
      url: "../controllers/product_controller.php",
      type: "POST",
      data: {
        product_id: product_id,
        product_name: product_name,
        product_description: product_description,
        product_priority: product_priority,
        category_id: category_id,
        product_status: product_status,
        function: "save_product_edit",
      },
      success: function (data) {
        //remove validate class
        $("#form_product_edit").removeClass("was-validated");
        try {
          data = JSON.parse(data);
        } catch (e) {
          $.alert({
            title: "Alert!",
            content: "Something went wrong! reason : " + e,
            type: "red",
            typeAnimated: true,
            icon: "fa fa-exclamation-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-red",
              },
            },
          });
        }
        if (data.status == "1") {
          $("#modal-product").modal("hide");
          var startPos = document.body.scrollTop
          $("#table_product").DataTable().ajax.reload(() => {
            document.body.scrollTop = startPos; 
           },false);
          $.alert({
            title: "Success!",
            content: data.response,
            type: "green",
            typeAnimated: true,
            icon: "fa fa-check-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-green",
              },
            },
          });
        } else {
          //clear form
          $.alert({
            title: "Error!",
            content: data.error,
            type: "red",
            typeAnimated: true,
            icon: "fa fa-exclamation-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-red",
              },
            },
          });
        }
      },
    });
  });

  $("#btn_delete_product").click(function () {
    var product_id = $("#product_id").val();
    //alert confirm
    $.alert({
      title: "Confirm!",
      content: "Are you sure you want to delete this product ?",
      type: "red",
      typeAnimated: true,
      icon: "fa fa-exclamation-circle",
      closeIcon: true,
      closeIconClass: "fa fa-close",
      animation: "zoom",
      closeAnimation: "zoom",
      animateFromElement: false,
      buttons: {
        ok: {
          text: "OK",
          btnClass: "btn-red",
          action: function () {
            $.ajax({
              url: "../controllers/product_controller.php",
              type: "POST",
              data: {
                product_id: product_id,
                function: "delete_product",
              },
              success: function (data) {
                try {
                  data = JSON.parse(data);
                } catch (e) {
                  $.alert({
                    title: "Alert!",
                    content: "Something went wrong! reason : " + e,
                    type: "red",
                    typeAnimated: true,
                    icon: "fa fa-exclamation-circle",
                    closeIcon: true,
                    closeIconClass: "fa fa-close",
                    autoClose: "ok|3000",
                    animation: "zoom",
                    closeAnimation: "zoom",
                    animateFromElement: false,
                    buttons: {
                      ok: {
                        text: "OK",
                        btnClass: "btn-red",
                      },
                    },
                  });
                }
                if (data.status == "1") {
                  $("#table_product").DataTable().ajax.reload();
                  $("#modal-product").modal("hide");
                  //alert
                  $.alert({
                    title: "Success!",
                    content: data.response,
                    type: "green",
                    typeAnimated: true,
                    icon: "fa fa-check-circle",
                    closeIcon: true,
                    closeIconClass: "fa fa-close",
                    autoClose: "ok|3000",
                    animation: "zoom",
                    closeAnimation: "zoom",
                    animateFromElement: false,
                    buttons: {
                      ok: {
                        text: "OK",
                        btnClass: "btn-green",
                      },
                    },
                  });
                } else {
                  //clear form
                  $.alert({
                    title: "Error!",
                    content: data.error,
                    type: "red",
                    typeAnimated: true,
                    icon: "fa fa-exclamation-circle",
                    closeIcon: true,
                    closeIconClass: "fa fa-close",
                    autoClose: "ok|3000",
                    animation: "zoom",
                    closeAnimation: "zoom",
                    animateFromElement: false,
                    buttons: {
                      ok: {
                        text: "OK",
                        btnClass: "btn-red",
                      },
                    },
                  });
                }
              },
            });
          },
        },
        cancel: {
          text: "Cancel",
          btnClass: "btn-blue",
        },
      },
    });
  });
  $("#btn_save_detail").click(function (e) {
    e.preventDefault();

    var product_detail = [];
    var product_detail_count = $("#product_detail_count_edit").val();
    for (var i = 1; i <= product_detail_count; i++) {
      var product_detail_name = $("#product_detail_name_edit_" + i).val();
      var product_detail_value = $("#product_detail_value_edit_" + i).val();
      if (product_detail_name == "" || product_detail_value == "") {
        $.alert({
          title: "Error!",
          content: "Please fill all detail",
          type: "red",
          typeAnimated: true,
          icon: "fa fa-exclamation-circle",
          closeIcon: true,
          closeIconClass: "fa fa-close",
          animation: "zoom",
          closeAnimation: "zoom",
          animateFromElement: false,
          buttons: {
            ok: {
              text: "OK",
              btnClass: "btn-red",
            },
          },
        });
        return;
      }
      product_detail.push({
        product_detail_name: product_detail_name,
        product_detail_value: product_detail_value,
      });
    }
    var product_id = $("#product_id").val();
    $.ajax({
      url: "../controllers/product_controller.php",
      type: "POST",
      data: {
        product_id: product_id,
        product_detail: product_detail,
        function: "save_detail",
      },
      success: function (data) {
        console.log(data);
        try {
          data = JSON.parse(data);
        } catch (e) {
          $.alert({
            title: "Alert!",
            content: "Something went wrong! reason : " + e,
            type: "red",
            typeAnimated: true,
            icon: "fa fa-exclamation-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-red",
              },
            },
          });
        }
        if (data.status == "1") {
          $("#modal-product-detail").modal("hide");
          //alert
          $.alert({
            title: "Success!",
            content: data.response,
            type: "green",
            typeAnimated: true,
            icon: "fa fa-check-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-green",
              },
            },
          })
        } else {
          //clear form
          $.alert({
            title: "Error!",
            content: data.error,
            type: "red",
            typeAnimated: true,
            icon: "fa fa-exclamation-circle",
            closeIcon: true,
            closeIconClass: "fa fa-close",
            autoClose: "ok|3000",
            animation: "zoom",
            closeAnimation: "zoom",
            animateFromElement: false,
            buttons: {
              ok: {
                text: "OK",
                btnClass: "btn-red",
              },
            },
          });
        }
      },
    });
  });
  //end edit product
});
