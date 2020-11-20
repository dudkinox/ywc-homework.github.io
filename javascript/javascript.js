      function createNode(element){ // สร้าง element
        return document.createElement(element);
      }
      function append(parent, el){ // เอาไปเชื่อม html
        return parent.appendChild(el);
      }
      const ul = document.getElementById("topic"); // id ที่นำไปแสดง
      const img_id = document.getElementById("img_api");
      const name_api = document.getElementById("name_api");
      const detail = document.getElementById("detail");
      const detail_2 = document.getElementById("detail_2");
      // const state = document.getElementById("state");
      // const priceLevel = document.getElementById("priceLevel");
      const store = document.getElementById("store");
      const url = "myJSON.js"; // url api json offline
      const url_online = "https://panjs.com/ywc18.json";
      
      fetch(url) //ดึงข้อมูล
      .then((res) => res.json()) //แปลง js => json
      .then(function(data) {
        console.log(data); //print console
        let authors = data.merchants; //pointer merchants
        return authors.map(function(author) {
          var states = "";
          var open_or_close = "";
          for (var round = 0;round < 5;round++){
              open_or_close = authors[round].isOpen;
              if (open_or_close == "Y"){
                states = "ร้านเปิดอยู่";
              }else if(open_or_close == "N/A"){
                states = "N/A ร้านไม่มีวันปิดมั้ง";
              }
              else{
                states = "ร้านปิด";
              }
              store.innerHTML += '<div class = "col-4 col-12-medium"><div class="col-4 col-12-medium"><section class="box feature"><a href="#" class="image featured"><figure class="snip1512"><img height = "400px" src = "'+authors[round].coverImageId+'" alt="" /><figcaption><h3>'+states+'</h3><p>ความคุ้มค่าระดับ : '+authors[round].priceLevel+'</p></h3></figcaption><i class="ion-plus"></i></figure></a><div class="inner"><header><h2>'+authors[round].shopNameTH+'</h2><p>'+authors[round].highlightText+'</p></header><p>'+authors[round].subcategoryName + '<br>ประเภท : ' + authors[round].categoryName + '<br>ตำแหน่ง : ' + authors[round].addressProvinceName + ' ' + authors[round].addressDistrictName+'</p></div></section></div>';
          }
          
        })
      }).catch(function(error) {
        console.log(error);
      });