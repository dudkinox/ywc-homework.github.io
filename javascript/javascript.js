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

      function alerts(){
        alert("ชื่อคนทำเองค้าบ");
      }
      function local(){
        alert("function นี้ยังไม่ว่างทำจ้า ติดงานบริษัท");
      }
      function createNode(element){ // สร้าง element
        return document.createElement(element);
      }
      function append(parent, el){ // เอาไปเชื่อม html
        return parent.appendChild(el);
      }
      function show(key,authors){
        var states = "";var num = 0;
              var open_or_close = "";
                for (var loop = 0;loop < authors.length; loop++){
                  if(authors[loop].subcategoryName[loop] == key[loop]){
                      open_or_close = authors[loop].isOpen;
                      if (open_or_close == "Y"){
                        states = "ร้านเปิดอยู่";
                      }else if(open_or_close == "N/A"){
                        states = "N/A ร้านไม่มีวันปิดมั้ง";
                      }
                      else{
                        states = "ร้านปิด";
                      }
                      
                      store.innerHTML += '<div class = "col-4 col-12-medium"><div class="col-4 col-12-medium"><section class="box feature"><a href="#" class="image featured"><figure class="snip1512"><img height = "400px" src = "'+authors[loop].coverImageId+'" alt="" /><figcaption><h3>'+states+'</h3><p>ความคุ้มค่าระดับ : '+authors[loop].priceLevel+'</p></h3></figcaption><i class="ion-plus"></i></figure></a><div class="inner"><header><h2>'+authors[loop].shopNameTH+'</h2><p>'+authors[loop].highlightText+'</p></header><p>'+authors[loop].subcategoryName + '<br>ประเภท : ' + authors[loop].categoryName + '<br>ตำแหน่ง : ' + authors[loop].addressProvinceName + ' ' + authors[loop].addressDistrictName+'<br><b>ราคา :</b> '+authors[loop].price+' บาท</p></div></section></div>';
                    }else if(key == "all"){
                      open_or_close = authors[loop].isOpen;
                      if (open_or_close == "Y"){
                        states = "ร้านเปิดอยู่";
                      }else if(open_or_close == "N/A"){
                        states = "N/A ร้านไม่มีวันปิดมั้ง";
                      }
                      else{
                        states = "ร้านปิด";
                      }
                    
                      store.innerHTML += '<div class = "col-4 col-12-medium"><div class="col-4 col-12-medium"><section class="box feature"><a href="#" class="image featured"><figure class="snip1512"><img height = "400px" src = "'+authors[loop].coverImageId+'" alt="" /><figcaption><h3>'+states+'</h3><p>ความคุ้มค่าระดับ : '+authors[loop].priceLevel+'</p></h3></figcaption><i class="ion-plus"></i></figure></a><div class="inner"><header><h2>'+authors[loop].shopNameTH+'</h2><p>'+authors[loop].highlightText+'</p></header><p>'+authors[loop].subcategoryName + '<br>ประเภท : ' + authors[loop].categoryName + '<br>ตำแหน่ง : ' + authors[loop].addressProvinceName + ' ' + authors[loop].addressDistrictName+'<br><b>ราคา :</b> '+authors[loop].price+' บาท</p></div></section></div>';
                      
                    }
                }
          }
      function loop(authors_type, r, authors){
        let subcategories = authors_type[r].subcategories;
                    for (var r2 = 0;r2 < subcategories.length; r2++){
                      let type_store = authors_type[r].subcategories[r2];
                      console.log(type_store);
                      show(type_store,authors);
                    }
      }
      function datas(key){
        
        fetch(url) //ดึงข้อมูล
          .then((res) => res.json()) //แปลง js => json
          .then(function(data) {
            console.log(data); //print console
            let authors = data.merchants;
               //pointer merchants
              return authors.map(function(author) {
              if(key == "all"){
                show(key,authors);
               }
              else{
                let authors_type = data.categories;
                let type_store = "";
                let subcategories = "";
                for (var r = 0;r < authors_type.length; r++){
                  if(key == authors_type[r].name){
                    loop(authors_type, r, authors);
                  }else if(key == authors_type[r].name){
                    loop(authors_type, r, authors);
                  }else if(key == authors_type[r].name){
                    loop(authors_type, r, authors);
                  }else if(key == authors_type[r].name){
                    loop(authors_type, r, authors);
                  }
                }
              }
            })
          }).catch(function(error) {
            console.log(error);
          });
      }
      function check_price(){
        var choice_price = document.getElementById("choice_price").value;
        var sID = 0;
        if(choice_price == ">= 100"){
          window.location.href = "?id=1";
          sID = 1;
          datas(sID);
        }else if(choice_price == "<= 300"){
          window.location.href = "?id=2";
          sID = 2;
          datas(sID);
        }else if(choice_price == "<= 600"){
          window.location.href = "?id=3";
          sID = 3;
          datas(sID);
        }else{
          window.location.href = "?id=4";
          sID = 4;
          datas(sID);
        }
      }