

  function add_to_cart(item_id,quantity){
   // console.log(item_id +"/ Quantity = "+ quantity);
    let formData = {
        'items': [{
         'id': item_id,
         'quantity': quantity
         }]
       };
       
       fetch(window.Shopify.routes.root + 'cart/add.js', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
       })
       .then(response => {
        $('.offcanvas-body').load(document.URL +  ' .offcanvas-body');
        $(".cartcount").load(document.URL+ ' .cartcount'); 
        return response.json();

       })
       .catch((error) => {
         console.error('Error:', error);
       });

    
 


  }

  function update_quantity(item_id,quantity){
    
    
      
      fetch(window.Shopify.routes.root + 'cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            'id': item_id,
            'quantity': quantity
          })
      })
      .then(response => {
        $('.offcanvas-body').load(document.URL +  ' .offcanvas-body');
        $(".cartcount").load(document.URL+ ' .cartcount');  
        return response.json();
      })
      .catch((error) => {
        console.error('Error:', error);
      });




  }